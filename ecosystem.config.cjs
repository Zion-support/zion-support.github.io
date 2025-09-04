module.exports = {
  apps: [
    {
      name: 'error-monitor',
      script: 'automation/error-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      error_file: 'automation/logs/error-monitor-error.log',
      out_file: 'automation/logs/error-monitor-out.log',
      log_file: 'automation/logs/error-monitor-combined.log',
      time: true
    },
    {
      name: 'lint-automation',
      script: 'automation/lint-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      error_file: 'automation/logs/lint-automation-error.log',
      out_file: 'automation/logs/lint-automation-out.log',
      log_file: 'automation/logs/lint-automation-combined.log',
      time: true
    },
    {
      name: 'build-monitor',
      script: 'automation/build-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      cron_restart: '0 2 * * *', // Restart daily at 2 AM
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      error_file: 'automation/logs/build-monitor-error.log',
      out_file: 'automation/logs/build-monitor-out.log',
      log_file: 'automation/logs/build-monitor-combined.log',
      time: true
    },
    {
      name: 'git-automation',
      script: 'automation/git-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      cron_restart: '0 */12 * * *', // Restart every 12 hours
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      error_file: 'automation/logs/git-automation-error.log',
      out_file: 'automation/logs/git-automation-out.log',
      log_file: 'automation/logs/git-automation-combined.log',
      time: true
    }
  ]
};