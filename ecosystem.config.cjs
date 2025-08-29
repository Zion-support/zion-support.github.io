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

    // AI Code Reviewer - Intelligent code analysis and auto-fixing
    {
      name: 'ai-code-reviewer',
      script: './automation/ai-code-reviewer.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 1 * * *', // Restart daily at 1 AM
      log_file: './logs/ai-code-reviewer.log',
      error_file: './logs/ai-code-reviewer-error.log',
      out_file: './logs/ai-code-reviewer-out.log'
    },

    // Smart Dependency Analyzer - Intelligent dependency management
    {
      name: 'smart-dependency-analyzer',
      script: './automation/smart-dependency-analyzer.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 2 * * *', // Restart daily at 2 AM
      log_file: './logs/smart-dependency-analyzer.log',
      error_file: './logs/smart-dependency-analyzer-error.log',
      out_file: './logs/smart-dependency-analyzer-out.log'
    },

    // Intelligent Performance Optimizer - Performance analysis and optimization
    {
      name: 'intelligent-performance-optimizer',
      script: './automation/intelligent-performance-optimizer.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 3 * * *', // Restart daily at 3 AM
      log_file: './logs/intelligent-performance-optimizer.log',
      error_file: './logs/intelligent-performance-optimizer-error.log',
      out_file: './logs/intelligent-performance-optimizer-out.log'
    },

    // Smart Test Generator - Automated test generation and analysis
    {
      name: 'smart-test-generator',
      script: './automation/smart-test-generator.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 4 * * *', // Restart daily at 4 AM
      log_file: './logs/smart-test-generator.log',
      error_file: './logs/smart-test-generator-error.log',
      out_file: './logs/smart-test-generator-out.log'
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
      cron_restart: '0 5 * * *', // Restart daily at 5 AM
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
      cron_restart: '0 7 * * *', // Restart daily at 7 AM
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
      cron_restart: '0 8 * * *', // Restart daily at 8 AM
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
      cron_restart: '0 9 * * *', // Restart daily at 9 AM
      log_file: './logs/file-integrity.log',
      error_file: './logs/file-integrity-error.log',
      out_file: './logs/file-integrity-out.log'
    },

    // Intelligent Orchestrator - Coordinates all automation systems
    {
      name: 'intelligent-orchestrator',
      script: './automation/intelligent-orchestrator.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 10 * * *', // Restart daily at 10 AM
      log_file: './logs/intelligent-orchestrator.log',
      error_file: './logs/intelligent-orchestrator-error.log',
      out_file: './logs/intelligent-orchestrator-out.log'
    },

    // Automation Factory - Generates and manages automation scripts
    {
      name: 'automation-factory',
      script: './automation/automation-factory.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 11 * * *', // Restart daily at 11 AM
      log_file: './logs/automation-factory.log',
      error_file: './logs/automation-factory-error.log',
      out_file: './logs/automation-factory-out.log'
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
