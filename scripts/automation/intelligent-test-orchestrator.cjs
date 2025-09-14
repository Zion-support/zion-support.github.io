const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class IntelligentTestOrchestrator {
  constructor() {
    this.logsDir = path.join(__dirname, '../../logs');
    this.ensureLogsDir();
  }

  ensureLogsDir() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logMessage);

    const logFile = path.join(
      this.logsDir,
      'intelligent-test-orchestrator.log'
    );
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`);
      const output = execSync(command, {
        encoding: 'utf8',
        cwd: '/workspace',
        stdio: 'pipe',
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'error');
      return { success: false, error: error.message };
    }
  }

  async runIntelligentTests() {
    this.log('🧪 Starting intelligent test orchestration...');

    const tests = [
      { command: 'npm run test:smoke', description: 'Smoke tests' },
      { command: 'npm run test:unit', description: 'Unit tests' },
      { command: 'npm run test:integration', description: 'Integration tests' },
      { command: 'npm run test:coverage', description: 'Test coverage' },
    ];

    const results = [];
    for (const test of tests) {
      const result = await this.runCommand(test.command, test.description);
      results.push({ ...test, result });
    }

    this.log('✅ Intelligent test orchestration completed');
    return { success: true, results };
  }

  async generateReport() {
    this.log('📊 Generating intelligent test report...');

    const report = {
      timestamp: new Date().toISOString(),
      tests: await this.runIntelligentTests(),
      summary: {
        testsRun: 4,
        successfulTests: 0,
        failedTests: 0,
      },
    };

    // Calculate summary
    report.tests.results.forEach(result => {
      if (result.result.success) {
        report.summary.successfulTests++;
      } else {
        report.summary.failedTests++;
      }
    });

    // Save report
    const reportFile = path.join(
      this.logsDir,
      `intelligent-test-report-${Date.now()}.json`
    );
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    this.log(`📄 Report saved to: ${reportFile}`);
    return report;
  }

  async start() {
    this.log('🎯 Starting Intelligent Test Orchestrator...');
    const report = await this.generateReport();
    this.log('🏁 Intelligent Test Orchestrator completed');
    return report;
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new IntelligentTestOrchestrator();
  orchestrator
    .start()
    .then(report => {
      console.log('Intelligent test orchestration completed:', report.summary);
      process.exit(0);
    })
    .catch(error => {
      console.error('Intelligent test orchestration failed:', error);
      process.exit(1);
    });
}

module.exports = IntelligentTestOrchestrator;
