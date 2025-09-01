module.exports = {
  apps: [
    // Main application
    {
      name: 'bolt-app',
      script: 'npm',
      args: 'start',
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
        NODE_OPTIONS: '--max-old-space-size=6144 --openssl-legacy-provider'
      }
    },

    // Continuous Error Monitor - runs every 15 minutes (HIGHEST PRIORITY)
    {
      name: 'continuous-error-monitor',
      script: './scripts/automation/continuous-error-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      },
      log_file: './automation/logs/continuous-error-monitor.log',
      error_file: './automation/logs/continuous-error-monitor-error.log',
      out_file: './automation/logs/continuous-error-monitor-out.log'
    },

    // Comprehensive Error Fixer - runs on demand and via monitor
    {
      name: 'comprehensive-error-fixer',
      script: './scripts/automation/comprehensive-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      log_file: './automation/logs/comprehensive-error-fixer.log',
      error_file: './automation/logs/comprehensive-error-fixer-error.log',
      out_file: './automation/logs/comprehensive-error-fixer-out.log'
    },

    // TypeScript Error Fixer - runs every 30 minutes
    {
      name: 'typescript-error-fixer',
      script: './scripts/automation/typescript-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      },
      log_file: './automation/logs/typescript-error-fixer.log',
      error_file: './automation/logs/typescript-error-fixer-error.log',
      out_file: './automation/logs/typescript-error-fixer-out.log'
    },

    // ESLint Error Fixer - runs every 20 minutes
    {
      name: 'eslint-error-fixer',
      script: './scripts/automation/eslint-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1200000' // 20 minutes
      },
      log_file: './automation/logs/eslint-error-fixer.log',
      error_file: './automation/logs/eslint-error-fixer-error.log',
      out_file: './automation/logs/eslint-error-fixer-out.log'
    },

    // Import/Export Error Fixer - runs every 45 minutes
    {
      name: 'import-export-fixer',
      script: './scripts/automation/import-export-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '2700000' // 45 minutes
      },
      log_file: './automation/logs/import-export-fixer.log',
      error_file: './automation/logs/import-export-fixer-error.log',
      out_file: './automation/logs/import-export-fixer-out.log'
    },

    // Syntax Error Fixer - runs every 25 minutes
    {
      name: 'syntax-error-fixer',
      script: './scripts/automation/syntax-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1500000' // 25 minutes
      },
      log_file: './automation/logs/syntax-error-fixer.log',
      error_file: './automation/logs/syntax-error-fixer-error.log',
      out_file: './automation/logs/syntax-error-fixer-out.log'
    },

    // Dependency Error Fixer - runs every 2 hours
    {
      name: 'dependency-error-fixer',
      script: './scripts/automation/dependency-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      },
      log_file: './automation/logs/dependency-error-fixer.log',
      error_file: './automation/logs/dependency-error-fixer-error.log',
      out_file: './automation/logs/dependency-error-fixer-out.log'
    },

    // Error Report Generator - runs every hour
    {
      name: 'error-report-generator',
      script: './scripts/automation/error-report-generator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000' // 1 hour
      },
      log_file: './automation/logs/error-report-generator.log',
      error_file: './automation/logs/error-report-generator-error.log',
      out_file: './automation/logs/error-report-generator-out.log'
    },

    // Build Health Monitor - runs every 30 minutes
    {
      name: 'build-health-monitor',
      script: './scripts/automation/build-health-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      },
      log_file: './automation/logs/build-health-monitor.log',
      error_file: './automation/logs/build-health-monitor-error.log',
      out_file: './automation/logs/build-health-monitor-out.log'
    },

    // Code Quality Monitor - runs every 40 minutes
    {
      name: 'code-quality-monitor',
      script: './scripts/automation/code-quality-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '2400000' // 40 minutes
      },
      log_file: './automation/logs/code-quality-monitor.log',
      error_file: './automation/logs/code-quality-monitor-error.log',
      out_file: './automation/logs/code-quality-monitor-out.log'
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
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem-error-automation.config.cjs --env production',
      'pre-setup': ''
    }
  }
};