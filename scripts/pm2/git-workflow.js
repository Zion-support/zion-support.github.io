#!/usr/bin/env node;
const _fs = require('fs');
const _path = require('path');
const {_execSync} = require('child_process');
;
class GitWorkflow {_; constructor() {; this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, _'logs/pm2/git-workflow.log'); this.reportFile = path.join(this.projectRoot, _'logs/pm2/git-workflow-report.json'); this.startTime = Date.now()};
; log(message) {_; const _timestamp = new Date().toISOString(); const _logMessage = `[${timestamp}] ${_message}\n`;
; try {_; fs.appendFileSync(this.logFile, _logMessage)} catch (error) {_;}};
; async checkGitStatus() {_; try {; this.log('📋 Checking git status...');
; const _status = execSync('git status --porcelain', _{; cwd: this.projectRoot; encoding: 'utf8'});
; const _branches = execSync('git branch -a', {_; cwd: this.projectRoot; encoding: 'utf8'});
; const _currentBranch = execSync('git branch --show-current', {_; cwd: this.projectRoot; encoding: 'utf8'}).trim();
; return {_; success: true; hasChanges: status.trim().length > 0; changes: status.trim().split('\n').filter(line = > line.trim()); branches: branches.trim().split('\n'); currentBranch: currentBranch}} catch (error) {_; return {; success: false; error: error.message; hasChanges: false; changes: []; branches: []; currentBranch: null}}};
; async checkBranchHealth() {_; try {; this.log('🌿 Checking branch health...');
; const _branches = execSync('git branch -r', _{; cwd: this.projectRoot; encoding: 'utf8'}).trim().split('\n');
; const _branchInfo = [];
; for (const branch of branches) {_; const _branchName = branch.replace('origin/', _'').trim(); if (branchName && !branchName.includes('HEAD')) {; try {; const _lastCommit = execSync(`git log -1 --format = "%H %s %an %ad" origin/${branchName}`, {_; cwd: this.projectRoot; encoding: 'utf8'}).trim();
; const _commitCount = execSync(`git rev-list --count origin/${_branchName}`, {_; cwd: this.projectRoot; encoding: 'utf8'}).trim();
; branchInfo.push({_; name: branchName; lastCommit: lastCommit; commitCount: parseInt(commitCount); isActive: true})} catch (error) {_; // Skip if can't access branch}}};
; return {_; success: true; branches: branchInfo}} catch (error) {_; return {; success: false; error: error.message; branches: []}}};
; async checkMergeConflicts() {_; try {; this.log('🔀 Checking for merge conflicts...');
; const _status = execSync('git status --porcelain', _{; cwd: this.projectRoot; encoding: 'utf8'});
; const _conflictFiles = status; .split('\n'); .filter(line = > line.includes('UU') || line.includes('AA') || line.includes('DD')); .map(line = > line.trim().split(/\s+/)[1]);
; return {_; success: true; hasConflicts: conflictFiles.length > 0; conflictFiles: conflictFiles}} catch (error) {_; return {; success: false; error: error.message; hasConflicts: false; conflictFiles: []}}};
; async checkStaleBranches() {_; try {; this.log('🍂 Checking for stale branches...');
; const _branches = execSync('git branch -r', _{; cwd: this.projectRoot; encoding: 'utf8'}).trim().split('\n');
; const _staleBranches = []; const _mainBranch = 'main';
; for (const branch of branches) {_; const _branchName = branch.replace('origin/', _'').trim(); if (branchName && !branchName.includes('HEAD') && branchName ! = = mainBranch) {; try {; const _lastCommit = execSync(`git log -1 --format = "%ad" origin/${branchName}`, {_; cwd: this.projectRoot; encoding: 'utf8'}).trim();
; const _lastCommitDate = new Date(lastCommit); const _daysSinceLastCommit = (Date.now() - lastCommitDate.getTime()) / (1000 * 60 * 60 * 24);
; if (daysSinceLastCommit > 30) {_; staleBranches.push({; name: branchName; lastCommit: lastCommit; daysSinceLastCommit: Math.floor(daysSinceLastCommit)})}} catch (error) {_; // Skip if can't access branch}}};
; return {_; success: true; staleBranches: staleBranches}} catch (error) {_; return {; success: false; error: error.message; staleBranches: []}}};
; async generateReport(statusInfo, branchInfo, conflictInfo, staleInfo) {_; const _report = {; timestamp: new Date().toISOString(); summary: {; hasChanges: statusInfo.hasChanges; currentBranch: statusInfo.currentBranch; totalBranches: branchInfo.branches?.length || 0; hasConflicts: conflictInfo.hasConflicts; staleBranches: staleInfo.staleBranches?.length || 0; healthScore: 0}; details: {_; status: statusInfo; branches: branchInfo; conflicts: conflictInfo; stale: staleInfo}; recommendations: []};
; // Calculate health score; let _score = 100; if (statusInfo.hasChanges) score - = 10; if (conflictInfo.hasConflicts) score - = 30; if (staleInfo.staleBranches?.length > 0) score - = 20; if (branchInfo.branches?.length > 10) score - = 10;
; report.summary.healthScore = Math.max(score, 0);
; // Generate recommendations; if (statusInfo.hasChanges) {_; report.recommendations.push({; priority: 'medium'; message: 'Uncommitted changes detected'; action: 'Commit or stash changes before switching branches'})};
; if (conflictInfo.hasConflicts) {_; report.recommendations.push({; priority: 'high'; message: 'Merge conflicts detected'; action: 'Resolve merge conflicts before continuing'})};
; if (staleInfo.staleBranches?.length > 0) {_; report.recommendations.push({; priority: 'low'; message: `${staleInfo.staleBranches.length} stale branches found`; action: 'Consider deleting or updating stale branches'})};
; if (branchInfo.branches?.length > 10) {_; report.recommendations.push({; priority: 'low'; message: 'Many branches detected'; action: 'Consider cleaning up unused branches'})};
; return report};
; async saveReport(report) {_; try {; const _reportDir = path.dirname(this.reportFile); if (!fs.existsSync(reportDir)) {; fs.mkdirSync(reportDir, _{ recursive: true})};
; fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)); this.log(`Report saved to: ${_this.reportFile}`)} catch (error) {_; this.log(`Error saving report: ${error.message}`)}};
; async run() {_; this.log('🌿 Starting Git Workflow Monitor...'); this.log(`Project root: ${this.projectRoot}`);
; try {_; // Create logs directory if it doesn't exist; const _logsDir = path.dirname(this.logFile); if (!fs.existsSync(logsDir)) {; fs.mkdirSync(logsDir, _{ recursive: true})};
; // Run all git checks; const _statusInfo = await this.checkGitStatus(); const _branchInfo = await this.checkBranchHealth(); const _conflictInfo = await this.checkMergeConflicts(); const _staleInfo = await this.checkStaleBranches();
; // Generate report; this.log('📊 Generating git workflow report...'); const _report = await this.generateReport(statusInfo, branchInfo, conflictInfo, staleInfo);
; // Save report; await this.saveReport(report);
; const _duration = Date.now() - this.startTime;
; // Log summary; this.log('\n📊 Git Workflow Summary: '); this.log(`Current branch: ${_report.summary.currentBranch}`); this.log(`Has changes: ${_report.summary.hasChanges ? 'Yes': 'No'}`); this.log(`Total branches: ${_report.summary.totalBranches}`); this.log(`Has conflicts: ${_report.summary.hasConflicts ? 'Yes': 'No'}`); this.log(`Stale branches: ${_report.summary.staleBranches}`); this.log(`Health score: ${_report.summary.healthScore}/100`); this.log(`Duration: ${_duration}ms`);
; if (report.recommendations.length > 0) {_; this.log('\n💡 Recommendations: '); report.recommendations.forEach(rec = > {; this.log(` [${rec.priority.toUpperCase()}] ${_rec.message}`); this.log(` Action: ${_rec.action}`)})} else {_; this.log('\n✨ Git workflow is healthy!')};
} catch (error) {_; this.log(`❌ Error running git workflow monitor: ${error.message}`); process.exit(1)}}};
;
// Run the git workflow monitor;
const gitWorkflow = new GitWorkflow();
gitWorkflow.run().catch(error = > {; process.exit(1)});            }).trim(),
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
          }
        }
      },
