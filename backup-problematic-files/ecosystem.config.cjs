module.exports = {
  apps: [
    {
      name: 'ci-cd-pipeline',
      script: 'npm',
      args: 'run build',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
      cron_restart: '0 0 * * *', // Daily restart
      error_file: './logs/ci-cd-error.log',
      out_file: './logs/ci-cd-out.log',
      log_file: './logs/ci-cd-combined.log',
      time: true,    },
    {
      name: 'continuous-automation',
      script: 'node',
      args: 'scripts/automation/automation-orchestrator.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      error_file: './logs/automation-error.log',
      out_file: './logs/automation-out.log',
      log_file: './logs/automation-combined.log',
      time: true,    },
    {
      name: 'comprehensive-automation',
      script: 'node',
      args: 'scripts/automation/comprehensive-continuous-automation.cjs',
      name: 'bolt-zion-app',
      script: 'npm',
      args: 'run build',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
      cron_restart: '0 0 * * *', // Daily restart
      error_file: './logs/ci-cd-error.log',
      out_file: './logs/ci-cd-out.log',
      log_file: './logs/ci-cd-combined.log',
      time: true,    },
    {
      name: 'continuous-automation',
      script: 'node',
      args: 'scripts/automation/automation-orchestrator.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',      },
        PM2_PROCESS_NAME: 'code-quality-monitor',
        QUALITY_THRESHOLD: '80',
        AUTO_FIX_CRITICAL: 'true',
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      log_file: 'logs/pm2/code-quality-monitor.log',
      error_file: 'logs/pm2/code-quality-monitor-error.log',
      out_file: 'logs/pm2/code-quality-monitor-out.log',
    }
  ]
      cron_restart: '0 */6 * * *', // Every 6 hours
      error_file: './logs/automation-error.log',
      out_file: './logs/automation-out.log',
      log_file: './logs/automation-combined.log',
      time: true,    },
    },
    {
      name: 'comprehensive-automation',
      script: 'node',
      args: 'scripts/automation/comprehensive-continuous-automation.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      error_file: './logs/comprehensive-automation-error.log',
      out_file: './logs/comprehensive-automation-out.log',
      log_file: './logs/comprehensive-automation-combined.log',
      time: true,    },
    {
      name: 'marketing-automation',
      script: 'node',
      args: 'scripts/linkedin_automation.js',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',      },
      cron_restart: '0 */12 * * *', // Every 12 hours
      error_file: './logs/marketing-automation-error.log',
      out_file: './logs/marketing-automation-out.log',
      log_file: './logs/marketing-automation-combined.log',
      time: true,    },
    {
      name: 'security-audit',
      name: 'bolt-zion-app',
      script: 'npm',
      args: 'audit',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production',      },
      cron_restart: '0 2 * * *', // Daily at 2 AM
      error_file: './logs/security-audit-error.log',
      out_file: './logs/security-audit-out.log',
      log_file: './logs/security-audit-combined.log',
      time: true,    },
    {
      name: 'test-runner',
      script: 'npm',
      args: 'test',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      error_file: './logs/test-runner-error.log',
      out_file: './logs/test-runner-out.log',
      log_file: './logs/test-runner-combined.log',
      time: true,    },
    {
      name: 'lint-checker',
      script: 'npm',
      args: 'run lint',
      cwd: '/workspace',
        NODE_ENV: 'production',
      },
      log_file: 'logs/pm2/preview.log',
      error_file: 'logs/pm2/preview-error.log',
      out_file: 'logs/pm2/preview-out.log',
    },
    {
      name: 'auto-fix',
      script: 'node',
      args: 'scripts/pm2/auto-fix.cjs',
      cron_restart: '0 */6 * * *',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: { NODE_ENV: 'production' },
      log_file: 'logs/pm2/auto-fix.log',
      error_file: 'logs/pm2/auto-fix-error.log',
      out_file: 'logs/pm2/auto-fix-out.log',
    },
    {
      name: 'healthcheck',
      script: 'node',
      args: 'scripts/pm2/healthcheck.cjs',
      cron_restart: '*/5 * * * *',
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: { NODE_ENV: 'production' },
      log_file: 'logs/pm2/health.log',
      error_file: 'logs/pm2/health-error.log',
      out_file: 'logs/pm2/health-out.log',
    },
    {
      name: 'code-quality-monitor',
      script: 'scripts/pm2/code-quality-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production',      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      error_file: './logs/lint-checker-error.log',
      out_file: './logs/lint-checker-out.log',
      log_file: './logs/lint-checker-combined.log',
      time: true
    },
    {
      name: "zion-app",
      script: "npm",
      args: "start",
      interpreter: "none",
      cwd: __dirname,
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'code-quality-monitor',
        QUALITY_THRESHOLD: '80',
        AUTO_FIX_CRITICAL: 'true',
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      log_file: 'logs/pm2/code-quality-monitor.log',
      error_file: 'logs/pm2/code-quality-monitor-error.log',
      out_file: 'logs/pm2/code-quality-monitor-out.log',
    }
  ]
    },
    {
      name: 'auto-commit-fixes',
      script: 'scripts/pm2/auto-commit-fixes.js',
      instances: 1,
      autorestart: true,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        PORT: process.env.PORT || 3000
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/zion-app-error.log",
      out_file: "automation/logs/zion-app-out.log",
      time: true
    },
    {
      name: "zion-auto-sync",
      script: "automation/pm2-auto-sync.js",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        AUTO_SYNC_REMOTE: process.env.AUTO_SYNC_REMOTE || "origin",
        AUTO_SYNC_BRANCH: process.env.AUTO_SYNC_BRANCH || "main",
        AUTO_SYNC_STRATEGY: process.env.AUTO_SYNC_STRATEGY || "hardreset",
        AUTO_SYNC_CLEAN: process.env.AUTO_SYNC_CLEAN || "1",
        AUTO_SYNC_GC: process.env.AUTO_SYNC_GC || "0"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/zion-auto-sync-error.log",
      out_file: "automation/logs/zion-auto-sync-out.log",
      time: true
    },
    {
      name: "zion-build-monitor",
      script: "automation/continuous-build-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/build-monitor-error.log",
      out_file: "automation/logs/build-monitor-out.log",
      time: true
    }
  ];};
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      log_file: 'logs/pm2/git-workflow.log',
      error_file: 'logs/pm2/git-workflow-error.log',
      out_file: 'logs/pm2/git-workflow-out.log',
    },
    // NEW: Environment Health Monitor
    {
      name: 'health-monitor',
      script: 'scripts/pm2/health-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'health-monitor',
        MONITOR_SYSTEM: 'true',
        MONITOR_PROCESSES: 'true',
        MONITOR_RESOURCES: 'true',
        ALERT_THRESHOLD: '80',
      },
      cron_restart: '0 */1 * * *', // Restart every hour
      log_file: 'logs/pm2/health-monitor.log',
      error_file: 'logs/pm2/health-monitor-error.log',
      out_file: 'logs/pm2/health-monitor-out.log',
    },
    // NEW: Documentation Generator
    {
      name: 'docs-generator',
      script: 'scripts/pm2/docs-generator.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'docs-generator',
        AUTO_GENERATE: 'true',
        UPDATE_README: 'true',
        API_DOCS: 'true',
        COMPONENT_DOCS: 'true',
      },
      cron_restart: '0 2 * * *', // Restart daily at 2 AM
      log_file: 'logs/pm2/docs-generator.log',
      error_file: 'logs/pm2/docs-generator-error.log',
      out_file: 'logs/pm2/docs-generator-out.log',
    },
    // NEW: SEO and Accessibility Monitor
    {
      name: 'seo-accessibility',
      script: 'scripts/pm2/seo-accessibility.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'seo-accessibility',
        CHECK_SEO: 'true',
        CHECK_ACCESSIBILITY: 'true',
        CHECK_PERFORMANCE: 'true',
        LIGHTHOUSE_AUDIT: 'true',
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      log_file: 'logs/pm2/seo-accessibility.log',
      error_file: 'logs/pm2/seo-accessibility-error.log',
      out_file: 'logs/pm2/seo-accessibility-out.log',
    },
  ],
};
module.exports = { apps: [{ name: "ziontechgroup-web","" script: "npm","" args: "run start","" cwd: "./"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "production"},"" log_file: "logs/pm2/preview.log","" error_file: "logs/pm2/preview-error.log","" out_file: "logs/pm2/preview-out.log"}, {"" name: "ci-cd-automation","" script: "scripts/pm2/ci-cd-automation.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production" },"" cron_restart: "0 */1 * * *", / Every hour"" log_file: "logs/pm2/ci-cd-automation.log","" error_file: "logs/pm2/ci-cd-automation-error.log","" out_file: "logs/pm2/ci-cd-automation-out.log"}, {"" name: "continuous-improvement","" script: "scripts/pm2/continuous-improvement.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production" },"" cron_restart: "0 */2 * * *", / Every 2 hours"" log_file: "logs/pm2/continuous-improvement.log","" error_file: "logs/pm2/continuous-improvement-error.log","" out_file: "logs/pm2/continuous-improvement-out.log"}, {"" name: "daily-build-test","" script: "scripts/pm2/daily-build-test.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "production" },"" cron_restart: "0 */1 * * *", / Every hour"" log_file: "logs/pm2/daily-build-test.log","" error_file: "logs/pm2/daily-build-test-error.log","" out_file: "logs/pm2/daily-build-test-out.log"}, {"" name: "quality-checks","" script: "scripts/pm2/quality-checks.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "production" },"" cron_restart: "0 */3 * * *", / Every 3 hours"" log_file: "logs/pm2/quality-checks.log","" error_file: "logs/pm2/quality-checks-error.log","" out_file: "logs/pm2/quality-checks-out.log"}, {"" name: "security-audit","" script: "scripts/pm2/security-audit.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "production" },"" cron_restart: "0 */4 * * *", / Every 4 hours"" log_file: "logs/pm2/security-audit.log","" error_file: "logs/pm2/security-audit-error.log","" out_file: "logs/pm2/security-audit-out.log"}, {"" name: "performance-monitor","" script: "scripts/pm2/performance-monitor.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "production" },"" cron_restart: "0 */2 * * *", / Every 2 hours"" log_file: "logs/pm2/performance-monitor.log","" error_file: "logs/pm2/performance-monitor-error.log","" out_file: "logs/pm2/performance-monitor-out.log"}, {"" name: "link-checker","" script: "scripts/pm2/link-checker.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "production" },"" cron_restart: "0 */6 * * *", / Every 6 hours"" log_file: "logs/pm2/link-checker.log","" error_file: "logs/pm2/link-checker-error.log","" out_file: "logs/pm2/link-checker-out.log"}, {"" name: "dependency-updates","" script: "scripts/pm2/dependency-updates.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "production" },"" cron_restart: "0 */6 * * *", / Every 6 hours"" log_file: "logs/pm2/dependency-updates.log","" error_file: "logs/pm2/dependency-updates-error.log","" out_file: "logs/pm2/dependency-updates-out.log"}, {"" name: "health-monitor","" script: "scripts/pm2/health-monitor.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "production" },"" cron_restart: "*/5 * * * *", / Every 5 minutes"" log_file: "logs/pm2/health-monitor.log","" error_file: "logs/pm2/health-monitor-error.log","" out_file: "logs/pm2/health-monitor-out.log"}, {"" name: "error-fixer","" script: "scripts/pm2/error-fixer.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production" },"" cron_restart: "0 */2 * * *", / Every 2 hours"" log_file: "logs/pm2/error-fixer.log","" error_file: "logs/pm2/error-fixer-error.log","" out_file: "logs/pm2/error-fixer-out.log"}, {"" name: "continuous-linter","" script: "scripts/pm2/continuous-linter.cjs","" args: "watch"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production" },"" log_file: "logs/pm2/continuous-linter.log","" error_file: "logs/pm2/continuous-linter-error.log","" out_file: "logs/pm2/continuous-linter-out.log"}, {"" name: "type-checker","" script: "scripts/pm2/type-checker.cjs","" args: "watch"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production" },"" log_file: "logs/pm2/type-checker.log","" error_file: "logs/pm2/type-checker-error.log","" out_file: "logs/pm2/type-checker-out.log"} ]};'"'"
module.exports = {}
  "apps": [{}]
      name: 'ziontechgroup-web',
      "script": 'npm',
      "args": 'run start',
      "cwd": './',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'production'},
      "log_file": 'logs/pm2/preview.log',
      "error_file": 'logs/pm2/preview-error.log',
      "out_file": 'logs/pm2/preview-out.log'},
    {}
      "name": 'ci-cd-automation',
      "script": 'scripts/pm2/ci-cd-automation.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {}
        NODE_ENV: 'production'
      },
      "cron_restart": '0 */1 * * *', // Every hour;
      "log_file": 'logs/pm2/ci-cd-automation.log',
      "error_file": 'logs/pm2/ci-cd-automation-error.log',
      "out_file": 'logs/pm2/ci-cd-automation-out.log'},
    {}
      "name": 'continuous-improvement',
      "script": 'scripts/pm2/continuous-improvement.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {}
        NODE_ENV: 'production'
      },
      "cron_restart": '0 */2 * * *', // Every 2 hours;
      "log_file": 'logs/pm2/continuous-improvement.log',
      "error_file": 'logs/pm2/continuous-improvement-error.log',
      "out_file": 'logs/pm2/continuous-improvement-out.log'},
    {}
      "name": 'daily-build-test',
      "script": 'scripts/pm2/daily-build-test.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'production'
      },
      "cron_restart": '0 */1 * * *', // Every hour;
      "log_file": 'logs/pm2/daily-build-test.log',
      "error_file": 'logs/pm2/daily-build-test-error.log',
      "out_file": 'logs/pm2/daily-build-test-out.log'},
    {}
      "name": 'quality-checks',
      "script": 'scripts/pm2/quality-checks.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'production'
      },
      "cron_restart": '0 */3 * * *', // Every 3 hours;
      "log_file": 'logs/pm2/quality-checks.log',
      "error_file": 'logs/pm2/quality-checks-error.log',
      "out_file": 'logs/pm2/quality-checks-out.log'},
    {}
      "name": 'security-audit',
      "script": 'scripts/pm2/security-audit.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'production'
      },
      "cron_restart": '0 */4 * * *', // Every 4 hours;
      "log_file": 'logs/pm2/security-audit.log',
      "error_file": 'logs/pm2/security-audit-error.log',
      "out_file": 'logs/pm2/security-audit-out.log'},
    {}
      "name": 'performance-monitor',
      "script": 'scripts/pm2/performance-monitor.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'production'
      },
      "cron_restart": '0 */2 * * *', // Every 2 hours;
      "log_file": 'logs/pm2/performance-monitor.log',
      "error_file": 'logs/pm2/performance-monitor-error.log',
      "out_file": 'logs/pm2/performance-monitor-out.log'},
    {}
      "name": 'link-checker',
      "script": 'scripts/pm2/link-checker.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'production'
      },
      "cron_restart": '0 */6 * * *', // Every 6 hours;
      "log_file": 'logs/pm2/link-checker.log',
      "error_file": 'logs/pm2/link-checker-error.log',
      "out_file": 'logs/pm2/link-checker-out.log'},
    {}
      "name": 'dependency-updates',
      "script": 'scripts/pm2/dependency-updates.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'production'
      },
      "cron_restart": '0 */6 * * *', // Every 6 hours;
      "log_file": 'logs/pm2/dependency-updates.log',
      "error_file": 'logs/pm2/dependency-updates-error.log',
      "out_file": 'logs/pm2/dependency-updates-out.log'},
    {}
      "name": 'health-monitor',
      "script": 'scripts/pm2/health-monitor.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'production'
      },
      "cron_restart": '*/5 * * * *', // Every 5 minutes;
      "log_file": 'logs/pm2/health-monitor.log',
      "error_file": 'logs/pm2/health-monitor-error.log',
      "out_file": 'logs/pm2/health-monitor-out.log'},
    {}
      "name": 'error-fixer',
      "script": 'scripts/pm2/error-fixer.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {}
        NODE_ENV: 'production'
      },
      "cron_restart": '0 */2 * * *', // Every 2 hours;
      "log_file": 'logs/pm2/error-fixer.log',
      "error_file": 'logs/pm2/error-fixer-error.log',
      "out_file": 'logs/pm2/error-fixer-out.log'},
    {}
      "name": 'continuous-linter',
      "script": 'scripts/pm2/continuous-linter.cjs',
      "args": 'watch',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {}
        NODE_ENV: 'production'
      },
      "log_file": 'logs/pm2/continuous-linter.log',
      "error_file": 'logs/pm2/continuous-linter-error.log',
      "out_file": 'logs/pm2/continuous-linter-out.log'},
    {}
      "name": 'type-checker',
      "script": 'scripts/pm2/type-checker.cjs',
      "args": 'watch',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {}
        NODE_ENV: 'production'
      },
      "log_file": 'logs/pm2/type-checker.log',
      "error_file": 'logs/pm2/type-checker-error.log',
      "out_file": 'logs/pm2/type-checker-out.log'};
  ];
};
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/build-monitor-error.log",
      out_file: "automation/logs/build-monitor-out.log",
      time: true
    }
  ]
};
