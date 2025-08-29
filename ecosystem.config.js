export default {
  apps: [
    {
      name: 'bolt-zion-app',
      script: 'yarn',
      args: 'dev',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ],

  deploy: {
    production: {
      user: 'root',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/bolt.new.zion.app.git',
      path: '/workspace',
      'post-deploy': 'yarn install && yarn build && pm2 reload ecosystem.config.js --env production'
    }
  }
};