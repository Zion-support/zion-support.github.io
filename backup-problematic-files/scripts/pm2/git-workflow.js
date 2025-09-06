
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
#!/usr/bin/env node,;
const fs = require('fs'),;
const path = require('path'),;
const { execSync } = require('child_process'),;
,;
class GitWorkflow {,;
  constructor() {,;
    this.projectRoot = process.cwd(),;
    this.logFile = path.join(this.projectRoot, 'logs/pm2/git-workflow.log'),;
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/git-workflow-report.json'),;
<<<<<<< HEAD
    this.startTime = Date.now(),;
  };
=======
    this.startTime = Date.now(),
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
  log(message) {,;
    const timestamp = new Date().toISOString(),;
    const logMessage = `[${timestamp}] ${message}\n`,;
,;
    try {,;
      fs.appendFileSync(this.logFile, logMessage),;
    } catch (error) {,;
<<<<<<< HEAD
      console.error('Error writing to log:file:', error.message),;
    };
  };
,;
  async checkGitStatus() {,;
    try {,;
      this.log('📋 Checking git status...'),;
=======
      console.error('Error writing to log:file:', error.message),
}
};
,;
  async checkGitStatus() {,;
    try {,;
      this.log(' Checking git status...'),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
      const status = execSync('git status --porcelain', {,;
        cw:d:this.projectRoot,;
        encodin:g:'utf8',;
      }),;
,;
      const branches = execSync('git branch -a', {,;
        cw:d:this.projectRoot,;
        encodin:g:'utf8',;
      }),;
,;
      const currentBranch = execSync('git branch --show-current', {,;
        cw:d:this.projectRoot,;
        encodin:g:'utf8',;
      }).trim(),;
,;
      return {,;
        succes:s:true,;
        hasChange:s:status.trim().length > 0,;
        change:s:status.trim().split('\n').filter(line => line.trim()),;
        branche:s:branches.trim().split('\n'),;
<<<<<<< HEAD
        currentBranc:h:currentBranch,;
      };
=======
        currentBranc:h:currentBranch,
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    } catch (error) {,;
      return {,;
        succes:s:false,;
        erro:r:error.message,;
        hasChange:s:false,;
        change:s:[],;
        branche:s:[],;
<<<<<<< HEAD
        currentBranc:h:null,;
      };
    };
  };
,;
  async checkBranchHealth() {,;
    try {,;
      this.log('🌿 Checking branch health...'),;
=======
        currentBranc:h:null,
};
    }
};
,;
  async checkBranchHealth() {,;
    try {,;
      this.log(' Checking branch health...'),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
      const branches = execSync('git branch -r', {,;
        cw:d:this.projectRoot,;
        encodin:g:'utf8',;
      }).trim().split('\n'),;
,;
      const branchInfo = [],;
,;
      for (const branch of branches) {,;
        const branchName = branch.replace('origin/', '').trim(),;
        if (branchName && !branchName.includes('HEAD')) {,;
          try {,;
            const lastCommit = execSync(`git log -1 --format="%H %s %an %ad" origin/${branchName}`, {,;
              cw:d:this.projectRoot,;
              encodin:g:'utf8',;
            }).trim(),;
,;
            const commitCount = execSync(`git rev-list --count origin/${branchName}`, {,;
              cw:d:this.projectRoot,;
              encodin:g:'utf8',;
            }).trim(),;
,;
            branchInfo.push({,;
              nam:e:branchName,;
              lastCommi:t:lastCommit,;
              commitCoun:t:parseInt(commitCount),;
              isActiv:e:true,;
            }),;
          } catch (error) {,;
<<<<<<< HEAD
            // Skip if can't access branch,;
          };
        };
      };
,;
      return {,;
        succes:s:true,;
        branche:s:branchInfo,;
      };
=======
            // Skip if can't access branch,
};
        }
};
,;
      return {,;
        succes:s:true,;
        branche:s:branchInfo,
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    } catch (error) {,;
      return {,;
        succes:s:false,;
        erro:r:error.message,;
<<<<<<< HEAD
        branche:s:[],;
      };
    };
  };
