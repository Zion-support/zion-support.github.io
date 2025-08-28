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

  // Automation processes to replace GitHub Actions
  automation: [
    // Daily link checker (replaces agent-factory.yml)
    {
      name: 'link-checker',
      script: './scripts/automation/link-checker.js',
      instances: 1,
      autorestart: false,
      cron_restart: '0 2 * * *', // Daily at 2 AM
      watch: false,
      env: {
        NODE_ENV: 'production'
      }
    },

    // Weekly continuous improvement (replaces continuous-improvement.yml)
    {
      name: 'continuous-improvement',
      script: './scripts/automation/continuous-improvement.js',
      instances: 1,
      autorestart: false,
      cron_restart: '0 2 * * 1', // Weekly on Monday at 2 AM
      watch: false,
      env: {
        NODE_ENV: 'production'
      }
    },

    // Daily build and test (replaces ci-cd.yml)
    {
      name: 'daily-build-test',
      script: './scripts/automation/daily-build-test.js',
      instances: 1,
      autorestart: false,
      cron_restart: '0 6 * * *', // Daily at 6 AM
      watch: false,
      env: {
        NODE_ENV: 'production'
      }
    },

    // Security audit (replaces security.yml)
    {
      name: 'security-audit',
      script: './scripts/automation/security-audit.js',
      instances: 1,
      autorestart: false,
      cron_restart: '0 8 * * 0', // Weekly on Sunday at 8 AM
      watch: false,
      env: {
        NODE_ENV: 'production'
      }
    },

    // Dependency updates (replaces dependencies.yml)
    {
      name: 'dependency-updates',
      script: './scripts/automation/dependency-updates.js',
      instances: 1,
      autorestart: false,
      cron_restart: '0 10 * * 2', // Weekly on Tuesday at 10 AM
      watch: false,
      env: {
        NODE_ENV: 'production'
      }
    },

    // Performance monitoring (replaces performance testing in ci-cd.yml)
    {
      name: 'performance-monitor',
      script: './scripts/automation/performance-monitor.js',
      instances: 1,
      autorestart: false,
      cron_restart: '0 12 * * *', // Daily at 12 PM
      watch: false,
      env: {
        NODE_ENV: 'production'
      }
    },

    // Quality checks (replaces quality-check.yml)
    {
      name: 'quality-checks',
      script: './scripts/automation/quality-checks.js',
      instances: 1,
      autorestart: false,
      cron_restart: '0 14 * * *', // Daily at 2 PM
      watch: false,
      env: {
        NODE_ENV: 'production'
      }
    },

    // Link integrity checker (replaces link-checker.yml)
    {
      name: 'link-integrity',
      script: './scripts/automation/link-integrity.js',
      instances: 1,
      autorestart: false,
      cron_restart: '0 16 * * *', // Daily at 4 PM
      watch: false,
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
