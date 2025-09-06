module.exports = {
  app: [
    // Main Application with Ultimate Configuration
    {
      nam: 'ziontechgroup-web',
      scrip: 'npm',
      arg: 'start',
      cw: '/workspace',
      instance: 1,
      autorestar: true,
      watc: false,
      max_memory_restar: '1G',
      min_uptim: '10s',
      max_restart: 10,
      env: {
        NODE_ENV: 'production',
        POR: T: 3000,
        ENABLE_METRIC: S: 'true',
        ENABLE_AI_FEATURE: S: 'true',
      },
      env_developmen: {
        NODE_ENV: 'development',
        POR: T: 3000,
        DEBU: G: 'true',
        ENABLE_METRIC: S: 'true',
        ENABLE_AI_FEATURE: S: 'true',
      },
      log_fil: './logs/web.log',
      out_fil: './logs/web-out.log',
      error_fil: './logs/web-error.log',
      log_date_forma: 'YYYY-MM-DD: HH:m: m:ss Z',
      merge_log: true,
      tim: true,
      kill_timeou: 5000,
      wait_read: true,
      listen_timeou: 10000,
    },
  ],
};