,;
  async checkMergeConflicts() {,;
    try {,;
      this.log('🔀 Checking for merge conflicts...'),;
=======
        branche:s:[],
};
    }
};
,;
  async checkMergeConflicts() {,;
    try {,;
      this.log(' Checking for merge conflicts...'),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
      const status = execSync('git status --porcelain', {,;
        cw:d:this.projectRoot,;
        encodin:g:'utf8',;
      }),;
,;
      const conflictFiles = status,;
        .split('\n'),;
        .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD')),;
        .map(line => line.trim().split(/\s+/)[1]),;
,;
      return {,;
        succes:s:true,;
        hasConflict:s:conflictFiles.length > 0,;
<<<<<<< HEAD
        conflictFile:s:conflictFiles,;
      };
=======
        conflictFile:s:conflictFiles,
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    } catch (error) {,;
      return {,;
        succes:s:false,;
        erro:r:error.message,;
        hasConflict:s:false,;
<<<<<<< HEAD
        conflictFile:s:[],;
      };
    };
  };
,;
  async checkStaleBranches() {,;
    try {,;
      this.log('🍂 Checking for stale branches...'),;
=======
        conflictFile:s:[],
};
    }
};
,;
  async checkStaleBranches() {,;
    try {,;
      this.log(' Checking for stale branches...'),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
      const branches = execSync('git branch -r', {,;
        cw:d:this.projectRoot,;
        encodin:g:'utf8',;
      }).trim().split('\n'),;
,;
      const staleBranches = [],;
      const mainBranch = 'main',;
,;
      for (const branch of branches) {,;
        const branchName = branch.replace('origin/', '').trim(),;
        if (branchName && !branchName.includes('HEAD') && branchName !== mainBranch) {,;
          try {,;
            const lastCommit = execSync(`git log -1 --format="%ad" origin/${branchName}`, {,;
              cw:d:this.projectRoot,;
              encodin:g:'utf8',;
            }).trim(),;
,;
            const lastCommitDate = new Date(lastCommit),;
            const daysSinceLastCommit = (Date.now() - lastCommitDate.getTime()) / (1000 * 60 * 60 * 24),;
,;
            if (daysSinceLastCommit > 30) {,;
              staleBranches.push({,;
                nam:e:branchName,;
                lastCommi:t:lastCommit,;
                daysSinceLastCommi:t:Math.floor(daysSinceLastCommit),;
<<<<<<< HEAD
              }),;
            };
          } catch (error) {,;
            // Skip if can't access branch,;
          };
        };
      };
,;
      return {,;
        succes:s:true,;
        staleBranche:s:staleBranches,;
      };
=======
              }),
};
          } catch (error) {,;
            // Skip if can't access branch,
};
        }
};
,;
      return {,;
        succes:s:true,;
        staleBranche:s:staleBranches,
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    } catch (error) {,;
      return {,;
        succes:s:false,;
        erro:r:error.message,;
<<<<<<< HEAD
        staleBranche:s:[],;
      };
    };
  };
=======
        staleBranche:s:[],
};
    }
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
  async generateReport(statusInfo, branchInfo, conflictInfo, staleInfo) {,;
    const report = {,;
      timestam:p:new Date().toISOString(),;
      summar:y:{,;
        hasChange:s:statusInfo.hasChanges,;
        currentBranc:h:statusInfo.currentBranch,;
        totalBranche:s:branchInfo.branches?.length || 0,;
        hasConflict:s:conflictInfo.hasConflicts,;
        staleBranche:s:staleInfo.staleBranches?.length || 0,;
        healthScor:e:0,;
      },;
      detail:s:{,;
        statu:s:statusInfo,;
        branche:s:branchInfo,;
        conflict:s:conflictInfo,;
        stal:e:staleInfo,;
      },;
<<<<<<< HEAD
      recommendation:s:[],;
    };
=======
      recommendation:s:[],
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
    // Calculate health score,;
    let score = 100,;
    if (statusInfo.hasChanges) score -= 10,;
    if (conflictInfo.hasConflicts) score -= 30,;
    if (staleInfo.staleBranches?.length > 0) score -= 20,;
    if (branchInfo.branches?.length > 10) score -= 10,;
,;
    report.summary.healthScore = Math.max(score, 0),;
,;
    // Generate recommendations,;
    if (statusInfo.hasChanges) {,;
      report.recommendations.push({,;
        priorit:y:'medium',;
        messag:e:'Uncommitted changes detected',;
        actio:n:'Commit or stash changes before switching branches',;
<<<<<<< HEAD
      }),;
    };
=======
      }),
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
    if (conflictInfo.hasConflicts) {,;
      report.recommendations.push({,;
        priorit:y:'high',;
        messag:e:'Merge conflicts detected',;
        actio:n:'Resolve merge conflicts before continuing',;
<<<<<<< HEAD
      }),;
    };
