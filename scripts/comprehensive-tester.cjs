#!/usr/bin/env node
const { execSync } = require('child_process');

class ComprehensiveTester {
  constructor() {
    this.results = { passed: 0, failed: 0, errors: [] };
  }

  async runTest(command, description) {
    try {
      execSync(command, { stdio: 'pipe' });
      this.results.passed++;
      console.log(`✅ ${description}`);
    } catch (error) {
      this.results.failed++;
      this.results.errors.push({ test: description, error: error.message });
      console.log(`❌ ${description}: ${error.message}`);
    }
  }

  async runAllTests() {
    console.log('🧪 Running comprehensive tests...');
    
    await this.runTest('npm run type-check', 'TypeScript check');
    await this.runTest('npm run lint:check', 'Linting check');
    await this.runTest('npm run build', 'Build test');
    await this.runTest('npm run test:smoke', 'Smoke tests');
    
    console.log(`\n📊 Results: ${this.results.passed} passed, ${this.results.failed} failed`);
    
    if (this.results.failed > 0) {
      console.log('\n❌ Failed tests:');
      this.results.errors.forEach(err => {
        console.log(`  - ${err.test}: ${err.error}`);
      });
    }
  }
}

const tester = new ComprehensiveTester();
tester.runAllTests();
