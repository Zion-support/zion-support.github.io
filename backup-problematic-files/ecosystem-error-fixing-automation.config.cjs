module.exports = {}
  "apps": [// Main application;]
    {}
      name: 'bolt-app',
      "script": 'npm',
      "args": 'start',
      "cwd": './',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'development',
        "PORT": 3000;
      },
      "env_production": {}
        NODE_ENV: 'production',
        "NODE_OPTIONS": '--max-old-space-size=6144 --openssl-legacy-provider'
      };
    },
    // Continuous Error Fixer - runs every 5 minutes (HIGHEST PRIORITY);
    {}
      "name": 'continuous-error-fixer',
      "script": './scripts/automation/error-fixer-automation.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {}
        NODE_ENV: 'production',
        "AUTOMATION_INTERVAL": '300000' // 5 minutes;
      },
      "cron_restart": '*/5 * * * *', // Every 5 minutes;
      "log_file": './logs/continuous-error-fixer.log',
      "error_file": './logs/continuous-error-fixer-error.log',
      "out_file": './logs/continuous-error-fixer-out.log'
    },
    // TypeScript Error Monitor - runs every 10 minutes;
    {}
      "name": 'typescript-error-monitor',
      "script": './scripts/automation/typescript-error-monitor.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {}
        NODE_ENV: 'production',
        "AUTOMATION_INTERVAL": '600000' // 10 minutes;
      },
      "cron_restart": '*/10 * * * *', // Every 10 minutes;
      "log_file": './logs/typescript-error-monitor.log',
      "error_file": './logs/typescript-error-monitor-error.log',
      "out_file": './logs/typescript-error-monitor-out.log'
    },
    // Import/Export Fixer - runs every 15 minutes;
    {}
      "name": 'import-export-fixer',
      "script": './scripts/automation/import-export-fixer.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {}
        NODE_ENV: 'production',
        "AUTOMATION_INTERVAL": '900000' // 15 minutes;
      },
      "cron_restart": '*/15 * * * *', // Every 15 minutes;
      "log_file": './logs/import-export-fixer.log',
      "error_file": './logs/import-export-fixer-error.log',
      "out_file": './logs/import-export-fixer-out.log'
    },
    // Build Error Detector - runs every 20 minutes;
    {}
      "name": 'build-error-detector',
      "script": './scripts/automation/build-error-detector.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'production',
        "AUTOMATION_INTERVAL": '1200000' // 20 minutes;
      },
      "cron_restart": '*/20 * * * *', // Every 20 minutes;
      "log_file": './logs/build-error-detector.log',
      "error_file": './logs/build-error-detector-error.log',
      "out_file": './logs/build-error-detector-out.log'
    },
    // ESLint Auto-Fixer - runs every 30 minutes;
    {}
      "name": 'eslint-auto-fixer',
      "script": './scripts/automation/eslint-auto-fixer.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {}
        NODE_ENV: 'production',
        "AUTOMATION_INTERVAL": '1800000' // 30 minutes;
      },
      "cron_restart": '*/30 * * * *', // Every 30 minutes;
      "log_file": './logs/eslint-auto-fixer.log',
      "error_file": './logs/eslint-auto-fixer-error.log',
      "out_file": './logs/eslint-auto-fixer-out.log'
    },
    // Code Quality Monitor - runs every hour;
    {}
      "name": 'code-quality-monitor',
      "script": './scripts/automation/code-quality-monitor.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {}
        NODE_ENV: 'production',
        "AUTOMATION_INTERVAL": '3600000' // 1 hour;
      },
      "cron_restart": '0 * * * *', // Every hour;
      "log_file": './logs/code-quality-monitor.log',
      "error_file": './logs/code-quality-monitor-error.log',
      "out_file": './logs/code-quality-monitor-out.log'
    },
    // Dependency Health Checker - runs every 2 hours;
    {}
      "name": 'dependency-health-checker',
      "script": './scripts/automation/dependency-health-checker.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {}
        NODE_ENV: 'production',
        "AUTOMATION_INTERVAL": '7200000' // 2 hours;
      },
      "cron_restart": '0 */2 * * *', // Every 2 hours;
      "log_file": './logs/dependency-health-checker.log',
      "error_file": './logs/dependency-health-checker-error.log',
      "out_file": './logs/dependency-health-checker-out.log'
    },
    // Performance Error Detector - runs every 4 hours;
    {}
      "name": 'performance-error-detector',
      "script": './scripts/automation/performance-error-detector.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'production',
        "AUTOMATION_INTERVAL": '14400000' // 4 hours;
      },
      "cron_restart": '0 */4 * * *', // Every 4 hours;
      "log_file": './logs/performance-error-detector.log',
      "error_file": './logs/performance-error-detector-error.log',
      "out_file": './logs/performance-error-detector-out.log'
    },
    // Security Vulnerability Scanner - runs every 6 hours;
    {}
      "name": 'security-vulnerability-scanner',
      "script": './scripts/automation/security-vulnerability-scanner.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {}
        NODE_ENV: 'production',
        "AUTOMATION_INTERVAL": '21600000' // 6 hours;
      },
      "cron_restart": '0 */6 * * *', // Every 6 hours;
      "log_file": './logs/security-vulnerability-scanner.log',
      "error_file": './logs/security-vulnerability-scanner-error.log',
      "out_file": './logs/security-vulnerability-scanner-out.log'
    },
    // Master Error Orchestrator - coordinates all error fixers;
    {}
      "name": 'master-error-orchestrator',
      "script": './scripts/automation/master-error-orchestrator.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'production',
        "AUTOMATION_INTERVAL": '300000' // 5 minutes;
      },
      "cron_restart": '*/5 * * * *', // Every 5 minutes;
      "log_file": './logs/master-error-orchestrator.log',
      "error_file": './logs/master-error-orchestrator-error.log',
      "out_file": './logs/master-error-orchestrator-out.log'
    };
  ],
  "deploy": {}
    production: {}
      user: 'root',
      "host": 'localhost',
      "ref": 'origin/main',
      "repo": 'git@github.com:your-username/bolt.new.zion.app.git',
      "path": '/workspace/production',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem-error-fixing-automation.config.cjs --env production',
      'pre-setup': ''
    };
  };
};
