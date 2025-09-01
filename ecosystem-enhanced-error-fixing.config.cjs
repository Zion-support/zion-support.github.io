module.exports = {
  apps: [
    // 🚨 Enhanced Comprehensive Error Fixer - Advanced error fixing automation
    {
      name: 'enhanced-comprehensive-error-fixer',
      script: './scripts/automation/enhanced-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: './.pm2',
        ERROR_FIXING_MODE: 'comprehensive',
        AUTO_FIX_ENABLED: 'true',
        REPORTING_ENABLED: 'true'
      },
      cron_restart: '*/10 * * * *', // Every 10 minutes
      log_file: './logs/enhanced-comprehensive-error-fixer.log',
      error_file: './logs/enhanced-comprehensive-error-fixer-error.log',
      out_file: './logs/enhanced-comprehensive-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🔧 Advanced TypeScript Error Fixer - Intelligent TypeScript error resolution
    {
      name: 'advanced-typescript-error-fixer',
      script: './scripts/automation/typescript-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: './.pm2',
        TYPESCRIPT_FIXING_MODE: 'advanced',
        AUTO_FIX_ENABLED: 'true'
      },
      cron_restart: '*/5 * * * *', // Every 5 minutes
      log_file: './logs/advanced-typescript-error-fixer.log',
      error_file: './logs/advanced-typescript-error-fixer-error.log',
      out_file: './logs/advanced-typescript-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🧹 Intelligent ESLint Error Cleaner - Smart ESLint error resolution
    {
      name: 'intelligent-eslint-error-cleaner',
      script: './scripts/automation/eslint-error-cleaner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: './.pm2',
        ESLINT_FIXING_MODE: 'intelligent',
        AUTO_FIX_ENABLED: 'true'
      },
      cron_restart: '*/15 * * * *', // Every 15 minutes
      log_file: './logs/intelligent-eslint-error-cleaner.log',
      error_file: './logs/intelligent-eslint-error-cleaner-error.log',
      out_file: './logs/intelligent-eslint-error-cleaner-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🔍 Smart Build Error Detector - Advanced build failure prevention
    {
      name: 'smart-build-error-detector',
      script: './scripts/automation/build-error-detector.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: './.pm2',
        BUILD_MONITORING_MODE: 'smart',
        AUTO_FIX_ENABLED: 'true'
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './logs/smart-build-error-detector.log',
      error_file: './logs/smart-build-error-detector-error.log',
      out_file: './logs/smart-build-error-detector-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🚨 Intelligent Dependency Error Resolver - Smart dependency conflict resolution
    {
      name: 'intelligent-dependency-error-resolver',
      script: './scripts/automation/dependency-error-resolver.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: './.pm2',
        DEPENDENCY_RESOLUTION_MODE: 'intelligent',
        AUTO_FIX_ENABLED: 'true'
      },
      cron_restart: '0 6,18 * * *', // Twice daily at 6 AM and 6 PM
      log_file: './logs/intelligent-dependency-error-resolver.log',
      error_file: './logs/intelligent-dependency-error-resolver-error.log',
      out_file: './logs/intelligent-dependency-error-resolver-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🔧 Advanced Config Error Fixer - Configuration file error resolution
    {
      name: 'advanced-config-error-fixer',
      script: './scripts/automation/config-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: './.pm2',
        CONFIG_FIXING_MODE: 'advanced',
        AUTO_FIX_ENABLED: 'true'
      },
      cron_restart: '0 12 * * *', // Daily at 12 PM
      log_file: './logs/advanced-config-error-fixer.log',
      error_file: './logs/advanced-config-error-fixer-error.log',
      out_file: './logs/advanced-config-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🛡️ Enhanced Error Prevention Monitor - Proactive error prevention
    {
      name: 'enhanced-error-prevention-monitor',
      script: './scripts/automation/error-prevention-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: './.pm2',
        PREVENTION_MODE: 'enhanced',
        AUTO_FIX_ENABLED: 'true'
      },
      cron_restart: '*/30 * * * *', // Every 30 minutes
      log_file: './logs/enhanced-error-prevention-monitor.log',
      error_file: './logs/enhanced-error-prevention-monitor-error.log',
      out_file: './logs/enhanced-error-prevention-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 📊 Advanced Error Analytics Dashboard - Comprehensive error analytics
    {
      name: 'advanced-error-analytics-dashboard',
      script: './scripts/automation/error-analytics-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: './.pm2',
        ANALYTICS_MODE: 'advanced',
        REPORTING_ENABLED: 'true'
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './logs/advanced-error-analytics-dashboard.log',
      error_file: './logs/advanced-error-analytics-dashboard-error.log',
      out_file: './logs/advanced-error-analytics-dashboard-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🔄 Intelligent Auto Recovery Manager - Smart system recovery
    {
      name: 'intelligent-auto-recovery-manager',
      script: './scripts/automation/auto-recovery-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: './.pm2',
        RECOVERY_MODE: 'intelligent',
        AUTO_RECOVERY_ENABLED: 'true'
      },
      cron_restart: '0 0 * * *', // Daily at midnight
      log_file: './logs/intelligent-auto-recovery-manager.log',
      error_file: './logs/intelligent-auto-recovery-manager-error.log',
      out_file: './logs/intelligent-auto-recovery-manager-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🚨 Critical Error Alert System - Real-time critical error notifications
    {
      name: 'critical-error-alert-system',
      script: './scripts/automation/critical-error-alert-system.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: './.pm2',
        ALERT_MODE: 'critical',
        NOTIFICATIONS_ENABLED: 'true'
      },
      cron_restart: '*/1 * * * *', // Every minute
      log_file: './logs/critical-error-alert-system.log',
      error_file: './logs/critical-error-alert-system-error.log',
      out_file: './logs/critical-error-alert-system-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🔧 JSX Error Fixer - Specialized JSX syntax error resolution
    {
      name: 'jsx-error-fixer',
      script: './scripts/automation/jsx-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: './.pm2',
        JSX_FIXING_MODE: 'comprehensive',
        AUTO_FIX_ENABLED: 'true'
      },
      cron_restart: '*/8 * * * *', // Every 8 minutes
      log_file: './logs/jsx-error-fixer.log',
      error_file: './logs/jsx-error-fixer-error.log',
      out_file: './logs/jsx-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🧠 AI-Powered Code Quality Enhancer - AI-driven code improvements
    {
      name: 'ai-code-quality-enhancer',
      script: './scripts/automation/ai-code-quality-enhancer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: './.pm2',
        AI_ENHANCEMENT_MODE: 'quality',
        AUTO_ENHANCEMENT_ENABLED: 'true'
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: './logs/ai-code-quality-enhancer.log',
      error_file: './logs/ai-code-quality-enhancer-error.log',
      out_file: './logs/ai-code-quality-enhancer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🔍 Predictive Issue Detection - Proactive issue identification
    {
      name: 'predictive-issue-detection',
      script: './scripts/automation/predictive-issue-detection.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: './.pm2',
        PREDICTIVE_MODE: 'advanced',
        DETECTION_ENABLED: 'true'
      },
      cron_restart: '0 */3 * * *', // Every 3 hours
      log_file: './logs/predictive-issue-detection.log',
      error_file: './logs/predictive-issue-detection-error.log',
      out_file: './logs/predictive-issue-detection-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🎯 Targeted Error Resolution - Focused error fixing
    {
      name: 'targeted-error-resolution',
      script: './scripts/automation/targeted-error-resolution.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: './.pm2',
        TARGETED_MODE: 'focused',
        AUTO_RESOLUTION_ENABLED: 'true'
      },
      cron_restart: '*/12 * * * *', // Every 12 minutes
      log_file: './logs/targeted-error-resolution.log',
      error_file: './logs/targeted-error-resolution-error.log',
      out_file: './logs/targeted-error-resolution-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    }
  ]
};