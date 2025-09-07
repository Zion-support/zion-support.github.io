module.exports = {
  apps: [
    {
      name: 'ziontechgroup-site',
      script: 'npm',
      args: 'run dev',
      cwd: '/workspace',
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
        PORT: 4173
      },
      log_file: '/workspace/automation_logs/app.log',
      out_file: '/workspace/automation_logs/out.log',
      error_file: '/workspace/automation_logs/error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },
    {
      name: 'automation-master',
      script: 'automation/master-orchestrator.cjs',
      args: 'start',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      log_file: '/workspace/automation_logs/automation-master.log',
      out_file: '/workspace/automation_logs/automation-master-out.log',
      error_file: '/workspace/automation_logs/automation-master-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      cron_restart: '0 */6 * * *' // Restart every 6 hours
    },
    {
      name: 'ai-quality-analyzer',
      script: 'scripts/automation/ai-code-quality-analyzer.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      log_file: '/workspace/automation_logs/ai-quality.log',
      out_file: '/workspace/automation_logs/ai-quality-out.log',
      error_file: '/workspace/automation_logs/ai-quality-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      cron_restart: '0 2 * * *' // Run daily at 2 AM
    },
    {
      name: 'ai-security-intelligence',
      script: 'scripts/automation/ai-security-intelligence.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      log_file: '/workspace/automation_logs/ai-security.log',
      out_file: '/workspace/automation_logs/ai-security-out.log',
      error_file: '/workspace/automation_logs/ai-security-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      cron_restart: '0 3 * * *' // Run daily at 3 AM
    },
    {
      name: 'ai-performance-predictor',
      script: 'scripts/automation/ai-performance-predictor.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      log_file: '/workspace/automation_logs/ai-performance.log',
      out_file: '/workspace/automation_logs/ai-performance-out.log',
      error_file: '/workspace/automation_logs/ai-performance-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      cron_restart: '0 4 * * *' // Run daily at 4 AM
    },
    {
      name: 'test-orchestrator',
      script: 'scripts/automation/intelligent-test-orchestrator.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      log_file: '/workspace/automation_logs/test-orchestrator.log',
      out_file: '/workspace/automation_logs/test-orchestrator-out.log',
      error_file: '/workspace/automation_logs/test-orchestrator-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      cron_restart: '0 5 * * *' // Run daily at 5 AM
    }
  ]
};