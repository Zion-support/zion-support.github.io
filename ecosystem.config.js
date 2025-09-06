<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD;
=======;
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
export default {
  apps: [
    {
      name: 'bolt-zion-app',
=======
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

module.exports = {;      error_file:'./logs/error-fixer-error && error.log',;
      out_file:'./logs/error-fixer-out && out.log',;
      log_file:'./logs/error-fixer-combined && combined.log',;
      time:true;
    },;
    {;
      name:'intelligent-orchestrator',;
      script:'automation/intelligent-orchestrator && orchestrator.cjs',;      script:'automation/intelligent-orchestrator && orchestrator.cjs',;
      args:'continuous',;
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'1G',;
      env:{;
        NODE_ENV:'production';
      },;
      error_file:'./logs/orchestrator-error && error.log',;
      out_file:'./logs/orchestrator-out && out.log',;
      log_file:'./logs/orchestrator-combined && combined.log',;      error_file:'./logs/orchestrator-error && error.log',;
      out_file:'./logs/orchestrator-out && out.log',;
      log_file:'./logs/orchestrator-combined && combined.log',;
      time:true;
    },;
    {;
      name:'automation-dashboard',;
      script:'automation/automation-dashboard && dashboard.cjs',;      script:'automation/automation-dashboard && dashboard.cjs',;
      args:'start',;
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'1G',;
      time:true;
    },;
    {;
      name:'code-quality-monitor',;
      script:'automation/code-quality-monitor && monitor.cjs',;      script:'automation/code-quality-monitor && monitor.cjs',;
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'512M',;
      env:{;
        NODE_ENV:'production';
      },;
      error_file:'./logs/code-quality-error && error.log',;
      out_file:'./logs/code-quality-out && out.log',;
      log_file:'./logs/code-quality-combined && combined.log',;      error_file:'./logs/code-quality-error && error.log',;
      out_file:'./logs/code-quality-out && out.log',;
      log_file:'./logs/code-quality-combined && combined.log',;
      time:true;
    },;
    {;
      name:'performance-optimizer',;
      script:'automation/performance-optimizer && optimizer.cjs',;      script:'automation/performance-optimizer && optimizer.cjs',;
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'512M',;
      env:{;
        NODE_ENV:'production';
      },;
module.exports = {;
  apps:[;
module.exports = {apps:[;
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
<<<<<<< HEAD
      log_file:'./logs/performance-combined.log';
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      time:true;
    }
  ];
};      env: {
        NODE_ENV: 'production'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358

      },
      error_file: './logs/performance-error && error.log',
      out_file: './logs/performance-out && out.log',
      log_file: './logs/performance-combined && combined.log',

      time: true
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-bf80
module.exports = {
<<<<<<< HEAD
<<<<<<< HEAD
  apps: [{
    name: "ziontechgroup-site"
    script: "npm"
    args: "start"
    instances: 1
    exec_mode: "fork"
    env: {
      NODE_ENV: "production"
      PORT: 3000
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

}

  }];
};

;
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 878d942794613d77e7906d7fb8891458141d2dcc;
},;
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    }
  ]


=======

=======



=======
=======

}

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> main
export default {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  apps: [;
    {

      name: 'bolt-zion-app',
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
<<<<<<< HEAD
=======
export default {
  apps: [
    {
      name: 'bolt-zion-app',
      script: 'npm',
      args: 'run preview',
      cwd: './',
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  apps: [
    {
      name: 'error-fixer',
      script: 'automation/lint-error-fixer.cjs',
      args: 'continuous',
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
      time: true
    },
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
      time: true
    },
    {
      name: 'automation-dashboard',
      script: 'automation/automation-dashboard.cjs',
      args: 'start',
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======
  apps: [{
    name: "ziontechgroup-site"
    script: "npm"
    args: "start"
    instances: 1
    exec_mode: "fork"
    env: {
      NODE_ENV: "production"
      PORT: 3000
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
=======
=======
    }
  ]


=======

=======



=======
=======

}

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> main
export default {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
  apps: [;
    {

      name: 'bolt-zion-app',
<<<<<<< HEAD
=======
      name: 'bolt - zion - app',

>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
      script: 'npm',
      args: 'run preview',
      cwd: './',
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
      instances: 1,
=======
      log_file:'./logs/performance-combined.log';export default {
  apps: [;
    {

      name: 'bolt-zion-app',      instances: 1,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      log_file: 'logs/pm2/preview.log',
      error_file: 'logs/pm2/preview-error.log',
      out_file: 'logs/pm2/preview-out.log',
    },
    {
      name: 'auto-fix',
      script: 'node',
      args: 'scripts/pm2/auto-fix.js',
      cron_restart: '0 */6 * * *',
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      error_file: './logs/dashboard-error.log',
      out_file: './logs/dashboard-out.log',
      log_file: './logs/dashboard-combined.log',
      time: true
    },
    {
      name: 'code-quality-monitor',
      script: 'automation/code-quality-monitor.cjs',
<<<<<<< HEAD
      instances: 1,
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======
<<<<<<< HEAD
      log_file: 'logs/pm2/preview.log',
      error_file: 'logs/pm2/preview-error.log',
      out_file: 'logs/pm2/preview-out.log',
    },
    {
      name: 'auto-fix',
      script: 'node',
      args: 'scripts/pm2/auto-fix.js',
=======

      log_file: 'logs / pm2 / preview.log',
      error_file: 'logs / pm2 / preview - error.log',
      out_file: 'logs / pm2 / preview - out.log',

    },
    {
      name: 'auto - fix',
      script: 'node',

      args: 'scripts / pm2 / auto - fix.js',

>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
      cron_restart: '0 */6 * * *',
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
      instances: 1,      cron_restart: '0 */6 * * *',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
<<<<<<< HEAD
<<<<<<< HEAD
        NODE_ENV: 'production'
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
        NODE_ENV: 'production'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
      },
      log_file: 'logs/pm2/auto-fix.log',
      error_file: 'logs/pm2/auto-fix-error.log',
      out_file: 'logs/pm2/auto-fix-out.log',
<<<<<<< HEAD
=======
=======
        NODE_ENV: 'production';
      },

      log_file: 'logs / pm2 / auto - fix.log',
      error_file: 'logs / pm2 / auto - fix - error.log',
      out_file: 'logs / pm2 / auto - fix - out.log',

>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
    },
    {
      name: 'healthcheck',
      script: 'node',
<<<<<<< HEAD
      args: 'scripts/pm2/healthcheck.js',
=======
<<<<<<< HEAD
      args: 'scripts/pm2/healthcheck.js',
=======

      args: 'scripts / pm2 / healthcheck.js',

>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
      cron_restart: '*/5 * * * *',
=======
        NODE_ENV: 'production'    },
    {
      name: 'healthcheck',
      script: 'node',
      args: 'scripts/pm2/healthcheck.js',      cron_restart: '*/5 * * * *',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        NODE_ENV: 'production'
      },
      log_file: 'logs/pm2/health.log',
      error_file: 'logs/pm2/health-error.log',
      out_file: 'logs/pm2/health-out.log',
    },
    {
      name: 'code-quality-monitor',
<<<<<<< HEAD
      script: 'scripts/pm2/code-quality-monitor.js',
<<<<<<< HEAD
=======
=======
        NODE_ENV: 'production';
      },

      log_file: 'logs / pm2 / health.log',
      error_file: 'logs / pm2 / health - error.log',
      out_file: 'logs / pm2 / health - out.log',
    },
    {
      name: 'code - quality - monitor',
      script: 'scripts / pm2 / code - quality - monitor.js',

>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
      instances: 1,
=======
      script: 'scripts/pm2/code-quality-monitor.js',      instances: 1,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
<<<<<<< HEAD
<<<<<<< HEAD
        PM2_PROCESS_NAME: 'code-quality-monitor',
=======
<<<<<<< HEAD
        PM2_PROCESS_NAME: 'code-quality-monitor',
=======
        PM2_PROCESS_NAME: 'code - quality - monitor',
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        QUALITY_THRESHOLD: '80',
        AUTO_FIX_CRITICAL: 'true',
      },
      cron_restart: '0 */6 * * *',
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
        PM2_PROCESS_NAME: 'code-quality-monitor',        QUALITY_THRESHOLD: '80',
        AUTO_FIX_CRITICAL: 'true',
      },
      cron_restart: '0 */6 * * *',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      log_file: 'logs/pm2/code-quality-monitor.log',
      error_file: 'logs/pm2/code-quality-monitor-error.log',
      out_file: 'logs/pm2/code-quality-monitor-out.log',
    },
    {
      name: 'auto-commit-fixes',
<<<<<<< HEAD
      script: 'scripts/pm2/auto-commit-fixes.js',
<<<<<<< HEAD
=======
=======

      log_file: 'logs / pm2 / code - quality - monitor.log',
      error_file: 'logs / pm2 / code - quality - monitor - error.log',
      out_file: 'logs / pm2 / code - quality - monitor - out.log',
    },
    {
      name: 'auto - commit - fixes',
      script: 'scripts / pm2 / auto - commit - fixes.js',

>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
      instances: 1,
=======
      script: 'scripts/pm2/auto-commit-fixes.js',      instances: 1,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
<<<<<<< HEAD
<<<<<<< HEAD
        PM2_PROCESS_NAME: 'auto-commit-fixes',
=======
<<<<<<< HEAD
        PM2_PROCESS_NAME: 'auto-commit-fixes',
=======
        PM2_PROCESS_NAME: 'auto - commit - fixes',
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        COMMIT_FREQUENCY: 'hourly',
        AUTO_PUSH: 'false',
      },
      cron_restart: '0 */2 * * *',
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
        PM2_PROCESS_NAME: 'auto-commit-fixes',        COMMIT_FREQUENCY: 'hourly',
        AUTO_PUSH: 'false',
      },
      cron_restart: '0 */2 * * *',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      log_file: 'logs/pm2/auto-commit-fixes.log',
      error_file: 'logs/pm2/auto-commit-fixes-error.log',
      out_file: 'logs/pm2/auto-commit-fixes-out.log',
    },
    {
      name: 'dependency-monitor',
<<<<<<< HEAD
      script: 'scripts/pm2/dependency-monitor.js',
<<<<<<< HEAD
=======
=======

      log_file: 'logs / pm2 / auto - commit - fixes.log',
      error_file: 'logs / pm2 / auto - commit - fixes - error.log',
      out_file: 'logs / pm2 / auto - commit - fixes - out.log',
    },
    {
      name: 'dependency - monitor',
      script: 'scripts / pm2 / dependency - monitor.js',

>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
      instances: 1,
=======
      script: 'scripts/pm2/dependency-monitor.js',      instances: 1,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
<<<<<<< HEAD
<<<<<<< HEAD
        PM2_PROCESS_NAME: 'dependency-monitor',
=======
<<<<<<< HEAD
        PM2_PROCESS_NAME: 'dependency-monitor',
=======
        PM2_PROCESS_NAME: 'dependency - monitor',
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        AUTO_UPDATE_DEV: 'true',
        SECURITY_ALERTS: 'true',
      },
      cron_restart: '0 0 * * 0',
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
        PM2_PROCESS_NAME: 'dependency-monitor',        AUTO_UPDATE_DEV: 'true',
        SECURITY_ALERTS: 'true',
      },
      cron_restart: '0 0 * * 0',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      log_file: 'logs/pm2/dependency-monitor.log',
      error_file: 'logs/pm2/dependency-monitor-error.log',
      out_file: 'logs/pm2/dependency-monitor-out.log',
    },
    {
      name: 'performance-monitor',
<<<<<<< HEAD
      script: 'scripts/pm2/performance-monitor.js',
<<<<<<< HEAD
=======
=======

      log_file: 'logs / pm2 / dependency - monitor.log',
      error_file: 'logs / pm2 / dependency - monitor - error.log',
      out_file: 'logs / pm2 / dependency - monitor - out.log',
    },
    {
      name: 'performance - monitor',
      script: 'scripts / pm2 / performance - monitor.js',

>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
      instances: 1,
=======
      script: 'scripts/pm2/performance-monitor.js',      instances: 1,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
<<<<<<< HEAD
<<<<<<< HEAD
        PM2_PROCESS_NAME: 'performance-monitor',
=======
<<<<<<< HEAD
        PM2_PROCESS_NAME: 'performance-monitor',
=======
        PM2_PROCESS_NAME: 'performance - monitor',
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        PERFORMANCE_THRESHOLD: '3000',
        BUNDLE_SIZE_LIMIT: '2MB',
      },
      cron_restart: '0 */8 * * *',
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
        PM2_PROCESS_NAME: 'performance-monitor',        PERFORMANCE_THRESHOLD: '3000',
        BUNDLE_SIZE_LIMIT: '2MB',
      },
      cron_restart: '0 */8 * * *',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      log_file: 'logs/pm2/performance-monitor.log',
      error_file: 'logs/pm2/performance-monitor-error.log',
      out_file: 'logs/pm2/performance-monitor-out.log',
    },
    {
      name: 'git-workflow',
<<<<<<< HEAD
      script: 'scripts/pm2/git-workflow-automator.js',
<<<<<<< HEAD
=======
=======

      log_file: 'logs / pm2 / performance - monitor.log',
      error_file: 'logs / pm2 / performance - monitor - error.log',
      out_file: 'logs / pm2 / performance - monitor - out.log',
    },
    {
      name: 'git - workflow',
      script: 'scripts / pm2 / git - workflow - automator.js',

>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
      instances: 1,
=======
      script: 'scripts/pm2/git-workflow-automator.js',      instances: 1,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
<<<<<<< HEAD
<<<<<<< HEAD
        PM2_PROCESS_NAME: 'git-workflow',
=======
<<<<<<< HEAD
        PM2_PROCESS_NAME: 'git-workflow',
=======
        PM2_PROCESS_NAME: 'git - workflow',
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        AUTO_BRANCH_CLEANUP: 'true',
=======
        PM2_PROCESS_NAME: 'git-workflow',        AUTO_BRANCH_CLEANUP: 'true',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        AUTO_MERGE_SAFE: 'true',
        CONFLICT_RESOLUTION: 'true',
        BRANCH_STRATEGY: 'gitflow',
      },
      cron_restart: '0 */6 * * *',
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      log_file: 'logs/pm2/git-workflow.log',
      error_file: 'logs/pm2/git-workflow-error.log',
      out_file: 'logs/pm2/git-workflow-out.log',
    },
    {
      name: 'error-detection',
<<<<<<< HEAD
      script: 'scripts/pm2/error-detection-service.js',
<<<<<<< HEAD
=======
=======

      log_file: 'logs / pm2 / git - workflow.log',
      error_file: 'logs / pm2 / git - workflow - error.log',
      out_file: 'logs / pm2 / git - workflow - out.log',
    },
    {
      name: 'error - detection',
      script: 'scripts / pm2 / error - detection - service.js',

>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
      instances: 1,
=======
      script: 'scripts/pm2/error-detection-service.js',      instances: 1,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
<<<<<<< HEAD
<<<<<<< HEAD
        PM2_PROCESS_NAME: 'error-detection',
=======
<<<<<<< HEAD
        PM2_PROCESS_NAME: 'error-detection',
=======
        PM2_PROCESS_NAME: 'error - detection',
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        AUTO_FIX_ENABLED: 'true',
        MONITOR_FREQUENCY: '*/5 * * * *',
      },
      cron_restart: '*/5 * * * *',
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
        PM2_PROCESS_NAME: 'error-detection',        AUTO_FIX_ENABLED: 'true',
        MONITOR_FREQUENCY: '*/5 * * * *',
      },
      cron_restart: '*/5 * * * *',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      log_file: 'logs/pm2/error-detection.log',
      error_file: 'logs/pm2/error-detection-error.log',
      out_file: 'logs/pm2/error-detection-out.log',
    },
    {
      name: 'syntax-fixer',
<<<<<<< HEAD
      script: 'scripts/pm2/syntax-error-fixer.js',
<<<<<<< HEAD
=======
=======

      log_file: 'logs / pm2 / error - detection.log',
      error_file: 'logs / pm2 / error - detection - error.log',
      out_file: 'logs / pm2 / error - detection - out.log',
    },
    {
      name: 'syntax - fixer',
      script: 'scripts / pm2 / syntax - error - fixer.js',

>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
      instances: 1,
=======
      script: 'scripts/pm2/syntax-error-fixer.js',      instances: 1,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
<<<<<<< HEAD
<<<<<<< HEAD
        PM2_PROCESS_NAME: 'syntax-fixer',
=======
<<<<<<< HEAD
        PM2_PROCESS_NAME: 'syntax-fixer',
=======
        PM2_PROCESS_NAME: 'syntax - fixer',
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        AUTO_FIX_ENABLED: 'true',
        MONITOR_FREQUENCY: '*/10 * * * *',
      },
      cron_restart: '*/10 * * * *',
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
        PM2_PROCESS_NAME: 'syntax-fixer',        AUTO_FIX_ENABLED: 'true',
        MONITOR_FREQUENCY: '*/10 * * * *',
      },
      cron_restart: '*/10 * * * *',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      log_file: 'logs/pm2/syntax-fixer.log',
      error_file: 'logs/pm2/syntax-fixer-error.log',
      out_file: 'logs/pm2/syntax-fixer-out.log',
    }
  ],
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
>>>>>>> main
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
module.exports = {
  apps: [{
    name: "ziontechgroup-site",
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  apps: [{
    name: "ziontechgroup-site",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

      log_file: 'logs / pm2 / syntax - fixer.log',
      error_file: 'logs / pm2 / syntax - fixer - error.log',
      out_file: 'logs / pm2 / syntax - fixer - out.log',

    }
  ],
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
module && module.exports = {
  apps: [{

    },
    max_memory_restart: "1G",
    node_args: "--max-old-space-size=1024",
    error_file: "./logs/err && err.log",
    out_file: "./logs/out && out.log",
    log_file: "./logs/combined && combined.log",

    time: true

<<<<<<< HEAD



<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> main
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}
}
<<<<<<< HEAD
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      },
      error_file: './logs/code-quality-error.log',
      out_file: './logs/code-quality-out.log',
      log_file: './logs/code-quality-combined.log',
      time: true
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
=======module.exports = {
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
};
}
}
  }]
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    name: "ziontechgroup - site",
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
    name: "ziontechgroup - site",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    script: "npm",
    args: "start",
    instances: 1,
    exec_mode: "fork",
    env: {
      NODE_ENV: "production",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      PORT: 3000
    },
    env_production: {
      NODE_ENV: "production",
      PORT: 3000
    },
    max_memory_restart: "1G",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    node_args: "--max-old-space-size=1024",
    error_file: "./logs/err.log",
    out_file: "./logs/out.log",
    log_file: "./logs/combined.log",
    time: true
  }]
<<<<<<< HEAD
};
=======
      PORT: 3000;
    },
    env_production: {
      NODE_ENV: "production",
      PORT: 3000;
    },
    max_memory_restart: "1G",
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
    node_args: "--max - old - space - size = 1024",
=======
};    node_args: "--max - old - space - size = 1024",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    error_file: "./logs / err.log",
    out_file: "./logs / out.log",
    log_file: "./logs / combined.log",
    time: true;
  }];
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
      error_file: './logs/performance-error.log',
      out_file: './logs/performance-out.log',
      log_file: './logs/performance-combined.log',
      time: true
    }
  ]
<<<<<<< HEAD
},
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    node_args: "--max-old-space-size=1024",
    error_file: "./logs/err.log",
    out_file: "./logs/out.log",
    log_file: "./logs/combined.log",
    time: true
  }]
};
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
>>>>>>> main
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
};
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-bf80
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======
};
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-bf80
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
