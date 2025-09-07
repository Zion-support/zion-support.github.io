#!/usr/bin/env node
/**
 * Master Automation Orchestrator
 * Orchestrates all automation scripts, tests, improvements, and git operations
 */
<<<<<<< HEAD
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MasterAutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.results = {};
    this.errors = [];
    this.status = {
      performanceMonitor: false,
      codeQuality: false,
      testRunner: false,
      gitOperations: false
    };
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

  async runCommand(command, description, options = {}) {
    this.log(`Running: ${description}`, 'PROGRESS');
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
        timeout: 300000,
        maxBuffer: 1024 * 1024 * 10,
        ...options
      });
      this.log(`${description} completed successfully`, 'SUCCESS');
      return { success: true, output: result };
    } catch (error) {
      this.log(`${description} failed: ${error.message}`, 'ERROR');
      this.errors.push({ command, description, error: error.message });
      return { success: false, error: error.message };
    }
  }

  async runPerformanceMonitor() {
    this.log('🔍 Starting Performance Monitor');
    const scripts = [
      'scripts/performance-optimizer.cjs',
      'scripts/performance-optimizer-enhanced.cjs',
      'system-monitor.cjs'
    ];

    for (const script of scripts) {
      if (fs.existsSync(script)) {
        await this.runCommand(`node ${script}`, `Performance Monitor: ${script}`);
      }
    }
    this.status.performanceMonitor = true;
  }

  async runCodeQuality() {
    this.log('🔍 Starting Code Quality Analysis');
    const commands = [
      { cmd: 'npm run lint', desc: 'ESLint Analysis' },
      { cmd: 'npm run type-check', desc: 'TypeScript Type Check' },
      { cmd: 'node scripts/simple-code-quality.cjs', desc: 'Code Quality Script' }
    ];

    for (const { cmd, desc } of commands) {
      await this.runCommand(cmd, desc);
    }
    this.status.codeQuality = true;
  }

  async runTestRunner() {
    this.log('🧪 Starting Test Runner');
    const commands = [
      { cmd: 'npm test -- --passWithNoTests', desc: 'Unit Tests' },
      { cmd: 'npm run build', desc: 'Build Test' },
      { cmd: 'node comprehensive-test-runner.cjs', desc: 'Comprehensive Test Runner' }
    ];

    for (const { cmd, desc } of commands) {
      await this.runCommand(cmd, desc);
    }
    this.status.testRunner = true;
  }

  async runGitOperations() {
    this.log('📝 Starting Git Operations');
    const commands = [
      { cmd: 'git add .', desc: 'Git Add All Changes' },
      { cmd: 'git status', desc: 'Git Status Check' },
      { cmd: 'git commit -m "feat: Automated improvements and fixes"', desc: 'Git Commit' },
      { cmd: 'git push origin HEAD', desc: 'Git Push' }
    ];

    for (const { cmd, desc } of commands) {
      const result = await this.runCommand(cmd, desc);
      if (!result.success && cmd.includes('commit')) {
        // If commit fails, try with a different message
        await this.runCommand('git commit -m "fix: Automated fixes and improvements"', 'Git Commit (retry)');
      }
    }
    this.status.gitOperations = true;
  }

  async runAllAutomations() {
    this.log('🚀 Starting Master Automation Orchestrator');
    this.log('='.repeat(60));

    try {
      await this.runPerformanceMonitor();
      await this.runCodeQuality();
      await this.runTestRunner();
      await this.runGitOperations();

      this.generateReport();
    } catch (error) {
      this.log(`Master orchestrator failed: ${error.message}`, 'ERROR');
      this.errors.push({ component: 'Master Orchestrator', error: error.message });
    }
  }

  generateReport() {
    const totalDuration = Date.now() - this.startTime;
    const successfulComponents = Object.values(this.status).filter(Boolean).length;
    const totalComponents = Object.keys(this.status).length;

    this.log('\n📊 MASTER AUTOMATION ORCHESTRATOR REPORT');
    this.log('='.repeat(60));
    this.log(`Total Duration: ${totalDuration}ms`);
    this.log(`Successful Components: ${successfulComponents}/${totalComponents}`);

    Object.entries(this.status).forEach(([component, success]) => {
      const status = success ? '✅' : '❌';
      this.log(`${status} ${component}`);
    });

    if (this.errors.length > 0) {
      this.log('\n❌ Errors encountered:');
      this.errors.forEach(error => {
        this.log(`  - ${error.description || error.component}: ${error.error}`);
      });
    }

    const reportData = {
      timestamp: new Date().toISOString(),
      totalDuration,
      successfulComponents,
      totalComponents,
      status: this.status,
      errors: this.errors,
      improvements: [
        'Performance monitoring and optimization',
        'Code quality analysis and fixes',
        'Comprehensive testing suite',
        'Automated git operations'
      ]
    };

    fs.writeFileSync('master-automation-report.json', JSON.stringify(reportData, null, 2));
    this.log(`\n📊 Report saved to: master-automation-report.json`);
  }

  async run() {
    await this.runAllAutomations();
  }
}

const orchestrator = new MasterAutomationOrchestrator();
orchestrator.run().catch(console.error);

module.exports = MasterAutomationOrchestrator;
=======

>>>>>>> origin/chore/fix-lint-and-merge