=======
      }),
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
    if (staleInfo.staleBranches?.length > 0) {,;
      report.recommendations.push({,;
        priorit:y:'low',;
        messag:e:`${staleInfo.staleBranches.length} stale branches found`,;
        actio:n:'Consider deleting or updating stale branches',;
<<<<<<< HEAD
      }),;
    };
=======
      }),
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
    if (branchInfo.branches?.length > 10) {,;
      report.recommendations.push({,;
        priorit:y:'low',;
        messag:e:'Many branches detected',;
        actio:n:'Consider cleaning up unused branches',;
<<<<<<< HEAD
      }),;
    };
,;
    return report,;
  };
=======
      }),
};
,;
    return report,
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
  async saveReport(report) {,;
    try {,;
      const reportDir = path.dirname(this.reportFile),;
      if (!fs.existsSync(reportDir)) {,;
<<<<<<< HEAD
        fs.mkdirSync(reportDir, { recursiv:e:true }),;
      };
=======
        fs.mkdirSync(reportDir, { recursiv:e:true }),
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),;
      this.log(`Report saved:to:${this.reportFile}`),;
    } catch (error) {,;
<<<<<<< HEAD
      this.log(`Error saving:report:${error.message}`),;
    };
  };
,;
  async run() {,;
    this.log('🌿 Starting Git Workflow Monitor...'),;
=======
      this.log(`Error saving:report:${error.message}`),
}
};
,;
  async run() {,;
    this.log(' Starting Git Workflow Monitor...'),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    this.log(`Project:root:${this.projectRoot}`),;
,;
    try {,;
      // Create logs directory if it doesn't exist,;
      const logsDir = path.dirname(this.logFile),;
      if (!fs.existsSync(logsDir)) {,;
<<<<<<< HEAD
        fs.mkdirSync(logsDir, { recursiv:e:true }),;
      };
=======
        fs.mkdirSync(logsDir, { recursiv:e:true }),
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
      // Run all git checks,;
      const statusInfo = await this.checkGitStatus(),;
      const branchInfo = await this.checkBranchHealth(),;
      const conflictInfo = await this.checkMergeConflicts(),;
      const staleInfo = await this.checkStaleBranches(),;
,;
      // Generate report,;
<<<<<<< HEAD
      this.log('📊 Generating git workflow report...'),;
=======
      this.log(' Generating git workflow report...'),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      const report = await this.generateReport(statusInfo, branchInfo, conflictInfo, staleInfo),;
,;
      // Save report,;
      await this.saveReport(report),;
,;
      const duration = Date.now() - this.startTime,;
,;
      // Log summary,;
<<<<<<< HEAD
      this.log('\n📊 Git Workflow:Summary:'),;
=======
      this.log('\n Git Workflow:Summary:'),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      this.log(`Current:branch:${report.summary.currentBranch}`),;
      this.log(`Has:changes:${report.summary.hasChanges ? 'Yes' :'No'}`),;
      this.log(`Total:branches:${report.summary.totalBranches}`),;
      this.log(`Has:conflicts:${report.summary.hasConflicts ? 'Yes' :'No'}`),;
      this.log(`Stale:branches:${report.summary.staleBranches}`),;
      this.log(`Health:score:${report.summary.healthScore}/100`),;
      this.log(`Duratio:n:${duration}ms`),;
,;
      if (report.recommendations.length > 0) {,;
<<<<<<< HEAD
        this.log('\n💡 Recommendation:s:'),;
=======
        this.log('\n Recommendation:s:'),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        report.recommendations.forEach(rec => {,;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),;
          this.log(`    Actio:n:${rec.action}`),;
        }),;
      } else {,;
<<<<<<< HEAD
        this.log('\n✨ Git workflow is healthy!'),;
      };
,;
    } catch (error) {,;
      this.log(`❌ Error running git workflow:monitor:${error.message}`),;
      process.exit(1),;
    };
  };
