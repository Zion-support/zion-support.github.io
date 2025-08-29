module.exports = {
  apps: [
    // Core Automation Orchestrator
    {
      name: 'intelligent-orchestrator',
      script: './automation/intelligent-orchestrator.cjs',
      args: 'continuous',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      autorestart: true,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'intelligent-orchestrator'
      },
      env_development: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'intelligent-orchestrator-dev'
      },
      log_file: './automation/logs/intelligent-orchestrator.log',
      out_file: './automation/logs/intelligent-orchestrator-out.log',
      error_file: './automation/logs/intelligent-orchestrator-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 4000,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 8000
    },

    // Automation Dashboard
    {
      name: 'automation-dashboard',
      script: './automation/automation-dashboard.cjs',
      args: 'start',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      autorestart: true,
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
        PM2_PROCESS_NAME: 'automation-dashboard'
      },
      log_file: './automation/logs/automation-dashboard.log',
      out_file: './automation/logs/automation-dashboard-out.log',
      error_file: './automation/logs/automation-dashboard-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '5s',
      restart_delay: 2000
    },

    // Lint Monitoring System
    {
      name: 'lint-monitor',
      script: './automation/lint-monitor.cjs',
      args: 'start',
      instances: 1,
      exec_mode: 'fork',
      watch: ['./src', './server/src'],
      watch_delay: 1000,
      ignore_watch: ['node_modules', 'dist', 'build', '*.log'],
      autorestart: true,
      max_memory_restart: '200M',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'lint-monitor'
      },
      log_file: './automation/logs/lint-monitor.log',
      out_file: './automation/logs/lint-monitor-out.log',
      error_file: './automation/logs/lint-monitor-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 15,
      min_uptime: '3s',
      restart_delay: 1000
    },

    // Lint Error Fixer
    {
      name: 'lint-fixer',
      script: './automation/lint-error-fixer.cjs',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      autorestart: false,
      max_memory_restart: '150M',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'lint-fixer'
      },
      log_file: './automation/logs/lint-fixer.log',
      out_file: './automation/logs/lint-fixer-out.log',
      error_file: './automation/logs/lint-fixer-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '2s'
    },

    // Code Quality Monitor
    {
      name: 'code-quality',
      script: './automation/code-quality-monitor.cjs',
      instances: 1,
      exec_mode: 'fork',
      watch: ['./src', './server/src'],
      watch_delay: 5000,
      ignore_watch: ['node_modules', 'dist', 'build', '*.log'],
      autorestart: true,
      max_memory_restart: '250M',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'code-quality'
      },
      log_file: './automation/logs/code-quality.log',
      out_file: './automation/logs/code-quality-out.log',
      error_file: './automation/logs/code-quality-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 8,
      min_uptime: '5s',
      restart_delay: 3000
    },

    // Performance Optimizer
    {
      name: 'performance-optimizer',
      script: './automation/performance-optimizer.cjs',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      autorestart: true,
      max_memory_restart: '200M',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'performance-optimizer'
      },
      log_file: './automation/logs/performance-optimizer.log',
      out_file: './automation/logs/performance-optimizer-out.log',
      error_file: './automation/logs/performance-optimizer-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '10s',
      restart_delay: 5000
    },

    // Security Scanner
    {
      name: 'security-scanner',
      script: './automation/security-scanner.cjs',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      autorestart: true,
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'security-scanner'
      },
      log_file: './automation/logs/security-scanner.log',
      out_file: './automation/logs/security-scanner-out.log',
      error_file: './automation/logs/security-scanner-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '15s',
      restart_delay: 10000
    },

    // SEO Optimizer
    {
      name: 'seo-optimizer',
      script: './automation/seo-optimizer.cjs',
      instances: 1,
      exec_mode: 'fork',
      watch: ['./src', './public'],
      watch_delay: 10000,
      ignore_watch: ['node_modules', 'dist', 'build', '*.log'],
      autorestart: true,
      max_memory_restart: '200M',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'seo-optimizer'
      },
      log_file: './automation/logs/seo-optimizer.log',
      out_file: './automation/logs/seo-optimizer-out.log',
      error_file: './automation/logs/seo-optimizer-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '8s',
      restart_delay: 4000
    },

    // Test Generator
    {
      name: 'test-generator',
      script: './automation/test-generator.cjs',
      instances: 1,
      exec_mode: 'fork',
      watch: ['./src', './server/src'],
      watch_delay: 8000,
      ignore_watch: ['node_modules', 'dist', 'build', '*.log', 'tests'],
      autorestart: true,
      max_memory_restart: '250M',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'test-generator'
      },
      log_file: './automation/logs/test-generator.log',
      out_file: './automation/logs/test-generator-out.log',
      error_file: './automation/logs/test-generator-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '5s',
      restart_delay: 3000
    },

    // Content Generator
    {
      name: 'content-generator',
      script: './automation/content-generator.cjs',
      instances: 1,
      exec_mode: 'fork',
      watch: ['./src', './data'],
      watch_delay: 15000,
      ignore_watch: ['node_modules', 'dist', 'build', '*.log'],
      autorestart: true,
      max_memory_restart: '200M',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'content-generator'
      },
      log_file: './automation/logs/content-generator.log',
      out_file: './automation/logs/content-generator-out.log',
      error_file: './automation/logs/content-generator-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '10s',
      restart_delay: 5000
    },

    // Edge Cache Warmer
    {
      name: 'edge-cache-warmer',
      script: './automation/edge-cache-warmer.cjs',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      autorestart: true,
      max_memory_restart: '150M',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'edge-cache-warmer'
      },
      log_file: './automation/logs/edge-cache-warmer.log',
      out_file: './automation/logs/edge-cache-warmer-out.log',
      error_file: './automation/logs/edge-cache-warmer-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '5s',
      restart_delay: 3000
    },

    // OG Meta Auditor
    {
      name: 'og-meta-auditor',
      script: './automation/og-meta-auditor.cjs',
      instances: 1,
      exec_mode: 'fork',
      watch: ['./src', './public'],
      watch_delay: 20000,
      ignore_watch: ['node_modules', 'dist', 'build', '*.log'],
      autorestart: true,
      max_memory_restart: '150M',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'og-meta-auditor'
      },
      log_file: './automation/logs/og-meta-auditor.log',
      out_file: './automation/logs/og-meta-auditor-out.log',
      error_file: './automation/logs/og-meta-auditor-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '5s',
      restart_delay: 3000
    },

    // Site Link Crawler
    {
      name: 'site-link-crawler',
      script: './automation/site-link-crawler.cjs',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      autorestart: true,
      max_memory_restart: '200M',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'site-link-crawler'
      },
      log_file: './automation/logs/site-link-crawler.log',
      out_file: './automation/logs/site-link-crawler-out.log',
      error_file: './automation/logs/site-link-crawler-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '10s',
      restart_delay: 5000
    },

    // Site Link Fixer
    {
      name: 'site-link-fixer',
      script: './automation/site-link-fixer.cjs',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      autorestart: true,
      max_memory_restart: '150M',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'site-link-fixer'
      },
      log_file: './automation/logs/site-link-fixer.log',
      out_file: './automation/logs/site-link-fixer-out.log',
      error_file: './automation/logs/site-link-fixer-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '5s',
      restart_delay: 3000
    },

    // Footer Injector
    {
      name: 'footer-injector',
      script: './automation/footer-injector.cjs',
      instances: 1,
      exec_mode: 'fork',
      watch: ['./src'],
      watch_delay: 12000,
      ignore_watch: ['node_modules', 'dist', 'build', '*.log'],
      autorestart: true,
      max_memory_restart: '100M',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'footer-injector'
      },
      log_file: './automation/logs/footer-injector.log',
      out_file: './automation/logs/footer-injector-out.log',
      error_file: './automation/logs/footer-injector-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '3s',
      restart_delay: 2000
    },

    // Pre-build Health Check
    {
      name: 'pre-build-health-check',
      script: './automation/pre-build-health-check.cjs',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      autorestart: false,
      max_memory_restart: '100M',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'pre-build-health-check'
      },
      log_file: './automation/logs/pre-build-health-check.log',
      out_file: './automation/logs/pre-build-health-check-out.log',
      error_file: './automation/logs/pre-build-health-check-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 2,
      min_uptime: '2s'
    },

    // Repository Fitness Score
    {
      name: 'repo-fitness-score',
      script: './automation/repo-fitness-score.cjs',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      autorestart: true,
      max_memory_restart: '150M',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'repo-fitness-score'
      },
      log_file: './automation/logs/repo-fitness-score.log',
      out_file: './automation/logs/repo-fitness-score-out.log',
      error_file: './automation/logs/repo-fitness-score-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '8s',
      restart_delay: 4000
    }
  ],

  deploy: {
    production: {
      user: 'deploy',
      host: 'your-production-host.com',
      ref: 'origin/main',
      repo: 'git@github.com:yourusername/your-repo.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': 'mkdir -p /var/www/production'
    },
    staging: {
      user: 'deploy',
      host: 'your-staging-host.com',
      ref: 'origin/develop',
      repo: 'git@github.com:yourusername/your-repo.git',
      path: '/var/www/staging',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env development',
      'pre-setup': 'mkdir -p /var/www/staging'
    }
  }
};