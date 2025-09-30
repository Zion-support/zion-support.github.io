module.exports = {
  apps: [
    // Error Prevention and Fixing Automation System
    
    // 1. Comprehensive Error Fixer - runs every 5 minutes (HIGHEST PRIORITY)
    {
      name: 'comprehensive-error-fixer',
      script: './scripts/automation/comprehensive-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000', // 5 minutes
        LOG_LEVEL: 'info'
      }
    },

    // 2. TypeScript Error Fixer - runs every 10 minutes
    {
      name: 'typescript-error-fixer',
      script: './scripts/automation/typescript-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000', // 10 minutes
        LOG_LEVEL: 'info'
      }
    },

    // 3. ESLint Error Fixer - runs every 10 minutes
    {
      name: 'eslint-error-fixer',
      script: './scripts/automation/eslint-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000', // 10 minutes
        LOG_LEVEL: 'info'
      }
    },

    // 4. Syntax Error Fixer - runs every 15 minutes
    {
      name: 'syntax-error-fixer',
      script: './scripts/automation/syntax-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000', // 15 minutes
        LOG_LEVEL: 'info'
      }
    },

    // 5. Build Error Fixer - runs every 20 minutes
    {
      name: 'build-error-fixer',
      script: './scripts/automation/build-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1200000', // 20 minutes
        LOG_LEVEL: 'info'
      }
    },

    // 6. Dependency Error Fixer - runs every 30 minutes
    {
      name: 'dependency-error-fixer',
      script: './scripts/automation/dependency-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000', // 30 minutes
        LOG_LEVEL: 'info'
      }
    },

    // 7. Code Quality Monitor - runs every 15 minutes
    {
      name: 'code-quality-monitor',
      script: './scripts/automation/code-quality-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '900000', // 15 minutes
        LOG_LEVEL: 'info'
      }
    },

    // 8. Error Prevention Orchestrator - runs every 5 minutes
    {
      name: 'error-prevention-orchestrator',
      script: './scripts/automation/error-prevention-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '300000', // 5 minutes
        LOG_LEVEL: 'info'
      }
    },

    // 9. Continuous Error Monitoring - runs every 2 minutes
    {
      name: 'continuous-error-monitor',
      script: './scripts/automation/continuous-error-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '120000', // 2 minutes
        LOG_LEVEL: 'info'
      }
    },

    // 10. Error Prevention Dashboard - runs every 10 minutes
    {
      name: 'error-prevention-dashboard',
      script: './scripts/automation/error-prevention-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '600000', // 10 minutes
        LOG_LEVEL: 'info'
      }
    }
  ]
};