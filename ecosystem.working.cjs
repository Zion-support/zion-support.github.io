module.exports = {
  apps: [
    {
      name: 'ziontechgroup-web',
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
      log_file: './logs/pm2/web.log',
      out_file: './logs/pm2/web-out.log',
      error_file: './logs/pm2/web-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      time: true
    },
    {
      name: 'ci-cd-automation',
      script: 'scripts/pm2/ci-cd-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */1 * * *',
      log_file: './logs/pm2/ci-cd-automation.log',
      error_file: './logs/pm2/ci-cd-automation-error.log',
      out_file: './logs/pm2/ci-cd-automation-out.log'
    },
    {
      name: 'health-monitor',
      script: 'scripts/pm2/health-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '*/5 * * * *',
      log_file: './logs/pm2/health-monitor.log',
      error_file: './logs/pm2/health-monitor-error.log',
      out_file: './logs/pm2/health-monitor-out.log'
    },
    {
      name: 'performance-monitor',
      script: 'scripts/pm2/performance-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */2 * * *',
      log_file: './logs/pm2/performance-monitor.log',
      error_file: './logs/pm2/performance-monitor-error.log',
      out_file: './logs/pm2/performance-monitor-out.log'
    },
    {
      name: 'ai-process-manager',
      script: 'scripts/intelligent/ai-process-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */1 * * *',
      log_file: './logs/pm2/ai-process-manager.log',
      error_file: './logs/pm2/ai-process-manager-error.log',
      out_file: './logs/pm2/ai-process-manager-out.log'
    },
    {
      name: 'intelligent-monitor',
      script: 'scripts/intelligent/intelligent-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '*/2 * * * *',
      log_file: './logs/pm2/intelligent-monitor.log',
      error_file: './logs/pm2/intelligent-monitor-error.log',
      out_file: './logs/pm2/intelligent-monitor-out.log'
    }
  ]
};