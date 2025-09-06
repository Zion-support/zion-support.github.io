<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

=======

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
module.exports = {;
=======
module && module.exports = {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  apps:[;
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
module.exports = {apps:[;




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    {;

      name:'error-fixer',;
      script:'automation/lint-error-fixer && fixer.cjs',;
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      args:'continuous',;
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'1G',;
      env:{;
        NODE_ENV:'production';
      },;
<<<<<<< HEAD
<<<<<<< HEAD
      error_file:'./logs/error-fixer-error && error.log',;
      out_file:'./logs/error-fixer-out && out.log',;
      log_file:'./logs/error-fixer-combined && combined.log',;
=======
      error_file:'./logs/error-fixer-error.log',;
      out_file:'./logs/error-fixer-out.log',;
      log_file:'./logs/error-fixer-combined.log',;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      error_file:'./logs/error-fixer-error && error.log',;
      out_file:'./logs/error-fixer-out && out.log',;
      log_file:'./logs/error-fixer-combined && combined.log',;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      time:true;
    },;
    {;
      name:'intelligent-orchestrator',;
<<<<<<< HEAD
<<<<<<< HEAD
      script:'automation/intelligent-orchestrator && orchestrator.cjs',;
=======
      script:'automation/intelligent-orchestrator.cjs',;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      script:'automation/intelligent-orchestrator && orchestrator.cjs',;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      args:'continuous',;
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'1G',;
      env:{;
        NODE_ENV:'production';
      },;
<<<<<<< HEAD
<<<<<<< HEAD
      error_file:'./logs/orchestrator-error && error.log',;
      out_file:'./logs/orchestrator-out && out.log',;
      log_file:'./logs/orchestrator-combined && combined.log',;
=======
      error_file:'./logs/orchestrator-error.log',;
      out_file:'./logs/orchestrator-out.log',;
      log_file:'./logs/orchestrator-combined.log',;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      error_file:'./logs/orchestrator-error && error.log',;
      out_file:'./logs/orchestrator-out && out.log',;
      log_file:'./logs/orchestrator-combined && combined.log',;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      time:true;
    },;
    {;
      name:'automation-dashboard',;
<<<<<<< HEAD
<<<<<<< HEAD
      script:'automation/automation-dashboard && dashboard.cjs',;
=======
      script:'automation/automation-dashboard.cjs',;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      script:'automation/automation-dashboard && dashboard.cjs',;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      args:'start',;
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'1G',;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

      env:{;
        NODE_ENV:'production';
        PORT:3001;

      },;
      error_file:'./logs/dashboard-error && error.log',;
      out_file:'./logs/dashboard-out && out.log',;
      log_file:'./logs/dashboard-combined && combined.log',;
<<<<<<< HEAD
=======
      env:{;
        NODE_ENV:'production',;
        PORT:3001;
      },;
      error_file:'./logs/dashboard-error.log',;
      out_file:'./logs/dashboard-out.log',;
      log_file:'./logs/dashboard-combined.log',;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      time:true;
    },;
    {;
      name:'code-quality-monitor',;
<<<<<<< HEAD
<<<<<<< HEAD
      script:'automation/code-quality-monitor && monitor.cjs',;
=======
      script:'automation/code-quality-monitor.cjs',;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      script:'automation/code-quality-monitor && monitor.cjs',;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'512M',;
      env:{;
        NODE_ENV:'production';
      },;
<<<<<<< HEAD
<<<<<<< HEAD
      error_file:'./logs/code-quality-error && error.log',;
      out_file:'./logs/code-quality-out && out.log',;
      log_file:'./logs/code-quality-combined && combined.log',;
=======
      error_file:'./logs/code-quality-error.log',;
      out_file:'./logs/code-quality-out.log',;
      log_file:'./logs/code-quality-combined.log',;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      error_file:'./logs/code-quality-error && error.log',;
      out_file:'./logs/code-quality-out && out.log',;
      log_file:'./logs/code-quality-combined && combined.log',;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      time:true;
    },;
    {;
      name:'performance-optimizer',;
<<<<<<< HEAD
<<<<<<< HEAD
      script:'automation/performance-optimizer && optimizer.cjs',;
=======
      script:'automation/performance-optimizer.cjs',;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      script:'automation/performance-optimizer && optimizer.cjs',;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'512M',;
      env:{;
        NODE_ENV:'production';
      },;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      error_file:'./logs/performance-error && error.log',;
      out_file:'./logs/performance-out && out.log',;
      log_file:'./logs/performance-combined && combined.log',;

<<<<<<< HEAD
=======
      error_file:'./logs/performance-error.log',;
      out_file:'./logs/performance-out.log',;
      log_file:'./logs/performance-combined.log',;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

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
      instances: 1,
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
      time: true
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
    node_args: "--max-old-space-size=1024",
    error_file: "./logs/err.log",
    out_file: "./logs/out.log",
    log_file: "./logs/combined.log",
    time: true
  }]
};
>>>>>>> main
=======
};
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-bf80
