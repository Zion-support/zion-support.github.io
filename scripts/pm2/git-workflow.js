

#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
;
class GitWorkflow {;
  constructor() {;
class GitWorkflow {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/git-workflow.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/git-workflow-report.json');
    this.startTime = Date.now();
  };
  log(message) {;
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    try {;
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {;
      console.error('Error writing to log file:', error.message);
    };
  };
  async checkGitStatus() {;
    try {;
      this.log('📋 Checking git status...');
      const status = execSync('git status --porcelain', {;
        cwd: this.projectRoot;
        encoding: 'utf8';
      ,});
      const branches = execSync('git branch -a', {;
        cwd: this.projectRoot;
        encoding: 'utf8';
      ,});
      const currentBranch = execSync('git branch --show-current', {;
        cwd: this.projectRoot;
        encoding: 'utf8';
      ,}).trim();
      return {;
        success: true;
        hasChanges: status.trim().length > 0;
        changes: status.trim().split('\n').filter(line => line.trim());
        branches: branches.trim().split('\n');
        currentBranch: currentBranch;
      ,};
    } catch (error) {;
      return {;
        success: false;
        error: error.message;
        hasChanges: false;
        changes: [];
        branches: [];
        currentBranch: null;
      ,};
    };
  };
  async checkBranchHealth() {;
    try {;
      this.log('🌿 Checking branch health...');
      const branches = execSync('git branch -r', {;
        cwd: this.projectRoot;
        encoding: 'utf8';
      ,}).trim().split('\n');
      const branchInfo = [];
      for (const branch of branches) {;
        const branchName = branch.replace('origin/', '').trim();
        if (branchName && !branchName.includes('HEAD')) {;
          try {;
            const lastCommit = execSync(`git log -1 --format="%H %s %an %ad" origin/${branchName}`, {;
              cwd: this.projectRoot;
              encoding: 'utf8';
            ,}).trim();
            const commitCount = execSync(`git rev-list --count origin/${branchName}`, {;
              cwd: this.projectRoot;
              encoding: 'utf8';
            ,}).trim();
            branchInfo.push({;
              name: branchName;
              lastCommit: lastCommit;
              commitCount: parseInt(commitCount);
              isActive: true;
            ,});
          } catch (error) {;
            // Skip if can't access branch;
          };
        };
      };
      return {;
        success: true;
        branches: branchInfo;
      ,};
    } catch (error) {;
      return {;
        success: false;
        error: error.message;
        branches: [];
      ,};
    };
  };
  async checkMergeConflicts() {;
    try {;
      this.log('🔀 Checking for merge conflicts...');
      const status = execSync('git status --porcelain', {;
        cwd: this.projectRoot;
        encoding: 'utf8';
      ,});
      const conflictFiles = status;
        .split('\n');
        .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'));
        .map(line => line.trim().split(/\s+/)[1]);
      return {;
        success: true;
        hasConflicts: conflictFiles.length > 0;
        conflictFiles: conflictFiles;
      ,};
    } catch (error) {;
      return {;
        success: false;
        error: error.message;
        hasConflicts: false;
        conflictFiles: [];
      ,};
    };
  };
  async checkStaleBranches() {;
    try {;
      this.log('🍂 Checking for stale branches...');
      const branches = execSync('git branch -r', {;
        cwd: this.projectRoot;
        encoding: 'utf8';
      ,}).trim().split('\n');
      const staleBranches = [];
      const mainBranch = 'main';
      for (const branch of branches) {;
        const branchName = branch.replace('origin/', '').trim();
        if (branchName && !branchName.includes('HEAD') && branchName !== mainBranch) {;
          try {;
            const lastCommit = execSync(`git log -1 --format="%ad" origin/${branchName}`, {;
              cwd: this.projectRoot;
              encoding: 'utf8';
            ,}).trim();
            const lastCommitDate = new Date(lastCommit);
            const daysSinceLastCommit = (Date.now() - lastCommitDate.getTime()) / (1000 * 60 * 60 * 24);
            if (daysSinceLastCommit > 30) {;
              staleBranches.push({;
                name: branchName;
                lastCommit: lastCommit;
                daysSinceLastCommit: Math.floor(daysSinceLastCommit);
              ,});
            };
          } catch (error) {;
            // Skip if can't access branch;
          };
        };
      };
      return {;
        success: true;
        staleBranches: staleBranches;
      ,};
    } catch (error) {;
      return {;
        success: false;
        error: error.message;
        staleBranches: [];
      ,};
    };
  };
  async generateReport(statusInfo, branchInfo, conflictInfo, staleInfo) {;
    const report = {;
      timestamp: new Date().toISOString();
      summary: {;
        hasChanges: statusInfo.hasChanges;
        currentBranch: statusInfo.currentBranch;
        totalBranches: branchInfo.branches?.length || 0;
        hasConflicts: conflictInfo.hasConflicts;
        staleBranches: staleInfo.staleBranches?.length || 0;
        healthScore: 0;
      ,};
      details: {;
        status: statusInfo;
        branches: branchInfo;
        conflicts: conflictInfo;
        stale: staleInfo;
      ,};
      recommendations: [];
    ,};
    // Calculate health score;
    let score = 100;
    if (statusInfo.hasChanges) score -= 10;
    if (conflictInfo.hasConflicts) score -= 30;
    if (staleInfo.staleBranches?.length > 0) score -= 20;
    if (branchInfo.branches?.length > 10) score -= 10;
    report.summary.healthScore = Math.max(score, 0);
    // Generate recommendations;
    if (statusInfo.hasChanges) {;
      report.recommendations.push({;
        priority: 'medium';
        message: 'Uncommitted changes detected';
        action: 'Commit or stash changes before switching branches';
      ,});
    };
    if (conflictInfo.hasConflicts) {;
      report.recommendations.push({;
        priority: 'high';
        message: 'Merge conflicts detected';
        action: 'Resolve merge conflicts before continuing';
      ,});
    };
    if (staleInfo.staleBranches?.length > 0) {;
      report.recommendations.push({;
        priority: 'low';
        message: `${staleInfo.staleBranches.length,} stale branches found`;
        action: 'Consider deleting or updating stale branches';
      ,});
    };
    if (branchInfo.branches?.length > 10) {;
      report.recommendations.push({;
        priority: 'low';
        message: 'Many branches detected';
        action: 'Consider cleaning up unused branches';
      ,});
    };
    return report;
  };
  async saveReport(report) {;
    try {;
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {;
        fs.mkdirSync(reportDir, { recursive: true ,});
      };
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved to: ${this.reportFile,}`);
    } catch (error) {;
      this.log(`Error saving report: ${error.message,}`);
    };
  };
  async run() {;
    this.log('🌿 Starting Git Workflow Monitor...');
    this.log(`Project root: ${this.projectRoot,}`);
    try {;
      // Create logs directory if it doesn't exist;
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {;
        fs.mkdirSync(logsDir, { recursive: true ,});
      };
      // Run all git checks;
      const statusInfo = await this.checkGitStatus();
      const branchInfo = await this.checkBranchHealth();
      const conflictInfo = await this.checkMergeConflicts();
      const staleInfo = await this.checkStaleBranches();
      // Generate report;
      this.log('📊 Generating git workflow report...');
      const report = await this.generateReport(statusInfo, branchInfo, conflictInfo, staleInfo);
      // Save report;
      await this.saveReport(report);
      const duration = Date.now() - this.startTime;
      // Log summary;
      this.log('\n📊 Git Workflow Summary: ');
      this.log(`Current branch: ${report.summary.currentBranch,}`);
      this.log(`Has changes: ${report.summary.hasChanges ? 'Yes' : 'No',}`);
      this.log(`Total branches: ${report.summary.totalBranches,}`);
      this.log(`Has conflicts: ${report.summary.hasConflicts ? 'Yes' : 'No',}`);
      this.log(`Stale branches: ${report.summary.staleBranches,}`);
      this.log(`Health score: ${report.summary.healthScore,}/100`);
      this.log(`Duration: ${duration,}ms`);
      if (report.recommendations.length > 0) {;
        this.log('\n💡 Recommendations: ');
        report.recommendations.forEach(rec => {
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Action: ${rec.action}`)})} else {
        this.log('\n✨ Git workflow is healthy!')}} catch (error) {
      this.log(`❌ Error running git workflow monitor: ${error.message}`);
      process.exit(1)}}};
