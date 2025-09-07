
      name: 'auto-fix',
      script: 'scripts/pm2/auto-fix.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {,
  NODE_ENV: 'production
      },
      log_file: 'logs/pm2/auto-fix.log',
      error_file: 'logs/pm2/auto-fix-error.log',
      out_file: 'logs/pm2/auto-fix-out.log',
    {
      name: 'healthcheck',
      script: 'scripts/pm2/healthcheck.js',
      max_memory_restart: '128M',
      log_file: 'logs/pm2/health.log',
      error_file: 'logs/pm2/health-error.log',
      out_file: 'logs/pm2/health-out.log',
      name: 'code-quality-monitor',
      script: 'scripts/pm2/code-quality-monitor.js',

      script: 'npm',
      args: 'run build',
      cwd: '/workspace',
      max_memory_restart: '1G',

      error_file: './logs/ci-cd-error.log',
      out_file: './logs/ci-cd-out.log',
      log_file: './logs/ci-cd-combined.log',
      time: true,    },


        NODE_ENV: 'production',
      log_file: 'logs/pm2/preview.log',
      error_file: 'logs/pm2/preview-error.log',
      out_file: 'logs/pm2/preview-out.log',

      env: {

};

      error_file: './logs/comprehensive-automation-error.log',
      out_file: './logs/comprehensive-automation-out.log',
      log_file: './logs/comprehensive-automation-combined.log',

      name: 'marketing-automation',
      args: 'scripts/linkedin_automation.js',

      name: 'test-runner',
      args: 'test',

      name: 'lint-checker',
      args: 'run lint',

      error_file: './logs/lint-checker-error.log',
      out_file: './logs/lint-checker-out.log',
      log_file: './logs/lint-checker-combined.log',
      name: "zion-app",""
      script: "npm",""
      args: "start",""

      interpreter: "none","
      cwd: __dirname,

      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {,"
  NODE_ENV: "production","
        PORT: process.env.PORT || 3000;
      },"
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/zion-app-error.log",
      out_file: "automation/logs/zion-app-out.log","
    {"
      name: "zion-auto-sync",
      script: "automation/pm2-auto-sync.js",
      interpreter: "node","

      out_file: "automation/logs/build-monitor-out.log","
      time: true;"
module.exports = {
  apps: [

        PORT: 3000
      env_production: {


