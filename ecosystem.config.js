export default {
  apps: [
    {
      name: 'ci-cd-pipeline',
      script: 'npm',
      args: 'run build',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 0 * * *', // Daily restart
      error_file: './logs/ci-cd-error.log',
      out_file: './logs/ci-cd-out.log',
      log_file: './logs/ci-cd-combined.log',
      time: true
    },
    {
      name: 'continuous-automation',
      script: 'node',
      args: 'scripts/automation/automation-orchestrator.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      error_file: './logs/automation-error.log',
      out_file: './logs/automation-out.log',
      log_file: './logs/automation-combined.log',
      time: true
    },
    {
      name: 'comprehensive-automation',
      script: 'node',
      args: 'scripts/automation/comprehensive-continuous-automation.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      error_file: './logs/comprehensive-automation-error.log',
      out_file: './logs/comprehensive-automation-out.log',
      log_file: './logs/comprehensive-automation-combined.log',
      time: true
    },
    {
      name: 'marketing-automation',
      script: 'node',
      args: 'scripts/linkedin_automation.js',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */12 * * *', // Every 12 hours
      error_file: './logs/marketing-automation-error.log',
      out_file: './logs/marketing-automation-out.log',
      log_file: './logs/marketing-automation-combined.log',
      time: true
    },
    {
      name: 'security-audit',
      script: 'npm',
      args: 'audit',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 2 * * *', // Daily at 2 AM
      error_file: './logs/security-audit-error.log',
      out_file: './logs/security-audit-out.log',
      log_file: './logs/security-audit-combined.log',
      time: true
    },
    {
      name: 'test-runner',
      script: 'npm',
      args: 'test',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      error_file: './logs/test-runner-error.log',
      out_file: './logs/test-runner-out.log',
      log_file: './logs/test-runner-combined.log',
      time: true
    },
    {
      name: 'lint-checker',
      script: 'npm',
      args: 'run lint',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      error_file: './logs/lint-checker-error.log',
      out_file: './logs/lint-checker-out.log',
      log_file: './logs/lint-checker-combined.log',
      time: true
    }
  ]
};