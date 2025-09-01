module.exports = {
  apps: [
    // Main Error Fixer Automation - Core error detection and fixing
    {
      name: 'error-fixer-automation',
      script: './scripts/automation/error-fixer-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        ERROR_FIXING_MODE: 'true',
        AUTOMATION_INTERVAL: '300000' // 5 minutes
      },
      cron_restart: '*/5 * * * *', // Restart every 5 minutes
      log_file: './logs/error-fixer-automation.log',
      error_file: './logs/error-fixer-automation-error.log',
      out_file: './logs/error-fixer-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // TypeScript Error Fixer - Specialized TypeScript error fixing
    {
      name: 'typescript-error-fixer',
      script: './scripts/automation/typescript-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        TYPESCRIPT_FIXING_MODE: 'true',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      },
      cron_restart: '*/10 * * * *', // Restart every 10 minutes
      log_file: './logs/typescript-error-fixer.log',
      error_file: './logs/typescript-error-fixer-error.log',
      out_file: './logs/typescript-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // ESLint Error Fixer - Linting error automation
    {
      name: 'eslint-error-fixer',
      script: './scripts/automation/eslint-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        ESLINT_FIXING_MODE: 'true',
        AUTOMATION_INTERVAL: '300000' // 5 minutes
      },
      cron_restart: '*/5 * * * *', // Restart every 5 minutes
      log_file: './logs/eslint-error-fixer.log',
      error_file: './logs/eslint-error-fixer-error.log',
      out_file: './logs/eslint-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Build Error Fixer - Build error detection and fixing
    {
      name: 'build-error-fixer',
      script: './scripts/automation/build-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        BUILD_FIXING_MODE: 'true',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      },
      cron_restart: '*/15 * * * *', // Restart every 15 minutes
      log_file: './logs/build-error-fixer.log',
      error_file: './logs/build-error-fixer-error.log',
      out_file: './logs/build-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Import/Export Fixer - Import and export error automation
    {
      name: 'import-export-fixer',
      script: './scripts/automation/import-export-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        IMPORT_EXPORT_FIXING_MODE: 'true',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      },
      cron_restart: '*/10 * * * *', // Restart every 10 minutes
      log_file: './logs/import-export-fixer.log',
      error_file: './logs/import-export-fixer-error.log',
      out_file: './logs/import-export-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Dependency Error Fixer - Dependency and package.json error fixing
    {
      name: 'dependency-error-fixer',
      script: './scripts/automation/dependency-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        DEPENDENCY_FIXING_MODE: 'true',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      },
      cron_restart: '*/30 * * * *', // Restart every 30 minutes
      log_file: './logs/dependency-error-fixer.log',
      error_file: './logs/dependency-error-fixer-error.log',
      out_file: './logs/dependency-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Syntax Error Fixer - Syntax and formatting error automation
    {
      name: 'syntax-error-fixer',
      script: './scripts/automation/syntax-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        SYNTAX_FIXING_MODE: 'true',
        AUTOMATION_INTERVAL: '300000' // 5 minutes
      },
      cron_restart: '*/5 * * * *', // Restart every 5 minutes
      log_file: './logs/syntax-error-fixer.log',
      error_file: './logs/syntax-error-fixer-error.log',
      out_file: './logs/syntax-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Error Monitor - Monitors and reports on error fixing progress
    {
      name: 'error-monitor',
      script: './scripts/automation/error-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        MONITORING_MODE: 'true',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      },
      cron_restart: '*/10 * * * *', // Restart every 10 minutes
      log_file: './logs/error-monitor.log',
      error_file: './logs/error-monitor-error.log',
      out_file: './logs/error-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Error Prevention - Proactive error prevention automation
    {
      name: 'error-prevention',
      script: './scripts/automation/error-prevention.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PREVENTION_MODE: 'true',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      },
      cron_restart: '*/15 * * * *', // Restart every 15 minutes
      log_file: './logs/error-prevention.log',
      error_file: './logs/error-prevention-error.log',
      out_file: './logs/error-prevention-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Code Quality Fixer - Code quality and best practices automation
    {
      name: 'code-quality-fixer',
      script: './scripts/automation/code-quality-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        QUALITY_FIXING_MODE: 'true',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      },
      cron_restart: '*/30 * * * *', // Restart every 30 minutes
      log_file: './logs/code-quality-fixer.log',
      error_file: './logs/code-quality-fixer-error.log',
      out_file: './logs/code-quality-fixer-out.log',
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