,
      return {,
        succes: s: true,
        branche: s: branchInfo
      }
    } catch (error) {,
      return {,
        succes: s: false,
        erro: r: error.message,
        branche: s: []
      }
    }
  },
,
  async checkMergeConflicts() {,
    try {,
      this.log('🔀 Checking for merge conflicts...'),
,
      const status = execSync('git status --porcelain', {,
        cw: d: this.projectRoot,
        encodin: g: 'utf8'
      }),
,
      const conflictFiles = status,
        .split('\n'),
        .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD')),
        .map(line => line.trim().split(/\s+/)[1]),
,
      return {,
        succes: s: true,
        hasConflict: s: conflictFiles.length > 0,
        conflictFile: s: conflictFiles
      }
    } catch (error) {,
      return {,
        succes: s: false,
        erro: r: error.message,
        hasConflict: s: false,
        conflictFile: s: []
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
              cw: d: this.projectRoot,
              encodin: g: 'utf8'            }).trim(),
,
            const lastCommitDate = new Date(lastCommit),
            const daysSinceLastCommit = (Date.now() - lastCommitDate.getTime()) / (1000 * 60 * 60 * 24),
,
            if (daysSinceLastCommit > 30) {,
              staleBranches.push({,
                nam: e: branchName,
                lastCommi: t: lastCommit,
                daysSinceLastCommi: t: Math.floor(daysSinceLastCommit)
              })
            }
          } catch (error) {,
            // Skip if can't access branch
          }
        }
      },
