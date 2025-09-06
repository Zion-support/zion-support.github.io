#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AutomatedTestRunner {
  constructor() {
    this.projectRoot = process.cwd();
    this.testResults = [];
    this.coverage = {};
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] [TEST-RUNNER] ${message}`);
  }

  async runUnitTests() {
    this.log('🧪 Running unit tests...');
    
    try {
      const result = execSync('npm test -- --passWithNoTests --coverage', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      this.testResults.push({
        type: 'unit',
        status: 'passed',
        details: 'Unit tests completed successfully'
      });
      
      this.log('✅ Unit tests passed');
    } catch (error) {
      this.testResults.push({
        type: 'unit',
        status: 'failed',
        details: error.message
      });
      
      this.log(`❌ Unit tests failed: ${error.message}`);
    }
  }

  async runSmokeTests() {
    this.log('💨 Running smoke tests...');
    
    try {
      const result = execSync('npm run test:smoke', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      this.testResults.push({
        type: 'smoke',
        status: 'passed',
        details: 'Smoke tests completed successfully'
      });
      
      this.log('✅ Smoke tests passed');
    } catch (error) {
      this.testResults.push({
        type: 'smoke',
        status: 'failed',
        details: error.message
      });
      
      this.log(`❌ Smoke tests failed: ${error.message}`);
    }
  }

  async runLintTests() {
    this.log('🔍 Running lint tests...');
    
    try {
      const result = execSync('npm run lint', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      this.testResults.push({
        type: 'lint',
        status: 'passed',
        details: 'Lint tests completed successfully'
      });
      
      this.log('✅ Lint tests passed');
    } catch (error) {
      this.testResults.push({
        type: 'lint',
        status: 'failed',
        details: error.message
      });
      
      this.log(`❌ Lint tests failed: ${error.message}`);
    }
  }

  async runTypeCheck() {
    this.log('📝 Running TypeScript type check...');
    
    try {
      const result = execSync('npm run type-check', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      this.testResults.push({
        type: 'typescript',
        status: 'passed',
        details: 'TypeScript type check completed successfully'
      });
      
      this.log('✅ TypeScript type check passed');
    } catch (error) {
      this.testResults.push({
        type: 'typescript',
        status: 'failed',
        details: error.message
      });
      
      this.log(`❌ TypeScript type check failed: ${error.message}`);
    }
  }

  async runBuildTest() {
    this.log('🏗️ Running build test...');
    
    try {
      const result = execSync('npm run build', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      this.testResults.push({
        type: 'build',
        status: 'passed',
        details: 'Build test completed successfully'
      });
      
      this.log('✅ Build test passed');
    } catch (error) {
      this.testResults.push({
        type: 'build',
        status: 'failed',
        details: error.message
      });
      
      this.log(`❌ Build test failed: ${error.message}`);
    }
  }

  async generateCoverageReport() {
    this.log('📊 Generating coverage report...');
    
    try {
      // Check if coverage directory exists
      const coverageDir = path.join(this.projectRoot, 'coverage');
      if (fs.existsSync(coverageDir)) {
        const coverageFile = path.join(coverageDir, 'coverage-summary.json');
        if (fs.existsSync(coverageFile)) {
          const coverageData = JSON.parse(fs.readFileSync(coverageFile, 'utf8'));
          this.coverage = coverageData.total;
        }
      }
      
      this.log(`Coverage: ${this.coverage.lines?.pct || 0}% lines, ${this.coverage.functions?.pct || 0}% functions`);
    } catch (error) {
      this.log(`❌ Coverage report generation failed: ${error.message}`);
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      testResults: this.testResults,
      coverage: this.coverage,
      summary: {
        totalTests: this.testResults.length,
        passedTests: this.testResults.filter(t => t.status === 'passed').length,
        failedTests: this.testResults.filter(t => t.status === 'failed').length,
        successRate: this.testResults.length > 0 ? 
          (this.testResults.filter(t => t.status === 'passed').length / this.testResults.length * 100).toFixed(2) : 0
      }
    };

    const reportPath = path.join(this.projectRoot, 'test-runner-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Test report saved to: ${reportPath}`);
    
    return report;
  }

  async run() {
    this.log('🚀 Starting Automated Test Runner...');
    
    try {
      await this.runUnitTests();
      await this.runSmokeTests();
      await this.runLintTests();
      await this.runTypeCheck();
      await this.runBuildTest();
      await this.generateCoverageReport();
      
      const report = this.generateReport();
      
      this.log('✅ Automated Test Runner completed!');
      this.log(`📈 Success rate: ${report.summary.successRate}% (${report.summary.passedTests}/${report.summary.totalTests})`);
      
      return report;
    } catch (error) {
      this.log(`❌ Automated Test Runner failed: ${error.message}`);
      throw error;
    }
  }
}

// Run the test runner
const testRunner = new AutomatedTestRunner();
testRunner.run().catch(console.error);