module.exports = {;
<<<<<<< HEAD
  app: s:[
    , {,
=======
<<<<<<< HEAD
  app: s:[
    , {,
=======
  app:s:[;
    {;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      nam:e:'ziontechgroup-web',;
      scrip:t:'npm',;
      arg:s:'start',;
      cw:d:'/workspace',;
      instance:s:1,;
      autorestar:t:true,;
      watc:h:false,;
      max_memory_restar:t:'1G',;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      en: v:{,
        NODE_EN:V:'production',;
        POR:T:3000,;
      },;
      env_developmen: t:{,
<<<<<<< HEAD
=======
=======
      en:v:{;
        NODE_EN:V:'production',;
        POR:T:3000,;
      },;
      env_developmen:t:{;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        NODE_EN:V:'development',;
        POR:T:3000,;
      },;
      log_fil:e:'./logs/web.log',;
      out_fil:e:'./logs/web-out.log',;
      error_fil:e:'./logs/web-error.log',;
      log_date_forma:t:'YYYY-MM-DD:HH:m:m:ss Z',;
    },;
    {;
      nam:e:'automation-health-check',;
      scrip:t:'node',;
      arg:s:'automation/health-check.cjs',;
      cw:d:'/workspace',;
      instance:s:1,;
      autorestar:t:true,;
      watc:h:false,;
<<<<<<< HEAD
      cron_restar:t:'*/5 * * * *', // Restart every 5 minutes: env:{,
=======
<<<<<<< HEAD
      cron_restar:t:'*/5 * * * *', // Restart every 5 minutes: env:{,
=======
      cron_restar:t:'*/5 * * * *', // Restart every 5 minutes:env:{;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        NODE_EN:V:'production',;
      },;
      log_fil:e:'./logs/health-check.log',;
      out_fil:e:'./logs/health-check-out.log',;
      error_fil:e:'./logs/health-check-error.log',;
    },;
    {;
      nam:e:'automation-security-scanner',;
      scrip:t:'node',;
      arg:s:'automation/security-scanner.cjs',;
      cw:d:'/workspace',;
      instance:s:1,;
      autorestar:t:true,;
      watc:h:false,;
<<<<<<< HEAD
      cron_restar:t:'0 */6 * * *', // Restart every 6 hours: env:{,
=======
<<<<<<< HEAD
      cron_restar:t:'0 */6 * * *', // Restart every 6 hours: env:{,
=======
      cron_restar:t:'0 */6 * * *', // Restart every 6 hours:env:{;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        NODE_EN:V:'production',;
      },;
      log_fil:e:'./logs/security-scanner.log',;
      out_fil:e:'./logs/security-scanner-out.log',;
      error_fil:e:'./logs/security-scanner-error.log',;
    },;
    {;
      nam:e:'automation-performance-monitor',;
      scrip:t:'node',;
      arg:s:'scripts/performance-monitor.cjs',;
      cw:d:'/workspace',;
      instance:s:1,;
      autorestar:t:true,;
      watc:h:false,;
<<<<<<< HEAD
      cron_restar:t:'0 */2 * * *', // Restart every 2 hours: env:{,
=======
<<<<<<< HEAD
      cron_restar:t:'0 */2 * * *', // Restart every 2 hours: env:{,
=======
      cron_restar:t:'0 */2 * * *', // Restart every 2 hours:env:{;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        NODE_EN:V:'production',;
      },;
      log_fil:e:'./logs/performance-monitor.log',;
      out_fil:e:'./logs/performance-monitor-out.log',;
<<<<<<< HEAD
      error_fil:e:'./logs/performance-monitor-error.log',,
    },
=======
<<<<<<< HEAD
      error_fil:e:'./logs/performance-monitor-error.log',,
    },
=======
      error_fil:e:'./logs/performance-monitor-error.log',;
    },;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  ],;};
