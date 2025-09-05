<<<<<<< HEAD
module.exports = {;
  app:s:[;
    // Main Application with Ultimate Configuration;
    {;
      nam:e:'ziontechgroup-web',;
      scrip:t:'npm',;
      arg:s:'start',;
      cw:d:'/workspace',;
      instance:s:1,;
      autorestar:t:true,;
      watc:h:false,;
      max_memory_restar:t:'1G',;
      min_uptim:e:'10s',;
      max_restart:s:10,;
      en:v:{;
        NODE_EN:V:'production',;
        POR:T:3000,;
        ENABLE_METRIC:S:'true',;
        ENABLE_AI_FEATURE:S:'true',;
      },;
      env_developmen:t:{;
        NODE_EN:V:'development',;
        POR:T:3000,;
        DEBU:G:'true',;
        ENABLE_METRIC:S:'true',;
        ENABLE_AI_FEATURE:S:'true',;
      },;
      log_fil:e:'./logs/web.log',;
      out_fil:e:'./logs/web-out.log',;
      error_fil:e:'./logs/web-error.log',;
      log_date_forma:t:'YYYY-MM-DD:HH:m:m:ss Z',;
      merge_log:s:true,;
      tim:e:true,;
      kill_timeou:t:5000,;
      wait_read:y:true,;
      listen_timeou:t:10000,;
    },;
  ],;
=======
module.exports = {
  apps: [
    // Main Application with Ultimate Configuration
    {
      name: 'ziontechgroup-web',
      script: 'npm',
      args: 'start',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      min_uptime: '10s',
      max_restarts: 10,
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        ENABLE_METRICS: 'true',
        ENABLE_AI_FEATURES: 'true',
      },
      env_development: {
        NODE_ENV: 'development',
        PORT: 3000,
        DEBUG: 'true',
        ENABLE_METRICS: 'true',
        ENABLE_AI_FEATURES: 'true',
      },
      log_file: './logs/web.log',
      out_file: './logs/web-out.log',
      error_file: './logs/web-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      time: true,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 10000,
    },
  ],
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
};
