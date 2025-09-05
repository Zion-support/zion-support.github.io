#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class IntelligentTestRunner {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'intelligent-test-runner.log');
    this.ensureLogDir();
    this.testResults = {
      unit: { passed: 0, failed: 0, total: 0 },
      integration: { passed: 0, failed: 0, total: 0 },
      e2e: { passed: 0, failed: 0, total: 0 },
      smoke: { passed: 0, failed: 0, total: 0 },
      accessibility: { passed: 0, failed: 0, total: 0 },
      performance: { passed: 0, failed: 0, total: 0 },
    };
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runSmokeTests() {
    this.log('🔥 Running smoke tests...');
    try {
      const output = execSync('npm run test:smoke', {
        encoding: 'utf8',
        stdio: 'pipe',
      });

      // Parse Jest output for test results
      const lines = output.split('\n');
      let passed = 0,
        failed = 0,
        total = 0;

      for (const line of lines) {
        if (line.includes('✓')) passed++;
        if (line.includes('✗') || line.includes('×')) failed++;
        if (line.includes('Test Suites:')) {
          const match = line.match(/(\d+) passed/);
          if (match) passed = parseInt(match[1]);
        }
        if (line.includes('Tests:')) {
          const match = line.match(/(\d+) total/);
          if (match) total = parseInt(match[1]);
        }
      }

      this.testResults.smoke = { passed, failed, total };
      this.log(
        `✅ Smoke tests completed: ${passed} passed, ${failed} failed, ${total} total`
      );
      return true;
    } catch (error) {
      this.log(`❌ Smoke tests failed: ${error.message}`);
      this.testResults.smoke.failed++;
      return false;
    }
  }

  async runUnitTests() {
    this.log('🧪 Running unit tests...');
    try {
      const output = execSync('npm run test:unit', {
        encoding: 'utf8',
        stdio: 'pipe',
      });

      // Parse Jest output
      const lines = output.split('\n');
      let passed = 0,
        failed = 0,
        total = 0;

      for (const line of lines) {
        if (line.includes('✓')) passed++;
        if (line.includes('✗') || line.includes('×')) failed++;
        if (line.includes('Tests:')) {
          const match = line.match(/(\d+) total/);
          if (match) total = parseInt(match[1]);
        }
      }

      this.testResults.unit = { passed, failed, total };
      this.log(
        `✅ Unit tests completed: ${passed} passed, ${failed} failed, ${total} total`
      );
      return true;
    } catch (error) {
      this.log(`❌ Unit tests failed: ${error.message}`);
      this.testResults.unit.failed++;
      return false;
    }
  }

  async runIntegrationTests() {
    this.log('🔗 Running integration tests...');
    try {
      const output = execSync('npm run test:integration', {
        encoding: 'utf8',
        stdio: 'pipe',
      });

      const lines = output.split('\n');
      let passed = 0,
        failed = 0,
        total = 0;

      for (const line of lines) {
        if (line.includes('✓')) passed++;
        if (line.includes('✗') || line.includes('×')) failed++;
        if (line.includes('Tests:')) {
          const match = line.match(/(\d+) total/);
          if (match) total = parseInt(match[1]);
        }
      }

      this.testResults.integration = { passed, failed, total };
      this.log(
        `✅ Integration tests completed: ${passed} passed, ${failed} failed, ${total} total`
      );
      return true;
    } catch (error) {
      this.log(`❌ Integration tests failed: ${error.message}`);
      this.testResults.integration.failed++;
      return false;
    }
  }

  async runE2ETests() {
    this.log('🌐 Running E2E tests...');
    try {
      const output = execSync('npm run test:e2e', {
        encoding: 'utf8',
        stdio: 'pipe',
      });

      const lines = output.split('\n');
      let passed = 0,
        failed = 0,
        total = 0;

      for (const line of lines) {
        if (line.includes('✓')) passed++;
        if (line.includes('✗') || line.includes('×')) failed++;
        if (line.includes('Tests:')) {
          const match = line.match(/(\d+) total/);
          if (match) total = parseInt(match[1]);
        }
      }

      this.testResults.e2e = { passed, failed, total };
      this.log(
        `✅ E2E tests completed: ${passed} passed, ${failed} failed, ${total} total`
      );
      return true;
    } catch (error) {
      this.log(`❌ E2E tests failed: ${error.message}`);
      this.testResults.e2e.failed++;
      return false;
    }
  }

  async runAccessibilityTests() {
    this.log('♿ Running accessibility tests...');
    try {
      const output = execSync('npm run test:accessibility', {
        encoding: 'utf8',
        stdio: 'pipe',
      });

      const lines = output.split('\n');
      let passed = 0,
        failed = 0,
        total = 0;

      for (const line of lines) {
        if (line.includes('✓')) passed++;
        if (line.includes('✗') || line.includes('×')) failed++;
        if (line.includes('Tests:')) {
          const match = line.match(/(\d+) total/);
          if (match) total = parseInt(match[1]);
        }
      }

      this.testResults.accessibility = { passed, failed, total };
      this.log(
        `✅ Accessibility tests completed: ${passed} passed, ${failed} failed, ${total} total`
      );
      return true;
    } catch (error) {
      this.log(`❌ Accessibility tests failed: ${error.message}`);
      this.testResults.accessibility.failed++;
      return false;
    }
  }

  async runPerformanceTests() {
    this.log('⚡ Running performance tests...');
    try {
      const output = execSync('npm run test:performance', {
        encoding: 'utf8',
        stdio: 'pipe',
      });

      const lines = output.split('\n');
      let passed = 0,
        failed = 0,
        total = 0;

      for (const line of lines) {
        if (line.includes('✓')) passed++;
        if (line.includes('✗') || line.includes('×')) failed++;
        if (line.includes('Tests:')) {
          const match = line.match(/(\d+) total/);
          if (match) total = parseInt(match[1]);
        }
      }

      this.testResults.performance = { passed, failed, total };
      this.log(
        `✅ Performance tests completed: ${passed} passed, ${failed} failed, ${total} total`
      );
      return true;
    } catch (error) {
      this.log(`❌ Performance tests failed: ${error.message}`);
      this.testResults.performance.failed++;
      return false;
    }
  }

  async generateTestReport() {
    this.log('📊 Generating test report...');

    const report = {
      timestamp: new Date().toISOString(),
      testResults: this.testResults,
      summary: {
        totalTests: 0,
        totalPassed: 0,
        totalFailed: 0,
        successRate: 0,
      },
    };

    // Calculate summary
    Object.values(this.testResults).forEach(testType => {
      report.summary.totalTests += testType.total;
      report.summary.totalPassed += testType.passed;
      report.summary.totalFailed += testType.failed;
    });

    if (report.summary.totalTests > 0) {
      report.summary.successRate =
        (report.summary.totalPassed / report.summary.totalTests) * 100;
    }

    const reportPath = path.join(
      __dirname,
      'reports',
      'intelligent-test-report.json'
    );
    const reportDir = path.dirname(reportPath);
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }

    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📄 Test report saved to: ${reportPath}`);

    return report;
  }

  async run() {
    this.log('🚀 Starting Intelligent Test Runner...');

    try {
      // Run all test suites
      await this.runSmokeTests();
      await this.runUnitTests();
      await this.runIntegrationTests();
      await this.runE2ETests();
      await this.runAccessibilityTests();
      await this.runPerformanceTests();

      // Generate report
      const report = await this.generateTestReport();

      this.log('🏁 Intelligent Test Runner completed');
      this.log(`📊 Total tests: ${report.summary.totalTests}`);
      this.log(`✅ Passed: ${report.summary.totalPassed}`);
      this.log(`❌ Failed: ${report.summary.totalFailed}`);
      this.log(`📈 Success rate: ${report.summary.successRate.toFixed(2)}%`);

      return report;
    } catch (error) {
      this.log(`💥 Intelligent Test Runner failed: ${error.message}`);
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const testRunner = new IntelligentTestRunner();
  testRunner.run().catch(console.error);
}

module.exports = IntelligentTestRunner;
