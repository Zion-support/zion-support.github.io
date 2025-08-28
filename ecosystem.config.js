module.exports = {
  apps: [
    {
      name: 'zion-app',
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
    {
      name: 'zion-backend',
      script: 'npm',
      args: 'start',
      cwd: './server',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    }
  ],
  automation: [
    { name: 'link-checker', script: './scripts/automation/link-checker.js', instances: 1, autorestart: true, watch: false, max_memory_restart: '512M', env: { NODE_ENV: 'production', AUTOMATION_INTERVAL: '1800000' } }, // 30 minutes
    { name: 'continuous-improvement', script: './scripts/automation/continuous-improvement.js', instances: 1, autorestart: true, watch: false, max_memory_restart: '512M', env: { NODE_ENV: 'production', AUTOMATION_INTERVAL: '7200000' } }, // 2 hours
    { name: 'daily-build-test', script: './scripts/automation/daily-build-test.js', instances: 1, autorestart: true, watch: false, max_memory_restart: '512M', env: { NODE_ENV: 'production', AUTOMATION_INTERVAL: '3600000' } }, // 1 hour
    { name: 'security-audit', script: './scripts/automation/security-audit.js', instances: 1, autorestart: true, watch: false, max_memory_restart: '512M', env: { NODE_ENV: 'production', AUTOMATION_INTERVAL: '14400000' } }, // 4 hours
    { name: 'dependency-updates', script: './scripts/automation/dependency-updates.js', instances: 1, autorestart: true, watch: false, max_memory_restart: '512M', env: { NODE_ENV: 'production', AUTOMATION_INTERVAL: '21600000' } }, // 6 hours
    { name: 'performance-monitor', script: './scripts/automation/performance-monitor.js', instances: 1, autorestart: true, watch: false, max_memory_restart: '512M', env: { NODE_ENV: 'production', AUTOMATION_INTERVAL: '7200000' } }, // 2 hours
    { name: 'quality-checks', script: './scripts/automation/quality-checks.js', instances: 1, autorestart: true, watch: false, max_memory_restart: '512M', env: { NODE_ENV: 'production', AUTOMATION_INTERVAL: '10800000' } }, // 3 hours
    { name: 'link-integrity', script: './scripts/automation/link-integrity.js', instances: 1, autorestart: true, watch: false, max_memory_restart: '512M', env: { NODE_ENV: 'production', AUTOMATION_INTERVAL: '7200000' } }, // 2 hours
    { name: 'front-maximizer', script: './scripts/automation/front-maximizer.js', instances: 1, autorestart: true, watch: false, max_memory_restart: '512M', env: { NODE_ENV: 'production', AUTOMATION_INTERVAL: '14400000' } }, // 4 hours
    { name: 'sitemap-runner', script: './scripts/automation/sitemap-runner.js', instances: 1, autorestart: true, watch: false, max_memory_restart: '512M', env: { NODE_ENV: 'production', AUTOMATION_INTERVAL: '21600000' } }  // 6 hours
  ]
};
