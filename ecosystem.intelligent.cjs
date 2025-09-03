module.exports = {
  apps: [
    {
      name: 'ziontechgroup-web',
      script: 'npm',
      args: 'start',
      cwd: '/workspace',
      instances: 'max', // Auto-scale based on CPU cores
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      min_uptime: '10s',
      max_restarts: 10,
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      env_development: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      log_file: './logs/web.log',
      out_file: './logs/web-out.log',
      error_file: './logs/web-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      // Intelligent restart conditions
      restart_delay: 4000,
      exp_backoff_restart_delay: 100,
      // Health monitoring
      health_check_grace_period: 3000,
      health_check_fatal_exceptions: true
    },
    {
      name: 'intelligent-orchestrator',
      script: 'node',
      args: 'automation/intelligent-pm2-orchestrator.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/10 * * * *', // Restart every 10 minutes for fresh state
      env: {
        NODE_ENV: 'production',
        ORCHESTRATOR_MODE: 'intelligent'
      },
      log_file: './logs/orchestrator.log',
      out_file: './logs/orchestrator-out.log',
      error_file: './logs/orchestrator-error.log',
      max_memory_restart: '512M'
    },
    {
      name: 'auto-scaler',
      script: 'node',
      args: 'automation/auto-scaler.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/2 * * * *', // Check every 2 minutes
      env: {
        NODE_ENV: 'production',
        SCALE_THRESHOLD_CPU: 70,
        SCALE_THRESHOLD_MEMORY: 80,
        MIN_INSTANCES: 1,
        MAX_INSTANCES: 8
      },
      log_file: './logs/auto-scaler.log',
      out_file: './logs/auto-scaler-out.log',
      error_file: './logs/auto-scaler-error.log'
    },
    {
      name: 'health-monitor',
      script: 'node',
      args: 'automation/intelligent-health-monitor.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/5 * * * *', // Check every 5 minutes
      env: {
        NODE_ENV: 'production',
        HEALTH_CHECK_INTERVAL: 30000,
        RECOVERY_ATTEMPTS: 3
      },
      log_file: './logs/health-monitor.log',
      out_file: './logs/health-monitor-out.log',
      error_file: './logs/health-monitor-error.log'
    },
    {
      name: 'git-workflow-automator',
      script: 'node',
      args: 'automation/git-workflow-automator.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */6 * * *', // Check every 6 hours
      env: {
        NODE_ENV: 'production',
        AUTO_MERGE_ENABLED: 'true',
        BRANCH_PROTECTION: 'main'
      },
      log_file: './logs/git-workflow.log',
      out_file: './logs/git-workflow-out.log',
      error_file: './logs/git-workflow-error.log'
    },
    {
      name: 'deployment-automator',
      script: 'node',
      args: 'automation/deployment-automator.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */4 * * *', // Check every 4 hours
      env: {
        NODE_ENV: 'production',
        DEPLOYMENT_STRATEGY: 'blue-green',
        ROLLBACK_ENABLED: 'true'
      },
      log_file: './logs/deployment.log',
      out_file: './logs/deployment-out.log',
      error_file: './logs/deployment-error.log'
    },
    {
      name: 'performance-optimizer',
      script: 'node',
      args: 'automation/performance-optimizer.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */2 * * *', // Check every 2 hours
      env: {
        NODE_ENV: 'production',
        OPTIMIZATION_THRESHOLD: 80,
        AUTO_OPTIMIZE: 'true'
      },
      log_file: './logs/performance-optimizer.log',
      out_file: './logs/performance-optimizer-out.log',
      error_file: './logs/performance-optimizer-error.log'
    },
    {
      name: 'security-monitor',
      script: 'node',
      args: 'automation/security-monitor.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */3 * * *', // Check every 3 hours
      env: {
        NODE_ENV: 'production',
        SECURITY_SCAN_DEEP: 'true',
        AUTO_PATCH: 'false'
      },
      log_file: './logs/security-monitor.log',
      out_file: './logs/security-monitor-out.log',
      error_file: './logs/security-monitor-error.log'
    },
    {
      name: 'error-recovery-system',
      script: 'node',
      args: 'automation/error-recovery-system.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/15 * * * *', // Check every 15 minutes
      env: {
        NODE_ENV: 'production',
        RECOVERY_STRATEGY: 'intelligent',
        AUTO_FIX_ENABLED: 'true'
      },
      log_file: './logs/error-recovery.log',
      out_file: './logs/error-recovery-out.log',
      error_file: './logs/error-recovery-error.log'
    },
    {
      name: 'monitoring-dashboard',
      script: 'node',
      args: 'automation/monitoring-dashboard.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production',
        DASHBOARD_PORT: 3001,
        REAL_TIME_UPDATES: 'true'
      },
      log_file: './logs/monitoring-dashboard.log',
      out_file: './logs/monitoring-dashboard-out.log',
      error_file: './logs/monitoring-dashboard-error.log'
    }
  ]
};