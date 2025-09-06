<<<<<<< HEAD
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
<<<<<<< HEAD
class GitWorkflow {constructor() {; this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, 'logs/pm2/git-workflow.log'); this.reportFile = path.join(this.projectRoot, 'logs/pm2/git-workflow-report.json'); this.startTime = Date.now()}; log(message) {const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; try {fs.appendFileSync(this.logFile, logMessage)} catch (error) {console.error('Error writing to log file: ', error.message)}}; async checkGitStatus() {try {; this.log('📋 Checking git status...'); const status = execSync('git status --porcelain', {; cwd: this.projectRoot
    encoding: 'utf8'}); const branches = execSync('git branch -a', {cwd: this.projectRoot
    encoding: 'utf8'}); const currentBranch = execSync('git branch --show-current', {cwd: this.projectRoot
    encoding: 'utf8'}).trim(); return {success: true, hasChanges: status.trim().length > 0, changes: status.trim().split('\n').filter(line = > line.trim()), branches: branches.trim().split('\n'), currentBranch: currentBranch}} catch (error) {return {; success: false, error: error.message, hasChanges: false, changes: [], branches: []
    currentBranch: null}}}; async checkBranchHealth() {try {; this.log('🌿 Checking branch health...'); const branches = execSync('git branch -r', {; cwd: this.projectRoot
    encoding: 'utf8'}).trim().split('\n'); const branchInfo = []; for (const branch of branches) {const branchName = branch.replace('origin/', '').trim(); if (branchName && !branchName.includes('HEAD')) {; try {; const lastCommit = execSync(`git log -1 --format = "%H %s %an %ad" origin/${branchName}`, {cwd: this.projectRoot
    encoding: 'utf8'}).trim(); const commitCount = execSync(`git rev-list --count origin/${branchName}`, {cwd: this.projectRoot
    encoding: 'utf8'}).trim(); branchInfo.push({name: branchName, lastCommit: lastCommit, commitCount: parseInt(commitCount)
    isActive: true})} catch (error) {// Skip if can't access branch}}}; return {success: true
    branches: branchInfo}} catch (error) {return {; success: false, error: error.message, branches: []}}}; async checkMergeConflicts() {try {; this.log('🔀 Checking for merge conflicts...'); const status = execSync('git status --porcelain', {; cwd: this.projectRoot
    encoding: 'utf8'}); const conflictFiles = status; .split('\n'); .filter(line = > line.includes('UU') |line.includes('AA') |line.includes('DD')); .map(line = > line.trim().split(/\s+/)[1]); return {success: true, hasConflicts: conflictFiles.length > 0, conflictFiles: conflictFiles}} catch (error) {return {; success: false, error: error.message, hasConflicts: false
    conflictFiles: []}}}; async checkStaleBranches() {try {; this.log('🍂 Checking for stale branches...'); const branches = execSync('git branch -r', {; cwd: this.projectRoot
    encoding: 'utf8'}).trim().split('\n'); const staleBranches = []; const mainBranch = 'main'; for (const branch of branches) {const branchName = branch.replace('origin/', '').trim(); if (branchName && !branchName.includes('HEAD') && branchName ! = = mainBranch) {; try {; const lastCommit = execSync(`git log -1 --format = "%ad" origin/${branchName}`, {cwd: this.projectRoot
    encoding: 'utf8'}).trim(); const lastCommitDate = new Date(lastCommit); const daysSinceLastCommit = (Date.now() - lastCommitDate.getTime()) / (1000 * 60 * 60 * 24); if (daysSinceLastCommit > 30) {staleBranches.push({; name: branchName, lastCommit: lastCommit, daysSinceLastCommit: Math.floor(daysSinceLastCommit)})}} catch (error) {// Skip if can't access branch}}}; return {success: true
    staleBranches: staleBranches}} catch (error) {return {; success: false, error: error.message, staleBranches: []}}}; async generateReport(statusInfo, branchInfo, conflictInfo, staleInfo) {const report = {; timestamp: new Date().toISOString(), summary: {
      , hasChanges: statusInfo.hasChanges, currentBranch: statusInfo.currentBranch, totalBranches: branchInfo.branches?.length |0, hasConflicts: conflictInfo.hasConflicts, staleBranches: staleInfo.staleBranches?.length |0
    healthScore: 0
    }
    details: {, status: statusInfo, branches: branchInfo, conflicts: conflictInfo, stale: staleInfo}; recommendations: []}; // Calculate health score; let score = 100; if (statusInfo.hasChanges) score - = 10; if (conflictInfo.hasConflicts) score - = 30; if (staleInfo.staleBranches?.length > 0) score - = 20; if (branchInfo.branches?.length > 10) score - = 10; report.summary.healthScore = Math.max(score, 0); // Generate recommendations; if (statusInfo.hasChanges) {report.recommendations.push({; priority: 'medium', message: 'Uncommitted changes detected', action: 'Commit or stash changes before switching branches'})}; if (conflictInfo.hasConflicts) {report.recommendations.push({; priority: 'high', message: 'Merge conflicts detected', action: 'Resolve merge conflicts before continuing'})}; if (staleInfo.staleBranches?.length > 0) {report.recommendations.push({; priority: 'low'
    message: `${staleInfo.staleBranches.length} stale branches found`; action: 'Consider deleting or updating stale branches'})}; if (branchInfo.branches?.length > 10) {report.recommendations.push({; priority: 'low', message: 'Many branches detected', action: 'Consider cleaning up unused branches'})}; return report}; async saveReport(report) {try {; const reportDir = path.dirname(this.reportFile); if (!fs.existsSync(reportDir)) {; fs.mkdirSync(reportDir, { recursive: true })}; fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)); this.log(`Report saved to: ${this.reportFile}`)} catch (error) {this.log(`Error saving report: ${error.message}`)}}; async run() {this.log('🌿 Starting Git Workflow Monitor...'); this.log(`Project root: ${this.projectRoot}`); try {// Create logs directory if it doesn't exist; const logsDir = path.dirname(this.logFile); if (!fs.existsSync(logsDir)) {; fs.mkdirSync(logsDir, { recursive: true })}; // Run all git checks; const statusInfo = await this.checkGitStatus(); const branchInfo = await this.checkBranchHealth(); const conflictInfo = await this.checkMergeConflicts(); const staleInfo = await this.checkStaleBranches(); // Generate report; this.log('📊 Generating git workflow report...'); const report = await this.generateReport(statusInfo, branchInfo, conflictInfo, staleInfo); // Save report; await this.saveReport(report); const duration = Date.now() - this.startTime; // Log summary; this.log('\n📊 Git Workflow Summary: '); this.log(`Current branch: ${report.summary.currentBranch}`); this.log(`Has changes: ${report.summary.hasChanges ? 'Yes': 'No'}`); this.log(`Total branches: ${report.summary.totalBranches}`); this.log(`Has conflicts: ${report.summary.hasConflicts ? 'Yes': 'No'}`); this.log(`Stale branches: ${report.summary.staleBranches}`); this.log(`Health score: ${report.summary.healthScore}/100`); this.log(`Duration: ${duration}ms`); if (report.recommendations.length > 0) {this.log('\n💡 Recommendations: '), report.recommendations.forEach(rec = > {, this.log(` [${rec.priority.toUpperCase()}] ${rec.message}`); this.log(` Action: ${rec.action}`)})} else {this.log('\n✨ Git workflow is healthy!')}
} catch (error) {this.log(`❌ Error running git workflow monitor: ${error.message}`); process.exit(1)}}}
// Run the git workflow monitor;
const gitWorkflow = new GitWorkflow();
gitWorkflow.run().catch(error = > {process.exit(1)});
=======

