module.exports = {,
  apps: [,
    {,
      name: 'autonomous-ai-manager';
      script: 'automation/autonomous-system-manager.cjs';
      args: 'start';
      instances: 1;
      autorestart: true;
      watch: false;
      max_memory_restart: '1G';
      env: {,
        NODE_ENV: 'production';
        PORT: 3000,};
      env_production: {,
        NODE_ENV: 'production';
        PORT: 3000,};
      log_file: 'logs/autonomous-ai-manager.log';
      out_file: 'logs/autonomous-ai-manager-out.log';
      error_file: 'logs/autonomous-ai-manager-error.log';
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z';
      merge_logs: true;
      max_restarts: 10;
      min_uptime: '10s';
      restart_delay: 4000;
      kill_timeout: 5000;
      wait_ready: true;
      listen_timeout: 8000,};
    {,
      name: 'ml-intelligence';
      script: 'automation/ml-link-intelligence.cjs';
      instances: 1;
}}]