module.exports = {
  apps: [
    // MAIN APPLICATION
    {
      name: 'zion-app',
      script: 'npm',
      args: 'start',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        PM2_PATH: 'npx pm2',
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
        NODE_OPTIONS: '--max-old-space-size=8192 --openssl-legacy-provider',
      },
      log_file: './logs/zion-app.log',
      error_file: './logs/zion-app-error.log',
      out_file: './logs/zion-app-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // INTELLIGENT REPOSITORY MANAGEMENT (HIGHEST PRIORITY)
    {
      name: 'intelligent-repository-manager',
      script: './scripts/automation/intelligent-repository-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        GIT_AUTOMATION_MODE: 'true',
        AUTO_MERGE_ENABLED: 'true',
        CONFLICT_RESOLUTION_MODE: 'intelligent',
        PM2_PATH: 'npx pm2',
      },
      cron_restart: '*/15 * * * *', // Every 15 minutes
      log_file: './logs/intelligent-repository-manager.log',
      error_file: './logs/intelligent-repository-manager-error.log',
      out_file: './logs/intelligent-repository-manager-out.log',
    },

    // SMART DEVELOPMENT PIPELINE
    {
      name: 'smart-development-pipeline',
      script: './scripts/automation/smart-development-pipeline.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        DEVELOPMENT_AUTOMATION_MODE: 'true',
        AUTO_TEST_ENABLED: 'true',
        CODE_QUALITY_MODE: 'enhanced',
        PM2_PATH: 'npx pm2',
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './logs/smart-development-pipeline.log',
      error_file: './logs/smart-development-pipeline-error.log',
      out_file: './logs/smart-development-pipeline-out.log',
    },

    // AI-POWERED CODE ENHANCEMENT
    {
      name: 'ai-code-enhancement',
      script: './scripts/automation/ai-code-enhancement.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1.5G',
      env: {
        NODE_ENV: 'production',
        AI_ENHANCEMENT_MODE: 'true',
        CODE_OPTIMIZATION_LEVEL: 'aggressive',
        AUTO_REFACTOR_ENABLED: 'true',
        PM2_PATH: 'npx pm2',
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './logs/ai-code-enhancement.log',
      error_file: './logs/ai-code-enhancement-error.log',
      out_file: './logs/ai-code-enhancement-out.log',
    },

    // AUTOMATED DEPLOYMENT ORCHESTRATOR
    {
      name: 'automated-deployment-orchestrator',
      script: './scripts/automation/automated-deployment-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        DEPLOYMENT_AUTOMATION_MODE: 'true',
        AUTO_DEPLOY_ENABLED: 'true',
        ROLLBACK_ENABLED: 'true',
        PM2_PATH: 'npx pm2',
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: './logs/automated-deployment-orchestrator.log',
      error_file: './logs/automated-deployment-orchestrator-error.log',
      out_file: './logs/automated-deployment-orchestrator-out.log',
    },

    // ENHANCED ERROR PREVENTION SYSTEM
    {
      name: 'enhanced-error-prevention',
      script: './scripts/automation/enhanced-error-prevention.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        ERROR_PREVENTION_MODE: 'predictive',
        AUTO_FIX_ENABLED: 'true',
        PREVENTIVE_MAINTENANCE: 'true',
        PM2_PATH: 'npx pm2',
      },
      cron_restart: '*/10 * * * *', // Every 10 minutes
      log_file: './logs/enhanced-error-prevention.log',
      error_file: './logs/enhanced-error-prevention-error.log',
      out_file: './logs/enhanced-error-prevention-out.log',
    },

    // INTELLIGENT CODE REVIEW AUTOMATION
    {
      name: 'intelligent-code-review',
      script: './scripts/automation/intelligent-code-review.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        CODE_REVIEW_MODE: 'intelligent',
        AUTO_REVIEW_ENABLED: 'true',
        QUALITY_THRESHOLD: 'high',
        PM2_PATH: 'npx pm2',
      },
      cron_restart: '0 */3 * * *', // Every 3 hours
      log_file: './logs/intelligent-code-review.log',
      error_file: './logs/intelligent-code-review-error.log',
      out_file: './logs/intelligent-code-review-out.log',
    },

    // SMART DEPENDENCY INTELLIGENCE
    {
      name: 'smart-dependency-intelligence',
      script: './scripts/automation/smart-dependency-intelligence.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        DEPENDENCY_MANAGEMENT_MODE: 'intelligent',
        AUTO_UPDATE_ENABLED: 'true',
        SECURITY_SCANNING: 'true',
        PM2_PATH: 'npx pm2',
      },
      cron_restart: '0 */8 * * *', // Every 8 hours
      log_file: './logs/smart-dependency-intelligence.log',
      error_file: './logs/smart-dependency-intelligence-error.log',
      out_file: './logs/smart-dependency-intelligence-out.log',
    },

    // PERFORMANCE OPTIMIZATION ENGINE
    {
      name: 'performance-optimization-engine',
      script: './scripts/automation/performance-optimization-engine.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PERFORMANCE_OPTIMIZATION_MODE: 'continuous',
        AUTO_OPTIMIZE_ENABLED: 'true',
        MONITORING_INTERVAL: '300000',
        PM2_PATH: 'npx pm2',
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './logs/performance-optimization-engine.log',
      error_file: './logs/performance-optimization-engine-error.log',
      out_file: './logs/performance-optimization-engine-out.log',
    },

    // INTELLIGENT TESTING AUTOMATION
    {
      name: 'intelligent-testing-automation',
      script: './scripts/automation/intelligent-testing-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        TESTING_AUTOMATION_MODE: 'intelligent',
        AUTO_TEST_GENERATION: 'true',
        COVERAGE_TARGET: '90',
        PM2_PATH: 'npx pm2',
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './logs/intelligent-testing-automation.log',
      error_file: './logs/intelligent-testing-automation-error.log',
      out_file: './logs/intelligent-testing-automation-out.log',
    },

    // SECURITY INTELLIGENCE SYSTEM
    {
      name: 'security-intelligence-system',
      script: './scripts/automation/security-intelligence-system.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        SECURITY_MODE: 'intelligent',
        VULNERABILITY_SCANNING: 'true',
        AUTO_PATCH_ENABLED: 'true',
        PM2_PATH: 'npx pm2',
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: './logs/security-intelligence-system.log',
      error_file: './logs/security-intelligence-system-error.log',
      out_file: './logs/security-intelligence-system-out.log',
    },

    // CONTINUOUS IMPROVEMENT ENGINE
    {
      name: 'continuous-improvement-engine',
      script: './scripts/automation/continuous-improvement-engine.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        IMPROVEMENT_MODE: 'continuous',
        AUTO_OPTIMIZE_ENABLED: 'true',
        LEARNING_ENABLED: 'true',
        PM2_PATH: 'npx pm2',
      },
      cron_restart: '0 */12 * * *', // Every 12 hours
      log_file: './logs/continuous-improvement-engine.log',
      error_file: './logs/continuous-improvement-engine-error.log',
      out_file: './logs/continuous-improvement-engine-out.log',
    },

    // UNIFIED AUTOMATION DASHBOARD
    {
      name: 'unified-automation-dashboard',
      script: './scripts/automation/unified-automation-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        DASHBOARD_MODE: 'unified',
        REAL_TIME_MONITORING: 'true',
        ALERT_SYSTEM: 'true',
        PM2_PATH: 'npx pm2',
      },
      cron_restart: '*/5 * * * *', // Every 5 minutes
      log_file: './logs/unified-automation-dashboard.log',
      error_file: './logs/unified-automation-dashboard-error.log',
      out_file: './logs/unified-automation-dashboard-out.log',
    },

    // PREDICTIVE MAINTENANCE SYSTEM
    {
      name: 'predictive-maintenance-system',
      script: './scripts/automation/predictive-maintenance-system.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        MAINTENANCE_MODE: 'predictive',
        AUTO_MAINTENANCE: 'true',
        PREDICTION_ACCURACY: 'high',
        PM2_PATH: 'npx pm2',
      },
      cron_restart: '0 */8 * * *', // Every 8 hours
      log_file: './logs/predictive-maintenance-system.log',
      error_file: './logs/predictive-maintenance-system-error.log',
      out_file: './logs/predictive-maintenance-system-out.log',
    },

    // INTELLIGENT BUILD PIPELINE
    {
      name: 'intelligent-build-pipeline',
      script: './scripts/automation/intelligent-build-pipeline.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1.5G',
      env: {
        NODE_ENV: 'production',
        BUILD_MODE: 'intelligent',
        AUTO_BUILD_ENABLED: 'true',
        OPTIMIZATION_LEVEL: 'maximum',
        PM2_PATH: 'npx pm2',
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './logs/intelligent-build-pipeline.log',
      error_file: './logs/intelligent-build-pipeline-error.log',
      out_file: './logs/intelligent-build-pipeline-out.log',
    },

    // DEVELOPMENT WATCHER (Development Mode)
    {
      name: 'dev-watcher',
      script: './scripts/automation/dev-watcher.cjs',
      instances: 1,
      autorestart: true,
      watch: ['src', 'public', 'components', 'pages', 'utils'],
      ignore_watch: ['dist', 'node_modules', 'logs', '.git'],
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        WATCH_MODE: 'true',
        AUTO_REBUILD: 'true',
        PM2_PATH: 'npx pm2',
      },
      log_file: './logs/dev-watcher.log',
      error_file: './logs/dev-watcher-error.log',
      out_file: './logs/dev-watcher-out.log',
    },
  ],

  deploy: {
    production: {
      user: 'root',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/workspace/production',
      'pre-deploy-local': 'npm run build && npm test',
      'post-deploy':
        'npm install --production && pm2 reload ecosystem-intelligent-enhanced.config.cjs --env production',
      'pre-setup': 'mkdir -p /workspace/production/logs',
    },
    staging: {
      user: 'root',
      host: 'localhost',
      ref: 'origin/staging',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/workspace/staging',
      'pre-deploy-local': 'npm run build && npm run test:coverage',
      'post-deploy':
        'npm install --production && pm2 reload ecosystem-intelligent-enhanced.config.cjs --env staging',
      'pre-setup': 'mkdir -p /workspace/staging/logs',
    },
    development: {
      user: 'root',
      host: 'localhost',
      ref: 'origin/develop',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/workspace/development',
      'pre-deploy-local': 'npm run build',
      'post-deploy':
        'npm install && pm2 reload ecosystem-intelligent-enhanced.config.cjs --env development',
      'pre-setup': 'mkdir -p /workspace/development/logs',
    },
  },
};
