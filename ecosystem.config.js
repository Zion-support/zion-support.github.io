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
      error_file: './automation/logs/zion-website-error.log',
      out_file: './automation/logs/zion-website-out.log',
      log_file: './automation/logs/zion-website-combined.log',
      time: true
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
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development',
        PORT: 5000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 5000
      },
      error_file: './automation/logs/zion-backend-error.log',
      out_file: './automation/logs/zion-backend-out.log',
      log_file: './automation/logs/zion-backend-combined.log',
      time: true
    },

    // Intelligent Orchestrator
    {
      name: 'intelligent-orchestrator',
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
      time: true
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
        NODE_ENV: 'development',
        PORT: 3001,
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/dashboard-error.log',
      out_file: './automation/logs/dashboard-out.log',
      log_file: './automation/logs/dashboard-combined.log',
      time: true
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
        NODE_ENV: 'development',
        LOG_LEVEL: 'info',
        SCAN_INTERVAL: '30000'
      },
      error_file: './automation/logs/code-quality-error.log',
      out_file: './automation/logs/code-quality-out.log',
      log_file: './automation/logs/code-quality-combined.log',
      time: true
    },

    // Lint Monitor
    {
      name: 'lint-monitor',
      script: './automation/lint-monitor.cjs',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'development',
        LOG_LEVEL: 'info',
        WATCH_PATTERNS: 'src/**/*.{js,jsx,ts,tsx}',
        AUTO_FIX: 'true'
      },
      error_file: './automation/logs/lint-monitor-error.log',
      out_file: './automation/logs/lint-monitor-out.log',
      log_file: './automation/logs/lint-monitor-combined.log',
      time: true
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
        NODE_ENV: 'development',
        LOG_LEVEL: 'info',
        OPTIMIZATION_INTERVAL: '300000'
      },
      error_file: './automation/logs/performance-error.log',
      out_file: './automation/logs/performance-out.log',
      log_file: './automation/logs/performance-combined.log',
      time: true
    },

    // Security Scanner
    {
      name: 'security-scanner',
      script: './automation/security-scanner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'development',
        LOG_LEVEL: 'info',
        SCAN_INTERVAL: '600000'
      },
      error_file: './automation/logs/security-error.log',
      out_file: './automation/logs/security-out.log',
      log_file: './automation/logs/security-combined.log',
      time: true
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
        NODE_ENV: 'development',
        LOG_LEVEL: 'info',
        OPTIMIZATION_INTERVAL: '900000'
      },
      error_file: './automation/logs/seo-error.log',
      out_file: './automation/logs/seo-out.log',
      log_file: './automation/logs/seo-combined.log',
      time: true
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
        NODE_ENV: 'development',
        LOG_LEVEL: 'info',
        GENERATION_INTERVAL: '1800000'
      },
      error_file: './automation/logs/test-generator-error.log',
      out_file: './automation/logs/test-generator-out.log',
      log_file: './automation/logs/test-generator-combined.log',
      time: true
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
        NODE_ENV: 'development',
        LOG_LEVEL: 'info',
        GENERATION_INTERVAL: '3600000'
      },
      error_file: './automation/logs/content-generator-error.log',
      out_file: './automation/logs/content-generator-out.log',
      log_file: './automation/logs/content-generator-combined.log',
      time: true
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
        NODE_ENV: 'development',
        LOG_LEVEL: 'info',
        WARMING_INTERVAL: '1800000'
      },
      error_file: './automation/logs/cache-warmer-error.log',
      out_file: './automation/logs/cache-warmer-out.log',
      log_file: './automation/logs/cache-warmer-combined.log',
      time: true
    }
  ],

  deploy: {
    production: {
      user: 'deploy',
      host: 'your-production-host.com',
      ref: 'origin/main',
      repo: 'git@github.com:yourusername/zion-website.git',
      path: '/var/www/zion-website',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    },
    staging: {
      user: 'deploy',
      host: 'your-staging-host.com',
      ref: 'origin/develop',
      repo: 'git@github.com:yourusername/zion-website.git',
      path: '/var/www/zion-website-staging',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env development',
      'pre-setup': ''
    }
  }
};