class GitWorkflow {; constructor() {; this && this.projectRoot = process && process.cwd(); this && this.logFile = path && path.join(this && this.projectRoot, 'logs/pm2/git-workflow && workflow.log'); this && this.reportFile = path && path.join(this && this.projectRoot, 'logs/pm2/git-workflow-report && report.json'); this && this.startTime = Date && Date.now()};
; log(message) {; const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`;
; try {; fs && fs.appendFileSync(this && this.logFile, logMessage)} catch (error) {; console && console.error('Error writing to log file: ', error && error.message)}};
; async checkGitStatus() {; try {; this && this.log('📋 Checking git status...');
; const status = execSync('git status --porcelain', {; cwd: this && this.projectRoot,
    encoding: 'utf8'});
; const branches = execSync('git branch -a', {; cwd: this && this.projectRoot,
    encoding: 'utf8'});
; const currentBranch = execSync('git branch --show-current', {; cwd: this && this.projectRoot,
    encoding: 'utf8'}).trim();
; return {; success: true, hasChanges: status && status.trim().length > 0, changes: status && status.trim().split('\n').filter(line = > line && line.trim()), branches: branches && branches.trim().split('\n'), currentBranch: currentBranch}} catch (error) {; return {; success: false, error: error && error.message, hasChanges: false, changes: [], branches: [],
    currentBranch: null}}};
; async checkBranchHealth() {; try {; this && this.log('🌿 Checking branch health...');
; const branches = execSync('git branch -r', {; cwd: this && this.projectRoot,
    encoding: 'utf8'}).trim().split('\n');
; const branchInfo = [];
; for (const branch of branches) {; const branchName = branch && branch.replace('origin/', '').trim(); if (branchName && !branchName && branchName.includes('HEAD')) {; try {; const lastCommit = execSync(`git log -1 --format = "%H %s %an %ad" origin/${branchName}`, {; cwd: this && this.projectRoot,
    encoding: 'utf8'}).trim();
; const commitCount = execSync(`git rev-list --count origin/${branchName}`, {; cwd: this && this.projectRoot,
    encoding: 'utf8'}).trim();
; branchInfo && branchInfo.push({; name: branchName, lastCommit: lastCommit, commitCount: parseInt(commitCount),
    isActive: true})} catch (error) {; // Skip if can't access branch}}};
; return {; success: true,
    branches: branchInfo}} catch (error) {; return {; success: false, error: error && error.message, branches: []}}};
; async checkMergeConflicts() {; try {; this && this.log('🔀 Checking for merge conflicts...');
; const status = execSync('git status --porcelain', {; cwd: this && this.projectRoot,
    encoding: 'utf8'});
; const conflictFiles = status; .split('\n'); .filter(line = > line && line.includes('UU') || line && line.includes('AA') || line && line.includes('DD')); .map(line = > line && line.trim().split(/\s+/)[1]);
; return {; success: true, hasConflicts: conflictFiles && conflictFiles.length > 0, conflictFiles: conflictFiles}} catch (error) {; return {; success: false, error: error && error.message, hasConflicts: false,
    conflictFiles: []}}};
; async checkStaleBranches() {; try {; this && this.log('🍂 Checking for stale branches...');
; const branches = execSync('git branch -r', {; cwd: this && this.projectRoot,
    encoding: 'utf8'}).trim().split('\n');
; const staleBranches = []; const mainBranch = 'main';
; for (const branch of branches) {; const branchName = branch && branch.replace('origin/', '').trim(); if (branchName && !branchName && branchName.includes('HEAD') && branchName ! = = mainBranch) {; try {; const lastCommit = execSync(`git log -1 --format = "%ad" origin/${branchName}`, {; cwd: this && this.projectRoot,
    encoding: 'utf8'}).trim();
; const lastCommitDate = new Date(lastCommit); const daysSinceLastCommit = (Date && Date.now() - lastCommitDate && lastCommitDate.getTime()) / (1000 * 60 * 60 * 24);
; if (daysSinceLastCommit > 30) {; staleBranches && staleBranches.push({; name: branchName, lastCommit: lastCommit, daysSinceLastCommit: Math && Math.floor(daysSinceLastCommit)})}} catch (error) {; // Skip if can't access branch}}};
; return {; success: true,
    staleBranches: staleBranches}} catch (error) {; return {; success: false, error: error && error.message, staleBranches: []}}};
; async generateReport(statusInfo, branchInfo, conflictInfo, staleInfo) {; const report = {; timestamp: new Date().toISOString(), summary: {
      , hasChanges: statusInfo && statusInfo.hasChanges, currentBranch: statusInfo && statusInfo.currentBranch, totalBranches: branchInfo && branchInfo.branches?.length || 0, hasConflicts: conflictInfo && conflictInfo.hasConflicts, staleBranches: staleInfo && staleInfo.staleBranches?.length || 0,
    healthScore: 0
    },
    details: {, status: statusInfo, branches: branchInfo, conflicts: conflictInfo, stale: staleInfo}; recommendations: []};
; // Calculate health score; let score = 100; if (statusInfo && statusInfo.hasChanges) score - = 10; if (conflictInfo && conflictInfo.hasConflicts) score - = 30; if (staleInfo && staleInfo.staleBranches?.length > 0) score - = 20; if (branchInfo && branchInfo.branches?.length > 10) score - = 10;
; report && report.summary.healthScore = Math && Math.max(score, 0);
; // Generate recommendations; if (statusInfo && statusInfo.hasChanges) {; report && report.recommendations.push({; priority: 'medium', message: 'Uncommitted changes detected', action: 'Commit or stash changes before switching branches'})};
; if (conflictInfo && conflictInfo.hasConflicts) {; report && report.recommendations.push({; priority: 'high', message: 'Merge conflicts detected', action: 'Resolve merge conflicts before continuing'})};
; if (staleInfo && staleInfo.staleBranches?.length > 0) {; report && report.recommendations.push({; priority: 'low',
    message: `${staleInfo && staleInfo.staleBranches.length} stale branches found`; action: 'Consider deleting or updating stale branches'})};
; if (branchInfo && branchInfo.branches?.length > 10) {; report && report.recommendations.push({; priority: 'low', message: 'Many branches detected', action: 'Consider cleaning up unused branches'})};
; return report};
; async saveReport(report) {; try {; const reportDir = path && path.dirname(this && this.reportFile); if (!fs && fs.existsSync(reportDir)) {; fs && fs.mkdirSync(reportDir, { recursive: true })};
; fs && fs.writeFileSync(this && this.reportFile, JSON && JSON.stringify(report, null, 2)); this && this.log(`Report saved to: ${this && this.reportFile}`)} catch (error) {; this && this.log(`Error saving report: ${error && error.message}`)}};
; async run() {; this && this.log('🌿 Starting Git Workflow Monitor...'); this && this.log(`Project root: ${this && this.projectRoot}`);
; try {; // Create logs directory if it doesn't exist; const logsDir = path && path.dirname(this && this.logFile); if (!fs && fs.existsSync(logsDir)) {; fs && fs.mkdirSync(logsDir, { recursive: true })};
; // Run all git checks; const statusInfo = await this && this.checkGitStatus(); const branchInfo = await this && this.checkBranchHealth(); const conflictInfo = await this && this.checkMergeConflicts(); const staleInfo = await this && this.checkStaleBranches();
; // Generate report; this && this.log('📊 Generating git workflow report...'); const report = await this && this.generateReport(statusInfo, branchInfo, conflictInfo, staleInfo);
; // Save report; await this && this.saveReport(report);
; const duration = Date && Date.now() - this && this.startTime;
; // Log summary; this && this.log('\n📊 Git Workflow Summary: '); this && this.log(`Current branch: ${report && report.summary.currentBranch}`); this && this.log(`Has changes: ${report && report.summary.hasChanges ? 'Yes': 'No'}`); this && this.log(`Total branches: ${report && report.summary.totalBranches}`); this && this.log(`Has conflicts: ${report && report.summary.hasConflicts ? 'Yes': 'No'}`); this && this.log(`Stale branches: ${report && report.summary.staleBranches}`); this && this.log(`Health score: ${report && report.summary.healthScore}/100`); this && this.log(`Duration: ${duration}ms`);
; if (report && report.recommendations.length > 0) {; this && this.log('\n💡 Recommendations: '), report && report.recommendations.forEach(rec = > {, this && this.log(` [${rec && rec.priority.toUpperCase()}] ${rec && rec.message}`); this && this.log(` Action: ${rec && rec.action}`)})} else {; this && this.log('\n✨ Git workflow is healthy!')};
} catch (error) {; this && this.log(`❌ Error running git workflow monitor: ${error && error.message}`); process && process.exit(1)}}};

// Run the git workflow monitor;
const gitWorkflow = new GitWorkflow();
gitWorkflow && gitWorkflow.run().catch(error = > {; process && process.exit(1)});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
class GitWorkflow {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/git-workflow.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/git-workflow-report.json');
    this.startTime = Date.now();
};
;
  log(message) {;
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
;
    try {;
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {;
      console.error('Error writing to log file:', error.message);
};
};
;
  async checkGitStatus() {;
    try {;
      this.log('📋 Checking git status...');
;
      const status = execSync('git status --porcelain', {;
        cwd: this.projectRoot, encoding: 'utf8',
      });
;
      const branches = execSync('git branch -a', {;
        cwd: this.projectRoot, encoding: 'utf8',
      });
;
      const currentBranch = execSync('git branch --show-current', {;
        cwd: this.projectRoot, encoding: 'utf8',
      }).trim();
;
      return {;
        success: true, hasChanges: status.trim().length > 0,
        changes: status.trim().split('\n').filter(line => line.trim()), branches: branches.trim().split('\n'),
        currentBranch: currentBranch, ,
    } catch (error) {;
      return {;
        success: false, error: error.message,
        hasChanges: false, changes: [],
        branches: [], currentBranch: null,
      ;
};
};
;
  async checkBranchHealth() {;
    try {;
      this.log('🌿 Checking branch health...');
;
      const branches = execSync('git branch -r', {;
        cwd: this.projectRoot, encoding: 'utf8',
      }).trim().split('\n');
;
      const branchInfo = [];
;
      for (const branch of branches) {;
        const branchName = branch.replace('origin/', '').trim();
        if (branchName && !branchName.includes('HEAD')) {;
          try {;
            const lastCommit = execSync(`git log -1 --format="%H %s %an %ad" origin/${branchName}`, {;
              cwd: this.projectRoot, encoding: 'utf8',
            }).trim();
;
            const commitCount = execSync(`git rev-list --count origin/${branchName}`, {;
              cwd: this.projectRoot, encoding: 'utf8',
            }).trim();
;
            branchInfo.push({;
              name: branchName, lastCommit: lastCommit,
              commitCount: parseInt(commitCount), isActive: true,
            });
          } catch (error) {;
            // Skip if can't access branch;
          };
        };
      };
;
      return {;
        success: true, branches: branchInfo,
      ;
    } catch (error) {;
      return {;
        success: false, error: error.message,
        branches: [], ,
};
};
;
  async checkMergeConflicts() {;
    try {;
      this.log('🔀 Checking for merge conflicts...');
;
      const status = execSync('git status --porcelain', {;
        cwd: this.projectRoot, encoding: 'utf8',
      });
;
      const conflictFiles = status;
        .split('\n');
        .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'));
        .map(line => line.trim().split(/\s+/)[1]);
;
      return {;
        success: true, hasConflicts: conflictFiles.length > 0,
        conflictFiles: conflictFiles, ,
    } catch (error) {;
      return {;
        success: false, error: error.message,
        hasConflicts: false, conflictFiles: [],
      ;
};
};
;
  async checkStaleBranches() {;
    try {;
      this.log('🍂 Checking for stale branches...');
;
      const branches = execSync('git branch -r', {;
        cwd: this.projectRoot, encoding: 'utf8',
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
              cwd: this.projectRoot, encoding: 'utf8',
            }).trim();
;
            const lastCommitDate = new Date(lastCommit);
            const daysSinceLastCommit = (Date.now() - lastCommitDate.getTime()) / (1000 * 60 * 60 * 24);
;
            if (daysSinceLastCommit > 30) {;
              staleBranches.push({;
                name: branchName, lastCommit: lastCommit,
                daysSinceLastCommit: Math.floor(daysSinceLastCommit),
              });
            };
          } catch (error) {;
            // Skip if can't access branch;
          };
        };
      };
;
      return {;
        success: true, staleBranches: staleBranches,
      ;
    } catch (error) {;
      return {;
        success: false, error: error.message,
        staleBranches: [], ,
};
};
;
  async generateReport(statusInfo, branchInfo, conflictInfo, staleInfo) {;
    const report = {;
      timestamp: new Date().toISOString(), summary: {,
        hasChanges: statusInfo.hasChanges, currentBranch: statusInfo.currentBranch,
        totalBranches: branchInfo.branches?.length || 0, hasConflicts: conflictInfo.hasConflicts,
        staleBranches: staleInfo.staleBranches?.length || 0, healthScore: 0,
      ;
      details: {, status: statusInfo,
        branches: branchInfo, conflicts: conflictInfo,
        stale: staleInfo, ,
      recommendations: [], ,
;
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
        priority: 'medium', message: 'Uncommitted changes detected',
        action: 'Commit or stash changes before switching branches',
      });
};
;
    if (conflictInfo.hasConflicts) {;
      report.recommendations.push({;
        priority: 'high', message: 'Merge conflicts detected',
        action: 'Resolve merge conflicts before continuing',
      });
};
;
    if (staleInfo.staleBranches?.length > 0) {;
      report.recommendations.push({;
        priority: 'low',
        message: `${staleInfo.staleBranches.length} stale branches found`;
        action: 'Consider deleting or updating stale branches',
      });
};
;
    if (branchInfo.branches?.length > 10) {;
      report.recommendations.push({;
        priority: 'low', message: 'Many branches detected',
        action: 'Consider cleaning up unused branches',
      });
};
;
    return report;
};
;
  async saveReport(report) {;
    try {;
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {;
        fs.mkdirSync(reportDir, { recursive: true });
      };
;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved to: ${this.reportFile}`);
    } catch (error) {;
      this.log(`Error saving report: ${error.message}`);
};
};
;
  async run() {;
    this.log('🌿 Starting Git Workflow Monitor...');
    this.log(`Project root: ${this.projectRoot}`);
;
    try {;
      // Create logs directory if it doesn't exist;
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {;
        fs.mkdirSync(logsDir, { recursive: true });
      };
;
      // Run all git checks;
      const statusInfo = await this.checkGitStatus();
      const branchInfo = await this.checkBranchHealth();
      const conflictInfo = await this.checkMergeConflicts();
      const staleInfo = await this.checkStaleBranches();
;
      // Generate report;
      this.log('📊 Generating git workflow report...');
      const report = await this.generateReport(statusInfo, branchInfo, conflictInfo, staleInfo);
;
      // Save report;
      await this.saveReport(report);
;
      const duration = Date.now() - this.startTime;
;
      // Log summary;
      this.log('\n📊 Git Workflow Summary: '),
      this.log(`Current branch: ${report.summary.currentBranch}`);
      this.log(`Has changes: ${report.summary.hasChanges ? 'Yes' : 'No'}`);
      this.log(`Total branches: ${report.summary.totalBranches}`);
      this.log(`Has conflicts: ${report.summary.hasConflicts ? 'Yes' : 'No'}`);
      this.log(`Stale branches: ${report.summary.staleBranches}`);
      this.log(`Health score: ${report.summary.healthScore}/100`);
      this.log(`Duration: ${duration}ms`);
;
      if (report.recommendations.length > 0) {;
        this.log('\n💡 Recommendations: '), report.recommendations.forEach(rec => {,
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Action: ${rec.action}`);
        });
      } else {;
        this.log('\n✨ Git workflow is healthy!');
      };
;
    } catch (error) {;
      this.log(`❌ Error running git workflow monitor: ${error.message}`);
      process.exit(1);
};
};
};
;
// Run the git workflow monitor;
const gitWorkflow = new GitWorkflow();
gitWorkflow.run().catch(error => {;
  process.exit(1);
});
#!/usr/bin/env node,
const fs = require('fs'),
const path = require('path'),
const { execSync } = require('child_process'),
,
class GitWorkflow {,
  constructor() {,
    this.projectRoot = process.cwd(),
    this.logFile = path.join(this.projectRoot, 'logs/pm2/git-workflow.log'),
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/git-workflow-report.json'),
    this.startTime = Date.now(),
  };
,
  log(message) {,
    const timestamp = new Date().toISOString(),
    const logMessage = `[${timestamp}] ${message}\n`,
,
    try {,
      fs.appendFileSync(this.logFile, logMessage),
    } catch (error) {,
      console.error('Error writing to log file:', error.message),
    };
  };
,
  async checkGitStatus() {,
    try {,
      this.log('📋 Checking git status...'),
,
      const status = execSync('git status --porcelain', {,
        cwd: this.projectRoot,
        encoding: 'utf8',
      }),
,
      const branches = execSync('git branch -a', {,
        cwd: this.projectRoot,
        encoding: 'utf8',
      }),
,
      const currentBranch = execSync('git branch --show-current', {,
        cwd: this.projectRoot,
        encoding: 'utf8',
      }).trim(),
,
      return {,
        success: true,
        hasChanges: status.trim().length > 0,
        changes: status.trim().split('\n').filter(line => line.trim()),
        branches: branches.trim().split('\n'),
        currentBranch: currentBranch,
      };
    } catch (error) {,
      return {,
        success: false,
        error: error.message,
        hasChanges: false,
        changes: [],
        branches: [],
        currentBranch: null,
      };
    };
  };
,
  async checkBranchHealth() {,
    try {,
      this.log('🌿 Checking branch health...'),
,
      const branches = execSync('git branch -r', {,
        cwd: this.projectRoot,
        encoding: 'utf8',
      }).trim().split('\n'),
,
      const branchInfo = [],
,
      for (const branch of branches) {,
        const branchName = branch.replace('origin/', '').trim(),
        if (branchName && !branchName.includes('HEAD')) {,
          try {,
            const lastCommit = execSync(`git log -1 --format="%H %s %an %ad" origin/${branchName}`, {,
              cwd: this.projectRoot,
              encoding: 'utf8',
            }).trim(),
,
            const commitCount = execSync(`git rev-list --count origin/${branchName}`, {,
              cwd: this.projectRoot,
              encoding: 'utf8',
            }).trim(),
,
            branchInfo.push({,
              name: branchName,
              lastCommit: lastCommit,
              commitCount: parseInt(commitCount),
              isActive: true,
            }),
          } catch (error) {,
            // Skip if can't access branch,
          };
        };
      };
,
      return {,
        success: true,
        branches: branchInfo,
      };
    } catch (error) {,
      return {,
        success: false,
        error: error.message,
        branches: [],
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
        encoding: 'utf8',
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
        conflictFiles: conflictFiles,
      };
    } catch (error) {,
      return {,
        success: false,
        error: error.message,
        hasConflicts: false,
        conflictFiles: [],
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
        encoding: 'utf8',
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
              cwd: this.projectRoot,
              encoding: 'utf8',
            }).trim(),
,
            const lastCommitDate = new Date(lastCommit),
            const daysSinceLastCommit = (Date.now() - lastCommitDate.getTime()) / (1000 * 60 * 60 * 24),
,
            if (daysSinceLastCommit > 30) {,
              staleBranches.push({,
                name: branchName,
                lastCommit: lastCommit,
                daysSinceLastCommit: Math.floor(daysSinceLastCommit),
              }),
            };
          } catch (error) {,
            // Skip if can't access branch,
          };
        };
      };
,
      return {,
        success: true,
        staleBranches: staleBranches,
      };
    } catch (error) {,
      return {,
        success: false,
        error: error.message,
        staleBranches: [],
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
        healthScore: 0,
      },
      details: {,
        status: statusInfo,
        branches: branchInfo,
        conflicts: conflictInfo,
        stale: staleInfo,
      },
      recommendations: [],
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
        action: 'Commit or stash changes before switching branches',
      }),
    };
,
    if (conflictInfo.hasConflicts) {,
      report.recommendations.push({,
        priority: 'high',
        message: 'Merge conflicts detected',
        action: 'Resolve merge conflicts before continuing',
      }),
    };
,
    if (staleInfo.staleBranches?.length > 0) {,
      report.recommendations.push({,
        priority: 'low',
        message: `${staleInfo.staleBranches.length} stale branches found`,
        action: 'Consider deleting or updating stale branches',
      }),
    };
,
    if (branchInfo.branches?.length > 10) {,
      report.recommendations.push({,
        priority: 'low',
        message: 'Many branches detected',
        action: 'Consider cleaning up unused branches',
      }),
    };
,
    return report,
  };
,
  async saveReport(report) {,
    try {,
      const reportDir = path.dirname(this.reportFile),
      if (!fs.existsSync(reportDir)) {,
        fs.mkdirSync(reportDir, { recursive: true }),
      };
,
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),
      this.log(`Report saved to: ${this.reportFile}`),
    } catch (error) {,
      this.log(`Error saving report: ${error.message}`),
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
        fs.mkdirSync(logsDir, { recursive: true }),
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
          this.log(`    Action: ${rec.action}`),
        }),
      } else {,
        this.log('\n✨ Git workflow is healthy!'),
      };
,
    } catch (error) {,
      this.log(`❌ Error running git workflow monitor: ${error.message}`),
      process.exit(1),
    };
  };
};
,
// Run the git workflow monitor,
const gitWorkflow = new GitWorkflow(),
gitWorkflow.run().catch(error => {,
  process.exit(1),
}),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
