module.exports = {
  apps: [
<<<<<<< HEAD
    // PM2 Error Prevention Automation - runs every 5 minutes (HIGHEST PRIORITY)
    {
      name: 'pm2-error-prevention',
      script: './scripts/automation/pm2-error-prevention-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000' // 5 minutes
      },
      log_file: './automation/logs/pm2-error-prevention.log',
      error_file: './automation/logs/pm2-error-prevention-error.log',
      out_file: './automation/logs/pm2-error-prevention-out.log'
    },

    // Console Error Fixer - Automatically fixes console errors
=======
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a
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
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '5s',
      restart_delay: 2000,
      cron_restart: '*/10 * * * *', // Run every 10 minutes
      pmx: true
    },
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
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '5s',
      restart_delay: 2000,
      cron_restart: '*/5 * * * *', // Run every 5 minutes
      pmx: true
    },
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
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '10s',
      restart_delay: 5000,
      cron_restart: '0 */2 * * *', // Run every 2 hours
      pmx: true
    },
    {
      name: 'log-cleaner',
      script: './scripts/log-cleaner.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '200M',
      env: {
        NODE_ENV: 'production'
      },
<<<<<<< HEAD
      cron_restart: '0 2 * * 1', // Restart every Monday at 2 AM
      log_file: 'logs/link-checker.log',
      out_file: 'logs/link-checker-out.log',
      error_file: 'logs/link-checker-error.log'
    },

    // Continuous Improvement - Runs code quality checks
    {
      name: 'continuous-improvement',
      script: 'scripts/automation-wrapper.js',
      args: 'improve',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'continuous-improvement'
      },
      cron_restart: '0 2 * * 1', // Restart every Monday at 2 AM
      log_file: 'logs/continuous-improvement.log',
      out_file: 'logs/continuous-improvement-out.log',
      error_file: 'logs/continuous-improvement-error.log'
    },

    // Daily Build Test - Runs build and tests daily
    {
      name: 'daily-build-test',
      script: 'scripts/automation-wrapper.js',
      args: 'build-test',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'daily-build-test'
      },
      cron_restart: '0 3 * * *', // Restart daily at 3 AM
      log_file: 'logs/daily-build-test.log',
      out_file: 'logs/daily-build-test-out.log',
      error_file: 'logs/daily-build-test-error.log'
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

    // Dependency Updates - Checks and updates dependencies
    {
      name: 'dependency-updates',
      script: 'scripts/automation-wrapper.js',
      args: 'deps',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'dependency-updates'
      },
      cron_restart: '0 2 * * 1', // Restart every Monday at 2 AM
      log_file: 'logs/dependency-updates.log',
      out_file: 'logs/dependency-updates-out.log',
      error_file: 'logs/dependency-updates-error.log'
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
        PM2_PROCESS: 'dependency-updates'
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

    // Automated Build & Lint fixer
    {
      name: 'auto-fix-and-build',
      script: 'bash',
      args: '-lc "npm install --silent && npm run lint || true && npm run type-check || true && npm run build"',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
<<<<<<< HEAD
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: './logs/smart-dependency-intelligence.log',
      error_file: './logs/smart-dependency-intelligence-error.log',
      out_file: './logs/smart-dependency-intelligence-out.log'
    },

    {
      name: 'predictive-issue-detection',
      script: './scripts/automation/predictive-issue-detection.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */3 * * *', // Every 3 hours
      log_file: './logs/predictive-issue-detection.log',
      error_file: './logs/predictive-issue-detection-error.log',
      out_file: './logs/predictive-issue-detection-out.log'
    },

    {
      name: 'intelligent-build-pipeline',
      script: './scripts/automation/intelligent-build-pipeline.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */8 * * *', // Every 8 hours
      log_file: './logs/intelligent-build-pipeline.log',
      error_file: './logs/intelligent-build-pipeline-error.log',
      out_file: './logs/intelligent-build-pipeline-out.log'
    },

    // AI Code Review - Runs AI-powered code review
    {
      name: 'ai-code-review',
      script: './scripts/automation/ai-code-review.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './logs/ai-code-review.log',
      error_file: './logs/ai-code-review-error.log',
      out_file: './logs/ai-code-review-out.log'
    },

    // Smart Dependency Intelligence - Manages dependencies intelligently
    {
      name: 'smart-dependency-intelligence',
      script: './scripts/automation/smart-dependency-intelligence.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: './logs/smart-dependency-intelligence.log',
      error_file: './logs/smart-dependency-intelligence-error.log',
      out_file: './logs/smart-dependency-intelligence-out.log'
    },

    // Predictive Issue Detection - Anticipates and prevents issues
    {
      name: 'predictive-issue-detection',
      script: './scripts/automation/predictive-issue-detection.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */3 * * *', // Every 3 hours
      log_file: './logs/predictive-issue-detection.log',
      error_file: './logs/predictive-issue-detection-error.log',
      out_file: './logs/predictive-issue-detection-out.log'
    },

    // Intelligent Build Pipeline - Optimizes build processes
    {
      name: 'intelligent-build-pipeline',
      script: './scripts/automation/intelligent-build-pipeline.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */8 * * *', // Every 8 hours
      log_file: './logs/intelligent-build-pipeline.log',
      error_file: './logs/intelligent-build-pipeline-error.log',
      out_file: './logs/intelligent-build-pipeline-out.log'
=======
      env: { NODE_ENV: 'production' },
      cron_restart: '0 */6 * * *',
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
=======
      error_file: './logs/log-cleaner-error.log',
      out_file: './logs/log-cleaner-out.log',
      log_file: './logs/log-cleaner-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '5s',
      restart_delay: 2000,
      cron_restart: '0 2 * * *', // Run daily at 2 AM
      pmx: true
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-ed0a
    }
  ],

  deploy: {
    production: {
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/var/www/zion.app',
      'pre-deploy-local': '',
      'post-deploy': 'npm install --legacy-peer-deps && npm run build && pm2 reload ecosystem.config.cjs --env production',
      'pre-setup': 'mkdir -p /var/www/zion.app/logs'
    }
  }
};