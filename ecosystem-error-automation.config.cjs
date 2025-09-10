module.exports = {
  apps: [
    // Main Error Automation Orchestrator - Coordinates all error fixing activities;
    {
      name: 'error-automation-orchestrator',
      script: './scripts/automation/pm2-error-automation-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_MODE: 'true' },
      log_file: './automation/logs/error-orchestrator.log',
      error_file: './automation/logs/error-orchestrator-error.log',
      out_file: './automation/logs/error-orchestrator-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },

    // Comprehensive Error Fixer - Runs every 2 hours;
    {
      name: 'comprehensive-error-fixer',
      script: './scripts/automation/comprehensive-error-fixer-enhanced.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000', // 2 hours},
      cron_restart: '0 */2 * * *', // Every 2 hours;
      log_file: './automation/logs/comprehensive-error-fixer.log',
      error_file: './automation/logs/comprehensive-error-fixer-error.log',
      out_file: './automation/logs/comprehensive-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },

    // TypeScript Error Fixer - Runs every 30 minutes;
    {
      name: 'typescript-error-fixer',
      script: './scripts/automation/typescript-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000', // 30 minutes},
      cron_restart: '*/30 * * * *', // Every 30 minutes;
      log_file: './automation/logs/typescript-error-fixer.log',
      error_file: './automation/logs/typescript-error-fixer-error.log',
      out_file: './automation/logs/typescript-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },

    // Build Error Monitor - Runs every hour;
    {
      name: 'build-error-monitor',
      script: './scripts/automation/build-error-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000', // 1 hour},
      cron_restart: '0 * * * *', // Every hour;
      log_file: './automation/logs/build-error-monitor.log',
      error_file: './automation/logs/build-error-monitor-error.log',
      out_file: './automation/logs/build-error-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },

    // Import/Export Fixer - Runs every 15 minutes;
    {
      name: 'import-export-fixer',
      script: './scripts/automation/import-export-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000', // 15 minutes},
      cron_restart: '*/15 * * * *', // Every 15 minutes;
      log_file: './automation/logs/import-export-fixer.log',
      error_file: './automation/logs/import-export-fixer-error.log',
      out_file: './automation/logs/import-export-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },

    // Enhanced Error Detector - runs every 10 minutes (HIGHEST PRIORITY)
    {
      name: 'enhanced-error-detector',
      script: './scripts/automation/enhanced-error-detector.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000', // 10 minutes},
      cron_restart: '*/10 * * * *', // Restart every 10 minutes;
      log_file: './automation/logs/enhanced-error-detector.log',
      error_file: './automation/logs/enhanced-error-detector-error.log',
      out_file: './automation/logs/enhanced-error-detector-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },

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
        PORT: 3000 } } ],

  deploy: {
    production: {
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/zion-tech-group.git',
      path: '/var/www/zion-tech-group',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && pm2 reload ecosystem-error-automation.config.cjs',
      'pre-setup': '' } } };
