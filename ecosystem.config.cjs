module.exports = {
  apps: [
    // Main application
    {
      name: 'zion-tech-app',
      script: 'npm',
      args: 'run preview',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      }
    },
    
    // Build and serve application
    {
      name: 'zion-build',
      script: 'npm',
      args: 'run build',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    },

  // Enhanced Automation Processes
  apps: [
    // Core automation processes
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
      }
    },

    // Core CI/CD automation (replaces GitHub Actions CI)
    {
      name: 'ci-automation',
      script: './scripts/automation/ci-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ],

  // Core Automation Processes (GitHub Actions Replacements)
  automation: [
    // CI/CD replacement
    {
      name: 'ci-automation',
      script: './scripts/automation/console-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      }
    },
    
    // Security scanning replacement
    {
      name: 'security-automation',
      script: './scripts/automation/security-audit.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      }
    },
    
    // Build and test replacement
    {
      name: 'build-test-automation',
      script: './scripts/automation/daily-build-test.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '86400000' // 24 hours
      }
    },
    
    // Link checking replacement
    {
      name: 'link-checker-automation',
      script: './scripts/automation/link-checker.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '604800000' // 7 days (weekly)
      }
    },
    
    // Enhanced automation processes
    {
      name: 'enhanced-testing',
      script: './scripts/automation/enhanced-testing-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      }
    },
    
    {
      name: 'enhanced-security',
      script: './scripts/automation/enhanced-security-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '3600000' // 1 hour
      }
    },
    
    {
      name: 'enhanced-ci-cd',
      script: './scripts/automation/enhanced-ci-cd-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '1800000' // 30 minutes
      }
    },

    // Continuous improvement automation (replaces GitHub Actions Continuous Improvement)
    {
      name: 'continuous-improvement',
      script: './scripts/automation/continuous-improvement.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '604800000' // 7 days (weekly)
      }
    },

    // Daily build test automation (replaces GitHub Actions Test)
    {
      name: 'daily-build-test',
      script: './scripts/automation/daily-build-test.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '86400000' // 24 hours (daily)
      }
    },

    // Comprehensive automation - runs every 4 hours (replaces GitHub Actions)
    {
      name: 'comprehensive-automation',
      script: './scripts/automation/comprehensive-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
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

    // GitHub Actions replacement automation - runs every 4 hours
    {
      name: 'github-actions-replacement',
      script: './scripts/automation/github-actions-replacement.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '14400000' // 4 hours
      }
    }
  ],

  // PM2 Log Rotation
  module: {
    name: 'pm2-logrotate',
    script: 'pm2-logrotate',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '100M',
    env: {
      NODE_ENV: 'production'
    }
  }
};
