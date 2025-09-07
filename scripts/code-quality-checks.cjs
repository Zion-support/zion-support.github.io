#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

class CodeQualityChecker {
  constructor() {
    this.results = {
      timestamp: new Date().toISOString(),
      summary: { passed: 0, failed: 0, warnings: 0 },
      checks: []
    };
  }

  async runLint() {
    try {
      console.log('🔍 Running ESLint...');
      const result = execSync('npm run lint', { encoding: 'utf8' });
      this.results.checks.push({ name: 'ESLint', status: 'passed', output: result });
      this.results.summary.passed++;
      console.log('✅ ESLint passed');
    } catch (error) {
      this.results.checks.push({ name: 'ESLint', status: 'failed', error: error.message });
      this.results.summary.failed++;
      console.log('❌ ESLint failed');
    }
  }

  async runTypeCheck() {
    try {
      console.log('🔍 Running TypeScript check...');
      const result = execSync('npm run type-check', { encoding: 'utf8' });
      this.results.checks.push({ name: 'TypeScript', status: 'passed', output: result });
      this.results.summary.passed++;
      console.log('✅ TypeScript check passed');
    } catch (error) {
      this.results.checks.push({ name: 'TypeScript', status: 'failed', error: error.message });
      this.results.summary.failed++;
      console.log('❌ TypeScript check failed');
    }
  }

  async runBuild() {
    try {
      console.log('🔍 Running build check...');
      const result = execSync('npm run build', { encoding: 'utf8' });
      this.results.checks.push({ name: 'Build', status: 'passed', output: result });
      this.results.summary.passed++;
      console.log('✅ Build passed');
    } catch (error) {
      this.results.checks.push({ name: 'Build', status: 'failed', error: error.message });
      this.results.summary.failed++;
      console.log('❌ Build failed');
    }
  }

  async generateReport() {
    const reportPath = 'code-quality-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
    console.log(`📄 Report saved to: ${reportPath}`);
  }

  async run() {
    console.log('🚀 Starting Code Quality Checks...');
    
    await this.runLint();
    await this.runTypeCheck();
    await this.runBuild();
    await this.generateReport();
    
    console.log('✅ Code quality checks completed');
    console.log(`📊 Summary: ${this.results.summary.passed} passed, ${this.results.summary.failed} failed`);
  }
}

const checker = new CodeQualityChecker();
checker.run().catch(console.error);