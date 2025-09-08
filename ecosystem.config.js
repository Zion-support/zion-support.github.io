
<<<<<<< HEAD
module.exports = {;      error_file:'./logs/error-fixer-error && error.log',;
      out_file:'./logs/error-fixer-out && out.log',;
      log_file:'./logs/error-fixer-combined && combined.log',;
=======



module.exports = {;
module && module.exports = {;
  apps:[;

module.exports = {apps:[;




    {;

      name:'error-fixer',;
      script:'automation/lint-error-fixer && fixer.cjs',;
      args:'continuous',;
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'1G',;
      env:{;
        NODE_ENV:'production';
      },;
      error_file:'./logs/error-fixer-error && error.log',;
      out_file:'./logs/error-fixer-out && out.log',;
      log_file:'./logs/error-fixer-combined && combined.log',;
      error_file:'./logs/error-fixer-error && error.log',;
      out_file:'./logs/error-fixer-out && out.log',;
      log_file:'./logs/error-fixer-combined && combined.log',;
>>>>>>> origin/main
      time:true;
    },;
    {;
      name:'intelligent-orchestrator',;
<<<<<<< HEAD
      script:'automation/intelligent-orchestrator && orchestrator.cjs',;      script:'automation/intelligent-orchestrator && orchestrator.cjs',;
=======
      script:'automation/intelligent-orchestrator && orchestrator.cjs',;
      script:'automation/intelligent-orchestrator && orchestrator.cjs',;
>>>>>>> origin/main
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
<<<<<<< HEAD
      log_file:'./logs/orchestrator-combined && combined.log',;      error_file:'./logs/orchestrator-error && error.log',;
=======
      log_file:'./logs/orchestrator-combined && combined.log',;
      error_file:'./logs/orchestrator-error && error.log',;
>>>>>>> origin/main
      out_file:'./logs/orchestrator-out && out.log',;
      log_file:'./logs/orchestrator-combined && combined.log',;
      time:true;
    },;
    {;
      name:'automation-dashboard',;
<<<<<<< HEAD
      script:'automation/automation-dashboard && dashboard.cjs',;      script:'automation/automation-dashboard && dashboard.cjs',;
=======
      script:'automation/automation-dashboard && dashboard.cjs',;
      script:'automation/automation-dashboard && dashboard.cjs',;
>>>>>>> origin/main
      args:'start',;
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'1G',;
<<<<<<< HEAD
=======

      env:{;
        NODE_ENV:'production';
        PORT:3001;

      },;
      error_file:'./logs/dashboard-error && error.log',;
      out_file:'./logs/dashboard-out && out.log',;
      log_file:'./logs/dashboard-combined && combined.log',;
>>>>>>> origin/main
      time:true;
    },;
    {;
      name:'code-quality-monitor',;
<<<<<<< HEAD
      script:'automation/code-quality-monitor && monitor.cjs',;      script:'automation/code-quality-monitor && monitor.cjs',;
=======
      script:'automation/code-quality-monitor && monitor.cjs',;
      script:'automation/code-quality-monitor && monitor.cjs',;
>>>>>>> origin/main
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'512M',;
      env:{;
        NODE_ENV:'production';
      },;
      error_file:'./logs/code-quality-error && error.log',;
      out_file:'./logs/code-quality-out && out.log',;
<<<<<<< HEAD
      log_file:'./logs/code-quality-combined && combined.log',;      error_file:'./logs/code-quality-error && error.log',;
=======
      log_file:'./logs/code-quality-combined && combined.log',;
      error_file:'./logs/code-quality-error && error.log',;
>>>>>>> origin/main
      out_file:'./logs/code-quality-out && out.log',;
      log_file:'./logs/code-quality-combined && combined.log',;
      time:true;
    },;
    {;
      name:'performance-optimizer',;
<<<<<<< HEAD
      script:'automation/performance-optimizer && optimizer.cjs',;      script:'automation/performance-optimizer && optimizer.cjs',;
=======
      script:'automation/performance-optimizer && optimizer.cjs',;
      script:'automation/performance-optimizer && optimizer.cjs',;
>>>>>>> origin/main
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'512M',;
      env:{;
        NODE_ENV:'production';
      },;
<<<<<<< HEAD
=======
      error_file:'./logs/performance-error && error.log',;
      out_file:'./logs/performance-out && out.log',;
      log_file:'./logs/performance-combined && combined.log',;

>>>>>>> origin/main
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
      log_file:'./logs/performance-combined.log';export default {
  apps: [;
    {

      name: 'bolt-zion-app',      instances: 1,
=======
      log_file:'./logs/performance-combined.log';
      time:true;
    }
  ];
};      env: {
        NODE_ENV: 'production'

      },
      error_file: './logs/performance-error && error.log',
      out_file: './logs/performance-out && out.log',
      log_file: './logs/performance-combined && combined.log',

      time: true
module.exports = {
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
export default {
  apps: [;
    {

      name: 'bolt-zion-app',
      script: 'npm',
      args: 'run preview',
      cwd: './',
      instances: 1,
>>>>>>> origin/main
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      },
      error_file: './logs/dashboard-error.log',
      out_file: './logs/dashboard-out.log',
      log_file: './logs/dashboard-combined.log',
      time: true
    },
    {
      name: 'code-quality-monitor',
      script: 'automation/code-quality-monitor.cjs',
<<<<<<< HEAD
      instances: 1,      cron_restart: '0 */6 * * *',
=======
      instances: 1,
      cron_restart: '0 */6 * * *',
>>>>>>> origin/main
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
<<<<<<< HEAD
        NODE_ENV: 'production'    },
    {
      name: 'healthcheck',
      script: 'node',
      args: 'scripts/pm2/healthcheck.js',      cron_restart: '*/5 * * * *',
=======
        NODE_ENV: 'production'
    },
    {
      name: 'healthcheck',
      script: 'node',
      args: 'scripts/pm2/healthcheck.js',
      cron_restart: '*/5 * * * *',
>>>>>>> origin/main
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'production'
      },
      log_file: 'logs/pm2/health.log',
      error_file: 'logs/pm2/health-error.log',
      out_file: 'logs/pm2/health-out.log',
    },
    {
      name: 'code-quality-monitor',
<<<<<<< HEAD
      script: 'scripts/pm2/code-quality-monitor.js',      instances: 1,
=======
      script: 'scripts/pm2/code-quality-monitor.js',
      instances: 1,
>>>>>>> origin/main
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
<<<<<<< HEAD
        PM2_PROCESS_NAME: 'code-quality-monitor',        QUALITY_THRESHOLD: '80',
=======
        PM2_PROCESS_NAME: 'code-quality-monitor',
        QUALITY_THRESHOLD: '80',
>>>>>>> origin/main
        AUTO_FIX_CRITICAL: 'true',
      },
      cron_restart: '0 */6 * * *',
      log_file: 'logs/pm2/code-quality-monitor.log',
      error_file: 'logs/pm2/code-quality-monitor-error.log',
      out_file: 'logs/pm2/code-quality-monitor-out.log',
    },
    {
      name: 'auto-commit-fixes',
<<<<<<< HEAD
      script: 'scripts/pm2/auto-commit-fixes.js',      instances: 1,
=======
      script: 'scripts/pm2/auto-commit-fixes.js',
      instances: 1,
>>>>>>> origin/main
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
<<<<<<< HEAD
        PM2_PROCESS_NAME: 'auto-commit-fixes',        COMMIT_FREQUENCY: 'hourly',
=======
        PM2_PROCESS_NAME: 'auto-commit-fixes',
        COMMIT_FREQUENCY: 'hourly',
>>>>>>> origin/main
        AUTO_PUSH: 'false',
      },
      cron_restart: '0 */2 * * *',
      log_file: 'logs/pm2/auto-commit-fixes.log',
      error_file: 'logs/pm2/auto-commit-fixes-error.log',
      out_file: 'logs/pm2/auto-commit-fixes-out.log',
    },
    {
      name: 'dependency-monitor',
<<<<<<< HEAD
      script: 'scripts/pm2/dependency-monitor.js',      instances: 1,
=======
      script: 'scripts/pm2/dependency-monitor.js',
      instances: 1,
>>>>>>> origin/main
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
<<<<<<< HEAD
        PM2_PROCESS_NAME: 'dependency-monitor',        AUTO_UPDATE_DEV: 'true',
=======
        PM2_PROCESS_NAME: 'dependency-monitor',
        AUTO_UPDATE_DEV: 'true',
>>>>>>> origin/main
        SECURITY_ALERTS: 'true',
      },
      cron_restart: '0 0 * * 0',
      log_file: 'logs/pm2/dependency-monitor.log',
      error_file: 'logs/pm2/dependency-monitor-error.log',
      out_file: 'logs/pm2/dependency-monitor-out.log',
    },
    {
      name: 'performance-monitor',
<<<<<<< HEAD
      script: 'scripts/pm2/performance-monitor.js',      instances: 1,
=======
      script: 'scripts/pm2/performance-monitor.js',
      instances: 1,
>>>>>>> origin/main
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
<<<<<<< HEAD
        PM2_PROCESS_NAME: 'performance-monitor',        PERFORMANCE_THRESHOLD: '3000',
=======
        PM2_PROCESS_NAME: 'performance-monitor',
        PERFORMANCE_THRESHOLD: '3000',
>>>>>>> origin/main
        BUNDLE_SIZE_LIMIT: '2MB',
      },
      cron_restart: '0 */8 * * *',
      log_file: 'logs/pm2/performance-monitor.log',
      error_file: 'logs/pm2/performance-monitor-error.log',
      out_file: 'logs/pm2/performance-monitor-out.log',
    },
    {
      name: 'git-workflow',
<<<<<<< HEAD
      script: 'scripts/pm2/git-workflow-automator.js',      instances: 1,
=======
      script: 'scripts/pm2/git-workflow-automator.js',
      instances: 1,
>>>>>>> origin/main
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
<<<<<<< HEAD
        PM2_PROCESS_NAME: 'git-workflow',        AUTO_BRANCH_CLEANUP: 'true',
=======
        PM2_PROCESS_NAME: 'git-workflow',
        AUTO_BRANCH_CLEANUP: 'true',
>>>>>>> origin/main
        AUTO_MERGE_SAFE: 'true',
        CONFLICT_RESOLUTION: 'true',
        BRANCH_STRATEGY: 'gitflow',
      },
      cron_restart: '0 */6 * * *',
      log_file: 'logs/pm2/git-workflow.log',
      error_file: 'logs/pm2/git-workflow-error.log',
      out_file: 'logs/pm2/git-workflow-out.log',
    },
    {
      name: 'error-detection',
<<<<<<< HEAD
      script: 'scripts/pm2/error-detection-service.js',      instances: 1,
=======
      script: 'scripts/pm2/error-detection-service.js',
      instances: 1,
>>>>>>> origin/main
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
<<<<<<< HEAD
        PM2_PROCESS_NAME: 'error-detection',        AUTO_FIX_ENABLED: 'true',
=======
        PM2_PROCESS_NAME: 'error-detection',
        AUTO_FIX_ENABLED: 'true',
>>>>>>> origin/main
        MONITOR_FREQUENCY: '*/5 * * * *',
      },
      cron_restart: '*/5 * * * *',
      log_file: 'logs/pm2/error-detection.log',
      error_file: 'logs/pm2/error-detection-error.log',
      out_file: 'logs/pm2/error-detection-out.log',
    },
    {
      name: 'syntax-fixer',
<<<<<<< HEAD
      script: 'scripts/pm2/syntax-error-fixer.js',      instances: 1,
=======
      script: 'scripts/pm2/syntax-error-fixer.js',
      instances: 1,
>>>>>>> origin/main
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
<<<<<<< HEAD
        PM2_PROCESS_NAME: 'syntax-fixer',        AUTO_FIX_ENABLED: 'true',
=======
        PM2_PROCESS_NAME: 'syntax-fixer',
        AUTO_FIX_ENABLED: 'true',
>>>>>>> origin/main
        MONITOR_FREQUENCY: '*/10 * * * *',
      },
      cron_restart: '*/10 * * * *',
      log_file: 'logs/pm2/syntax-fixer.log',
      error_file: 'logs/pm2/syntax-fixer-error.log',
      out_file: 'logs/pm2/syntax-fixer-out.log',
    }
  ],
