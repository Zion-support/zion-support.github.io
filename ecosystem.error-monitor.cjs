module.exports = {
  apps: [
    {
      name: 'error-monitor',
      script: './scripts/error-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      error_file: './logs/error-monitor-error.log',
      out_file: './logs/error-monitor-out.log',
      log_file: './logs/error-monitor-combined.log',
      time: true
    },
    {
      name: 'lint-fixer',
      script: './scripts/lint-fixer.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      env: {
        NODE_ENV: 'production',
        LINT_FIX_ENABLED: 'true'
      },
      error_file: './logs/lint-fixer-error.log',
      out_file: './logs/lint-fixer-out.log',
      log_file: './logs/lint-fixer-combined.log',
      time: true
    },
    {
      name: 'type-checker',
      script: './scripts/type-checker.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      env: {
        NODE_ENV: 'production',
        TYPE_CHECK_ENABLED: 'true'
      },
      error_file: './logs/type-checker-error.log',
      out_file: './logs/type-checker-out.log',
      log_file: './logs/type-checker-combined.log',
      time: true
    },
    {
      name: 'build-monitor',
      script: './scripts/build-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      env: {
        NODE_ENV: 'production',
        BUILD_MONITOR_ENABLED: 'true'
      },
      error_file: './logs/build-monitor-error.log',
      out_file: './logs/build-monitor-out.log',
      log_file: './logs/build-monitor-combined.log',
      time: true
    }
  ]
};