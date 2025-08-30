module.exports = {
  apps: [
    // Main application - Enhanced with clustering and monitoring
    {
      name: 'zion-app',
      script: 'npm',
      args: 'start',
      cwd: './',
      instances: 'max', // Use all available CPU cores
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 4000,
      error_file: './logs/zion-app-error.log',
      out_file: './logs/zion-app-out.log',
      log_file: './logs/zion-app-combined.log',
      time: true,
      env: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=6144 --openssl-legacy-provider'
      },
      env_production: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=6144 --openssl-legacy-provider'
      }
    },
    
    // Backend server - Enhanced with clustering
    {
      name: 'zion-backend',
      script: 'npm',
      args: 'start',
      cwd: './server',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 4000,
      error_file: './logs/zion-backend-error.log',
      out_file: './logs/zion-backend-out.log',
      log_file: './logs/zion-backend-combined.log',
      time: true,
      env: {
        NODE_ENV: 'production'
      }
    },

    // Continuous console error fixer - Enhanced with better monitoring
    {
      name: 'console-error-fixer',
      script: './scripts/automation/console-error-fixer.cjs',
      instances: 2, // Run multiple instances for redundancy
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      min_uptime: '5s',
      max_restarts: 5,
      restart_delay: 2000,
      error_file: './logs/console-error-fixer-error.log',
      out_file: './logs/console-error-fixer-out.log',
      log_file: './logs/console-error-fixer-combined.log',
      time: true,
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      }
    },

    // Continuous link checker - Enhanced with clustering
    {
      name: 'link-checker',
      script: './scripts/automation/link-checker.cjs',
      instances: 2,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      min_uptime: '5s',
      max_restarts: 5,
      restart_delay: 2000,
      error_file: './logs/link-checker-error.log',
      out_file: './logs/link-checker-out.log',
      log_file: './logs/link-checker-combined.log',
      time: true,
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      }
    },

    // Continuous improvement - Enhanced with clustering
    {
      name: 'continuous-improvement',
      script: './scripts/automation/continuous-improvement.cjs',
      instances: 2,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      min_uptime: '5s',
      max_restarts: 5,
      restart_delay: 2000,
      error_file: './logs/continuous-improvement-error.log',
      out_file: './logs/continuous-improvement-out.log',
      log_file: './logs/continuous-improvement-combined.log',
      time: true,
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      }
    },

    // Continuous build and test - Enhanced with clustering
    {
      name: 'daily-build-test',
      script: './scripts/automation/daily-build-test.cjs',
      instances: 2,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      min_uptime: '5s',
      max_restarts: 5,
      restart_delay: 2000,
      error_file: './logs/daily-build-test-error.log',
      out_file: './logs/daily-build-test-out.log',
      log_file: './logs/daily-build-test-combined.log',
      time: true,
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000' // 1 hour
      }
    },

    // Continuous security audit - Enhanced with clustering
    {
      name: 'security-audit',
      script: './scripts/automation/security-audit.cjs',
      instances: 2,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      min_uptime: '5s',
      max_restarts: 5,
      restart_delay: 2000,
      error_file: './logs/security-audit-error.log',
      out_file: './logs/security-audit-out.log',
      log_file: './logs/security-audit-combined.log',
      time: true,
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '14400000' // 4 hours
      }
    },

    // Continuous dependency updates - Enhanced with clustering
    {
      name: 'dependency-updates',
      script: './scripts/automation/dependency-updates.cjs',
      instances: 2,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      min_uptime: '5s',
      max_restarts: 5,
      restart_delay: 2000,
      error_file: './logs/dependency-updates-error.log',
      out_file: './logs/dependency-updates-out.log',
      log_file: './logs/dependency-updates-combined.log',
      time: true,
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '21600000' // 6 hours
      }
    },

    // Continuous performance monitoring - Enhanced with clustering
    {
      name: 'performance-monitor',
      script: './scripts/automation/performance-monitor.cjs',
      instances: 2,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      min_uptime: '5s',
      max_restarts: 5,
      restart_delay: 2000,
      error_file: './logs/performance-monitor-error.log',
      out_file: './logs/performance-monitor-out.log',
      log_file: './logs/performance-monitor-combined.log',
      time: true,
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      }
    },

    // Continuous quality checks - Enhanced with clustering
    {
      name: 'quality-checks',
      script: './scripts/automation/quality-checks.cjs',
      instances: 2,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      min_uptime: '5s',
      max_restarts: 5,
      restart_delay: 2000,
      error_file: './logs/quality-checks-error.log',
      out_file: './logs/quality-checks-out.log',
      log_file: './logs/quality-checks-combined.log',
      time: true,
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '10800000' // 3 hours
      }
    },

    // Continuous link integrity checker - Enhanced with clustering
    {
      name: 'link-integrity',
      script: './scripts/automation/link-integrity.cjs',
      instances: 2,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      min_uptime: '5s',
      max_restarts: 5,
      restart_delay: 2000,
      error_file: './logs/link-integrity-error.log',
      out_file: './logs/link-integrity-out.log',
      log_file: './logs/link-integrity-combined.log',
      time: true,
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      }
    },

    // Continuous front maximizer - Enhanced with clustering
    {
      name: 'front-maximizer',
      script: './scripts/automation/front-maximizer.cjs',
      instances: 2,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      min_uptime: '5s',
      max_restarts: 5,
      restart_delay: 2000,
      error_file: './logs/front-maximizer-error.log',
      out_file: './logs/front-maximizer-out.log',
      log_file: './logs/front-maximizer-combined.log',
      time: true,
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '14400000' // 4 hours
      }
    },

    // Continuous sitemap runner - Enhanced with clustering
    {
      name: 'sitemap-runner',
      script: './scripts/automation/sitemap-runner.cjs',
      instances: 2,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      min_uptime: '5s',
      max_restarts: 5,
      restart_delay: 2000,
      error_file: './logs/sitemap-runner-error.log',
      out_file: './logs/sitemap-runner-out.log',
      log_file: './logs/sitemap-runner-combined.log',
      time: true,
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '21600000' // 6 hours
      }
    }
  ],

  // Global PM2 configuration
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/var/www/zion-app',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.cjs --env production'
    }
  }
};
