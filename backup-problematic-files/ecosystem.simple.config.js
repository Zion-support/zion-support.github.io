>>>>>>> main
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:ecosystem.simple.config.js
export default {
  "apps": [{
      name: 'bolt-zion-app',
      "script": 'npm',
      "args": 'run preview',
      "cwd": './',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {
        NODE_ENV: 'production'},
      "log_file": 'logs/pm2/preview.log',
      "error_file": 'logs/pm2/preview-error.log',
      "out_file": 'logs/pm2/preview-out.log'},
    {
      "name": 'auto-fix',
      "script": 'node',
      "args": 'scripts/pm2/auto-fix.js',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {
        NODE_ENV: 'production'
      },
      "log_file": 'logs/pm2/auto-fix.log',
      "error_file": 'logs/pm2/auto-fix-error.log',
      "out_file": 'logs/pm2/auto-fix-out.log'},
    {
      "name": 'healthcheck',
      "script": 'node',
      "args": 'scripts/pm2/healthcheck.js',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '128M',
      "env": {
        NODE_ENV: 'production'
      },
      "log_file": 'logs/pm2/health.log',
      "error_file": 'logs/pm2/health-error.log',
      "out_file": 'logs/pm2/health-out.log'},
    {
      "name": 'code-quality-monitor',
      "script": 'node',
      "args": 'scripts/pm2/code-quality-monitor.js',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {
        NODE_ENV: 'development',
        "PM2_PROCESS_NAME": 'code-quality-monitor',
        "QUALITY_THRESHOLD": '80',
        "AUTO_FIX_CRITICAL": 'true'},
      "log_file": 'logs/pm2/code-quality-monitor.log',
      "error_file": 'logs/pm2/code-quality-monitor-error.log',
      "out_file": 'logs/pm2/code-quality-monitor-out.log'},
    {
      "name": 'performance-monitor',
      "script": 'node',
      "args": 'scripts/pm2/performance-monitor.js',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {
        NODE_ENV: 'development',
        "PM2_PROCESS_NAME": 'performance-monitor',
        "PERFORMANCE_THRESHOLD": '3000',
        "BUNDLE_SIZE_LIMIT": '2MB'},
      "log_file": 'logs/pm2/performance-monitor.log',
      "error_file": 'logs/pm2/performance-monitor-error.log',
      "out_file": 'logs/pm2/performance-monitor-out.log'}
  ]};
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'auto-fix',script: 'node',args: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log',},{ name: 'healthcheck',script: 'node',args: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log',},{ name: 'code-quality-monitor',script: 'node',args: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true',},log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log',},{ name: 'performance-monitor',script: 'node',args: 'scripts/pm2/performance-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'performance-monitor',PERFORMANCE_THRESHOLD: '3000',BUNDLE_SIZE_LIMIT: '2MB',},log_file: 'logs/pm2/performance-monitor.log',error_file: 'logs/pm2/performance-monitor-error.log',out_file: 'logs/pm2/performance-monitor-out.log',} ],};
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'auto-fix',script: 'node',args: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log',},{ name: 'healthcheck',script: 'node',args: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log',},{ name: 'code-quality-monitor',script: 'node',args: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true',},log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log',},{ name: 'performance-monitor',script: 'node',args: 'scripts/pm2/performance-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'performance-monitor',PERFORMANCE_THRESHOLD: '3000',BUNDLE_SIZE_LIMIT: '2MB',},log_file: 'logs/pm2/performance-monitor.log',error_file: 'logs/pm2/performance-monitor-error.log',out_file: 'logs/pm2/performance-monitor-out.log',} ],};
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'auto-fix',script: 'node',args: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log',},{ name: 'healthcheck',script: 'node',args: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log',},{ name: 'code-quality-monitor',script: 'node',args: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true',},log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log',},{ name: 'performance-monitor',script: 'node',args: 'scripts/pm2/performance-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'performance-monitor',PERFORMANCE_THRESHOLD: '3000',BUNDLE_SIZE_LIMIT: '2MB',},log_file: 'logs/pm2/performance-monitor.log',error_file: 'logs/pm2/performance-monitor-error.log',out_file: 'logs/pm2/performance-monitor-out.log',} ],};
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
>>>>>>> main
>>>>>>> main
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:ecosystem.simple.config.js
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'auto-fix',script: 'node',args: 'scripts/pm2/auto-fix.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/auto-fix.log',error_file: 'logs/pm2/auto-fix-error.log',out_file: 'logs/pm2/auto-fix-out.log',},{ name: 'healthcheck',script: 'node',args: 'scripts/pm2/healthcheck.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '128M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/health.log',error_file: 'logs/pm2/health-error.log',out_file: 'logs/pm2/health-out.log',},{ name: 'code-quality-monitor',script: 'node',args: 'scripts/pm2/code-quality-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'code-quality-monitor',QUALITY_THRESHOLD: '80',AUTO_FIX_CRITICAL: 'true',},log_file: 'logs/pm2/code-quality-monitor.log',error_file: 'logs/pm2/code-quality-monitor-error.log',out_file: 'logs/pm2/code-quality-monitor-out.log',},{ name: 'performance-monitor',script: 'node',args: 'scripts/pm2/performance-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'development',PM2_PROCESS_NAME: 'performance-monitor',PERFORMANCE_THRESHOLD: '3000',BUNDLE_SIZE_LIMIT: '2MB',},log_file: 'logs/pm2/performance-monitor.log',error_file: 'logs/pm2/performance-monitor-error.log',out_file: 'logs/pm2/performance-monitor-out.log',} ],};
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
