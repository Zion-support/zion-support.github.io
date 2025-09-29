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

    // 🆕 NEW: Unused Import Cleaner - runs every 30 minutes (HIGH PRIORITY)
    {
      name: 'unused-import-cleaner',
      script: './scripts/automation/unused-import-cleaner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      }
    },

    // 🆕 NEW: TypeScript Error Fixer - runs every 15 minutes (HIGHEST PRIORITY)
    {
      name: 'typescript-error-fixer',
      script: './scripts/automation/typescript-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      }
    },

    // 🆕 NEW: Code Quality Automator - runs every 10 minutes (HIGHEST PRIORITY)
    {
      name: 'code-quality-automator',
      script: './scripts/automation/code-quality-automator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      }
    },

    // 🧠 Intelligent Predictive Monitor - runs every 5 minutes (HIGHEST PRIORITY)
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

    // 🤖 AI Code Optimizer - runs every hour
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

    // 📦 Smart Dependency Manager - runs every 6 hours
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

    // AI Code Analyzer - runs every 4 hours
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

    // Smart Deployment Optimizer - runs every 6 hours
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

    // Adaptive Test Generator - runs every 8 hours
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

    // Intelligent Code Refactorer - runs every 12 hours
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

    // Smart Documentation Generator - runs every 24 hours
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

    // Predictive Maintenance Monitor - runs every 2 hours
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
  ],

  deploy: {
    production: {
      user: 'miami2',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/Users/miami2/zion-app-clone',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.enhanced.cjs --env production',
      'pre-setup': ''
    },
    staging: {
      user: 'miami2',
      host: 'localhost',
      ref: 'origin/staging',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/Users/miami2/zion-app-staging',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.enhanced.cjs --env staging',
      'pre-setup': ''
    },
    development: {
      user: 'miami2',
      host: 'localhost',
      ref: 'origin/develop',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/Users/miami2/zion-app-dev',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.enhanced.cjs --env development',
      'pre-setup': ''
    }
  }
};