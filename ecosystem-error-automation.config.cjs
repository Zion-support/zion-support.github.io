module.exports = {
  apps: [
<<<<<<< HEAD
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
=======
    // Main application
    {
      name: 'zion-app',
      script: 'npm',
      args: 'start',
      cwd: './',
>>>>>>> main
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
<<<<<<< HEAD
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
=======
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },

    // Enhanced Error Detector - runs every 10 minutes (HIGHEST PRIORITY)
    {
      name: 'enhanced-error-detector',
      script: './scripts/automation/enhanced-error-detector.cjs',
>>>>>>> main
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
<<<<<<< HEAD
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
=======
        AUTOMATION_INTERVAL: '600000', // 10 minutes
      },
      cron_restart: '*/10 * * * *', // Restart every 10 minutes
      log_file: './logs/enhanced-error-detector.log',
      error_file: './logs/enhanced-error-detector-error.log',
      out_file: './logs/enhanced-error-detector-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Intelligent Error Fixer - runs every 15 minutes (HIGH PRIORITY)
    {
      name: 'intelligent-error-fixer',
      script: './scripts/automation/intelligent-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000', // 15 minutes
      },
      cron_restart: '*/15 * * * *', // Restart every 15 minutes
      log_file: './logs/intelligent-error-fixer.log',
      error_file: './logs/intelligent-error-fixer-error.log',
      out_file: './logs/intelligent-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // PM2 Error Automation Orchestrator - coordinates all error fixing (MASTER CONTROLLER)
    {
      name: 'pm2-error-automation-orchestrator',
      script: './scripts/automation/pm2-error-automation-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000', // 15 minutes
        CONTINUOUS_MODE: 'true',
      },
      cron_restart: '*/15 * * * *', // Restart every 15 minutes
      log_file: './logs/pm2-error-automation-orchestrator.log',
      error_file: './logs/pm2-error-automation-orchestrator-error.log',
      out_file: './logs/pm2-error-automation-orchestrator-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // TypeScript Error Monitor - runs every 20 minutes
    {
      name: 'typescript-error-monitor',
      script: './scripts/automation/typescript-error-monitor.cjs',
>>>>>>> main
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
<<<<<<< HEAD
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
=======
        AUTOMATION_INTERVAL: '1200000', // 20 minutes
      },
      cron_restart: '*/20 * * * *', // Restart every 20 minutes
      log_file: './logs/typescript-error-monitor.log',
      error_file: './logs/typescript-error-monitor-error.log',
      out_file: './logs/typescript-error-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Build Error Detector - runs every 25 minutes
    {
      name: 'build-error-detector',
      script: './scripts/automation/build-error-detector.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1500000', // 25 minutes
      },
      cron_restart: '*/25 * * * *', // Restart every 25 minutes
      log_file: './logs/build-error-detector.log',
      error_file: './logs/build-error-detector-error.log',
      out_file: './logs/build-error-detector-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Dependency Error Resolver - runs every 30 minutes
    {
      name: 'dependency-error-resolver',
>>>>>>> main
      script: './scripts/automation/dependency-error-resolver.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
<<<<<<< HEAD
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
=======
        AUTOMATION_INTERVAL: '1800000', // 30 minutes
      },
      cron_restart: '*/30 * * * *', // Restart every 30 minutes
      log_file: './logs/dependency-error-resolver.log',
      error_file: './logs/dependency-error-resolver-error.log',
      out_file: './logs/dependency-error-resolver-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Syntax Error Fixer - runs every 35 minutes
    {
      name: 'syntax-error-fixer',
      script: './scripts/automation/syntax-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '2100000', // 35 minutes
      },
      cron_restart: '*/35 * * * *', // Restart every 35 minutes
      log_file: './logs/syntax-error-fixer.log',
      error_file: './logs/syntax-error-fixer-error.log',
      out_file: './logs/syntax-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Error Analytics Dashboard - runs every hour
>>>>>>> main
    {
      name: 'error-analytics-dashboard',
      script: './scripts/automation/error-analytics-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
<<<<<<< HEAD
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
=======
        AUTOMATION_INTERVAL: '3600000', // 1 hour
      },
      cron_restart: '0 * * * *', // Restart every hour
      log_file: './logs/error-analytics-dashboard.log',
      error_file: './logs/error-analytics-dashboard-error.log',
      out_file: './logs/error-analytics-dashboard-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Error Prevention Monitor - runs every 2 hours
>>>>>>> main
    {
      name: 'error-prevention-monitor',
      script: './scripts/automation/error-prevention-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
<<<<<<< HEAD
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
=======
        AUTOMATION_INTERVAL: '7200000', // 2 hours
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: './logs/error-prevention-monitor.log',
      error_file: './logs/error-prevention-monitor-error.log',
      out_file: './logs/error-prevention-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Critical Error Alert System - runs every 5 minutes (URGENT)
    {
      name: 'critical-error-alert-system',
      script: './scripts/automation/critical-error-alert-system.cjs',
>>>>>>> main
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
<<<<<<< HEAD
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
=======
        AUTOMATION_INTERVAL: '300000', // 5 minutes
      },
      cron_restart: '*/5 * * * *', // Restart every 5 minutes
      log_file: './logs/critical-error-alert-system.log',
      error_file: './logs/critical-error-alert-system-error.log',
      out_file: './logs/critical-error-alert-system-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
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
        AUTOMATION_INTERVAL: '600000', // 10 minutes
      },
      cron_restart: '*/10 * * * *', // Restart every 10 minutes
      log_file: './logs/auto-recovery-manager.log',
      error_file: './logs/auto-recovery-manager-error.log',
      out_file: './logs/auto-recovery-manager-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },
  ],

  // PM2 configuration
  deploy: {
    production: {
      user: 'node',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:username/zion-app.git',
      path: '/var/www/zion-app',
      'post-deploy':
        'npm install && pm2 reload ecosystem-error-automation.config.cjs --env production',
    },
  },
};
>>>>>>> main
