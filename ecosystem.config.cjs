module.exports = {
  apps: [
    // Core Development Automation
    {
      name: 'intelligent-code-analyzer',
      script: './automation/intelligent-code-analyzer.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 300000, // 5 minutes
        MAX_MEMORY: '512MB'
      },
      max_memory_restart: '512M',
      autorestart: true,
      watch: false,
      log_file: './logs/intelligent-code-analyzer.log',
      error_file: './logs/intelligent-code-analyzer-error.log',
      out_file: './logs/intelligent-code-analyzer-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      min_uptime: '10s',
      max_restarts: 10
    },

    // AI-Powered Code Quality Enhancement
    {
      name: 'ai-code-enhancer',
      script: './automation/ai-code-enhancer.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 600000, // 10 minutes
        AI_MODEL: 'gpt-4',
        ENHANCEMENT_LEVEL: 'aggressive'
      },
      max_memory_restart: '512M',
      autorestart: true,
      watch: false,
      log_file: './logs/ai-code-enhancer.log',
      error_file: './logs/ai-code-enhancer-error.log',
      out_file: './logs/ai-code-enhancer-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      min_uptime: '10s',
      max_restarts: 5
    },

    // Intelligent Performance Optimizer
    {
      name: 'smart-performance-optimizer',
      script: './automation/smart-performance-optimizer.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 900000, // 15 minutes
        PERFORMANCE_THRESHOLD: '0.8',
        OPTIMIZATION_MODE: 'adaptive'
      },
      max_memory_restart: '512M',
      autorestart: true,
      watch: false,
      log_file: './logs/smart-performance-optimizer.log',
      error_file: './logs/smart-performance-optimizer-error.log',
      out_file: './logs/smart-performance-optimizer-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      cron_restart: '0 */3 * * *', // Restart every 3 hours
      min_uptime: '10s',
      max_restarts: 8
    },

    // Advanced Security Scanner
    {
      name: 'advanced-security-scanner',
      script: './automation/advanced-security-scanner.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 1800000, // 30 minutes
        SECURITY_LEVEL: 'paranoid',
        VULNERABILITY_THRESHOLD: 'high'
      },
      max_memory_restart: '512M',
      autorestart: true,
      watch: false,
      log_file: './logs/advanced-security-scanner.log',
      error_file: './logs/advanced-security-scanner-error.log',
      out_file: './logs/advanced-security-scanner-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      min_uptime: '10s',
      max_restarts: 5
    },

    // Intelligent Dependency Manager
    {
      name: 'smart-dependency-manager',
      script: './automation/smart-dependency-manager.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 3600000, // 1 hour
        UPDATE_STRATEGY: 'conservative',
        BREAKING_CHANGE_THRESHOLD: 'low'
      },
      max_memory_restart: '512M',
      autorestart: true,
      watch: false,
      log_file: './logs/smart-dependency-manager.log',
      error_file: './logs/smart-dependency-manager-error.log',
      out_file: './logs/smart-dependency-manager-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      cron_restart: '0 */12 * * *', // Restart every 12 hours
      min_uptime: '10s',
      max_restarts: 3
    },

    // AI-Powered SEO Optimizer
    {
      name: 'ai-seo-optimizer',
      script: './automation/ai-seo-optimizer.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 7200000, // 2 hours
        SEO_STRATEGY: 'aggressive',
        KEYWORD_OPTIMIZATION: 'enabled'
      },
      max_memory_restart: '512M',
      autorestart: true,
      watch: false,
      log_file: './logs/ai-seo-optimizer.log',
      error_file: './logs/ai-seo-optimizer-error.log',
      out_file: './logs/ai-seo-optimizer-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      cron_restart: '0 */8 * * *', // Restart every 8 hours
      min_uptime: '10s',
      max_restarts: 5
    },

    // Intelligent Build Optimizer
    {
      name: 'smart-build-optimizer',
      script: './automation/smart-build-optimizer.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 1800000, // 30 minutes
        BUILD_STRATEGY: 'incremental',
        CACHE_OPTIMIZATION: 'enabled'
      },
      max_memory_restart: '512M',
      autorestart: true,
      watch: false,
      log_file: './logs/smart-build-optimizer.log',
      error_file: './logs/smart-build-optimizer-error.log',
      out_file: './logs/smart-build-optimizer-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      min_uptime: '10s',
      max_restarts: 8
    },

    // Real-time Analytics Collector
    {
      name: 'real-time-analytics',
      script: './automation/real-time-analytics.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 60000, // 1 minute
        ANALYTICS_MODE: 'comprehensive',
        DATA_RETENTION: '30d'
      },
      max_memory_restart: '512M',
      autorestart: true,
      watch: false,
      log_file: './logs/real-time-analytics.log',
      error_file: './logs/real-time-analytics-error.log',
      out_file: './logs/real-time-analytics-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      cron_restart: '0 */1 * * *', // Restart every hour
      min_uptime: '10s',
      max_restarts: 10
    },

    // Intelligent Error Predictor
    {
      name: 'error-predictor',
      script: './automation/error-predictor.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 300000, // 5 minutes
        PREDICTION_MODEL: 'ml-enhanced',
        ALERT_THRESHOLD: 'medium'
      },
      max_memory_restart: '512M',
      autorestart: true,
      watch: false,
      log_file: './logs/error-predictor.log',
      error_file: './logs/error-predictor-error.log',
      out_file: './logs/error-predictor-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      min_uptime: '10s',
      max_restarts: 8
    },

    // Automated Testing Orchestrator
    {
      name: 'test-orchestrator',
      script: './automation/test-orchestrator.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 900000, // 15 minutes
        TEST_STRATEGY: 'intelligent',
        COVERAGE_TARGET: '90'
      },
      max_memory_restart: '512M',
      autorestart: true,
      watch: false,
      log_file: './logs/test-orchestrator.log',
      error_file: './logs/test-orchestrator-error.log',
      out_file: './logs/test-orchestrator-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      cron_restart: '0 */3 * * *', // Restart every 3 hours
      min_uptime: '10s',
      max_restarts: 6
    },

    // Intelligent Content Optimizer
    {
      name: 'content-optimizer',
      script: './automation/content-optimizer.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 3600000, // 1 hour
        OPTIMIZATION_LEVEL: 'comprehensive',
        CONTENT_STRATEGY: 'seo-focused'
      },
      max_memory_restart: '512M',
      autorestart: true,
      watch: false,
      log_file: './logs/content-optimizer.log',
      error_file: './logs/content-optimizer-error.log',
      out_file: './logs/content-optimizer-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      min_uptime: '10s',
      max_restarts: 5
    },

    // Smart Monitoring Dashboard
    {
      name: 'smart-monitoring-dashboard',
      script: './automation/smart-monitoring-dashboard.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 30000, // 30 seconds
        DASHBOARD_MODE: 'real-time',
        ALERT_ENABLED: 'true'
      },
      max_memory_restart: '512M',
      autorestart: true,
      watch: false,
      log_file: './logs/smart-monitoring-dashboard.log',
      error_file: './logs/smart-monitoring-dashboard-error.log',
      out_file: './logs/smart-monitoring-dashboard-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      cron_restart: '0 */1 * * *', // Restart every hour
      min_uptime: '10s',
      max_restarts: 15
    }
  ],

  deploy: {
    production: {
      user: 'node',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:Zion-Holdings/zion.app.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.cjs --env production'
    }
  }
};