module.exports = {
  apps: [
    // Main application
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
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '10s',
      restart_delay: 5000
    },

    // Error Monitor - Continuously monitors for errors
    {
      name: 'error-monitor',
      script: './scripts/error-monitor.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: { NODE_ENV: 'production' },
      cron_restart: '0 */15 * * *', // Every 15 minutes
      log_file: './logs/error-monitor.log',
      out_file: './logs/error-monitor-out.log',
      error_file: './logs/error-monitor-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '30s',
      restart_delay: 10000
    },

    // Syntax Fixer - Automatically fixes syntax errors
    {
      name: 'syntax-fixer',
      script: './scripts/syntax-fixer.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: { NODE_ENV: 'production' },
      cron_restart: '0 */10 * * *', // Every 10 minutes
      log_file: './logs/syntax-fixer.log',
      out_file: './logs/syntax-fixer-out.log',
      error_file: './logs/syntax-fixer-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '30s',
      restart_delay: 10000
    },

    // Dependency Manager - Manages dependencies and security
    {
      name: 'dependency-manager',
      script: './scripts/dependency-manager.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: { NODE_ENV: 'production' },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: './logs/dependency-manager.log',
      out_file: './logs/dependency-manager-out.log',
      error_file: './logs/dependency-manager-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '30s',
      restart_delay: 10000
    },

    // Health Dashboard - Provides health monitoring dashboard
    {
      name: 'health-dashboard',
      script: './scripts/health-checker.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: { NODE_ENV: 'production' },
      cron_restart: '*/5 * * * *', // Every 5 minutes
      log_file: './logs/health-dashboard.log',
      out_file: './logs/health-dashboard-out.log',
      error_file: './logs/health-dashboard-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '30s',
      restart_delay: 10000
    },

    // AI Code Quality Enhancer
    {
      name: 'ai-code-enhancer',
      script: './scripts/comprehensive-app-improver.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: { NODE_ENV: 'production' },
      cron_restart: '0 */20 * * *', // Every 20 minutes
      log_file: './logs/ai-code-enhancer.log',
      out_file: './logs/ai-code-enhancer-out.log',
      error_file: './logs/ai-code-enhancer-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '30s',
      restart_delay: 10000
    },

    // Performance Optimizer
    {
      name: 'performance-optimizer',
      script: './scripts/performance-optimizer.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: { NODE_ENV: 'production' },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './logs/performance-optimizer.log',
      out_file: './logs/performance-optimizer-out.log',
      error_file: './logs/performance-optimizer-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '30s',
      restart_delay: 10000
    },

    // Smart Testing Automation
    {
      name: 'smart-testing',
      script: './scripts/comprehensive-testing-suite.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: { NODE_ENV: 'production' },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: './logs/smart-testing.log',
      out_file: './logs/smart-testing-out.log',
      error_file: './logs/smart-testing-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '30s',
      restart_delay: 10000
    }
  ],

  deploy: {
    production: {
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/var/www/zion.app',
      'pre-deploy': 'git fetch --all',
      'post-deploy': 'npm install --legacy-peer-deps && npm run build && pm2 reload ecosystem.config.cjs --env production',
      'pre-setup': 'mkdir -p /var/www/zion.app/logs'
    }
  }
}