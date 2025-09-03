module.exports = {
  apps: [
    // AI-Powered Code Analyzer
    {
      name: 'ai-code-analyzer',
      script: './scripts/automation/ai-code-analyzer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AI_ANALYSIS_MODE: 'true'
      },
      log_file: './logs/ai-code-analyzer.log',
      error_file: './logs/ai-code-analyzer-error.log',
      out_file: './logs/ai-code-analyzer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
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
        PERFORMANCE_OPTIMIZATION_MODE: 'true'
      },
      log_file: './logs/smart-performance-optimizer.log',
      error_file: './logs/smart-performance-optimizer-error.log',
      out_file: './logs/smart-performance-optimizer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Intelligent Dependency Manager
    {
      name: 'intelligent-dependency-manager',
      script: './scripts/automation/intelligent-dependency-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        DEPENDENCY_MANAGEMENT_MODE: 'true'
      },
      log_file: './logs/intelligent-dependency-manager.log',
      error_file: './logs/intelligent-dependency-manager-error.log',
      out_file: './logs/intelligent-dependency-manager-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Project Health Monitor
    {
      name: 'project-health-monitor',
      script: './scripts/automation/project-health-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        HEALTH_MONITORING_MODE: 'true'
      },
      log_file: './logs/project-health-monitor.log',
      error_file: './logs/project-health-monitor-error.log',
      out_file: './logs/project-health-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Enhanced Security Automation
    {
      name: 'enhanced-security-automation',
      script: './scripts/automation/enhanced-security-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        SECURITY_MODE: 'true'
      },
      log_file: './logs/enhanced-security-automation.log',
      error_file: './logs/enhanced-security-automation-error.log',
      out_file: './logs/enhanced-security-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Enhanced Testing Automation
    {
      name: 'enhanced-testing-automation',
      script: './scripts/automation/enhanced-testing-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        TESTING_MODE: 'true'
      },
      log_file: './logs/enhanced-testing-automation.log',
      error_file: './logs/enhanced-testing-automation-error.log',
      out_file: './logs/enhanced-testing-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // PM2 Sync Automation
    {
      name: 'pm2-sync-automation',
      script: './scripts/automation/pm2-sync-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        SYNC_MODE: 'true'
      },
      log_file: './logs/pm2-sync-automation.log',
      error_file: './logs/pm2-sync-automation-error.log',
      out_file: './logs/pm2-sync-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Link Checker Automation
    {
      name: 'link-checker-automation',
      script: './scripts/automation/link-checker-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        LINK_CHECKING_MODE: 'true'
      },
      log_file: './logs/link-checker-automation.log',
      error_file: './logs/link-checker-automation-error.log',
      out_file: './logs/link-checker-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // TypeScript Syntax Fixer
    {
      name: 'typescript-syntax-fixer',
      script: './scripts/automation/typescript-syntax-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        SYNTAX_FIXING_MODE: 'true'
      },
      log_file: './logs/typescript-syntax-fixer.log',
      error_file: './logs/typescript-syntax-fixer-error.log',
      out_file: './logs/typescript-syntax-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Console Error Fixer
    {
      name: 'console-error-fixer',
      script: './scripts/automation/console-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        ERROR_FIXING_MODE: 'true'
      },
      log_file: './logs/console-error-fixer.log',
      error_file: './logs/console-error-fixer-error.log',
      out_file: './logs/console-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    }
  ]
};