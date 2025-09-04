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