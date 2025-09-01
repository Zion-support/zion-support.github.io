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

    // INTELLIGENT ERROR PREVENTION AUTOMATION - HIGHEST PRIORITY (runs every 30 seconds)
    {
      name: 'intelligent-error-prevention',
      script: './scripts/automation/intelligent-error-prevention-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '30000', // 30 seconds
        ENABLE_FILE_WATCHING: 'true',
        ENABLE_REAL_TIME_FIXES: 'true'
      }
    },

    // Enhanced Comprehensive Error Fixer - runs every 5 minutes
    {
      name: 'enhanced-comprehensive-error-fixer',
      script: './scripts/automation/comprehensive-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000', // 5 minutes
        ENABLE_ADVANCED_FIXES: 'true'
      }
    },

    // Enhanced TypeScript Error Fixer - runs every 10 minutes
    {
      name: 'enhanced-typescript-error-fixer',
      script: './scripts/automation/typescript-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000', // 10 minutes
        ENABLE_PATTERN_MATCHING: 'true'
      }
    },

    // Enhanced General Error Fixer - runs every 15 minutes
    {
      name: 'enhanced-general-error-fixer',
      script: './scripts/automation/error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000', // 15 minutes
        ENABLE_SMART_FIXES: 'true'
      }
    },

    // Enhanced Console Error Fixer - runs every 10 minutes
    {
      name: 'enhanced-console-error-fixer',
      script: './scripts/automation/console-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000', // 10 minutes
        ENABLE_PATTERN_DETECTION: 'true'
      }
    },

    // Enhanced Linting Fix Automation - runs every 15 minutes
    {
      name: 'enhanced-linting-fix-automation',
      script: './scripts/automation/linting-fix-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000', // 15 minutes
        ENABLE_AUTO_FIXES: 'true'
      }
    },

    // Enhanced TypeScript Fix Automation - runs every 20 minutes
    {
      name: 'enhanced-typescript-fix-automation',
      script: './scripts/automation/typescript-fix-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1200000', // 20 minutes
        ENABLE_SYNTAX_FIXES: 'true'
      }
    },

    // Enhanced TypeScript Syntax Fixer - runs every 25 minutes
    {
      name: 'enhanced-typescript-syntax-fixer',
      script: './scripts/automation/typescript-syntax-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1500000', // 25 minutes
        ENABLE_STRUCTURE_FIXES: 'true'
      }
    },

    // Enhanced Link Checker - runs every 30 minutes
    {
      name: 'enhanced-link-checker',
      script: './scripts/automation/link-checker.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000', // 30 minutes
        ENABLE_AUTO_REPAIR: 'true'
      }
    },

    // Enhanced Link Integrity Checker - runs every 45 minutes
    {
      name: 'enhanced-link-integrity',
      script: './scripts/automation/link-integrity.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '2700000', // 45 minutes
        ENABLE_DEEP_CHECKING: 'true'
      }
    },

    // Enhanced Continuous Improvement - runs every hour
    {
      name: 'enhanced-continuous-improvement',
      script: './scripts/automation/continuous-improvement.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000', // 1 hour
        ENABLE_LEARNING_MODE: 'true'
      }
    },

    // Enhanced Daily Build and Test - runs every 2 hours
    {
      name: 'enhanced-daily-build-test',
      script: './scripts/automation/daily-build-test.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000', // 2 hours
        ENABLE_SMART_BUILD: 'true'
      }
    },

    // Enhanced Security Audit - runs every 4 hours
    {
      name: 'enhanced-security-audit',
      script: './scripts/automation/security-audit.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '14400000', // 4 hours
        ENABLE_VULNERABILITY_SCANNING: 'true'
      }
    },

    // Enhanced Dependency Updates - runs every 6 hours
    {
      name: 'enhanced-dependency-updates',
      script: './scripts/automation/dependency-updates.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '21600000', // 6 hours
        ENABLE_AUTO_UPDATES: 'true'
      }
    },

    // Enhanced Performance Monitor - runs every 2 hours
    {
      name: 'enhanced-performance-monitor',
      script: './scripts/automation/performance-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000', // 2 hours
        ENABLE_OPTIMIZATION: 'true'
      }
    },

    // Enhanced Quality Checks - runs every 3 hours
    {
      name: 'enhanced-quality-checks',
      script: './scripts/automation/quality-checks.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '10800000', // 3 hours
        ENABLE_CODE_ANALYSIS: 'true'
      }
    },

    // Enhanced Front Maximizer - runs every 4 hours
    {
      name: 'enhanced-front-maximizer',
      script: './scripts/automation/front-maximizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '14400000', // 4 hours
        ENABLE_UI_OPTIMIZATION: 'true'
      }
    },

    // Enhanced Sitemap Runner - runs every 6 hours
    {
      name: 'enhanced-sitemap-runner',
      script: './scripts/automation/sitemap-runner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '21600000', // 6 hours
        ENABLE_AUTO_GENERATION: 'true'
      }
    },

    // Enhanced PM2 Monitor - runs every 5 minutes
    {
      name: 'enhanced-pm2-monitor',
      script: './scripts/automation/pm2-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000', // 5 minutes
        ENABLE_HEALTH_MONITORING: 'true'
      }
    },

    // Enhanced Automation Runner - runs every 10 minutes
    {
      name: 'enhanced-automation-runner',
      script: './scripts/automation/enhanced-automation-runner.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000', // 10 minutes
        ENABLE_COORDINATION: 'true'
      }
    },

    // Enhanced AI Code Analyzer - runs every 15 minutes
    {
      name: 'enhanced-ai-code-analyzer',
      script: './scripts/automation/ai-code-analyzer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000', // 15 minutes
        ENABLE_AI_ANALYSIS: 'true'
      }
    },

    // Enhanced AI Code Optimizer - runs every 20 minutes
    {
      name: 'enhanced-ai-code-optimizer',
      script: './scripts/automation/ai-code-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1200000', // 20 minutes
        ENABLE_AI_OPTIMIZATION: 'true'
      }
    },

    // Enhanced Code Quality Monitor - runs every 25 minutes
    {
      name: 'enhanced-code-quality-monitor',
      script: './scripts/automation/code-quality-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1500000', // 25 minutes
        ENABLE_QUALITY_TRACKING: 'true'
      }
    },

    // Enhanced Project Health Monitor - runs every 30 minutes
    {
      name: 'enhanced-project-health-monitor',
      script: './scripts/automation/project-health-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000', // 30 minutes
        ENABLE_HEALTH_SCORING: 'true'
      }
    },

    // Enhanced Predictive Maintenance Monitor - runs every 45 minutes
    {
      name: 'enhanced-predictive-maintenance-monitor',
      script: './scripts/automation/predictive-maintenance-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '2700000', // 45 minutes
        ENABLE_PREDICTIVE_ANALYSIS: 'true'
      }
    },

    // Enhanced Intelligent Automation Orchestrator - runs every 5 minutes
    {
      name: 'enhanced-intelligent-automation-orchestrator',
      script: './scripts/automation/intelligent-automation-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000', // 5 minutes
        ENABLE_ORCHESTRATION: 'true'
      }
    },

    // Enhanced Intelligent Code Refactorer - runs every 10 minutes
    {
      name: 'enhanced-intelligent-code-refactorer',
      script: './scripts/automation/intelligent-code-refactorer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000', // 10 minutes
        ENABLE_SMART_REFACTORING: 'true'
      }
    },

    // Enhanced Intelligent Dependency Manager - runs every 15 minutes
    {
      name: 'enhanced-intelligent-dependency-manager',
      script: './scripts/automation/intelligent-dependency-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000', // 15 minutes
        ENABLE_DEPENDENCY_ANALYSIS: 'true'
      }
    },

    // Enhanced Intelligent Predictive Monitor - runs every 20 minutes
    {
      name: 'enhanced-intelligent-predictive-monitor',
      script: './scripts/automation/intelligent-predictive-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1200000', // 20 minutes
        ENABLE_PREDICTIVE_MONITORING: 'true'
      }
    },

    // Enhanced Auto Fix Scheduler - runs every 5 minutes
    {
      name: 'enhanced-auto-fix-scheduler',
      script: './scripts/automation/auto-fix-scheduler.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000', // 5 minutes
        ENABLE_SCHEDULED_FIXES: 'true'
      }
    },

    // Enhanced Automation Dashboard - runs every 2 minutes
    {
      name: 'enhanced-automation-dashboard',
      script: './scripts/automation/automation-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '120000', // 2 minutes
        ENABLE_DASHBOARD_MONITORING: 'true'
      }
    },

    // Enhanced Automation Orchestrator - runs every 3 minutes
    {
      name: 'enhanced-automation-orchestrator',
      script: './scripts/automation/automation-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '180000', // 3 minutes
        ENABLE_COORDINATED_AUTOMATION: 'true'
      }
    },

    // Enhanced CI Automation - runs every 5 minutes
    {
      name: 'enhanced-ci-automation',
      script: './scripts/automation/ci-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000', // 5 minutes
        ENABLE_CI_INTEGRATION: 'true'
      }
    },

    // Enhanced Enhanced CI/CD Automation - runs every 10 minutes
    {
      name: 'enhanced-enhanced-ci-cd-automation',
      script: './scripts/automation/enhanced-ci-cd-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000', // 10 minutes
        ENABLE_CD_INTEGRATION: 'true'
      }
    },

    // Enhanced Enhanced Link Checker - runs every 15 minutes
    {
      name: 'enhanced-enhanced-link-checker',
      script: './scripts/automation/enhanced-link-checker.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000', // 15 minutes
        ENABLE_DEEP_LINK_ANALYSIS: 'true'
      }
    },

    // Enhanced Smart Build Optimizer - runs every 20 minutes
    {
      name: 'enhanced-smart-build-optimizer',
      script: './scripts/automation/smart-build-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1200000', // 20 minutes
        ENABLE_BUILD_OPTIMIZATION: 'true'
      }
    },

    // Enhanced Smart Deployment Automation - runs every 30 minutes
    {
      name: 'enhanced-smart-deployment-automation',
      script: './scripts/automation/smart-deployment-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000', // 30 minutes
        ENABLE_DEPLOYMENT_OPTIMIZATION: 'true'
      }
    },

    // Enhanced Smart Documentation Generator - runs every 2 hours
    {
      name: 'enhanced-smart-documentation-generator',
      script: './scripts/automation/smart-documentation-generator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000', // 2 hours
        ENABLE_AUTO_DOCUMENTATION: 'true'
      }
    },

    // Enhanced Smart Performance Optimizer - runs every 3 hours
    {
      name: 'enhanced-smart-performance-optimizer',
      script: './scripts/automation/smart-performance-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '10800000', // 3 hours
        ENABLE_PERFORMANCE_OPTIMIZATION: 'true'
      }
    },

    // Enhanced Test Automation - runs every 4 hours
    {
      name: 'enhanced-test-automation',
      script: './scripts/automation/test-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '14400000', // 4 hours
        ENABLE_AUTO_TESTING: 'true'
      }
    },

    // Enhanced Adaptive Test Generator - runs every 6 hours
    {
      name: 'enhanced-adaptive-test-generator',
      script: './scripts/automation/adaptive-test-generator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '21600000', // 6 hours
        ENABLE_ADAPTIVE_TESTING: 'true'
      }
    },

    // Enhanced Advanced Performance Monitor - runs every 2 hours
    {
      name: 'enhanced-advanced-performance-monitor',
      script: './scripts/automation/advanced-performance-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000', // 2 hours
        ENABLE_ADVANCED_MONITORING: 'true'
      }
    },

    // Enhanced Security Automation - runs every 3 hours
    {
      name: 'enhanced-security-automation',
      script: './scripts/automation/security-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '10800000', // 3 hours
        ENABLE_SECURITY_SCANNING: 'true'
      }
    },

    // Enhanced Enhanced Security Automation - runs every 4 hours
    {
      name: 'enhanced-enhanced-security-automation',
      script: './scripts/automation/enhanced-security-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '14400000', // 4 hours
        ENABLE_ADVANCED_SECURITY: 'true'
      }
    },

    // Enhanced Enhanced Testing Automation - runs every 5 hours
    {
      name: 'enhanced-enhanced-testing-automation',
      script: './scripts/automation/enhanced-testing-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '18000000', // 5 hours
        ENABLE_COMPREHENSIVE_TESTING: 'true'
      }
    }
  ]
};