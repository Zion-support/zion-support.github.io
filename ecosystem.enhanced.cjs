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
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AI_ANALYSIS_MODE: 'true',
      },
      cron_restart: '0 */3 * * *', // Restart every 3 hours
      log_file: './logs/ai-code-analyzer.log',
      error_file: './logs/ai-code-analyzer-error.log',
      out_file: './logs/ai-code-analyzer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Performance Optimizer
    {
      name: 'performance-optimizer',
      script: './scripts/automation/smart-performance-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PERFORMANCE_OPTIMIZATION_MODE: 'true',
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      log_file: './logs/performance-optimizer.log',
      error_file: './logs/performance-optimizer-error.log',
      out_file: './logs/performance-optimizer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Security Monitor
    {
      name: 'security-monitor',
      script: './scripts/automation/enhanced-security-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        SECURITY_MONITORING_MODE: 'true',
      },
      cron_restart: '0 6,18 * * *', // Restart at 6 AM and 6 PM
      log_file: './logs/security-monitor.log',
      error_file: './logs/security-monitor-error.log',
      out_file: './logs/security-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },
  ],
};
