<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
= $2;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-88b9
      script: 'automation/lint-error-fixer.cjs',
      args: 'continuous',
=======


<<<<<<< HEAD
module.exports = {;
module && module.exports = {;
  apps:[;



    {;

module.exports = {apps:[;
    {;
      name:'error-fixer',;
      script:'automation/lint-error-fixer && fixer.cjs',;
module.exports = {;
  apps:[;
    {;
      name:'error-fixer',;
      script:'automation/lint-error-fixer.cjs',;
=======

=======

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
module.exports = {;
=======
module && module.exports = {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  apps:[;
=======
module.exports = {apps:[;




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    {;

      name:'error-fixer',;
      script:'automation/lint-error-fixer && fixer.cjs',;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      args:'continuous',;
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'1G',;
      env:{;
        NODE_ENV:'production';
      },;
<<<<<<< HEAD
      error_file:'./logs/error-fixer-error.log',;
      out_file:'./logs/error-fixer-out.log',;
      log_file:'./logs/error-fixer-combined.log',;
=======
      error_file:'./logs/error-fixer-error && error.log',;
      out_file:'./logs/error-fixer-out && out.log',;
      log_file:'./logs/error-fixer-combined && combined.log',;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      time:true;
    },;
    {;
      name:'intelligent-orchestrator',;
<<<<<<< HEAD
      script:'automation/intelligent-orchestrator.cjs',;
=======
      script:'automation/intelligent-orchestrator && orchestrator.cjs',;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      args:'continuous',;
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'1G',;
      env:{;
        NODE_ENV:'production';
      },;
<<<<<<< HEAD
      error_file:'./logs/orchestrator-error.log',;
      out_file:'./logs/orchestrator-out.log',;
      log_file:'./logs/orchestrator-combined.log',;
=======
      error_file:'./logs/orchestrator-error && error.log',;
      out_file:'./logs/orchestrator-out && out.log',;
      log_file:'./logs/orchestrator-combined && combined.log',;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      time:true;
    },;
    {;
      name:'automation-dashboard',;
<<<<<<< HEAD
      script:'automation/automation-dashboard.cjs',;
=======
      script:'automation/automation-dashboard && dashboard.cjs',;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      args:'start',;
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'1G',;
<<<<<<< HEAD
      env:{;
        NODE_ENV:'production',;
        PORT:3001;
      },;
      error_file:'./logs/dashboard-error.log',;
      out_file:'./logs/dashboard-out.log',;
      log_file:'./logs/dashboard-combined.log',;
=======

      env:{;
        NODE_ENV:'production';
        PORT:3001;

      },;
      error_file:'./logs/dashboard-error && error.log',;
      out_file:'./logs/dashboard-out && out.log',;
      log_file:'./logs/dashboard-combined && combined.log',;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      time:true;
    },;
    {;
      name:'code-quality-monitor',;
<<<<<<< HEAD
      script:'automation/code-quality-monitor.cjs',;
=======
      script:'automation/code-quality-monitor && monitor.cjs',;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'512M',;
      env:{;
        NODE_ENV:'production';
      },;
<<<<<<< HEAD
      error_file:'./logs/code-quality-error.log',;
      out_file:'./logs/code-quality-out.log',;
      log_file:'./logs/code-quality-combined.log',;
=======
      error_file:'./logs/code-quality-error && error.log',;
      out_file:'./logs/code-quality-out && out.log',;
      log_file:'./logs/code-quality-combined && combined.log',;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      time:true;
    },;
    {;
      name:'performance-optimizer',;
<<<<<<< HEAD
      script:'automation/performance-optimizer.cjs',;
=======
      script:'automation/performance-optimizer && optimizer.cjs',;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'512M',;
      env:{;
        NODE_ENV:'production';
      },;
<<<<<<< HEAD
      error_file:'./logs/performance-error.log',;
      out_file:'./logs/performance-out.log',;
      log_file:'./logs/performance-combined.log',;
module.exports = {;
  apps:[;
module.exports = {apps:[;
origin/main
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
=======
      error_file:'./logs/performance-error && error.log',;
      out_file:'./logs/performance-out && out.log',;
      log_file:'./logs/performance-combined && combined.log',;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      time:true;
    }
  ];
};      env: {
        NODE_ENV: 'production'
<<<<<<< HEAD
      },
      time: true
    }
  ]
}
export default {
  apps: [
    {
      }
      error_file: './logs/performance-error.log'
      out_file: './logs/performance-out.log'
      log_file: './logs/performance-combined.log'
      time: true
    }
  ]
},
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/fix-syntax-push-and-merge-to-main-40de
}
origin/main
origin/automation-improvements-final
},
}
export default {
  apps: [
    {
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
  }]
};
};
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
}
origin/main
origin/automation-improvements-final
}
  }];
};
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






}

export default {
  apps: [;
    {

      name: 'bolt-zion-app',
      name: 'bolt - zion - app',
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
      log_file: 'logs / pm2 / preview.log',
      error_file: 'logs / pm2 / preview - error.log',
      out_file: 'logs / pm2 / preview - out.log',
    },
    {
      name: 'auto - fix',
      script: 'node',
      args: 'scripts / pm2 / auto - fix.js',
      cron_restart: '0 */6 * * *',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production';
      },
      log_file: 'logs / pm2 / auto - fix.log',
      error_file: 'logs / pm2 / auto - fix - error.log',
      out_file: 'logs / pm2 / auto - fix - out.log',
    },
    {
      name: 'healthcheck',
      script: 'node',
      args: 'scripts / pm2 / healthcheck.js',
      cron_restart: '*/5 * * * *',
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'production';
      },
      log_file: 'logs / pm2 / health.log',
      error_file: 'logs / pm2 / health - error.log',
      out_file: 'logs / pm2 / health - out.log',
    },
    {
      name: 'code - quality - monitor',
      script: 'scripts / pm2 / code - quality - monitor.js',
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
      log_file: 'logs / pm2 / code - quality - monitor.log',
      error_file: 'logs / pm2 / code - quality - monitor - error.log',
      out_file: 'logs / pm2 / code - quality - monitor - out.log',
    },
    {
      name: 'auto - commit - fixes',
      script: 'scripts / pm2 / auto - commit - fixes.js',
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
      log_file: 'logs / pm2 / auto - commit - fixes.log',
      error_file: 'logs / pm2 / auto - commit - fixes - error.log',
      out_file: 'logs / pm2 / auto - commit - fixes - out.log',
    },
    {
      name: 'dependency - monitor',
      script: 'scripts / pm2 / dependency - monitor.js',
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
      log_file: 'logs / pm2 / dependency - monitor.log',
      error_file: 'logs / pm2 / dependency - monitor - error.log',
      out_file: 'logs / pm2 / dependency - monitor - out.log',
    },
    {
      name: 'performance - monitor',
      script: 'scripts / pm2 / performance - monitor.js',
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
      log_file: 'logs / pm2 / performance - monitor.log',
      error_file: 'logs / pm2 / performance - monitor - error.log',
      out_file: 'logs / pm2 / performance - monitor - out.log',
    },
    {
      name: 'git - workflow',
      script: 'scripts / pm2 / git - workflow - automator.js',
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
      log_file: 'logs / pm2 / git - workflow.log',
      error_file: 'logs / pm2 / git - workflow - error.log',
      out_file: 'logs / pm2 / git - workflow - out.log',
    },
    {
      name: 'error - detection',
      script: 'scripts / pm2 / error - detection - service.js',
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
      log_file: 'logs / pm2 / error - detection.log',
      error_file: 'logs / pm2 / error - detection - error.log',
      out_file: 'logs / pm2 / error - detection - out.log',
    },
    {
      name: 'syntax - fixer',
      script: 'scripts / pm2 / syntax - error - fixer.js',
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
      log_file: 'logs / pm2 / syntax - fixer.log',
      error_file: 'logs / pm2 / syntax - fixer - error.log',
      out_file: 'logs / pm2 / syntax - fixer - out.log',
    }
  ],
module && module.exports = {
  apps: [{
    },
    max_memory_restart: "1G",
    node_args: "--max-old-space-size=1024",
    error_file: "./logs/err && err.log",
    out_file: "./logs/out && out.log",
    log_file: "./logs/combined && combined.log",
};


}


    time: true
  }]
};
}
=======

      },
      error_file: './logs/performance-error && error.log',
      out_file: './logs/performance-out && out.log',
      log_file: './logs/performance-combined && combined.log',

      time: true
    }
  ]


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

      name: 'bolt-zion-app',
