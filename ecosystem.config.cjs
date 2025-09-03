module.exports = {
  apps: [
// Main application server
{
      name: 'zion-website',
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
      },
      log_file: './logs/zion-website.log',
      out_file: './logs/zion-website-out.log',
      error_file: './logs/zion-website-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
// Disable this process for now as it's meant for development
      disabled: true
},

// Error monitoring and detection
{
      name: 'error-monitor',
      script: './scripts/automation/error-monitor.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      restart_delay: 5000,
      max_restarts: 10,
      min_uptime: '10s',
      log_file: './logs/error-monitor.log',
      out_file: './logs/error-monitor-out.log',
      error_file: './logs/error-monitor-error.log',
      cron_restart: '0 */2 * * *' // Restart every 2 hours
    },

// Health monitoring and checking
{
      name: 'syntax-fixer',
      script: './scripts/automation/syntax-fixer.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      restart_delay: 10000,
      max_restarts: 5,
      min_uptime: '30s',
      log_file: './logs/syntax-fixer.log',
      out_file: './logs/syntax-fixer-out.log',
      error_file: './logs/syntax-fixer-error.log',
      cron_restart: '0 */6 * * *' // Restart every 6 hours
    },

// Automatic error fixing
{
      name: 'dependency-manager',
      script: './scripts/automation/dependency-manager.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      restart_delay: 15000,
      max_restarts: 3,
      min_uptime: '60s',
      log_file: './logs/dependency-manager.log',
      out_file: './logs/dependency-manager-out.log',
      error_file: './logs/dependency-manager-error.log',
      cron_restart: '0 8 * * *' // Restart daily at 8 AM
    },

    // Build Monitor - Monitors build health and performance
    {
      name: 'build-monitor',
      script: './scripts/automation/build-monitor.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      restart_delay: 30000,
      max_restarts: 3,
      min_uptime: '120s',
      log_file: './logs/build-monitor.log',
      out_file: './logs/build-monitor-out.log',
      error_file: './logs/build-monitor-error.log',
      cron_restart: '0 */4 * * *' // Restart every 4 hours
    },

// Auto Fix and Build - Automated build testing
    {
name: 'security-audit',
      script: 'scripts/automation-wrapper.js',
      args: 'security',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'security-audit'
      },
      cron_restart: '0 4 * * 1', // Restart every Monday at 4 AM
      log_file: 'logs/security-audit.log',
      out_file: 'logs/security-audit-out.log',
      error_file: 'logs/security-audit-error.log'
    },

    // Dependency Updates - Checks and updates dependencies
    {
      name: 'dependency-updates',
      script: 'scripts/automation-wrapper.js',
      args: 'deps',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'dependency-updates'
      },
      cron_restart: '0 2 * * 1', // Restart every Monday at 2 AM
      log_file: 'logs/dependency-updates.log',
      out_file: 'logs/dependency-updates-out.log',
      error_file: 'logs/dependency-updates-error.log'
    },

    // Performance Monitor - Monitors application performance
    {
      name: 'performance-monitor',
      script: 'scripts/automation-wrapper.js',
      args: 'performance',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'performance-monitor'
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      log_file: 'logs/performance-monitor.log',
      out_file: 'logs/performance-monitor-out.log',
      error_file: 'logs/performance-monitor-error.log'
    },

    // Quality Checks - Runs quality assurance checks
    {
      name: 'quality-checks',
      script: 'scripts/automation-wrapper.js',
      args: 'quality',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'quality-checks'
      },
      cron_restart: '0 5 * * *', // Restart daily at 5 AM
      log_file: 'logs/quality-checks.log',
      out_file: 'logs/quality-checks-out.log',
      error_file: 'logs/quality-checks-error.log'
    },

    // Link Integrity - Ensures link integrity
    {
      name: 'link-integrity',
      script: 'scripts/automation-wrapper.js',
      args: 'integrity',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'link-integrity'
      },
      cron_restart: '0 6 * * *', // Restart daily at 6 AM
      log_file: 'logs/link-integrity.log',
      out_file: 'logs/link-integrity-out.log',
      error_file: 'logs/link-integrity-error.log'
    },

    // Front Maximizer - Optimizes frontend performance
    {
      name: 'front-maximizer',
      script: 'scripts/automation-wrapper.js',
      args: 'maximize',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'front-maximizer'
      },
      cron_restart: '0 7 * * *', // Restart daily at 7 AM
      log_file: 'logs/front-maximizer.log',
      out_file: 'logs/front-maximizer-out.log',
      error_file: 'logs/front-maximizer-error.log'
    },

    // Sitemap Runner - Generates and updates sitemap
    {
      name: 'sitemap-runner',
      script: 'scripts/automation-wrapper.js',
      args: 'sitemap',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'sitemap-runner'
      },
      cron_restart: '0 8 * * *', // Restart daily at 8 AM
      log_file: 'logs/sitemap-runner.log',
      out_file: 'logs/sitemap-runner-out.log',
      error_file: 'logs/sitemap-runner-error.log'
    },

    // Automated Build & Lint fixer
{
      name: 'auto-fix-and-build',
      script: 'bash',
      args: '-lc "npm install --silent && npm run lint || true && npm run type-check || true && npm run build"',
instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
env: { NODE_ENV: 'production' },
cron_restart: '0 */6 * * *',
      log_file: 'logs/auto-fix-and-build.log',
      out_file: 'logs/auto-fix-and-build-out.log',
      error_file: 'logs/auto-fix-and-build-error.log'
},

    // AI Code Review - Runs AI-powered code review
    {
      name: 'ai-code-review',
      script: './scripts/automation/ai-code-reviewer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */4 * * *', // Every 4 hours
      log_file: './logs/ai-code-review.log',
      error_file: './logs/ai-code-review-error.log',
      out_file: './logs/ai-code-review-out.log'
    },

    // Smart Dependency Intelligence - Manages dependencies intelligently
    {
      name: 'smart-dependency-intelligence',
      script: './scripts/automation/smart-dependency-intelligence.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: './logs/smart-dependency-intelligence.log',
      error_file: './logs/smart-dependency-intelligence-error.log',
      out_file: './logs/smart-dependency-intelligence-out.log'
    },

    // Predictive Issue Detection - Anticipates and prevents issues
    {
      name: 'predictive-issue-detection',
      script: './scripts/automation/predictive-issue-detection.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */3 * * *', // Every 3 hours
      log_file: './logs/predictive-issue-detection.log',
      error_file: './logs/predictive-issue-detection-error.log',
      out_file: './logs/predictive-issue-detection-out.log'
    },

    // Intelligent Build Pipeline - Optimizes build processes
    {
      name: 'intelligent-build-pipeline',
      script: './scripts/automation/intelligent-build-pipeline.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      cron_restart: '0 */8 * * *', // Every 8 hours
      log_file: './logs/intelligent-build-pipeline.log',
      error_file: './logs/intelligent-build-pipeline-error.log',
      out_file: './logs/intelligent-build-pipeline-out.log'
},

