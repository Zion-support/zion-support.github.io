<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<<< HEAD:ecosystem.config.js
=======

=======

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
module.exports = {;
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
module && module.exports = {;
  apps:[;
<<<<<<<< HEAD:ecosystem.config.js

module.exports = {apps:[;

<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    {;

========
module.exports = {apps:[;
    {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
      name:'error-fixer',;
      script:'automation/lint-error-fixer && fixer.cjs',;
=======
module.exports = {;
  apps:[;
    {;
      name:'error-fixer',;
      script:'automation/lint-error-fixer.cjs',;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      args:'continuous',;
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'1G',;
      env:{;
        NODE_ENV:'production';
      },;
<<<<<<< HEAD
      error_file:'./logs/error-fixer-error && error.log',;
      out_file:'./logs/error-fixer-out && out.log',;
      log_file:'./logs/error-fixer-combined && combined.log',;
=======
      error_file:'./logs/error-fixer-error.log',;
      out_file:'./logs/error-fixer-out.log',;
      log_file:'./logs/error-fixer-combined.log',;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      time:true;
    },;
    {;
      name:'intelligent-orchestrator',;
<<<<<<< HEAD
      script:'automation/intelligent-orchestrator && orchestrator.cjs',;
=======
      script:'automation/intelligent-orchestrator.cjs',;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      args:'continuous',;
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'1G',;
      env:{;
        NODE_ENV:'production';
      },;
<<<<<<< HEAD
      error_file:'./logs/orchestrator-error && error.log',;
      out_file:'./logs/orchestrator-out && out.log',;
      log_file:'./logs/orchestrator-combined && combined.log',;
=======
      error_file:'./logs/orchestrator-error.log',;
      out_file:'./logs/orchestrator-out.log',;
      log_file:'./logs/orchestrator-combined.log',;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      time:true;
    },;
    {;
      name:'automation-dashboard',;
<<<<<<< HEAD
      script:'automation/automation-dashboard && dashboard.cjs',;
=======
      script:'automation/automation-dashboard.cjs',;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      args:'start',;
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'1G',;
<<<<<<<< HEAD:ecosystem.config.js

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
      env:{;
        NODE_ENV:'production',;
        PORT:3001;
<<<<<<<< HEAD:ecosystem.config.js

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
      },;
<<<<<<< HEAD
      error_file:'./logs/dashboard-error && error.log',;
      out_file:'./logs/dashboard-out && out.log',;
      log_file:'./logs/dashboard-combined && combined.log',;
=======
      error_file:'./logs/dashboard-error.log',;
      out_file:'./logs/dashboard-out.log',;
      log_file:'./logs/dashboard-combined.log',;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      time:true;
    },;
    {;
      name:'code-quality-monitor',;
<<<<<<< HEAD
      script:'automation/code-quality-monitor && monitor.cjs',;
=======
      script:'automation/code-quality-monitor.cjs',;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'512M',;
      env:{;
        NODE_ENV:'production';
      },;
<<<<<<< HEAD
      error_file:'./logs/code-quality-error && error.log',;
      out_file:'./logs/code-quality-out && out.log',;
      log_file:'./logs/code-quality-combined && combined.log',;
=======
      error_file:'./logs/code-quality-error.log',;
      out_file:'./logs/code-quality-out.log',;
      log_file:'./logs/code-quality-combined.log',;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      time:true;
    },;
    {;
      name:'performance-optimizer',;
<<<<<<< HEAD
      script:'automation/performance-optimizer && optimizer.cjs',;
=======
      script:'automation/performance-optimizer.cjs',;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'512M',;
      env:{;
        NODE_ENV:'production';
      },;
<<<<<<< HEAD
      error_file:'./logs/performance-error && error.log',;
      out_file:'./logs/performance-out && out.log',;
      log_file:'./logs/performance-combined && combined.log',;
<<<<<<<< HEAD:ecosystem.config.js

========
=======
      error_file:'./logs/performance-error.log',;
      out_file:'./logs/performance-out.log',;
      log_file:'./logs/performance-combined.log',;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
module.exports = {;
  apps:[;
=======
module.exports = {apps:[;
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
    {;
      name:'error-fixer';
      script:'automation/lint-error-fixer.cjs';
      args:'continuous';
      instances:1;
      autorestart:true;
      watch:false;
      max_memory_restart:'1G';
      env:{;
        NODE_ENV:'production';
      }
      error_file:'./logs/error-fixer-error.log';
      out_file:'./logs/error-fixer-out.log';
      log_file:'./logs/error-fixer-combined.log';
      time:true;
    }
    {name:'intelligent-orchestrator';
      script:'automation/intelligent-orchestrator.cjs';
      args:'continuous';
      instances:1;
      autorestart:true;
      watch:false;
      max_memory_restart:'1G';
      env:{;
        NODE_ENV:'production';
      }
      error_file:'./logs/orchestrator-error.log';
      out_file:'./logs/orchestrator-out.log';
      log_file:'./logs/orchestrator-combined.log';
      time:true;
    }
    {name:'automation-dashboard';
      script:'automation/automation-dashboard.cjs';
      args:'start';
      instances:1;
      autorestart:true;
      watch:false;
      max_memory_restart:'1G';
      env:{;
        NODE_ENV:'production';
        PORT:3001;
      }
      error_file:'./logs/dashboard-error.log';
      out_file:'./logs/dashboard-out.log';
      log_file:'./logs/dashboard-combined.log';
      time:true;
    }
    {name:'code-quality-monitor';
      script:'automation/code-quality-monitor.cjs';
      instances:1;
      autorestart:true;
      watch:false;
      max_memory_restart:'512M';
      env:{;
        NODE_ENV:'production';
      }
      error_file:'./logs/code-quality-error.log';
      out_file:'./logs/code-quality-out.log';
      log_file:'./logs/code-quality-combined.log';
      time:true;
    }
    {name:'performance-optimizer';
      script:'automation/performance-optimizer.cjs';
      instances:1;
      autorestart:true;
      watch:false;
      max_memory_restart:'512M';
      env:{;
        NODE_ENV:'production';
      }
      error_file:'./logs/performance-error.log';
      out_file:'./logs/performance-out.log';
      log_file:'./logs/performance-combined.log';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      time:true;
    }
  ];
};      env: {
        NODE_ENV: 'production'
<<<<<<< HEAD
<<<<<<<< HEAD:ecosystem.config.js

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
      },
<<<<<<< HEAD
      error_file: './logs/performance-error && error.log',
      out_file: './logs/performance-out && out.log',
      log_file: './logs/performance-combined && combined.log',
<<<<<<<< HEAD:ecosystem.config.js

      time: true
    }
  ]

<<<<<<< HEAD
}

========
      time: true
    }
  ]
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
export default {
  apps: [
    {
<<<<<<<< HEAD:ecosystem.config.js
=======
      }
      error_file: './logs/performance-error.log'
      out_file: './logs/performance-out.log'
      log_file: './logs/performance-combined.log'
      time: true
    }
  ]
<<<<<<< HEAD
<<<<<<< HEAD
},
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
}
>>>>>>> origin/main
=======
=======
<<<<<<< HEAD
>>>>>>> origin/automation-improvements-final
<<<<<<< HEAD
},
=======
}
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
export default {
  apps: [
    {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      name: 'bolt-zion-app'
      script: 'npm'
      args: 'run preview'
      cwd: './'
      instances: 1
      autorestart: true
      watch: false
      max_memory_restart: '1G'
      env: {
        NODE_ENV: 'production'
      }
      log_file: 'logs/pm2/preview.log'
      error_file: 'logs/pm2/preview-error.log'
      out_file: 'logs/pm2/preview-out.log'
    }
    {
      name: 'auto-fix'
      script: 'node'
      args: 'scripts/pm2/auto-fix.js'
      cron_restart: '0 */6 * * *'
      autorestart: true
      watch: false
      max_memory_restart: '512M'
      env: {
        NODE_ENV: 'production'
      }
      log_file: 'logs/pm2/auto-fix.log'
      error_file: 'logs/pm2/auto-fix-error.log'
      out_file: 'logs/pm2/auto-fix-out.log'
    }
    {
      name: 'healthcheck'
      script: 'node'
      args: 'scripts/pm2/healthcheck.js'
      cron_restart: '*/5 * * * *'
      autorestart: true
      watch: false
      max_memory_restart: '128M'
      env: {
        NODE_ENV: 'production'
      }
      log_file: 'logs/pm2/health.log'
      error_file: 'logs/pm2/health-error.log'
      out_file: 'logs/pm2/health-out.log'
    }
    {
      name: 'code-quality-monitor'
      script: 'scripts/pm2/code-quality-monitor.js'
      instances: 1
      autorestart: true
      watch: false
      max_memory_restart: '1G'
      env: {
        NODE_ENV: 'development'
        PM2_PROCESS_NAME: 'code-quality-monitor'
        QUALITY_THRESHOLD: '80'
        AUTO_FIX_CRITICAL: 'true'
      }
      cron_restart: '0 */6 * * *'
      log_file: 'logs/pm2/code-quality-monitor.log'
      error_file: 'logs/pm2/code-quality-monitor-error.log'
      out_file: 'logs/pm2/code-quality-monitor-out.log'
    }
    {
      name: 'auto-commit-fixes'
      script: 'scripts/pm2/auto-commit-fixes.js'
      instances: 1
      autorestart: true
      watch: false
      max_memory_restart: '1G'
      env: {
        NODE_ENV: 'development'
        PM2_PROCESS_NAME: 'auto-commit-fixes'
        COMMIT_FREQUENCY: 'hourly'
        AUTO_PUSH: 'false'
      }
      cron_restart: '0 */2 * * *'
      log_file: 'logs/pm2/auto-commit-fixes.log'
      error_file: 'logs/pm2/auto-commit-fixes-error.log'
      out_file: 'logs/pm2/auto-commit-fixes-out.log'
    }
    {
      name: 'dependency-monitor'
      script: 'scripts/pm2/dependency-monitor.js'
      instances: 1
      autorestart: true
      watch: false
      max_memory_restart: '1G'
      env: {
        NODE_ENV: 'development'
        PM2_PROCESS_NAME: 'dependency-monitor'
        AUTO_UPDATE_DEV: 'true'
        SECURITY_ALERTS: 'true'
      }
      cron_restart: '0 0 * * 0'
      log_file: 'logs/pm2/dependency-monitor.log'
      error_file: 'logs/pm2/dependency-monitor-error.log'
      out_file: 'logs/pm2/dependency-monitor-out.log'
    }
    {
      name: 'performance-monitor'
      script: 'scripts/pm2/performance-monitor.js'
      instances: 1
      autorestart: true
      watch: false
      max_memory_restart: '1G'
      env: {
        NODE_ENV: 'development'
        PM2_PROCESS_NAME: 'performance-monitor'
        PERFORMANCE_THRESHOLD: '3000'
        BUNDLE_SIZE_LIMIT: '2MB'
      }
      cron_restart: '0 */8 * * *'
      log_file: 'logs/pm2/performance-monitor.log'
      error_file: 'logs/pm2/performance-monitor-error.log'
      out_file: 'logs/pm2/performance-monitor-out.log'
    }
    {
      name: 'git-workflow'
      script: 'scripts/pm2/git-workflow-automator.js'
      instances: 1
      autorestart: true
      watch: false
      max_memory_restart: '1G'
      env: {
        NODE_ENV: 'development'
        PM2_PROCESS_NAME: 'git-workflow'
        AUTO_BRANCH_CLEANUP: 'true'
        AUTO_MERGE_SAFE: 'true'
        CONFLICT_RESOLUTION: 'true'
        BRANCH_STRATEGY: 'gitflow'
      }
      cron_restart: '0 */6 * * *'
      log_file: 'logs/pm2/git-workflow.log'
      error_file: 'logs/pm2/git-workflow-error.log'
      out_file: 'logs/pm2/git-workflow-out.log'
    }
    {
      name: 'error-detection'
      script: 'scripts/pm2/error-detection-service.js'
      instances: 1
      autorestart: true
      watch: false
      max_memory_restart: '1G'
      env: {
        NODE_ENV: 'development'
        PM2_PROCESS_NAME: 'error-detection'
        AUTO_FIX_ENABLED: 'true'
        MONITOR_FREQUENCY: '*/5 * * * *'
      }
      cron_restart: '*/5 * * * *'
      log_file: 'logs/pm2/error-detection.log'
      error_file: 'logs/pm2/error-detection-error.log'
      out_file: 'logs/pm2/error-detection-out.log'
    }
    {
      name: 'syntax-fixer'
      script: 'scripts/pm2/syntax-error-fixer.js'
      instances: 1
      autorestart: true
      watch: false
      max_memory_restart: '1G'
      env: {
        NODE_ENV: 'development'
        PM2_PROCESS_NAME: 'syntax-fixer'
        AUTO_FIX_ENABLED: 'true'
        MONITOR_FREQUENCY: '*/10 * * * *'
      }
      cron_restart: '*/10 * * * *'
      log_file: 'logs/pm2/syntax-fixer.log'
      error_file: 'logs/pm2/syntax-fixer-error.log'
      out_file: 'logs/pm2/syntax-fixer-out.log'
    }
  ]
module.exports = {
  apps: [{
    name: "ziontechgroup-site"
    script: "npm"
    args: "start"
    instances: 1
    exec_mode: "fork"
    env: {
      NODE_ENV: "production"
      PORT: 3000
    }
    env_production: {
      NODE_ENV: "production"
      PORT: 3000
    }
    max_memory_restart: "1G"
    node_args: "--max-old-space-size=1024"
    error_file: "./logs/err.log"
    out_file: "./logs/out.log"
    log_file: "./logs/combined.log"
    time: true
<<<<<<< HEAD

};

}

  }];
};

=======
<<<<<<< HEAD
  }]
<<<<<<< HEAD
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
=======
};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
}
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
=======
}
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
  }];
};
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
;
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
<<<<<<< HEAD

