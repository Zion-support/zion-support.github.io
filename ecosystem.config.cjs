module.exports = {
  apps: [
    // Core Development Automation
    {
      name: 'console-error-fixer',
      script: './scripts/automation/console-error-fixer.cjs',
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 900000, // 15 minutes
        MAX_RETRIES: 3,
        BACKOFF_MULTIPLIER: 2
      },
      error_file: './logs/console-error-fixer-error.log',
      out_file: './logs/console-error-fixer-out.log',
      log_file: './logs/console-error-fixer-combined.log',
      time: true,
      autorestart: true,
      watch: false,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 5000
    },
    {
      name: 'link-checker',
      script: './scripts/automation/link-checker.cjs',
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 900000,
        MAX_RETRIES: 3,
        BACKOFF_MULTIPLIER: 2
      },
      error_file: './logs/link-checker-error.log',
      out_file: './logs/link-checker-out.log',
      log_file: './logs/link-checker-combined.log',
      time: true,
      autorestart: true,
      watch: false,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 5000
    },
    {
      name: 'continuous-improvement',
      script: './scripts/automation/continuous-improvement.cjs',
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 900000,
        MAX_RETRIES: 3,
        BACKOFF_MULTIPLIER: 2
      },
      error_file: './logs/continuous-improvement-error.log',
      out_file: './logs/continuous-improvement-out.log',
      log_file: './logs/continuous-improvement-combined.log',
      time: true,
      autorestart: true,
      watch: false,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 5000
    },
    {
      name: 'daily-build-test',
      script: './scripts/automation/daily-build-test.cjs',
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 900000,
        MAX_RETRIES: 3,
        BACKOFF_MULTIPLIER: 2
      },
      error_file: './logs/daily-build-test-error.log',
      out_file: './logs/daily-build-test-out.log',
      log_file: './logs/daily-build-test-combined.log',
      time: true,
      autorestart: true,
      watch: false,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 5000
    },
    {
      name: 'security-audit',
      script: './scripts/automation/security-audit.cjs',
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 900000,
        MAX_RETRIES: 3,
        BACKOFF_MULTIPLIER: 2
      },
      error_file: './logs/security-audit-error.log',
      out_file: './logs/security-audit-out.log',
      log_file: './logs/security-audit-combined.log',
      time: true,
      autorestart: true,
      watch: false,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 5000
    },
    {
      name: 'dependency-updates',
      script: './scripts/automation/dependency-updates.cjs',
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 900000,
        MAX_RETRIES: 3,
        BACKOFF_MULTIPLIER: 2
      },
      error_file: './logs/dependency-updates-error.log',
      out_file: './logs/dependency-updates-out.log',
      log_file: './logs/dependency-updates-combined.log',
      time: true,
      autorestart: true,
      watch: false,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 5000
    },
    {
      name: 'performance-monitor',
      script: './scripts/automation/performance-monitor.cjs',
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 900000,
        MAX_RETRIES: 3,
        BACKOFF_MULTIPLIER: 2
      },
      error_file: './logs/performance-monitor-error.log',
      out_file: './logs/performance-monitor-out.log',
      log_file: './logs/performance-monitor-combined.log',
      time: true,
      autorestart: true,
      watch: false,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 5000
    },
    {
      name: 'quality-checks',
      script: './scripts/automation/quality-checks.cjs',
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 900000,
        MAX_RETRIES: 3,
        BACKOFF_MULTIPLIER: 2
      },
      error_file: './logs/quality-checks-error.log',
      out_file: './logs/quality-checks-out.log',
      log_file: './logs/quality-checks-combined.log',
      time: true,
      autorestart: true,
      watch: false,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 5000
    },
    {
      name: 'link-integrity',
      script: './scripts/automation/link-integrity.cjs',
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 900000,
        MAX_RETRIES: 3,
        BACKOFF_MULTIPLIER: 2
      },
      error_file: './logs/link-integrity-error.log',
      out_file: './logs/link-integrity-out.log',
      log_file: './logs/link-integrity-combined.log',
      time: true,
      autorestart: true,
      watch: false,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 5000
    },
    {
      name: 'front-maximizer',
      script: './scripts/automation/front-maximizer.cjs',
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 900000,
        MAX_RETRIES: 3,
        BACKOFF_MULTIPLIER: 2
      },
      error_file: './logs/front-maximizer-error.log',
      out_file: './logs/front-maximizer-out.log',
      log_file: './logs/front-maximizer-combined.log',
      time: true,
      autorestart: true,
      watch: false,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 5000
    },
    {
      name: 'sitemap-runner',
      script: './scripts/automation/sitemap-runner.cjs',
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 900000,
        MAX_RETRIES: 3,
        BACKOFF_MULTIPLIER: 2
      },
      error_file: './logs/sitemap-runner-error.log',
      out_file: './logs/sitemap-runner-out.log',
      log_file: './logs/sitemap-runner-combined.log',
      time: true,
      autorestart: true,
      watch: false,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 5000
    },
    // NEW: Intelligent Development Automation
    {
      name: 'smart-code-analyzer',
      script: './scripts/automation/smart-code-analyzer.cjs',
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 600000, // 10 minutes - more frequent for development
        MAX_RETRIES: 5,
        BACKOFF_MULTIPLIER: 1.5
      },
      error_file: './logs/smart-code-analyzer-error.log',
      out_file: './logs/smart-code-analyzer-out.log',
      log_file: './logs/smart-code-analyzer-combined.log',
      time: true,
      autorestart: true,
      watch: false,
      max_restarts: 15,
      min_uptime: '5s',
      restart_delay: 3000
    },
    {
      name: 'ai-performance-optimizer',
      script: './scripts/automation/ai-performance-optimizer.cjs',
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 1200000, // 20 minutes
        MAX_RETRIES: 3,
        BACKOFF_MULTIPLIER: 2
      },
      error_file: './logs/ai-performance-optimizer-error.log',
      out_file: './logs/ai-performance-optimizer-out.log',
      log_file: './logs/ai-performance-optimizer-combined.log',
      time: true,
      autorestart: true,
      watch: false,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 5000
    },
    {
      name: 'intelligent-test-runner',
      script: './scripts/automation/intelligent-test-runner.cjs',
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 1800000, // 30 minutes
        MAX_RETRIES: 3,
        BACKOFF_MULTIPLIER: 2
      },
      error_file: './logs/intelligent-test-runner-error.log',
      out_file: './logs/intelligent-test-runner-out.log',
      log_file: './logs/intelligent-test-runner-combined.log',
      time: true,
      autorestart: true,
      watch: false,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 5000
    },
    {
      name: 'smart-dependency-manager',
      script: './scripts/automation/smart-dependency-manager.cjs',
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 3600000, // 1 hour
        MAX_RETRIES: 3,
        BACKOFF_MULTIPLIER: 2
      },
      error_file: './logs/smart-dependency-manager-error.log',
      out_file: './logs/smart-dependency-manager-out.log',
      log_file: './logs/smart-dependency-manager-combined.log',
      time: true,
      autorestart: true,
      watch: false,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 5000
    },
    {
      name: 'code-quality-enforcer',
      script: './scripts/automation/code-quality-enforcer.cjs',
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 900000, // 15 minutes
        MAX_RETRIES: 3,
        BACKOFF_MULTIPLIER: 2
      },
      error_file: './logs/code-quality-enforcer-error.log',
      out_file: './logs/code-quality-enforcer-out.log',
      log_file: './logs/code-quality-enforcer-combined.log',
      time: true,
      autorestart: true,
      watch: false,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 5000
    }
  ],

  deploy: {
    production: {
      user: 'node',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:Zion-Holdings/zion.app.git',
      path: '/var/www/zion.app',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.cjs --env production'
    }
  }
};