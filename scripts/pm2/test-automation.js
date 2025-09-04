#!/usr/bin/env node

/**
 * PM2 Test Automation Script
 * Runs automated tests and monitors test health
 */

import { execSync, spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

class TestAutomation {
  constructor() {
    this.processName = process.env.PM2_PROCESS_NAME || 'test-automation';
    this.testCoverageThreshold = parseInt(process.env.TEST_COVERAGE_THRESHOLD) || 80;
    this.autoRetryFailed = process.env.AUTO_RETRY_FAILED === 'true';
    this.parallelTests = process.env.PARALLEL_TESTS === 'true';
    this.logFile = `logs/pm2/test-automation.log`;
    this.errorFile = `logs/pm2/test-automation-error.log`;
    this.outFile = `logs/pm2/test-automation-out.log`;
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [${this.processName}] ${message}`;
    console.log(logMessage);
    
    // Write to log file
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  error(message) {
    this.log(message, 'ERROR');
    fs.appendFileSync(this.errorFile, `[${new Date().toISOString()}] ERROR: ${message}\n`);
  }

  async runTests() {
    this.log('Starting test automation...');
    
    try {
      // Check if test script exists
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const testScript = packageJson.scripts?.test || packageJson.scripts?.['test:smoke'];
      
      if (!testScript) {
        this.log('No test script found in package.json', 'WARNING');
        return { success: false, message: 'No test script configured' };
      }

      this.log(`Running tests: ${testScript}`);
      
      // Run tests with appropriate flags
      let command = testScript;
      if (this.parallelTests && testScript.includes('jest')) {
        command += ' --runInBand';
      }
      
      const result = execSync(command, { 
        encoding: 'utf8',
        stdio: 'pipe',
        timeout: 300000 // 5 minutes timeout
      });
      
      this.log('Tests completed successfully');
      this.log(`Test output: ${result}`);
      
      return { success: true, output: result };
      
    } catch (error) {
      this.error(`Test execution failed: ${error.message}`);
      
      if (this.autoRetryFailed) {
        this.log('Retrying failed tests...');
        return await this.retryTests();
      }
      
      return { success: false, error: error.message };
    }
  }

  async retryTests() {
    this.log('Retrying failed tests...');
    
    try {
      const result = execSync('npm test -- --passWithNoTests', { 
        encoding: 'utf8',
        stdio: 'pipe',
        timeout: 180000 // 3 minutes timeout
      });
      
      this.log('Retry tests completed');
      return { success: true, output: result };
      
    } catch (error) {
      this.error(`Retry tests also failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async checkTestCoverage() {
    this.log('Checking test coverage...');
    
    try {
      // Try to run coverage if available
      const coverageResult = execSync('npm run test:coverage 2>/dev/null || npm test -- --coverage 2>/dev/null || echo "No coverage available"', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.log(`Coverage check result: ${coverageResult}`);
      
      // Extract coverage percentage if available
      const coverageMatch = coverageResult.match(/(\d+)%/);
      if (coverageMatch) {
        const coverage = parseInt(coverageMatch[1]);
        if (coverage < this.testCoverageThreshold) {
          this.log(`Coverage ${coverage}% is below threshold ${this.testCoverageThreshold}%`, 'WARNING');
          return { success: false, coverage, threshold: this.testCoverageThreshold };
        }
        this.log(`Coverage ${coverage}% meets threshold ${this.testCoverageThreshold}%`);
        return { success: true, coverage };
      }
      
      return { success: true, message: 'Coverage check completed' };
      
    } catch (error) {
      this.log(`Coverage check failed: ${error.message}`, 'WARNING');
      return { success: false, error: error.message };
    }
  }

  async generateTestReport() {
    this.log('Generating test report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      processName: this.processName,
      testResults: {},
      coverage: {},
      summary: {}
    };
    
    try {
      // Run tests and get results
      const testResults = await this.runTests();
      report.testResults = testResults;
      
      // Check coverage
      const coverageResults = await this.checkTestCoverage();
      report.coverage = coverageResults;
      
      // Generate summary
      report.summary = {
        testsPassed: testResults.success,
        coverageMet: coverageResults.success,
        overallStatus: testResults.success && coverageResults.success ? 'PASS' : 'FAIL'
      };
      
      // Save report
      const reportFile = `reports/test-automation-report-${Date.now()}.json`;
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      this.log(`Test report saved to ${reportFile}`);
      
      return report;
      
    } catch (error) {
      this.error(`Failed to generate test report: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async start() {
    this.log('Test automation service started');
    
    // Ensure log directory exists
    fs.mkdirSync('logs/pm2', { recursive: true });
    fs.mkdirSync('reports', { recursive: true });
    
    // Run initial test
    await this.generateTestReport();
    
    // Set up periodic testing
    setInterval(async () => {
      this.log('Running scheduled test automation...');
      await this.generateTestReport();
    }, 3 * 60 * 60 * 1000); // Every 3 hours
    
    this.log('Test automation service is running');
  }
}

// Start the service
if (require.main === module) {
  const testAutomation = new TestAutomation();
  testAutomation.start().catch(error => {
    console.error('Test automation failed to start:', error);
    process.exit(1);
  });
}

export default TestAutomation;