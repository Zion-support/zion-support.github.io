module.exports = {
  apps: [
    // Enhanced Project Error Fixer - runs every 10 minutes (HIGHEST PRIORITY)
    {
      name: 'enhanced-project-error-fixer',
      script: './scripts/automation/enhanced-project-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000', // 10 minutes
      },
      cron_restart: '*/10 * * * *', // Every 10 minutes
      log_file: './automation/logs/enhanced-error-fixer.log',
      error_file: './automation/logs/enhanced-error-fixer-error.log',
      out_file: './automation/logs/enhanced-error-fixer-out.log',
    },

    // TypeScript Error Monitor - runs every 15 minutes
    {
      name: 'typescript-error-monitor',
      script: './scripts/automation/typescript-error-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000', // 15 minutes
      },
      cron_restart: '*/15 * * * *', // Every 15 minutes
      log_file: './automation/logs/typescript-monitor.log',
      error_file: './automation/logs/typescript-monitor-error.log',
      out_file: './automation/logs/typescript-monitor-out.log',
    },

    // ESLint Error Cleaner - runs every 20 minutes
    {
      name: 'eslint-error-cleaner',
      script: './scripts/automation/eslint-error-cleaner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1200000', // 20 minutes
      },
      cron_restart: '*/20 * * * *', // Every 20 minutes
      log_file: './automation/logs/eslint-cleaner.log',
      error_file: './automation/logs/eslint-cleaner-error.log',
      out_file: './automation/logs/eslint-cleaner-out.log',
    },

    // Build Error Detector - runs every 30 minutes
    {
      name: 'build-error-detector',
      script: './scripts/automation/build-error-detector.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000', // 30 minutes
      },
      cron_restart: '*/30 * * * *', // Every 30 minutes
      log_file: './automation/logs/build-detector.log',
      error_file: './automation/logs/build-detector-error.log',
      out_file: './automation/logs/build-detector-out.log',
    },

    // Dependency Error Resolver - runs every hour
    {
      name: 'dependency-error-resolver',
      script: './scripts/automation/dependency-error-resolver.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000', // 1 hour
      },
      cron_restart: '0 * * * *', // Every hour
      log_file: './automation/logs/dependency-resolver.log',
      error_file: './automation/logs/dependency-resolver-error.log',
      out_file: './automation/logs/dependency-resolver-out.log',
    },

    // Configuration Error Fixer - runs every 2 hours
    {
      name: 'config-error-fixer',
      script: './scripts/automation/config-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000', // 2 hours
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './automation/logs/config-fixer.log',
      error_file: './automation/logs/config-fixer-error.log',
      out_file: './automation/logs/config-fixer-out.log',
    },

    // Enhanced Error Fixer - runs every 45 minutes
    {
      name: 'enhanced-error-fixer',
      script: './scripts/automation/enhanced-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '2700000', // 45 minutes
      },
      cron_restart: '*/45 * * * *', // Every 45 minutes
      log_file: './automation/logs/enhanced-fixer.log',
      error_file: './automation/logs/enhanced-fixer-error.log',
      out_file: './automation/logs/enhanced-fixer-out.log',
    },

    // Error Prevention Monitor - runs every 15 minutes
    {
      name: 'error-prevention-monitor',
      script: './scripts/automation/error-prevention-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000', // 15 minutes
      },
      cron_restart: '*/15 * * * *', // Every 15 minutes
      log_file: './automation/logs/error-prevention.log',
      error_file: './automation/logs/error-prevention-error.log',
      out_file: './automation/logs/error-prevention-out.log',
    },

    // Critical Error Alert System - runs every 5 minutes
    {
      name: 'critical-error-alert-system',
      script: './scripts/automation/critical-error-alert-system.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000', // 5 minutes
      },
      cron_restart: '*/5 * * * *', // Every 5 minutes
      log_file: './automation/logs/critical-alerts.log',
      error_file: './automation/logs/critical-alerts-error.log',
      out_file: './automation/logs/critical-alerts-out.log',
    },

    // Auto Recovery Manager - runs every 10 minutes
    {
      name: 'auto-recovery-manager',
      script: './scripts/automation/auto-recovery-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000', // 10 minutes
      },
      cron_restart: '*/10 * * * *', // Every 10 minutes
      log_file: './automation/logs/auto-recovery.log',
      error_file: './automation/logs/auto-recovery-error.log',
      out_file: './automation/logs/auto-recovery-out.log',
    },

    // Error Analytics Dashboard - runs every hour
    {
      name: 'error-analytics-dashboard',
      script: './scripts/automation/error-analytics-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000', // 1 hour
      },
      cron_restart: '0 * * * *', // Every hour
      log_file: './automation/logs/error-analytics.log',
      error_file: './automation/logs/error-analytics-error.log',
      out_file: './automation/logs/error-analytics-out.log',
    },

    // Code Quality Automation - runs every 2 hours
    {
      name: 'code-quality-automation',
      script: './scripts/automation/code-quality-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000', // 2 hours
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './automation/logs/code-quality.log',
      error_file: './automation/logs/code-quality-error.log',
      out_file: './automation/logs/code-quality-out.log',
    },

    // AI Code Review Automation - runs every 4 hours
    {
      name: 'ai-code-review-automation',
      script: './scripts/automation/ai-code-review-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '14400000', // 4 hours
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './automation/logs/ai-code-review.log',
      error_file: './automation/logs/ai-code-review-error.log',
      out_file: './automation/logs/ai-code-review-out.log',
    },

    // Predictive Issue Detection - runs every 3 hours
    {
      name: 'predictive-issue-detection',
      script: './scripts/automation/predictive-issue-detection.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '10800000', // 3 hours
      },
      cron_restart: '0 */3 * * *', // Every 3 hours
      log_file: './automation/logs/predictive-detection.log',
      error_file: './automation/logs/predictive-detection-error.log',
      out_file: './automation/logs/predictive-detection-out.log',
    },

    // Intelligent Automation Orchestrator - runs every 6 hours
    {
      name: 'intelligent-automation-orchestrator',
      script: './scripts/automation/intelligent-automation-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '21600000', // 6 hours
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: './automation/logs/intelligent-orchestrator.log',
      error_file: './automation/logs/intelligent-orchestrator-error.log',
      out_file: './automation/logs/intelligent-orchestrator-out.log',
    },
  ],

  deploy: {
    production: {
      user: 'root',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/bolt.new.zion.app.git',
      path: '/workspace/production',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && npm run build && pm2 reload ecosystem.error-automation.config.cjs --env production',
      'pre-setup': '',
    },
  },
};
