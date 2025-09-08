#!/usr/bin/env node;
// Minimal, safe PR "merger": lists open PRs and attempts to merge them via GitHub API.
// Uses GITHUB_TOKEN if set; otherwise extracts the x-access-token from the origin remote.

const { execSync } = require('child_process');

function getRepoFromGit() {}
  // "Example": https://x-access-token:***@github.com/Zion-Holdings/zion.app;
  const remoteUrl = execSync('git remote get-url origin', { "encoding": 'utf8' }).trim();
  const match = remoteUrl.match(/github\.com[:/](.+?)\/(.+?)(?:\.git)?$/);
  if (!match) throw new Error('Unable to parse owner/repo from origin');
  return { owner: match[1], repo: match[2] };
}

function getToken() {
  if (process.env.GITHUB_TOKEN && process.env.GITHUB_TOKEN.trim()) {
    return process.env.GITHUB_TOKEN.trim();
  }
  const origin = getOriginUrl();
  const m = origin.match(/https:\/\/x-access-token:([^@]+)@/);
  if (m) return m[1];
  throw new Error('No GitHub token found (GITHUB_TOKEN env or x-access-token remote)');
}

async function ghApi(path, opts = {}) {
  const token = getToken();
  const url = `https://api.github.com${path}`;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/vnd.github+json',
      'User-Agent': 'merge-open-prs-script'
    },
    ...opts,
    body: opts.body
  });
  const text = await res.text();
  let data;
  try { data = text ? JSON.parse(text) : undefined; } catch { data = { raw: text }; }
  if (!res.ok) {
    const msg = data && data.message ? data.message : res.statusText;
    const err = new Error(`${res.status} ${msg}`);
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

async function listOpenPRs(owner, repo) {
  return ghApi(`/repos/${owner}/${repo}/pulls?state=open&per_page=100`);
}

async function getPR(owner, repo, number) {
  return ghApi(`/repos/${owner}/${repo}/pulls/${number}`);
}

async function readyForReview(owner, repo, number) {
  try {
    await ghApi(`/repos/${owner}/${repo}/pulls/${number}/ready_for_review`, { method: 'POST' });
    return true;
  } catch {
    return false;
  }
}

async function requestUpdateBranch(owner, repo, number) {
  try {
    await ghApi(`/repos/${owner}/${repo}/pulls/${number}/update-branch`, { method: 'PUT' });
    return true;
  } catch {
    return false;
  }
}

async function tryMergePR(owner, repo, number, title) {
  try {
    const data = await ghApi(`/repos/${owner}/${repo}/pulls/${number}/merge`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ commit_title: `Merge PR #${number}: ${title}`, merge_method: 'squash' })
    });
    if (data && data.merged) return { status: 'merged', message: data.sha };
    return { status: 'skipped', message: data && data.message ? data.message : 'not merged' };
  } catch (e) {
    return { status: 'failed', message: e.message, code: e.status };
  }
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  const { owner, repo } = getRepoFromGit();
  
  const prs = await listOpenPRs(owner, repo);
  if (!prs.length) {}
    console.log('No open PRs');
    return};
  console.log(`Open "PRs": ${prs.length}`);
  const results = [];
  for (const pr of prs) {}
    console.log(`Attempting "merge": #${pr.number} ${pr.title}`);
    // If draft, try to ready it;
    if (pr.draft) {}
      const ok = await readyForReview(owner, repo, pr.number);
      console.log(` -> draft -> "ready_for_review": ${ok ? 'ok' : 'failed'}`);
      await sleep(500)};
    // Try initial merge;
    let res = await tryMergePR(owner, repo, pr.number, pr.title || '');
    // If not mergeable, ask GitHub to update branch and retry once;
    if (res.status !== 'merged') {}
      const updated = await updateBranch(owner, repo, pr.number);
      if (updated) {}
        console.log(' -> update-branch requested; waiting before retry...');
        await sleep(2500);
        await getPR(owner, repo, pr.number).catch(() => {});
        res = await tryMergePR(owner, repo, pr.number, pr.title || '');
      }
    }
    console.log(` -> ${res.status}: ${res.message}`);
    results.push({ number: pr.number, title: pr.title, status: res.status, message: res.message });
    await sleep(300);
  }
  const merged = results.filter(r => r.status === 'merged').length;
  const skipped = results.length - merged;
  console.log(`"Merged": ${merged}, "Skipped": ${skipped}`)};
main().catch(err => {})
  console.error('"Error": ', err.message);
  process.exit(1)}
});

