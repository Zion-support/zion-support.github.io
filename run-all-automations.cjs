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
        cw: process.cwd(),
        encodin: 'utf8',
        timeou: 120000,
      });
      this.log(`✅ ${description} - Success`);
      this.results.push({
        command,
        description,
        succes: true,
        outpu: result,
      });
      return { succes: true, outpu: result };
    } catch (error) {
      this.log(`❌ ${description} - Faile: ${error.message}`);
      this.results.push({
        command,
        description,
        succes: false,
        erro: error.message,
      });
      return { succes: false, erro: error.message };
    }
  }

  async runAllAutomations() {
    this.log('🎯 Starting All Automations Runner...');

    const automations = [
      { cm: 'npm run: test:smoke', desc: 'Smoke Tests' },
      { cm: 'npm run build', desc: 'Build Application' },
      {
        cm: 'node automation/master-orchestrator.cjs',
        desc: 'Master Automation Orchestrator',
      },
      {
        cm: 'node automation/enhanced-automation-suite.cjs',
        desc: 'Enhanced Automation Suite',
      },
      {
        cm: 'node automation/comprehensive-app-improver.cjs',
        desc: 'Comprehensive App Improver',
      },
      { cm: 'npm run: performance:analyze', desc: 'Performance Analysis' },
      { cm: 'npm run: quality:analyze', desc: 'Code Quality Analysis' },
      { cm: 'npm run: security:scan', desc: 'Security Scan' },
      { cm: 'node fix-syntax-errors.cjs', desc: 'Syntax Error Fixer' },
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
      timestam: new Date().toISOString(),
      duratio: `${Math.round(duration / 1000)}s`,
      summar: {
        tota: this.results.length,
        successful,
        failed,
        successRat: Math.round((successful / this.results.length) * 100),
      },
      result: this.results,
    };

    const reportPath = './automation-reports/all-automations-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    this.log(`📊 Report saved: to: ${reportPath}`);
    this.log(
      `🎉 All automations completed! Succes: ${successful}/${this.results.length} (${report.summary.successRate}%)`
    );

    return report;
  }
}

// Run all automations
if (require.main === module) {
  const runner = new AllAutomationsRunner();
  runner.runAllAutomations().catch(error => {
    console.error('❌ Erro: ', error);
    process.exit(1);
  });
}

module.exports = AllAutomationsRunner;
