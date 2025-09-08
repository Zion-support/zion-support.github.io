module.exports = {
  apps: [
    {
      name: 'bolt-new-zion-app',
      script: 'npm',
      args: 'start',
      cwd: './',
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
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/bolt.new.zion.app.git',
      path: '/var/www/bolt-new-zion-app',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  },

  // PM2 automation scripts to replace GitHub Actions
  scripts: {
    // Build automation
    'build:auto': 'npm run build',
    'build:watch': 'npm run build && pm2 restart bolt-new-zion-app',
    
    // Test automation
    'test:auto': 'npm run lint && npm run type-check',
    'test:watch': 'npm run lint && npm run type-check && pm2 restart bolt-new-zion-app',
    
    // Deploy automation
    'deploy:auto': 'npm run build && pm2 reload bolt-new-zion-app',
    'deploy:production': 'npm run build && pm2 reload ecosystem.config.js --env production',
    
    // Health checks
    'health:check': 'pm2 status && pm2 logs --lines 10',
    'health:monitor': 'pm2 monit',
    
    // Performance monitoring
    'perf:start': 'pm2 start ecosystem.config.js --env production',
    'perf:stop': 'pm2 stop bolt-new-zion-app',
    'perf:restart': 'pm2 restart bolt-new-zion-app',
    'perf:reload': 'pm2 reload bolt-new-zion-app'
  }
};