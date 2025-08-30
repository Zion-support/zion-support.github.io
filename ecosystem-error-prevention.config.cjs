module.exports = {
  apps: [
    // Error Prevention Automation - Main Orchestrator
    {
      name: 'error-prevention-orchestrator',
      script: './scripts/automation/automation-orchestrator.cjs',
      args: 'run',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'production',
        AUTOMATION_MODE: 'continuous',
        SCAN_INTERVAL: 300000, // 5 minutes
        LOG_LEVEL: 'info'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '512M',
      error_file: './logs/error-prevention-orchestrator-error.log',
      out_file: './logs/error-prevention-orchestrator-out.log',
      log_file: './logs/error-prevention-orchestrator-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '30s',
      max_restarts: 5,
      restart_delay: 10000,
      kill_timeout: 10000,
      wait_ready: true,
      listen_timeout: 15000
    },

    // TypeScript Fix Automation
    {
      name: 'typescript-fix-automation',
      script: './scripts/automation/typescript-fix-automation.cjs',
      args: 'fix',
      cwd: './',
      watch: ['src/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}', 'pages/**/*.{ts,tsx}'],
      ignore_watch: ['node_modules', 'dist', '.git', '*.log', 'logs/*', '*.backup', '*.tsbackup'],
      env: {
        NODE_ENV: 'production',
        AUTOMATION_MODE: 'watch',
        FIX_INTERVAL: 60000, // 1 minute
        LOG_LEVEL: 'info'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '256M',
      error_file: './logs/typescript-fix-error.log',
      out_file: './logs/typescript-fix-out.log',
      log_file: './logs/typescript-fix-combined.log',
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

    // Linting Fix Automation
    {
      name: 'linting-fix-automation',
      script: './scripts/automation/linting-fix-automation.cjs',
      args: 'fix',
      cwd: './',
      watch: ['src/**/*.{ts,tsx,js,jsx}', 'components/**/*.{ts,tsx,js,jsx}', 'pages/**/*.{ts,tsx,js,jsx}'],
      ignore_watch: ['node_modules', 'dist', '.git', '*.log', 'logs/*', '*.backup', '*.lintbackup'],
      env: {
        NODE_ENV: 'production',
        AUTOMATION_MODE: 'watch',
        FIX_INTERVAL: 120000, // 2 minutes
        LOG_LEVEL: 'info'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '256M',
      error_file: './logs/linting-fix-error.log',
      out_file: './logs/linting-fix-out.log',
      log_file: './logs/linting-fix-combined.log',
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

    // Error Prevention Monitor
    {
      name: 'error-prevention-monitor',
      script: './scripts/automation/error-prevention-automation.cjs',
      args: 'watch',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'production',
        MONITOR_MODE: 'continuous',
        SCAN_INTERVAL: 180000, // 3 minutes
        LOG_LEVEL: 'info'
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
      max_restarts: 3,
      restart_delay: 5000,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 8000
    },

    // Scheduled Error Prevention Runner
    {
      name: 'scheduled-error-prevention',
      script: './scripts/automation/automation-orchestrator.cjs',
      args: 'run',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'production',
        SCHEDULE_MODE: 'interval',
        RUN_INTERVAL: 900000, // 15 minutes
        LOG_LEVEL: 'info'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '512M',
      error_file: './logs/scheduled-error-prevention-error.log',
      out_file: './logs/scheduled-error-prevention-out.log',
      log_file: './logs/scheduled-error-prevention-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '30s',
      max_restarts: 5,
      restart_delay: 10000,
      kill_timeout: 10000,
      wait_ready: true,
      listen_timeout: 15000
    }
  ],

  deploy: {
    production: {
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/zion-app.git',
      path: '/var/www/zion-app',
      'pre-deploy-local': 'echo "Starting error prevention automation deployment"',
      'post-deploy': 'npm install && pm2 reload ecosystem-error-prevention.config.cjs --env production',
      'pre-setup': 'echo "Setting up error prevention automation environment"'
    },
    staging: {
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/develop',
      repo: 'git@github.com:your-username/zion-app.git',
      path: '/var/www/zion-app-staging',
      'pre-deploy-local': 'echo "Starting error prevention automation deployment"',
      'post-deploy': 'npm install && pm2 reload ecosystem-error-prevention.config.cjs --env production',
      'pre-setup': 'echo "Setting up error prevention automation environment"'
    }
  }
};