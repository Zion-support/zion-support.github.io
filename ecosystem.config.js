module.exports = {
  apps: [
    // Core Development Server
    {
      name: 'zion-frontend-dev',
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
      error_file: './logs/frontend-error.log',
      out_file: './logs/frontend-out.log',
      log_file: './logs/frontend-combined.log',
      time: true
    },

    // Backend Development Server
    {
      name: 'zion-backend-dev',
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
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 5000
      },
      error_file: './logs/backend-error.log',
      out_file: './logs/backend-out.log',
      log_file: './logs/backend-combined.log',
      time: true
    },

    // Hybrid Development Mode
    {
      name: 'zion-hybrid-dev',
      script: 'npm',
      args: 'run dev:hybrid',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'development'
      },
      error_file: './logs/hybrid-error.log',
      out_file: './logs/hybrid-out.log',
      log_file: './logs/hybrid-combined.log',
      time: true
    },

    // Intelligent Automation Orchestrator
    {
      name: 'zion-intelligent-orchestrator',
      script: './automation/intelligent-orchestrator.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      error_file: './logs/orchestrator-error.log',
      out_file: './logs/orchestrator-out.log',
      log_file: './logs/orchestrator-combined.log',
      time: true
    },

    // Automation Dashboard
    {
      name: 'zion-automation-dashboard',
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
      error_file: './logs/dashboard-error.log',
      out_file: './logs/dashboard-out.log',
      log_file: './logs/dashboard-combined.log',
      time: true
    },

    // Code Quality Monitor
    {
      name: 'zion-code-quality-monitor',
      script: './automation/code-quality-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        SCAN_INTERVAL: '300000'
      },
      error_file: './logs/code-quality-error.log',
      out_file: './logs/code-quality-out.log',
      log_file: './logs/code-quality-combined.log',
      time: true
    },

    // Lint Monitor
    {
      name: 'zion-lint-monitor',
      script: './automation/lint-monitor.cjs',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        WATCH_PATTERNS: 'src/**/*.{js,jsx,ts,tsx}'
      },
      error_file: './logs/lint-monitor-error.log',
      out_file: './logs/lint-monitor-out.log',
      log_file: './logs/lint-monitor-combined.log',
      time: true
    },

    // Performance Optimizer
    {
      name: 'zion-performance-optimizer',
      script: './automation/performance-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        OPTIMIZATION_INTERVAL: '600000'
      },
      error_file: './logs/performance-error.log',
      out_file: './logs/performance-out.log',
      log_file: './logs/performance-combined.log',
      time: true
    },

    // Security Scanner
    {
      name: 'zion-security-scanner',
      script: './automation/security-scanner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        SCAN_INTERVAL: '900000'
      },
      error_file: './logs/security-error.log',
      out_file: './logs/security-out.log',
      log_file: './logs/security-combined.log',
      time: true
    },

    // SEO Optimizer
    {
      name: 'zion-seo-optimizer',
      script: './automation/seo-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        OPTIMIZATION_INTERVAL: '1800000'
      },
      error_file: './logs/seo-error.log',
      out_file: './logs/seo-out.log',
      log_file: './logs/seo-combined.log',
      time: true
    },

    // Test Generator
    {
      name: 'zion-test-generator',
      script: './automation/test-generator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        GENERATION_INTERVAL: '3600000'
      },
      error_file: './logs/test-generator-error.log',
      out_file: './logs/test-generator-out.log',
      log_file: './logs/test-generator-combined.log',
      time: true
    },

    // Content Generator
    {
      name: 'zion-content-generator',
      script: './automation/content-generator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        GENERATION_INTERVAL: '7200000'
      },
      error_file: './logs/content-generator-error.log',
      out_file: './logs/content-generator-out.log',
      log_file: './logs/content-generator-combined.log',
      time: true
    },

    // Edge Cache Warmer
    {
      name: 'zion-edge-cache-warmer',
      script: './automation/edge-cache-warmer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'production',
        WARMING_INTERVAL: '300000'
      },
      error_file: './logs/cache-warmer-error.log',
      out_file: './logs/cache-warmer-out.log',
      log_file: './logs/cache-warmer-combined.log',
      time: true
    },

    // Repository Fitness Monitor
    {
      name: 'zion-repo-fitness-monitor',
      script: './automation/repo-fitness-score.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'production',
        ASSESSMENT_INTERVAL: '1800000'
      },
      error_file: './logs/repo-fitness-error.log',
      out_file: './logs/repo-fitness-out.log',
      log_file: './logs/repo-fitness-combined.log',
      time: true
    }
  ],

  deploy: {
    production: {
      user: 'deploy',
      host: 'your-production-host.com',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/your-repo.git',
      path: '/var/www/production',
      'pre-deploy-local': 'echo "This is a local executed command"',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': 'echo "This runs before the first deployment"'
    },
    staging: {
      user: 'deploy',
      host: 'your-staging-host.com',
      ref: 'origin/develop',
      repo: 'git@github.com:your-username/your-repo.git',
      path: '/var/www/staging',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env staging',
      'pre-setup': 'echo "This runs before the first deployment"'
    }
  }
};