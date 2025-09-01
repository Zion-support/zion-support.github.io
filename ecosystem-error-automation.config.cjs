module.exports = {
  apps: [
    // Main application
    {
      name: 'bolt-app',
      script: 'npm',
      args: 'start',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=6144 --openssl-legacy-provider'
      }
    },

    // Enhanced Error Fixer - runs every 5 minutes (HIGHEST PRIORITY)
    {
      name: 'enhanced-error-fixer',
      script: './scripts/automation/enhanced-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000' // 5 minutes
      },
      cron_restart: '*/5 * * * *', // Every 5 minutes
      log_file: './automation/logs/enhanced-error-fixer.log',
      error_file: './automation/logs/enhanced-error-fixer-error.log',
      out_file: './automation/logs/enhanced-error-fixer-out.log'
    },

    // TypeScript Error Monitor - runs every 10 minutes
    {
      name: 'typescript-error-monitor',
      script: './scripts/automation/typescript-error-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      },
      cron_restart: '*/10 * * * *', // Every 10 minutes
      log_file: './automation/logs/typescript-error-monitor.log',
      error_file: './automation/logs/typescript-error-monitor-error.log',
      out_file: './automation/logs/typescript-error-monitor-out.log'
    },

    // ESLint Error Fixer - runs every 15 minutes
    {
      name: 'eslint-error-fixer',
      script: './scripts/automation/eslint-error-cleaner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      },
      cron_restart: '*/15 * * * *', // Every 15 minutes
      log_file: './automation/logs/eslint-error-fixer.log',
      error_file: './automation/logs/eslint-error-fixer-error.log',
      out_file: './automation/logs/eslint-error-fixer-out.log'
    },

    // Comprehensive Error Fixer - runs every 30 minutes
    {
      name: 'comprehensive-error-fixer',
      script: './scripts/automation/comprehensive-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      },
      cron_restart: '*/30 * * * *', // Every 30 minutes
      log_file: './automation/logs/comprehensive-error-fixer.log',
      error_file: './automation/logs/comprehensive-error-fixer-error.log',
      out_file: './automation/logs/comprehensive-error-fixer-out.log'
    },

    // JSX Error Fixer - runs every 20 minutes
    {
      name: 'jsx-error-fixer',
      script: './scripts/automation/jsx-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1200000' // 20 minutes
      },
      cron_restart: '*/20 * * * *', // Every 20 minutes
      log_file: './automation/logs/jsx-error-fixer.log',
      error_file: './automation/logs/jsx-error-fixer-error.log',
      out_file: './automation/logs/jsx-error-fixer-out.log'
    },

    // Master Error Controller - coordinates all error fixers
    {
      name: 'master-error-controller',
      script: './scripts/automation/master-automation-controller.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      },
      cron_restart: '*/10 * * * *', // Every 10 minutes
      log_file: './automation/logs/master-error-controller.log',
      error_file: './automation/logs/master-error-controller-error.log',
      out_file: './automation/logs/master-error-controller-out.log'
    },

    // Error Analytics Dashboard - runs every hour
    {
      name: 'error-analytics-dashboard',
      script: './scripts/automation/error-analytics-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000' // 1 hour
      },
      cron_restart: '0 * * * *', // Every hour
      log_file: './automation/logs/error-analytics-dashboard.log',
      error_file: './automation/logs/error-analytics-dashboard-error.log',
      out_file: './automation/logs/error-analytics-dashboard-out.log'
    },

    // Predictive Issue Detection - runs every 2 hours
    {
      name: 'predictive-issue-detection',
      script: './scripts/automation/predictive-issue-detection.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './automation/logs/predictive-issue-detection.log',
      error_file: './automation/logs/predictive-issue-detection-error.log',
      out_file: './automation/logs/predictive-issue-detection-out.log'
    },

    // Continuous Build Test - runs every hour
    {
      name: 'continuous-build-test',
      script: './scripts/automation/daily-build-test.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000' // 1 hour
      },
      cron_restart: '0 * * * *', // Every hour
      log_file: './automation/logs/continuous-build-test.log',
      error_file: './automation/logs/continuous-build-test-error.log',
      out_file: './automation/logs/continuous-build-test-out.log'
    },

    // Quality Checks - runs every 3 hours
    {
      name: 'quality-checks',
      script: './scripts/automation/quality-checks.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '10800000' // 3 hours
      },
      cron_restart: '0 */3 * * *', // Every 3 hours
      log_file: './automation/logs/quality-checks.log',
      error_file: './automation/logs/quality-checks-error.log',
      out_file: './automation/logs/quality-checks-out.log'
    },

    // Security Audit - runs every 4 hours
    {
      name: 'security-audit',
      script: './scripts/automation/security-audit.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '14400000' // 4 hours
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './automation/logs/security-audit.log',
      error_file: './automation/logs/security-audit-error.log',
      out_file: './automation/logs/security-audit-out.log'
    },

    // Performance Monitor - runs every 2 hours
    {
      name: 'performance-monitor',
      script: './scripts/automation/performance-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './automation/logs/performance-monitor.log',
      error_file: './automation/logs/performance-monitor-error.log',
      out_file: './automation/logs/performance-monitor-out.log'
    },

    // Dependency Updates - runs every 6 hours
    {
      name: 'dependency-updates',
      script: './scripts/automation/dependency-updates.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '21600000' // 6 hours
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: './automation/logs/dependency-updates.log',
      error_file: './automation/logs/dependency-updates-error.log',
      out_file: './automation/logs/dependency-updates-out.log'
    },

    // Link Checker - runs every 2 hours
    {
      name: 'link-checker',
      script: './scripts/automation/link-checker.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './automation/logs/link-checker.log',
      error_file: './automation/logs/link-checker-error.log',
      out_file: './automation/logs/link-checker-out.log'
    },

    // Sitemap Runner - runs every 6 hours
    {
      name: 'sitemap-runner',
      script: './scripts/automation/sitemap-runner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '21600000' // 6 hours
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: './automation/logs/sitemap-runner.log',
      error_file: './automation/logs/sitemap-runner-error.log',
      out_file: './automation/logs/sitemap-runner-out.log'
    },

    // AI Code Review - runs every 4 hours
    {
      name: 'ai-code-review',
      script: './scripts/automation/ai-code-review-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '14400000' // 4 hours
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './automation/logs/ai-code-review.log',
      error_file: './automation/logs/ai-code-review-error.log',
      out_file: './automation/logs/ai-code-review-out.log'
    },

    // Smart Dependency Intelligence - runs every 6 hours
    {
      name: 'smart-dependency-intelligence',
      script: './scripts/automation/smart-dependency-intelligence.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '21600000' // 6 hours
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: './automation/logs/smart-dependency-intelligence.log',
      error_file: './automation/logs/smart-dependency-intelligence-error.log',
      out_file: './automation/logs/smart-dependency-intelligence-out.log'
    },

    // Intelligent Build Pipeline - runs every 8 hours
    {
      name: 'intelligent-build-pipeline',
      script: './scripts/automation/intelligent-build-pipeline.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '28800000' // 8 hours
      },
      cron_restart: '0 */8 * * *', // Every 8 hours
      log_file: './automation/logs/intelligent-build-pipeline.log',
      error_file: './automation/logs/intelligent-build-pipeline-error.log',
      out_file: './automation/logs/intelligent-build-pipeline-out.log'
    }
  ],

  deploy: {
    production: {
      user: 'root',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/bolt.new.zion.app.git',
      path: '/workspace/production',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem-error-automation.config.cjs --env production',
      'pre-setup': ''
    }
  }
};