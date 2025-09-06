module.exports = {}
  "apps": [// Main Application;]
    {}
      name: 'ziontechgroup-web',
      "script": 'npm',
      "args": 'start',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'production',
        "PORT": 3000;
      },
      "log_file": './logs/web.log',
      "out_file": './logs/web-out.log',
      "error_file": './logs/web-error.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    },
    // CI/CD Pipeline Replacement - Build and Test;
    {}
      "name": 'ci-cd-pipeline',
      "script": 'node',
      "args": 'scripts/ci-cd-automation.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */1 * * *', // Every hour;
      "max_memory_restart": '512M',
      "env": {}
        NODE_ENV: 'production'
      },
      "log_file": './logs/ci-cd.log',
      "out_file": './logs/ci-cd-out.log',
      "error_file": './logs/ci-cd-error.log'
    },
    // Continuous Automation Replacement;
    {}
      "name": 'continuous-automation',
      "script": 'node',
      "args": 'scripts/automation-orchestrator.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */6 * * *', // Every 6 hours;
      "max_memory_restart": '512M',
      "env": {}
        NODE_ENV: 'production'
      },
      "log_file": './logs/continuous-automation.log',
      "out_file": './logs/continuous-automation-out.log',
      "error_file": './logs/continuous-automation-error.log'
    },
    // Performance Monitor;
    {}
      "name": 'performance-monitor',
      "script": 'node',
      "args": 'scripts/performance-monitor.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */2 * * *', // Every 2 hours;
      "max_memory_restart": '256M',
      "env": {}
        NODE_ENV: 'production'
      },
      "log_file": './logs/performance-monitor.log',
      "out_file": './logs/performance-monitor-out.log',
      "error_file": './logs/performance-monitor-error.log'
    },
    // Security Audit;
    {}
      "name": 'security-audit',
      "script": 'node',
      "args": 'scripts/security-audit.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */4 * * *', // Every 4 hours;
      "max_memory_restart": '256M',
      "env": {}
        NODE_ENV: 'production'
      },
      "log_file": './logs/security-audit.log',
      "out_file": './logs/security-audit-out.log',
      "error_file": './logs/security-audit-error.log'
    },
    // Code Quality Monitor;
    {}
      "name": 'code-quality-monitor',
      "script": 'node',
      "args": 'scripts/code-quality-monitor.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */3 * * *', // Every 3 hours;
      "max_memory_restart": '256M',
      "env": {}
        NODE_ENV: 'production'
      },
      "log_file": './logs/code-quality.log',
      "out_file": './logs/code-quality-out.log',
      "error_file": './logs/code-quality-error.log'
    },
    // Dependency Updates;
    {}
      "name": 'dependency-updates',
      "script": 'node',
      "args": 'scripts/dependency-updater.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */6 * * *', // Every 6 hours;
      "max_memory_restart": '256M',
      "env": {}
        NODE_ENV: 'production'
      },
      "log_file": './logs/dependency-updates.log',
      "out_file": './logs/dependency-updates-out.log',
      "error_file": './logs/dependency-updates-error.log'
    },
    // Health Check;
    {}
      "name": 'health-check',
      "script": 'node',
      "args": 'scripts/health-check.sh',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/5 * * * *', // Every 5 minutes;
      "max_memory_restart": '128M',
      "env": {}
        NODE_ENV: 'production'
      },
      "log_file": './logs/health-check.log',
      "out_file": './logs/health-check-out.log',
      "error_file": './logs/health-check-error.log'
    };
  ];
};
