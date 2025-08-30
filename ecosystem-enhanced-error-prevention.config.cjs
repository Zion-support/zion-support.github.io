module.exports = {
  apps: [
    // Enhanced Error Prevention Orchestrator
    {
      name: 'enhanced-error-prevention-orchestrator',
      script: './scripts/automation/comprehensive-error-fixer.cjs',
      args: 'run',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'production',
        AUTOMATION_MODE: 'continuous',
        SCAN_INTERVAL: 300000, // 5 minutes
        LOG_LEVEL: 'info',
        MAX_RETRIES: 3,
        ERROR_THRESHOLD: 100
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '1G',
      error_file: './logs/enhanced-error-prevention-orchestrator-error.log',
      out_file: './logs/enhanced-error-prevention-orchestrator-out.log',
      log_file: './logs/enhanced-error-prevention-orchestrator-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '30s',
      max_restarts: 10,
      restart_delay: 15000,
      kill_timeout: 15000,
      wait_ready: true,
      listen_timeout: 20000,
      cron_restart: '0 */6 * * *' // Restart every 6 hours
    },

    // Syntax Error Fixer - High Priority
    {
      name: 'syntax-error-fixer',
      script: './scripts/automation/syntax-error-fixer.cjs',
      args: 'run',
      cwd: './',
      watch: ['src/**/*.{ts,tsx,js,jsx}', 'components/**/*.{ts,tsx,js,jsx}', 'pages/**/*.{ts,tsx,js,jsx}'],
      ignore_watch: ['node_modules', 'dist', '.git', '*.log', 'logs/*', '*.backup', '*.tsbackup', 'reports/*'],
      env: {
        NODE_ENV: 'production',
        AUTOMATION_MODE: 'watch',
        FIX_INTERVAL: 30000, // 30 seconds
        LOG_LEVEL: 'info',
        PRIORITY: 'high'
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
      min_uptime: '15s',
      max_restarts: 5,
      restart_delay: 5000,
      kill_timeout: 8000,
      wait_ready: true,
      listen_timeout: 10000
    },

    // TypeScript Error Fixer
    {
      name: 'typescript-error-fixer',
      script: './scripts/automation/comprehensive-error-fixer.cjs',
      args: 'typescript',
      cwd: './',
      watch: ['src/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}', 'pages/**/*.{ts,tsx}'],
      ignore_watch: ['node_modules', 'dist', '.git', '*.log', 'logs/*', '*.backup', '*.tsbackup', 'reports/*'],
      env: {
        NODE_ENV: 'production',
        AUTOMATION_MODE: 'watch',
        FIX_INTERVAL: 60000, // 1 minute
        LOG_LEVEL: 'info',
        PRIORITY: 'medium'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '512M',
      error_file: './logs/typescript-error-fixer-error.log',
      out_file: './logs/typescript-error-fixer-out.log',
      log_file: './logs/typescript-error-fixer-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '20s',
      max_restarts: 5,
      restart_delay: 8000,
      kill_timeout: 10000,
      wait_ready: true,
      listen_timeout: 12000
    },

    // Linting Error Fixer
    {
      name: 'linting-error-fixer',
      script: './scripts/automation/comprehensive-error-fixer.cjs',
      args: 'linting',
      cwd: './',
      watch: ['src/**/*.{ts,tsx,js,jsx}', 'components/**/*.{ts,tsx,js,jsx}', 'pages/**/*.{ts,tsx,js,jsx}'],
      ignore_watch: ['node_modules', 'dist', '.git', '*.log', 'logs/*', '*.backup', '*.lintbackup', 'reports/*'],
      env: {
        NODE_ENV: 'production',
        AUTOMATION_MODE: 'watch',
        FIX_INTERVAL: 120000, // 2 minutes
        LOG_LEVEL: 'info',
        PRIORITY: 'medium'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '512M',
      error_file: './logs/linting-error-fixer-error.log',
      out_file: './logs/linting-error-fixer-out.log',
      log_file: './logs/linting-error-fixer-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '20s',
      max_restarts: 5,
      restart_delay: 8000,
      kill_timeout: 10000,
      wait_ready: true,
      listen_timeout: 12000
    },

    // Build Error Fixer
    {
      name: 'build-error-fixer',
      script: './scripts/automation/comprehensive-error-fixer.cjs',
      args: 'build',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'production',
        AUTOMATION_MODE: 'scheduled',
        BUILD_INTERVAL: 300000, // 5 minutes
        LOG_LEVEL: 'info',
        PRIORITY: 'low'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '1G',
      error_file: './logs/build-error-fixer-error.log',
      out_file: './logs/build-error-fixer-out.log',
      log_file: './logs/build-error-fixer-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '30s',
      max_restarts: 3,
      restart_delay: 15000,
      kill_timeout: 20000,
      wait_ready: true,
      listen_timeout: 25000
    },

    // Dependency Error Fixer
    {
      name: 'dependency-error-fixer',
      script: './scripts/automation/comprehensive-error-fixer.cjs',
      args: 'dependencies',
      cwd: './',
      watch: ['package.json', 'package-lock.json'],
      ignore_watch: ['node_modules', 'dist', '.git', '*.log', 'logs/*', 'reports/*'],
      env: {
        NODE_ENV: 'production',
        AUTOMATION_MODE: 'watch',
        CHECK_INTERVAL: 600000, // 10 minutes
        LOG_LEVEL: 'info',
        PRIORITY: 'low'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '256M',
      error_file: './logs/dependency-error-fixer-error.log',
      out_file: './logs/dependency-error-fixer-out.log',
      log_file: './logs/dependency-error-fixer-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '20s',
      max_restarts: 3,
      restart_delay: 10000,
      kill_timeout: 15000,
      wait_ready: true,
      listen_timeout: 20000
    },

    // Error Prevention Monitor
    {
      name: 'error-prevention-monitor',
      script: './scripts/automation/error-prevention-monitor.cjs',
      args: 'monitor',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'production',
        MONITOR_MODE: 'continuous',
        SCAN_INTERVAL: 180000, // 3 minutes
        LOG_LEVEL: 'info',
        ALERT_THRESHOLD: 50
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '256M',
      error_file: './logs/error-prevention-monitor-error.log',
      out_file: './logs/error-prevention-monitor-out.log',
      log_file: './logs/error-prevention-monitor-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '20s',
      max_restarts: 5,
      restart_delay: 8000,
      kill_timeout: 10000,
      wait_ready: true,
      listen_timeout: 12000
    },

    // Scheduled Comprehensive Error Fixer
    {
      name: 'scheduled-comprehensive-fixer',
      script: './scripts/automation/comprehensive-error-fixer.cjs',
      args: 'run',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'production',
        SCHEDULE_MODE: 'interval',
        RUN_INTERVAL: 900000, // 15 minutes
        LOG_LEVEL: 'info',
        COMPREHENSIVE_MODE: 'true'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '1G',
      error_file: './logs/scheduled-comprehensive-fixer-error.log',
      out_file: './logs/scheduled-comprehensive-fixer-out.log',
      log_file: './logs/scheduled-comprehensive-fixer-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '30s',
      max_restarts: 5,
      restart_delay: 15000,
      kill_timeout: 20000,
      wait_ready: true,
      listen_timeout: 25000,
      cron_restart: '0 */4 * * *' // Restart every 4 hours
    },

    // Health Check and Reporting
    {
      name: 'error-prevention-health-check',
      script: './scripts/automation/health-check.cjs',
      args: 'check',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'production',
        HEALTH_CHECK_INTERVAL: 300000, // 5 minutes
        LOG_LEVEL: 'info',
        GENERATE_REPORTS: 'true'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '256M',
      error_file: './logs/health-check-error.log',
      out_file: './logs/health-check-out.log',
      log_file: './logs/health-check-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '15s',
      max_restarts: 3,
      restart_delay: 5000,
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
      'post-deploy': 'npm install && pm2 reload ecosystem-enhanced-error-prevention.config.cjs --env production',
      'pre-setup': 'echo "Setting up enhanced error prevention automation environment"'
    },
    staging: {
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/develop',
      repo: 'git@github.com:your-username/zion-app.git',
      path: '/var/www/zion-app-staging',
      'pre-deploy-local': 'echo "Starting enhanced error prevention automation deployment"',
      'post-deploy': 'npm install && pm2 reload ecosystem-enhanced-error-prevention.config.cjs --env production',
      'pre-setup': 'echo "Setting up enhanced error prevention automation environment"'
    }
  }
};