=======

=======

=======



=======
=======

}

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default {
  apps: [;
    {

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
      name: 'bolt-zion-app',
      name: 'bolt - zion - app',
<<<<<<<< HEAD:ecosystem.config.js

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
      script: 'npm',
      args: 'run preview',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
<<<<<<<< HEAD:ecosystem.config.js

      log_file: 'logs / pm2 / preview.log',
      error_file: 'logs / pm2 / preview - error.log',
      out_file: 'logs / pm2 / preview - out.log',

========
      log_file: 'logs / pm2 / preview.log',
      error_file: 'logs / pm2 / preview - error.log',
      out_file: 'logs / pm2 / preview - out.log',
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
    },
    {
      name: 'auto - fix',
      script: 'node',
<<<<<<<< HEAD:ecosystem.config.js

      args: 'scripts / pm2 / auto - fix.js',

========
      args: 'scripts / pm2 / auto - fix.js',
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
      cron_restart: '0 */6 * * *',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production';
      },
<<<<<<<< HEAD:ecosystem.config.js

      log_file: 'logs / pm2 / auto - fix.log',
      error_file: 'logs / pm2 / auto - fix - error.log',
      out_file: 'logs / pm2 / auto - fix - out.log',

========
      log_file: 'logs / pm2 / auto - fix.log',
      error_file: 'logs / pm2 / auto - fix - error.log',
      out_file: 'logs / pm2 / auto - fix - out.log',
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
    },
    {
      name: 'healthcheck',
      script: 'node',
<<<<<<<< HEAD:ecosystem.config.js

      args: 'scripts / pm2 / healthcheck.js',

========
      args: 'scripts / pm2 / healthcheck.js',
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
      cron_restart: '*/5 * * * *',
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'production';
      },
<<<<<<<< HEAD:ecosystem.config.js

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
      log_file: 'logs / pm2 / health.log',
      error_file: 'logs / pm2 / health - error.log',
      out_file: 'logs / pm2 / health - out.log',
    },
    {
      name: 'code - quality - monitor',
      script: 'scripts / pm2 / code - quality - monitor.js',
<<<<<<<< HEAD:ecosystem.config.js

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'code - quality - monitor',
        QUALITY_THRESHOLD: '80',
        AUTO_FIX_CRITICAL: 'true',
      },
      cron_restart: '0 */6 * * *',
