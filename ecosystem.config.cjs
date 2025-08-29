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

    // NEW: Project Health Management Automations
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

    // NEW: AI-Powered Code Review Automation
    {
      name: 'ai-code-review',
      script: './scripts/automation/ai-code-review-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'production',
        AI_REVIEW_ENABLED: 'true'
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './logs/ai-code-review.log',
      error_file: './logs/ai-code-review-error.log',
      out_file: './logs/ai-code-review-out.log'
    },

    // NEW: Intelligent Performance Optimizer
    {
      name: 'performance-optimizer',
      script: './scripts/automation/intelligent-performance-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'production',
        PERFORMANCE_OPTIMIZATION_ENABLED: 'true'
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: './logs/performance-optimizer.log',
      error_file: './logs/performance-optimizer-error.log',
      out_file: './logs/performance-optimizer-out.log'
    },

    // NEW: Smart Testing Automation
    {
      name: 'smart-testing',
      script: './scripts/automation/smart-testing-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1.5G',
      env: {
        NODE_ENV: 'production',
        SMART_TESTING_ENABLED: 'true'
      },
      cron_restart: '0 */8 * * *', // Every 8 hours
      log_file: './logs/smart-testing.log',
      error_file: './logs/smart-testing-error.log',
      out_file: './logs/smart-testing-out.log'
    },

    // NEW: Intelligent Orchestrator - Coordinates all automations
    {
      name: 'intelligent-orchestrator',
      script: './scripts/automation/intelligent-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        ORCHESTRATION_ENABLED: 'true'
      },
      cron_restart: '*/30 * * * *', // Every 30 minutes
      log_file: './logs/intelligent-orchestrator.log',
      error_file: './logs/intelligent-orchestrator-error.log',
      out_file: './logs/intelligent-orchestrator-out.log'
    },

    // NEW: Enhanced Security Automation
    {
      name: 'enhanced-security',
      script: './scripts/automation/enhanced-security-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        SECURITY_AUTOMATION_ENABLED: 'true'
      },
      cron_restart: '0 */12 * * *', // Every 12 hours
      log_file: './logs/enhanced-security.log',
      error_file: './logs/enhanced-security-error.log',
      out_file: './logs/enhanced-security-out.log'
    },

    // NEW: Enhanced CI/CD Automation
    {
      name: 'enhanced-ci-cd',
      script: './scripts/automation/enhanced-ci-cd-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1.5G',
      env: {
        NODE_ENV: 'production',
        CI_CD_AUTOMATION_ENABLED: 'true'
      },
      cron_restart: '*/20 * * * *', // Every 20 minutes
      log_file: './logs/enhanced-ci-cd.log',
      error_file: './logs/enhanced-ci-cd-error.log',
      out_file: './logs/enhanced-ci-cd-out.log'
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
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.cjs --env production',
      'pre-setup': ''
    }
  }
};
