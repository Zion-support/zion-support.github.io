module.exports = {
  apps: [
    // Main Application
    {
      name: 'zion-app',
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
      error_file: './logs/app-error.log',
      out_file: './logs/app-out.log',
      log_file: './logs/app-combined.log',
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
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development',
        PORT: 5000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 5000
      },
      error_file: './logs/backend-error.log',
      out_file: './logs/backend-out.log',
      log_file: './logs/backend-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Intelligent Automation Orchestrator
    {
      name: 'automation-orchestrator',
      script: './automation/intelligent-orchestrator.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'development',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/orchestrator-error.log',
      out_file: './automation/logs/orchestrator-out.log',
      log_file: './automation/logs/orchestrator-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Lint Monitor
    {
      name: 'lint-monitor',
      script: './automation/lint-monitor.cjs',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'development',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/lint-monitor-error.log',
      out_file: './automation/logs/lint-monitor-out.log',
      log_file: './automation/logs/lint-monitor-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Code Quality Monitor
    {
      name: 'code-quality-monitor',
      script: './automation/code-quality-monitor.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'development',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/code-quality-error.log',
      out_file: './automation/logs/code-quality-out.log',
      log_file: './automation/logs/code-quality-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Performance Optimizer
    {
      name: 'performance-optimizer',
      script: './automation/performance-optimizer.cjs',
      args: 'monitor',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'development',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/performance-error.log',
      out_file: './automation/logs/performance-out.log',
      log_file: './automation/logs/performance-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Security Scanner
    {
      name: 'security-scanner',
      script: './automation/security-scanner.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'development',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/security-error.log',
      out_file: './automation/logs/security-out.log',
      log_file: './automation/logs/security-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // SEO Optimizer
    {
      name: 'seo-optimizer',
      script: './automation/seo-optimizer.cjs',
      args: 'monitor',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'development',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/seo-error.log',
      out_file: './automation/logs/seo-out.log',
      log_file: './automation/logs/seo-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Test Generator
    {
      name: 'test-generator',
      script: './automation/test-generator.cjs',
      args: 'watch',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'development',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/test-generator-error.log',
      out_file: './automation/logs/test-generator-out.log',
      log_file: './automation/logs/test-generator-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Content Generator
    {
      name: 'content-generator',
      script: './automation/content-generator.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'development',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/content-generator-error.log',
      out_file: './automation/logs/content-generator-out.log',
      log_file: './automation/logs/content-generator-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Edge Cache Warmer
    {
      name: 'edge-cache-warmer',
      script: './automation/edge-cache-warmer.cjs',
      args: 'optimize',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'development',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/edge-cache-error.log',
      out_file: './automation/logs/edge-cache-out.log',
      log_file: './automation/logs/edge-cache-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Automation Dashboard
    {
      name: 'automation-dashboard',
      script: './automation/automation-dashboard.cjs',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'development',
        LOG_LEVEL: 'info',
        PORT: 3001
      },
      error_file: './automation/logs/dashboard-error.log',
      out_file: './automation/logs/dashboard-out.log',
      log_file: './automation/logs/dashboard-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    }
  ],

  deploy: {
    production: {
      user: 'deploy',
      host: 'your-production-host.com',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/zion-app.git',
      path: '/var/www/zion-app',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};