<<<<<<<< HEAD:ecosystem.config.js

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
      log_file: 'logs / pm2 / code - quality - monitor.log',
      error_file: 'logs / pm2 / code - quality - monitor - error.log',
      out_file: 'logs / pm2 / code - quality - monitor - out.log',
    },
    {
      name: 'auto - commit - fixes',
      script: 'scripts / pm2 / auto - commit - fixes.js',
<<<<<<<< HEAD:ecosystem.config.js

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'auto - commit - fixes',
        COMMIT_FREQUENCY: 'hourly',
        AUTO_PUSH: 'false',
      },
      cron_restart: '0 */2 * * *',
<<<<<<<< HEAD:ecosystem.config.js

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
      log_file: 'logs / pm2 / auto - commit - fixes.log',
      error_file: 'logs / pm2 / auto - commit - fixes - error.log',
      out_file: 'logs / pm2 / auto - commit - fixes - out.log',
    },
    {
      name: 'dependency - monitor',
      script: 'scripts / pm2 / dependency - monitor.js',
<<<<<<<< HEAD:ecosystem.config.js

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'dependency - monitor',
        AUTO_UPDATE_DEV: 'true',
        SECURITY_ALERTS: 'true',
      },
      cron_restart: '0 0 * * 0',
<<<<<<<< HEAD:ecosystem.config.js

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
      log_file: 'logs / pm2 / dependency - monitor.log',
      error_file: 'logs / pm2 / dependency - monitor - error.log',
      out_file: 'logs / pm2 / dependency - monitor - out.log',
    },
    {
      name: 'performance - monitor',
      script: 'scripts / pm2 / performance - monitor.js',
<<<<<<<< HEAD:ecosystem.config.js

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'performance - monitor',
        PERFORMANCE_THRESHOLD: '3000',
        BUNDLE_SIZE_LIMIT: '2MB',
      },
      cron_restart: '0 */8 * * *',
