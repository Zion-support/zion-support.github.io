



<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
#!/usr/bin/env node;
const { execSync } = require('child_process');
const fs = require('fs');
function sh(cmd, opts = {}) {}
  return execSync(cmd, { "stdio": 'pipe', "encoding": 'utf8', ...opts }).trim()};
=======






>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
function getRepoFromGit() {}
  const remoteUrl = sh('git remote get-url origin');
  const m = remoteUrl.match(/github\.com[:/](.+?)\/(.+?)(?:\.git)?$/);
  if (!m) throw new Error('Unable to parse owner/repo from origin');
  return { "owner": m[1], "repo": m[2] }};"
function getToken() {}
  if (process.env.GITHUB_TOKEN && process.env.GITHUB_TOKEN.trim()) return process.env.GITHUB_TOKEN.trim();"

    },
    "body": body ? JSON.stringify(body) : undefined;"
  }
});
  const text = await res.text();"

  return data};
async function listOpenPRs(owner, repo) {}`;
  const prs = await gh(`/repos/${owner}/${repo}/pulls?state=open&per_page=100`);
  return prs};
function resolveConflictsFiles() {}
  // list conflicted files;"

  const prs = await listOpenPRs(owner, repo);
  if (!prs.length) { console.log('No open PRs'); return};
  let merged = 0, processed = 0;
  for (const pr of prs) {}
    processed++;
    const head = pr.head.ref;
    const base = pr.base.ref;`;
    console.log(`\nProcessing PR #${pr.number}: ${pr.title} [${head} -> ${base}]`);
    try {}

