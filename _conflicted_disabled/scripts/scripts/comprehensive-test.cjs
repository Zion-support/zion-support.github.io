#!/usr/bin/env node

/**
 * Comprehensive Test Script
 * Runs all tests and validations for the application
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class ComprehensiveTester {
  constructor() {
    this.results = {
      build: { passed: false, output: '', duration: 0 },
      lint: { passed: false, output: '', duration: 0 },
      typeCheck: { passed: false, output: '', duration: 0 },
      unitTests: { passed: false, output: '', duration: 0 },
      e2eTests: { passed: false, output: '', duration: 0 },
      accessibility: { passed: false, output: '', duration: 0 },
      performance: { passed: false, output: '', duration: 0 },
      security: { passed: false, output: '', duration: 0 }
    };
  }

  async runAllTests() {
    console.log('🧪 Running Comprehensive Test Suite\n');
    console.log('='.repeat(50));

    const startTime = Date.now();

    try {
      // Run all tests in parallel where possible
      await Promise.all([
        this.runBuildTest(),
        this.runLintTest(),
        this.runTypeCheckTest(),
        this.runUnitTests(),
        this.runE2ETests(),
        this.runAccessibilityTests(),
        this.runPerformanceTests(),
        this.runSecurityTests()
      ]);

      const totalDuration = Date.now() - startTime;
      this.generateReport(totalDuration);

    } catch (error) {
      console.error('❌ Test suite failed:', error.message);
      process.exit(1);
    }
  }

  async runBuildTest() {
    console.log('🔨 Running build test...');
    const startTime = Date.now();

    try {
      const output = execSync('npm run build', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.results.build = {
        passed: true,
        output: output,
        duration: Date.now() - startTime
      };
      
      console.log('✅ Build test passed');
    } catch (error) {
      this.results.build = {
        passed: false,
        output: error.stdout || error.message,
        duration: Date.now() - startTime
      };
      
      console.log('❌ Build test failed');
    }
  }

  async runLintTest() {
    console.log('🔍 Running lint test...');
    const startTime = Date.now();

    try {
      const output = execSync('npm run lint', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.results.lint = {
        passed: true,
        output: output,
        duration: Date.now() - startTime
      };
      
      console.log('✅ Lint test passed');
    } catch (error) {
      this.results.lint = {
        passed: false,
        output: error.stdout || error.message,
        duration: Date.now() - startTime
      };
      
      console.log('❌ Lint test failed');
    }
  }

  async runTypeCheckTest() {
    console.log('📝 Running type check test...');
    const startTime = Date.now();

    try {
      const output = execSync('npm run type-check', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.results.typeCheck = {
        passed: true,
        output: output,
        duration: Date.now() - startTime
      };
      
      console.log('✅ Type check test passed');
    } catch (error) {
      this.results.typeCheck = {
        passed: false,
        output: error.stdout || error.message,
        duration: Date.now() - startTime
      };
      
      console.log('❌ Type check test failed');
    }
  }

  async runUnitTests() {
    console.log('🧪 Running unit tests...');
    const startTime = Date.now();

    try {
      const output = execSync('npm run test', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.results.unitTests = {
        passed: true,
        output: output,
        duration: Date.now() - startTime
      };
      
      console.log('✅ Unit tests passed');
    } catch (error) {
      this.results.unitTests = {
        passed: false,
        output: error.stdout || error.message,
        duration: Date.now() - startTime
      };
      
      console.log('❌ Unit tests failed');
    }
  }

  async runE2ETests() {
    console.log('🎭 Running E2E tests...');
    const startTime = Date.now();

    try {
      const output = execSync('npm run test:e2e', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.results.e2eTests = {
        passed: true,
        output: output,
        duration: Date.now() - startTime
      };
      
      console.log('✅ E2E tests passed');
    } catch (error) {
      this.results.e2eTests = {
        passed: false,
        output: error.stdout || error.message,
        duration: Date.now() - startTime
      };
      
      console.log('❌ E2E tests failed');
    }
  }

  async runAccessibilityTests() {
    console.log('♿ Running accessibility tests...');
    const startTime = Date.now();

    try {
      const output = execSync('npm run test:accessibility', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.results.accessibility = {
        passed: true,
        output: output,
        duration: Date.now() - startTime
      };
      
      console.log('✅ Accessibility tests passed');
    } catch (error) {
      this.results.accessibility = {
        passed: false,
        output: error.stdout || error.message,
        duration: Date.now() - startTime
      };
      
      console.log('❌ Accessibility tests failed');
    }
  }

  async runPerformanceTests() {
    console.log('⚡ Running performance tests...');
    const startTime = Date.now();

    try {
      const output = execSync('npm run performance', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.results.performance = {
        passed: true,
        output: output,
        duration: Date.now() - startTime
      };
      
      console.log('✅ Performance tests passed');
    } catch (error) {
      this.results.performance = {
        passed: false,
        output: error.stdout || error.message,
        duration: Date.now() - startTime
      };
      
      console.log('❌ Performance tests failed');
    }
  }

  async runSecurityTests() {
    console.log('🔒 Running security tests...');
    const startTime = Date.now();

    try {
      const output = execSync('npm audit --audit-level=moderate', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.results.security = {
        passed: true,
        output: output,
        duration: Date.now() - startTime
      };
      
      console.log('✅ Security tests passed');
    } catch (error) {
      this.results.security = {
        passed: false,
        output: error.stdout || error.message,
        duration: Date.now() - startTime
      };
      
      console.log('❌ Security tests failed');
    }
  }

  generateReport(totalDuration) {
    console.log('\n📊 Test Results Summary');
    console.log('='.repeat(50));

    const passedTests = Object.values(this.results).filter(result => result.passed).length;
    const totalTests = Object.keys(this.results).length;
    const successRate = (passedTests / totalTests) * 100;

    console.log(`\n🎯 Overall Success Rate: ${successRate.toFixed(1)}% (${passedTests}/${totalTests})`);
    console.log(`⏱️  Total Duration: ${(totalDuration / 1000).toFixed(2)}s\n`);

    // Individual test results
    Object.entries(this.results).forEach(([testName, result]) => {
      const status = result.passed ? '✅' : '❌';
      const duration = (result.duration / 1000).toFixed(2);
      console.log(`${status} ${testName.padEnd(15)} ${duration}s`);
    });

    // Detailed results
    console.log('\n📋 Detailed Results');
    console.log('='.repeat(50));

    Object.entries(this.results).forEach(([testName, result]) => {
      if (!result.passed) {
        console.log(`\n❌ ${testName.toUpperCase()} FAILED:`);
        console.log(result.output);
      }
    });

    // Save report to file
    const report = {
      timestamp: new Date().toISOString(),
      totalDuration,
      successRate,
      results: this.results,
      summary: {
        passed: passedTests,
        failed: totalTests - passedTests,
        total: totalTests
      }
    };

    const reportPath = path.join(process.cwd(), 'test-results.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    console.log(`\n💾 Detailed report saved to: ${reportPath}`);

    // Exit with appropriate code
    if (successRate === 100) {
      console.log('\n🎉 All tests passed!');
      process.exit(0);
    } else {
      console.log('\n⚠️  Some tests failed. Check the report for details.');
      process.exit(1);
    }
  }
}

// Run the comprehensive test suite
if (require.main === module) {
  const tester = new ComprehensiveTester();
  tester.runAllTests().catch(console.error);
}

module.exports = ComprehensiveTester;