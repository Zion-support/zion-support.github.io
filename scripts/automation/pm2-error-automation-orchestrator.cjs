#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const { ErrorAnalyzer } = require('./error-analyzer.cjs');
const { ComprehensiveErrorFixer } = require('./comprehensive-error-fixer.cjs');

class PM2ErrorAutomationOrchestrator {
  constructor() {
    this.automations = {
      errorAnalyzer: null,
      errorFixer: null,
      typescriptFixer: null,
      eslintFixer: null,
      dependencyFixer: null,
      securityFixer: null,
      buildFixer: null,
      monitor: null
    };
    this.status = {
      isRunning: false,
      lastRun: null,
      nextRun: null,
      totalRuns: 0,
      successfulRuns: 0,
      failedRuns: 0
    };
    this.config = {
      checkInterval: parseInt(process.env.AUTOMATION_INTERVAL) || 1800000, // 30 minutes
      maxRetries: 3,
      retryDelay: 60000, // 1 minute
      enableNotifications: true,
      logLevel: process.env.LOG_LEVEL || 'info'
    };
  }

  async start() {
    console.log('🚀 Starting PM2 Error Automation Orchestrator...');
    
    try {
      // Initialize PM2 if not already running
      await this.initializePM2();
      
      // Start all automation processes
      await this.startAllAutomations();
      
      // Set up monitoring
      await this.setupMonitoring();
      
      // Start the main orchestration loop
      await this.startOrchestrationLoop();
      
      console.log('✅ PM2 Error Automation Orchestrator started successfully');
    } catch (error) {
      console.error('❌ Failed to start PM2 Error Automation Orchestrator:', error.message);
      throw error;
    }
  }

  async initializePM2() {
    console.log('🔧 Initializing PM2...');
    
    try {
      // Check if PM2 is installed and running
      execSync('pm2 --version', { stdio: 'pipe' });
      
      // Install PM2 logrotate if not already installed
      try {
        execSync('pm2 install pm2-logrotate', { stdio: 'pipe' });
        console.log('✅ PM2 logrotate installed');
      } catch (error) {
        console.log('⚠️ PM2 logrotate already installed or failed to install');
      }
      
      // Configure PM2 logrotate
      execSync('pm2 set pm2-logrotate:max_size 10M', { stdio: 'pipe' });
      execSync('pm2 set pm2-logrotate:retain 30', { stdio: 'pipe' });
      execSync('pm2 set pm2-logrotate:compress true', { stdio: 'pipe' });
      
      console.log('✅ PM2 initialized successfully');
    } catch (error) {
      console.error('❌ Failed to initialize PM2:', error.message);
      throw error;
    }
  }

  async startAllAutomations() {
    console.log('🔧 Starting all automation processes...');
    
    const automationScripts = [
      {
        name: 'error-analyzer',
        script: './scripts/automation/error-analyzer.cjs',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '512M',
        env: { NODE_ENV: 'production' }
      },
      {
        name: 'comprehensive-error-fixer',
        script: './scripts/automation/comprehensive-error-fixer.cjs',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: { NODE_ENV: 'production' }
      },
      {
        name: 'typescript-error-fixer',
        script: './scripts/automation/typescript-error-fixer.cjs',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '512M',
        env: { NODE_ENV: 'production' }
      },
      {
        name: 'eslint-error-fixer',
        script: './scripts/automation/eslint-error-cleaner.cjs',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '512M',
        env: { NODE_ENV: 'production' }
      },
      {
        name: 'dependency-fixer',
        script: './scripts/automation/smart-dependency-fixer.cjs',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '512M',
        env: { NODE_ENV: 'production' }
      },
      {
        name: 'security-fixer',
        script: './scripts/automation/security-audit.cjs',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '512M',
        env: { NODE_ENV: 'production' }
      },
      {
        name: 'build-fixer',
        script: './scripts/automation/build-error-detector.cjs',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: { NODE_ENV: 'production' }
      },
      {
        name: 'automation-monitor',
        script: './scripts/automation/automation-dashboard.cjs',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '512M',
        env: { NODE_ENV: 'production' }
      }
    ];

    for (const automation of automationScripts) {
      try {
        await this.startAutomation(automation);
      } catch (error) {
        console.error(`❌ Failed to start ${automation.name}:`, error.message);
      }
    }
  }

