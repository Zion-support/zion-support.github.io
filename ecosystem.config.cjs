module.exports = {
  apps: [
    // Main Application
    {
      name: 'ziontechgroup-web',
      script: 'npm',
      args: 'start',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      env_development: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      log_file: './logs/web.log',
      out_file: './logs/web-out.log',
      error_file: './logs/web-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Core Automation Processes (replacing GitHub Actions)
    {
      name: 'console-error-fixer',
      script: 'node',
      args: 'scripts/automation/console-error-fixer.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/15 * * * *', // Every 15 minutes
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/console-error-fixer.log',
      out_file: './logs/console-error-fixer-out.log',
      error_file: './logs/console-error-fixer-error.log'
    },
    {
      name: 'link-checker',
      script: 'node',
      args: 'scripts/automation/link-checker.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/30 * * * *', // Every 30 minutes
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/link-checker.log',
      out_file: './logs/link-checker-out.log',
      error_file: './logs/link-checker-error.log'
    },
    {
      name: 'continuous-improvement',
      script: 'node',
      args: 'scripts/automation/continuous-improvement.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */2 * * *', // Every 2 hours
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/continuous-improvement.log',
      out_file: './logs/continuous-improvement-out.log',
      error_file: './logs/continuous-improvement-error.log'
    },
    {
      name: 'daily-build-test',
      script: 'node',
      args: 'scripts/automation/daily-build-test.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 * * * *', // Every hour
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/daily-build-test.log',
      out_file: './logs/daily-build-test-out.log',
      error_file: './logs/daily-build-test-error.log'
    },
    {
      name: 'security-audit',
      script: 'node',
      args: 'scripts/automation/security-audit.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */4 * * *', // Every 4 hours
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/security-audit.log',
      out_file: './logs/security-audit-out.log',
      error_file: './logs/security-audit-error.log'
    },
    {
      name: 'dependency-updates',
      script: 'node',
      args: 'scripts/automation/dependency-updates.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */6 * * *', // Every 6 hours
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/dependency-updates.log',
      out_file: './logs/dependency-updates-out.log',
      error_file: './logs/dependency-updates-error.log'
    },
    {
      name: 'performance-monitor',
      script: 'node',
      args: 'scripts/automation/performance-monitor.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */2 * * *', // Every 2 hours
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/performance-monitor.log',
      out_file: './logs/performance-monitor-out.log',
      error_file: './logs/performance-monitor-error.log'
    },
    {
      name: 'quality-checks',
      script: 'node',
      args: 'scripts/automation/quality-checks.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */3 * * *', // Every 3 hours
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/quality-checks.log',
      out_file: './logs/quality-checks-out.log',
      error_file: './logs/quality-checks-error.log'
    },
    {
      name: 'link-integrity',
      script: 'node',
      args: 'scripts/automation/link-integrity.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */2 * * *', // Every 2 hours
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/link-integrity.log',
      out_file: './logs/link-integrity-out.log',
      error_file: './logs/link-integrity-error.log'
    },
    {
      name: 'front-maximizer',
      script: 'node',
      args: 'scripts/automation/front-maximizer.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */4 * * *', // Every 4 hours
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/front-maximizer.log',
      out_file: './logs/front-maximizer-out.log',
      error_file: './logs/front-maximizer-error.log'
    },
    {
      name: 'sitemap-runner',
      script: 'node',
      args: 'scripts/automation/sitemap-runner.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */6 * * *', // Every 6 hours
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/sitemap-runner.log',
      out_file: './logs/sitemap-runner-out.log',
      error_file: './logs/sitemap-runner-error.log'
    }
  ]
};