module.exports = {
  apps: [
    {
      name: 'console-error-fixer',
      script: 'scripts/automation-manager.js',
      args: 'console-error-fixer',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_AUTOMATION: 'true'
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      log_file: 'logs/console-error-fixer.log',
      out_file: 'logs/console-error-fixer-out.log',
      error_file: 'logs/console-error-fixer-error.log'
    },
    {
      name: 'link-checker',
      script: 'scripts/automation-manager.js',
      args: 'link-checker',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_AUTOMATION: 'true'
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      log_file: 'logs/link-checker.log',
      out_file: 'logs/link-checker-out.log',
      error_file: 'logs/link-checker-error.log'
    },
    {
      name: 'continuous-improvement',
      script: 'scripts/automation-manager.js',
      args: 'continuous-improvement',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_AUTOMATION: 'true'
      },
      cron_restart: '0 */8 * * *', // Restart every 8 hours
      log_file: 'logs/continuous-improvement.log',
      out_file: 'logs/continuous-improvement-out.log',
      error_file: 'logs/continuous-improvement-error.log'
    },
    {
      name: 'daily-build-test',
      script: 'scripts/automation-manager.js',
      args: 'daily-build-test',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'production',
        PM2_AUTOMATION: 'true'
      },
      cron_restart: '0 2 * * *', // Restart daily at 2 AM
      log_file: 'logs/daily-build-test.log',
      out_file: 'logs/daily-build-test-out.log',
      error_file: 'logs/daily-build-test-error.log'
    },
    {
      name: 'security-audit',
      script: 'scripts/automation-manager.js',
      args: 'security-audit',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_AUTOMATION: 'true'
      },
      cron_restart: '0 3 * * 1', // Restart every Monday at 3 AM
      log_file: 'logs/security-audit.log',
      out_file: 'logs/security-audit-out.log',
      error_file: 'logs/security-audit-error.log'
    },
    {
      name: 'dependency-updates',
      script: 'scripts/automation-manager.js',
      args: 'dependency-updates',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_AUTOMATION: 'true'
      },
      cron_restart: '0 2 * * 1', // Restart every Monday at 2 AM
      log_file: 'logs/dependency-updates.log',
      out_file: 'logs/dependency-updates-out.log',
      error_file: 'logs/dependency-updates-error.log'
    },
    {
      name: 'performance-monitor',
      script: 'scripts/automation-manager.js',
      args: 'performance-monitor',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_AUTOMATION: 'true'
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: 'logs/performance-monitor.log',
      out_file: 'logs/performance-monitor-out.log',
      error_file: 'logs/performance-monitor-error.log'
    },
    {
      name: 'quality-checks',
      script: 'scripts/automation-manager.js',
      args: 'quality-checks',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_AUTOMATION: 'true'
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      log_file: 'logs/quality-checks.log',
      out_file: 'logs/quality-checks-out.log',
      error_file: 'logs/quality-checks-error.log'
    },
    {
      name: 'link-integrity',
      script: 'scripts/automation-manager.js',
      args: 'link-integrity',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_AUTOMATION: 'true'
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      log_file: 'logs/link-integrity.log',
      out_file: 'logs/link-integrity-out.log',
      error_file: 'logs/link-integrity-error.log'
    },
    {
      name: 'front-maximizer',
      script: 'scripts/automation-manager.js',
      args: 'front-maximizer',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_AUTOMATION: 'true'
      },
      cron_restart: '0 */12 * * *', // Restart every 12 hours
      log_file: 'logs/front-maximizer.log',
      out_file: 'logs/front-maximizer-out.log',
      error_file: 'logs/front-maximizer-error.log'
    },
    {
      name: 'sitemap-runner',
      script: 'scripts/automation-manager.js',
      args: 'sitemap-runner',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_AUTOMATION: 'true'
      },
      cron_restart: '0 1 * * *', // Restart daily at 1 AM
      log_file: 'logs/sitemap-runner.log',
      out_file: 'logs/sitemap-runner-out.log',
      error_file: 'logs/sitemap-runner-error.log'
    }
  ]
};