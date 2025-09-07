#!/usr/bin/env node
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class TestRunner {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
  }

  log(message, type = 'info') {
    const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
    console.log(`${prefix} ${message}`);
  }

  async runTests() {
    this.log('Running comprehensive test suite...');
    
    try {
      // Run linting
      this.log('Running ESLint...');
      execSync('npx eslint . --ext .js,.jsx,.ts,.tsx', { cwd: this.projectRoot, stdio: 'inherit' });
      this.log('ESLint passed', 'success');
    } catch (error) {
      this.log('ESLint found issues', 'warning');
    }

    try {
      // Run type checking
      this.log('Running TypeScript type checking...');
      execSync('npx tsc --noEmit', { cwd: this.projectRoot, stdio: 'inherit' });
      this.log('TypeScript type checking passed', 'success');
    } catch (error) {
      this.log('TypeScript type checking failed', 'error');
    }

    try {
      // Run build test
      this.log('Testing build process...');
      execSync('npm run build', { cwd: this.projectRoot, stdio: 'inherit' });
      this.log('Build test passed', 'success');
    } catch (error) {
      this.log('Build test failed', 'error');
    }

    this.log('Test suite completed');
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const runner = new TestRunner();
  runner.runTests();
}

export default TestRunner;