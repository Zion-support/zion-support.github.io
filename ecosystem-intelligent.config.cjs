module.exports = {
  apps: [
    // Main application with intelligent monitoring
    {
      name: 'zion-app-intelligent',
      script: 'npm',
      args: 'start',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 5000,
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        NODE_OPTIONS: '--max-old-space-size=4096'
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
        NODE_OPTIONS: '--max-old-space-size=4096'
      },
      log_file: './logs/zion-app-intelligent.log',
      error_file: './logs/zion-app-intelligent-error.log',
      out_file: './logs/zion-app-intelligent-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Intelligent Health Monitor - Advanced issue detection and resolution
    {
      name: 'intelligent-health-monitor',
      script: './scripts/automation/intelligent-health-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      min_uptime: '30s',
      max_restarts: 5,
      restart_delay: 10000,
      env: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=2048'
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      log_file: './logs/intelligent-health-monitor.log',
      error_file: './logs/intelligent-health-monitor-error.log',
      out_file: './logs/intelligent-health-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Intelligent Build Automation - Smart build management
    {
      name: 'intelligent-build-automation',
      script: './scripts/automation/intelligent-build-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      min_uptime: '30s',
      max_restarts: 5,
      restart_delay: 10000,
      env: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=2048'
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      log_file: './logs/intelligent-build-automation.log',
      error_file: './logs/intelligent-build-automation-error.log',
      out_file: './logs/intelligent-build-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Intelligent Dependency Manager - Advanced dependency management
    {
      name: 'intelligent-dependency-manager',
      script: './scripts/automation/intelligent-dependency-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      min_uptime: '30s',
      max_restarts: 5,
      restart_delay: 10000,
      env: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=2048'
      },
      cron_restart: '0 2 * * *', // Restart daily at 2 AM
      log_file: './logs/intelligent-dependency-manager.log',
      error_file: './logs/intelligent-dependency-manager-error.log',
      out_file: './logs/intelligent-dependency-manager-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Performance Monitor - Real-time performance tracking
    {
      name: 'performance-monitor-intelligent',
      script: './scripts/automation/performance-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      min_uptime: '30s',
      max_restarts: 5,
      restart_delay: 10000,
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '*/30 * * * *', // Restart every 30 minutes
      log_file: './logs/performance-monitor-intelligent.log',
      error_file: './logs/performance-monitor-intelligent-error.log',
      out_file: './logs/performance-monitor-intelligent-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Security Monitor - Advanced security scanning
    {
      name: 'security-monitor-intelligent',
      script: './scripts/automation/enhanced-security-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      min_uptime: '30s',
      max_restarts: 5,
      restart_delay: 10000,
      env: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=2048'
      },
      cron_restart: '0 */8 * * *', // Restart every 8 hours
      log_file: './logs/security-monitor-intelligent.log',
      error_file: './logs/security-monitor-intelligent-error.log',
      out_file: './logs/security-monitor-intelligent-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Test Automation - Intelligent testing and quality assurance
    {
      name: 'test-automation-intelligent',
      script: './scripts/automation/enhanced-testing-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      min_uptime: '30s',
      max_restarts: 5,
      restart_delay: 10000,
      env: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=2048'
      },
      cron_restart: '0 */12 * * *', // Restart every 12 hours
      log_file: './logs/test-automation-intelligent.log',
      error_file: './logs/test-automation-intelligent-error.log',
      out_file: './logs/test-automation-intelligent-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // CI/CD Automation - Enhanced continuous integration
    {
      name: 'ci-cd-automation-intelligent',
      script: './scripts/automation/enhanced-ci-cd-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      min_uptime: '30s',
      max_restarts: 5,
      restart_delay: 10000,
      env: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=2048'
      },
      cron_restart: '0 */3 * * *', // Restart every 3 hours
      log_file: './logs/ci-cd-automation-intelligent.log',
      error_file: './logs/ci-cd-automation-intelligent-error.log',
      out_file: './logs/ci-cd-automation-intelligent-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Link Checker - Enhanced link integrity monitoring
    {
      name: 'link-checker-intelligent',
      script: './scripts/automation/enhanced-link-checker.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      min_uptime: '30s',
      max_restarts: 5,
      restart_delay: 10000,
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      log_file: './logs/link-checker-intelligent.log',
      error_file: './logs/link-checker-intelligent-error.log',
      out_file: './logs/link-checker-intelligent-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Project Health Dashboard - Real-time project monitoring
    {
      name: 'project-health-dashboard-intelligent',
      script: './scripts/automation/project-health-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      min_uptime: '30s',
      max_restarts: 5,
      restart_delay: 10000,
      env: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=2048'
      },
      cron_restart: '*/15 * * * *', // Restart every 15 minutes
      log_file: './logs/project-health-dashboard-intelligent.log',
      error_file: './logs/project-health-dashboard-intelligent-error.log',
      out_file: './logs/project-health-dashboard-intelligent-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // TypeScript Syntax Fixer - Intelligent code quality
    {
      name: 'typescript-syntax-fixer-intelligent',
      script: './scripts/automation/typescript-syntax-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      min_uptime: '30s',
      max_restarts: 5,
      restart_delay: 10000,
      env: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=2048'
      },
      cron_restart: '*/20 * * * *', // Restart every 20 minutes
      log_file: './logs/typescript-syntax-fixer-intelligent.log',
      error_file: './logs/typescript-syntax-fixer-intelligent-error.log',
      out_file: './logs/typescript-syntax-fixer-intelligent-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // Console Error Fixer - Intelligent error resolution
    {
      name: 'console-error-fixer-intelligent',
      script: './scripts/automation/console-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      min_uptime: '30s',
      max_restarts: 5,
      restart_delay: 10000,
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '*/25 * * * *', // Restart every 25 minutes
      log_file: './logs/console-error-fixer-intelligent.log',
      error_file: './logs/console-error-fixer-intelligent-error.log',
      out_file: './logs/console-error-fixer-intelligent-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
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
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem-intelligent.config.cjs --env production',
      'pre-setup': ''
    }
  }
};