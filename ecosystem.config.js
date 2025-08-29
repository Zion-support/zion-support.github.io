module.exports = {
  apps: [
    // Frontend Development Server
    {
      name: 'zion-frontend-dev',
      script: 'npm',
      args: 'run dev',
      cwd: './',
      instances: 1,
      exec_mode: 'fork',
      watch: ['src/**/*', 'vite.config.ts', 'tailwind.config.ts'],
      ignore_watch: ['node_modules', 'dist', '*.log', 'automation/logs'],
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
        NODE_OPTIONS: '--max-old-space-size=4096 --openssl-legacy-provider'
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
        NODE_OPTIONS: '--max-old-space-size=6144 --openssl-legacy-provider'
      },
      max_memory_restart: '2G',
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 4000,
      error_file: './automation/logs/frontend-error.log',
      out_file: './automation/logs/frontend-out.log',
      log_file: './automation/logs/frontend-combined.log',
      time: true,
      autorestart: true,
      cron_restart: '0 2 * * *', // Restart daily at 2 AM
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Backend Development Server
    {
      name: 'zion-backend-dev',
      script: 'npm',
      args: 'run dev',
      cwd: './server',
      instances: 1,
      exec_mode: 'fork',
      watch: ['src/**/*', 'tsconfig.json'],
      ignore_watch: ['node_modules', 'dist', '*.log'],
      env: {
        NODE_ENV: 'development',
        PORT: 5000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 5000
      },
      max_memory_restart: '1G',
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 4000,
      error_file: './automation/logs/backend-error.log',
      out_file: './automation/logs/backend-out.log',
      log_file: './automation/logs/backend-combined.log',
      time: true,
      autorestart: true,
      cron_restart: '0 3 * * *', // Restart daily at 3 AM
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Hybrid Development Server
    {
      name: 'zion-hybrid-dev',
      script: 'npm',
      args: 'run dev:hybrid',
      cwd: './',
      instances: 1,
      exec_mode: 'fork',
      watch: false, // Disabled for hybrid mode to avoid conflicts
      env: {
        NODE_ENV: 'development',
        FRONTEND_PORT: 3000,
        BACKEND_PORT: 5000
      },
      max_memory_restart: '3G',
      min_uptime: '15s',
      max_restarts: 5,
      restart_delay: 6000,
      error_file: './automation/logs/hybrid-error.log',
      out_file: './automation/logs/hybrid-out.log',
      log_file: './automation/logs/hybrid-combined.log',
      time: true,
      autorestart: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Intelligent Automation Orchestrator
    {
      name: 'zion-intelligent-orchestrator',
      script: './automation/intelligent-orchestrator.cjs',
      args: 'continuous',
      cwd: './',
      instances: 1,
      exec_mode: 'fork',
      watch: ['automation/**/*.cjs', 'automation/**/*.js'],
      ignore_watch: ['node_modules', '*.log', 'automation/logs', 'automation/backups'],
      env: {
        NODE_ENV: 'development',
        LOG_LEVEL: 'info',
        MONITORING_INTERVAL: 30000,
        HEALTH_CHECK_INTERVAL: 60000
      },
      max_memory_restart: '512M',
      min_uptime: '30s',
      max_restarts: 20,
      restart_delay: 2000,
      error_file: './automation/logs/orchestrator-error.log',
      out_file: './automation/logs/orchestrator-out.log',
      log_file: './automation/logs/orchestrator-combined.log',
      time: true,
      autorestart: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Automation Dashboard
    {
      name: 'zion-automation-dashboard',
      script: './automation/automation-dashboard.cjs',
      args: 'start',
      cwd: './',
      instances: 1,
      exec_mode: 'fork',
      watch: ['automation/**/*.cjs', 'automation/**/*.js'],
      ignore_watch: ['node_modules', '*.log', 'automation/logs', 'automation/backups'],
      env: {
        NODE_ENV: 'development',
        PORT: 8080,
        LOG_LEVEL: 'info',
        METRICS_INTERVAL: 30000,
        ALERT_INTERVAL: 60000
      },
      max_memory_restart: '256M',
      min_uptime: '20s',
      max_restarts: 15,
      restart_delay: 3000,
      error_file: './automation/logs/dashboard-error.log',
      out_file: './automation/logs/dashboard-out.log',
      log_file: './automation/logs/dashboard-combined.log',
      time: true,
      autorestart: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Lint Automation Manager
    {
      name: 'zion-lint-manager',
      script: './automation/lint-automation-manager.cjs',
      args: 'start',
      cwd: './',
      instances: 1,
      exec_mode: 'fork',
      watch: ['src/**/*', 'server/src/**/*', '.eslintrc.cjs'],
      ignore_watch: ['node_modules', 'dist', '*.log', 'automation/logs', 'automation/backups'],
      env: {
        NODE_ENV: 'development',
        LOG_LEVEL: 'info',
        LINT_INTERVAL: 15000,
        AUTO_FIX: true,
        WATCH_MODE: true
      },
      max_memory_restart: '256M',
      min_uptime: '25s',
      max_restarts: 25,
      restart_delay: 2000,
      error_file: './automation/logs/lint-manager-error.log',
      out_file: './automation/logs/lint-manager-out.log',
      log_file: './automation/logs/lint-manager-combined.log',
      time: true,
      autorestart: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Code Quality Monitor
    {
      name: 'zion-code-quality',
      script: './automation/code-quality-monitor.cjs',
      cwd: './',
      instances: 1,
      exec_mode: 'fork',
      watch: ['src/**/*', 'server/src/**/*', 'tsconfig.json', 'server/tsconfig.json'],
      ignore_watch: ['node_modules', 'dist', '*.log', 'automation/logs', 'automation/backups'],
      env: {
        NODE_ENV: 'development',
        LOG_LEVEL: 'info',
        SCAN_INTERVAL: 60000,
        QUALITY_THRESHOLD: 0.8,
        AUTO_OPTIMIZE: true
      },
      max_memory_restart: '256M',
      min_uptime: '30s',
      max_restarts: 15,
      restart_delay: 4000,
      error_file: './automation/logs/code-quality-error.log',
      out_file: './automation/logs/code-quality-out.log',
      log_file: './automation/logs/code-quality-combined.log',
      time: true,
      autorestart: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Performance Optimizer
    {
      name: 'zion-performance-optimizer',
      script: './automation/performance-optimizer.cjs',
      cwd: './',
      instances: 1,
      exec_mode: 'fork',
      watch: ['src/**/*', 'vite.config.ts', 'tailwind.config.ts'],
      ignore_watch: ['node_modules', 'dist', '*.log', 'automation/logs', 'automation/backups'],
      env: {
        NODE_ENV: 'development',
        LOG_LEVEL: 'info',
        OPTIMIZATION_INTERVAL: 120000,
        BUNDLE_ANALYSIS: true,
        AUTO_OPTIMIZE: true
      },
      max_memory_restart: '512M',
      min_uptime: '45s',
      max_restarts: 10,
      restart_delay: 5000,
      error_file: './automation/logs/performance-error.log',
      out_file: './automation/logs/performance-out.log',
      log_file: './automation/logs/performance-combined.log',
      time: true,
      autorestart: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Security Scanner
    {
      name: 'zion-security-scanner',
      script: './automation/security-scanner.cjs',
      cwd: './',
      instances: 1,
      exec_mode: 'fork',
      watch: ['package.json', 'server/package.json', 'package-lock.json', 'server/package-lock.json'],
      ignore_watch: ['node_modules', 'dist', '*.log', 'automation/logs', 'automation/backups'],
      env: {
        NODE_ENV: 'development',
        LOG_LEVEL: 'info',
        SCAN_INTERVAL: 300000, // 5 minutes
        VULNERABILITY_THRESHOLD: 'medium',
        AUTO_UPDATE: false
      },
      max_memory_restart: '256M',
      min_uptime: '60s',
      max_restarts: 8,
      restart_delay: 8000,
      error_file: './automation/logs/security-error.log',
      out_file: './automation/logs/security-out.log',
      log_file: './automation/logs/security-combined.log',
      time: true,
      autorestart: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // SEO Optimizer
    {
      name: 'zion-seo-optimizer',
      script: './automation/seo-optimizer.cjs',
      cwd: './',
      instances: 1,
      exec_mode: 'fork',
      watch: ['src/**/*', 'public/**/*', 'index.html'],
      ignore_watch: ['node_modules', 'dist', '*.log', 'automation/logs', 'automation/backups'],
      env: {
        NODE_ENV: 'development',
        LOG_LEVEL: 'info',
        OPTIMIZATION_INTERVAL: 180000, // 3 minutes
        AUTO_OPTIMIZE: true,
        GENERATE_SITEMAP: true
      },
      max_memory_restart: '256M',
      min_uptime: '40s',
      max_restarts: 12,
      restart_delay: 4000,
      error_file: './automation/logs/seo-error.log',
      out_file: './automation/logs/seo-out.log',
      log_file: './automation/logs/seo-combined.log',
      time: true,
      autorestart: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Test Generator
    {
      name: 'zion-test-generator',
      script: './automation/test-generator.cjs',
      cwd: './',
      instances: 1,
      exec_mode: 'fork',
      watch: ['src/**/*', 'server/src/**/*'],
      ignore_watch: ['node_modules', 'dist', 'tests/**/*', '*.log', 'automation/logs', 'automation/backups'],
      env: {
        NODE_ENV: 'development',
        LOG_LEVEL: 'info',
        GENERATION_INTERVAL: 240000, // 4 minutes
        AUTO_GENERATE: true,
        TEST_FRAMEWORK: 'vitest'
      },
      max_memory_restart: '256M',
      min_uptime: '35s',
      max_restarts: 15,
      restart_delay: 3000,
      error_file: './automation/logs/test-generator-error.log',
      out_file: './automation/logs/test-generator-out.log',
      log_file: './automation/logs/test-generator-combined.log',
      time: true,
      autorestart: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    }
  ],

  deploy: {
    production: {
      user: 'deploy',
      host: 'your-production-server.com',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/your-repo.git',
      path: '/var/www/production',
      'pre-deploy-local': 'echo "This is a local executed command"',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': 'echo "This runs before the first deployment"'
    },
    staging: {
      user: 'deploy',
      host: 'your-staging-server.com',
      ref: 'origin/develop',
      repo: 'git@github.com:your-username/your-repo.git',
      path: '/var/www/staging',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env staging',
      'pre-setup': 'echo "This runs before the first deployment"'
    }
  }
};