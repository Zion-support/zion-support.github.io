module.exports = {
  apps: [
    // Main application
    {
      name: 'bolt-app',
      script: 'npm',
      args: 'start',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=6144 --openssl-legacy-provider'
      }
    },

    // ERROR AUTOMATION SYSTEM - Core Components
    
    // 1. Real-time Error Monitor (HIGHEST PRIORITY)
    {
      name: 'error-monitor',
      script: './scripts/automation/error-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        MONITOR_INTERVAL: '30000', // 30 seconds
        ALERT_THRESHOLD: '5'
      },
      log_file: './logs/error-monitor.log',
      error_file: './logs/error-monitor-error.log',
      out_file: './logs/error-monitor-out.log'
    },

    // 2. Comprehensive Error Fixer (HIGH PRIORITY)
    {
      name: 'comprehensive-error-fixer',
      script: './scripts/automation/comprehensive-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000' // 5 minutes
      },
      log_file: './logs/comprehensive-error-fixer.log',
      error_file: './logs/comprehensive-error-fixer-error.log',
      out_file: './logs/comprehensive-error-fixer-out.log'
    },

    // 3. TypeScript Error Fixer (HIGH PRIORITY)
    {
      name: 'typescript-error-fixer',
      script: './scripts/automation/typescript-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '180000' // 3 minutes
      },
      log_file: './logs/typescript-error-fixer.log',
      error_file: './logs/typescript-error-fixer-error.log',
      out_file: './logs/typescript-error-fixer-out.log'
    },

    // 4. ESLint Error Fixer (HIGH PRIORITY)
    {
      name: 'eslint-error-fixer',
      script: './scripts/automation/eslint-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '240000' // 4 minutes
      },
      log_file: './logs/eslint-error-fixer.log',
      error_file: './logs/eslint-error-fixer-error.log',
      out_file: './logs/eslint-error-fixer-out.log'
    },

    // 5. JSX Error Fixer (MEDIUM PRIORITY)
    {
      name: 'jsx-error-fixer',
      script: './scripts/automation/jsx-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000' // 5 minutes
      },
      log_file: './logs/jsx-error-fixer.log',
      error_file: './logs/jsx-error-fixer-error.log',
      out_file: './logs/jsx-error-fixer-out.log'
    },

    // 6. Import Error Fixer (MEDIUM PRIORITY)
    {
      name: 'import-error-fixer',
      script: './scripts/automation/import-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '360000' // 6 minutes
      },
      log_file: './logs/import-error-fixer.log',
      error_file: './logs/import-error-fixer-error.log',
      out_file: './logs/import-error-fixer-out.log'
    },

    // 7. Merge Conflict Resolver (MEDIUM PRIORITY)
    {
      name: 'merge-conflict-resolver',
      script: './scripts/automation/merge-conflict-resolver.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000' // 10 minutes
      },
      log_file: './logs/merge-conflict-resolver.log',
      error_file: './logs/merge-conflict-resolver-error.log',
      out_file: './logs/merge-conflict-resolver-out.log'
    },

    // 8. Build Error Detector (MEDIUM PRIORITY)
    {
      name: 'build-error-detector',
      script: './scripts/automation/build-error-detector.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000' // 15 minutes
      },
      log_file: './logs/build-error-detector.log',
      error_file: './logs/build-error-detector-error.log',
      out_file: './logs/build-error-detector-out.log'
    },

    // 9. Dependency Error Resolver (LOW PRIORITY)
    {
      name: 'dependency-error-resolver',
      script: './scripts/automation/dependency-error-resolver.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      },
      log_file: './logs/dependency-error-resolver.log',
      error_file: './logs/dependency-error-resolver-error.log',
      out_file: './logs/dependency-error-resolver-out.log'
    },

    // 10. Error Analytics Dashboard (MONITORING)
    {
      name: 'error-analytics-dashboard',
      script: './scripts/automation/error-analytics-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '60000' // 1 minute
      },
      log_file: './logs/error-analytics-dashboard.log',
      error_file: './logs/error-analytics-dashboard-error.log',
      out_file: './logs/error-analytics-dashboard-out.log'
    },

    // 11. Error Prevention Monitor (PREVENTIVE)
    {
      name: 'error-prevention-monitor',
      script: './scripts/automation/error-prevention-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '120000' // 2 minutes
      },
      log_file: './logs/error-prevention-monitor.log',
      error_file: './logs/error-prevention-monitor-error.log',
      out_file: './logs/error-prevention-monitor-out.log'
    },

    // 12. Auto Recovery Manager (RECOVERY)
    {
      name: 'auto-recovery-manager',
      script: './scripts/automation/auto-recovery-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '30000' // 30 seconds
      },
      log_file: './logs/auto-recovery-manager.log',
      error_file: './logs/auto-recovery-manager-error.log',
      out_file: './logs/auto-recovery-manager-out.log'
    },

    // 13. Critical Error Alert System (ALERTING)
    {
      name: 'critical-error-alert-system',
      script: './scripts/automation/critical-error-alert-system.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        ALERT_INTERVAL: '10000' // 10 seconds
      },
      log_file: './logs/critical-error-alert-system.log',
      error_file: './logs/critical-error-alert-system-error.log',
      out_file: './logs/critical-error-alert-system-out.log'
    },

    // 14. Error Fixer Orchestrator (COORDINATION)
    {
      name: 'error-fixer-orchestrator',
      script: './scripts/automation/error-fixer-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        ORCHESTRATION_INTERVAL: '60000' // 1 minute
      },
      log_file: './logs/error-fixer-orchestrator.log',
      error_file: './logs/error-fixer-orchestrator-error.log',
      out_file: './logs/error-fixer-orchestrator-out.log'
    },

    // 15. Quality Assurance Monitor (QUALITY)
    {
      name: 'quality-assurance-monitor',
      script: './scripts/automation/quality-assurance-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000' // 5 minutes
      },
      log_file: './logs/quality-assurance-monitor.log',
      error_file: './logs/quality-assurance-monitor-error.log',
      out_file: './logs/quality-assurance-monitor-out.log'
    }
  ],

  deploy: {
    production: {
      user: 'root',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/bolt.new.zion.app.git',
      path: '/workspace/production',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem-error-automation.config.cjs --env production',
      'pre-setup': ''
    }
  }
};