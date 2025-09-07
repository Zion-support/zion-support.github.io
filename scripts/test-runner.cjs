#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class TestRunner {
  constructor() {
    this.projectRoot = process.cwd();
    this.results = {
      unit: { passed: 0, failed: 0 },
      integration: { passed: 0, failed: 0 },
      e2e: { passed: 0, failed: 0 }
    };
  }

  async runUnitTests() {
    console.log('🧪 Running unit tests...');
    try {
      execSync('npm test -- --testPathPattern=unit --passWithNoTests', { stdio: 'inherit' });
      this.results.unit.passed++;
    } catch (error) {
      this.results.unit.failed++;
    }
  }

  async runIntegrationTests() {
    console.log('🔗 Running integration tests...');
    try {
      execSync('npm test -- --testPathPattern=integration --passWithNoTests', { stdio: 'inherit' });
      this.results.integration.passed++;
    } catch (error) {
      this.results.integration.failed++;
    }
  }

  async runE2ETests() {
    console.log('🌐 Running E2E tests...');
    try {
      execSync('npm test -- --testPathPattern=e2e --passWithNoTests', { stdio: 'inherit' });
      this.results.e2e.passed++;
    } catch (error) {
      this.results.e2e.failed++;
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      results: this.results,
      summary: {
        totalPassed: Object.values(this.results).reduce((sum, cat) => sum + cat.passed, 0),
        totalFailed: Object.values(this.results).reduce((sum, cat) => sum + cat.failed, 0)
      }
    };

    fs.writeFileSync('test-results.json', JSON.stringify(report, null, 2));
    console.log('📊 Test report generated: test-results.json');
  }

  async run() {
    await this.runUnitTests();
    await this.runIntegrationTests();
    await this.runE2ETests();
    this.generateReport();
  }
}

if (require.main === module) {
  const runner = new TestRunner();
  runner.run().catch(console.error);
}

module.exports = TestRunner;
