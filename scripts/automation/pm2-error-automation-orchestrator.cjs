#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const cron = require('node-cron');

class PM2ErrorAutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'automation/logs');
    this.reportsDir = path.join(this.projectRoot, 'automation/reports');
    this.config = this.loadConfig();
    this.isRunning = false;
    this.scheduledJobs = [];
    
    // Ensure directories exist
    this.ensureDirectories();
  }

  ensureDirectories() {
    [this.logsDir, this.reportsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  loadConfig() {
    const configPath = path.join(this.projectRoot, 'automation-config.json');
    if (fs.existsSync(configPath)) {
      return JSON.parse(fs.readFileSync(configPath, 'utf8'));
    }
    
    // Default configuration
    return {
      errorCheckInterval: '*/15 * * * *', // Every 15 minutes
      comprehensiveFixInterval: '0 */2 * * *', // Every 2 hours
      typeScriptFixInterval: '*/30 * * * *', // Every 30 minutes
      buildCheckInterval: '0 */1 * * *', // Every hour
      dependencyCheckInterval: '0 6,18 * * *', // Twice daily
      securityCheckInterval: '0 3,15 * * *', // Twice daily
      performanceCheckInterval: '0 */4 * * *', // Every 4 hours
      maxConcurrentJobs: 3,
      enableNotifications: true,
      logLevel: 'info'
    };
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    console.log(logMessage);
    
    // Write to log file
    const logFile = path.join(this.logsDir, `orchestrator-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async start() {
    if (this.isRunning) {
      this.log('Orchestrator is already running', 'warn');
      return;
    }

    this.log('Starting PM2 Error Automation Orchestrator...', 'info');
    this.isRunning = true;

    try {
      // Initialize PM2 if not already running
      await this.initializePM2();
      
      // Start scheduled jobs
      await this.startScheduledJobs();
      
      // Start monitoring
      await this.startMonitoring();
      
      this.log('PM2 Error Automation Orchestrator started successfully', 'success');
      
      // Keep the process running
      this.keepAlive();
    } catch (error) {
      this.log(`Error starting orchestrator: ${error.message}`, 'error');
      this.isRunning = false;
      process.exit(1);
    }
  }

  async initializePM2() {
    this.log('Initializing PM2...', 'info');
    
    try {
      // Check if PM2 is installed
      execSync('pm2 --version', { stdio: 'pipe' });
      this.log('PM2 is installed', 'info');
    } catch (error) {
      this.log('PM2 not found, installing...', 'info');
      execSync('npm install -g pm2', { stdio: 'inherit' });
    }

    // Install PM2 logrotate module
    try {
      execSync('pm2 install pm2-logrotate', { stdio: 'pipe' });
      execSync('pm2 set pm2-logrotate:max_size 10M', { stdio: 'pipe' });
      execSync('pm2 set pm2-logrotate:retain 30', { stdio: 'pipe' });
      execSync('pm2 set pm2-logrotate:compress true', { stdio: 'pipe' });
      this.log('PM2 logrotate configured', 'info');
    } catch (error) {
      this.log('PM2 logrotate already configured or failed to configure', 'warn');
    }
  }

  async startScheduledJobs() {
    this.log('Starting scheduled jobs...', 'info');

    // Error checking job (every 15 minutes)
    this.scheduleJob('error-checker', this.config.errorCheckInterval, () => {
      this.runErrorChecker();
    });

    // Comprehensive error fixing job (every 2 hours)
    this.scheduleJob('comprehensive-fixer', this.config.comprehensiveFixInterval, () => {
      this.runComprehensiveErrorFixer();
    });

    // TypeScript error fixing job (every 30 minutes)
    this.scheduleJob('typescript-fixer', this.config.typeScriptFixInterval, () => {
      this.runTypeScriptErrorFixer();
    });

    // Build checking job (every hour)
    this.scheduleJob('build-checker', this.config.buildCheckInterval, () => {
      this.runBuildChecker();
    });

    // Dependency checking job (twice daily)
    this.scheduleJob('dependency-checker', this.config.dependencyCheckInterval, () => {
      this.runDependencyChecker();
    });

    // Security checking job (twice daily)
    this.scheduleJob('security-checker', this.config.securityCheckInterval, () => {
      this.runSecurityChecker();
    });

    // Performance checking job (every 4 hours)
    this.scheduleJob('performance-checker', this.config.performanceCheckInterval, () => {
      this.runPerformanceChecker();
    });

    this.log(`Started ${this.scheduledJobs.length} scheduled jobs`, 'info');
  }

  scheduleJob(name, schedule, task) {
    const job = cron.schedule(schedule, async () => {
      this.log(`Running scheduled job: ${name}`, 'info');
      try {
        await task();
        this.log(`Completed scheduled job: ${name}`, 'success');
      } catch (error) {
        this.log(`Error in scheduled job ${name}: ${error.message}`, 'error');
      }
    }, {
      scheduled: true,
      timezone: "UTC"
    });

    this.scheduledJobs.push({ name, job, schedule });
    this.log(`Scheduled job: ${name} with schedule: ${schedule}`, 'info');
  }

  async runErrorChecker() {
    this.log('Running error checker...', 'info');
    
    try {
      // Check for TypeScript errors
      const typeCheckResult = await this.runCommand('npm run type-check');
      
      // Check for build errors
      const buildResult = await this.runCommand('npm run build');
      
      // Check for linting errors
      const lintResult = await this.runCommand('npm run lint');
      
      const report = {
        timestamp: new Date().toISOString(),
        typeCheck: typeCheckResult.success,
        build: buildResult.success,
        lint: lintResult.success,
        errors: {
          typeScript: typeCheckResult.output,
          build: buildResult.output,
          lint: lintResult.output
        }
      };

      this.saveReport('error-check', report);
      
      if (!typeCheckResult.success || !buildResult.success || !lintResult.success) {
        this.log('Errors detected, triggering comprehensive fixer', 'warn');
        await this.runComprehensiveErrorFixer();
      }
    } catch (error) {
      this.log(`Error in error checker: ${error.message}`, 'error');
    }
  }

  async runComprehensiveErrorFixer() {
    this.log('Running comprehensive error fixer...', 'info');
    
    try {
      const scriptPath = path.join(this.projectRoot, 'scripts/automation/comprehensive-error-fixer-enhanced.cjs');
      const result = await this.runCommand(`node ${scriptPath}`);
      
      const report = {
        timestamp: new Date().toISOString(),
        success: result.success,
        output: result.output
      };

      this.saveReport('comprehensive-fix', report);
      
      if (result.success) {
        this.log('Comprehensive error fixer completed successfully', 'success');
      } else {
        this.log('Comprehensive error fixer encountered issues', 'warn');
      }
    } catch (error) {
      this.log(`Error in comprehensive error fixer: ${error.message}`, 'error');
    }
  }

  async runTypeScriptErrorFixer() {
    this.log('Running TypeScript error fixer...', 'info');
    
    try {
      const scriptPath = path.join(this.projectRoot, 'scripts/automation/typescript-error-fixer.cjs');
      const result = await this.runCommand(`node ${scriptPath}`);
      
      const report = {
        timestamp: new Date().toISOString(),
        success: result.success,
        output: result.output
      };

      this.saveReport('typescript-fix', report);
    } catch (error) {
      this.log(`Error in TypeScript error fixer: ${error.message}`, 'error');
    }
  }

  async runBuildChecker() {
    this.log('Running build checker...', 'info');
    
    try {
      const result = await this.runCommand('npm run build');
      
      const report = {
        timestamp: new Date().toISOString(),
        success: result.success,
        output: result.output
      };

      this.saveReport('build-check', report);
      
      if (!result.success) {
        this.log('Build failed, triggering error fixer', 'warn');
        await this.runComprehensiveErrorFixer();
      }
    } catch (error) {
      this.log(`Error in build checker: ${error.message}`, 'error');
    }
  }

  async runDependencyChecker() {
    this.log('Running dependency checker...', 'info');
    
    try {
      // Check for outdated dependencies
      const outdatedResult = await this.runCommand('npm outdated --json');
      
      // Check for security vulnerabilities
      const auditResult = await this.runCommand('npm audit --json');
      
      const report = {
        timestamp: new Date().toISOString(),
        outdated: outdatedResult.output,
        audit: auditResult.output
      };

      this.saveReport('dependency-check', report);
      
      // If there are issues, run the dependency fixer
      if (outdatedResult.success && outdatedResult.output) {
        const outdated = JSON.parse(outdatedResult.output);
        if (Object.keys(outdated).length > 0) {
          this.log('Outdated dependencies found, running fixer', 'warn');
          await this.runDependencyFixer();
        }
      }
    } catch (error) {
      this.log(`Error in dependency checker: ${error.message}`, 'error');
    }
  }

  async runDependencyFixer() {
    this.log('Running dependency fixer...', 'info');
    
    try {
      // Update dependencies
      await this.runCommand('npm update');
      
      // Fix security vulnerabilities
      await this.runCommand('npm audit fix');
      
      this.log('Dependency fixer completed', 'success');
    } catch (error) {
      this.log(`Error in dependency fixer: ${error.message}`, 'error');
    }
  }

  async runSecurityChecker() {
    this.log('Running security checker...', 'info');
    
    try {
      const scriptPath = path.join(this.projectRoot, 'scripts/automation/security-audit.cjs');
      const result = await this.runCommand(`node ${scriptPath}`);
      
      const report = {
        timestamp: new Date().toISOString(),
        success: result.success,
        output: result.output
      };

      this.saveReport('security-check', report);
    } catch (error) {
      this.log(`Error in security checker: ${error.message}`, 'error');
    }
  }

  async runPerformanceChecker() {
    this.log('Running performance checker...', 'info');
    
    try {
      const scriptPath = path.join(this.projectRoot, 'scripts/automation/performance-monitor.cjs');
      const result = await this.runCommand(`node ${scriptPath}`);
      
      const report = {
        timestamp: new Date().toISOString(),
        success: result.success,
        output: result.output
      };

      this.saveReport('performance-check', report);
    } catch (error) {
      this.log(`Error in performance checker: ${error.message}`, 'error');
    }
  }

  async runCommand(command) {
    return new Promise((resolve) => {
      try {
        const output = execSync(command, { 
          cwd: this.projectRoot, 
          encoding: 'utf8',
          stdio: 'pipe',
          timeout: 300000 // 5 minutes
        });
        resolve({ success: true, output });
      } catch (error) {
        resolve({ 
          success: false, 
          output: error.stdout || error.stderr || error.message 
        });
      }
    });
  }

  saveReport(type, data) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportFile = path.join(this.reportsDir, `${type}-${timestamp}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(data, null, 2));
    this.log(`Report saved: ${reportFile}`, 'info');
  }

  async startMonitoring() {
    this.log('Starting monitoring...', 'info');
    
    // Monitor PM2 processes
    setInterval(async () => {
      try {
        const pm2Status = execSync('pm2 status --json', { encoding: 'utf8' });
        const status = JSON.parse(pm2Status);
        
        // Check for any stopped processes
        const stoppedProcesses = status.filter(proc => proc.pm2_env.status === 'stopped');
        if (stoppedProcesses.length > 0) {
          this.log(`Found ${stoppedProcesses.length} stopped PM2 processes, restarting...`, 'warn');
          execSync('pm2 restart all', { stdio: 'inherit' });
        }
      } catch (error) {
        this.log(`Error monitoring PM2: ${error.message}`, 'error');
      }
    }, 60000); // Check every minute
  }

  keepAlive() {
    // Keep the process running
    process.on('SIGINT', () => {
      this.log('Received SIGINT, shutting down gracefully...', 'info');
      this.stop();
    });

    process.on('SIGTERM', () => {
      this.log('Received SIGTERM, shutting down gracefully...', 'info');
      this.stop();
    });
  }

  stop() {
    this.log('Stopping PM2 Error Automation Orchestrator...', 'info');
    
    // Stop all scheduled jobs
    this.scheduledJobs.forEach(({ name, job }) => {
      job.stop();
      this.log(`Stopped scheduled job: ${name}`, 'info');
    });
    
    this.isRunning = false;
    this.log('PM2 Error Automation Orchestrator stopped', 'info');
    process.exit(0);
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      scheduledJobs: this.scheduledJobs.map(({ name, schedule }) => ({ name, schedule })),
      config: this.config
    };
  }
}

// Export the class
module.exports = PM2ErrorAutomationOrchestrator;

// If run directly, start the orchestrator
if (require.main === module) {
  const orchestrator = new PM2ErrorAutomationOrchestrator();
  orchestrator.start().catch(console.error);
}