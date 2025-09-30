module.exports = {
  apps: [
    // Enhanced Error Prevention Orchestrator
    {
      name: 'error-prevention-orchestrator-enhanced',
      script: './scripts/automation/error-prevention-automation.cjs',
      args: 'start',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'production',
        AUTOMATION_MODE: 'continuous',
        SCAN_INTERVAL: 300000, // 5 minutes
        FIX_INTERVAL: 600000,  // 10 minutes
        LOG_LEVEL: 'info',
        BACKUP_BEFORE_FIX: 'true',
        MAX_RETRIES: '3'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '1G',
      error_file: './logs/error-prevention-orchestrator-error.log',
      out_file: './logs/error-prevention-orchestrator-out.log',
      log_file: './logs/error-prevention-orchestrator-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '30s',
      max_restarts: 10,
      restart_delay: 15000,
      kill_timeout: 15000,
      wait_ready: true,
      listen_timeout: 20000,
      // Enhanced monitoring
      pmx: true,
      // Health checks
      health_check_grace_period: 30000,
      health_check_fatal_exceptions: true
    },

    // Syntax Error Fixer Service
    {
      name: 'syntax-error-fixer-service',
      script: './scripts/automation/syntax-error-fixer.cjs',
      args: 'fix',
      cwd: './',
      watch: ['src/**/*.{ts,tsx,js,jsx}', 'components/**/*.{ts,tsx,js,jsx}', 'pages/**/*.{ts,tsx,js,jsx}'],
      ignore_watch: ['node_modules', 'dist', '.git', '*.log', 'logs/*', '*.backup', '*.tsbackup', 'backups/*'],
      env: {
        NODE_ENV: 'production',
        AUTOMATION_MODE: 'watch',
        FIX_INTERVAL: 300000, // 5 minutes
        LOG_LEVEL: 'info',
        BACKUP_ENABLED: 'true'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '512M',
      error_file: './logs/syntax-error-fixer-error.log',
      out_file: './logs/syntax-error-fixer-out.log',
      log_file: './logs/syntax-error-fixer-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '20s',
      max_restarts: 5,
      restart_delay: 10000,
      kill_timeout: 10000,
      wait_ready: true,
      listen_timeout: 15000
    },

    // Continuous Error Monitoring Service
    {
      name: 'continuous-error-monitor',
      script: './scripts/automation/error-prevention-automation.cjs',
      args: 'scan',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'production',
        MONITOR_MODE: 'continuous',
        SCAN_INTERVAL: 180000, // 3 minutes
        LOG_LEVEL: 'info',
        ALERT_THRESHOLD: '100'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '512M',
      error_file: './logs/continuous-error-monitor-error.log',
      out_file: './logs/continuous-error-monitor-out.log',
      log_file: './logs/continuous-error-monitor-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '20s',
      max_restarts: 5,
      restart_delay: 10000,
      kill_timeout: 10000,
      wait_ready: true,
      listen_timeout: 15000
    },

    // Automated Error Fixing Service
    {
      name: 'automated-error-fixing',
      script: './scripts/automation/error-prevention-automation.cjs',
      args: 'fix',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'production',
        FIX_MODE: 'automated',
        FIX_INTERVAL: 900000, // 15 minutes
        LOG_LEVEL: 'info',
        BACKUP_BEFORE_FIX: 'true',
        MAX_FIX_ATTEMPTS: '3'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '1G',
      error_file: './logs/automated-error-fixing-error.log',
      out_file: './logs/automated-error-fixing-out.log',
      log_file: './logs/automated-error-fixing-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '30s',
      max_restarts: 5,
      restart_delay: 15000,
      kill_timeout: 15000,
      wait_ready: true,
      listen_timeout: 20000
    },

    // Health Monitoring Service
    {
      name: 'error-prevention-health-monitor',
      script: './scripts/automation/error-prevention-automation.cjs',
      args: 'health',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'production',
        HEALTH_CHECK_MODE: 'continuous',
        CHECK_INTERVAL: 120000, // 2 minutes
        LOG_LEVEL: 'info',
        ALERT_ENABLED: 'true'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '256M',
      error_file: './logs/health-monitor-error.log',
      out_file: './logs/health-monitor-out.log',
      log_file: './logs/health-monitor-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '20s',
      max_restarts: 3,
      restart_delay: 5000,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 10000
    },

    // Report Generation Service
    {
      name: 'report-generator',
      script: './scripts/automation/error-prevention-automation.cjs',
      args: 'scan',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'production',
        REPORT_MODE: 'scheduled',
        REPORT_INTERVAL: 3600000, // 1 hour
        LOG_LEVEL: 'info',
        REPORT_FORMATS: 'json,html,markdown'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '256M',
      error_file: './logs/report-generator-error.log',
      out_file: './logs/report-generator-out.log',
      log_file: './logs/report-generator-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '20s',
      max_restarts: 3,
      restart_delay: 5000,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 10000
    }
  ],

  deploy: {
    production: {
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/zion-app.git',
      path: '/var/www/zion-app',
      'pre-deploy-local': 'echo "Starting enhanced error prevention automation deployment"',
      'post-deploy': [
        'npm install',
        'pm2 reload ecosystem-error-prevention-enhanced.config.cjs --env production',
        'pm2 save',
        'echo "Enhanced error prevention automation deployed successfully"'
      ],
      'pre-setup': 'echo "Setting up enhanced error prevention automation environment"'
    },
    staging: {
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/develop',
      repo: 'git@github.com:your-username/zion-app.git',
      path: '/var/www/zion-app-staging',
      'pre-deploy-local': 'echo "Starting enhanced error prevention automation deployment to staging"',
      'post-deploy': [
        'npm install',
        'pm2 reload ecosystem-error-prevention-enhanced.config.cjs --env staging',
        'pm2 save',
        'echo "Enhanced error prevention automation deployed to staging successfully"'
      ],
      'pre-setup': 'echo "Setting up enhanced error prevention automation environment for staging"'
    }
  },

  // PM2 configuration
  pm2: {
    // Global PM2 settings
    max_memory_restart: '2G',
    node_args: '--max-old-space-size=2048',
    // Logging configuration
    log_file: './logs/pm2-combined.log',
    out_file: './logs/pm2-out.log',
    error_file: './logs/pm2-error.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    // Monitoring
    pmx: true,
    // Process management
    instances: 'max',
    exec_mode: 'cluster',
    // Health checks
    health_check_grace_period: 30000,
    health_check_fatal_exceptions: true,
    // Auto-restart settings
    autorestart: true,
    max_restarts: 10,
    restart_delay: 10000,
    // Memory and CPU limits
    max_memory_restart: '2G',
    node_args: '--max-old-space-size=2048',
    // Watch settings
    watch: false,
    ignore_watch: ['node_modules', 'dist', '.git', '*.log', 'logs/*', 'backups/*'],
    // Environment variables
    env: {
      NODE_ENV: 'production',
      PM2_HOME: './.pm2'
    }
  }
};