module.exports = {
  apps: [
    // Main application
    {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
=======
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
      name: 'bolt-zion-app',
      script: 'npm',
      args: 'start',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
        NODE_ENV: 'development',
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
=======
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
        NODE_ENV: 'production',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    },

    // 🛡️ NEW: Comprehensive Error Prevention - runs every 10 minutes (HIGHEST PRIORITY)
    {
      name: 'comprehensive-error-prevention',
      script: './scripts/automation/comprehensive-error-prevention.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      }
    },

    // Merge conflict resolver - runs every 10 minutes (HIGHEST PRIORITY)
    {
      name: 'merge-conflict-resolver',
      script: './scripts/automation/merge-conflict-resolver.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      }
    },

    // Comprehensive error fixer - runs every 30 minutes
    {
      name: 'comprehensive-error-fixer',
      script: './scripts/automation/comprehensive-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      }
    },

    // Linting error fixer - runs every 20 minutes
    {
      name: 'linting-error-fixer',
      script: './scripts/automation/linting-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1200000' // 20 minutes
      }
    },

    // TypeScript error fixer - runs every 25 minutes
    {
      name: 'typescript-error-fixer',
      script: './scripts/automation/typescript-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1500000' // 25 minutes
      }
    },

    // Continuous console error fixer - runs every 15 minutes
    {
      name: 'error-fixer',
      script: './scripts/automation/error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      }
    },

    // 🧠 NEW: Intelligent Predictive Monitor - runs every 5 minutes (HIGHEST PRIORITY)
    {
      name: 'ai-code-review',
      script: './scripts/automation/ai-code-review-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'ai-code-review'
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: './logs/ai-code-review.log',
      error_file: './logs/ai-code-review-error.log',
      out_file: './logs/ai-code-review-out.log'
    },

    // NEW: Smart Build Optimization
    {
      name: 'smart-build-optimization',
      script: './scripts/automation/smart-build-optimization.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'smart-build-optimization'
      },
      cron_restart: '0 */12 * * *', // Every 12 hours
      log_file: './logs/smart-build-optimization.log',
      error_file: './logs/smart-build-optimization-error.log',
      out_file: './logs/smart-build-optimization-out.log'
    },

    // NEW: Intelligent Error Prediction & Prevention
    {
      name: 'error-prediction',
      script: './scripts/automation/intelligent-error-prediction.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'error-prediction'
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './logs/error-prediction.log',
      error_file: './logs/error-prediction-error.log',
      out_file: './logs/error-prediction-out.log'
    },

    // Enhanced Build Health Monitor
    {
      name: 'build-health-monitor',
      script: './automation/build-health-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'build-health-monitor'
      },
      cron_restart: '0 5 * * *', // Restart daily at 5 AM
      log_file: './logs/build-monitor.log',
      error_file: './logs/build-monitor-error.log',
      out_file: './logs/build-monitor-out.log'
    },

    // Enhanced Code Quality Monitor
    {
      name: 'code-quality-monitor',
      script: './automation/code-quality-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        NODE_ENV: 'production',
=======
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'auto-commit-fixes',
        COMMIT_FREQUENCY: 'hourly',
        AUTO_PUSH: 'false',
      },
      cron_restart: '0 6 * * *', // Restart daily at 6 AM
      log_file: './logs/code-quality.log',
      error_file: './logs/code-quality-error.log',
      out_file: './logs/code-quality-out.log'
    },

    // Enhanced Dependency Health Monitor
    {
      name: 'performance-monitor',
      script: './scripts/automation/performance-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      }
    },

    // Continuous quality checks - runs every 3 hours
    {
      name: 'quality-checks',
      script: './scripts/automation/quality-checks.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '10800000' // 3 hours
      }
    },

    // Continuous link integrity checker - runs every 2 hours
    {
      name: 'link-integrity',
      script: './scripts/automation/link-integrity.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      }
    },

    // Continuous front maximizer - runs every 4 hours
    {
      name: 'front-maximizer',
      script: './scripts/automation/front-maximizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '14400000' // 4 hours
      }
    },

    // Error fixing orchestrator - runs every hour
    {
      name: 'error-fixing-orchestrator',
      script: './scripts/automation/error-fixing-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000' // 1 hour
      }
    },

    // Continuous sitemap runner - runs every 6 hours
    {
      name: 'sitemap-runner',
      script: './scripts/automation/sitemap-runner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '21600000' // 6 hours
      }
    }
  ]
=======
=======
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
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

  deploy: {
    production: {
      user: 'miami2',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/Users/miami2/zion-app-clone',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.cjs --env production',
      'pre-setup': ''
    }
  }
};
=======
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
};
=======
};
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
};
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
};
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
