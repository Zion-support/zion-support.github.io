module.exports = {}
  "apps": [// High Priority Error Prevention (runs every 5 minutes);]
    {}
      name: 'error-prevention-monitor',
      "script": './scripts/automation/pm2-error-prevention-automation.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "min_uptime": '60s',
      "max_restarts": 10,
      "env": {}
        NODE_ENV: 'production',
        "AUTOMATION_INTERVAL": '300000', // 5 minutes;
        "DEBUG": 'false'
      },
      "log_file": './automation/logs/error-prevention.log',
      "error_file": './automation/logs/error-prevention-error.log',
      "out_file": './automation/logs/error-prevention-out.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z',
      "merge_logs": true;
    },
    // Intelligent Error Fixer (runs every 3 minutes);
    {}
      "name": 'intelligent-error-fixer',
      "script": './scripts/automation/intelligent-error-fixer.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "min_uptime": '60s',
      "max_restarts": 10,
      "env": {}
        NODE_ENV: 'production',
        "CHECK_INTERVAL": '180000', // 3 minutes;
        "MAX_AUTO_FIXES": '50',
        "BACKUP_ENABLED": 'true'
      },
      "log_file": './automation/logs/intelligent-error-fixer.log',
      "error_file": './automation/logs/intelligent-error-fixer-error.log',
      "out_file": './automation/logs/intelligent-error-fixer-out.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z',
      "merge_logs": true;
    },
    // Syntax Error Monitor (runs every 2 minutes);
    {}
      "name": 'syntax-error-monitor',
      "script": './scripts/automation-wrapper.js',
      "args": 'fix',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "min_uptime": '30s',
      "max_restarts": 15,
      "env": {}
        NODE_ENV: 'production',
        "PM2_PROCESS": 'syntax-error-monitor'
      },
      "cron_restart": '*/2 * * * *', // Every 2 minutes;
      "log_file": './automation/logs/syntax-error-monitor.log',
      "error_file": './automation/logs/syntax-error-monitor-error.log',
      "out_file": './automation/logs/syntax-error-monitor-out.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    },
    // Build Error Detector (runs every 10 minutes);
    {}
      "name": 'build-error-detector',
      "script": './scripts/automation-wrapper.js',
      "args": 'build-test',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '2G',
      "min_uptime": '120s',
      "max_restarts": 5,
      "env": {}
        NODE_ENV: 'production',
        "PM2_PROCESS": 'build-error-detector'
      },
      "cron_restart": '*/10 * * * *', // Every 10 minutes;
      "log_file": './automation/logs/build-error-detector.log',
      "error_file": './automation/logs/build-error-detector-error.log',
      "out_file": './automation/logs/build-error-detector-out.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    },
    // Security Vulnerability Fixer (runs every 30 minutes);
    {}
      "name": 'security-fixer',
      "script": './scripts/automation-wrapper.js',
      "args": 'security',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "min_uptime": '60s',
      "max_restarts": 8,
      "env": {}
        NODE_ENV: 'production',
        "PM2_PROCESS": 'security-fixer'
      },
      "cron_restart": '*/30 * * * *', // Every 30 minutes;
      "log_file": './automation/logs/security-fixer.log',
      "error_file": './automation/logs/security-fixer-error.log',
      "out_file": './automation/logs/security-fixer-out.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    },
    // Dependency Health Monitor (runs every hour);
    {}
      "name": 'dependency-health-monitor',
      "script": './scripts/automation-wrapper.js',
      "args": 'deps',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "min_uptime": '120s',
      "max_restarts": 3,
      "env": {}
        NODE_ENV: 'production',
        "PM2_PROCESS": 'dependency-health-monitor'
      },
      "cron_restart": '0 * * * *', // Every hour;
      "log_file": './automation/logs/dependency-health.log',
      "error_file": './automation/logs/dependency-health-error.log',
      "out_file": './automation/logs/dependency-health-out.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    },
    // Quality Assurance Monitor (runs every 15 minutes);
    {}
      "name": 'quality-monitor',
      "script": './scripts/automation-wrapper.js',
      "args": 'quality',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "min_uptime": '60s',
      "max_restarts": 10,
      "env": {}
        NODE_ENV: 'production',
        "PM2_PROCESS": 'quality-monitor'
      },
      "cron_restart": '*/15 * * * *', // Every 15 minutes;
      "log_file": './automation/logs/quality-monitor.log',
      "error_file": './automation/logs/quality-monitor-error.log',
      "out_file": './automation/logs/quality-monitor-out.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    },
    // Performance Monitor (runs every 20 minutes);
    {}
      "name": 'performance-monitor',
      "script": './scripts/automation-wrapper.js',
      "args": 'performance',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "min_uptime": '60s',
      "max_restarts": 8,
      "env": {}
        NODE_ENV: 'production',
        "PM2_PROCESS": 'performance-monitor'
      },
      "cron_restart": '*/20 * * * *', // Every 20 minutes;
      "log_file": './automation/logs/performance-monitor.log',
      "error_file": './automation/logs/performance-monitor-error.log',
      "out_file": './automation/logs/performance-monitor-out.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    },
    // Link Integrity Checker (runs every 4 hours);
    {}
      "name": 'link-integrity-checker',
      "script": './scripts/automation-wrapper.js',
      "args": 'check-links',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "min_uptime": '120s',
      "max_restarts": 3,
      "env": {}
        NODE_ENV: 'production',
        "PM2_PROCESS": 'link-integrity-checker'
      },
      "cron_restart": '0 */4 * * *', // Every 4 hours;
      "log_file": './automation/logs/link-integrity.log',
      "error_file": './automation/logs/link-integrity-error.log',
      "out_file": './automation/logs/link-integrity-out.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    },
    // Code Improvement Monitor (runs every 6 hours);
    {}
      "name": 'code-improvement-monitor',
      "script": './scripts/automation-wrapper.js',
      "args": 'improve',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "min_uptime": '120s',
      "max_restarts": 3,
      "env": {}
        NODE_ENV: 'production',
        "PM2_PROCESS": 'code-improvement-monitor'
      },
      "cron_restart": '0 */6 * * *', // Every 6 hours;
      "log_file": './automation/logs/code-improvement.log',
      "error_file": './automation/logs/code-improvement-error.log',
      "out_file": './automation/logs/code-improvement-out.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    };
  ],
  "deploy": {}
    production: {}
      user: 'node',
      "host": 'localhost',
      "ref": 'origin/main',
      "repo": 'git@github.com:username/repo.git',
      "path": '/var/www/production',
      'post-deploy': 'npm install --legacy-peer-deps && npm run build && pm2 reload ecosystem-enhanced-error-fixing.config.cjs --env production',
      'post-setup': 'npm install --legacy-peer-deps && npm run build'
    };
  };
};
