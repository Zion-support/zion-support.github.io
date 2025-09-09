module.exports = {
  apps: [
    {
      name: 'ziontechgroup-web',
      script: 'npm',
      args: 'start',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      error_file: './logs/web-error.log',
      out_file: './logs/web-out.log',
      log_file: './logs/web-combined.log',
      time: true
    },
    {
      name: 'error-monitor',
      script: './scripts/error-monitor.js',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/error-monitor-error.log',
      out_file: './logs/error-monitor-out.log',
      log_file: './logs/error-monitor-combined.log',
      time: true,
      cron_restart: '*/5 * * * *' // Restart every 5 minutes
    },
    {
      name: 'merge-conflict-detector',
      script: './scripts/merge-conflict-detector.js',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/merge-detector-error.log',
      out_file: './logs/merge-detector-out.log',
      log_file: './logs/merge-detector-combined.log',
      time: true,
      cron_restart: '*/10 * * * *' // Check every 10 minutes
    },
    {
      name: 'build-monitor',
      script: './scripts/build-monitor.js',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/build-monitor-error.log',
      out_file: './logs/build-monitor-out.log',
      log_file: './logs/build-monitor-combined.log',
      time: true,
      cron_restart: '*/15 * * * *' // Check every 15 minutes
    },
    {
      name: 'auto-fixer',
      script: './scripts/auto-fixer.js',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/auto-fixer-error.log',
      out_file: './logs/auto-fixer-out.log',
      log_file: './logs/auto-fixer-combined.log',
      time: true,
      cron_restart: '*/30 * * * *' // Run every 30 minutes
    }
  ]
};