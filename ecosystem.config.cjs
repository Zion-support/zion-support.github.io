module.exports = {
  apps: [
    {
      name: 'error-fixer',
      script: './scripts/error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: '/workspace/.pm2'
      },
      error_file: './logs/error-fixer-error.log',
      out_file: './logs/error-fixer-out.log',
      log_file: './logs/error-fixer-combined.log',
      time: true
    },
    {
      name: 'comprehensive-error-fixer',
      script: './scripts/comprehensive-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: '/workspace/.pm2'
      },
      error_file: './logs/comprehensive-error-fixer-error.log',
      out_file: './logs/comprehensive-error-fixer-out.log',
      log_file: './logs/comprehensive-error-fixer-combined.log',
      time: true
    },
    {
      name: 'lint-automation',
      script: './scripts/lint-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: '/workspace/.pm2'
      },
      error_file: './logs/lint-automation-error.log',
      out_file: './logs/lint-automation-out.log',
      log_file: './logs/lint-automation-combined.log',
      time: true
    },
    {
      name: 'type-check-automation',
      script: './scripts/type-check-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: '/workspace/.pm2'
      },
      error_file: './logs/type-check-automation-error.log',
      out_file: './logs/type-check-automation-out.log',
      log_file: './logs/type-check-automation-combined.log',
      time: true
    },
    {
      name: 'code-quality-monitor',
      script: './scripts/code-quality-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: '/workspace/.pm2'
      },
      error_file: './logs/code-quality-monitor-error.log',
      out_file: './logs/code-quality-monitor-out.log',
      log_file: './logs/code-quality-monitor-combined.log',
      time: true
    }
  ]
};