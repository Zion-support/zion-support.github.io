#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Advanced Test Runner with comprehensive test execution
 */
class TestRunner {
  constructor() {
    this.results = {
      total: 0,
      passed: 0,
      failed: 0,
      skipped: 0,
      errors: []
    };
  }

  async runCommand(command, description) {
    try {
      console.log(`🧪 Running: ${description}`);
      const output = execSync(command, { 
        cwd: process.cwd(), 
        stdio: 'pipe', 
        encoding: 'utf8' 
      });
      console.log(`✅ ${description} completed successfully`);
      return { success: true, output };
    } catch (error) {
      console.log(`❌ ${description} failed: ${error.message}`);
      this.results.errors.push({ command, error: error.message });
      return { success: false, error: error.message };
    }
  }

  async runTests() {
    console.log('🧪 Advanced Test Runner Started...');
    
    // Run different types of tests
    const testCommands = [
      {
        command: 'npm run test:smoke',
        description: 'Smoke Tests'
      },
      {
        command: 'npm run test:unit',
        description: 'Unit Tests'
      },
      {
        command: 'npm run test:integration',
        description: 'Integration Tests'
      },
      {
        command: 'npm run test:accessibility',
        description: 'Accessibility Tests'
      },
      {
        command: 'npm run test:performance',
        description: 'Performance Tests'
      }
    ];

    for (const test of testCommands) {
      const result = await this.runCommand(test.command, test.description);
      this.results.total++;
      
      if (result.success) {
        this.results.passed++;
      } else {
        this.results.failed++;
      }
    }

    // Generate test report
    this.generateReport();
    
    console.log('🧪 Test execution completed');
    return this.results;
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: this.results.total,
        passed: this.results.passed,
        failed: this.results.failed,
        successRate: this.results.total > 0 ? (this.results.passed / this.results.total * 100).toFixed(2) : 0
      },
      errors: this.results.errors
    };

    fs.writeFileSync('test-results.json', JSON.stringify(report, null, 2));
    console.log('📊 Test report generated: test-results.json');
  }
}

// Run if called directly
if (require.main === module) {
  const runner = new TestRunner();
  runner.runTests().then(result => {
    process.exit(result.failed > 0 ? 1 : 0);
  });
}

module.exports = TestRunner;