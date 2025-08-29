module.exports = {
  apps: [
    // Core Development Automation
    {
      name: 'dev-intelligence-core',
      script: './automation/intelligent-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_MODE: 'intelligent',
        LOG_LEVEL: 'info'
      },
      error_file: './logs/dev-intelligence-core-error.log',
      out_file: './logs/dev-intelligence-core-out.log',
      log_file: './logs/dev-intelligence-core-combined.log',
      time: true,
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      min_uptime: '10s',
      max_restarts: 10
    },

    // Advanced Code Quality Monitor
    {
      name: 'code-quality-intelligence',
      script: './automation/enhanced-code-quality-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        QUALITY_THRESHOLD: '85',
        AUTO_FIX_ENABLED: 'true'
      },
      error_file: './logs/code-quality-error.log',
      out_file: './logs/code-quality-out.log',
      log_file: './logs/code-quality-combined.log',
      time: true,
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      min_uptime: '10s',
      max_restarts: 5
    },

    // Intelligent Lint Automation
    {
      name: 'smart-lint-automation',
      script: './automation/smart-lint-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        AUTO_FIX_ENABLED: 'true',
        LINT_STRATEGY: 'intelligent'
      },
      error_file: './logs/smart-lint-error.log',
      out_file: './logs/smart-lint-out.log',
      log_file: './logs/smart-lint-combined.log',
      time: true,
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      min_uptime: '10s',
      max_restarts: 5
    },

    // Performance Intelligence System
    {
      name: 'performance-intelligence',
      script: './automation/performance-intelligence.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        PERFORMANCE_THRESHOLD: '90',
        AUTO_OPTIMIZE: 'true'
      },
      error_file: './logs/performance-error.log',
      out_file: './logs/performance-out.log',
      log_file: './logs/performance-combined.log',
      time: true,
      cron_restart: '0 */3 * * *', // Restart every 3 hours
      min_uptime: '10s',
      max_restarts: 5
    },

    // Security Intelligence Monitor
    {
      name: 'security-intelligence',
      script: './automation/security-intelligence.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        SECURITY_SCAN_INTERVAL: '900000',
        AUTO_PATCH_ENABLED: 'true'
      },
      error_file: './logs/security-error.log',
      out_file: './logs/security-out.log',
      log_file: './logs/security-combined.log',
      time: true,
      cron_restart: '0 */1 * * *', // Restart every hour
      min_uptime: '10s',
      max_restarts: 5
    },

    // SEO Intelligence Optimizer
    {
      name: 'seo-intelligence',
      script: './automation/seo-intelligence.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        SEO_SCAN_INTERVAL: '1800000',
        AUTO_OPTIMIZE: 'true'
      },
      error_file: './logs/seo-error.log',
      out_file: './logs/seo-out.log',
      log_file: './logs/seo-combined.log',
      time: true,
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      min_uptime: '10s',
      max_restarts: 5
    },

    // Test Intelligence Generator
    {
      name: 'test-intelligence',
      script: './automation/test-intelligence.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        TEST_COVERAGE_TARGET: '90',
        AUTO_GENERATE: 'true'
      },
      error_file: './logs/test-error.log',
      out_file: './logs/test-out.log',
      log_file: './logs/test-combined.log',
      time: true,
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      min_uptime: '10s',
      max_restarts: 5
    },

    // Dependency Intelligence Manager
    {
      name: 'dependency-intelligence',
      script: './automation/dependency-intelligence.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        UPDATE_STRATEGY: 'intelligent',
        AUTO_UPDATE: 'true'
      },
      error_file: './logs/dependency-error.log',
      out_file: './logs/dependency-out.log',
      log_file: './logs/dependency-combined.log',
      time: true,
      cron_restart: '0 */12 * * *', // Restart every 12 hours
      min_uptime: '10s',
      max_restarts: 5
    },

    // Build Intelligence Monitor
    {
      name: 'build-intelligence',
      script: './automation/build-intelligence.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        BUILD_STRATEGY: 'intelligent',
        AUTO_OPTIMIZE: 'true'
      },
      error_file: './logs/build-error.log',
      out_file: './logs/build-out.log',
      log_file: './logs/build-combined.log',
      time: true,
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      min_uptime: '10s',
      max_restarts: 5
    },

    // Content Intelligence Generator
    {
      name: 'content-intelligence',
      script: './automation/content-intelligence.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        CONTENT_STRATEGY: 'ai-powered',
        AUTO_GENERATE: 'true'
      },
      error_file: './logs/content-error.log',
      out_file: './logs/content-out.log',
      log_file: './logs/content-combined.log',
      time: true,
      cron_restart: '0 */8 * * *', // Restart every 8 hours
      min_uptime: '10s',
      max_restarts: 5
    },

    // Analytics Intelligence System
    {
      name: 'analytics-intelligence',
      script: './automation/analytics-intelligence.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        ANALYTICS_INTERVAL: '300000',
        AUTO_INSIGHTS: 'true'
      },
      error_file: './logs/analytics-error.log',
      out_file: './logs/analytics-out.log',
      log_file: './logs/analytics-combined.log',
      time: true,
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      min_uptime: '10s',
      max_restarts: 5
    },

    // Health Intelligence Monitor
    {
      name: 'health-intelligence',
      script: './automation/health-intelligence.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        HEALTH_CHECK_INTERVAL: '60000',
        AUTO_HEAL: 'true'
      },
      error_file: './logs/health-error.log',
      out_file: './logs/health-out.log',
      log_file: './logs/health-combined.log',
      time: true,
      cron_restart: '0 */1 * * *', // Restart every hour
      min_uptime: '10s',
      max_restarts: 5
    }
  ],

  deploy: {
    production: {
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:Zion-Holdings/zion.app.git',
      path: '/workspace',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.cjs --env production',
      'pre-setup': ''
    }
  }
};