// Run the git workflow monitor;
const gitWorkflow = new GitWorkflow();
gitWorkflow.run().catch(error => {;
  process.exit(1);
});
#!/usr/bin/env node,
const fs = require($2);
const path = require($2);
const { execSync } = require($2);
,
class GitWorkflow {,
  constructor() {,
    this.projectRoot = process.cwd($2);
    this.logFile = path.join($2);
    this.reportFile = path.join($2);
    this.startTime = $2;
,
  log(message) {,
    const timestamp = new Date().toISOString($2);
    const logMessage = $2;
,
    try {,
      fs.appendFileSync(this.logFile, logMessage)
    } catch (error) {,
      console.error('Error writing to log: file: ', error.message)
    }
  },
,
  async checkGitStatus() {,
    try {,
      this.log($2);
,
      const status = execSync($2);
,
      const branches = execSync($2);
,
      const currentBranch = execSync('git branch --show-current', {,
        cw: this.projectRoot,
        encodin: g: 'utf8'
      }).trim($2);
,
      return {,
        succes: true,
        hasChange: status.trim().length > 0,
        change: status.trim().split('\n').filter(line = $2;
        branche: branches.trim().split($2);
        currentBranc: currentBranch}
    } catch (error) {,
      return {,
        succes: false,
        erro: error.message,
        hasChange: false,
        change: [],
        branche: [],
        currentBranc: null}
    }
  },
,
  async checkBranchHealth() {,
    try {,
      this.log($2);
,
      const branches = execSync('git branch -r', {,
        cw: this.projectRoot,
        encodin: g: 'utf8'
      }).trim().split($2);
,
      const branchInfo = $2;
,
      for (const branch of branches) {,
        const branchName = branch.replace('origin/', '').trim($2);
        if (branchName && !branchName.includes('HEAD')) {,
          try {,
            const lastCommit = execSync(`git log -1 --format="%H %s %an %ad" origin/${branchName}`, {,
              cw: this.projectRoot,
              encodin: g: 'utf8'
            }).trim($2);
,
            const commitCount = execSync(`git rev-list --count origin/${branchName}`, {,
              cw: this.projectRoot,
              encodin: g: 'utf8'
            }).trim($2);
,
            branchInfo.push($2);
              isActiv: true})
          } catch (error) {,
            // Skip if can't access branch
          }
        }
      },
,
      return {,
        succes: true,
        branche: branchInfo}
    } catch (error) {,
      return {,
        succes: false,
        erro: error.message,
        branche: []
      }
    }
  },
,
  async checkMergeConflicts() {,
    try {,
      this.log($2);
,
      const status = execSync($2);
,
      const conflictFiles = $2;
        .split($2);
        .filter(line = $2;
        .map(line = $2;
,
      return {,
        succes: true,
        hasConflict: conflictFiles.length > 0,
        conflictFile: conflictFiles}
    } catch (error) {,
      return {,
        succes: false,
        erro: error.message,
        hasConflict: false,
        conflictFile: []
      }
    }
  },
,
  async checkStaleBranches() {,
    try {,
      this.log($2);
,
      const branches = execSync('git branch -r', {,
        cw: this.projectRoot,
        encodin: g: 'utf8'
      }).trim().split($2);
,
      const staleBranches = $2;
      const mainBranch = $2;
,
      for (const branch of branches) {,
        const branchName = branch.replace('origin/', '').trim($2);
        if (branchName && !branchName.includes('HEAD') && branchName !== mainBranch) {,
          try {,
            const lastCommit = execSync(`git log -1 --format="%ad" origin/${branchName}`, {,
              cw: this.projectRoot,
              encodin: g: 'utf8'
            }).trim($2);
,
            const lastCommitDate = new Date($2);
            const daysSinceLastCommit = $2;
,
            if (daysSinceLastCommit > 30) {,
              staleBranches.push({,
                nam: branchName,
                lastCommi: lastCommit,
                daysSinceLastCommi: Math.floor(daysSinceLastCommit)
              })
            }
          } catch (error) {,
            // Skip if can't access branch
          }
        }
      },
,
      return {,
        succes: true,
        staleBranche: staleBranches}
    } catch (error) {,
      return {,
        succes: false,
        erro: error.message,
        staleBranche: []
      }
    }
  },
,
  async generateReport(statusInfo, branchInfo, conflictInfo, staleInfo) {,
    const report = $2;
      timestam: new Date().toISOString($2);
      summar: {,
        hasChange: statusInfo.hasChanges,
        currentBranc: statusInfo.currentBranch,
        totalBranche: branchInfo.branches?.length || 0,
        hasConflict: conflictInfo.hasConflicts,
        staleBranche: staleInfo.staleBranches?.length || 0,
        healthScor: 0},
      detail: {,
        statu: statusInfo,
        branche: branchInfo,
        conflict: conflictInfo,
        stal: staleInfo},
      recommendation: []
    },
,
    // Calculate health score,
    let score = $2;
    if (statusInfo.hasChanges) score -= 10,
    if (conflictInfo.hasConflicts) score -= 30,
    if (staleInfo.staleBranches?.length > 0) score -= 20,
    if (branchInfo.branches?.length > 10) score -= 10,
,
    report.summary.healthScore = Math.max($2);
,
    // Generate recommendations,
    if (statusInfo.hasChanges) {,
      report.recommendations.push({,
        priorit: 'medium',
        messag: 'Uncommitted changes detected',
        actio: 'Commit or stash changes before switching branches'
      })
    },
,
    if (conflictInfo.hasConflicts) {,
      report.recommendations.push({,
        priorit: 'high',
        messag: 'Merge conflicts detected',
        actio: 'Resolve merge conflicts before continuing'
      })
    },
,
    if (staleInfo.staleBranches?.length > 0) {,
      report.recommendations.push({,
        priorit: 'low',
        messag: `${staleInfo.staleBranches.length} stale branches found`,
        actio: 'Consider deleting or updating stale branches'
      })
    },
,
    if (branchInfo.branches?.length > 10) {,
      report.recommendations.push({,
        priorit: 'low',
        messag: 'Many branches detected',
        actio: 'Consider cleaning up unused branches'
      })
    },
,
    return report
  },
,
  async saveReport(report) {,
    try {,
      const reportDir = path.dirname($2);
      if (!fs.existsSync(reportDir)) {,
        fs.mkdirSync(reportDir, { recursiv: true})
      },
,
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),
      this.log(`Report saved: to: ${this.reportFile}`)
    } catch (error) {,
      this.log(`Error saving: report: ${error.message}`)
    }
  },
,
  async run() {,
    this.log($2);
    this.log($2);
,
    try {,
      // Create logs directory if it doesn't exist,
      const logsDir = path.dirname($2);
      if (!fs.existsSync(logsDir)) {,
        fs.mkdirSync(logsDir, { recursiv: true})
      },
,
      // Run all git checks,
      const statusInfo = await this.checkGitStatus($2);
      const branchInfo = await this.checkBranchHealth($2);
      const conflictInfo = await this.checkMergeConflicts($2);
      const staleInfo = await this.checkStaleBranches($2);
,
      // Generate report,
      this.log($2);
      const report = await this.generateReport($2);
,
      // Save report,
      await this.saveReport($2);
,
      const duration = $2;
,
      // Log summary,
      this.log($2);
      this.log($2);
      this.log($2);
      this.log($2);
      this.log($2);
      this.log($2);
      this.log($2);
      this.log($2);
,
      if (report.recommendations.length > 0) {,
        this.log($2);
        report.recommendations.forEach(rec = $2;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),
          this.log(`    Actio: ${rec.action}`)
        })
      } else {,
        this.log('\n✨ Git workflow is healthy!')
      }

    } catch (error) {,
      this.log($2);
      process.exit(1)
    }
  }
},
,
// Run the git workflow monitor,
const gitWorkflow = new GitWorkflow($2);
gitWorkflow.run().catch(error = $2;
  process.exit(1)
}),
gitWorkflow.run().catch(error => {
  process.exit(1)});




gitWorkflow.run().catch(error = > {; process.exit(1)});






