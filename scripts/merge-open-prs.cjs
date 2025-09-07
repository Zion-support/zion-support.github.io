#!/usr/bin/env node
const { execSync } = require('child_process');
const https = require('https');

function sh(command, opts = {}) {
  return execSync(command, { stdio: 'pipe', encoding: 'utf8', ...opts }).trim();
}

function getOwnerRepo() {
  const remoteUrl = sh('git remote get-url origin');
  const m = remoteUrl.match(/github\.com[:/](.+?)\/(.+?)(?:\.git)?$/);
  if (!m) throw new Error('Unable to parse owner/repo from origin');
  return { owner: m[1], repo: m[2] };
}

function getToken() {
  const env = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (env && env.trim()) return env.trim();
  // Try to parse token from origin URL if present
  const remoteUrl = sh('git remote get-url origin');
  const tm = remoteUrl.match(/^https:\/\/x-access-token:([^@]+)@github\.com\//);
  if (tm) return tm[1];
  return null;
}

function githubRequest(path, token) {
  const options = {
    hostname: 'api.github.com',
    path,
    method: 'GET',
    headers: {
      'User-Agent': 'merge-open-prs-script',
      'Accept': 'application/vnd.github.v3+json',
    },
  };
  if (token) options.headers.Authorization = `token ${token}`;

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try {
          const parsed = data ? JSON.parse(data) : [];
          resolve(parsed);
        } catch (e) {
          reject(new Error(`Failed to parse GitHub response: ${e.message}\n${data}`));
        }
      });
    });
    req.on('error', reject);
    req.end();
  });
}

async function main() {
  const { owner, repo } = getOwnerRepo();
  const token = getToken();

  // Ensure main is current
  sh('git fetch origin');
  sh('git checkout main');
  sh('git pull --ff-only origin main');

  const prs = await githubRequest(`/repos/${owner}/${repo}/pulls?state=open&per_page=100`, token);
  if (!Array.isArray(prs) || prs.length === 0) {
    console.log('No open PRs found.');
    return;
  }

  let merged = 0;
  let attempted = 0;

  for (const pr of prs) {
    const head = pr && pr.head && pr.head.ref;
    const number = pr && pr.number;
    const title = pr && pr.title;
    if (!head) continue;
    attempted++;
    console.log(`\nMerging PR #${number}: ${title} (head: ${head}) into main`);

    try {
      // Ensure we have the head locally
      try { sh(`git fetch origin ${head}:${head}`); } catch (_) { sh(`git fetch origin ${head}`); }

      // Merge with preference to PR changes if conflicts
      try {
        sh(`git merge --no-ff --no-edit -X theirs origin/${head}`, { stdio: 'inherit' });
      } catch (e) {
        // Attempt auto-resolution by preferring incoming (theirs)
        console.log('Conflicts detected. Attempting auto-resolution...');
        // If merge is in progress, try to continue by adding conflicted files choosing theirs
        const conflicted = sh('git diff --name-only --diff-filter=U || true')
          .split('\n')
          .filter(Boolean);
        for (const f of conflicted) {
          try { sh(`git checkout --theirs -- "${f}"`); } catch (_) {}
          sh(`git add -- "${f}"`);
        }
        const staged = sh('git diff --cached --name-only || true').split('\n').filter(Boolean);
        if (staged.length) {
          sh('git commit -m "chore: auto-resolve merge conflicts (prefer PR changes)"');
        } else {
          // If nothing staged, abort and try a squash merge
          sh('git merge --abort');
          console.log('Retrying with squash merge...');
          try {
            sh(`git merge --squash origin/${head}`, { stdio: 'inherit' });
            sh('git commit -m "chore: squash-merge PR #' + number + ' into main"');
          } catch (squashErr) {
            console.log(`Failed squash merge for PR #${number}: ${squashErr.message}`);
            // Abort and skip this PR
            try { sh('git merge --abort'); } catch (_) {}
            continue;
          }
        }
      }
      merged++;
    } catch (err) {
      console.log(`Failed to merge PR #${number}: ${err.message}`);
      try { sh('git merge --abort'); } catch (_) {}
    }
  }

  if (merged > 0) {
    console.log(`\nPushing updated main with ${merged}/${attempted} merged PRs...`);
    sh('git push origin main');
  } else {
    console.log('No PRs merged.');
  }
}

main().catch((e) => {
  console.error('Error:', e.message);
  process.exit(1);
});



