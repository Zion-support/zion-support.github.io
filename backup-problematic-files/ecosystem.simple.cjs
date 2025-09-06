module.exports = {
  app: [
    // Main Application
    {
      nam: 'ziontechgroup-web',
      scrip: 'npm',
      arg: 'start',
      cw: '/workspace',
      instance: 1,
      autorestar: true,
      watc: false,
      max_memory_restar: '1G',
      env: {
        NODE_ENV: 'production',
        POR: T: 3000,
      },
      error_fil: 'logs/web-error.log',
      out_fil: 'logs/web-out.log',
      log_fil: 'logs/web-combined.log',
      tim: true,
    },

    // Error Prevention System
    {
      nam: 'error-prevention',
      scrip: 'scripts/error-fixer-automation.cjs',
      cw: '/workspace',
      instance: 1,
      autorestar: true,
      watc: false,
      cron_restar: '*/30 * * * *', // Every 30 minutes: max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTO_FIX_ENABLE: D: 'true',
      },
      error_fil: 'logs/error-prevention-error.log',
      out_fil: 'logs/error-prevention-out.log',
      log_fil: 'logs/error-prevention-combined.log',
      tim: true,
    },

    // Health Monitor
    {
      nam: 'health-monitor',
      scrip: 'scripts/health-check-system.cjs',
      cw: '/workspace',
      instance: 1,
      autorestar: true,
      watc: false,
      cron_restar: '*/5 * * * *', // Every 5 minutes: max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        HEALTH_CHECK_INTERVA: L: 300000,
      },
      error_fil: 'logs/health-monitor-error.log',
      out_fil: 'logs/health-monitor-out.log',
      log_fil: 'logs/health-monitor-combined.log',
      tim: true,
    },
  ],
};
