<<<<<<< HEAD
module.exports = { apps: [/ Main application { name: "bolt-app","" script: "npm","" args: "start","" cwd: "./"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "development"," PORT: 3000 }," env_production: {" NODE_ENV: "production","" NODE_OPTIONS: "--max-old-space-size=6144 --openssl-legacy-provider" },"" log_file: "./automation/logs/bolt-app.log","" error_file: "./automation/logs/bolt-app-error.log","" out_file: "./automation/logs/bolt-app-out.log" }, / MASTER ERROR FIXING AUTOMATIONS (HIGHEST PRIORITY) {"" name: "master-error-fixer","" script: "./scripts/automation/master-error-fixer.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production","" AUTOMATION_INTERVAL: "1800000" / 30 minutes },"" cron_restart: "*/30 * * * *", / Every 30 minutes"" log_file: "./automation/logs/master-error-fixer.log","" error_file: "./automation/logs/master-error-fixer-error.log","" out_file: "./automation/logs/master-error-fixer-out.log" }, / TypeScript error fixer - runs every 15 minutes (HIGH PRIORITY) {"" name: "typescript-error-fixer","" script: "./scripts/automation/typescript-error-fixer.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production","" AUTOMATION_INTERVAL: "900000" / 15 minutes },"" cron_restart: "*/15 * * * *", / Every 15 minutes"" log_file: "./automation/logs/typescript-error-fixer.log","" error_file: "./automation/logs/typescript-error-fixer-error.log","" out_file: "./automation/logs/typescript-error-fixer-out.log" }, / ESLint error fixer - runs every 20 minutes (HIGH PRIORITY) {"" name: "eslint-error-fixer","" script: "./scripts/automation/eslint-error-fixer.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production","" AUTOMATION_INTERVAL: "1200000" / 20 minutes },"" cron_restart: "*/20 * * * *", / Every 20 minutes"" log_file: "./automation/logs/eslint-error-fixer.log","" error_file: "./automation/logs/eslint-error-fixer-error.log","" out_file: "./automation/logs/eslint-error-fixer-out.log" }, / Console error fixer - runs every 10 minutes (HIGHEST PRIORITY) {"" name: "console-error-fixer","" script: "./scripts/automation/console-error-fixer.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production","" AUTOMATION_INTERVAL: "600000" / 10 minutes },"" cron_restart: "*/10 * * * *", / Every 10 minutes"" log_file: "./automation/logs/console-error-fixer.log","" error_file: "./automation/logs/console-error-fixer-error.log","" out_file: "./automation/logs/console-error-fixer-out.log" }, / Comprehensive error fixer - runs every 45 minutes (HIGH PRIORITY) {"" name: "comprehensive-error-fixer","" script: "./scripts/automation/comprehensive-error-fixer.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production","" AUTOMATION_INTERVAL: "2700000" / 45 minutes },"" cron_restart: "*/45 * * * *", / Every 45 minutes"" log_file: "./automation/logs/comprehensive-error-fixer.log","" error_file: "./automation/logs/comprehensive-error-fixer-error.log","" out_file: "./automation/logs/comprehensive-error-fixer-out.log" }, / JSX error fixer - runs every 25 minutes (HIGH PRIORITY) {"" name: "jsx-error-fixer","" script: "./scripts/automation/jsx-error-fixer.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production","" AUTOMATION_INTERVAL: "1500000" / 25 minutes },"" cron_restart: "*/25 * * * *", / Every 25 minutes"" log_file: "./automation/logs/jsx-error-fixer.log","" error_file: "./automation/logs/jsx-error-fixer-error.log","" out_file: "./automation/logs/jsx-error-fixer-out.log" }, / ERROR PREVENTION AND MONITORING {"" name: "error-prevention-monitor","" script: "./scripts/automation/error-prevention-monitor.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production","" AUTOMATION_INTERVAL: "300000" / 5 minutes },"" cron_restart: "*/5 * * * *", / Every 5 minutes"" log_file: "./automation/logs/error-prevention-monitor.log","" error_file: "./automation/logs/error-prevention-monitor-error.log","" out_file: "./automation/logs/error-prevention-monitor-out.log" }, {"" name: "typescript-error-monitor","" script: "./scripts/automation/typescript-error-monitor.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production","" AUTOMATION_INTERVAL: "300000" / 5 minutes },"" cron_restart: "*/5 * * * *", / Every 5 minutes"" log_file: "./automation/logs/typescript-error-monitor.log","" error_file: "./automation/logs/typescript-error-monitor-error.log","" out_file: "./automation/logs/typescript-error-monitor-out.log" }, / BUILD AND TEST AUTOMATIONS {"" name: "daily-build-test","" script: "./scripts/automation/daily-build-test.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "production","" AUTOMATION_INTERVAL: "3600000" / 1 hour },"" cron_restart: "0 * * * *", / Every hour"" log_file: "./automation/logs/daily-build-test.log","" error_file: "./automation/logs/daily-build-test-error.log","" out_file: "./automation/logs/daily-build-test-out.log" }, {"" name: "build-error-detector","" script: "./scripts/automation/build-error-detector.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production","" AUTOMATION_INTERVAL: "1800000" / 30 minutes },"" cron_restart: "*/30 * * * *", / Every 30 minutes"" log_file: "./automation/logs/build-error-detector.log","" error_file: "./automation/logs/build-error-detector-error.log","" out_file: "./automation/logs/build-error-detector-out.log" }, / DEPENDENCY AND SECURITY AUTOMATIONS {"" name: "dependency-updates","" script: "./scripts/automation/dependency-updates.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production","" AUTOMATION_INTERVAL: "21600000" / 6 hours },"" cron_restart: "0 */6 * * *", / Every 6 hours"" log_file: "./automation/logs/dependency-updates.log","" error_file: "./automation/logs/dependency-updates-error.log","" out_file: "./automation/logs/dependency-updates-out.log" }, {"" name: "security-audit","" script: "./scripts/automation/security-audit.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production","" AUTOMATION_INTERVAL: "14400000" / 4 hours },"" cron_restart: "0 */4 * * *", / Every 4 hours"" log_file: "./automation/logs/security-audit.log","" error_file: "./automation/logs/security-audit-error.log","" out_file: "./automation/logs/security-audit-out.log" }, {"" name: "smart-dependency-intelligence","" script: "./scripts/automation/smart-dependency-intelligence.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "production" },"" cron_restart: "0 */6 * * *", / Every 6 hours"" log_file: "./automation/logs/smart-dependency-intelligence.log","" error_file: "./automation/logs/smart-dependency-intelligence-error.log","" out_file: "./automation/logs/smart-dependency-intelligence-out.log" }, / QUALITY AND PERFORMANCE AUTOMATIONS {"" name: "quality-checks","" script: "./scripts/automation/quality-checks.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production","" AUTOMATION_INTERVAL: "10800000" / 3 hours },"" cron_restart: "0 */3 * * *", / Every 3 hours"" log_file: "./automation/logs/quality-checks.log","" error_file: "./automation/logs/quality-checks-error.log","" out_file: "./automation/logs/quality-checks-out.log" }, {"" name: "performance-monitor","" script: "./scripts/automation/performance-monitor.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production","" AUTOMATION_INTERVAL: "7200000" / 2 hours },"" cron_restart: "0 */2 * * *", / Every 2 hours"" log_file: "./automation/logs/performance-monitor.log","" error_file: "./automation/logs/performance-monitor-error.log","" out_file: "./automation/logs/performance-monitor-out.log" }, {"" name: "continuous-improvement","" script: "./scripts/automation/continuous-improvement.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production","" AUTOMATION_INTERVAL: "7200000" / 2 hours },"" cron_restart: "0 */2 * * *", / Every 2 hours"" log_file: "./automation/logs/continuous-improvement.log","" error_file: "./automation/logs/continuous-improvement-error.log","" out_file: "./automation/logs/continuous-improvement-out.log" }, / INTELLIGENT AUTOMATION SYSTEMS {"" name: "ai-code-review-automation","" script: "./scripts/automation/ai-code-review-automation.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "production" },"" cron_restart: "0 */4 * * *", / Every 4 hours"" log_file: "./automation/logs/ai-code-review-automation.log","" error_file: "./automation/logs/ai-code-review-automation-error.log","" out_file: "./automation/logs/ai-code-review-automation-out.log" }, {"" name: "predictive-issue-detection","" script: "./scripts/automation/predictive-issue-detection.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "production" },"" cron_restart: "0 */3 * * *", / Every 3 hours"" log_file: "./automation/logs/predictive-issue-detection.log","" error_file: "./automation/logs/predictive-issue-detection-error.log","" out_file: "./automation/logs/predictive-issue-detection-out.log" }, {"" name: "intelligent-build-pipeline","" script: "./scripts/automation/intelligent-build-pipeline.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "production" },"" cron_restart: "0 */8 * * *", / Every 8 hours"" log_file: "./automation/logs/intelligent-build-pipeline.log","" error_file: "./automation/logs/intelligent-build-pipeline-error.log","" out_file: "./automation/logs/intelligent-build-pipeline-out.log" }, / MONITORING AND DASHBOARDS {"" name: "error-analytics-dashboard","" script: "./scripts/automation/error-analytics-dashboard.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "production","" AUTOMATION_INTERVAL: "300000" / 5 minutes },"" cron_restart: "*/5 * * * *", / Every 5 minutes"" log_file: "./automation/logs/error-analytics-dashboard.log","" error_file: "./automation/logs/error-analytics-dashboard-error.log","" out_file: "./automation/logs/error-analytics-dashboard-out.log" }, {"" name: "project-health-dashboard","" script: "./scripts/automation/project-health-dashboard.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "production","" AUTOMATION_INTERVAL: "600000" / 10 minutes },"" cron_restart: "*/10 * * * *", / Every 10 minutes"" log_file: "./automation/logs/project-health-dashboard.log","" error_file: "./automation/logs/project-health-dashboard-error.log","" out_file: "./automation/logs/project-health-dashboard-out.log" }, {"" name: "unified-automation-dashboard","" script: "./scripts/automation/unified-automation-dashboard.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "production","" AUTOMATION_INTERVAL: "300000" / 5 minutes },"" cron_restart: "*/5 * * * *", / Every 5 minutes"" log_file: "./automation/logs/unified-automation-dashboard.log","" error_file: "./automation/logs/unified-automation-dashboard-error.log","" out_file: "./automation/logs/unified-automation-dashboard-out.log" }, / RECOVERY AND MAINTENANCE {"" name: "auto-recovery-manager","" script: "./scripts/automation/auto-recovery-manager.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production","" AUTOMATION_INTERVAL: "60000" / 1 minute },"" cron_restart: "* * * * *", / Every minute"" log_file: "./automation/logs/auto-recovery-manager.log","" error_file: "./automation/logs/auto-recovery-manager-error.log","" out_file: "./automation/logs/auto-recovery-manager-out.log" }, {"" name: "critical-error-alert-system","" script: "./scripts/automation/critical-error-alert-system.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production","" AUTOMATION_INTERVAL: "30000" / 30 seconds },"" cron_restart: "*/1 * * * *", / Every minute"" log_file: "./automation/logs/critical-error-alert-system.log","" error_file: "./automation/logs/critical-error-alert-system-error.log","" out_file: "./automation/logs/critical-error-alert-system-out.log" }, / UTILITY AUTOMATIONS {"" name: "link-checker","" script: "./scripts/automation/link-checker.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production","" AUTOMATION_INTERVAL: "1800000" / 30 minutes },"" cron_restart: "*/30 * * * *", / Every 30 minutes"" log_file: "./automation/logs/link-checker.log","" error_file: "./automation/logs/link-checker-error.log","" out_file: "./automation/logs/link-checker-out.log" }, {"" name: "sitemap-runner","" script: "./scripts/automation/sitemap-runner.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production","" AUTOMATION_INTERVAL: "21600000" / 6 hours },"" cron_restart: "0 */6 * * *", / Every 6 hours"" log_file: "./automation/logs/sitemap-runner.log","" error_file: "./automation/logs/sitemap-runner-error.log","" out_file: "./automation/logs/sitemap-runner-out.log" }, {"" name: "front-maximizer","" script: "./scripts/automation/front-maximizer.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production","" AUTOMATION_INTERVAL: "14400000" / 4 hours },"" cron_restart: "0 */4 * * *", / Every 4 hours"" log_file: "./automation/logs/front-maximizer.log","" error_file: "./automation/logs/front-maximizer-error.log","" out_file: "./automation/logs/front-maximizer-out.log" } ]," deploy: { production: {" user: "root","" host: "localhost","" ref: "origin/main","" repo: "git@github.com:your-username/bolt.new.zion.app.git","" path: "/workspace/production"," "pre-deploy-local": ""," "post-deploy": "npm install && npm run build && pm2 reload ecosystem-enhanced.config.cjs --env production"," "pre-setup": "" } }};"""
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
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
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    },

    // NEW: AI-Powered Code Quality Predictor
    {
      name: 'ai-code-quality-predictor',
      script: './automation/ai-code-quality-predictor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './logs/ai-quality-predictor.log',
      error_file: './logs/ai-quality-predictor-error.log',
      out_file: './logs/ai-quality-predictor-out.log'
    },

    // NEW: Smart Build Optimization Engine
    {
      name: 'smart-build-optimizer',
      script: './automation/smart-build-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1.5G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './logs/smart-build-optimizer.log',
      error_file: './logs/smart-build-optimizer-error.log',
      out_file: './logs/smart-build-optimizer-out.log'
    },

    // NEW: Intelligent Dependency Conflict Resolver
    {
      name: 'intelligent-dependency-resolver',
      script: './automation/intelligent-dependency-resolver.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: './logs/intelligent-dependency-resolver.log',
      error_file: './logs/intelligent-dependency-resolver-error.log',
      out_file: './logs/intelligent-dependency-resolver-out.log'
    },

    // Enhanced Build Health Monitor
    {
      name: 'build-health-monitor-enhanced',
      script: './automation/build-health-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './logs/build-monitor-enhanced.log',
      error_file: './logs/build-monitor-enhanced-error.log',
      out_file: './logs/build-monitor-enhanced-out.log'
    },

    // Enhanced Code Quality Monitor
    {
      name: 'code-quality-monitor-enhanced',
      script: './automation/code-quality-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */3 * * *', // Every 3 hours
      log_file: './logs/code-quality-enhanced.log',
      error_file: './logs/code-quality-enhanced-error.log',
      out_file: './logs/code-quality-enhanced-out.log'
    },

    // Enhanced Dependency Monitor
    {
      name: 'dependency-monitor-enhanced',
      script: './automation/dependency-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './logs/dependency-enhanced.log',
      error_file: './logs/dependency-enhanced-error.log',
      out_file: './logs/dependency-enhanced-out.log'
    },

    // Enhanced Build Automation
    {
      name: 'build-automation-enhanced',
      script: './automation/build-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1.5G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */3 * * *', // Every 3 hours
      log_file: './logs/build-automation-enhanced.log',
      error_file: './logs/build-automation-enhanced-error.log',
      out_file: './logs/build-automation-enhanced-out.log'
    },

    // Enhanced File Integrity Monitor
    {
      name: 'file-integrity-monitor-enhanced',
      script: './automation/file-integrity-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './logs/file-integrity-enhanced.log',
      error_file: './logs/file-integrity-enhanced-error.log',
      out_file: './logs/file-integrity-enhanced-out.log'
    },

    // Enhanced Performance Optimizer
    {
      name: 'performance-optimizer-enhanced',
      script: './automation/performance-optimizer.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './logs/performance-optimizer-enhanced.log',
      error_file: './logs/performance-optimizer-enhanced-error.log',
      out_file: './logs/performance-optimizer-enhanced-out.log'
    },

    // Enhanced Lint Monitor
    {
      name: 'lint-monitor-enhanced',
      script: './automation/lint-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */1 * * *', // Every hour
      log_file: './logs/lint-monitor-enhanced.log',
      error_file: './logs/lint-monitor-enhanced-error.log',
      out_file: './logs/lint-monitor-enhanced-out.log'
    },

    // Enhanced Intelligent Orchestrator
    {
      name: 'intelligent-orchestrator-enhanced',
      script: './automation/intelligent-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1.5G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './logs/intelligent-orchestrator-enhanced.log',
      error_file: './logs/intelligent-orchestrator-enhanced-error.log',
      out_file: './logs/intelligent-orchestrator-enhanced-out.log'
    },

    // Enhanced Automation Dashboard
    {
      name: 'automation-dashboard-enhanced',
      script: './automation/automation-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '*/15 * * * *', // Every 15 minutes
      log_file: './logs/automation-dashboard-enhanced.log',
      error_file: './logs/automation-dashboard-enhanced-error.log',
      out_file: './logs/automation-dashboard-enhanced-out.log'
    },

    // Enhanced Project Health Monitor
    {
      name: 'project-health-monitor-enhanced',
      script: './scripts/automation/project-health-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1.5G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '*/10 * * * *', // Every 10 minutes
      log_file: './logs/project-health-monitor-enhanced.log',
      error_file: './logs/project-health-monitor-enhanced-error.log',
      out_file: './logs/project-health-monitor-enhanced-out.log'
    },

    // Enhanced TypeScript Syntax Fixer
    {
      name: 'typescript-syntax-fixer-enhanced',
      script: './scripts/automation/typescript-syntax-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '*/5 * * * *', // Every 5 minutes
      log_file: './logs/typescript-syntax-fixer-enhanced.log',
      error_file: './logs/typescript-syntax-fixer-enhanced-error.log',
      out_file: './logs/typescript-syntax-fixer-enhanced-out.log'
    },

    // Enhanced Dependency Manager
    {
      name: 'dependency-manager-enhanced',
      script: './scripts/automation/dependency-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */3 * * *', // Every 3 hours
      log_file: './logs/dependency-manager-enhanced.log',
      error_file: './logs/dependency-manager-enhanced-error.log',
      out_file: './logs/dependency-manager-enhanced-out.log'
    },

    // Enhanced Project Health Dashboard
    {
      name: 'project-health-dashboard-enhanced',
      script: './scripts/automation/project-health-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '*/5 * * * *', // Every 5 minutes
      log_file: './logs/project-health-dashboard-enhanced.log',
      error_file: './logs/project-health-dashboard-enhanced-error.log',
      out_file: './logs/project-health-dashboard-enhanced-out.log'
    }
  ],

  deploy: {
    production: {
      user: 'miami2',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/Users/miami2/zion-app-clone',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem-enhanced.config.cjs --env production',
      'pre-setup': ''
    };
  };
<<<<<<< HEAD
};
=======
};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
