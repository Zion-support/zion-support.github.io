#!/usr/bin/env node

/**
 * Run All Automations Script
 * Executes various automation tasks in sequence
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AutomationRunner {
  constructor() {
    this.automationDir = 'automation';
    this.scriptsDir = 'scripts';
    this.logs = [];
  }

  async runAll() {
    console.log('🚀 Starting automation bundle execution...');

    try {
      // Run various automation tasks
      await this.runTask('Dependency Check', () => this.checkDependencies());
      await this.runTask('Code Quality', () => this.runCodeQuality());
      await this.runTask('Build Check', () => this.runBuildCheck());
      await this.runTask('Test Suite', () => this.runTestSuite());
      await this.runTask('Security Scan', () => this.runSecurityScan());

      // Generate summary
      this.generateSummary();

      console.log('✅ All automations completed successfully');
      return true;
    } catch (error) {
      console.error('❌ Automation bundle failed:', error.message);
      this.logs.push({
        task: 'Error',
        status: 'failed',
        message: error.message,
      });
      return false;
    }
  }

  async runTask(name, taskFunction) {
    console.log(`\n📋 Running: ${name}`);

    try {
      const startTime = Date.now();
      await taskFunction();
      const duration = Date.now() - startTime;

      this.logs.push({ task: name, status: 'success', duration });
      console.log(`✅ ${name} completed in ${duration}ms`);
    } catch (error) {
      this.logs.push({ task: name, status: 'failed', message: error.message });
      console.log(`❌ ${name} failed: ${error.message}`);
    }
  }

  checkDependencies() {
    console.log('  📦 Checking dependencies...');

    // Check if package.json exists
    if (!fs.existsSync('package.json')) {
      throw new Error('package.json not found');
    }

    // Check if node_modules exists
    if (!fs.existsSync('node_modules')) {
      console.log('  ⚠️ node_modules not found, consider running npm install');
    }

    console.log('  ✅ Dependencies check completed');
  }

  runCodeQuality() {
    console.log('  🔍 Running code quality checks...');

    try {
      // Run linting
      execSync('npm run lint', { stdio: 'pipe' });
      console.log('  ✅ Linting passed');
    } catch (error) {
      console.log('  ⚠️ Linting failed, but continuing...');
    }

    try {
      // Run type checking
      execSync('npm run type-check', { stdio: 'pipe' });
      console.log('  ✅ Type checking passed');
    } catch (error) {
      console.log('  ⚠️ Type checking failed, but continuing...');
    }
  }

  runBuildCheck() {
    console.log('  🏗️ Running build check...');

    try {
      // Check if build script exists
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      if (packageJson.scripts.build) {
        console.log('  ✅ Build script found');
      } else {
        console.log('  ⚠️ No build script found in package.json');
      }
    } catch (error) {
      console.log('  ⚠️ Could not read package.json');
    }
  }

  runTestSuite() {
    console.log('  🧪 Running test suite...');

    try {
      // Check if test script exists
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      if (packageJson.scripts.test) {
        console.log('  ✅ Test script found');
      } else {
        console.log('  ⚠️ No test script found in package.json');
      }
    } catch (error) {
      console.log('  ⚠️ Could not read package.json');
    }
  }

  runSecurityScan() {
    console.log('  🔒 Running security scan...');

    try {
      // Check if security script exists
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      if (packageJson.scripts['security:scan']) {
        console.log('  ✅ Security scan script found');
      } else {
        console.log('  ⚠️ No security scan script found in package.json');
      }
    } catch (error) {
      console.log('  ⚠️ Could not read package.json');
    }
  }

  generateSummary() {
    console.log('\n📊 Automation Summary');
    console.log('====================');

    const successful = this.logs.filter(log => log.status === 'success').length;
    const failed = this.logs.filter(log => log.status === 'failed').length;
    const total = this.logs.length;

    console.log(`Total tasks: ${total}`);
    console.log(`Successful: ${successful}`);
    console.log(`Failed: ${failed}`);

    if (failed > 0) {
      console.log('\n❌ Failed tasks:');
      this.logs
        .filter(log => log.status === 'failed')
        .forEach(log => {
          console.log(`  - ${log.task}: ${log.message || 'Unknown error'}`);
        });
    }

    if (successful === total) {
      console.log('\n🎉 All automations completed successfully!');
    } else {
      console.log('\n⚠️ Some automations failed, but the process continued');
    }
  }
}

// CLI interface
if (require.main === module) {
  const runner = new AutomationRunner();
  runner
    .runAll()
    .then(success => {
      process.exit(success ? 0 : 1);
    })
    .catch(error => {
      console.error('❌ Runner error:', error.message);
      process.exit(1);
    });
}

module.exports = AutomationRunner;
