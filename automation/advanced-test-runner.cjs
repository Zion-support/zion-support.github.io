#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧪 Starting Advanced Test Runner...');

class AdvancedTestRunner {
  constructor() {
    this.testResults = [];
    this.reportPath = path.join(__dirname, '..', 'automation-reports', 'test-results.json');
    this.ensureReportDir();
  }

  ensureReportDir() {
    const reportDir = path.dirname(this.reportPath);
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
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
        cwd: path.join(__dirname, '..'),
      });
      this.log(`✅ ${description} - Success`);
      return { success: true, result };
    } catch (error) {
      this.log(`❌ ${description} - Failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async runSmokeTests() {
    this.log('🔥 Running smoke tests...');
    return await this.runCommand('npm run test:smoke', 'Smoke tests');
  }

  async runUnitTests() {
    this.log('🔬 Running unit tests...');
    return await this.runCommand('npm run test:unit', 'Unit tests');
  }

  async runIntegrationTests() {
    this.log('🔗 Running integration tests...');
    return await this.runCommand('npm run test:integration', 'Integration tests');
  }

  async runE2ETests() {
    this.log('🌐 Running E2E tests...');
    return await this.runCommand('npm run test:e2e', 'E2E tests');
  }

  async runAccessibilityTests() {
    this.log('♿ Running accessibility tests...');
    return await this.runCommand('npm run test:accessibility', 'Accessibility tests');
  }

  async runPerformanceTests() {
    this.log('⚡ Running performance tests...');
    return await this.runCommand('npm run test:performance', 'Performance tests');
  }

  async runBuildTest() {
    this.log('🏗️ Running build test...');
    return await this.runCommand('npm run build', 'Build test');
  }

  async runLintTest() {
    this.log('🔍 Running lint test...');
    return await this.runCommand('npm run lint:check', 'Lint test');
  }

  async runTypeCheck() {
    this.log('📝 Running type check...');
    return await this.runCommand('npm run type-check', 'Type check');
  }

  async generateReport() {
    this.log('📊 Generating test report...');

    const report = {
      timestamp: new Date().toISOString(),
      testResults: this.testResults,
      summary: {
        totalTests: this.testResults.length,
        passedTests: this.testResults.filter(t => t.success).length,
        failedTests: this.testResults.filter(t => !t.success).length,
        successRate: this.testResults.filter(t => t.success).length / this.testResults.length * 100
      }
    };

    fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Test report saved to: ${this.reportPath}`);
  }

  async run() {
    try {
      this.log('🎯 Starting advanced test runner...');

      // Run all test types
      this.testResults.push(await this.runSmokeTests());
      this.testResults.push(await this.runUnitTests());
      this.testResults.push(await this.runIntegrationTests());
      this.testResults.push(await this.runE2ETests());
      this.testResults.push(await this.runAccessibilityTests());
      this.testResults.push(await this.runPerformanceTests());
      this.testResults.push(await this.runBuildTest());
      this.testResults.push(await this.runLintTest());
      this.testResults.push(await this.runTypeCheck());

      await this.generateReport();

      const passedTests = this.testResults.filter(t => t.success).length;
      const totalTests = this.testResults.length;
      
      this.log(`🎉 Advanced test runner completed!`);
      this.log(`📊 Passed: ${passedTests}/${totalTests} tests`);
      this.log(`📈 Success rate: ${(passedTests/totalTests*100).toFixed(1)}%`);
    } catch (error) {
      this.log(`❌ Advanced test runner failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the test runner
const testRunner = new AdvancedTestRunner();
testRunner.run().catch(console.error);