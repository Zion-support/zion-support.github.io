module.exports = {
  apps: [
    // Main Error Prevention System
    {
      name: 'error-prevention-system',
      script: 'scripts/error-fixer-automation.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/15 * * * *', // Every 15 minutes
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info',
        AUTO_FIX_ENABLED: 'true'
      },
      error_file: 'automation/logs/error-prevention-error.log',
      out_file: 'automation/logs/error-prevention-out.log',
      log_file: 'automation/logs/error-prevention-combined.log',
      time: true
    },
    // Continuous Linting Monitor
    {
      name: 'lint-monitor',
      script: 'scripts/continuous-lint-monitor.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/5 * * * *', // Every 5 minutes
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        LINT_INTERVAL: 300000, // 5 minutes
        AUTO_FIX: 'true'
      },
      error_file: 'automation/logs/lint-monitor-error.log',
      out_file: 'automation/logs/lint-monitor-out.log',
      log_file: 'automation/logs/lint-monitor-combined.log',
      time: true
    },
    // Type Check Monitor
    {
      name: 'type-check-monitor',
      script: 'scripts/continuous-type-check.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/10 * * * *', // Every 10 minutes
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        TYPE_CHECK_INTERVAL: 600000, // 10 minutes
        AUTO_FIX: 'true'
      },
      error_file: 'automation/logs/type-check-monitor-error.log',
      out_file: 'automation/logs/type-check-monitor-out.log',
      log_file: 'automation/logs/type-check-monitor-combined.log',
      time: true
    },
    // Build Health Monitor
    {
      name: 'build-health-monitor',
      script: 'scripts/build-health-monitor.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/30 * * * *', // Every 30 minutes
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        BUILD_INTERVAL: 1800000, // 30 minutes
        AUTO_FIX: 'true'
      },
      error_file: 'automation/logs/build-health-error.log',
      out_file: 'automation/logs/build-health-out.log',
      log_file: 'automation/logs/build-health-combined.log',
      time: true
    },
    // Code Quality Monitor
    {
      name: 'code-quality-monitor',
      script: 'scripts/code-quality-monitor.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */2 * * *', // Every 2 hours
      max_memory_restart: '400M',
      env: {
        NODE_ENV: 'production',
        QUALITY_CHECK_INTERVAL: 7200000, // 2 hours
        AUTO_FIX: 'true'
      },
      error_file: 'automation/logs/code-quality-error.log',
      out_file: 'automation/logs/code-quality-out.log',
      log_file: 'automation/logs/code-quality-combined.log',
      time: true
    },
    // Security Vulnerability Scanner
    {
      name: 'security-scanner',
      script: 'scripts/security-vulnerability-scanner.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */6 * * *', // Every 6 hours
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'production',
        SCAN_INTERVAL: 21600000, // 6 hours
        AUTO_PATCH: 'true'
      },
      error_file: 'automation/logs/security-scanner-error.log',
      out_file: 'automation/logs/security-scanner-out.log',
      log_file: 'automation/logs/security-scanner-combined.log',
      time: true
    },
    // Performance Monitor
    {
      name: 'performance-monitor',
      script: 'scripts/performance-monitor.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/20 * * * *', // Every 20 minutes
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        MONITOR_INTERVAL: 1200000, // 20 minutes
        AUTO_OPTIMIZE: 'true'
      },
      error_file: 'automation/logs/performance-monitor-error.log',
      out_file: 'automation/logs/performance-monitor-out.log',
      log_file: 'automation/logs/performance-monitor-combined.log',
      time: true
    },
    // Git Workflow Automation
    {
      name: 'git-workflow-automation',
      script: 'scripts/git-workflow-automation.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/5 * * * *', // Every 5 minutes
      max_memory_restart: '200M',
      env: {
        NODE_ENV: 'production',
        AUTO_MERGE: 'true',
        CONFLICT_RESOLUTION: 'intelligent'
      },
      error_file: 'automation/logs/git-workflow-error.log',
      out_file: 'automation/logs/git-workflow-out.log',
      log_file: 'automation/logs/git-workflow-combined.log',
      time: true
    },
    // Health Check System
    {
      name: 'health-check-system',
      script: 'scripts/health-check-system.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/2 * * * *', // Every 2 minutes
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'production',
        HEALTH_CHECK_INTERVAL: 120000, // 2 minutes
        AUTO_RECOVERY: 'true'
      },
      error_file: 'automation/logs/health-check-error.log',
      out_file: 'automation/logs/health-check-out.log',
      log_file: 'automation/logs/health-check-combined.log',
      time: true
    }
  ],
  deploy: {
    production: {
      user: 'deploy',
      host: ['production-server'],
      ref: 'origin/main',
      repo: 'git@github.com:Zion-Holdings/zion.app.git',
      path: '/var/www/ziontechgroup.com',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.error-prevention.cjs --env production',
      'pre-setup': ''
    }
  }
};
module.exports = { apps: [{ name: "ziontechgroup-web","" script: "npm","" args: "start","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "production"," PORT: 3000 }," env_development: {" NODE_ENV: "development"," PORT: 3000 },"" log_file: "./automation/logs/web.log","" out_file: "./automation/logs/web-out.log","" error_file: "./automation/logs/web-error.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z" }, {"" name: "error-prevention-monitor","" script: "node","" args: "automation/error-prevention-monitor.js","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "*/10 * * * *", / Restart every 10 minutes" env: {" NODE_ENV: "production" },"" log_file: "./automation/logs/error-prevention.log","" out_file: "./automation/logs/error-prevention-out.log","" error_file: "./automation/logs/error-prevention-error.log" }, {"" name: "merge-conflict-detector","" script: "node","" args: "automation/merge-conflict-detector.js","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "*/15 * * * *", / Restart every 15 minutes" env: {" NODE_ENV: "production" },"" log_file: "./automation/logs/merge-conflict-detector.log","" out_file: "./automation/logs/merge-conflict-detector-out.log","" error_file: "./automation/logs/merge-conflict-detector-error.log" }, {"" name: "build-error-monitor","" script: "node","" args: "automation/build-error-monitor.js","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "*/30 * * * *", / Restart every 30 minutes" env: {" NODE_ENV: "production" },"" log_file: "./automation/logs/build-error-monitor.log","" out_file: "./automation/logs/build-error-monitor-out.log","" error_file: "./automation/logs/build-error-monitor-error.log" } ]};"""
module.exports = {}
  "apps": [{}]
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
        "PORT": 3000;
      },
      "log_file": './automation/logs/web.log',
      "out_file": './automation/logs/web-out.log',
      "error_file": './automation/logs/web-error.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    },
    {}
      "name": 'error-prevention-monitor',
      "script": 'node',
      "args": 'automation/error-prevention-monitor.js',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/10 * * * *', // Restart every 10 minutes;
      "env": {}
        NODE_ENV: 'production'
      },
      "log_file": './automation/logs/error-prevention.log',
      "out_file": './automation/logs/error-prevention-out.log',
      "error_file": './automation/logs/error-prevention-error.log'
    },
    {}
      "name": 'merge-conflict-detector',
      "script": 'node',
      "args": 'automation/merge-conflict-detector.js',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/15 * * * *', // Restart every 15 minutes;
      "env": {}
        NODE_ENV: 'production'
      },
      "log_file": './automation/logs/merge-conflict-detector.log',
      "out_file": './automation/logs/merge-conflict-detector-out.log',
      "error_file": './automation/logs/merge-conflict-detector-error.log'
    },
    {}
      "name": 'build-error-monitor',
      "script": 'node',
      "args": 'automation/build-error-monitor.js',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/30 * * * *', // Restart every 30 minutes;
      "env": {}
        NODE_ENV: 'production'
      },
      "log_file": './automation/logs/build-error-monitor.log',
      "out_file": './automation/logs/build-error-monitor-out.log',
      "error_file": './automation/logs/build-error-monitor-error.log'
    };
  ];
};