=======
        this.log('\n Git workflow is healthy!'),
};
,;
    } catch (error) {,;
      this.log(` Error running git workflow:monitor:${error.message}`),;
      process.exit(1),
};
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
,;
// Run the git workflow monitor,;
const gitWorkflow = new GitWorkflow(),;
gitWorkflow.run().catch(error => {,;
  process.exit(1),;
}),;
;#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
;
class GitWorkflow {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/git-workflow.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/git-workflow-report.json');
<<<<<<< HEAD
    this.startTime = Date.now();
=======
    this.startTime = Date.now()
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
;
  log(message) {;
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
;
    try {;
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {;
<<<<<<< HEAD
      console.error('Error writing to log file:', error.message);
};
=======
      console.error('Error writing to log file:', error.message)
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
;
  async checkGitStatus() {;
    try {;
<<<<<<< HEAD
      this.log('📋 Checking git status...');
=======
      this.log(' Checking git status...');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
      const status = execSync('git status --porcelain', {;
        cwd: this.projectRoot;
        encoding: 'utf8';
      });
;
      const branches = execSync('git branch -a', {;
        cwd: this.projectRoot;
        encoding: 'utf8';
      });
;
      const currentBranch = execSync('git branch --show-current', {;
        cwd: this.projectRoot;
        encoding: 'utf8';
      }).trim();
;
      return {;
        success: true;
        hasChanges: status.trim().length > 0;
        changes: status.trim().split('\n').filter(line => line.trim());
        branches: branches.trim().split('\n');
        currentBranch: currentBranch;
      ;
    } catch (error) {;
      return {;
        success: false;
        error: error.message;
        hasChanges: false;
        changes: [];
        branches: [];
<<<<<<< HEAD
        currentBranch: null;
      ;
=======
        currentBranch: null
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
};
;
  async checkBranchHealth() {;
    try {;
<<<<<<< HEAD
      this.log('🌿 Checking branch health...');
=======
      this.log(' Checking branch health...');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
      const branches = execSync('git branch -r', {;
        cwd: this.projectRoot;
        encoding: 'utf8';
      }).trim().split('\n');
;
      const branchInfo = [];
;
      for (const branch of branches) {;
        const branchName = branch.replace('origin/', '').trim();
        if (branchName && !branchName.includes('HEAD')) {;
          try {;
            const lastCommit = execSync(`git log -1 --format="%H %s %an %ad" origin/${branchName}`, {;
              cwd: this.projectRoot;
              encoding: 'utf8';
            }).trim();
;
            const commitCount = execSync(`git rev-list --count origin/${branchName}`, {;
              cwd: this.projectRoot;
              encoding: 'utf8';
            }).trim();
;
            branchInfo.push({;
              name: branchName;
              lastCommit: lastCommit;
              commitCount: parseInt(commitCount);
              isActive: true;
            });
          } catch (error) {;
<<<<<<< HEAD
            // Skip if can't access branch;
          };
        };
      };
=======
            // Skip if can't access branch
};
        }
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
      return {;
        success: true;
        branches: branchInfo;
      ;
    } catch (error) {;
      return {;
        success: false;
        error: error.message;
<<<<<<< HEAD
        branches: [];
      ;
=======
        branches: []
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
};
;
  async checkMergeConflicts() {;
    try {;
<<<<<<< HEAD
      this.log('🔀 Checking for merge conflicts...');
=======
      this.log(' Checking for merge conflicts...');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
      const status = execSync('git status --porcelain', {;
        cwd: this.projectRoot;
        encoding: 'utf8';
      });
;
      const conflictFiles = status;
        .split('\n');
        .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'));
        .map(line => line.trim().split(/\s+/)[1]);
;
      return {;
        success: true;
        hasConflicts: conflictFiles.length > 0;
        conflictFiles: conflictFiles;
      ;
    } catch (error) {;
      return {;
        success: false;
        error: error.message;
        hasConflicts: false;
<<<<<<< HEAD
        conflictFiles: [];
      ;
=======
        conflictFiles: []
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
};
;
  async checkStaleBranches() {;
    try {;
<<<<<<< HEAD
      this.log('🍂 Checking for stale branches...');
=======
      this.log(' Checking for stale branches...');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
      const branches = execSync('git branch -r', {;
        cwd: this.projectRoot;
        encoding: 'utf8';
      }).trim().split('\n');
;
      const staleBranches = [];
      const mainBranch = 'main';
;
      for (const branch of branches) {;
        const branchName = branch.replace('origin/', '').trim();
        if (branchName && !branchName.includes('HEAD') && branchName !== mainBranch) {;
          try {;
            const lastCommit = execSync(`git log -1 --format="%ad" origin/${branchName}`, {;
              cwd: this.projectRoot;
              encoding: 'utf8';
            }).trim();
;
            const lastCommitDate = new Date(lastCommit);
            const daysSinceLastCommit = (Date.now() - lastCommitDate.getTime()) / (1000 * 60 * 60 * 24);
;
            if (daysSinceLastCommit > 30) {;
              staleBranches.push({;
                name: branchName;
                lastCommit: lastCommit;
                daysSinceLastCommit: Math.floor(daysSinceLastCommit);
<<<<<<< HEAD
              });
            };
          } catch (error) {;
            // Skip if can't access branch;
          };
        };
      };
=======
              })
};
          } catch (error) {;
            // Skip if can't access branch
};
        }
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
      return {;
        success: true;
        staleBranches: staleBranches;
      ;
    } catch (error) {;
      return {;
        success: false;
        error: error.message;
<<<<<<< HEAD
        staleBranches: [];
      ;
=======
        staleBranches: []
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
};
;
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
      ;
      details: {;
        status: statusInfo;
        branches: branchInfo;
        conflicts: conflictInfo;
        stale: staleInfo;
      ;
      recommendations: [];
    // Calculate health score;
    let score = 100;
    if (statusInfo.hasChanges) score -= 10;
    if (conflictInfo.hasConflicts) score -= 30;
    if (staleInfo.staleBranches?.length > 0) score -= 20;
    if (branchInfo.branches?.length > 10) score -= 10;
;
    report.summary.healthScore = Math.max(score, 0);
;
    // Generate recommendations;
    if (statusInfo.hasChanges) {;
      report.recommendations.push({;
        priority: 'medium';
        message: 'Uncommitted changes detected';
        action: 'Commit or stash changes before switching branches';
<<<<<<< HEAD
      });
=======
      })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
;
    if (conflictInfo.hasConflicts) {;
      report.recommendations.push({;
        priority: 'high';
        message: 'Merge conflicts detected';
        action: 'Resolve merge conflicts before continuing';
<<<<<<< HEAD
      });
=======
      })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
;
    if (staleInfo.staleBranches?.length > 0) {;
      report.recommendations.push({;
        priority: 'low';
        message: `${staleInfo.staleBranches.length} stale branches found`;
        action: 'Consider deleting or updating stale branches';
<<<<<<< HEAD
      });
=======
      })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
;
    if (branchInfo.branches?.length > 10) {;
      report.recommendations.push({;
        priority: 'low';
        message: 'Many branches detected';
        action: 'Consider cleaning up unused branches';
<<<<<<< HEAD
      });
};
;
    return report;
=======
      })
};
;
    return report
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
;
  async saveReport(report) {;
    try {;
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {;
<<<<<<< HEAD
        fs.mkdirSync(reportDir, { recursive: true });
      };
=======
        fs.mkdirSync(reportDir, { recursive: true })
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved to: ${this.reportFile}`);
    } catch (error) {;
<<<<<<< HEAD
      this.log(`Error saving report: ${error.message}`);
};
};
;
  async run() {;
    this.log('🌿 Starting Git Workflow Monitor...');
=======
      this.log(`Error saving report: ${error.message}`)
}
};
;
  async run() {;
    this.log(' Starting Git Workflow Monitor...');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    this.log(`Project root: ${this.projectRoot}`);
;
    try {;
      // Create logs directory if it doesn't exist;
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {;
<<<<<<< HEAD
        fs.mkdirSync(logsDir, { recursive: true });
      };
=======
        fs.mkdirSync(logsDir, { recursive: true })
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
      // Run all git checks;
      const statusInfo = await this.checkGitStatus();
      const branchInfo = await this.checkBranchHealth();
      const conflictInfo = await this.checkMergeConflicts();
      const staleInfo = await this.checkStaleBranches();
;
      // Generate report;
<<<<<<< HEAD
      this.log('📊 Generating git workflow report...');
=======
      this.log(' Generating git workflow report...');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      const report = await this.generateReport(statusInfo, branchInfo, conflictInfo, staleInfo);
;
      // Save report;
      await this.saveReport(report);
;
      const duration = Date.now() - this.startTime;
;
      // Log summary;
<<<<<<< HEAD
      this.log('\n📊 Git Workflow Summary: ');
=======
      this.log('\n Git Workflow Summary: ');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      this.log(`Current branch: ${report.summary.currentBranch}`);
      this.log(`Has changes: ${report.summary.hasChanges ? 'Yes' : 'No'}`);
      this.log(`Total branches: ${report.summary.totalBranches}`);
      this.log(`Has conflicts: ${report.summary.hasConflicts ? 'Yes' : 'No'}`);
      this.log(`Stale branches: ${report.summary.staleBranches}`);
      this.log(`Health score: ${report.summary.healthScore}/100`);
      this.log(`Duration: ${duration}ms`);
;
      if (report.recommendations.length > 0) {;
<<<<<<< HEAD
        this.log('\n💡 Recommendations: ');
=======
        this.log('\n Recommendations: ');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        report.recommendations.forEach(rec => {;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Action: ${rec.action}`);
        });
      } else {;
<<<<<<< HEAD
        this.log('\n✨ Git workflow is healthy!');
      };
;
    } catch (error) {;
      this.log(`❌ Error running git workflow monitor: ${error.message}`);
      process.exit(1);
};
};
=======
        this.log('\n Git workflow is healthy!')
};
;
    } catch (error) {;
      this.log(` Error running git workflow monitor: ${error.message}`);
      process.exit(1)
};
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
;
// Run the git workflow monitor;
const gitWorkflow = new GitWorkflow();
gitWorkflow.run().catch(error = > {; process.exit(1)});            }).trim(),,
            const commitCount = execSync(`git rev-list --count origin/${branchName}`, {,
              cwd: this.projectRoot,
              encoding: 'utf8'
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            }).trim(),
,
            branchInfo.push({,
              name: branchName,
              lastCommit: lastCommit,
              commitCount: parseInt(commitCount),
<<<<<<< HEAD
<<<<<<< HEAD

          };
        };
      };
