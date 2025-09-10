<<<<<<< HEAD
module.exports = { apps: [/ High Priority Error Prevention (runs every 5 minutes) { name: "error-prevention-monitor","" script: "./scripts/automation/pm2-error-prevention-automation.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G","" min_uptime: "60s"," max_restarts: 10," env: {" NODE_ENV: "production","" AUTOMATION_INTERVAL: "300000", / 5 minutes"" DEBUG: "false" },"" log_file: "./automation/logs/error-prevention.log","" error_file: "./automation/logs/error-prevention-error.log","" out_file: "./automation/logs/error-prevention-out.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z"," merge_logs: true }, / Intelligent Error Fixer (runs every 3 minutes) {"" name: "intelligent-error-fixer","" script: "./scripts/automation/intelligent-error-fixer.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G","" min_uptime: "60s"," max_restarts: 10," env: {" NODE_ENV: "production","" CHECK_INTERVAL: "180000", / 3 minutes"" MAX_AUTO_FIXES: "50","" BACKUP_ENABLED: "true" },"" log_file: "./automation/logs/intelligent-error-fixer.log","" error_file: "./automation/logs/intelligent-error-fixer-error.log","" out_file: "./automation/logs/intelligent-error-fixer-out.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z"," merge_logs: true }, / Syntax Error Monitor (runs every 2 minutes) {"" name: "syntax-error-monitor","" script: "./scripts/automation-wrapper.js","" args: "fix"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M","" min_uptime: "30s"," max_restarts: 15," env: {" NODE_ENV: "production","" PM2_PROCESS: "syntax-error-monitor" },"" cron_restart: "*/2 * * * *", / Every 2 minutes"" log_file: "./automation/logs/syntax-error-monitor.log","" error_file: "./automation/logs/syntax-error-monitor-error.log","" out_file: "./automation/logs/syntax-error-monitor-out.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z" }, / Build Error Detector (runs every 10 minutes) {"" name: "build-error-detector","" script: "./scripts/automation-wrapper.js","" args: "build-test"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "2G","" min_uptime: "120s"," max_restarts: 5," env: {" NODE_ENV: "production","" PM2_PROCESS: "build-error-detector" },"" cron_restart: "*/10 * * * *", / Every 10 minutes"" log_file: "./automation/logs/build-error-detector.log","" error_file: "./automation/logs/build-error-detector-error.log","" out_file: "./automation/logs/build-error-detector-out.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z" }, / Security Vulnerability Fixer (runs every 30 minutes) {"" name: "security-fixer","" script: "./scripts/automation-wrapper.js","" args: "security"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G","" min_uptime: "60s"," max_restarts: 8," env: {" NODE_ENV: "production","" PM2_PROCESS: "security-fixer" },"" cron_restart: "*/30 * * * *", / Every 30 minutes"" log_file: "./automation/logs/security-fixer.log","" error_file: "./automation/logs/security-fixer-error.log","" out_file: "./automation/logs/security-fixer-out.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z" }, / Dependency Health Monitor (runs every hour) {"" name: "dependency-health-monitor","" script: "./scripts/automation-wrapper.js","" args: "deps"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G","" min_uptime: "120s"," max_restarts: 3," env: {" NODE_ENV: "production","" PM2_PROCESS: "dependency-health-monitor" },"" cron_restart: "0 * * * *", / Every hour"" log_file: "./automation/logs/dependency-health.log","" error_file: "./automation/logs/dependency-health-error.log","" out_file: "./automation/logs/dependency-health-out.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z" }, / Quality Assurance Monitor (runs every 15 minutes) {"" name: "quality-monitor","" script: "./scripts/automation-wrapper.js","" args: "quality"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G","" min_uptime: "60s"," max_restarts: 10," env: {" NODE_ENV: "production","" PM2_PROCESS: "quality-monitor" },"" cron_restart: "*/15 * * * *", / Every 15 minutes"" log_file: "./automation/logs/quality-monitor.log","" error_file: "./automation/logs/quality-monitor-error.log","" out_file: "./automation/logs/quality-monitor-out.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z" }, / Performance Monitor (runs every 20 minutes) {"" name: "performance-monitor","" script: "./scripts/automation-wrapper.js","" args: "performance"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G","" min_uptime: "60s"," max_restarts: 8," env: {" NODE_ENV: "production","" PM2_PROCESS: "performance-monitor" },"" cron_restart: "*/20 * * * *", / Every 20 minutes"" log_file: "./automation/logs/performance-monitor.log","" error_file: "./automation/logs/performance-monitor-error.log","" out_file: "./automation/logs/performance-monitor-out.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z" }, / Link Integrity Checker (runs every 4 hours) {"" name: "link-integrity-checker","" script: "./scripts/automation-wrapper.js","" args: "check-links"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G","" min_uptime: "120s"," max_restarts: 3," env: {" NODE_ENV: "production","" PM2_PROCESS: "link-integrity-checker" },"" cron_restart: "0 */4 * * *", / Every 4 hours"" log_file: "./automation/logs/link-integrity.log","" error_file: "./automation/logs/link-integrity-error.log","" out_file: "./automation/logs/link-integrity-out.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z" }, / Code Improvement Monitor (runs every 6 hours) {"" name: "code-improvement-monitor","" script: "./scripts/automation-wrapper.js","" args: "improve"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G","" min_uptime: "120s"," max_restarts: 3," env: {" NODE_ENV: "production","" PM2_PROCESS: "code-improvement-monitor" },"" cron_restart: "0 */6 * * *", / Every 6 hours"" log_file: "./automation/logs/code-improvement.log","" error_file: "./automation/logs/code-improvement-error.log","" out_file: "./automation/logs/code-improvement-out.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z" } ]," deploy: { production: {" user: "node","" host: "localhost","" ref: "origin/main","" repo: "git@github.com:username/repo.git","" path: "/var/www/production"," "post-deploy": "npm install --legacy-peer-deps && npm run build && pm2 reload ecosystem-enhanced-error-fixing.config.cjs --env production"," "post-setup": "npm install --legacy-peer-deps && npm run build" } }};"""
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
=======
module.exports = {;
  apps: [;
  // Main application;
    {;
  name: "bolt-app",
      script: "npm",
      args: "start",
      cwd: "./",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {;
  NODE_ENV: "development",
        PORT: 3000,,,
},
      env_production: {;
  NODE_ENV: "production",
        NODE_OPTIONS: "--max-old-space-size=6144 --openssl-legacy-provider",,,
},,,
},
    // Enhanced Error Fixing Automation - runs every 10 minutes (HIGHEST PRIORITY);
    {;
  name: "enhanced-error-fixing-automation",
      script: "./scripts/automation/enhanced-error-fixing-automation.cjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {;
  NODE_ENV: "production",
        AUTOMATION_INTERVAL: "600000", // 10 minutes;,
},
      cron_restart: "*/10 * * * *", // Every 10 minutes;
      log_file: "./logs/enhanced-error-fixing.log",
      error_file: "./logs/enhanced-error-fixing-error.log",
      out_file: "./logs/enhanced-error-fixing-out.log",,,
},
    // TypeScript Error Monitor - runs every 15 minutes;
    {;
  name: "typescript-error-monitor",
      script: "./scripts/automation/typescript-error-monitor.cjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {;
  NODE_ENV: "production",
        AUTOMATION_INTERVAL: "900000", // 15 minutes;,
},
      cron_restart: "*/15 * * * *", // Every 15 minutes;
      log_file: "./logs/typescript-error-monitor.log",
      error_file: "./logs/typescript-error-monitor-error.log",
      out_file: "./logs/typescript-error-monitor-out.log",,,
},
    // ESLint Error Monitor - runs every 15 minutes;
    {;
  name: "eslint-error-monitor",
      script: "./scripts/automation/eslint-error-cleaner.cjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {;
  NODE_ENV: "production",
        AUTOMATION_INTERVAL: "900000", // 15 minutes;,
},
      cron_restart: "*/15 * * * *", // Every 15 minutes;
      log_file: "./logs/eslint-error-monitor.log",
      error_file: "./logs/eslint-error-monitor-error.log",
      out_file: "./logs/eslint-error-monitor-out.log",,,
},
    // Merge Conflict Resolver - runs every 20 minutes;
    {;
  name: "merge-conflict-resolver",
      script: "./scripts/automation/merge-conflict-resolver.cjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {;
  NODE_ENV: "production",
        AUTOMATION_INTERVAL: "1200000", // 20 minutes;,
},
      cron_restart: "*/20 * * * *", // Every 20 minutes;
      log_file: "./logs/merge-conflict-resolver.log",
      error_file: "./logs/merge-conflict-resolver-error.log",
      out_file: "./logs/merge-conflict-resolver-out.log",,,
},
    // Dependency Error Resolver - runs every 30 minutes;
    {;
  name: "dependency-error-resolver",
      script: "./scripts/automation/dependency-error-resolver.cjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {;
  NODE_ENV: "production",
        AUTOMATION_INTERVAL: "1800000", // 30 minutes;,
},
      cron_restart: "*/30 * * * *", // Every 30 minutes;
      log_file: "./logs/dependency-error-resolver.log",
      error_file: "./logs/dependency-error-resolver-error.log",
      out_file: "./logs/dependency-error-resolver-out.log",,,
},
    // Build Error Detector - runs every 30 minutes;
    {;
  name: "build-error-detector",
      script: "./scripts/automation/build-error-detector.cjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {;
  NODE_ENV: "production",
        AUTOMATION_INTERVAL: "1800000", // 30 minutes;,
},
      cron_restart: "*/30 * * * *", // Every 30 minutes;
      log_file: "./logs/build-error-detector.log",
      error_file: "./logs/build-error-detector-error.log",
      out_file: "./logs/build-error-detector-out.log",,,
},
    // Auto Recovery Manager - runs every 45 minutes;
    {;
  name: "auto-recovery-manager",
      script: "./scripts/automation/auto-recovery-manager.cjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {;
  NODE_ENV: "production",
        AUTOMATION_INTERVAL: "2700000", // 45 minutes;,
},
      cron_restart: "*/45 * * * *", // Every 45 minutes;
      log_file: "./logs/auto-recovery-manager.log",
      error_file: "./logs/auto-recovery-manager-error.log",
      out_file: "./logs/auto-recovery-manager-out.log",,,
},
    // Error Prevention Monitor - runs every hour;
    {;
  name: "error-prevention-monitor",
      script: "./scripts/automation/error-prevention-monitor.cjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {;
  NODE_ENV: "production",
        AUTOMATION_INTERVAL: "3600000", // 1 hour;,
},
      cron_restart: "0 * * * *", // Every hour;
      log_file: "./logs/error-prevention-monitor.log",
      error_file: "./logs/error-prevention-monitor-error.log",
      out_file: "./logs/error-prevention-monitor-out.log",,,
},
    // Critical Error Alert System - runs every 15 minutes;
    {;
  name: "critical-error-alert-system",
      script: "./scripts/automation/critical-error-alert-system.cjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {;
  NODE_ENV: "production",
        AUTOMATION_INTERVAL: "900000", // 15 minutes;,
},
      cron_restart: "*/15 * * * *", // Every 15 minutes;
      log_file: "./logs/critical-error-alert.log",
      error_file: "./logs/critical-error-alert-error.log",
      out_file: "./logs/critical-error-alert-out.log",,,
},
    // Error Analytics Dashboard - runs every 2 hours;
    {;
  name: "error-analytics-dashboard",
      script: "./scripts/automation/error-analytics-dashboard.cjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {;
  NODE_ENV: "production",
        AUTOMATION_INTERVAL: "7200000", // 2 hours;,
},
      cron_restart: "0 */2 * * *", // Every 2 hours;
      log_file: "./logs/error-analytics-dashboard.log",
      error_file: "./logs/error-analytics-dashboard-error.log",
      out_file: "./logs/error-analytics-dashboard-out.log",,,
},
    // Auto Fix Scheduler - runs every 5 minutes (COORDINATES ALL ERROR FIXERS);
    {;
  name: "auto-fix-scheduler",
      script: "./scripts/automation/auto-fix-scheduler.cjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {;
  NODE_ENV: "production",
        AUTOMATION_INTERVAL: "300000", // 5 minutes;,
},
      cron_restart: "*/5 * * * *", // Every 5 minutes;
      log_file: "./logs/auto-fix-scheduler.log",
      error_file: "./logs/auto-fix-scheduler-error.log",
      out_file: "./logs/auto-fix-scheduler-out.log",,,
},
    // Project Health Monitor - runs every 30 minutes;
    {;
  name: "project-health-monitor",
      script: "./scripts/automation/project-health-monitor.cjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {;
  NODE_ENV: "production",
        AUTOMATION_INTERVAL: "1800000", // 30 minutes;,
},
      cron_restart: "*/30 * * * *", // Every 30 minutes;
      log_file: "./logs/project-health-monitor.log",
      error_file: "./logs/project-health-monitor-error.log",
      out_file: "./logs/project-health-monitor-out.log",,,
},
    // Quality Checks - runs every hour;
    {;
  name: "quality-checks",
      script: "./scripts/automation/quality-checks.cjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {;
  NODE_ENV: "production",
        AUTOMATION_INTERVAL: "3600000", // 1 hour;,
},
      cron_restart: "0 * * * *", // Every hour;
      log_file: "./logs/quality-checks.log",
      error_file: "./logs/quality-checks-error.log",
      out_file: "./logs/quality-checks-out.log",,,
},
    // Continuous Improvement - runs every 2 hours;
    {;
  name: "continuous-improvement",
      script: "./scripts/automation/continuous-improvement.cjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {;
  NODE_ENV: "production",
        AUTOMATION_INTERVAL: "7200000", // 2 hours;,
},
      cron_restart: "0 */2 * * *", // Every 2 hours;
      log_file: "./logs/continuous-improvement.log",
      error_file: "./logs/continuous-improvement-error.log",
      out_file: "./logs/continuous-improvement-out.log",,,
},
    // Daily Build Test - runs every 4 hours;
    {;
  name: "daily-build-test",
      script: "./scripts/automation/daily-build-test.cjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {;
  NODE_ENV: "production",
        AUTOMATION_INTERVAL: "14400000", // 4 hours;,
},
      cron_restart: "0 */4 * * *", // Every 4 hours;
      log_file: "./logs/daily-build-test.log",
      error_file: "./logs/daily-build-test-error.log",
      out_file: "./logs/daily-build-test-out.log",,,
},
  ],
  deploy: {;
  production: {;
  user: "root",
      host: "localhost",
      ref: "origin/main",
      repo: "git@github.com:your-username/bolt.new.zion.app.git",
      path: "/workspace/production",
      "pre-deploy-local": ",
      "post-deploy":;
        "npm install && npm run build && pm2 reload ecosystem-enhanced-error-fixing.config.cjs --env production",
      "pre-setup": ",,,
},,,
},,,
}
>>>>>>> origin/automation-fixes
