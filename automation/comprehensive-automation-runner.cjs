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

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    // Also write to log file
    const logFile = path.join(this.projectRoot, 'automation-logs.txt');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async runAllAutomations() {
    this.log('🎯 Starting Comprehensive Automation Suite');
    
    const automationScripts = [
      // Core automation scripts
      'automation/master-automation-orchestrator.cjs',
      'automation/comprehensive-syntax-fixer.cjs',
      'automation/error-fixer-automation.cjs',
      'automation/performance-optimizer.cjs',
      'automation/security-audit.cjs',
      'automation/seo-optimizer.cjs',
      'automation/accessibility-checker.cjs',
      
      // Additional improvement scripts
      'scripts/comprehensive-app-improver.cjs',
      'scripts/performance-monitor.cjs',
      'scripts/security-auditor.cjs',
      'scripts/automated-test-runner.cjs',
      'scripts/deployment-automation.cjs'
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