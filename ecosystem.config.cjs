module.exports = {
  apps: [
    {
      name: 'ziontechgroup-web',
      script: 'npm',
      args: 'run start',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
      log_file: 'logs/pm2/preview.log',
      error_file: 'logs/pm2/preview-error.log',
      out_file: 'logs/pm2/preview-out.log',
    },
    {
      name: 'ci-cd-automation',
      script: 'scripts/pm2/ci-cd-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */1 * * *', // Every hour
      log_file: 'logs/pm2/ci-cd-automation.log',
      error_file: 'logs/pm2/ci-cd-automation-error.log',
      out_file: 'logs/pm2/ci-cd-automation-out.log',
    },
    {
      name: 'continuous-improvement',
      script: 'scripts/pm2/continuous-improvement.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: 'logs/pm2/continuous-improvement.log',
      error_file: 'logs/pm2/continuous-improvement-error.log',
      out_file: 'logs/pm2/continuous-improvement-out.log',
    },
    {
      name: 'daily-build-test',
      script: 'scripts/pm2/daily-build-test.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */1 * * *', // Every hour
      log_file: 'logs/pm2/daily-build-test.log',
      error_file: 'logs/pm2/daily-build-test-error.log',
      out_file: 'logs/pm2/daily-build-test-out.log',
    },
    {
      name: 'quality-checks',
      script: 'scripts/pm2/quality-checks.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */3 * * *', // Every 3 hours
      log_file: 'logs/pm2/quality-checks.log',
      error_file: 'logs/pm2/quality-checks-error.log',
      out_file: 'logs/pm2/quality-checks-out.log',
    },
    {
      name: 'security-audit',
      script: 'scripts/pm2/security-audit.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: 'logs/pm2/security-audit.log',
      error_file: 'logs/pm2/security-audit-error.log',
      out_file: 'logs/pm2/security-audit-out.log',
    },
    {
      name: 'performance-monitor',
      script: 'scripts/pm2/performance-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: 'logs/pm2/performance-monitor.log',
      error_file: 'logs/pm2/performance-monitor-error.log',
      out_file: 'logs/pm2/performance-monitor-out.log',
    },
    {
      name: 'link-checker',
      script: 'scripts/pm2/link-checker.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: 'logs/pm2/link-checker.log',
      error_file: 'logs/pm2/link-checker-error.log',
      out_file: 'logs/pm2/link-checker-out.log',
    },
    {
      name: 'dependency-updates',
      script: 'scripts/pm2/dependency-updates.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: 'logs/pm2/dependency-updates.log',
      error_file: 'logs/pm2/dependency-updates-error.log',
      out_file: 'logs/pm2/dependency-updates-out.log',
    },
    {
      name: 'health-monitor',
      script: 'scripts/pm2/health-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '*/5 * * * *', // Every 5 minutes
      log_file: 'logs/pm2/health-monitor.log',
      error_file: 'logs/pm2/health-monitor-error.log',
      out_file: 'logs/pm2/health-monitor-out.log',
    }
  ]
};