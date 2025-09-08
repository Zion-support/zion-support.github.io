module.exports = {
  apps: [
    {
      name: 'bolt-zion-app',
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
      }
    },
    {
      name: 'link-checker',
      script: 'scripts/link-checker.js',
      cwd: '/workspace',
      instances: 1,
      autorestart: false,
      watch: false,
      cron_restart: '0 2 * * *', // Daily at 2 AM
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'continuous-improvement',
      script: 'scripts/continuous-improvement.js',
      cwd: '/workspace',
      instances: 1,
      autorestart: false,
      watch: false,
      cron_restart: '0 2 * * 1', // Weekly on Monday at 2 AM
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'build-monitor',
      script: 'scripts/build-monitor.js',
      cwd: '/workspace',
      instances: 1,
      autorestart: false,
      watch: false,
      cron_restart: '0 */6 * * *', // Every 6 hours
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'security-audit',
      script: 'scripts/security-audit.js',
      cwd: '/workspace',
      instances: 1,
      autorestart: false,
      watch: false,
      cron_restart: '0 3 * * 0', // Weekly on Sunday at 3 AM
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'performance-monitor',
      script: 'scripts/performance-monitor.js',
      cwd: '/workspace',
      instances: 1,
      autorestart: false,
      watch: false,
      cron_restart: '0 4 * * *', // Daily at 4 AM
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
