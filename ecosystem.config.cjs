<<<<<<< HEAD
module.exports = {
  apps: [
<<<<<<< HEAD
    // Main application - Development server (not for production PM2)
=======
    // Main application
>>>>>>> main
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
<<<<<<< HEAD
      // Disable this process for now as it's meant for development
      disabled: true
=======
      max_restarts: 5,
      min_uptime: '10s',
      restart_delay: 5000
>>>>>>> main
    },

    // Error Monitor - Continuously monitors for errors
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

    // Syntax Fixer - Automatically fixes syntax errors
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

<<<<<<< HEAD
    // Dependency Manager - Manages dependencies and vulnerabilities
=======
    // Dependency Manager - Manages dependencies and security
>>>>>>> main
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

<<<<<<< HEAD
    // Auto Fix and Build - Automated build testing
    {
      name: 'auto-fix-and-build',
      script: './scripts/auto-fix-and-build.sh',
=======
    // Auto Fix and Build - Automated build and lint fixing
    {
      name: 'auto-fix-and-build',
      script: 'bash',
      args: '-lc "npm install --silent && npm run lint || true && npm run type-check || true && npm run build"',
>>>>>>> main
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
<<<<<<< HEAD
      env: { 
        NODE_ENV: 'production',
        PATH: '/home/ubuntu/.nvm/versions/node/v22.16.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin'
      },
      cron_restart: '0 */6 * * *',
      log_file: 'logs/auto-fix-and-build.log',
      out_file: 'logs/auto-fix-and-build-out.log',
      error_file: 'logs/auto-fix-and-build-error.log'
=======
      env: { NODE_ENV: 'production' },
      cron_restart: '0 */6 * * *', // Every 6 hours
      log_file: './logs/auto-fix-and-build.log',
      out_file: './logs/auto-fix-and-build-out.log',
      error_file: './logs/auto-fix-and-build-error.log',
      max_restarts: 3,
      min_uptime: '30s',
      restart_delay: 10000
>>>>>>> main
    },

    // Dev Watch Build - Watches for changes and rebuilds
    {
      name: 'dev-watch-build',
<<<<<<< HEAD
      script: './scripts/dev-watch-build.sh',
=======
      script: 'bash',
      args: '-lc "npm run build"',
>>>>>>> main
      instances: 1,
      watch: ['src', 'public', 'postcss.config.js', 'vite.config.ts'],
      ignore_watch: ['dist', 'node_modules', 'logs'],
      max_memory_restart: '1G',
<<<<<<< HEAD
      env: { 
        NODE_ENV: 'development',
        PATH: '/home/ubuntu/.nvm/versions/node/v22.16.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin'
      },
      log_file: 'logs/dev-watch-build.log',
      out_file: 'logs/dev-watch-build-out.log',
      error_file: 'logs/dev-watch-build-error.log',
      // Disable this process for now as it's meant for development
      disabled: true
=======
      env: { NODE_ENV: 'development' },
      log_file: './logs/dev-watch-build.log',
      out_file: './logs/dev-watch-build-out.log',
      error_file: './logs/dev-watch-build-error.log',
      max_restarts: 3,
      min_uptime: '20s',
      restart_delay: 5000
>>>>>>> main
    }
  ],

  deploy: {
    production: {
      user: 'deploy',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/var/www/zion.app',
      'pre-deploy-local': '',
      'post-deploy': 'npm install --legacy-peer-deps && npm run build && pm2 reload ecosystem.config.cjs --env production',
      'pre-setup': 'mkdir -p /var/www/zion.app/logs'
    }
=======
module.exports = {;
  apps: [;
    // Main application;
    {;
      name: "bolt-app;
      script: npm,;
      args: start;
      cwd: ./",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "1G,;
      env: {;
        NODE_ENV: development,;
        PORT: 3000;,
},;
      env_production: {;
        NODE_ENV: "production",;
        NODE_OPTIONS: --max-old-space-size=6144 --openssl-legacy-provider;,
}
        NODE_ENV: development",;
        PORT: 3000;,
},;
      env_production: {;
        NODE_ENV: "production,;
        NODE_OPTIONS: --max-old-space-size=6144 --openssl-legacy-provider;,
}
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259;,
},;
    // Backend server;
    {;
      name: zion-backend;
      script: npm",;
      args: "start;
      cwd: ./server,;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: 1G,;
      env: {;
        NODE_ENV: "production";,
}
        NODE_ENV: production;,
}
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259;,
},;
    // PM2 Error Prevention Automation - runs every 5 minutes (HIGHEST PRIORITY);
    {;
      name: pm2-error-prevention;
      script: ./scripts/automation/pm2-error-prevention-automation.cjs",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "1G,;
      env: {;
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
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259;
    // Continuous console error fixer - runs every 15 minutes (HIGHEST PRIORITY);
    {;
      name: "console-error-fixer;
      script: ./scripts/automation/console-error-fixer.cjs,;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: 512M,;
      env: {;
        NODE_ENV: "production",;
        AUTOMATION_INTERVAL: 900000 // 15 minutes;,
}
        NODE_ENV: production",;
        AUTOMATION_INTERVAL: "900000 // 15 minutes;,
}
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259;,
}
    // Comprehensive error fixer - runs every 30 minutes (HIGH PRIORITY);
    {;
      name: comprehensive-error-fixer,;
      script: ./scripts/automation/comprehensive-error-fixer.cjs,;
      instances: 1,;
      autorestart: true,;
      watch: false;
      max_memory_restart: 512M",;
      env: {;
        NODE_ENV: "production,;
        AUTOMATION_INTERVAL: 1800000" // 30 minutes;,
}
        NODE_ENV: "production,;
        AUTOMATION_INTERVAL: 1800000 // 30 minutes;,
}
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259;,
},;
    // TypeScript error fixer - runs every 45 minutes (HIGH PRIORITY);
    {;
      name: typescript-error-fixer;
      script: ./scripts/automation/typescript-error-fixer.cjs",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "512M,;
      env: {;
        NODE_ENV: production,;
        AUTOMATION_INTERVAL: "2700000" // 45 minutes;,
}
        NODE_ENV: production,;
        AUTOMATION_INTERVAL: 2700000 // 45 minutes;,
}
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259;,
}
    // JSX error fixer - runs every 40 minutes (HIGH PRIORITY);
    {;
      name: jsx-error-fixer",;
      script: "./scripts/automation/jsx-error-fixer.cjs,;
      instances: 1,;
      autorestart: true,;
      watch: false;
      max_memory_restart: 512M,;
      env: {;
        NODE_ENV: production",;
        AUTOMATION_INTERVAL: "2400000 // 40 minutes;,
}
        NODE_ENV: production,;
        AUTOMATION_INTERVAL: 2400000" // 40 minutes;,
}
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259;,
},;
    // Master error fixer - runs every hour (COORDINATES ALL ERROR FIXERS);
    {;
      name: "master-error-fixer;
      script: ./scripts/automation/master-error-fixer.cjs,;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: 512M,;
      env: {;
        NODE_ENV: "production",;
        AUTOMATION_INTERVAL: 3600000 // 1 hour;,
}
        NODE_ENV: production",;
        AUTOMATION_INTERVAL: "3600000 // 1 hour;,
}
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259;,
}
    // Continuous link checker - runs every 30 minutes;
    {;
      name: link-checker,;
      script: ./scripts/automation/link-checker.cjs,;
      instances: 1,;
      autorestart: true,;
      watch: false;
      max_memory_restart: 512M",;
      env: {;
        NODE_ENV: "production,;
        AUTOMATION_INTERVAL: 1800000" // 30 minutes;,
}
        NODE_ENV: "production,;
        AUTOMATION_INTERVAL: 1800000 // 30 minutes;,
}
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259;,
},;
    // Continuous improvement - runs every 2 hours;
    {;
      name: continuous-improvement;
      script: ./scripts/automation/continuous-improvement.cjs",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "512M,;
      env: {;
        NODE_ENV: production,;
        AUTOMATION_INTERVAL: "7200000" // 2 hours;,
}
        NODE_ENV: production,;
        AUTOMATION_INTERVAL: 7200000 // 2 hours;,
}
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259;,
}
    // Continuous build and test - runs every hour;
    {;
      name: daily-build-test",;
      script: "./scripts/automation/daily-build-test.cjs,;
      instances: 1,;
      autorestart: true,;
      watch: false;
      max_memory_restart: 512M,;
      env: {;
        NODE_ENV: production",;
        AUTOMATION_INTERVAL: "3600000 // 1 hour;,
}
        NODE_ENV: production,;
        AUTOMATION_INTERVAL: 3600000" // 1 hour;,
}
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259;,
},;
    // Continuous security audit - runs every 4 hours;
    {;
      name: "security-audit;
      script: ./scripts/automation/security-audit.cjs,;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: 512M,;
      env: {;
        NODE_ENV: "production",;
        AUTOMATION_INTERVAL: 14400000 // 4 hours;,
}
        NODE_ENV: production",;
        AUTOMATION_INTERVAL: "14400000 // 4 hours;,
}
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259;,
}
    // Continuous dependency updates - runs every 6 hours;
    {;
      name: dependency-updates,;
      script: ./scripts/automation/dependency-updates.cjs,;
      instances: 1,;
      autorestart: true,;
      watch: false;
      max_memory_restart: 512M",;
      env: {;
        NODE_ENV: "production,;
        AUTOMATION_INTERVAL: 21600000" // 6 hours;,
}
        NODE_ENV: "production,;
        AUTOMATION_INTERVAL: 21600000 // 6 hours;,
}
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259;,
},;
    // Continuous performance monitoring - runs every 2 hours;
    {;
      name: performance-monitor;
      script: ./scripts/automation/performance-monitor.cjs",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "512M,;
      env: {;
        NODE_ENV: production,;
        AUTOMATION_INTERVAL: "7200000" // 2 hours;,
}
        NODE_ENV: production,;
        AUTOMATION_INTERVAL: 7200000 // 2 hours;,
}
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259;,
}
    // Continuous quality checks - runs every 3 hours;
    {;
      name: quality-checks",;
      script: "./scripts/automation/quality-checks.cjs,;
      instances: 1,;
      autorestart: true,;
      watch: false;
      max_memory_restart: 512M,;
      env: {;
        NODE_ENV: production",;
        AUTOMATION_INTERVAL: "10800000 // 3 hours;,
}
        NODE_ENV: production,;
        AUTOMATION_INTERVAL: 10800000" // 3 hours;,
}
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259;,
},;
    // Continuous link integrity checker - runs every 2 hours;
    {;
      name: "link-integrity;
      script: ./scripts/automation/link-integrity.cjs,;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: 512M,;
      env: {;
        NODE_ENV: "production",;
        AUTOMATION_INTERVAL: 7200000 // 2 hours;,
}
        NODE_ENV: production",;
        AUTOMATION_INTERVAL: "7200000 // 2 hours;,
}
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259;,
}
    // Continuous front maximizer - runs every 4 hours;
    {;
      name: front-maximizer,;
      script: ./scripts/automation/front-maximizer.cjs,;
      instances: 1,;
      autorestart: true,;
      watch: false;
      max_memory_restart: 512M",;
      env: {;
        NODE_ENV: "production,;
        AUTOMATION_INTERVAL: 14400000" // 4 hours;,
}
        NODE_ENV: "production,;
        AUTOMATION_INTERVAL: 14400000 // 4 hours;,
}
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259;,
},;
    // Continuous sitemap runner - runs every 6 hours;
    {;
      name: sitemap-runner;
      script: ./scripts/automation/sitemap-runner.cjs",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "512M,;
      env: {;
        NODE_ENV: production,;
        AUTOMATION_INTERVAL: "21600000" // 6 hours;,
}
        NODE_ENV: production,;
        AUTOMATION_INTERVAL: 21600000 // 6 hours;,
}
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259;,
}
    // Auto-fix and build automation;
    {;
      name: auto-fix-and-build",;
      script: "bash;
      args: -lc "npm install --silent && npm run lint || true && npm run type-check || true && npm run build",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: 1G,;
      env: {;
        NODE_ENV: "production";,
},;
      cron_restart: 0 */6 * * *, // Every 6 hours;
      log_file: "logs/auto-fix-and-build.log",;
      out_file: logs/auto-fix-and-build-out.log,;
      error_file: "logs/auto-fix-and-build-error.log";,
}
  ],;
  deploy: {;
    production: {;
      user: root,;
      host: "localhost",;
      ref: origin/main,;
      repo: "git@github.com:your-username/bolt.new.zion.app.git",;
      path: /workspace/production,;
      "pre-deploy-local": ,;
      "post-deploy": npm install && npm run build && pm2 reload ecosystem.config.cjs --env production,;
      "pre-setup": ;,
}
>>>>>>> main
  }
}
    {;
      name: "zion-website",;
      script: "npm",;
      args: "run dev",;
      cwd: "/workspace",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "1G",;
      env: {;
        NODE_ENV: "development",;
        PORT: 3000},;
      env_production: {;
        NODE_ENV: "production",;
        PORT: 3000},;
      log_file: "./logs/zion-website.log",;
      out_file: "./logs/zion-website-out.log",;
      error_file: "./logs/zion-website-error.log",;
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",;
      merge_logs: false,;
      time: false},;

    // Error Monitor - runs every 10 minutes;
    {;
      name: "error-monitor",;
      script: "./scripts/error-monitor.cjs",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "500M",;
      env: {;
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
    {;
      name: "health-checker",;
      script: "./scripts/health-checker.cjs",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "300M",;
      env: {;
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
    {;
      name: "auto-fixer",;
      script: "./scripts/auto-fixer.cjs",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "1G",;
      env: {;
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
    {;
      name: "syntax-fixer",;
      script: "./scripts/automation/syntax-error-fixer.cjs",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "800M",;
      env: {;
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
    {;
      name: "dependency-manager",;
      script: "./scripts/automation/intelligent-dependency-manager.cjs",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "600M",;
      env: {;
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
    {;
      name: "build-monitor",;
      script: "./scripts/automation/build-monitor.cjs",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "400M",;
      env: {;
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
    {;
      name: "log-cleaner",;
      script: "./scripts/log-cleaner.js",;
      instances: 1,;
      autorestart: false,;
      watch: false,;
      max_memory_restart: "200M",;
      env: {;
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
    {;
      name: "pm2-sync-automation",;
      script: "./scripts/automation/pm2-sync-automation.cjs",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "1G",;
      env: {;
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
    {;
      name: "pm2-sync-monitor",;
      script: "./scripts/automation/pm2-sync-monitor.cjs",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "256M",;
      env: {;
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
    {;
      name: "pm2-sync-automation",;
      script: "./scripts/automation/pm2-sync-automation.cjs",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "1G",;
      env: {;
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
    {;
      name: "pm2-sync-monitor",;
      script: "./scripts/automation/pm2-sync-monitor.cjs",;
      instances: 1,;
      autorestart: true,;
      watch: false,;
      max_memory_restart: "256M",;
      env: {;
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
  deploy: {;
    production: {;
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
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259;
  deploy: {;
    production: {;
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