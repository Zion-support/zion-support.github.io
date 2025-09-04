module.exports = {
  apps: [
    {
      name: 'error-monitor',
      script: './automation/error-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './automation/logs/error-monitor-error.log',
      out_file: './automation/logs/error-monitor-out.log',
      log_file: './automation/logs/error-monitor-combined.log',
      time: true
    },
    {
      name: 'lint-fixer',
      script: './automation/lint-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './automation/logs/lint-fixer-error.log',
      out_file: './automation/logs/lint-fixer-out.log',
      log_file: './automation/logs/lint-fixer-combined.log',
      time: true,
      cron_restart: '0 */6 * * *' // Restart every 6 hours
    },
    {
      name: 'build-monitor',
      script: './automation/build-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './automation/logs/build-monitor-error.log',
      out_file: './automation/logs/build-monitor-out.log',
      log_file: './automation/logs/build-monitor-combined.log',
      time: true,
      cron_restart: '0 */4 * * *' // Restart every 4 hours
    },
    {
      name: 'git-automation',
      script: './automation/git-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './automation/logs/git-automation-error.log',
      out_file: './automation/logs/git-automation-out.log',
      log_file: './automation/logs/git-automation-combined.log',
      time: true,
      cron_restart: '0 0 * * *' // Restart daily
    }
  ]
};