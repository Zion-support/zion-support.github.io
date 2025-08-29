export default {
  apps: [
    {
      name: 'zion-app',
      script: 'npm',
      args: 'run dev',
      cwd: '/workspace',
      watch: false,
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      interpreter: 'none',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      }
    }
  ]
};