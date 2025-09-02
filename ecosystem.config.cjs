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
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      log_file: './logs/zion-website.log',
      out_file: './logs/zion-website-out.log',
      error_file: './logs/zion-website-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: false,
      time: false,
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
        NODE_ENV: 'production',
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
      pmx: true,
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
        NODE_ENV: 'production',
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
      pmx: true,
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
        NODE_ENV: 'production',
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
      cron_restart: '0 */2 * * *', // Run every 2 hours
      pmx: true,
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
        NODE_ENV: 'production',
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
      pmx: true,
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
        NODE_ENV: 'production',
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
      pmx: true,
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
        NODE_ENV: 'production',
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
      pmx: true,
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
        NODE_ENV: 'production',
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
      pmx: true,
    },

    // CI Automation - replaces GitHub Actions CI workflow
    {
      name: 'ci-automation',
      script: './scripts/automation/ci-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '800M',
      env: {
        NODE_ENV: 'production',
      },
      error_file: './logs/ci-automation-error.log',
      out_file: './logs/ci-automation-out.log',
      log_file: './logs/ci-automation-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '30s',
      restart_delay: 5000,
      cron_restart: '0 */4 * * *', // Run every 4 hours
      pmx: true,
    },

    // Deploy Automation - replaces GitHub Actions Deploy workflow
    {
      name: 'deploy-automation',
      script: './scripts/automation/deploy-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
      error_file: './logs/deploy-automation-error.log',
      out_file: './logs/deploy-automation-out.log',
      log_file: './logs/deploy-automation-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '30s',
      restart_delay: 5000,
      cron_restart: '0 0 * * *', // Run daily at midnight
      pmx: true,
    },

    // Test Automation - replaces GitHub Actions Test workflow
    {
      name: 'test-automation',
      script: './scripts/automation/test-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '800M',
      env: {
        NODE_ENV: 'production',
      },
      error_file: './logs/test-automation-error.log',
      out_file: './logs/test-automation-out.log',
      log_file: './logs/test-automation-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '30s',
      restart_delay: 5000,
      cron_restart: '0 */2 * * *', // Run every 2 hours
      pmx: true,
    },
  ],

  deploy: {
    production: {
      user: 'deploy',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/your-repo.git',
      path: '/var/www/production',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.cjs --env production',
    },
  },
};