<<<<<<<< HEAD:ecosystem.config.js

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
      log_file: 'logs / pm2 / performance - monitor.log',
      error_file: 'logs / pm2 / performance - monitor - error.log',
      out_file: 'logs / pm2 / performance - monitor - out.log',
    },
    {
      name: 'git - workflow',
      script: 'scripts / pm2 / git - workflow - automator.js',
<<<<<<<< HEAD:ecosystem.config.js

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'git - workflow',
        AUTO_BRANCH_CLEANUP: 'true',
        AUTO_MERGE_SAFE: 'true',
        CONFLICT_RESOLUTION: 'true',
        BRANCH_STRATEGY: 'gitflow',
      },
      cron_restart: '0 */6 * * *',
<<<<<<<< HEAD:ecosystem.config.js

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
      log_file: 'logs / pm2 / git - workflow.log',
      error_file: 'logs / pm2 / git - workflow - error.log',
      out_file: 'logs / pm2 / git - workflow - out.log',
    },
    {
      name: 'error - detection',
      script: 'scripts / pm2 / error - detection - service.js',
<<<<<<<< HEAD:ecosystem.config.js

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'error - detection',
        AUTO_FIX_ENABLED: 'true',
        MONITOR_FREQUENCY: '*/5 * * * *',
      },
      cron_restart: '*/5 * * * *',
