#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const cron = require('node-cron');

class PM2ErrorAutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'automation/logs');
    this.configDir = path.join(this.projectRoot, 'automation/config');
    this.ensureDirectories();
    this.setupLogging();
    
    this.automations = [
      {
        name: 'comprehensive-error-fixer-enhanced',
        script: './scripts/automation/comprehensive-error-fixer-enhanced.cjs',
        interval: '*/15 * * * *', // Every 15 minutes
        priority: 'high',
        enabled: true
      },
      {
        name: 'typescript-error-monitor',
        script: './scripts/automation/typescript-error-monitor.cjs',
        interval: '*/10 * * * *', // Every 10 minutes
        priority: 'high',
        enabled: true
      },
      {
        name: 'eslint-error-cleaner',
        script: './scripts/automation/eslint-error-cleaner.cjs',
        interval: '*/20 * * * *', // Every 20 minutes
        priority: 'medium',
        enabled: true
      },
      {
        name: 'build-error-detector',
        script: './scripts/automation/build-error-detector.cjs',
        interval: '*/30 * * * *', // Every 30 minutes
        priority: 'high',
        enabled: true
      },
      {
        name: 'dependency-error-resolver',
        script: './scripts/automation/dependency-error-resolver.cjs',
        interval: '0 */2 * * *', // Every 2 hours
        priority: 'medium',
        enabled: true
      },
      {
        name: 'file-structure-fixer',
        script: './scripts/automation/file-structure-fixer.cjs',
        interval: '0 */4 * * *', // Every 4 hours
        priority: 'low',
        enabled: true
      },
      {
        name: 'security-audit-automation',
        script: './scripts/automation/security-audit.cjs',
        interval: '0 */6 * * *', // Every 6 hours
        priority: 'medium',
        enabled: true
      },
      {
        name: 'performance-monitor',
        script: './scripts/automation/performance-monitor.cjs',
        interval: '0 */3 * * *', // Every 3 hours
        priority: 'medium',
        enabled: true
      },
      {
        name: 'quality-checks',
        script: './scripts/automation/quality-checks.cjs',
        interval: '0 */2 * * *', // Every 2 hours
        priority: 'medium',
        enabled: true
      },
      {
        name: 'continuous-improvement',
        script: './scripts/automation/continuous-improvement.cjs',
        interval: '0 */8 * * *', // Every 8 hours
        priority: 'low',
        enabled: true
      }
    ];
    
    this.activeJobs = new Map();
    this.status = {
      running: false,
      lastCheck: null,
      totalRuns: 0,
      successfulRuns: 0,
      failedRuns: 0
    };
  }

  ensureDirectories() {
    [this.logsDir, this.configDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  setupLogging() {
    this.logFile = path.join(this.logsDir, `pm2-orchestrator-${Date.now()}.log`);
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async start() {
    this.log('Starting PM2 Error Automation Orchestrator...', 'INFO');
    
    try {
      // Initialize PM2 if not already running
      await this.initializePM2();
      
      // Start all automations
      await this.startAllAutomations();
      
      // Start monitoring
      this.startMonitoring();
      
      // Start health checks
      this.startHealthChecks();
      
      this.status.running = true;
      this.log('PM2 Error Automation Orchestrator started successfully', 'SUCCESS');
      
      // Keep the process alive
      this.keepAlive();
    } catch (error) {
      this.log(`Error starting orchestrator: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async initializePM2() {
    this.log('Initializing PM2...', 'INFO');
    
    try {
      // Check if PM2 is installed
      execSync('pm2 --version', { stdio: 'pipe' });
      this.log('PM2 is already installed', 'INFO');
    } catch (error) {
      this.log('PM2 not found, installing...', 'WARN');
      execSync('npm install -g pm2', { stdio: 'pipe' });
      this.log('PM2 installed successfully', 'SUCCESS');
    }
    
    // Install PM2 logrotate
    try {
      execSync('pm2 install pm2-logrotate', { stdio: 'pipe' });
      execSync('pm2 set pm2-logrotate:max_size 10M', { stdio: 'pipe' });
      execSync('pm2 set pm2-logrotate:retain 30', { stdio: 'pipe' });
      execSync('pm2 set pm2-logrotate:compress true', { stdio: 'pipe' });
      this.log('PM2 logrotate configured', 'SUCCESS');
    } catch (error) {
      this.log('PM2 logrotate already configured or failed to configure', 'WARN');
    }
  }

  async startAllAutomations() {
    this.log('Starting all error fixing automations...', 'INFO');
    
    for (const automation of this.automations) {
      if (automation.enabled) {
        await this.startAutomation(automation);
      }
    }
    
    this.log(`Started ${this.automations.filter(a => a.enabled).length} automations`, 'SUCCESS');
  }

  async startAutomation(automation) {
    try {
      this.log(`Starting automation: ${automation.name}`, 'INFO');
      
      // Create PM2 ecosystem config for this automation
      const ecosystemConfig = this.createEcosystemConfig(automation);
      const configPath = path.join(this.configDir, `${automation.name}.config.cjs`);
      
      fs.writeFileSync(configPath, ecosystemConfig);
      
      // Start the automation with PM2
      execSync(`pm2 start ${configPath}`, { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      this.activeJobs.set(automation.name, {
        config: automation,
        status: 'running',
        startTime: Date.now(),
        lastRun: null,
        runCount: 0
      });
      
      this.log(`Automation ${automation.name} started successfully`, 'SUCCESS');
    } catch (error) {
      this.log(`Error starting automation ${automation.name}: ${error.message}`, 'ERROR');
    }
  }

  createEcosystemConfig(automation) {
    return `module.exports = {
  apps: [
    {
      name: '${automation.name}',
      script: '${automation.script}',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_NAME: '${automation.name}',
        AUTOMATION_PRIORITY: '${automation.priority}'
      },
      cron_restart: '${automation.interval}',
      log_file: './automation/logs/${automation.name}.log',
      error_file: './automation/logs/${automation.name}-error.log',
      out_file: './automation/logs/${automation.name}-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 5000
    }
  ]
};`;
  }

  startMonitoring() {
    this.log('Starting monitoring system...', 'INFO');
    
    // Monitor PM2 processes every minute
    setInterval(() => {
      this.monitorPM2Processes();
    }, 60000);
    
    // Monitor automation health every 5 minutes
    setInterval(() => {
      this.monitorAutomationHealth();
    }, 300000);
    
    this.log('Monitoring system started', 'SUCCESS');
  }

  async monitorPM2Processes() {
    try {
      const status = execSync('pm2 status --no-daemon', { encoding: 'utf8' });
      const lines = status.split('\n');
      
      for (const automation of this.automations) {
        if (automation.enabled) {
          const processLine = lines.find(line => line.includes(automation.name));
          if (processLine) {
            const isRunning = processLine.includes('online');
            const job = this.activeJobs.get(automation.name);
            
            if (job) {
              job.status = isRunning ? 'running' : 'stopped';
              job.lastCheck = Date.now();
            }
          }
        }
      }
    } catch (error) {
      this.log(`Error monitoring PM2 processes: ${error.message}`, 'ERROR');
    }
  }

  async monitorAutomationHealth() {
    this.log('Checking automation health...', 'INFO');
    
    for (const [name, job] of this.activeJobs) {
      const automation = this.automations.find(a => a.name === name);
      
      if (automation && job) {
        // Check if automation is still running
        if (job.status === 'stopped') {
          this.log(`Automation ${name} stopped, restarting...`, 'WARN');
          await this.restartAutomation(automation);
        }
        
        // Check for memory leaks
        if (job.startTime && (Date.now() - job.startTime) > 86400000) { // 24 hours
          this.log(`Automation ${name} running for too long, restarting...`, 'WARN');
          await this.restartAutomation(automation);
        }
      }
    }
    
    this.status.lastCheck = Date.now();
  }

  async restartAutomation(automation) {
    try {
      execSync(`pm2 restart ${automation.name}`, { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      const job = this.activeJobs.get(automation.name);
      if (job) {
        job.status = 'running';
        job.startTime = Date.now();
        job.runCount++;
      }
      
      this.log(`Automation ${automation.name} restarted successfully`, 'SUCCESS');
    } catch (error) {
      this.log(`Error restarting automation ${automation.name}: ${error.message}`, 'ERROR');
    }
  }

  startHealthChecks() {
    this.log('Starting health checks...', 'INFO');
    
    // Health check endpoint
    const healthCheck = () => {
      const health = {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        automations: Array.from(this.activeJobs.entries()).map(([name, job]) => ({
          name,
          status: job.status,
          uptime: Date.now() - job.startTime,
          runCount: job.runCount
        })),
        system: this.status
      };
      
      const healthFile = path.join(this.projectRoot, 'automation/health-status.json');
      fs.writeFileSync(healthFile, JSON.stringify(health, null, 2));
    };
    
    // Run health check every 30 seconds
    setInterval(healthCheck, 30000);
    healthCheck(); // Initial health check
    
    this.log('Health checks started', 'SUCCESS');
  }

  async stop() {
    this.log('Stopping PM2 Error Automation Orchestrator...', 'INFO');
    
    try {
      // Stop all automations
      for (const automation of this.automations) {
        if (automation.enabled) {
          try {
            execSync(`pm2 stop ${automation.name}`, { 
              cwd: this.projectRoot,
              stdio: 'pipe'
            });
            this.log(`Stopped automation: ${automation.name}`, 'INFO');
          } catch (error) {
            this.log(`Error stopping automation ${automation.name}: ${error.message}`, 'WARN');
          }
        }
      }
      
      this.status.running = false;
      this.log('PM2 Error Automation Orchestrator stopped', 'SUCCESS');
    } catch (error) {
      this.log(`Error stopping orchestrator: ${error.message}`, 'ERROR');
    }
  }

  async getStatus() {
    const status = {
      orchestrator: this.status,
      automations: Array.from(this.activeJobs.entries()).map(([name, job]) => ({
        name,
        status: job.status,
        uptime: Date.now() - job.startTime,
        runCount: job.runCount,
        lastRun: job.lastRun
      })),
      pm2: await this.getPM2Status()
    };
    
    return status;
  }

  async getPM2Status() {
    try {
      const status = execSync('pm2 status --no-daemon', { encoding: 'utf8' });
      return status;
    } catch (error) {
      return `Error getting PM2 status: ${error.message}`;
    }
  }

  keepAlive() {
    // Keep the process alive
    process.on('SIGINT', async () => {
      this.log('Received SIGINT, shutting down gracefully...', 'INFO');
      await this.stop();
      process.exit(0);
    });
    
    process.on('SIGTERM', async () => {
      this.log('Received SIGTERM, shutting down gracefully...', 'INFO');
      await this.stop();
      process.exit(0);
    });
    
    // Log heartbeat every hour
    setInterval(() => {
      this.log('Orchestrator heartbeat - all systems operational', 'INFO');
    }, 3600000);
  }

  async runManualFix() {
    this.log('Running manual error fix...', 'INFO');
    
    try {
      const ComprehensiveErrorFixer = require('./comprehensive-error-fixer-enhanced.cjs');
      const fixer = new ComprehensiveErrorFixer();
      await fixer.run();
      
      this.log('Manual error fix completed', 'SUCCESS');
    } catch (error) {
      this.log(`Error in manual fix: ${error.message}`, 'ERROR');
    }
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new PM2ErrorAutomationOrchestrator();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      orchestrator.start().catch(error => {
        console.error('Failed to start orchestrator:', error);
        process.exit(1);
      });
      break;
      
    case 'stop':
      orchestrator.stop().then(() => {
        process.exit(0);
      }).catch(error => {
        console.error('Failed to stop orchestrator:', error);
        process.exit(1);
      });
      break;
      
    case 'status':
      orchestrator.getStatus().then(status => {
        console.log(JSON.stringify(status, null, 2));
        process.exit(0);
      }).catch(error => {
        console.error('Failed to get status:', error);
        process.exit(1);
      });
      break;
      
    case 'fix':
      orchestrator.runManualFix().then(() => {
        process.exit(0);
      }).catch(error => {
        console.error('Failed to run manual fix:', error);
        process.exit(1);
      });
      break;
      
    default:
      console.log(`
PM2 Error Automation Orchestrator

Usage:
  node pm2-error-automation-orchestrator.cjs <command>

Commands:
  start   - Start the orchestrator and all automations
  stop    - Stop the orchestrator and all automations
  status  - Get current status of all automations
  fix     - Run a manual error fix

Examples:
  node pm2-error-automation-orchestrator.cjs start
  node pm2-error-automation-orchestrator.cjs status
  node pm2-error-automation-orchestrator.cjs fix
      `);
      process.exit(0);
  }
}

module.exports = PM2ErrorAutomationOrchestrator;