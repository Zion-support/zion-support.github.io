module.exports = {
  apps: [
    // Enhanced Error Fixing Automation - runs every 10 minutes (HIGHEST PRIORITY)
    {
      name: 'enhanced-error-fixing-automation',
      script: './scripts/automation/enhanced-error-fixing-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      },
      cron_restart: '*/10 * * * *', // Every 10 minutes
      log_file: './automation/logs/enhanced-error-fixing.log',
      error_file: './automation/logs/enhanced-error-fixing-error.log',
      out_file: './automation/logs/enhanced-error-fixing-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '10s'
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

    // ESLint Error Monitor - runs every 15 minutes
    {
      name: 'eslint-error-monitor',
      script: './scripts/automation/eslint-error-cleaner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      },
      cron_restart: '*/15 * * * *', // Every 15 minutes
      log_file: './automation/logs/eslint-monitor.log',
      error_file: './automation/logs/eslint-monitor-error.log',
      out_file: './automation/logs/eslint-monitor-out.log'
    },

    // Merge Conflict Resolver - runs every 20 minutes
    {
      name: 'merge-conflict-resolver',
      script: './scripts/automation/merge-conflict-resolver.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1200000' // 20 minutes
      },
      cron_restart: '*/20 * * * *', // Every 20 minutes
      log_file: './automation/logs/merge-conflict.log',
      error_file: './automation/logs/merge-conflict-error.log',
      out_file: './automation/logs/merge-conflict-out.log'
    },

    // Import Error Fixer - runs every 25 minutes
    {
      name: 'import-error-fixer',
      script: './scripts/automation/import-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1500000' // 25 minutes
      },
      cron_restart: '*/25 * * * *', // Every 25 minutes
      log_file: './automation/logs/import-fixer.log',
      error_file: './automation/logs/import-fixer-error.log',
      out_file: './automation/logs/import-fixer-out.log'
    },

    // File Extension Fixer - runs every 30 minutes
    {
      name: 'file-extension-fixer',
      script: './scripts/automation/file-extension-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      },
      cron_restart: '*/30 * * * *', // Every 30 minutes
      log_file: './automation/logs/extension-fixer.log',
      error_file: './automation/logs/extension-fixer-error.log',
      out_file: './automation/logs/extension-fixer-out.log'
    },

    // Master Error Coordinator - runs every hour (COORDINATES ALL ERROR FIXERS)
    {
      name: 'master-error-coordinator',
      script: './scripts/automation/master-error-coordinator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000' // 1 hour
      },
      cron_restart: '0 * * * *', // Every hour
      log_file: './automation/logs/master-coordinator.log',
      error_file: './automation/logs/master-coordinator-error.log',
      out_file: './automation/logs/master-coordinator-out.log'
    },

    // Error Prevention Monitor - runs every 2 hours
    {
      name: 'error-prevention-monitor',
      script: './scripts/automation/error-prevention-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './automation/logs/error-prevention.log',
      error_file: './automation/logs/error-prevention-error.log',
      out_file: './automation/logs/error-prevention-out.log'
    },

    // Quality Assurance Monitor - runs every 4 hours
    {
      name: 'quality-assurance-monitor',
      script: './scripts/automation/quality-checks.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '14400000' // 4 hours
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './automation/logs/quality-assurance.log',
      error_file: './automation/logs/quality-assurance-error.log',
      out_file: './automation/logs/quality-assurance-out.log'
    },

    // Build Error Detector - runs every 6 hours
    {
      name: 'build-error-detector',
      script: './scripts/automation/build-error-detector.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '21600000' // 6 hours
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: './automation/logs/build-detector.log',
      error_file: './automation/logs/build-detector-error.log',
      out_file: './automation/logs/build-detector-out.log'
    },

    // Critical Error Alert System - runs every 5 minutes (HIGH PRIORITY)
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
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem-error-fixing-automation.config.cjs --env production',
      'pre-setup': ''
    }
  }
};