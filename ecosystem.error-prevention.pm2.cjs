module.exports = {
  apps: [
    {
      name: 'error-prevention-monitor',
      script: 'automation/error-prevention-monitor.cjs',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      autorestart: true,
      max_restarts: 5,
      min_uptime: '10s',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      error_file: 'automation/logs/error-prevention-error.log',
      out_file: 'automation/logs/error-prevention-out.log',
      log_file: 'automation/logs/error-prevention-combined.log',
      time: true,
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      max_memory_restart: '1G'
    },
    {
      name: 'linting-automation',
      script: 'automation/linting-automation.cjs',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      autorestart: true,
      max_restarts: 3,
      min_uptime: '30s',
      env: {
        NODE_ENV: 'production',
        LINT_MODE: 'continuous'
      },
      error_file: 'automation/logs/linting-error.log',
      out_file: 'automation/logs/linting-out.log',
      log_file: 'automation/logs/linting-combined.log',
      time: true,
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      max_memory_restart: '512M'
    },
    {
      name: 'type-check-automation',
      script: 'automation/type-check-automation.cjs',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      autorestart: true,
      max_restarts: 3,
      min_uptime: '30s',
      env: {
        NODE_ENV: 'production',
        TYPE_CHECK_MODE: 'continuous'
      },
      error_file: 'automation/logs/type-check-error.log',
      out_file: 'automation/logs/type-check-out.log',
      log_file: 'automation/logs/type-check-combined.log',
      time: true,
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      max_memory_restart: '512M'
    },
    {
      name: 'build-health-monitor',
      script: 'automation/build-health-monitor.cjs',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      autorestart: true,
      max_restarts: 5,
      min_uptime: '1m',
      env: {
        NODE_ENV: 'production',
        HEALTH_CHECK_INTERVAL: '300000' // 5 minutes
      },
      error_file: 'automation/logs/build-health-error.log',
      out_file: 'automation/logs/build-health-out.log',
      log_file: 'automation/logs/build-health-combined.log',
      time: true,
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      max_memory_restart: '1G'
    },
    {
      name: 'auto-fix-orchestrator',
      script: 'automation/auto-fix-orchestrator.cjs',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      autorestart: true,
      max_restarts: 3,
      min_uptime: '1m',
      env: {
        NODE_ENV: 'production',
        AUTO_FIX_ENABLED: 'true'
      },
      error_file: 'automation/logs/auto-fix-error.log',
      out_file: 'automation/logs/auto-fix-out.log',
      log_file: 'automation/logs/auto-fix-combined.log',
      time: true,
      cron_restart: '0 */8 * * *', // Restart every 8 hours
      max_memory_restart: '1G'
    }
  ]
};