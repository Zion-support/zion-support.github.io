module.exports = {
  apps: [
    {
      name: 'error-monitor',
      script: 'automation/error-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_SERVE_PATH: '.',
        PM2_SERVE_PORT: 8080,
        PM2_SERVE_SPA: 'true'
      },
      error_file: 'automation/logs/error-monitor-error.log',
      out_file: 'automation/logs/error-monitor-out.log',
      log_file: 'automation/logs/error-monitor-combined.log',
      time: true,
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      max_restarts: 10,
      min_uptime: '10s'
    },
    {
      name: 'lint-automation',
      script: 'automation/lint-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: 'automation/logs/lint-automation-error.log',
      out_file: 'automation/logs/lint-automation-out.log',
      log_file: 'automation/logs/lint-automation-combined.log',
      time: true,
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      max_restarts: 5,
      min_uptime: '10s'
    },
    {
      name: 'type-check-automation',
      script: 'automation/type-check-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: 'automation/logs/type-check-automation-error.log',
      out_file: 'automation/logs/type-check-automation-out.log',
      log_file: 'automation/logs/type-check-automation-combined.log',
      time: true,
      cron_restart: '0 */3 * * *', // Restart every 3 hours
      max_restarts: 5,
      min_uptime: '10s'
    },
    {
      name: 'git-sync-automation',
      script: 'automation/git-sync-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: 'automation/logs/git-sync-automation-error.log',
      out_file: 'automation/logs/git-sync-automation-out.log',
      log_file: 'automation/logs/git-sync-automation-combined.log',
      time: true,
      cron_restart: '0 */1 * * *', // Restart every hour
      max_restarts: 3,
      min_uptime: '10s'
    },
    {
      name: 'build-monitor',
      script: 'automation/build-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      error_file: 'automation/logs/build-monitor-error.log',
      out_file: 'automation/logs/build-monitor-out.log',
      log_file: 'automation/logs/build-monitor-combined.log',
      time: true,
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      max_restarts: 5,
      min_uptime: '10s'
    },
    {
      name: 'performance-monitor',
      script: 'automation/performance-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: 'automation/logs/performance-monitor-error.log',
      out_file: 'automation/logs/performance-monitor-out.log',
      log_file: 'automation/logs/performance-monitor-combined.log',
      time: true,
      cron_restart: '0 */1 * * *', // Restart every hour
      max_restarts: 5,
      min_uptime: '10s'
    },
    {
      name: 'security-scanner',
      script: 'automation/security-scanner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: 'automation/logs/security-scanner-error.log',
      out_file: 'automation/logs/security-scanner-out.log',
      log_file: 'automation/logs/security-scanner-combined.log',
      time: true,
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      max_restarts: 5,
      min_uptime: '10s'
    },
    {
      name: 'seo-optimizer',
      script: 'automation/seo-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: 'automation/logs/seo-optimizer-error.log',
      out_file: 'automation/logs/seo-optimizer-out.log',
      log_file: 'automation/logs/seo-optimizer-combined.log',
      time: true,
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      max_restarts: 5,
      min_uptime: '10s'
    }
  ]
};