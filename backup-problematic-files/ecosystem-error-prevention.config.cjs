module.exports = {}
  "apps": [// Intelligent Error Fixer - Runs every 30 minutes;]
    {}
      name: 'intelligent-error-fixer',
      "script": 'automation/intelligent-error-fixer.js',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "cron_restart": '*/30 * * * *', // Every 30 minutes;
      "env": {}
        NODE_ENV: 'production',
        "PM2_PROCESS": 'intelligent-error-fixer'
      },
      "log_file": 'automation/logs/intelligent-error-fixer.log',
      "out_file": 'automation/logs/intelligent-error-fixer-out.log',
      "error_file": 'automation/logs/intelligent-error-fixer-error.log'
    },
    // Continuous Build Monitor - Runs every 5 minutes;
    {}
      "name": 'build-monitor',
      "script": 'automation/build-monitor.js',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "cron_restart": '*/5 * * * *', // Every 5 minutes;
      "env": {}
        NODE_ENV: 'production',
        "PM2_PROCESS": 'build-monitor'
      },
      "log_file": 'automation/logs/build-monitor.log',
      "out_file": 'automation/logs/build-monitor-out.log',
      "error_file": 'automation/logs/build-monitor-error.log'
    },
    // Dependency Health Checker - Runs every hour;
    {}
      "name": 'dependency-health-checker',
      "script": 'automation/dependency-health-checker.js',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "cron_restart": '0 * * * *', // Every hour;
      "env": {}
        NODE_ENV: 'production',
        "PM2_PROCESS": 'dependency-health-checker'
      },
      "log_file": 'automation/logs/dependency-health-checker.log',
      "out_file": 'automation/logs/dependency-health-checker-out.log',
      "error_file": 'automation/logs/dependency-health-checker-error.log'
    },
    // Code Quality Monitor - Runs every 2 hours;
    {}
      "name": 'code-quality-monitor',
      "script": 'automation/code-quality-monitor.js',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "cron_restart": '0 */2 * * *', // Every 2 hours;
      "env": {}
        NODE_ENV: 'production',
        "PM2_PROCESS": 'code-quality-monitor'
      },
      "log_file": 'automation/logs/code-quality-monitor.log',
      "out_file": 'automation/logs/code-quality-monitor-out.log',
      "error_file": 'automation/logs/code-quality-monitor-error.log'
    },
    // File Watcher for Real-time Error Detection;
    {}
      "name": 'file-watcher',
      "script": 'automation/file-watcher.js',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '256M',
      "env": {}
        NODE_ENV: 'production',
        "PM2_PROCESS": 'file-watcher'
      },
      "log_file": 'automation/logs/file-watcher.log',
      "out_file": 'automation/logs/file-watcher-out.log',
      "error_file": 'automation/logs/file-watcher-error.log'
    },
    // Error Report Aggregator - Runs every 6 hours;
    {}
      "name": 'error-report-aggregator',
      "script": 'automation/error-report-aggregator.js',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "cron_restart": '0 */6 * * *', // Every 6 hours;
      "env": {}
        NODE_ENV: 'production',
        "PM2_PROCESS": 'error-report-aggregator'
      },
      "log_file": 'automation/logs/error-report-aggregator.log',
      "out_file": 'automation/logs/error-report-aggregator-out.log',
      "error_file": 'automation/logs/error-report-aggregator-error.log'
    };
  ],
  "deploy": {}
    production: {}
      user: 'node',
      "host": 'localhost',
      "ref": 'origin/main',
      "repo": 'git@github.com:zion-tech-group/main.git',
      "path": '/var/www/production',
      'post-deploy': 'yarn install && pm2 reload ecosystem-error-prevention.config.cjs --env production'
    };
  };
};