  async startAutomation(automation) {
    console.log(`🚀 Starting ${automation.name}...`);
    
    try {
      // Create PM2 ecosystem config for this automation
      const ecosystemConfig = {
        apps: [automation]
      };
      
      const configPath = path.join(process.cwd(), `ecosystem-${automation.name}.cjs`);
      fs.writeFileSync(configPath, `module.exports = ${JSON.stringify(ecosystemConfig, null, 2)};`);
      
      // Start the automation with PM2
      execSync(`pm2 start ${configPath}`, { stdio: 'pipe' });
      
      console.log(`✅ ${automation.name} started successfully`);
      
      // Store reference to the automation
      this.automations[automation.name.replace(/-/g, '')] = {
        name: automation.name,
        config: automation,
        status: 'running',
        startTime: new Date()
      };
      
    } catch (error) {
      console.error(`❌ Failed to start ${automation.name}:`, error.message);
      throw error;
    }
  }

  async setupMonitoring() {
    console.log('📊 Setting up monitoring...');
    
    // Start monitoring process
    this.automations.monitor = {
      name: 'automation-monitor',
      status: 'running',
      startTime: new Date()
    };
    
    // Set up periodic status checks
    setInterval(async () => {
      await this.checkAutomationStatus();
    }, 60000); // Check every minute
    
    console.log('✅ Monitoring setup completed');
  }

  async startOrchestrationLoop() {
    console.log('🔄 Starting orchestration loop...');
    
    this.status.isRunning = true;
    this.status.lastRun = new Date();
    this.status.nextRun = new Date(Date.now() + this.config.checkInterval);
    
    // Run initial error analysis and fixing
    await this.runErrorAnalysisAndFixing();
    
    // Set up periodic execution
    setInterval(async () => {
      await this.runErrorAnalysisAndFixing();
    }, this.config.checkInterval);
    
    console.log(`✅ Orchestration loop started. Next run in ${this.config.checkInterval / 1000 / 60} minutes`);
  }

  async runErrorAnalysisAndFixing() {
    console.log(`🔍 Running error analysis and fixing at ${new Date().toISOString()}`);
    
    this.status.totalRuns++;
    this.status.lastRun = new Date();
    this.status.nextRun = new Date(Date.now() + this.config.checkInterval);
    
    try {
      // Step 1: Analyze all errors
      console.log('📊 Step 1: Analyzing errors...');
      const analyzer = new ErrorAnalyzer();
      const errorReport = await analyzer.analyzeAllErrors();
      
      if (errorReport.totalErrors === 0) {
        console.log('✅ No errors found! Project is clean.');
        this.status.successfulRuns++;
        await this.saveStatus();
        return;
      }
      
      // Step 2: Apply comprehensive fixes
      console.log('🔧 Step 2: Applying comprehensive fixes...');
      const fixer = new ComprehensiveErrorFixer();
      const fixReport = await fixer.run();
      
      // Step 3: Verify fixes
      console.log('✅ Step 3: Verifying fixes...');
      const verificationReport = await analyzer.analyzeAllErrors();
      
      // Step 4: Generate summary report
      console.log('📋 Step 4: Generating summary report...');
      await this.generateSummaryReport(errorReport, fixReport, verificationReport);
      
      this.status.successfulRuns++;
      console.log('✅ Error analysis and fixing completed successfully');
      
    } catch (error) {
      console.error('❌ Error during analysis and fixing:', error.message);
      this.status.failedRuns++;
      
      // Retry logic
      if (this.status.failedRuns <= this.config.maxRetries) {
        console.log(`🔄 Retrying in ${this.config.retryDelay / 1000} seconds...`);
        setTimeout(async () => {
          await this.runErrorAnalysisAndFixing();
        }, this.config.retryDelay);
      } else {
        console.error('❌ Max retries exceeded. Stopping automation.');
        await this.stop();
      }
    }
    
    await this.saveStatus();
  }

