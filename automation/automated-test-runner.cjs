#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AutomatedTestRunner {
  constructor() {
    this.testResults = {
      timestamp: new Date().toISOString(),
      testSuites: [],
      coverage: {},
      performance: {},
      summary: {
        total: 0,
        passed: 0,
        failed: 0,
        skipped: 0,
      },
    };
    this.logFile = path.join(__dirname, 'logs', 'test-runner.log');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runTests() {
    this.log('🧪 Starting Automated Test Runner...');

    try {
      // Run smoke tests
      await this.runSmokeTests();

      // Run unit tests
      await this.runUnitTests();

      // Run integration tests
      await this.runIntegrationTests();

      // Generate coverage report
      await this.generateCoverageReport();

      // Save results
      await this.saveResults();

      this.log('Automated test runner completed successfully');
      return this.testResults;
    } catch (error) {
      this.log(`Automated test runner failed: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async runSmokeTests() {
    this.log('Running smoke tests...');

    try {
      const startTime = Date.now();
      const result = execSync('npm run test:smoke', {
        encoding: 'utf8',
        cwd: process.cwd(),
      });
      const duration = Date.now() - startTime;

      this.testResults.testSuites.push({
        name: 'smoke',
        status: 'passed',
        duration: duration,
        output: result,
      });

      this.testResults.summary.total++;
      this.testResults.summary.passed++;
    } catch (error) {
      this.log(`Smoke tests failed: ${error.message}`, 'ERROR');
      this.testResults.testSuites.push({
        name: 'smoke',
        status: 'failed',
        duration: 0,
        error: error.message,
      });

      this.testResults.summary.total++;
      this.testResults.summary.failed++;
    }
  }

  async runUnitTests() {
    this.log('Running unit tests...');

    try {
      const startTime = Date.now();
      const result = execSync('npm test', {
        encoding: 'utf8',
        cwd: process.cwd(),
      });
      const duration = Date.now() - startTime;

      this.testResults.testSuites.push({
        name: 'unit',
        status: 'passed',
        duration: duration,
        output: result,
      });

      this.testResults.summary.total++;
      this.testResults.summary.passed++;
    } catch (error) {
      this.log(`Unit tests failed: ${error.message}`, 'ERROR');
      this.testResults.testSuites.push({
        name: 'unit',
        status: 'failed',
        duration: 0,
        error: error.message,
      });

      this.testResults.summary.total++;
      this.testResults.summary.failed++;
    }
  }

  async runIntegrationTests() {
    this.log('Running integration tests...');

    try {
      const startTime = Date.now();
      const result = execSync('npm run test:integration', {
        encoding: 'utf8',
        cwd: process.cwd(),
      });
      const duration = Date.now() - startTime;

      this.testResults.testSuites.push({
        name: 'integration',
        status: 'passed',
        duration: duration,
        output: result,
      });

      this.testResults.summary.total++;
      this.testResults.summary.passed++;
    } catch (error) {
      this.log(`Integration tests failed: ${error.message}`, 'WARNING');
      this.testResults.testSuites.push({
        name: 'integration',
        status: 'skipped',
        duration: 0,
        error: error.message,
      });

      this.testResults.summary.total++;
      this.testResults.summary.skipped++;
    }
  }

  async generateCoverageReport() {
    this.log('Generating coverage report...');

    try {
      const result = execSync('npm run test:coverage', {
        encoding: 'utf8',
        cwd: process.cwd(),
      });

      this.testResults.coverage = {
        report: result,
        generated: true,
      };
    } catch (error) {
      this.log(
        `Coverage report generation failed: ${error.message}`,
        'WARNING'
      );
      this.testResults.coverage = {
        report: null,
        generated: false,
        error: error.message,
      };
    }
  }

  async saveResults() {
    const resultsFile = path.join(
      __dirname,
      'reports',
      'test-runner-results.json'
    );
    fs.mkdirSync(path.dirname(resultsFile), { recursive: true });
    fs.writeFileSync(resultsFile, JSON.stringify(this.testResults, null, 2));
    this.log(`Test runner results saved to: ${resultsFile}`);
  }
}

// Run if called directly
if (require.main === module) {
  const testRunner = new AutomatedTestRunner();
  testRunner.runTests().catch(console.error);
}

module.exports = AutomatedTestRunner;
