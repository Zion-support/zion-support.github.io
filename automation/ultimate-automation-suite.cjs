#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class UltimateAutomationSuite {
  constructor() {
    this.projectRoot = process.cwd();
    this.results = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type}] ${message}`;
    console.log(logMessage);
  }

  async runAllAutomations() {
    this.log('🚀 Running ultimate automation suite...');
    
    const automations = [
      { name: 'Build Check', command: 'npm run build' },
      { name: 'Lint Check', command: 'npm run lint:check' },
      { name: 'Type Check', command: 'npm run type-check' },
      { name: 'Test Suite', command: 'npm run test:smoke' }
    ];

    for (const automation of automations) {
      try {
        this.log(`Running ${automation.name}...`);
        execSync(automation.command, { cwd: this.projectRoot, stdio: 'pipe' });
        this.log(`✅ ${automation.name} completed`, 'SUCCESS');
        this.results.push({ name: automation.name, status: 'success' });
      } catch (error) {
        this.log(`❌ ${automation.name} failed: ${error.message}`, 'ERROR');
        this.results.push({ name: automation.name, status: 'failed', error: error.message });
      }
    }

    this.generateReport();
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      results: this.results,
      summary: {
        total: this.results.length,
        successful: this.results.filter(r => r.status === 'success').length,
        failed: this.results.filter(r => r.status === 'failed').length
      }
    };

    const reportPath = path.join(this.projectRoot, 'ultimate-automation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Report generated: ${reportPath}`, 'SUCCESS');
    this.log(`✅ ${report.summary.successful}/${report.summary.total} automations successful`, 'SUCCESS');
  }
}

const suite = new UltimateAutomationSuite();
suite.runAllAutomations().catch(console.error);

module.exports = UltimateAutomationSuite;
