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

    // NEW: AI-Powered Code Review Automation
    {
      name: 'ai-code-review',
      script: './scripts/automation/ai-code-review-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'ai-code-review'
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: './logs/ai-code-review.log',
      error_file: './logs/ai-code-review-error.log',
      out_file: './logs/ai-code-review-out.log'
    },

    // NEW: Smart Build Optimization
    {
      name: 'smart-build-optimization',
      script: './scripts/automation/smart-build-optimization.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'smart-build-optimization'
      },
      cron_restart: '0 */12 * * *', // Every 12 hours
      log_file: './logs/smart-build-optimization.log',
      error_file: './logs/smart-build-optimization-error.log',
      out_file: './logs/smart-build-optimization-out.log'
    },

    // NEW: Intelligent Error Prediction & Prevention
    {
      name: 'error-prediction',
      script: './scripts/automation/intelligent-error-prediction.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'error-prediction'
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './logs/error-prediction.log',
      error_file: './logs/error-prediction-error.log',
      out_file: './logs/error-prediction-out.log'
    },

    // Enhanced Build Health Monitor
    {
      name: 'build-health-monitor',
      script: './automation/build-health-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'build-health-monitor'
      },
      cron_restart: '0 5 * * *', // Restart daily at 5 AM
      log_file: './logs/build-monitor.log',
      error_file: './logs/build-monitor-error.log',
      out_file: './logs/build-monitor-out.log'
    },

    // Enhanced Code Quality Monitor
    {
      name: 'code-quality-monitor',
      script: './automation/code-quality-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'code-quality-monitor'
      },
      cron_restart: '0 6 * * *', // Restart daily at 6 AM
      log_file: './logs/code-quality.log',
      error_file: './logs/code-quality-error.log',
      out_file: './logs/code-quality-out.log'
    },

    // Enhanced Dependency Health Monitor
    {
      name: 'dependency-monitor',
      script: './automation/dependency-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'dependency-monitor'
      },
      cron_restart: '0 7 * * *', // Restart daily at 7 AM
      log_file: './logs/dependency.log',
      error_file: './logs/dependency-error.log',
      out_file: './logs/dependency-out.log'
    },

    // Enhanced Build Automation
    {
      name: 'build-automation',
      script: './automation/build-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'build-automation'
      },
      cron_restart: '0 8 * * *', // Restart daily at 8 AM
      log_file: './logs/build-automation.log',
      error_file: './logs/build-automation-error.log',
      out_file: './logs/build-automation-out.log'
    },

    // Enhanced File Integrity Monitor
    {
      name: 'file-integrity-monitor',
      script: './automation/file-integrity-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'file-integrity-monitor'
      },
      cron_restart: '0 9 * * *', // Restart daily at 9 AM
      log_file: './logs/file-integrity.log',
      error_file: './logs/file-integrity-error.log',
      out_file: './logs/file-integrity-out.log'
    },

    // NEW: AI-Powered Code Review Automation
    {
      name: 'ai-code-review',
      script: './scripts/automation/ai-code-review.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/performance-monitor.log',
      out_file: './logs/performance-monitor-out.log',
      error_file: './logs/performance-monitor-error.log'
    },
    {
      name: 'error-prevention-system',
      script: 'node',
      args: 'automation/error-prevention-system.js',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/10 * * * *', // Run every 10 minutes
      env: {
        NODE_ENV: 'production'
      },
      log_file: './automation/logs/error-prevention.log',
      out_file: './automation/logs/error-prevention-out.log',
      error_file: './automation/logs/error-prevention-error.log'
    },
    {
      name: 'pm2-error-monitor',
      script: 'node',
      args: 'automation/pm2-error-monitor.js 30000',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production'
      },
      log_file: './automation/logs/pm2-error-monitor.log',
      out_file: './automation/logs/pm2-error-monitor-out.log',
      error_file: './automation/logs/pm2-error-monitor-error.log'
    },
    {
      name: 'automated-git-workflow',
      script: 'node',
      args: 'automation/automated-git-workflow.js',
      cwd: '/workspace',
      instances: 1,
      autorestart: false,
      watch: false,
      cron_restart: '0 */4 * * *', // Run every 4 hours
      env: {
        NODE_ENV: 'production'
      },
      log_file: './automation/logs/git-workflow.log',
      out_file: './automation/logs/git-workflow-out.log',
      error_file: './automation/logs/git-workflow-error.log'
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
