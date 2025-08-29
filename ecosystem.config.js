module.exports = {
  apps: [
    // Development server
    {
      name: 'dev-server',
      script: 'npm',
      args: 'run dev',
      cwd: './',
      watch: ['src', 'pages', 'components', 'utils'],
      ignore_watch: ['node_modules', 'dist', '.git'],
      env: {
        NODE_ENV: 'development',
        NODE_OPTIONS: '--max-old-space-size=4096 --openssl-legacy-provider'
      },
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      error_file: './logs/dev-error.log',
      out_file: './logs/dev-out.log',
      log_file: './logs/dev-combined.log',
      time: true
    },

    // Backend development server (if exists)
    {
      name: 'dev-backend',
      script: 'npm',
      args: 'run dev',
      cwd: './server',
      watch: ['src', 'routes', 'controllers', 'models'],
      ignore_watch: ['node_modules', 'dist'],
      env: {
        NODE_ENV: 'development'
      },
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      error_file: './logs/backend-error.log',
      out_file: './logs/backend-out.log',
      log_file: './logs/backend-combined.log',
      time: true
    },

    // Build watcher
    {
      name: 'build-watcher',
      script: 'npm',
      args: 'run build',
      cwd: './',
      watch: ['src', 'pages', 'components', 'utils'],
      ignore_watch: ['node_modules', 'dist', '.git'],
      env: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=6144 --openssl-legacy-provider'
      },
      instances: 1,
      autorestart: false,
      max_memory_restart: '2G',
      error_file: './logs/build-error.log',
      out_file: './logs/build-out.log',
      log_file: './logs/build-combined.log',
      time: true
    },

    // Production server
    {
      name: 'production-server',
      script: 'npm',
      args: 'run start',
      cwd: './',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      max_memory_restart: '1G',
      error_file: './logs/prod-error.log',
      out_file: './logs/prod-out.log',
      log_file: './logs/prod-combined.log',
      time: true
    },

    // Linting service
    {
      name: 'lint-service',
      script: 'npm',
      args: 'run lint',
      cwd: './',
      env: {
        NODE_ENV: 'development'
      },
      instances: 1,
      autorestart: false,
      cron_restart: '0 */6 * * *', // Run every 6 hours
      max_memory_restart: '512M',
      error_file: './logs/lint-error.log',
      out_file: './logs/lint-out.log',
      log_file: './logs/lint-combined.log',
      time: true
    },

    // Type checking service
    {
      name: 'type-check-service',
      script: 'npm',
      args: 'run type-check',
      cwd: './',
      env: {
        NODE_ENV: 'development'
      },
      instances: 1,
      autorestart: false,
      cron_restart: '0 */4 * * *', // Run every 4 hours
      max_memory_restart: '512M',
      error_file: './logs/typecheck-error.log',
      out_file: './logs/typecheck-out.log',
      log_file: './logs/typecheck-combined.log',
      time: true
    },

    // Security audit service
    {
      name: 'security-audit',
      script: 'npm',
      args: 'audit',
      cwd: './',
      env: {
        NODE_ENV: 'development'
      },
      instances: 1,
      autorestart: false,
      cron_restart: '0 2 * * *', // Run daily at 2 AM
      max_memory_restart: '512M',
      error_file: './logs/audit-error.log',
      out_file: './logs/audit-out.log',
      log_file: './logs/audit-combined.log',
      time: true
    },

    // Health check service
    {
      name: 'health-check',
      script: './scripts/health-check.js',
      cwd: './',
      env: {
        NODE_ENV: 'production'
      },
      instances: 1,
      autorestart: true,
      cron_restart: '*/5 * * * *', // Run every 5 minutes
      max_memory_restart: '256M',
      error_file: './logs/health-error.log',
      out_file: './logs/health-out.log',
      log_file: './logs/health-combined.log',
      time: true
    }
  ],

  deploy: {
    production: {
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/bolt.new.zion.app.git',
      path: '/var/www/production',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    },
    staging: {
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/develop',
      repo: 'git@github.com:your-username/bolt.new.zion.app.git',
      path: '/var/www/staging',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env staging',
      'pre-setup': ''
    }
  }
};