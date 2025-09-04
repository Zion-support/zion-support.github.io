#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class ErrorPreventionOrchestrator {
  constructor() {
    this.logFile = path.join(process.cwd(), 'automation/logs/orchestrator.log');
    this.statusFile = path.join(process.cwd(), 'automation/logs/orchestrator-status.json');
    this.processes = new Map();
    this.isRunning = false;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async startAllServices() {
    if (this.isRunning) {
      this.log('Error prevention services already running');
      return;
    }

    this.log('Starting all error prevention services...');
    this.isRunning = true;

    const services = [
      'error-prevention-linter',
      'error-prevention-build-monitor',
      'error-prevention-security-audit',
      'error-prevention-dependency-monitor',
      'error-prevention-type-checker'
    ];

    for (const service of services) {
      try {
        this.log(`Starting ${service}...`);
        execSync(`pm2 start ecosystem.error-prevention.config.cjs --only ${service}`, {
          stdio: 'pipe'
        });
        this.log(`${service} started successfully`);
      } catch (error) {
        this.log(`Failed to start ${service}: ${error.message}`);
      }
    }

    // Update status
    this.updateStatus('running');
    this.log('All error prevention services started');
  }

  async stopAllServices() {
    this.log('Stopping all error prevention services...');

    try {
      execSync('pm2 stop ecosystem.error-prevention.config.cjs', {
        stdio: 'pipe'
      });
      this.log('All services stopped successfully');
    } catch (error) {
      this.log(`Error stopping services: ${error.message}`);
    }

    this.isRunning = false;
    this.updateStatus('stopped');
  }

  async restartAllServices() {
    this.log('Restarting all error prevention services...');
    await this.stopAllServices();
    setTimeout(() => this.startAllServices(), 2000);
  }

  async getStatus() {
    try {
      const result = execSync('pm2 status', { encoding: 'utf8' });
      this.log('Current PM2 status:');
      console.log(result);
      
      // Parse and save status
      const status = {
        timestamp: new Date().toISOString(),
        isRunning: this.isRunning,
        pm2Status: result
      };
      
      fs.writeFileSync(this.statusFile, JSON.stringify(status, null, 2));
      
    } catch (error) {
      this.log(`Error getting status: ${error.message}`);
    }
  }

  async getLogs(service = null) {
    try {
      if (service) {
        const result = execSync(`pm2 logs ${service} --lines 50`, { encoding: 'utf8' });
        this.log(`Logs for ${service}:`);
        console.log(result);
      } else {
        const result = execSync('pm2 logs --lines 50', { encoding: 'utf8' });
        this.log('All service logs:');
        console.log(result);
      }
    } catch (error) {
      this.log(`Error getting logs: ${error.message}`);
    }
  }

  async runQuickCheck() {
    this.log('Running quick error check...');
    
    const checks = [
      { name: 'Linting', command: 'npm run lint' },
      { name: 'Type Check', command: 'npm run type-check' },
      { name: 'Build', command: 'npm run build' },
      { name: 'Security Audit', command: 'npm audit --audit-level=moderate' }
    ];

    const results = {};

    for (const check of checks) {
      try {
        this.log(`Running ${check.name}...`);
        execSync(check.command, { stdio: 'pipe', timeout: 60000 });
        results[check.name] = { status: 'passed', error: null };
        this.log(`${check.name} passed`);
      } catch (error) {
        results[check.name] = { 
          status: 'failed', 
          error: error.stdout || error.message 
        };
        this.log(`${check.name} failed: ${error.stdout || error.message}`);
      }
    }

    // Save quick check results
    const reportFile = path.join(process.cwd(), 'automation/logs/quick-check-report.json');
    fs.writeFileSync(reportFile, JSON.stringify({
      timestamp: new Date().toISOString(),
      results: results
    }, null, 2));

    this.log('Quick check completed');
    return results;
  }

  updateStatus(status) {
    const statusData = {
      timestamp: new Date().toISOString(),
      status: status,
      isRunning: this.isRunning
    };
    
    fs.writeFileSync(this.statusFile, JSON.stringify(statusData, null, 2));
  }

  showHelp() {
    console.log(`
Error Prevention Orchestrator Commands:

  start     - Start all error prevention services
  stop      - Stop all error prevention services  
  restart   - Restart all error prevention services
  status    - Show status of all services
  logs      - Show logs from all services
  logs <service> - Show logs from specific service
  check     - Run quick error check
  help      - Show this help message

Available services:
  - error-prevention-linter
  - error-prevention-build-monitor
  - error-prevention-security-audit
  - error-prevention-dependency-monitor
  - error-prevention-type-checker
    `);
  }

  async run() {
    const command = process.argv[2];
    const service = process.argv[3];

    switch (command) {
      case 'start':
        await this.startAllServices();
        break;
      case 'stop':
        await this.stopAllServices();
        break;
      case 'restart':
        await this.restartAllServices();
        break;
      case 'status':
        await this.getStatus();
        break;
      case 'logs':
        await this.getLogs(service);
        break;
      case 'check':
        await this.runQuickCheck();
        break;
      case 'help':
      default:
        this.showHelp();
        break;
    }
  }
}

// Run the orchestrator
const orchestrator = new ErrorPreventionOrchestrator();
orchestrator.run().catch(console.error);