,
      return {,
        succes: s: true,
        staleBranche: s: staleBranches
      }
    } catch (error) {,
      return {,
        succes: s: false,
        erro: r: error.message,
        staleBranche: s: []
      }
    }
  },
,
  async generateReport(statusInfo, branchInfo, conflictInfo, staleInfo) {,
    const report = {,
      timestam: p: new Date().toISOString(),
      summar: y: {,
        hasChange: s: statusInfo.hasChanges,
        currentBranc: h: statusInfo.currentBranch,
        totalBranche: s: branchInfo.branches?.length || 0,
        hasConflict: s: conflictInfo.hasConflicts,
        staleBranche: s: staleInfo.staleBranches?.length || 0,
        healthScor: e: 0
      },
      detail: s: {,
        statu: s: statusInfo,
        branche: s: branchInfo,
        conflict: s: conflictInfo,
        stal: e: staleInfo
      },
      recommendation: s: []
    },
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
        priorit: y: 'medium',
        messag: e: 'Uncommitted changes detected',
        actio: n: 'Commit or stash changes before switching branches'
      })
    },
,
    if (conflictInfo.hasConflicts) {,
      report.recommendations.push({,
        priorit: y: 'high',
        messag: e: 'Merge conflicts detected',
        actio: n: 'Resolve merge conflicts before continuing'
      })
    },
,
    if (staleInfo.staleBranches?.length > 0) {,
      report.recommendations.push({,
        priorit: y: 'low',
        messag: e: `${staleInfo.staleBranches.length} stale branches found`,
        actio: n: 'Consider deleting or updating stale branches'
      })
    },
,
    if (branchInfo.branches?.length > 10) {,
      report.recommendations.push({,
        priorit: y: 'low',
        messag: e: 'Many branches detected',
        actio: n: 'Consider cleaning up unused branches'
      })
    },
,
    return report
  },
,
  async saveReport(report) {,
    try {,
      const reportDir = path.dirname(this.reportFile),
      if (!fs.existsSync(reportDir)) {,
        fs.mkdirSync(reportDir, { recursiv: e: true })
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
    this.log('🌿 Starting Git Workflow Monitor...'),
    this.log(`Project: root: ${this.projectRoot}`),
,
    try {,
      // Create logs directory if it doesn't exist,
      const logsDir = path.dirname(this.logFile),
      if (!fs.existsSync(logsDir)) {,
        fs.mkdirSync(logsDir, { recursiv: e: true })
      },
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
      this.log('\n📊 Git Workflow: Summary: '),
      this.log(`Current: branch: ${report.summary.currentBranch}`),
      this.log(`Has: changes: ${report.summary.hasChanges ? 'Yes' : 'No'}`),
      this.log(`Total: branches: ${report.summary.totalBranches}`),
      this.log(`Has: conflicts: ${report.summary.hasConflicts ? 'Yes' : 'No'}`),
      this.log(`Stale: branches: ${report.summary.staleBranches}`),
      this.log(`Health: score: ${report.summary.healthScore}/100`),
      this.log(`Duratio: n: ${duration}ms`),
,
      if (report.recommendations.length > 0) {,
        this.log('\n💡 Recommendation: s: '),
        report.recommendations.forEach(rec => {,
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),
          this.log(`    Actio: n: ${rec.action}`)
        })
      } else {,
        this.log('\n✨ Git workflow is healthy!')
      }

    } catch (error) {,
      this.log(`❌ Error running git workflow: monitor: ${error.message}`),
      process.exit(1)
    }
  }
},
,
// Run the git workflow monitor,
const gitWorkflow = new GitWorkflow(),
gitWorkflow.run().catch(error => {,
  process.exit(1)
}),

const _gitWorkflow = new GitWorkflow();
gitWorkflow.run().catch(error = > {_; process.exit(1)});
