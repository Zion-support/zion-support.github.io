module.exports = {
  apps: [
    // Main Error Automation Orchestrator - Coordinates all error fixing processes
    {
      name: 'error-automation-orchestrator',
      script: './scripts/automation/pm2-error-automation-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      },
      env_production: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000'
      },
      log_file: './logs/error-automation-orchestrator.log',
      error_file: './logs/error-automation-orchestrator-error.log',
      out_file: './logs/error-automation-orchestrator-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Error Analyzer - Continuously analyzes project errors
    {
      name: 'error-analyzer',
      script: './scripts/automation/error-analyzer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */15 * * *', // Restart every 15 minutes
      log_file: './logs/error-analyzer.log',
      error_file: './logs/error-analyzer-error.log',
      out_file: './logs/error-analyzer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Comprehensive Error Fixer - Main error fixing automation
    {
      name: 'comprehensive-error-fixer',
      script: './scripts/automation/comprehensive-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */30 * * *', // Restart every 30 minutes
      log_file: './logs/comprehensive-error-fixer.log',
      error_file: './logs/comprehensive-error-fixer-error.log',
      out_file: './logs/comprehensive-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // TypeScript Error Fixer - Specialized TypeScript error fixing
    {
      name: 'typescript-error-fixer',
      script: './scripts/automation/typescript-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */20 * * *', // Restart every 20 minutes
      log_file: './logs/typescript-error-fixer.log',
      error_file: './logs/typescript-error-fixer-error.log',
      out_file: './logs/typescript-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // ESLint Error Cleaner - ESLint error fixing automation
    {
      name: 'eslint-error-cleaner',
      script: './scripts/automation/eslint-error-cleaner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */25 * * *', // Restart every 25 minutes
      log_file: './logs/eslint-error-cleaner.log',
      error_file: './logs/eslint-error-cleaner-error.log',
      out_file: './logs/eslint-error-cleaner-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Smart Dependency Fixer - Dependency and security issue fixing
    {
      name: 'smart-dependency-fixer',
      script: './scripts/automation/smart-dependency-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */60 * * *', // Restart every hour
      log_file: './logs/smart-dependency-fixer.log',
      error_file: './logs/smart-dependency-fixer-error.log',
      out_file: './logs/smart-dependency-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Security Audit - Security vulnerability scanning and fixing
    {
      name: 'security-audit',
      script: './scripts/automation/security-audit.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */120 * * *', // Restart every 2 hours
      log_file: './logs/security-audit.log',
      error_file: './logs/security-audit-error.log',
      out_file: './logs/security-audit-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Build Error Detector - Build process monitoring and fixing
    {
      name: 'build-error-detector',
      script: './scripts/automation/build-error-detector.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */45 * * *', // Restart every 45 minutes
      log_file: './logs/build-error-detector.log',
      error_file: './logs/build-error-detector-error.log',
      out_file: './logs/build-error-detector-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Automation Dashboard - Monitoring and reporting dashboard
    {
      name: 'automation-dashboard',
      script: './scripts/automation/automation-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */10 * * *', // Restart every 10 minutes
      log_file: './logs/automation-dashboard.log',
      error_file: './logs/automation-dashboard-error.log',
      out_file: './logs/automation-dashboard-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Error Prevention Monitor - Proactive error prevention
    {
      name: 'error-prevention-monitor',
      script: './scripts/automation/error-prevention-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */5 * * *', // Restart every 5 minutes
      log_file: './logs/error-prevention-monitor.log',
      error_file: './logs/error-prevention-monitor-error.log',
      out_file: './logs/error-prevention-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Quality Checks - Code quality monitoring and fixing
    {
      name: 'quality-checks',
      script: './scripts/automation/quality-checks.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */35 * * *', // Restart every 35 minutes
      log_file: './logs/quality-checks.log',
      error_file: './logs/quality-checks-error.log',
      out_file: './logs/quality-checks-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Performance Monitor - Performance issue detection and fixing
    {
      name: 'performance-monitor',
      script: './scripts/automation/performance-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */40 * * *', // Restart every 40 minutes
      log_file: './logs/performance-monitor.log',
      error_file: './logs/performance-monitor-error.log',
      out_file: './logs/performance-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Continuous Improvement - Continuous optimization automation
    {
      name: 'continuous-improvement',
      script: './scripts/automation/continuous-improvement.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */240 * * *', // Restart every 4 hours
      log_file: './logs/continuous-improvement.log',
      error_file: './logs/continuous-improvement-error.log',
      out_file: './logs/continuous-improvement-out.log',
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
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem-error-automation.config.cjs --env production',
      'pre-setup': ''
    }
  }
};