const fs = require('fs');
const { execSync } = require('child_process');

class AllAutomationsRunner {
  constructor() {
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
        cwd: process.cwd(),
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
    this.log('🎯 Starting All Automations Runner...');

    const automations = [
      { cmd: 'npm run test:smoke', desc: 'Smoke Tests' },
      { cmd: 'npm run build', desc: 'Build Application' },
      {
        cmd: 'node automation/master-orchestrator.cjs',
        desc: 'Master Automation Orchestrator',
      },
      {
        cmd: 'node automation/enhanced-automation-suite.cjs',
        desc: 'Enhanced Automation Suite',
      },
      {
        cmd: 'node automation/comprehensive-app-improver.cjs',
        desc: 'Comprehensive App Improver',
      },
      { cmd: 'npm run performance:analyze', desc: 'Performance Analysis' },
      { cmd: 'npm run quality:analyze', desc: 'Code Quality Analysis' },
      { cmd: 'npm run security:scan', desc: 'Security Scan' },
      { cmd: 'node fix-syntax-errors.cjs', desc: 'Syntax Error Fixer' },
    ];

    for (const automation of automations) {
      await this.runCommand(automation.cmd, automation.desc);
    }

    await this.generateReport();
  }

  async generateReport() {
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
      results: this.results,
    };

    const reportPath = './automation-reports/all-automations-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    this.log(`📊 Report saved to: ${reportPath}`);
    this.log(
      `🎉 All automations completed! Success: ${successful}/${this.results.length} (${report.summary.successRate}%)`
    );

    return report;
  }
}

// Run all automations
if (require.main === module) {
  const runner = new AllAutomationsRunner();
  runner.runAllAutomations().catch(error => {
    console.error('❌ Error:', error);
    process.exit(1);
  });
}

module.exports = AllAutomationsRunner;
