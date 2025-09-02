#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🎯 Starting Master Automation Orchestrator...');

class MasterAutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  async runCommand(command, description) {
    console.log(`🚀 Running: ${description}`);
    try {
      const result = execSync(command, { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        timeout: 300000
      });
      console.log(`✅ Completed: ${description}`);
      return { success: true, output: result };
    } catch (error) {
      console.log(`❌ Failed: ${description} - ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async runAllAutomations() {
    console.log('🎯 Running all automation scripts...');
    
    const automations = [
      {
        command: 'node scripts/automation/advanced-error-fixer.cjs',
        description: 'Advanced Error Fixer'
      },
      {
        command: 'node scripts/automation/app-improvement-automation.cjs',
        description: 'App Improvement Automation'
      },
      {
        command: 'node scripts/automation/performance-monitor.js',
        description: 'Performance Monitor'
      },
      {
        command: 'node scripts/automation/security-audit.cjs',
        description: 'Security Audit'
      },
      {
        command: 'npm run build',
        description: 'Build Application'
      },
      {
        command: 'npm run test',
        description: 'Run Tests'
      }
    ];

    const results = [];
    for (const automation of automations) {
      const result = await this.runCommand(automation.command, automation.description);
      results.push({ ...automation, ...result });
    }

    return results;
  }

  async generateComprehensiveReport() {
    const report = {
      timestamp: new Date().toISOString(),
      automations: await this.runAllAutomations(),
      summary: {
        total: 0,
        successful: 0,
        failed: 0
      }
    };

    // Calculate summary
    report.summary.total = report.automations.length;
    report.summary.successful = report.automations.filter(a => a.success).length;
    report.summary.failed = report.summary.total - report.summary.successful;

    const reportPath = path.join(this.reportsDir, 'master-automation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Comprehensive report generated: ${reportPath}`);

    return report;
  }

  async run() {
    console.log('🎯 Starting Master Automation Orchestrator...');
    
    try {
      const report = await this.generateComprehensiveReport();
      console.log('✅ Master Automation Orchestrator completed successfully!');
      console.log(`📊 Summary: ${report.summary.successful}/${report.summary.total} automations successful`);
      return report;
    } catch (error) {
      console.error('❌ Master Automation Orchestrator failed:', error);
      throw error;
    }
  }
}

// Run the automation
if (require.main === module) {
  const orchestrator = new MasterAutomationOrchestrator();
  orchestrator.run().catch(console.error);
}

module.exports = MasterAutomationOrchestrator;