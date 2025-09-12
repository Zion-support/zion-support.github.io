module.exports = {;
  apps: [;
    {;
      name: 'error-fixer',;
      script: 'automation/lint-error-fixer.cjs',;
      args: 'continuous',;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: '1G',;
      env: {;
        NODE_ENV: 'production';
      },;
      error_file: './logs/error-fixer-error.log',;
      out_file: './logs/error-fixer-out.log',;
      log_file: './logs/error-fixer-combined.log',;
      time: true;
    },;
    {;
      name: 'intelligent-orchestrator',;
      script: 'automation/intelligent-orchestrator.cjs',;
      args: 'continuous',;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: '1G',;
      env: {;
        NODE_ENV: 'production';
      },;
      error_file: './logs/orchestrator-error.log',;
      out_file: './logs/orchestrator-out.log',;
      log_file: './logs/orchestrator-combined.log',;
      time: true;
    },;
    {;
      name: 'automation-dashboard',;
      script: 'automation/automation-dashboard.cjs',;
      args: 'start',;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: '1G',;
      env: {;
        NODE_ENV: 'production',;
        PORT: 3001;
      },;
      error_file: './logs/dashboard-error.log',;
      out_file: './logs/dashboard-out.log',;
      log_file: './logs/dashboard-combined.log',;
      time: true;
    },;
    {;
      name: 'code-quality-monitor',;
      script: 'automation/code-quality-monitor.cjs',;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: '512M',;
      env: {;
        NODE_ENV: 'production';
      },;
      error_file: './logs/code-quality-error.log',;
      out_file: './logs/code-quality-out.log',;
      log_file: './logs/code-quality-combined.log',;
      time: true;
    },;
    {;
      name: 'performance-optimizer',;
      script: 'automation/performance-optimizer.cjs',;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: '512M',;
      env: {;
        NODE_ENV: 'production';
      },;
      error_file: './logs/performance-error.log',;
      out_file: './logs/performance-out.log',;
      log_file: './logs/performance-combined.log',;
      time: true;
    }
  ];
},;
export default {

  apps: [;
    {

      name: 'bolt-zion-app',
name: 'bolt - zion - app',
      script: 'npm',
      args: 'start',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      error_file: './logs/web-error.log',
      out_file: './logs/web-out.log',
      log_file: './logs/web-combined.log',
      time: true
    },
    {
      name: 'error-monitor',
      script: './scripts/error-monitor.js',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/error-monitor-error.log',
      out_file: './logs/error-monitor-out.log',
      log_file: './logs/error-monitor-combined.log',
      time: true,
      cron_restart: '*/5 * * * *' // Restart every 5 minutes
    },
    {
      name: 'merge-conflict-detector',
      script: './scripts/merge-conflict-detector.js',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/merge-detector-error.log',
      out_file: './logs/merge-detector-out.log',
      log_file: './logs/merge-detector-combined.log',
      time: true,
      cron_restart: '*/10 * * * *' // Check every 10 minutes
    },
    {
      name: 'build-monitor',
      script: './scripts/build-monitor.js',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/build-monitor-error.log',
      out_file: './logs/build-monitor-out.log',
      log_file: './logs/build-monitor-combined.log',
      time: true,
      cron_restart: '*/15 * * * *' // Check every 15 minutes
    },
    {
      name: 'auto-fixer',
      script: './scripts/auto-fixer.js',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/auto-fixer-error.log',
      out_file: './logs/auto-fixer-out.log',
      log_file: './logs/auto-fixer-combined.log',
      time: true,
      cron_restart: '*/30 * * * *' // Run every 30 minutes
    }
  ],
module.exports = {
  apps: [{
    name: "ziontechgroup-site",
    script: "npm",
    args: "start",
    instances: 1,
    exec_mode: "fork",
    env: {
      NODE_ENV: "production",
      PORT: 3000
    },
    env_production: {
      NODE_ENV: "production",
      PORT: 3000
    },
    max_memory_restart: "1G",
    node_args: "--max-old-space-size=1024",
    error_file: "./logs/err.log",
    out_file: "./logs/out.log",
    log_file: "./logs/combined.log",
    time: true
  }]
};