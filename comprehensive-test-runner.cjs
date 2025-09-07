#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Comprehensive Test Runner
 * Runs all types of tests and provides detailed reporting
 */
class ComprehensiveTestRunner {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.results = {
      unitTests: { passed: 0, failed: 0, errors: [] },
      integrationTests: { passed: 0, failed: 0, errors: [] },
      e2eTests: { passed: 0, failed: 0, errors: [] },
      smokeTests: { passed: 0, failed: 0, errors: [] },
      typeCheck: { passed: 0, failed: 0, errors: [] },
      linting: { passed: 0, failed: 0, errors: [] }
    };
  }

  log(message, type = 'INFO') {
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} ${message}`);
  }

  async runCommand(command, description, timeout = 30000) {
    this.log(`Running: ${description}`, 'PROGRESS');
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
        timeout: timeout,
      });
      this.log(`${description} completed successfully`, 'SUCCESS');
      return { success: true, output: result };
    } catch (error) {
      this.log(`${description} failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr,
      };
    }
  }

  async runUnitTests() {
    this.log('\n🧪 RUNNING UNIT TESTS');
    try {
      const result = await this.runCommand(
        'npm test -- --testPathPattern=unit --passWithNoTests',
        'Unit tests',
        60000
      );
      
      if (result.success) {
        this.results.unitTests.passed++;
      } else {
        this.results.unitTests.failed++;
        this.results.unitTests.errors.push(result.error);
      }
    } catch (error) {
      this.results.unitTests.failed++;
      this.results.unitTests.errors.push(error.message);
    }
  }

  async runIntegrationTests() {
    this.log('\n🔗 RUNNING INTEGRATION TESTS');
    try {
      const result = await this.runCommand(
        'npm test -- --testPathPattern=integration --passWithNoTests',
        'Integration tests',
        60000
      );
      
      if (result.success) {
        this.results.integrationTests.passed++;
      } else {
        this.results.integrationTests.failed++;
        this.results.integrationTests.errors.push(result.error);
      }
    } catch (error) {
      this.results.integrationTests.failed++;
      this.results.integrationTests.errors.push(error.message);
    }
  }

  async runE2ETests() {
    this.log('\n🌐 RUNNING E2E TESTS');
    try {
      const result = await this.runCommand(
        'npm test -- --testPathPattern=e2e --passWithNoTests',
        'E2E tests',
        120000
      );
      
      if (result.success) {
        this.results.e2eTests.passed++;
      } else {
        this.results.e2eTests.failed++;
        this.results.e2eTests.errors.push(result.error);
      }
    } catch (error) {
      this.results.e2eTests.failed++;
      this.results.e2eTests.errors.push(error.message);
    }
  }

  async runSmokeTests() {
    this.log('\n💨 RUNNING SMOKE TESTS');
    try {
      const result = await this.runCommand(
        'npm run test:smoke',
        'Smoke tests',
        30000
      );
      
      if (result.success) {
        this.results.smokeTests.passed++;
      } else {
        this.results.smokeTests.failed++;
        this.results.smokeTests.errors.push(result.error);
      }
    } catch (error) {
      this.results.smokeTests.failed++;
      this.results.smokeTests.errors.push(error.message);
    }
  }

  async runTypeCheck() {
    this.log('\n🔍 RUNNING TYPE CHECK');
    try {
      const result = await this.runCommand(
        'npx tsc --noEmit --skipLibCheck',
        'TypeScript type check',
        30000
      );
      
      if (result.success) {
        this.results.typeCheck.passed++;
      } else {
        this.results.typeCheck.failed++;
        this.results.typeCheck.errors.push(result.error);
      }
    } catch (error) {
      this.results.typeCheck.failed++;
      this.results.typeCheck.errors.push(error.message);
    }
  }

  async runLinting() {
    this.log('\n🔍 RUNNING LINTING');
    try {
      const result = await this.runCommand(
        'npx eslint app/ --max-warnings 1000',
        'ESLint check',
        30000
      );
      
      if (result.success) {
        this.results.linting.passed++;
      } else {
        this.results.linting.failed++;
        this.results.linting.errors.push(result.error);
      }
    } catch (error) {
      this.results.linting.failed++;
      this.results.linting.errors.push(error.message);
    }
  }

  generateReport() {
    const totalDuration = Date.now() - this.startTime;
    const totalPassed = Object.values(this.results).reduce((sum, result) => sum + result.passed, 0);
    const totalFailed = Object.values(this.results).reduce((sum, result) => sum + result.failed, 0);

    this.log('\n📊 COMPREHENSIVE TEST REPORT');
    this.log('='.repeat(60));
    this.log(`Total Duration: ${totalDuration}ms`);
    this.log(`Total Passed: ${totalPassed}`);
    this.log(`Total Failed: ${totalFailed}`);
    this.log('');

    Object.entries(this.results).forEach(([testType, result]) => {
      const status = result.failed === 0 ? '✅' : '❌';
      this.log(`${status} ${testType}: ${result.passed} passed, ${result.failed} failed`);

      if (result.errors.length > 0) {
        result.errors.forEach(error => this.log(`   Error: ${error}`));
      }
    });

    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      totalDuration,
      totalPassed,
      totalFailed,
      results: this.results,
      summary: {
        success: totalFailed === 0,
        coverage: totalPassed / (totalPassed + totalFailed) * 100
      }
    };

    fs.writeFileSync(
      'comprehensive-test-report.json',
      JSON.stringify(report, null, 2)
    );
    this.log('\n📄 Detailed report saved to comprehensive-test-report.json');
  }

  async run() {
    this.log('🚀 Starting Comprehensive Test Runner');
    this.log('='.repeat(60));

    try {
      await this.runUnitTests();
      await this.runIntegrationTests();
      await this.runE2ETests();
      await this.runSmokeTests();
      await this.runTypeCheck();
      await this.runLinting();
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
    } finally {
      this.generateReport();
    }
  }
}

// Run the comprehensive test runner
if (require.main === module) {
  const runner = new ComprehensiveTestRunner();
  runner.run().catch(console.error);
}

module.exports = ComprehensiveTestRunner;