#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔄 Continuous Integration Automation');
console.log('====================================');

class ContinuousIntegrationAutomation {
  constructor() {
    this.results = {
      testsPassed: 0,
      testsFailed: 0,
      buildSuccess: false,
      lintingPassed: false,
      securityAuditPassed: false,
      performanceScore: 0,
      errors: []
    };
    this.startTime = Date.now();
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logEntry);
  }

  async runTests() {
    this.log('🧪 Running comprehensive tests...');
    try {
      // Run unit tests
      execSync('npm test -- --coverage --watchAll=false', { stdio: 'inherit' });
      this.results.testsPassed++;
      this.log('✅ Unit tests passed', 'success');
    } catch (error) {
      this.results.testsFailed++;
      this.log(`❌ Unit tests failed: ${error.message}`, 'error');
    }

    try {
      // Run integration tests
      execSync('npm run test:integration', { stdio: 'inherit' });
      this.results.testsPassed++;
      this.log('✅ Integration tests passed', 'success');
    } catch (error) {
      this.results.testsFailed++;
      this.log(`❌ Integration tests failed: ${error.message}`, 'error');
    }
  }

  async runLinting() {
    this.log('🔍 Running linting...');
    try {
      execSync('npm run lint', { stdio: 'inherit' });
      this.results.lintingPassed = true;
      this.log('✅ Linting passed', 'success');
    } catch (error) {
      this.log(`❌ Linting failed: ${error.message}`, 'error');
    }
  }

  async runBuild() {
    this.log('🏗️ Running build...');
    try {
      execSync('npm run build', { stdio: 'inherit' });
      this.results.buildSuccess = true;
      this.log('✅ Build successful', 'success');
    } catch (error) {
      this.log(`❌ Build failed: ${error.message}`, 'error');
    }
  }

  async runSecurityAudit() {
    this.log('🔒 Running security audit...');
    try {
      execSync('npm audit --audit-level=moderate', { stdio: 'inherit' });
      this.results.securityAuditPassed = true;
      this.log('✅ Security audit passed', 'success');
    } catch (error) {
      this.log(`❌ Security audit failed: ${error.message}`, 'error');
    }
  }

  async runPerformanceTest() {
    this.log('⚡ Running performance tests...');
    try {
      // Start the app in background
      const app = execSync('npm start', { stdio: 'pipe', detached: true });
      
      // Wait for app to start
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Run Lighthouse
      execSync('npx lighthouse http://localhost:3000 --output=json --output-path=./performance-test.json', { stdio: 'inherit' });
      
      // Parse performance score
      const performanceData = JSON.parse(fs.readFileSync('./performance-test.json', 'utf8'));
      this.results.performanceScore = performanceData.categories.performance.score * 100;
      
      // Kill the app
      process.kill(-app.pid);
      
      this.log(`✅ Performance test completed - Score: ${this.results.performanceScore}`, 'success');
    } catch (error) {
      this.log(`❌ Performance test failed: ${error.message}`, 'error');
    }
  }

  async generateReport() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      results: this.results,
      summary: {
        totalTests: this.results.testsPassed + this.results.testsFailed,
        testsPassed: this.results.testsPassed,
        testsFailed: this.results.testsFailed,
        buildSuccess: this.results.buildSuccess,
        lintingPassed: this.results.lintingPassed,
        securityAuditPassed: this.results.securityAuditPassed,
        performanceScore: this.results.performanceScore,
        totalErrors: this.results.errors.length
      },
      status: this.results.testsFailed === 0 && this.results.buildSuccess && this.results.lintingPassed ? 'PASSED' : 'FAILED'
    };

    fs.writeFileSync('ci-automation-report.json', JSON.stringify(report, null, 2));
    this.log('📄 CI Report saved to: ci-automation-report.json');
    
    return report;
  }

  async run() {
    this.log('🚀 Starting Continuous Integration Automation...');
    
    try {
      await this.runLinting();
      await this.runBuild();
      await this.runTests();
      await this.runSecurityAudit();
      await this.runPerformanceTest();
      
      const report = await this.generateReport();
      
      if (report.status === 'PASSED') {
        this.log('🎉 All CI checks passed!', 'success');
      } else {
        this.log('❌ Some CI checks failed', 'error');
      }
    } catch (error) {
      this.log(`💥 CI Automation failed: ${error.message}`, 'error');
    }
  }
}

// Run the CI automation
const ci = new ContinuousIntegrationAutomation();
ci.run().catch(console.error);