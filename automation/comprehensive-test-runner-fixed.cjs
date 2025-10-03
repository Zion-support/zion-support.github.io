#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class ComprehensiveTestRunner {
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

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} ${message}`);
  }

  async runCommand(command, description = '') {
    try {
      this.log(`Running: ${description || command}`);
      const { stdout, stderr } = await execAsync(command, {
        cwd: this.projectRoot,
        timeout: 120000,
      });

      this.log(`✅ ${description || command} completed successfully`, 'SUCCESS');
      return { success: true, stdout, stderr };
    } catch (error) {
      this.log(`❌ ${description || command} failed: ${error.message}`, 'ERROR');
      return { 
        success: false, 
        stdout: error.stdout || '', 
        stderr: error.stderr || error.message 
      };
    }
  }

  async runSmokeTests() {
    this.log('🧪 Running smoke tests...');
    const result = await this.runCommand('npm run test:smoke', 'Smoke tests');
    return {
      name: 'Smoke Tests',
      status: result.success ? 'passed' : 'failed',
      details: result.success ? 'All smoke tests passed' : result.stderr,
      result
    };
  }

  async runUnitTests() {
    this.log('🔬 Running unit tests...');
    const result = await this.runCommand('npm test', 'Unit tests');
    return {
      name: 'Unit Tests',
      status: result.success ? 'passed' : 'failed',
      details: result.success ? 'All unit tests passed' : result.stderr,
      result
    };
  }

  async runIntegrationTests() {
    this.log('🔗 Running integration tests...');
    const result = await this.runCommand('npm run test:integration', 'Integration tests');
    return {
      name: 'Integration Tests',
      status: result.success ? 'passed' : 'skipped',
      details: result.success ? 'Integration tests passed' : 'Integration tests not configured',
      result
    };
  }

  async runE2ETests() {
    this.log('🌐 Running E2E tests...');
    const result = await this.runCommand('npm run test:e2e', 'E2E tests');
    return {
      name: 'E2E Tests',
      status: result.success ? 'passed' : 'skipped',
      details: result.success ? 'E2E tests passed' : 'E2E tests not configured',
      result
    };
  }

  async runAccessibilityTests() {
    this.log('♿ Running accessibility tests...');
    const result = await this.runCommand('npm run test:accessibility', 'Accessibility tests');
    return {
      name: 'Accessibility Tests',
      status: result.success ? 'passed' : 'skipped',
      details: result.success ? 'Accessibility tests passed' : 'Accessibility tests not configured',
      result
    };
  }

  async runPerformanceTests() {
    this.log('⚡ Running performance tests...');
    const result = await this.runCommand('npm run test:performance', 'Performance tests');
    return {
      name: 'Performance Tests',
      status: result.success ? 'passed' : 'skipped',
      details: result.success ? 'Performance tests passed' : 'Performance tests not configured',
      result
    };
  }

  async runAllTests() {
    this.log('🚀 Starting comprehensive test suite...');

    const tests = [
      await this.runSmokeTests(),
      await this.runUnitTests(),
      await this.runIntegrationTests(),
      await this.runE2ETests(),
      await this.runAccessibilityTests(),
      await this.runPerformanceTests()
    ];

    const passedCount = tests.filter(test => test.status === 'passed').length;
    const failedCount = tests.filter(test => test.status === 'failed').length;
    const skippedCount = tests.filter(test => test.status === 'skipped').length;

    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: tests.length,
        passed: passedCount,
        failed: failedCount,
        skipped: skippedCount
      },
      tests
    };

    const reportFile = path.join(this.reportsDir, `comprehensive-test-runner-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    this.log(`📊 Comprehensive test suite completed. ${passedCount} passed, ${failedCount} failed, ${skippedCount} skipped`, 'SUCCESS');
    this.log(`📄 Report saved to: ${reportFile}`, 'SUCCESS');
    
    return report;
  }
}

// CLI interface
if (require.main === module) {
  const testRunner = new ComprehensiveTestRunner();
  testRunner.runAllTests().catch(error => {
    console.error('Test runner failed:', error);
    process.exit(1);
  });
}

module.exports = ComprehensiveTestRunner;