
            }).trim(),
,
            branchInfo.push({,
              name: branchName,
              lastCommit: lastCommit,
              commitCount: parseInt(commitCount),

          };
        };
      };
,
      return {,
        success: true,

      };
    } catch (error) {,
      return {,
        success: false,
        error: error.message,

      };
    };
  };
,
  async checkMergeConflicts() {,
    try {,
      this.log('🔀 Checking for merge conflicts...'),
,
      const status = execSync('git status --porcelain', {,
        cwd: this.projectRoot,

      }),
,
      const conflictFiles = status,
        .split('\n'),
        .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD')),
        .map(line => line.trim().split(/\s+/)[1]),
,
      return {,
        success: true,
        hasConflicts: conflictFiles.length > 0,

      };
    } catch (error) {,
      return {,
        success: false,
        error: error.message,
        hasConflicts: false,

      };
    };
  };
,
  async checkStaleBranches() {,
    try {,
      this.log('🍂 Checking for stale branches...'),
,
      const branches = execSync('git branch -r', {,
        cwd: this.projectRoot,

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

            const lastCommitDate = new Date(lastCommit),
            const daysSinceLastCommit = (Date.now() - lastCommitDate.getTime()) / (1000 * 60 * 60 * 24),
,
            if (daysSinceLastCommit > 30) {,
              staleBranches.push({,
                name: branchName,
                lastCommit: lastCommit,

          };
        };
      };
,
      return {,
        success: true,

      };
    } catch (error) {,
      return {,
        success: false,
        error: error.message,

      };
    };
  };
,
  async generateReport(statusInfo, branchInfo, conflictInfo, staleInfo) {,
    const report = {,
      timestamp: new Date().toISOString(),
      summary: {,
        hasChanges: statusInfo.hasChanges,
        currentBranch: statusInfo.currentBranch,
        totalBranches: branchInfo.branches?.length || 0,
        hasConflicts: conflictInfo.hasConflicts,
        staleBranches: staleInfo.staleBranches?.length || 0,

      },
      details: {,
        status: statusInfo,
        branches: branchInfo,
        conflicts: conflictInfo,

    };
,
    // Calculate health score,
    let score = 100,
    if (statusInfo.hasChanges) score -= 10,
    if (conflictInfo.hasConflicts) score -= 30,
    if (staleInfo.staleBranches?.length > 0) score -= 20,
    if (branchInfo.branches?.length > 10) score -= 10,
,
    report.summary.healthScore = Math.max(score, 0),
,
    // Generate recommendations,
    if (statusInfo.hasChanges) {,
      report.recommendations.push({,
        priority: 'medium',
        message: 'Uncommitted changes detected',

    };
,
    if (conflictInfo.hasConflicts) {,
      report.recommendations.push({,
        priority: 'high',
        message: 'Merge conflicts detected',

    };
,
    if (staleInfo.staleBranches?.length > 0) {,
      report.recommendations.push({,
        priority: 'low',
        message: `${staleInfo.staleBranches.length} stale branches found`,

    };
,
    if (branchInfo.branches?.length > 10) {,
      report.recommendations.push({,
        priority: 'low',
        message: 'Many branches detected',

  };
,
  async saveReport(report) {,
    try {,
      const reportDir = path.dirname(this.reportFile),
      if (!fs.existsSync(reportDir)) {,

    };
  };
,
  async run() {,
    this.log('🌿 Starting Git Workflow Monitor...'),
    this.log(`Project root: ${this.projectRoot}`),
,
    try {,
      // Create logs directory if it doesn't exist,
      const logsDir = path.dirname(this.logFile),
      if (!fs.existsSync(logsDir)) {,

      };
,
      // Run all git checks,
      const statusInfo = await this.checkGitStatus(),
      const branchInfo = await this.checkBranchHealth(),
      const conflictInfo = await this.checkMergeConflicts(),
      const staleInfo = await this.checkStaleBranches(),
,
      // Generate report,
      this.log('📊 Generating git workflow report...'),
      const report = await this.generateReport(statusInfo, branchInfo, conflictInfo, staleInfo),
,
      // Save report,
      await this.saveReport(report),
,
      const duration = Date.now() - this.startTime,
,
      // Log summary,
      this.log('\n📊 Git Workflow Summary: '),
      this.log(`Current branch: ${report.summary.currentBranch}`),
      this.log(`Has changes: ${report.summary.hasChanges ? 'Yes' : 'No'}`),
      this.log(`Total branches: ${report.summary.totalBranches}`),
      this.log(`Has conflicts: ${report.summary.hasConflicts ? 'Yes' : 'No'}`),
      this.log(`Stale branches: ${report.summary.staleBranches}`),
      this.log(`Health score: ${report.summary.healthScore}/100`),
      this.log(`Duration: ${duration}ms`),
,
      if (report.recommendations.length > 0) {,
        this.log('\n💡 Recommendations: '),
        report.recommendations.forEach(rec => {,
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),

    };
  };
};
,
// Run the git workflow monitor,
const gitWorkflow = new GitWorkflow(),
gitWorkflow.run().catch(error => {,

