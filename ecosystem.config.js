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

  // Automation processes to replace Netlify functions and GitHub Actions
  automation: [
    // Daily link checker
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

    // Weekly continuous improvement
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

    // Daily build and test
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

    // Weekly security audit
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

    // Weekly dependency updates
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

    // Daily performance monitoring
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

    // Daily quality checks
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

    // Daily link integrity checker
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
    },

    // Front maximizer (replaces front-maximizer Netlify function)
    {
      name: 'front-maximizer',
      script: './scripts/automation/front-maximizer.js',
      instances: 1,
      autorestart: false,
      cron_restart: '0 18 * * *', // Daily at 6 PM
      watch: false,
      env: {
        NODE_ENV: 'production'
      }
    },

    // Sitemap runner (replaces sitemap_runner Netlify function)
    {
      name: 'sitemap-runner',
      script: './scripts/automation/sitemap-runner.js',
      instances: 1,
      autorestart: false,
      cron_restart: '0 20 * * *', // Daily at 8 PM
      watch: false,
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
