
      args:'continuous',;
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'1G',;
      env:{;
        NODE_ENV:'production';
      },;

      time:true;
    },;
    {;
      name:'intelligent-orchestrator',;

      args:'continuous',;
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'1G',;
      env:{;
        NODE_ENV:'production';
      },;

      time:true;
    },;
    {;
      name:'automation-dashboard',;

      args:'start',;
      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'1G',;
      env:{;
        NODE_ENV:'production',;
        PORT:3001;
      },;

      time:true;
    },;
    {;
      name:'code-quality-monitor',;

      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'512M',;
      env:{;
        NODE_ENV:'production';
      },;

      time:true;
    },;
    {;
      name:'performance-optimizer',;

      instances:1,;
      autorestart:true,;
      watch:false,;
      max_memory_restart:'512M',;
      env:{;
        NODE_ENV:'production';
      },;

      time:true;
    }
  ];
};      env: {
        NODE_ENV: 'production'
      },

