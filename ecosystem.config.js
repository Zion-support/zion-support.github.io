module.exports = {
  apps: [
    // Frontend Development Server
    {
      name: 'zion-frontend-dev',
      script: 'npm',
      args: 'run dev',
      cwd: './',
      watch: ['src', 'vite.config.ts', 'tailwind.config.ts'],
      ignore_watch: ['node_modules', 'dist', '*.log', '.git'],
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
        VITE_DEV_SERVER_URL: 'http://localhost:3000'
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '1G',
      error_file: './logs/frontend-error.log',
      out_file: './logs/frontend-out.log',
      log_file: './logs/frontend-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      // Intelligent restart conditions
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 4000,
      // Health monitoring
      health_check_grace_period: 3000,
      health_check_fatal_exceptions: true
    },

    // Backend Development Server
    {
      name: 'zion-backend-dev',
      script: 'npm',
      args: 'run dev',
      cwd: './server',
      watch: ['src', 'tsconfig.json'],
      ignore_watch: ['node_modules', 'dist', '*.log'],
      env: {
        NODE_ENV: 'development',
        PORT: 5000,
        DATABASE_URL: 'mongodb://localhost:27017/zion_dev'
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 5000,
        DATABASE_URL: 'mongodb://localhost:27017/zion_prod'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '1G',
      error_file: '../logs/backend-error.log',
      out_file: '../logs/backend-out.log',
      log_file: '../logs/backend-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      // Intelligent restart conditions
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 4000,
      // Health monitoring
      health_check_grace_period: 3000,
      health_check_fatal_exceptions: true
    },

    // Production Frontend Server
    {
      name: 'zion-frontend-prod',
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
      max_memory_restart: '2G',
      error_file: './logs/frontend-prod-error.log',
      out_file: './logs/frontend-prod-out.log',
      log_file: './logs/frontend-prod-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      // Production optimizations
      min_uptime: '30s',
      max_restarts: 5,
      restart_delay: 10000,
      // Load balancing
      instance_var: 'INSTANCE_ID',
      // Health monitoring
      health_check_grace_period: 5000,
      health_check_fatal_exceptions: true
    },

    // Production Backend Server
    {
      name: 'zion-backend-prod',
      script: 'npm',
      args: 'start',
      cwd: './server',
      env: {
        NODE_ENV: 'production',
        PORT: 5000,
        DATABASE_URL: 'mongodb://localhost:27017/zion_prod'
      },
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      max_memory_restart: '2G',
      error_file: '../logs/backend-prod-error.log',
      out_file: '../logs/backend-prod-out.log',
      log_file: '../logs/backend-prod-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      // Production optimizations
      min_uptime: '30s',
      max_restarts: 5,
      restart_delay: 10000,
      // Load balancing
      instance_var: 'INSTANCE_ID',
      // Health monitoring
      health_check_grace_period: 5000,
      health_check_fatal_exceptions: true
    },

    // Development Workflow Manager
    {
      name: 'zion-workflow-manager',
      script: './automation/workflow-manager.js',
      cwd: './',
      watch: ['automation'],
      ignore_watch: ['node_modules', '*.log'],
      env: {
        NODE_ENV: 'development',
        LOG_LEVEL: 'debug'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '512M',
      error_file: './logs/workflow-error.log',
      out_file: './logs/workflow-out.log',
      log_file: './logs/workflow-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Health Monitor & Auto-Recovery
    {
      name: 'zion-health-monitor',
      script: './automation/health-monitor.js',
      cwd: './',
      env: {
        NODE_ENV: 'development',
        LOG_LEVEL: 'info',
        HEALTH_CHECK_INTERVAL: 30000,
        AUTO_RECOVERY: true
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '256M',
      error_file: './logs/health-error.log',
      out_file: './logs/health-out.log',
      log_file: './logs/health-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Performance Monitor
    {
      name: 'zion-performance-monitor',
      script: './automation/performance-monitor.js',
      cwd: './',
      env: {
        NODE_ENV: 'development',
        LOG_LEVEL: 'info',
        MONITORING_INTERVAL: 60000,
        ALERT_THRESHOLD: 80
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '256M',
      error_file: './logs/performance-error.log',
      out_file: './logs/performance-out.log',
      log_file: './logs/performance-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    }
  ],

  // Deployment configuration
  deploy: {
    production: {
      user: 'deploy',
      host: 'your-production-server.com',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/your-repo.git',
      path: '/var/www/zion-app',
      'pre-deploy-local': 'echo "This is a local executed command"',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': 'echo "This is a command to be executed on the host before the setup of the repo, e.g. creating directories etc."'
    },
    staging: {
      user: 'deploy',
      host: 'your-staging-server.com',
      ref: 'origin/develop',
      repo: 'git@github.com:your-username/your-repo.git',
      path: '/var/www/zion-app-staging',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': 'echo "This is a command to be executed on the host before the setup of the repo, e.g. creating directories etc."'
    }
  }
};