#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');

class CodeQualityChecker {
  constructor() {
    this.projectRoot = process.cwd();
  }

  async check() {
    console.log('🔍 Checking code quality...');
    
    // Run linting
    await this.runLinting();
    
    // Run type checking
    await this.runTypeChecking();
    
    // Run tests
    await this.runTests();
    
    console.log('✅ Code quality check completed');
  }

  async runLinting() {
    console.log('🧹 Running linting...');
    try {
      execSync('npm run lint', { stdio: 'inherit' });
    } catch (error) {
      console.log('⚠️ Linting issues found');
    }
  }

  async runTypeChecking() {
    console.log('🔍 Running type checking...');
    try {
      execSync('npm run type-check', { stdio: 'inherit' });
    } catch (error) {
      console.log('⚠️ Type checking issues found');
    }
  }

  async runTests() {
    console.log('🧪 Running tests...');
    try {
      execSync('npm run test:smoke', { stdio: 'inherit' });
    } catch (error) {
      console.log('⚠️ Test failures found');
    }
  }
}

const checker = new CodeQualityChecker();
checker.check().catch(console.error);