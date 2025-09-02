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
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=8192 --openssl-legacy-provider'
      }
    },

    // INTELLIGENT REPOSITORY MANAGEMENT - HIGHEST PRIORITY
    {
      name: 'intelligent-repository-manager',
      script: './scripts/automation/intelligent-repository-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './logs/intelligent-repository-manager.log',
      error_file: './logs/intelligent-repository-manager-error.log',
      out_file: './logs/intelligent-repository-manager-out.log'
    },

    // Enhanced PM2 Error Prevention Automation - runs every 3 minutes
    {
      name: 'enhanced-pm2-error-prevention',
      script: './scripts/automation/pm2-error-prevention-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '180000' // 3 minutes
      },
      log_file: './automation/logs/enhanced-pm2-error-prevention.log',
      error_file: './automation/logs/enhanced-pm2-error-prevention-error.log',
      out_file: './automation/logs/enhanced-pm2-error-prevention-out.log'
    },

    // Intelligent Automation Orchestrator - runs every 10 minutes
    {
      name: 'intelligent-automation-orchestrator',
      script: './scripts/automation/intelligent-automation-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      },
      log_file: './logs/intelligent-automation-orchestrator.log',
      error_file: './logs/intelligent-automation-orchestrator-error.log',
      out_file: './logs/intelligent-automation-orchestrator-out.log'
    },

    // Smart Deployment Automation - runs every 15 minutes
    {
      name: 'smart-deployment-automation',
      script: './scripts/automation/smart-deployment-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      },
      log_file: './logs/smart-deployment-automation.log',
      error_file: './logs/smart-deployment-automation-error.log',
      out_file: './logs/smart-deployment-automation-out.log'
    },

    // Intelligent Build Pipeline - runs every 20 minutes
    {
      name: 'intelligent-build-pipeline',
      script: './scripts/automation/intelligent-build-pipeline.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1200000' // 20 minutes
      },
      log_file: './logs/intelligent-build-pipeline.log',
      error_file: './logs/intelligent-build-pipeline-error.log',
      out_file: './logs/intelligent-build-pipeline-out.log'
    },

    // AI Code Review Automation - runs every 30 minutes
    {
      name: 'ai-code-review-automation',
      script: './scripts/automation/ai-code-review-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      },
      log_file: './logs/ai-code-review-automation.log',
      error_file: './logs/ai-code-review-automation-error.log',
      out_file: './logs/ai-code-review-automation-out.log'
    },

    // Predictive Issue Detection - runs every 45 minutes
    {
      name: 'predictive-issue-detection',
      script: './scripts/automation/predictive-issue-detection.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '2700000' // 45 minutes
      },
      log_file: './logs/predictive-issue-detection.log',
      error_file: './logs/predictive-issue-detection-error.log',
      out_file: './logs/predictive-issue-detection-out.log'
    },

    // Smart Dependency Intelligence - runs every hour
    {
      name: 'smart-dependency-intelligence',
      script: './scripts/automation/smart-dependency-intelligence.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000' // 1 hour
      },
      log_file: './logs/smart-dependency-intelligence.log',
      error_file: './logs/smart-dependency-intelligence-error.log',
      out_file: './logs/smart-dependency-intelligence-out.log'
    },

    // Enhanced Security Automation - runs every 2 hours
    {
      name: 'enhanced-security-automation',
      script: './scripts/automation/enhanced-security-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      },
      log_file: './logs/enhanced-security-automation.log',
      error_file: './logs/enhanced-security-automation-error.log',
      out_file: './logs/enhanced-security-automation-out.log'
    },

    // Performance Monitoring & Optimization - runs every 2 hours
    {
      name: 'intelligent-performance-monitor',
      script: './scripts/automation/intelligent-performance-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      },
      log_file: './logs/intelligent-performance-monitor.log',
      error_file: './logs/intelligent-performance-monitor-error.log',
      out_file: './logs/intelligent-performance-monitor-out.log'
    },

    // Quality Assurance Automation - runs every 3 hours
    {
      name: 'enhanced-quality-assurance',
      script: './scripts/automation/enhanced-testing-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '10800000' // 3 hours
      },
      log_file: './logs/enhanced-quality-assurance.log',
      error_file: './logs/enhanced-quality-assurance-error.log',
      out_file: './logs/enhanced-quality-assurance-out.log'
    },

    // Continuous Improvement Engine - runs every 4 hours
    {
      name: 'continuous-improvement-engine',
      script: './scripts/automation/continuous-improvement.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '14400000' // 4 hours
      },
      log_file: './logs/continuous-improvement-engine.log',
      error_file: './logs/continuous-improvement-engine-error.log',
      out_file: './logs/continuous-improvement-engine-out.log'
    },

    // Link Integrity & SEO Automation - runs every 6 hours
    {
      name: 'enhanced-link-integrity',
      script: './scripts/automation/enhanced-link-checker.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '21600000' // 6 hours
      },
      log_file: './logs/enhanced-link-integrity.log',
      error_file: './logs/enhanced-link-integrity-error.log',
      out_file: './logs/enhanced-link-integrity-out.log'
    },

    // Documentation Generator - runs every 8 hours
    {
      name: 'smart-documentation-generator',
      script: './scripts/automation/smart-documentation-generator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '28800000' // 8 hours
      },
      log_file: './logs/smart-documentation-generator.log',
      error_file: './logs/smart-documentation-generator-error.log',
      out_file: './logs/smart-documentation-generator-out.log'
    },

    // Development Watch & Auto-Build - runs continuously
    {
      name: 'dev-watch-build',
      script: 'bash',
      args: '-lc "npm run build"',
      instances: 1,
      watch: ['src', 'public', 'vite.config.ts', 'tailwind.config.ts'],
      ignore_watch: ['dist', 'node_modules', 'logs', '.git'],
      max_memory_restart: '1G',
      env: { NODE_ENV: 'development' },
      log_file: './logs/dev-watch-build.log',
      out_file: './logs/dev-watch-build-out.log',
      error_file: './logs/dev-watch-build-error.log'
    },

    // Health Monitoring Dashboard - runs every 5 minutes
    {
      name: 'health-monitoring-dashboard',
      script: './scripts/automation/project-health-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000' // 5 minutes
      },
      log_file: './logs/health-monitoring-dashboard.log',
      error_file: './logs/health-monitoring-dashboard-error.log',
      out_file: './logs/health-monitoring-dashboard-out.log'
    }
  ],

  deploy: {
    production: {
      user: 'root',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/workspace/production',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem-enhanced-repository-manager.cjs --env production',
      'pre-setup': ''
    },
    staging: {
      user: 'root',
      host: 'localhost',
      ref: 'origin/develop',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/workspace/staging',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem-enhanced-repository-manager.cjs --env development',
      'pre-setup': ''
    }
  }
};