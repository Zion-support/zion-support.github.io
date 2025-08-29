module.exports = {
  apps: [
    // Main Application Processes
    {
      name: 'zion-website-frontend',
      script: 'npm',
      args: 'run dev',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    },
    {
      name: 'zion-website-backend',
      script: 'npm',
      args: 'run dev',
      cwd: './server',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 5000
      }
    },

    // Core Automation Systems
    {
      name: 'intelligent-orchestrator',
      script: './automation/intelligent-orchestrator.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      }
    },
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
        PORT: 8080
      }
    },

    // Code Quality Pipeline
    {
      name: 'lint-monitor',
      script: './automation/lint-monitor.cjs',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        SCAN_INTERVAL: '30000'
      }
    },
    {
      name: 'lint-error-fixer',
      script: './automation/lint-error-fixer.cjs',
      args: 'auto-fix',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        AUTO_FIX: 'true'
      }
    },

    // Performance & Security
    {
      name: 'performance-optimizer',
      script: './automation/performance-optimizer.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        OPTIMIZATION_INTERVAL: '60000'
      }
    },
    {
      name: 'security-scanner',
      script: './automation/security-scanner.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        SCAN_INTERVAL: '300000'
      }
    },

    // Content & SEO
    {
      name: 'seo-optimizer',
      script: './automation/seo-optimizer.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        OPTIMIZATION_INTERVAL: '1800000'
      }
    },
    {
      name: 'content-generator',
      script: './automation/content-generator.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        GENERATION_INTERVAL: '3600000'
      }
    },

    // Testing & Quality Assurance
    {
      name: 'test-generator',
      script: './automation/test-generator.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        GENERATION_INTERVAL: '7200000'
      }
    },
    {
      name: 'code-quality-monitor',
      script: './automation/code-quality-monitor.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        MONITORING_INTERVAL: '60000'
      }
    },

    // Advanced Automation Systems
    {
      name: 'ai-automation-factory',
      script: './automation/automation-factory.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        FACTORY_MODE: 'continuous'
      }
    },
    {
      name: 'edge-cache-warmer',
      script: './automation/edge-cache-warmer.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'production',
        WARMING_INTERVAL: '300000'
      }
    }
  ],

  // PM2 Configuration
  deploy: {
    production: {
      user: 'node',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:username/zion-website.git',
      path: '/var/www/zion-website',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};