  async checkAutomationStatus() {
    try {
      const status = execSync('pm2 status --json', { encoding: 'utf8' });
      const processes = JSON.parse(status);
      
      for (const process of processes) {
        const automationName = process.name;
        const automationKey = automationName.replace(/-/g, '');
        
        if (this.automations[automationKey]) {
          this.automations[automationKey].status = process.pm2_env.status;
          this.automations[automationKey].restarts = process.pm2_env.restart_time;
          this.automations[automationKey].memory = process.monit.memory;
          this.automations[automationKey].cpu = process.monit.cpu;
        }
      }
      
      // Check for any stopped processes and restart them
      for (const [key, automation] of Object.entries(this.automations)) {
        if (automation && automation.status === 'stopped') {
          console.log(`🔄 Restarting stopped automation: ${automation.name}`);
          execSync(`pm2 restart ${automation.name}`, { stdio: 'pipe' });
        }
      }
      
    } catch (error) {
      console.error('❌ Error checking automation status:', error.message);
    }
  }

  async generateSummaryReport(initialReport, fixReport, verificationReport) {
    const summary = {
      timestamp: new Date().toISOString(),
      initialErrors: initialReport.totalErrors,
      errorsAfterFixing: verificationReport.totalErrors,
      errorsFixed: initialReport.totalErrors - verificationReport.totalErrors,
      fixSuccessRate: ((initialReport.totalErrors - verificationReport.totalErrors) / initialReport.totalErrors * 100).toFixed(2),
      automationStatus: this.automations,
      systemStatus: this.status
    };
    
    const reportPath = path.join(process.cwd(), 'automation-summary-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(summary, null, 2));
    
    console.log(`📄 Summary report saved to: ${reportPath}`);
    console.log(`📊 Fix success rate: ${summary.fixSuccessRate}%`);
  }

  async saveStatus() {
    const statusPath = path.join(process.cwd(), 'automation-status.json');
    fs.writeFileSync(statusPath, JSON.stringify({
      status: this.status,
      automations: this.automations,
      config: this.config,
      timestamp: new Date().toISOString()
    }, null, 2));
  }

  async stop() {
    console.log('🛑 Stopping PM2 Error Automation Orchestrator...');
    
    this.status.isRunning = false;
    
    try {
      // Stop all automation processes
      for (const [key, automation] of Object.entries(this.automations)) {
        if (automation && automation.name) {
          try {
            execSync(`pm2 stop ${automation.name}`, { stdio: 'pipe' });
            console.log(`✅ Stopped ${automation.name}`);
          } catch (error) {
            console.log(`⚠️ Could not stop ${automation.name}: ${error.message}`);
          }
        }
      }
      
      await this.saveStatus();
      console.log('✅ PM2 Error Automation Orchestrator stopped successfully');
      
    } catch (error) {
      console.error('❌ Error stopping orchestrator:', error.message);
    }
  }

  async restart() {
    console.log('🔄 Restarting PM2 Error Automation Orchestrator...');
    
    await this.stop();
    await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds
    await this.start();
  }

  getStatus() {
    return {
      status: this.status,
      automations: this.automations,
      config: this.config
    };
  }
}

// Main execution
async function main() {
  const orchestrator = new PM2ErrorAutomationOrchestrator();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    console.log('🛑 Received SIGINT, shutting down gracefully...');
    await orchestrator.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    console.log('🛑 Received SIGTERM, shutting down gracefully...');
    await orchestrator.stop();
    process.exit(0);
  });
  
  try {
    await orchestrator.start();
    
    // Keep the process running
    setInterval(() => {
      // Heartbeat
      console.log(`💓 Orchestrator heartbeat: ${new Date().toISOString()}`);
    }, 300000); // Every 5 minutes
    
  } catch (error) {
    console.error('❌ Orchestrator failed:', error.message);
    process.exit(1);
  }
}

// Export for use by other modules
module.exports = { PM2ErrorAutomationOrchestrator };

// Run if called directly
if (require.main === module) {
  main();
}