module.exports = {
  apps: [
    // 🚀 Development & Code Quality Automation
    {
      name: 'dev-automation',
      script: './scripts/automation/dev-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development',
        AUTOMATION_INTERVAL: 300000, // 5 minutes
        LOG_LEVEL: 'info'
      },
      error_file: './logs/dev-automation-error.log',
      out_file: './logs/dev-automation-out.log',
      log_file: './logs/dev-automation-combined.log',
      time: true
    },

    // 🔍 Intelligent Code Analysis
    {
      name: 'code-analyzer',
      script: './scripts/automation/code-analyzer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development',
        AUTOMATION_INTERVAL: 600000, // 10 minutes
        LOG_LEVEL: 'info'
      },
      error_file: './logs/code-analyzer-error.log',
      out_file: './logs/code-analyzer-out.log',
      log_file: './logs/code-analyzer-combined.log',
      time: true
    },

    // 🧪 Smart Testing & CI/CD
    {
      name: 'smart-testing',
      script: './scripts/automation/smart-testing.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development',
        AUTOMATION_INTERVAL: 900000, // 15 minutes
        LOG_LEVEL: 'info'
      },
      error_file: './logs/smart-testing-error.log',
      out_file: './logs/smart-testing-out.log',
      log_file: './logs/smart-testing-combined.log',
      time: true
    },

    // 📊 Performance & Bundle Optimization
    {
      name: 'performance-optimizer',
      script: './scripts/automation/performance-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development',
        AUTOMATION_INTERVAL: 1800000, // 30 minutes
        LOG_LEVEL: 'info'
      },
      error_file: './logs/performance-optimizer-error.log',
      out_file: './logs/performance-optimizer-out.log',
      log_file: './logs/performance-optimizer-combined.log',
      time: true
    },

    // 🛡️ Security & Compliance Automation
    {
      name: 'security-automation',
      script: './scripts/automation/security-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development',
        AUTOMATION_INTERVAL: 3600000, // 1 hour
        LOG_LEVEL: 'info'
      },
      error_file: './logs/security-automation-error.log',
      out_file: './logs/security-automation-out.log',
      log_file: './logs/security-automation-combined.log',
      time: true
    },

    // 🔄 Continuous Integration & Deployment
    {
      name: 'ci-cd-automation',
      script: './scripts/automation/ci-cd-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development',
        AUTOMATION_INTERVAL: 300000, // 5 minutes
        LOG_LEVEL: 'info'
      },
      error_file: './logs/ci-cd-automation-error.log',
      out_file: './logs/ci-cd-automation-out.log',
      log_file: './logs/ci-cd-automation-combined.log',
      time: true
    },

    // 📈 Real-time Monitoring & Analytics
    {
      name: 'monitoring-dashboard',
      script: './scripts/automation/monitoring-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development',
        AUTOMATION_INTERVAL: 30000, // 30 seconds
        LOG_LEVEL: 'info'
      },
      error_file: './logs/monitoring-dashboard-error.log',
      out_file: './logs/monitoring-dashboard-out.log',
      log_file: './logs/monitoring-dashboard-combined.log',
      time: true
    },

    // 🧹 Code Cleanup & Maintenance
    {
      name: 'code-cleanup',
      script: './scripts/automation/code-cleanup.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development',
        AUTOMATION_INTERVAL: 7200000, // 2 hours
        LOG_LEVEL: 'info'
      },
      error_file: './logs/code-cleanup-error.log',
      out_file: './logs/code-cleanup-out.log',
      log_file: './logs/code-cleanup-combined.log',
      time: true
    },

    // 🚀 Build & Deployment Automation
    {
      name: 'build-automation',
      script: './scripts/automation/build-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development',
        AUTOMATION_INTERVAL: 600000, // 10 minutes
        LOG_LEVEL: 'info'
      },
      error_file: './logs/build-automation-error.log',
      out_file: './logs/build-automation-out.log',
      log_file: './logs/build-automation-combined.log',
      time: true
    },

    // 🔍 Quality Assurance & Testing
    {
      name: 'quality-assurance',
      script: './scripts/automation/quality-assurance.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development',
        AUTOMATION_INTERVAL: 900000, // 15 minutes
        LOG_LEVEL: 'info'
      },
      error_file: './logs/quality-assurance-error.log',
      out_file: './logs/quality-assurance-out.log',
      log_file: './logs/quality-assurance-combined.log',
      time: true
    },

    // 📊 Analytics & Reporting
    {
      name: 'analytics-reporter',
      script: './scripts/automation/analytics-reporter.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development',
        AUTOMATION_INTERVAL: 3600000, // 1 hour
        LOG_LEVEL: 'info'
      },
      error_file: './logs/analytics-reporter-error.log',
      out_file: './logs/analytics-reporter-out.log',
      log_file: './logs/analytics-reporter-combined.log',
      time: true
    }
  ]
};