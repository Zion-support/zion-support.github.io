module.exports = {
  apps: [
    // Main error fixing orchestrator - runs every 15 minutes
    {
      name: 'error-fixing-orchestrator',
      script: './scripts/automation/comprehensive-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      },
      error_file: './automation/logs/error-fixing-orchestrator-error.log',
      out_file: './automation/logs/error-fixing-orchestrator-out.log',
      log_file: './automation/logs/error-fixing-orchestrator-combined.log',
      time: true
    },

    // TypeScript error fixer - runs every 10 minutes
    {
      name: 'typescript-error-fixer',
      script: './scripts/automation/typescript-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      },
      error_file: './automation/logs/typescript-error-fixer-error.log',
      out_file: './automation/logs/typescript-error-fixer-out.log',
      log_file: './automation/logs/typescript-error-fixer-combined.log',
      time: true
    },

    // ESLint error fixer - runs every 12 minutes
    {
      name: 'eslint-error-fixer',
      script: './scripts/automation/eslint-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '720000' // 12 minutes
      },
      error_file: './automation/logs/eslint-error-fixer-error.log',
      out_file: './automation/logs/eslint-error-fixer-out.log',
      log_file: './automation/logs/eslint-error-fixer-combined.log',
      time: true
    },

    // Import error fixer - runs every 20 minutes
    {
      name: 'import-error-fixer',
      script: './scripts/automation/import-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1200000' // 20 minutes
      },
      error_file: './automation/logs/import-error-fixer-error.log',
      out_file: './automation/logs/import-error-fixer-out.log',
      log_file: './automation/logs/import-error-fixer-combined.log',
      time: true
    },

    // Build error detector - runs every 5 minutes
    {
      name: 'build-error-detector',
      script: './scripts/automation/build-error-detector.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000' // 5 minutes
      },
      error_file: './automation/logs/build-error-detector-error.log',
      out_file: './automation/logs/build-error-detector-out.log',
      log_file: './automation/logs/build-error-detector-combined.log',
      time: true
    },

    // Configuration error fixer - runs every 30 minutes
    {
      name: 'config-error-fixer',
      script: './scripts/automation/config-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      },
      error_file: './automation/logs/config-error-fixer-error.log',
      out_file: './automation/logs/config-error-fixer-out.log',
      log_file: './automation/logs/config-error-fixer-combined.log',
      time: true
    },

    // Error prevention monitor - runs every 8 minutes
    {
      name: 'error-prevention-monitor',
      script: './scripts/automation/error-prevention-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '480000' // 8 minutes
      },
      error_file: './automation/logs/error-prevention-monitor-error.log',
      out_file: './automation/logs/error-prevention-monitor-out.log',
      log_file: './automation/logs/error-prevention-monitor-combined.log',
      time: true
    },

    // Critical error alert system - runs every 2 minutes
    {
      name: 'critical-error-alert',
      script: './scripts/automation/critical-error-alert-system.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '120000' // 2 minutes
      },
      error_file: './automation/logs/critical-error-alert-error.log',
      out_file: './automation/logs/critical-error-alert-out.log',
      log_file: './automation/logs/critical-error-alert-combined.log',
      time: true
    },

    // Error analytics dashboard - runs every 15 minutes
    {
      name: 'error-analytics-dashboard',
      script: './scripts/automation/error-analytics-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      },
      error_file: './automation/logs/error-analytics-dashboard-error.log',
      out_file: './automation/logs/error-analytics-dashboard-out.log',
      log_file: './automation/logs/error-analytics-dashboard-combined.log',
      time: true
    },

    // Auto recovery manager - runs every 6 minutes
    {
      name: 'auto-recovery-manager',
      script: './scripts/automation/auto-recovery-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '360000' // 6 minutes
      },
      error_file: './automation/logs/auto-recovery-manager-error.log',
      out_file: './automation/logs/auto-recovery-manager-out.log',
      log_file: './automation/logs/auto-recovery-manager-combined.log',
      time: true
    }
  ]
};