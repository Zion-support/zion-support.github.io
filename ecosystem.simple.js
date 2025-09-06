<<<<<<< HEAD
<<<<<<< HEAD
=======
module.exports = {
  apps: [
    {
      name: "auto-fix",
      script: "scripts/pm2/auto-fix.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: { NODE_ENV: "production" },
      log_file: "logs/pm2/auto-fix.log",
      error_file: "logs/pm2/auto-fix-error.log",
      out_file: "logs/pm2/auto-fix-out.log",
    },
    {
      name: "healthcheck",
      script: "scripts/pm2/healthcheck.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "128M",
      env: { NODE_ENV: "production" },
      log_file: "logs/pm2/health.log",
      error_file: "logs/pm2/health-error.log",
      out_file: "logs/pm2/health-out.log",
    },
    {
      name: "code-quality-monitor",
      script: "scripts/pm2/code-quality-monitor.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PM2_PROCESS_NAME: "code-quality-monitor",
        QUALITY_THRESHOLD: "80",
        AUTO_FIX_CRITICAL: "true",
      },
      log_file: "logs/pm2/code-quality-monitor.log",
      error_file: "logs/pm2/code-quality-monitor-error.log",
      out_file: "logs/pm2/code-quality-monitor-out.log",
    },
  ],
};
module.exports = {
  apps: [
    {
      name: "auto-fix",
      script: "scripts/pm2/auto-fix.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
      },
      log_file: "logs/pm2/auto-fix.log",
      error_file: "logs/pm2/auto-fix-error.log",
      out_file: "logs/pm2/auto-fix-out.log",
    },
    {
      name: "healthcheck",
      script: "scripts/pm2/healthcheck.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "128M",
      env: {
        NODE_ENV: "production",
      },
      log_file: "logs/pm2/health.log",
      error_file: "logs/pm2/health-error.log",
      out_file: "logs/pm2/health-out.log",
    },
    {
      name: "code-quality-monitor",
      script: "scripts/pm2/code-quality-monitor.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PM2_PROCESS_NAME: "code-quality-monitor",
        QUALITY_THRESHOLD: "80",
        AUTO_FIX_CRITICAL: "true",
      },
      log_file: "logs/pm2/code-quality-monitor.log",
      error_file: "logs/pm2/code-quality-monitor-error.log",
      out_file: "logs/pm2/code-quality-monitor-out.log",
    },
  ],
};
module.exports = {
  apps: [
    {
      name: "auto-fix",
      script: "scripts/pm2/auto-fix.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: { NODE_ENV: "production" },
      log_file: "logs/pm2/auto-fix.log",
      error_file: "logs/pm2/auto-fix-error.log",
      out_file: "logs/pm2/auto-fix-out.log",
    },
    {
      name: "healthcheck",
      script: "scripts/pm2/healthcheck.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "128M",
      env: { NODE_ENV: "production" },
      log_file: "logs/pm2/health.log",
      error_file: "logs/pm2/health-error.log",
      out_file: "logs/pm2/health-out.log",
    },
    {
      name: "code-quality-monitor",
      script: "scripts/pm2/code-quality-monitor.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PM2_PROCESS_NAME: "code-quality-monitor",
        QUALITY_THRESHOLD: "80",
        AUTO_FIX_CRITICAL: "true",
      },
      log_file: "logs/pm2/code-quality-monitor.log",
      error_file: "logs/pm2/code-quality-monitor-error.log",
      out_file: "logs/pm2/code-quality-monitor-out.log",
    },
  ],
};
module.exports = {
  apps: [
    {
      name: "auto-fix",
      script: "scripts/pm2/auto-fix.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: { NODE_ENV: "production" },
      log_file: "logs/pm2/auto-fix.log",
      error_file: "logs/pm2/auto-fix-error.log",
      out_file: "logs/pm2/auto-fix-out.log",
    },
    {
      name: "healthcheck",
      script: "scripts/pm2/healthcheck.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "128M",
      env: { NODE_ENV: "production" },
      log_file: "logs/pm2/health.log",
      error_file: "logs/pm2/health-error.log",
      out_file: "logs/pm2/health-out.log",
    },
    {
      name: "code-quality-monitor",
      script: "scripts/pm2/code-quality-monitor.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PM2_PROCESS_NAME: "code-quality-monitor",
        QUALITY_THRESHOLD: "80",
        AUTO_FIX_CRITICAL: "true",
      },
      log_file: "logs/pm2/code-quality-monitor.log",
      error_file: "logs/pm2/code-quality-monitor-error.log",
      out_file: "logs/pm2/code-quality-monitor-out.log",
    },
  ],
};
module.exports = {
  apps: [
    {
      name: "auto-fix",
      script: "scripts/pm2/auto-fix.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: { NODE_ENV: "production" },
      log_file: "logs/pm2/auto-fix.log",
      error_file: "logs/pm2/auto-fix-error.log",
      out_file: "logs/pm2/auto-fix-out.log",
    },
    {
      name: "healthcheck",
      script: "scripts/pm2/healthcheck.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "128M",
      env: { NODE_ENV: "production" },
      log_file: "logs/pm2/health.log",
      error_file: "logs/pm2/health-error.log",
      out_file: "logs/pm2/health-out.log",
    },
    {
      name: "code-quality-monitor",
      script: "scripts/pm2/code-quality-monitor.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PM2_PROCESS_NAME: "code-quality-monitor",
        QUALITY_THRESHOLD: "80",
        AUTO_FIX_CRITICAL: "true",
      },
      log_file: "logs/pm2/code-quality-monitor.log",
      error_file: "logs/pm2/code-quality-monitor-error.log",
      out_file: "logs/pm2/code-quality-monitor-out.log",
    },
  ],
};
module.exports = {
  apps: [
    {
      name: "auto-fix",
      script: "scripts/pm2/auto-fix.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: { NODE_ENV: "production" },
      log_file: "logs/pm2/auto-fix.log",
      error_file: "logs/pm2/auto-fix-error.log",
      out_file: "logs/pm2/auto-fix-out.log",
    },
    {
      name: "healthcheck",
      script: "scripts/pm2/healthcheck.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "128M",
      env: { NODE_ENV: "production" },
      log_file: "logs/pm2/health.log",
      error_file: "logs/pm2/health-error.log",
      out_file: "logs/pm2/health-out.log",
    },
    {
      name: "code-quality-monitor",
      script: "scripts/pm2/code-quality-monitor.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PM2_PROCESS_NAME: "code-quality-monitor",
        QUALITY_THRESHOLD: "80",
        AUTO_FIX_CRITICAL: "true",
      },
      log_file: "logs/pm2/code-quality-monitor.log",
      error_file: "logs/pm2/code-quality-monitor-error.log",
      out_file: "logs/pm2/code-quality-monitor-out.log",
    },
  ],
};
module.exports = {
  apps: [
    {
      name: "auto-fix",
      script: "scripts/pm2/auto-fix.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: { NODE_ENV: "production" },
      log_file: "logs/pm2/auto-fix.log",
      error_file: "logs/pm2/auto-fix-error.log",
      out_file: "logs/pm2/auto-fix-out.log",
    },
    {
      name: "healthcheck",
      script: "scripts/pm2/healthcheck.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "128M",
      env: { NODE_ENV: "production" },
      log_file: "logs/pm2/health.log",
      error_file: "logs/pm2/health-error.log",
      out_file: "logs/pm2/health-out.log",
    },
    {
      name: "code-quality-monitor",
      script: "scripts/pm2/code-quality-monitor.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PM2_PROCESS_NAME: "code-quality-monitor",
        QUALITY_THRESHOLD: "80",
        AUTO_FIX_CRITICAL: "true",
      },
      log_file: "logs/pm2/code-quality-monitor.log",
      error_file: "logs/pm2/code-quality-monitor-error.log",
      out_file: "logs/pm2/code-quality-monitor-out.log",
    },
  ],
};
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
module.exports = {
  "apps": [{
      name: 'auto-fix',
      "script": 'scripts/pm2/auto-fix.js',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {
        NODE_ENV: 'production'
      },
      "log_file": 'logs/pm2/auto-fix.log',
      "error_file": 'logs/pm2/auto-fix-error.log',
      "out_file": 'logs/pm2/auto-fix-out.log'
    },
    {
      "name": 'healthcheck',
      "script": 'scripts/pm2/healthcheck.js',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '128M',
      "env": {
        NODE_ENV: 'production'
      },
      "log_file": 'logs/pm2/health.log',
      "error_file": 'logs/pm2/health-error.log',
      "out_file": 'logs/pm2/health-out.log'
    },
    {
      "name": 'code-quality-monitor',
      "script": 'scripts/pm2/code-quality-monitor.js',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {
        NODE_ENV: 'development',
        "PM2_PROCESS_NAME": 'code-quality-monitor',
        "QUALITY_THRESHOLD": '80',
        "AUTO_FIX_CRITICAL": 'true'
      },
      "log_file": 'logs/pm2/code-quality-monitor.log',
      "error_file": 'logs/pm2/code-quality-monitor-error.log',
      "out_file": 'logs/pm2/code-quality-monitor-out.log'
    }
  ]
};
<<<<<<< HEAD
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
=======
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
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
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
=======
module.exports = {
  apps: [
    {
      name: "auto-fix",
      script: "scripts/pm2/auto-fix.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: { NODE_ENV: "production" },
      log_file: "logs/pm2/auto-fix.log",
      error_file: "logs/pm2/auto-fix-error.log",
      out_file: "logs/pm2/auto-fix-out.log",
    },
    {
      name: "healthcheck",
      script: "scripts/pm2/healthcheck.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "128M",
      env: { NODE_ENV: "production" },
      log_file: "logs/pm2/health.log",
      error_file: "logs/pm2/health-error.log",
      out_file: "logs/pm2/health-out.log",
    },
    {
      name: "code-quality-monitor",
      script: "scripts/pm2/code-quality-monitor.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PM2_PROCESS_NAME: "code-quality-monitor",
        QUALITY_THRESHOLD: "80",
        AUTO_FIX_CRITICAL: "true",
      },
      log_file: "logs/pm2/code-quality-monitor.log",
      error_file: "logs/pm2/code-quality-monitor-error.log",
      out_file: "logs/pm2/code-quality-monitor-out.log",
    },
  ],
};
module.exports = {
  apps: [
    {
      name: "auto-fix",
      script: "scripts/pm2/auto-fix.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
      },
      log_file: "logs/pm2/auto-fix.log",
      error_file: "logs/pm2/auto-fix-error.log",
      out_file: "logs/pm2/auto-fix-out.log",
    },
    {
      name: "healthcheck",
      script: "scripts/pm2/healthcheck.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "128M",
      env: {
        NODE_ENV: "production",
      },
      log_file: "logs/pm2/health.log",
      error_file: "logs/pm2/health-error.log",
      out_file: "logs/pm2/health-out.log",
    },
    {
      name: "code-quality-monitor",
      script: "scripts/pm2/code-quality-monitor.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PM2_PROCESS_NAME: "code-quality-monitor",
        QUALITY_THRESHOLD: "80",
        AUTO_FIX_CRITICAL: "true",
      },
      log_file: "logs/pm2/code-quality-monitor.log",
      error_file: "logs/pm2/code-quality-monitor-error.log",
      out_file: "logs/pm2/code-quality-monitor-out.log",
    },
  ],
};
module.exports = {
  apps: [
    {
      name: "auto-fix",
      script: "scripts/pm2/auto-fix.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: { NODE_ENV: "production" },
      log_file: "logs/pm2/auto-fix.log",
      error_file: "logs/pm2/auto-fix-error.log",
      out_file: "logs/pm2/auto-fix-out.log",
    },
    {
      name: "healthcheck",
      script: "scripts/pm2/healthcheck.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "128M",
      env: { NODE_ENV: "production" },
      log_file: "logs/pm2/health.log",
      error_file: "logs/pm2/health-error.log",
      out_file: "logs/pm2/health-out.log",
    },
    {
      name: "code-quality-monitor",
      script: "scripts/pm2/code-quality-monitor.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PM2_PROCESS_NAME: "code-quality-monitor",
        QUALITY_THRESHOLD: "80",
        AUTO_FIX_CRITICAL: "true",
      },
      log_file: "logs/pm2/code-quality-monitor.log",
      error_file: "logs/pm2/code-quality-monitor-error.log",
      out_file: "logs/pm2/code-quality-monitor-out.log",
    },
  ],
};
module.exports = {
  apps: [
    {
      name: "auto-fix",
      script: "scripts/pm2/auto-fix.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: { NODE_ENV: "production" },
      log_file: "logs/pm2/auto-fix.log",
      error_file: "logs/pm2/auto-fix-error.log",
      out_file: "logs/pm2/auto-fix-out.log",
    },
    {
      name: "healthcheck",
      script: "scripts/pm2/healthcheck.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "128M",
      env: { NODE_ENV: "production" },
      log_file: "logs/pm2/health.log",
      error_file: "logs/pm2/health-error.log",
      out_file: "logs/pm2/health-out.log",
    },
    {
      name: "code-quality-monitor",
      script: "scripts/pm2/code-quality-monitor.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PM2_PROCESS_NAME: "code-quality-monitor",
        QUALITY_THRESHOLD: "80",
        AUTO_FIX_CRITICAL: "true",
      },
      log_file: "logs/pm2/code-quality-monitor.log",
      error_file: "logs/pm2/code-quality-monitor-error.log",
      out_file: "logs/pm2/code-quality-monitor-out.log",
    },
  ],
};
module.exports = {
  apps: [
    {
      name: "auto-fix",
      script: "scripts/pm2/auto-fix.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: { NODE_ENV: "production" },
      log_file: "logs/pm2/auto-fix.log",
      error_file: "logs/pm2/auto-fix-error.log",
      out_file: "logs/pm2/auto-fix-out.log",
    },
    {
      name: "healthcheck",
      script: "scripts/pm2/healthcheck.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "128M",
      env: { NODE_ENV: "production" },
      log_file: "logs/pm2/health.log",
      error_file: "logs/pm2/health-error.log",
      out_file: "logs/pm2/health-out.log",
    },
    {
      name: "code-quality-monitor",
      script: "scripts/pm2/code-quality-monitor.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PM2_PROCESS_NAME: "code-quality-monitor",
        QUALITY_THRESHOLD: "80",
        AUTO_FIX_CRITICAL: "true",
      },
      log_file: "logs/pm2/code-quality-monitor.log",
      error_file: "logs/pm2/code-quality-monitor-error.log",
      out_file: "logs/pm2/code-quality-monitor-out.log",
    },
  ],
};
module.exports = {
  apps: [
    {
      name: "auto-fix",
      script: "scripts/pm2/auto-fix.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: { NODE_ENV: "production" },
      log_file: "logs/pm2/auto-fix.log",
      error_file: "logs/pm2/auto-fix-error.log",
      out_file: "logs/pm2/auto-fix-out.log",
    },
    {
      name: "healthcheck",
      script: "scripts/pm2/healthcheck.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "128M",
      env: { NODE_ENV: "production" },
      log_file: "logs/pm2/health.log",
      error_file: "logs/pm2/health-error.log",
      out_file: "logs/pm2/health-out.log",
    },
    {
      name: "code-quality-monitor",
      script: "scripts/pm2/code-quality-monitor.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PM2_PROCESS_NAME: "code-quality-monitor",
        QUALITY_THRESHOLD: "80",
        AUTO_FIX_CRITICAL: "true",
      },
      log_file: "logs/pm2/code-quality-monitor.log",
      error_file: "logs/pm2/code-quality-monitor-error.log",
      out_file: "logs/pm2/code-quality-monitor-out.log",
    },
  ],
};
module.exports = {
  apps: [
    {
      name: "auto-fix",
      script: "scripts/pm2/auto-fix.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: { NODE_ENV: "production" },
      log_file: "logs/pm2/auto-fix.log",
      error_file: "logs/pm2/auto-fix-error.log",
      out_file: "logs/pm2/auto-fix-out.log",
    },
    {
      name: "healthcheck",
      script: "scripts/pm2/healthcheck.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "128M",
      env: { NODE_ENV: "production" },
      log_file: "logs/pm2/health.log",
      error_file: "logs/pm2/health-error.log",
      out_file: "logs/pm2/health-out.log",
    },
    {
      name: "code-quality-monitor",
      script: "scripts/pm2/code-quality-monitor.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PM2_PROCESS_NAME: "code-quality-monitor",
        QUALITY_THRESHOLD: "80",
        AUTO_FIX_CRITICAL: "true",
      },
      log_file: "logs/pm2/code-quality-monitor.log",
      error_file: "logs/pm2/code-quality-monitor-error.log",
      out_file: "logs/pm2/code-quality-monitor-out.log",
    },
  ],
};
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
