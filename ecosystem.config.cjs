module.exports = {
  apps: [
    // Zion Frontend - Development Environment
    {
      name: 'error-fixer',
      script: './scripts/error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: '/workspace/.pm2'
      },
      error_file: './logs/error-fixer-error.log',
      out_file: './logs/error-fixer-out.log',
      log_file: './logs/error-fixer-combined.log',
      time: true
    },
    {
      name: 'comprehensive-error-fixer',
      script: './scripts/comprehensive-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: '/workspace/.pm2'
      },
      error_file: './logs/comprehensive-error-fixer-error.log',
      out_file: './logs/comprehensive-error-fixer-out.log',
      log_file: './logs/comprehensive-error-fixer-combined.log',
      time: true
    },

    // Zion Backend - Development Environment
    {
      name: 'lint-automation',
      script: './scripts/lint-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: '/workspace/.pm2'
      },
      error_file: './logs/lint-automation-error.log',
      out_file: './logs/lint-automation-out.log',
      log_file: './logs/lint-automation-combined.log',
      time: true
    },
    {
      name: 'type-check-automation',
      script: './scripts/type-check-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: '/workspace/.pm2'
      },
      error_file: './logs/type-check-automation-error.log',
      out_file: './logs/type-check-automation-out.log',
      log_file: './logs/type-check-automation-combined.log',
      time: true
    },
    {
      name: 'code-quality-monitor',
      script: './scripts/code-quality-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: '/workspace/.pm2'
      },
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      max_memory_restart: '2G',
      error_file: './logs/frontend-prod-error.log',
      out_file: './logs/frontend-prod-out.log',
      log_file: './logs/frontend-prod-combined.log',
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

    // Production Backend Server
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
      max_restarts: 5,
      restart_delay: 10000,
      kill_timeout: 10000,
      wait_ready: true,
      listen_timeout: 15000
    },

    // Development Monitor & Health Check
    {
      name: 'zion-monitor-dev',
      script: './scripts/pm2-monitor.js',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'development',
        MONITOR_INTERVAL: 30000,
        HEALTH_CHECK_ENDPOINTS: 'http://localhost:3000,http://localhost:5000/health'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '256M',
      error_file: './logs/monitor-error.log',
      out_file: './logs/monitor-out.log',
      log_file: './logs/monitor-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 5,
      restart_delay: 5000
    },

    // Build Watcher & Auto-Deploy
    {
      name: 'zion-build-watcher',
      script: './scripts/pm2-build-watcher.js',
      cwd: './',
      watch: ['package.json', 'vite.config.*', 'tailwind.config.*', 'tsconfig.json'],
      ignore_watch: ['node_modules', 'dist', '.git', '*.log', 'logs/*'],
      env: {
        NODE_ENV: 'development',
        BUILD_WATCH_INTERVAL: 60000,
        AUTO_BUILD: true,
        AUTO_DEPLOY: false
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '512M',
      error_file: './logs/build-watcher-error.log',
      out_file: './logs/build-watcher-out.log',
      log_file: './logs/build-watcher-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 3,
      restart_delay: 10000
    }
  ],

  deploy: {
    production: {
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/zion-app.git',
      path: '/var/www/zion-app',
      'pre-deploy-local': 'echo "This is a local executed command"',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.cjs --env production',
      'pre-setup': 'echo "This is a command to be executed on the host before the setup process starts"'
    },
    staging: {
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/develop',
      repo: 'git@github.com:your-username/zion-app.git',
      path: '/var/www/zion-app-staging',
      'pre-deploy-local': 'echo "This is a local executed command"',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.cjs --env production',
      'pre-setup': 'echo "This is a command to be executed on the host before the setup process starts"'
    }
  }
};
