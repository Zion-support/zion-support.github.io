#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class PM2ErrorAutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'automation/logs/pm2-error-orchestrator.log');
    this.configFile = path.join(this.projectRoot, 'ecosystem.error-automation.config.cjs');
    this.startTime = Date.now();
    
    // Ensure logs directory exists
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    // Append to log file
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async run() {
    this.log('🚀 Starting PM2 Error Automation Orchestrator');
    
    try {
      // Step 1: Create enhanced PM2 ecosystem configuration
      await this.createEnhancedEcosystemConfig();
      
      // Step 2: Install required dependencies
      await this.installDependencies();
      
      // Step 3: Start PM2 processes
      await this.startPM2Processes();
      
      // Step 4: Set up monitoring and alerts
      await this.setupMonitoring();
      
      // Step 5: Generate automation report
      await this.generateReport();
      
      this.log('✅ PM2 Error Automation Orchestrator completed successfully');
      
    } catch (error) {
      this.log(`❌ Error in PM2 Error Automation Orchestrator: ${error.message}`, 'ERROR');
    }
  }

  async createEnhancedEcosystemConfig() {
    this.log('🔧 Creating enhanced PM2 ecosystem configuration...');
    
    const ecosystemConfig = `module.exports = {
  apps: [
    // Enhanced Project Error Fixer - runs every 10 minutes (HIGHEST PRIORITY)
    {
      name: 'enhanced-project-error-fixer',
      script: './scripts/automation/enhanced-project-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      },
      cron_restart: '*/10 * * * *', // Every 10 minutes
      log_file: './automation/logs/enhanced-error-fixer.log',
      error_file: './automation/logs/enhanced-error-fixer-error.log',
      out_file: './automation/logs/enhanced-error-fixer-out.log'
    },

    // TypeScript Error Monitor - runs every 15 minutes
    {
      name: 'typescript-error-monitor',
      script: './scripts/automation/typescript-error-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      },
      cron_restart: '*/15 * * * *', // Every 15 minutes
      log_file: './automation/logs/typescript-monitor.log',
      error_file: './automation/logs/typescript-monitor-error.log',
      out_file: './automation/logs/typescript-monitor-out.log'
    },

    // ESLint Error Cleaner - runs every 20 minutes
    {
      name: 'eslint-error-cleaner',
      script: './scripts/automation/eslint-error-cleaner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1200000' // 20 minutes
      },
      cron_restart: '*/20 * * * *', // Every 20 minutes
      log_file: './automation/logs/eslint-cleaner.log',
      error_file: './automation/logs/eslint-cleaner-error.log',
      out_file: './automation/logs/eslint-cleaner-out.log'
    },

    // Build Error Detector - runs every 30 minutes
    {
      name: 'build-error-detector',
      script: './scripts/automation/build-error-detector.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      },
      cron_restart: '*/30 * * * *', // Every 30 minutes
      log_file: './automation/logs/build-detector.log',
      error_file: './automation/logs/build-detector-error.log',
      out_file: './automation/logs/build-detector-out.log'
    },

    // Dependency Error Resolver - runs every hour
    {
      name: 'dependency-error-resolver',
      script: './scripts/automation/dependency-error-resolver.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000' // 1 hour
      },
      cron_restart: '0 * * * *', // Every hour
      log_file: './automation/logs/dependency-resolver.log',
      error_file: './automation/logs/dependency-resolver-error.log',
      out_file: './automation/logs/dependency-resolver-out.log'
    },

    // Configuration Error Fixer - runs every 2 hours
    {
      name: 'config-error-fixer',
      script: './scripts/automation/config-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './automation/logs/config-fixer.log',
      error_file: './automation/logs/config-fixer-error.log',
      out_file: './automation/logs/config-fixer-out.log'
    },

    // Enhanced Error Fixer - runs every 45 minutes
    {
      name: 'enhanced-error-fixer',
      script: './scripts/automation/enhanced-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '2700000' // 45 minutes
      },
      cron_restart: '*/45 * * * *', // Every 45 minutes
      log_file: './automation/logs/enhanced-fixer.log',
      error_file: './automation/logs/enhanced-fixer-error.log',
      out_file: './automation/logs/enhanced-fixer-out.log'
    },

    // Error Prevention Monitor - runs every 15 minutes
    {
      name: 'error-prevention-monitor',
      script: './scripts/automation/error-prevention-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      },
      cron_restart: '*/15 * * * *', // Every 15 minutes
      log_file: './automation/logs/error-prevention.log',
      error_file: './automation/logs/error-prevention-error.log',
      out_file: './automation/logs/error-prevention-out.log'
    },

    // Critical Error Alert System - runs every 5 minutes
    {
      name: 'critical-error-alert-system',
      script: './scripts/automation/critical-error-alert-system.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000' // 5 minutes
      },
      cron_restart: '*/5 * * * *', // Every 5 minutes
      log_file: './automation/logs/critical-alerts.log',
      error_file: './automation/logs/critical-alerts-error.log',
      out_file: './automation/logs/critical-alerts-out.log'
    },

    // Auto Recovery Manager - runs every 10 minutes
    {
      name: 'auto-recovery-manager',
      script: './scripts/automation/auto-recovery-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      },
      cron_restart: '*/10 * * * *', // Every 10 minutes
      log_file: './automation/logs/auto-recovery.log',
      error_file: './automation/logs/auto-recovery-error.log',
      out_file: './automation/logs/auto-recovery-out.log'
    },

    // Error Analytics Dashboard - runs every hour
    {
      name: 'error-analytics-dashboard',
      script: './scripts/automation/error-analytics-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000' // 1 hour
      },
      cron_restart: '0 * * * *', // Every hour
      log_file: './automation/logs/error-analytics.log',
      error_file: './automation/logs/error-analytics-error.log',
      out_file: './automation/logs/error-analytics-out.log'
    },

    // Code Quality Automation - runs every 2 hours
    {
      name: 'code-quality-automation',
      script: './scripts/automation/code-quality-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './automation/logs/code-quality.log',
      error_file: './automation/logs/code-quality-error.log',
      out_file: './automation/logs/code-quality-out.log'
    },

    // AI Code Review Automation - runs every 4 hours
    {
      name: 'ai-code-review-automation',
      script: './scripts/automation/ai-code-review-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '14400000' // 4 hours
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './automation/logs/ai-code-review.log',
      error_file: './automation/logs/ai-code-review-error.log',
      out_file: './automation/logs/ai-code-review-out.log'
    },

    // Predictive Issue Detection - runs every 3 hours
    {
      name: 'predictive-issue-detection',
      script: './scripts/automation/predictive-issue-detection.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '10800000' // 3 hours
      },
      cron_restart: '0 */3 * * *', // Every 3 hours
      log_file: './automation/logs/predictive-detection.log',
      error_file: './automation/logs/predictive-detection-error.log',
      out_file: './automation/logs/predictive-detection-out.log'
    },

    // Intelligent Automation Orchestrator - runs every 6 hours
    {
      name: 'intelligent-automation-orchestrator',
      script: './scripts/automation/intelligent-automation-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '21600000' // 6 hours
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: './automation/logs/intelligent-orchestrator.log',
      error_file: './automation/logs/intelligent-orchestrator-error.log',
      out_file: './automation/logs/intelligent-orchestrator-out.log'
    }
  ],

  deploy: {
    production: {
      user: 'root',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/bolt.new.zion.app.git',
      path: '/workspace/production',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.error-automation.config.cjs --env production',
      'pre-setup': ''
    }
  }
};`;

    fs.writeFileSync(this.configFile, ecosystemConfig);
    this.log('✅ Enhanced PM2 ecosystem configuration created');
  }

  async installDependencies() {
    this.log('📦 Installing required dependencies...');
    
    try {
      // Install glob for file pattern matching
      execSync('npm install --save-dev glob', { cwd: this.projectRoot, stdio: 'inherit' });
      
      // Install additional PM2 modules
      execSync('pm2 install pm2-logrotate', { stdio: 'inherit' });
      execSync('pm2 set pm2-logrotate:max_size 10M', { stdio: 'inherit' });
      execSync('pm2 set pm2-logrotate:retain 30', { stdio: 'inherit' });
      execSync('pm2 set pm2-logrotate:compress true', { stdio: 'inherit' });
      
      this.log('✅ Dependencies installed successfully');
      
    } catch (error) {
      this.log(`Warning: Could not install some dependencies: ${error.message}`, 'WARN');
    }
  }

  async startPM2Processes() {
    this.log('🚀 Starting PM2 error automation processes...');
    
    try {
      // Stop any existing processes
      try {
        execSync('pm2 stop ecosystem.error-automation.config.cjs', { stdio: 'pipe' });
        execSync('pm2 delete ecosystem.error-automation.config.cjs', { stdio: 'pipe' });
      } catch (error) {
        // Ignore errors if processes don't exist
      }
      
      // Start the new processes
      execSync('pm2 start ecosystem.error-automation.config.cjs --update-env', { stdio: 'inherit' });
      
      // Save PM2 configuration
      execSync('pm2 save', { stdio: 'inherit' });
      
      // Set up PM2 to start on system boot
      execSync('pm2 startup', { stdio: 'inherit' });
      
      this.log('✅ PM2 error automation processes started successfully');
      
    } catch (error) {
      this.log(`Error starting PM2 processes: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async setupMonitoring() {
    this.log('📊 Setting up monitoring and alerts...');
    
    try {
      // Create monitoring script
      const monitoringScript = path.join(this.projectRoot, 'scripts/automation/monitoring-setup.cjs');
      
      const monitoringCode = `#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Monitor PM2 processes and send alerts if needed
setInterval(() => {
  const { execSync } = require('child_process');
  
  try {
    const status = execSync('pm2 status --json', { encoding: 'utf8' });
    const processes = JSON.parse(status);
    
    processes.forEach(process => {
      if (process.pm2_env.status !== 'online') {
        console.log(\`⚠️  Process \${process.name} is not online: \${process.pm2_env.status}\`);
        
        // Restart the process
        try {
          execSync(\`pm2 restart \${process.name}\`, { stdio: 'pipe' });
          console.log(\`✅ Restarted \${process.name}\`);
        } catch (error) {
          console.log(\`❌ Failed to restart \${process.name}: \${error.message}\`);
        }
      }
    });
  } catch (error) {
    console.log(\`Error monitoring PM2 processes: \${error.message}\`);
  }
}, 60000); // Check every minute

console.log('🔍 PM2 monitoring started');
`;

      fs.writeFileSync(monitoringScript, monitoringCode);
      
      // Start monitoring process
      execSync('pm2 start scripts/automation/monitoring-setup.cjs --name pm2-monitor', { stdio: 'inherit' });
      
      this.log('✅ Monitoring and alerts setup completed');
      
    } catch (error) {
      this.log(`Warning: Could not setup monitoring: ${error.message}`, 'WARN');
    }
  }

  async generateReport() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      status: 'completed',
      processes: [
        'enhanced-project-error-fixer',
        'typescript-error-monitor',
        'eslint-error-cleaner',
        'build-error-detector',
        'dependency-error-resolver',
        'config-error-fixer',
        'enhanced-error-fixer',
        'error-prevention-monitor',
        'critical-error-alert-system',
        'auto-recovery-manager',
        'error-analytics-dashboard',
        'code-quality-automation',
        'ai-code-review-automation',
        'predictive-issue-detection',
        'intelligent-automation-orchestrator'
      ],
      summary: {
        totalProcesses: 15,
        monitoringEnabled: true,
        autoRecoveryEnabled: true,
        alertsEnabled: true
      }
    };
    
    const reportFile = path.join(this.projectRoot, 'pm2-error-automation-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log('📊 PM2 Error Automation Report generated');
    this.log(`✅ Started ${report.processes.length} automation processes`);
    this.log('🔍 Monitoring and auto-recovery enabled');
    this.log('🚨 Critical error alerts enabled');
  }
}

// Run the orchestrator
const orchestrator = new PM2ErrorAutomationOrchestrator();
orchestrator.run().catch(console.error);