// Syntax error fixing automation
    {
      name: 'syntax-fixer',
      script: './scripts/syntax-fixer.js',
instances: 1,
      watch: ['src', 'public', 'postcss.config.js', 'vite.config.ts'],
      ignore_watch: ['dist', 'node_modules', 'logs'],
      max_memory_restart: '1G',
env: { 
        NODE_ENV: 'development',
        PATH: '/home/ubuntu/.nvm/versions/node/v22.16.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin'
      },
error_file: './logs/syntax-fixer-error.log',
      out_file: './logs/syntax-fixer-out.log',
      log_file: './logs/syntax-fixer-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '15s',
      restart_delay: 3000,
      cron_restart: '*/15 * * * *', // Run every 15 minutes
      pmx: true
    },

    // Dependency management and security
    {
      name: 'dependency-manager',
      script: './scripts/dependency-manager.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '600M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/dependency-manager-error.log',
      out_file: './logs/dependency-manager-out.log',
      log_file: './logs/dependency-manager-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: false,
      max_restarts: 3,
      min_uptime: '20s',
      restart_delay: 5000,
      cron_restart: '0 */6 * * *', // Run every 6 hours
      pmx: true
    },

    // Build monitoring and optimization
    {
      name: 'build-monitor',
      script: './scripts/build-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '700M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/build-monitor-error.log',
      out_file: './logs/build-monitor-out.log',
      log_file: './logs/build-monitor-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '25s',
      restart_delay: 5000,
      cron_restart: '0 */4 * * *', // Run every 4 hours
      pmx: true
    },

    // Log management and cleanup
    {
      name: 'log-manager',
      script: './scripts/log-manager.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '400M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/log-manager-error.log',
      out_file: './logs/log-manager-out.log',
      log_file: './logs/log-manager-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 2,
      min_uptime: '30s',
      restart_delay: 10000,
      cron_restart: '0 2 * * *', // Run daily at 2 AM
      pmx: true
    },

    // Performance monitoring
    {
      name: 'performance-monitor',
      script: './scripts/performance-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/performance-monitor-error.log',
      out_file: './logs/performance-monitor-out.log',
      log_file: './logs/performance-monitor-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '20s',
      restart_delay: 5000,
      cron_restart: '*/30 * * * *', // Run every 30 minutes
      pmx: true
    },

    // Security monitoring
    {
      name: 'security-monitor',
      script: './scripts/security-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '400M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/security-monitor-error.log',
      out_file: './logs/security-monitor-out.log',
      log_file: './logs/security-monitor-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 2,
      min_uptime: '25s',
      restart_delay: 8000,
      cron_restart: '0 */8 * * *', // Run every 8 hours
      pmx: true
    },

    // Backup and recovery
    {
      name: 'backup-manager',
      script: './scripts/backup-manager.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '600M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/backup-manager-error.log',
      out_file: './logs/backup-manager-out.log',
      log_file: './logs/backup-manager-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 2,
      min_uptime: '45s',
      restart_delay: 15000,
      cron_restart: '0 1 * * *', // Run daily at 1 AM
      pmx: true
}
  ],

  // PM2 configuration
  deploy: {
    production: {
      user: 'deploy',
      host: 'localhost',
      ref: 'origin/main',
repo: 'git@github.com:username/repo.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.cjs --env production'
}
module.exports = {
  apps: [
  // Main application;
    {
  name: "bolt-app;
      script: npm,;
      args: start;
      cwd: ./",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "1G,;
      env: {
  NODE_ENV: development,;
        PORT: 3000;,
},;
      env_production: {
  NODE_ENV: "production",;
        NODE_OPTIONS: --max-old-space-size=6144 --openssl-legacy-provider;,
}
        NODE_ENV: development",;
        PORT: 3000;,
},;
      env_production: {
  NODE_ENV: "production,;
        NODE_OPTIONS: --max-old-space-size=6144 --openssl-legacy-provider;,
}
},;
    // Backend server;
    {
  name: zion-backend;
      script: npm",;
      args: "start;
      cwd: ./server,;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: 1G,;
      env: {
  NODE_ENV: "production";,
}
        NODE_ENV: production;,
}
},;
    // PM2 Error Prevention Automation - runs every 5 minutes (HIGHEST PRIORITY);
    {
  name: pm2-error-prevention;
      script: ./scripts/automation/pm2-error-prevention-automation.cjs",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "1G,;
      env: {
  NODE_ENV: production,;
        AUTOMATION_INTERVAL: "300000" // 5 minutes;,
},;
      log_file: ./automation/logs/pm2-error-prevention.log,;
      error_file: "./automation/logs/pm2-error-prevention-error.log",;
      out_file: ./automation/logs/pm2-error-prevention-out.log;,
}
        NODE_ENV: production",;
        AUTOMATION_INTERVAL: "300000 // 5 minutes;,
}
      log_file: ./automation/logs/pm2-error-prevention.log,;
      error_file: ./automation/logs/pm2-error-prevention-error.log,;
      out_file: ./automation/logs/pm2-error-prevention-out.log";,
},;
// Continuous console error fixer - runs every 15 minutes (HIGHEST PRIORITY);
    {
  name: "console-error-fixer;
      script: ./scripts/automation/console-error-fixer.cjs,;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: 512M,;
      env: {
  NODE_ENV: "production",;
        AUTOMATION_INTERVAL: 900000 // 15 minutes;,
}
        NODE_ENV: production",;
        AUTOMATION_INTERVAL: "900000 // 15 minutes;,
}
}
    // Comprehensive error fixer - runs every 30 minutes (HIGH PRIORITY);
    {
  name: comprehensive-error-fixer,;
      script: ./scripts/automation/comprehensive-error-fixer.cjs,;
      instances: 1,;
      autorestart: true,;
      watch: false;
      max_memory_restart: 512M",;
      env: {
  NODE_ENV: "production,;
        AUTOMATION_INTERVAL: 1800000" // 30 minutes;,
}
        NODE_ENV: "production,;
        AUTOMATION_INTERVAL: 1800000 // 30 minutes;,
}
},;
    // TypeScript error fixer - runs every 45 minutes (HIGH PRIORITY);
    {
  name: typescript-error-fixer;
      script: ./scripts/automation/typescript-error-fixer.cjs",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "512M,;
      env: {
  NODE_ENV: production,;
        AUTOMATION_INTERVAL: "2700000" // 45 minutes;,
}
        NODE_ENV: production,;
        AUTOMATION_INTERVAL: 2700000 // 45 minutes;,
}
}
    // JSX error fixer - runs every 40 minutes (HIGH PRIORITY);
    {
  name: jsx-error-fixer",;
      script: "./scripts/automation/jsx-error-fixer.cjs,;
      instances: 1,;
      autorestart: true,;
      watch: false;
      max_memory_restart: 512M,;
      env: {
  NODE_ENV: production",;
        AUTOMATION_INTERVAL: "2400000 // 40 minutes;,
}
        NODE_ENV: production,;
        AUTOMATION_INTERVAL: 2400000" // 40 minutes;,
}
},;
    // Master error fixer - runs every hour (COORDINATES ALL ERROR FIXERS);
    {
  name: "master-error-fixer;
      script: ./scripts/automation/master-error-fixer.cjs,;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: 512M,;
      env: {
  NODE_ENV: "production",;
        AUTOMATION_INTERVAL: 3600000 // 1 hour;,
}
        NODE_ENV: production",;
        AUTOMATION_INTERVAL: "3600000 // 1 hour;,
}
}
    // Continuous link checker - runs every 30 minutes;
    {
  name: link-checker,;
      script: ./scripts/automation/link-checker.cjs,;
      instances: 1,;
      autorestart: true,;
      watch: false;
      max_memory_restart: 512M",;
      env: {
  NODE_ENV: "production,;
        AUTOMATION_INTERVAL: 1800000" // 30 minutes;,
}
        NODE_ENV: "production,;
        AUTOMATION_INTERVAL: 1800000 // 30 minutes;,
}
},;
    // Continuous improvement - runs every 2 hours;
    {
  name: continuous-improvement;
      script: ./scripts/automation/continuous-improvement.cjs",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "512M,;
      env: {
  NODE_ENV: production,;
        AUTOMATION_INTERVAL: "7200000" // 2 hours;,
}
        NODE_ENV: production,;
        AUTOMATION_INTERVAL: 7200000 // 2 hours;,
}
}
    // Continuous build and test - runs every hour;
    {
  name: daily-build-test",;
      script: "./scripts/automation/daily-build-test.cjs,;
      instances: 1,;
      autorestart: true,;
      watch: false;
      max_memory_restart: 512M,;
      env: {
  NODE_ENV: production",;
        AUTOMATION_INTERVAL: "3600000 // 1 hour;,
}
        NODE_ENV: production,;
        AUTOMATION_INTERVAL: 3600000" // 1 hour;,
}
},;
    // Continuous security audit - runs every 4 hours;
    {
  name: "security-audit;
      script: ./scripts/automation/security-audit.cjs,;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: 512M,;
      env: {
  NODE_ENV: "production",;
        AUTOMATION_INTERVAL: 14400000 // 4 hours;,
}
        NODE_ENV: production",;
        AUTOMATION_INTERVAL: "14400000 // 4 hours;,
}
}
    // Continuous dependency updates - runs every 6 hours;
    {
  name: dependency-updates,;
      script: ./scripts/automation/dependency-updates.cjs,;
      instances: 1,;
      autorestart: true,;
      watch: false;
      max_memory_restart: 512M",;
      env: {
  NODE_ENV: "production,;
        AUTOMATION_INTERVAL: 21600000" // 6 hours;,
}
        NODE_ENV: "production,;
        AUTOMATION_INTERVAL: 21600000 // 6 hours;,
}
},;
    // Continuous performance monitoring - runs every 2 hours;
    {
  name: performance-monitor;
      script: ./scripts/automation/performance-monitor.cjs",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "512M,;
      env: {
  NODE_ENV: production,;
        AUTOMATION_INTERVAL: "7200000" // 2 hours;,
}
        NODE_ENV: production,;
        AUTOMATION_INTERVAL: 7200000 // 2 hours;,
}
}
    // Continuous quality checks - runs every 3 hours;
    {
  name: quality-checks",;
      script: "./scripts/automation/quality-checks.cjs,;
      instances: 1,;
      autorestart: true,;
      watch: false;
      max_memory_restart: 512M,;
      env: {
  NODE_ENV: production",;
        AUTOMATION_INTERVAL: "10800000 // 3 hours;,
}
        NODE_ENV: production,;
        AUTOMATION_INTERVAL: 10800000" // 3 hours;,
}
},;
    // Continuous link integrity checker - runs every 2 hours;
    {
  name: "link-integrity;
      script: ./scripts/automation/link-integrity.cjs,;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: 512M,;
      env: {
  NODE_ENV: "production",;
        AUTOMATION_INTERVAL: 7200000 // 2 hours;,
}
        NODE_ENV: production",;
        AUTOMATION_INTERVAL: "7200000 // 2 hours;,
}
}
    // Continuous front maximizer - runs every 4 hours;
    {
  name: front-maximizer,;
      script: ./scripts/automation/front-maximizer.cjs,;
      instances: 1,;
      autorestart: true,;
      watch: false;
      max_memory_restart: 512M",;
      env: {
  NODE_ENV: "production,;
        AUTOMATION_INTERVAL: 14400000" // 4 hours;,
}
        NODE_ENV: "production,;
        AUTOMATION_INTERVAL: 14400000 // 4 hours;,
}
},;
    // Continuous sitemap runner - runs every 6 hours;
    {
  name: sitemap-runner;
      script: ./scripts/automation/sitemap-runner.cjs",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "512M,;
      env: {
  NODE_ENV: production,;
        AUTOMATION_INTERVAL: "21600000" // 6 hours;,
}
        NODE_ENV: production,;
        AUTOMATION_INTERVAL: 21600000 // 6 hours;,
}
}
    // Auto-fix and build automation;
    {
  name: auto-fix-and-build",;
      script: "bash;
      args: -lc "npm install --silent && npm run lint || true && npm run type-check || true && npm run build",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: 1G,;
      env: {
  NODE_ENV: "production";,
},;
      cron_restart: 0 */6 * * *, // Every 6 hours;
      log_file: "logs/auto-fix-and-build.log",;
      out_file: logs/auto-fix-and-build-out.log,;
      error_file: "logs/auto-fix-and-build-error.log";,
}
  ],;
  deploy: {
  production: {
  user: root,;
      host: "localhost",;
      ref: origin/main,;
      repo: "git@github.com:your-username/bolt.new.zion.app.git",;
      path: /workspace/production,;
      "pre-deploy-local": ,;
      "post-deploy": npm install && npm run build && pm2 reload ecosystem.config.cjs --env production,;
      "pre-setup": ;,
}
}
}
    {
  name: "zion-website",;
      script: "npm",;
      args: "run dev",;
      cwd: "/workspace",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "1G",;
      env: {
  NODE_ENV: "development",;
        PORT: 3000},;
      env_production: {
  NODE_ENV: "production",;
        PORT: 3000},;
      log_file: "./logs/zion-website.log",;
      out_file: "./logs/zion-website-out.log",;
      error_file: "./logs/zion-website-error.log",;
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",;
      merge_logs: false,;
      time: false},;

    // Error Monitor - runs every 10 minutes;
    {
  name: "error-monitor",;
      script: "./scripts/error-monitor.cjs",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "500M",;
      env: {
  NODE_ENV: "production"},;
      error_file: "./logs/error-monitor-error.log",;
      out_file: "./logs/error-monitor-out.log",;
      log_file: "./logs/error-monitor-combined.log",;
      time: false,;
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",;
      merge_logs: false,;
      max_restarts: 10,;
      min_uptime: "5s",;
      restart_delay: 2000,;
      cron_restart: "*/10 * * * *", // Run every 10 minutes;
      pmx: true},;

    // Health Checker - runs every 5 minutes;
    {
  name: "health-checker",;
      script: "./scripts/health-checker.cjs",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "300M",;
      env: {
  NODE_ENV: "production"},;
      error_file: "./logs/health-checker-error.log",;
      out_file: "./logs/health-checker-out.log",;
      log_file: "./logs/health-checker-combined.log",;
      time: false,;
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",;
      merge_logs: false,;
      max_restarts: 5,;
      min_uptime: "5s",;
      restart_delay: 2000,;
      cron_restart: "*/5 * * * *", // Run every 5 minutes;
      pmx: true},;

    // Auto Fixer - runs every 2 hours;
    {
  name: "auto-fixer",;
      script: "./scripts/auto-fixer.cjs",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "1G",;
      env: {
  NODE_ENV: "production"},;
      error_file: "./logs/auto-fixer-error.log",;
      out_file: "./logs/auto-fixer-out.log",;
      log_file: "./logs/auto-fixer-combined.log",;
      time: false,;
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",;
      merge_logs: false,;
      max_restarts: 3,;
      min_uptime: "10s",;
      restart_delay: 5000,;
      cron_restart: "0 */2 * * *", // Run every 2 hours;
      pmx: true},;

    // Syntax Fixer - runs every 30 minutes;
    {
  name: "syntax-fixer",;
      script: "./scripts/automation/syntax-error-fixer.cjs",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "800M",;
      env: {
  NODE_ENV: "production"},;
      error_file: "./logs/syntax-fixer-error.log",;
      out_file: "./logs/syntax-fixer-out.log",;
      log_file: "./logs/syntax-fixer-combined.log",;
      time: true,;
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",;
      merge_logs: true,;
      max_restarts: 5,;
      min_uptime: "15s",;
      restart_delay: 3000,;
      cron_restart: "*/30 * * * *", // Run every 30 minutes;
      pmx: true},;

    // Dependency Manager - runs every hour;
    {
  name: "dependency-manager",;
      script: "./scripts/automation/intelligent-dependency-manager.cjs",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "600M",;
      env: {
  NODE_ENV: "production"},;
      error_file: "./logs/dependency-manager-error.log",;
      out_file: "./logs/dependency-manager-out.log",;
      log_file: "./logs/dependency-manager-combined.log",;
      time: true,;
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",;
      merge_logs: true,;
      max_restarts: 3,;
      min_uptime: "20s",;
      restart_delay: 5000,;
      cron_restart: "0 * * * *", // Run every hour;
      pmx: true},;

    // Build Monitor - runs every 15 minutes;
    {
  name: "build-monitor",;
      script: "./scripts/automation/build-monitor.cjs",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "400M",;
      env: {
  NODE_ENV: "production"},;
      error_file: "./logs/build-monitor-error.log",;
      out_file: "./logs/build-monitor-out.log",;
      log_file: "./logs/build-monitor-combined.log",;
      time: true,;
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",;
      merge_logs: true,;
      max_restarts: 5,;
      min_uptime: "10s",;
      restart_delay: 2000,;
      cron_restart: "*/15 * * * *", // Run every 15 minutes;
      pmx: true},;

    // Log Cleaner - runs daily at 2 AM;
    {
  name: "log-cleaner",;
      script: "./scripts/log-cleaner.js",;
      instances: 1,;
      autorestart: false,;
      watch: false,;
      max_memory_restart: "200M",;
      env: {
  NODE_ENV: "production"},;
      error_file: "./logs/log-cleaner-error.log",;
      out_file: "./logs/log-cleaner-out.log",;
      log_file: "./logs/log-cleaner-combined.log",;
      time: false,;
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",;
      merge_logs: false,;
      max_restarts: 3,;
      min_uptime: "5s",;
      restart_delay: 2000,;
      cron_restart: "0 2 * * *", // Run daily at 2 AM;
      pmx: true;,
}
      pmx: true},;

    // PM2 Sync Automation - runs continuously with remote-first strategy;
    {
  name: "pm2-sync-automation",;
      script: "./scripts/automation/pm2-sync-automation.cjs",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "1G",;
      env: {
  NODE_ENV: "production",;
        AUTOMATION_INTERVAL: "30000", // 30 seconds;
        BUILD_INTERVAL: "300000", // 5 minutes;
        TEST_INTERVAL: "600000", // 10 minutes;
        SECURITY_INTERVAL: "1800000", // 30 minutes;
        REMOTE_FIRST_STRATEGY: "true"},;
      error_file: "./logs/pm2-sync-automation-error.log",;
      out_file: "./logs/pm2-sync-automation-out.log",;
      log_file: "./logs/pm2-sync-automation-combined.log",;
      time: true,;
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",;
      merge_logs: true,;
      max_restarts: 5,;
      min_uptime: "10s",;
      restart_delay: 3000,;
      pmx: true},;

    // PM2 Sync Monitor - runs continuously for health monitoring;
    {
  name: "pm2-sync-monitor",;
      script: "./scripts/automation/pm2-sync-monitor.cjs",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "256M",;
      env: {
  NODE_ENV: "production",;
        MONITOR_INTERVAL: "60000", // 1 minute;
        REMOTE_FIRST_STRATEGY: "true"},;
      error_file: "./logs/pm2-sync-monitor-error.log",;
      out_file: "./logs/pm2-sync-monitor-out.log",;
      log_file: "./logs/pm2-sync-monitor-combined.log",;
      time: true,;
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",;
      merge_logs: true,;
      max_restarts: 3,;
      min_uptime: "15s",;
      restart_delay: 5000,;
      pmx: true},;

    // PM2 Sync Automation - runs continuously with remote-first strategy;
    {
  name: "pm2-sync-automation",;
      script: "./scripts/automation/pm2-sync-automation.cjs",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "1G",;
      env: {
  NODE_ENV: "production",;
        AUTOMATION_INTERVAL: "30000", // 30 seconds;
        BUILD_INTERVAL: "300000", // 5 minutes;
        TEST_INTERVAL: "600000", // 10 minutes;
        SECURITY_INTERVAL: "1800000", // 30 minutes;
        REMOTE_FIRST_STRATEGY: "true"},;
      error_file: "./logs/pm2-sync-automation-error.log",;
      out_file: "./logs/pm2-sync-automation-out.log",;
      log_file: "./logs/pm2-sync-automation-combined.log",;
      time: true,;
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",;
      merge_logs: true,;
      max_restarts: 5,;
      min_uptime: "10s",;
      restart_delay: 3000,;
      pmx: true},;

    // PM2 Sync Monitor - runs continuously for health monitoring;
    {
  name: "pm2-sync-monitor",;
      script: "./scripts/automation/pm2-sync-monitor.cjs",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "256M",;
      env: {
  NODE_ENV: "production",;
        MONITOR_INTERVAL: "60000", // 1 minute;
        REMOTE_FIRST_STRATEGY: "true"},;
      error_file: "./logs/pm2-sync-monitor-error.log",;
      out_file: "./logs/pm2-sync-monitor-out.log",;
      log_file: "./logs/pm2-sync-monitor-combined.log",;
      time: true,;
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",;
      merge_logs: true,;
      max_restarts: 3,;
      min_uptime: "15s",;
      restart_delay: 5000,;
      pmx: true}],;

        NODE_ENV: production";,
},;
      cron_restart: "0 */6 * * * // Every 6 hours;
      log_file: logs/auto-fix-and-build.log,;
      out_file: logs/auto-fix-and-build-out.log,;
      error_file: logs/auto-fix-and-build-error.log";,
}
  ],;
  deploy: {
  production: {
  user: "root;
      host: localhost,;
      ref: origin/main;
      repo: git@github.com:your-username/bolt.new.zion.app.git",;
      path: "/workspace/production,;
      pre-deploy-local: ,;
      post-deploy": "npm install && npm run build && pm2 reload ecosystem.config.cjs --env production,;
      pre-setup: ";,
}
  }
}
  ],;
deploy: {
  production: {
  user: "deploy",;
      host: "localhost",;
      ref: "origin/main",;
      repo: "git@github.com:your-username/your-repo.git",;
      path: "/var/www/production",;
      "post-deploy":;
        "npm install && pm2 reload ecosystem.config.cjs --env production",;,
},;,
},;,
}
