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
};
