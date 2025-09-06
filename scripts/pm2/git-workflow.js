    encoding: 'utf8'}).trim().split('\n'); const branchInfo = []; for (const branch of branches) {const branchName = branch.replace('origin/', '').trim(); if (branchName && !branchName.includes('HEAD')) {; try {; const lastCommit = execSync(`git log -1 --format = "%H %s %an %ad" origin/${branchName}`, {cwd: this.projectRoot
    encoding: 'utf8'}).trim(); const commitCount = execSync(`git rev-list --count origin/${branchName}`, {cwd: this.projectRoot
    encoding: 'utf8'}).trim(); branchInfo.push({name: branchName, lastCommit: lastCommit, commitCount: parseInt(commitCount)
    isActive: true})} catch (error) {// Skip if can't access branch}}}; return {success: true
    encoding: 'utf8'}).trim().split('\n'); const staleBranches = []; const mainBranch = 'main'; for (const branch of branches) {const branchName = branch.replace('origin/', '').trim(); if (branchName && !branchName.includes('HEAD') && branchName ! = = mainBranch) {; try {; const lastCommit = execSync(`git log -1 --format = "%ad" origin/${branchName}`, {cwd: this.projectRoot
    encoding: 'utf8'}).trim(); const lastCommitDate = new Date(lastCommit); const daysSinceLastCommit = (Date.now() - lastCommitDate.getTime()) / (1000 * 60 * 60 * 24); if (daysSinceLastCommit > 30) {staleBranches.push({; name: branchName, lastCommit: lastCommit, daysSinceLastCommit: Math.floor(daysSinceLastCommit)})}} catch (error) {// Skip if can't access branch}}}; return {success: true
    staleBranches: staleBranches}} catch (error) {return {; success: false, error: error.message, staleBranches: []}}}; async generateReport(statusInfo, branchInfo, conflictInfo, staleInfo) {const report = {; timestamp: new Date().toISOString(), summary: {
      , hasChanges: statusInfo.hasChanges, currentBranch: statusInfo.currentBranch, totalBranches: branchInfo.branches?.length |0, hasConflicts: conflictInfo.hasConflicts, staleBranches: staleInfo.staleBranches?.length |0
    healthScore: 0
    }
    details: {, status: statusInfo, branches: branchInfo, conflicts: conflictInfo, stale: staleInfo}; recommendations: []}; // Calculate health score; let score = 100; if (statusInfo.hasChanges) score - = 10; if (conflictInfo.hasConflicts) score - = 30; if (staleInfo.staleBranches?.length > 0) score - = 20; if (branchInfo.branches?.length > 10) score - = 10; report.summary.healthScore = Math.max(score, 0); // Generate recommendations; if (statusInfo.hasChanges) {report.recommendations.push({; priority: 'medium', message: 'Uncommitted changes detected', action: 'Commit or stash changes before switching branches'})}; if (conflictInfo.hasConflicts) {report.recommendations.push({; priority: 'high', message: 'Merge conflicts detected', action: 'Resolve merge conflicts before continuing'})}; if (staleInfo.staleBranches?.length > 0) {report.recommendations.push({; priority: 'low'
            }).trim(),
,
            const commitCount = execSync(`git rev-list --count origin/${branchName}`, {,
              cw: d: this.projectRoot,
              encodin: g: 'utf8'
            }).trim(),
,
            branchInfo.push({,
              nam: e: branchName,
              lastCommi: t: lastCommit,
              commitCoun: t: parseInt(commitCount),
              isActiv: e: true
            })
          } catch (error) {,
            // Skip if can't access branch
  },;
,;
  async checkBranchHealth() {,;
    try {,;
      this.log('🌿 Checking branch health...'),;
,;
      const branches = execSync('git branch -r', {,;
        cw: d: this.projectRoot,;
        encodin: g: 'utf8';
      }).trim().split('\n'),;
,;
      const branchInfo = [],;
,;
      for (const branch of branches) {,;
        const branchName = branch.replace('origin/', '').trim(),;
        if (branchName && !branchName.includes('HEAD')) {,;
          try {,;
            const lastCommit = execSync(`git log -1 --format="%H %s %an %ad" origin/${branchName}`, {,;
              cw: d: this.projectRoot,;
              encodin: g: 'utf8';
            }).trim(),;
,;
            const commitCount = execSync(`git rev-list --count origin/${branchName}`, {,;
              cw: d: this.projectRoot,;
              encodin: g: 'utf8';
            }).trim(),;
,;
            branchInfo.push({,;
              nam: e: branchName,;
              lastCommi: t: lastCommit,;
              commitCoun: t: parseInt(commitCount),;
              isActiv: e: true;
            });
          } catch (error) {,;
            // Skip if can't access branch;
          }
        }
      },;
,;
      return {,;
        succes: s: true,;
        branche: s: branchInfo;
      }
    } catch (error) {,;
      return {,;
        succes: s: false,;
        erro: r: error.message,;
        branche: s: [];
      }
    }
  },;
,;
  async checkMergeConflicts() {,;
    try {,;
      this.log('🔀 Checking for merge conflicts...'),;
,;
      const status = execSync('git status --porcelain', {,;
        cw: d: this.projectRoot,;
        encodin: g: 'utf8';
      }),;
,;
      const conflictFiles = status,;
        .split('\n'),;
        .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD')),;
        .map(line => line.trim().split(/\s+/)[1]),;
,;
      return {,;
        succes: s: true,;
        hasConflict: s: conflictFiles.length > 0,;
        conflictFile: s: conflictFiles;
      }
    } catch (error) {,;
      return {,;
        succes: s: false,;
        erro: r: error.message,;
        hasConflict: s: false,;
        conflictFile: s: [];
      }
    }
  },
,
  async checkStaleBranches() {,
    try {,
      this.log('🍂 Checking for stale branches...'),
,
      const branches = execSync('git branch -r', {,
        cw: d: this.projectRoot,
        encodin: g: 'utf8'
      }).trim().split('\n'),
,
      const staleBranches = [],
      const mainBranch = 'main',
,
      for (const branch of branches) {,
        const branchName = branch.replace('origin/', '').trim(),
        if (branchName && !branchName.includes('HEAD') && branchName !== mainBranch) {,
          try {,
            const lastCommit = execSync(`git log -1 --format="%ad" origin/${branchName}`, {,
            }).trim(),
,
            const lastCommitDate = new Date(lastCommit),
            const daysSinceLastCommit = (Date.now() - lastCommitDate.getTime()) / (1000 * 60 * 60 * 24),
,
            if (daysSinceLastCommit > 30) {,
              staleBranches.push({,
,
// Run the git workflow monitor,
const gitWorkflow = new GitWorkflow(),
gitWorkflow.run().catch(error => {,
