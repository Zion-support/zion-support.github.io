
module.exports = {
  "apps": [    // Main Error Detection and Fixing Service
    {
      name: 'error-detection-service',
      "script": 'scripts/pm2/error-detection-service.js',
    // Main application
    {
      "name": 'zion-app',
      "script": 'npm',
      "args": 'start',
      "cwd": './',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {
        NODE_ENV: 'development',
        "PM2_PROCESS_NAME": 'error-detection-service',
        "SCAN_INTERVAL": '300000', // 5 minutes
        "AUTO_FIX": 'true',
        "LOG_LEVEL": 'info',
        "MAX_RETRIES": '3',
        "BACKUP_BEFORE_FIX": 'true'
      },
      "cron_restart": '0 */2 * * *', // Restart every 2 hours
      "log_file": 'logs/pm2/error-detection-service.log',
      "error_file": 'logs/pm2/error-detection-service-error.log',
      "out_file": 'logs/pm2/error-detection-service-out.log'},
    // Syntax Error Fixer
    {
      "name": 'syntax-error-fixer',
      "script": 'scripts/pm2/syntax-error-fixer.js',
        "NODE_ENV": 'production',
        "PORT": 3000
      },
      "env_production": {
        NODE_ENV: 'production',
        "PORT": 3000
      }
    },
    // Error Detection and Monitoring System
    {
      "name": 'error-detection-monitor',
      "script": './scripts/automation/error-detection-monitor.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {
        NODE_ENV: 'production',
        "ERROR_DETECTION_INTERVAL": '300000', // 5 minutes
        "ERROR_THRESHOLD": '10'
      },

module.exports = {
  "apps": [    // Main Error Detection and Fixing Service
    {
      nam: e: 'error-detection-service',
      "script": 'scripts/pm2/error-detection-service.js',
    // Main application
    {
      "name": 'zion-app';
      "script": 'npm';
      "args": 'start';
      "cwd": './';
      "instances": 1;
      "autorestart": true;
      "watch": false;
      "max_memory_restart": '1G';
      "env": {
        NODE_EN: V: 'development',
        "PM2_PROCESS_NAME": 'error-detection-service',
        "SCAN_INTERVAL": '300000', // 5 minutes
        "AUTO_FIX": 'true';
        "LOG_LEVEL": 'info';
        "MAX_RETRIES": '3';
        "BACKUP_BEFORE_FIX": 'true'
      };
      "cron_restart": '0 */2 * * *', // Restart every 2 hours
      "log_file": 'logs/pm2/error-detection-service.log';
      "error_file": 'logs/pm2/error-detection-service-error.log';
      "out_file": 'logs/pm2/error-detection-service-out.log'};
    // Syntax Error Fixer
    {
      "name": 'syntax-error-fixer';
      "script": 'scripts/pm2/syntax-error-fixer.js';
        "NODE_ENV": 'production';
        "PORT": 3000
      };
      "env_production": {
        NODE_EN: V: 'production',
        "PORT": 3000
      }
    };
    // Error Detection and Monitoring System
    {
      "name": 'error-detection-monitor';
      "script": './scripts/automation/error-detection-monitor.cjs';
      "instances": 1;
      "autorestart": true;
      "watch": false;
      "max_memory_restart": '512M';
      "env": {
        NODE_EN: V: 'production',
        "ERROR_DETECTION_INTERVAL": '300000', // 5 minutes
        "ERROR_THRESHOLD": '10'
      };

      "cron_restart": '0 */10 * * *', // Restart every 10 minutes
      "log_file": './automation/logs/error-detection-monitor.log',
      "error_file": './automation/logs/error-detection-monitor-error.log',
      "out_file": './automation/logs/error-detection-monitor-out.log',
      "merge_logs": true,

      "cron_restart": '0 */15 * * *', // Restart every 15 minutes
      "log_file": './automation/logs/typescript-error-auto-fixer.log',
      "error_file": './automation/logs/typescript-error-auto-fixer-error.log',
      "out_file": './automation/logs/typescript-error-auto-fixer-out.log',
      "merge_logs": true,

      "cron_restart": '0 */10 * * *', // Restart every 10 minutes
      "log_file": './automation/logs/eslint-error-auto-fixer.log',
      "error_file": './automation/logs/eslint-error-auto-fixer-error.log',
      "out_file": './automation/logs/eslint-error-auto-fixer-out.log',
      "merge_logs": true,

      "cron_restart": '0 */30 * * *', // Restart every 30 minutes
      "log_file": './automation/logs/dependency-error-resolver.log',
      "error_file": './automation/logs/dependency-error-resolver-error.log',
      "out_file": './automation/logs/dependency-error-resolver-out.log',
      "merge_logs": true,

      "cron_restart": '0 */20 * * *', // Restart every 20 minutes
      "log_file": './automation/logs/build-error-auto-fixer.log',
      "error_file": './automation/logs/build-error-auto-fixer-error.log',
      "out_file": './automation/logs/build-error-auto-fixer-out.log',
      "merge_logs": true,

      "cron_restart": '0 */60 * * *', // Restart every hour
      "log_file": './automation/logs/code-quality-auto-enhancer.log',
      "error_file": './automation/logs/code-quality-auto-enhancer-error.log',
      "out_file": './automation/logs/code-quality-auto-enhancer-out.log',
      "merge_logs": true,

      "cron_restart": '0 */15 * * *', // Restart every 15 minutes
      "log_file": './automation/logs/error-prevention-monitor.log',
      "error_file": './automation/logs/error-prevention-monitor-error.log',
      "out_file": './automation/logs/error-prevention-monitor-out.log',
      "merge_logs": true,

      "cron_restart": '0 */10 * * *', // Restart every 10 minutes
      "log_file": './automation/logs/error-analytics-dashboard.log',
      "error_file": './automation/logs/error-analytics-dashboard-error.log',
      "out_file": './automation/logs/error-analytics-dashboard-out.log',
      "merge_logs": true,

      "cron_restart": '0 */10 * * *', // Restart every 10 minutes
      "log_file": './automation/logs/intelligent-error-orchestrator.log',
      "error_file": './automation/logs/intelligent-error-orchestrator-error.log',
      "out_file": './automation/logs/intelligent-error-orchestrator-out.log',
      "merge_logs": true,

      "path": '/var/www/zion-tech-group',
      'pre-deploy-local': '',
      'post-deploy': 'npm install --legacy-peer-deps && pm2 reload ecosystem.error-automation.config.cjs --env production',
      'pre-setup': ''
    }
  }
};
