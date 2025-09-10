module.exports = {
  apps: [
    // Data File Error Fixer - runs every 5 minutes (HIGHEST PRIORITY)
    {
      name: 'data-file-error-fixer',
      script: './scripts/automation/data-file-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000' // 5 minutes
      },
      env_production: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000'
      }
    },

    // Enhanced Error Prevention Automation - runs every 10 minutes
    {
      name: 'enhanced-error-prevention-automation',
      script: './scripts/automation/enhanced-error-prevention-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      },
      env_production: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000'
      }
    },

    // Intelligent Error Prevention Orchestrator - runs every 15 minutes
    {
      name: 'intelligent-error-prevention-orchestrator',
      script: './scripts/automation/intelligent-error-prevention-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      },
      env_production: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000'
      }
    },

    // Comprehensive Error Fixer - runs every 10 minutes
    {
      name: 'comprehensive-error-fixer',
      script: './scripts/automation/comprehensive-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      }
    },

    // TypeScript Error Fixer - runs every 15 minutes
    {
      name: 'typescript-error-fixer',
      script: './scripts/automation/typescript-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      }
    },

    // General Error Fixer - runs every 20 minutes
    {
      name: 'general-error-fixer',
      script: './scripts/automation/error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1200000' // 20 minutes
      }
    },

    // Continuous console error fixer - runs every 15 minutes
    {
      name: 'console-error-fixer',
      script: './scripts/automation/console-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      }
    },

    // Continuous link checker - runs every 30 minutes
    {
      name: 'link-checker',
      script: './scripts/automation/link-checker.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      }
    },

    // Continuous improvement - runs every 2 hours
    {
      name: 'continuous-improvement',
      script: './scripts/automation/continuous-improvement.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      }
    },

    // Continuous build and test - runs every hour
    {
      name: 'daily-build-test',
      script: './scripts/automation/daily-build-test.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000' // 1 hour
      }
    },

    // Continuous security audit - runs every 4 hours
    {
      name: 'security-audit',
      script: './scripts/automation/security-audit.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '14400000' // 4 hours
      }
    },

    // Continuous dependency updates - runs every 6 hours
    {
      name: 'dependency-updates',
      script: './scripts/automation/dependency-updates.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '21600000' // 6 hours
      }
    },

    // Continuous performance monitoring - runs every 2 hours
    {
      name: 'performance-monitor',
      script: './scripts/automation/performance-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      }
    },

    // Continuous quality checks - runs every 3 hours
    {
      name: 'quality-checks',
      script: './scripts/automation/quality-checks.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '10800000' // 3 hours
      }
    },

    // Continuous link integrity checker - runs every 2 hours
    {
      name: 'link-integrity',
      script: './scripts/automation/link-integrity.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      }
    },

    // Continuous front maximizer - runs every 4 hours
    {
      name: 'front-maximizer',
      script: './scripts/automation/front-maximizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '14400000' // 4 hours
      }
    },

    // Continuous sitemap runner - runs every 6 hours
    {
      name: 'sitemap-runner',
      script: './scripts/automation/sitemap-runner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '21600000' // 6 hours
      }
    },

    // PM2 Monitor - runs every 10 minutes
    {
      name: 'pm2-monitor',
      script: './scripts/automation/pm2-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      }
    },

    // Enhanced Automation Runner - runs every 15 minutes
    {
      name: 'enhanced-automation-runner',
      script: './scripts/automation/enhanced-automation-runner.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      }
    }
  ]
};