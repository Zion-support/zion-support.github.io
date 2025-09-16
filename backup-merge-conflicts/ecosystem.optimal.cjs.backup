<<<<<<< HEAD
module.exports = { apps: [/ Main Application { name: "ziontechgroup-web","" script: "npm","" args: "start","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "production"," PORT: 3000 }," env_development: {" NODE_ENV: "development"," PORT: 3000,"" DEBUG: "true" },"" log_file: "./logs/pm2/web.log","" out_file: "./logs/pm2/web-out.log","" error_file: "./logs/pm2/web-error.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z"," merge_logs: true," time: true }, / AI-Powered Code Analysis & Auto-Fixing {"" name: "ai-code-analyzer","" script: "node","" args: "scripts/automation/ai-intelligent-orchestrator.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "0 */2 * * *", / Every 2 hours"" max_memory_restart: "512M"," restart_delay: 10000," env: {" NODE_ENV: "production","" AI_ANALYSIS_MODE: "comprehensive","" AUTO_FIX: "true" },"" log_file: "./logs/pm2/ai-code-analyzer.log","" out_file: "./logs/pm2/ai-code-analyzer-out.log","" error_file: "./logs/pm2/ai-code-analyzer-error.log"," merge_logs: true," time: true }, / Intelligent Performance Monitor {"" name: "intelligent-performance-monitor","" script: "node","" args: "scripts/automation/predictive-analytics-engine.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "*/5 * * * *", / Every 5 minutes"" max_memory_restart: "256M"," env: {" NODE_ENV: "production","" MONITORING_MODE: "intelligent" },"" log_file: "./logs/pm2/performance-monitor.log","" out_file: "./logs/pm2/performance-monitor-out.log","" error_file: "./logs/pm2/performance-monitor-error.log"," merge_logs: true," time: true }, / Smart Auto-Scaler {"" name: "smart-auto-scaler","" script: "node","" args: "scripts/automation/intelligent-auto-scaler.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "*/10 * * * *", / Every 10 minutes"" max_memory_restart: "256M"," env: {" NODE_ENV: "production","" SCALING_MODE: "intelligent" },"" log_file: "./logs/pm2/auto-scaler.log","" out_file: "./logs/pm2/auto-scaler-out.log","" error_file: "./logs/pm2/auto-scaler-error.log"," merge_logs: true," time: true }, / Health Dashboard {"" name: "health-dashboard","" script: "node","" args: "scripts/automation/health-dashboard.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "256M"," env: {" NODE_ENV: "production"," DASHBOARD_PORT: 3001 },"" log_file: "./logs/pm2/health-dashboard.log","" out_file: "./logs/pm2/health-dashboard-out.log","" error_file: "./logs/pm2/health-dashboard-error.log"," merge_logs: true," time: true }, / Security Scanner {"" name: "security-scanner","" script: "node","" args: "scripts/automation/security-scanner.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "0 */6 * * *", / Every 6 hours"" max_memory_restart: "256M"," env: {" NODE_ENV: "production","" SECURITY_MODE: "comprehensive" },"" log_file: "./logs/pm2/security-scanner.log","" out_file: "./logs/pm2/security-scanner-out.log","" error_file: "./logs/pm2/security-scanner-error.log"," merge_logs: true," time: true }, / Dependency Monitor {"" name: "dependency-monitor","" script: "node","" args: "scripts/automation/dependency-monitor.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "0 2 * * *", / Daily at 2 AM"" max_memory_restart: "256M"," env: {" NODE_ENV: "production","" AUTO_UPDATE: "true" },"" log_file: "./logs/pm2/dependency-monitor.log","" out_file: "./logs/pm2/dependency-monitor-out.log","" error_file: "./logs/pm2/dependency-monitor-error.log"," merge_logs: true," time: true } ], " deploy: { production: {" user: "ubuntu","" host: "your-server.com","" ref: "origin/main","" repo: "https:/github.com/Zion-Holdings/zion.app.git","" path: "/var/www/ziontechgroup"," "pre-deploy-local": ""," "post-deploy": "npm install && pm2 reload ecosystem.config.js --env production"," "pre-setup": "" }," staging: {" user: "ubuntu","" host: "staging-server.com","" ref: "origin/develop","" repo: "https:/github.com/Zion-Holdings/zion.app.git","" path: "/var/www/ziontechgroup-staging"," "pre-deploy-local": ""," "post-deploy": "npm install && pm2 reload ecosystem.config.js --env staging"," "pre-setup": "" } }};'"'"
=======
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
      "env_development": {}
        NODE_ENV: 'development',
        "PORT": 3000,
        "DEBUG": 'true'
      },
      "log_file": './logs/pm2/web.log',
      "out_file": './logs/pm2/web-out.log',
      "error_file": './logs/pm2/web-error.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z',
      "merge_logs": true,
      "time": true;
    },
    
    // AI-Powered Code Analysis & Auto-Fixing;
    {}
      "name": 'ai-code-analyzer',
      "script": 'node',
      "args": 'scripts/automation/ai-intelligent-orchestrator.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */2 * * *', // Every 2 hours;
      "max_memory_restart": '512M',
      "restart_delay": 10000,
      "env": {}
        NODE_ENV: 'production',
        "AI_ANALYSIS_MODE": 'comprehensive',
        "AUTO_FIX": 'true'
      },
      "log_file": './logs/pm2/ai-code-analyzer.log',
      "out_file": './logs/pm2/ai-code-analyzer-out.log',
      "error_file": './logs/pm2/ai-code-analyzer-error.log',
      "merge_logs": true,
      "time": true;
    },
    
    // Intelligent Performance Monitor;
    {}
      "name": 'intelligent-performance-monitor',
      "script": 'node',
      "args": 'scripts/automation/predictive-analytics-engine.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/5 * * * *', // Every 5 minutes;
      "max_memory_restart": '256M',
      "env": {}
        NODE_ENV: 'production',
        "MONITORING_MODE": 'intelligent'
      },
      "log_file": './logs/pm2/performance-monitor.log',
      "out_file": './logs/pm2/performance-monitor-out.log',
      "error_file": './logs/pm2/performance-monitor-error.log',
      "merge_logs": true,
      "time": true;
    },
    
    // Smart Auto-Scaler;
    {}
      "name": 'smart-auto-scaler',
      "script": 'node',
      "args": 'scripts/automation/intelligent-auto-scaler.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/10 * * * *', // Every 10 minutes;
      "max_memory_restart": '256M',
      "env": {}
        NODE_ENV: 'production',
        "SCALING_MODE": 'intelligent'
      },
      "log_file": './logs/pm2/auto-scaler.log',
      "out_file": './logs/pm2/auto-scaler-out.log',
      "error_file": './logs/pm2/auto-scaler-error.log',
      "merge_logs": true,
      "time": true;
    },
    
    // Health Dashboard;
    {}
      "name": 'health-dashboard',
      "script": 'node',
      "args": 'scripts/automation/health-dashboard.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '256M',
      "env": {}
        NODE_ENV: 'production',
        "DASHBOARD_PORT": 3001;
      },
      "log_file": './logs/pm2/health-dashboard.log',
      "out_file": './logs/pm2/health-dashboard-out.log',
      "error_file": './logs/pm2/health-dashboard-error.log',
      "merge_logs": true,
      "time": true;
    },
    
    // Security Scanner;
    {}
      "name": 'security-scanner',
      "script": 'node',
      "args": 'scripts/automation/security-scanner.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */6 * * *', // Every 6 hours;
      "max_memory_restart": '256M',
      "env": {}
        NODE_ENV: 'production',
        "SECURITY_MODE": 'comprehensive'
      },
      "log_file": './logs/pm2/security-scanner.log',
      "out_file": './logs/pm2/security-scanner-out.log',
      "error_file": './logs/pm2/security-scanner-error.log',
      "merge_logs": true,
      "time": true;
    },
    
    // Dependency Monitor;
    {}
      "name": 'dependency-monitor',
      "script": 'node',
      "args": 'scripts/automation/dependency-monitor.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 2 * * *', // Daily at 2 AM;
      "max_memory_restart": '256M',
      "env": {}
        NODE_ENV: 'production',
        "AUTO_UPDATE": 'true'
      },
      "log_file": './logs/pm2/dependency-monitor.log',
      "out_file": './logs/pm2/dependency-monitor-out.log',
      "error_file": './logs/pm2/dependency-monitor-error.log',
      "merge_logs": true,
      "time": true;
    };
  ],
  
  "deploy": {}
    production: {}
      user: 'ubuntu',
      "host": 'your-server.com',
      "ref": 'origin/main',
      "repo": 'https://github.com/Zion-Holdings/zion.app.git',
      "path": '/var/www/ziontechgroup',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    },
    "staging": {}
      user: 'ubuntu',
      "host": 'staging-server.com',
      "ref": 'origin/develop',
      "repo": 'https://github.com/Zion-Holdings/zion.app.git',
      "path": '/var/www/ziontechgroup-staging',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env staging',
      'pre-setup': ''
    };
  };
};
>>>>>>> main
