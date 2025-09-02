module.exports = {
  apps: [
    {
      name: 'zion-website',
      script: 'npm',
      args: 'run dev',
      cwd: '/workspace',
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
      log_file: './logs/zion-website.log',
      out_file: './logs/zion-website-out.log',
      error_file: './logs/zion-website-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: false,
      time: false
    },

    // Error Monitor - runs every 10 minutes
    {
      name: 'error-monitor',
      script: './scripts/error-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/error-monitor-error.log',
      out_file: './logs/error-monitor-out.log',
      log_file: './logs/error-monitor-combined.log',
      time: false,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: false,
      max_restarts: 10,
      min_uptime: '5s',
      restart_delay: 2000,
      cron_restart: '*/10 * * * *', // Run every 10 minutes
      pmx: true
    },

    // Health Checker - runs every 5 minutes
    {
      name: 'health-checker',
      script: './scripts/health-checker.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/health-checker-error.log',
      out_file: './logs/health-checker-out.log',
      log_file: './logs/health-checker-combined.log',
      time: false,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: false,
      max_restarts: 5,
      min_uptime: '5s',
      restart_delay: 2000,
      cron_restart: '*/5 * * * *', // Run every 5 minutes
      pmx: true
    },

    // Auto Fixer - runs every 2 hours
    {
      name: 'auto-fixer',
      script: './scripts/auto-fixer.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/auto-fixer-error.log',
      out_file: './logs/auto-fixer-out.log',
      log_file: './logs/auto-fixer-combined.log',
      time: false,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: false,
      max_restarts: 3,
      min_uptime: '10s',
      restart_delay: 5000,
      cron_restart: '*/30 * * * *', // Run every 30 minutes
      pmx: true
    },

    // Syntax Fixer - runs every 30 minutes
    {
      name: 'syntax-fixer',
      script: './scripts/automation/syntax-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '800M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/syntax-fixer-error.log',
      out_file: './logs/syntax-fixer-out.log',
      log_file: './logs/syntax-fixer-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '15s',
      restart_delay: 3000,
      cron_restart: '*/30 * * * *', // Run every 30 minutes
      pmx: true
    },

    // Dependency Manager - runs every hour
    {
      name: 'dependency-manager',
      script: './scripts/automation/intelligent-dependency-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '600M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/dependency-manager-error.log',
      out_file: './logs/dependency-manager-out.log',
      log_file: './logs/dependency-manager-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '20s',
      restart_delay: 5000,
      cron_restart: '0 * * * *', // Run every hour
      pmx: true
    },

    // Build Monitor - runs every 15 minutes
    {
      name: 'build-monitor',
      script: './scripts/automation/build-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '400M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/build-monitor-error.log',
      out_file: './logs/build-monitor-out.log',
      log_file: './logs/build-monitor-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '10s',
      restart_delay: 2000,
      cron_restart: '*/15 * * * *', // Run every 15 minutes
      pmx: true
    },

    // Log Cleaner - runs daily at 2 AM
    {
      name: 'log-cleaner',
      script: './scripts/log-cleaner.js',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '200M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/log-cleaner-error.log',
      out_file: './logs/log-cleaner-out.log',
      log_file: './logs/log-cleaner-combined.log',
      time: false,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: false,
      max_restarts: 3,
      min_uptime: '5s',
      restart_delay: 2000,
      cron_restart: '0 2 * * *', // Run daily at 2 AM
      pmx: true
    },

    // Security Audit - Runs security checks
    {
      name: 'security-audit',
      script: 'scripts/automation-wrapper.js',
      args: 'security',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'security-audit'
      },
      cron_restart: '0 4 * * 1', // Restart every Monday at 4 AM
      log_file: 'logs/security-audit.log',
      out_file: 'logs/security-audit-out.log',
      error_file: 'logs/security-audit-error.log'
    },

    // Performance Monitor - Monitors application performance
    {
      name: 'performance-monitor',
      script: 'scripts/automation-wrapper.js',
      args: 'performance',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'performance-monitor'
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      log_file: 'logs/performance-monitor.log',
      out_file: 'logs/performance-monitor-out.log',
      error_file: 'logs/performance-monitor-error.log'
    },

    // Quality Checks - Runs quality assurance checks
    {
      name: 'quality-checks',
      script: 'scripts/automation-wrapper.js',
      args: 'quality',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'quality-checks'
      },
      cron_restart: '0 5 * * *', // Restart daily at 5 AM
      log_file: 'logs/quality-checks.log',
      out_file: 'logs/quality-checks-out.log',
      error_file: 'logs/quality-checks-error.log'
    },

    // Link Integrity - Ensures link integrity
    {
      name: 'link-integrity',
      script: 'scripts/automation-wrapper.js',
      args: 'integrity',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'link-integrity'
      },
      cron_restart: '0 6 * * *', // Restart daily at 6 AM
      log_file: 'logs/link-integrity.log',
      out_file: 'logs/link-integrity-out.log',
      error_file: 'logs/link-integrity-error.log'
    },

    // Front Maximizer - Optimizes frontend performance
    {
      name: 'front-maximizer',
      script: 'scripts/automation-wrapper.js',
      args: 'maximize',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'front-maximizer'
      },
      cron_restart: '0 7 * * *', // Restart daily at 7 AM
      log_file: 'logs/front-maximizer.log',
      out_file: 'logs/front-maximizer-out.log',
      error_file: 'logs/front-maximizer-error.log'
    },

    // Sitemap Runner - Generates and updates sitemap
    {
      name: 'sitemap-runner',
      script: 'scripts/automation-wrapper.js',
      args: 'sitemap',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'sitemap-runner'
      },
      cron_restart: '0 8 * * *', // Restart daily at 8 AM
      log_file: 'logs/sitemap-runner.log',
      out_file: 'logs/sitemap-runner-out.log',
      error_file: 'logs/sitemap-runner-error.log'
    },

    // NEW: Git Automation Manager - Handles repository operations
    {
      name: 'git-automation-manager',
      script: './scripts/automation/git-automation-manager.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production',
        GIT_AUTO_COMMIT: 'true',
        GIT_AUTO_PUSH: 'true',
        GIT_AUTO_MERGE: 'true'
      },
      cron_restart: '0 */3 * * *', // Restart every 3 hours
      log_file: './logs/git-automation-manager.log',
      out_file: './logs/git-automation-manager-out.log',
      error_file: './logs/git-automation-manager-error.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true
    },

    // NEW: Intelligent Deployment Pipeline
    {
      name: 'intelligent-deployment-pipeline',
      script: './scripts/automation/intelligent-deployment-pipeline.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTO_DEPLOY: 'true',
        DEPLOY_STRATEGY: 'intelligent'
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: './logs/intelligent-deployment-pipeline.log',
      out_file: './logs/intelligent-deployment-pipeline-out.log',
      error_file: './logs/intelligent-deployment-pipeline-error.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true
    },

    // NEW: Code Quality Automation
    {
      name: 'code-quality-automation',
      script: './scripts/automation/code-quality-automation.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '800M',
      env: {
        NODE_ENV: 'production',
        AUTO_LINT: 'true',
        AUTO_FORMAT: 'true',
        AUTO_TEST: 'true'
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      log_file: './logs/code-quality-automation.log',
      out_file: './logs/code-quality-automation-out.log',
      error_file: './logs/code-quality-automation-error.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true
    },

    // NEW: Performance Optimization Automation
    {
      name: 'performance-optimization-automation',
      script: './scripts/automation/performance-optimization-automation.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTO_OPTIMIZE: 'true',
        BUNDLE_ANALYSIS: 'true'
      },
      cron_restart: '0 9 * * *', // Restart daily at 9 AM
      log_file: './logs/performance-optimization-automation.log',
      out_file: './logs/performance-optimization-automation-out.log',
      error_file: './logs/performance-optimization-automation-error.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true
    },

    // NEW: Security Automation
    {
      name: 'security-automation',
      script: './scripts/automation/security-automation.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '600M',
      env: {
        NODE_ENV: 'production',
        AUTO_SECURITY_SCAN: 'true',
        VULNERABILITY_CHECK: 'true'
      },
      cron_restart: '0 10 * * *', // Restart daily at 10 AM
      log_file: './logs/security-automation.log',
      out_file: './logs/security-automation-out.log',
      error_file: './logs/security-automation-error.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true
    },

    // NEW: Repository Health Monitor
    {
      name: 'repository-health-monitor',
      script: './scripts/automation/repository-health-monitor.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '400M',
      env: {
        NODE_ENV: 'production',
        REPO_HEALTH_CHECK: 'true',
        BRANCH_ANALYSIS: 'true'
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      log_file: './logs/repository-health-monitor.log',
      out_file: './logs/repository-health-monitor-out.log',
      error_file: './logs/repository-health-monitor-error.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true
    },

    // Automated Build & Lint fixer
    {
      name: 'auto-fix-and-build',
      script: 'bash',
      args: '-lc "npm install --silent && npm run lint || true && npm run type-check || true && npm run build"',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: { NODE_ENV: 'production' },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: 'logs/auto-fix-and-build.log',
      out_file: 'logs/auto-fix-and-build-out.log',
      error_file: 'logs/auto-fix-and-build-error.log'
    },

    // Watcher to rebuild on changes
    {
      name: 'dev-watch-build',
      script: 'bash',
      args: '-lc "npm run build"',
      instances: 1,
      watch: ['src', 'public', 'postcss.config.js', 'vite.config.ts'],
      ignore_watch: ['dist', 'node_modules', 'logs'],
      max_memory_restart: '1G',
      env: { NODE_ENV: 'development' },
      log_file: 'logs/dev-watch-build.log',
      out_file: 'logs/dev-watch-build-out.log',
      error_file: 'logs/dev-watch-build-error.log'
    }
  ],

  deploy: {
    production: {
      user: 'deploy',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/workspace',
      'pre-deploy-local': '',
      'post-deploy': 'npm install --legacy-peer-deps && npm run build && pm2 reload ecosystem.config.cjs --env production',
      'pre-setup': 'mkdir -p /var/www/zion.app/logs'
    }
  }
};