<<<<<<<< HEAD:ecosystem.config.js

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
      log_file: 'logs / pm2 / error - detection.log',
      error_file: 'logs / pm2 / error - detection - error.log',
      out_file: 'logs / pm2 / error - detection - out.log',
    },
    {
      name: 'syntax - fixer',
      script: 'scripts / pm2 / syntax - error - fixer.js',
<<<<<<<< HEAD:ecosystem.config.js

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'syntax - fixer',
        AUTO_FIX_ENABLED: 'true',
        MONITOR_FREQUENCY: '*/10 * * * *',
      },
      cron_restart: '*/10 * * * *',
<<<<<<<< HEAD:ecosystem.config.js

      log_file: 'logs / pm2 / syntax - fixer.log',
      error_file: 'logs / pm2 / syntax - fixer - error.log',
      out_file: 'logs / pm2 / syntax - fixer - out.log',

========
      log_file: 'logs / pm2 / syntax - fixer.log',
      error_file: 'logs / pm2 / syntax - fixer - error.log',
      out_file: 'logs / pm2 / syntax - fixer - out.log',
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
    }
  ],
module && module.exports = {
  apps: [{
<<<<<<<< HEAD:ecosystem.config.js

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
    },
    max_memory_restart: "1G",
    node_args: "--max-old-space-size=1024",
    error_file: "./logs/err && err.log",
    out_file: "./logs/out && out.log",
    log_file: "./logs/combined && combined.log",
<<<<<<<< HEAD:ecosystem.config.js

    time: true




=======
=======
};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5


}

=======

>>>>>>> origin/automation-improvements-final
=======
========
    time: true
  }]
};
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
}
    name: "ziontechgroup - site",
    script: "npm",
    args: "start",
    instances: 1,
    exec_mode: "fork",
    env: {
      NODE_ENV: "production",
      PORT: 3000;
    },
    env_production: {
      NODE_ENV: "production",
      PORT: 3000;
    },
    max_memory_restart: "1G",
    node_args: "--max - old - space - size = 1024",
    error_file: "./logs / err.log",
    out_file: "./logs / out.log",
    log_file: "./logs / combined.log",
    time: true;
  }];
}
;
<<<<<<<< HEAD:ecosystem.config.js
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
      error_file: './logs/performance-error.log',
      out_file: './logs/performance-out.log',
      log_file: './logs/performance-combined.log',
      time: true
    }
  ]
},
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/ecosystem.config.js
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
