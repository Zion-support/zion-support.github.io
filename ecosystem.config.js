module.exports = {
  apps: [
    // Frontend Development Server
    {
      name: 'zion-frontend-dev',
      script: 'npm',
      args: 'run dev',
      cwd: './',
      watch: [
        'src/**/*',
        'public/**/*',
        'tailwind.config.js',
        'vite.config.ts'
      ],
      ignore_watch: [
        'node_modules/**/*',
        'dist/**/*',
        '.git/**/*',
        '*.log'
      ],
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
        NODE_OPTIONS: '--max-old-space-size=4096 --openssl-legacy-provider'
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '1G',
      error_file: './logs/frontend-error.log',
      out_file: './logs/frontend-out.log',
      log_file: './logs/frontend-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 4000,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 8000
    },

    // Backend Development Server
    {
      name: 'zion-backend-dev',
      script: 'npm',
      args: 'run dev',
      cwd: './server',
      watch: [
        'src/**/*',
        'package.json'
      ],
      ignore_watch: [
        'node_modules/**/*',
        'dist/**/*',
        '*.log'
      ],
      env: {
        NODE_ENV: 'development',
        PORT: 5000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 5000
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '512M',
      error_file: '../logs/backend-error.log',
      out_file: '../logs/backend-out.log',
      log_file: '../logs/backend-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 4000,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 8000
    },

    // Hybrid Development (Frontend + Backend)
    {
      name: 'zion-hybrid-dev',
      script: 'npm',
      args: 'run dev:hybrid',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'development',
        FRONTEND_PORT: 3000,
        BACKEND_PORT: 5000
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '2G',
      error_file: './logs/hybrid-error.log',
      out_file: './logs/hybrid-out.log',
      log_file: './logs/hybrid-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 5,
      restart_delay: 5000,
      kill_timeout: 10000,
      wait_ready: true,
      listen_timeout: 15000
    },

    // Production Frontend
    {
      name: 'zion-frontend-prod',
      script: 'npm',
      args: 'run start',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      max_memory_restart: '1G',
      error_file: './logs/frontend-prod-error.log',
      out_file: './logs/frontend-prod-out.log',
      log_file: './logs/frontend-prod-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '30s',
      max_restarts: 3,
      restart_delay: 10000,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 8000
    },

    // Production Backend
    {
      name: 'zion-backend-prod',
      script: 'npm',
      args: 'start',
      cwd: './server',
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: 5000
      },
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      max_memory_restart: '1G',
      error_file: '../logs/backend-prod-error.log',
      out_file: '../logs/backend-prod-out.log',
      log_file: '../logs/backend-prod-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '30s',
      max_restarts: 3,
      restart_delay: 10000,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 8000
    },

    // Intelligent Automation Orchestrator
    {
      name: 'zion-automation-orchestrator',
      script: './automation/intelligent-orchestrator.cjs',
      args: 'continuous',
      cwd: './',
      watch: [
        'automation/**/*',
        'package.json',
        'vite.config.ts',
        'tailwind.config.js'
      ],
      ignore_watch: [
        'node_modules/**/*',
        'dist/**/*',
        '*.log',
        'logs/**/*'
      ],
      env: {
        NODE_ENV: 'development',
        AUTOMATION_MODE: 'continuous',
        LOG_LEVEL: 'info'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '512M',
      error_file: './logs/automation-error.log',
      out_file: './logs/automation-out.log',
      log_file: './logs/automation-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 5,
      restart_delay: 5000,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 8000
    },

    // Code Quality Monitor
    {
      name: 'zion-code-quality-monitor',
      script: './automation/code-quality-monitor.cjs',
      cwd: './',
      watch: [
        'src/**/*',
        'server/src/**/*',
        '*.config.js',
        '*.config.ts'
      ],
      ignore_watch: [
        'node_modules/**/*',
        'dist/**/*',
        '*.log',
        'logs/**/*'
      ],
      env: {
        NODE_ENV: 'development',
        MONITOR_MODE: 'continuous',
        LOG_LEVEL: 'info'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '256M',
      error_file: './logs/code-quality-error.log',
      out_file: './logs/code-quality-out.log',
      log_file: './logs/code-quality-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 3,
      restart_delay: 3000,
      kill_timeout: 3000,
      wait_ready: true,
      listen_timeout: 5000
    },

    // Performance Monitor
    {
      name: 'zion-performance-monitor',
      script: './automation/performance-optimizer.cjs',
      cwd: './',
      watch: [
        'src/**/*',
        'public/**/*',
        'vite.config.ts',
        'tailwind.config.js'
      ],
      ignore_watch: [
        'node_modules/**/*',
        'dist/**/*',
        '*.log',
        'logs/**/*'
      ],
      env: {
        NODE_ENV: 'development',
        MONITOR_MODE: 'continuous',
        LOG_LEVEL: 'info'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '256M',
      error_file: './logs/performance-error.log',
      out_file: './logs/performance-out.log',
      log_file: './logs/performance-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 3,
      restart_delay: 3000,
      kill_timeout: 3000,
      wait_ready: true,
      listen_timeout: 5000
    },

    // Security Scanner
    {
      name: 'zion-security-scanner',
      script: './automation/security-scanner.cjs',
      cwd: './',
      watch: [
        'src/**/*',
        'server/src/**/*',
        'package.json',
        'server/package.json'
      ],
      ignore_watch: [
        'node_modules/**/*',
        'dist/**/*',
        '*.log',
        'logs/**/*'
      ],
      env: {
        NODE_ENV: 'development',
        SCAN_MODE: 'continuous',
        LOG_LEVEL: 'info'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '256M',
      error_file: './logs/security-error.log',
      out_file: './logs/security-out.log',
      log_file: './logs/security-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 3,
      restart_delay: 3000,
      kill_timeout: 3000,
      wait_ready: true,
      listen_timeout: 5000
    },

    // Lint Monitor
    {
      name: 'zion-lint-monitor',
      script: './automation/lint-monitor.cjs',
      args: 'start',
      cwd: './',
      watch: [
        'src/**/*',
        'server/src/**/*',
        '.eslintrc.cjs',
        'tsconfig.json'
      ],
      ignore_watch: [
        'node_modules/**/*',
        'dist/**/*',
        '*.log',
        'logs/**/*'
      ],
      env: {
        NODE_ENV: 'development',
        MONITOR_MODE: 'continuous',
        LOG_LEVEL: 'info'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '256M',
      error_file: './logs/lint-error.log',
      out_file: './logs/lint-out.log',
      log_file: './logs/lint-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 3,
      restart_delay: 3000,
      kill_timeout: 3000,
      wait_ready: true,
      listen_timeout: 5000
    }
  ],

  deploy: {
    production: {
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/zion-tech-group.git',
      path: '/var/www/zion-tech-group',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    },
    staging: {
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/develop',
      repo: 'git@github.com:your-username/zion-tech-group.git',
      path: '/var/www/zion-tech-group-staging',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};