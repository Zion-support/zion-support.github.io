module.exports = {
  apps: [
    // Enhanced Error Fixing Automation - Main error fixer
    {
      name: 'enhanced-error-fixing-automation',
      script: './scripts/automation/enhanced-error-fixing-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',

        AUTOMATION_INTERVAL: '900000', // 15 minutes
        ENABLE_AUTO_FIX: 'true',
        ENABLE_TYPE_CHECK: 'true',
        ENABLE_LINT_FIX: 'true',
        LOG_LEVEL: 'info',
      },
      cron_restart: '*/15 * * * *', // Restart every 15 minutes
      log_file: './automation/logs/enhanced-error-fixing.log',
      error_file: './automation/logs/enhanced-error-fixing-error.log',
      out_file: './automation/logs/enhanced-error-fixing-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // TypeScript Error Fixer - Specialized TypeScript fixes
    {
      name: 'typescript-error-fixer',
      script: './scripts/automation/typescript-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',

        AUTOMATION_INTERVAL: '1800000', // 30 minutes
      },
      cron_restart: '*/30 * * * *', // Restart every 30 minutes
      log_file: './automation/logs/typescript-error-fixer.log',
      error_file: './automation/logs/typescript-error-fixer-error.log',
      out_file: './automation/logs/typescript-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // ESLint Error Fixer - Linting fixes
    {
      name: 'eslint-error-fixer',
      script: './scripts/automation/eslint-error-cleaner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',

        AUTOMATION_INTERVAL: '1200000', // 20 minutes
      },
      cron_restart: '*/20 * * * *', // Restart every 20 minutes
      log_file: './automation/logs/eslint-error-fixer.log',
      error_file: './automation/logs/eslint-error-fixer-error.log',
      out_file: './automation/logs/eslint-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Comprehensive Error Fixer - General error fixes
    {
      name: 'comprehensive-error-fixer',
      script: './scripts/automation/comprehensive-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '2400000', // 40 minutes
      },
      cron_restart: '*/40 * * * *', // Restart every 40 minutes
      log_file: './automation/logs/comprehensive-error-fixer.log',
      error_file: './automation/logs/comprehensive-error-fixer-error.log',
      out_file: './automation/logs/comprehensive-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // JSX Error Fixer - JSX-specific fixes
    {
      name: 'jsx-error-fixer',
      script: './scripts/automation/jsx-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000', // 30 minutes
      },
      cron_restart: '*/30 * * * *', // Restart every 30 minutes
      log_file: './automation/logs/jsx-error-fixer.log',
      error_file: './automation/logs/jsx-error-fixer-error.log',
      out_file: './automation/logs/jsx-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Master Error Fixer - Coordinates all error fixers
    {
      name: 'master-error-fixer',
      script: './scripts/automation/master-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000', // 1 hour
      },
      cron_restart: '0 * * * *', // Restart every hour
      log_file: './automation/logs/master-error-fixer.log',
      error_file: './automation/logs/master-error-fixer-error.log',
      out_file: './automation/logs/master-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Console Error Fixer - Fixes console statements
    {
      name: 'console-error-fixer',
      script: './scripts/automation/console-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000', // 15 minutes
      },
      cron_restart: '*/15 * * * *', // Restart every 15 minutes
      log_file: './automation/logs/console-error-fixer.log',
      error_file: './automation/logs/console-error-fixer-error.log',
      out_file: './automation/logs/console-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Build Error Detector - Monitors build errors
    {
      name: 'build-error-detector',
      script: './scripts/automation/build-error-detector.cjs',
      instances: 1,
      autorestart: true,
      watch: false,

      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000', // 10 minutes
      },
      cron_restart: '*/10 * * * *', // Restart every 10 minutes
      log_file: './automation/logs/build-error-detector.log',
      error_file: './automation/logs/build-error-detector-error.log',
      out_file: './automation/logs/build-error-detector-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Error Analytics Dashboard - Monitors error fixing progress
    {
      name: 'error-analytics-dashboard',
      script: './scripts/automation/error-analytics-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',

        AUTOMATION_INTERVAL: '300000', // 5 minutes
      },
      cron_restart: '*/5 * * * *', // Restart every 5 minutes
      log_file: './automation/logs/error-analytics-dashboard.log',
      error_file: './automation/logs/error-analytics-dashboard-error.log',
      out_file: './automation/logs/error-analytics-dashboard-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Error Prevention Monitor - Prevents new errors
    {
      name: 'error-prevention-monitor',
      script: './scripts/automation/error-prevention-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000', // 5 minutes
      },
      cron_restart: '*/5 * * * *', // Restart every 5 minutes
      log_file: './automation/logs/error-prevention-monitor.log',
      error_file: './automation/logs/error-prevention-monitor-error.log',
      out_file: './automation/logs/error-prevention-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Critical Error Alert System - Alerts on critical errors
    {
      name: 'critical-error-alert-system',
      script: './scripts/automation/critical-error-alert-system.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '60000', // 1 minute
      },
      cron_restart: '* * * * *', // Restart every minute
      log_file: './automation/logs/critical-error-alert-system.log',
      error_file: './automation/logs/critical-error-alert-system-error.log',
      out_file: './automation/logs/critical-error-alert-system-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Auto Recovery Manager - Handles recovery from failures
    {
      name: 'auto-recovery-manager',
      script: './scripts/automation/auto-recovery-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',

        AUTOMATION_INTERVAL: '120000', // 2 minutes
      },
      cron_restart: '*/2 * * * *', // Restart every 2 minutes
      log_file: './automation/logs/auto-recovery-manager.log',
      error_file: './automation/logs/auto-recovery-manager-error.log',
      out_file: './automation/logs/auto-recovery-manager-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },
  ],

  deploy: {
    production: {
      user: 'root',
      host: 'localhost',
      ref: 'origin/main',

      repo: 'git@github.com:your-username/bolt.new.zion.app.git',
      path: '/workspace/production',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && npm run build && pm2 reload ecosystem-error-fixing.config.cjs --env production',
      'pre-setup': '',
    },
  },
};
