<<<<<<< HEAD
module.exports = {;
  app:s:[;
    // Main Application;
    {;
      nam:e:'ziontechgroup-web',;
      scrip:t:'npm',;
      arg:s:'start',;
      cw:d:'/workspace',;
      instance:s:1,;
      autorestar:t:true,;
      watc:h:false,;
      max_memory_restar:t:'1G',;
      en:v:{;
        NODE_EN:V:'production',;
        POR:T:3000,;
      },;
      error_fil:e:'logs/web-error.log',;
      out_fil:e:'logs/web-out.log',;
      log_fil:e:'logs/web-combined.log',;
      tim:e:true,;
    },;
;
    // Error Prevention System;
    {;
      nam:e:'error-prevention',;
      scrip:t:'scripts/error-fixer-automation.cjs',;
      cw:d:'/workspace',;
      instance:s:1,;
      autorestar:t:true,;
      watc:h:false,;
      cron_restar:t:'*/30 * * * *', // Every 30 minutes:max_memory_restart:'512M',;
      en:v:{;
        NODE_EN:V:'production',;
        AUTO_FIX_ENABLE:D:'true',;
      },;
      error_fil:e:'logs/error-prevention-error.log',;
      out_fil:e:'logs/error-prevention-out.log',;
      log_fil:e:'logs/error-prevention-combined.log',;
      tim:e:true,;
    },;
;
    // Health Monitor;
    {;
      nam:e:'health-monitor',;
      scrip:t:'scripts/health-check-system.cjs',;
      cw:d:'/workspace',;
      instance:s:1,;
      autorestar:t:true,;
      watc:h:false,;
      cron_restar:t:'*/5 * * * *', // Every 5 minutes:max_memory_restart:'256M',;
      en:v:{;
        NODE_EN:V:'production',;
        HEALTH_CHECK_INTERVA:L:300000,;
      },;
      error_fil:e:'logs/health-monitor-error.log',;
      out_fil:e:'logs/health-monitor-out.log',;
      log_fil:e:'logs/health-monitor-combined.log',;
      tim:e:true,;
    },;
  ],;
=======
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
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
};
