module.exports = {
  apps: [
    // Main Application with Enhanced Configuration;
    {
      name: 'ziontechgroup-web',
      script: 'npm',
      args: 'start',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      min_uptime: '10s',
      max_restarts: 10,
      env: {,
  NODE_ENV: 'production',
        PORT: 3000,
        ENABLE_METRICS: 'true
      },
      env_development: {,
  NODE_ENV: 'development',
        DEBUG: 'true',
      log_file: './logs/web.log',
      out_file: './logs/web-out.log',
      error_file: './logs/web-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      time: true,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 10000;

    // AI-Powered Intelligent Orchestrator;
      name: 'ai-intelligent-orchestrator',
      script: 'node',
      args: 'scripts/automation/ai-intelligent-orchestrator.cjs',
      cron_restart: '0 */1 * * *', // Every hour;
      restart_delay: 15000,
        AI_MODE: 'intelligent',
        DECISION_ENGINE: 'advanced',
        LEARNING_ENABLED: 'true',
        AUTO_OPTIMIZE: 'true
      log_file: './logs/ai-orchestrator.log',
      out_file: './logs/ai-orchestrator-out.log',
      error_file: './logs/ai-orchestrator-error.log',
      time: true;

    // Advanced Predictive Analytics Engine;
      name: 'predictive-analytics-engine',
      args: 'scripts/automation/predictive-analytics-engine.cjs',
      cron_restart: '*/5 * * * *', // Every 5 minutes;
      max_memory_restart: '512M',
      restart_delay: 10000,
        ML_MODEL: 'advanced',
        PREDICTION_INTERVAL: '300000',
        ALERT_THRESHOLD: '0.8
      log_file: './logs/predictive-analytics.log',
      out_file: './logs/predictive-analytics-out.log',
      error_file: './logs/predictive-analytics-error.log',

    // Intelligent Auto-Scaling Manager;
      name: 'intelligent-auto-scaler',
      args: 'scripts/automation/intelligent-auto-scaler.cjs',
      cron_restart: '*/2 * * * *', // Every 2 minutes;
      max_memory_restart: '256M',
      restart_delay: 5000,
        SCALING_STRATEGY: 'intelligent',
        CPU_THRESHOLD: '70',
        MEMORY_THRESHOLD: '80',
        MIN_INSTANCES: '1',
        MAX_INSTANCES: '5
      log_file: './logs/auto-scaler.log',
      out_file: './logs/auto-scaler-out.log',
      error_file: './logs/auto-scaler-error.log',

    // Advanced Security & Vulnerability Scanner;
      name: 'advanced-security-scanner',
      args: 'scripts/automation/advanced-security-scanner.cjs',
      cron_restart: '0 */2 * * *', // Every 2 hours;
      restart_delay: 20000,
        SECURITY_LEVEL: 'maximum',
        VULNERABILITY_SCANNING: 'true',
        DEPENDENCY_AUDIT: 'true',
        CODE_SECURITY_SCAN: 'true',
        INFRASTRUCTURE_SCAN: 'true
      log_file: './logs/security-scanner.log',
      out_file: './logs/security-scanner-out.log',
      error_file: './logs/security-scanner-error.log',

    // Intelligent Git Workflow Manager;
      name: 'intelligent-git-manager',
      args: 'scripts/automation/intelligent-git-manager.cjs',
      cron_restart: '*/10 * * * *', // Every 10 minutes;
        AUTO_MERGE: 'false',
        CONFLICT_RESOLUTION: 'intelligent',
        BRANCH_CLEANUP: 'true',
        PR_AUTOMATION: 'true',
        CODE_REVIEW_AI: 'true
      log_file: './logs/git-manager.log',
      out_file: './logs/git-manager-out.log',
      error_file: './logs/git-manager-error.log',

    // Advanced Performance Optimizer;
      name: 'advanced-performance-optimizer',
      args: 'scripts/automation/advanced-performance-optimizer.cjs',
      cron_restart: '0 */3 * * *', // Every 3 hours;
      restart_delay: 30000,
        OPTIMIZATION_LEVEL: 'aggressive',
        BUNDLE_OPTIMIZATION: 'true',
        CACHE_OPTIMIZATION: 'true',
        IMAGE_OPTIMIZATION: 'true',
        CDN_OPTIMIZATION: 'true
      log_file: './logs/performance-optimizer.log',
      out_file: './logs/performance-optimizer-out.log',
      error_file: './logs/performance-optimizer-error.log',

    // Intelligent Backup & Recovery System;
      name: 'intelligent-backup-system',
      args: 'scripts/automation/intelligent-backup-system.cjs',
      cron_restart: '0 2 * * *', // Daily at 2 AM;
      restart_delay: 60000,
        BACKUP_STRATEGY: 'intelligent',
        INCREMENTAL_BACKUP: 'true',
        CLOUD_BACKUP: 'true',
        DISASTER_RECOVERY: 'true',
        RETENTION_DAYS: '30
      log_file: './logs/backup-system.log',
      out_file: './logs/backup-system-out.log',
      error_file: './logs/backup-system-error.log',

    // Real-time Health Dashboard;
      name: 'health-dashboard',
      args: 'scripts/automation/health-dashboard.cjs',
      cron_restart: '*/1 * * * *', // Every minute;
        DASHBOARD_PORT: '3001',
        REAL_TIME_MONITORING: 'true',
        ALERT_SYSTEM: 'true',
        METRICS_COLLECTION: 'true
      log_file: './logs/health-dashboard.log',
      out_file: './logs/health-dashboard-out.log',
      error_file: './logs/health-dashboard-error.log',

    // Intelligent Code Quality Manager;
      name: 'intelligent-code-quality',
      args: 'scripts/automation/intelligent-code-quality.cjs',
      cron_restart: '*/15 * * * *', // Every 15 minutes;
        QUALITY_STANDARDS: 'strict',
        AUTO_FIX: 'true',
        CODE_REVIEW_AI: 'true',
        TECHNICAL_DEBT_TRACKING: 'true
      log_file: './logs/code-quality.log',
      out_file: './logs/code-quality-out.log',
      error_file: './logs/code-quality-error.log',

    // Advanced Testing Automation;
      name: 'advanced-testing-automation',
      args: 'scripts/automation/advanced-testing-automation.cjs',
      cron_restart: '*/20 * * * *', // Every 20 minutes;
        TEST_STRATEGY: 'comprehensive',
        PARALLEL_TESTS: 'true',
        E2E_TESTING: 'true',
        PERFORMANCE_TESTING: 'true',
        SECURITY_TESTING: 'true
      log_file: './logs/testing-automation.log',
      out_file: './logs/testing-automation-out.log',
      error_file: './logs/testing-automation-error.log',

    // Intelligent Deployment Orchestrator;
      name: 'intelligent-deployment-orchestrator',
      args: 'scripts/automation/intelligent-deployment-orchestrator.cjs',
      cron_restart: '*/30 * * * *', // Every 30 minutes;
      restart_delay: 25000,
        DEPLOYMENT_STRATEGY: 'blue-green',
        AUTO_DEPLOY: 'false',
        ROLLBACK_ENABLED: 'true',
        CANARY_DEPLOYMENT: 'true',
        HEALTH_CHECKS: 'comprehensive
      log_file: './logs/deployment-orchestrator.log',
      out_file: './logs/deployment-orchestrator-out.log',
      error_file: './logs/deployment-orchestrator-error.log',

    // Resource Monitor & Optimizer;
      name: 'resource-monitor-optimizer',
      args: 'scripts/automation/resource-monitor-optimizer.cjs',
      cron_restart: '*/3 * * * *', // Every 3 minutes;
        MONITORING_INTERVAL: '180000',
        RESOURCE_OPTIMIZATION: 'true',
        MEMORY_OPTIMIZATION: 'true',
        CPU_OPTIMIZATION: 'true
      log_file: './logs/resource-monitor.log',
      out_file: './logs/resource-monitor-out.log',
      error_file: './logs/resource-monitor-error.log',

    // AI-Powered Error Prevention;
      name: 'ai-error-prevention',
      args: 'scripts/automation/ai-error-prevention.cjs',
        ERROR_PREDICTION: 'true',
        PREVENTIVE_ACTIONS: 'true',
        PATTERN_RECOGNITION: 'true
      log_file: './logs/ai-error-prevention.log',
      out_file: './logs/ai-error-prevention-out.log',
      error_file: './logs/ai-error-prevention-error.log',
    }]
  ],

  // Enhanced PM2 Deploy configuration;
  deploy: {,
  production: {
      user: 'node',
      host: 'your-production-server.com',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/your-repo.git',
      path: '/var/www/production',
      'pre-deploy-local': 'npm run build && npm run test:smoke',
      'post-deploy': 'npm install && pm2 reload ecosystem.enhanced-intelligent-v3.cjs --env production && pm2 save',
      'pre-setup': 'apt-get update && apt-get install -y git
    staging: {,
      host: 'your-staging-server.com',
      ref: 'origin/develop',
      path: '/var/www/staging',
      'post-deploy': 'npm install && pm2 reload ecosystem.enhanced-intelligent-v3.cjs --env staging && pm2 save',
    development: {,
      host: 'your-dev-server.com',
      ref: 'origin/feature/*',
      path: '/var/www/development',
      'pre-deploy-local': 'npm run build',
      'post-deploy': 'npm install && pm2 reload ecosystem.enhanced-intelligent-v3.cjs --env development && pm2 save',
    }
};