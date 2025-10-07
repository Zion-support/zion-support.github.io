module.exports = {
  apps: [
    // Main Application
    {
      name: 'zion-website',
      script: 'npm',
      args: 'run dev',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 3000 },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000 },
      log_file: './logs/zion-website.log',
      out_file: './logs/zion-website-out.log',
      error_file: './logs/zion-website-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: false,
      time: false },

    // Intelligent Error Prevention System
    {
      name: 'intelligent-error-prevention',
      script: './scripts/intelligent/error-prevention-system.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '800M',
      env: {
        NODE_ENV: 'production',
        AUTO_FIX: 'true',
        LOG_LEVEL: 'info' },
      error_file: './logs/intelligent-error-prevention-error.log',
      out_file: './logs/intelligent-error-prevention-out.log',
      log_file: './logs/intelligent-error-prevention-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '10s',
      restart_delay: 3000,
      cron_restart: '*/15 * * * *', // Run every 15 minutes
      pmx: true },

    // Smart Performance Optimizer
    {
      name: 'smart-performance-optimizer',
      script: './scripts/intelligent/performance-optimizer.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '600M',
      env: {
        NODE_ENV: 'production',
        OPTIMIZATION_LEVEL: 'aggressive',
        AUTO_OPTIMIZE: 'true' },
      error_file: './logs/smart-performance-optimizer-error.log',
      out_file: './logs/smart-performance-optimizer-out.log',
      log_file: './logs/smart-performance-optimizer-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '15s',
      restart_delay: 5000,
      cron_restart: '0 */2 * * *', // Run every 2 hours
      pmx: true },

    // Intelligent Dependency Manager
    {
      name: 'intelligent-dependency-manager',
      script: './scripts/intelligent/dependency-manager.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production',
        AUTO_UPDATE: 'true',
        SECURITY_FIRST: 'true' },
      error_file: './logs/intelligent-dependency-manager-error.log',
      out_file: './logs/intelligent-dependency-manager-out.log',
      log_file: './logs/intelligent-dependency-manager-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '20s',
      restart_delay: 5000,
      cron_restart: '0 */6 * * *', // Run every 6 hours
      pmx: true },

    // Smart Code Quality Monitor
    {
      name: 'smart-code-quality-monitor',
      script: './scripts/intelligent/code-quality-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '400M',
      env: {
        NODE_ENV: 'production',
        AUTO_FIX_ISSUES: 'true',
        QUALITY_THRESHOLD: '80' },
      error_file: './logs/smart-code-quality-monitor-error.log',
      out_file: './logs/smart-code-quality-monitor-out.log',
      log_file: './logs/smart-code-quality-monitor-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '10s',
      restart_delay: 2000,
      cron_restart: '*/30 * * * *', // Run every 30 minutes
      pmx: true },

    // Intelligent Build Monitor
    {
      name: 'intelligent-build-monitor',
      script: './scripts/intelligent/build-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '700M',
      env: {
        NODE_ENV: 'production',
        AUTO_REBUILD: 'true',
        CACHE_OPTIMIZATION: 'true' },
      error_file: './logs/intelligent-build-monitor-error.log',
      out_file: './logs/intelligent-build-monitor-out.log',
      log_file: './logs/intelligent-build-monitor-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '15s',
      restart_delay: 5000,
      cron_restart: '*/20 * * * *', // Run every 20 minutes
      pmx: true },

    // Smart Security Auditor
    {
      name: 'smart-security-auditor',
      script: './scripts/intelligent/security-auditor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'production',
        AUTO_PATCH: 'true',
        SECURITY_LEVEL: 'strict' },
      error_file: './logs/smart-security-auditor-error.log',
      out_file: './logs/smart-security-auditor-out.log',
      log_file: './logs/smart-security-auditor-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '10s',
      restart_delay: 3000,
      cron_restart: '0 */4 * * *', // Run every 4 hours
      pmx: true },

    // Intelligent Git Workflow Automator
    {
      name: 'intelligent-git-workflow',
      script: './scripts/intelligent/git-workflow-automator.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '400M',
      env: {
        NODE_ENV: 'production',
        AUTO_COMMIT: 'true',
        AUTO_PUSH: 'true',
        SMART_MERGE: 'true' },
      error_file: './logs/intelligent-git-workflow-error.log',
      out_file: './logs/intelligent-git-workflow-out.log',
      log_file: './logs/intelligent-git-workflow-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '10s',
      restart_delay: 2000,
      cron_restart: '*/10 * * * *', // Run every 10 minutes
      pmx: true },

    // Smart Health Monitor
    {
      name: 'smart-health-monitor',
      script: './scripts/intelligent/health-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '200M',
      env: {
        NODE_ENV: 'production',
        AUTO_RECOVERY: 'true',
        HEALTH_THRESHOLD: '90' },
      error_file: './logs/smart-health-monitor-error.log',
      out_file: './logs/smart-health-monitor-out.log',
      log_file: './logs/smart-health-monitor-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '5s',
      restart_delay: 1000,
      cron_restart: '*/5 * * * *', // Run every 5 minutes
      pmx: true },

    // Intelligent Log Analyzer
    {
      name: 'intelligent-log-analyzer',
      script: './scripts/intelligent/log-analyzer.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'production',
        AUTO_CLEANUP: 'true',
        PATTERN_DETECTION: 'true' },
      error_file: './logs/intelligent-log-analyzer-error.log',
      out_file: './logs/intelligent-log-analyzer-out.log',
      log_file: './logs/intelligent-log-analyzer-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '10s',
      restart_delay: 3000,
      cron_restart: '0 */1 * * *', // Run every hour
      pmx: true },

    // Smart Resource Optimizer
    {
      name: 'smart-resource-optimizer',
      script: './scripts/intelligent/resource-optimizer.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '400M',
      env: {
        NODE_ENV: 'production',
        AUTO_OPTIMIZE: 'true',
        MEMORY_LIMIT: '80' },
      error_file: './logs/smart-resource-optimizer-error.log',
      out_file: './logs/smart-resource-optimizer-out.log',
      log_file: './logs/smart-resource-optimizer-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '15s',
      restart_delay: 5000,
      cron_restart: '0 */3 * * *', // Run every 3 hours
      pmx: true } ],

  deploy: {
    production: {
      user: 'deploy',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/your-repo.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.intelligent.config.cjs --env production' } } };