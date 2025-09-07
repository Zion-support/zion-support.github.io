const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class ComprehensiveAutomationRunner {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.results = [];
  }

  async runScript(scriptPath, scriptName) {
    this.log(`\n🚀 Running ${scriptName}`);
    try {
      const result = execSync(`node ${scriptPath}`, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
      });
      this.log(`✅ ${scriptName} completed successfully`);
      this.results.push({ script: scriptName, success: true, output: result });
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${scriptName} failed: ${error.message}`, 'ERROR');
      this.results.push({ script: scriptName, success: false, error: error.message });
      return { success: false, error: error.message };
    }
  }

  async runAllAutomations() {
this.log('🎯 Starting Comprehensive Automation Runner');
    this.log('
    this.log('🎯 Starting Comprehensive Automation Runner');
    this.log('📋 Running all automation scripts...');

    const scripts = [
      { path: 'automation/master-orchestrator.cjs', name: 'Master Orchestrator' },
      { path: 'automation/comprehensive-app-improvement-suite.cjs', name: 'Comprehensive App Improvement Suite' },
      { path: 'automation/performance-optimizer.cjs', name: 'Performance Optimizer' },
      { path: 'automation/security-scanner.cjs', name: 'Security Scanner' },
      { path: 'automation/seo-optimizer.cjs', name: 'SEO Optimizer' },
      { path: 'automation/health-check.cjs', name: 'Health Check' },
    ];

    for (const script of automationScripts) {
      const scriptPath = path.join(this.projectRoot, script);
      if (fs.existsSync(scriptPath)) {
        await this.runScript(scriptPath, path.basename(script));
      } else {
        this.log(`⚠️  Script not found: ${script}`, 'WARN');
      }
    }

    this.generateReport();
  }

  generateReport() {
    const endTime = new Date();
    const duration = endTime - this.startTime;
    
    const report = {
      startTime: this.startTime.toISOString(),
      endTime: endTime.toISOString(),
      duration: `${Math.round(duration / 1000)}s`,
      totalScripts: this.results.length,
      successfulScripts: this.results.filter(r => r.success).length,
      failedScripts: this.results.filter(r => !r.success).length,
      results: this.results
    };

    const reportPath = path.join(this.projectRoot, 'comprehensive-automation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`\n📊 Automation Report Generated: ${reportPath}`);
    this.log(`✅ Successful: ${report.successfulScripts}/${report.totalScripts}`);
    this.log(`❌ Failed: ${report.failedScripts}/${report.totalScripts}`);
    this.log(`⏱️  Total Duration: ${report.duration}`);
  }
}

// Run the automation if this file is executed directly
if (require.main === module) {
  const runner = new ComprehensiveAutomationRunner();
  runner.runAllAutomations().catch(console.error);
}

module.exports = ComprehensiveAutomationRunner;