<<<<<<< HEAD
=======
module.exports = {
>>>>>>> origin/main
  apps: [{
    name: "ziontechgroup-site",

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

    time: true

<<<<<<< HEAD
}
=======



};


}


>>>>>>> origin/main
}
      },
      error_file: './logs/code-quality-error.log',
      out_file: './logs/code-quality-out.log',
      log_file: './logs/code-quality-combined.log',
      time: true
export default {
  apps: [
    // Zion Frontend - Development Environment
    {
      name: 'bolt-zion-app'
      script: 'npm'
      args: 'run preview'
      cwd: './'
      instances: '1'
      autorestart: 'true'
      watch: 'false'
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
<<<<<<< HEAD
=======module.exports = {
=======
module.exports = {
>>>>>>> origin/main
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
<<<<<<< HEAD

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
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '1G',
      error_file: './logs/frontend-error.log',
      out_file: './logs/frontend-out.log',
      log_file: './logs/frontend-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 4000,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 8000,
      source_map_support: true,
      node_args: '--inspect=0.0.0.0:9229'
    },

    // Zion Backend - Development Environment
    {
      name: 'zion-backend-dev',
      script: 'npm',
      args: 'run dev',
      cwd: './server',
      watch: ['src/**/*', 'tsconfig.json'],
      ignore_watch: ['node_modules', 'dist', '.git', '*.log'],
      env: {
        NODE_ENV: 'development',
        PORT: 5000,
        NODE_OPTIONS: '--max-old-space-size=2048'
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 5000,
        NODE_OPTIONS: '--max-old-space-size=4096'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '512M',
      error_file: '../logs/backend-error.log',
      out_file: '../logs/backend-out.log',
      log_file: '../logs/backend-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 4000,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 8000,
      source_map_support: true,
      node_args: '--inspect=0.0.0.0:9230'
    },

    // Production Frontend Server
    {
      name: 'zion-frontend-prod',
      script: 'npm',
      args: 'run start',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      log_file: 'logs / pm2 / preview.log',
      error_file: 'logs / pm2 / preview - error.log',
      out_file: 'logs / pm2 / preview - out.log',
=======
>>>>>>> origin/main
    },
    {
      name: 'performance-optimizer',
      script: 'automation/performance-optimizer.cjs',
      instances: 1,
      autorestart: true,
      max_memory_restart: '2G',
      error_file: './logs/frontend-prod-error.log',
      out_file: './logs/frontend-prod-out.log',
      log_file: './logs/frontend-prod-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '30s',
      max_restarts: 5,
      restart_delay: 10000,
      kill_timeout: 10000,
      wait_ready: true,
      listen_timeout: 15000
    },

    // Production Backend Server
    {
      name: 'zion-backend-prod',
      script: 'npm',
      args: 'start',
      cwd: './server',
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: 5000
      },
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      max_memory_restart: '1G',
      error_file: '../logs/backend-prod-error.log',
      out_file: '../logs/backend-prod-out.log',
      log_file: '../logs/backend-prod-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '30s',
      max_restarts: 5,
      restart_delay: 10000,
      kill_timeout: 10000,
      wait_ready: true,
      listen_timeout: 15000
    },

    // Development Monitor & Health Check
    {
      name: 'zion-monitor-dev',
      script: './scripts/pm2-monitor.js',
      cwd: './',
      watch: false,
      env: {
        NODE_ENV: 'development',
        MONITOR_INTERVAL: 30000,
        HEALTH_CHECK_ENDPOINTS: 'http://localhost:3000,http://localhost:5000/health'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '256M',
      error_file: './logs/monitor-error.log',
      out_file: './logs/monitor-out.log',
      log_file: './logs/monitor-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      min_uptime: '10s',
      max_restarts: 5,
      restart_delay: 5000
    },
    max_memory_restart: "1G",
    node_args: "--max-old-space-size=1024",
    error_file: "./logs/err.log",
    out_file: "./logs/out.log",
    log_file: "./logs/combined.log",
    time: true
  }]
<<<<<<< HEAD
};    node_args: "--max - old - space - size = 1024",
=======
};
    node_args: "--max - old - space - size = 1024",
>>>>>>> origin/main
    error_file: "./logs / err.log",
    out_file: "./logs / out.log",
    log_file: "./logs / combined.log",
    time: true;
  }];
}
;
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
      error_file: './logs/performance-error.log',
      out_file: './logs/performance-out.log',
      log_file: './logs/performance-combined.log',
      time: true
    }
  ]
},
    node_args: "--max-old-space-size=1024",
    error_file: "./logs/err.log",
    out_file: "./logs/out.log",
    log_file: "./logs/combined.log",
    time: true
  }]
};
>>>>>>> origin/main
