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
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    },

    // Enhanced AI Code Optimizer - Runs every 30 minutes
    {
      name: 'ai-code-optimizer',
      script: './scripts/automation/ai-code-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'ai-code-optimizer'
      },
      cron_restart: '*/30 * * * *', // Every 30 minutes
      log_file: './logs/ai-code-optimizer.log',
      error_file: './logs/ai-code-optimizer-error.log',
      out_file: './logs/ai-code-optimizer-out.log'
    },

    // Smart Test Automation - Runs every 2 hours
    {
      name: 'smart-test-automation',
      script: './scripts/automation/smart-test-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'smart-test-automation'
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './logs/smart-test-automation.log',
      error_file: './logs/smart-test-automation-error.log',
      out_file: './logs/smart-test-automation-out.log'
    },

    // Intelligent Deployment Automation - Runs on demand (can be triggered manually)
    {
      name: 'intelligent-deployment',
      script: './scripts/automation/intelligent-deployment.cjs',
      instances: 1,
      autorestart: false, // Don't auto-restart, run on demand
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'intelligent-deployment'
      },
      log_file: './logs/intelligent-deployment.log',
      error_file: './logs/intelligent-deployment-error.log',
      out_file: './logs/intelligent-deployment-out.log'
    },

    // Enhanced Project Health Monitor - Runs every 10 minutes
    {
      name: 'project-health-monitor',
      script: './scripts/automation/project-health-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'project-health-monitor'
      },
      cron_restart: '*/10 * * * *', // Every 10 minutes
      log_file: './logs/project-health-monitor.log',
      error_file: './logs/project-health-monitor-error.log',
      out_file: './logs/project-health-monitor-out.log'
    },

    // Enhanced Project Health Dashboard - Runs every 5 minutes
    {
      name: 'project-health-dashboard',
      script: './scripts/automation/project-health-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'project-health-dashboard'
      },
      cron_restart: '*/5 * * * *', // Every 5 minutes
      log_file: './logs/project-health-dashboard.log',
      error_file: './logs/project-health-dashboard-error.log',
      out_file: './logs/project-health-dashboard-out.log'
    },

    // Enhanced TypeScript Syntax Fixer - Runs every 15 minutes
    {
      name: 'typescript-syntax-fixer',
      script: './scripts/automation/typescript-syntax-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'typescript-syntax-fixer'
      },
      cron_restart: '*/15 * * * *', // Every 15 minutes
      log_file: './logs/typescript-syntax-fixer.log',
      error_file: './logs/typescript-syntax-fixer-error.log',
      out_file: './logs/typescript-syntax-fixer-out.log'
    },

    // Enhanced Dependency Manager - Runs every 4 hours
    {
      name: 'dependency-manager',
      script: './scripts/automation/dependency-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'dependency-manager'
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './logs/dependency-manager.log',
      error_file: './logs/dependency-manager-error.log',
      out_file: './logs/dependency-manager-out.log'
    },

    // Enhanced Security Automation - Runs every 6 hours
    {
      name: 'enhanced-security-automation',
      script: './scripts/automation/enhanced-security-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'enhanced-security-automation'
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: './logs/enhanced-security-automation.log',
      error_file: './logs/enhanced-security-automation-error.log',
      out_file: './logs/enhanced-security-automation-out.log'
    },

    // Enhanced Testing Automation - Runs every 3 hours
    {
      name: 'enhanced-testing-automation',
      script: './scripts/automation/enhanced-testing-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'enhanced-testing-automation'
      },
      cron_restart: '0 */3 * * *', // Every 3 hours
      log_file: './logs/enhanced-testing-automation.log',
      error_file: './logs/enhanced-testing-automation-error.log',
      out_file: './logs/enhanced-testing-automation-out.log'
    },

    // Enhanced CI/CD Automation - Runs every hour
    {
      name: 'enhanced-ci-cd-automation',
      script: './scripts/automation/enhanced-ci-cd-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'enhanced-ci-cd-automation'
      },
      cron_restart: '0 * * * *', // Every hour
      log_file: './logs/enhanced-ci-cd-automation.log',
      error_file: './logs/enhanced-ci-cd-automation-error.log',
      out_file: './logs/enhanced-ci-cd-automation-out.log'
    },

    // Enhanced Link Checker - Runs every 8 hours
    {
      name: 'enhanced-link-checker',
      script: './scripts/automation/enhanced-link-checker.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'enhanced-link-checker'
      },
      cron_restart: '0 */8 * * *', // Every 8 hours
      log_file: './logs/enhanced-link-checker.log',
      error_file: './logs/enhanced-link-checker-error.log',
      out_file: './logs/enhanced-link-checker-out.log'
    },

    // Console Error Fixer - Runs every 20 minutes
    {
      name: 'console-error-fixer',
      script: './scripts/automation/console-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'console-error-fixer'
      },
      cron_restart: '*/20 * * * *', // Every 20 minutes
      log_file: './logs/console-error-fixer.log',
      error_file: './logs/console-error-fixer-error.log',
      out_file: './logs/console-error-fixer-out.log'
    },

    // Continuous Improvement - Runs every 12 hours
    {
      name: 'continuous-improvement',
      script: './scripts/automation/continuous-improvement.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'continuous-improvement'
      },
      cron_restart: '0 */12 * * *', // Every 12 hours
      log_file: './logs/continuous-improvement.log',
      error_file: './logs/continuous-improvement-error.log',
      out_file: './logs/continuous-improvement-out.log'
    },

    // Daily Build Test - Runs daily at 2 AM
    {
      name: 'daily-build-test',
      script: './scripts/automation/daily-build-test.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'daily-build-test'
      },
      cron_restart: '0 2 * * *', // Daily at 2 AM
      log_file: './logs/daily-build-test.log',
      error_file: './logs/daily-build-test-error.log',
      out_file: './logs/daily-build-test-out.log'
    },

    // Legacy automations (kept for compatibility)
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

  deploy: {
    production: {
      user: 'miami2',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/Users/miami2/zion-app-clone',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem-enhanced.config.cjs --env production',
      'pre-setup': ''
    }
  }
};