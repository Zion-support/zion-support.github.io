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

    // Netlify Build Monitor - Core monitoring and auto-fixing;
    {
      name: 'netlify-build-monitor',
      script: './automation/netlify-build-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        NETLIFY_SITE_ID: process.env.NETLIFY_SITE_ID,
        NETLIFY_TOKEN: process.env.NETLIFY_TOKEN },
      cron_restart: '0 0 * * *', // Restart daily at midnight;
      log_file: './logs/netlify-build-monitor.log',
      error_file: './logs/netlify-build-monitor-error.log',
      out_file: './logs/netlify-build-monitor-out.log' },

    // Netlify Build Automation - API integration and deployment;
    {
      name: 'netlify-build-automation',
      script: './automation/netlify-build-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        NETLIFY_SITE_ID: process.env.NETLIFY_SITE_ID,
        NETLIFY_TOKEN: process.env.NETLIFY_TOKEN },
      cron_restart: '0 6 * * *', // Restart daily at 6 AM;
      log_file: './logs/netlify-build-automation.log',
      error_file: './logs/netlify-build-automation-error.log',
      out_file: './logs/netlify-build-automation-out.log' },

    // Build Health Monitor - Prevents build issues;
    {
      name: 'build-health-monitor',
      script: './automation/build-health-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production' },
      cron_restart: '0 12 * * *', // Restart daily at noon;
      log_file: './logs/build-monitor.log',
      error_file: './logs/build-monitor-error.log',
      out_file: './logs/build-monitor-out.log' },

    // Code Quality Monitor - Prevents code issues;
    {
      name: 'code-quality-monitor',
      script: './automation/code-quality-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production' },
      cron_restart: '0 18 * * *', // Restart daily at 6 PM;
      log_file: './logs/code-quality.log',
      error_file: './logs/code-quality-error.log',
      out_file: './logs/code-quality-out.log' },

    // Dependency Health Monitor - Prevents dependency issues;
    {
      name: 'dependency-monitor',
      script: './automation/dependency-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production' },
      cron_restart: '0 3 * * *', // Restart daily at 3 AM;
      log_file: './logs/dependency.log',
      error_file: './logs/dependency-error.log',
      out_file: './logs/dependency-out.log' },

    // Build Automation - Automatically fixes common issues;
    {
      name: 'build-automation',
      script: './automation/build-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production' },
      cron_restart: '0 9 * * *', // Restart daily at 9 AM;
      log_file: './logs/build-automation.log',
      error_file: './logs/build-automation-error.log',
      out_file: './logs/build-automation-out.log' },

    // File Integrity Monitor - Prevents file corruption;
    {
      name: 'file-integrity-monitor',
      script: './automation/file-integrity-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production' },
      cron_restart: '0 15 * * *', // Restart daily at 3 PM;
      log_file: './logs/file-integrity.log',
      error_file: './logs/file-integrity-error.log',
      out_file: './logs/file-integrity-out.log' },

    // Performance Optimizer - Continuous performance monitoring;
    {
      name: 'performance-optimizer',
      script: './automation/performance-optimizer.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production' },
      cron_restart: '0 21 * * *', // Restart daily at 9 PM;
      log_file: './logs/performance-optimizer.log',
      error_file: './logs/performance-optimizer-error.log',
      out_file: './logs/performance-optimizer-out.log' },

    // Lint Monitor - Continuous code quality enforcement;
    {
      name: 'lint-monitor',
      script: './automation/lint-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production' },
      cron_restart: '0 1 * * *', // Restart daily at 1 AM;
      log_file: './logs/lint-monitor.log',
      error_file: './logs/lint-monitor-error.log',
      out_file: './logs/lint-monitor-out.log' },

    // Intelligent Orchestrator - Coordinates all automation;
    {
      name: 'intelligent-orchestrator',
      script: './automation/intelligent-orchestrator.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production' },
      cron_restart: '0 5 * * *', // Restart daily at 5 AM;
      log_file: './logs/intelligent-orchestrator.log',
      error_file: './logs/intelligent-orchestrator-error.log',
      out_file: './logs/intelligent-orchestrator-out.log' },

    // Automation Dashboard - Monitoring and control interface;
    {
      name: 'automation-dashboard',
      script: './automation/automation-dashboard.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        PORT: 3001 },
      cron_restart: '0 7 * * *', // Restart daily at 7 AM;
      log_file: './logs/automation-dashboard.log',
      error_file: './logs/automation-dashboard-error.log',
      out_file: './logs/automation-dashboard-out.log' },

    // Project Health Monitor - Overall project health;
    {
      name: 'project-health-monitor',
      script: './scripts/automation/project-health-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production' },
      cron_restart: '*/15 * * * *', // Every 15 minutes;
      log_file: './logs/project-health-monitor.log',
      error_file: './logs/project-health-monitor-error.log',
      out_file: './logs/project-health-monitor-out.log' },

    // TypeScript Syntax Fixer - Continuous TypeScript fixes;
    {
      name: 'typescript-syntax-fixer',
      script: './scripts/automation/typescript-syntax-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production' },
      cron_restart: '*/10 * * * *', // Every 10 minutes;
      log_file: './logs/typescript-syntax-fixer.log',
      error_file: './logs/typescript-syntax-fixer-error.log',
      out_file: './logs/typescript-syntax-fixer-out.log' },

    // Dependency Manager - Dependency health management;
    {
      name: 'dependency-manager',
      script: './scripts/automation/dependency-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production' },
      cron_restart: '0 */2 * * *', // Every 2 hours;
      log_file: './logs/dependency-manager.log',
      error_file: './logs/dependency-manager-error.log',
      out_file: './logs/dependency-manager-out.log' },

    // Project Health Dashboard - Real-time health monitoring;
    {
      name: 'project-health-dashboard',
      script: './scripts/automation/project-health-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production' },
      cron_restart: '*/5 * * * *', // Every 5 minutes;
      log_file: './logs/project-health-dashboard.log',
      error_file: './logs/project-health-dashboard-error.log',
      out_file: './logs/project-health-dashboard-out.log' } ],

  deploy: {
    production: {
      user: 'miami2',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/Users/miami2/zion-app-clone',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && npm run build && pm2 reload ecosystem.config.cjs --env production',
      'pre-setup': '' } } };
