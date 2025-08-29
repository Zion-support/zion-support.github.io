module.exports = {
  apps: [
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
    },
    {
      name: 'smart-test-runner',
      script: 'scripts/pm2/smart-test-runner.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'smart-test-runner'
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours for frequent testing
      log_file: 'logs/pm2/smart-test-runner.log',
      error_file: 'logs/pm2/smart-test-runner-error.log',
      out_file: 'logs/pm2/smart-test-runner-out.log'
    },
    {
      name: 'git-workflow-automator',
      script: 'scripts/pm2/git-workflow-automator.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'git-workflow-automator'
      },
      cron_restart: '0 */3 * * *', // Restart every 3 hours for git operations
      log_file: 'logs/pm2/git-workflow-automator.log',
      error_file: 'logs/pm2/git-workflow-automator-error.log',
      out_file: 'logs/pm2/git-workflow-automator-out.log'
    },
    {
      name: 'security-scanner',
      script: 'scripts/pm2/security-scanner.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'security-scanner'
      },
      cron_restart: '0 0 * * *', // Restart daily at midnight for security
      log_file: 'logs/pm2/security-scanner.log',
      error_file: 'logs/pm2/security-scanner-error.log',
      out_file: 'logs/pm2/security-scanner-out.log'
    },
    {
      name: 'bundle-optimizer',
      script: 'scripts/pm2/bundle-optimizer.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'bundle-optimizer'
      },
      cron_restart: '0 6 * * *', // Restart daily at 6 AM for bundle optimization
      log_file: 'logs/pm2/bundle-optimizer.log',
      error_file: 'logs/pm2/bundle-optimizer-error.log',
      out_file: 'logs/pm2/bundle-optimizer-out.log'
    }
  ]
};
