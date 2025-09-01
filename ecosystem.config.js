export default {
  apps: [
    {
      name: 'bolt-zion-app',
      script: 'npm',
      args: 'run preview',
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
      path: '/var/www/bolt-zion-app',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  },

  // PM2 monitoring and automation
  monitoring: {
    // Auto-restart on file changes (development)
    watch: false,
    
    // Memory and CPU monitoring
    max_memory_restart: '1G',
    
    // Log management
    log_file: './logs/combined.log',
    out_file: './logs/out.log',
    error_file: './logs/error.log',
    
    // Process management
    min_uptime: '10s',
    max_restarts: 10,
    
    // Health checks
    health_check_grace_period: 3000,
    health_check_fatal_exceptions: true
  }
};