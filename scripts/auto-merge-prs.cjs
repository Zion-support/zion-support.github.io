#!/usr/bin/env node
const { execSync, spawnSync } = require('child_process');

function run(cmd) {
  return execSync(cmd, { stdio: 'pipe', encoding: 'utf8' }).trim();
}

function safeRun(cmd) {
  try { return { ok: true, out: run(cmd) }; } catch (e) { return { ok: false, err: e }; }
}

function getRepoFromGit() {
  const remoteUrl = run('git remote get-url origin');
  const match = remoteUrl.match(/github\.com[:/](.+?)\/(.+?)(?:\.git)?$/);
  if (!match) throw new Error('Unable to parse owner/repo from origin');
  return { owner: match[1], repo: match[2] };
}

function getToken() {
  if (process.env.GITHUB_TOKEN && process.env.GITHUB_TOKEN.trim()) {
    return process.env.GITHUB_TOKEN.trim();
  }
  const remoteUrl = run('git remote get-url origin');
  const tokenMatch = remoteUrl.match(/^https:\/\/x-access-token:([^@]+)@github\.com\//);
  if (!tokenMatch) throw new Error('No GitHub token found in env or origin remote');
  return tokenMatch[1];
}

async function gh(path) {
  const token = getToken();
  const res = await fetch(`https://api.github.com${path}`, {
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'auto-merge-prs-script'
    }
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status}`);
  return res.json();
}

async function getOpenPRs(owner, repo) {
  const prs = await gh(`/repos/${owner}/${repo}/pulls?state=open&per_page=100`);
  return prs || [];
}

function ensureOnMain() {
  run('git fetch origin main');
  run('git checkout main');
  run('git pull --ff-only origin main');
}

function tryMergePR(number, headRef) {
  const localBranch = `pr-${number}`;
  const fetchRes = safeRun(`git fetch origin pull/${number}/head:${localBranch}`);
  if (!fetchRes.ok) return { number, merged: false, reason: 'fetch_failed' };

  // First attempt: normal merge
  let mergeRes = spawnSync('bash', ['-lc', `git merge ${localBranch} --no-edit`], { encoding: 'utf8' });
  if (mergeRes.status === 0) {
    run(`git branch -D ${localBranch}`);
    return { number, merged: true };
  }
  // Abort and attempt with -X theirs (favor PR changes)
  safeRun('git merge --abort');
  mergeRes = spawnSync('bash', ['-lc', `git merge ${localBranch} --no-edit -X theirs`], { encoding: 'utf8' });
  if (mergeRes.status === 0) {
    run(`git branch -D ${localBranch}`);
    return { number, merged: true, strategy: 'theirs' };
  }
  // Abort and attempt with -X ours (favor main)
  safeRun('git merge --abort');
  mergeRes = spawnSync('bash', ['-lc', `git merge ${localBranch} --no-edit -X ours`], { encoding: 'utf8' });
  if (mergeRes.status === 0) {
    run(`git branch -D ${localBranch}`);
    return { number, merged: true, strategy: 'ours' };
  }
  // Final abort and cleanup
  safeRun('git merge --abort');
  safeRun(`git branch -D ${localBranch}`);
  return { number, merged: false, reason: 'conflicts' };
}

(async function main() {
  const { owner, repo } = getRepoFromGit();
  console.log(`📂 Repository: ${owner}/${repo}`);
  ensureOnMain();
  const prs = await getOpenPRs(owner, repo);
  console.log(`📋 Open PRs: ${prs.length}`);
  let mergedCount = 0;
  const results = [];
  for (const pr of prs) {
    console.log(`\n🔄 Trying PR #${pr.number}: ${pr.title}`);
    const res = tryMergePR(pr.number, pr.head && pr.head.ref);
    results.push(res);
    if (res.merged) {
      mergedCount += 1;
      console.log(`   ✅ Merged (strategy: ${res.strategy || 'normal'})`);
    } else {
      console.log(`   ❌ Skipped (${res.reason})`);
    }
  }
  if (mergedCount > 0) {
    console.log(`\n⬆️  Pushing ${mergedCount} merge commit(s) to origin/main`);
    run('git push origin main');
  } else {
    console.log('\nℹ️  No PRs merged');
  }
  console.log('\nSummary:', JSON.stringify(results, null, 2));
})();

