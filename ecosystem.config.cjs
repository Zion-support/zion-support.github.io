module.exports = {
  apps: [
    // Main application
    {
      name: 'zion-app',
      script: 'npm',
<<<<<<< HEAD
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
=======
      args: 'run dev',
      cwd: './',
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
<<<<<<< HEAD
=======
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      error_file: './logs/zion-app-error.log',
      out_file: './logs/zion-app-out.log',
      log_file: './logs/zion-app-combined.log',
      time: true
    },
<<<<<<< HEAD
    
    // Backend services
    {
      name: 'zion-backend',
      script: 'npm',
      args: 'run dev:backend',
=======

    // Auto Error Fixer - Continuously monitors and fixes errors
    {
      name: 'auto-error-fixer',
      script: './scripts/automation/auto-error-fixer.cjs',
      cwd: './',
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
<<<<<<< HEAD
      env: {
        NODE_ENV: 'development',
        PORT: 5000
      },
      error_file: './logs/zion-backend-error.log',
      out_file: './logs/zion-backend-out.log',
      log_file: './logs/zion-backend-combined.log',
      time: true
=======
      error_file: './logs/auto-error-fixer-error.log',
      out_file: './logs/auto-error-fixer-out.log',
      log_file: './logs/auto-error-fixer-combined.log',
      time: true,
      env: {
        NODE_ENV: 'development'
      },
      // Restart every 6 hours to ensure fresh state
      cron_restart: '0 */6 * * *'
    },

    // Merge Conflict Resolver - Monitors for and resolves merge conflicts
    {
      name: 'merge-conflict-resolver',
      script: './scripts/automation/merge-conflict-resolver.cjs',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      error_file: './logs/merge-conflict-resolver-error.log',
      out_file: './logs/merge-conflict-resolver-out.log',
      log_file: './logs/merge-conflict-resolver-combined.log',
      time: true,
      env: {
        NODE_ENV: 'development'
      },
      // Restart every 4 hours
      cron_restart: '0 */4 * * *'
    },

    // Comprehensive Error Fixer - Runs comprehensive fixes on schedule
    {
      name: 'comprehensive-error-fixer',
      script: './scripts/automation/comprehensive-error-fixer.cjs',
      cwd: './',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '1G',
      error_file: './logs/comprehensive-error-fixer-error.log',
      out_file: './logs/comprehensive-error-fixer-out.log',
      log_file: './logs/comprehensive-error-fixer-combined.log',
      time: true,
      env: {
        NODE_ENV: 'development'
      },
      // Run every 2 hours
      cron_restart: '0 */2 * * *'
    },

    // TypeScript Error Fixer - Specialized for TypeScript issues
    {
      name: 'typescript-error-fixer',
      script: './scripts/automation/typescript-error-fixer.cjs',
      cwd: './',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '512M',
      error_file: './logs/typescript-error-fixer-error.log',
      out_file: './logs/typescript-error-fixer-out.log',
      log_file: './logs/typescript-error-fixer-combined.log',
      time: true,
      env: {
        NODE_ENV: 'development'
      },
      // Run every 3 hours
      cron_restart: '0 */3 * * *'
    },

    // Console Error Fixer - Fixes console and runtime errors
    {
      name: 'console-error-fixer',
      script: './scripts/automation/console-error-fixer.cjs',
      cwd: './',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '256M',
      error_file: './logs/console-error-fixer-error.log',
      out_file: './logs/console-error-fixer-out.log',
      log_file: './logs/console-error-fixer-combined.log',
      time: true,
      env: {
        NODE_ENV: 'development'
      },
      // Run every 4 hours
      cron_restart: '0 */4 * * *'
    },

    // Performance Monitor - Monitors app performance
    {
      name: 'performance-monitor',
      script: './scripts/automation/performance-monitor.cjs',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      error_file: './logs/performance-monitor-error.log',
      out_file: './logs/performance-monitor-out.log',
      log_file: './logs/performance-monitor-combined.log',
      time: true,
      env: {
        NODE_ENV: 'development'
      }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    },

    // Health Checker - Monitors overall system health
    {
      name: 'health-checker',
      script: './scripts/automation/health-checker.cjs',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      error_file: './logs/health-checker-error.log',
      out_file: './logs/health-checker-out.log',
      log_file: './logs/health-checker-combined.log',
      time: true,
      env: {
        NODE_ENV: 'development'
      },
      // Run every 15 minutes
      cron_restart: '*/15 * * * *'
    },

    // Git Operations Manager - Manages git operations and PRs
    {
      name: 'git-operations-manager',
      script: './scripts/automation/git-operations-manager.cjs',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      error_file: './logs/git-operations-manager-error.log',
      out_file: './logs/git-operations-manager-out.log',
      log_file: './logs/git-operations-manager-combined.log',
      time: true,
      env: {
        NODE_ENV: 'development'
      },
      // Restart every 8 hours
      cron_restart: '0 */8 * * *'
    },

    // Dependency Manager - Manages npm dependencies
    {
      name: 'dependency-manager',
      script: './scripts/automation/dependency-manager.cjs',
      cwd: './',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '512M',
      error_file: './logs/dependency-manager-error.log',
      out_file: './logs/dependency-manager-out.log',
      log_file: './logs/dependency-manager-combined.log',
      time: true,
      env: {
        NODE_ENV: 'development'
      },
      // Run daily at 2 AM
      cron_restart: '0 2 * * *'
    },

    // Build Optimizer - Optimizes build process
    {
      name: 'build-optimizer',
      script: './scripts/automation/build-optimizer.cjs',
      cwd: './',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '1G',
      error_file: './logs/build-optimizer-error.log',
      out_file: './logs/build-optimizer-out.log',
      log_file: './logs/build-optimizer-combined.log',
      time: true,
      env: {
        NODE_ENV: 'development'
      },
      // Run every 6 hours
      cron_restart: '0 */6 * * *'
    },

    // NEW: AI-Powered Code Quality Enhancer
    {
      name: 'ai-code-quality-enhancer',
      script: './scripts/automation/ai-code-quality-enhancer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      cron_restart: '*/20 * * * *', // Every 20 minutes
      log_file: './logs/ai-code-quality-enhancer.log',
      error_file: './logs/ai-code-quality-enhancer-error.log',
      out_file: './logs/ai-code-quality-enhancer-out.log'
    },

    // NEW: Intelligent Performance Optimizer
    {
      name: 'intelligent-performance-optimizer',
      script: './scripts/automation/intelligent-performance-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './logs/intelligent-performance-optimizer.log',
      error_file: './logs/intelligent-performance-optimizer-error.log',
      out_file: './logs/intelligent-performance-optimizer-out.log'
    },

    // NEW: Smart Testing Automation
    {
      name: 'smart-testing-automation',
      script: './scripts/automation/smart-testing-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: './logs/smart-testing-automation.log',
      error_file: './logs/smart-testing-automation-error.log',
      out_file: './logs/smart-testing-automation-out.log'
    },

    // NEW: Unified Automation Dashboard
    {
      name: 'unified-automation-dashboard',
      script: './scripts/automation/unified-automation-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      cron_restart: '*/5 * * * *', // Every 5 minutes
      log_file: './logs/unified-automation-dashboard.log',
      error_file: './logs/unified-automation-dashboard-error.log',
      out_file: './logs/unified-automation-dashboard-out.log'
    },

    // NEW: Intelligent Conflict Resolver
    {
      name: 'intelligent-conflict-resolver',
      script: './scripts/automation/intelligent-conflict-resolver.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      cron_restart: '*/30 * * * *', // Every 30 minutes
      log_file: './logs/intelligent-conflict-resolver.log',
      error_file: './logs/intelligent-conflict-resolver-error.log',
      out_file: './logs/intelligent-conflict-resolver-out.log'
    }
  ],

<<<<<<< HEAD
<<<<<<< HEAD
    // Console Error Fixer - Fixes console errors
    {
      name: 'console-error-fixer',
      script: './scripts/automation/console-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 9 * * *', // Restart daily at 9 AM
      log_file: './logs/console-error.log',
      error_file: './logs/console-error-error.log',
      out_file: './logs/console-error-out.log'
    },

    // Link Checker - Checks link integrity
    {
      name: 'link-checker',
      script: './scripts/automation/link-checker.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 15 * * *', // Restart daily at 3 PM
      log_file: './logs/link-checker.log',
      error_file: './logs/link-checker-error.log',
      out_file: './logs/link-checker-out.log'
    },

    // Continuous Improvement - Continuous code improvement
    {
      name: 'continuous-improvement',
      script: './scripts/automation/continuous-improvement.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 21 * * *', // Restart daily at 9 PM
      log_file: './logs/continuous-improvement.log',
      error_file: './logs/continuous-improvement-error.log',
      out_file: './logs/continuous-improvement-out.log'
    },

    // Daily Build Test - Daily build testing
    {
      name: 'daily-build-test',
      script: './scripts/automation/daily-build-test.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 2 * * *', // Restart daily at 2 AM
      log_file: './logs/daily-build-test.log',
      error_file: './logs/daily-build-test-error.log',
      out_file: './logs/daily-build-test-out.log'
    },

    // Security Audit - Security auditing
    {
      name: 'security-audit',
      script: './scripts/automation/security-audit.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 4 * * *', // Restart daily at 4 AM
      log_file: './logs/security-audit.log',
      error_file: './logs/security-audit-error.log',
      out_file: './logs/security-audit-out.log'
    },

    // Dependency Updates - Dependency updates
    {
      name: 'dependency-updates',
      script: './scripts/automation/dependency-updates.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 8 * * *', // Restart daily at 8 AM
      log_file: './logs/dependency-updates.log',
      error_file: './logs/dependency-updates-error.log',
      out_file: './logs/dependency-updates-out.log'
    },

    // Performance Monitor - Performance monitoring
    {
      name: 'performance-monitor',
      script: './scripts/automation/performance-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 10 * * *', // Restart daily at 10 AM
      log_file: './logs/performance-monitor.log',
      error_file: './logs/performance-monitor-error.log',
      out_file: './logs/performance-monitor-out.log'
    },

    // Quality Checks - Quality checking
    {
      name: 'quality-checks',
      script: './scripts/automation/quality-checks.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 14 * * *', // Restart daily at 2 PM
      log_file: './logs/quality-checks.log',
      error_file: './logs/quality-checks-error.log',
      out_file: './logs/quality-checks-out.log'
    },

    // Link Integrity - Link integrity checking
    {
      name: 'link-integrity',
      script: './scripts/automation/link-integrity.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 16 * * *', // Restart daily at 4 PM
      log_file: './logs/link-integrity.log',
      error_file: './logs/link-integrity-error.log',
      out_file: './logs/link-integrity-out.log'
    },

    // Front Maximizer - Frontend optimization
    {
      name: 'front-maximizer',
      script: './scripts/automation/front-maximizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 20 * * *', // Restart daily at 8 PM
      log_file: './logs/front-maximizer.log',
      error_file: './logs/front-maximizer-error.log',
      out_file: './logs/front-maximizer-out.log'
    },

    // Sitemap Runner - Sitemap generation
    {
      name: 'sitemap-runner',
      script: './scripts/automation/sitemap-runner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 22 * * *', // Restart daily at 10 PM
      log_file: './logs/sitemap-runner.log',
      error_file: './logs/sitemap-runner-error.log',
      out_file: './logs/sitemap-runner-out.log'
    },

    // NEW: Project Health Management Automations
=======
  // Enhanced Automation Processes
  automation: [
    // Core CI/CD automation
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
    {
      name: 'ci-automation',
      script: './scripts/automation/ci-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      },
      error_file: './logs/ci-automation-error.log',
      out_file: './logs/ci-automation-out.log',
      log_file: './logs/ci-automation-combined.log',
      time: true,
      max_restarts: 10,
      min_uptime: '10s'
    },
    
    // Security automation
    {
      name: 'security-automation',
      script: './scripts/automation/security-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000' // 1 hour
      },
      error_file: './logs/security-automation-error.log',
      out_file: './logs/security-automation-out.log',
      log_file: './logs/security-automation-combined.log',
      time: true,
      max_restarts: 10,
      min_uptime: '10s'
    },
    
    // Test automation
    {
      name: 'test-automation',
      script: './scripts/automation/test-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      },
      error_file: './logs/test-automation-error.log',
      out_file: './logs/test-automation-out.log',
      log_file: './logs/test-automation-combined.log',
      time: true,
      max_restarts: 10,
      min_uptime: '10s'
    },
    
    // Link checker automation
    {
      name: 'link-checker-automation',
      script: './scripts/automation/link-checker-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '86400000' // 24 hours (daily)
      },
      error_file: './logs/link-checker-error.log',
      out_file: './logs/link-checker-out.log',
      log_file: './logs/link-checker-combined.log',
      time: true,
      max_restarts: 10,
      min_uptime: '10s'
    },

    // Enhanced automation processes
    {
      name: 'enhanced-testing',
      script: './scripts/automation/enhanced-testing-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      },
      error_file: './logs/enhanced-testing-error.log',
      out_file: './logs/enhanced-testing-out.log',
      log_file: './logs/enhanced-testing-combined.log',
      time: true,
      max_restarts: 10,
      min_uptime: '10s'
    },
    
    {
      name: 'enhanced-security',
      script: './scripts/automation/enhanced-security-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000' // 1 hour
      },
      error_file: './logs/enhanced-security-error.log',
      out_file: './logs/enhanced-security-out.log',
      log_file: './logs/enhanced-security-combined.log',
      time: true,
      max_restarts: 10,
      min_uptime: '10s'
    },
    
    {
      name: 'enhanced-link-checker',
      script: './scripts/automation/enhanced-link-checker.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      },
      error_file: './logs/enhanced-link-checker-error.log',
      out_file: './logs/enhanced-link-checker-out.log',
      log_file: './logs/enhanced-link-checker-combined.log',
      time: true,
      max_restarts: 10,
      min_uptime: '10s'
    },
    
    {
      name: 'enhanced-ci-cd',
      script: './scripts/automation/enhanced-ci-cd-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      },
      error_file: './logs/enhanced-ci-cd-error.log',
      out_file: './logs/enhanced-ci-cd-out.log',
      log_file: './logs/enhanced-ci-cd-combined.log',
      time: true,
      max_restarts: 10,
      min_uptime: '10s'
    },

    // Console error fixer
    {
      name: 'console-error-fixer',
      script: './scripts/automation/console-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000' // 5 minutes
      },
      error_file: './logs/console-error-fixer-error.log',
      out_file: './logs/console-error-fixer-out.log',
      log_file: './logs/console-error-fixer-combined.log',
      time: true,
      max_restarts: 10,
      min_uptime: '10s'
    },

    // Continuous improvement
    {
      name: 'continuous-improvement',
      script: './scripts/automation/continuous-improvement.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      },
      error_file: './logs/continuous-improvement-error.log',
      out_file: './logs/continuous-improvement-out.log',
      log_file: './logs/continuous-improvement-combined.log',
      time: true,
      max_restarts: 10,
      min_uptime: '10s'
    },

    // Daily build test
    {
      name: 'daily-build-test',
      script: './scripts/automation/daily-build-test.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '86400000' // 24 hours
      },
      error_file: './logs/daily-build-test-error.log',
      out_file: './logs/daily-build-test-out.log',
      log_file: './logs/daily-build-test-combined.log',
      time: true,
      max_restarts: 10,
      min_uptime: '10s'
    }
  ],

  // PM2 Log Rotation
  module: {
    name: 'pm2-logrotate',
    script: 'pm2-logrotate',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '100M',
    env: {
      NODE_ENV: 'production'
=======
  deploy: {
    production: {
      user: 'deploy',
      host: 'your-production-host.com',
      ref: 'origin/main',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/var/www/zion-app',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.cjs --env production',
      'pre-setup': ''
    },
    staging: {
      user: 'deploy',
      host: 'your-staging-host.com',
      ref: 'origin/develop',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/var/www/zion-app-staging',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.cjs --env staging',
      'pre-setup': ''
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    }
  }
};
