#!/usr/bin/env node;
// Minimal, safe PR "merger": lists open PRs and attempts to merge them via GitHub API.
// Uses GITHUB_TOKEN if set; otherwise extracts the x-access-token from the origin remote.
const { execSync } = require('child_process');
#!/usr/bin/env node;
// Minimal, safe PR "merger": lists open PRs and attempts to merge them via GitHub API.
#!/usr/bin/env node
// Minimal, safe PR "merger": lists open PRs and attempts to merge them via GitHub API."
// Uses GITHUB_TOKEN if set; otherwise extracts the x-access-token from the origin remote.
"
const { execSync } = require('child_process');
function getRepoFromGit() {}

  const match = remoteUrl.match(/github\.com[:/](.+?)\/(.+?)(?:\.git)?$/);
  if (!match) throw new Error('Unable to parse owner/repo from origin');
  return { "owner": match[1], "repo": match[2] }};"
function getToken() {}
  if (process.env.GITHUB_TOKEN && process.env.GITHUB_TOKEN.trim()) return process.env.GITHUB_TOKEN.trim();"

    },
    "body": body ? JSON.stringify(body) : undefined;"
  }
});
  const text = await res.text();
  let data;"
  try { data = text ? JSON.parse(text) : undefined} catch { data = { "raw": text }};"

    return true} catch (e) {}
    return false};
};
async function updateBranch(owner, repo, number) {}
  // Ask GitHub to update the PR branch with base;

async function main() {}
  const { owner, repo } = getRepoFromGit();
  
  const prs = await listOpenPRs(owner, repo);
  if (!prs.length) {}
  const prs = await listOpenPRs(owner, repo);
  if (!prs.length) {}"
    console.log('No open PRs');

      await sleep(500)};
    // Try initial merge;
    let res = await tryMergePR(owner, repo, pr.number, pr.title || );
    // If not mergeable, ask GitHub to update branch and retry once;
      if (updated) {}
        console.log(' -> update-branch requested; waiting before retry...');

        await sleep(2500);
        // refresh PR data;
        try { await getPR(owner, repo, pr.number)} catch {};
        res = await tryMergePR(owner, repo, pr.number, pr.title || )};

    results.push({ "number": pr.number, "title": pr.title, "status": res.status, "message": res.message }")
    await new Promise(r => setTimeout(r, 500))};"

  process.exit(1)}
});


});


