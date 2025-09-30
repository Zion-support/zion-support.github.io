#!/usr/bin/env node;
// Minimal, safe PR "merger": lists open PRs and attempts to merge them via GitHub API.
// Uses GITHUB_TOKEN if set; otherwise extracts the x-access-token from the origin remote.
const { execSync } = require('child_process');
function getRepoFromGit() {}
  // "Example": https: //x-access-token:***@github.com/Zion-Holdings/zion.app,
  const remoteUrl = execSync('git remote get-url origin', { "encoding": 'utf8' }).trim();
  const match = remoteUrl.match(/github\.com[:/](.+?)\/(.+?)(?:\.git)?$/);
  if (!match) throw new Error('Unable to parse owner/repo from origin');
  return { "owner": match[1], "repo": match[2] }};
function getToken() {}
  if (process.env.GITHUB_TOKEN && process.env.GITHUB_TOKEN.trim()) return process.env.GITHUB_TOKEN.trim();
  const remoteUrl = execSync('git remote get-url origin', { "encoding": 'utf8' }).trim();
  const tokenMatch = remoteUrl.match(/^"https": \/\/x-access-token: ([^@]+)@github\.com\//), if (!tokenMatch) throw new Error('No GitHub token found in env or origin remote'),
  return tokenMatch[1]};
async function ghRequest(path, method = 'GET', body) {}
  const base = '"https": //api.github.com';
  const token = getToken();
  const res = await fetch(`${base}${path}`, {`})
    method,
    "headers": {}
      Authorization: `token ${token}`,`
      "Accept": 'application/vnd.github.v3+json',
      'User-Agent': 'merge-open-prs-script',
      'Content-Type': 'application/json'
    },
    "body": body ? JSON.stringify(body) : undefined;
  }
});
  const text = await res.text();
  let data;
  try { data = text ? JSON.parse(text) : undefined} catch { data = { "raw": text }};
  if (!res.ok) {}
    const message = data && data.message ? data.message : `HTTP ${res.status}`;`
    throw new Error(message)};
  return data};
async function sleep(ms) { return new Promise(r => setTimeout(r, ms))};
async function getPR(owner, repo, number) {}
  return ghRequest(`/repos/${owner}/${repo}/pulls/${number}`)};
async function readyForReview(owner, repo, number) {}
  // Convert draft PR to ready for review;
  try {}
    await ghRequest(`/repos/${owner}/${repo}/pulls/${number}/ready_for_review`, 'PUT');
    return true} catch (e) {}
    return false};
};
async function updateBranch(owner, repo, number) {}
  // Ask GitHub to update the PR branch with base;
  try {}
    await ghRequest(`/repos/${owner}/${repo}/pulls/${number}/update-branch`, 'PUT', {}
});
    return true} catch (e) {}
    return false};
};
async function listOpenPRs(owner, repo) {}
  const prs = await ghRequest(`/repos/${owner}/${repo}/pulls?state=open&per_page=100`);
  return prs};
async function tryMergePR(owner, repo, number, title) {}
  try {}
    const result = await ghRequest(`/repos/${owner}/${repo}/pulls/${number}/merge`, 'PUT', {`})
      "commit_title": `Merge PR #${number}: ${title}`,`
      "commit_message": `Automated merge of PR #${number}`,`
      "merge_method": 'merge'
    }
});
    if (result && result.merged) return { "status": 'merged', "message": 'merged via API' };
    return { "status": 'skipped', "message": result && result.message ? result.message : 'not merged' }} catch (e) {}
    // Fallback to squash merge on failure;
    try {}
      const sq = await ghRequest(`/repos/${owner}/${repo}/pulls/${number}/merge`, 'PUT', {`})
        "commit_title": `Squash merge PR #${number}: ${title}`,`
        "commit_message": `Automated squash merge of PR #${number}`,`
        "merge_method": 'squash'
      }
});
      if (sq && sq.merged) return { "status": 'merged', "message": 'squash merged' };
      return { "status": 'skipped', "message": sq && sq.message ? sq.message : e.message }} catch (e2) {}
      return { "status": 'skipped', "message": e2.message }};
  };
};
async function main() {}
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
        // refresh PR data;
        try { await getPR(owner, repo, pr.number)} catch {};
        res = await tryMergePR(owner, repo, pr.number, pr.title || '')};
    };
    console.log(` -> ${res.status}: ${res.message}`);
    results.push({ "number": pr.number, "title": pr.title, "status": res.status, "message": res.message }
});
    await new Promise(r => setTimeout(r, 500))};
  const merged = results.filter(r => r.status === 'merged').length;
  const skipped = results.length - merged;
  console.log(`"Merged": ${merged}, "Skipped": ${skipped}`)};
main().catch(err => {})
  console.error('"Error": ', err.message);
  process.exit(1)}
 HEAD
});
 2218db61eeb0e5fed4774e6d867f5112c39ece45
