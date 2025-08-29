module.exports = {
  apps: [
    // Continuous Integration & Build Automation
    {
      name: 'ci-automation',
      script: 'npm',
      args: 'run build',
      cwd: './',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=6144 --openssl-legacy-provider'
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: './logs/ci-automation.log',
      error_file: './logs/ci-automation-error.log',
      out_file: './logs/ci-automation-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Linting Automation
    {
      name: 'lint-automation',
      script: 'npm',
      args: 'run lint',
      cwd: './',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development'
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './logs/lint-automation.log',
      error_file: './logs/lint-automation-error.log',
      out_file: './logs/lint-automation-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Type Checking Automation
    {
      name: 'type-check-automation',
      script: 'npm',
      args: 'run type-check',
      cwd: './',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development'
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './logs/type-check-automation.log',
      error_file: './logs/type-check-automation-error.log',
      out_file: './logs/type-check-automation-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Testing Automation
    {
      name: 'test-automation',
      script: 'npm',
      args: 'test',
      cwd: './',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'test'
      },
      cron_restart: '0 */8 * * *', // Every 8 hours
      log_file: './logs/test-automation.log',
      error_file: './logs/test-automation-error.log',
      out_file: './logs/test-automation-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Security Audit Automation
    {
      name: 'security-audit-automation',
      script: 'npm',
      args: 'audit --audit-level=moderate',
      cwd: './',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 2 * * 1', // Every Monday at 2 AM
      log_file: './logs/security-audit-automation.log',
      error_file: './logs/security-audit-automation-error.log',
      out_file: './logs/security-audit-automation-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Dependency Update Automation
    {
      name: 'dependency-update-automation',
      script: 'npm',
      args: 'update',
      cwd: './',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 2 * * 1', // Every Monday at 2 AM
      log_file: './logs/dependency-update-automation.log',
      error_file: './logs/dependency-update-automation-error.log',
      out_file: './logs/dependency-update-automation-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Quality Check Automation
    {
      name: 'quality-check-automation',
      script: 'npm',
      args: 'run lint && npm run type-check && npm run build',
      cwd: './',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=6144 --openssl-legacy-provider'
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: './logs/quality-check-automation.log',
      error_file: './logs/quality-check-automation-error.log',
      out_file: './logs/quality-check-automation-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Bundle Analysis Automation
    {
      name: 'bundle-analysis-automation',
      script: './scripts/analyze-bundle.js',
      cwd: './',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 3 * * 1', // Every Monday at 3 AM
      log_file: './logs/bundle-analysis-automation.log',
      error_file: './logs/bundle-analysis-automation-error.log',
      out_file: './logs/bundle-analysis-automation-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Sitemap Generation Automation
    {
      name: 'sitemap-generation-automation',
      script: './scripts/generate-sitemap.js',
      cwd: './',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 4 * * 1', // Every Monday at 4 AM
      log_file: './logs/sitemap-generation-automation.log',
      error_file: './logs/sitemap-generation-automation-error.log',
      out_file: './logs/sitemap-generation-automation-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Continuous Improvement Automation
    {
      name: 'continuous-improvement-automation',
      script: 'npm',
      args: 'run fix:all',
      cwd: './',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development'
      },
      cron_restart: '0 2 * * 1', // Every Monday at 2 AM
      log_file: './logs/continuous-improvement-automation.log',
      error_file: './logs/continuous-improvement-automation-error.log',
      out_file: './logs/continuous-improvement-automation-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Health Check Automation
    {
      name: 'health-check-automation',
      script: './scripts/start-automation.sh',
      args: 'health',
      cwd: './',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '*/30 * * * *', // Every 30 minutes
      log_file: './logs/health-check-automation.log',
      error_file: './logs/health-check-automation-error.log',
      out_file: './logs/health-check-automation-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    }
  ],

  deploy: {
    production: {
      user: 'node',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/your-repo.git',
      path: '/var/www/production',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.cjs --env production',
      'pre-setup': ''
    }
  }
};