module.exports = {
  apps: [
    // Console Error Fixer - Automatically fixes console errors
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
      error_file: './logs/console-error-fixer-error.log',
      out_file: './logs/console-error-fixer-out.log',
      log_file: './logs/console-error-fixer-combined.log',
      time: true
    },

    // Link Checker - Checks for broken links
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
      cron_restart: '0 2 * * 1', // Restart every Monday at 2 AM
      error_file: './logs/link-checker-error.log',
      out_file: './logs/link-checker-out.log',
      log_file: './logs/link-checker-combined.log',
      time: true
    },

    // Continuous Improvement - Runs code quality checks
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
      cron_restart: '0 2 * * 1', // Restart every Monday at 2 AM
      error_file: './logs/continuous-improvement-error.log',
      out_file: './logs/continuous-improvement-out.log',
      log_file: './logs/continuous-improvement-combined.log',
      time: true
    },

    // Daily Build Test - Runs daily build and test cycles
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
      cron_restart: '0 6 * * *', // Restart daily at 6 AM
      error_file: './logs/daily-build-test-error.log',
      out_file: './logs/daily-build-test-out.log',
      log_file: './logs/daily-build-test-combined.log',
      time: true
    },

    // Security Audit - Runs security checks
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
      error_file: './logs/security-audit-error.log',
      out_file: './logs/security-audit-out.log',
      log_file: './logs/security-audit-combined.log',
      time: true
    },

    // Dependency Updates - Manages package updates
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
      error_file: './logs/dependency-updates-error.log',
      out_file: './logs/dependency-updates-out.log',
      log_file: './logs/dependency-updates-combined.log',
      time: true
    },

    // Performance Monitor - Monitors application performance
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
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      error_file: './logs/performance-monitor-error.log',
      out_file: './logs/performance-monitor-out.log',
      log_file: './logs/performance-monitor-combined.log',
      time: true
    },

    // Quality Checks - Runs quality assurance processes
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
      cron_restart: '0 4 * * 1', // Restart every Monday at 4 AM
      error_file: './logs/quality-checks-error.log',
      out_file: './logs/quality-checks-out.log',
      log_file: './logs/quality-checks-combined.log',
      time: true
    },

    // Link Integrity - Checks link integrity
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
      cron_restart: '0 5 * * 1', // Restart every Monday at 5 AM
      error_file: './logs/link-integrity-error.log',
      out_file: './logs/link-integrity-out.log',
      log_file: './logs/link-integrity-combined.log',
      time: true
    },

    // Front Maximizer - Optimizes frontend performance
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
      cron_restart: '0 7 * * *', // Restart daily at 7 AM
      error_file: './logs/front-maximizer-error.log',
      out_file: './logs/front-maximizer-out.log',
      log_file: './logs/front-maximizer-combined.log',
      time: true
    },

    // Sitemap Runner - Generates and updates sitemaps
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
      cron_restart: '0 8 * * *', // Restart daily at 8 AM
      error_file: './logs/sitemap-runner-error.log',
      out_file: './logs/sitemap-runner-out.log',
      log_file: './logs/sitemap-runner-combined.log',
      time: true
    }
  ],

  deploy: {
    production: {
      user: 'node',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/your-repo.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.cjs --env production'
    }
  }
};