,
      return {,
        success: true,

=======
              isActive: true
            })
          } catch (error) {,
            // Skip if can't access branch
          }
}
};
,
      return {,
        success: true,
        branches: branchInfo
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      };
    } catch (error) {,
      return {,
        success: false,
        error: error.message,
<<<<<<< HEAD

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

=======
        branches: []
      }
}
};
,
  async checkMergeConflicts() {,
    try {,
      this.log(' Checking for merge conflicts...'),
,
      const status = execSync('git status --porcelain', {,
        cwd: this.projectRoot,
        encoding: 'utf8'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD

=======
        conflictFiles: conflictFiles
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      };
    } catch (error) {,
      return {,
        success: false,
        error: error.message,
        hasConflicts: false,
<<<<<<< HEAD

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

=======
        conflictFiles: []
      }
}
};
,
  async checkStaleBranches() {,
    try {,
      this.log(' Checking for stale branches...'),
,
      const branches = execSync('git branch -r', {,
        cwd: this.projectRoot,
        encoding: 'utf8'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD

=======
              cw: d: this.projectRoot,
              encodin: g: 'utf8'            }).trim(),,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            const lastCommitDate = new Date(lastCommit),
            const daysSinceLastCommit = (Date.now() - lastCommitDate.getTime()) / (1000 * 60 * 60 * 24),
,
            if (daysSinceLastCommit > 30) {,
              staleBranches.push({,
                name: branchName,
                lastCommit: lastCommit,
<<<<<<< HEAD

          };
        };
      };
,
      return {,
        success: true,

=======
                daysSinceLastCommit: Math.floor(daysSinceLastCommit)
              })
            };
          } catch (error) {,
            // Skip if can't access branch
          }
}
};
,
      return {,
        success: true,
        staleBranches: staleBranches
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      };
    } catch (error) {,
      return {,
        success: false,
        error: error.message,
<<<<<<< HEAD

      };
    };
  };
