module.exports = {
  apps: [
    {
<<<<<<< HEAD
      name: 'autonomous-ai-manager',
      script: 'automation/autonomous-system-manager.cjs',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: { NODE_ENV: 'production', PORT: 3000 },
      env_production: { NODE_ENV: 'production', PORT: 3000 },
      log_file: 'logs/autonomous-ai-manager.log',
      out_file: 'logs/autonomous-ai-manager-out.log',
      error_file: 'logs/autonomous-ai-manager-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 4000,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 8000
    },
    {
      name: 'ml-intelligence',
      script: 'automation/ml-link-intelligence.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: { NODE_ENV: 'production' },
      log_file: 'logs/ml-intelligence.log',
      out_file: 'logs/ml-intelligence-out.log',
      error_file: 'logs/ml-intelligence-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '30s',
      restart_delay: 10000,
      kill_timeout: 5000
    },
    {
      name: 'real-time-monitor',
      script: 'automation/real-time-performance-monitor.cjs',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: { NODE_ENV: 'production' },
      log_file: 'logs/real-time-monitor.log',
      out_file: 'logs/real-time-monitor-out.log',
      error_file: 'logs/real-time-monitor-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '10s',
      restart_delay: 5000,
      kill_timeout: 5000
    },
    {
      name: 'link-scheduler',
      script: 'automation/link-health-scheduler.cjs',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: { NODE_ENV: 'production' },
      log_file: 'logs/link-scheduler.log',
      out_file: 'logs/link-scheduler-out.log',
      error_file: 'logs/link-scheduler-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '10s',
      restart_delay: 5000,
      kill_timeout: 5000
    }
  ],

  deploy: {
    production: {
      user: 'node',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:Zion-Holdings/zion.app.git',
      path: '/var/www/zion',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 install pm2-logrotate || true && pm2 set pm2-logrotate:max_size 10M && pm2 set pm2-logrotate:retain 30 && pm2 set pm2-logrotate:compress true && pm2 reload ecosystem.config.cjs --env production',
      'pre-setup': ''
    }
  }
};


=======
      name: "zion-app",
      script: "npm",
      args: "start",
      interpreter: "none",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        PORT: process.env.PORT || 3000
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/zion-app-error.log",
      out_file: "automation/logs/zion-app-out.log",
      time: true
    },
    {
      name: "zion-auto-sync",
      script: "automation/pm2-auto-sync.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        AUTO_SYNC_REMOTE: process.env.AUTO_SYNC_REMOTE || "origin",
        AUTO_SYNC_BRANCH: process.env.AUTO_SYNC_BRANCH || "main",
        AUTO_SYNC_STRATEGY: process.env.AUTO_SYNC_STRATEGY || "hardreset",
        AUTO_SYNC_CLEAN: process.env.AUTO_SYNC_CLEAN || "1",
        AUTO_SYNC_GC: process.env.AUTO_SYNC_GC || "0"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/zion-auto-sync-error.log",
      out_file: "automation/logs/zion-auto-sync-out.log",
      time: true
    },
    {
      name: "zion-build-monitor",
      script: "automation/continuous-build-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/build-monitor-error.log",
      out_file: "automation/logs/build-monitor-out.log",
      time: true
    }
  ]
};
>>>>>>> autobot/2025-08-24T03-49-38-332Z
