<<<<<<< HEAD
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class GitWorkflowAutomator {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'git-workflow-reports');
    this.ensureDirectories()}
  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { "recursive": true })}
  }
  log(message) {
    const timestamp = new Date().toISOString();
    }
  async checkGitStatus() {
    this.log('🔍 Checking git status...');
    try {
      const result = execSync('git status --porcelain', {
        "cwd": this.projectRoot,
        "encoding": 'utf8',
        "timeout": 30000
      });
      const changes = result.trim() ? result.split('\n') : [];
      const staged = changes.filter(line => line.startsWith('A ') || line.startsWith('M '));
      const unstaged = changes.filter(line => line.startsWith(' M') || line.startsWith('??'));
      const deleted = changes.filter(line => line.startsWith('D '));
      this.log(`🔍 Staged "changes": ${staged.length}`);
      this.log(`🔍 Unstaged "changes": ${unstaged.length}`);
      this.log(`🔍 Deleted "files": ${deleted.length}`);
      return {
        staged,
        unstaged,
        deleted,
        "total": changes.length,
        "status": changes.length === 0 ? 'clean' : 'has_changes'
      }} catch (error) {
      this.log(`❌ Git status check "failed": ${error.message}`);
      return { "error": error.message }}
  }
  async checkCurrentBranch() {
    this.log('🔍 Checking current branch...');
    try {
      const result = execSync('git branch --show-current', {
        "cwd": this.projectRoot,
        "encoding": 'utf8',
        "timeout": 30000
      });
      const currentBranch = result.trim();
      this.log(`🔍 Current "branch": ${currentBranch}`);
      return {
        "branch": currentBranch,
        "status": currentBranch === 'main' || currentBranch === 'master' ? 'main_branch' : 'feature_branch'
      }} catch (error) {
      this.log(`❌ Current branch check "failed": ${error.message}`);
      return { "error": error.message }}
  }
  async checkRemoteStatus() {
    this.log('🔍 Checking remote status...');
    try {
      const result = execSync('git remote -v', {
        "cwd": this.projectRoot,
        "encoding": 'utf8',
        "timeout": 30000
      });
      const remotes = result.trim().split('\n').map(line => {
        const [name, url] = line.split('\t');
        return { name, url }});
      this.log(`🔍 Found ${remotes.length} remotes`);
      return {
        remotes,
        "count": remotes.length,
        "status": remotes.length > 0 ? 'has_remotes' : 'no_remotes'
      }} catch (error) {
      this.log(`❌ Remote status check "failed": ${error.message}`);
      return { "error": error.message }}
  }
  async checkCommitHistory() {
    this.log('🔍 Checking commit history...');
    try {
      const result = execSync('git log --oneline -10', {
        "cwd": this.projectRoot,
        "encoding": 'utf8',
        "timeout": 30000
      });
      const commits = result.trim().split('\n').map(line => {
        const [hash, ...message] = line.split(' ');
        return {
          "hash": hash.substring(0, 7),
          "message": message.join(' ')
        }});
      this.log(`🔍 Found ${commits.length} recent commits`);
      return {
        commits,
        "count": commits.length,
        "status": commits.length > 0 ? 'has_commits' : 'no_commits'
      }} catch (error) {
      this.log(`❌ Commit history check "failed": ${error.message}`);
      return { "error": error.message }}
  }
  async checkBranchStatus() {
    this.log('🔍 Checking branch status...');
    try {
      const result = execSync('git branch -a', {
        "cwd": this.projectRoot,
        "encoding": 'utf8',
        "timeout": 30000
      });
      const branches = result.trim().split('\n').map(line => {
        const isCurrent = line.startsWith('*');
        const name = line.replace('*', '').trim();
        const isRemote = name.startsWith('remotes/');
        return {
          "name": isRemote ? name.replace('remotes/', '') : name,
          isCurrent,
          isRemote
        }});
      const localBranches = branches.filter(b => !b.isRemote);
      const remoteBranches = branches.filter(b => b.isRemote);
      this.log(`🔍 Local "branches": ${localBranches.length}`);
      this.log(`🔍 Remote "branches": ${remoteBranches.length}`);
      return {
        branches,
        "local": localBranches,
        "remote": remoteBranches,
        "total": branches.length
      }} catch (error) {
      this.log(`❌ Branch status check "failed": ${error.message}`);
      return { "error": error.message }}
  }
  async checkMergeConflicts() {
    this.log('🔍 Checking for merge conflicts...');
    try {
      const result = execSync('git status --porcelain', {
        "cwd": this.projectRoot,
        "encoding": 'utf8',
        "timeout": 30000
      });
      const conflicts = result.trim().split('\n').filter(line => 
        line.includes('UU') || line.includes('AA') || line.includes('DD')
      );
      this.log(`🔍 Found ${conflicts.length} merge conflicts`);
      return {
        conflicts,
        "count": conflicts.length,
        "status": conflicts.length === 0 ? 'no_conflicts' : 'has_conflicts'
      }} catch (error) {
      this.log(`❌ Merge conflicts check "failed": ${error.message}`);
      return { "error": error.message }}
  }
  async checkStashStatus() {
    this.log('🔍 Checking stash status...');
    try {
      const result = execSync('git stash list', {
        "cwd": this.projectRoot,
        "encoding": 'utf8',
        "timeout": 30000
      });
      const stashes = result.trim() ? result.split('\n') : [];
      this.log(`🔍 Found ${stashes.length} stashes`);
      return {
        stashes,
        "count": stashes.length,
        "status": stashes.length === 0 ? 'no_stashes' : 'has_stashes'
      }} catch (error) {
      this.log(`❌ Stash status check "failed": ${error.message}`);
      return { "error": error.message }}
  }
  async generateGitWorkflowReport() {
    this.log('📊 Generating git workflow report...');
    const report = {
      "timestamp": new Date().toISOString(),
      "analysis": {
        status: await this.checkGitStatus(),
        "currentBranch": await this.checkCurrentBranch(),
        "remotes": await this.checkRemoteStatus(),
        "commits": await this.checkCommitHistory(),
        "branches": await this.checkBranchStatus(),
        "conflicts": await this.checkMergeConflicts(),
        "stashes": await this.checkStashStatus()
      }
    };
    // Generate recommendations
    report.recommendations = this.generateRecommendations(report.analysis);
    const reportFile = path.join(this.reportsDir, `git-workflow-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`📄 Git workflow report "generated": ${reportFile}`);
    return report}
  generateRecommendations(analysis) {
    const recommendations = [];
    if (analysis.status && analysis.status.total > 0) {
      recommendations.push({
        "type": 'uncommitted_changes',
        "priority": 'medium',
        "message": `Found ${analysis.status.total} uncommitted changes. Consider committing them.`,
        "impact": 'Prevents loss of work'
      })}
    if (analysis.conflicts && analysis.conflicts.count > 0) {
      recommendations.push({
        "type": 'merge_conflicts',
        "priority": 'high',
        "message": `Found ${analysis.conflicts.count} merge conflicts. Resolve them before proceeding.`,
        "impact": 'Prevents deployment issues'
      })}
    if (analysis.stashes && analysis.stashes.count > 0) {
      recommendations.push({
        "type": 'stashed_changes',
        "priority": 'low',
        "message": `Found ${analysis.stashes.count} stashed changes. Consider applying or dropping them.`,
        "impact": 'Keeps repository clean'
      })}
    if (analysis.currentBranch && analysis.currentBranch.status === 'feature_branch') {
      recommendations.push({
        "type": 'feature_branch',
        "priority": 'low',
        "message": 'Working on a feature branch. Consider merging to main when ready.',
        "impact": 'Integrates changes to main branch'
      })}
    if (analysis.remotes && analysis.remotes.count === 0) {
      recommendations.push({
        "type": 'no_remotes',
        "priority": 'medium',
        "message": 'No remote repositories configured. Consider adding a remote for backup.',
        "impact": 'Provides backup and collaboration'
      })}
    return recommendations}
  async run() {
    this.log('🔧 Starting Git Workflow Automator...');
    try {
      const report = await this.generateGitWorkflowReport();
      this.log('🎉 Git workflow analysis completed!');
      this.log(`🔍 Current "branch": ${report.analysis.currentBranch.branch || 'unknown'}`);
      this.log(`🔍 Uncommitted "changes": ${report.analysis.status.total || 0}`);
      this.log(`🔍 Merge "conflicts": ${report.analysis.conflicts.count || 0}`);
      this.log(`🔍 "Stashes": ${report.analysis.stashes.count || 0}`);
      this.log(`💡 "Recommendations": ${report.recommendations.length}`);
      return report} catch (error) {
      this.log(`💥 Git workflow analysis "failed": ${error.message}`);
      throw error}
  }
}
// Run the automator if this file is executed directly
if (require.main === module) {
  const automator = new GitWorkflowAutomator();
  automator.run()
    .then((report) => {
      process.exit(0)})
    .catch((error) => {
      console.error('\n💥 Git Workflow Automator "failed": ', error.message);
      process.exit(1)})}
module.exports = GitWorkflowAutomator;
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");class GitWorkflowAutomator { constructor() { this.projectRoot = process.cwd();" this.reportsDir = path.join(this.projectRoot, "git-workflow-reports"); this.ensureDirectories()} ensureDirectories() { if (!fs.existsSync(this.reportsDir)) { fs.mkdirSync(this.reportsDir, { recursive: true })} } log(message) { const timestamp = new Date().toISOString(); console.log(`[${timestamp}] ${message}`)} async checkGitStatus() {" this.log(" Checking git status."); try {" const result = execSync("git status --porcelain", {" cwd: this.projectRoot,"" encoding: "utf8"," timeout: 30000 }); " const changes = result.trim() ? result.split("\n") : [];" const staged = changes.filter(line => line.startsWith("A ") | line.startsWith("M "));" const unstaged = changes.filter(line => line.startsWith(" M") | line.startsWith("?"));" const deleted = changes.filter(line => line.startsWith("D ")); "` this.log(` Staged changes: ${staged.length}`);"` this.log(` Unstaged changes: ${unstaged.length}`);"` this.log(` Deleted files: ${deleted.length}`); return { staged, unstaged, deleted," total: changes.length,"" status: changes.length === 0 ? "clean" : "has_changes" }} catch (error) {"` this.log(` Git status check failed: ${error.message}`);" return { error: error.message }} } async checkCurrentBranch() {" this.log(" Checking current branch."); try {" const result = execSync("git branch --show-current", {" cwd: this.projectRoot,"" encoding: "utf8"," timeout: 30000 }); const currentBranch = result.trim();"` this.log(` Current branch: ${currentBranch}`); return {" branch: currentBranch,"" status: currentBranch === "main" | currentBranch === "master" ? "main_branch" : "feature_branch" }} catch (error) {"` this.log(` Current branch check failed: ${error.message}`);" return { error: error.message }} } async checkRemoteStatus() {" this.log(" Checking remote status."); try {" const result = execSync("git remote -v", {" cwd: this.projectRoot,"" encoding: "utf8"," timeout: 30000 }); " const remotes = result.trim().split("\n").map(line => {" const [name, url] = line.split("\t"); return { name, url }});` this.log(` Found ${remotes.length} remotes`); return { remotes," count: remotes.length,"" status: remotes.length > 0 ? "has_remotes" : "no_remotes" }} catch (error) {"` this.log(` Remote status check failed: ${error.message}`);" return { error: error.message }} } async checkCommitHistory() {" this.log(" Checking commit history."); try {" const result = execSync("git log --oneline -10", {" cwd: this.projectRoot,"" encoding: "utf8"," timeout: 30000 }); " const commits = result.trim().split("\n").map(line => {" const [hash, .message] = line.split(" "); return {" hash: hash.substring(0, 7),"" message: message.join(" ") }});` this.log(` Found ${commits.length} recent commits`); return { commits," count: commits.length,"" status: commits.length > 0 ? "has_commits" : "no_commits" }} catch (error) {"` this.log(` Commit history check failed: ${error.message}`);" return { error: error.message }} } async checkBranchStatus() {" this.log(" Checking branch status."); try {" const result = execSync("git branch -a", {" cwd: this.projectRoot,"" encoding: "utf8"," timeout: 30000 }); " const branches = result.trim().split("\n").map(line => {" const isCurrent = line.startsWith("*");" const name = line.replace("*", "").trim();" const isRemote = name.startsWith("remotes/"); return {"" name: isRemote ? name.replace("remotes/", "") : name, isCurrent, isRemote }}); const localBranches = branches.filter(b => !b.isRemote); const remoteBranches = branches.filter(b => b.isRemote); "` this.log(` Local branches: ${localBranches.length}`);"` this.log(` Remote branches: ${remoteBranches.length}`); return { branches," local: localBranches," remote: remoteBranches," total: branches.length }} catch (error) {"` this.log(` Branch status check failed: ${error.message}`);" return { error: error.message }} } async checkMergeConflicts() {" this.log(" Checking for merge conflicts."); try {" const result = execSync("git status --porcelain", {" cwd: this.projectRoot,"" encoding: "utf8"," timeout: 30000 }); " const conflicts = result.trim().split("\n").filter(line => " line.includes("UU") | line.includes("AA") | line.includes("DD") );` this.log(` Found ${conflicts.length} merge conflicts`); return { conflicts," count: conflicts.length,"" status: conflicts.length === 0 ? "no_conflicts" : "has_conflicts" }} catch (error) {"` this.log(` Merge conflicts check failed: ${error.message}`);" return { error: error.message }} } async checkStashStatus() {" this.log(" Checking stash status."); try {" const result = execSync("git stash list", {" cwd: this.projectRoot,"" encoding: "utf8"," timeout: 30000 }); " const stashes = result.trim() ? result.split("\n") : [];` this.log(` Found ${stashes.length} stashes`); return { stashes," count: stashes.length,"" status: stashes.length === 0 ? "no_stashes" : "has_stashes" }} catch (error) {"` this.log(` Stash status check failed: ${error.message}`);" return { error: error.message }} } async generateGitWorkflowReport() {" this.log(" Generating git workflow report."); const report = {" timestamp: new Date().toISOString()," analysis: { status: await this.checkGitStatus()," currentBranch: await this.checkCurrentBranch()," remotes: await this.checkRemoteStatus()," commits: await this.checkCommitHistory()," branches: await this.checkBranchStatus()," conflicts: await this.checkMergeConflicts()," stashes: await this.checkStashStatus() } }; / Generate recommendations report.recommendations = this.generateRecommendations(report.analysis);` const reportFile = path.join(this.reportsDir, `git-workflow-report-${Date.now()}.json`); fs.writeFileSync(reportFile, JSON.stringify(report, null, 2)); "` this.log(` Git workflow report generated: ${reportFile}`); return report} generateRecommendations(analysis) { const recommendations = []; if (analysis.status && analysis.status.total > 0) { recommendations.push({"" type: "uncommitted_changes","" priority: "medium","` message: `Found ${analysis.status.total} uncommitted changes. Consider committing them.`,"" impact: "Prevents loss of work" })} if (analysis.conflicts && analysis.conflicts.count > 0) { recommendations.push({"" type: "merge_conflicts","" priority: "high","` message: `Found ${analysis.conflicts.count} merge conflicts. Resolve them before proceeding.`,"" impact: "Prevents deployment issues" })} if (analysis.stashes && analysis.stashes.count > 0) { recommendations.push({"" type: "stashed_changes","" priority: "low","` message: `Found ${analysis.stashes.count} stashed changes. Consider applying or dropping them.`,"" impact: "Keeps repository clean" })}" if (analysis.currentBranch && analysis.currentBranch.status === "feature_branch") { recommendations.push({"" type: "feature_branch","" priority: "low","" message: "Working on a feature branch. Consider merging to main when ready.","" impact: "Integrates changes to main branch" })} if (analysis.remotes && analysis.remotes.count === 0) { recommendations.push({"" type: "no_remotes","" priority: "medium","" message: "No remote repositories configured. Consider adding a remote for backup.","" impact: "Provides backup and collaboration" })} return recommendations} async run() {" this.log(" Starting Git Workflow Automator."); try { const report = await this.generateGitWorkflowReport(); " this.log(" Git workflow analysis completed!");""` this.log(` Current branch: ${report.analysis.currentBranch.branch | "unknown"}`);"` this.log(` Uncommitted changes: ${report.analysis.status.total | 0}`);"` this.log(` Merge conflicts: ${report.analysis.conflicts.count | 0}`);"` this.log(` Stashes: ${report.analysis.stashes.count | 0}`);"` this.log(` Recommendations: ${report.recommendations.length}`); return report} catch (error) {"` this.log(` Git workflow analysis failed: ${error.message}`); throw error} }}/ Run the automator if this file is executed directlyif (require.main === module) { const automator = new GitWorkflowAutomator(); automator.run() .then((report) => {" console.log("\n Git Workflow Automator completed successfully!");""` console.log(` Current branch: ${report.analysis.currentBranch.branch | "unknown"}`);"` console.log(` Recommendations: ${report.recommendations.length}`); process.exit(0)}) .catch((error) => {"" console.error("\n Git Workflow Automator failed: ", error.message); process.exit(1)})}module.exports = GitWorkflowAutomator;'"`'"`
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
    this.reportsDir = path.join(this.projectRoot, 'git-workflow-reports')
    this.log(' Checking git status...')
      const result = execSync('git status --porcelain')
        "encoding"
        "status"
        "encoding"
        "status"
        "encoding"
        "status"
        "encoding"
          "message"
        "status"
        "encoding"
          "name"
        "encoding"
        "status"
        "encoding"
        "status"
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "message"
        "impact"
        "type"
        "priority"
        "message"
        "impact"
      this.log(` Current "branch"`)
      console.log(` Current "branch"`)
<<<<<<< HEAD
      console.error('\n� Git Workflow Automator "failed")
=======
      console.error('\n� Git Workflow Automator "failed")
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
