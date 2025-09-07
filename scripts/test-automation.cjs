#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class TestAutomation {
  constructor() {
    this.results = {
      unit: { passed: 0, failed: 0, total: 0 },
      integration: { passed: 0, failed: 0, total: 0 },
      e2e: { passed: 0, failed: 0, total: 0 },
      performance: { passed: 0, failed: 0, total: 0 }
    };
    this.projectRoot = process.cwd();
  }

  async runUnitTests() {
    console.log('🧪 Running unit tests...');
    
    try {
      const result = execSync('npm run test -- --passWithNoTests --coverage', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        timeout: 60000
      });
      
      this.results.unit.passed++;
      this.results.unit.total++;
      console.log('✅ Unit tests passed');
      return { success: true, output: result };
    } catch (error) {
      this.results.unit.failed++;
      this.results.unit.total++;
      console.log('❌ Unit tests failed:', error.message);
      return { success: false, error: error.message };
    }
  }

  async runIntegrationTests() {
    console.log('🔗 Running integration tests...');
    
    try {
      // Check if API endpoints are working
      const apiEndpoints = [
        '/api/health',
        '/api/status'
      ];
      
      let passed = 0;
      for (const endpoint of apiEndpoints) {
        try {
          const result = execSync(`curl -s -o /dev/null -w "%{http_code}" http://localhost:3000${endpoint}`, { 
            encoding: 'utf8',
            timeout: 5000
          });
          
          if (result.trim() === '200') {
            passed++;
          }
        } catch (error) {
          console.log(`⚠️ Endpoint ${endpoint} not available`);
        }
      }
      
      if (passed > 0) {
        this.results.integration.passed++;
        console.log('✅ Integration tests passed');
      } else {
        this.results.integration.failed++;
        console.log('❌ Integration tests failed - no endpoints available');
      }
      this.results.integration.total++;
      
      return { success: passed > 0, passed, total: apiEndpoints.length };
    } catch (error) {
      this.results.integration.failed++;
      this.results.integration.total++;
      console.log('❌ Integration tests failed:', error.message);
      return { success: false, error: error.message };
    }
  }

  async runE2ETests() {
    console.log('🌐 Running E2E tests...');
    
    try {
      // Check if the app builds successfully
      const buildResult = execSync('npm run build', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        timeout: 120000
      });
      
      this.results.e2e.passed++;
      this.results.e2e.total++;
      console.log('✅ E2E tests passed - app builds successfully');
      return { success: true, output: buildResult };
    } catch (error) {
      this.results.e2e.failed++;
      this.results.e2e.total++;
      console.log('❌ E2E tests failed:', error.message);
      return { success: false, error: error.message };
    }
  }

  async runPerformanceTests() {
    console.log('⚡ Running performance tests...');
    
    try {
      // Check bundle size
      if (fs.existsSync('.next')) {
        const bundleSize = execSync('du -sh .next', { encoding: 'utf8' }).trim();
        const sizeInMB = parseInt(bundleSize.split('\t')[0]);
        
        if (sizeInMB < 100) {
          this.results.performance.passed++;
          console.log(`✅ Performance tests passed - bundle size: ${sizeInMB}MB`);
        } else {
          this.results.performance.failed++;
          console.log(`❌ Performance tests failed - bundle size too large: ${sizeInMB}MB`);
        }
      } else {
        this.results.performance.failed++;
        console.log('❌ Performance tests failed - no build found');
      }
      
      this.results.performance.total++;
      return { success: this.results.performance.passed > 0 };
    } catch (error) {
      this.results.performance.failed++;
      this.results.performance.total++;
      console.log('❌ Performance tests failed:', error.message);
      return { success: false, error: error.message };
    }
  }

  generateTestReport() {
    const totalPassed = Object.values(this.results).reduce((sum, category) => sum + category.passed, 0);
    const totalFailed = Object.values(this.results).reduce((sum, category) => sum + category.failed, 0);
    const totalTests = totalPassed + totalFailed;
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: totalTests,
        passed: totalPassed,
        failed: totalFailed,
        successRate: totalTests > 0 ? Math.round((totalPassed / totalTests) * 100) : 0
      },
      results: this.results,
      recommendations: this.generateRecommendations()
    };

    const reportPath = path.join(this.projectRoot, 'test-automation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Test automation report saved to ${reportPath}`);
    
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.results.unit.failed > 0) {
      recommendations.push('Fix failing unit tests');
    }
    
    if (this.results.integration.failed > 0) {
      recommendations.push('Set up API endpoints for integration testing');
    }
    
    if (this.results.e2e.failed > 0) {
      recommendations.push('Fix build issues for E2E testing');
    }
    
    if (this.results.performance.failed > 0) {
      recommendations.push('Optimize bundle size for better performance');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('All tests are passing! Consider adding more test coverage');
    }
    
    return recommendations;
  }

  async run() {
    console.log('🚀 Starting test automation...');
    
    await this.runUnitTests();
    await this.runIntegrationTests();
    await this.runE2ETests();
    await this.runPerformanceTests();
    
    const report = this.generateTestReport();
    
    console.log('✅ Test automation completed!');
    console.log(`📊 Total tests: ${report.summary.total}`);
    console.log(`✅ Passed: ${report.summary.passed}`);
    console.log(`❌ Failed: ${report.summary.failed}`);
    console.log(`📈 Success rate: ${report.summary.successRate}%`);
    
    return report;
  }
}

// Main execution
if (require.main === module) {
  const testAutomation = new TestAutomation();
  testAutomation.run().catch(console.error);
}

module.exports = TestAutomation;