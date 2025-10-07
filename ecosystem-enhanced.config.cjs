module.exports = {
  apps: [
    // Enhanced Main Application
    {
      name: 'zion-app-enhanced',
      script: 'npm',
      args: 'start',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      env: {
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
    }
  }
};