module.exports = {
  apps: [
    {
      name: 'error-monitor',
      script: './scripts/error-monitor.js',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/error-monitor.log',
      out_file: './logs/error-monitor-out.log',
      error_file: './logs/error-monitor-error.log',
      time: true
    },
    {
      name: 'lint-automation',
      script: './scripts/lint-automation.js',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/lint-automation.log',
      out_file: './logs/lint-automation-out.log',
      error_file: './logs/lint-automation-error.log',
      time: true
    },
    {
      name: 'build-monitor',
      script: './scripts/build-monitor.js',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/build-monitor.log',
      out_file: './logs/build-monitor-out.log',
      error_file: './logs/build-monitor-error.log',
      time: true
    },
    {
      name: 'error-prevention',
      script: './scripts/comprehensive-error-prevention.js',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/error-prevention.log',
      out_file: './logs/error-prevention-out.log',
      error_file: './logs/error-prevention-error.log',
      time: true
    }
  ]
};