module.exports = {
  apps: [
    // Core Intelligent Automation Orchestrator
    {
      name: 'intelligent-orchestrator',
      script: './automation/intelligent-orchestrator.cjs',
      args: 'continuous',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_MODE: 'intelligent',
        LOG_LEVEL: 'info'
      },
      error_file: './logs/intelligent-orchestrator-error.log',
      out_file: './logs/intelligent-orchestrator-out.log',
      log_file: './logs/intelligent-orchestrator-combined.log',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 5000
    },

    // AI-Powered Code Quality Monitor
    {
      name: 'ai-code-quality',
      script: './automation/ai-code-quality-monitor.cjs',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        MONITORING_INTERVAL: '300000', // 5 minutes
        AI_ANALYSIS: 'true'
      },
      error_file: './logs/ai-code-quality-error.log',
      out_file: './logs/ai-code-quality-out.log',
      log_file: './logs/ai-code-quality-combined.log',
      time: true,
      autorestart: true,
      max_restarts: 5,
      min_uptime: '30s',
      restart_delay: 10000
    },

    // Intelligent Lint Monitor & Auto-Fixer
    {
      name: 'smart-lint-monitor',
      script: './automation/smart-lint-monitor.cjs',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        AUTO_FIX: 'true',
        LEARNING_MODE: 'true',
        MONITORING_INTERVAL: '180000' // 3 minutes
      },
      error_file: './logs/smart-lint-error.log',
      out_file: './logs/smart-lint-out.log',
      log_file: './logs/smart-lint-combined.log',
      time: true,
      autorestart: true,
      max_restarts: 5,
      min_uptime: '30s',
      restart_delay: 8000
    },

    // AI Security Scanner & Vulnerability Detector
    {
      name: 'ai-security-scanner',
      script: './automation/ai-security-scanner.cjs',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        SCAN_INTERVAL: '600000', // 10 minutes
        AI_THREAT_DETECTION: 'true',
        AUTO_PATCH: 'false'
      },
      error_file: './logs/ai-security-error.log',
      out_file: './logs/ai-security-out.log',
      log_file: './logs/ai-security-combined.log',
      time: true,
      autorestart: true,
      max_restarts: 5,
      min_uptime: '30s',
      restart_delay: 10000
    },

    // Performance Optimization Engine
    {
      name: 'performance-optimizer',
      script: './automation/performance-optimizer.cjs',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        OPTIMIZATION_INTERVAL: '900000', // 15 minutes
        AI_OPTIMIZATION: 'true',
        BUNDLE_ANALYSIS: 'true'
      },
      error_file: './logs/performance-optimizer-error.log',
      out_file: './logs/performance-optimizer-out.log',
      log_file: './logs/performance-optimizer-combined.log',
      time: true,
      autorestart: true,
      max_restarts: 5,
      min_uptime: '30s',
      restart_delay: 12000
    },

    // SEO & Content Intelligence Engine
    {
      name: 'seo-intelligence',
      script: './automation/seo-intelligence-engine.cjs',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        ANALYSIS_INTERVAL: '1200000', // 20 minutes
        AI_CONTENT_OPTIMIZATION: 'true',
        KEYWORD_ANALYSIS: 'true'
      },
      error_file: './logs/seo-intelligence-error.log',
      out_file: './logs/seo-intelligence-out.log',
      log_file: './logs/seo-intelligence-combined.log',
      time: true,
      autorestart: true,
      max_restarts: 5,
      min_uptime: '30s',
      restart_delay: 15000
    },

    // Test Generation & Coverage Analyzer
    {
      name: 'test-intelligence',
      script: './automation/test-intelligence.cjs',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        GENERATION_INTERVAL: '1800000', // 30 minutes
        AI_TEST_GENERATION: 'true',
        COVERAGE_ANALYSIS: 'true'
      },
      error_file: './logs/test-intelligence-error.log',
      out_file: './logs/test-intelligence-out.log',
      log_file: './logs/test-intelligence-combined.log',
      time: true,
      autorestart: true,
      max_restarts: 5,
      min_uptime: '30s',
      restart_delay: 20000
    },

    // Dependency Intelligence Manager
    {
      name: 'dependency-intelligence',
      script: './automation/dependency-intelligence.cjs',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        UPDATE_INTERVAL: '3600000', // 1 hour
        AI_DEPENDENCY_ANALYSIS: 'true',
        AUTO_UPDATE: 'false'
      },
      error_file: './logs/dependency-intelligence-error.log',
      out_file: './logs/dependency-intelligence-out.log',
      log_file: './logs/dependency-intelligence-combined.log',
      time: true,
      autorestart: true,
      max_restarts: 5,
      min_uptime: '30s',
      restart_delay: 25000
    },

    // Build Intelligence & Health Monitor
    {
      name: 'build-intelligence',
      script: './automation/build-intelligence.cjs',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        BUILD_INTERVAL: '900000', // 15 minutes
        AI_BUILD_OPTIMIZATION: 'true',
        HEALTH_MONITORING: 'true'
      },
      error_file: './logs/build-intelligence-error.log',
      out_file: './logs/build-intelligence-out.log',
      log_file: './logs/build-intelligence-combined.log',
      time: true,
      autorestart: true,
      max_restarts: 5,
      min_uptime: '30s',
      restart_delay: 10000
    },

    // Link Intelligence & SEO Validator
    {
      name: 'link-intelligence',
      script: './automation/link-intelligence.cjs',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        VALIDATION_INTERVAL: '600000', // 10 minutes
        AI_LINK_ANALYSIS: 'true',
        AUTO_FIX_LINKS: 'true'
      },
      error_file: './logs/link-intelligence-error.log',
      out_file: './logs/link-intelligence-out.log',
      log_file: './logs/link-intelligence-combined.log',
      time: true,
      autorestart: true,
      max_restarts: 5,
      min_uptime: '30s',
      restart_delay: 12000
    },

    // Real-time Monitoring Dashboard
    {
      name: 'automation-dashboard',
      script: './automation/automation-dashboard.cjs',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        DASHBOARD_PORT: '3001',
        UPDATE_INTERVAL: '5000', // 5 seconds
        REAL_TIME_MONITORING: 'true'
      },
      error_file: './logs/dashboard-error.log',
      out_file: './logs/dashboard-out.log',
      log_file: './logs/dashboard-combined.log',
      time: true,
      autorestart: true,
      max_restarts: 5,
      min_uptime: '30s',
      restart_delay: 5000
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