module.exports = {
  apps: [
    // Error Fixing Automation
    {
      name: 'console-error-fixer',
      script: 'scripts/error-fixer.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      error_file: 'logs/console-error-fixer-error.log',
      out_file: 'logs/console-error-fixer-out.log',
      log_file: 'logs/console-error-fixer-combined.log',
      time: true
    },

    // Linting Automation
    {
      name: 'lint-automation',
      script: 'scripts/lint-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      error_file: 'logs/lint-automation-error.log',
      out_file: 'logs/lint-automation-out.log',
      log_file: 'logs/lint-automation-combined.log',
      time: true
    },

    // Type Checking Automation
    {
      name: 'type-check-automation',
      script: 'scripts/type-check-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      cron_restart: '0 */8 * * *', // Restart every 8 hours
      error_file: 'logs/type-check-automation-error.log',
      out_file: 'logs/type-check-automation-out.log',
      log_file: 'logs/type-check-automation-combined.log',
      time: true
    },

    // Code Quality Automation
    {
      name: 'code-quality-automation',
      script: 'scripts/code-quality-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      cron_restart: '0 */12 * * *', // Restart every 12 hours
      error_file: 'logs/code-quality-automation-error.log',
      out_file: 'logs/code-quality-automation-out.log',
      log_file: 'logs/code-quality-automation-combined.log',
      time: true
    },

    // Dependency Management Automation
    {
      name: 'dependency-automation',
      script: 'scripts/dependency-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      cron_restart: '0 2 * * *', // Restart daily at 2 AM
      error_file: 'logs/dependency-automation-error.log',
      out_file: 'logs/dependency-automation-out.log',
      log_file: 'logs/dependency-automation-combined.log',
      time: true
    },

    // Security Audit Automation
    {
      name: 'security-audit-automation',
      script: 'scripts/security-audit-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      cron_restart: '0 3 * * 0', // Restart weekly on Sunday at 3 AM
      error_file: 'logs/security-audit-automation-error.log',
      out_file: 'logs/security-audit-automation-out.log',
      log_file: 'logs/security-audit-automation-combined.log',
      time: true
    },

    // Performance Monitoring Automation
    {
      name: 'performance-monitor-automation',
      script: 'scripts/performance-monitor-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      error_file: 'logs/performance-monitor-automation-error.log',
      out_file: 'logs/performance-monitor-automation-out.log',
      log_file: 'logs/performance-monitor-automation-combined.log',
      time: true
    },

    // Build Health Automation
    {
      name: 'build-health-automation',
      script: 'scripts/build-health-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      error_file: 'logs/build-health-automation-error.log',
      out_file: 'logs/build-health-automation-out.log',
      log_file: 'logs/build-health-automation-combined.log',
      time: true
    },

    // File Cleanup Automation
    {
      name: 'file-cleanup-automation',
      script: 'scripts/file-cleanup-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      cron_restart: '0 4 * * *', // Restart daily at 4 AM
      error_file: 'logs/file-cleanup-automation-error.log',
      out_file: 'logs/file-cleanup-automation-out.log',
      log_file: 'logs/file-cleanup-automation-combined.log',
      time: true
    },

    // Continuous Integration Automation
    {
      name: 'ci-automation',
      script: 'scripts/ci-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      cron_restart: '0 */1 * * *', // Restart every hour
      error_file: 'logs/ci-automation-error.log',
      out_file: 'logs/ci-automation-out.log',
      log_file: 'logs/ci-automation-combined.log',
      time: true
    }
  ],

  deploy: {
    production: {
      user: 'node',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:username/repo.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.cjs --env production'
    }
  }
};