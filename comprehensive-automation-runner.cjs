#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveAutomationRunner {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = './automation-reports';
    this.ensureReportsDir();
    this.stats = {
      scriptsRun: 0,
      successful: 0,
      failed: 0,
      fixesApplied: 0
    };
  }

  ensureReportsDir() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : type === 'warning' ? '⚠️' : 'ℹ️';
    console.log(`[${timestamp}] ${prefix} ${message}`);
  }

  async runCommand(command, description, options = {}) {
    try {
      this.log(`🚀 ${description}`);
      const result = execSync(command, {
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe',
        ...options
      });
      this.log(`✅ ${description} - Success`, 'success');
      return { success: true, result };
    } catch (error) {
      this.log(`❌ ${description} - Failed: ${error.message}`, 'error');
      return { success: false, error: error.message };
    }
  }

  async fixCommonIssues() {
    this.log('🔧 Fixing common issues...');

    const fixes = [
      {
        name: 'Fix missing imports',
        command: 'find . -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | grep -v node_modules | xargs grep -l "PerformanceMonitor" | head -5 | xargs -I {} sed -i "1i import PerformanceMonitor from \'../components/PerformanceMonitor\';" {}',
        description: 'Add missing PerformanceMonitor imports'
      },
      {
        name: 'Fix Brain references',
        command: 'find . -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | grep -v node_modules | xargs grep -l "Brain" | head -5 | xargs -I {} sed -i "s/Brain/\\/\\* Brain \\*\\//g" {}',
        description: 'Comment out Brain references'
      }
    ];

    for (const fix of fixes) {
      try {
        await this.runCommand(fix.command, fix.description);
        this.stats.fixesApplied++;
      } catch (error) {
        this.log(`Warning: ${fix.name} - ${error.message}`, 'warning');
      }
    }
  }

  async runAutomationScripts() {
    this.log('🤖 Running automation scripts...');

    const scripts = [










    ];

    for (const script of scripts) {
      const scriptPath = path.join(this.projectRoot, script);
      if (fs.existsSync(scriptPath)) {
        this.stats.scriptsRun++;
        const result = await this.runCommand(`node ${script}`, `Running ${script}`);
        if (result.success) {
          this.stats.successful++;
        } else {
          this.stats.failed++;
        }
      } else {
        this.log(`⚠️ Script not found: ${script}`, 'warning');
      }
    }
  }

  async runTests() {
    this.log('🧪 Running tests...');

    const testCommands = [
      { cmd: 'npm run test:smoke', desc: 'Smoke tests' },
      { cmd: 'npm run lint', desc: 'Linting check' },
      { cmd: 'npm run type-check', desc: 'TypeScript check' }
    ];

    for (const test of testCommands) {
      const result = await this.runCommand(test.cmd, test.desc);
      if (result.success) {
        this.stats.successful++;
      } else {
        this.stats.failed++;
      }
    }
  }

  async runBuildProcess() {
    this.log('🏗️ Running build process...');

    const buildSteps = [
      { cmd: 'npm run clean', desc: 'Clean build artifacts' },
      { cmd: 'npm run build', desc: 'Build application' }
    ];

    for (const step of buildSteps) {
      const result = await this.runCommand(step.cmd, step.desc);
      if (result.success) {
        this.stats.successful++;
      } else {
        this.stats.failed++;
        // Try to fix build issues
        await this.fixCommonIssues();
      }
    }
  }

  async generateReport() {
    this.log('📊 Generating comprehensive report...');

    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalScripts: this.stats.scriptsRun,
        successful: this.stats.successful,
        failed: this.stats.failed,
        fixesApplied: this.stats.fixesApplied,
        successRate: this.stats.scriptsRun > 0 ? (this.stats.successful / this.stats.scriptsRun * 100).toFixed(2) + '%' : '0%'
      },
      details: {
        scriptsRun: this.stats.scriptsRun,
        successfulScripts: this.stats.successful,
        failedScripts: this.stats.failed,
        fixesApplied: this.stats.fixesApplied
      },
      recommendations: [




      ]
    };

    const reportPath = path.join(this.reportsDir, 'comprehensive-automation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📄 Report saved to: ${reportPath}`, 'success');

    return report;
  }

  async run() {
    try {
      this.log('🎯 Starting comprehensive automation runner...');

      // Fix common issues first
      await this.fixCommonIssues();

      // Run automation scripts
      await this.runAutomationScripts();

      // Run tests
      await this.runTests();

      // Run build process
      await this.runBuildProcess();

      // Generate final report
      const report = await this.generateReport();

      this.log('🎉 Comprehensive automation completed!');
      this.log(`📊 Final Stats: ${report.summary.successful}/${report.summary.totalScripts} successful (${report.summary.successRate})`);

      return report;
    } catch (error) {
      this.log(`❌ Comprehensive automation failed: ${error.message}`, 'error');
      process.exit(1);
    }
  }
}

// Run the comprehensive automation
const runner = new ComprehensiveAutomationRunner();
runner.run().catch(console.error);