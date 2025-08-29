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
      }
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
      }
    },

    // Intelligent Orchestrator (High Priority)
    {
      name: 'intelligent-orchestrator',
      script: './automation/intelligent-orchestrator.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: ['./automation/intelligent-orchestrator.cjs'],
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
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
      watch: ['./automation/automation-dashboard.cjs'],
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      },
      error_file: './automation/logs/dashboard-error.log',
      out_file: './automation/logs/dashboard-out.log',
      log_file: './automation/logs/dashboard-combined.log',
      time: true
    },

    // Code Quality Systems
    {
      name: 'lint-monitor',
      script: './automation/lint-monitor.cjs',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: ['./automation/lint-monitor.cjs'],
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'production',
        SCAN_INTERVAL: '30000'
      },
      error_file: './automation/logs/lint-monitor-error.log',
      out_file: './automation/logs/lint-monitor-out.log',
      log_file: './automation/logs/lint-monitor-combined.log',
      time: true
    },

    {
      name: 'lint-fixer',
      script: './automation/lint-error-fixer.cjs',
      args: 'auto',
      instances: 1,
      autorestart: true,
      watch: ['./automation/lint-error-fixer.cjs'],
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'production',
        AUTO_FIX: 'true'
      },
      error_file: './automation/logs/lint-fixer-error.log',
      out_file: './automation/logs/lint-fixer-out.log',
      log_file: './automation/logs/lint-fixer-combined.log',
      time: true
    },

    // Performance & Security
    {
      name: 'performance-optimizer',
      script: './automation/performance-optimizer.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: ['./automation/performance-optimizer.cjs'],
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        OPTIMIZATION_INTERVAL: '300000'
      },
      error_file: './automation/logs/performance-error.log',
      out_file: './automation/logs/performance-out.log',
      log_file: './automation/logs/performance-combined.log',
      time: true
    },

    {
      name: 'security-scanner',
      script: './automation/security-scanner.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: ['./automation/security-scanner.cjs'],
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        SCAN_INTERVAL: '600000'
      },
      error_file: './automation/logs/security-error.log',
      out_file: './automation/logs/security-out.log',
      log_file: './automation/logs/security-combined.log',
      time: true
    },

    // SEO & Content
    {
      name: 'seo-optimizer',
      script: './automation/seo-optimizer.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: ['./automation/seo-optimizer.cjs'],
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'production',
        OPTIMIZATION_INTERVAL: '900000'
      },
      error_file: './automation/logs/seo-error.log',
      out_file: './automation/logs/seo-out.log',
      log_file: './automation/logs/seo-combined.log',
      time: true
    },

    // Testing & Generation
    {
      name: 'test-generator',
      script: './automation/test-generator.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: ['./automation/test-generator.cjs'],
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        GENERATION_INTERVAL: '1800000'
      },
      error_file: './automation/logs/test-gen-error.log',
      out_file: './automation/logs/test-gen-out.log',
      log_file: './automation/logs/test-gen-combined.log',
      time: true
    },

    // Content Generation
    {
      name: 'content-generator',
      script: './automation/content-generator.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: ['./automation/content-generator.cjs'],
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        GENERATION_INTERVAL: '3600000'
      },
      error_file: './automation/logs/content-gen-error.log',
      out_file: './automation/logs/content-gen-out.log',
      log_file: './automation/logs/content-gen-combined.log',
      time: true
    },

    // Advanced Monitoring
    {
      name: 'code-quality-monitor',
      script: './automation/code-quality-monitor.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: ['./automation/code-quality-monitor.cjs'],
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'production',
        MONITORING_INTERVAL: '120000'
      },
      error_file: './automation/logs/code-quality-error.log',
      out_file: './automation/logs/code-quality-out.log',
      log_file: './automation/logs/code-quality-combined.log',
      time: true
    },

    // Edge Cache Warmer
    {
      name: 'edge-cache-warmer',
      script: './automation/edge-cache-warmer.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: ['./automation/edge-cache-warmer.cjs'],
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'production',
        WARMING_INTERVAL: '300000'
      },
      error_file: './automation/logs/cache-warmer-error.log',
      out_file: './automation/logs/cache-warmer-out.log',
      log_file: './automation/logs/cache-warmer-combined.log',
      time: true
    }
  ],

  deploy: {
    production: {
      user: 'node',
      host: '127.0.0.1',
      ref: 'origin/main',
      repo: 'git@github.com:username/zion-website.git',
      path: '/var/www/zion-website',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};