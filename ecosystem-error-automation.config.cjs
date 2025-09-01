module.exports = {
  apps: [
    // Main Error Automation Orchestrator - Coordinates all error fixing activities
    {
      name: 'error-automation-orchestrator',
      script: './scripts/automation/pm2-error-automation-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_MODE: 'true'
      },
      log_file: './automation/logs/error-orchestrator.log',
      error_file: './automation/logs/error-orchestrator-error.log',
      out_file: './automation/logs/error-orchestrator-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Comprehensive Error Fixer - Runs every 2 hours
    {
      name: 'comprehensive-error-fixer',
      script: './scripts/automation/comprehensive-error-fixer-enhanced.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './automation/logs/comprehensive-error-fixer.log',
      error_file: './automation/logs/comprehensive-error-fixer-error.log',
      out_file: './automation/logs/comprehensive-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // TypeScript Error Fixer - Runs every 30 minutes
    {
      name: 'typescript-error-fixer',
      script: './scripts/automation/typescript-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      },
      cron_restart: '*/30 * * * *', // Every 30 minutes
      log_file: './automation/logs/typescript-error-fixer.log',
      error_file: './automation/logs/typescript-error-fixer-error.log',
      out_file: './automation/logs/typescript-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Build Error Monitor - Runs every hour
    {
      name: 'build-error-monitor',
      script: './scripts/automation/build-error-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000' // 1 hour
      },
      cron_restart: '0 * * * *', // Every hour
      log_file: './automation/logs/build-error-monitor.log',
      error_file: './automation/logs/build-error-monitor-error.log',
      out_file: './automation/logs/build-error-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Import/Export Error Fixer - Runs every 45 minutes
    {
      name: 'import-export-fixer',
      script: './scripts/automation/import-export-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '2700000' // 45 minutes
      },
      cron_restart: '*/45 * * * *', // Every 45 minutes
      log_file: './automation/logs/import-export-fixer.log',
      error_file: './automation/logs/import-export-fixer-error.log',
      out_file: './automation/logs/import-export-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Dependency Error Fixer - Runs twice daily
    {
      name: 'dependency-error-fixer',
      script: './scripts/automation/dependency-error-resolver.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '43200000' // 12 hours
      },
      cron_restart: '0 6,18 * * *', // At 6 AM and 6 PM
      log_file: './automation/logs/dependency-error-fixer.log',
      error_file: './automation/logs/dependency-error-fixer-error.log',
      out_file: './automation/logs/dependency-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Configuration Error Fixer - Runs every 4 hours
    {
      name: 'config-error-fixer',
      script: './scripts/automation/config-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '14400000' // 4 hours
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './automation/logs/config-error-fixer.log',
      error_file: './automation/logs/config-error-fixer-error.log',
      out_file: './automation/logs/config-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Linting Error Fixer - Runs every 20 minutes
    {
      name: 'linting-error-fixer',
      script: './scripts/automation/linting-fix-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1200000' // 20 minutes
      },
      cron_restart: '*/20 * * * *', // Every 20 minutes
      log_file: './automation/logs/linting-error-fixer.log',
      error_file: './automation/logs/linting-error-fixer-error.log',
      out_file: './automation/logs/linting-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Error Analytics Dashboard - Runs every 6 hours
    {
      name: 'error-analytics-dashboard',
      script: './scripts/automation/error-analytics-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '21600000' // 6 hours
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: './automation/logs/error-analytics-dashboard.log',
      error_file: './automation/logs/error-analytics-dashboard-error.log',
      out_file: './automation/logs/error-analytics-dashboard-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Critical Error Alert System - Runs every 10 minutes
    {
      name: 'critical-error-alert-system',
      script: './scripts/automation/critical-error-alert-system.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      },
      cron_restart: '*/10 * * * *', // Every 10 minutes
      log_file: './automation/logs/critical-error-alert.log',
      error_file: './automation/logs/critical-error-alert-error.log',
      out_file: './automation/logs/critical-error-alert-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Auto Recovery Manager - Runs every 15 minutes
    {
      name: 'auto-recovery-manager',
      script: './scripts/automation/auto-recovery-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      },
      cron_restart: '*/15 * * * *', // Every 15 minutes
      log_file: './automation/logs/auto-recovery-manager.log',
      error_file: './automation/logs/auto-recovery-manager-error.log',
      out_file: './automation/logs/auto-recovery-manager-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Error Prevention Monitor - Runs every 25 minutes
    {
      name: 'error-prevention-monitor',
      script: './scripts/automation/error-prevention-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1500000' // 25 minutes
      },
      cron_restart: '*/25 * * * *', // Every 25 minutes
      log_file: './automation/logs/error-prevention-monitor.log',
      error_file: './automation/logs/error-prevention-monitor-error.log',
      out_file: './automation/logs/error-prevention-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Auto Fix Scheduler - Runs every 5 minutes
    {
      name: 'auto-fix-scheduler',
      script: './scripts/automation/auto-fix-scheduler.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000' // 5 minutes
      },
      cron_restart: '*/5 * * * *', // Every 5 minutes
      log_file: './automation/logs/auto-fix-scheduler.log',
      error_file: './automation/logs/auto-fix-scheduler-error.log',
      out_file: './automation/logs/auto-fix-scheduler-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
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
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem-error-automation.config.cjs --env production',
      'pre-setup': ''
    }
  }
};