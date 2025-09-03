module.exports = {
  apps: [
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
    {
      name: 'automation-health-check',
      script: 'node',
      args: 'automation/health-check.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/5 * * * *', // Restart every 5 minutes
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/health-check.log',
      out_file: './logs/health-check-out.log',
      error_file: './logs/health-check-error.log'
    },
    {
      name: 'automation-security-scanner',
      script: 'node',
      args: 'automation/security-scanner.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/security-scanner.log',
      out_file: './logs/security-scanner-out.log',
      error_file: './logs/security-scanner-error.log'
    },
    {
      name: 'automation-performance-monitor',
      script: 'node',
      args: 'scripts/performance-monitor.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/performance-monitor.log',
      out_file: './logs/performance-monitor-out.log',
      error_file: './logs/performance-monitor-error.log'
    },
    {
      name: 'ci-cd-automation',
      script: 'node',
      args: 'scripts/automation-orchestrator.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */1 * * *', // Restart every hour
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/ci-cd-automation.log',
      out_file: './logs/ci-cd-automation-out.log',
      error_file: './logs/ci-cd-automation-error.log'
    },
    {
      name: 'continuous-automation',
      script: 'node',
      args: 'scripts/master-automation-orchestrator.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/continuous-automation.log',
      out_file: './logs/continuous-automation-out.log',
      error_file: './logs/continuous-automation-error.log'
    },
    {
      name: 'security-audit',
      script: 'node',
      args: 'scripts/security-audit.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/security-audit.log',
      out_file: './logs/security-audit-out.log',
      error_file: './logs/security-audit-error.log'
    },
    {
      name: 'code-quality-monitor',
      script: 'node',
      args: 'scripts/code-quality-monitor.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */3 * * *', // Restart every 3 hours
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/code-quality-monitor.log',
      out_file: './logs/code-quality-monitor-out.log',
      error_file: './logs/code-quality-monitor-error.log'
    },
    {
      name: 'dependency-updater',
      script: 'node',
      args: 'scripts/dependency-updater.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/dependency-updater.log',
      out_file: './logs/dependency-updater-out.log',
      error_file: './logs/dependency-updater-error.log'
    },
    {
      name: 'syntax-error-fixer',
      script: 'node',
      args: 'scripts/fix-syntax-errors.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/15 * * * *', // Restart every 15 minutes
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/syntax-error-fixer.log',
      out_file: './logs/syntax-error-fixer-out.log',
      error_file: './logs/syntax-error-fixer-error.log'
    },
    {
      name: 'build-test-automation',
      script: 'bash',
      args: 'scripts/comprehensive-build-test.sh',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */1 * * *', // Restart every hour
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/build-test-automation.log',
      out_file: './logs/build-test-automation-out.log',
      error_file: './logs/build-test-automation-error.log'
    },
    {
      name: 'sitemap-generator',
      script: 'node',
      args: 'scripts/generate-sitemap.mjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/sitemap-generator.log',
      out_file: './logs/sitemap-generator-out.log',
      error_file: './logs/sitemap-generator-error.log'
    }
  ]
};