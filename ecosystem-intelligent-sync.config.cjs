module.exports = {
  apps: [
    {
      name: 'intelligent-sync-automation',
      script: './intelligent-sync-automation.js',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: process.env.HOME + '/.pm2'
      },
      env_production: {
        NODE_ENV: 'production',
        PM2_HOME: process.env.HOME + '/.pm2'
      },
      log_file: './logs/intelligent-sync-pm2.log',
      out_file: './logs/intelligent-sync-out.log',
      error_file: './logs/intelligent-sync-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      time: true,
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 4000,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 8000,
      source_map_support: false,
      node_args: '--max-old-space-size=1024'
    },
    {
      name: 'intelligent-sync-monitor',
      script: './intelligent-sync-automation.js',
      args: 'health',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: process.env.HOME + '/.pm2'
      },
      cron_restart: '*/5 * * * *', // Restart every 5 minutes
      max_restarts: 20,
      min_uptime: '5s',
      restart_delay: 2000,
      kill_timeout: 3000,
      wait_ready: true,
      listen_timeout: 5000,
      log_file: './logs/intelligent-sync-monitor-pm2.log',
      out_file: './logs/intelligent-sync-monitor-out.log',
      error_file: './logs/intelligent-sync-monitor-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      time: true
    },
    {
      name: 'intelligent-sync-backup',
      script: './intelligent-sync-automation.js',
      args: 'backup',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: process.env.HOME + '/.pm2'
      },
      cron_restart: '0 */2 * * *', // Run every 2 hours
      max_restarts: 5,
      min_uptime: '10s',
      restart_delay: 1000,
      kill_timeout: 2000,
      wait_ready: true,
      listen_timeout: 3000,
      log_file: './logs/intelligent-sync-backup-pm2.log',
      out_file: './logs/intelligent-sync-backup-out.log',
      error_file: './logs/intelligent-sync-backup-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      time: true
    }
  ],

  deploy: {
    production: {
      user: 'miami2',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/Users/miami2/zion-app-clone',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem-intelligent-sync.config.cjs --env production',
      'pre-setup': ''
    }
  }
};
