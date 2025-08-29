module.exports = {
  apps: [
    {
      name: 'automation-orchestrator',
      script: 'scripts/pm2/automation-orchestrator.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'automation-orchestrator'
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: 'logs/pm2/automation-orchestrator.log',
      error_file: 'logs/pm2/automation-orchestrator-error.log',
      out_file: 'logs/pm2/automation-orchestrator-out.log'
    },
    {
      name: 'typescript-error-fixer',
      script: 'scripts/pm2/typescript-error-fixer.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'typescript-error-fixer'
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      log_file: 'logs/pm2/typescript-error-fixer.log',
      error_file: 'logs/pm2/typescript-error-fixer-error.log',
      out_file: 'logs/pm2/typescript-error-fixer-out.log'
    },
    {
      name: 'file-integrity-checker',
      script: 'scripts/pm2/file-integrity-checker.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'file-integrity-checker'
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      log_file: 'logs/pm2/file-integrity-checker.log',
      error_file: 'logs/pm2/file-integrity-checker-error.log',
      out_file: 'logs/pm2/file-integrity-checker-out.log'
    },
    {
      name: 'build-health-monitor',
      script: 'scripts/pm2/build-health-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'build-health-monitor'
      },
      cron_restart: '0 */8 * * *', // Restart every 8 hours
      log_file: 'logs/pm2/build-health-monitor.log',
      error_file: 'logs/pm2/build-health-monitor-error.log',
      out_file: 'logs/pm2/build-health-monitor-out.log'
    },
    {
      name: 'lint-fixer',
      script: 'scripts/pm2/lint-fixer.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'lint-fixer'
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      log_file: 'logs/pm2/lint-fixer.log',
      error_file: 'logs/pm2/lint-fixer-error.log',
      out_file: 'logs/pm2/lint-fixer-out.log'
    },
    {
      name: 'code-quality-monitor',
      script: 'scripts/pm2/code-quality-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'code-quality-monitor'
      },
      cron_restart: '0 */12 * * *', // Restart every 12 hours
      log_file: 'logs/pm2/code-quality-monitor.log',
      error_file: 'logs/pm2/code-quality-monitor-error.log',
      out_file: 'logs/pm2/code-quality-monitor-out.log'
    },
    {
      name: 'auto-commit-fixes',
      script: 'scripts/pm2/auto-commit-fixes.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'auto-commit-fixes'
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      log_file: 'logs/pm2/auto-commit-fixes.log',
      error_file: 'logs/pm2/auto-commit-fixes-error.log',
      out_file: 'logs/pm2/auto-commit-fixes-out.log'
    },
    {
      name: 'dependency-monitor',
      script: 'scripts/pm2/dependency-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'dependency-monitor'
      },
      cron_restart: '0 0 * * 0', // Restart weekly on Sunday
      log_file: 'logs/pm2/dependency-monitor.log',
      error_file: 'logs/pm2/dependency-monitor-error.log',
      out_file: 'logs/pm2/dependency-monitor-out.log'
    },
    {
      name: 'performance-monitor',
      script: 'scripts/pm2/performance-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'performance-monitor'
      },
      cron_restart: '0 */8 * * *', // Restart every 8 hours
      log_file: 'logs/pm2/performance-monitor.log',
      error_file: 'logs/pm2/performance-monitor-error.log',
      out_file: 'logs/pm2/performance-monitor-out.log'

  ]
};}