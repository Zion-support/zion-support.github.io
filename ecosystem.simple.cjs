module.exports = {
  apps: [
    // Main Application
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
        PORT: 3000,
      },
      error_file: 'logs/web-error.log',
      out_file: 'logs/web-out.log',
      log_file: 'logs/web-combined.log',
      time: true,
    },

    // Error Prevention System
    {
      name: 'error-prevention',
      script: 'scripts/error-fixer-automation.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/30 * * * *', // Every 30 minutes
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTO_FIX_ENABLED: 'true',
      },
      error_file: 'logs/error-prevention-error.log',
      out_file: 'logs/error-prevention-out.log',
      log_file: 'logs/error-prevention-combined.log',
      time: true,
    },

    // Health Monitor
    {
      name: 'health-monitor',
      script: 'scripts/health-check-system.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/5 * * * *', // Every 5 minutes
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        HEALTH_CHECK_INTERVAL: 300000,
      },
      error_file: 'logs/health-monitor-error.log',
      out_file: 'logs/health-monitor-out.log',
      log_file: 'logs/health-monitor-combined.log',
      time: true,
    },
  ],
};
