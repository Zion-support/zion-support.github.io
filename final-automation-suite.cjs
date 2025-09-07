#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require('fs');
const path = require('path');

class FinalAutomationSuite {
  constructor() {
    this.projectRoot = process.cwd();
    this.results = [];
    this.startTime = Date.now();
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async runCommand(command, description) {
    this.log(`🚀 ${description}`);
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 120000,
      });
      this.log(`✅ ${description} - Success`);
      this.results.push({
        command,
        description,
        success: true,
        output: result,
      });
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} - Failed: ${error.message}`);
      this.results.push({
        command,
        description,
        success: false,
        error: error.message,
      });
      return { success: false, error: error.message };
    }
  }

  async runAllAutomations() {
    this.log('🎯 Starting Final Automation Suite');
    
    const automationTasks = [
      { cmd: 'npm run lint:fix', desc: 'Fix Linting Issues' },
      { cmd: 'npm run type-check', desc: 'Type Check' },
      { cmd: 'npm run test:smoke', desc: 'Smoke Tests' },
      { cmd: 'npm run build', desc: 'Build Application' }
    ];

    // Run automation tasks
    for (const task of automationTasks) {
      await this.runCommand(task.cmd, task.desc);
    }

    // Generate final report
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    const successful = this.results.filter(r => r.success).length;
    const failed = this.results.filter(r => !r.success).length;

    const report = {
      timestamp: new Date().toISOString(),
      duration: `${Math.round(duration / 1000)}s`,
      summary: {
        total: this.results.length,
        successful,
        failed,
        successRate: Math.round((successful / this.results.length) * 100),
      },
      results: this.results
    };

    fs.writeFileSync(
      path.join(this.projectRoot, 'final-automation-suite-report.json'),
      JSON.stringify(report, null, 2)
    );

    this.log('🎉 Final Automation Suite Completed');
    this.log(`📊 Summary: ${successful}/${this.results.length} tasks successful (${report.summary.successRate}%)`);
    
    if (failed > 0) {
      this.log(`⚠️ ${failed} tasks failed`);
      this.results.filter(r => !r.success).forEach(result => {
        this.log(`   - ${result.description}: ${result.error}`);
      });
    }

    return report;
  }
}

// Run the final automation suite
if (require.main === module) {
  const suite = new FinalAutomationSuite();
  suite.runAllAutomations().catch(error => {
    console.error('❌ Error:', error);
    process.exit(1);
  });
}

module.exports = FinalAutomationSuite;