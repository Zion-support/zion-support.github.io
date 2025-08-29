module.exports = {
  apps: [
    // Console Error Fixer - Replaces CI workflow
    {
      name: 'console-error-fixer',
      script: 'npm',
      args: 'run lint && npm run type-check && npm run build',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: './logs/console-error-fixer.log',
      error_file: './logs/console-error-fixer-error.log',
      out_file: './logs/console-error-fixer-out.log'
    },

    // Link Checker - Replaces link-checker workflow
    {
      name: 'link-checker',
      script: 'node',
      args: 'scripts/link-checker.js',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development'
      },
      cron_restart: '0 2 * * *', // Daily at 2 AM
      log_file: './logs/link-checker.log',
      error_file: './logs/link-checker-error.log',
      out_file: './logs/link-checker-out.log'
    },

    // Continuous Improvement - Replaces continuous-improvement workflow
    {
      name: 'continuous-improvement',
      script: 'node',
      args: 'scripts/continuous-improvement.js',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development'
      },
      cron_restart: '0 3 * * *', // Daily at 3 AM
      log_file: './logs/continuous-improvement.log',
      error_file: './logs/continuous-improvement-error.log',
      out_file: './logs/continuous-improvement-out.log'
    },

    // Daily Build Test - Replaces test workflow
    {
      name: 'daily-build-test',
      script: 'npm',
      args: 'run build',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'development'
      },
      cron_restart: '0 4 * * *', // Daily at 4 AM
      log_file: './logs/daily-build-test.log',
      error_file: './logs/daily-build-test-error.log',
      out_file: './logs/daily-build-test-out.log'
    },

    // Security Audit - Replaces security workflow
    {
      name: 'security-audit',
      script: 'npm',
      args: 'audit --audit-level moderate',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development'
      },
      cron_restart: '0 2 * * 1', // Weekly on Monday at 2 AM
      log_file: './logs/security-audit.log',
      error_file: './logs/security-audit-error.log',
      out_file: './logs/security-audit-out.log'
    },

    // Dependency Updates - Replaces dependencies workflow
    {
      name: 'dependency-updates',
      script: 'node',
      args: 'scripts/dependency-updater.js',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      cron_restart: '0 2 * * 1', // Weekly on Monday at 2 AM
      log_file: './logs/dependency-updates.log',
      error_file: './logs/dependency-updates-error.log',
      out_file: './logs/dependency-updates-out.log'
    },

    // Performance Monitor
    {
      name: 'performance-monitor',
      script: 'node',
      args: 'scripts/performance-monitor.js',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development'
      },
      cron_restart: '*/30 * * * *', // Every 30 minutes
      log_file: './logs/performance-monitor.log',
      error_file: './logs/performance-monitor-error.log',
      out_file: './logs/performance-monitor-out.log'
    },

    // Quality Checks - Replaces quality-check workflow
    {
      name: 'quality-checks',
      script: 'npm',
      args: 'run lint && npm run type-check',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './logs/quality-checks.log',
      error_file: './logs/quality-checks-error.log',
      out_file: './logs/quality-checks-out.log'
    },

    // Link Integrity Checker
    {
      name: 'link-integrity',
      script: 'node',
      args: 'scripts/link-integrity-checker.js',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development'
      },
      cron_restart: '0 5 * * *', // Daily at 5 AM
      log_file: './logs/link-integrity.log',
      error_file: './logs/link-integrity-error.log',
      out_file: './logs/link-integrity-out.log'
    },

    // Front Maximizer
    {
      name: 'front-maximizer',
      script: 'node',
      args: 'scripts/front-maximizer.js',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      cron_restart: '0 6 * * *', // Daily at 6 AM
      log_file: './logs/front-maximizer.log',
      error_file: './logs/front-maximizer-error.log',
      out_file: './logs/front-maximizer-out.log'
    },

    // Sitemap Runner
    {
      name: 'sitemap-runner',
      script: 'node',
      args: 'scripts/generate-sitemap.js',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development'
      },
      cron_restart: '0 7 * * *', // Daily at 7 AM
      log_file: './logs/sitemap-runner.log',
      error_file: './logs/sitemap-runner-error.log',
      out_file: './logs/sitemap-runner-out.log'
    }
  ],

  deploy: {
    production: {
      user: 'node',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:username/repo.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.cjs --env production'
    }
  }
};