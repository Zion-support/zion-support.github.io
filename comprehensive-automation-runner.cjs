#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Comprehensive Automation Runner
 * Runs all automation scripts and provides comprehensive testing and improvement
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class ComprehensiveAutomationRunner {
  constructor() {
    this.logDir = path.join(__dirname, 'automation', 'logs');
    this.ensureLogDir();
    this.startTime = Date.now();
    this.results = {
      syntaxFixes: 0,
      buildSuccess: false,
      testsPassed: 0,
      optimizations: 0,
      errors: []
    };
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description, timeout = 30000) {
    this.log(`Running: ${description}`, 'PROGRESS');
    try {
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        timeout: timeout 
      });
      this.log(`${description} completed successfully`, 'SUCCESS');
      return { success: true, output: result };
    } catch (error) {
      this.log(`${description} failed: ${error.message}`, 'ERROR');
      this.results.errors.push({
        command,
        description,
        error: error.message
      });
      return { success: false, error: error.message };
    }
  }

  async runSyntaxFixes() {
    this.log('🔧 Starting comprehensive syntax error fixing...');
    const syntaxTasks = [
      { command: 'npm run lint:fix', description: 'ESLint Auto-fix' },
      { command: 'npm run format', description: 'Prettier Code Formatting' },
      { command: 'npm run type-check', description: 'TypeScript Type Checking' }
    ];

    let fixes = 0;
    for (const task of syntaxTasks) {
      const result = await this.runCommand(task.command, task.description);
      if (result.success) {
        fixes++;
      }
    }
    this.results.syntaxFixes = fixes;
    return fixes;
  }

  async runBuildProcess() {
    this.log('🏗️ Starting build process...');
    const buildTasks = [
      { command: 'npm run clean', description: 'Clean Previous Builds' },
      { command: 'npm run build', description: 'Application Build' }
    ];

    let buildSuccess = true;
    for (const task of buildTasks) {
      const result = await this.runCommand(task.command, task.description);
      if (!result.success) {
        buildSuccess = false;
      }
    }
    this.results.buildSuccess = buildSuccess;
    return buildSuccess;
  }

  async runTests() {
    this.log('🧪 Running comprehensive tests...');
    const testTasks = [
      { command: 'npm run test:smoke', description: 'Smoke Tests' },
      { command: 'npm test -- --passWithNoTests', description: 'Jest Tests' }
    ];

    let testsPassed = 0;
    for (const task of testTasks) {
      const result = await this.runCommand(task.command, task.description);
      if (result.success) {
        testsPassed++;
      }
    }
    this.results.testsPassed = testsPassed;
    return testsPassed;
  }

  async runAllAutomations() {
    this.log('🚀 Starting comprehensive automation...', 'PROGRESS');
    
    try {

      await this.runSyntaxFixes();
      await this.runBuildProcess();
      await this.runTests();
      this.generateFinalReport();
    } catch (error) {
      this.log(`Automation failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }

  generateFinalReport() {
    const duration = Date.now() - this.startTime;
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${Math.round(duration / 1000)}s`,
      results: this.results,
      summary: {
        syntaxFixes: this.results.syntaxFixes,
        buildSuccess: this.results.buildSuccess,
        testsPassed: this.results.testsPassed,
        totalErrors: this.results.errors.length,
      },
    };

    const reportPath = path.join(process.cwd(), 'comprehensive-automation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log('📊 Final Report Generated', 'SUCCESS');
    this.log(`✅ Syntax Fixes: ${report.summary.syntaxFixes}`);
    this.log(`🏗️ Build Success: ${report.summary.buildSuccess}`);
    this.log(`🧪 Tests Passed: ${report.summary.testsPassed}`);
    this.log(`❌ Total Errors: ${report.summary.totalErrors}`);
  }
}

// Run if called directly
if (require.main === module) {
  const runner = new ComprehensiveAutomationRunner();

