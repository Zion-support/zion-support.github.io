#!/usr/bin/env node

/**
 * Automated Testing Suite
 * Comprehensive testing automation for the application
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class AutomatedTestingSuite {
  constructor() {
    this.logDir = 'automation-reports';
    this.timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    this.testResults = {
      timestamp: this.timestamp,
      totalTests: 0,
      passed: 0,
      failed: 0,
      skipped: 0,
      tests: []
    };
    
    this.ensureLogDir();
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    console.log(logMessage);
  }

  async runTest(testName, testCommand, description) {
    this.log(`🧪 Running ${description}...`);
    this.testResults.totalTests++;
    
    const testResult = {
      name: testName,
      description,
      startTime: new Date().toISOString(),
      status: 'running',
      output: '',
      error: '',
      duration: 0
    };

    try {
      const startTime = Date.now();
      const output = execSync(testCommand, { 
        encoding: 'utf8',
        timeout: 120000 // 2 minutes timeout
      });
      
      const endTime = Date.now();
      testResult.duration = endTime - startTime;
      testResult.status = 'passed';
      testResult.output = output;
      testResult.endTime = new Date().toISOString();
      
      this.testResults.passed++;
      this.log(`✅ ${description} passed in ${testResult.duration}ms`);
      
    } catch (error) {
      const endTime = Date.now();
      testResult.duration = endTime - Date.now();
      testResult.status = 'failed';
      testResult.error = error.message;
      testResult.endTime = new Date().toISOString();
      
      this.testResults.failed++;
      this.log(`❌ ${description} failed: ${error.message}`, 'error');
    }

    this.testResults.tests.push(testResult);
    return testResult;
  }

  async runAllTests() {
    this.log('🧪 Starting Automated Testing Suite');
    this.log('===================================');

    const tests = [
      {
        name: 'build-test',
        command: 'npm run build',
        description: 'Build Test'
      },
      {
        name: 'type-check',
        command: 'npm run type-check',
        description: 'TypeScript Type Check'
      },
      {
        name: 'lint-test',
        command: 'npm run lint',
        description: 'Linting Test'
      },
      {
        name: 'security-audit',
        command: 'npm audit --audit-level=moderate',
        description: 'Security Audit Test'
      }
    ];

    // Run tests sequentially to avoid conflicts
    for (const test of tests) {
      await this.runTest(test.name, test.command, test.description);
    }

    this.generateTestReport();
    
    this.log('🏁 Automated Testing Suite completed');
    this.log(`📊 Results: ${this.testResults.passed} passed, ${this.testResults.failed} failed`);
    
    return this.testResults;
  }

  generateTestReport() {
    const reportPath = path.join(this.logDir, `testing-suite-report-${this.timestamp}.json`);
    
    const report = {
      ...this.testResults,
      summary: {
        passRate: this.testResults.totalTests > 0 ? 
          (this.testResults.passed / this.testResults.totalTests * 100).toFixed(2) + '%' : '0%',
        averageDuration: this.testResults.tests.length > 0 ?
          this.testResults.tests.reduce((sum, test) => sum + test.duration, 0) / this.testResults.tests.length : 0,
        recommendations: this.generateTestRecommendations()
      }
    };

    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📄 Test report saved to: ${reportPath}`);
  }

  generateTestRecommendations() {
    const recommendations = [];
    
    if (this.testResults.failed > 0) {
      recommendations.push('Fix failing tests before deployment');
    }
    
    if (this.testResults.passed === this.testResults.totalTests) {
      recommendations.push('All tests are passing - ready for deployment');
    }
    
    const slowTests = this.testResults.tests.filter(test => test.duration > 30000);
    if (slowTests.length > 0) {
      recommendations.push('Consider optimizing slow-running tests');
    }
    
    return recommendations;
  }
}

// Main execution
if (require.main === module) {
  const testSuite = new AutomatedTestingSuite();
  testSuite.runAllTests()
    .then(results => {
      process.exit(results.failed > 0 ? 1 : 0);
    })
    .catch(error => {
      console.error('Fatal error:', error);
      process.exit(1);
    });
}

module.exports = AutomatedTestingSuite;