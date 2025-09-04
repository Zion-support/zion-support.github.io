module.exports = {
  apps: [
    {
      name: 'error-monitor',
      script: 'automation/error-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      cron_restart: '0 */2 * * *', // Restart every 2 hours
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
      script: 'automation/build-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      cron_restart: '0 2 * * *', // Restart daily at 2 AM
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      log_file: './logs/performance-monitor.log',
      out_file: './logs/performance-monitor-out.log',
      error_file: './logs/performance-monitor-error.log'
    },
    {
      name: 'ci-cd-automation',
      script: 'automation/ci-cd-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      log_file: './logs/ci-cd.log',
      out_file: './logs/ci-cd-out.log',
      error_file: './logs/ci-cd-error.log',
      time: true
    },
    {
      name: 'continuous-improvement',
      script: 'automation/continuous-improvement.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      cron_restart: '0 */3 * * *', // Restart every 3 hours
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      log_file: './logs/continuous-improvement.log',
      out_file: './logs/continuous-improvement-out.log',
      error_file: './logs/continuous-improvement-error.log',
      time: true
    },
    {
      name: 'quality-checks',
      script: 'automation/lint-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      cron_restart: '0 */3 * * *', // Restart every 3 hours
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      log_file: './logs/quality-checks.log',
      out_file: './logs/quality-checks-out.log',
      error_file: './logs/quality-checks-error.log',
      time: true
    },
    {
      name: 'performance-monitor',
      script: 'automation/build-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      log_file: './logs/performance-monitor.log',
      out_file: './logs/performance-monitor-out.log',
      error_file: './logs/performance-monitor-error.log',
      time: true
    }
  ]
};