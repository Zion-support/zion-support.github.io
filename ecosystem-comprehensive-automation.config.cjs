module.exports = {
  apps: [
    // Main application;
    {
      name: 'zion-app',
      script: 'npm',
      args: 'start',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000 },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000 } },

    // ENHANCED ERROR FIXING AUTOMATION - HIGHEST PRIORITY;
    {
      name: 'enhanced-error-fixing-automation',
      script: './scripts/automation/enhanced-error-fixing-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000', // 15 minutes},
      cron_restart: '*/15 * * * *', // Every 15 minutes;
      log_file: './automation/logs/enhanced-error-fixing.log',
      error_file: './automation/logs/enhanced-error-fixing-error.log',
      out_file: './automation/logs/enhanced-error-fixing-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },

    // TypeScript Error Monitor - runs every 10 minutes;
    {
      name: 'typescript-error-monitor',
      script: './scripts/automation/typescript-error-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000', // 10 minutes},
      cron_restart: '*/10 * * * *', // Every 10 minutes;
      log_file: './automation/logs/typescript-error-monitor.log',
      error_file: './automation/logs/typescript-error-monitor-error.log',
      out_file: './automation/logs/typescript-error-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },

    // ESLint Error Cleaner - runs every 20 minutes;
    {
      name: 'eslint-error-cleaner',
      script: './scripts/automation/eslint-error-cleaner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1200000', // 20 minutes},
      cron_restart: '*/20 * * * *', // Every 20 minutes;
      log_file: './automation/logs/eslint-error-cleaner.log',
      error_file: './automation/logs/eslint-error-cleaner-error.log',
      out_file: './automation/logs/eslint-error-cleaner-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },

    // Import Error Resolver - runs every 25 minutes;
    {
      name: 'import-error-resolver',
      script: './scripts/automation/import-error-resolver.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1500000', // 25 minutes},
      cron_restart: '*/25 * * * *', // Every 25 minutes;
      log_file: './automation/logs/import-error-resolver.log',
      error_file: './automation/logs/import-error-resolver-error.log',
      out_file: './automation/logs/import-error-resolver-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },

    // JSX Error Fixer - runs every 30 minutes;
    {
      name: 'jsx-error-fixer',
      script: './scripts/automation/jsx-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000', // 30 minutes},
      cron_restart: '*/30 * * * *', // Every 30 minutes;
      log_file: './automation/logs/jsx-error-fixer.log',
      error_file: './automation/logs/jsx-error-fixer-error.log',
      out_file: './automation/logs/jsx-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },

    // Dependency Error Resolver - runs every hour;
    {
      name: 'dependency-error-resolver',
      script: './scripts/automation/dependency-error-resolver.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000', // 1 hour},
      cron_restart: '0 * * * *', // Every hour;
      log_file: './automation/logs/dependency-error-resolver.log',
      error_file: './automation/logs/dependency-error-resolver-error.log',
      out_file: './automation/logs/dependency-error-resolver-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },

    // Configuration Error Fixer - runs every 2 hours;
    {
      name: 'config-error-fixer',
      script: './scripts/automation/config-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000', // 2 hours},
      cron_restart: '0 */2 * * *', // Every 2 hours;
      log_file: './automation/logs/config-error-fixer.log',
      error_file: './automation/logs/config-error-fixer-error.log',
      out_file: './automation/logs/config-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },

    // Master Error Fixer - coordinates all error fixers;
    {
      name: 'master-error-fixer',
      script: './scripts/automation/master-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000', // 30 minutes},
      cron_restart: '*/30 * * * *', // Every 30 minutes;
      log_file: './automation/logs/master-error-fixer.log',
      error_file: './automation/logs/master-error-fixer-error.log',
      out_file: './automation/logs/master-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },

    // Enhanced Error Fixer - comprehensive error fixing;
    {
      name: 'enhanced-error-fixer',
      script: './scripts/automation/enhanced-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000', // 1 hour},
      cron_restart: '0 * * * *', // Every hour;
      log_file: './automation/logs/enhanced-error-fixer.log',
      error_file: './automation/logs/enhanced-error-fixer-error.log',
      out_file: './automation/logs/enhanced-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },

    // Error Prevention Monitor - proactive error detection;
    {
      name: 'error-prevention-monitor',
      script: './scripts/automation/error-prevention-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000', // 15 minutes},
      cron_restart: '*/15 * * * *', // Every 15 minutes;
      log_file: './automation/logs/error-prevention-monitor.log',
      error_file: './automation/logs/error-prevention-monitor-error.log',
      out_file: './automation/logs/error-prevention-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },

    // Critical Error Alert System - immediate error notifications;
    {
      name: 'critical-error-alert-system',
      script: './scripts/automation/critical-error-alert-system.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000', // 5 minutes},
      cron_restart: '*/5 * * * *', // Every 5 minutes;
      log_file: './automation/logs/critical-error-alert-system.log',
      error_file: './automation/logs/critical-error-alert-system-error.log',
      out_file: './automation/logs/critical-error-alert-system-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },

    // Error Analytics Dashboard - error reporting and analytics;
    {
      name: 'error-analytics-dashboard',
      script: './scripts/automation/error-analytics-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000', // 2 hours},
      cron_restart: '0 */2 * * *', // Every 2 hours;
      log_file: './automation/logs/error-analytics-dashboard.log',
      error_file: './automation/logs/error-analytics-dashboard-error.log',
      out_file: './automation/logs/error-analytics-dashboard-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },

    // Auto Recovery Manager - automatic recovery from errors;
    {
      name: 'auto-recovery-manager',
      script: './scripts/automation/auto-recovery-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000', // 10 minutes},
      cron_restart: '*/10 * * * *', // Every 10 minutes;
      log_file: './automation/logs/auto-recovery-manager.log',
      error_file: './automation/logs/auto-recovery-manager-error.log',
      out_file: './automation/logs/auto-recovery-manager-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },

    // INTELLIGENT AUTOMATION SYSTEMS;
    {
      name: 'ai-code-analyzer',
      script: './scripts/automation/ai-code-analyzer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AI_ANALYSIS_MODE: 'true' },
      cron_restart: '0 */2 * * *', // Every 2 hours;
      log_file: './automation/logs/ai-code-analyzer.log',
      error_file: './automation/logs/ai-code-analyzer-error.log',
      out_file: './automation/logs/ai-code-analyzer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' }, {
      name: 'smart-performance-optimizer',
      script: './scripts/automation/smart-performance-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PERFORMANCE_OPTIMIZATION_MODE: 'true' },
      cron_restart: '0 */4 * * *', // Every 4 hours;
      log_file: './automation/logs/smart-performance-optimizer.log',
      error_file: './automation/logs/smart-performance-optimizer-error.log',
      out_file: './automation/logs/smart-performance-optimizer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' }, {
      name: 'intelligent-dependency-manager',
      script: './scripts/automation/intelligent-dependency-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        DEPENDENCY_MANAGEMENT_MODE: 'true' },
      cron_restart: '0 6,18 * * *', // Restart at 6 AM and 6 PM;
      log_file: './automation/logs/intelligent-dependency-manager.log',
      error_file: './automation/logs/intelligent-dependency-manager-error.log',
      out_file: './automation/logs/intelligent-dependency-manager-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' }, {
      name: 'smart-deployment-automation',
      script: './scripts/automation/smart-deployment-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        DEPLOYMENT_AUTOMATION_MODE: 'true' },
      cron_restart: '0 */6 * * *', // Every 6 hours;
      log_file: './automation/logs/smart-deployment-automation.log',
      error_file: './automation/logs/smart-deployment-automation-error.log',
      out_file: './automation/logs/smart-deployment-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' }, {
      name: 'predictive-issue-detection',
      script: './scripts/automation/predictive-issue-detection.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production' },
      cron_restart: '0 */3 * * *', // Every 3 hours;
      log_file: './automation/logs/predictive-issue-detection.log',
      error_file: './automation/logs/predictive-issue-detection-error.log',
      out_file: './automation/logs/predictive-issue-detection-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' }, {
      name: 'intelligent-build-pipeline',
      script: './scripts/automation/intelligent-build-pipeline.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production' },
      cron_restart: '0 */8 * * *', // Every 8 hours;
      log_file: './automation/logs/intelligent-build-pipeline.log',
      error_file: './automation/logs/intelligent-build-pipeline-error.log',
      out_file: './automation/logs/intelligent-build-pipeline-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },

    // CONTINUOUS MONITORING AND MAINTENANCE;
    {
      name: 'continuous-improvement',
      script: './scripts/automation/continuous-improvement.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000', // 2 hours},
      cron_restart: '0 */2 * * *', // Every 2 hours;
      log_file: './automation/logs/continuous-improvement.log',
      error_file: './automation/logs/continuous-improvement-error.log',
      out_file: './automation/logs/continuous-improvement-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' }, {
      name: 'daily-build-test',
      script: './scripts/automation/daily-build-test.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000', // 1 hour},
      cron_restart: '0 * * * *', // Every hour;
      log_file: './automation/logs/daily-build-test.log',
      error_file: './automation/logs/daily-build-test-error.log',
      out_file: './automation/logs/daily-build-test-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' }, {
      name: 'security-audit',
      script: './scripts/automation/security-audit.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '14400000', // 4 hours},
      cron_restart: '0 */4 * * *', // Every 4 hours;
      log_file: './automation/logs/security-audit.log',
      error_file: './automation/logs/security-audit-error.log',
      out_file: './automation/logs/security-audit-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' }, {
      name: 'dependency-updates',
      script: './scripts/automation/dependency-updates.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '21600000', // 6 hours},
      cron_restart: '0 */6 * * *', // Every 6 hours;
      log_file: './automation/logs/dependency-updates.log',
      error_file: './automation/logs/dependency-updates-error.log',
      out_file: './automation/logs/dependency-updates-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' }, {
      name: 'performance-monitor',
      script: './scripts/automation/performance-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000', // 2 hours},
      cron_restart: '0 */2 * * *', // Every 2 hours;
      log_file: './automation/logs/performance-monitor.log',
      error_file: './automation/logs/performance-monitor-error.log',
      out_file: './automation/logs/performance-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' }, {
      name: 'quality-checks',
      script: './scripts/automation/quality-checks.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '10800000', // 3 hours},
      cron_restart: '0 */3 * * *', // Every 3 hours;
      log_file: './automation/logs/quality-checks.log',
      error_file: './automation/logs/quality-checks-error.log',
      out_file: './automation/logs/quality-checks-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' }, {
      name: 'link-checker',
      script: './scripts/automation/link-checker.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000', // 30 minutes},
      cron_restart: '*/30 * * * *', // Every 30 minutes;
      log_file: './automation/logs/link-checker.log',
      error_file: './automation/logs/link-checker-error.log',
      out_file: './automation/logs/link-checker-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' }, {
      name: 'sitemap-runner',
      script: './scripts/automation/sitemap-runner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '21600000', // 6 hours},
      cron_restart: '0 */6 * * *', // Every 6 hours;
      log_file: './automation/logs/sitemap-runner.log',
      error_file: './automation/logs/sitemap-runner-error.log',
      out_file: './automation/logs/sitemap-runner-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' } ],

  deploy: {
    production: {
      user: 'root',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/bolt.new.zion.app.git',
      path: '/workspace/production',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && npm run build && pm2 reload ecosystem-comprehensive-automation.config.cjs --env production',
      'pre-setup': '' } } };
