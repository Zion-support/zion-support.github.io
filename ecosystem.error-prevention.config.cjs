module.exports = {
  apps: [
    {
      name: 'error-prevention-linter',
      script: 'scripts/error-prevention/linter-watcher.cjs',
      instances: 1,
      autorestart: true,
      watch: ['components', 'pages'],
      ignore_watch: ['node_modules', '.next', '*.log'],
      env: {
        NODE_ENV: 'development',
        LOG_LEVEL: 'info'
      },
      error_file: 'automation/logs/linter-error.log',
      out_file: 'automation/logs/linter-out.log',
      log_file: 'automation/logs/linter-combined.log',
      time: true,
      max_memory_restart: '500M',
      restart_delay: 1000,
      max_restarts: 10,
      min_uptime: '10s'
    },
    {
      name: 'error-prevention-build-monitor',
      script: 'scripts/error-prevention/build-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      error_file: 'automation/logs/build-monitor-error.log',
      out_file: 'automation/logs/build-monitor-out.log',
      log_file: 'automation/logs/build-monitor-combined.log',
      time: true,
      max_memory_restart: '1G',
      restart_delay: 5000,
      max_restarts: 5,
      min_uptime: '30s'
    },
    {
      name: 'error-prevention-security-audit',
      script: 'scripts/error-prevention/security-auditor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 2 * * *', // Daily at 2 AM
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      error_file: 'automation/logs/security-audit-error.log',
      out_file: 'automation/logs/security-audit-out.log',
      log_file: 'automation/logs/security-audit-combined.log',
      time: true,
      max_memory_restart: '500M',
      restart_delay: 2000,
      max_restarts: 3,
      min_uptime: '20s'
    },
    {
      name: 'error-prevention-dependency-monitor',
      script: 'scripts/error-prevention/dependency-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: ['package.json', 'package-lock.json'],
      ignore_watch: ['node_modules'],
      env: {
        NODE_ENV: 'development',
        LOG_LEVEL: 'info'
      },
      error_file: 'automation/logs/dependency-monitor-error.log',
      out_file: 'automation/logs/dependency-monitor-out.log',
      log_file: 'automation/logs/dependency-monitor-combined.log',
      time: true,
      max_memory_restart: '300M',
      restart_delay: 1000,
      max_restarts: 5,
      min_uptime: '10s'
    },
    {
      name: 'error-prevention-type-checker',
      script: 'scripts/error-prevention/type-checker.cjs',
      instances: 1,
      autorestart: true,
      watch: ['components', 'pages', 'tsconfig.json'],
      ignore_watch: ['node_modules', '.next'],
      env: {
        NODE_ENV: 'development',
        LOG_LEVEL: 'info'
      },
      error_file: 'automation/logs/type-checker-error.log',
      out_file: 'automation/logs/type-checker-out.log',
      log_file: 'automation/logs/type-checker-combined.log',
      time: true,
      max_memory_restart: '400M',
      restart_delay: 2000,
      max_restarts: 8,
      min_uptime: '15s'
    }
  ]
};