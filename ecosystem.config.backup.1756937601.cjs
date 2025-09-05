<<<<<<< HEAD
module.exports = {;
  app:s:[;
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
      env_developmen:t:{;
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
      cron_restar:t:'*/5 * * * *', // Restart every 5 minutes:env:{;
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
      cron_restar:t:'0 */6 * * *', // Restart every 6 hours:env:{;
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
      cron_restar:t:'0 */2 * * *', // Restart every 2 hours:env:{;
        NODE_EN:V:'production',;
      },;
      log_fil:e:'./logs/performance-monitor.log',;
      out_fil:e:'./logs/performance-monitor-out.log',;
      error_fil:e:'./logs/performance-monitor-error.log',;
    },;
  ],;
=======
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
        PORT: 3000,
      },
      env_development: {
        NODE_ENV: 'development',
        PORT: 3000,
      },
      log_file: './logs/web.log',
      out_file: './logs/web-out.log',
      error_file: './logs/web-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },
    {
      name: 'automation-health-check',
      script: 'node',
      args: 'automation/health-check.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/5 * * * *', // Restart every 5 minutes
      env: {
        NODE_ENV: 'production',
      },
      log_file: './logs/health-check.log',
      out_file: './logs/health-check-out.log',
      error_file: './logs/health-check-error.log',
    },
    {
      name: 'automation-security-scanner',
      script: 'node',
      args: 'automation/security-scanner.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      env: {
        NODE_ENV: 'production',
      },
      log_file: './logs/security-scanner.log',
      out_file: './logs/security-scanner-out.log',
      error_file: './logs/security-scanner-error.log',
    },
    {
      name: 'automation-performance-monitor',
      script: 'node',
      args: 'scripts/performance-monitor.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      env: {
        NODE_ENV: 'production',
      },
      log_file: './logs/performance-monitor.log',
      out_file: './logs/performance-monitor-out.log',
      error_file: './logs/performance-monitor-error.log',
    },
  ],
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
};
