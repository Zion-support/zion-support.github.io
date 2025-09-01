module.exports = {
  apps: [
    // Main Zion Website Application
    {
      name: 'zion-website',
      script: 'npm',
      args: 'run dev',
      cwd: '/workspace',
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
        PORT: 3000
      },
      log_file: './logs/zion-website.log',
      out_file: './logs/zion-website-out.log',
      error_file: './logs/zion-website-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true
    },

    // AI Code Analyzer - Advanced code analysis and optimization
    {
      name: 'ai-code-analyzer',
      script: './scripts/automation/intelligent-code-refactorer.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      restart_delay: 20000,
      max_restarts: 5,
      min_uptime: '60s',
      log_file: './logs/ai-code-analyzer.log',
      out_file: './logs/ai-code-analyzer-out.log',
      error_file: './logs/ai-code-analyzer-error.log',
      cron_restart: '0 */3 * * *' // Restart every 3 hours
    },

    // Smart Performance Optimizer - Intelligent performance optimization
    {
      name: 'smart-performance-optimizer',
      script: './scripts/automation/intelligent-performance-optimizer.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      restart_delay: 25000,
      max_restarts: 3,
      min_uptime: '90s',
      log_file: './logs/smart-performance-optimizer.log',
      out_file: './logs/smart-performance-optimizer-out.log',
      error_file: './logs/smart-performance-optimizer-error.log',
      cron_restart: '0 */4 * * *' // Restart every 4 hours
    },

    // Intelligent Dependency Manager - Advanced dependency management
    {
      name: 'intelligent-dependency-manager',
      script: './scripts/automation/smart-dependency-intelligence.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      restart_delay: 30000,
      max_restarts: 3,
      min_uptime: '120s',
      log_file: './logs/intelligent-dependency-manager.log',
      out_file: './logs/intelligent-dependency-manager-out.log',
      error_file: './logs/intelligent-dependency-manager-error.log',
      cron_restart: '0 6 * * *' // Restart daily at 6 AM
    },

    // Smart Deployment Automation - Intelligent deployment management
    {
      name: 'smart-deployment-automation',
      script: './scripts/automation/smart-deployment-automation.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      restart_delay: 35000,
      max_restarts: 2,
      min_uptime: '180s',
      log_file: './logs/smart-deployment-automation.log',
      out_file: './logs/smart-deployment-automation-out.log',
      error_file: './logs/smart-deployment-automation-error.log',
      cron_restart: '0 9 * * *' // Restart daily at 9 AM
    },

    // Predictive Issue Detection - Anticipates and prevents issues
    {
      name: 'predictive-issue-detection',
      script: './scripts/automation/predictive-issue-detection.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      restart_delay: 15000,
      max_restarts: 4,
      min_uptime: '45s',
      log_file: './logs/predictive-issue-detection.log',
      out_file: './logs/predictive-issue-detection-out.log',
      error_file: './logs/predictive-issue-detection-error.log',
      cron_restart: '0 */2 * * *' // Restart every 2 hours
    },

    // Enhanced Error Monitor - Advanced error detection and fixing
    {
      name: 'enhanced-error-monitor',
      script: './scripts/automation/master-error-detector-fixer.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      restart_delay: 10000,
      max_restarts: 6,
      min_uptime: '30s',
      log_file: './logs/enhanced-error-monitor.log',
      out_file: './logs/enhanced-error-monitor-out.log',
      error_file: './logs/enhanced-error-monitor-error.log',
      cron_restart: '0 */1 * * *' // Restart every hour
    },

    // Intelligent Build Pipeline - Advanced build optimization
    {
      name: 'intelligent-build-pipeline',
      script: './scripts/automation/intelligent-build-pipeline.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      restart_delay: 40000,
      max_restarts: 2,
      min_uptime: '240s',
      log_file: './logs/intelligent-build-pipeline.log',
      out_file: './logs/intelligent-build-pipeline-out.log',
      error_file: './logs/intelligent-build-pipeline-error.log',
      cron_restart: '0 7 * * *' // Restart daily at 7 AM
    },

    // Project Health Monitor - Comprehensive project health monitoring
    {
      name: 'project-health-monitor',
      script: './scripts/automation/project-health-monitor.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      restart_delay: 12000,
      max_restarts: 5,
      min_uptime: '40s',
      log_file: './logs/project-health-monitor.log',
      out_file: './logs/project-health-monitor-out.log',
      error_file: './logs/project-health-monitor-error.log',
      cron_restart: '0 */2 * * *' // Restart every 2 hours
    },

    // Smart Testing Automation - Intelligent testing and quality assurance
    {
      name: 'smart-testing-automation',
      script: './scripts/automation/smart-testing-automation.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      restart_delay: 18000,
      max_restarts: 4,
      min_uptime: '60s',
      log_file: './logs/smart-testing-automation.log',
      out_file: './logs/smart-testing-automation-out.log',
      error_file: './logs/smart-testing-automation-error.log',
      cron_restart: '0 5 * * *' // Restart daily at 5 AM
    },

    // Enhanced Security Automation - Advanced security monitoring
    {
      name: 'enhanced-security-automation',
      script: './scripts/automation/enhanced-security-automation.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      restart_delay: 22000,
      max_restarts: 3,
      min_uptime: '75s',
      log_file: './logs/enhanced-security-automation.log',
      out_file: './logs/enhanced-security-automation-out.log',
      error_file: './logs/enhanced-security-automation-error.log',
      cron_restart: '0 4 * * *' // Restart daily at 4 AM
    },

    // Unified Automation Dashboard - Centralized automation monitoring
    {
      name: 'unified-automation-dashboard',
      script: './scripts/automation/unified-automation-dashboard.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      restart_delay: 8000,
      max_restarts: 7,
      min_uptime: '20s',
      log_file: './logs/unified-automation-dashboard.log',
      out_file: './logs/unified-automation-dashboard-out.log',
      error_file: './logs/unified-automation-dashboard-error.log',
      cron_restart: '0 */1 * * *' // Restart every hour
    }
  ],

  deploy: {
    production: {
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/var/www/zion.app',
      'pre-deploy-local': '',
      'post-deploy': 'npm install --legacy-peer-deps && npm run build && pm2 reload ecosystem.enhanced.cjs --env production',
      'pre-setup': 'mkdir -p /var/www/zion.app/logs'
    }
  }
};
