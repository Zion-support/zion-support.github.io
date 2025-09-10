<<<<<<< HEAD
<<<<<<< HEAD
module.exports = {
  apps: [
    {
      name: 'auto-fix',
      script: 'scripts/pm2/auto-fix.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      log_file: 'logs/pm2/auto-fix.log',
      error_file: 'logs/pm2/auto-fix-error.log',
      out_file: 'logs/pm2/auto-fix-out.log',
    },
    {
      name: 'healthcheck',
      script: 'scripts/pm2/healthcheck.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'production'
      },
      log_file: 'logs/pm2/health.log',
      error_file: 'logs/pm2/health-error.log',
      out_file: 'logs/pm2/health-out.log',
    },
    {
      name: 'code-quality-monitor',
      script: 'scripts/pm2/code-quality-monitor.js',
      name: 'bolt-zion-app',
      script: 'npm',
      args: 'run start',
      cwd: './',
=======

module.exports = {
  apps: [
    {
      name: 'zion-website',
      script: 'npm',
      args: 'run dev',
      cwd: '/workspace',
>>>>>>> origin/automation-fixes
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
<<<<<<< HEAD
        PM2_PROCESS_NAME: 'code-quality-monitor',
        QUALITY_THRESHOLD: '80',
        AUTO_FIX_CRITICAL: 'true',
      },
      log_file: 'logs/pm2/code-quality-monitor.log',
      error_file: 'logs/pm2/code-quality-monitor-error.log',
      out_file: 'logs/pm2/code-quality-monitor-out.log',
    },
    {
      name: 'auto-commit-fixes',
      script: 'scripts/pm2/auto-commit-fixes.js',
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
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'auto-commit-fixes',
        COMMIT_FREQUENCY: 'hourly',
        AUTO_PUSH: 'false',
      },
      log_file: 'logs/pm2/auto-commit-fixes.log',
      error_file: 'logs/pm2/auto-commit-fixes-error.log',
      out_file: 'logs/pm2/auto-commit-fixes-out.log',
    },
    {
      name: 'dependency-monitor',
      script: 'scripts/pm2/dependency-monitor.js',
        PM2_PROCESS_NAME: 'code-quality-monitor',
        QUALITY_THRESHOLD: '80',
        AUTO_FIX_CRITICAL: 'true',
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      log_file: 'logs/pm2/code-quality-monitor.log',
      error_file: 'logs/pm2/code-quality-monitor-error.log',
      out_file: 'logs/pm2/code-quality-monitor-out.log',
    },
    {
      name: 'auto-commit-fixes',
      script: 'scripts/pm2/auto-commit-fixes.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'dependency-monitor',
        AUTO_UPDATE_DEV: 'true',
        SECURITY_ALERTS: 'true',
      },
      log_file: 'logs/pm2/dependency-monitor.log',
      error_file: 'logs/pm2/dependency-monitor-error.log',
      out_file: 'logs/pm2/dependency-monitor-out.log',
    },
    {
      name: 'performance-monitor',
      script: 'scripts/pm2/performance-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'performance-monitor',
        PERFORMANCE_THRESHOLD: '3000',
        BUNDLE_SIZE_LIMIT: '2MB',
      },
      log_file: 'logs/pm2/performance-monitor.log',
      error_file: 'logs/pm2/performance-monitor-error.log',
      out_file: 'logs/pm2/performance-monitor-out.log',
    }
  ],
};
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'auto-commit-fixes',
        COMMIT_FREQUENCY: 'hourly',
        AUTO_PUSH: 'false',
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: 'logs/pm2/auto-commit-fixes.log',
      error_file: 'logs/pm2/auto-commit-fixes-error.log',
      out_file: 'logs/pm2/auto-commit-fixes-out.log',
    },
    {
      name: 'dependency-monitor',
      script: 'scripts/pm2/dependency-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'dependency-monitor',
        AUTO_UPDATE_DEV: 'true',
        SECURITY_ALERTS: 'true',
      },
      cron_restart: '0 0 * * 0', // Restart weekly on Sunday
      log_file: 'logs/pm2/dependency-monitor.log',
      error_file: 'logs/pm2/dependency-monitor-error.log',
      out_file: 'logs/pm2/dependency-monitor-out.log',
    },
    {
      name: 'performance-monitor',
      script: 'scripts/pm2/performance-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'performance-monitor',
        PERFORMANCE_THRESHOLD: '3000',
        BUNDLE_SIZE_LIMIT: '2MB',
      },
      cron_restart: '0 */8 * * *', // Restart every 8 hours
      log_file: 'logs/pm2/performance-monitor.log',
      error_file: 'logs/pm2/performance-monitor-error.log',
      out_file: 'logs/pm2/performance-monitor-out.log',
    },
    // NEW: Intelligent Test Automation
    {
      name: 'test-automation',
      script: 'scripts/pm2/test-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'test-automation',
        TEST_COVERAGE_THRESHOLD: '80',
        AUTO_RETRY_FAILED: 'true',
        PARALLEL_TESTS: 'true',
      },
      cron_restart: '0 */3 * * *', // Restart every 3 hours
      log_file: 'logs/pm2/test-automation.log',
      error_file: 'logs/pm2/test-automation-error.log',
      out_file: 'logs/pm2/test-automation-out.log',
    },
    // NEW: Security Scanner
    {
      name: 'security-scanner',
      script: 'scripts/pm2/security-scanner.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'security-scanner',
        SCAN_DEPENDENCIES: 'true',
        SCAN_CODE: 'true',
        SCAN_CONFIGS: 'true',
        ALERT_ON_CRITICAL: 'true',
      },
      cron_restart: '0 */12 * * *', // Restart every 12 hours
      log_file: 'logs/pm2/security-scanner.log',
      error_file: 'logs/pm2/security-scanner-error.log',
      out_file: 'logs/pm2/security-scanner-out.log',
    },
    // NEW: Build Optimization Monitor
    {
      name: 'build-optimizer',
      script: 'scripts/pm2/build-optimizer.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'build-optimizer',
        OPTIMIZE_BUNDLES: 'true',
        TREE_SHAKING: 'true',
        CODE_SPLITTING: 'true',
        MINIFICATION: 'true',
      },
      cron_restart: '0 0 * * *', // Restart daily at midnight
      log_file: 'logs/pm2/build-optimizer.log',
      error_file: 'logs/pm2/build-optimizer-error.log',
      out_file: 'logs/pm2/build-optimizer-out.log',
    },
    // NEW: Git Workflow Automation
    {
      name: 'git-workflow',
      script: 'scripts/pm2/git-workflow.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'git-workflow',
        AUTO_BRANCH_CLEANUP: 'true',
        AUTO_MERGE_SAFE: 'true',
        CONFLICT_RESOLUTION: 'true',
        BRANCH_STRATEGY: 'gitflow',
      },
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
=======
        PORT: 3000;
},
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000;
},
      log_file: './logs/zion-website.log',
      out_file: './logs/zion-website-out.log',
      error_file: './logs/zion-website-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
},

  ],

  deploy: {
    production: {
      user: 'deploy',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/your-repo.git',
      path: '/var/www/production',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.cjs --env production' } } };

      script: 'npm',
      args: 'run build',





main

}
    // JSX error fixer - runs every 40 minutes (HIGH PRIORITY)
    {
  name: jsx-error-fixer",
      script: "./scripts/automation/jsx-error-fixer.cjs,
      instances: 1,
      autorestart: true,
      watch: false;
      max_memory_restart: 512M,
      env: {
  NODE_ENV: production",
        AUTOMATION_INTERVAL: "2400000 // 40 minutes;
}
        NODE_ENV: production,
        AUTOMATION_INTERVAL: 2400000" // 40 minutes;
}

},
    // Master error fixer - runs every hour (COORDINATES ALL ERROR FIXERS)
    {
  name: "master-error-fixer;
      script: ./scripts/automation/master-error-fixer.cjs,
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: 512M,
      env: {
  NODE_ENV: "production",
        AUTOMATION_INTERVAL: 3600000 // 1 hour;
}
        NODE_ENV: production",
        AUTOMATION_INTERVAL: "3600000 // 1 hour;
}

}
    // Continuous link checker - runs every 30 minutes;
    {
  name: link-checker,
      script: ./scripts/automation/link-checker.cjs,
      instances: 1,
      autorestart: true,
      watch: false;
      max_memory_restart: 512M",
      env: {
  NODE_ENV: "production,
        AUTOMATION_INTERVAL: 1800000" // 30 minutes;
}
        NODE_ENV: "production,
        AUTOMATION_INTERVAL: 1800000 // 30 minutes;
}

},
    // Continuous improvement - runs every 2 hours;
    {
  name: continuous-improvement;
      script: ./scripts/automation/continuous-improvement.cjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M,
      env: {
  NODE_ENV: production,
        AUTOMATION_INTERVAL: "7200000" // 2 hours;
}
        NODE_ENV: production,
        AUTOMATION_INTERVAL: 7200000 // 2 hours;
}

}
    // Continuous build and test - runs every hour;
    {
  name: daily-build-test",
      script: "./scripts/automation/daily-build-test.cjs,
      instances: 1,
      autorestart: true,
      watch: false;
      max_memory_restart: 512M,
      env: {
  NODE_ENV: production",
        AUTOMATION_INTERVAL: "3600000 // 1 hour;
}
        NODE_ENV: production,
        AUTOMATION_INTERVAL: 3600000" // 1 hour;
}

},
    // Continuous security audit - runs every 4 hours;
    {
  name: "security-audit;
      script: ./scripts/automation/security-audit.cjs,
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: 512M,
      env: {
  NODE_ENV: "production",
        AUTOMATION_INTERVAL: 14400000 // 4 hours;
}
        NODE_ENV: production",
        AUTOMATION_INTERVAL: "14400000 // 4 hours;
}

}
    // Continuous dependency updates - runs every 6 hours;
    {
  name: dependency-updates,
      script: ./scripts/automation/dependency-updates.cjs,
      instances: 1,
      autorestart: true,
      watch: false;
      max_memory_restart: 512M",
      env: {
  NODE_ENV: "production,
        AUTOMATION_INTERVAL: 21600000" // 6 hours;
}
        NODE_ENV: "production,
        AUTOMATION_INTERVAL: 21600000 // 6 hours;
}

},
    // Continuous performance monitoring - runs every 2 hours;
    {
  name: performance-monitor;
      script: ./scripts/automation/performance-monitor.cjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M,
      env: {
  NODE_ENV: production,
        AUTOMATION_INTERVAL: "7200000" // 2 hours;
}
        NODE_ENV: production,
        AUTOMATION_INTERVAL: 7200000 // 2 hours;
}

}
    // Continuous quality checks - runs every 3 hours;
    {
  name: quality-checks",
      script: "./scripts/automation/quality-checks.cjs,
      instances: 1,
      autorestart: true,
      watch: false;
      max_memory_restart: 512M,
      env: {
  NODE_ENV: production",
        AUTOMATION_INTERVAL: "10800000 // 3 hours;
}
        NODE_ENV: production,
        AUTOMATION_INTERVAL: 10800000" // 3 hours;
}

},
    // Continuous link integrity checker - runs every 2 hours;
    {
  name: "link-integrity;
      script: ./scripts/automation/link-integrity.cjs,
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: 512M,
      env: {
  NODE_ENV: "production",
        AUTOMATION_INTERVAL: 7200000 // 2 hours;
}
        NODE_ENV: production",
        AUTOMATION_INTERVAL: "7200000 // 2 hours;
}

}
    // Continuous front maximizer - runs every 4 hours;
    {
  name: front-maximizer,
      script: ./scripts/automation/front-maximizer.cjs,
      instances: 1,
      autorestart: true,
      watch: false;
      max_memory_restart: 512M",
      env: {
  NODE_ENV: "production,
        AUTOMATION_INTERVAL: 14400000" // 4 hours;
}
        NODE_ENV: "production,
        AUTOMATION_INTERVAL: 14400000 // 4 hours;
}

},
    // Continuous sitemap runner - runs every 6 hours;
    {
  name: sitemap-runner;
      script: ./scripts/automation/sitemap-runner.cjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M,
      env: {
  NODE_ENV: production,
        AUTOMATION_INTERVAL: "21600000" // 6 hours;
}
        NODE_ENV: production,
        AUTOMATION_INTERVAL: 21600000 // 6 hours;
}

}
    // Auto-fix and build automation;
    {
  name: auto-fix-and-build",
      script: "bash;
      args: -lc "npm install --silent && npm run lint || true && npm run type-check || true && npm run build",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: 1G,
      env: {
  NODE_ENV: "production";
},
      cron_restart: 0 */6 * * *, // Every 6 hours;
      log_file: "logs/auto-fix-and-build.log",
      out_file: logs/auto-fix-and-build-out.log,
      error_file: "logs/auto-fix-and-build-error.log";
}
  ],
  deploy: {
  production: {
  user: root,
      host: "localhost",
      ref: origin/main,
      repo: "git@github.com:your-username/bolt.new.zion.app.git",
      path: /workspace/production,
      "pre-deploy-local": ,
      "post-deploy": npm install && npm run build && pm2 reload ecosystem.config.cjs --env production,
      "pre-setup": ;
}

}
}
    {
  name: "zion-website",
      script: "npm",
      args: "run dev",
      cwd: "/workspace",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
  NODE_ENV: "development",
        PORT: 3000},
      env_production: {
  NODE_ENV: "production",
        PORT: 3000},
      log_file: "./logs/zion-website.log",
      out_file: "./logs/zion-website-out.log",
      error_file: "./logs/zion-website-error.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: false,
      time: false},

    // Error Monitor - runs every 10 minutes;
    {
  name: "error-monitor",
      script: "./scripts/error-monitor.cjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      env: {
  NODE_ENV: "production"},
      error_file: "./logs/error-monitor-error.log",
      out_file: "./logs/error-monitor-out.log",
      log_file: "./logs/error-monitor-combined.log",
      time: false,
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: false,
      max_restarts: 10,
      min_uptime: "5s",
      restart_delay: 2000,
      cron_restart: "*/10 * * * *", // Run every 10 minutes;
      pmx: true},

    // Health Checker - runs every 5 minutes;
    {
  name: "health-checker",
      script: "./scripts/health-checker.cjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "300M",
      env: {
  NODE_ENV: "production"},
      error_file: "./logs/health-checker-error.log",
      out_file: "./logs/health-checker-out.log",
      log_file: "./logs/health-checker-combined.log",
      time: false,
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: false,
      max_restarts: 5,
      min_uptime: "5s",
      restart_delay: 2000,
      cron_restart: "*/5 * * * *", // Run every 5 minutes;
      pmx: true},

    // Auto Fixer - runs every 2 hours;
    {
  name: "auto-fixer",
      script: "./scripts/auto-fixer.cjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
  NODE_ENV: "production"},
      error_file: "./logs/auto-fixer-error.log",
      out_file: "./logs/auto-fixer-out.log",
      log_file: "./logs/auto-fixer-combined.log",
      time: false,
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: false,
      max_restarts: 3,
      min_uptime: "10s",
      restart_delay: 5000,
      cron_restart: "0 */2 * * *", // Run every 2 hours;
      pmx: true},

    // Syntax Fixer - runs every 30 minutes;
    {
  name: "syntax-fixer",
      script: "./scripts/automation/syntax-error-fixer.cjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "800M",
      env: {
  NODE_ENV: "production"},
      error_file: "./logs/syntax-fixer-error.log",
      out_file: "./logs/syntax-fixer-out.log",
      log_file: "./logs/syntax-fixer-combined.log",
      time: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: true,
      max_restarts: 5,
      min_uptime: "15s",
      restart_delay: 3000,
      cron_restart: "*/30 * * * *", // Run every 30 minutes;
      pmx: true},

    // Dependency Manager - runs every hour;
    {
  name: "dependency-manager",
      script: "./scripts/automation/intelligent-dependency-manager.cjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "600M",
      env: {
  NODE_ENV: "production"},
      error_file: "./logs/dependency-manager-error.log",
      out_file: "./logs/dependency-manager-out.log",
      log_file: "./logs/dependency-manager-combined.log",
      time: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: true,
      max_restarts: 3,
      min_uptime: "20s",
      restart_delay: 5000,
      cron_restart: "0 * * * *", // Run every hour;
      pmx: true},

    // Build Monitor - runs every 15 minutes;
    {
  name: "build-monitor",
      script: "./scripts/automation/build-monitor.cjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "400M",
      env: {
  NODE_ENV: "production"},
      error_file: "./logs/build-monitor-error.log",
      out_file: "./logs/build-monitor-out.log",
      log_file: "./logs/build-monitor-combined.log",
      time: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: true,
      max_restarts: 5,
      min_uptime: "10s",
      restart_delay: 2000,
      cron_restart: "*/15 * * * *", // Run every 15 minutes;
      pmx: true},

    // Log Cleaner - runs daily at 2 AM;
    {
  name: "log-cleaner",
      script: "./scripts/log-cleaner.js",
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: "200M",
      env: {
  NODE_ENV: "production"},
      error_file: "./logs/log-cleaner-error.log",
      out_file: "./logs/log-cleaner-out.log",
      log_file: "./logs/log-cleaner-combined.log",
      time: false,
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: false,
      max_restarts: 3,
      min_uptime: "5s",
      restart_delay: 2000,
      cron_restart: "0 2 * * *", // Run daily at 2 AM;
      pmx: true;
}
      pmx: true},

    // PM2 Sync Automation - runs continuously with remote-first strategy;
    {
  name: "pm2-sync-automation",
      script: "./scripts/automation/pm2-sync-automation.cjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
  NODE_ENV: "production",
        AUTOMATION_INTERVAL: "30000", // 30 seconds;
        BUILD_INTERVAL: "300000", // 5 minutes;
        TEST_INTERVAL: "600000", // 10 minutes;
        SECURITY_INTERVAL: "1800000", // 30 minutes;
        REMOTE_FIRST_STRATEGY: "true"},
      error_file: "./logs/pm2-sync-automation-error.log",
      out_file: "./logs/pm2-sync-automation-out.log",
      log_file: "./logs/pm2-sync-automation-combined.log",
      time: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: true,
      max_restarts: 5,
      min_uptime: "10s",
      restart_delay: 3000,
      pmx: true},

    // PM2 Sync Monitor - runs continuously for health monitoring;
    {
  name: "pm2-sync-monitor",
      script: "./scripts/automation/pm2-sync-monitor.cjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "256M",
      env: {
  NODE_ENV: "production",
        MONITOR_INTERVAL: "60000", // 1 minute;
        REMOTE_FIRST_STRATEGY: "true"},
      error_file: "./logs/pm2-sync-monitor-error.log",
      out_file: "./logs/pm2-sync-monitor-out.log",
      log_file: "./logs/pm2-sync-monitor-combined.log",
      time: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: true,
      max_restarts: 3,
      min_uptime: "15s",
      restart_delay: 5000,
      pmx: true},

    // PM2 Sync Automation - runs continuously with remote-first strategy;
    {
  name: "pm2-sync-automation",
      script: "./scripts/automation/pm2-sync-automation.cjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
  NODE_ENV: "production",
        AUTOMATION_INTERVAL: "30000", // 30 seconds;
        BUILD_INTERVAL: "300000", // 5 minutes;
        TEST_INTERVAL: "600000", // 10 minutes;
        SECURITY_INTERVAL: "1800000", // 30 minutes;
        REMOTE_FIRST_STRATEGY: "true"},
      error_file: "./logs/pm2-sync-automation-error.log",
      out_file: "./logs/pm2-sync-automation-out.log",
      log_file: "./logs/pm2-sync-automation-combined.log",
      time: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: true,
      max_restarts: 5,
      min_uptime: "10s",
      restart_delay: 3000,
      pmx: true},

    // PM2 Sync Monitor - runs continuously for health monitoring;
    {
  name: "pm2-sync-monitor",
      script: "./scripts/automation/pm2-sync-monitor.cjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "256M",
      env: {
  NODE_ENV: "production",
        MONITOR_INTERVAL: "60000", // 1 minute;
        REMOTE_FIRST_STRATEGY: "true"},
      error_file: "./logs/pm2-sync-monitor-error.log",
      out_file: "./logs/pm2-sync-monitor-out.log",
      log_file: "./logs/pm2-sync-monitor-combined.log",
      time: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: true,
      max_restarts: 3,
      min_uptime: "15s",
      restart_delay: 5000,
      pmx: true}],

        NODE_ENV: production";
},
      cron_restart: "0 */6 * * * // Every 6 hours;
      log_file: logs/auto-fix-and-build.log,
      out_file: logs/auto-fix-and-build-out.log,
      error_file: logs/auto-fix-and-build-error.log";
}
  ],
  deploy: {
  production: {
  user: "root;
      host: localhost,
      ref: origin/main;
      repo: git@github.com:your-username/bolt.new.zion.app.git",
      path: "/workspace/production,
      pre-deploy-local: ,
      post-deploy": "npm install && npm run build && pm2 reload ecosystem.config.cjs --env production,
      pre-setup: ";
}
  }
}
  ],

  deploy: {
  production: {
  user: "deploy",
      host: "localhost",
      ref: "origin/main",
      repo: "git@github.com:your-username/your-repo.git",
      path: "/var/www/production",
      "post-deploy":;
        "npm install && pm2 reload ecosystem.config.cjs --env production",,
},,
},,
}
>>>>>>> origin/automation-fixes
=======
module.exports = {
  apps: [
    {
      name: "zion-app",
      script: "npm",
      args: "start",
      interpreter: "none",
      cwd: __dirname,
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
  ]
};
>>>>>>> origin/automation/changelog
