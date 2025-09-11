module.exports = {
  apps: [
    // Main error fixing orchestrator - runs every 15 minutes
    {
      name: 'error-fixing-orchestrator',
      script: './scripts/automation/comprehensive-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      },
      cron_restart: '*/15 * * * *', // Every 15 minutes
      log_file: './logs/error-fixing-orchestrator.log',
      error_file: './logs/error-fixing-orchestrator-error.log',
      out_file: './logs/error-fixing-orchestrator-out.log'
    },

    // TypeScript error fixer - runs every 10 minutes
    {
      name: 'typescript-error-fixer',
      script: './scripts/automation/typescript-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      },
      cron_restart: '*/10 * * * *', // Every 10 minutes
      log_file: './logs/typescript-error-fixer.log',
      error_file: './logs/typescript-error-fixer-error.log',
      out_file: './logs/typescript-error-fixer-out.log'
    },

    // JSX error fixer - runs every 12 minutes
    {
      name: 'jsx-error-fixer',
      script: './scripts/automation/jsx-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '720000' // 12 minutes
      },
      cron_restart: '*/12 * * * *', // Every 12 minutes
      log_file: './logs/jsx-error-fixer.log',
      error_file: './logs/jsx-error-fixer-error.log',
      out_file: './logs/jsx-error-fixer-out.log'
    },

    // Build error fixer - runs every 20 minutes
    {
      name: 'build-error-fixer',
      script: './scripts/automation/build-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1200000' // 20 minutes
      },
      cron_restart: '*/20 * * * *', // Every 20 minutes
      log_file: './logs/build-error-fixer.log',
      error_file: './logs/build-error-fixer-error.log',
      out_file: './logs/build-error-fixer-out.log'
    },

    // Dependency error fixer - runs every 30 minutes
    {
      name: 'dependency-error-fixer',
      script: './scripts/automation/dependency-error-resolver.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      },
      cron_restart: '*/30 * * * *', // Every 30 minutes
      log_file: './logs/dependency-error-fixer.log',
      error_file: './logs/dependency-error-fixer-error.log',
      out_file: './logs/dependency-error-fixer-out.log'
    },

    // Linting error fixer - runs every 8 minutes
    {
      name: 'linting-error-fixer',
      script: './scripts/automation/eslint-error-cleaner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '480000' // 8 minutes
      },
      cron_restart: '*/8 * * * *', // Every 8 minutes
      log_file: './logs/linting-error-fixer.log',
      error_file: './logs/linting-error-fixer-error.log',
      out_file: './logs/linting-error-fixer-out.log'
    },

    // Console error fixer - runs every 5 minutes (HIGHEST PRIORITY)
    {
      name: 'console-error-fixer',
      script: './scripts/automation/console-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000' // 5 minutes
      },
      cron_restart: '*/5 * * * *', // Every 5 minutes
      log_file: './logs/console-error-fixer.log',
      error_file: './logs/console-error-fixer-error.log',
      out_file: './logs/console-error-fixer-out.log'
    },

    // Error prevention monitor - runs every 6 minutes
    {
      name: 'error-prevention-monitor',
      script: './scripts/automation/error-prevention-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '360000' // 6 minutes
      },
      cron_restart: '*/6 * * * *', // Every 6 minutes
      log_file: './logs/error-prevention-monitor.log',
      error_file: './logs/error-prevention-monitor-error.log',
      out_file: './logs/error-prevention-monitor-out.log'
    },

    // Critical error alert system - runs every 3 minutes
    {
      name: 'critical-error-alert-system',
      script: './scripts/automation/critical-error-alert-system.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '180000' // 3 minutes
      },
      cron_restart: '*/3 * * * *', // Every 3 minutes
      log_file: './logs/critical-error-alert.log',
      error_file: './logs/critical-error-alert-error.log',
      out_file: './logs/critical-error-alert-out.log'
    },

    // Error analytics dashboard - runs every 10 minutes
    {
      name: 'error-analytics-dashboard',
      script: './scripts/automation/error-analytics-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      },
      cron_restart: '*/10 * * * *', // Every 10 minutes
      log_file: './logs/error-analytics-dashboard.log',
      error_file: './logs/error-analytics-dashboard-error.log',
      out_file: './logs/error-analytics-dashboard-out.log'
    },

    // Auto recovery manager - runs every 7 minutes
    {
      name: 'auto-recovery-manager',
      script: './scripts/automation/auto-recovery-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '420000' // 7 minutes
      },
      cron_restart: '*/7 * * * *', // Every 7 minutes
      log_file: './logs/auto-recovery-manager.log',
      error_file: './logs/auto-recovery-manager-error.log',
      out_file: './logs/auto-recovery-manager-out.log'
    },

    // Error fixer automation - runs every 9 minutes
    {
      name: 'error-fixer-automation',
      script: './scripts/automation/error-fixer-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '540000' // 9 minutes
      },
      cron_restart: '*/9 * * * *', // Every 9 minutes
      log_file: './logs/error-fixer-automation.log',
      error_file: './logs/error-fixer-automation-error.log',
      out_file: './logs/error-fixer-automation-out.log'
    },

    // Enhanced error fixer - runs every 25 minutes
    {
      name: 'enhanced-error-fixer',
      script: './scripts/automation/enhanced-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1500000' // 25 minutes
      },
      cron_restart: '*/25 * * * *', // Every 25 minutes
      log_file: './logs/enhanced-error-fixer.log',
      error_file: './logs/enhanced-error-fixer-error.log',
      out_file: './logs/enhanced-error-fixer-out.log'
    },

    // Project health error fixer - runs every 18 minutes
    {
      name: 'project-health-error-fixer',
      script: './scripts/automation/enhanced-project-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1080000' // 18 minutes
      },
      cron_restart: '*/18 * * * *', // Every 18 minutes
      log_file: './logs/project-health-error-fixer.log',
      error_file: './logs/project-health-error-fixer-error.log',
      out_file: './logs/project-health-error-fixer-out.log'
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
};