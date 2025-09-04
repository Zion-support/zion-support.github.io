module.exports = {
  apps: [
    // Main Application with Enhanced Configuration
    {
      name: 'ziontechgroup-web-enhanced',
      script: 'npm',
      args: 'start',
      cwd: '/workspace',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      min_uptime: '10s',
      max_restarts: 15,
      restart_delay: 4000,
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        PM2_SERVE_PATH: '/workspace',
        PM2_SERVE_PORT: 3000,
        PM2_SERVE_SPA: 'true',
        ENABLE_METRICS: 'true',
        LOG_LEVEL: 'info'
      },
      env_development: {
        NODE_ENV: 'development',
        PORT: 3000,
        LOG_LEVEL: 'debug'
      },
      log_file: './logs/web-enhanced.log',
      out_file: './logs/web-enhanced-out.log',
      error_file: './logs/web-enhanced-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      time: true,
      source_map_support: true,
      instance_var: 'INSTANCE_ID'
    },

    // Enhanced AI Health Monitor
    {
      name: 'ai-health-monitor-enhanced',
      script: 'scripts/intelligent/ai-health-monitor-enhanced.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/2 * * * *', // Every 2 minutes
      max_memory_restart: '1G',
      min_uptime: '30s',
      max_restarts: 5,
      env: {
        NODE_ENV: 'production',
        MONITOR_INTERVAL: 30000,
        ALERT_THRESHOLD: 0.8,
        ENABLE_AI_ANALYSIS: 'true',
        HEALTH_REPORT_INTERVAL: 300000
      },
      log_file: './logs/ai-health-monitor-enhanced.log',
      out_file: './logs/ai-health-monitor-enhanced-out.log',
      error_file: './logs/ai-health-monitor-enhanced-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true
    },

    // Enhanced Git Automation
    {
      name: 'git-automation-enhanced',
      script: 'scripts/intelligent/git-automation-enhanced.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/5 * * * *', // Every 5 minutes
      max_memory_restart: '512M',
      min_uptime: '30s',
      max_restarts: 3,
      env: {
        NODE_ENV: 'production',
        AUTO_MERGE_ENABLED: 'true',
        CONFLICT_RESOLUTION: 'intelligent',
        BRANCH_PROTECTION: 'main',
        QUALITY_GATES_ENABLED: 'true',
        AUTO_COMMIT_ENABLED: 'true'
      },
      log_file: './logs/git-automation-enhanced.log',
      out_file: './logs/git-automation-enhanced-out.log',
      error_file: './logs/git-automation-enhanced-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Enhanced Deployment Automation
    {
      name: 'deployment-automation-enhanced',
      script: 'scripts/intelligent/deployment-automation-enhanced.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      min_uptime: '30s',
      max_restarts: 3,
      env: {
        NODE_ENV: 'production',
        AUTO_DEPLOY_ENABLED: 'true',
        ROLLBACK_ENABLED: 'true',
        HEALTH_CHECK_TIMEOUT: 300000,
        QUALITY_GATES_ENABLED: 'true',
        NOTIFICATIONS_ENABLED: 'true'
      },
      log_file: './logs/deployment-automation-enhanced.log',
      out_file: './logs/deployment-automation-enhanced-out.log',
      error_file: './logs/deployment-automation-enhanced-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Intelligent Performance Optimizer
    {
      name: 'performance-optimizer-enhanced',
      script: 'scripts/intelligent/performance-optimizer.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */1 * * *', // Every hour
      max_memory_restart: '800M',
      min_uptime: '30s',
      max_restarts: 3,
      env: {
        NODE_ENV: 'production',
        OPTIMIZATION_INTERVAL: 3600000,
        METRICS_THRESHOLD: 0.7,
        AUTO_OPTIMIZE: 'true',
        BUNDLE_ANALYSIS: 'true'
      },
      log_file: './logs/performance-optimizer-enhanced.log',
      out_file: './logs/performance-optimizer-enhanced-out.log',
      error_file: './logs/performance-optimizer-enhanced-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Enhanced Security Automation
    {
      name: 'security-automation-enhanced',
      script: 'scripts/intelligent/security-automation.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */2 * * *', // Every 2 hours
      max_memory_restart: '600M',
      min_uptime: '30s',
      max_restarts: 3,
      env: {
        NODE_ENV: 'production',
        SCAN_INTERVAL: 7200000,
        AUTO_PATCH: 'true',
        VULNERABILITY_THRESHOLD: 'medium',
        SECURITY_ALERTS: 'true',
        DEPENDENCY_SCAN: 'true'
      },
      log_file: './logs/security-automation-enhanced.log',
      out_file: './logs/security-automation-enhanced-out.log',
      error_file: './logs/security-automation-enhanced-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Enhanced Code Quality Monitor
    {
      name: 'code-quality-monitor-enhanced',
      script: 'scripts/intelligent/code-quality-monitor.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */1 * * *', // Every hour
      max_memory_restart: '600M',
      min_uptime: '30s',
      max_restarts: 3,
      env: {
        NODE_ENV: 'production',
        QUALITY_CHECK_INTERVAL: 3600000,
        AUTO_FIX_ENABLED: 'true',
        QUALITY_THRESHOLD: 0.8,
        LINT_AUTO_FIX: 'true',
        TEST_COVERAGE_THRESHOLD: 80
      },
      log_file: './logs/code-quality-monitor-enhanced.log',
      out_file: './logs/code-quality-monitor-enhanced-out.log',
      error_file: './logs/code-quality-monitor-enhanced-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Enhanced Resource Monitor
    {
      name: 'resource-monitor-enhanced',
      script: 'scripts/intelligent/resource-monitor.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/3 * * * *', // Every 3 minutes
      max_memory_restart: '300M',
      min_uptime: '30s',
      max_restarts: 5,
      env: {
        NODE_ENV: 'production',
        MONITOR_INTERVAL: 180000,
        ALERT_THRESHOLD: 0.85,
        AUTO_SCALE: 'true',
        RESOURCE_OPTIMIZATION: 'true'
      },
      log_file: './logs/resource-monitor-enhanced.log',
      out_file: './logs/resource-monitor-enhanced-out.log',
      error_file: './logs/resource-monitor-enhanced-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Enhanced Error Recovery System
    {
      name: 'error-recovery-enhanced',
      script: 'scripts/intelligent/error-recovery.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/1 * * * *', // Every minute
      max_memory_restart: '400M',
      min_uptime: '30s',
      max_restarts: 5,
      env: {
        NODE_ENV: 'production',
        RECOVERY_INTERVAL: 60000,
        AUTO_FIX_ENABLED: 'true',
        MAX_RETRY_ATTEMPTS: 3,
        INTELLIGENT_RECOVERY: 'true'
      },
      log_file: './logs/error-recovery-enhanced.log',
      out_file: './logs/error-recovery-enhanced-out.log',
      error_file: './logs/error-recovery-enhanced-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Enhanced Backup Automation
    {
      name: 'backup-automation-enhanced',
      script: 'scripts/intelligent/backup-automation.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 2 * * *', // Daily at 2 AM
      max_memory_restart: '500M',
      min_uptime: '30s',
      max_restarts: 3,
      env: {
        NODE_ENV: 'production',
        BACKUP_INTERVAL: 86400000,
        RETENTION_DAYS: 30,
        COMPRESSION_ENABLED: 'true',
        INCREMENTAL_BACKUP: 'true',
        CLOUD_BACKUP: 'false'
      },
      log_file: './logs/backup-automation-enhanced.log',
      out_file: './logs/backup-automation-enhanced-out.log',
      error_file: './logs/backup-automation-enhanced-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Intelligent Monitoring Dashboard
    {
      name: 'monitoring-dashboard',
      script: 'scripts/intelligent/monitoring-dashboard.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '400M',
      min_uptime: '30s',
      max_restarts: 3,
      env: {
        NODE_ENV: 'production',
        DASHBOARD_PORT: 3001,
        REAL_TIME_UPDATES: 'true',
        ALERT_NOTIFICATIONS: 'true'
      },
      log_file: './logs/monitoring-dashboard.log',
      out_file: './logs/monitoring-dashboard-out.log',
      error_file: './logs/monitoring-dashboard-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Intelligent CI/CD Pipeline
    {
      name: 'cicd-pipeline-enhanced',
      script: 'scripts/intelligent/cicd-pipeline.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/10 * * * *', // Every 10 minutes
      max_memory_restart: '600M',
      min_uptime: '30s',
      max_restarts: 3,
      env: {
        NODE_ENV: 'production',
        PIPELINE_INTERVAL: 600000,
        AUTO_TRIGGER: 'true',
        QUALITY_GATES: 'true',
        PARALLEL_EXECUTION: 'true'
      },
      log_file: './logs/cicd-pipeline-enhanced.log',
      out_file: './logs/cicd-pipeline-enhanced-out.log',
      error_file: './logs/cicd-pipeline-enhanced-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    }
  ],

  // Enhanced deployment configurations
  deploy: {
    production: {
      user: 'deploy',
      host: ['production-server-1', 'production-server-2'],
      ref: 'origin/main',
      repo: 'git@github.com:your-org/ziontechgroup.com.git',
      path: '/var/www/ziontechgroup.com',
      'pre-deploy-local': 'npm run build && npm run test:smoke',
      'post-deploy': 'npm install --production && pm2 reload ecosystem.enhanced-intelligent.cjs --env production && pm2 save',
      'pre-setup': 'apt-get update && apt-get install -y nodejs npm',
      'post-setup': 'npm install -g pm2',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    },
    staging: {
      user: 'deploy',
      host: ['staging-server'],
      ref: 'origin/develop',
      repo: 'git@github.com:your-org/ziontechgroup.com.git',
      path: '/var/www/ziontechgroup-staging.com',
      'pre-deploy-local': 'npm run build && npm run test:unit',
      'post-deploy': 'npm install && pm2 reload ecosystem.enhanced-intelligent.cjs --env staging',
      env: {
        NODE_ENV: 'staging',
        PORT: 3001
      }
    },
    development: {
      user: 'dev',
      host: ['dev-server'],
      ref: 'origin/develop',
      repo: 'git@github.com:your-org/ziontechgroup.com.git',
      path: '/var/www/ziontechgroup-dev.com',
      'post-deploy': 'npm install && pm2 reload ecosystem.enhanced-intelligent.cjs --env development',
      env: {
        NODE_ENV: 'development',
        PORT: 3002
      }
    }
  }
};