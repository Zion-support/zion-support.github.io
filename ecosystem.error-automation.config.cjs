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

    // Error Detection and Monitoring System
    {
      name: 'error-detection-monitor',
      script: './scripts/automation/error-detection-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        ERROR_DETECTION_INTERVAL: '300000', // 5 minutes
        ERROR_THRESHOLD: '10'
      },
      cron_restart: '0 */10 * * *', // Restart every 10 minutes
      log_file: './automation/logs/error-detection-monitor.log',
      error_file: './automation/logs/error-detection-monitor-error.log',
      out_file: './automation/logs/error-detection-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // TypeScript Error Auto-Fixer
    {
      name: 'typescript-error-auto-fixer',
      script: './scripts/automation/typescript-error-auto-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        TYPESCRIPT_FIX_INTERVAL: '600000', // 10 minutes
        AUTO_FIX_ENABLED: 'true'
      },
      cron_restart: '0 */15 * * *', // Restart every 15 minutes
      log_file: './automation/logs/typescript-error-auto-fixer.log',
      error_file: './automation/logs/typescript-error-auto-fixer-error.log',
      out_file: './automation/logs/typescript-error-auto-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // ESLint Error Auto-Fixer
    {
      name: 'eslint-error-auto-fixer',
      script: './scripts/automation/eslint-error-auto-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        ESLINT_FIX_INTERVAL: '300000', // 5 minutes
        AUTO_FIX_ENABLED: 'true'
      },
      cron_restart: '0 */10 * * *', // Restart every 10 minutes
      log_file: './automation/logs/eslint-error-auto-fixer.log',
      error_file: './automation/logs/eslint-error-auto-fixer-error.log',
      out_file: './automation/logs/eslint-error-auto-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Dependency Error Resolver
    {
      name: 'dependency-error-resolver',
      script: './scripts/automation/dependency-error-resolver.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        DEPENDENCY_CHECK_INTERVAL: '1800000', // 30 minutes
        AUTO_UPDATE_ENABLED: 'true'
      },
      cron_restart: '0 */30 * * *', // Restart every 30 minutes
      log_file: './automation/logs/dependency-error-resolver.log',
      error_file: './automation/logs/dependency-error-resolver-error.log',
      out_file: './automation/logs/dependency-error-resolver-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Build Error Auto-Fixer
    {
      name: 'build-error-auto-fixer',
      script: './scripts/automation/build-error-auto-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        BUILD_CHECK_INTERVAL: '900000', // 15 minutes
        AUTO_FIX_ENABLED: 'true'
      },
      cron_restart: '0 */20 * * *', // Restart every 20 minutes
      log_file: './automation/logs/build-error-auto-fixer.log',
      error_file: './automation/logs/build-error-auto-fixer-error.log',
      out_file: './automation/logs/build-error-auto-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Code Quality Auto-Enhancer
    {
      name: 'code-quality-auto-enhancer',
      script: './scripts/automation/code-quality-auto-enhancer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        QUALITY_CHECK_INTERVAL: '3600000', // 1 hour
        AUTO_ENHANCE_ENABLED: 'true'
      },
      cron_restart: '0 */60 * * *', // Restart every hour
      log_file: './automation/logs/code-quality-auto-enhancer.log',
      error_file: './automation/logs/code-quality-auto-enhancer-error.log',
      out_file: './automation/logs/code-quality-auto-enhancer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Error Prevention Monitor
    {
      name: 'error-prevention-monitor',
      script: './scripts/automation/error-prevention-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PREVENTION_CHECK_INTERVAL: '600000', // 10 minutes
        PREVENTIVE_ACTIONS_ENABLED: 'true'
      },
      cron_restart: '0 */15 * * *', // Restart every 15 minutes
      log_file: './automation/logs/error-prevention-monitor.log',
      error_file: './automation/logs/error-prevention-monitor-error.log',
      out_file: './automation/logs/error-prevention-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Error Analytics Dashboard
    {
      name: 'error-analytics-dashboard',
      script: './scripts/automation/error-analytics-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        DASHBOARD_UPDATE_INTERVAL: '300000', // 5 minutes
        ANALYTICS_ENABLED: 'true'
      },
      cron_restart: '0 */10 * * *', // Restart every 10 minutes
      log_file: './automation/logs/error-analytics-dashboard.log',
      error_file: './automation/logs/error-analytics-dashboard-error.log',
      out_file: './automation/logs/error-analytics-dashboard-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Intelligent Error Orchestrator
    {
      name: 'intelligent-error-orchestrator',
      script: './scripts/automation/intelligent-error-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        ORCHESTRATION_INTERVAL: '300000', // 5 minutes
        INTELLIGENT_FIXING_ENABLED: 'true'
      },
      cron_restart: '0 */10 * * *', // Restart every 10 minutes
      log_file: './automation/logs/intelligent-error-orchestrator.log',
      error_file: './automation/logs/intelligent-error-orchestrator-error.log',
      out_file: './automation/logs/intelligent-error-orchestrator-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    }
  ],

  deploy: {
    production: {
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/zion-tech-group.git',
      path: '/var/www/zion-tech-group',
      'pre-deploy-local': '',
      'post-deploy': 'npm install --legacy-peer-deps && pm2 reload ecosystem.error-automation.config.cjs --env production',
      'pre-setup': ''
    }
  }
};