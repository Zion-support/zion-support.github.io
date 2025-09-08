#!/usr/bin/env node
const { execSync } = require('child_process');

function sh(cmd) {
  return execSync(cmd, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
}

function getRepoFromGit() {
  const remoteUrl = sh('git remote get-url origin').trim();
  const m = remoteUrl.match(/github\.com[:/](.+?)\/(.+?)(?:\.git)?$/);
  if (!m) throw new Error('Unable to parse owner/repo');
  return { owner: m[1], repo: m[2] };
}

function getToken() {
  if (process.env.GITHUB_TOKEN && process.env.GITHUB_TOKEN.trim()) return process.env.GITHUB_TOKEN.trim();
  const remoteUrl = sh('git remote get-url origin').trim();
  const m = remoteUrl.match(/x-access-token:([^@]+)@/);
  if (m) return m[1];
  throw new Error('No token');
}

async function gh(path) {
  const token = getToken();
  const res = await fetch(`https://api.github.com${path}`, {
    headers: {
      authorization: `Bearer ${token}`,
      accept: 'application/vnd.github+json',
      'user-agent': 'local-merge-script'
    }
  });
  const text = await res.text();
  try { return text ? JSON.parse(text) : undefined } catch { return { raw: text } }
}

async function main() {
  const { owner, repo } = getRepoFromGit();
  const prs = await gh(`/repos/${owner}/${repo}/pulls?state=open&per_page=100`);
  if (!Array.isArray(prs) || prs.length === 0) {
    console.log('No open PRs');
    return;
  }
  console.log(`Open PRs: ${prs.length}`);
  // Ensure on main and up to date
  sh('git checkout main');
  sh('git fetch origin main');
  sh('git reset --hard origin/main');

  let merged = 0, skipped = 0;
  for (const pr of prs) {
    const head = pr.head && pr.head.ref;
    if (!head) { skipped++; continue }
    console.log(`\nMerging PR #${pr.number} from ${head}: ${pr.title}`);
    try {
      sh(`git fetch origin ${head}`);
      // Try merge preferring PR changes (theirs) to reduce conflicts
      try {
        sh(`git merge --no-ff -X theirs origin/${head} -m "Merge PR #${pr.number}: ${pr.title.replace(/"/g, '\\"')}"`);
      } catch (e) {
        // Resolve remaining conflicts by taking theirs for all files
        console.log('Conflicts detected, resolving with theirs for all files...');
        try { sh('git checkout --theirs .'); } catch {}
        sh('git add -A');
        sh(`git commit -m "Merge PR #${pr.number}: ${pr.title.replace(/"/g, '\\"')} (resolved conflicts preferring PR changes)"`);
      }
      merged++;
    } catch (e) {
      console.log(`Skip PR #${pr.number}: ${e.message}`);
      try { sh('git merge --abort'); } catch {}
      skipped++;
    }
  }

  // Push updated main
  sh('git push origin main');
  console.log(`\nSummary -> Merged: ${merged}, Skipped: ${skipped}`);
}

main().catch(e => { console.error(e); process.exit(1); });

