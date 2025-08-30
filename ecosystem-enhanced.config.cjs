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
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    },

    // 🧠 NEW: AI Code Reviewer - Intelligent code analysis and suggestions
    {
      name: 'ai-code-reviewer',
      script: './scripts/automation/ai-code-reviewer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './logs/ai-code-reviewer.log',
      error_file: './logs/ai-code-reviewer-error.log',
      out_file: './logs/ai-code-reviewer-out.log'
    },

    // 🧠 NEW: Smart Dependency Optimizer - Intelligent dependency management
    {
      name: 'smart-dependency-optimizer',
      script: './scripts/automation/smart-dependency-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 4 * * *', // Daily at 4 AM
      log_file: './logs/smart-dependency-optimizer.log',
      error_file: './logs/smart-dependency-optimizer-error.log',
      out_file: './logs/smart-dependency-optimizer-out.log'
    },

    // 🧠 NEW: Intelligent Performance Monitor - Learning-based performance optimization
    {
      name: 'intelligent-performance-monitor',
      script: './scripts/automation/intelligent-performance-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '*/20 * * * *', // Every 20 minutes
      log_file: './logs/intelligent-performance-monitor.log',
      error_file: './logs/intelligent-performance-monitor-error.log',
      out_file: './logs/intelligent-performance-monitor-out.log'
    },

    // Build Health Monitor - Prevents build issues
    {
      name: 'build-health-monitor',
      script: './automation/build-health-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 0 * * *', // Restart daily at midnight
      log_file: './logs/build-monitor.log',
      error_file: './logs/build-monitor-error.log',
      out_file: './logs/build-monitor-out.log'
    },

    // Code Quality Monitor - Prevents code issues
    {
      name: 'code-quality-monitor',
      script: './automation/code-quality-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 6 * * *', // Restart daily at 6 AM
      log_file: './logs/code-quality.log',
      error_file: './logs/code-quality-error.log',
      out_file: './logs/code-quality-out.log'
    },

    // Dependency Health Monitor - Prevents dependency issues
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

    // Build Automation - Automatically fixes common issues
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
      cron_restart: '0 18 * * *', // Restart daily at 6 PM
      log_file: './logs/build-automation.log',
      error_file: './logs/build-automation-error.log',
      out_file: './logs/build-automation-out.log'
    },

    // File Integrity Monitor - Prevents file corruption
    {
      name: 'file-integrity-monitor',
      script: './automation/file-integrity-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 3 * * *', // Restart daily at 3 AM
      log_file: './logs/file-integrity.log',
      error_file: './logs/file-integrity-error.log',
      out_file: './logs/file-integrity-out.log'
    },

    // Project Health Management Automations
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

    // 🚀 NEW: Enhanced Security Automation
    {
      name: 'enhanced-security-automation',
      script: './scripts/automation/enhanced-security-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 2 * * *', // Daily at 2 AM
      log_file: './logs/enhanced-security-automation.log',
      error_file: './logs/enhanced-security-automation-error.log',
      out_file: './logs/enhanced-security-automation-out.log'
    },

    // 🚀 NEW: Enhanced Testing Automation
    {
      name: 'enhanced-testing-automation',
      script: './scripts/automation/enhanced-testing-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 8 * * *', // Daily at 8 AM
      log_file: './logs/enhanced-testing-automation.log',
      error_file: './logs/enhanced-testing-automation-error.log',
      out_file: './logs/enhanced-testing-automation-out.log'
    },

    // 🚀 NEW: Enhanced CI/CD Automation
    {
      name: 'enhanced-ci-cd-automation',
      script: './scripts/automation/enhanced-ci-cd-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '*/30 * * * *', // Every 30 minutes
      log_file: './logs/enhanced-ci-cd-automation.log',
      error_file: './logs/enhanced-ci-cd-automation-error.log',
      out_file: './logs/enhanced-ci-cd-automation-out.log'
    },

    // 🚀 NEW: Enhanced Link Checker
    {
      name: 'enhanced-link-checker',
      script: './scripts/automation/enhanced-link-checker.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 10 * * *', // Daily at 10 AM
      log_file: './logs/enhanced-link-checker.log',
      error_file: './logs/enhanced-link-checker-error.log',
      out_file: './logs/enhanced-link-checker-out.log'
    },

    // 🚀 NEW: PM2 Sync Automation
    {
      name: 'pm2-sync-automation',
      script: './scripts/automation/pm2-sync-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '*/45 * * * *', // Every 45 minutes
      log_file: './logs/pm2-sync-automation.log',
      error_file: './logs/pm2-sync-automation-error.log',
      out_file: './logs/pm2-sync-automation-out.log'
    },

    // 🚀 NEW: Console Error Fixer
    {
      name: 'console-error-fixer',
      script: './scripts/automation/console-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '*/25 * * * *', // Every 25 minutes
      log_file: './logs/console-error-fixer.log',
      error_file: './logs/console-error-fixer-error.log',
      out_file: './logs/console-error-fixer-out.log'
    },

    // 🚀 NEW: Continuous Improvement Automation
    {
      name: 'continuous-improvement',
      script: './scripts/automation/continuous-improvement.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 14 * * *', // Daily at 2 PM
      log_file: './logs/continuous-improvement.log',
      error_file: './logs/continuous-improvement-error.log',
      out_file: './logs/continuous-improvement-out.log'
    },

    // 🚀 NEW: Daily Build Test Automation
    {
      name: 'daily-build-test',
      script: './scripts/automation/daily-build-test.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 16 * * *', // Daily at 4 PM
      log_file: './logs/daily-build-test.log',
      error_file: './logs/daily-build-test-error.log',
      out_file: './logs/daily-build-test-out.log'
    },

    // 🚀 NEW: Sitemap Runner
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
      cron_restart: '0 20 * * *', // Daily at 8 PM
      log_file: './logs/sitemap-runner.log',
      error_file: './logs/sitemap-runner-error.log',
      out_file: './logs/sitemap-runner-out.log'
    },

    // 🚀 NEW: Test Generator
    {
      name: 'test-generator',
      script: './automation/test-generator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 22 * * *', // Daily at 10 PM
      log_file: './logs/test-generator.log',
      error_file: './logs/test-generator-error.log',
      out_file: './logs/test-generator-out.log'
    },

    // 🚀 NEW: SEO Optimizer
    {
      name: 'seo-optimizer',
      script: './automation/seo-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 1 * * *', // Daily at 1 AM
      log_file: './logs/seo-optimizer.log',
      error_file: './logs/seo-optimizer-error.log',
      out_file: './logs/seo-optimizer-out.log'
    },

    // 🚀 NEW: Security Scanner
    {
      name: 'security-scanner',
      script: './automation/security-scanner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 5 * * *', // Daily at 5 AM
      log_file: './logs/security-scanner.log',
      error_file: './logs/security-scanner-error.log',
      out_file: './logs/security-scanner-out.log'
    },

    // 🚀 NEW: Content Generator
    {
      name: 'content-generator',
      script: './automation/content-generator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 7 * * *', // Daily at 7 AM
      log_file: './logs/content-generator.log',
      error_file: './logs/content-generator-error.log',
      out_file: './logs/content-generator-out.log'
    },

    // 🚀 NEW: Edge Cache Warmer
    {
      name: 'edge-cache-warmer',
      script: './automation/edge-cache-warmer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '*/60 * * * *', // Every hour
      log_file: './logs/edge-cache-warmer.log',
      error_file: './logs/edge-cache-warmer-error.log',
      out_file: './logs/edge-cache-warmer-out.log'
    },

    // 🚀 NEW: Footer Injector
    {
      name: 'footer-injector',
      script: './automation/footer-injector.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 9 * * *', // Daily at 9 AM
      log_file: './logs/footer-injector.log',
      error_file: './logs/footer-injector-error.log',
      out_file: './logs/footer-injector-out.log'
    },

    // 🚀 NEW: OG Meta Auditor
    {
      name: 'og-meta-auditor',
      script: './automation/og-meta-auditor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 11 * * *', // Daily at 11 AM
      log_file: './logs/og-meta-auditor.log',
      error_file: './logs/og-meta-auditor-error.log',
      out_file: './logs/og-meta-auditor-out.log'
    },

    // 🚀 NEW: Site Link Crawler
    {
      name: 'site-link-crawler',
      script: './automation/site-link-crawler.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 13 * * *', // Daily at 1 PM
      log_file: './logs/site-link-crawler.log',
      error_file: './logs/site-link-crawler-error.log',
      out_file: './logs/site-link-crawler-out.log'
    },

    // 🚀 NEW: Site Link Fixer
    {
      name: 'site-link-fixer',
      script: './automation/site-link-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 15 * * *', // Daily at 3 PM
      log_file: './logs/site-link-fixer.log',
      error_file: './logs/site-link-fixer-error.log',
      out_file: './logs/site-link-fixer-out.log'
    },

    // 🚀 NEW: Front Maximizer
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
      cron_restart: '0 17 * * *', // Daily at 5 PM
      log_file: './logs/front-maximizer.log',
      error_file: './logs/front-maximizer-error.log',
      out_file: './logs/front-maximizer-out.log'
    },

    // 🚀 NEW: Performance Monitor
    {
      name: 'performance-monitor',
      script: './scripts/automation/performance-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '*/35 * * * *', // Every 35 minutes
      log_file: './logs/performance-monitor.log',
      error_file: './logs/performance-monitor-error.log',
      out_file: './logs/performance-monitor-out.log'
    },

    // 🚀 NEW: Link Integrity Checker
    {
      name: 'link-integrity',
      script: './scripts/automation/link-integrity.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 19 * * *', // Daily at 7 PM
      log_file: './logs/link-integrity.log',
      error_file: './logs/link-integrity-error.log',
      out_file: './logs/link-integrity-out.log'
    },

    // 🚀 NEW: Quality Checks
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
      cron_restart: '*/40 * * * *', // Every 40 minutes
      log_file: './logs/quality-checks.log',
      error_file: './logs/quality-checks-error.log',
      out_file: './logs/quality-checks-out.log'
    },

    // 🚀 NEW: Security Audit
    {
      name: 'security-audit',
      script: './scripts/automation/security-audit.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 21 * * *', // Daily at 9 PM
      log_file: './logs/security-audit.log',
      error_file: './logs/security-audit-error.log',
      out_file: './logs/security-audit-out.log'
    },

    // 🚀 NEW: Dependency Updates
    {
      name: 'dependency-updates',
      script: './scripts/automation/dependency-updates.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 23 * * *', // Daily at 11 PM
      log_file: './logs/dependency-updates.log',
      error_file: './logs/dependency-updates-error.log',
      out_file: './logs/dependency-updates-out.log'
    },

    // 🚀 NEW: Repo Fitness Score
    {
      name: 'repo-fitness-score',
      script: './automation/repo-fitness-score.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 6 * * 0', // Weekly on Sunday at 6 AM
      log_file: './logs/repo-fitness-score.log',
      error_file: './logs/repo-fitness-score-error.log',
      out_file: './logs/repo-fitness-score-out.log'
    },

    // 🚀 NEW: Pre-build Health Check
    {
      name: 'pre-build-health-check',
      script: './automation/pre-build-health-check.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '*/55 * * * *', // Every 55 minutes
      log_file: './logs/pre-build-health-check.log',
      error_file: './logs/pre-build-health-check-error.log',
      out_file: './logs/pre-build-health-check-out.log'
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
    }
  }
};