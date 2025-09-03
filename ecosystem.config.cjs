module.exports = {
  apps: [
    {
      name: 'ziontechgroup-main',
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
      env_development: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      error_file: './automation/logs/main-error.log',
      out_file: './automation/logs/main-out.log',
      log_file: './automation/logs/main-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 4000
    },
    {
      name: 'error-monitor',
      script: './automation/error-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './automation/logs/error-monitor-error.log',
      out_file: './automation/logs/error-monitor-out.log',
      log_file: './automation/logs/error-monitor-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '10s',
      restart_delay: 2000
    },
    {
      name: 'build-monitor',
      script: './automation/build-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './automation/logs/build-monitor-error.log',
      out_file: './automation/logs/build-monitor-out.log',
      log_file: './automation/logs/build-monitor-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '10s',
      restart_delay: 2000
    },
    {
      name: 'linting-automation',
      script: './automation/linting-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './automation/logs/linting-automation-error.log',
      out_file: './automation/logs/linting-automation-out.log',
      log_file: './automation/logs/linting-automation-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '10s',
      restart_delay: 2000
    },
    {
      name: 'security-scanner',
      script: './automation/security-scanner.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './automation/logs/security-scanner-error.log',
      out_file: './automation/logs/security-scanner-out.log',
      log_file: './automation/logs/security-scanner-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '10s',
      restart_delay: 2000
    },
    {
      name: 'performance-monitor',
      script: './automation/performance-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './automation/logs/performance-monitor-error.log',
      out_file: './automation/logs/performance-monitor-out.log',
      log_file: './automation/logs/performance-monitor-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '10s',
      restart_delay: 2000
    },
    {
      name: 'error-prevention',
      script: './automation/error-prevention-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './automation/logs/error-prevention-error.log',
      out_file: './automation/logs/error-prevention-out.log',
      log_file: './automation/logs/error-prevention-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '10s',
      restart_delay: 2000
    }
  ]
};