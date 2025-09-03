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

    // CI/CD Pipeline Automation (replaces ci-cd.yml)
    {
      name: 'ci-cd-pipeline',
      script: 'node',
      args: 'scripts/ci-cd-automation.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */1 * * *', // Every hour
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/ci-cd-pipeline.log',
      out_file: './logs/ci-cd-pipeline-out.log',
      error_file: './logs/ci-cd-pipeline-error.log'
    },

    // Continuous Automation (replaces continuous-automation.yml)
    {
      name: 'continuous-automation',
      script: 'node',
      args: 'scripts/automation-orchestrator.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */6 * * *', // Every 6 hours
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/continuous-automation.log',
      out_file: './logs/continuous-automation-out.log',
      error_file: './logs/continuous-automation-error.log'
    },

    // Health Check Automation
    {
      name: 'automation-health-check',
      script: 'node',
      args: 'automation/health-check.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/5 * * * *', // Every 5 minutes
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/health-check.log',
      out_file: './logs/health-check-out.log',
      error_file: './logs/health-check-error.log'
    },

    // Security Scanner
    {
      name: 'automation-security-scanner',
      script: 'node',
      args: 'automation/security-scanner.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */6 * * *', // Every 6 hours
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/security-scanner.log',
      out_file: './logs/security-scanner-out.log',
      error_file: './logs/security-scanner-error.log'
    },

    // Performance Monitor
    {
      name: 'automation-performance-monitor',
      script: 'node',
      args: 'scripts/performance-monitor.cjs',
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

    // Code Quality Monitor
    {
      name: 'code-quality-monitor',
      script: 'node',
      args: 'scripts/code-quality-monitor.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */3 * * *', // Every 3 hours
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/code-quality-monitor.log',
      out_file: './logs/code-quality-monitor-out.log',
      error_file: './logs/code-quality-monitor-error.log'
    },

    // Dependency Updater
    {
      name: 'dependency-updater',
      script: 'node',
      args: 'scripts/dependency-updater.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */12 * * *', // Every 12 hours
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/dependency-updater.log',
      out_file: './logs/dependency-updater-out.log',
      error_file: './logs/dependency-updater-error.log'
    },

    // Build and Test Automation
    {
      name: 'build-test-automation',
      script: 'node',
      args: 'scripts/build-test-automation.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */4 * * *', // Every 4 hours
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/build-test-automation.log',
      out_file: './logs/build-test-automation-out.log',
      error_file: './logs/build-test-automation-error.log'
    },

    // Sitemap Generator
    {
      name: 'sitemap-generator',
      script: 'node',
      args: 'scripts/generate-sitemap.mjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */8 * * *', // Every 8 hours
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/sitemap-generator.log',
      out_file: './logs/sitemap-generator-out.log',
      error_file: './logs/sitemap-generator-error.log'
    },

    // Error Fixer
    {
      name: 'error-fixer',
      script: 'node',
      args: 'scripts/fix-syntax-errors.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/15 * * * *', // Every 15 minutes
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/error-fixer.log',
      out_file: './logs/error-fixer-out.log',
      error_file: './logs/error-fixer-error.log'
    }
  ]
};