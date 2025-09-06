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
    this.log('==========================================');

    const scripts = [
      { path: 'automation/master-orchestrator.cjs', name: 'Master Orchestrator' },
      { path: 'enhanced-automation-suite.cjs', name: 'Enhanced Automation Suite' },
      { path: 'automation/performance-optimizer.cjs', name: 'Performance Optimizer' },
      { path: 'automation/security-enhancer.cjs', name: 'Security Enhancer' },
      { path: 'automation/accessibility-improver.cjs', name: 'Accessibility Improver' }
    ];

    for (const script of scripts) {
      if (fs.existsSync(script.path)) {
        await this.runScript(script.path, script.name);
      } else {
        this.log(`⚠️ Script not found: ${script.path}`, 'WARNING');
      }
    }
  }

  async runTests() {
    this.log('\n🧪 Running Test Suite');
    try {
      const testResult = execSync('npm run test:smoke', {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
      });
      this.log('✅ Test suite completed successfully');
      this.results.push({ script: 'Test Suite', success: true, output: testResult });
    } catch (error) {
      this.log(`❌ Test suite failed: ${error.message}`, 'ERROR');
      this.results.push({ script: 'Test Suite', success: false, error: error.message });
    }
  }

  async generateFinalReport() {
    this.log('\n📊 Generating Final Report');
    
    const totalDuration = Date.now() - this.startTime.getTime();
    const successfulScripts = this.results.filter(r => r.success).length;
    const totalScripts = this.results.length;

    const report = {
      timestamp: new Date().toISOString(),
      totalDuration,
      successfulScripts,
      totalScripts,
      successRate: `${successfulScripts}/${totalScripts} (${Math.round((successfulScripts/totalScripts)*100)}%)`,
      results: this.results,
      summary: `Comprehensive automation completed: ${successfulScripts}/${totalScripts} scripts successful`
    };

    const reportPath = path.join(this.projectRoot, 'automation-reports', 'comprehensive-automation-final-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Final report saved to: ${reportPath}`);
    this.log(`🎉 Comprehensive automation completed: ${successfulScripts}/${totalScripts} scripts successful`);
  }

  async run() {
    await this.runAllAutomations();
    await this.runTests();
    await this.generateFinalReport();
  }
}

// Run the comprehensive automation
const runner = new ComprehensiveAutomationRunner();
runner.run().catch(console.error);