=======
      name: 'bolt - zion - app',

      script: 'npm',
      args: 'run preview',
      cwd: './',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/error-fixer-error.log',
      out_file: './logs/error-fixer-out.log',
      log_file: './logs/error-fixer-combined.log',
      time: true},
    {
      name: 'intelligent-orchestrator',
      script: 'automation/intelligent-orchestrator.cjs',
      args: 'continuous',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/orchestrator-error.log',
      out_file: './logs/orchestrator-out.log',
      log_file: './logs/orchestrator-combined.log',
      time: true},
    {
      name: 'automation-dashboard',
      script: 'automation/automation-dashboard.cjs',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3001},
      error_file: './logs/dashboard-error.log',
      out_file: './logs/dashboard-out.log',
      log_file: './logs/dashboard-combined.log',
      time: true},
    {
      name: 'code-quality-monitor',
      script: 'automation/code-quality-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/code-quality-error.log',
      out_file: './logs/code-quality-out.log',
      log_file: './logs/code-quality-combined.log',
      time: true},
    {
      name: 'performance-optimizer',
      script: 'automation/performance-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
<<<<<<< HEAD
      log_file: 'logs / pm2 / health.log',
      error_file: 'logs / pm2 / health - error.log',
      out_file: 'logs / pm2 / health - out.log',
    },
    {
      name: 'code - quality - monitor',
      script: 'scripts / pm2 / code - quality - monitor.js',
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
      log_file: 'logs / pm2 / code - quality - monitor.log',
      error_file: 'logs / pm2 / code - quality - monitor - error.log',
      out_file: 'logs / pm2 / code - quality - monitor - out.log',
    },
    {
      name: 'auto - commit - fixes',
      script: 'scripts / pm2 / auto - commit - fixes.js',
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
      log_file: 'logs / pm2 / auto - commit - fixes.log',
      error_file: 'logs / pm2 / auto - commit - fixes - error.log',
      out_file: 'logs / pm2 / auto - commit - fixes - out.log',
    },
    {
      name: 'dependency - monitor',
      script: 'scripts / pm2 / dependency - monitor.js',
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
      log_file: 'logs / pm2 / dependency - monitor.log',
      error_file: 'logs / pm2 / dependency - monitor - error.log',
      out_file: 'logs / pm2 / dependency - monitor - out.log',
    },
    {
      name: 'performance - monitor',
      script: 'scripts / pm2 / performance - monitor.js',
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
      log_file: 'logs / pm2 / performance - monitor.log',
      error_file: 'logs / pm2 / performance - monitor - error.log',
      out_file: 'logs / pm2 / performance - monitor - out.log',
    },
    {
      name: 'git - workflow',
      script: 'scripts / pm2 / git - workflow - automator.js',
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
      log_file: 'logs / pm2 / git - workflow.log',
      error_file: 'logs / pm2 / git - workflow - error.log',
      out_file: 'logs / pm2 / git - workflow - out.log',
    },
    {
      name: 'error - detection',
      script: 'scripts / pm2 / error - detection - service.js',
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
      log_file: 'logs / pm2 / error - detection.log',
      error_file: 'logs / pm2 / error - detection - error.log',
      out_file: 'logs / pm2 / error - detection - out.log',
    },
    {
      name: 'syntax - fixer',
      script: 'scripts / pm2 / syntax - error - fixer.js',
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
      log_file: 'logs / pm2 / syntax - fixer.log',
      error_file: 'logs / pm2 / syntax - fixer - error.log',
      out_file: 'logs / pm2 / syntax - fixer - out.log',
    }
  ],
module && module.exports = {
  apps: [{
    },
    max_memory_restart: "1G",
    node_args: "--max-old-space-size=1024",
    error_file: "./logs/err && err.log",
    out_file: "./logs/out && out.log",
    log_file: "./logs/combined && combined.log",
};

}

    time: true
  }]
};
}

<<<<<<< HEAD
=======
=======

>>>>>>> origin/automation-improvements-final
=======
}
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    name: "ziontechgroup - site",

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
      PORT: 3000;
    },
    max_memory_restart: "1G",

    log_file: "./logs/combined.log",
    time: true;
  }]

};

    node_args: "--max - old - space - size = 1024",

    error_file: "./logs / err.log",
    out_file: "./logs / out.log",
    log_file: "./logs / combined.log",
    time: true;
  }];
}
<<<<<<< HEAD

=======
;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-88b9
      error_file: './logs/performance-error.log',
      out_file: './logs/performance-out.log',
      log_file: './logs/performance-combined.log',
      time: true}
  ]
},
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

    node_args: "--max-old-space-size=1024",
    error_file: "./logs/err.log",
    out_file: "./logs/out.log",
    log_file: "./logs/combined.log",
    time: true
  }]
};
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-88b9
