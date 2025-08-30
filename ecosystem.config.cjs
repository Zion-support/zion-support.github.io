module.exports = {
  apps: [
    // Main application
    {
      name: 'zion-app',
      script: 'npm',
      args: 'start',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=6144 --openssl-legacy-provider'
      },
      env_production: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=6144 --openssl-legacy-provider'
      }
    },
    
    // Backend server
    {
      name: 'zion-backend',
      script: 'npm',
      args: 'start',
      cwd: './server',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    },

    // 🧠 NEW: Intelligent Predictive Monitor - runs every 5 minutes (HIGHEST PRIORITY)
    {
      name: 'intelligent-predictive-monitor',
      script: './scripts/automation/intelligent-predictive-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000' // 5 minutes
      }
    },

    // 🤖 NEW: AI Code Optimizer - runs every hour
    {
      name: 'ai-code-optimizer',
      script: './scripts/automation/ai-code-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000' // 1 hour
      }
    },

    // 📦 NEW: Smart Dependency Manager - runs every 6 hours
    {
      name: 'smart-dependency-manager',
      script: './scripts/automation/smart-dependency-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '21600000' // 6 hours
      }
    },

    // Continuous console error fixer - runs every 15 minutes (HIGHEST PRIORITY)
    {
      name: 'console-error-fixer',
      script: './scripts/automation/console-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      }
    },

    // Enhanced Build Health Monitor with AI-powered issue detection
    {
      name: 'ai-build-monitor',
      script: './automation/ai-build-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AI_MODE: 'enabled',
        LEARNING_ENABLED: 'true'
      },
      cron_restart: '*/30 * * * *', // Every 30 minutes
      log_file: './logs/ai-build-monitor.log',
      error_file: './logs/ai-build-monitor-error.log',
      out_file: './logs/ai-build-monitor-out.log'
    },

    // Intelligent Code Quality Monitor with pattern recognition
    {
      name: 'smart-code-monitor',
      script: './automation/smart-code-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PATTERN_LEARNING: 'enabled',
        AUTO_FIX_THRESHOLD: '0.8'
      },
      cron_restart: '*/15 * * * *', // Every 15 minutes
      log_file: './logs/smart-code-monitor.log',
      error_file: './logs/smart-code-monitor-error.log',
      out_file: './logs/smart-code-monitor-out.log'
    },

    // Advanced Dependency Intelligence System
    {
      name: 'dependency-intelligence',
      script: './automation/dependency-intelligence.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        VULNERABILITY_SCANNING: 'enabled',
        AUTO_UPDATE_SAFE: 'true',
        DEPENDENCY_ANALYSIS: 'deep'
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './logs/dependency-intelligence.log',
      error_file: './logs/dependency-intelligence-error.log',
      out_file: './logs/dependency-intelligence-out.log'
    },

    // Performance Optimization Engine
    {
      name: 'performance-engine',
      script: './automation/performance-engine.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PERFORMANCE_MONITORING: 'enabled',
        AUTO_OPTIMIZATION: 'true',
        BUNDLE_ANALYSIS: 'enabled'
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './logs/performance-engine.log',
      error_file: './logs/performance-engine-error.log',
      out_file: './logs/performance-engine-out.log'
    },

    // Enhanced Project Health Dashboard with ML insights
    {
      name: 'ml-health-dashboard',
      script: './automation/ml-health-dashboard.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        ML_INSIGHTS: 'enabled',
        PREDICTIVE_ANALYTICS: 'true',
        HEALTH_SCORING: 'enabled'
      },
      cron_restart: '*/5 * * * *', // Every 5 minutes
      log_file: './logs/ml-health-dashboard.log',
      error_file: './logs/ml-health-dashboard-error.log',
      out_file: './logs/ml-health-dashboard-out.log'
    },

    // Legacy systems (keeping for compatibility)
    {
      name: 'dependency-monitor',
      script: './automation/dependency-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 12 * * *', // Restart daily at noon
      log_file: './logs/dependency.log',
      error_file: './logs/dependency-error.log',
      out_file: './logs/dependency-out.log'
    },

    {
      name: 'build-automation',
      script: './automation/build-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 3 * * *', // Restart daily at 3 AM
      log_file: './logs/file-integrity.log',
      error_file: './logs/file-integrity-error.log',
      out_file: './logs/file-integrity-out.log'
    },

    {
      name: 'project-health-monitor',
      script: './scripts/automation/project-health-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '*/15 * * * *', // Every 15 minutes
      log_file: './logs/project-health-monitor.log',
      error_file: './logs/project-health-monitor-error.log',
      out_file: './logs/project-health-monitor-out.log'
    },

    {
      name: 'typescript-syntax-fixer',
      script: './scripts/automation/typescript-syntax-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '*/10 * * * *', // Every 10 minutes
      log_file: './logs/typescript-syntax-fixer.log',
      error_file: './logs/typescript-syntax-fixer-error.log',
      out_file: './logs/typescript-syntax-fixer-out.log'
    },

    {
      name: 'dependency-manager',
      script: './scripts/automation/dependency-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './logs/dependency-manager.log',
      error_file: './logs/dependency-manager-error.log',
      out_file: './logs/dependency-manager-out.log'
    },

    {
      name: 'project-health-dashboard',
      script: './scripts/automation/project-health-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '*/5 * * * *', // Every 5 minutes
      log_file: './logs/project-health-dashboard.log',
      error_file: './logs/project-health-dashboard-error.log',
      out_file: './logs/project-health-dashboard-out.log'
    },

    // Continuous link checker - runs every 30 minutes
    {
      name: 'link-checker',
      script: './scripts/automation/link-checker.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      }
    },

    // Continuous improvement - runs every 2 hours
    {
      name: 'continuous-improvement',
      script: './scripts/automation/continuous-improvement.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      }
    },

    // Continuous build and test - runs every hour
    {
      name: 'daily-build-test',
      script: './scripts/automation/daily-build-test.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000' // 1 hour
      }
    },

    // Continuous security audit - runs every 4 hours
    {
      name: 'security-audit',
      script: './scripts/automation/security-audit.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '14400000' // 4 hours
      }
    },

    // Continuous dependency updates - runs every 6 hours
    {
      name: 'dependency-updates',
      script: './scripts/automation/dependency-updates.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '21600000' // 6 hours
      }
    },

    // Continuous performance monitoring - runs every 2 hours
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
    },

    // NEW: AI Code Analyzer - runs every 4 hours
    {
      name: 'ai-code-analyzer',
      script: './scripts/automation/ai-code-analyzer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '14400000' // 4 hours
      }
    },

    // NEW: Smart Deployment Optimizer - runs every 6 hours
    {
      name: 'smart-deployment-optimizer',
      script: './scripts/automation/smart-deployment-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '21600000' // 6 hours
      }
    },

    // NEW: Adaptive Test Generator - runs every 8 hours
    {
      name: 'adaptive-test-generator',
      script: './scripts/automation/adaptive-test-generator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '28800000' // 8 hours
      }
    },

    // NEW: Intelligent Code Refactorer - runs every 12 hours
    {
      name: 'intelligent-code-refactorer',
      script: './scripts/automation/intelligent-code-refactorer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '43200000' // 12 hours
      }
    },

    // NEW: Smart Documentation Generator - runs every 24 hours
    {
      name: 'smart-documentation-generator',
      script: './scripts/automation/smart-documentation-generator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '86400000' // 24 hours
      }
    },

    // NEW: Predictive Maintenance Monitor - runs every 2 hours
    {
      name: 'predictive-maintenance-monitor',
      script: './scripts/automation/predictive-maintenance-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      }
    }
  ]
};
