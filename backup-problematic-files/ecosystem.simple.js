<<<<<<< HEAD:backup-problematic-files/ecosystem.simple.js
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/ecosystem.simple.js
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:ecosystem.simple.js
=======
module.exports = {
  apps: [;
    {
module && module.exports = {
  apps: [
    {
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: { NODE_ENV: "production" },
      log_file: "logs / pm2 / auto - fix.log",
      error_file: "logs / pm2 / auto - fix - error.log",
      out_file: "logs / pm2 / auto - fix - out.log",
    },
      name: "auto-fix"
      script: "scripts/pm2/auto-fix.js"
      instances: 1
      autorestart: true
      watch: false
      max_memory_restart: "512M"
      env: { NODE_ENV: "production" }
      log_file: "logs/pm2/auto-fix.log"
      error_file: "logs/pm2/auto-fix-error.log"
      out_file: "logs/pm2/auto-fix-out.log"
    }
    {
      name: "healthcheck"
      script: "scripts/pm2/healthcheck.js"
      instances: 1
      autorestart: true
      watch: false
      max_memory_restart: "128M"
      env: { NODE_ENV: "production" }
      log_file: "logs/pm2/health.log"
      error_file: "logs/pm2/health-error.log"
      out_file: "logs/pm2/health-out.log"
    }
    {
      name: "code-quality-monitor"
      script: "scripts/pm2/code-quality-monitor.js"
      instances: 1
      autorestart: true
      watch: false
      max_memory_restart: "1G"
      env: {
        NODE_ENV: "development"
        PM2_PROCESS_NAME: "code-quality-monitor"
        QUALITY_THRESHOLD: "80"
        AUTO_FIX_CRITICAL: "true"
      }
      log_file: "logs/pm2/code-quality-monitor.log"
      error_file: "logs/pm2/code-quality-monitor-error.log"
      out_file: "logs/pm2/code-quality-monitor-out.log"
    }
  ]
}
module.exports = {
  apps: [
    {
      name: "healthcheck",
      script: "scripts / pm2 / healthcheck.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "128M",
      env: { NODE_ENV: "production" },
      log_file: "logs / pm2 / health.log",
      error_file: "logs / pm2 / health - error.log",
      out_file: "logs / pm2 / health - out.log",
    },
    {
      name: "code - quality - monitor",
      script: "scripts / pm2 / code - quality - monitor.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development"
        PM2_PROCESS_NAME: "code-quality-monitor"
        QUALITY_THRESHOLD: "80"
        AUTO_FIX_CRITICAL: "true"
      }
      log_file: "logs/pm2/code-quality-monitor.log"
      error_file: "logs/pm2/code-quality-monitor-error.log"
      out_file: "logs/pm2/code-quality-monitor-out.log"
    }
  ]
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
module.exports = {
  apps: [
    {
      name: "auto-fix"
      script: "scripts/pm2/auto-fix.js"
      instances: 1
      autorestart: true
      watch: false
      max_memory_restart: "512M"
      env: { NODE_ENV: "production" }
      log_file: "logs/pm2/auto-fix.log"
      error_file: "logs/pm2/auto-fix-error.log"
      out_file: "logs/pm2/auto-fix-out.log"
    }
    {
      name: "healthcheck"
      script: "scripts/pm2/healthcheck.js"
      instances: 1
      autorestart: true
      watch: false
      max_memory_restart: "128M"
      env: { NODE_ENV: "production" }
      log_file: "logs/pm2/health.log"
      error_file: "logs/pm2/health-error.log"
      out_file: "logs/pm2/health-out.log"
    }
    {
      name: "code-quality-monitor"
      script: "scripts/pm2/code-quality-monitor.js"
      instances: 1
      autorestart: true
      watch: false
      max_memory_restart: "1G"
      env: {
        NODE_ENV: "development"
        PM2_PROCESS_NAME: "code-quality-monitor"
        QUALITY_THRESHOLD: "80"
        AUTO_FIX_CRITICAL: "true"
      }
      log_file: "logs/pm2/code-quality-monitor.log"
      error_file: "logs/pm2/code-quality-monitor-error.log"
      out_file: "logs/pm2/code-quality-monitor-out.log"
    }
  ]
}
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
module.exports = {
  apps: [;
    {

module && module.exports = {
  apps: [
    {
      name: "auto-fix",
      script: "scripts/pm2/auto-fix && fix.js",
      name: "auto - fix",
      script: "scripts / pm2 / auto - fix.js",

      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: { NODE_ENV: "production" },

      log_file: "logs / pm2 / auto - fix.log",
      error_file: "logs / pm2 / auto - fix - error.log",
      out_file: "logs / pm2 / auto - fix - out.log",
    },
    {
      name: "healthcheck",
      script: "scripts / pm2 / healthcheck.js",

      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "128M",
      env: { NODE_ENV: "production" },

      log_file: "logs / pm2 / health.log",
      error_file: "logs / pm2 / health - error.log",
      out_file: "logs / pm2 / health - out.log",
    },
    {
      name: "code - quality - monitor",
      script: "scripts / pm2 / code - quality - monitor.js",

      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {

      log_file: "logs / pm2 / code - quality - monitor.log",
      error_file: "logs / pm2 / code - quality - monitor - error.log",
      out_file: "logs / pm2 / code - quality - monitor - out.log",
    },
  ],

};

=======
module.exports = {
  apps: [
    {
      name: "auto-fix"
      script: "scripts/pm2/auto-fix.js"
      instances: 1
      autorestart: true
      watch: false
      max_memory_restart: "512M"
      env: { NODE_ENV: "production" }
      log_file: "logs/pm2/auto-fix.log"
      error_file: "logs/pm2/auto-fix-error.log"
      out_file: "logs/pm2/auto-fix-out.log"
    }
    {
      name: "healthcheck"
      script: "scripts/pm2/healthcheck.js"
      instances: 1
      autorestart: true
      watch: false
      max_memory_restart: "128M"
      env: { NODE_ENV: "production" }
      log_file: "logs/pm2/health.log"
      error_file: "logs/pm2/health-error.log"
      out_file: "logs/pm2/health-out.log"
    }
    {
      name: "code-quality-monitor"
      script: "scripts/pm2/code-quality-monitor.js"
      instances: 1
      autorestart: true
      watch: false
      max_memory_restart: "1G"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      env: {
        NODE_ENV: "development"
        PM2_PROCESS_NAME: "code-quality-monitor"
        QUALITY_THRESHOLD: "80"
        AUTO_FIX_CRITICAL: "true"
      }
      log_file: "logs/pm2/code-quality-monitor.log"
      error_file: "logs/pm2/code-quality-monitor-error.log"
      out_file: "logs/pm2/code-quality-monitor-out.log"
    }
  ]
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}
module.exports = {
  apps: [
    {
      name: "auto-fix"
      script: "scripts/pm2/auto-fix.js"
      instances: 1
      autorestart: true
      watch: false
      max_memory_restart: "512M"
<<<<<<< HEAD
      env: {
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
=======
      log_file: "logs / pm2 / code - quality - monitor.log",
      error_file: "logs / pm2 / code - quality - monitor - error.log",
      out_file: "logs / pm2 / code - quality - monitor - out.log",
    },
  ],
};
origin/automation-improvements-final
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
<<<<<<< HEAD:backup-problematic-files/ecosystem.simple.js
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
=======
<<<<<<< HEAD
>>>>>>> origin/main
<<<<<<< HEAD
=======
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
=======
>>>>>>> main
>>>>>>> main
=======
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:ecosystem.simple.js
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
      env: { NODE_ENV: "production" }
      log_file: "logs/pm2/auto-fix.log"
      error_file: "logs/pm2/auto-fix-error.log"
      out_file: "logs/pm2/auto-fix-out.log"
    }
    {
      name: "healthcheck"
      script: "scripts/pm2/healthcheck.js"
      instances: 1
      autorestart: true
      watch: false
      max_memory_restart: "128M"
      env: { NODE_ENV: "production" }
      log_file: "logs/pm2/health.log"
      error_file: "logs/pm2/health-error.log"
      out_file: "logs/pm2/health-out.log"
    }
    {
      name: "code-quality-monitor"
      script: "scripts/pm2/code-quality-monitor.js"
      instances: 1
      autorestart: true
      watch: false
      max_memory_restart: "1G"
      env: {
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
}
module.exports = {
  apps: [
    {
      env: {
        NODE_ENV: "development"
        PM2_PROCESS_NAME: "code-quality-monitor"
        QUALITY_THRESHOLD: "80"
        AUTO_FIX_CRITICAL: "true"
      }
      log_file: "logs/pm2/code-quality-monitor.log"
      error_file: "logs/pm2/code-quality-monitor-error.log"
      out_file: "logs/pm2/code-quality-monitor-out.log"
    }
  ]
}
        NODE_ENV: "development"
        PM2_PROCESS_NAME: "code-quality-monitor"
        QUALITY_THRESHOLD: "80"
        AUTO_FIX_CRITICAL: "true"
      }
      log_file: "logs/pm2/code-quality-monitor.log"
      error_file: "logs/pm2/code-quality-monitor-error.log"
      out_file: "logs/pm2/code-quality-monitor-out.log"
    }
  ]
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======



module.exports = {}
  "apps": [{}
      name: 'auto-fix','"
      "script": 'scripts/pm2/auto-fix.js',"
      "instances": 1,"
      "autorestart": true,"
      "watch": false,'"
      "max_memory_restart": '512M',"
      "env": {'
        NODE_ENV: 'production'
      },'"
      "log_file": 'logs/pm2/auto-fix.log','"
      "error_file": 'logs/pm2/auto-fix-error.log','"
      "out_file": 'logs/pm2/auto-fix-out.log'
    },
    {'"
      "name": 'healthcheck','"
      "script": 'scripts/pm2/healthcheck.js',"
      "instances": 1,"
      "autorestart": true,"
      "watch": false,'"
      "max_memory_restart": '128M',"
      "env": {'
        NODE_ENV: 'production'
      },'"
      "log_file": 'logs/pm2/health.log','"
      "error_file": 'logs/pm2/health-error.log','"
      "out_file": 'logs/pm2/health-out.log'
    },
    {'"
      "name": 'code-quality-monitor','"
      "script": 'scripts/pm2/code-quality-monitor.js',"
      "instances": 1,"
      "autorestart": true,"
      "watch": false,'"
      "max_memory_restart": '1G',"
      "env": {'
        NODE_ENV: 'development','"
        "PM2_PROCESS_NAME": 'code-quality-monitor','"
        "QUALITY_THRESHOLD": '80','"
        "AUTO_FIX_CRITICAL": 'true'
      },'"
      "log_file": 'logs/pm2/code-quality-monitor.log','"
      "error_file": 'logs/pm2/code-quality-monitor-error.log','"
      "out_file": 'logs/pm2/code-quality-monitor-out.log'
    }
  ]
};





'
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };




'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:ecosystem.simple.js
