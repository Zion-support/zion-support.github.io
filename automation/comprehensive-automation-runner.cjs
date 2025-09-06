#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class ComprehensiveAutomationRunner {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.results = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
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
    this.log('📋 Running all automation scripts...');

    const scripts = [
      { path: 'automation/master-orchestrator.cjs', name: 'Master Orchestrator' },
      { path: 'automation/comprehensive-app-improvement-suite.cjs', name: 'Comprehensive App Improvement Suite' },
      { path: 'automation/performance-optimizer.cjs', name: 'Performance Optimizer' },
      { path: 'automation/security-scanner.cjs', name: 'Security Scanner' },
      { path: 'automation/seo-optimizer.cjs', name: 'SEO Optimizer' },
      { path: 'automation/health-check.cjs', name: 'Health Check' },
    ];

    for (const script of scripts) {
      await this.runScript(script.path, script.name);
    }

    this.generateReport();
  }

  generateReport() {
    const endTime = new Date();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: endTime.toISOString(),
      duration: `${Math.round(duration / 1000)}s`,
      totalScripts: this.results.length,
      successful: this.results.filter(r => r.success).length,
      failed: this.results.filter(r => !r.success).length,
      successRate: `${Math.round((this.results.filter(r => r.success).length / this.results.length) * 100)}%`,
      results: this.results
    };

    const reportPath = path.join(this.projectRoot, 'automation-reports', 'comprehensive-automation-runner-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    this.log(`\n📊 Comprehensive Automation Runner completed!`);
    this.log(`📈 Success Rate: ${report.successRate}`);
    this.log(`⏱️ Duration: ${report.duration}`);
    this.log(`📄 Report saved to: ${reportPath}`);
  }
}

// Run the automation runner
if (require.main === module) {
  const runner = new ComprehensiveAutomationRunner();
  runner.runAllAutomations().catch(console.error);
}

module.exports = ComprehensiveAutomationRunner;