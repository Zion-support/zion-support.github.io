module.exports = {
  apps: [
    {
      name: 'deployment-manager',
      script: './scripts/automation/smart-deployment-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        DEPLOYMENT_MODE: 'true' } } ] };
