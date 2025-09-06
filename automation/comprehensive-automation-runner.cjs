#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Comprehensive Automation Runner...');

class ComprehensiveAutomationRunner {
  constructor() {
    this.reportsDir = path.join(process.cwd(), 'automation-reports');
    this.logsDir = path.join(process.cwd(), 'logs');
    this.ensureDirectories();
  }

  ensureDirectories() {
    [this.reportsDir, this.logsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async runAutomationScript(scriptName, scriptPath) {
    try {
      this.log(`🤖 Running ${scriptName}...`);
      execSync(`node ${scriptPath}`, { stdio: 'inherit' });
      this.log(`✅ ${scriptName} completed successfully`);
      return { success: true, script: scriptName };
    } catch (error) {
      this.log(`❌ ${scriptName} failed: ${error.message}`);
      return { success: false, script: scriptName, error: error.message };
    }
  }

  async runAllAutomations() {
    const automations = [
      { name: 'Master Orchestrator', path: 'automation/master-orchestrator.cjs' },
      { name: 'Comprehensive App Improvement Suite', path: 'automation/comprehensive-app-improvement-suite.cjs' },
      { name: 'Continuous Improvement Orchestrator', path: 'automation/continuous-improvement-orchestrator.cjs' },
      { name: 'Health Check', path: 'automation/health-check.cjs' },
      { name: 'Performance Optimizer', path: 'automation/performance-optimizer.cjs' },
      { name: 'Security Scanner', path: 'automation/security-scanner.cjs' },
      { name: 'SEO Optimizer', path: 'automation/seo-optimizer.cjs' }
    ];

    const results = [];
    let successfulAutomations = 0;

    this.log('🎯 Starting comprehensive automation execution...');

    for (const automation of automations) {
      const result = await this.runAutomationScript(automation.name, automation.path);
      results.push(result);
      
      if (result.success) {
        successfulAutomations++;
      }
    }

    const report = {
      timestamp: new Date().toISOString(),
      totalAutomations: automations.length,
      successfulAutomations,
      failedAutomations: automations.length - successfulAutomations,
      results,
      successRate: Math.round((successfulAutomations / automations.length) * 100)
    };

    const reportPath = path.join(this.reportsDir, 'comprehensive-automation-runner-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Comprehensive automation completed! Report saved to: ${reportPath}`);
    this.log(`📈 Success Rate: ${report.successRate}% (${successfulAutomations}/${automations.length} automations successful)`);
    
    return report;
  }
}

// Run all automations
const runner = new ComprehensiveAutomationRunner();
runner.runAllAutomations().catch(console.error);