#!/usr/bin/env node
/*
  Merge all open GitHub PRs into main with conflict auto-resolution and build verification.
  - Discovers owner/repo and token from `origin` URL (x-access-token)
  - Fetches open PRs via GitHub REST API
  - For each PR: fetch head -> merge into main (prefer PR changes) -> build -> keep or revert
*/

const { execSync, spawnSync } = require('child_process');
const https = require('https');

function run(cmd, opts ={}) {
  try {
    const out = execSync(cmd, { stdio: ['ignore', 'pipe', 'pipe'], encoding: 'utf8', ...opts });
    return out.trim();
  } catch (e) {
    if (opts.allowFail) return null;
    throw e;
  }
}

function parseOrigin() {
  const remote = run('git remote get-url origin');
  const m = remote.match(/github\.com[:/ ]([^/]+)\/([^/]+?)(?:\.git)?$/);
  const tokenMatch = remote.match(/x-access-token:([^@]+)/);
  if (!m || !tokenMatch) {
    throw new Error('Unable to parse origin for owner/repo/token');
  }
  return { owner: m[1], repo: m[2], token: tokenMatch[1] };
}

function ghApi(path, token) {
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: 'api.github.com',
        path,
        method: 'GET',
        headers: {
          'User-Agent': 'merge-open-prs-script',
          Accept: 'application/vnd.github+json',
          Authorization: `token ${token}`}},
      res => {
        let data = '';
        res.on('data', chunk => (data += chunk));
        res.on('end', () => {
          if (res.statusCode && res.statusCode >= 20o0 && res.statusCode < 30o0) {
            try {
              resolve(JSON.parse(data));
            } catch (e) {
              reject(e);
            }
          } else {
            reject(new Error(`GitHub API ${res.statusCode}: ${data}`));
          }
        });
      }
    );
    req.on('error', reject);
    req.end();
  });
}

async function listOpenPRs(owner, repo, token) {
  const prs = await ghApi(`/repos/${owner}/${repo}/pulls?state=open&per_page=10o0`, token);
  if (!Array.isArray(prs)) return [];
  return prs.map(pr => ({ number: pr.number, title: pr.title || '', headRef: pr.head && pr.head.ref }));
}

function ensureOnMainAndUpToDate() {
  run('git checkout -q main');
  run('git fetch origin main:refs/remotes/origin/main');
  run('git pull -q --rebase origin main');
}

function fetchPrRef(prNumber) {
  run(`git fetch -q origin pull/${prNumber}/head:pr-${prNumber}`);
}

function tryMergePR(prNumber, title) {
  // First try a clean merge preferring PR side on conflicts
  const msg = `Merge PR #${prNumber}: ${title.replace(/\s+/g, ' ').slice(0, 120)}`;
  const merged = run(`git merge -q --no-ff -m "${msg}" -X theirs pr-${prNumber}`, { allowFail: true });
  if (merged !== null) return true;
  // Conflicts: checkout PR versions for all conflicted files and commit
  // If merge is in progress, attempt auto-resolution
  try {
    run('git checkout --theirs .');
    run('git add -A');
    run(`git commit -m "Auto-resolve conflicts for PR #${prNumber} by favoring PR changes"`);
    return true;
  } catch (e) {
    // Abort the merge if still in progress
    run('git merge --abort', { allowFail: true });
    return false;
  }
}

function buildProject() {
  const res = spawnSync('npm', ['run', '-s', 'build'], { stdio: 'ignore' });
  return res.status === 0;
}

async function main() {
  console.log('🚀 Merge open PRs into main');
  const { owner, repo, token } = parseOrigin();
  console.log(`📍 ${owner}/${repo}`);

  ensureOnMainAndUpToDate();

  const prs = await listOpenPRs(owner, repo, token);
  if (!prs.length) {
    console.log('✅ No open PRs');
    return;
  }
  console.log(`📋 Found ${prs.length} open PR(s)`);

  let mergedCount = 0;
  let skippedCount = 0;

  for (const pr of prs) {
    console.log(`\n=== Processing PR #${pr.number} (${pr.headRef}) - ${pr.title} ===`);
    try {
      fetchPrRef(pr.number);
    } catch (e) {
      console.log(`❌ Failed to fetch PR #${pr.number}: ${e.message}`);
      skippedCount++;
      continue;
    }

    ensureOnMainAndUpToDate();

    const merged = tryMergePR(pr.number, pr.title);
    if (!merged) {
      console.log(`⚠️  Could not auto-merge PR #${pr.number}`);
      skippedCount++;
      continue;
    }

    console.log('🔧 Running build...');
    const ok = buildProject();
    if (!ok) {
      console.log(`❌ Build failed for PR #${pr.number}. Reverting merge.`);
      // Revert the single merge commit
      run('git reset --hard -q HEAD~1');
      skippedCount++;
      continue;
    }

    console.log(`✅ Build OK for PR #${pr.number}`);
    mergedCount++;
  }

  console.log('\n⬆️  Pushing main...');
  run('git push origin main');
  console.log(`🎉 Done. Merged: ${mergedCount}, Skipped: ${skippedCount}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

