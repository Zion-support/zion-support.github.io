module.exports = {
  apps: [
    // Main Application
    {
      name: 'zion-website',
      script: 'npm',
      args: 'run dev',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    },

    // Backend Server
    {
      name: 'zion-backend',
      script: 'npm',
      args: 'run dev',
      cwd: './server',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development',
        PORT: 5000
      }
    },

    // Intelligent Orchestrator (High Priority)
    {
      name: 'intelligent-orchestrator',
      script: './automation/intelligent-orchestrator.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/orchestrator-error.log',
      out_file: './automation/logs/orchestrator-out.log',
      log_file: './automation/logs/orchestrator-combined.log',
      time: true
    },

    // Lint Monitor (High Priority)
    {
      name: 'lint-monitor',
      script: './automation/lint-monitor.cjs',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/lint-monitor-error.log',
      out_file: './automation/logs/lint-monitor-out.log',
      log_file: './automation/logs/lint-monitor-combined.log',
      time: true
    },

    // Lint Error Fixer (High Priority)
    {
      name: 'lint-fixer',
      script: './automation/lint-error-fixer.cjs',
      args: 'auto',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/lint-fixer-error.log',
      out_file: './automation/logs/lint-fixer-out.log',
      log_file: './automation/logs/lint-fixer-combined.log',
      time: true
    },

    // Code Quality Monitor (Medium Priority)
    {
      name: 'code-quality-monitor',
      script: './automation/code-quality-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/code-quality-error.log',
      out_file: './automation/logs/code-quality-out.log',
      log_file: './automation/logs/code-quality-combined.log',
      time: true
    },

    // Performance Optimizer (Medium Priority)
    {
      name: 'performance-optimizer',
      script: './automation/performance-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/performance-error.log',
      out_file: './automation/logs/performance-out.log',
      log_file: './automation/logs/performance-combined.log',
      time: true
    },

    // Security Scanner (High Priority)
    {
      name: 'security-scanner',
      script: './automation/security-scanner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/security-error.log',
      out_file: './automation/logs/security-out.log',
      log_file: './automation/logs/security-combined.log',
      time: true
    },

    // SEO Optimizer (Medium Priority)
    {
      name: 'seo-optimizer',
      script: './automation/seo-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/seo-error.log',
      out_file: './automation/logs/seo-out.log',
      log_file: './automation/logs/seo-combined.log',
      time: true
    },

    // Test Generator (Medium Priority)
    {
      name: 'test-generator',
      script: './automation/test-generator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/test-generator-error.log',
      out_file: './automation/logs/test-generator-out.log',
      log_file: './automation/logs/test-generator-combined.log',
      time: true
    },

    // NEW: AI Code Analyzer (High Priority)
    {
      name: 'ai-code-analyzer',
      script: './automation/ai-code-analyzer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/ai-analyzer-error.log',
      out_file: './automation/logs/ai-analyzer-out.log',
      log_file: './automation/logs/ai-analyzer-combined.log',
      time: true
    },

    // NEW: Dependency Health Monitor (Medium Priority)
    {
      name: 'dependency-monitor',
      script: './automation/dependency-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/dependency-error.log',
      out_file: './automation/logs/dependency-out.log',
      log_file: './automation/logs/dependency-combined.log',
      time: true
    },

    // NEW: Build Optimizer (High Priority)
    {
      name: 'build-optimizer',
      script: './automation/build-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/build-optimizer-error.log',
      out_file: './automation/logs/build-optimizer-out.log',
      log_file: './automation/logs/build-optimizer-combined.log',
      time: true
    },

    // NEW: Code Review Assistant (Medium Priority)
    {
      name: 'code-review-assistant',
      script: './automation/code-review-assistant.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/code-review-error.log',
      out_file: './automation/logs/code-review-out.log',
      log_file: './automation/logs/code-review-combined.log',
      time: true
    },

    // NEW: Performance Metrics Collector (Low Priority)
    {
      name: 'metrics-collector',
      script: './automation/metrics-collector.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info'
      },
      error_file: './automation/logs/metrics-error.log',
      out_file: './automation/logs/metrics-out.log',
      log_file: './automation/logs/metrics-combined.log',
      time: true
    }
  ],

  deploy: {
    production: {
      user: 'node',
      host: '127.0.0.1',
      ref: 'origin/main',
      repo: 'git@github.com:repo.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};