module.exports = {
  name: 'error-prevention',
  script: 'scripts/automation/pm2-error-prevention.cjs',
  instances: 1,
  autorestart: true,
  watch: false,
  max_memory_restart: '1G',
  env: {
    NODE_ENV: 'development',
    PM2_ERROR_PREVENTION: 'true',
  },
};
