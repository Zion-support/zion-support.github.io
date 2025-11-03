module.exports = {
  apps: [
    // Main application
    {
      name: 'zion-website',
      script: 'npm',
      args: 'run dev',
      cwd: '/Users/miami2/zion-app-clone',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
      },
      log_file: './logs/zion-website.log',
      out_file: './logs/zion-website-out.log',
      error_file: './logs/zion-website-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
    },

    // Comprehensive Continuous Automation - Master orchestrator (runs every 5 minutes for fast operation)
    {
      name: 'continuous-automation',
      script: './scripts/automation/comprehensive-continuous-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_SPEED: 'fast',
        RUN_CONTINUOUSLY: 'true',
      },
      error_file: './logs/continuous-automation-error.log',
      out_file: './logs/continuous-automation-out.log',
      log_file: './logs/continuous-automation.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 3000,
      cron_restart: '*/5 * * * *', // Restart every 5 minutes for fast continuous operation
      pmx: true,
    },

    // Error Monitor - Fast error detection (every 5 minutes)
    {
      name: 'error-monitor',
      script: './scripts/automation/error-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        SCAN_INTERVAL: '5',
      },
      error_file: './logs/error-monitor-error.log',
      out_file: './logs/error-monitor-out.log',
      log_file: './logs/error-monitor.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '5s',
      restart_delay: 2000,
      cron_restart: '*/5 * * * *', // Every 5 minutes
      pmx: true,
    },

    // Health Checker - Continuous health monitoring (every 3 minutes)
    {
      name: 'health-checker',
      script: './scripts/automation/health-checker.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'production',
        CHECK_INTERVAL: '3',
      },
      error_file: './logs/health-checker-error.log',
      out_file: './logs/health-checker-out.log',
      log_file: './logs/health-checker.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '5s',
      restart_delay: 2000,
      cron_restart: '*/3 * * * *', // Every 3 minutes
      pmx: true,
    },

    // Auto Fixer - Fast automated fixes (every 10 minutes)
    {
      name: 'auto-fixer',
      script: './scripts/automation/auto-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTO_FIX: 'true',
        FIX_INTERVAL: '10',
      },
      error_file: './logs/auto-fixer-error.log',
      out_file: './logs/auto-fixer-out.log',
      log_file: './logs/auto-fixer.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '10s',
      restart_delay: 5000,
      cron_restart: '*/10 * * * *', // Every 10 minutes for fast fixing
      pmx: true,
    },

    // Syntax Fixer - Fast syntax error fixing (every 15 minutes)
    {
      name: 'syntax-fixer',
      script: './scripts/automation/syntax-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '800M',
      env: {
        NODE_ENV: 'production',
        FIX_ON_DETECT: 'true',
      },
      error_file: './logs/syntax-fixer-error.log',
      out_file: './logs/syntax-fixer-out.log',
      log_file: './logs/syntax-fixer.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '15s',
      restart_delay: 3000,
      cron_restart: '*/15 * * * *', // Every 15 minutes
      pmx: true,
    },

    // Dependency Manager - Hourly dependency checks
    {
      name: 'dependency-manager',
      script: './scripts/automation/dependency-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '600M',
      env: {
        NODE_ENV: 'production',
        AUTO_UPDATE: 'false', // Safety: don't auto-update dependencies
      },
      error_file: './logs/dependency-manager-error.log',
      out_file: './logs/dependency-manager-out.log',
      log_file: './logs/dependency-manager.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '20s',
      restart_delay: 5000,
      cron_restart: '0 * * * *', // Every hour
      pmx: true,
    },

    // Build Monitor - Fast build monitoring (every 10 minutes)
    {
      name: 'build-monitor',
      script: './scripts/automation/build-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '400M',
      env: {
        NODE_ENV: 'production',
        MONITOR_CONTINUOUSLY: 'true',
      },
      error_file: './logs/build-monitor-error.log',
      out_file: './logs/build-monitor-out.log',
      log_file: './logs/build-monitor.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '10s',
      restart_delay: 2000,
      cron_restart: '*/10 * * * *', // Every 10 minutes
      pmx: true,
    },

    // Log Cleaner - Daily at 2 AM
    {
      name: 'log-cleaner',
      script: './scripts/automation/log-cleaner.cjs',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '200M',
      env: {
        NODE_ENV: 'production',
        KEEP_DAYS: '7',
      },
      error_file: './logs/log-cleaner-error.log',
      out_file: './logs/log-cleaner-out.log',
      log_file: './logs/log-cleaner.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '5s',
      restart_delay: 2000,
      cron_restart: '0 2 * * *', // Daily at 2 AM
      pmx: true,
    },

    // LinkedIn Automation - Continuous marketing
    {
      name: 'linkedin-automation',
      script: './automation/ai-social-media-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PLATFORM: 'linkedin',
        AUTOMATION_ENABLED: 'true',
      },
      error_file: './logs/linkedin-automation-error.log',
      out_file: './logs/linkedin-automation-out.log',
      log_file: './logs/linkedin-automation.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '30s',
      restart_delay: 10000,
      cron_restart: '0 */4 * * *', // Every 4 hours
      pmx: true,
    },

    // Instagram Automation - Continuous marketing
    {
      name: 'instagram-automation',
      script: './automation/ai-social-media-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PLATFORM: 'instagram',
        AUTOMATION_ENABLED: 'true',
      },
      error_file: './logs/instagram-automation-error.log',
      out_file: './logs/instagram-automation-out.log',
      log_file: './logs/instagram-automation.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '30s',
      restart_delay: 10000,
      cron_restart: '30 */4 * * *', // Every 4 hours (offset from LinkedIn)
      pmx: true,
    },

    // Intelligent Orchestrator - Master coordination
    {
      name: 'intelligent-orchestrator',
      script: './scripts/automation/intelligent-automation-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        ORCHESTRATE_CONTINUOUSLY: 'true',
        OPTIMIZATION_MODE: 'aggressive',
      },
      error_file: './logs/intelligent-orchestrator-error.log',
      out_file: './logs/intelligent-orchestrator-out.log',
      log_file: './logs/intelligent-orchestrator.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '20s',
      restart_delay: 5000,
      cron_restart: '*/20 * * * *', // Every 20 minutes
      pmx: true,
    },

    // Automation Dashboard - Real-time monitoring
    {
      name: 'automation-dashboard',
      script: './scripts/automation/automation-dashboard.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        DASHBOARD_PORT: '3001',
        REFRESH_INTERVAL: '30',
      },
      error_file: './logs/automation-dashboard-error.log',
      out_file: './logs/automation-dashboard-out.log',
      log_file: './logs/automation-dashboard.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '10s',
      restart_delay: 3000,
      pmx: true,
    },

    // AI Content Generator - Continuous content generation
    {
      name: 'ai-content-generator',
      script: './automation/ai-content-generator-automation.cjs',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        CONTENT_GENERATION_ENABLED: 'true',
      },
      error_file: './logs/ai-content-generator-error.log',
      out_file: './logs/ai-content-generator-out.log',
      log_file: './logs/ai-content-generator.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '30s',
      restart_delay: 10000,
      cron_restart: '0 0 * * *', // Daily at midnight - generates new content daily
      pmx: true,
    },

    // AI Development Agent - Autonomous code development
    {
      name: 'ai-development-agent',
      script: './automation/ai-development-agent.js',
      args: 'run',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTO_COMMIT: 'true',
        AUTO_PUSH: 'true',
      },
      error_file: './logs/ai-development-agent-error.log',
      out_file: './logs/ai-development-agent-out.log',
      log_file: './logs/ai-development-agent.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '60s',
      restart_delay: 10000,
      cron_restart: '0 */6 * * *', // Every 6 hours - comprehensive analysis
      pmx: true,
    },

    // AI Code Generator - Advanced AI-powered code generation
    {
      name: 'ai-code-generator',
      script: './automation/ai-code-generator.js',
      args: 'features',
      instances: 1,
      autorestart: false, // Run on demand
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
        OPENAI_API_KEY: process.env.OPENAI_API_KEY,
      },
      error_file: './logs/ai-code-generator-error.log',
      out_file: './logs/ai-code-generator-out.log',
      log_file: './logs/ai-code-generator.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '30s',
      restart_delay: 15000,
      cron_restart: '0 0 * * 0', // Weekly on Sunday - generate feature suggestions
      pmx: true,
    },

    // AI Master Orchestrator - Coordinates all AI agents
    {
      name: 'ai-master-orchestrator',
      script: './automation/ai-master-orchestrator.js',
      args: 'run',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AUTO_COMMIT: 'true',
        AUTO_PUSH: 'true',
        MAX_CONCURRENT_TASKS: '3',
      },
      error_file: './logs/ai-master-orchestrator-error.log',
      out_file: './logs/ai-master-orchestrator-out.log',
      log_file: './logs/ai-master-orchestrator.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '60s',
      restart_delay: 10000,
      cron_restart: '0 * * * *', // Every hour - coordinates all agents
      pmx: true,
    },
  ],

  deploy: {
    production: {
      user: 'deploy',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:Zion-Holdings/zion.app.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.cjs --env production',
    },
  },
};

