module.exports = {
  apps: [
    {
      name: 'bolt-zion-app',
      script: 'npm',
      args: 'run preview',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      log_file: 'logs/pm2/preview.log',
      error_file: 'logs/pm2/preview-error.log',
      out_file: 'logs/pm2/preview-out.log'
    },
    {
      name: 'intelligent-monitor',
      script: 'scripts/pm2/intelligent-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'intelligent-monitor',
        MONITORING_INTERVAL: '30000',
        PREDICTIVE_ANALYSIS: 'true',
        AUTO_OPTIMIZE: 'true'
      },
      cron_restart: '0 */5 * * *',
      log_file: 'logs/pm2/intelligent-monitor.log',
      error_file: 'logs/pm2/intelligent-monitor-error.log',
      out_file: 'logs/pm2/intelligent-monitor-out.log'
    },
    {
      name: 'ai-code-analyzer',
      script: 'scripts/pm2/ai-code-analyzer.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'ai-code-analyzer',
        ANALYSIS_DEPTH: 'deep',
        AUTO_FIX: 'true',
        SUGGEST_OPTIMIZATIONS: 'true'
      },
      cron_restart: '0 */2 * * *',
      log_file: 'logs/pm2/ai-code-analyzer.log',
      error_file: 'logs/pm2/ai-code-analyzer-error.log',
      out_file: 'logs/pm2/ai-code-analyzer-out.log'
    },
    {
      name: 'smart-git-automator',
      script: 'scripts/pm2/smart-git-automator.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'smart-git-automator',
        AUTO_MERGE: 'true',
        CONFLICT_RESOLUTION: 'intelligent',
        BRANCH_STRATEGY: 'smart'
      },
      cron_restart: '0 */3 * * *',
      log_file: 'logs/pm2/smart-git-automator.log',
      error_file: 'logs/pm2/smart-git-automator-error.log',
      out_file: 'logs/pm2/smart-git-automator-out.log'
    },
    {
      name: 'deployment-pipeline',
      script: 'scripts/pm2/deployment-pipeline.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'deployment-pipeline',
        AUTO_DEPLOY: 'true',
        ROLLBACK_ENABLED: 'true',
        HEALTH_CHECKS: 'true'
      },
      cron_restart: '0 */6 * * *',
      log_file: 'logs/pm2/deployment-pipeline.log',
      error_file: 'logs/pm2/deployment-pipeline-error.log',
      out_file: 'logs/pm2/deployment-pipeline-out.log'
    },
    {
      name: 'performance-optimizer',
      script: 'scripts/pm2/performance-optimizer.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'performance-optimizer',
        AUTO_OPTIMIZE: 'true',
        BUNDLE_ANALYSIS: 'true',
        CACHE_OPTIMIZATION: 'true'
      },
      cron_restart: '0 */4 * * *',
      log_file: 'logs/pm2/performance-optimizer.log',
      error_file: 'logs/pm2/performance-optimizer-error.log',
      out_file: 'logs/pm2/performance-optimizer-out.log'
    },
    {
      name: 'security-monitor',
      script: 'scripts/pm2/security-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'security-monitor',
        VULNERABILITY_SCAN: 'true',
        DEPENDENCY_CHECK: 'true',
        CODE_SECURITY: 'true'
      },
      cron_restart: '0 */8 * * *',
      log_file: 'logs/pm2/security-monitor.log',
      error_file: 'logs/pm2/security-monitor-error.log',
      out_file: 'logs/pm2/security-monitor-out.log'
    },
    {
      name: 'backup-manager',
      script: 'scripts/pm2/backup-manager.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'backup-manager',
        AUTO_BACKUP: 'true',
        INCREMENTAL_BACKUP: 'true',
        DISASTER_RECOVERY: 'true'
      },
      cron_restart: '0 2 * * *',
      log_file: 'logs/pm2/backup-manager.log',
      error_file: 'logs/pm2/backup-manager-error.log',
      out_file: 'logs/pm2/backup-manager-out.log'
    },
    {
      name: 'health-dashboard',
      script: 'scripts/pm2/health-dashboard.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'health-dashboard',
        DASHBOARD_PORT: '3001',
        REAL_TIME_METRICS: 'true',
        ALERTING: 'true'
      },
      cron_restart: '0 */1 * * *',
      log_file: 'logs/pm2/health-dashboard.log',
      error_file: 'logs/pm2/health-dashboard-error.log',
      out_file: 'logs/pm2/health-dashboard-out.log'
    }
  ]
};