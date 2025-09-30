module.exports = {
  apps: [
    // Main Error Prevention Orchestrator
    {
      name: 'error-prevention-orchestrator',
      script: './scripts/automation/error-prevention-orchestrator.cjs',
      args: 'start',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'production',
        AUTOMATION_MODE: 'continuous',
        SCAN_INTERVAL: 300000, // 5 minutes
        LOG_LEVEL: 'info',
        AUTO_FIX_ENABLED: 'true'
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

    // TypeScript Error Fixer
    {
      name: 'typescript-error-fixer',
      script: './scripts/automation/typescript-error-fixer.cjs',
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
      error_file: './logs/typescript-error-fixer-error.log',
      out_file: './logs/typescript-error-fixer-out.log',
      log_file: './logs/typescript-error-fixer-combined.log',
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

    // Linting Error Fixer
    {
      name: 'linting-error-fixer',
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
      error_file: './logs/linting-error-fixer-error.log',
      out_file: './logs/linting-error-fixer-out.log',
      log_file: './logs/linting-error-fixer-combined.log',
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
      script: './scripts/automation/error-prevention-orchestrator.cjs',
      args: 'scan',
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
    },

    // File Corruption Monitor and Fixer
    {
      name: 'file-corruption-monitor',
      script: './scripts/automation/error-prevention-orchestrator.cjs',
      args: 'scan',
      cwd: './',
      watch: ['src/**/*', 'components/**/*', 'pages/**/*'],
      ignore_watch: ['node_modules', 'dist', '.git', '*.log', 'logs/*', '*.backup'],
      env: {
        NODE_ENV: 'production',
        MONITOR_MODE: 'file-watch',
        SCAN_INTERVAL: 30000, // 30 seconds
        LOG_LEVEL: 'info'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '256M',
      error_file: './logs/file-corruption-monitor-error.log',
      out_file: './logs/file-corruption-monitor-out.log',
      log_file: './logs/file-corruption-monitor-combined.log',
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

    // Syntax Error Quick Fixer
    {
      name: 'syntax-error-quick-fixer',
      script: './scripts/automation/error-prevention-orchestrator.cjs',
      args: 'scan',
      cwd: './',
      watch: ['src/**/*.{ts,tsx,js,jsx}'],
      ignore_watch: ['node_modules', 'dist', '.git', '*.log', 'logs/*', '*.backup'],
      env: {
        NODE_ENV: 'production',
        QUICK_FIX_MODE: 'true',
        SCAN_INTERVAL: 45000, // 45 seconds
        LOG_LEVEL: 'info'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '256M',
      error_file: './logs/syntax-error-quick-fixer-error.log',
      out_file: './logs/syntax-error-quick-fixer-out.log',
      log_file: './logs/syntax-error-quick-fixer-combined.log',
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

    // JSX Syntax Fixer
    {
      name: 'jsx-syntax-fixer',
      script: './scripts/automation/typescript-error-fixer.cjs',
      args: 'fix',
      cwd: './',
      watch: ['src/**/*.{tsx,jsx}'],
      ignore_watch: ['node_modules', 'dist', '.git', '*.log', 'logs/*', '*.backup'],
      env: {
        NODE_ENV: 'production',
        JSX_FIX_MODE: 'true',
        FIX_INTERVAL: 90000, // 1.5 minutes
        LOG_LEVEL: 'info'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '256M',
      error_file: './logs/jsx-syntax-fixer-error.log',
      out_file: './logs/jsx-syntax-fixer-out.log',
      log_file: './logs/jsx-syntax-fixer-combined.log',
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

    // Import Statement Fixer
    {
      name: 'import-statement-fixer',
      script: './scripts/automation/linting-fix-automation.cjs',
      args: 'fix',
      cwd: './',
      watch: ['src/**/*.{ts,tsx,js,jsx}'],
      ignore_watch: ['node_modules', 'dist', '.git', '*.log', 'logs/*', '*.backup'],
      env: {
        NODE_ENV: 'production',
        IMPORT_FIX_MODE: 'true',
        FIX_INTERVAL: 180000, // 3 minutes
        LOG_LEVEL: 'info'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '256M',
      error_file: './logs/import-statement-fixer-error.log',
      out_file: './logs/import-statement-fixer-out.log',
      log_file: './logs/import-statement-fixer-combined.log',
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

    // Error Prevention Dashboard
    {
      name: 'error-prevention-dashboard',
      script: './scripts/automation/error-prevention-orchestrator.cjs',
      args: 'status',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'production',
        DASHBOARD_MODE: 'true',
        UPDATE_INTERVAL: 60000, // 1 minute
        LOG_LEVEL: 'info'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '128M',
      error_file: './logs/error-prevention-dashboard-error.log',
      out_file: './logs/error-prevention-dashboard-out.log',
      log_file: './logs/error-prevention-dashboard-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '20s',
      max_restarts: 3,
      restart_delay: 5000,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 8000
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
      'post-deploy': 'npm install && pm2 reload ecosystem-error-prevention-automation.cjs --env production',
      'pre-setup': 'echo "Setting up error prevention automation environment"'
    },
    staging: {
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/develop',
      repo: 'git@github.com:your-username/zion-app.git',
      path: '/var/www/zion-app-staging',
      'pre-deploy-local': 'echo "Starting error prevention automation deployment"',
      'post-deploy': 'npm install && pm2 reload ecosystem-error-prevention-automation.cjs --env production',
      'pre-setup': 'echo "Setting up error prevention automation environment"'
    }
  }
};