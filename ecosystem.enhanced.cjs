module.exports = {
  apps: [
    // Main application
    {
      name: 'zion-website-enhanced',
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
      log_file: './logs/zion-website-enhanced.log',
      error_file: './logs/zion-website-enhanced-error.log',
      out_file: './logs/zion-website-enhanced-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Enhanced Error Monitor
    {
      name: 'enhanced-error-monitor',
      script: './scripts/automation/error-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        ENHANCED_MODE: 'true',
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: './logs/enhanced-error-monitor.log',
      error_file: './logs/enhanced-error-monitor-error.log',
      out_file: './logs/enhanced-error-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Enhanced Syntax Fixer
    {
      name: 'enhanced-syntax-fixer',
      script: './scripts/automation/syntax-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        ENHANCED_MODE: 'true',
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      log_file: './logs/enhanced-syntax-fixer.log',
      error_file: './logs/enhanced-syntax-fixer-error.log',
      out_file: './logs/enhanced-syntax-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Enhanced Dependency Manager
    {
      name: 'enhanced-dependency-manager',
      script: './scripts/automation/dependency-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        ENHANCED_MODE: 'true',
      },
      cron_restart: '0 8 * * *', // Restart daily at 8 AM
      log_file: './logs/enhanced-dependency-manager.log',
      error_file: './logs/enhanced-dependency-manager-error.log',
      out_file: './logs/enhanced-dependency-manager-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Enhanced Build Monitor
    {
      name: 'enhanced-build-monitor',
      script: './scripts/automation/build-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        ENHANCED_MODE: 'true',
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      log_file: './logs/enhanced-build-monitor.log',
      error_file: './logs/enhanced-build-monitor-error.log',
      out_file: './logs/enhanced-build-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // AI Code Analyzer
    {
      name: 'ai-code-analyzer',
      script: './scripts/automation/ai-code-analyzer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AI_ANALYSIS_MODE: 'true',
        AUTO_FIX_ENABLED: 'true',
        ANALYSIS_INTERVAL: '300000', // 5 minutes
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: './logs/ai-code-analyzer.log',
      error_file: './logs/ai-code-analyzer-error.log',
      out_file: './logs/ai-code-analyzer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Smart Performance Optimizer
    {
      name: 'smart-performance-optimizer',
      script: './scripts/automation/smart-performance-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PERFORMANCE_OPTIMIZATION_MODE: 'true',
        BUNDLE_ANALYSIS_ENABLED: 'true',
        OPTIMIZATION_INTERVAL: '600000', // 10 minutes
      },
      cron_restart: '0 */3 * * *', // Restart every 3 hours
      log_file: './logs/smart-performance-optimizer.log',
      error_file: './logs/smart-performance-optimizer-error.log',
      out_file: './logs/smart-performance-optimizer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Intelligent Dependency Manager - Dependency analysis and management
    {
      name: 'intelligent-dependency-manager',
      script: './scripts/automation/intelligent-dependency-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        DEPENDENCY_MANAGEMENT_MODE: 'true',
        AUTO_UPDATE_ENABLED: 'true',
        SECURITY_SCAN_INTERVAL: '3600000', // 1 hour
      },
      cron_restart: '0 6,18 * * *', // Restart at 6 AM and 6 PM
      log_file: './logs/intelligent-dependency-manager.log',
      error_file: './logs/intelligent-dependency-manager-error.log',
      out_file: './logs/intelligent-dependency-manager-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Smart Deployment Automation - Intelligent deployment management
    {
      name: 'smart-deployment-automation',
      script: './scripts/automation/smart-deployment-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        DEPLOYMENT_AUTOMATION_MODE: 'true',
        AUTO_DEPLOY_ENABLED: 'true',
        ROLLBACK_ENABLED: 'true',
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      log_file: './logs/smart-deployment-automation.log',
      error_file: './logs/smart-deployment-automation-error.log',
      out_file: './logs/smart-deployment-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // NEW: Intelligent Repository Manager - Git operations and branch management
    {
      name: 'intelligent-repository-manager',
      script: './scripts/automation/intelligent-repository-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        REPOSITORY_MANAGEMENT_MODE: 'true',
        AUTO_PR_CREATION: 'true',
        AUTO_MERGE_ENABLED: 'true',
        BRANCH_CLEANUP_ENABLED: 'true',
      },
      cron_restart: '0 */3 * * *', // Restart every 3 hours
      log_file: './logs/intelligent-repository-manager.log',
      error_file: './logs/intelligent-repository-manager-error.log',
      out_file: './logs/intelligent-repository-manager-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // NEW: Advanced Development Workflow - Feature development automation
    {
      name: 'advanced-development-workflow',
      script: './scripts/automation/advanced-development-workflow.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        DEVELOPMENT_WORKFLOW_MODE: 'true',
        AUTO_FEATURE_DEVELOPMENT: 'true',
        QUALITY_GATES_ENABLED: 'true',
        PERFORMANCE_MONITORING: 'true',
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: './logs/advanced-development-workflow.log',
      error_file: './logs/advanced-development-workflow-error.log',
      out_file: './logs/advanced-development-workflow-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // NEW: Intelligent CI/CD Pipeline Orchestrator - Pipeline coordination
    {
      name: 'intelligent-cicd-orchestrator',
      script: './scripts/automation/intelligent-cicd-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        CICD_ORCHESTRATION_MODE: 'true',
        INTELLIGENT_BUILD_ENABLED: 'true',
        SMART_TESTING_ENABLED: 'true',
        DEPLOYMENT_STRATEGY_AUTO: 'true',
      },
      cron_restart: '0 */1 * * *', // Restart every hour
      log_file: './logs/intelligent-cicd-orchestrator.log',
      error_file: './logs/intelligent-cicd-orchestrator-error.log',
      out_file: './logs/intelligent-cicd-orchestrator-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Enhanced CI/CD Automation - CI/CD pipeline management    {
      name: 'enhanced-ci-cd-automation',
      script: './scripts/automation/enhanced-ci-cd-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        CI_CD_AUTOMATION_MODE: 'true',
        PIPELINE_ORCHESTRATION: 'true',
        ENVIRONMENT_MANAGEMENT: 'true',
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours      log_file: './logs/enhanced-ci-cd-automation.log',
      error_file: './logs/enhanced-ci-cd-automation-error.log',
      out_file: './logs/enhanced-ci-cd-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Enhanced Testing Automation - Comprehensive testing strategies
    {
      name: 'enhanced-testing-automation',
      script: './scripts/automation/enhanced-testing-automation.cjs',      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        TESTING_AUTOMATION_MODE: 'true',
        PARALLEL_TESTING: 'true',
        COVERAGE_ANALYSIS: 'true',
        PERFORMANCE_TESTING: 'true',
      },
      cron_restart: '0 */3 * * *', // Restart every 3 hours
      log_file: './logs/enhanced-testing-automation.log',
      error_file: './logs/enhanced-testing-automation-error.log',
      out_file: './logs/enhanced-testing-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Enhanced Security Automation - Security scanning and monitoring
    {
      name: 'enhanced-security-automation',
      script: './scripts/automation/enhanced-security-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        SECURITY_AUTOMATION_MODE: 'true',
        VULNERABILITY_SCANNING: 'true',
        DEPENDENCY_AUDITING: 'true',
        SECURITY_MONITORING: 'true',
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: './logs/enhanced-security-automation.log',
      error_file: './logs/enhanced-security-automation-error.log',
      out_file: './logs/enhanced-security-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Project Health Monitor - Overall project health monitoring
    {
      name: 'project-health-monitor',
      script: './scripts/automation/project-health-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        HEALTH_MONITORING_MODE: 'true',
        METRICS_COLLECTION: 'true',
        ALERTING_ENABLED: 'true',
        REPORTING_INTERVAL: '900000', // 15 minutes
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: './logs/project-health-monitor.log',
      error_file: './logs/project-health-monitor-error.log',
      out_file: './logs/project-health-monitor-out.log',      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // PM2 Sync Automation - PM2 process synchronization    {
      name: 'advanced-development-intelligence',
      script: './scripts/automation/advanced-development-intelligence.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_SYNC_MODE: 'true',
        PROCESS_MONITORING: 'true',
        AUTO_RECOVERY: 'true',
        CLUSTER_MANAGEMENT: 'true',
      },
      cron_restart: '0 */1 * * *', // Restart every hour
      log_file: './logs/pm2-sync-automation.log',
      error_file: './logs/pm2-sync-automation-error.log',
      out_file: './logs/pm2-sync-automation-out.log',      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Link Checker Automation - Link validation and monitoring
    {
      name: 'link-checker-automation',
      script: './scripts/automation/link-checker-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        LINK_CHECKING_MODE: 'true',
        BROKEN_LINK_DETECTION: 'true',
        AUTO_FIX_ENABLED: 'true',
        SCAN_INTERVAL: '1800000', // 30 minutes
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      log_file: './logs/link-checker-automation.log',
      error_file: './logs/link-checker-automation-error.log',
      out_file: './logs/link-checker-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // TypeScript Syntax Fixer - TypeScript error fixing
    {
      name: 'typescript-syntax-fixer',
      script: './scripts/automation/typescript-syntax-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        TYPESCRIPT_FIXING_MODE: 'true',
        AUTO_FIX_ENABLED: 'true',
        ERROR_ANALYSIS: 'true',
        SYNTAX_VALIDATION: 'true',
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: './logs/typescript-syntax-fixer.log',
      error_file: './logs/typescript-syntax-fixer-error.log',
      out_file: './logs/typescript-syntax-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Console Error Fixer - Console error detection and fixing
    {
      name: 'console-error-fixer',
      script: './scripts/automation/console-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        CONSOLE_ERROR_FIXING_MODE: 'true',
        ERROR_DETECTION: 'true',
        AUTO_FIX_ENABLED: 'true',
        LOGGING_OPTIMIZATION: 'true',
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: './logs/console-error-fixer.log',
      error_file: './logs/console-error-fixer-error.log',
      out_file: './logs/console-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Quality Checks - Code quality validation
    {
      name: 'quality-checks',
      script: './scripts/automation/quality-checks.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        QUALITY_CHECK_MODE: 'true',
        CODE_STANDARDS: 'true',
        BEST_PRACTICES: 'true',
        QUALITY_METRICS: 'true',
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      log_file: './logs/quality-checks.log',
      error_file: './logs/quality-checks-error.log',
      out_file: './logs/quality-checks-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Security Audit - Security vulnerability scanning
    {
      name: 'security-audit',
      script: './scripts/automation/security-audit.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        SECURITY_AUDIT_MODE: 'true',
        VULNERABILITY_SCANNING: 'true',
        DEPENDENCY_AUDITING: 'true',
        SECURITY_REPORTING: 'true',
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      log_file: './logs/security-audit.log',
      error_file: './logs/security-audit-error.log',
      out_file: './logs/security-audit-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Continuous Improvement - Continuous improvement automation
    {
      name: 'continuous-improvement',
      script: './scripts/automation/continuous-improvement.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        CONTINUOUS_IMPROVEMENT_MODE: 'true',
        OPTIMIZATION_ANALYSIS: 'true',
        PERFORMANCE_IMPROVEMENT: 'true',
        CODE_REFACTORING: 'true',
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      log_file: './logs/continuous-improvement.log',
      error_file: './logs/continuous-improvement-error.log',
      out_file: './logs/continuous-improvement-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Daily Build Test - Daily build and test automation
    {
      name: 'daily-build-test',
      script: './scripts/automation/daily-build-test.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        DAILY_BUILD_TEST_MODE: 'true',
        BUILD_VALIDATION: 'true',
        TEST_EXECUTION: 'true',
        REPORTING: 'true',
      },
      cron_restart: '0 2 * * *', // Restart daily at 2 AM
      log_file: './logs/daily-build-test.log',
      error_file: './logs/daily-build-test-error.log',
      out_file: './logs/daily-build-test-out.log',      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },
  ],

  // PM2 Configuration
  deploy: {
    production: {
      user: 'node',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:Zion-Holdings/zion.app.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.enhanced.cjs --env production',
    },
    staging: {
      user: 'node',
      host: 'localhost',
      ref: 'origin/develop',
      repo: 'git@github.com:Zion-Holdings/zion.app.git',
      path: '/var/www/staging',
      'post-deploy': 'npm install && pm2 reload ecosystem.enhanced.cjs --env staging',    },
  },

  // PM2 Settings
  pm2: {
    max_memory_restart: '2G',
    node_args: '--max-old-space-size=2048',
    instances: 'max',
    exec_mode: 'cluster',
    watch: false,
    ignore_watch: ['node_modules', 'logs', '*.log'],
    merge_logs: true,
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    error_file: './logs/pm2-error.log',
    out_file: './logs/pm2-out.log',
    log_file: './logs/pm2-combined.log',
  },
};
