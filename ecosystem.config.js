module.exports = {
  apps: [
    // Core Development Services
    {
      name: 'zion-frontend-dev',
      script: 'npm',
      args: 'run dev',
      cwd: './',
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
        NODE_OPTIONS: '--max-old-space-size=4096 --openssl-legacy-provider'
      },
      instances: 1,
      exec_mode: 'fork',
      watch: ['src/**/*', 'public/**/*'],
      ignore_watch: ['node_modules', 'dist', '*.log'],
      max_memory_restart: '1G',
      error_file: './logs/pm2-frontend-error.log',
      out_file: './logs/pm2-frontend-out.log',
      log_file: './logs/pm2-frontend-combined.log',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 4000,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 8000
    },
    {
      name: 'zion-backend-dev',
      script: 'npm',
      args: 'run dev',
      cwd: './server',
      env: {
        NODE_ENV: 'development',
        PORT: 5000
      },
      instances: 1,
      exec_mode: 'fork',
      watch: ['src/**/*'],
      ignore_watch: ['node_modules', 'dist', '*.log'],
      max_memory_restart: '512M',
      error_file: '../logs/pm2-backend-error.log',
      out_file: '../logs/pm2-backend-out.log',
      log_file: '../logs/pm2-backend-combined.log',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 4000,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 8000
    },

    // Intelligent Automation Systems
    {
      name: 'zion-intelligent-orchestrator',
      script: './automation/intelligent-orchestrator.cjs',
      args: 'continuous',
      cwd: './',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info',
        MAX_CONCURRENT_SYSTEMS: 5,
        HEALTH_CHECK_INTERVAL: 30000,
        AUTO_RECOVERY: true
      },
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '256M',
      error_file: './logs/pm2-orchestrator-error.log',
      out_file: './logs/pm2-orchestrator-out.log',
      log_file: './logs/pm2-orchestrator-combined.log',
      time: true,
      autorestart: true,
      max_restarts: 5,
      min_uptime: '30s',
      restart_delay: 10000,
      kill_timeout: 10000
    },
    {
      name: 'zion-automation-dashboard',
      script: './automation/automation-dashboard.cjs',
      args: 'start',
      cwd: './',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
        LOG_LEVEL: 'info',
        METRICS_INTERVAL: 30000,
        ALERT_INTERVAL: 60000
      },
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '256M',
      error_file: './logs/pm2-dashboard-error.log',
      out_file: './logs/pm2-dashboard-out.log',
      log_file: './logs/pm2-dashboard-combined.log',
      time: true,
      autorestart: true,
      max_restarts: 5,
      min_uptime: '30s',
      restart_delay: 10000,
      kill_timeout: 10000
    },

    // Code Quality & Development Automation
    {
      name: 'zion-lint-monitor',
      script: './automation/lint-monitor.cjs',
      args: 'start',
      cwd: './',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info',
        SCAN_INTERVAL: 15000,
        AUTO_FIX: true,
        MAX_ERRORS_BEFORE_RESTART: 100
      },
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '128M',
      error_file: './logs/pm2-lint-monitor-error.log',
      out_file: './logs/pm2-lint-monitor-out.log',
      log_file: './logs/pm2-lint-monitor-combined.log',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '20s',
      restart_delay: 5000,
      kill_timeout: 5000
    },
    {
      name: 'zion-code-quality-monitor',
      script: './automation/code-quality-monitor.cjs',
      cwd: './',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info',
        SCAN_INTERVAL: 60000,
        QUALITY_THRESHOLD: 0.8,
        AUTO_OPTIMIZE: true
      },
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '128M',
      error_file: './logs/pm2-code-quality-error.log',
      out_file: './logs/pm2-code-quality-out.log',
      log_file: './logs/pm2-code-quality-combined.log',
      time: true,
      autorestart: true,
      max_restarts: 5,
      min_uptime: '30s',
      restart_delay: 10000,
      kill_timeout: 10000
    },

    // Performance & Optimization
    {
      name: 'zion-performance-optimizer',
      script: './automation/performance-optimizer.cjs',
      cwd: './',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info',
        OPTIMIZATION_INTERVAL: 300000,
        BUNDLE_ANALYSIS: true,
        AUTO_OPTIMIZE: true
      },
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '256M',
      error_file: './logs/pm2-performance-error.log',
      out_file: './logs/pm2-performance-out.log',
      log_file: './logs/pm2-performance-combined.log',
      time: true,
      autorestart: true,
      max_restarts: 3,
      min_uptime: '60s',
      restart_delay: 15000,
      kill_timeout: 15000
    },

    // Security & Testing
    {
      name: 'zion-security-scanner',
      script: './automation/security-scanner.cjs',
      cwd: './',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info',
        SCAN_INTERVAL: 600000,
        VULNERABILITY_THRESHOLD: 'medium',
        AUTO_PATCH: false
      },
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '256M',
      error_file: './logs/pm2-security-error.log',
      out_file: './logs/pm2-security-out.log',
      log_file: './logs/pm2-security-combined.log',
      time: true,
      autorestart: true,
      max_restarts: 3,
      min_uptime: '60s',
      restart_delay: 15000,
      kill_timeout: 15000
    },
    {
      name: 'zion-test-generator',
      script: './automation/test-generator.cjs',
      cwd: './',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info',
        GENERATION_INTERVAL: 900000,
        AUTO_GENERATE: true,
        TEST_COVERAGE_TARGET: 0.8
      },
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '256M',
      error_file: './logs/pm2-test-generator-error.log',
      out_file: './logs/pm2-test-generator-out.log',
      log_file: './logs/pm2-test-generator-combined.log',
      time: true,
      autorestart: true,
      max_restarts: 3,
      min_uptime: '60s',
      restart_delay: 15000,
      kill_timeout: 15000
    },

    // SEO & Content Optimization
    {
      name: 'zion-seo-optimizer',
      script: './automation/seo-optimizer.cjs',
      cwd: './',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info',
        OPTIMIZATION_INTERVAL: 1800000,
        AUTO_OPTIMIZE: true,
        KEYWORD_ANALYSIS: true
      },
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '128M',
      error_file: './logs/pm2-seo-error.log',
      out_file: './logs/pm2-seo-out.log',
      log_file: './logs/pm2-seo-combined.log',
      time: true,
      autorestart: true,
      max_restarts: 3,
      min_uptime: '60s',
      restart_delay: 15000,
      kill_timeout: 15000
    },

    // Advanced AI-Powered Automations
    {
      name: 'zion-ai-code-analyzer',
      script: './automation/ai-code-analyzer.cjs',
      cwd: './',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info',
        ANALYSIS_INTERVAL: 600000,
        AI_MODEL: 'gpt-4',
        AUTO_SUGGESTIONS: true,
        CODE_IMPROVEMENT: true
      },
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '512M',
      error_file: './logs/pm2-ai-analyzer-error.log',
      out_file: './logs/pm2-ai-analyzer-out.log',
      log_file: './logs/pm2-ai-analyzer-combined.log',
      time: true,
      autorestart: true,
      max_restarts: 3,
      min_uptime: '60s',
      restart_delay: 15000,
      kill_timeout: 15000
    },
    {
      name: 'zion-smart-deployment',
      script: './automation/smart-deployment.cjs',
      cwd: './',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info',
        DEPLOYMENT_CHECK_INTERVAL: 300000,
        AUTO_ROLLBACK: true,
        HEALTH_CHECK_ENDPOINTS: '/api/health,/health',
        PERFORMANCE_THRESHOLD: 0.9
      },
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '256M',
      error_file: './logs/pm2-deployment-error.log',
      out_file: './logs/pm2-deployment-out.log',
      log_file: './logs/pm2-deployment-combined.log',
      time: true,
      autorestart: true,
      max_restarts: 3,
      min_uptime: '60s',
      restart_delay: 15000,
      kill_timeout: 15000
    }
  ],

  deploy: {
    production: {
      user: 'deploy',
      host: 'your-production-server.com',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/zion-tech-group.git',
      path: '/var/www/zion-tech-group',
      'pre-deploy-local': 'echo "This is a local executed command"',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': 'echo "This is a command to be executed on the host before the setup process starts"'
    },
    staging: {
      user: 'deploy',
      host: 'your-staging-server.com',
      ref: 'origin/develop',
      repo: 'git@github.com:your-username/zion-tech-group.git',
      path: '/var/www/zion-tech-group-staging',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env staging',
      env: {
        NODE_ENV: 'staging'
      }
    }
  }
};