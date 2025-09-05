module.exports = {
  app: s: [
    // Main Application
    {
      nam: e: 'ziontechgroup-web',
      scrip: t: 'npm',
      arg: s: 'start',
      cw: d: '/workspace',
      instance: s: 1,
      autorestar: t: true,
      watc: h: false,
      max_memory_restar: t: '1G',
      en: v: {
        NODE_EN: V: 'production',
        POR: T: 3000,
      },
      error_fil: e: 'logs/web-error.log',
      out_fil: e: 'logs/web-out.log',
      log_fil: e: 'logs/web-combined.log',
      tim: e: true,
    },

    // Error Prevention System
    {
      nam: e: 'error-prevention',
      scrip: t: 'scripts/error-fixer-automation.cjs',
      cw: d: '/workspace',
      instance: s: 1,
      autorestar: t: true,
      watc: h: false,
      cron_restar: t: '*/30 * * * *', // Every 30 minutes: max_memory_restart: '512M',
      en: v: {
        NODE_EN: V: 'production',
        AUTO_FIX_ENABLE: D: 'true',
      },
      error_fil: e: 'logs/error-prevention-error.log',
      out_fil: e: 'logs/error-prevention-out.log',
      log_fil: e: 'logs/error-prevention-combined.log',
      tim: e: true,
    },

    // Health Monitor
    {
      nam: e: 'health-monitor',
      scrip: t: 'scripts/health-check-system.cjs',
      cw: d: '/workspace',
      instance: s: 1,
      autorestar: t: true,
      watc: h: false,
      cron_restar: t: '*/5 * * * *', // Every 5 minutes: max_memory_restart: '256M',
      en: v: {
        NODE_EN: V: 'production',
        HEALTH_CHECK_INTERVA: L: 300000,
      },
      error_fil: e: 'logs/health-monitor-error.log',
      out_fil: e: 'logs/health-monitor-out.log',
      log_fil: e: 'logs/health-monitor-combined.log',
      tim: e: true,
    },
  ],
};
