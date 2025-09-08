module.exports = {
  apps: [
    // Main application
    {
      name: 'zion-tech-app',
      script: 'npm',
      args: 'run dev',
      cwd: '/workspace',
      watch: false,
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      }
    },

    // Comprehensive error fixer - runs every 10 minutes (HIGHEST PRIORITY)
    {
      name: 'comprehensive-error-fixer',
      script: './scripts/automation/comprehensive-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      }
    },

    // TypeScript error fixer - runs every 5 minutes (HIGH PRIORITY)
    {
      name: 'typescript-error-fixer',
      script: './scripts/automation/typescript-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000' // 5 minutes
      }
    },

    // JSX/React error fixer - runs every 5 minutes (HIGH PRIORITY)
    {
      name: 'jsx-error-fixer',
      script: './scripts/automation/jsx-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000' // 5 minutes
      }
    },

    // Comprehensive error monitor - runs every 2 minutes (HIGHEST PRIORITY)
    {
      name: 'error-monitor',
      script: './scripts/automation/error-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '120000' // 2 minutes
      }
    },

    // Console error fixer - runs every 15 minutes
    {
      name: 'error-fixer',
      script: './scripts/automation/error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      }
    },

    // TypeScript error fixer - runs every 15 minutes
    {
      name: 'typescript-fixer',
      script: './scripts/automation/typescript-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      }
    },

    // Code quality fixer - runs every 20 minutes
    {
      name: 'code-quality-fixer',
      script: './scripts/automation/code-quality-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1200000' // 20 minutes
      }
    },

    // Continuous console error fixer - runs every 15 minutes (LEGACY)
    {
      name: 'typescript-error-fixer',
      script: 'scripts/automation/robust-typescript-fixer.cjs',
      cwd: '/workspace',
      watch: false,
      instances: 1,
      autorestart: true,
      cron_restart: '*/5 * * * *', // Every 5 minutes
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development'
      }
    },

    // Comprehensive Error Fixer - runs every 10 minutes
    {
      name: 'comprehensive-error-fixer',
      script: 'scripts/automation/comprehensive-error-fixer.cjs',
      cwd: '/workspace',
      watch: false,
      instances: 1,
      autorestart: true,
      cron_restart: '*/10 * * * *', // Every 10 minutes
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development'
      }
    },

    // Duplicate Identifier Fixer - runs every 15 minutes
    {
      name: 'duplicate-identifier-fixer',
      script: 'scripts/automation/duplicate-identifier-fixer.cjs',
      cwd: '/workspace',
      watch: false,
      instances: 1,
      autorestart: true,
      cron_restart: '*/15 * * * *', // Every 15 minutes
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development'
      }
    },

    // Error Monitoring Dashboard - runs every 30 minutes
    {
      name: 'error-monitoring-dashboard',
      script: 'scripts/automation/error-monitoring-dashboard.cjs',
      cwd: '/workspace',
      watch: false,
      instances: 1,
      autorestart: true,
      cron_restart: '*/30 * * * *', // Every 30 minutes
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development'
      }
    },

    // Project Health Check - runs every hour
    {
      name: 'project-health-check',
      script: 'scripts/automation/project-health-check.cjs',
      cwd: '/workspace',
      watch: false,
      instances: 1,
      autorestart: true,
      cron_restart: '0 * * * *', // Every hour
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development'
      }
    },

    // 🚨 NEW: Comprehensive Error Fixer - runs every 15 minutes (HIGHEST PRIORITY)
    {
      name: 'comprehensive-error-fixer',
      script: './scripts/automation/comprehensive-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      }
    },

    // 🔧 NEW: TypeScript Error Fixer - runs every 10 minutes (HIGHEST PRIORITY)
    {
      name: 'ci-cd-automation',
      script: 'automation/ci-cd-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      log_file: './logs/ci-cd.log',
      out_file: './logs/ci-cd-out.log',
      error_file: './logs/ci-cd-error.log',
      time: true
    },

    // 🎨 NEW: Lucide React Icon Fixer - runs every 20 minutes
    {
      name: 'continuous-improvement',
      script: 'automation/continuous-improvement.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      cron_restart: '0 */3 * * *', // Restart every 3 hours
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      log_file: './logs/continuous-improvement.log',
      out_file: './logs/continuous-improvement-out.log',
      error_file: './logs/continuous-improvement-error.log',
      time: true
    },
    {
      name: 'quality-checks',
      script: 'automation/lint-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      cron_restart: '0 */3 * * *', // Restart every 3 hours
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      log_file: './logs/quality-checks.log',
      out_file: './logs/quality-checks-out.log',
      error_file: './logs/quality-checks-error.log',
      time: true
    },
    {
      name: 'performance-monitor',
      script: 'automation/build-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      log_file: './logs/performance-monitor.log',
      out_file: './logs/performance-monitor-out.log',
      error_file: './logs/performance-monitor-error.log',
      time: true
    }
  ],

  deploy: {
    production: {
      user: 'node',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:repo/name.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.cjs --env production'
    }
  }
};
