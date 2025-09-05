<<<<<<< HEAD
module.exports = {;
  app:s:[;
    {;
      nam:e:'error-monitor',;
      scrip:t:'./automation/error-monitor.cjs',;
      instance:s:1,;
      autorestar:t:true,;
      watc:h:false,;
      max_memory_restar:t:'1G',;
      en:v:{;
        NODE_EN:V:'production',;
        LOG_LEVE:L:'info',;
      },;
      error_fil:e:'./automation/logs/error-monitor-error.log',;
      out_fil:e:'./automation/logs/error-monitor-out.log',;
      log_fil:e:'./automation/logs/error-monitor-combined.log',;
      tim:e:true,;
      cron_restar:t:'0 */6 * * *', // Restart every 6 hours:max_restarts:10,;
      min_uptim:e:'10s',;
    },;
    {;
      nam:e:'syntax-fixer',;
      scrip:t:'./automation/syntax-fix-launcher.js',;
      arg:s:'start continuous',;
      instance:s:1,;
      autorestar:t:true,;
      watc:h:false,;
      max_memory_restar:t:'512M',;
      en:v:{;
        NODE_EN:V:'production',;
        WATCH_MOD:E:'true',;
      },;
      error_fil:e:'./automation/logs/syntax-fixer-error.log',;
      out_fil:e:'./automation/logs/syntax-fixer-out.log',;
      log_fil:e:'./automation/logs/syntax-fixer-combined.log',;
      tim:e:true,;
      max_restart:s:5,;
      min_uptim:e:'30s',;
    },;
    {;
      nam:e:'lint-automation',;
      scrip:t:'./automation/linting-automation-orchestrator.cjs',;
      arg:s:'continuous',;
      instance:s:1,;
      autorestar:t:true,;
      watc:h:false,;
      max_memory_restar:t:'512M',;
      en:v:{;
        NODE_EN:V:'production',;
        AUTO_FI:X:'true',;
      },;
      error_fil:e:'./automation/logs/lint-automation-error.log',;
      out_fil:e:'./automation/logs/lint-automation-out.log',;
      log_fil:e:'./automation/logs/lint-automation-combined.log',;
      tim:e:true,;
      max_restart:s:5,;
      min_uptim:e:'30s',;
    },;
    {;
      nam:e:'build-monitor',;
      scrip:t:'./automation/build-monitor.cjs',;
      instance:s:1,;
      autorestar:t:true,;
      watc:h:false,;
      max_memory_restar:t:'1G',;
      en:v:{;
        NODE_EN:V:'production',;
        CHECK_INTERVA:L:'300000', // 5 minutes;
      },;
      error_fil:e:'./automation/logs/build-monitor-error.log',;
      out_fil:e:'./automation/logs/build-monitor-out.log',;
      log_fil:e:'./automation/logs/build-monitor-combined.log',;
      tim:e:true,;
      cron_restar:t:'0 */2 * * *', // Restart every 2 hours:max_restarts:10,;
      min_uptim:e:'10s',;
    },;
    {;
      nam:e:'security-scanner',;
      scrip:t:'./automation/security-scanner.cjs',;
      instance:s:1,;
      autorestar:t:true,;
      watc:h:false,;
      max_memory_restar:t:'512M',;
      en:v:{;
        NODE_EN:V:'production',;
        SCAN_INTERVA:L:'3600000', // 1 hour;
      },;
      error_fil:e:'./automation/logs/security-scanner-error.log',;
      out_fil:e:'./automation/logs/security-scanner-out.log',;
      log_fil:e:'./automation/logs/security-scanner-combined.log',;
      tim:e:true,;
      cron_restar:t:'0 */4 * * *', // Restart every 4 hours:max_restarts:5,;
      min_uptim:e:'10s',;
    },;
    {;
      nam:e:'performance-monitor',;
      scrip:t:'./automation/performance-monitor.cjs',;
      instance:s:1,;
      autorestar:t:true,;
      watc:h:false,;
      max_memory_restar:t:'512M',;
      en:v:{;
        NODE_EN:V:'production',;
        MONITOR_INTERVA:L:'600000', // 10 minutes;
      },;
      error_fil:e:'./automation/logs/performance-monitor-error.log',;
      out_fil:e:'./automation/logs/performance-monitor-out.log',;
      log_fil:e:'./automation/logs/performance-monitor-combined.log',;
      tim:e:true,;
      max_restart:s:5,;
      min_uptim:e:'10s',;
    },;
    {;
      nam:e:'git-workflow-automator',;
      scrip:t:'./automation/git-automation.cjs',;
      instance:s:1,;
      autorestar:t:true,;
      watc:h:false,;
      max_memory_restar:t:'256M',;
      en:v:{;
        NODE_EN:V:'production',;
        AUTO_COMMI:T:'true',;
        AUTO_PUS:H:'true',;
      },;
      error_fil:e:'./automation/logs/git-workflow-error.log',;
      out_fil:e:'./automation/logs/git-workflow-out.log',;
      log_fil:e:'./automation/logs/git-workflow-combined.log',;
      tim:e:true,;
      max_restart:s:3,;
      min_uptim:e:'10s',;
    },;
    {;
      nam:e:'master-orchestrator',;
      scrip:t:'./automation/master-automation-orchestrator.cjs',;
      instance:s:1,;
      autorestar:t:true,;
      watc:h:false,;
      max_memory_restar:t:'1G',;
      en:v:{;
        NODE_EN:V:'production',;
        ORCHESTRATE_AL:L:'true',;
      },;
      error_fil:e:'./automation/logs/master-orchestrator-error.log',;
      out_fil:e:'./automation/logs/master-orchestrator-out.log',;
      log_fil:e:'./automation/logs/master-orchestrator-combined.log',;
      tim:e:true,;
      cron_restar:t:'0 */12 * * *', // Restart every 12 hours:max_restarts:5,;
      min_uptim:e:'30s',;
    },;
  ],;
=======
module.exports = {
  apps: [
    {
      name: 'error-monitor',
      script: './automation/error-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        LOG_LEVEL: 'info',
      },
      error_file: './automation/logs/error-monitor-error.log',
      out_file: './automation/logs/error-monitor-out.log',
      log_file: './automation/logs/error-monitor-combined.log',
      time: true,
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      max_restarts: 10,
      min_uptime: '10s',
    },
    {
      name: 'syntax-fixer',
      script: './automation/syntax-fix-launcher.js',
      args: 'start continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        WATCH_MODE: 'true',
      },
      error_file: './automation/logs/syntax-fixer-error.log',
      out_file: './automation/logs/syntax-fixer-out.log',
      log_file: './automation/logs/syntax-fixer-combined.log',
      time: true,
      max_restarts: 5,
      min_uptime: '30s',
    },
    {
      name: 'lint-automation',
      script: './automation/linting-automation-orchestrator.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AUTO_FIX: 'true',
      },
      error_file: './automation/logs/lint-automation-error.log',
      out_file: './automation/logs/lint-automation-out.log',
      log_file: './automation/logs/lint-automation-combined.log',
      time: true,
      max_restarts: 5,
      min_uptime: '30s',
    },
    {
      name: 'build-monitor',
      script: './automation/build-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        CHECK_INTERVAL: '300000', // 5 minutes
      },
      error_file: './automation/logs/build-monitor-error.log',
      out_file: './automation/logs/build-monitor-out.log',
      log_file: './automation/logs/build-monitor-combined.log',
      time: true,
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      max_restarts: 10,
      min_uptime: '10s',
    },
    {
      name: 'security-scanner',
      script: './automation/security-scanner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        SCAN_INTERVAL: '3600000', // 1 hour
      },
      error_file: './automation/logs/security-scanner-error.log',
      out_file: './automation/logs/security-scanner-out.log',
      log_file: './automation/logs/security-scanner-combined.log',
      time: true,
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      max_restarts: 5,
      min_uptime: '10s',
    },
    {
      name: 'performance-monitor',
      script: './automation/performance-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        MONITOR_INTERVAL: '600000', // 10 minutes
      },
      error_file: './automation/logs/performance-monitor-error.log',
      out_file: './automation/logs/performance-monitor-out.log',
      log_file: './automation/logs/performance-monitor-combined.log',
      time: true,
      max_restarts: 5,
      min_uptime: '10s',
    },
    {
      name: 'git-workflow-automator',
      script: './automation/git-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        AUTO_COMMIT: 'true',
        AUTO_PUSH: 'true',
      },
      error_file: './automation/logs/git-workflow-error.log',
      out_file: './automation/logs/git-workflow-out.log',
      log_file: './automation/logs/git-workflow-combined.log',
      time: true,
      max_restarts: 3,
      min_uptime: '10s',
    },
    {
      name: 'master-orchestrator',
      script: './automation/master-automation-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        ORCHESTRATE_ALL: 'true',
      },
      error_file: './automation/logs/master-orchestrator-error.log',
      out_file: './automation/logs/master-orchestrator-out.log',
      log_file: './automation/logs/master-orchestrator-combined.log',
      time: true,
      cron_restart: '0 */12 * * *', // Restart every 12 hours
      max_restarts: 5,
      min_uptime: '30s',
    },
  ],
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
};
