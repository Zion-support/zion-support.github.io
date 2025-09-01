module.exports = {
  apps: [
    // Enhanced Error Detection and Fixing - runs every 15 minutes (HIGHEST PRIORITY)
    {
      name: 'enhanced-error-detection-fixer',
      script: './scripts/automation/enhanced-error-detection-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      },
      cron_restart: '*/15 * * * *', // Every 15 minutes
      log_file: './logs/enhanced-error-detection.log',
      error_file: './logs/enhanced-error-detection-error.log',
      out_file: './logs/enhanced-error-detection-out.log'
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
      log_file: './logs/typescript-error-fixer.log',
      error_file: './logs/typescript-error-fixer-error.log',
      out_file: './logs/typescript-error-fixer-out.log'
    },

    // ESLint Error Fixer - runs every 25 minutes
    {
      name: 'eslint-error-fixer',
      script: './scripts/automation/eslint-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1500000' // 25 minutes
      },
      cron_restart: '*/25 * * * *', // Every 25 minutes
      log_file: './logs/eslint-error-fixer.log',
      error_file: './logs/eslint-error-fixer-error.log',
      out_file: './logs/eslint-error-fixer-out.log'
    },

    // Build Error Fixer - runs every 30 minutes
    {
      name: 'build-error-fixer',
      script: './scripts/automation/build-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      },
      cron_restart: '*/30 * * * *', // Every 30 minutes
      log_file: './logs/build-error-fixer.log',
      error_file: './logs/build-error-fixer-error.log',
      out_file: './logs/build-error-fixer-out.log'
    },

    // Dependency Error Fixer - runs every hour
    {
      name: 'dependency-error-fixer',
      script: './scripts/automation/dependency-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000' // 1 hour
      },
      cron_restart: '0 * * * *', // Every hour
      log_file: './logs/dependency-error-fixer.log',
      error_file: './logs/dependency-error-fixer-error.log',
      out_file: './logs/dependency-error-fixer-out.log'
    },

    // Syntax Error Fixer - runs every 15 minutes
    {
      name: 'syntax-error-fixer',
      script: './scripts/automation/syntax-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      },
      cron_restart: '*/15 * * * *', // Every 15 minutes
      log_file: './logs/syntax-error-fixer.log',
      error_file: './logs/syntax-error-fixer-error.log',
      out_file: './logs/syntax-error-fixer-out.log'
    },

    // Master Error Coordinator - runs every 10 minutes (COORDINATES ALL ERROR FIXERS)
    {
      name: 'master-error-coordinator',
      script: './scripts/automation/master-error-coordinator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      },
      cron_restart: '*/10 * * * *', // Every 10 minutes
      log_file: './logs/master-error-coordinator.log',
      error_file: './logs/master-error-coordinator-error.log',
      out_file: './logs/master-error-coordinator-out.log'
    },

    // Error Prevention Monitor - runs every 5 minutes
    {
      name: 'error-prevention-monitor',
      script: './scripts/automation/error-prevention-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000' // 5 minutes
      },
      cron_restart: '*/5 * * * *', // Every 5 minutes
      log_file: './logs/error-prevention-monitor.log',
      error_file: './logs/error-prevention-monitor-error.log',
      out_file: './logs/error-prevention-monitor-out.log'
    },

    // Error Analytics Dashboard - runs every 2 hours
    {
      name: 'error-analytics-dashboard',
      script: './scripts/automation/error-analytics-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './logs/error-analytics-dashboard.log',
      error_file: './logs/error-analytics-dashboard-error.log',
      out_file: './logs/error-analytics-dashboard-out.log'
    },

    // Error Recovery Manager - runs every 30 minutes
    {
      name: 'error-recovery-manager',
      script: './scripts/automation/error-recovery-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      },
      cron_restart: '*/30 * * * *', // Every 30 minutes
      log_file: './logs/error-recovery-manager.log',
      error_file: './logs/error-recovery-manager-error.log',
      out_file: './logs/error-recovery-manager-out.log'
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
      'post-deploy': 'npm install --legacy-peer-deps && npm run build && pm2 reload ecosystem.error-automation.config.cjs --env production',
      'pre-setup': ''
    }
  }
};