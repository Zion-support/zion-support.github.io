module.exports = {
  apps: [
    // Master Error Detector & Fixer - Main coordinator (HIGHEST PRIORITY)
    {
      name: 'master-error-detector-fixer',
      script: './scripts/automation/master-error-detector-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000' // 5 minutes
      },
      cron_restart: '0 */5 * * *', // Every 5 minutes
      log_file: './automation/logs/master-error-detector.log',
      error_file: './automation/logs/master-error-detector-error.log',
      out_file: './automation/logs/master-error-detector-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Enhanced TypeScript Error Fixer - Specialized TypeScript fixes (HIGH PRIORITY)
    {
      name: 'typescript-error-fixer-enhanced',
      script: './scripts/automation/typescript-error-fixer-enhanced.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      },
      cron_restart: '0 */10 * * *', // Every 10 minutes
      log_file: './automation/logs/typescript-error-fixer.log',
      error_file: './automation/logs/typescript-error-fixer-error.log',
      out_file: './automation/logs/typescript-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Continuous Build Error Detector - Monitors build health (HIGH PRIORITY)
    {
      name: 'build-error-detector',
      script: './scripts/automation/build-error-detector.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      },
      cron_restart: '0 */15 * * *', // Every 15 minutes
      log_file: './automation/logs/build-error-detector.log',
      error_file: './automation/logs/build-error-detector-error.log',
      out_file: './automation/logs/build-error-detector-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // ESLint Error Cleaner - Fixes linting issues (MEDIUM PRIORITY)
    {
      name: 'eslint-error-cleaner',
      script: './scripts/automation/eslint-error-cleaner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      },
      cron_restart: '0 */30 * * *', // Every 30 minutes
      log_file: './automation/logs/eslint-error-cleaner.log',
      error_file: './automation/logs/eslint-error-cleaner-error.log',
      out_file: './automation/logs/eslint-error-cleaner-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Dependency Error Resolver - Fixes dependency issues (MEDIUM PRIORITY)
    {
      name: 'dependency-error-resolver',
      script: './scripts/automation/dependency-error-resolver.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000' // 1 hour
      },
      cron_restart: '0 */60 * * *', // Every hour
      log_file: './automation/logs/dependency-error-resolver.log',
      error_file: './automation/logs/dependency-error-resolver-error.log',
      out_file: './automation/logs/dependency-error-resolver-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Enhanced Error Fixer - Comprehensive error fixing (HIGH PRIORITY)
    {
      name: 'enhanced-error-fixer',
      script: './scripts/automation/enhanced-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1200000' // 20 minutes
      },
      cron_restart: '0 */20 * * *', // Every 20 minutes
      log_file: './automation/logs/enhanced-error-fixer.log',
      error_file: './automation/logs/enhanced-error-fixer-error.log',
      out_file: './automation/logs/enhanced-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Error Prevention Monitor - Prevents errors before they occur (MEDIUM PRIORITY)
    {
      name: 'error-prevention-monitor',
      script: './scripts/automation/error-prevention-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '2400000' // 40 minutes
      },
      cron_restart: '0 */40 * * *', // Every 40 minutes
      log_file: './automation/logs/error-prevention-monitor.log',
      error_file: './automation/logs/error-prevention-monitor-error.log',
      out_file: './automation/logs/error-prevention-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Critical Error Alert System - Alerts on critical issues (HIGH PRIORITY)
    {
      name: 'critical-error-alert-system',
      script: './scripts/automation/critical-error-alert-system.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000' // 5 minutes
      },
      cron_restart: '0 */5 * * *', // Every 5 minutes
      log_file: './automation/logs/critical-error-alert.log',
      error_file: './automation/logs/critical-error-alert-error.log',
      out_file: './automation/logs/critical-error-alert-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Error Analytics Dashboard - Monitors error trends (LOW PRIORITY)
    {
      name: 'error-analytics-dashboard',
      script: './scripts/automation/error-analytics-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      },
      cron_restart: '0 */120 * * *', // Every 2 hours
      log_file: './automation/logs/error-analytics.log',
      error_file: './automation/logs/error-analytics-error.log',
      out_file: './automation/logs/error-analytics-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Auto Recovery Manager - Handles system recovery (HIGH PRIORITY)
    {
      name: 'auto-recovery-manager',
      script: './scripts/automation/auto-recovery-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      },
      cron_restart: '0 */10 * * *', // Every 10 minutes
      log_file: './automation/logs/auto-recovery.log',
      error_file: './automation/logs/auto-recovery-error.log',
      out_file: './automation/logs/auto-recovery-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Code Quality Automation - Maintains code quality (MEDIUM PRIORITY)
    {
      name: 'code-quality-automation',
      script: './scripts/automation/code-quality-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000' // 1 hour
      },
      cron_restart: '0 */60 * * *', // Every hour
      log_file: './automation/logs/code-quality.log',
      error_file: './automation/logs/code-quality-error.log',
      out_file: './automation/logs/code-quality-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Intelligent Automation Orchestrator - Coordinates all automations (HIGHEST PRIORITY)
    {
      name: 'intelligent-automation-orchestrator',
      script: './scripts/automation/intelligent-automation-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000' // 5 minutes
      },
      cron_restart: '0 */5 * * *', // Every 5 minutes
      log_file: './automation/logs/automation-orchestrator.log',
      error_file: './automation/logs/automation-orchestrator-error.log',
      out_file: './automation/logs/automation-orchestrator-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Project Health Monitor - Overall project health monitoring (MEDIUM PRIORITY)
    {
      name: 'project-health-monitor',
      script: './scripts/automation/project-health-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      },
      cron_restart: '0 */30 * * *', // Every 30 minutes
      log_file: './automation/logs/project-health.log',
      error_file: './automation/logs/project-health-error.log',
      out_file: './automation/logs/project-health-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Unified Automation Dashboard - Central monitoring (LOW PRIORITY)
    {
      name: 'unified-automation-dashboard',
      script: './scripts/automation/unified-automation-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      },
      cron_restart: '0 */120 * * *', // Every 2 hours
      log_file: './automation/logs/unified-dashboard.log',
      error_file: './automation/logs/unified-dashboard-error.log',
      out_file: './automation/logs/unified-dashboard-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
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
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem-error-fixing.config.cjs --env production',
      'pre-setup': ''
    }
  }
};