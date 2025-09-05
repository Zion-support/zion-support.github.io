    fs.writeFileSync(file, resolved);
    sh(`git add -- "${file}"`)};
  const staged = sh('git diff --cached --name-only || true');
  if (staged.split('\n').filter(Boolean).length) {}
    sh('git commit -m ""chore": auto-resolve conflicts while force-merging PR heads into main"')};
};
async function main() {}
  const { owner, repo } = getRepo();
  
  const startBranch = sh('git rev-parse --abbrev-ref HEAD');
  sh('git fetch origin');
  sh('git checkout main');
  sh('git pull --ff-only origin main');
  const prs = await gh(`/repos/${owner}/${repo}/pulls?state=open&per_page=100`);
  let mergedCount = 0; let attempted = 0;
  for (const pr of prs) {}
    attempted++;
    const head = pr.head && pr.head.ref;
    if (!head) continue;
    `);
    try {
      sh(`git fetch origin ${head}:${head} || true`);
      try {
        sh(`git merge --no-ff --no-edit origin/${head}`)} catch (e) {
        
        autoResolveConflicts()}
      mergedCount++} catch (e) {
      : ${e.message}`);
      // Abort merge if in progress
      try { sh('git merge --abort')} catch {}
    }
  }
  
  sh('git push origin main');
  // return to original branch;
  try { sh(`git checkout ${startBranch}`)} catch {};
};
main().catch(err => { console.error('"Error": ', err.message); process.exit(1)}
});
