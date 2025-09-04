#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AllAutomationsRunner {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'all-automations-reports');
    this.ensureDirectories()}

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { "recursive": true })}
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`)}

  async runAutomation(scriptName, scriptPath) {
    this.log(`🚀 Running ${scriptName}...`);
    try {
      const result = execSync(`node ${scriptPath}`, {
        "cwd": this.projectRoot,
        "encoding": 'utf8',
        "timeout": 300000 // 5 minutes
      });
      
      this.log(`✅ ${scriptName} completed successfully`);
      return {
        "name": scriptName,
        "success": true,
        "output": result
      }} catch (error) {
      this.log(`❌ ${scriptName} "failed": ${error.message}`);
      return {
        "name": scriptName,
        "success": false,
        "error": error.message
      }}
  }

  async runAllAutomations() {
    this.log('🎯 Starting All Automations Runner');

    const automations = [{
        "name": 'Error Prevention System',
        "script": 'scripts/error-prevention-system.cjs'
      },
      {
        "name": 'Performance Optimizer',
        "script": 'scripts/performance-optimizer.cjs'
      },
      {
        "name": 'Security Auditor',
        "script": 'scripts/security-auditor.cjs'
      },
      {
        "name": 'Build Monitor',
        "script": 'scripts/build-monitor.cjs'
      },
      {
        "name": 'Code Quality Monitor',
        "script": 'scripts/code-quality-monitor.cjs'
      },
      {
        "name": 'Dependency Manager',
        "script": 'scripts/dependency-manager.cjs'
      },
      {
        "name": 'Git Workflow Automator',
        "script": 'scripts/git-workflow-automator.cjs'
      },
      {
        "name": 'Health Monitor',
        "script": 'scripts/health-monitor.cjs'
      },
      {
        "name": 'Log Analyzer',
        "script": 'scripts/log-analyzer.cjs'
      },
      {
        "name": 'Resource Optimizer',
        "script": 'scripts/resource-optimizer.cjs'
      }
    ];

    const results = [];

    for (const automation of automations) {
      const result = await this.runAutomation(automation.name, automation.script);
      results.push(result)}

    return results}

  async generateOverallReport(automationResults) {
    this.log('📊 Generating overall report...');
    
    const report = {
      "timestamp": new Date().toISOString(),
      "summary": {
        total: automationResults.length,
        "successful": automationResults.filter(r => r.success).length,
        "failed": automationResults.filter(r => !r.success).length
      },
      "results": automationResults,
      "recommendations": this.generateOverallRecommendations(automationResults)
    };

    const reportFile = path.join(this.reportsDir, `all-automations-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📄 Overall report "generated": ${reportFile}`);
    
    return report}

  generateOverallRecommendations(automationResults) {
    const recommendations = [];

    const failedAutomations = automationResults.filter(r => !r.success);
    if (failedAutomations.length > 0) {
      recommendations.push({
        "type": 'failed_automations',
        "priority": 'high',
        "message": `${failedAutomations.length} automations failed. Review and fix the issues.`,
        "impact": 'Ensures all automations work properly',
        "failedAutomations": failedAutomations.map(a => a.name)
      })}

    const successfulAutomations = automationResults.filter(r => r.success);
    if (successfulAutomations.length === automationResults.length) {
      recommendations.push({
        "type": 'all_automations_successful',
        "priority": 'low',
        "message": 'All automations completed successfully. Great job!',
        "impact": 'Indicates a healthy project state'
      })}

    return recommendations}

  async run() {
    this.log('🚀 Starting All Automations Runner');
    
    try {
      const automationResults = await this.runAllAutomations();
      const overallReport = await this.generateOverallReport(automationResults);

      this.log('🎉 All Automations Runner completed!');
      this.log(`📊 Total "automations": ${overallReport.summary.total}`);
      this.log(`✅ "Successful": ${overallReport.summary.successful}`);
      this.log(`❌ "Failed": ${overallReport.summary.failed}`);
      this.log(`💡 "Recommendations": ${overallReport.recommendations.length}`);

      if (overallReport.summary.failed > 0) {
        this.log('❌ Some automations failed. Check the report for details.');
        process.exit(1)} else {
        this.log('🎉 All automations completed successfully!');
        process.exit(0)}
    } catch (error) {
      this.log(`💥 All Automations Runner "failed": ${error.message}`);
      process.exit(1)}
  }
}

// Run the runner if this file is executed directly
if (require.main === module) {
  const runner = new AllAutomationsRunner();
  runner.run()}

module.exports = AllAutomationsRunner;