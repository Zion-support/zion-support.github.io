module.exports = {
  apps: [
    // Comprehensive Error Prevention Orchestrator
    {
      name: 'comprehensive-error-prevention-orchestrator',
      script: './scripts/automation/comprehensive-error-fixer.cjs',
      args: 'run',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'production',
        AUTOMATION_MODE: 'continuous',
        SCAN_INTERVAL: 300000, // 5 minutes
        LOG_LEVEL: 'info',
        MAX_RETRIES: 3,
        BACKUP_ENABLED: 'true'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '1G',
      error_file: './logs/comprehensive-error-prevention-orchestrator-error.log',
      out_file: './logs/comprehensive-error-prevention-orchestrator-out.log',
      log_file: './logs/comprehensive-error-prevention-orchestrator-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '30s',
      max_restarts: 5,
      restart_delay: 10000,
      kill_timeout: 10000,
      wait_ready: true,
      listen_timeout: 15000
    },

    // Real-time Error Monitor
    {
      name: 'real-time-error-monitor',
      script: './scripts/automation/error-prevention-automation.cjs',
      args: 'watch',
      cwd: './',
      watch: ['src/**/*.{ts,tsx,js,jsx}', 'components/**/*.{ts,tsx,js,jsx}', 'pages/**/*.{ts,tsx,js,jsx}'],
      ignore_watch: ['node_modules', 'dist', '.git', '*.log', 'logs/*', '*.backup', '*.tsbackup', 'backup/*'],
      env: {
        NODE_ENV: 'production',
        MONITOR_MODE: 'realtime',
        SCAN_INTERVAL: 60000, // 1 minute
        LOG_LEVEL: 'info',
        ALERT_THRESHOLD: 10,
        AUTO_FIX_ENABLED: 'true'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '512M',
      error_file: './logs/real-time-error-monitor-error.log',
      out_file: './logs/real-time-error-monitor-out.log',
      log_file: './logs/real-time-error-monitor-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '20s',
      max_restarts: 3,
      restart_delay: 5000,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 8000
    },

    // Intelligent Code Quality Monitor
    {
      name: 'intelligent-code-quality-monitor',
      script: './scripts/automation/intelligent-predictive-monitor.cjs',
      args: 'monitor',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'production',
        MONITOR_MODE: 'intelligent',
        SCAN_INTERVAL: 180000, // 3 minutes
        LOG_LEVEL: 'info',
        AI_ANALYSIS_ENABLED: 'true',
        PREDICTIVE_FIXING: 'true',
        QUALITY_THRESHOLD: 0.8
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '512M',
      error_file: './logs/intelligent-code-quality-monitor-error.log',
      out_file: './logs/intelligent-code-quality-monitor-out.log',
      log_file: './logs/intelligent-code-quality-monitor-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '30s',
      max_restarts: 5,
      restart_delay: 10000,
      kill_timeout: 10000,
      wait_ready: true,
      listen_timeout: 15000
    },

    // Automated Code Refactoring Engine
    {
      name: 'automated-code-refactoring-engine',
      script: './scripts/automation/intelligent-code-refactorer.cjs',
      args: 'refactor',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'production',
        REFACTOR_MODE: 'automated',
        SCAN_INTERVAL: 600000, // 10 minutes
        LOG_LEVEL: 'info',
        AUTO_REFACTOR_ENABLED: 'true',
        SAFETY_CHECKS: 'true',
        BACKUP_BEFORE_REFACTOR: 'true'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '1G',
      error_file: './logs/automated-code-refactoring-engine-error.log',
      out_file: './logs/automated-code-refactoring-engine-out.log',
      log_file: './logs/automated-code-refactoring-engine-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '30s',
      max_restarts: 3,
      restart_delay: 15000,
      kill_timeout: 15000,
      wait_ready: true,
      listen_timeout: 20000
    },

    // Continuous Integration Automation
    {
      name: 'continuous-integration-automation',
      script: './scripts/automation/enhanced-ci-cd-automation.cjs',
      args: 'ci',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'production',
        CI_MODE: 'continuous',
        SCAN_INTERVAL: 120000, // 2 minutes
        LOG_LEVEL: 'info',
        AUTO_DEPLOY_ENABLED: 'false',
        TEST_AUTOMATION: 'true',
        QUALITY_GATES: 'true'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '512M',
      error_file: './logs/continuous-integration-automation-error.log',
      out_file: './logs/continuous-integration-automation-out.log',
      log_file: './logs/continuous-integration-automation-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '20s',
      max_restarts: 3,
      restart_delay: 5000,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 8000
    },

    // Performance and Security Monitor
    {
      name: 'performance-security-monitor',
      script: './scripts/automation/enhanced-security-automation.cjs',
      args: 'monitor',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'production',
        MONITOR_MODE: 'comprehensive',
        SCAN_INTERVAL: 300000, // 5 minutes
        LOG_LEVEL: 'info',
        SECURITY_SCANNING: 'true',
        PERFORMANCE_MONITORING: 'true',
        VULNERABILITY_ALERTS: 'true'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '512M',
      error_file: './logs/performance-security-monitor-error.log',
      out_file: './logs/performance-security-monitor-out.log',
      log_file: './logs/performance-security-monitor-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '20s',
      max_restarts: 3,
      restart_delay: 5000,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 8000
    },

    // Smart Dependency Manager
    {
      name: 'smart-dependency-manager',
      script: './scripts/automation/intelligent-dependency-manager.cjs',
      args: 'manage',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'production',
        MANAGEMENT_MODE: 'smart',
        SCAN_INTERVAL: 3600000, // 1 hour
        LOG_LEVEL: 'info',
        AUTO_UPDATE_ENABLED: 'true',
        SECURITY_UPDATES: 'true',
        COMPATIBILITY_CHECKS: 'true'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '512M',
      error_file: './logs/smart-dependency-manager-error.log',
      out_file: './logs/smart-dependency-manager-out.log',
      log_file: './logs/smart-dependency-manager-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '30s',
      max_restarts: 3,
      restart_delay: 10000,
      kill_timeout: 10000,
      wait_ready: true,
      listen_timeout: 15000
    },

    // Automated Testing and Quality Assurance
    {
      name: 'automated-testing-qa',
      script: './scripts/automation/enhanced-testing-automation.cjs',
      args: 'test',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'production',
        TEST_MODE: 'automated',
        SCAN_INTERVAL: 900000, // 15 minutes
        LOG_LEVEL: 'info',
        AUTO_TEST_GENERATION: 'true',
        COVERAGE_ANALYSIS: 'true',
        QUALITY_REPORTS: 'true'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '512M',
      error_file: './logs/automated-testing-qa-error.log',
      out_file: './logs/automated-testing-qa-out.log',
      log_file: './logs/automated-testing-qa-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '20s',
      max_restarts: 3,
      restart_delay: 5000,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 8000
    },

    // Project Health Dashboard
    {
      name: 'project-health-dashboard',
      script: './scripts/automation/project-health-monitor.cjs',
      args: 'dashboard',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'production',
        DASHBOARD_MODE: 'realtime',
        SCAN_INTERVAL: 60000, // 1 minute
        LOG_LEVEL: 'info',
        METRICS_COLLECTION: 'true',
        ALERT_SYSTEM: 'true',
        REPORTING: 'true'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '512M',
      error_file: './logs/project-health-dashboard-error.log',
      out_file: './logs/project-health-dashboard-out.log',
      log_file: './logs/project-health-dashboard-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '20s',
      max_restarts: 3,
      restart_delay: 5000,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 8000
    }
  ],

  deploy: {
    production: {
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/zion-app.git',
      path: '/var/www/zion-app',
      'pre-deploy-local': 'echo "Starting comprehensive error prevention automation deployment"',
      'post-deploy': 'npm install && pm2 reload ecosystem-comprehensive-error-prevention.config.cjs --env production',
      'pre-setup': 'echo "Setting up comprehensive error prevention automation environment"'
    },
    staging: {
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/develop',
      repo: 'git@github.com:your-username/zion-app.git',
      path: '/var/www/zion-app-staging',
      'pre-deploy-local': 'echo "Starting comprehensive error prevention automation deployment"',
      'post-deploy': 'npm install && pm2 reload ecosystem-comprehensive-error-prevention.config.cjs --env production',
      'pre-setup': 'echo "Setting up comprehensive error prevention automation environment"'
    }
  }
};