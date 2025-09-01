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

    // CRITICAL ERROR FIXERS - Run every 5 minutes
    {
      name: 'merge-conflict-fixer',
      script: './scripts/automation/merge-conflict-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000' // 5 minutes
      },
      log_file: './logs/merge-conflict-fixer.log',
      error_file: './logs/merge-conflict-fixer-error.log',
      out_file: './logs/merge-conflict-fixer-out.log'
    },

    // TypeScript error fixer - runs every 10 minutes
    {
      name: 'typescript-error-fixer',
      script: './scripts/automation/typescript-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      },
      log_file: './logs/typescript-error-fixer.log',
      error_file: './logs/typescript-error-fixer-error.log',
      out_file: './logs/typescript-error-fixer-out.log'
    },

    // ESLint error fixer - runs every 15 minutes
    {
      name: 'eslint-error-fixer',
      script: './scripts/automation/eslint-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      },
      log_file: './logs/eslint-error-fixer.log',
      error_file: './logs/eslint-error-fixer-error.log',
      out_file: './logs/eslint-error-fixer-out.log'
    },

    // Import/export error fixer - runs every 20 minutes
    {
      name: 'import-export-fixer',
      script: './scripts/automation/import-export-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1200000' // 20 minutes
      },
      log_file: './logs/import-export-fixer.log',
      error_file: './logs/import-export-fixer-error.log',
      out_file: './logs/import-export-fixer-out.log'
    },

    // HIGH PRIORITY FIXERS - Run every 30 minutes
    {
      name: 'syntax-error-fixer',
      script: './scripts/automation/syntax-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      },
      log_file: './logs/syntax-error-fixer.log',
      error_file: './logs/syntax-error-fixer-error.log',
      out_file: './logs/syntax-error-fixer-out.log'
    },

    {
      name: 'dependency-fixer',
      script: './scripts/automation/dependency-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      },
      log_file: './logs/dependency-fixer.log',
      error_file: './logs/dependency-fixer-error.log',
      out_file: './logs/dependency-fixer-out.log'
    },

    // MEDIUM PRIORITY FIXERS - Run every hour
    {
      name: 'file-extension-fixer',
      script: './scripts/automation/file-extension-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000' // 1 hour
      },
      log_file: './logs/file-extension-fixer.log',
      error_file: './logs/file-extension-fixer-error.log',
      out_file: './logs/file-extension-fixer-out.log'
    },

    {
      name: 'component-error-fixer',
      script: './scripts/automation/component-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000' // 1 hour
      },
      log_file: './logs/component-error-fixer.log',
      error_file: './logs/component-error-fixer-error.log',
      out_file: './logs/component-error-fixer-out.log'
    },

    // MASTER ERROR COORDINATOR - Runs every 2 hours
    {
      name: 'master-error-coordinator',
      script: './scripts/automation/master-error-coordinator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      },
      log_file: './logs/master-error-coordinator.log',
      error_file: './logs/master-error-coordinator-error.log',
      out_file: './logs/master-error-coordinator-out.log'
    },

    // CONTINUOUS MONITORING - Runs every 5 minutes
    {
      name: 'error-monitor',
      script: './scripts/automation/error-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000' // 5 minutes
      },
      log_file: './logs/error-monitor.log',
      error_file: './logs/error-monitor-error.log',
      out_file: './logs/error-monitor-out.log'
    },

    // BUILD TESTER - Runs every 30 minutes
    {
      name: 'build-tester',
      script: './scripts/automation/build-tester.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      },
      log_file: './logs/build-tester.log',
      error_file: './logs/build-tester-error.log',
      out_file: './logs/build-tester-out.log'
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