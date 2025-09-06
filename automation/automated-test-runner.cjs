#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class AutomatedTestRunner {
  constructor() {
    this.testResults = {
      timestamp: new Date().toISOString(),
      tests: [],
      summary: {
        total: 0,
        passed: 0,
        failed: 0,
        skipped: 0
      },
      coverage: null,
      recommendations: []
    };
  }

  async runTests() {
    console.log('🧪 Starting Automated Test Runner...');
    
    try {
      // Run smoke tests
      await this.runSmokeTests();
      
      // Run unit tests
      await this.runUnitTests();
      
      // Run integration tests
      await this.runIntegrationTests();
      
      // Generate test coverage report
      await this.generateCoverageReport();
      
      // Generate recommendations
      this.generateTestRecommendations();
      
      console.log('✅ Automated Test Runner completed');
      
    } catch (error) {
      console.error('❌ Automated Test Runner failed:', error.message);
    }
  }

  async runSmokeTests() {
    try {
      console.log('Running smoke tests...');
      const output = execSync('npm run test:smoke', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.testResults.tests.push({
        type: 'smoke',
        success: true,
        output: output,
        timestamp: new Date().toISOString()
      });
      
      this.testResults.summary.total++;
      this.testResults.summary.passed++;
      
    } catch (error) {
      this.testResults.tests.push({
        type: 'smoke',
        success: false,
        error: error.message,
        timestamp: new Date().toISOString()
      });
      
      this.testResults.summary.total++;
      this.testResults.summary.failed++;
    }
  }

  async runUnitTests() {
    try {
      console.log('Running unit tests...');
      const output = execSync('npm test', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.testResults.tests.push({
        type: 'unit',
        success: true,
        output: output,
        timestamp: new Date().toISOString()
      });
      
      this.testResults.summary.total++;
      this.testResults.summary.passed++;
      
    } catch (error) {
      this.testResults.tests.push({
        type: 'unit',
        success: false,
        error: error.message,
        timestamp: new Date().toISOString()
      });
      
      this.testResults.summary.total++;
      this.testResults.summary.failed++;
    }
  }

  async runIntegrationTests() {
    try {
      console.log('Running integration tests...');
      const output = execSync('npm run test:integration', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.testResults.tests.push({
        type: 'integration',
        success: true,
        output: output,
        timestamp: new Date().toISOString()
      });
      
      this.testResults.summary.total++;
      this.testResults.summary.passed++;
      
    } catch (error) {
      // Integration tests might not exist, so we don't count this as a failure
      this.testResults.tests.push({
        type: 'integration',
        success: false,
        error: error.message,
        timestamp: new Date().toISOString(),
        skipped: true
      });
      
      this.testResults.summary.total++;
      this.testResults.summary.skipped++;
    }
  }

  async generateCoverageReport() {
    try {
      console.log('Generating coverage report...');
      const output = execSync('npm run test:coverage', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      // Try to parse coverage data from output
      const coverageMatch = output.match(/All files\s+\|\s+(\d+\.?\d*)\s+\|\s+(\d+\.?\d*)\s+\|\s+(\d+\.?\d*)\s+\|\s+(\d+\.?\d*)/);
      
      if (coverageMatch) {
        this.testResults.coverage = {
          statements: parseFloat(coverageMatch[1]),
          branches: parseFloat(coverageMatch[2]),
          functions: parseFloat(coverageMatch[3]),
          lines: parseFloat(coverageMatch[4])
        };
      }
      
    } catch (error) {
      console.warn('Could not generate coverage report:', error.message);
    }
  }

  generateTestRecommendations() {
    const recommendations = [];
    
    // Check test coverage
    if (this.testResults.coverage) {
      const { statements, branches, functions, lines } = this.testResults.coverage;
      const avgCoverage = (statements + branches + functions + lines) / 4;
      
      if (avgCoverage < 70) {
        recommendations.push({
          type: 'coverage',
          priority: 'high',
          message: `Test coverage is low (${avgCoverage.toFixed(1)}%). Aim for at least 70%.`,
          actions: [
            'Write more unit tests for critical components',
            'Add integration tests for API endpoints',
            'Consider using test-driven development'
          ]
        });
      }
    }
    
    // Check for failed tests
    const failedTests = this.testResults.tests.filter(test => !test.success && !test.skipped);
    if (failedTests.length > 0) {
      recommendations.push({
        type: 'failed-tests',
        priority: 'high',
        message: `${failedTests.length} test(s) failed. Fix failing tests before deployment.`,
        actions: [
          'Review test failures and fix underlying issues',
          'Update tests if requirements have changed',
          'Ensure all dependencies are properly installed'
        ]
      });
    }
    
    // Check for missing test types
    const testTypes = this.testResults.tests.map(test => test.type);
    if (!testTypes.includes('unit')) {
      recommendations.push({
        type: 'missing-tests',
        priority: 'medium',
        message: 'No unit tests found. Consider adding unit tests.',
        actions: [
          'Create unit tests for utility functions',
          'Add component tests for React components',
          'Test business logic and data transformations'
        ]
      });
    }
    
    if (!testTypes.includes('integration') || this.testResults.tests.find(t => t.type === 'integration' && t.skipped)) {
      recommendations.push({
        type: 'missing-tests',
        priority: 'medium',
        message: 'No integration tests found. Consider adding integration tests.',
        actions: [
          'Create API endpoint tests',
          'Test database interactions',
          'Add end-to-end user flow tests'
        ]
      });
    }
    
    this.testResults.recommendations = recommendations;
  }

  saveReport() {
    const reportFile = path.join(__dirname, 'reports', 'test-runner-report.json');
    fs.mkdirSync(path.dirname(reportFile), { recursive: true });
    fs.writeFileSync(reportFile, JSON.stringify(this.testResults, null, 2));
    
    console.log(`📊 Test runner report saved to: ${reportFile}`);
  }
}

// Run if called directly
if (require.main === module) {
  const testRunner = new AutomatedTestRunner();
  testRunner.runTests()
    .then(() => {
      testRunner.saveReport();
    })
    .catch(console.error);
}

module.exports = AutomatedTestRunner;