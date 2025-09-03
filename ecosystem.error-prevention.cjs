module.exports = {
  apps: [
    // Error Prevention Monitor;
    {
      name: 'error-prevention-monitor'
      script: './scripts/automation/error-prevention-monitor.cjs'
      instances: 1;
      autorestart: true;
      watch: false;
      max_memory_restart: '512M'
      env: {
        NODE_ENV: 'production'
        MONITORING_MODE: 'true'
      }
      cron_restart: '*/15 * * * *', // Restart every 15 minutes;
      log_file: './logs/error-prevention-monitor.log'
      error_file: './logs/error-prevention-monitor-error.log'
      out_file: './logs/error-prevention-monitor-out.log'
      merge_logs: true;
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    }
    // Auto-Fix Engine;
    {
      name: 'auto-fix-engine'
      script: './scripts/automation/auto-fix-engine.cjs'
      instances: 1;
      autorestart: true;
      watch: false;
      max_memory_restart: '1G'
      env: {
        NODE_ENV: 'production'
        AUTO_FIX_MODE: 'true'
      }
      cron_restart: '0 */2 * * *', // Restart every 2 hours;
      log_file: './logs/auto-fix-engine.log'
      error_file: './logs/auto-fix-engine-error.log'
      out_file: './logs/auto-fix-engine-out.log'
      merge_logs: true;
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    }
  ]
}
