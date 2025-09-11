<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class TestAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/test-automation.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/test-report.json');
    this.startTime = Date.now();
  }
  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Error writing to log file:', error.message);
    }
  }
  async runTests() {
    try {
      this.log('🧪 Running tests...');
      const startTime = Date.now();
      const testResult = execSync('npm test', {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8'
      });
      const testTime = Date.now() - startTime;
      return {
        success: true,
        output: testResult,
        duration: testTime
      };
    } catch (error) {
      this.log(`Tests failed: ${error.message}`);
      return {
        success: false,
        output: error.stdout?.toString() || error.stderr?.toString() || '',
        duration: 0,
        error: error.message
      };
    }
  }
  async runSmokeTests() {
    try {
      this.log('💨 Running smoke tests...');
      const startTime = Date.now();
      const testResult = execSync('npm run test:smoke', {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8'
      });
      const testTime = Date.now() - startTime;
      return {
        success: true,
        output: testResult,
        duration: testTime
      };
    } catch (error) {
      this.log(`Smoke tests failed: ${error.message}`);
      return {
        success: false,
        output: error.stdout?.toString() || error.stderr?.toString() || '',
        duration: 0,
        error: error.message
      };
    }
  }
  async checkTestCoverage() {
    try {
      this.log('📊 Checking test coverage...');
      const coverageResult = execSync('npm run test:coverage', {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8'
      });
      // Parse coverage from output
      const coverageMatch = coverageResult.match(/All files\s+\|\s+(\d+\.?\d*)\s+\|\s+(\d+\.?\d*)\s+\|\s+(\d+\.?\d*)\s+\|\s+(\d+\.?\d*)/);
      if (coverageMatch) {
        return {
          statements: parseFloat(coverageMatch[1]),
          branches: parseFloat(coverageMatch[2]),
          functions: parseFloat(coverageMatch[3]),
          lines: parseFloat(coverageMatch[4])
        };
      }
      return null;
    } catch (error) {
      this.log(`Coverage check failed: ${error.message}`);
      return null;
    }
  }
  generateReport(tests, smokeTests, coverage) {
    const coverageThreshold = parseInt(process.env.TEST_COVERAGE_THRESHOLD || '80');
    const avgCoverage = coverage ? 
      (coverage.statements + coverage.branches + coverage.functions + coverage.lines) / 4 : 0;
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        testsPassed: tests.success,
        smokeTestsPassed: smokeTests.success,
        coverage: avgCoverage,
        coverageThreshold,
        coverageMet: avgCoverage >= coverageThreshold,
        totalDuration: tests.duration + smokeTests.duration
      },
      tests,
      smokeTests,
      coverage,
      recommendations: this.generateRecommendations(tests, smokeTests, coverage, coverageThreshold)
    };
    return report;
  }
  generateRecommendations(tests, smokeTests, coverage, threshold) {
    const recommendations = [];
    if (!tests.success) {
      recommendations.push({
        type: 'tests',
        priority: 'high',
        message: 'Unit tests are failing',
        action: 'Fix failing tests to ensure code quality'
      });
    }
    if (!smokeTests.success) {
      recommendations.push({
        type: 'smoke-tests',
        priority: 'high',
        message: 'Smoke tests are failing',
        action: 'Fix critical functionality issues'
      });
    }
    if (coverage && coverage.statements < threshold) {
      recommendations.push({
        type: 'coverage',
        priority: 'medium',
        message: `Test coverage ${coverage.statements.toFixed(1)}% is below threshold ${threshold}%`,
        action: 'Add more tests to improve coverage'
      });
    }
    return recommendations;
  }
  async saveReport(report) {
    try {
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
      }
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved to: ${this.reportFile}`);
    } catch (error) {
      this.log(`Error saving report: ${error.message}`);
    }
  }
  async run() {
    this.log('🧪 Starting Test Automation...');
    this.log(`Project root: ${this.projectRoot}`);
    try {
      // Create logs directory if it doesn't exist
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }
      // Run tests
      const tests = await this.runTests();
      // Run smoke tests
      const smokeTests = await this.runSmokeTests();
      // Check coverage
      const coverage = await this.checkTestCoverage();
      // Generate report
      const report = this.generateReport(tests, smokeTests, coverage);
      // Save report
      await this.saveReport(report);
      const duration = Date.now() - this.startTime;
      // Log summary
      this.log('\n📊 Test Automation Report:');
      this.log(`Unit tests: ${tests.success ? '✅' : '❌'}`);
      this.log(`Smoke tests: ${smokeTests.success ? '✅' : '❌'}`);
      this.log(`Coverage: ${coverage ? coverage.statements.toFixed(1) + '%' : 'N/A'}`);
      this.log(`Duration: ${duration}ms`);
      if (report.recommendations.length > 0) {
        this.log('\n💡 Recommendations:');
        report.recommendations.forEach(rec => {
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Action: ${rec.action}`);
        });
      }
    } catch (error) {
      this.log(`❌ Error running test automation: ${error.message}`);
      process.exit(1);
    }
  }
}
// Run the test automation
const testAutomation = new TestAutomation();
testAutomation.run().catch(error => {
  process.exit(1);
});
#!/usr/bin/env node/usr/bin/env nodeconst { execSync } = require("child_process");"const fs = require("fs");"const path = require("path");class TestAutomation { constructor() {" this.processName = process.env.PM2_PROCESS_NAME | "test-automation"; this.coverageThreshold = parseInt(process.env.TEST_COVERAGE_THRESHOLD) | 80;" this.autoRetryFailed = process.env.AUTO_RETRY_FAILED === "true";" this.parallelTests = process.env.PARALLEL_TESTS === "true";" this.logFile = path.join(__dirname, "././logs/pm2/test-automation.log"); this.ensureLogDir(); } ensureLogDir() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir, { recursive: true }); } } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`; console.log(logMessage.trim()); fs.appendFileSync(this.logFile, logMessage); } async runTests() { try {" this.log("Starting test automation."); / Check if test script exists in package.json" const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));" const testScript = packageJson.scripts?.test | packageJson.scripts?.["test:smoke"]; if (!testScript) {" this.log("No test script found in package.json");" return { success: false, message: "No test script configured" }; } / Run tests` const testCommand = this.parallelTests ? `${testScript} --run` : testScript;` this.log(`Running tests: ${testCommand}`); const result = execSync(testCommand, { " encoding: "utf8"," stdio: "pipe", cwd: process.cwd() });" this.log("Tests completed successfully");` this.log(`Test output: ${result}`); return { success: true, output: result }; } catch (error) {` this.log(`Test execution failed: ${error.message}`); if (this.autoRetryFailed) {" this.log("Retrying failed tests."); try {" const retryResult = execSync("npm test", { " encoding: "utf8"," stdio: "pipe", cwd: process.cwd() });" this.log("Retry successful"); return { success: true, output: retryResult, retried: true }; } catch (retryError) {` this.log(`Retry also failed: ${retryError.message}`); return { success: false, error: retryError.message, retried: true }; } } return { success: false, error: error.message }; } } async checkCoverage() { try {" this.log("Checking test coverage."); / Try to run coverage command" const coverageCommand = "npm run test:coverage | npm run coverage | npx jest --coverage"; const result = execSync(coverageCommand, { " encoding: "utf8"," stdio: "pipe", cwd: process.cwd() }); / Extract coverage percentage (simplified) const coverageMatch = result.match(/(\d+)%/); const coverage = coverageMatch ? parseInt(coverageMatch[1]) : 0;` this.log(`Test coverage: ${coverage}% (threshold: ${this.coverageThreshold}%)`); if (coverage < this.coverageThreshold) {` this.log(`WARNING: Coverage below threshold!`); return { coverage, belowThreshold: true }; } return { coverage, belowThreshold: false }; } catch (error) {` this.log(`Coverage check failed: ${error.message}`); return { coverage: 0, belowThreshold: true, error: error.message }; } } async generateReport() { const report = { timestamp: new Date().toISOString(), processName: this.processName, testResults: await this.runTests(), coverage: await this.checkCoverage(), environment: { NODE_ENV: process.env.NODE_ENV, coverageThreshold: this.coverageThreshold, autoRetry: this.autoRetryFailed, parallelTests: this.parallelTests } };" const reportFile = path.join(__dirname, "././logs/pm2/test-automation-report.json"); fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));` this.log(`Test report generated: ${reportFile}`); return report; } async start() {` this.log(`${this.processName} started`); try { const report = await this.generateReport(); if (report.testResults.success) {" this.log("Test automation completed successfully"); } else {" this.log("Test automation completed with errors"); } if (report.coverage.belowThreshold) {" this.log("WARNING: Test coverage below threshold"); } } catch (error) {` this.log(`Test automation error: ${error.message}`); } }}/ Start the serviceif (require.main === module) { const testAutomation = new TestAutomation(); testAutomation.start().catch(console.error);}module.exports = TestAutomation;"`"`
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
<<<<<<< HEAD
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
#!/usr/bin/env node;
/**
 * PM2 Test Automation Service;
 * Runs automated tests and reports results;
 */
