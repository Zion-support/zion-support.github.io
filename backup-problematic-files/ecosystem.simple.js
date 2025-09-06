<<<<<<< HEAD
ursor/integrate-build-improve-and-re-verify-8f7d
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/main
origin/automation-improvements-final
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
=======


>>>>>>> origin/automation-improvements-final
=======


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
module.exports = {
  apps: [;
    {

module && module.exports = {
  apps: [
    {
      name: "auto-fix",
      script: "scripts/pm2/auto-fix && fix.js",
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
<<<<<<< HEAD
        NODE_ENV: "production"
      }
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
      env: {
        NODE_ENV: "production"
      }
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
        NODE_ENV: "development",
        PM2_PROCESS_NAME: "code - quality - monitor",
        QUALITY_THRESHOLD: "80",
        AUTO_FIX_CRITICAL: "true",
      },

      log_file: "logs / pm2 / code - quality - monitor.log",
      error_file: "logs / pm2 / code - quality - monitor - error.log",
      out_file: "logs / pm2 / code - quality - monitor - out.log",
    },
  ],
<<<<<<< HEAD
};
origin/automation-improvements-final
=======
}
module.exports = {
  apps: [;
    {
      name: "auto - fix",
      script: "scripts / pm2 / auto - fix.js",

      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
      },

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
      env: {
        NODE_ENV: "production",
      },

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
        NODE_ENV: "development",
        PM2_PROCESS_NAME: "code - quality - monitor",
        QUALITY_THRESHOLD: "80",
        AUTO_FIX_CRITICAL: "true",
      },

      log_file: "logs / pm2 / code - quality - monitor.log",
      error_file: "logs / pm2 / code - quality - monitor - error.log",
      out_file: "logs / pm2 / code - quality - monitor - out.log",
    },
  ],
}
module.exports = {
  apps: [;
    {
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
        NODE_ENV: "development",
        PM2_PROCESS_NAME: "code - quality - monitor",
        QUALITY_THRESHOLD: "80",
        AUTO_FIX_CRITICAL: "true",
      },

      log_file: "logs / pm2 / code - quality - monitor.log",
      error_file: "logs / pm2 / code - quality - monitor - error.log",
      out_file: "logs / pm2 / code - quality - monitor - out.log",
    },
  ],
}
module.exports = {
  apps: [;
    {
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
        NODE_ENV: "development",
        PM2_PROCESS_NAME: "code - quality - monitor",
        QUALITY_THRESHOLD: "80",
        AUTO_FIX_CRITICAL: "true",
      },

      log_file: "logs / pm2 / code - quality - monitor.log",
      error_file: "logs / pm2 / code - quality - monitor - error.log",
      out_file: "logs / pm2 / code - quality - monitor - out.log",
    },
  ],
}
module.exports = {
  apps: [;
    {
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
        NODE_ENV: "development",
        PM2_PROCESS_NAME: "code - quality - monitor",
        QUALITY_THRESHOLD: "80",
        AUTO_FIX_CRITICAL: "true",
      },

      log_file: "logs / pm2 / code - quality - monitor.log",
      error_file: "logs / pm2 / code - quality - monitor - error.log",
      out_file: "logs / pm2 / code - quality - monitor - out.log",
    },
  ],
}
module.exports = {
  apps: [;
    {
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
        NODE_ENV: "development",
        PM2_PROCESS_NAME: "code - quality - monitor",
        QUALITY_THRESHOLD: "80",
        AUTO_FIX_CRITICAL: "true",
      },

      log_file: "logs / pm2 / code - quality - monitor.log",
      error_file: "logs / pm2 / code - quality - monitor - error.log",
      out_file: "logs / pm2 / code - quality - monitor - out.log",
    },
  ],
}
module.exports = {
  apps: [;
    {
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
      name: "auto-fix"
      script: "scripts/pm2/auto-fix.js"
      instances: 1
      autorestart: true
      watch: false
      max_memory_restart: "512M"
      env: {
        NODE_ENV: "production"
      }
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
      env: {
        NODE_ENV: "production"
      }
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


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
<<<<<<< HEAD
ursor/integrate-build-improve-and-re-verify-8f7d
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
ursor/fix-lint-push-and-merge-to-main-ae4e
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
=======



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
      env: {
        NODE_ENV: "production"
      }
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
      env: {
        NODE_ENV: "production"
      }
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
<<<<<<< HEAD
origin/automation-improvements-final
=======
=======


=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
      name: "auto-fix"
      script: "scripts/pm2/auto-fix.js"
      instances: 1
      autorestart: true
      watch: false
      max_memory_restart: "512M"
      env: {
        NODE_ENV: "production"
      }
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
      env: {
        NODE_ENV: "production"
      }
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

      log_file: "logs / pm2 / code - quality - monitor.log",
      error_file: "logs / pm2 / code - quality - monitor - error.log",
      out_file: "logs / pm2 / code - quality - monitor - out.log",
    },
  ],
}
<<<<<<< HEAD
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
origin/main
=======
;

=======


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
