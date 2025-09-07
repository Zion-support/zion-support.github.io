const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class AutomatedTestRunner {
  constructor() {
    this.logsDir = path.join(__dirname, '../logs');
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

    const logFile = path.join(this.logsDir, 'test-runner.log');
    fs.appendFileSync(logFile, `${logMessage  }\n`);
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`);
      const output = execSync(command, {
        encoding: 'utf8',
        cwd: '/workspace',
        stdio: 'pipe',
        timeout: 60000 // 60 second timeout
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'error');
      return { success: false, error: error.message, output: error.stdout || '' };
    }
  }

  async runSmokeTests() {
    this.log('🔥 Running smoke tests...');
    const result = await this.runCommand('npm run test:smoke', 'Smoke tests');
    return result;
  }

  async runUnitTests() {
    this.log('🧪 Running unit tests...');
    const result = await this.runCommand('npm run test', 'Unit tests');
    return result;
  }

  async runTypeCheck() {
    this.log('🔍 Running TypeScript type check...');
    const result = await this.runCommand('npm run type-check', 'TypeScript type check');
    return result;
  }

  async runLintCheck() {
    this.log('🔧 Running lint check...');
    const result = await this.runCommand('npm run lint', 'Lint check');
    return result;
  }

  async runBuildTest() {
    this.log('🏗️ Running build test...');
    const result = await this.runCommand('npm run build', 'Build test');
    return result;
  }

  async findTestFiles() {
    const testExtensions = ['.test.js', '.test.ts', '.test.jsx', '.test.tsx', '.spec.js', '.spec.ts'];
    const testFiles = [];
    
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !this.shouldIgnoreDirectory(item)) {
            scanDirectory(fullPath);
          } else if (stat.isFile() && testExtensions.some(ext => item.endsWith(ext))) {
            testFiles.push(fullPath);
          }
        }
      } catch (error) {
        // Ignore errors for directories we can't read
      }
    };

    scanDirectory('/workspace');
    return testFiles;
  }

  shouldIgnoreDirectory(dirName) {
    const ignoreDirs = [
      'node_modules', 'dist', 'build', 'coverage', '.git', '.next',
      'backup', 'backups', 'corrupted', 'disabled', 'temp'
    ];
    return ignoreDirs.includes(dirName);
  }

  async runCustomTests() {
    this.log('🎯 Running custom tests...');
    const testFiles = await this.findTestFiles();
    const results = [];

    for (const testFile of testFiles.slice(0, 10)) { // Limit to first 10 test files
      try {
        const result = await this.runCommand(`node ${testFile}`, `Custom test: ${path.basename(testFile)}`);
        results.push({
          file: testFile,
          success: result.success,
          output: result.output || result.error
        });
      } catch (error) {
        results.push({
          file: testFile,
          success: false,
          error: error.message
        });
      }
    }

    return results;
  }

  async runAccessibilityTests() {
    this.log('♿ Running accessibility tests...');
    const result = await this.runCommand('npm run test:accessibility', 'Accessibility tests');
    return result;
  }

  async runPerformanceTests() {
    this.log('⚡ Running performance tests...');
    const result = await this.runCommand('npm run test:performance', 'Performance tests');
    return result;
  }

  async runAllTests() {
    this.log('🚀 Starting comprehensive test suite...');

    const testResults = {
      timestamp: new Date().toISOString(),
      tests: {}
    };

    // Run different types of tests
    testResults.tests.smoke = await this.runSmokeTests();
    testResults.tests.unit = await this.runUnitTests();
    testResults.tests.typeCheck = await this.runTypeCheck();
    testResults.tests.lint = await this.runLintCheck();
    testResults.tests.build = await this.runBuildTest();
    testResults.tests.custom = await this.runCustomTests();
    
    // Try accessibility and performance tests (may not exist)
    try {
      testResults.tests.accessibility = await this.runAccessibilityTests();
    } catch (error) {
      testResults.tests.accessibility = { success: false, error: 'Not available' };
    }

    try {
      testResults.tests.performance = await this.runPerformanceTests();
    } catch (error) {
      testResults.tests.performance = { success: false, error: 'Not available' };
    }

    // Calculate summary
    const summary = this.calculateTestSummary(testResults.tests);
    testResults.summary = summary;

    this.saveTestReport(testResults);
    this.log('✅ Comprehensive test suite completed');
    return { success: true, results: testResults };
  }

  calculateTestSummary(tests) {
    const totalTests = Object.keys(tests).length;
    let passedTests = 0;
    let failedTests = 0;

    Object.values(tests).forEach(test => {
      if (Array.isArray(test)) {
        // Custom tests array
        test.forEach(t => {
          if (t.success) passedTests++;
          else failedTests++;
        });
      } else {
        // Single test result
        if (test.success) passedTests++;
        else failedTests++;
      }
    });

    return {
      total: totalTests,
      passed: passedTests,
      failed: failedTests,
      successRate: totalTests > 0 ? Math.round((passedTests / totalTests) * 100) : 0
    };
  }

  saveTestReport(results) {
    const reportFile = path.join(this.logsDir, `test-results-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(results, null, 2));
    this.log(`📄 Test report saved to: ${reportFile}`);
  }

  async runQuickTest() {
    this.log('⚡ Running quick test suite...');
    
    const quickTests = [
      { name: 'smoke', fn: () => this.runSmokeTests() },
      { name: 'typeCheck', fn: () => this.runTypeCheck() },
      { name: 'build', fn: () => this.runBuildTest() }
    ];

    const results = {};
    for (const test of quickTests) {
      results[test.name] = await test.fn();
    }

    this.log('✅ Quick test suite completed');
    return { success: true, results };
  }
}

// CLI interface
if (require.main === module) {
  const testRunner = new AutomatedTestRunner();
  const command = process.argv[2] || 'all';

  switch (command) {
    case 'all':
      testRunner.runAllTests().catch(error => {
        console.error('Test suite failed:', error);
        process.exit(1);
      });
      break;
    case 'quick':
      testRunner.runQuickTest().catch(error => {
        console.error('Quick test failed:', error);
        process.exit(1);
      });
      break;
    case 'smoke':
      testRunner.runSmokeTests().catch(error => {
        console.error('Smoke tests failed:', error);
        process.exit(1);
      });
      break;
    default:
      console.log('Usage: node automated-test-runner.cjs [all|quick|smoke]');
      process.exit(1);
  }
}

module.exports = AutomatedTestRunner;