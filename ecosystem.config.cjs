module.exports = {
  apps: [
    {
      name: 'zion-tech-group-app',
      script: 'npm',
      args: 'start',
      cwd: '/workspace',
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
      log_file: './automation/logs/app.log',
      out_file: './automation/logs/app-out.log',
      error_file: './automation/logs/app-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true
    },
    {
      name: 'automation-coordinator',
      script: 'automation/master-automation-coordinator.js',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      log_file: './automation/logs/coordinator.log',
      out_file: './automation/logs/coordinator-out.log',
      error_file: './automation/logs/coordinator-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true
    },
    {
      name: 'intelligent-orchestrator',
      script: 'automation/intelligent-automation-orchestrator.js',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      log_file: './automation/logs/orchestrator.log',
      out_file: './automation/logs/orchestrator-out.log',
      error_file: './automation/logs/orchestrator-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true
    },
    {
      name: 'continuous-improvement',
      script: 'automation/continuous-automation-improvement-system.js',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      log_file: './automation/logs/improvement.log',
      out_file: './automation/logs/improvement-out.log',
      error_file: './automation/logs/improvement-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true
    }
  ]
};