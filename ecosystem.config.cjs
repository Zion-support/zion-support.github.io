module.exports = {
  apps: [
    // Main application
    {
      name: 'zion-app',
      script: 'npm',
      args: 'run dev',
      cwd: './',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      error_file: './logs/zion-app-error.log',
      out_file: './logs/zion-app-out.log',
      log_file: './logs/zion-app-combined.log',
      time: true
    },

    // Auto Error Fixer - Continuously monitors and fixes errors
    {
      name: 'auto-error-fixer',
      script: './scripts/automation/auto-error-fixer.cjs',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
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
    }
  ],

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
    }
  }
};
