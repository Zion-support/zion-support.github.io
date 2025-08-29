module.exports = {
  apps: [
    // Main Application
    {
      name: 'zion-website',
      script: 'npm',
      args: 'run dev',
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
      },
      error_file: './logs/pm2/err.log',
      out_file: './logs/pm2/out.log',
      log_file: './logs/pm2/combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Backend Server
    {
      name: 'zion-backend',
      script: 'npm',
      args: 'run dev',
      cwd: './server',
      instances: 1,
      autorestart: true,
      watch: ['src/**/*.ts'],
      ignore_watch: ['node_modules', 'dist', 'logs'],
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development',
        PORT: 5000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 5000
      },
      error_file: '../logs/pm2/backend-err.log',
      out_file: '../logs/pm2/backend-out.log',
      log_file: '../logs/pm2/backend-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Intelligent Orchestrator (High Priority)
    {
      name: 'intelligent-orchestrator',
      script: './automation/intelligent-orchestrator.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        PRIORITY: 'high'
      },
      error_file: './logs/pm2/orchestrator-err.log',
      out_file: './logs/pm2/orchestrator-out.log',
      log_file: './logs/pm2/orchestrator-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 4000
    },

    // Automation Dashboard
    {
      name: 'automation-dashboard',
      script: './automation/automation-dashboard.cjs',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      },
      error_file: './logs/pm2/dashboard-err.log',
      out_file: './logs/pm2/dashboard-out.log',
      log_file: './logs/pm2/dashboard-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 5,
      restart_delay: 2000
    },

    // Lint Monitor (High Priority)
    {
      name: 'lint-monitor',
      script: './automation/lint-monitor.cjs',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: ['src/**/*.{js,jsx,ts,tsx}', 'server/src/**/*.ts'],
      ignore_watch: ['node_modules', 'dist', 'logs', '*.log'],
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        PRIORITY: 'high',
        WATCH_PATTERNS: 'src/**/*.{js,jsx,ts,tsx},server/src/**/*.ts'
      },
      error_file: './logs/pm2/lint-monitor-err.log',
      out_file: './logs/pm2/lint-monitor-out.log',
      log_file: './logs/pm2/lint-monitor-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 15,
      restart_delay: 1000
    },

    // Lint Error Fixer
    {
      name: 'lint-fixer',
      script: './automation/lint-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        PRIORITY: 'high'
      },
      error_file: './logs/pm2/lint-fixer-err.log',
      out_file: './logs/pm2/lint-fixer-out.log',
      log_file: './logs/pm2/lint-fixer-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 2000
    },

    // Code Quality Monitor
    {
      name: 'code-quality-monitor',
      script: './automation/code-quality-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        PRIORITY: 'medium'
      },
      error_file: './logs/pm2/code-quality-err.log',
      out_file: './logs/pm2/code-quality-out.log',
      log_file: './logs/pm2/code-quality-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 5,
      restart_delay: 5000
    },

    // Performance Optimizer
    {
      name: 'performance-optimizer',
      script: './automation/performance-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        PRIORITY: 'low'
      },
      error_file: './logs/pm2/performance-err.log',
      out_file: './logs/pm2/performance-out.log',
      log_file: './logs/pm2/performance-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 3,
      restart_delay: 10000
    },

    // Security Scanner (High Priority)
    {
      name: 'security-scanner',
      script: './automation/security-scanner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        PRIORITY: 'high'
      },
      error_file: './logs/pm2/security-err.log',
      out_file: './logs/pm2/security-out.log',
      log_file: './logs/pm2/security-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 5,
      restart_delay: 5000
    },

    // SEO Optimizer
    {
      name: 'seo-optimizer',
      script: './automation/seo-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        PRIORITY: 'medium'
      },
      error_file: './logs/pm2/seo-err.log',
      out_file: './logs/pm2/seo-out.log',
      log_file: './logs/pm2/seo-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 3,
      restart_delay: 10000
    },

    // Test Generator
    {
      name: 'test-generator',
      script: './automation/test-generator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        PRIORITY: 'medium'
      },
      error_file: './logs/pm2/test-gen-err.log',
      out_file: './logs/pm2/test-gen-out.log',
      log_file: './logs/pm2/test-gen-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 5,
      restart_delay: 5000
    },

    // Content Generator
    {
      name: 'content-generator',
      script: './automation/content-generator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        PRIORITY: 'low'
      },
      error_file: './logs/pm2/content-gen-err.log',
      out_file: './logs/pm2/content-gen-out.log',
      log_file: './logs/pm2/content-gen-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 3,
      restart_delay: 15000
    },

    // Edge Cache Warmer
    {
      name: 'edge-cache-warmer',
      script: './automation/edge-cache-warmer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'production',
        PRIORITY: 'low'
      },
      error_file: './logs/pm2/cache-warmer-err.log',
      out_file: './logs/pm2/cache-warmer-out.log',
      log_file: './logs/pm2/cache-warmer-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 3,
      restart_delay: 20000
    }
  ],

  deploy: {
    production: {
      user: 'deploy',
      host: 'your-production-host.com',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/zion-website.git',
      path: '/var/www/zion-website',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    },
    staging: {
      user: 'deploy',
      host: 'your-staging-host.com',
      ref: 'origin/develop',
      repo: 'git@github.com:your-username/zion-website.git',
      path: '/var/www/zion-website-staging',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};