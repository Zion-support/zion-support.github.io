<<<<<<< HEAD
module.exports = { apps: [/ Main Application { name: "ziontechgroup-web","" script: "npm","" args: "start","" cwd: "/workspace","" instances: "max","" exec_mode: "cluster"," autorestart: true," watch: false,"" max_memory_restart: "1G","" min_uptime: "10s"," max_restarts: 10," env: {" NODE_ENV: "production"," PORT: 3000,"" PM2_SERVE_PATH: "/workspace"," PM2_SERVE_PORT: 3000,"" PM2_SERVE_SPA: "true" }," env_development: {" NODE_ENV: "development"," PORT: 3000 },"" log_file: "./logs/web.log","" out_file: "./logs/web-out.log","" error_file: "./logs/web-error.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z"," merge_logs: true," time: true }, / AI-Powered Health Monitor {"" name: "ai-health-monitor","" script: "scripts/intelligent/ai-health-monitor.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "*/2 * * * *", / Every 2 minutes"" max_memory_restart: "500M"," env: {" NODE_ENV: "production"," MONITOR_INTERVAL: 30000," ALERT_THRESHOLD: 0.8 },"" log_file: "./logs/ai-health-monitor.log","" out_file: "./logs/ai-health-monitor-out.log","" error_file: "./logs/ai-health-monitor-error.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z" }, / Intelligent Git Automation {"" name: "git-automation","" script: "scripts/intelligent/git-automation.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "*/10 * * * *", / Every 10 minutes"" max_memory_restart: "300M"," env: {" NODE_ENV: "production","" AUTO_MERGE_ENABLED: "true","" CONFLICT_RESOLUTION: "intelligent","" BRANCH_PROTECTION: "main" },"" log_file: "./logs/git-automation.log","" out_file: "./logs/git-automation-out.log","" error_file: "./logs/git-automation-error.log" }, / Performance Optimizer {"" name: "performance-optimizer","" script: "scripts/intelligent/performance-optimizer.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "0 */1 * * *", / Every hour"" max_memory_restart: "400M"," env: {" NODE_ENV: "production"," OPTIMIZATION_INTERVAL: 3600000," METRICS_THRESHOLD: 0.7 },"" log_file: "./logs/performance-optimizer.log","" out_file: "./logs/performance-optimizer-out.log","" error_file: "./logs/performance-optimizer-error.log" }, / Security Automation {"" name: "security-automation","" script: "scripts/intelligent/security-automation.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "0 */4 * * *", / Every 4 hours"" max_memory_restart: "500M"," env: {" NODE_ENV: "production"," SCAN_INTERVAL: 14400000,"" AUTO_PATCH: "true","" VULNERABILITY_THRESHOLD: "medium" },"" log_file: "./logs/security-automation.log","" out_file: "./logs/security-automation-out.log","" error_file: "./logs/security-automation-error.log" }, / Code Quality Monitor {"" name: "code-quality-monitor","" script: "scripts/intelligent/code-quality-monitor.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "0 */2 * * *", / Every 2 hours"" max_memory_restart: "400M"," env: {" NODE_ENV: "production"," QUALITY_CHECK_INTERVAL: 7200000,"" AUTO_FIX_ENABLED: "true"," QUALITY_THRESHOLD: 0.8 },"" log_file: "./logs/code-quality-monitor.log","" out_file: "./logs/code-quality-monitor-out.log","" error_file: "./logs/code-quality-monitor-error.log" }, / Deployment Automation {"" name: "deployment-automation","" script: "scripts/intelligent/deployment-automation.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "600M"," env: {" NODE_ENV: "production","" AUTO_DEPLOY_ENABLED: "true","" ROLLBACK_ENABLED: "true"," HEALTH_CHECK_TIMEOUT: 300000 },"" log_file: "./logs/deployment-automation.log","" out_file: "./logs/deployment-automation-out.log","" error_file: "./logs/deployment-automation-error.log" }, / Resource Monitor {"" name: "resource-monitor","" script: "scripts/intelligent/resource-monitor.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "*/5 * * * *", / Every 5 minutes"" max_memory_restart: "200M"," env: {" NODE_ENV: "production"," MONITOR_INTERVAL: 300000," ALERT_THRESHOLD: 0.85 },"" log_file: "./logs/resource-monitor.log","" out_file: "./logs/resource-monitor-out.log","" error_file: "./logs/resource-monitor-error.log" }, / Error Recovery System {"" name: "error-recovery","" script: "scripts/intelligent/error-recovery.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "*/1 * * * *", / Every minute"" max_memory_restart: "300M"," env: {" NODE_ENV: "production"," RECOVERY_INTERVAL: 60000,"" AUTO_FIX_ENABLED: "true"," MAX_RETRY_ATTEMPTS: 3 },"" log_file: "./logs/error-recovery.log","" out_file: "./logs/error-recovery-out.log","" error_file: "./logs/error-recovery-error.log" }, / Backup Automation {"" name: "backup-automation","" script: "scripts/intelligent/backup-automation.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "0 2 * * *", / Daily at 2 AM"" max_memory_restart: "400M"," env: {" NODE_ENV: "production"," BACKUP_INTERVAL: 86400000," RETENTION_DAYS: 30,"" COMPRESSION_ENABLED: "true" },"" log_file: "./logs/backup-automation.log","" out_file: "./logs/backup-automation-out.log","" error_file: "./logs/backup-automation-error.log" } ]," deploy: { production: {" user: "deploy","" host: ["production-server"],"" ref: "origin/main","" repo: "git@github.com:your-org/ziontechgroup.com.git","" path: "/var/www/ziontechgroup.com"," "pre-deploy-local": ""," "post-deploy": "npm install && npm run build && pm2 reload ecosystem.intelligent.cjs --env production"," "pre-setup": "" }," staging: {" user: "deploy","" host: ["staging-server"],"" ref: "origin/develop","" repo: "git@github.com:your-org/ziontechgroup.com.git","" path: "/var/www/ziontechgroup-staging.com"," "post-deploy": "npm install && npm run build && pm2 reload ecosystem.intelligent.cjs --env staging" } }};'"'"
=======
module.exports = {}
  "apps": [// Main Application;]
    {}
      name: 'ziontechgroup-web',
      "script": 'npm',
      "args": 'start',
      "cwd": '/workspace',
      "instances": 'max',
      "exec_mode": 'cluster',
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "min_uptime": '10s',
      "max_restarts": 10,
      "env": {}
        NODE_ENV: 'production',
        "PORT": 3000,
        "PM2_SERVE_PATH": '/workspace',
        "PM2_SERVE_PORT": 3000,
        "PM2_SERVE_SPA": 'true'
      },
      "env_development": {}
        NODE_ENV: 'development',
        "PORT": 3000;
      },
      "log_file": './logs/web.log',
      "out_file": './logs/web-out.log',
      "error_file": './logs/web-error.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z',
      "merge_logs": true,
      "time": true;
    },

    // AI-Powered Health Monitor;
    {}
      "name": 'ai-health-monitor',
      "script": 'scripts/intelligent/ai-health-monitor.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/2 * * * *', // Every 2 minutes;
      "max_memory_restart": '500M',
      "env": {}
        NODE_ENV: 'production',
        "MONITOR_INTERVAL": 30000,
        "ALERT_THRESHOLD": 0.8;
      },
      "log_file": './logs/ai-health-monitor.log',
      "out_file": './logs/ai-health-monitor-out.log',
      "error_file": './logs/ai-health-monitor-error.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Intelligent Git Automation;
    {}
      "name": 'git-automation',
      "script": 'scripts/intelligent/git-automation.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/10 * * * *', // Every 10 minutes;
      "max_memory_restart": '300M',
      "env": {}
        NODE_ENV: 'production',
        "AUTO_MERGE_ENABLED": 'true',
        "CONFLICT_RESOLUTION": 'intelligent',
        "BRANCH_PROTECTION": 'main'
      },
      "log_file": './logs/git-automation.log',
      "out_file": './logs/git-automation-out.log',
      "error_file": './logs/git-automation-error.log'
    },

    // Performance Optimizer;
    {}
      "name": 'performance-optimizer',
      "script": 'scripts/intelligent/performance-optimizer.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */1 * * *', // Every hour;
      "max_memory_restart": '400M',
      "env": {}
        NODE_ENV: 'production',
        "OPTIMIZATION_INTERVAL": 3600000,
        "METRICS_THRESHOLD": 0.7;
      },
      "log_file": './logs/performance-optimizer.log',
      "out_file": './logs/performance-optimizer-out.log',
      "error_file": './logs/performance-optimizer-error.log'
    },

    // Security Automation;
    {}
      "name": 'security-automation',
      "script": 'scripts/intelligent/security-automation.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */4 * * *', // Every 4 hours;
      "max_memory_restart": '500M',
      "env": {}
        NODE_ENV: 'production',
        "SCAN_INTERVAL": 14400000,
        "AUTO_PATCH": 'true',
        "VULNERABILITY_THRESHOLD": 'medium'
      },
      "log_file": './logs/security-automation.log',
      "out_file": './logs/security-automation-out.log',
      "error_file": './logs/security-automation-error.log'
    },

    // Code Quality Monitor;
    {}
      "name": 'code-quality-monitor',
      "script": 'scripts/intelligent/code-quality-monitor.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */2 * * *', // Every 2 hours;
      "max_memory_restart": '400M',
      "env": {}
        NODE_ENV: 'production',
        "QUALITY_CHECK_INTERVAL": 7200000,
        "AUTO_FIX_ENABLED": 'true',
        "QUALITY_THRESHOLD": 0.8;
      },
      "log_file": './logs/code-quality-monitor.log',
      "out_file": './logs/code-quality-monitor-out.log',
      "error_file": './logs/code-quality-monitor-error.log'
    },

    // Deployment Automation;
    {}
      "name": 'deployment-automation',
      "script": 'scripts/intelligent/deployment-automation.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '600M',
      "env": {}
        NODE_ENV: 'production',
        "AUTO_DEPLOY_ENABLED": 'true',
        "ROLLBACK_ENABLED": 'true',
        "HEALTH_CHECK_TIMEOUT": 300000;
      },
      "log_file": './logs/deployment-automation.log',
      "out_file": './logs/deployment-automation-out.log',
      "error_file": './logs/deployment-automation-error.log'
    },

    // Resource Monitor;
    {}
      "name": 'resource-monitor',
      "script": 'scripts/intelligent/resource-monitor.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/5 * * * *', // Every 5 minutes;
      "max_memory_restart": '200M',
      "env": {}
        NODE_ENV: 'production',
        "MONITOR_INTERVAL": 300000,
        "ALERT_THRESHOLD": 0.85;
      },
      "log_file": './logs/resource-monitor.log',
      "out_file": './logs/resource-monitor-out.log',
      "error_file": './logs/resource-monitor-error.log'
    },

    // Error Recovery System;
    {}
      "name": 'error-recovery',
      "script": 'scripts/intelligent/error-recovery.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/1 * * * *', // Every minute;
      "max_memory_restart": '300M',
      "env": {}
        NODE_ENV: 'production',
        "RECOVERY_INTERVAL": 60000,
        "AUTO_FIX_ENABLED": 'true',
        "MAX_RETRY_ATTEMPTS": 3;
      },
      "log_file": './logs/error-recovery.log',
      "out_file": './logs/error-recovery-out.log',
      "error_file": './logs/error-recovery-error.log'
    },

    // Backup Automation;
    {}
      "name": 'backup-automation',
      "script": 'scripts/intelligent/backup-automation.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 2 * * *', // Daily at 2 AM;
      "max_memory_restart": '400M',
      "env": {}
        NODE_ENV: 'production',
        "BACKUP_INTERVAL": 86400000,
        "RETENTION_DAYS": 30,
        "COMPRESSION_ENABLED": 'true'
      },
      "log_file": './logs/backup-automation.log',
      "out_file": './logs/backup-automation-out.log',
      "error_file": './logs/backup-automation-error.log'
    };
  ],

  "deploy": {}
    production: {}
      user: 'deploy',
      "host": ['production-server'],
      "ref": 'origin/main',
      "repo": 'git@github.com:your-org/ziontechgroup.com.git',
      "path": '/var/www/ziontechgroup.com',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.intelligent.cjs --env production',
      'pre-setup': ''
    },
    "staging": {}
      user: 'deploy',
      "host": ['staging-server'],
      "ref": 'origin/develop',
      "repo": 'git@github.com:your-org/ziontechgroup.com.git',
      "path": '/var/www/ziontechgroup-staging.com',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.intelligent.cjs --env staging'
    };
  };
};
>>>>>>> main
