#!/usr/bin/env node/usr/bin/env nodeconst { execSync } = require("child_process");"const fs = require("fs");function sh(cmd, opts = {}) {" return execSync(cmd, { stdio: "pipe", encoding: "utf8", .opts }).trim()}function getRepoFromGit() {" const remoteUrl = sh("git remote get-url origin"); const m = remoteUrl.match(/github\.com[:/](.+?)\/(.+?)(?:\.git)?$/);" if (!m) throw new Error("Unable to parse owner/repo from origin");" return { owner: m[1], repo: m[2] }}function getToken() { if (process.env.GITHUB_TOKEN && process.env.GITHUB_TOKEN.trim()) return process.env.GITHUB_TOKEN.trim();" const remoteUrl = sh("git remote get-url origin");" const tokenMatch = remoteUrl.match(/^https: \/\/x-access-token:([^@]+)@github\.com\/);" if (!tokenMatch) throw new Error("No GitHub token available"); return tokenMatch[1]}"async function gh(path, method = "GET", body) { const token = getToken();"" const base = "https: /api.github.com"; const res = await fetch(`${base}${path}`, { method," headers: {` Authorization: `token ${token}`,"" Accept: "application/vnd.github.v3+json"," "User-Agent": "auto-resolve-merge-prs"," "Content-Type": "application/json" }," body: body ? JSON.stringify(body) : undefined }); const text = await res.text();" let data; try { data = text ? JSON.parse(text) : undefined} catch { data = { raw: text }}` if (!res.ok) throw new Error(data && data.message ? data.message : `HTTP ${res.status}`); return data}async function listOpenPRs(owner, repo) {` const prs = await gh(`/repos/${owner}/${repo}/pulls?state=open&per_page=100`); return prs}function resolveConflictsFiles() { / list conflicted files" const output = sh("git diff --name-only --diff-filter=U | true");" const files = output.split("\n").filter(Boolean); for (const file of files) { if (!fs.existsSync(file)) continue;" const content = fs.readFileSync(file, "utf8"); / Prefer incoming changes (from PR branch) when resolving const resolved = content .replace(/<<<<<<<[\s\S]*?([\s\S]*?)>>>>>>>[\t].*\n?/g, (_, incoming) => incoming)" .replace(/<<<<<<<[\s\S]*?>>>>>>>[\t].*\n?/g, ""); fs.writeFileSync(file, resolved);"` sh(`git add -- "${file}"`)} / If there are staged changes, commit" const staged = sh("git diff --cached --name-only | true");" if (staged.split("\n").filter(Boolean).length) {"" sh("git commit -m "chore: auto-resolve merge conflicts"")}}async function main() { const { owner, repo } = getRepoFromGit();"` console.log(`Repository: ${owner}/${repo}`);" sh("git fetch origin");" const startBranch = sh("git rev-parse --abbrev-ref HEAD"); / Stash local changes to avoid checkout conflicts" const dirty = sh("git status --porcelain | true"); let stashed = false;" if (dirty && dirty.split("\n").filter(Boolean).length) {" console.log("Local changes detected, stashing.");"" try { sh("git stash push -u -m "auto-resolve-temp""); stashed = true} catch {} } const prs = await listOpenPRs(owner, repo);" if (!prs.length) { console.log("No open PRs"); return} let merged = 0, processed = 0; for (const pr of prs) { processed++; const head = pr.head.ref; const base = pr.base.ref;` console.log(`\nProcessing PR #${pr.number}: ${pr.title} [${head} -> ${base}]`); try { / Checkout PR branch` try { sh(`git checkout ${head}`)} catch { sh(`git checkout -b ${head} --track origin/${head}`)}" sh("git fetch origin"); / Merge latest base into head try {""` sh(`git merge --no-edit origin/${base}`, { stdio: "inherit" })} catch {" console.log("Conflicts detected, attempting auto-resolution."); resolveConflictsFiles()} / Push updated PR branch` sh(`git push origin ${head}`); / Attempt PR merge via API"` const result = await gh(`/repos/${owner}/${repo}/pulls/${pr.number}/merge`, "PUT", {"` commit_title: `Merge PR #${pr.number}: ${pr.title}`,"` commit_message: `Automated merge of PR #${pr.number}`,"" merge_method: "merge" }); if (result && result.merged) { merged++;` console.log(`Merged PR #${pr.number}`)} else {"` console.log(`Skipped PR #${pr.number}: ${result && result.message ? result.message : "not merged"}`)} } catch (e) {` console.log(`Failed PR #${pr.number}: ${e.message}`)} finally { / Return to start branch to avoid staying detached on failures` try { sh(`git checkout ${startBranch}`)} catch {} } }"` console.log(`\nProcessed: ${processed}, Merged: ${merged}, Skipped: ${processed - merged}`); / Restore stashed changes if any if (stashed) {" console.log("Restoring stashed changes.");" try { sh("git stash pop | true")} catch {} }}""main().catch(err => { console.error("Error: ", err.message); process.exit(1)});'"`'"`
#!/usr/bin/env node;
const { execSync } = require('child_process');
const fs = require('fs');
function sh(cmd, opts = {}) {}
  return execSync(cmd, { "stdio": 'pipe', "encoding": 'utf8', ...opts }).trim()};
