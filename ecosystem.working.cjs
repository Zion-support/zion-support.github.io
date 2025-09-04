module.exports = {
  apps: [
    // Health Monitor - Essential for monitoring system health
    {
      name: 'health-monitor',
      script: 'scripts/pm2/health-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '*/5 * * * *', // Every 5 minutes
      log_file: 'logs/pm2/health-monitor.log',
      error_file: 'logs/pm2/health-monitor-error.log',
      out_file: 'logs/pm2/health-monitor-out.log',
    },
    
    // CI/CD Automation - For continuous integration
    {
      name: 'ci-cd-automation',
      script: 'scripts/pm2/ci-cd-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */2 * * *', // Every 2 hours
      log_file: 'logs/pm2/ci-cd-automation.log',
      error_file: 'logs/pm2/ci-cd-automation-error.log',
      out_file: 'logs/pm2/ci-cd-automation-out.log',
    },
    
    // Performance Monitor - Monitor system performance
    {
      name: 'performance-monitor',
      script: 'scripts/pm2/performance-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */3 * * *', // Every 3 hours
      log_file: 'logs/pm2/performance-monitor.log',
      error_file: 'logs/pm2/performance-monitor-error.log',
      out_file: 'logs/pm2/performance-monitor-out.log',
    },
    
    // Security Audit - Regular security checks
    {
      name: 'security-audit',
      script: 'scripts/pm2/security-audit.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: 'logs/pm2/security-audit.log',
      error_file: 'logs/pm2/security-audit-error.log',
      out_file: 'logs/pm2/security-audit-out.log',
    },
    
    // Quality Checks - Code quality monitoring
    {
      name: 'quality-checks',
      script: 'scripts/pm2/quality-checks.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: 'logs/pm2/quality-checks.log',
      error_file: 'logs/pm2/quality-checks-error.log',
      out_file: 'logs/pm2/quality-checks-out.log',
    },
    
    // Dependency Updates - Monitor and update dependencies
    {
      name: 'dependency-updates',
      script: 'scripts/pm2/dependency-updates.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 2 * * *', // Daily at 2 AM
      log_file: 'logs/pm2/dependency-updates.log',
      error_file: 'logs/pm2/dependency-updates-error.log',
      out_file: 'logs/pm2/dependency-updates-out.log',
    }
  ]
};