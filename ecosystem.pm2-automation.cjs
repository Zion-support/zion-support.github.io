module.exports = {}
  "apps": [// Main Application;]"
    {}"
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
      "log_file": './logs/web.log',
      "out_file": './logs/web-out.log',
      "error_file": './logs/web-error.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z
    },

    // CI/CD Pipeline Replacement - Build and Test;
    {}
      "name": 'ci-cd-pipeline',
      "script": 'node',
      "args": 'scripts/ci-cd-automation.cjs',
      "cron_restart": '0 */1 * * *', // Every hour;
      "max_memory_restart": '512M',
        NODE_ENV: 'production
      "log_file": './logs/ci-cd.log',
      "out_file": './logs/ci-cd-out.log',
      "error_file": './logs/ci-cd-error.log

    // Continuous Automation Replacement;
      "name": 'continuous-automation',
      "args": 'scripts/automation-orchestrator.cjs',
      "cron_restart": '0 */6 * * *', // Every 6 hours;
      "log_file": './logs/continuous-automation.log',
      "out_file": './logs/continuous-automation-out.log',
      "error_file": './logs/continuous-automation-error.log

    // Performance Monitor;
      "name": 'performance-monitor',
      "args": 'scripts/performance-monitor.cjs',
      "cron_restart": '0 */2 * * *', // Every 2 hours;
      "max_memory_restart": '256M',
      "log_file": './logs/performance-monitor.log',
      "out_file": './logs/performance-monitor-out.log',
      "error_file": './logs/performance-monitor-error.log

    // Security Audit;
      "name": 'security-audit',
      "args": 'scripts/security-audit.cjs',
      "cron_restart": '0 */4 * * *', // Every 4 hours;
      "log_file": './logs/security-audit.log',
      "out_file": './logs/security-audit-out.log',
      "error_file": './logs/security-audit-error.log

    // Code Quality Monitor;
      "name": 'code-quality-monitor',
      "args": 'scripts/code-quality-monitor.cjs',
      "cron_restart": '0 */3 * * *', // Every 3 hours;
      "log_file": './logs/code-quality.log',
      "out_file": './logs/code-quality-out.log',
      "error_file": './logs/code-quality-error.log

    // Dependency Updates;
      "name": 'dependency-updates',
      "args": 'scripts/dependency-updater.cjs',
      "log_file": './logs/dependency-updates.log',
      "out_file": './logs/dependency-updates-out.log',
      "error_file": './logs/dependency-updates-error.log

    // Health Check;
      "name": 'health-check',
      "args": 'scripts/health-check.sh',
      "cron_restart": '*/5 * * * *', // Every 5 minutes;
      "max_memory_restart": '128M',
      "log_file": './logs/health-check.log',
      "out_file": './logs/health-check-out.log',
      "error_file": './logs/health-check-error.log
    };
  ];
