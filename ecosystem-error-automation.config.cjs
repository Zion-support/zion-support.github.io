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

    // Enhanced Comprehensive Error Fixer - HIGHEST PRIORITY
    {
      name: 'comprehensive-error-fixer-enhanced',
      script: './scripts/automation/comprehensive-error-fixer-enhanced.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_PRIORITY: 'high'
      },
      cron_restart: '*/15 * * * *', // Every 15 minutes
      log_file: './automation/logs/comprehensive-error-fixer-enhanced.log',
      error_file: './automation/logs/comprehensive-error-fixer-enhanced-error.log',
      out_file: './automation/logs/comprehensive-error-fixer-enhanced-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 5000
    },

    // TypeScript Error Monitor - HIGH PRIORITY
    {
      name: 'typescript-error-monitor',
      script: './scripts/automation/typescript-error-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_PRIORITY: 'high'
      },
      cron_restart: '*/10 * * * *', // Every 10 minutes
      log_file: './automation/logs/typescript-error-monitor.log',
      error_file: './automation/logs/typescript-error-monitor-error.log',
      out_file: './automation/logs/typescript-error-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // ESLint Error Cleaner - MEDIUM PRIORITY
    {
      name: 'eslint-error-cleaner',
      script: './scripts/automation/eslint-error-cleaner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_PRIORITY: 'medium'
      },
      cron_restart: '*/20 * * * *', // Every 20 minutes
      log_file: './automation/logs/eslint-error-cleaner.log',
      error_file: './automation/logs/eslint-error-cleaner-error.log',
      out_file: './automation/logs/eslint-error-cleaner-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Build Error Detector - HIGH PRIORITY
    {
      name: 'build-error-detector',
      script: './scripts/automation/build-error-detector.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_PRIORITY: 'high'
      },
      cron_restart: '*/30 * * * *', // Every 30 minutes
      log_file: './automation/logs/build-error-detector.log',
      error_file: './automation/logs/build-error-detector-error.log',
      out_file: './automation/logs/build-error-detector-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Dependency Error Resolver - MEDIUM PRIORITY
    {
      name: 'dependency-error-resolver',
      script: './scripts/automation/dependency-error-resolver.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_PRIORITY: 'medium'
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './automation/logs/dependency-error-resolver.log',
      error_file: './automation/logs/dependency-error-resolver-error.log',
      out_file: './automation/logs/dependency-error-resolver-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // File Structure Fixer - LOW PRIORITY
    {
      name: 'file-structure-fixer',
      script: './scripts/automation/file-structure-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_PRIORITY: 'low'
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './automation/logs/file-structure-fixer.log',
      error_file: './automation/logs/file-structure-fixer-error.log',
      out_file: './automation/logs/file-structure-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Security Audit Automation - MEDIUM PRIORITY
    {
      name: 'security-audit-automation',
      script: './scripts/automation/security-audit.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_PRIORITY: 'medium'
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: './automation/logs/security-audit-automation.log',
      error_file: './automation/logs/security-audit-automation-error.log',
      out_file: './automation/logs/security-audit-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Performance Monitor - MEDIUM PRIORITY
    {
      name: 'performance-monitor',
      script: './scripts/automation/performance-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_PRIORITY: 'medium'
      },
      cron_restart: '0 */3 * * *', // Every 3 hours
      log_file: './automation/logs/performance-monitor.log',
      error_file: './automation/logs/performance-monitor-error.log',
      out_file: './automation/logs/performance-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Quality Checks - MEDIUM PRIORITY
    {
      name: 'quality-checks',
      script: './scripts/automation/quality-checks.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_PRIORITY: 'medium'
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './automation/logs/quality-checks.log',
      error_file: './automation/logs/quality-checks-error.log',
      out_file: './automation/logs/quality-checks-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Continuous Improvement - LOW PRIORITY
    {
      name: 'continuous-improvement',
      script: './scripts/automation/continuous-improvement.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_PRIORITY: 'low'
      },
      cron_restart: '0 */8 * * *', // Every 8 hours
      log_file: './automation/logs/continuous-improvement.log',
      error_file: './automation/logs/continuous-improvement-error.log',
      out_file: './automation/logs/continuous-improvement-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // PM2 Error Automation Orchestrator - MASTER CONTROLLER
    {
      name: 'pm2-error-automation-orchestrator',
      script: './scripts/automation/pm2-error-automation-orchestrator.cjs',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_PRIORITY: 'master'
      },
      log_file: './automation/logs/pm2-error-automation-orchestrator.log',
      error_file: './automation/logs/pm2-error-automation-orchestrator-error.log',
      out_file: './automation/logs/pm2-error-automation-orchestrator-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '30s',
      max_restarts: 5,
      restart_delay: 10000
    },

    // Enhanced Error Analytics Dashboard
    {
      name: 'error-analytics-dashboard',
      script: './scripts/automation/error-analytics-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_PRIORITY: 'monitoring'
      },
      cron_restart: '0 */1 * * *', // Every hour
      log_file: './automation/logs/error-analytics-dashboard.log',
      error_file: './automation/logs/error-analytics-dashboard-error.log',
      out_file: './automation/logs/error-analytics-dashboard-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Error Prevention Monitor
    {
      name: 'error-prevention-monitor',
      script: './scripts/automation/error-prevention-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_PRIORITY: 'prevention'
      },
      cron_restart: '*/5 * * * *', // Every 5 minutes
      log_file: './automation/logs/error-prevention-monitor.log',
      error_file: './automation/logs/error-prevention-monitor-error.log',
      out_file: './automation/logs/error-prevention-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Critical Error Alert System
    {
      name: 'critical-error-alert-system',
      script: './scripts/automation/critical-error-alert-system.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_PRIORITY: 'critical'
      },
      cron_restart: '*/2 * * * *', // Every 2 minutes
      log_file: './automation/logs/critical-error-alert-system.log',
      error_file: './automation/logs/critical-error-alert-system-error.log',
      out_file: './automation/logs/critical-error-alert-system-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Auto Recovery Manager
    {
      name: 'auto-recovery-manager',
      script: './scripts/automation/auto-recovery-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_PRIORITY: 'recovery'
      },
      cron_restart: '*/1 * * * *', // Every minute
      log_file: './automation/logs/auto-recovery-manager.log',
      error_file: './automation/logs/auto-recovery-manager-error.log',
      out_file: './automation/logs/auto-recovery-manager-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    }
  ],

  deploy: {
    production: {
      user: 'root',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/bolt.new.zion.app.git',
      path: '/workspace/production',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem-error-automation.config.cjs --env production',
      'pre-setup': ''
    }
  }
};