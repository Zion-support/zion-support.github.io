module.exports = {
  apps: [
    {
      name: 'error-monitor',
      script: './scripts/error-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/error-monitor-error.log',
      out_file: './logs/error-monitor-out.log',
      log_file: './logs/error-monitor-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '5s',
      restart_delay: 2000,
      cron_restart: '*/10 * * * *', // Run every 10 minutes
      pmx: true
    },
    {
      name: 'health-checker',
      script: './scripts/health-checker.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/health-checker-error.log',
      out_file: './logs/health-checker-out.log',
      log_file: './logs/health-checker-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '5s',
      restart_delay: 2000,
      cron_restart: '*/5 * * * *', // Run every 5 minutes
      pmx: true
    },
    {
      name: 'auto-fixer',
      script: './scripts/auto-fixer.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/auto-fixer-error.log',
      out_file: './logs/auto-fixer-out.log',
      log_file: './logs/auto-fixer-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '10s',
      restart_delay: 5000,
      cron_restart: '0 */2 * * *', // Run every 2 hours
      pmx: true
    },
    {
      name: 'log-cleaner',
      script: './scripts/log-cleaner.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '200M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/log-cleaner-error.log',
      out_file: './logs/log-cleaner-out.log',
      log_file: './logs/log-cleaner-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '5s',
      restart_delay: 2000,
      cron_restart: '0 2 * * *', // Run daily at 2 AM
      pmx: true
    }
  ],

  deploy: {
    production: {
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/var/www/zion.app',
      'pre-deploy-local': '',
      'post-deploy': 'npm install --legacy-peer-deps && npm run build && pm2 reload ecosystem.config.cjs --env production',
      'pre-setup': 'mkdir -p /var/www/zion.app/logs'
    }
  }
};