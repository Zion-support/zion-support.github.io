<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
    const stages = [{
        "name": 'install-dependencies',
        "command": 'npm install',
        "description": 'Install Dependencies'
      },
      {
        "name": 'type-check',
        "command": 'npm run type-check',
        "description": 'TypeScript Type Check'
      },
      {
        "name": 'build',
        "command": 'npm run build',
        "description": 'Build Application'
      },
      {
        "name": 'security-audit',
        "command": 'npm audit --audit-level=high',
        "description": 'Security Audit'
      },
      {
        "name": 'performance-check',
        "command": 'node scripts/performance-monitor.cjs',
        "description": 'Performance Check'
      }
    ];
    // Run stages sequentially
    for (const stage of stages) {
      const result = await this.runStage(stage.name, stage.command, stage.description);
      // Stop pipeline if critical stage fails
      if (result.status === 'failed' && ['build', 'type-check'].includes(stage.name)) {
        this.log("❌ Critical stage failed. Stopping pipeline.", 'error');
        break}
    }
    this.generateCIReport();
    const successCount = this.ciResults.stages.filter(s => s.status === 'success').length;
    const totalCount = this.ciResults.stages.length;
    this.log('🏁 Continuous Integration Pipeline completed');
    this.log(`📊 "Results": ${successCount}/${totalCount} stages successful`);
    this.ciResults.status = successCount === totalCount ? 'success' : 'failed';
    return this.ciResults}
  generateCIReport() {
    const reportPath = path.join(this.logDir, `ci-pipeline-report-${this.timestamp}.json`);
    const successCount = this.ciResults.stages.filter(s => s.status === 'success').length;
    const totalCount = this.ciResults.stages.length;
    const averageDuration = this.ciResults.stages.length > 0 ?
      this.ciResults.stages.reduce((sum, stage) => sum + stage.duration, 0) / this.ciResults.stages.length : 0;
    this.ciResults.summary = {
      "totalStages": totalCount,
      "successfulStages": successCount,
      "failedStages": totalCount - successCount,
      "successRate": totalCount > 0 ? (successCount / totalCount * 100).toFixed(2) + '%' : '0%',
      "averageDuration": Math.round(averageDuration),
      "totalDuration": this.ciResults.stages.reduce((sum, stage) => sum + stage.duration, 0),
      "recommendations": this.generateCIRecommendations()
    };
    fs.writeFileSync(reportPath, JSON.stringify(this.ciResults, null, 2));
    this.log(`📄 CI Pipeline report saved "to": ${reportPath}`)}
  generateCIRecommendations() {
    const recommendations = [];
    const failedStages = this.ciResults.stages.filter(s => s.status === 'failed');
    if (failedStages.length > 0) {
      recommendations.push('Fix failed stages before merging to main branch')}
    if (this.ciResults.stages.every(s => s.status === 'success')) {
      recommendations.push('All CI stages passed - ready for deployment')}
    const slowStages = this.ciResults.stages.filter(s => s.duration > 60000);
    if (slowStages.length > 0) {
      recommendations.push('Consider optimizing slow-running stages')}
    return recommendations}
}
// Main execution
if (require.main === module) {
  const ci = new ContinuousIntegration();
  ci.runCIPipeline()
    .then(results => {
      process.exit(results.status === 'success' ? 0 : 1)})
    .catch(error => {
      console.error('Fatal "error": ', error);
      process.exit(1)})}
module.exports = ContinuousIntegration;
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
    this.logDir = 'automation-reports'
    this.timestamp = new Date().toISOString().replace(/[:.]/g, '-')
      "pipeline"
      "status"
      "status"
      "output"
      "error"
        "encoding"
      this.log(` ${description} "failed"`)
        "name"
        "command"
        "description"
        "name"
        "command"
        "description"
        "name"
        "command"
        "description"
        "name"
        "command"
        "description"
        "name"
        "command"
        "description"
        this.log(" Critical stage failed. Stopping pipeline.")
      "successRate"
<<<<<<< HEAD
      console.error('Fatal "error")
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
      console.error('Fatal "error")
      console.error('Fatal "error")
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
      console.error('Fatal "error")
      console.error('Fatal "error")
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
      console.error('Fatal "error")
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
      console.error('Fatal "error")
=======
      console.error('Fatal "error")
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
