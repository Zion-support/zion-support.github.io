export default {
  apps: [
    // Zion Frontend - Development Environment
    {
      name: 'zion-frontend-dev',
      script: 'npm',
      args: 'run dev',
      cwd: './',
      watch: ['src/**/*', 'public/**/*', 'tailwind.config.*', 'vite.config.*'],
      ignore_watch: ['node_modules', 'dist', '.git', '*.log'],
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
        NODE_OPTIONS: '--max-old-space-size=4096 --openssl-legacy-provider'
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
        NODE_OPTIONS: '--max-old-space-size=6144 --openssl-legacy-provider'
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
      listen_timeout: 8000,
      source_map_support: true,
      node_args: '--inspect=0.0.0.0:9229'
    },

    // Zion Backend - Development Environment
    {
      name: 'zion-backend-dev',
      script: 'npm',
      args: 'run dev',
      cwd: './server',
      watch: ['src/**/*', 'tsconfig.json'],
      ignore_watch: ['node_modules', 'dist', '.git', '*.log'],
      env: {
        NODE_ENV: 'development',
        PORT: 5000,
        NODE_OPTIONS: '--max-old-space-size=2048'
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 5000,
        NODE_OPTIONS: '--max-old-space-size=4096'
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
      listen_timeout: 8000,
      source_map_support: true,
      node_args: '--inspect=0.0.0.0:9230'
    },

    // Production Frontend Server
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