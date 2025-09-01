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

    // Enhanced Error Detection and Fixing System
    {
      name: 'enhanced-error-detector',
      script: './scripts/automation/enhanced-error-detector.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        ERROR_DETECTION_INTERVAL: '300000' // 5 minutes
      },
      cron_restart: '*/5 * * * *', // Every 5 minutes
      log_file: './logs/enhanced-error-detector.log',
      error_file: './logs/enhanced-error-detector-error.log',
      out_file: './logs/enhanced-error-detector-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Intelligent TypeScript Error Fixer
    {
      name: 'intelligent-typescript-fixer',
      script: './scripts/automation/intelligent-typescript-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        TYPESCRIPT_FIX_INTERVAL: '600000' // 10 minutes
      },
      cron_restart: '*/10 * * * *', // Every 10 minutes
      log_file: './logs/intelligent-typescript-fixer.log',
      error_file: './logs/intelligent-typescript-fixer-error.log',
      out_file: './logs/intelligent-typescript-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Smart Linting Error Fixer
    {
      name: 'smart-linting-fixer',
      script: './scripts/automation/smart-linting-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        LINTING_FIX_INTERVAL: '600000' // 10 minutes
      },
      cron_restart: '*/10 * * * *', // Every 10 minutes
      log_file: './logs/smart-linting-fixer.log',
      error_file: './logs/smart-linting-fixer-error.log',
      out_file: './logs/smart-linting-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Auto Import/Export Fixer
    {
      name: 'auto-import-export-fixer',
      script: './scripts/automation/auto-import-export-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        IMPORT_EXPORT_FIX_INTERVAL: '900000' // 15 minutes
      },
      cron_restart: '*/15 * * * *', // Every 15 minutes
      log_file: './logs/auto-import-export-fixer.log',
      error_file: './logs/auto-import-export-fixer-error.log',
      out_file: './logs/auto-import-export-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // JSX/TSX Syntax Fixer
    {
      name: 'jsx-tsx-syntax-fixer',
      script: './scripts/automation/jsx-tsx-syntax-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        JSX_TSX_FIX_INTERVAL: '900000' // 15 minutes
      },
      cron_restart: '*/15 * * * *', // Every 15 minutes
      log_file: './logs/jsx-tsx-syntax-fixer.log',
      error_file: './logs/jsx-tsx-syntax-fixer-error.log',
      out_file: './logs/jsx-tsx-syntax-fixer-out.log',
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
        DEPENDENCY_FIX_INTERVAL: '1800000' // 30 minutes
      },
      cron_restart: '*/30 * * * *', // Every 30 minutes
      log_file: './logs/dependency-error-resolver.log',
      error_file: './logs/dependency-error-resolver-error.log',
      out_file: './logs/dependency-error-resolver-out.log',
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
        BUILD_FIX_INTERVAL: '1800000' // 30 minutes
      },
      cron_restart: '*/30 * * * *', // Every 30 minutes
      log_file: './logs/build-error-auto-fixer.log',
      error_file: './logs/build-error-auto-fixer-error.log',
      out_file: './logs/build-error-auto-fixer-out.log',
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
        PREVENTION_MONITOR_INTERVAL: '300000' // 5 minutes
      },
      cron_restart: '*/5 * * * *', // Every 5 minutes
      log_file: './logs/error-prevention-monitor.log',
      error_file: './logs/error-prevention-monitor-error.log',
      out_file: './logs/error-prevention-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Master Error Fixing Orchestrator
    {
      name: 'master-error-fixing-orchestrator',
      script: './scripts/automation/master-error-fixing-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        ORCHESTRATOR_INTERVAL: '3600000' // 1 hour
      },
      cron_restart: '0 * * * *', // Every hour
      log_file: './logs/master-error-fixing-orchestrator.log',
      error_file: './logs/master-error-fixing-orchestrator-error.log',
      out_file: './logs/master-error-fixing-orchestrator-out.log',
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
        ANALYTICS_INTERVAL: '1800000' // 30 minutes
      },
      cron_restart: '*/30 * * * *', // Every 30 minutes
      log_file: './logs/error-analytics-dashboard.log',
      error_file: './logs/error-analytics-dashboard-error.log',
      out_file: './logs/error-analytics-dashboard-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    }
  ],

  deploy: {
    production: {
      user: 'root',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/bolt.new.zion.app.git',
      path: '/workspace/production',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem-error-fixing.config.cjs --env production',
      'pre-setup': ''
    }
  }
};