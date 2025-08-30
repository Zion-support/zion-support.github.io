module.exports = {
  apps: [
    // Error Prevention & Fixing System
    {
      name: 'zion-error-fixer',
      script: './scripts/pm2-error-fixer.js',
      args: 'start',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'development',
        ERROR_FIXER_INTERVAL: 30000,
        ERROR_FIXER_COOLDOWN: 5000,
        ERROR_FIXER_MAX_RETRIES: 3
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '512M',
      error_file: './logs/error-fixer-error.log',
      out_file: './logs/error-fixer-out.log',
      log_file: './logs/error-fixer-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 5,
      restart_delay: 5000,
      kill_timeout: 10000,
      wait_ready: true,
      listen_timeout: 15000
    },

    // Code Quality Monitor
    {
      name: 'zion-quality-monitor',
      script: './scripts/pm2-quality-monitor.js',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'development',
        QUALITY_CHECK_INTERVAL: 60000,
        QUALITY_THRESHOLD: 0.8,
        AUTO_FIX_ENABLED: true
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '256M',
      error_file: './logs/quality-monitor-error.log',
      out_file: './logs/quality-monitor-out.log',
      log_file: './logs/quality-monitor-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 3,
      restart_delay: 10000
    },

    // TypeScript Compiler Watcher
    {
      name: 'zion-tsc-watcher',
      script: 'npx',
      args: 'tsc --watch --noEmit',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'development',
        TSC_WATCH_MODE: true,
        TSC_PROJECT: './tsconfig.json'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '256M',
      error_file: './logs/tsc-watcher-error.log',
      out_file: './logs/tsc-watcher-out.log',
      log_file: './logs/tsc-watcher-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 3,
      restart_delay: 5000
    },

    // ESLint Auto-Fixer
    {
      name: 'zion-eslint-fixer',
      script: './scripts/pm2-eslint-fixer.js',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'development',
        ESLINT_FIX_INTERVAL: 45000,
        ESLINT_AUTO_FIX: true,
        ESLINT_QUIET_MODE: false
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '256M',
      error_file: './logs/eslint-fixer-error.log',
      out_file: './logs/eslint-fixer-out.log',
      log_file: './logs/eslint-fixer-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 3,
      restart_delay: 8000
    },

    // Dependency Health Monitor
    {
      name: 'zion-dependency-monitor',
      script: './scripts/pm2-dependency-monitor.js',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'development',
        DEPENDENCY_CHECK_INTERVAL: 300000,
        AUTO_UPDATE_ENABLED: false,
        SECURITY_AUDIT_ENABLED: true
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '256M',
      error_file: './logs/dependency-monitor-error.log',
      out_file: './logs/dependency-monitor-out.log',
      log_file: './logs/dependency-monitor-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 3,
      restart_delay: 15000
    },

    // Build Health Monitor
    {
      name: 'zion-build-monitor',
      script: './scripts/pm2-build-monitor.js',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'development',
        BUILD_CHECK_INTERVAL: 120000,
        BUILD_TIMEOUT: 300000,
        AUTO_REBUILD_ON_FAILURE: true
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '512M',
      error_file: './logs/build-monitor-error.log',
      out_file: './logs/build-monitor-out.log',
      log_file: './logs/build-monitor-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 3,
      restart_delay: 20000
    },

    // Performance Monitor
    {
      name: 'zion-performance-monitor',
      script: './scripts/pm2-performance-monitor.js',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'development',
        PERFORMANCE_CHECK_INTERVAL: 180000,
        MEMORY_THRESHOLD: 0.8,
        CPU_THRESHOLD: 0.7
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '256M',
      error_file: './logs/performance-monitor-error.log',
      out_file: './logs/performance-monitor-out.log',
      log_file: './logs/performance-monitor-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 3,
      restart_delay: 12000
    },

    // Security Monitor
    {
      name: 'zion-security-monitor',
      script: './scripts/pm2-security-monitor.js',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'development',
        SECURITY_CHECK_INTERVAL: 600000,
        VULNERABILITY_SCAN_ENABLED: true,
        AUTO_PATCH_ENABLED: false
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '256M',
      error_file: './logs/security-monitor-error.log',
      out_file: './logs/security-monitor-out.log',
      log_file: './logs/security-monitor-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 3,
      restart_delay: 25000
    },

    // Automated Testing Runner
    {
      name: 'zion-test-runner',
      script: './scripts/pm2-test-runner.js',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'development',
        TEST_RUN_INTERVAL: 900000,
        AUTO_TEST_ON_CHANGE: true,
        TEST_TIMEOUT: 300000
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '512M',
      error_file: './logs/test-runner-error.log',
      out_file: './logs/test-runner-out.log',
      log_file: './logs/test-runner-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 3,
      restart_delay: 30000
    },

    // Code Style Enforcer
    {
      name: 'zion-style-enforcer',
      script: './scripts/pm2-style-enforcer.js',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'development',
        STYLE_CHECK_INTERVAL: 90000,
        AUTO_FORMAT_ENABLED: true,
        PRETTIER_ENABLED: true
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '256M',
      error_file: './logs/style-enforcer-error.log',
      out_file: './logs/style-enforcer-out.log',
      log_file: './logs/style-enforcer-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 3,
      restart_delay: 10000
    }
  ],

  deploy: {
    production: {
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/zion-app.git',
      path: '/var/www/zion-app',
      'pre-deploy-local': 'echo "Preparing error prevention system for production"',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem-error-prevention.config.cjs --env production',
      'pre-setup': 'echo "Setting up error prevention infrastructure"'
    },
    staging: {
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/develop',
      repo: 'git@github.com:your-username/zion-app.git',
      path: '/var/www/zion-app-staging',
      'pre-deploy-local': 'echo "Preparing error prevention system for staging"',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem-error-prevention.config.cjs --env staging',
      'pre-setup': 'echo "Setting up error prevention infrastructure"'
    }
  }
};