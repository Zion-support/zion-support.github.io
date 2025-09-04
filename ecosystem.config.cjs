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
      name: 'automation-ci-cd',
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
      log_file: './logs/ci-cd.log',
      out_file: './logs/ci-cd-out.log',
      error_file: './logs/ci-cd-error.log'
    },
    {
      name: 'ci-cd-automation',
      script: 'node',
      args: 'automation/ci-cd-automation.cjs',
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
      name: 'automation-continuous',
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
      log_file: './logs/continuous.log',
      out_file: './logs/continuous-out.log',
      error_file: './logs/continuous-error.log'
    },
    {
      name: 'continuous-automation',
      script: 'node',
      args: 'automation/continuous-automation.cjs',
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
      name: 'automation-dependency-updater',
      script: 'node',
      args: 'scripts/dependency-updater.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */12 * * *', // Restart every 12 hours
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/dependency-updater.log',
      out_file: './logs/dependency-updater-out.log',
      error_file: './logs/dependency-updater-error.log'
    },
    {
      name: 'automation-code-quality',
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
      log_file: './logs/code-quality.log',
      out_file: './logs/code-quality-out.log',
      error_file: './logs/code-quality-error.log'
    },
    {
      name: 'automation-build-test',
      script: 'node',
      args: 'scripts/comprehensive-test-runner.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/build-test.log',
      out_file: './logs/build-test-out.log',
      error_file: './logs/build-test-error.log'
    },
    {
      name: 'build-test-automation',
      script: 'node',
      args: 'automation/build-test-automation.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/build-test-automation.log',
      out_file: './logs/build-test-automation-out.log',
      error_file: './logs/build-test-automation-error.log'
    },
    {
      name: 'automation-sitemap',
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
      log_file: './logs/sitemap.log',
      out_file: './logs/sitemap-out.log',
      error_file: './logs/sitemap-error.log'
    },
    {
      name: 'quality-checks',
      script: 'node',
      args: 'automation/quality-checks.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */3 * * *', // Restart every 3 hours
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/quality-checks.log',
      out_file: './logs/quality-checks-out.log',
      error_file: './logs/quality-checks-error.log'
    }
  ]
};