#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class AutomationRunner {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.logFile = path.join(this.projectRoot, 'logs', 'automation-runner.log');
    this.statusFile = path.join(this.projectRoot, 'logs', 'automation-status.json');
    this.automationScripts = [
      'error-fixer.js',
      'lint-automation.js',
      'type-check-automation.js',
      'code-quality-automation.js',
      'dependency-automation.js',
      'security-audit-automation.js',
      'performance-monitor-automation.js',
      'build-health-automation.js',
      'file-cleanup-automation.js',
      'ci-automation.js'
    ];
    this.automationStatus = {};
    this.startTime = Date.now();
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    // Append to log file
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, error: error.message, output: error.stdout || '' };
    }
  }

  async checkPM2Status() {
    this.log('🔍 Checking PM2 status...');
    
    try {
      const result = await this.runCommand('pm2 status --json', { silent: true });
      
      if (result.success) {
        const status = JSON.parse(result.output);
        this.log(`PM2 is running with ${status.length} processes`);
        return status;
      } else {
        this.log('PM2 is not running or not accessible', 'WARN');
        return [];
      }
    } catch (error) {
      this.log(`Error checking PM2 status: ${error.message}`, 'ERROR');
      return [];
    }
  }

  async startAutomation(scriptName) {
    this.log(`🚀 Starting automation: ${scriptName}`);
    
    const scriptPath = path.join(this.projectRoot, 'scripts', scriptName);
    
    if (!fs.existsSync(scriptPath)) {
      this.log(`Script not found: ${scriptPath}`, 'ERROR');
      return { success: false, error: 'Script not found' };
    }
    
    try {
      const startTime = Date.now();
      const result = await this.runCommand(`node ${scriptPath}`, { silent: true });
      const duration = Date.now() - startTime;
      
      if (result.success) {
        this.log(`✅ ${scriptName} completed successfully in ${duration}ms`);
        this.automationStatus[scriptName] = {
          status: 'completed',
          duration,
          lastRun: new Date().toISOString(),
          success: true
        };
        return { success: true, duration };
      } else {
        this.log(`❌ ${scriptName} failed: ${result.error}`, 'ERROR');
        this.automationStatus[scriptName] = {
          status: 'failed',
          duration,
          lastRun: new Date().toISOString(),
          success: false,
          error: result.error
        };
        return { success: false, error: result.error, duration };
      }
    } catch (error) {
      this.log(`❌ Error running ${scriptName}: ${error.message}`, 'ERROR');
      this.automationStatus[scriptName] = {
        status: 'error',
        lastRun: new Date().toISOString(),
        success: false,
        error: error.message
      };
      return { success: false, error: error.message };
    }
  }

  async runAllAutomations() {
    this.log('🚀 Starting comprehensive automation run...');
    
    const results = {
      total: this.automationScripts.length,
      successful: 0,
      failed: 0,
      totalDuration: 0,
      details: {}
    };
    
    for (const script of this.automationScripts) {
      this.log(`\n--- Running ${script} ---`);
      const result = await this.startAutomation(script);
      
      results.details[script] = result;
      results.totalDuration += result.duration || 0;
      
      if (result.success) {
        results.successful++;
      } else {
        results.failed++;
      }
      
      // Small delay between automations to prevent overwhelming the system
      await this.sleep(1000);
    }
    
    this.log(`\n📊 Automation run completed:`);
    this.log(`  - Total: ${results.total}`);
    this.log(`  - Successful: ${results.successful}`);
    this.log(`  - Failed: ${results.failed}`);
    this.log(`  - Total Duration: ${results.totalDuration}ms`);
    
    return results;
  }

  async runSpecificAutomation(scriptName) {
    if (!this.automationScripts.includes(scriptName)) {
      this.log(`Invalid automation script: ${scriptName}`, 'ERROR');
      return { success: false, error: 'Invalid script name' };
    }
    
    return await this.startAutomation(scriptName);
  }

  async runCriticalAutomations() {
    this.log('🚨 Running critical automations...');
    
    const criticalScripts = [
      'error-fixer.js',
      'lint-automation.js',
      'type-check-automation.js',
      'dependency-automation.js'
    ];
    
    const results = {
      total: criticalScripts.length,
      successful: 0,
      failed: 0,
      totalDuration: 0,
      details: {}
    };
    
    for (const script of criticalScripts) {
      this.log(`Running critical automation: ${script}`);
      const result = await this.startAutomation(script);
      
      results.details[script] = result;
      results.totalDuration += result.duration || 0;
      
      if (result.success) {
        results.successful++;
      } else {
        results.failed++;
      }
      
      await this.sleep(500);
    }
    
    this.log(`Critical automations completed: ${results.successful}/${results.total} successful`);
    return results;
  }

  async runHealthCheck() {
    this.log('🏥 Running automation health check...');
    
    const healthStatus = {
      timestamp: new Date().toISOString(),
      overall: 'healthy',
      issues: [],
      recommendations: []
    };
    
    // Check PM2 status
    const pm2Status = await this.checkPM2Status();
    if (pm2Status.length === 0) {
      healthStatus.issues.push('PM2 is not running');
      healthStatus.recommendations.push('Start PM2 processes');
    }
    
    // Check automation script status
    const failedAutomations = Object.entries(this.automationStatus)
      .filter(([_, status]) => !status.success)
      .map(([script, status]) => ({ script, ...status }));
    
    if (failedAutomations.length > 0) {
      healthStatus.issues.push(`${failedAutomations.length} automations have failed`);
      healthStatus.recommendations.push('Review failed automation logs and restart');
      healthStatus.overall = 'degraded';
    }
    
    // Check log files
    const logsDir = path.join(this.projectRoot, 'logs');
    if (!fs.existsSync(logsDir)) {
      healthStatus.issues.push('Logs directory not found');
      healthStatus.recommendations.push('Create logs directory');
    } else {
      const logFiles = fs.readdirSync(logsDir);
      const recentLogs = logFiles.filter(file => {
        const filePath = path.join(logsDir, file);
        const stats = fs.statSync(filePath);
        const ageHours = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60);
        return ageHours < 24; // Logs from last 24 hours
      });
      
      if (recentLogs.length === 0) {
        healthStatus.issues.push('No recent log files found');
        healthStatus.recommendations.push('Check if automations are running');
      }
    }
    
    // Check disk space
    try {
      const diskSpace = await this.runCommand('df -h .', { silent: true });
      if (diskSpace.success) {
        const lines = diskSpace.output.split('\n');
        const currentDir = lines.find(line => line.includes('.')) || lines[1];
        if (currentDir) {
          const usage = currentDir.match(/(\d+)%/);
          if (usage && parseInt(usage[1]) > 90) {
            healthStatus.issues.push('Disk space is running low');
            healthStatus.recommendations.push('Clean up unnecessary files');
            healthStatus.overall = 'warning';
          }
        }
      }
    } catch (error) {
      this.log(`Could not check disk space: ${error.message}`, 'WARN');
    }
    
    // Determine overall health
    if (healthStatus.issues.length > 3) {
      healthStatus.overall = 'critical';
    } else if (healthStatus.issues.length > 1) {
      healthStatus.overall = 'degraded';
    }
    
    this.log(`Health check completed: ${healthStatus.overall.toUpperCase()}`);
    if (healthStatus.issues.length > 0) {
      this.log(`Issues found: ${healthStatus.issues.length}`);
      healthStatus.issues.forEach(issue => this.log(`  - ${issue}`, 'WARN'));
    }
    
    return healthStatus;
  }

  async generateReport() {
    this.log('📊 Generating automation report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      runDuration: Date.now() - this.startTime,
      automationStatus: this.automationStatus,
      summary: {
        total: this.automationScripts.length,
        successful: Object.values(this.automationStatus).filter(s => s.success).length,
        failed: Object.values(this.automationStatus).filter(s => !s.success).length,
        successRate: 0
      },
      recommendations: []
    };
    
    // Calculate success rate
    if (report.summary.total > 0) {
      report.summary.successRate = Math.round((report.summary.successful / report.summary.total) * 100);
    }
    
    // Generate recommendations
    if (report.summary.failed > 0) {
      report.recommendations.push(`Review and fix ${report.summary.failed} failed automations`);
    }
    
    if (report.summary.successRate < 80) {
      report.recommendations.push('Automation success rate is below 80% - investigate issues');
    }
    
    const failedAutomations = Object.entries(this.automationStatus)
      .filter(([_, status]) => !status.success);
    
    if (failedAutomations.length > 0) {
      report.recommendations.push('Consider running critical automations only for immediate fixes');
    }
    
    // Save report
    fs.writeFileSync(this.statusFile, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${report.summary.successful}/${report.summary.total} automations successful (${report.summary.successRate}%)`);
    
    return report;
  }

  async startContinuousMode() {
    this.log('🔄 Starting continuous automation mode...');
    
    const interval = 5 * 60 * 1000; // 5 minutes
    let runCount = 0;
    
    const runAutomation = async () => {
      runCount++;
      this.log(`\n🔄 Continuous run #${runCount} starting...`);
      
      try {
        await this.runCriticalAutomations();
        await this.generateReport();
        
        this.log(`✅ Continuous run #${runCount} completed successfully`);
      } catch (error) {
        this.log(`❌ Continuous run #${runCount} failed: ${error.message}`, 'ERROR');
      }
    };
    
    // Run immediately
    await runAutomation();
    
    // Set up interval
    const intervalId = setInterval(runAutomation, interval);
    
    this.log(`Continuous mode active - running every ${interval / 1000 / 60} minutes`);
    this.log('Press Ctrl+C to stop continuous mode');
    
    // Handle graceful shutdown
    process.on('SIGINT', () => {
      this.log('\n🛑 Stopping continuous mode...');
      clearInterval(intervalId);
      this.generateReport().then(() => {
        this.log('Continuous mode stopped. Final report generated.');
        process.exit(0);
      });
    });
    
    // Keep the process alive
    return new Promise(() => {});
  }

  async runMaintenanceMode() {
    this.log('🔧 Running maintenance mode...');
    
    // Run all automations in sequence
    const results = await this.runAllAutomations();
    
    // Generate comprehensive report
    const report = await this.generateReport();
    
    // Run health check
    const health = await this.runHealthCheck();
    
    this.log('\n📋 Maintenance Summary:');
    this.log(`  - Automation Results: ${results.successful}/${results.total} successful`);
    this.log(`  - Overall Health: ${health.overall.toUpperCase()}`);
    this.log(`  - Issues Found: ${health.issues.length}`);
    
    if (health.issues.length > 0) {
      this.log('\n🔧 Recommended Actions:');
      health.recommendations.forEach(rec => {
        this.log(`  - ${rec}`);
      });
    }
    
    return { results, report, health };
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  showHelp() {
    console.log(`
🚀 Automation Runner - Comprehensive Project Automation

Usage: node automation-runner.js [command] [options]

Commands:
  run-all              Run all automation scripts
  run-critical         Run only critical automation scripts
  run [script]         Run a specific automation script
  health               Run health check
  maintenance          Run maintenance mode (all automations + health check)
  continuous           Start continuous mode (runs every 5 minutes)
  status               Show current automation status
  help                 Show this help message

Examples:
  node automation-runner.js run-all
  node automation-runner.js run error-fixer.js
  node automation-runner.js run-critical
  node automation-runner.js continuous

Available Scripts:
${this.automationScripts.map(script => `  - ${script}`).join('\n')}
`);
  }

  async run() {
    const command = process.argv[2];
    const option = process.argv[3];
    
    if (!command || command === 'help') {
      this.showHelp();
      return;
    }
    
    try {
      switch (command) {
        case 'run-all':
          await this.runAllAutomations();
          await this.generateReport();
          break;
          
        case 'run-critical':
          await this.runCriticalAutomations();
          await this.generateReport();
          break;
          
        case 'run':
          if (!option) {
            this.log('Please specify a script to run', 'ERROR');
            this.showHelp();
            return;
          }
          await this.runSpecificAutomation(option);
          break;
          
        case 'health':
          await this.runHealthCheck();
          break;
          
        case 'maintenance':
          await this.runMaintenanceMode();
          break;
          
        case 'continuous':
          await this.startContinuousMode();
          break;
          
        case 'status':
          console.log(JSON.stringify(this.automationStatus, null, 2));
          break;
          
        default:
          this.log(`Unknown command: ${command}`, 'ERROR');
          this.showHelp();
          return;
      }
      
    } catch (error) {
      this.log(`Error executing command '${command}': ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the automation runner
if (import.meta.url === `file://${process.argv[1]}`) {
  const runner = new AutomationRunner();
  runner.run().catch(console.error);
}

export default AutomationRunner;