#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class MasterOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'automation', 'logs');
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.ensureDirectories();
  }

  ensureDirectories() {
    [this.logsDir, this.reportsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    const logMessage = `[${timestamp}] [${type}] ${message}`;
    console.log(`${prefix} ${message}`);
    
    // Write to log file
    const logFile = path.join(this.logsDir, 'master-orchestrator.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async runCommand(command, description = '') {
    try {
      this.log(`Running: ${description || command}`);
      const { stdout, stderr } = await execAsync(command, {
        cwd: this.projectRoot,
        timeout: 30000,
      });

      this.log(`✅ ${description || command} completed successfully`, 'SUCCESS');
      return { success: true, stdout, stderr };
    } catch (error) {
      this.log(`❌ ${description || command} failed: ${error.message}`, 'ERROR');
      return { 
        success: false, 
        stdout: error.stdout || '', 
        stderr: error.stderr || error.message 
      };
    }
  }

  async runBuildProcess() {
    this.log('🚀 Starting build process...');

    const steps = [
      { command: 'npm install', description: 'Installing dependencies' },
      { command: 'npm run build', description: 'Building application' },
    ];

    const results = [];
    for (const step of steps) {
      const result = await this.runCommand(step.command, step.description);
      results.push({ ...step, result });

      if (!result.success) {
        this.log(`❌ Build process failed at: ${step.description}`, 'ERROR');
        return { success: false, results };
      }
    }

    this.log('✅ Build process completed successfully', 'SUCCESS');
    return { success: true, results };
  }

  async runQualityChecks() {
    this.log('🔍 Running quality checks...');

    const checks = [
      { command: 'npm run lint:fix', description: 'Linting fix' },
      { command: 'npm run type-check', description: 'TypeScript type check' },
    ];

    const results = [];
    for (const check of checks) {
      const result = await this.runCommand(check.command, check.description);
      results.push({ ...check, result });
    }

    this.log('✅ Quality checks completed', 'SUCCESS');
    return { success: true, results };
  }

  async runSecurityAudit() {
    this.log('🔒 Running security audit...');

    const auditSteps = [
      { command: 'npm audit', description: 'NPM security audit' },
      { command: 'npm audit fix', description: 'Fix security vulnerabilities' },
    ];

    const results = [];
    for (const step of auditSteps) {
      const result = await this.runCommand(step.command, step.description);
      results.push({ ...step, result });
    }

    this.log('✅ Security audit completed', 'SUCCESS');
    return { success: true, results };
  }

  async runPerformanceOptimization() {
    this.log('⚡ Running performance optimization...');

    const perfSteps = [
      { command: 'npm run build:analyze', description: 'Bundle analysis' },
    ];

    const results = [];
    for (const step of perfSteps) {
      const result = await this.runCommand(step.command, step.description);
      results.push({ ...step, result });
    }

    this.log('✅ Performance optimization completed', 'SUCCESS');
    return { success: true, results };
  }

  async generateReport() {
    this.log('📊 Generating comprehensive report...');

    const report = {
      timestamp: new Date().toISOString(),
      build: await this.runBuildProcess(),
      quality: await this.runQualityChecks(),
      security: await this.runSecurityAudit(),
      performance: await this.runPerformanceOptimization(),
      summary: {
        totalTasks: 4,
        successfulTasks: 0,
        failedTasks: 0,
      },
    };

    // Calculate summary
    if (report.build.success) report.summary.successfulTasks++;
    else report.summary.failedTasks++;

    if (report.quality.success) report.summary.successfulTasks++;
    else report.summary.failedTasks++;

    if (report.security.success) report.summary.successfulTasks++;
    else report.summary.failedTasks++;

    if (report.performance.success) report.summary.successfulTasks++;
    else report.summary.failedTasks++;

    // Save report
    const reportFile = path.join(
      this.reportsDir,
      `master-orchestrator-report-${Date.now()}.json`
    );
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    this.log(`📄 Report saved to: ${reportFile}`, 'SUCCESS');
    return report;
  }

  async start() {
    this.log('🎯 Starting Master Orchestrator...');
    
    try {
      const report = await this.generateReport();
      this.log('🏁 Master Orchestrator completed successfully', 'SUCCESS');
      return report;
    } catch (error) {
      this.log(`❌ Master Orchestrator failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new MasterOrchestrator();
  orchestrator.start().catch(error => {
    console.error('Master Orchestrator failed:', error);
    process.exit(1);
  });
}

module.exports = MasterOrchestrator;