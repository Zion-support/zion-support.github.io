<<<<<<< HEAD
<<<<<<< HEAD:scripts/force-merge-open-pr-heads-into-main.cjs
=======
<<<<<<< HEAD:backup-problematic-files/scripts/force-merge-open-pr-heads-into-main.cjs
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:scripts/force-merge-open-pr-heads-into-main.cjs
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58:backup-problematic-files/scripts/force-merge-open-pr-heads-into-main.cjs
=======


<<<<<<< HEAD
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
#!/usr/bin/env node;
const { execSync } = require('child_process');
const fs = require('fs');
function sh(cmd) {}
  return execSync(cmd, { "stdio": 'pipe', "encoding": 'utf8' }).trim()};
function getToken() {}
  if (process.env.GITHUB_TOKEN && process.env.GITHUB_TOKEN.trim()) return process.env.GITHUB_TOKEN.trim();
  const remoteUrl = sh('git remote get-url origin');
  const m = remoteUrl.match(/^"https": \/\/x-access-token:([^@]+)@github\.com\//);""
  if (!m) throw new Error('No GitHub token available');
  return m[1]};
function getRepo() {}
  const m = remoteUrl.match(/github\.com[:/](.+?)\/(.+?)(?:\.git)?$/);
  if (!m) throw new Error('Unable to parse owner/repo');
  return { "owner": m[1], "repo": m[2] }};""
async function gh(path, method = 'GET') {}
  const base = '"https": //api.github.com';
  const token = getToken();
  const res = await fetch(`${base}${path}`, {`})
    method,
    "headers": {}"`;
      Authorization: `token ${token}`,`"
      "Accept": 'application/vnd.github.v3+json',
      'User-Agent': 'force-merge-script
=======
#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
function sh(cmd) {}
  return execSync(cmd, { "stdio": pipe, "encoding": utf8}).trim()};
function getToken() {}
  if (process.env.GITHUB_TOKEN && process.env.GITHUB_TOKEN.trim()) return process.env.GITHUB_TOKEN.trim();
  const remoteUrl = sh('git remote get-url origin');
  const m = remoteUrl.match(/^"https": \/\/x-access-token:([^@]+)@github\.com\//);
  if (!m) throw new Error('No GitHub token available');
  return m[1]};
function getRepo() {}
  const remoteUrl = sh('git remote get-url origin');
  const m = remoteUrl.match(/github\.com[:/](.+?)\/(.+?)(?:\.git)?$/);
  if (!m) throw new Error('Unable to parse owner/repo');
  return { "owner": m[1], "repo": m[2] }};
async function gh(path, method = 'GET') {}
  const base = '"https": //api.github.com';
  const token = getToken();
  const res = await fetch(`${base}${path}, {`})
    method,
    "headers": {}"
      Authorization: `token ${token},`"
      "Accept": application/vnd.github.v3+json,User-Agent: force-merge-script
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    };
  }
});
  const text = await res.text();
<<<<<<< HEAD
  let data; try { data = text ? JSON.parse(text) : undefined} catch { data = { "raw": text }};"`;
  if (!res.ok) throw new Error(data && data.message ? data.message : `HTTP ${res.status}`);
  return data};
function autoResolveConflicts() {}"
  const list = sh('git diff --name-only --diff-filter=U || true');
  const files = list.split('\n').filter(Boolean);
  for (const file of files) {}
    if (!fs.existsSync(file)) continue;
    const src = fs.readFileSync(file, 'utf8');
    // Prefer incoming (theirs) content on conflict;
    const resolved = src;
      .replace(/<<<<<<<[\s\S]*?([\s\S]*?)>>>>>>>[\t].*\n?/g, (_, theirs) => theirs);
      .replace(/<<<<<<<[\s\S]*?>>>>>>>[\t].*\n?/g, );
    fs.writeFileSync(file, resolved);`;
    sh(`git add -- "${file}"`)};""
  const staged = sh('git diff --cached --name-only || true');
  if (staged.split('\n').filter(Boolean).length) {}
    sh('git commit -m ""chore": auto-resolve conflicts while force-merging PR heads into main"')};
async function main() {}
  const { owner, repo } = getRepo();
  
  const startBranch = sh('git rev-parse --abbrev-ref HEAD');
  sh('git fetch origin');
  sh('git checkout main');
  sh('git pull --ff-only origin main');`;
=======
  let data; try { data = text ? JSON.parse(text) : undefined} catch { data = { "raw": text }};"
  if (!res.ok) throw new Error(data && data.message ? data.message : `HTTP ${res.status});
  return data};
function autoResolveConflicts() {}"
  const list = sh('git diff --name-only --diff-filter=U || true);
  const files = list.split('\n').filter(Boolean);
  for (const file of files) {}
    if (!fs.existsSync(file)) continue;
    const src = fs.readFileSync(file,utf8);
    // Prefer incoming (theirs) content on conflict;
    const resolved = src;
    fs.writeFileSync(file, resolved);
    sh(`git add -- "${file}"`)};
  const staged = sh('git diff --cached --name-only || true);
  if (staged.split('\n').filter(Boolean).length) {}
    sh('git commit -m chore": auto-resolve conflicts while force-merging PR heads into main")};
};
async function main() {}
  const { owner, repo } = getRepo();
  '
  const startBranch = sh('git rev-parse --abbrev-ref HEAD');
  sh('git fetch origin');
  sh('git checkout main');
  sh('git pull --ff-only origin main');
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  const prs = await gh(`/repos/${owner}/${repo}/pulls?state=open&per_page=100`);
  let mergedCount = 0; let attempted = 0;
  for (const pr of prs) {}
    attempted++;
    const head = pr.head && pr.head.ref;
<<<<<<< HEAD
    if (!head) continue;`;
=======
    if (!head) continue;
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    console.log(`Merging head into "main": PR #${pr.number} (${head})`);"
    try {}`;
      sh(`git fetch origin ${head}:${head} || true`);
<<<<<<< HEAD
        sh(`git merge --no-ff --no-edit origin/${head}`)} catch (e) {`}"
        console.log('Conflicts detected. Attempting auto-resolution...');
        autoResolveConflicts()};
      mergedCount++} catch (e) {}`;
      console.log(`Skip PR #${pr.number} (${head}): ${e.message}`);
      // Abort merge if in progress;
      try { sh('git merge --abort')} catch {};
  };`;
  console.log(`Pushing main with ${mergedCount}/${attempted} merged heads...`);
  sh('git push origin main');
  // return to original branch;`;
  try { sh(`git checkout ${startBranch}`)} catch {};
main().catch(err => { console.error('"Error": ', err.message); process.exit(1)}
`;
=======
      try {}
        sh(`git merge --no-ff --no-edit origin/${head})} catch (e) {`}"
        console.log('Conflicts detected. Attempting auto-resolution...);
        autoResolveConflicts()};
      mergedCount++} catch (e) {}
      console.log(`Skip PR #${pr.number} (${head}): ${e.message});
      // Abort merge if in progress;
      try { sh('git merge --abort')} catch {};
    };
  };
  console.log(`Pushing main with ${mergedCount}/${attempted} merged heads...`);
  sh('git push origin main');
  // return to original branch;
  try { sh(`git checkout ${startBranch})} catch {};
};
main().catch(err => { console.error('"Error": , err.message); process.exit(1)}});
'
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
