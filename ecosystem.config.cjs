module.exports = {
  apps: [
    // Main application
    {
      name: 'zion-tech-app',
      script: 'npm',
      args: 'run dev',
      cwd: '/workspace',
      watch: false,
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      }
    },

    // TypeScript Error Fixer - runs every 5 minutes
    {
      name: 'typescript-error-fixer',
      script: 'scripts/automation/robust-typescript-fixer.cjs',
      cwd: '/workspace',
      watch: false,
      instances: 1,
      autorestart: true,
      cron_restart: '*/5 * * * *', // Every 5 minutes
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development'
      }
    },

    // Comprehensive Error Fixer - runs every 10 minutes
    {
      name: 'comprehensive-error-fixer',
      script: 'scripts/automation/comprehensive-error-fixer.cjs',
      cwd: '/workspace',
      watch: false,
      instances: 1,
      autorestart: true,
      cron_restart: '*/10 * * * *', // Every 10 minutes
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development'
      }
    },

    // Duplicate Identifier Fixer - runs every 15 minutes
    {
      name: 'duplicate-identifier-fixer',
      script: 'scripts/automation/duplicate-identifier-fixer.cjs',
      cwd: '/workspace',
      watch: false,
      instances: 1,
      autorestart: true,
      cron_restart: '*/15 * * * *', // Every 15 minutes
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development'
      }
    },

    // Error Monitoring Dashboard - runs every 30 minutes
    {
      name: 'error-monitoring-dashboard',
      script: 'scripts/automation/error-monitoring-dashboard.cjs',
      cwd: '/workspace',
      watch: false,
      instances: 1,
      autorestart: true,
      cron_restart: '*/30 * * * *', // Every 30 minutes
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development'
      }
    },

    // Project Health Check - runs every hour
    {
      name: 'project-health-check',
      script: 'scripts/automation/project-health-check.cjs',
      cwd: '/workspace',
      watch: false,
      instances: 1,
      autorestart: true,
      cron_restart: '0 * * * *', // Every hour
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development'
      }
    }
  ],

  deploy: {
    production: {
      user: 'node',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:repo/name.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.cjs --env production'
    }
  }
};
