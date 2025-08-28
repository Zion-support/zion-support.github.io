module.exports = {
  apps: [
    // Main application
    {
      name: 'zion-app',
      script: 'npm',
      args: 'start',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=6144 --openssl-legacy-provider'
      },
      env_production: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=6144 --openssl-legacy-provider'
      }
    },
    
    // Backend server
    {
      name: 'zion-backend',
      script: 'npm',
      args: 'start',
      cwd: './server',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    }
  ],

  // Automation processes
  automation: [
    // Daily link checker
    {
      name: 'link-checker',
      script: './scripts/automation/link-checker.js',
      instances: 1,
      autorestart: false,
      cron_restart: '0 2 * * *', // Daily at 2 AM
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '86400000' // 24 hours
      }
    },

    // Weekly continuous improvement
    {
      name: 'continuous-improvement',
      script: './scripts/automation/continuous-improvement.js',
      instances: 1,
      autorestart: false,
      cron_restart: '0 2 * * 1', // Weekly on Monday at 2 AM
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '604800000' // 7 days
      }
    },

    // Daily build and test
    {
      name: 'daily-build-test',
      script: './scripts/automation/daily-build-test.js',
      instances: 1,
      autorestart: false,
      cron_restart: '0 6 * * *', // Daily at 6 AM
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '86400000' // 24 hours
      }
    },

    // Security audit
    {
      name: 'security-audit',
      script: './scripts/automation/security-audit.js',
      instances: 1,
      autorestart: false,
      cron_restart: '0 8 * * 0', // Weekly on Sunday at 8 AM
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '604800000' // 7 days
      }
    },

    // Dependency updates
    {
      name: 'dependency-updates',
      script: './scripts/automation/dependency-updates.js',
      instances: 1,
      autorestart: false,
      cron_restart: '0 10 * * 2', // Weekly on Tuesday at 10 AM
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '604800000' // 7 days
      }
    },

    // Performance monitoring
    {
      name: 'performance-monitor',
      script: './scripts/automation/performance-monitor.js',
      instances: 1,
      autorestart: false,
      cron_restart: '0 12 * * *', // Daily at 12 PM
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '86400000' // 24 hours
      }
    },

    // Quality checks
    {
      name: 'quality-checks',
      script: './scripts/automation/quality-checks.js',
      instances: 1,
      autorestart: false,
      cron_restart: '0 14 * * *', // Daily at 2 PM
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '86400000' // 24 hours
      }
    },

    // Link integrity checker
    {
      name: 'link-integrity',
      script: './scripts/automation/link-integrity.js',
      instances: 1,
      autorestart: false,
      cron_restart: '0 16 * * *', // Daily at 4 PM
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '86400000' // 24 hours
      }
    }
  ]
};
