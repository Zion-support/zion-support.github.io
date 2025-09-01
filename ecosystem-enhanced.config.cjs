module.exports = {
  apps: [
    // Main application
    {
      name: 'bolt-app',
      script: 'npm',
      args: 'start',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },

    // MASTER ERROR FIXING AUTOMATIONS (HIGHEST PRIORITY)
    {
      name: 'master-error-fixer',
      script: './scripts/automation/master-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AI_ANALYSIS_MODE: 'true',
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: './logs/ai-code-analyzer.log',
      error_file: './logs/ai-code-analyzer-error.log',
      out_file: './logs/ai-code-analyzer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // TypeScript error fixer - runs every 15 minutes (HIGH PRIORITY)
    {
      name: 'typescript-error-fixer',
      script: './scripts/automation/typescript-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PERFORMANCE_OPTIMIZATION_MODE: 'true',
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      log_file: './logs/smart-performance-optimizer.log',
      error_file: './logs/smart-performance-optimizer-error.log',
      out_file: './logs/smart-performance-optimizer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // ESLint error fixer - runs every 20 minutes (HIGH PRIORITY)
    {
      name: 'eslint-error-fixer',
      script: './scripts/automation/eslint-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        DEPENDENCY_MANAGEMENT_MODE: 'true',
      },
      cron_restart: '0 6,18 * * *', // Restart at 6 AM and 6 PM
      log_file: './logs/intelligent-dependency-manager.log',
      error_file: './logs/intelligent-dependency-manager-error.log',
      out_file: './logs/intelligent-dependency-manager-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Console error fixer - runs every 10 minutes (HIGHEST PRIORITY)
    {
      name: 'console-error-fixer',
      script: './scripts/automation/console-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        DEPLOYMENT_AUTOMATION_MODE: 'true',
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      log_file: './logs/smart-deployment-automation.log',
      error_file: './logs/smart-deployment-automation-error.log',
      out_file: './logs/smart-deployment-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Comprehensive error fixer - runs every 45 minutes (HIGH PRIORITY)
    {
      name: 'comprehensive-error-fixer',
      script: './scripts/automation/comprehensive-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        CI_CD_MODE: 'true',
      },
      cron_restart: '0 */3 * * *', // Restart every 3 hours
      log_file: './logs/enhanced-ci-cd-automation.log',
      error_file: './logs/enhanced-ci-cd-automation-error.log',
      out_file: './logs/enhanced-ci-cd-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // JSX error fixer - runs every 25 minutes (HIGH PRIORITY)
    {
      name: 'jsx-error-fixer',
      script: './scripts/automation/jsx-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        SECURITY_MODE: 'true',
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: './logs/enhanced-security-automation.log',
      error_file: './logs/enhanced-security-automation-error.log',
      out_file: './logs/enhanced-security-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // ERROR PREVENTION AND MONITORING
    {
      name: 'error-prevention-monitor',
      script: './scripts/automation/error-prevention-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        TESTING_MODE: 'true',
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      log_file: './logs/enhanced-testing-automation.log',
      error_file: './logs/enhanced-testing-automation-error.log',
      out_file: './logs/enhanced-testing-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    {
      name: 'typescript-error-monitor',
      script: './scripts/automation/typescript-error-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        HEALTH_MONITORING_MODE: 'true',
      },
      cron_restart: '0 */1 * * *', // Restart every hour
      log_file: './logs/project-health-monitor.log',
      error_file: './logs/project-health-monitor-error.log',
      out_file: './logs/project-health-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // BUILD AND TEST AUTOMATIONS
    {
      name: 'daily-build-test',
      script: './scripts/automation/daily-build-test.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        SYNC_MODE: 'true',
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: './logs/pm2-sync-automation.log',
      error_file: './logs/pm2-sync-automation-error.log',
      out_file: './logs/pm2-sync-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    {
      name: 'build-error-detector',
      script: './scripts/automation/build-error-detector.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        MONITORING_MODE: 'true',
      },
      cron_restart: '0 */1 * * *', // Restart every hour
      log_file: './logs/pm2-sync-monitor.log',
      error_file: './logs/pm2-sync-monitor-error.log',
      out_file: './logs/pm2-sync-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // DEPENDENCY AND SECURITY AUTOMATIONS
    {
      name: 'dependency-updates',
      script: './scripts/automation/dependency-updates.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        LINK_CHECKING_MODE: 'true',
      },
      cron_restart: '0 8,20 * * *', // Restart at 8 AM and 8 PM
      log_file: './logs/link-checker-automation.log',
      error_file: './logs/link-checker-automation-error.log',
      out_file: './logs/link-checker-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    {
      name: 'security-audit',
      script: './scripts/automation/security-audit.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        SYNTAX_FIXING_MODE: 'true',
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      log_file: './logs/typescript-syntax-fixer.log',
      error_file: './logs/typescript-syntax-fixer-error.log',
      out_file: './logs/typescript-syntax-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    {
      name: 'smart-dependency-intelligence',
      script: './scripts/automation/smart-dependency-intelligence.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        ERROR_FIXING_MODE: 'true',
      },
      cron_restart: '0 */3 * * *', // Restart every 3 hours
      log_file: './logs/console-error-fixer.log',
      error_file: './logs/console-error-fixer-error.log',
      out_file: './logs/console-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // QUALITY AND PERFORMANCE AUTOMATIONS
    {
      name: 'quality-checks',
      script: './scripts/automation/quality-checks.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        DEPENDENCY_MANAGEMENT_MODE: 'true',
      },
      cron_restart: '0 7,19 * * *', // Restart at 7 AM and 7 PM
      log_file: './logs/dependency-manager.log',
      error_file: './logs/dependency-manager-error.log',
      out_file: './logs/dependency-manager-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    {
      name: 'performance-monitor',
      script: './scripts/automation/performance-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PERFORMANCE_MONITORING_MODE: 'true',
      },
      cron_restart: '0 */1 * * *', // Restart every hour
      log_file: './logs/performance-monitor.log',
      error_file: './logs/performance-monitor-error.log',
      out_file: './logs/performance-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    {
      name: 'continuous-improvement',
      script: './scripts/automation/continuous-improvement.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        FRONTEND_OPTIMIZATION_MODE: 'true',
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      log_file: './logs/front-maximizer.log',
      error_file: './logs/front-maximizer-error.log',
      out_file: './logs/front-maximizer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // INTELLIGENT AUTOMATION SYSTEMS
    {
      name: 'ai-code-review-automation',
      script: './scripts/automation/ai-code-review-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './automation/logs/ai-code-review-automation.log',
      error_file: './automation/logs/ai-code-review-automation-error.log',
      out_file: './automation/logs/ai-code-review-automation-out.log',
    },

    {
      name: 'predictive-issue-detection',
      script: './scripts/automation/predictive-issue-detection.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
      cron_restart: '0 */3 * * *', // Every 3 hours
      log_file: './automation/logs/predictive-issue-detection.log',
      error_file: './automation/logs/predictive-issue-detection-error.log',
      out_file: './automation/logs/predictive-issue-detection-out.log',
    },

    {
      name: 'intelligent-build-pipeline',
      script: './scripts/automation/intelligent-build-pipeline.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
      cron_restart: '0 */8 * * *', // Every 8 hours
      log_file: './automation/logs/intelligent-build-pipeline.log',
      error_file: './automation/logs/intelligent-build-pipeline-error.log',
      out_file: './automation/logs/intelligent-build-pipeline-out.log',
    },

    // MONITORING AND DASHBOARDS
    {
      name: 'error-analytics-dashboard',
      script: './scripts/automation/error-analytics-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        SITEMAP_MODE: 'true',
      },
      cron_restart: '0 5,17 * * *', // Restart at 5 AM and 5 PM
      log_file: './logs/sitemap-runner.log',
      error_file: './logs/sitemap-runner-error.log',
      out_file: './logs/sitemap-runner-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    {
      name: 'project-health-dashboard',
      script: './scripts/automation/project-health-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        QUALITY_CHECK_MODE: 'true',
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: './logs/quality-checks.log',
      error_file: './logs/quality-checks-error.log',
      out_file: './logs/quality-checks-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    {
      name: 'unified-automation-dashboard',
      script: './scripts/automation/unified-automation-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000', // 5 minutes
      },
      cron_restart: '*/5 * * * *', // Every 5 minutes
      log_file: './automation/logs/unified-automation-dashboard.log',
      error_file: './automation/logs/unified-automation-dashboard-error.log',
      out_file: './automation/logs/unified-automation-dashboard-out.log',
    },

    // RECOVERY AND MAINTENANCE
    {
      name: 'auto-recovery-manager',
      script: './scripts/automation/auto-recovery-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        SECURITY_AUDIT_MODE: 'true',
      },
      cron_restart: '0 3,15 * * *', // Restart at 3 AM and 3 PM
      log_file: './logs/security-audit.log',
      error_file: './logs/security-audit-error.log',
      out_file: './logs/security-audit-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    {
      name: 'critical-error-alert-system',
      script: './scripts/automation/critical-error-alert-system.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        CONTINUOUS_IMPROVEMENT_MODE: 'true',
      },
      cron_restart: '0 */8 * * *', // Restart every 8 hours
      log_file: './logs/continuous-improvement.log',
      error_file: './logs/continuous-improvement-error.log',
      out_file: './logs/continuous-improvement-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // UTILITY AUTOMATIONS
    {
      name: 'link-checker',
      script: './scripts/automation/link-checker.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        BUILD_TEST_MODE: 'true',
      },
      cron_restart: '0 2 * * *', // Restart daily at 2 AM
      log_file: './logs/daily-build-test.log',
      error_file: './logs/daily-build-test-error.log',
      out_file: './logs/daily-build-test-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },
  ],

  deploy: {
    production: {
      user: 'root',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/Users/miami2/zion-app-clone',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && npm run build && pm2 reload ecosystem.enhanced.cjs --env production',
      'pre-setup': '',
    },
    staging: {
      user: 'miami2',
      host: 'localhost',
      ref: 'origin/staging',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/Users/miami2/zion-app-staging',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && npm run build && pm2 reload ecosystem.enhanced.cjs --env staging',
      'pre-setup': '',
    },
    development: {
      user: 'miami2',
      host: 'localhost',
      ref: 'origin/develop',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/Users/miami2/zion-app-dev',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && npm run build && pm2 reload ecosystem.enhanced.cjs --env development',
      'pre-setup': '',
    },
  },
};
