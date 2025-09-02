export default {
  apps: [
    {
      name: 'main-app',
      script: 'npm',
      args: 'run preview',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      log_file: '/workspace/logs/pm2/main-app.log',
      error_file: '/workspace/logs/pm2/main-app-error.log',
      out_file: '/workspace/logs/pm2/main-app-out.log',
    },
    {
      name: 'syntax-error-fixer',
      script: '/workspace/scripts/pm2/syntax-error-fixer.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'syntax-error-fixer',
        AUTO_FIX: 'true',
        SCAN_INTERVAL: '300000', // 5 minutes
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: 'logs/pm2/syntax-error-fixer.log',
      error_file: 'logs/pm2/syntax-error-fixer-error.log',
      out_file: 'logs/pm2/syntax-error-fixer-out.log',
    },
    {
      name: 'typescript-error-monitor',
      script: '/workspace/scripts/pm2/typescript-error-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '768M',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'typescript-error-monitor',
        CHECK_INTERVAL: '180000', // 3 minutes
        AUTO_FIX_ENABLED: 'true',
        MAX_ERRORS_PER_RUN: '50',
      },
      cron_restart: '0 */1 * * *', // Restart every hour
      log_file: 'logs/pm2/typescript-error-monitor.log',
      error_file: 'logs/pm2/typescript-error-monitor-error.log',
      out_file: 'logs/pm2/typescript-error-monitor-out.log',
    },
    {
      name: 'dependency-error-resolver',
      script: 'scripts/pm2/dependency-error-resolver.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'dependency-error-resolver',
        CHECK_INTERVAL: '600000', // 10 minutes
        AUTO_INSTALL: 'true',
        SECURITY_CHECK: 'true',
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      log_file: 'logs/pm2/dependency-error-resolver.log',
      error_file: 'logs/pm2/dependency-error-resolver-error.log',
      out_file: 'logs/pm2/dependency-error-resolver-out.log',
    },
    {
      name: 'build-error-monitor',
      script: 'scripts/pm2/build-error-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'build-error-monitor',
        BUILD_CHECK_INTERVAL: '900000', // 15 minutes
        AUTO_FIX_BUILD: 'true',
        REPORT_ERRORS: 'true',
      },
      cron_restart: '0 */3 * * *', // Restart every 3 hours
      log_file: 'logs/pm2/build-error-monitor.log',
      error_file: 'logs/pm2/build-error-monitor-error.log',
      out_file: 'logs/pm2/build-error-monitor-out.log',
    },
    {
      name: 'lint-error-auto-fixer',
      script: 'scripts/pm2/lint-error-auto-fixer.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'lint-error-auto-fixer',
        LINT_CHECK_INTERVAL: '240000', // 4 minutes
        AUTO_FIX_LINT: 'true',
        MAX_WARNINGS: '10',
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: 'logs/pm2/lint-error-auto-fixer.log',
      error_file: 'logs/pm2/lint-error-auto-fixer-error.log',
      out_file: 'logs/pm2/lint-error-auto-fixer-out.log',
    },
    {
      name: 'runtime-error-detector',
      script: 'scripts/pm2/runtime-error-detector.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'runtime-error-detector',
        MONITOR_INTERVAL: '120000', // 2 minutes
        LOG_MONITORING: 'true',
        ALERT_ON_ERRORS: 'true',
      },
      cron_restart: '0 */1 * * *', // Restart every hour
      log_file: 'logs/pm2/runtime-error-detector.log',
      error_file: 'logs/pm2/runtime-error-detector-error.log',
      out_file: 'logs/pm2/runtime-error-detector-out.log',
    },
    {
      name: 'error-report-generator',
      script: 'scripts/pm2/error-report-generator.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'error-report-generator',
        REPORT_INTERVAL: '1800000', // 30 minutes
        GENERATE_REPORTS: 'true',
        EMAIL_REPORTS: 'false',
      },
      cron_restart: '0 */12 * * *', // Restart every 12 hours
      log_file: 'logs/pm2/error-report-generator.log',
      error_file: 'logs/pm2/error-report-generator-error.log',
      out_file: 'logs/pm2/error-report-generator-out.log',
    },
  ],
};