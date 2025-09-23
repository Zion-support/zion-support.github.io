module.exports = {
  apps: [
    {
      name: 'error-fixer',
      script: 'automation/error-fixer-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info',
      },
      error_file: 'automation/logs/error-fixer-error.log',
      out_file: 'automation/logs/error-fixer-out.log',
      log_file: 'automation/logs/error-fixer-combined.log',
      time: true,
    },
    {
      name: 'lint-fixer',
      script: 'automation/lint-fixer-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      cron_restart: '0 */1 * * *', // Restart every hour
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info',
      },
      error_file: 'automation/logs/lint-fixer-error.log',
      out_file: 'automation/logs/lint-fixer-out.log',
      log_file: 'automation/logs/lint-fixer-combined.log',
      time: true,
    },
    {
      name: 'syntax-fixer',
      script: 'automation/syntax-fixer-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      cron_restart: '0 */3 * * *', // Restart every 3 hours
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info',
      },
      error_file: 'automation/logs/syntax-fixer-error.log',
      out_file: 'automation/logs/syntax-fixer-out.log',
      log_file: 'automation/logs/syntax-fixer-combined.log',
      time: true,
    },
    {
      name: 'build-monitor',
      script: 'automation/build-monitor-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info',
      },
      error_file: 'automation/logs/build-monitor-error.log',
      out_file: 'automation/logs/build-monitor-out.log',
      log_file: 'automation/logs/build-monitor-combined.log',
      time: true,
    },
    {
      name: 'git-automation',
      script: 'automation/git-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info',
      },
      error_file: 'automation/logs/git-automation-error.log',
      out_file: 'automation/logs/git-automation-out.log',
      log_file: 'automation/logs/git-automation-combined.log',
      time: true,
    },
  ],
};
