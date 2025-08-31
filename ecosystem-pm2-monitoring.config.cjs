module.exports = {
  apps: [
    // Core Application
    {
      name: 'zion-app',
      script: 'npm',
      args: 'start',
      cwd: './',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/zion-app-error.log',
      out_file: './logs/zion-app-out.log',
      log_file: './logs/zion-app-combined.log',
      time: true
    },
    
    // AI Code Analysis & Optimization
    {
      name: 'ai-code-analyzer',
      script: './automation/ai-code-analyzer.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/ai-code-analyzer-error.log',
      out_file: './logs/ai-code-analyzer-out.log',
      time: true
    },
    
    {
      name: 'ai-code-optimizer',
      script: './automation/ai-code-optimizer.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/ai-code-optimizer-error.log',
      out_file: './logs/ai-code-optimizer-out.log',
      time: true
    },

    // Error Fixing & Quality
    {
      name: 'auto-error-fixer',
      script: './automation/auto-error-fixer.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/auto-error-fixer-error.log',
      out_file: './logs/auto-error-fixer-out.log',
      time: true
    },

    {
      name: 'comprehensive-error-fixer',
      script: './automation/comprehensive-error-fixer.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/comprehensive-error-fixer-error.log',
      out_file: './logs/comprehensive-error-fixer-out.log',
      time: true
    },

    // Build & CI/CD
    {
      name: 'build-automation',
      script: './automation/build-automation.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/build-automation-error.log',
      out_file: './logs/build-automation-out.log',
      time: true
    },

    {
      name: 'enhanced-ci-cd-automation',
      script: './automation/enhanced-ci-cd-automation.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/enhanced-ci-cd-error.log',
      out_file: './logs/enhanced-ci-cd-out.log',
      time: true
    },

    // Monitoring & Health
    {
      name: 'project-health-monitor',
      script: './automation/project-health-monitor.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/project-health-error.log',
      out_file: './logs/project-health-out.log',
      time: true
    },

    {
      name: 'build-health-monitor',
      script: './automation/build-health-monitor.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/build-health-error.log',
      out_file: './logs/build-health-out.log',
      time: true
    },

    // Performance & Testing
    {
      name: 'performance-monitor',
      script: './automation/performance-monitor.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/performance-monitor-error.log',
      out_file: './logs/performance-monitor-out.log',
      time: true
    },

    {
      name: 'smart-testing-automation',
      script: './automation/smart-testing-automation.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/smart-testing-error.log',
      out_file: './logs/smart-testing-out.log',
      time: true
    },

    // Security & Quality
    {
      name: 'security-audit',
      script: './automation/security-audit.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/security-audit-error.log',
      out_file: './logs/security-audit-out.log',
      time: true
    },

    {
      name: 'code-quality-monitor',
      script: './automation/code-quality-monitor.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/code-quality-error.log',
      out_file: './logs/code-quality-out.log',
      time: true
    },

    // Dependencies & Updates
    {
      name: 'dependency-monitor',
      script: './automation/dependency-monitor.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/dependency-monitor-error.log',
      out_file: './logs/dependency-monitor-out.log',
      time: true
    },

    {
      name: 'dependency-updates',
      script: './automation/dependency-updates.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/dependency-updates-error.log',
      out_file: './logs/dependency-updates-out.log',
      time: true
    },

    // Link & SEO
    {
      name: 'link-checker',
      script: './automation/link-checker.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/link-checker-error.log',
      out_file: './logs/link-checker-out.log',
      time: true
    },

    {
      name: 'enhanced-link-checker',
      script: './automation/enhanced-link-checker.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/enhanced-link-checker-error.log',
      out_file: './logs/enhanced-link-checker-out.log',
      time: true
    },

    // Sync & Repository
    {
      name: 'repository-sync',
      script: './automation/repository-sync.js',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/repository-sync-error.log',
      out_file: './logs/repository-sync-out.log',
      time: true
    },

    {
      name: 'pm2-sync-automation',
      script: './automation/pm2-sync-automation.js',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/pm2-sync-error.log',
      out_file: './logs/pm2-sync-out.log',
      time: true
    },

    // Advanced Automation
    {
      name: 'intelligent-automation',
      script: './automation/intelligent-automation.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/intelligent-automation-error.log',
      out_file: './logs/intelligent-automation-out.log',
      time: true
    },

    {
      name: 'master-automation-controller',
      script: './automation/master-automation-controller.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/master-automation-error.log',
      out_file: './logs/master-automation-out.log',
      time: true
    },

    // Specialized Services
    {
      name: 'typescript-syntax-checker',
      script: './automation/typescript-syntax-checker.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/typescript-checker-error.log',
      out_file: './logs/typescript-checker-out.log',
      time: true
    },

    {
      name: 'console-error-fixer',
      script: './automation/console-error-fixer.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/console-error-fixer-error.log',
      out_file: './logs/console-error-fixer-out.log',
      time: true
    },

    // Additional Automation Services
    {
      name: 'adaptive-test-generator',
      script: './automation/adaptive-test-generator.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/adaptive-test-error.log',
      out_file: './logs/adaptive-test-out.log',
      time: true
    },

    {
      name: 'advanced-performance-optimizer',
      script: './automation/advanced-performance-optimizer.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/advanced-performance-error.log',
      out_file: './logs/advanced-performance-out.log',
      time: true
    },

    {
      name: 'ai-code-quality-enhancer',
      script: './automation/ai-code-quality-enhancer.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/ai-code-quality-error.log',
      out_file: './logs/ai-code-quality-out.log',
      time: true
    },

    {
      name: 'ai-code-reviewer',
      script: './automation/ai-code-reviewer.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/ai-code-reviewer-error.log',
      out_file: './logs/ai-code-reviewer-out.log',
      time: true
    },

    {
      name: 'auto-fix-scheduler',
      script: './automation/auto-fix-scheduler.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/auto-fix-scheduler-error.log',
      out_file: './logs/auto-fix-scheduler-out.log',
      time: true
    },

    {
      name: 'continuous-improvement',
      script: './automation/continuous-improvement.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/continuous-improvement-error.log',
      out_file: './logs/continuous-improvement-out.log',
      time: true
    },

    {
      name: 'daily-build-test',
      script: './automation/daily-build-test.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/daily-build-test-error.log',
      out_file: './logs/daily-build-test-out.log',
      time: true
    },

    {
      name: 'dependency-manager',
      script: './automation/dependency-manager.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/dependency-manager-error.log',
      out_file: './logs/dependency-manager-out.log',
      time: true
    },

    {
      name: 'enhanced-automation',
      script: './automation/enhanced-automation.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/enhanced-automation-error.log',
      out_file: './logs/enhanced-automation-out.log',
      time: true
    },

    {
      name: 'enhanced-security-monitor',
      script: './automation/enhanced-security-monitor.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/enhanced-security-error.log',
      out_file: './logs/enhanced-security-out.log',
      time: true
    },

    {
      name: 'enhanced-testing-automation',
      script: './automation/enhanced-testing-automation.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/enhanced-testing-error.log',
      out_file: './logs/enhanced-testing-out.log',
      time: true
    },

    {
      name: 'error-fixer-automation',
      script: './automation/error-fixer-automation.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/error-fixer-automation-error.log',
      out_file: './logs/error-fixer-automation-out.log',
      time: true
    },

    {
      name: 'file-integrity-monitor',
      script: './automation/file-integrity-monitor.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/file-integrity-error.log',
      out_file: './logs/file-integrity-out.log',
      time: true
    },

    {
      name: 'front-maximizer',
      script: './automation/front-maximizer.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/front-maximizer-error.log',
      out_file: './logs/front-maximizer-out.log',
      time: true
    },

    {
      name: 'improved-sync-automation',
      script: './automation/improved-sync-automation.js',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/improved-sync-error.log',
      out_file: './logs/improved-sync-out.log',
      time: true
    },

    {
      name: 'intelligent-orchestrator',
      script: './automation/intelligent-orchestrator.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/intelligent-orchestrator-error.log',
      out_file: './logs/intelligent-orchestrator-out.log',
      time: true
    },

    {
      name: 'intelligent-performance-analyzer',
      script: './automation/intelligent-performance-analyzer.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/intelligent-performance-analyzer-error.log',
      out_file: './logs/intelligent-performance-analyzer-out.log',
      time: true
    },

    {
      name: 'intelligent-performance-optimizer',
      script: './automation/intelligent-performance-optimizer.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/intelligent-performance-optimizer-error.log',
      out_file: './logs/intelligent-performance-optimizer-out.log',
      time: true
    },

    {
      name: 'intelligent-predictive-maintenance',
      script: './automation/intelligent-predictive-maintenance.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/intelligent-predictive-maintenance-error.log',
      out_file: './logs/intelligent-predictive-maintenance-out.log',
      time: true
    },

    {
      name: 'link-integrity',
      script: './automation/link-integrity.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/link-integrity-error.log',
      out_file: './logs/link-integrity-out.log',
      time: true
    },

    {
      name: 'lint-monitor',
      script: './automation/lint-monitor.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/lint-monitor-error.log',
      out_file: './logs/lint-monitor-out.log',
      time: true
    },

    {
      name: 'netlify-build-automation',
      script: './automation/netlify-build-automation.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/netlify-build-automation-error.log',
      out_file: './logs/netlify-build-automation-out.log',
      time: true
    },

    {
      name: 'netlify-build-monitor',
      script: './automation/netlify-build-monitor.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/netlify-build-monitor-error.log',
      out_file: './logs/netlify-build-monitor-out.log',
      time: true
    },

    {
      name: 'performance-optimizer',
      script: './automation/performance-optimizer.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/performance-optimizer-error.log',
      out_file: './logs/performance-optimizer-out.log',
      time: true
    },

    {
      name: 'pm2-sync-monitor',
      script: './automation/pm2-sync-monitor.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/pm2-sync-monitor-error.log',
      out_file: './logs/pm2-sync-monitor-out.log',
      time: true
    },

    {
      name: 'predictive-maintenance',
      script: './automation/predictive-maintenance.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/predictive-maintenance-error.log',
      out_file: './logs/predictive-maintenance-out.log',
      time: true
    },

    {
      name: 'project-health-dashboard',
      script: './automation/project-health-dashboard.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/project-health-dashboard-error.log',
      out_file: './logs/project-health-dashboard-out.log',
      time: true
    },

    {
      name: 'quality-checks',
      script: './automation/quality-checks.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/quality-checks-error.log',
      out_file: './logs/quality-checks-out.log',
      time: true
    },

    {
      name: 'sitemap-runner',
      script: './automation/sitemap-runner.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/sitemap-runner-error.log',
      out_file: './logs/sitemap-runner-out.log',
      time: true
    },

    {
      name: 'smart-build-optimizer',
      script: './automation/smart-build-optimizer.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/smart-build-optimizer-error.log',
      out_file: './logs/smart-build-optimizer-out.log',
      time: true
    },

    {
      name: 'smart-dependency-analyzer',
      script: './automation/smart-dependency-analyzer.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/smart-dependency-analyzer-error.log',
      out_file: './logs/smart-dependency-analyzer-out.log',
      time: true
    },

    {
      name: 'smart-dependency-manager',
      script: './automation/smart-dependency-manager.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/smart-dependency-manager-error.log',
      out_file: './logs/smart-dependency-manager-out.log',
      time: true
    },

    {
      name: 'smart-dependency-updater',
      script: './automation/smart-dependency-updater.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/smart-dependency-updater-error.log',
      out_file: './logs/smart-dependency-updater-out.log',
      time: true
    },

    {
      name: 'smart-deployment-automation',
      script: './automation/smart-deployment-automation.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/smart-deployment-automation-error.log',
      out_file: './logs/smart-deployment-automation-out.log',
      time: true
    },

    {
      name: 'smart-deployment-optimizer',
      script: './automation/smart-deployment-optimizer.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/smart-deployment-optimizer-error.log',
      out_file: './logs/smart-deployment-optimizer-out.log',
      time: true
    },

    {
      name: 'smart-documentation-generator',
      script: './automation/smart-documentation-generator.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/smart-documentation-generator-error.log',
      out_file: './logs/smart-documentation-generator-out.log',
      time: true
    },

    {
      name: 'smart-performance-optimizer',
      script: './automation/smart-performance-optimizer.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/smart-performance-optimizer-error.log',
      out_file: './logs/smart-performance-optimizer-out.log',
      time: true
    },

    {
      name: 'unified-automation-controller',
      script: './automation/unified-automation-controller.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/unified-automation-controller-error.log',
      out_file: './logs/unified-automation-controller-out.log',
      time: true
    }
  ],

  deploy: {
    production: {
      user: 'miami2',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/Users/miami2/zion-app-clone',
      'post-deploy': 'npm install && pm2 reload ecosystem-pm2-monitoring.config.cjs'
    }
  }
};
