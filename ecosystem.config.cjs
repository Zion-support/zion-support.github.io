module.exports = {
  apps: [
    // Main application
    {
      name: 'zion-website',
      script: 'npm',
      args: 'start',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=6144 --openssl-legacy-provider'
      },
      env_production: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=6144 --openssl-legacy-provider'
      }
    },

    // CI/CD Pipeline Automation
    {
      name: 'ci-cd-pipeline',
      script: './scripts/pm2/ci-cd-pipeline.js',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */6 * * *', // Every 6 hours
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      }
    },

    // Continuous Improvement Automation
    {
      name: 'continuous-improvement',
      script: './scripts/pm2/continuous-improvement.js',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 2 * * 1', // Weekly on Monday at 2 AM
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      }
    },

    // Dependency Management Automation
    {
      name: 'dependency-manager',
      script: './scripts/pm2/dependency-manager.js',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 2 * * 1', // Every Monday at 2 AM
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      }
    },

    // Link Checker Automation
    {
      name: 'link-checker',
      script: './scripts/pm2/link-checker.js',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 2 * * *', // Daily at 2 AM
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      }
    },

    // Code Quality Automation
    {
      name: 'code-quality',
      script: './scripts/pm2/code-quality.js',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */4 * * *', // Every 4 hours
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      }
    },

    // Performance Monitoring
    {
      name: 'performance-monitor',
      script: './scripts/pm2/performance-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */2 * * *', // Every 2 hours
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      }
    },

    // Security Audit Automation
    {
      name: 'security-audit',
      script: './scripts/pm2/security-audit.js',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 3 * * *', // Daily at 3 AM
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      }
    },

    // Build Automation
    {
      name: 'build-automation',
      script: './scripts/pm2/build-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */8 * * *', // Every 8 hours
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=6144 --openssl-legacy-provider'
      }
    }
  ],

  deploy: {
    production: {
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/your-repo.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    staging: {
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/develop',
      repo: 'git@github.com:your-username/your-repo.git',
      path: '/var/www/staging',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};