module.exports = {
  apps: [
    // Main application
    {
      name: 'zion-app',
      script: 'npm',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      error_file: './logs/zion-app-error.log',
      out_file: './logs/zion-app-out.log',
      log_file: './logs/zion-app-combined.log',
      time: true
    },
    
    // Backend services
    {
      name: 'zion-backend',
      script: 'npm',
      args: 'run dev:backend',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development',
        PORT: 5000
      },
      error_file: './logs/zion-backend-error.log',
      out_file: './logs/zion-backend-out.log',
      log_file: './logs/zion-backend-combined.log',
      time: true
    },

    // Build Health Monitor - Prevents build issues
    {
      name: 'build-health-monitor',
      script: './automation/build-health-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 0 * * *', // Restart daily at midnight
      log_file: './logs/build-monitor.log',
      error_file: './logs/build-monitor-error.log',
      out_file: './logs/build-monitor-out.log'
    },

    // Code Quality Monitor - Prevents code issues
    {
      name: 'code-quality-monitor',
      script: './automation/code-quality-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 6 * * *', // Restart daily at 6 AM
      log_file: './logs/code-quality.log',
      error_file: './logs/code-quality-error.log',
      out_file: './logs/code-quality-out.log'
    },

    // Dependency Health Monitor - Prevents dependency issues
    {
      name: 'dependency-monitor',
      script: './automation/dependency-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 12 * * *', // Restart daily at noon
      log_file: './logs/dependency.log',
      error_file: './logs/dependency-error.log',
      out_file: './logs/dependency-out.log'
    },

    // Build Automation - Automatically fixes common issues
    {
      name: 'build-automation',
      script: './automation/build-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 18 * * *', // Restart daily at 6 PM
      log_file: './logs/build-automation.log',
      error_file: './logs/build-automation-error.log',
      out_file: './logs/build-automation-out.log'
    },

    // File Integrity Monitor - Prevents file corruption
    {
      name: 'file-integrity-monitor',
      script: './automation/file-integrity-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 3 * * *', // Restart daily at 3 AM
      log_file: './logs/file-integrity.log',
      error_file: './logs/file-integrity-error.log',
      out_file: './logs/file-integrity-out.log'
    }
  ],

  // Enhanced Automation Processes
  automation: [
    // Core CI/CD automation
    {
      name: 'ci-automation',
      script: './scripts/automation/ci-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      },
      error_file: './logs/ci-automation-error.log',
      out_file: './logs/ci-automation-out.log',
      log_file: './logs/ci-automation-combined.log',
      time: true,
      max_restarts: 10,
      min_uptime: '10s'
    },
    
    // Security automation
    {
      name: 'security-automation',
      script: './scripts/automation/security-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000' // 1 hour
      },
      error_file: './logs/security-automation-error.log',
      out_file: './logs/security-automation-out.log',
      log_file: './logs/security-automation-combined.log',
      time: true,
      max_restarts: 10,
      min_uptime: '10s'
    },
    
    // Test automation
    {
      name: 'test-automation',
      script: './scripts/automation/test-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      },
      error_file: './logs/test-automation-error.log',
      out_file: './logs/test-automation-out.log',
      log_file: './logs/test-automation-combined.log',
      time: true,
      max_restarts: 10,
      min_uptime: '10s'
    },
    
    // Link checker automation
    {
      name: 'link-checker-automation',
      script: './scripts/automation/link-checker-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '86400000' // 24 hours (daily)
      },
      error_file: './logs/link-checker-error.log',
      out_file: './logs/link-checker-out.log',
      log_file: './logs/link-checker-combined.log',
      time: true,
      max_restarts: 10,
      min_uptime: '10s'
    },

    // Enhanced automation processes
    {
      name: 'enhanced-testing',
      script: './scripts/automation/enhanced-testing-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      },
      error_file: './logs/enhanced-testing-error.log',
      out_file: './logs/enhanced-testing-out.log',
      log_file: './logs/enhanced-testing-combined.log',
      time: true,
      max_restarts: 10,
      min_uptime: '10s'
    },
    
    {
      name: 'enhanced-security',
      script: './scripts/automation/enhanced-security-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000' // 1 hour
      },
      error_file: './logs/enhanced-security-error.log',
      out_file: './logs/enhanced-security-out.log',
      log_file: './logs/enhanced-security-combined.log',
      time: true,
      max_restarts: 10,
      min_uptime: '10s'
    },
    
    {
      name: 'enhanced-link-checker',
      script: './scripts/automation/enhanced-link-checker.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      },
      error_file: './logs/enhanced-link-checker-error.log',
      out_file: './logs/enhanced-link-checker-out.log',
      log_file: './logs/enhanced-link-checker-combined.log',
      time: true,
      max_restarts: 10,
      min_uptime: '10s'
    },
    
    {
      name: 'enhanced-ci-cd',
      script: './scripts/automation/enhanced-ci-cd-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      },
      error_file: './logs/enhanced-ci-cd-error.log',
      out_file: './logs/enhanced-ci-cd-out.log',
      log_file: './logs/enhanced-ci-cd-combined.log',
      time: true,
      max_restarts: 10,
      min_uptime: '10s'
    },

    // Console error fixer
    {
      name: 'console-error-fixer',
      script: './scripts/automation/console-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000' // 5 minutes
      },
      error_file: './logs/console-error-fixer-error.log',
      out_file: './logs/console-error-fixer-out.log',
      log_file: './logs/console-error-fixer-combined.log',
      time: true,
      max_restarts: 10,
      min_uptime: '10s'
    },

    // Continuous improvement
    {
      name: 'continuous-improvement',
      script: './scripts/automation/continuous-improvement.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      },
      error_file: './logs/continuous-improvement-error.log',
      out_file: './logs/continuous-improvement-out.log',
      log_file: './logs/continuous-improvement-combined.log',
      time: true,
      max_restarts: 10,
      min_uptime: '10s'
    },

    // Daily build test
    {
      name: 'daily-build-test',
      script: './scripts/automation/daily-build-test.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '86400000' // 24 hours
      },
      error_file: './logs/daily-build-test-error.log',
      out_file: './logs/daily-build-test-out.log',
      log_file: './logs/daily-build-test-combined.log',
      time: true,
      max_restarts: 10,
      min_uptime: '10s'
    }
  ],

  // PM2 Log Rotation
  module: {
    name: 'pm2-logrotate',
    script: 'pm2-logrotate',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '100M',
    env: {
      NODE_ENV: 'production'
    }
  }
};
