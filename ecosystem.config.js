module.exports = {
  apps: [
    // Enhanced Lint Fixer with AI-powered suggestions
    {
      name: 'intelligent-lint-fixer',
      script: 'scripts/pm2/intelligent-lint-fixer.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'intelligent-lint-fixer',
        AI_ENABLED: 'true',
        LEARNING_MODE: 'true'
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      log_file: 'logs/pm2/intelligent-lint-fixer.log',
      error_file: 'logs/pm2/intelligent-lint-fixer-error.log',
      out_file: 'logs/pm2/intelligent-lint-fixer-out.log'
    },
    
    // Advanced Code Quality Monitor with ML insights
    {
      name: 'ai-code-quality-monitor',
      script: 'scripts/pm2/ai-code-quality-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'ai-code-quality-monitor',
        AI_ANALYSIS: 'true',
        PATTERN_LEARNING: 'true'
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      log_file: 'logs/pm2/ai-code-quality-monitor.log',
      error_file: 'logs/pm2/ai-code-quality-monitor-error.log',
      out_file: 'logs/pm2/ai-code-quality-monitor-out.log'
    },
    
    // Smart Auto Commit with intelligent commit messages
    {
      name: 'smart-auto-commit',
      script: 'scripts/pm2/smart-auto-commit.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'smart-auto-commit',
        AI_COMMIT_MESSAGES: 'true',
        COMMIT_ANALYSIS: 'true'
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: 'logs/pm2/smart-auto-commit.log',
      error_file: 'logs/pm2/smart-auto-commit-error.log',
      out_file: 'logs/pm2/smart-auto-commit-out.log'
    },
    
    // Intelligent Dependency Monitor with security scanning
    {
      name: 'intelligent-dependency-monitor',
      script: 'scripts/pm2/intelligent-dependency-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'intelligent-dependency-monitor',
        SECURITY_SCANNING: 'true',
        VULNERABILITY_DETECTION: 'true',
        AUTO_UPDATE_SAFE: 'true'
      },
      cron_restart: '0 0 * * *', // Restart daily at midnight
      log_file: 'logs/pm2/intelligent-dependency-monitor.log',
      error_file: 'logs/pm2/intelligent-dependency-monitor-error.log',
      out_file: 'logs/pm2/intelligent-dependency-monitor-out.log'
    },
    
    // Advanced Performance Monitor with predictive analysis
    {
      name: 'predictive-performance-monitor',
      script: 'scripts/pm2/predictive-performance-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'predictive-performance-monitor',
        PREDICTIVE_ANALYSIS: 'true',
        PERFORMANCE_TRENDING: 'true',
        ALERT_SYSTEM: 'true'
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      log_file: 'logs/pm2/predictive-performance-monitor.log',
      error_file: 'logs/pm2/predictive-performance-monitor-error.log',
      out_file: 'logs/pm2/predictive-performance-monitor-out.log'
    },
    
    // NEW: Intelligent Test Runner with coverage optimization
    {
      name: 'intelligent-test-runner',
      script: 'scripts/pm2/intelligent-test-runner.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'intelligent-test-runner',
        COVERAGE_OPTIMIZATION: 'true',
        TEST_PRIORITIZATION: 'true',
        FAILURE_PREDICTION: 'true'
      },
      cron_restart: '0 */3 * * *', // Restart every 3 hours
      log_file: 'logs/pm2/intelligent-test-runner.log',
      error_file: 'logs/pm2/intelligent-test-runner-error.log',
      out_file: 'logs/pm2/intelligent-test-runner-out.log'
    },
    
    // NEW: Smart Build Optimizer
    {
      name: 'smart-build-optimizer',
      script: 'scripts/pm2/smart-build-optimizer.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'smart-build-optimizer',
        BUILD_CACHING: 'true',
        INCREMENTAL_BUILDS: 'true',
        BUNDLE_OPTIMIZATION: 'true'
      },
      cron_restart: '0 */8 * * *', // Restart every 8 hours
      log_file: 'logs/pm2/smart-build-optimizer.log',
      error_file: 'logs/pm2/smart-build-optimizer-error.log',
      out_file: 'logs/pm2/smart-build-optimizer-out.log'
    },
    
    // NEW: Code Review Assistant
    {
      name: 'code-review-assistant',
      script: 'scripts/pm2/code-review-assistant.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'code-review-assistant',
        AI_CODE_REVIEW: 'true',
        BEST_PRACTICES: 'true',
        ARCHITECTURE_ANALYSIS: 'true'
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      log_file: 'logs/pm2/code-review-assistant.log',
      error_file: 'logs/pm2/code-review-assistant-error.log',
      out_file: 'logs/pm2/code-review-assistant-out.log'
    },
    
    // NEW: Adaptive Scheduler
    {
      name: 'adaptive-scheduler',
      script: 'scripts/pm2/adaptive-scheduler.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'adaptive-scheduler',
        LEARNING_SCHEDULING: 'true',
        RESOURCE_OPTIMIZATION: 'true',
        WORKLOAD_BALANCING: 'true'
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: 'logs/pm2/adaptive-scheduler.log',
      error_file: 'logs/pm2/adaptive-scheduler-error.log',
      out_file: 'logs/pm2/adaptive-scheduler-out.log'
    },
    
    // NEW: Health Monitor with predictive maintenance
    {
      name: 'predictive-health-monitor',
      script: 'scripts/pm2/predictive-health-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'predictive-health-monitor',
        HEALTH_PREDICTION: 'true',
        MAINTENANCE_SCHEDULING: 'true',
        SYSTEM_OPTIMIZATION: 'true'
      },
      cron_restart: '0 */1 * * *', // Restart every hour
      log_file: 'logs/pm2/predictive-health-monitor.log',
      error_file: 'logs/pm2/predictive-health-monitor-error.log',
      out_file: 'logs/pm2/predictive-health-monitor-out.log'
    }
  ]
};
