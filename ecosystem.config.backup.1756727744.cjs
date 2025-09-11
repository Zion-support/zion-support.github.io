module.exports = {
  apps: [;
    // Main Zion Website Application;
    {;
      name: 'zion-website',
      script: 'npm',
      args: 'run dev',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {;
        NODE_ENV: 'development',
        PORT: 3000;
},
      env_production: {;
        NODE_ENV: 'production',
        PORT: 3000;
},
      log_file: './logs/zion-website.log',
      out_file: './logs/zion-website-out.log',
      error_file: './logs/zion-website-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true;
},

    // Enhanced Error Monitor - Monitors and detects errors;
    {;
      name: 'error-monitor',
      script: './scripts/automation/error-monitor.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      restart_delay: 5000,
      max_restarts: 10,
      min_uptime: '10s',
      log_file: './logs/error-monitor.log',
      out_file: './logs/error-monitor-out.log',
      error_file: './logs/error-monitor-error.log',
      cron_restart: '0 */2 * * *' // Restart every 2 hours;
},

    // Syntax Fixer - Automatically fixes syntax errors;
    {;
      name: 'syntax-fixer',
      script: './scripts/automation/syntax-fixer.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      restart_delay: 10000,
      max_restarts: 5,
      min_uptime: '30s',
      log_file: './logs/syntax-fixer.log',
      out_file: './logs/syntax-fixer-out.log',
      error_file: './logs/syntax-fixer-error.log',
      cron_restart: '0 */6 * * *' // Restart every 6 hours;
},

    // Dependency Manager - Manages dependencies and security;
    {;
      name: 'dependency-manager',
      script: './scripts/automation/dependency-manager.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      restart_delay: 15000,
      max_restarts: 3,
      min_uptime: '60s',
      log_file: './logs/dependency-manager.log',
      out_file: './logs/dependency-manager-out.log',
      error_file: './logs/dependency-manager-error.log',
      cron_restart: '0 8 * * *' // Restart daily at 8 AM;
},

    // Build Monitor - Monitors build health and performance;
    {;
      name: 'build-monitor',
      script: './scripts/automation/build-monitor.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      restart_delay: 30000,
      max_restarts: 3,
      min_uptime: '120s',
      log_file: './logs/build-monitor.log',
      out_file: './logs/build-monitor-out.log',
      error_file: './logs/build-monitor-error.log',
      cron_restart: '0 */4 * * *' // Restart every 4 hours;
},

    // Health Checker - Performs health checks;
    {;
      name: 'health-checker',
      script: './scripts/health-checker.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '300M',
      env: {;
        NODE_ENV: 'production';
},
      error_file: './logs/health-checker-error.log',
      out_file: './logs/health-checker-out.log',
      log_file: './logs/health-checker-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '5s',
      restart_delay: 2000,
      cron_restart: '*/5 * * * *' // Run every 5 minutes;
},

    // Auto Fixer - Automatically fixes detected errors;
    {;
      name: 'auto-fixer',
      script: './scripts/auto-fixer.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {;
        NODE_ENV: 'production';
},
      error_file: './logs/auto-fixer-error.log',
      out_file: './logs/auto-fixer-out.log',
      log_file: './logs/auto-fixer-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '10s',
      restart_delay: 5000,
      cron_restart: '0 */2 * * *' // Run every 2 hours;
},

    // Log Cleaner - Manages log files and cleanup;
    {;
      name: 'log-cleaner',
      script: './scripts/log-cleaner.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '200M',
      env: {;
        NODE_ENV: 'production';
},
      cron_restart: '0 2 * * *', // Run daily at 2 AM;
      log_file: './logs/log-cleaner.log',
      out_file: './logs/log-cleaner-out.log',
      error_file: './logs/log-cleaner-error.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '5s',
      restart_delay: 2000;
},

    // Performance Monitor - Monitors application performance;
    {;
      name: 'performance-monitor',
      script: './scripts/performance-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {;
        NODE_ENV: 'production';
},
      cron_restart: '0 */4 * * *', // Restart every 4 hours;
      log_file: './logs/performance-monitor.log',
      out_file: './logs/performance-monitor-out.log',
      error_file: './logs/performance-monitor-error.log';
},

    // Link Integrity Checker - Ensures link integrity;
    {;
      name: 'link-integrity',
      script: './scripts/link-integrity-checker.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {;
        NODE_ENV: 'production';
},
      cron_restart: '0 6 * * *', // Restart daily at 6 AM;
      log_file: './logs/link-integrity.log',
      out_file: './logs/link-integrity-out.log',
      error_file: './logs/link-integrity-error.log';
},

    // Sitemap Generator - Generates and updates sitemap;
    {;
      name: 'sitemap-generator',
      script: './scripts/generate-sitemap.mjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: {;
        NODE_ENV: 'production';
},
      cron_restart: '0 8 * * *', // Restart daily at 8 AM;
      log_file: './logs/sitemap-generator.log',
      out_file: './logs/sitemap-generator-out.log',
      error_file: './logs/sitemap-generator-error.log';
}
  ],

  deploy: {;
    production: {;
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/var/www/zion.app',
      'pre-deploy-local': '',
      'post-deploy': 'npm install --legacy-peer-deps && npm run build && pm2 reload ecosystem.config.cjs --env production',
      'pre-setup': 'mkdir -p /var/www/zion.app/logs';
}