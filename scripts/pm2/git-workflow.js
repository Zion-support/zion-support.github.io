
#!/usr/bin/env node;
; return report};
; async saveReport(report) {; try {; const reportDir = path.dirname(this.reportFile); if (!fs.existsSync(reportDir)) {; fs.mkdirSync(reportDir, { recursive: true })};
; fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)); this.log(`Report saved to: ${this.reportFile}`)} catch (error) {; this.log(`Error saving report: ${error.message}`)}};
; async run() {; this.log('🌿 Starting Git Workflow Monitor...'); this.log(`Project root: ${this.projectRoot}`);
; try {; // Create logs directory if it doesn't exist; const logsDir = path.dirname(this.logFile); if (!fs.existsSync(logsDir)) {; fs.mkdirSync(logsDir, { recursive: true })};
; // Run all git checks; const statusInfo = await this.checkGitStatus(); const branchInfo = await this.checkBranchHealth(); const conflictInfo = await this.checkMergeConflicts(); const staleInfo = await this.checkStaleBranches();
; // Generate report; this.log('📊 Generating git workflow report...'); const report = await this.generateReport(statusInfo, branchInfo, conflictInfo, staleInfo);
; // Save report; await this.saveReport(report);
; const duration = Date.now() - this.startTime;
; // Log summary; this.log('\n📊 Git Workflow Summary: '); this.log(`Current branch: ${report.summary.currentBranch}`); this.log(`Has changes: ${report.summary.hasChanges ? 'Yes': 'No'}`); this.log(`Total branches: ${report.summary.totalBranches}`); this.log(`Has conflicts: ${report.summary.hasConflicts ? 'Yes': 'No'}`); this.log(`Stale branches: ${report.summary.staleBranches}`); this.log(`Health score: ${report.summary.healthScore}/100`); this.log(`Duration: ${duration}ms`);
; if (report.recommendations.length > 0) {; this.log('\n💡 Recommendations: '); report.recommendations.forEach(rec = > {; this.log(` [${rec.priority.toUpperCase()}] ${rec.message}`); this.log(` Action: ${rec.action}`)})} else {; this.log('\n✨ Git workflow is healthy!')};
} catch (error) {; this.log(`❌ Error running git workflow monitor: ${error.message}`); process.exit(1)}}};
;
// Run the git workflow monitor;
const gitWorkflow = new GitWorkflow();
gitWorkflow.run().catch(error = > {; process.exit(1)});

