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
    },

    // Enhanced Error Fixer - runs every 15 minutes (HIGHEST PRIORITY)
    {
      name: 'enhanced-error-fixer',
      script: './scripts/automation/enhanced-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000' // 5 minutes
      }
    },

    // 🎯 NEW: PM2 Error Automation Orchestrator - runs every 10 minutes (HIGHEST PRIORITY)
    {
      name: 'pm2-error-automation-orchestrator',
      script: './scripts/automation/pm2-error-automation-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      }
    },

    // 🔧 NEW: Comprehensive Error Fixer - runs every 15 minutes (HIGHEST PRIORITY)
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

    // Code Quality Automation - runs every 2 hours
    {
      name: 'code-quality-automation',
      script: './scripts/automation/code-quality-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      }
    },

    // Automation Orchestrator - runs continuously and manages all automations
    {
      name: 'automation-orchestrator',
      script: './scripts/automation/automation-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    },

    // Continuous link checker - runs every 30 minutes
    {
      name: 'intelligent-error-prevention',
      script: './scripts/automation/intelligent-error-prevention.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      }
    },

    // 🤖 NEW: AI Code Optimizer - runs every hour
    {
      name: 'ai-code-optimizer',
      script: './scripts/automation/ai-code-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000' // 1 hour
      }
    },

    // 📦 NEW: Smart Dependency Manager - runs every 6 hours
    {
      name: 'smart-dependency-manager',
      script: './scripts/automation/smart-dependency-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '21600000' // 6 hours
      }
    },

    // Continuous console error fixer - runs every 15 minutes (HIGHEST PRIORITY)
    {
      name: 'console-error-fixer',
      script: 'scripts/error-fixer.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      error_file: 'logs/console-error-fixer-error.log',
      out_file: 'logs/console-error-fixer-out.log',
      log_file: 'logs/console-error-fixer-combined.log',
      time: true
    },

    // Linting Automation
    {
      name: 'lint-automation',
      script: 'scripts/lint-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      error_file: 'logs/lint-automation-error.log',
      out_file: 'logs/lint-automation-out.log',
      log_file: 'logs/lint-automation-combined.log',
      time: true
    },

    // Type Checking Automation
    {
      name: 'type-check-automation',
      script: 'scripts/type-check-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      cron_restart: '0 */8 * * *', // Restart every 8 hours
      error_file: 'logs/type-check-automation-error.log',
      out_file: 'logs/type-check-automation-out.log',
      log_file: 'logs/type-check-automation-combined.log',
      time: true
    },

    // Code Quality Automation
    {
      name: 'code-quality-automation',
      script: 'scripts/code-quality-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      cron_restart: '0 */12 * * *', // Restart every 12 hours
      error_file: 'logs/code-quality-automation-error.log',
      out_file: 'logs/code-quality-automation-out.log',
      log_file: 'logs/code-quality-automation-combined.log',
      time: true
    },

    // Dependency Management Automation
    {
      name: 'dependency-automation',
      script: 'scripts/dependency-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      cron_restart: '0 2 * * *', // Restart daily at 2 AM
      error_file: 'logs/dependency-automation-error.log',
      out_file: 'logs/dependency-automation-out.log',
      log_file: 'logs/dependency-automation-combined.log',
      time: true
    },

    // Security Audit Automation
    {
      name: 'security-audit-automation',
      script: 'scripts/security-audit-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
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

    // Automation Dashboard - provides real-time monitoring
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
      repo: 'git@github.com:username/repo.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.cjs --env production'
    }
  }
};