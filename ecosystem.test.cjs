module.exports = {
  apps: [
    {
      name: 'test-automation',
      script: 'node',
      args: 'scripts/automation/automation-orchestrator.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production',
        AUTOMATION_TYPE: 'test'
      },
      log_file: './logs/test-automation.log',
      out_file: './logs/test-automation-out.log',
      error_file: './logs/test-automation-error.log'
    }
  ]
};