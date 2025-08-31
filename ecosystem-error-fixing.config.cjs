module.exports = {
  apps: [
    // 🚨 Comprehensive Error Fixer - Main error fixing automation
    {
      name: 'comprehensive-error-fixer',
      script: './scripts/automation/comprehensive-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: './.pm2'
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './logs/comprehensive-error-fixer.log',
      error_file: './logs/comprehensive-error-fixer-error.log',
      out_file: './logs/comprehensive-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🔧 TypeScript Error Monitor - Real-time TypeScript error detection
    {
      name: 'typescript-error-monitor',
      script: './scripts/automation/typescript-error-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: './.pm2'
      },
      cron_restart: '*/15 * * * *', // Every 15 minutes
      log_file: './logs/typescript-error-monitor.log',
      error_file: './logs/typescript-error-monitor-error.log',
      out_file: './logs/typescript-error-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🧹 ESLint Error Cleaner - Continuous ESLint error fixing
    {
      name: 'eslint-error-cleaner',
      script: './scripts/automation/eslint-error-cleaner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: './.pm2'
      },
      cron_restart: '*/20 * * * *', // Every 20 minutes
      log_file: './logs/eslint-error-cleaner.log',
      error_file: './logs/eslint-error-cleaner-error.log',
      out_file: './logs/eslint-error-cleaner-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🔍 Build Error Detector - Prevents build failures
    {
      name: 'build-error-detector',
      script: './scripts/automation/build-error-detector.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: './.pm2'
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './logs/build-error-detector.log',
      error_file: './logs/build-error-detector-error.log',
      out_file: './logs/build-error-detector-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🚨 Dependency Error Resolver - Fixes dependency conflicts
    {
      name: 'dependency-error-resolver',
      script: './scripts/automation/dependency-error-resolver.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: './.pm2'
      },
      cron_restart: '0 6 * * *', // Daily at 6 AM
      log_file: './logs/dependency-error-resolver.log',
      error_file: './logs/dependency-error-resolver-error.log',
      out_file: './logs/dependency-error-resolver-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🔧 Configuration Error Fixer - Fixes config file issues
    {
      name: 'config-error-fixer',
      script: './scripts/automation/config-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: './.pm2'
      },
      cron_restart: '0 12 * * *', // Daily at noon
      log_file: './logs/config-error-fixer.log',
      error_file: './logs/config-error-fixer-error.log',
      out_file: './logs/config-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🚨 Error Prevention Monitor - Proactive error prevention
    {
      name: 'error-prevention-monitor',
      script: './scripts/automation/error-prevention-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: './.pm2'
      },
      cron_restart: '*/10 * * * *', // Every 10 minutes
      log_file: './logs/error-prevention-monitor.log',
      error_file: './logs/error-prevention-monitor-error.log',
      out_file: './logs/error-prevention-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 📊 Error Analytics Dashboard - Error reporting and analytics
    {
      name: 'error-analytics-dashboard',
      script: './scripts/automation/error-analytics-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: './.pm2',
        PORT: 3001
      },
      cron_restart: '0 0 * * *', // Daily at midnight
      log_file: './logs/error-analytics-dashboard.log',
      error_file: './logs/error-analytics-dashboard-error.log',
      out_file: './logs/error-analytics-dashboard-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🔄 Auto-Recovery Manager - Automatically recovers from errors
    {
      name: 'auto-recovery-manager',
      script: './scripts/automation/auto-recovery-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: './.pm2'
      },
      cron_restart: '*/5 * * * *', // Every 5 minutes
      log_file: './logs/auto-recovery-manager.log',
      error_file: './logs/auto-recovery-manager-error.log',
      out_file: './logs/auto-recovery-manager-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🚨 Critical Error Alert System - Notifies about critical errors
    {
      name: 'critical-error-alert-system',
      script: './scripts/automation/critical-error-alert-system.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: './.pm2'
      },
      cron_restart: '*/1 * * * *', // Every minute
      log_file: './logs/critical-error-alert-system.log',
      error_file: './logs/critical-error-alert-system-error.log',
      out_file: './logs/critical-error-alert-system-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    }
  ],

  deploy: {
    production: {
      user: 'node',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:username/repo.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem-error-fixing.config.cjs --env production'
    }
  }
};