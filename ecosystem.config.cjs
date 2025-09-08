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
      name: 'typescript-error-fixer',
      script: './scripts/automation/typescript-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      }
    },

    // 🎨 NEW: Lucide React Icon Fixer - runs every 20 minutes
    {
      name: 'lucide-react-icon-fixer',
      script: './scripts/automation/lucide-react-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1200000' // 20 minutes
      }
    },

    // 📊 NEW: Error Monitoring Dashboard - runs every 5 minutes (HIGHEST PRIORITY)
    {
      name: 'error-monitoring-dashboard',
      script: './scripts/automation/error-monitoring-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000' // 5 minutes
      }
    },

    // 🆕 NEW: TypeScript Error Fixer - runs every 30 minutes (HIGH PRIORITY)
    {
      name: 'typescript-error-fixer',
      script: './scripts/automation/typescript-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      }
    },

    // 🆕 NEW: Project Health Monitor - runs every hour
    {
      name: 'project-health-monitor',
      script: './scripts/automation/project-health-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000' // 1 hour
      }
    },

    // 🆕 NEW: Error Fixing Orchestrator - runs every 15 minutes (HIGHEST PRIORITY)
    {
      name: 'error-fixing-orchestrator',
      script: './scripts/automation/error-fixing-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      }
    },

    // Enhanced Error Fixer - runs every 10 minutes (HIGHEST PRIORITY)
    {
      name: 'enhanced-error-fixer',
      script: './scripts/automation/enhanced-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      }
    },

    // Automation Orchestrator - coordinates all automations
    {
      name: 'automation-orchestrator',
      script: './scripts/automation/automation-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000' // 5 minutes
      }
    },

    // 🚨 NEW: Error Fix Automation Orchestrator - runs continuously (HIGHEST PRIORITY)
    {
      name: 'error-fix-orchestrator',
      script: './scripts/automation/error-fix-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '60000' // 1 minute (continuous monitoring)
      }
    },

    // 🔧 NEW: Core Error Fixer - runs every 15 minutes (HIGHEST PRIORITY)
    {
      name: 'core-error-fixer',
      script: './scripts/automation/error-fix-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      }
    },

    // 🤖 NEW: AI Code Optimizer - runs every hour
    {
      name: 'automation-dashboard',
      script: './scripts/automation/automation-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '60000' // 1 minute
      }
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
