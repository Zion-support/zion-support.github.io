module.exports = {
  apps: [
    // Main application
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
      log_file: './logs/zion-website.log',
      out_file: './logs/zion-website-out.log',
      error_file: './logs/zion-website-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true
    },

    // Error Monitor - Monitors and detects errors
    {
      name: 'error-monitor',
      script: './scripts/automation/error-monitor.cjs',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      restart_delay: 5000,
      max_restarts: 10,
      min_uptime: '10s',
      log_file: './logs/error-monitor.log',
      out_file: './logs/error-monitor-out.log',
      error_file: './logs/error-monitor-error.log',
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      max_memory_restart: '500M',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      pmx: true
    },

    // Syntax Fixer - Automatically fixes syntax errors
    {
      name: 'syntax-fixer',
      script: './scripts/automation/syntax-fixer.cjs',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      restart_delay: 10000,
      max_restarts: 5,
      min_uptime: '30s',
      log_file: './logs/syntax-fixer.log',
      out_file: './logs/syntax-fixer-out.log',
      error_file: './logs/syntax-fixer-error.log',
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      max_memory_restart: '1G',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      pmx: true
    },

    // Dependency Manager - Manages dependencies and vulnerabilities
    {
      name: 'dependency-manager',
      script: './scripts/automation/dependency-manager.cjs',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      restart_delay: 15000,
      max_restarts: 3,
      min_uptime: '60s',
      log_file: './logs/dependency-manager.log',
      out_file: './logs/dependency-manager-out.log',
      error_file: './logs/dependency-manager-error.log',
      cron_restart: '0 8 * * *', // Restart daily at 8 AM
      max_memory_restart: '1G',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      pmx: true
    },

    // Build Monitor - Monitors build health and performance
    {
      name: 'build-monitor',
      script: './scripts/automation/build-monitor.cjs',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      restart_delay: 30000,
      max_restarts: 3,
      min_uptime: '120s',
      log_file: './logs/build-monitor.log',
      out_file: './logs/build-monitor-out.log',
      error_file: './logs/build-monitor-error.log',
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      max_memory_restart: '2G',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      pmx: true
    },

    // Health Checker - Performs health checks
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

    // Auto Fixer - Automatically fixes detected errors
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

    // Log Cleaner - Manages log files and cleanup
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
      cron_restart: '0 2 * * *', // Run daily at 2 AM
      log_file: './logs/log-cleaner.log',
      out_file: './logs/log-cleaner-out.log',
      error_file: './logs/log-cleaner-error.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '5s',
      restart_delay: 2000,
      pmx: true
    },

    // Security Audit - Runs security checks
    {
      name: 'security-audit',
      script: './scripts/automation/security-audit.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'security-audit'
      },
      cron_restart: '0 4 * * 1', // Restart every Monday at 4 AM
      log_file: './logs/security-audit.log',
      out_file: './logs/security-audit-out.log',
      error_file: './logs/security-audit-error.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      pmx: true
    },

    // Performance Monitor - Monitors application performance
    {
      name: 'performance-monitor',
      script: './scripts/automation/performance-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'performance-monitor'
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      log_file: './logs/performance-monitor.log',
      out_file: './logs/performance-monitor-out.log',
      error_file: './logs/performance-monitor-error.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      pmx: true
    },

    // Quality Checks - Runs quality assurance checks
    {
      name: 'quality-checks',
      script: './scripts/automation/quality-checks.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'quality-checks'
      },
      cron_restart: '0 5 * * *', // Restart daily at 5 AM
      log_file: './logs/quality-checks.log',
      out_file: './logs/quality-checks-out.log',
      error_file: './logs/quality-checks-error.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      pmx: true
    },

    // Link Integrity - Ensures link integrity
    {
      name: 'link-integrity',
      script: './scripts/automation/link-checker-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'link-integrity'
      },
      cron_restart: '0 6 * * *', // Restart daily at 6 AM
      log_file: './logs/link-integrity.log',
      out_file: './logs/link-integrity-out.log',
      error_file: './logs/link-integrity-error.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      pmx: true
    },

    // Front Maximizer - Optimizes frontend performance
    {
      name: 'front-maximizer',
      script: './scripts/automation/front-maximizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'front-maximizer'
      },
      cron_restart: '0 7 * * *', // Restart daily at 7 AM
      log_file: './logs/front-maximizer.log',
      out_file: './logs/front-maximizer-out.log',
      error_file: './logs/front-maximizer-error.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      pmx: true
    },

    // Sitemap Runner - Generates and updates sitemap
    {
      name: 'sitemap-runner',
      script: './scripts/automation/sitemap-runner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'sitemap-runner'
      },
      cron_restart: '0 8 * * *', // Restart daily at 8 AM
      log_file: './logs/sitemap-runner.log',
      out_file: './logs/sitemap-runner-out.log',
      error_file: './logs/sitemap-runner-error.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      pmx: true
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
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: './logs/auto-fix-and-build.log',
      error_file: './logs/auto-fix-and-build-error.log',
      out_file: './logs/auto-fix-and-build-out.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      pmx: true
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
      log_file: './logs/dev-watch-build.log',
      out_file: './logs/dev-watch-build-out.log',
      error_file: './logs/dev-watch-build-error.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      pmx: true
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