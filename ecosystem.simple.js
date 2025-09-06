<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> origin/main
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
=======
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
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
<<<<<<< HEAD
>>>>>>> origin/main
=======
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
module.exports = { apps: [ { name: 'auto-fix',script: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log' },{ name: 'healthcheck',script: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log' },{ name: 'code-quality-monitor',script: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true' },log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log' } ] };
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
>>>>>>> origin/main
