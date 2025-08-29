module.exports = {
  apps: [
    // Main application
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

    // Weekly dependency management - runs every 7 days (replaces GitHub Actions dependencies workflow)
    {
      name: 'weekly-dependency-manager',
      script: './scripts/automation/weekly-dependency-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '604800000' // 7 days
      }
    },

    // Weekly security analysis - runs every 7 days (replaces GitHub Actions CodeQL workflow)
    {
      name: 'weekly-security-analysis',
      script: './scripts/automation/weekly-security-analysis.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '604800000' // 7 days
      }
    },

    // Workflow status monitor - runs every 2 hours (replaces GitHub Actions status workflow)
    {
      name: 'workflow-status-monitor',
      script: './scripts/automation/workflow-status-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: '7200000' // 2 hours
      }
    }
  ]
};