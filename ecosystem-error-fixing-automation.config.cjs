module.exports = {
  apps: [
    // Enhanced Error Fixing Automation - runs every 15 minutes (HIGHEST PRIORITY)
    {
      name: 'enhanced-error-fixing-automation',
      script: './scripts/automation/enhanced-error-fixing-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      },
      cron_restart: '*/15 * * * *', // Every 15 minutes
      log_file: './automation/logs/enhanced-error-fixing.log',
      error_file: './automation/logs/enhanced-error-fixing-error.log',
      out_file: './automation/logs/enhanced-error-fixing-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '10s'
    },

    // TypeScript Error Fixer - runs every 20 minutes
    {
      name: 'typescript-error-fixer',
      script: './scripts/automation/typescript-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1200000' // 20 minutes
      },
      cron_restart: '*/20 * * * *', // Every 20 minutes
      log_file: './automation/logs/typescript-error-fixer.log',
      error_file: './automation/logs/typescript-error-fixer-error.log',
      out_file: './automation/logs/typescript-error-fixer-out.log'
    },

    // ESLint Error Fixer - runs every 25 minutes
    {
      name: 'eslint-error-fixer',
      script: './scripts/automation/eslint-error-cleaner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1500000' // 25 minutes
      },
      cron_restart: '*/25 * * * *', // Every 25 minutes
      log_file: './automation/logs/eslint-error-fixer.log',
      error_file: './automation/logs/eslint-error-fixer-error.log',
      out_file: './automation/logs/eslint-error-fixer-out.log'
    },

    // Merge Conflict Resolver - runs every 30 minutes
    {
      name: 'merge-conflict-resolver',
      script: './scripts/automation/merge-conflict-resolver.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      },
      cron_restart: '*/30 * * * *', // Every 30 minutes
      log_file: './automation/logs/merge-conflict-resolver.log',
      error_file: './automation/logs/merge-conflict-resolver-error.log',
      out_file: './automation/logs/merge-conflict-resolver-out.log'
    },

    // Configuration Error Fixer - runs every 45 minutes
    {
      name: 'config-error-fixer',
      script: './scripts/automation/config-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '2700000' // 45 minutes
      },
      cron_restart: '*/45 * * * *', // Every 45 minutes
      log_file: './automation/logs/config-error-fixer.log',
      error_file: './automation/logs/config-error-fixer-error.log',
      out_file: './automation/logs/config-error-fixer-out.log'
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
      log_file: './automation/logs/dependency-error-resolver.log',
      error_file: './automation/logs/dependency-error-resolver-error.log',
      out_file: './automation/logs/dependency-error-resolver-out.log'
    },

    // Master Error Fixer - coordinates all error fixers - runs every 2 hours
    {
      name: 'master-error-fixer',
      script: './scripts/automation/master-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './automation/logs/master-error-fixer.log',
      error_file: './automation/logs/master-error-fixer-error.log',
      out_file: './automation/logs/master-error-fixer-out.log'
    },

    // Error Prevention Monitor - runs every 3 hours
    {
      name: 'error-prevention-monitor',
      script: './scripts/automation/error-prevention-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '10800000' // 3 hours
      },
      cron_restart: '0 */3 * * *', // Every 3 hours
      log_file: './automation/logs/error-prevention-monitor.log',
      error_file: './automation/logs/error-prevention-monitor-error.log',
      out_file: './automation/logs/error-prevention-monitor-out.log'
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
      log_file: './automation/logs/critical-error-alert.log',
      error_file: './automation/logs/critical-error-alert-error.log',
      out_file: './automation/logs/critical-error-alert-out.log'
    },

    // Error Analytics Dashboard - runs every 4 hours
    {
      name: 'error-analytics-dashboard',
      script: './scripts/automation/error-analytics-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '14400000' // 4 hours
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './automation/logs/error-analytics-dashboard.log',
      error_file: './automation/logs/error-analytics-dashboard-error.log',
      out_file: './automation/logs/error-analytics-dashboard-out.log'
    },

    // Auto Recovery Manager - runs every 10 minutes
    {
      name: 'auto-recovery-manager',
      script: './scripts/automation/auto-recovery-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      },
      cron_restart: '*/10 * * * *', // Every 10 minutes
      log_file: './automation/logs/auto-recovery-manager.log',
      error_file: './automation/logs/auto-recovery-manager-error.log',
      out_file: './automation/logs/auto-recovery-manager-out.log'
    },

    // Auto Fix Scheduler - runs every 6 hours
    {
      name: 'auto-fix-scheduler',
      script: './scripts/automation/auto-fix-scheduler.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '21600000' // 6 hours
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: './automation/logs/auto-fix-scheduler.log',
      error_file: './automation/logs/auto-fix-scheduler-error.log',
      out_file: './automation/logs/auto-fix-scheduler-out.log'
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