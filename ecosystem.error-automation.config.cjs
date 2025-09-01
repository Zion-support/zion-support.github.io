module.exports = {
  apps: [
    // Main project error automation - runs every 30 minutes
    {
      name: 'project-error-automation',
      script: './scripts/automation/project-error-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000', // 30 minutes
      },
      cron_restart: '*/30 * * * *', // Every 30 minutes
      log_file: './automation/logs/project-error-automation.log',
      error_file: './automation/logs/project-error-automation-error.log',
      out_file: './automation/logs/project-error-automation-out.log',
    },

    // Quick error checker - runs every 15 minutes
    {
      name: 'quick-error-checker',
      script: './scripts/automation/quick-error-checker.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000', // 15 minutes
      },
      cron_restart: '*/15 * * * *', // Every 15 minutes
      log_file: './automation/logs/quick-error-checker.log',
      error_file: './automation/logs/quick-error-checker-error.log',
      out_file: './automation/logs/quick-error-checker-out.log',
    },

    // TypeScript error fixer - runs every 20 minutes
    {
      name: 'typescript-error-fixer',
      script: './scripts/automation/typescript-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1200000', // 20 minutes
      },
      cron_restart: '*/20 * * * *', // Every 20 minutes
      log_file: './automation/logs/typescript-error-fixer.log',
      error_file: './automation/logs/typescript-error-fixer-error.log',
      out_file: './automation/logs/typescript-error-fixer-out.log',
    },

    // Linting error fixer - runs every 25 minutes
    {
      name: 'linting-error-fixer',
      script: './scripts/automation/linting-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1500000', // 25 minutes
      },
      cron_restart: '*/25 * * * *', // Every 25 minutes
      log_file: './automation/logs/linting-error-fixer.log',
      error_file: './automation/logs/linting-error-fixer-error.log',
      out_file: './automation/logs/linting-error-fixer-out.log',
    },

    // Build error fixer - runs every 45 minutes
    {
      name: 'build-error-fixer',
      script: './scripts/automation/build-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '2700000', // 45 minutes
      },
      cron_restart: '*/45 * * * *', // Every 45 minutes
      log_file: './automation/logs/build-error-fixer.log',
      error_file: './automation/logs/build-error-fixer-error.log',
      out_file: './automation/logs/build-error-fixer-out.log',
    },

    // Dependency error fixer - runs every 2 hours
    {
      name: 'dependency-error-fixer',
      script: './scripts/automation/dependency-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000', // 2 hours
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './automation/logs/dependency-error-fixer.log',
      error_file: './automation/logs/dependency-error-fixer-error.log',
      out_file: './automation/logs/dependency-error-fixer-out.log',
    },

    // Syntax error fixer - runs every 10 minutes
    {
      name: 'syntax-error-fixer',
      script: './scripts/automation/syntax-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000', // 10 minutes
      },
      cron_restart: '*/10 * * * *', // Every 10 minutes
      log_file: './automation/logs/syntax-error-fixer.log',
      error_file: './automation/logs/syntax-error-fixer-error.log',
      out_file: './automation/logs/syntax-error-fixer-out.log',
    },

    // Error prevention monitor - runs every 5 minutes
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
      cron_restart: '*/5 * * * *', // Every 5 minutes
      log_file: './automation/logs/error-prevention-monitor.log',
      error_file: './automation/logs/error-prevention-monitor-error.log',
      out_file: './automation/logs/error-prevention-monitor-out.log',
    },

    // Error analytics dashboard - runs every hour
    {
      name: 'error-analytics-dashboard',
      script: './scripts/automation/error-analytics-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000', // 1 hour
      },
      cron_restart: '0 * * * *', // Every hour
      log_file: './automation/logs/error-analytics-dashboard.log',
      error_file: './automation/logs/error-analytics-dashboard-error.log',
      out_file: './automation/logs/error-analytics-dashboard-out.log',
    },

    // Master error coordinator - runs every 15 minutes
    {
      name: 'master-error-coordinator',
      script: './scripts/automation/master-error-coordinator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000', // 15 minutes
      },
      cron_restart: '*/15 * * * *', // Every 15 minutes
      log_file: './automation/logs/master-error-coordinator.log',
      error_file: './automation/logs/master-error-coordinator-error.log',
      out_file: './automation/logs/master-error-coordinator-out.log',
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
        'npm install && npm run build && pm2 reload ecosystem.error-automation.config.cjs --env production',
      'pre-setup': '',
    },
  },
};
