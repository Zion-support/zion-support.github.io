#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AutomatedTestingSuite {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'test-reports');
    this.logFile = path.join(this.reportsDir, 'testing-suite.log');
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n');
    } catch (_) {}
  }

  hasNpmProject() {
    return fs.existsSync(path.join(this.projectRoot, 'package.json'));
  }

  commandAvailable(command) {
    try {
      execSync(`command -v ${command}`, { stdio: 'ignore', shell: '/bin/bash' });
      return true;
    } catch {
      return false;
    }
  }

  runCommand(cmd) {
    return execSync(cmd, { encoding: 'utf8', cwd: this.projectRoot, stdio: 'pipe', shell: '/bin/bash' });
  }

  async runTests() {
    if (!this.hasNpmProject() || !this.commandAvailable('npm')) {
      this.log('Skipping tests: npm or package.json not available', 'WARN');
      return { success: true, skipped: true };
    }
    try {
      this.log('Running test suite...');
      const result = this.runCommand('npm test -- --passWithNoTests');
      this.log('Tests completed successfully');
      return { success: true, result };
    } catch (error) {
      this.log(`Tests failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async runBuild() {
    if (!this.hasNpmProject() || !this.commandAvailable('npm')) {
      this.log('Skipping build: npm or package.json not available', 'WARN');
      return { success: true, skipped: true };
    }
    try {
      this.log('Running build...');
      const result = this.runCommand('npm run build');
      this.log('Build completed successfully');
      return { success: true, result };
    } catch (error) {
      this.log(`Build failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  generateReport(testResults, buildResults) {
    const report = {
      timestamp: new Date().toISOString(),
      tests: testResults,
      build: buildResults,
      summary: {
        testsPassed: !!testResults.success,
        buildPassed: !!buildResults.success,
        overallStatus: testResults.success && buildResults.success ? 'PASSED' : 'FAILED',
      },
    };
    const reportPath = path.join(this.reportsDir, 'test-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`Test report generated: ${reportPath}`);
  }

  async run() {
    this.log('🚀 Starting Automated Testing Suite...');
    const testResults = await this.runTests();
    const buildResults = await this.runBuild();
    this.generateReport(testResults, buildResults);
    return testResults.success && buildResults.success;
  }
}

if (require.main === module) {
  const suite = new AutomatedTestingSuite();
  suite.run().then((ok) => process.exit(ok ? 0 : 1));
}

module.exports = AutomatedTestingSuite;