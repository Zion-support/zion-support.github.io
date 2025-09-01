// PM2 Ecosystem Configuration for Zion App
module.exports = {
  apps: [
    {
      name: 'zion-app-production',
      script: 'npm',
      args: 'run preview',
      cwd: '/workspace',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 4173
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 4173
      },
      // PM2 monitoring and error handling
      max_memory_restart: '1G',
      min_uptime: '10s',
      max_restarts: 10,
      autorestart: true,
      watch: false,
      ignore_watch: ['node_modules', 'logs', '*.log'],
      
      // Logging
      log_file: '/workspace/logs/app.log',
      out_file: '/workspace/logs/out.log',
      error_file: '/workspace/logs/error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },
    {
      name: 'error-monitor',
      script: '/workspace/scripts/error-monitor.js',
      cwd: '/workspace',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production',
        MONITOR_INTERVAL: '30000'
      },
      log_file: '/workspace/logs/error-monitor.log',
      out_file: '/workspace/logs/error-monitor-out.log',
      error_file: '/workspace/logs/error-monitor-error.log'
    },
    {
      name: 'auto-fixer',
      script: '/workspace/scripts/auto-fixer.js',
      cwd: '/workspace',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production',
        FIX_INTERVAL: '300000' // 5 minutes
      },
      log_file: '/workspace/logs/auto-fixer.log',
      out_file: '/workspace/logs/auto-fixer-out.log',
      error_file: '/workspace/logs/auto-fixer-error.log'
    }
  ],
  
  deploy: {
    production: {
      user: 'node',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:user/repo.git',
      path: '/workspace',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.cjs --env production',
      'pre-setup': ''
    }
  }
};