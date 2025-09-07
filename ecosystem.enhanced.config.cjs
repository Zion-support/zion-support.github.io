module.exports = {}
  "apps": [{}]""
      name: 'ziontechgroup-web',
      "script": 'npm',
      "args": 'start',
      "cwd": '/workspace',
      "instances": 1,""
      "autorestart": true,""
      "watch": false,""
      "max_memory_restart": '1G',
      "env": {}""
        NODE_ENV: 'production',
        "PORT": 3000;"
      },"
      "env_development": {}""
        NODE_ENV: 'development',
      "log_file": './logs/web.log',
      "out_file": './logs/web-out.log',
      "error_file": './logs/web-error.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z
    },
    {}
      "name": 'health-checker',
      "script": 'node',
      "args": 'automation/health-check.cjs',
      "cron_restart": '*/5 * * * *', // Restart every 5 minutes;
        NODE_ENV: 'production
      "log_file": './logs/health-check.log',
      "out_file": './logs/health-check-out.log',
      "error_file": './logs/health-check-error.log',
      "name": 'security-scanner',
      "args": 'automation/security-scanner.cjs',
      "cron_restart": '0 */6 * * *', // Restart every 6 hours;
      "log_file": './logs/security-scanner.log',
      "out_file": './logs/security-scanner-out.log',
      "error_file": './logs/security-scanner-error.log',
      "name": 'performance-monitor',
      "args": 'scripts/performance-monitor.cjs',
      "cron_restart": '0 */2 * * *', // Restart every 2 hours;
      "log_file": './logs/performance-monitor.log',
      "out_file": './logs/performance-monitor-out.log',
      "error_file": './logs/performance-monitor-error.log',
      "name": 'error-prevention',
      "args": 'automation/error-prevention-system.cjs',
      "cron_restart": '*/10 * * * *', // Restart every 10 minutes;
      "log_file": './logs/error-prevention.log',
      "out_file": './logs/error-prevention-out.log',
      "error_file": './logs/error-prevention-error.log',
      "name": 'dependency-manager',
      "args": 'automation/dependency-manager.cjs',
      "cron_restart": '0 2 * * *', // Restart daily at 2 AM;
      "log_file": './logs/dependency-manager.log',
      "out_file": './logs/dependency-manager-out.log',
      "error_file": './logs/dependency-manager-error.log',
      "name": 'code-quality-monitor',
      "args": 'automation/code-quality-monitor.cjs',
      "cron_restart": '0 */4 * * *', // Restart every 4 hours;
      "log_file": './logs/code-quality.log',
      "out_file": './logs/code-quality-out.log',
      "error_file": './logs/code-quality-error.log',
    };
  ];
