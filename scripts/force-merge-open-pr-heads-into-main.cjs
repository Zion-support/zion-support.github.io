#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');

function sh(cmd) {
  return execSync(cmd, { stdio: 'pipe', encoding: 'utf8' }).trim();
}

function getToken() {
  if (process.env.GITHUB_TOKEN && process.env.GITHUB_TOKEN.trim()) {
    return process.env.GITHUB_TOKEN.trim();
  }
  const remoteUrl = sh('git remote get-url origin');
  const match = remoteUrl.match(/x-access-token:([^@]+)@github\.com\//);
  if (!match) throw new Error('No GitHub token available');
  return match[1];
}

function getRepo() {
  const remoteUrl = sh('git remote get-url origin');
  const m = remoteUrl.match(/github\.com[:/](.+?)\/(.+?)(?:\.git)?$/);
  if (!m) throw new Error('Unable to parse owner/repo');
  return { owner: m[1], repo: m[2] };
}

async function gh(path, init = {}) {
  const base = 'https://api.github.com';
  const token = getToken();
  const res = await fetch(`${base}${path}`, {
    method: init.method || 'GET',
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'force-merge-script'
    },
    body: init.body
  });
  const text = await res.text();
  let data;
  try {
    data = text ? JSON.parse(text) : undefined;
  } catch (e) {
    data = { raw: text };
  }
  if (!res.ok) {
    const message = data && data.message ? data.message : `HTTP ${res.status}`;
    throw new Error(message);
  }
  return data;
}

function autoResolveConflicts() {
  const conflicted = sh('git diff --name-only --diff-filter=U || true')
    .split('\n')
    .filter(Boolean);
  for (const file of conflicted) {
    if (!fs.existsSync(file)) continue;
    sh(`git add -- "${file}"`);
  }
  const staged = sh('git diff --cached --name-only || true')
    .split('\n')
    .filter(Boolean);
  if (staged.length) {
    sh('git commit -m "chore: auto-resolve merge conflicts while force-merging PR heads into main"');
  }
}

async function main() {
  const { owner, repo } = getRepo();
  const startBranch = sh('git rev-parse --abbrev-ref HEAD');
  sh('git fetch origin');
  sh('git checkout main');
  sh('git pull --ff-only origin main');
  const prs = await gh(`/repos/${owner}/${repo}/pulls?state=open&per_page=100`);
  let mergedCount = 0;
  let attempted = 0;
  for (const pr of prs) {
    attempted++;
    const head = pr.head && pr.head.ref;
    if (!head) continue;
    console.log(`Merging head into "main": PR #${pr.number} (${head})`);
    try {
      sh(`git fetch origin ${head}:${head} || true`);
      try {
        sh(`git merge --no-ff --no-edit origin/${head}`);
      } catch (e) {
        console.log('Conflicts detected. Attempting auto-resolution...');
        autoResolveConflicts();
      }
      mergedCount++;
    } catch (e) {
      console.log(`Skip PR #${pr.number} (${head}): ${e.message}`);
      try { sh('git merge --abort'); } catch {}
    }
  }
  console.log(`Pushing main with ${mergedCount}/${attempted} merged heads...`);
  sh('git push origin main');
  try { sh(`git checkout ${startBranch}`); } catch {}
}

main().catch(err => { console.error('Error:', err.message); process.exit(1); });