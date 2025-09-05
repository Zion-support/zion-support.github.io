<<<<<<< HEAD
module.exports = {;
  apps:[;
    {;
      name:'error-fixer',;
      script:'automation/lint-error-fixer.cjs',;
      args:'continuous',;
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'1G',;
      env:{;
        NODE_ENV:'production';
      },;
      error_file:'./logs/error-fixer-error.log',;
      out_file:'./logs/error-fixer-out.log',;
      log_file:'./logs/error-fixer-combined.log',;
      time:true;
    },;
    {;
      name:'intelligent-orchestrator',;
      script:'automation/intelligent-orchestrator.cjs',;
      args:'continuous',;
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'1G',;
      env:{;
        NODE_ENV:'production';
      },;
      error_file:'./logs/orchestrator-error.log',;
      out_file:'./logs/orchestrator-out.log',;
      log_file:'./logs/orchestrator-combined.log',;
      time:true;
    },;
    {;
      name:'automation-dashboard',;
      script:'automation/automation-dashboard.cjs',;
      args:'start',;
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'1G',;
      env:{;
        NODE_ENV:'production',;
        PORT:3001;
      },;
      error_file:'./logs/dashboard-error.log',;
      out_file:'./logs/dashboard-out.log',;
      log_file:'./logs/dashboard-combined.log',;
      time:true;
    },;
    {;
      name:'code-quality-monitor',;
      script:'automation/code-quality-monitor.cjs',;
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'512M',;
      env:{;
        NODE_ENV:'production';
      },;
      error_file:'./logs/code-quality-error.log',;
      out_file:'./logs/code-quality-out.log',;
      log_file:'./logs/code-quality-combined.log',;
      time:true;
    },;
    {;
      name:'performance-optimizer',;
      script:'automation/performance-optimizer.cjs',;
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'512M',;
      env:{;
        NODE_ENV:'production';
      },;
      error_file:'./logs/performance-error.log',;
      out_file:'./logs/performance-out.log',;
      log_file:'./logs/performance-combined.log',;
      time:true;
    }
  ];
};
=======
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
},
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
