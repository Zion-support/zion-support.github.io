#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class MasterAutomation {
  constructor() {
    this.logsDir = path.join(__dirname, 'logs');
    this.pm2Processes = [
      'error-monitor',
      'lint-fixer',
      'build-monitor',
      'git-automation',
    ];
    this.ensureLogsDir();
  }

  ensureLogsDir() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logMessage);

    // Write to log file
    const logFile = path.join(this.logsDir, 'master-automation.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async runCommand(command, description = '') {
    try {
      this.log(`Running: ${description || command}`);
      const { stdout, stderr } = await execAsync(command, {
        cwd: process.cwd(),
        timeout: 30000,
      });

      this.log(`✅ ${description || command} completed successfully`);
      return { success: true, stdout, stderr };
    } catch (error) {
      this.log(`❌ ${description || command} failed: ${error.message}`, 'error');
      return { 
        success: false, 
        stdout: error.stdout || '', 
        stderr: error.stderr || error.message 
      };
    }
  }

  async checkPM2Status() {
    this.log('Checking PM2 status...');
    const result = await this.runCommand('pm2 status', 'PM2 status check');
    if (result.success) {
      this.log('PM2 status check completed');
      return true;
    } else {
      this.log('PM2 status check failed');
      return false;
    }
  }

  async startPM2Processes() {
    this.log('Starting PM2 processes...');
    const result = await this.runCommand('pm2 start ecosystem.config.cjs', 'Start PM2 processes');
    if (result.success) {
      this.log('PM2 processes started successfully');
      return true;
    } else {
      this.log('Failed to start PM2 processes');
      return false;
    }
  }

  async stopPM2Processes() {
    this.log('Stopping PM2 processes...');
    for (const processName of this.pm2Processes) {
      await this.runCommand(`pm2 stop ${processName}`, `Stop ${processName}`);
    }
    this.log('PM2 processes stopped');
  }

  async restartPM2Processes() {
    this.log('Restarting PM2 processes...');
    const result = await this.runCommand('pm2 restart ecosystem.config.cjs', 'Restart PM2 processes');
    if (result.success) {
      this.log('PM2 processes restarted successfully');
      return true;
    } else {
      this.log('Failed to restart PM2 processes');
      return false;
    }
  }

  async getPM2Logs(processName = null, lines = 50) {
    this.log(`Getting PM2 logs${processName ? ` for ${processName}` : ''}...`);
    const command = processName 
      ? `pm2 logs ${processName} --lines ${lines}` 
      : `pm2 logs --lines ${lines}`;
    const result = await this.runCommand(command, 'Get PM2 logs');
    if (result.success) {
      this.log('PM2 logs retrieved successfully');
      return result.stdout;
    } else {
      this.log('Failed to get PM2 logs');
      return null;
    }
  }

  async monitorProcesses() {
    this.log('Monitoring PM2 processes...');
    const result = await this.runCommand('pm2 jlist', 'Get PM2 process list');
    if (result.success) {
      try {
        const processes = JSON.parse(result.stdout);
        const runningProcesses = processes.filter(p => p.pm2_env && p.pm2_env.status === 'online');
        this.log(`Found ${runningProcesses.length} running processes`);
        for (const process of runningProcesses) {
          this.log(`  Process: ${process.name} - Status: ${process.pm2_env.status} - Uptime: ${process.pm2_env.pm_uptime}`);
        }
        return runningProcesses;
      } catch (error) {
        this.log(`Error parsing PM2 process list: ${error.message}`);
        return [];
      }
    } else {
      this.log('Failed to get PM2 process list');
      return [];
    }
  }

  async runBuildProcess() {
    this.log('🚀 Starting build process...');

    const steps = [
      { command: 'npm install', description: 'Installing dependencies' },
      { command: 'npm run build', description: 'Building application' },
      { command: 'npm run test:smoke', description: 'Running smoke tests' },
    ];

    const results = [];
    for (const step of steps) {
      const result = await this.runCommand(step.command, step.description);
      results.push({ ...step, result });

      if (!result.success) {
        this.log(`❌ Build process failed at: ${step.description}`, 'error');
        return { success: false, results };
      }
    }

    this.log('✅ Build process completed successfully');
    return { success: true, results };
  }

  async runQualityChecks() {
    this.log('🔍 Running quality checks...');

    const checks = [
      { command: 'npm run lint', description: 'Linting check' },
      { command: 'npm run type-check', description: 'TypeScript type check' },
    ];

    const results = [];
    for (const check of checks) {
      const result = await this.runCommand(check.command, check.description);
      results.push({ ...check, result });
    }

    this.log('✅ Quality checks completed');
    return { success: true, results };
  }

  async runAutomationScripts() {
    this.log('🤖 Running automation scripts...');

    const scripts = [
      {
        command: 'node automation/ai-intelligent-code-analyzer.cjs',
        description: 'AI Code Analyzer',
      },
      {
        command: 'node automation/intelligent-git-workflow.cjs',
        description: 'Git Workflow Automation',
      },
      {
        command: 'node automation/performance-optimizer.cjs',
        description: 'Performance Optimizer',
      },
      {
        command: 'node automation/automated-test-runner.cjs',
        description: 'Automated Test Runner',
      },
      {
        command: 'node automation/security-auditor.cjs',
        description: 'Security Auditor',
      },
      {
        command: 'node automation/performance-monitor.cjs',
        description: 'Performance Monitor',
      },
    ];

    const results = [];
    for (const script of scripts) {
      const result = await this.runCommand(script.command, script.description);
      results.push({ ...script, result });
    }

    this.log('✅ Automation scripts completed');
    return { success: true, results };
  }

  async performHealthCheck() {
    this.log('Performing health check...');

    // Check if PM2 is running
    const pm2Status = await this.checkPM2Status();
    if (!pm2Status) {
      this.log('PM2 is not running, attempting to start processes...');
      await this.startPM2Processes();
      return;
    }

    // Check individual processes
    const processes = await this.monitorProcesses();
    const expectedProcesses = this.pm2Processes.length;
    const runningProcesses = processes.length;

    if (runningProcesses < expectedProcesses) {
      this.log(`Only ${runningProcesses}/${expectedProcesses} processes running, restarting...`);
      await this.restartPM2Processes();
    } else {
      this.log('All processes are running normally');
    }
  }

  async generateReport() {
    this.log('📊 Generating automation report...');

    const report = {
      timestamp: new Date().toISOString(),
      build: await this.runBuildProcess(),
      quality: await this.runQualityChecks(),
      automation: await this.runAutomationScripts(),
      processes: await this.monitorProcesses(),
      logs: {
        errorMonitor: await this.getPM2Logs('error-monitor', 20),
        lintFixer: await this.getPM2Logs('lint-fixer', 20),
        buildMonitor: await this.getPM2Logs('build-monitor', 20),
        gitAutomation: await this.getPM2Logs('git-automation', 20)
      },
      summary: {
        totalScripts: 6,
        successfulScripts: 0,
        failedScripts: 0,
      },
    };

    // Calculate summary
    if (report.build.success) report.summary.successfulScripts++;
    else report.summary.failedScripts++;

    if (report.quality.success) report.summary.successfulScripts++;
    else report.summary.failedScripts++;

    if (report.automation.success) report.summary.successfulScripts++;
    else report.summary.failedScripts++;

    // Save report
    const reportFile = path.join(
      this.logsDir,
      `automation-report-${Date.now()}.json`
    );
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    this.log(`📄 Report saved to: ${reportFile}`);
    return report;
  }

  async start() {
    this.log('Master Automation started');

    // Ensure logs directory exists
    const logsDir = path.join(__dirname, 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }

    // Start PM2 processes
    await this.startPM2Processes();

    // Perform initial health check
    await this.performHealthCheck();

    // Set up periodic health checks every 30 minutes
    setInterval(async () => {
      await this.performHealthCheck();
    }, 30 * 60 * 1000);

    // Set up daily report generation
    setInterval(async () => {
      this.log('Generating daily report...');
      await this.generateReport();
    }, 24 * 60 * 60 * 1000);
  }

  async stop() {
    this.log('Stopping Master Automation...');
    await this.stopPM2Processes();
    this.log('Master Automation stopped');
  }

  async status() {
    this.log('📊 Checking automation status...');

    const status = {
      timestamp: new Date().toISOString(),
      buildStatus: 'unknown',
      gitStatus: 'unknown',
      dependenciesStatus: 'unknown',
    };

    // Check build status
    try {
      const buildResult = await this.runCommand('npm run build', 'Build check');
      status.buildStatus = buildResult.success ? 'healthy' : 'failed';
    } catch (_error) {
      status.buildStatus = 'error';
    }

    // Check git status
    try {
      const gitResult = await this.runCommand(
        'git status --porcelain',
        'Git status check'
      );
      status.gitStatus = gitResult.success ? 'clean' : 'dirty';
    } catch (_error) {
      status.gitStatus = 'error';
    }

    // Check dependencies
    try {
      const depsResult = await this.runCommand(
        'npm list --depth=0',
        'Dependencies check'
      );
      status.dependenciesStatus = depsResult.success ? 'installed' : 'missing';
    } catch (_error) {
      status.dependenciesStatus = 'error';
    }

    this.log('📊 Status check completed');
    return status;
  }
}

// CLI interface
if (require.main === module) {
  const automation = new MasterAutomation();
  const command = process.argv[2];

  switch (command) {
    case 'start':
      automation
        .start()
        .then(report => {
          console.log('Automation completed:', report?.summary);
          process.exit(0);
        })
        .catch(error => {
          console.error('Automation failed:', error);
          process.exit(1);
        });
      break;

    case 'status':
      automation
        .status()
        .then(status => {
          console.log('Status:', status);
          process.exit(0);
        })
        .catch(error => {
          console.error('Status check failed:', error);
          process.exit(1);
        });
      break;

    case 'report':
      automation
        .generateReport()
        .then(report => {
          console.log('Report generated:', report.summary);
          process.exit(0);
        })
        .catch(error => {
          console.error('Report generation failed:', error);
          process.exit(1);
        });
      break;

    default:
      console.log('Usage: node master-automation-fixed.cjs [start|status|report]');
      process.exit(1);
  }
}

module.exports = MasterAutomation;