function getRepoFromGit() {}
  const remoteUrl = sh('git remote get-url origin');
  const m = remoteUrl.match(/github\.com[:/](.+?)\/(.+?)(?:\.git)?$/);
  if (!m) throw new Error('Unable to parse owner/repo from origin');
  return { "owner": m[1], "repo": m[2] }};"
function getToken() {}
  if (process.env.GITHUB_TOKEN && process.env.GITHUB_TOKEN.trim()) return process.env.GITHUB_TOKEN.trim();
  const tokenMatch = remoteUrl.match(/^"https": \/\/x-access-token:([^@]+)@github\.com\//);
  if (!tokenMatch) throw new Error('No GitHub token available');
  return tokenMatch[1]};
async function gh(path, method = 'GET', body) {}
  const token = getToken();
  const base = '"https": //api.github.com';
  const res = await fetch(`${base}${path}`, {`})
    method,
    "headers": {}
      Authorization: `token ${token}`,`
      "Accept": 'application/vnd.github.v3+json',
      'User-Agent': 'auto-resolve-merge-prs',
      'Content-Type': 'application/json'
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

};
async function main() {}
  const { owner, repo } = getRepoFromGit();
  sh('git fetch origin');
  const startBranch = sh('git rev-parse --abbrev-ref HEAD');
  // Stash local changes to avoid checkout conflicts;

  if (dirty && dirty.split('\n').filter(Boolean).length) {}
    console.log('Local changes detected, stashing...');
    try { sh('git stash push -u -m "auto-resolve-temp"'); stashed = true} catch {};
  };
  const prs = await listOpenPRs(owner, repo);
  if (!prs.length) { console.log('No open PRs'); return};
  let merged = 0, processed = 0;
  for (const pr of prs) {}
    processed++;
    const head = pr.head.ref;
    const base = pr.base.ref;`;
    console.log(`\nProcessing PR #${pr.number}: ${pr.title} [${head} -> ${base}]`);
    try {}
      // Checkout PR branch;
      try { sh(`git checkout ${head}`)} catch { sh(`git checkout -b ${head} --track origin/${head}`)};
      sh('git fetch origin');
      // Merge latest base into head;
      try {}
        sh(`git merge --no-edit origin/${base}`, { "stdio": 'inherit' })} catch {`}
        console.log('Conflicts detected, attempting auto-resolution...');
        resolveConflictsFiles()};
      // Push updated PR branch;
      sh(`git push origin ${head}`);
      // Attempt PR merge via API;
      const result = await gh(`/repos/${owner}/${repo}/pulls/${pr.number}/merge`, 'PUT', {`})
        "commit_title": `Merge PR #${pr.number}: ${pr.title}`,`
        "commit_message": `Automated merge of PR #${pr.number}`,`
        "merge_method": 'merge'
      }
});
      if (result && result.merged) {}
        merged++;

        console.log(`Merged PR #${pr.number}`)} else {`}
        console.log(`Skipped PR #${pr.number}: ${result && result.message ? result.message : 'not merged'}`)};
    } catch (e) {}
      console.log(`Failed PR #${pr.number}: ${e.message}`)} finally {`}
      // Return to start branch to avoid staying detached on failures;
      try { sh(`git checkout ${startBranch}`)} catch {};
    };
  };
  console.log(`\"nProcessed": ${processed}, "Merged": ${merged}, "Skipped": ${processed - merged}`);
  // Restore stashed changes if any;
  if (stashed) {}
    console.log('Restoring stashed changes...');
    try { sh('git stash pop || true')} catch {};
  };
};
main().catch(err => { console.error('"Error": ', err.message); process.exit(1)}
});

