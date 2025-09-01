module.exports = {
  apps: [
    // Master Error Detector & Fixer - Main coordinator (HIGHEST PRIORITY)
    {
      name: 'master-error-detector-fixer',
      script: './scripts/automation/master-error-detector-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000' // 5 minutes
      },
      cron_restart: '0 */5 * * *', // Every 5 minutes
      log_file: './automation/logs/master-error-detector.log',
      error_file: './automation/logs/master-error-detector-error.log',
      out_file: './automation/logs/master-error-detector-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Enhanced TypeScript Error Fixer - Specialized TypeScript fixes (HIGH PRIORITY)
    {
      name: 'typescript-error-fixer-enhanced',
      script: './scripts/automation/typescript-error-fixer-enhanced.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      },
      cron_restart: '0 */10 * * *', // Every 10 minutes
      log_file: './automation/logs/typescript-error-fixer.log',
      error_file: './automation/logs/typescript-error-fixer-error.log',
      out_file: './automation/logs/typescript-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Continuous Build Error Detector - Monitors build health (HIGH PRIORITY)
    {
      name: 'build-error-detector',
      script: './scripts/automation/build-error-detector.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      },
      cron_restart: '0 */15 * * *', // Every 15 minutes
      log_file: './automation/logs/build-error-detector.log',
      error_file: './automation/logs/build-error-detector-error.log',
      out_file: './automation/logs/build-error-detector-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // ESLint Error Cleaner - Fixes linting issues (MEDIUM PRIORITY)
    {
      name: 'eslint-error-fixer',
      script: './scripts/automation/eslint-error-cleaner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      },
      cron_restart: '0 */15 * * *', // Every 15 minutes
      log_file: './automation/logs/eslint-error-fixer.log',
      error_file: './automation/logs/eslint-error-fixer-error.log',
      out_file: './automation/logs/eslint-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Dependency Health Monitor - Checks and fixes dependencies (MEDIUM PRIORITY)
    {
      name: 'dependency-health-monitor',
      script: './scripts/automation/dependency-health-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      },
      cron_restart: '0 */30 * * *', // Every 30 minutes
      log_file: './automation/logs/dependency-health.log',
      error_file: './automation/logs/dependency-health-error.log',
      out_file: './automation/logs/dependency-health-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Performance Monitor - Monitors app performance (MEDIUM PRIORITY)
    {
      name: 'performance-monitor',
      script: './scripts/automation/performance-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      },
      cron_restart: '0 */30 * * *', // Every 30 minutes
      log_file: './automation/logs/performance-monitor.log',
      error_file: './automation/logs/performance-monitor-error.log',
      out_file: './automation/logs/performance-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Code Quality Analyzer - Analyzes code quality (MEDIUM PRIORITY)
    {
      name: 'code-quality-analyzer',
      script: './scripts/automation/code-quality-analyzer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000' // 1 hour
      },
      cron_restart: '0 */1 * * *', // Every hour
      log_file: './automation/logs/code-quality.log',
      error_file: './automation/logs/code-quality-error.log',
      out_file: './automation/logs/code-quality-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Security Vulnerability Scanner - Scans for security issues (MEDIUM PRIORITY)
    {
      name: 'security-vulnerability-scanner',
      script: './scripts/automation/security-vulnerability-scanner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './automation/logs/security-scanner.log',
      error_file: './automation/logs/security-scanner-error.log',
      out_file: './automation/logs/security-scanner-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Link Health Checker - Monitors link health (LOW PRIORITY)
    {
      name: 'link-health-checker',
      script: './scripts/automation/link-health-checker.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './automation/logs/link-health.log',
      error_file: './automation/logs/link-health-error.log',
      out_file: './automation/logs/link-health-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Automated Testing Runner - Runs automated tests (LOW PRIORITY)
    {
      name: 'automated-testing-runner',
      script: './scripts/automation/automated-testing-runner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '14400000' // 4 hours
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './automation/logs/automated-testing.log',
      error_file: './automation/logs/automated-testing-error.log',
      out_file: './automation/logs/automated-testing-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Backup and Recovery Manager - Manages backups (LOW PRIORITY)
    {
      name: 'backup-recovery-manager',
      script: './scripts/automation/backup-recovery-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '28800000' // 8 hours
      },
      cron_restart: '0 */8 * * *', // Every 8 hours
      log_file: './automation/logs/backup-recovery.log',
      error_file: './automation/logs/backup-recovery-error.log',
      out_file: './automation/logs/backup-recovery-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // System Health Reporter - Reports overall system health (LOW PRIORITY)
    {
      name: 'system-health-reporter',
      script: './scripts/automation/system-health-reporter.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000' // 1 hour
      },
      cron_restart: '0 */1 * * *', // Every hour
      log_file: './automation/logs/system-health.log',
      error_file: './automation/logs/system-health-error.log',
      out_file: './automation/logs/system-health-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    }
  ]
};
