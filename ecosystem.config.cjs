module.exports = {
  apps: [
    // Main application
    {
      name: 'zion-app',
      script: 'npm',
      args: 'start',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    },

    // Enhanced Build Health Monitor with AI-powered issue detection
    {
      name: 'ai-build-monitor',
      script: './automation/ai-build-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AI_MODE: 'enabled',
        LEARNING_ENABLED: 'true'
      },
      cron_restart: '*/30 * * * *', // Every 30 minutes
      log_file: './logs/ai-build-monitor.log',
      error_file: './logs/ai-build-monitor-error.log',
      out_file: './logs/ai-build-monitor-out.log'
    },

    // Intelligent Code Quality Monitor with pattern recognition
    {
      name: 'smart-code-monitor',
      script: './automation/smart-code-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PATTERN_LEARNING: 'enabled',
        AUTO_FIX_THRESHOLD: '0.8'
      },
      cron_restart: '*/15 * * * *', // Every 15 minutes
      log_file: './logs/smart-code-monitor.log',
      error_file: './logs/smart-code-monitor-error.log',
      out_file: './logs/smart-code-monitor-out.log'
    },

    // Advanced Dependency Intelligence System
    {
      name: 'dependency-intelligence',
      script: './automation/dependency-intelligence.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        VULNERABILITY_SCANNING: 'enabled',
        AUTO_UPDATE_SAFE: 'true',
        DEPENDENCY_ANALYSIS: 'deep'
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './logs/dependency-intelligence.log',
      error_file: './logs/dependency-intelligence-error.log',
      out_file: './logs/dependency-intelligence-out.log'
    },

    // Performance Optimization Engine
    {
      name: 'performance-engine',
      script: './automation/performance-engine.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PERFORMANCE_MONITORING: 'enabled',
        AUTO_OPTIMIZATION: 'true',
        BUNDLE_ANALYSIS: 'enabled'
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './logs/performance-engine.log',
      error_file: './logs/performance-engine-error.log',
      out_file: './logs/performance-engine-out.log'
    },

    // Security Intelligence & Threat Detection
    {
      name: 'security-intelligence',
      script: './automation/security-intelligence.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        THREAT_DETECTION: 'enabled',
        VULNERABILITY_SCANNING: 'enabled',
        AUTO_PATCHING: 'true'
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: './logs/security-intelligence.log',
      error_file: './logs/security-intelligence-error.log',
      out_file: './logs/security-intelligence-out.log'
    },

    // Development Workflow Optimizer
    {
      name: 'workflow-optimizer',
      script: './automation/workflow-optimizer.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        WORKFLOW_ANALYSIS: 'enabled',
        PROCESS_OPTIMIZATION: 'true',
        TEAM_COLLABORATION: 'enabled'
      },
      cron_restart: '0 9 * * *', // Daily at 9 AM
      log_file: './logs/workflow-optimizer.log',
      error_file: './logs/workflow-optimizer-error.log',
      out_file: './logs/workflow-optimizer-out.log'
    },

    // AI-Powered Testing Orchestrator
    {
      name: 'ai-test-orchestrator',
      script: './automation/ai-test-orchestrator.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AI_TEST_GENERATION: 'enabled',
        COVERAGE_OPTIMIZATION: 'true',
        TEST_PRIORITIZATION: 'enabled'
      },
      cron_restart: '0 */3 * * *', // Every 3 hours
      log_file: './logs/ai-test-orchestrator.log',
      error_file: './logs/ai-test-orchestrator-error.log',
      out_file: './logs/ai-test-orchestrator-out.log'
    },

    // Enhanced Project Health Dashboard with ML insights
    {
      name: 'ml-health-dashboard',
      script: './automation/ml-health-dashboard.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        ML_INSIGHTS: 'enabled',
        PREDICTIVE_ANALYTICS: 'true',
        HEALTH_SCORING: 'enabled'
      },
      cron_restart: '*/5 * * * *', // Every 5 minutes
      log_file: './logs/ml-health-dashboard.log',
      error_file: './logs/ml-health-dashboard-error.log',
      out_file: './logs/ml-health-dashboard-out.log'
    },

    // Intelligent Error Prediction & Prevention
    {
      name: 'error-predictor',
      script: './automation/error-predictor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        ERROR_PREDICTION: 'enabled',
        PREVENTIVE_ACTIONS: 'true',
        PATTERN_ANALYSIS: 'enabled'
      },
      cron_restart: '*/20 * * * *', // Every 20 minutes
      log_file: './logs/error-predictor.log',
      error_file: './logs/error-predictor-error.log',
      out_file: './logs/error-predictor-out.log'
    },

    // Code Review & Quality Assurance Bot
    {
      name: 'code-review-bot',
      script: './automation/code-review-bot.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTO_CODE_REVIEW: 'enabled',
        QUALITY_SCORING: 'true',
        BEST_PRACTICES_ENFORCEMENT: 'enabled'
      },
      cron_restart: '0 */1 * * *', // Every hour
      log_file: './logs/code-review-bot.log',
      error_file: './logs/code-review-bot-error.log',
      out_file: './logs/code-review-bot-out.log'
    },

    // Legacy systems (keeping for compatibility)
    {
      name: 'build-health-monitor',
      script: './automation/build-health-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 0 * * *', // Restart daily at midnight
      log_file: './logs/build-monitor.log',
      error_file: './logs/build-monitor-error.log',
      out_file: './logs/build-monitor-out.log'
    },

    {
      name: 'code-quality-monitor',
      script: './automation/code-quality-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 6 * * *', // Restart daily at 6 AM
      log_file: './logs/code-quality.log',
      error_file: './logs/code-quality-error.log',
      out_file: './logs/code-quality-out.log'
    },

    {
      name: 'dependency-monitor',
      script: './automation/dependency-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 12 * * *', // Restart daily at noon
      log_file: './logs/dependency.log',
      error_file: './logs/dependency-error.log',
      out_file: './logs/dependency-out.log'
    },

    {
      name: 'build-automation',
      script: './automation/build-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 18 * * *', // Restart daily at 6 PM
      log_file: './logs/build-automation.log',
      error_file: './logs/build-automation-error.log',
      out_file: './logs/build-automation-out.log'
    },

    {
      name: 'file-integrity-monitor',
      script: './automation/file-integrity-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 3 * * *', // Restart daily at 3 AM
      log_file: './logs/file-integrity.log',
      error_file: './logs/file-integrity-error.log',
      out_file: './logs/file-integrity-out.log'
    },

    {
      name: 'project-health-monitor',
      script: './scripts/automation/project-health-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '*/15 * * * *', // Every 15 minutes
      log_file: './logs/project-health-monitor.log',
      error_file: './logs/project-health-monitor-error.log',
      out_file: './logs/project-health-monitor-out.log'
    },

    {
      name: 'typescript-syntax-fixer',
      script: './scripts/automation/typescript-syntax-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '*/10 * * * *', // Every 10 minutes
      log_file: './logs/typescript-syntax-fixer.log',
      error_file: './logs/typescript-syntax-fixer-error.log',
      out_file: './logs/typescript-syntax-fixer-out.log'
    },

    {
      name: 'dependency-manager',
      script: './scripts/automation/dependency-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './logs/dependency-manager.log',
      error_file: './logs/dependency-manager-error.log',
      out_file: './logs/dependency-manager-out.log'
    },

    {
      name: 'project-health-dashboard',
      script: './scripts/automation/project-health-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '*/5 * * * *', // Every 5 minutes
      log_file: './logs/project-health-dashboard.log',
      error_file: './logs/project-health-dashboard-error.log',
      out_file: './logs/project-health-dashboard-out.log'
    }
  ],

  deploy: {
    production: {
      user: 'miami2',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/Users/miami2/zion-app-clone',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.cjs --env production',
      'pre-setup': ''
    }
  }
};