<<<<<<< HEAD
<<<<<<< HEAD
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
class TestAutomation {}
  constructor() {}
    this.processName = process.env.PM2_PROCESS_NAME || 'test-automation';
    this.coverageThreshold = parseInt(process.env.TEST_COVERAGE_THRESHOLD) || 80;
    this.autoRetryFailed = process.env.AUTO_RETRY_FAILED === 'true';
    this.parallelTests = process.env.PARALLEL_TESTS === 'true';
    this.logFile = path.join(__dirname, '../../logs/pm2/test-automation.log');
    this.ensureLogDir();
  };
  ensureLogDir() {}
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {}
      fs.mkdirSync(logDir, { recursive: true }
});
    };
  };
  log(message) {}
    const timestamp = new Date().toISOString();
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
<<<<<<< HEAD
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;
    );
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
<<<<<<< HEAD
=======
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;
    );
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;`
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  };
  async runTests() {}
    try {}
      this.log('Starting test automation...');
<<<<<<< HEAD
<<<<<<< HEAD
      // Check if test script exists in package.json;
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const testScript = packageJson.scripts?.test || packageJson.scripts?.['test:smoke'];
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
      // Check if test script exists in package.json;
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const testScript = packageJson.scripts?.test || packageJson.scripts?.['test:smoke'];
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
      
      // Check if test script exists in package.json;
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const testScript = packageJson.scripts?.test || packageJson.scripts?.['test:smoke'];
      
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      // Check if test script exists in package.json;
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const testScript = packageJson.scripts?.test || packageJson.scripts?.['test:smoke'];
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      if (!testScript) {}
        this.log('No test script found in package.json');
        return { success: false, message: 'No test script configured' };
      };
      // Run tests;
      const testCommand = this.parallelTests ? `${testScript} --run` : testScript;
      this.log(`Running tests: ${testCommand}`);
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
      
      
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
      
      
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
      
      
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
      
      
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
=======
      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const result = execSync(testCommand, { })
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd();
      }
});
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      this.log('Tests completed successfully');
      this.log(`Test output: ${result}`);
      return { success: true, output: result };
    } catch (error) {}
      this.log(`Test execution failed: ${error.message}`);
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

      this.log('Tests completed successfully');
      this.log(`Test output: ${result}`);

      return { success: true, output: result };
    } catch (error) {}
      this.log(`Test execution failed: ${error.message}`);
      
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      this.log('Tests completed successfully');
      this.log(`Test output: ${result}`);
      return { success: true, output: result };
    } catch (error) {}
      this.log(`Test execution failed: ${error.message}`);
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      if (this.autoRetryFailed) {}
        this.log('Retrying failed tests...');
        try {}
          const retryResult = execSync('npm test', { })
            encoding: 'utf8',
            stdio: 'pipe',
            cwd: process.cwd();
          }
});
          this.log('Retry successful');
          return { success: true, output: retryResult, retried: true };
        } catch (retryError) {}
          this.log(`Retry also failed: ${retryError.message}`);
          return { success: false, error: retryError.message, retried: true };
        };
      };
      return { success: false, error: error.message };
    };
  };
  async checkCoverage() {}
    try {}
      this.log('Checking test coverage...');
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
      
      
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
      
      
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
      
      
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
      
      
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
=======
      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Try to run coverage command;
      const coverageCommand = 'npm run test:coverage || npm run coverage || npx jest --coverage';
      const result = execSync(coverageCommand, { })
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd();
      }
});
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Extract coverage percentage (simplified);
      const coverageMatch = result.match(/(\d+)%/);
      const coverage = coverageMatch ? parseInt(coverageMatch[1]) : 0;
      this.log(`Test coverage: ${coverage}% (threshold: ${this.coverageThreshold}%)`);
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

      // Extract coverage percentage (simplified);
      const coverageMatch = result.match(/(\d+)%/);
      const coverage = coverageMatch ? parseInt(coverageMatch[1]) : 0;
      
      this.log(`Test coverage: ${coverage}% (threshold: ${this.coverageThreshold}%)`);
      
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      // Extract coverage percentage (simplified);
      const coverageMatch = result.match(/(\d+)%/);
      const coverage = coverageMatch ? parseInt(coverageMatch[1]) : 0;
      this.log(`Test coverage: ${coverage}% (threshold: ${this.coverageThreshold}%)`);
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      if (coverage < this.coverageThreshold) {}
        this.log(`WARNING: Coverage below threshold!`);
        return { coverage, belowThreshold: true };
      };
      return { coverage, belowThreshold: false };
    } catch (error) {}
      this.log(`Coverage check failed: ${error.message}`);
      return { coverage: 0, belowThreshold: true, error: error.message };
    };
  };
  async generateReport() {}
    const report = {}
      timestamp: new Date().toISOString(),
      processName: this.processName,
      testResults: await this.runTests(),
      coverage: await this.checkCoverage(),
      environment: {}
        NODE_ENV: process.env.NODE_ENV,
        coverageThreshold: this.coverageThreshold,
        autoRetry: this.autoRetryFailed,
        parallelTests: this.parallelTests;
      };
    };
<<<<<<< HEAD
<<<<<<< HEAD
    const reportFile = path.join(__dirname, '../../logs/pm2/test-automation-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
    const reportFile = path.join(__dirname, '../../logs/pm2/test-automation-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

    const reportFile = path.join(__dirname, '../../logs/pm2/test-automation-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    const reportFile = path.join(__dirname, '../../logs/pm2/test-automation-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    this.log(`Test report generated: ${reportFile}`);
    return report;
  };
  async start() {}
    this.log(`${this.processName} started`);
<<<<<<< HEAD
<<<<<<< HEAD
    try {}
      const report = await this.generateReport();
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
    try {}
      const report = await this.generateReport();
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
    
    try {}
      const report = await this.generateReport();
      
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    try {}
      const report = await this.generateReport();
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      if (report.testResults.success) {}
        this.log('Test automation completed successfully');
      } else {}
        this.log('Test automation completed with errors');
      };
      if (report.coverage.belowThreshold) {}
        this.log('WARNING: Test coverage below threshold');
      };
    } catch (error) {}
      this.log(`Test automation error: ${error.message}`);
    };
  };
};
// Start the service;
if (require.main === module) {}
  const testAutomation = new TestAutomation();
  testAutomation.start().catch(console.error);
<<<<<<< HEAD
};
=======
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
module.exports = TestAutomation;module.exports = TestAutomation;
module.exports = TestAutomation;module.exports = TestAutomation;
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
<<<<<<< HEAD
module.exports = TestAutomation;
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
<<<<<<< HEAD
module.exports = TestAutomation;module.exports = TestAutomation;
=======
module.exports = TestAutomation;
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
<<<<<<< HEAD
module.exports = TestAutomation;module.exports = TestAutomation;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
module.exports = TestAutomation;
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
module.exports = TestAutomation;module.exports = TestAutomation;
module.exports = TestAutomation;module.exports = TestAutomation;
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
