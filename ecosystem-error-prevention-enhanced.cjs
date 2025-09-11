module.exports = {
  apps: [
    // Enhanced Error Prevention Orchestrator
    {
      name: 'error-prevention-orchestrator-enhanced',
      script: './scripts/automation/error-fix-automation.cjs',
      args: 'run',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'production',
        AUTOMATION_MODE: 'continuous',
        SCAN_INTERVAL: 300000, // 5 minutes
        LOG_LEVEL: 'info',
        MAX_RETRIES: 3,
        AUTO_RESTART_ON_ERROR: true
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '1G',
      error_file: './logs/error-prevention-orchestrator-enhanced-error.log',
      out_file: './logs/error-prevention-orchestrator-enhanced-out.log',
      log_file: './logs/error-prevention-orchestrator-enhanced-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '30s',
      max_restarts: 10,
      restart_delay: 15000,
      kill_timeout: 15000,
      wait_ready: true,
      listen_timeout: 20000,
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      max_unstable_restarts: 5
    },

    // Real-time Error Monitor
    {
      name: 'real-time-error-monitor',
      script: './scripts/automation/real-time-error-monitor.cjs',
      args: 'monitor',
      cwd: './',
      watch: ['src/**/*', 'components/**/*', 'pages/**/*', 'utils/**/*'],
      ignore_watch: [
        'node_modules', 'dist', '.git', '*.log', 'logs/*', 
        '*.backup', '*.tsbackup', '*.lintbackup', 'reports/*'
      ],
      env: {
        NODE_ENV: 'production',
        MONITOR_MODE: 'real-time',
        SCAN_INTERVAL: 30000, // 30 seconds
        LOG_LEVEL: 'info',
        AUTO_FIX_ENABLED: true,
        NOTIFICATION_ENABLED: true
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '512M',
      error_file: './logs/real-time-error-monitor-error.log',
      out_file: './logs/real-time-error-monitor-out.log',
      log_file: './logs/real-time-error-monitor-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '20s',
      max_restarts: 5,
      restart_delay: 10000,
      kill_timeout: 10000,
      wait_ready: true,
      listen_timeout: 12000
    },

    // Intelligent Code Quality Fixer
    {
      name: 'intelligent-code-quality-fixer',
      script: './scripts/automation/intelligent-code-quality-fixer.cjs',
      args: 'fix',
      cwd: './',
      watch: ['src/**/*.{ts,tsx,js,jsx}', 'components/**/*.{ts,tsx,js,jsx}', 'pages/**/*.{ts,tsx,js,jsx}'],
      ignore_watch: [
        'node_modules', 'dist', '.git', '*.log', 'logs/*', 
        '*.backup', '*.tsbackup', '*.lintbackup', 'reports/*'
      ],
      env: {
        NODE_ENV: 'production',
        AUTOMATION_MODE: 'intelligent',
        FIX_INTERVAL: 60000, // 1 minute
        LOG_LEVEL: 'info',
        AI_ASSISTED_FIXES: true,
        LEARNING_MODE: true,
        PATTERN_RECOGNITION: true
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '512M',
      error_file: './logs/intelligent-code-quality-fixer-error.log',
      out_file: './logs/intelligent-code-quality-fixer-out.log',
      log_file: './logs/intelligent-code-quality-fixer-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '20s',
      max_restarts: 5,
      restart_delay: 8000,
      kill_timeout: 8000,
      wait_ready: true,
      listen_timeout: 10000
    },

    // Automated Testing and Validation
    {
      name: 'automated-testing-validation',
      script: './scripts/automation/automated-testing-validation.cjs',
      args: 'validate',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'production',
        VALIDATION_MODE: 'continuous',
        TEST_INTERVAL: 300000, // 5 minutes
        LOG_LEVEL: 'info',
        AUTO_FIX_ON_FAILURE: true,
        GENERATE_REPORTS: true,
        NOTIFY_ON_FAILURE: true
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '768M',
      error_file: './logs/automated-testing-validation-error.log',
      out_file: './logs/automated-testing-validation-out.log',
      log_file: './logs/automated-testing-validation-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '30s',
      max_restarts: 5,
      restart_delay: 12000,
      kill_timeout: 12000,
      wait_ready: true,
      listen_timeout: 15000
    },

    // Performance and Security Scanner
    {
      name: 'performance-security-scanner',
      script: './scripts/automation/performance-security-scanner.cjs',
      args: 'scan',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'production',
        SCAN_MODE: 'scheduled',
        SCAN_INTERVAL: 900000, // 15 minutes
        LOG_LEVEL: 'info',
        SECURITY_CHECKS: true,
        PERFORMANCE_ANALYSIS: true,
        VULNERABILITY_SCANNING: true,
        AUTO_REMEDIATION: true
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '1G',
      error_file: './logs/performance-security-scanner-error.log',
      out_file: './logs/performance-security-scanner-out.log',
      log_file: './logs/performance-security-scanner-combined.log',
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

    // Code Style and Formatting Enforcer
    {
      name: 'code-style-formatting-enforcer',
      script: './scripts/automation/code-style-formatting-enforcer.cjs',
      args: 'enforce',
      cwd: './',
      watch: ['src/**/*.{ts,tsx,js,jsx}', 'components/**/*.{ts,tsx,js,jsx}', 'pages/**/*.{ts,tsx,js,jsx}'],
      ignore_watch: [
        'node_modules', 'dist', '.git', '*.log', 'logs/*', 
        '*.backup', '*.tsbackup', '*.lintbackup', 'reports/*'
      ],
      env: {
        NODE_ENV: 'production',
        ENFORCEMENT_MODE: 'strict',
        FORMAT_INTERVAL: 120000, // 2 minutes
        LOG_LEVEL: 'info',
        AUTO_FORMAT: true,
        STYLE_GUIDE: 'strict',
        CONSISTENCY_CHECK: true
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '256M',
      error_file: './logs/code-style-formatting-enforcer-error.log',
      out_file: './logs/code-style-formatting-enforcer-out.log',
      log_file: './logs/code-style-formatting-enforcer-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '20s',
      max_restarts: 3,
      restart_delay: 5000,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 8000
    },

    // Dependency and Security Manager
    {
      name: 'dependency-security-manager',
      script: './scripts/automation/dependency-security-manager.cjs',
      args: 'manage',
      cwd: './',
      watch: ['package.json', 'package-lock.json', 'yarn.lock'],
      ignore_watch: ['node_modules', 'dist', '.git', '*.log', 'logs/*'],
      env: {
        NODE_ENV: 'production',
        MANAGEMENT_MODE: 'proactive',
        CHECK_INTERVAL: 1800000, // 30 minutes
        LOG_LEVEL: 'info',
        AUTO_UPDATE: true,
        SECURITY_AUDIT: true,
        VULNERABILITY_FIXES: true,
        DEPENDENCY_ANALYSIS: true
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '512M',
      error_file: './logs/dependency-security-manager-error.log',
      out_file: './logs/dependency-security-manager-out.log',
      log_file: './logs/dependency-security-manager-combined.log',
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

    // Health Check and Monitoring Dashboard
    {
      name: 'health-check-monitoring-dashboard',
      script: './scripts/automation/health-check-monitoring-dashboard.cjs',
      args: 'dashboard',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'production',
        DASHBOARD_MODE: 'real-time',
        UPDATE_INTERVAL: 60000, // 1 minute
        LOG_LEVEL: 'info',
        METRICS_COLLECTION: true,
        ALERTING: true,
        PERFORMANCE_MONITORING: true,
        RESOURCE_USAGE_TRACKING: true
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '512M',
      error_file: './logs/health-check-monitoring-dashboard-error.log',
      out_file: './logs/health-check-monitoring-dashboard-out.log',
      log_file: './logs/health-check-monitoring-dashboard-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '20s',
      max_restarts: 5,
      restart_delay: 8000,
      kill_timeout: 8000,
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
      'post-deploy': 'npm install && pm2 reload ecosystem-error-prevention-enhanced.cjs --env production',
      'pre-setup': 'echo "Setting up enhanced error prevention automation environment"',
      'post-setup': 'pm2 start ecosystem-error-prevention-enhanced.cjs --env production'
    },
    staging: {
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/develop',
      repo: 'git@github.com:your-username/zion-app.git',
      path: '/var/www/zion-app-staging',
      'pre-deploy-local': 'echo "Starting enhanced error prevention automation deployment"',
      'post-deploy': 'npm install && pm2 reload ecosystem-error-prevention-enhanced.cjs --env production',
      'pre-setup': 'echo "Setting up enhanced error prevention automation environment"',
      'post-setup': 'pm2 start ecosystem-error-prevention-enhanced.cjs --env production'
    }
  },

  // PM2 Configuration
  pm2: {
    max_memory_restart: '2G',
    node_args: '--max-old-space-size=4096',
    instances: 'max',
    exec_mode: 'cluster',
    watch: false,
    ignore_watch: ['node_modules', 'logs', '*.log'],
    merge_logs: true,
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    error_file: './logs/pm2-error.log',
    out_file: './logs/pm2-out.log',
    log_file: './logs/pm2-combined.log',
    time: true,
    autorestart: true,
    max_restarts: 10,
    min_uptime: '30s',
    restart_delay: 10000,
    kill_timeout: 10000,
    wait_ready: true,
    listen_timeout: 15000
  }
};