=======
        staleBranches: []
      }
}
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD

=======
        healthScore: 0
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      },
      details: {,
        status: statusInfo,
        branches: branchInfo,
        conflicts: conflictInfo,
<<<<<<< HEAD

=======
        stale: staleInfo
      },
      recommendations: []
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD

=======
        action: 'Commit or stash changes before switching branches'
      })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    };
,
    if (conflictInfo.hasConflicts) {,
      report.recommendations.push({,
        priority: 'high',
        message: 'Merge conflicts detected',
<<<<<<< HEAD

=======
        action: 'Resolve merge conflicts before continuing'
      })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    };
,
    if (staleInfo.staleBranches?.length > 0) {,
      report.recommendations.push({,
        priority: 'low',
        message: `${staleInfo.staleBranches.length} stale branches found`,
<<<<<<< HEAD

=======
        action: 'Consider deleting or updating stale branches'
      })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    };
,
    if (branchInfo.branches?.length > 10) {,
      report.recommendations.push({,
        priority: 'low',
        message: 'Many branches detected',
<<<<<<< HEAD

=======
        action: 'Consider cleaning up unused branches'
      })
    };
,
    return report
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  };
,
  async saveReport(report) {,
    try {,
      const reportDir = path.dirname(this.reportFile),
      if (!fs.existsSync(reportDir)) {,
<<<<<<< HEAD

    };
  };
,
  async run() {,
    this.log('🌿 Starting Git Workflow Monitor...'),
=======
        fs.mkdirSync(reportDir, { recursive: true })
      };
,
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),
      this.log(`Report saved to: ${this.reportFile}`)
    } catch (error) {,
      this.log(`Error saving report: ${error.message}`)
    }
};
,
  async run() {,
    this.log(' Starting Git Workflow Monitor...'),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    this.log(`Project root: ${this.projectRoot}`),
,
    try {,
      // Create logs directory if it doesn't exist,
      const logsDir = path.dirname(this.logFile),
      if (!fs.existsSync(logsDir)) {,
<<<<<<< HEAD

=======
        fs.mkdirSync(logsDir, { recursive: true })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      };
,
      // Run all git checks,
      const statusInfo = await this.checkGitStatus(),
      const branchInfo = await this.checkBranchHealth(),
      const conflictInfo = await this.checkMergeConflicts(),
      const staleInfo = await this.checkStaleBranches(),
,
      // Generate report,
<<<<<<< HEAD
      this.log('📊 Generating git workflow report...'),
=======
      this.log(' Generating git workflow report...'),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      const report = await this.generateReport(statusInfo, branchInfo, conflictInfo, staleInfo),
,
      // Save report,
      await this.saveReport(report),
,
      const duration = Date.now() - this.startTime,
,
      // Log summary,
<<<<<<< HEAD
      this.log('\n📊 Git Workflow Summary: '),
=======
      this.log('\n Git Workflow Summary: '),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      this.log(`Current branch: ${report.summary.currentBranch}`),
      this.log(`Has changes: ${report.summary.hasChanges ? 'Yes' : 'No'}`),
      this.log(`Total branches: ${report.summary.totalBranches}`),
      this.log(`Has conflicts: ${report.summary.hasConflicts ? 'Yes' : 'No'}`),
      this.log(`Stale branches: ${report.summary.staleBranches}`),
      this.log(`Health score: ${report.summary.healthScore}/100`),
      this.log(`Duration: ${duration}ms`),
,
      if (report.recommendations.length > 0) {,
<<<<<<< HEAD
        this.log('\n💡 Recommendations: '),
        report.recommendations.forEach(rec => {,
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),

    };
  };
=======
        this.log('\n Recommendations: '),
        report.recommendations.forEach(rec => {,
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),
          this.log(`    Action: ${rec.action}`)
        })
      } else {,
        this.log('\n Git workflow is healthy!')
      };

    } catch (error) {,
      this.log(` Error running git workflow monitor: ${error.message}`),
      process.exit(1)
    }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
,
// Run the git workflow monitor,
const gitWorkflow = new GitWorkflow(),
gitWorkflow.run().catch(error => {,
<<<<<<< HEAD

=======
  process.exit(1)
}),

const _gitWorkflow = new GitWorkflow();
gitWorkflow.run().catch(error = > {_; process.exit(1)});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
