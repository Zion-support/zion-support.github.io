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
      error_file: './automation/logs/zion-backend-error.log',
      out_file: './automation/logs/zion-backend-out.log',
      log_file: './automation/logs/zion-backend-combined.log',
      time: true
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
      error_file: './automation/logs/orchestrator-error.log',
      out_file: './automation/logs/orchestrator-out.log',
      log_file: './automation/logs/orchestrator-combined.log',
      time: true,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 10000
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
      error_file: './automation/logs/dashboard-error.log',
      out_file: './automation/logs/dashboard-out.log',
      log_file: './automation/logs/dashboard-combined.log',
      time: true,
      port: 3001
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
      error_file: './automation/logs/lint-monitor-error.log',
      out_file: './automation/logs/lint-monitor-out.log',
      log_file: './automation/logs/lint-monitor-combined.log',
      time: true
    },

    {
      name: 'lint-fixer',
      script: './automation/lint-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: ['./automation/lint-error-fixer.cjs'],
      max_memory_restart: '128M',
      error_file: './automation/logs/lint-fixer-error.log',
      out_file: './automation/logs/lint-fixer-out.log',
      log_file: './automation/logs/lint-fixer-combined.log',
      time: true
    },

    // Performance & Security
    {
      name: 'performance-optimizer',
      script: './automation/performance-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: ['./automation/performance-optimizer.cjs'],
      max_memory_restart: '128M',
      error_file: './automation/logs/performance-error.log',
      out_file: './automation/logs/performance-out.log',
      log_file: './automation/logs/performance-combined.log',
      time: true,
      cron_restart: '0 */6 * * *' // Restart every 6 hours
    },

    {
      name: 'security-scanner',
      script: './automation/security-scanner.cjs',
      instances: 1,
      autorestart: true,
      watch: ['./automation/security-scanner.cjs'],
      max_memory_restart: '128M',
      error_file: './automation/logs/security-error.log',
      out_file: './automation/logs/security-out.log',
      log_file: './automation/logs/security-combined.log',
      time: true,
      cron_restart: '0 */4 * * *' // Restart every 4 hours
    },

    // SEO & Content
    {
      name: 'seo-optimizer',
      script: './automation/seo-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: ['./automation/seo-optimizer.cjs'],
      max_memory_restart: '128M',
      error_file: './automation/logs/seo-error.log',
      out_file: './automation/logs/seo-out.log',
      log_file: './automation/logs/seo-combined.log',
      time: true
    },

    {
      name: 'content-generator',
      script: './automation/content-generator.cjs',
      instances: 1,
      autorestart: true,
      watch: ['./automation/content-generator.cjs'],
      max_memory_restart: '128M',
      error_file: './automation/logs/content-error.log',
      out_file: './automation/logs/content-out.log',
      log_file: './automation/logs/content-combined.log',
      time: true
    },

    // Testing & Quality
    {
      name: 'test-generator',
      script: './automation/test-generator.cjs',
      instances: 1,
      autorestart: true,
      watch: ['./automation/test-generator.cjs'],
      max_memory_restart: '128M',
      error_file: './automation/logs/test-generator-error.log',
      out_file: './automation/logs/test-generator-out.log',
      log_file: './automation/logs/test-generator-combined.log',
      time: true
    },

    {
      name: 'code-quality-monitor',
      script: './automation/code-quality-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: ['./automation/code-quality-monitor.cjs'],
      max_memory_restart: '128M',
      error_file: './automation/logs/code-quality-error.log',
      out_file: './automation/logs/code-quality-out.log',
      log_file: './automation/logs/code-quality-combined.log',
      time: true
    },

    // Advanced Automation
    {
      name: 'automation-factory',
      script: './automation/automation-factory.cjs',
      instances: 1,
      autorestart: true,
      watch: ['./automation/automation-factory.cjs'],
      max_memory_restart: '256M',
      error_file: './automation/logs/factory-error.log',
      out_file: './automation/logs/factory-out.log',
      log_file: './automation/logs/factory-combined.log',
      time: true
    },

    // Edge Cache Warmer
    {
      name: 'edge-cache-warmer',
      script: './automation/edge-cache-warmer.cjs',
      instances: 1,
      autorestart: true,
      watch: ['./automation/edge-cache-warmer.cjs'],
      max_memory_restart: '64M',
      error_file: './automation/logs/cache-warmer-error.log',
      out_file: './automation/logs/cache-warmer-out.log',
      log_file: './automation/logs/cache-warmer-combined.log',
      time: true,
      cron_restart: '*/30 * * * *' // Restart every 30 minutes
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