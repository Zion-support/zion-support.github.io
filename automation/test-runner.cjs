#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧪 Starting Test Runner...');

class TestRunner {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.ensureReportsDir();
  }

  ensureReportsDir() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async runCommand(command, description) {
    try {
      this.log(`🚀 ${description}`);
      const result = execSync(command, {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: this.projectRoot,
        timeout: 300000
      });
      this.log(`✅ ${description} completed`);
      return { success: true, result };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async runTests() {
    this.log('🧪 Running comprehensive tests...');
    
    const tests = [
      { cmd: 'npm run test:smoke', desc: 'Smoke tests' },
      { cmd: 'npm run test:unit', desc: 'Unit tests' },
      { cmd: 'npm run test:integration', desc: 'Integration tests' },
      { cmd: 'npm run test:accessibility', desc: 'Accessibility tests' },
      { cmd: 'npm run test:performance', desc: 'Performance tests' }
    ];

    const results = [];
    let successfulTests = 0;

    for (const test of tests) {
      const result = await this.runCommand(test.cmd, test.desc);
      results.push({
        ...test,
        ...result
      });
      
      if (result.success) {
        successfulTests++;
      }
    }

    const report = {
      timestamp: new Date().toISOString(),
      totalTests: tests.length,
      successfulTests,
      failedTests: tests.length - successfulTests,
      results,
      successRate: Math.round((successfulTests / tests.length) * 100)
    };

    const reportPath = path.join(this.reportsDir, 'test-runner-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Test run completed! Report saved to: ${reportPath}`);
    this.log(`📈 Success Rate: ${report.successRate}% (${successfulTests}/${tests.length} tests successful)`);
    
    return report;
  }
}

// Run the test runner
const runner = new TestRunner();
runner.runTests().catch(console.error);