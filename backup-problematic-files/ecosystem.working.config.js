=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],}
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
=======
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],}
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
export default {
  "apps": [{
      name: 'bolt-zion-app'
      "script": 'npm'
      "args": 'run preview'
      "cwd": './'
      "instances": 1
      "autorestart": true
      "watch": false
      "max_memory_restart": '1G'
      "env": {
        NODE_ENV: 'production'}
      "log_file": 'logs/pm2/preview.log'
      "error_file": 'logs/pm2/preview-error.log'
      "out_file": 'logs/pm2/preview-out.log'}
    {
      "name": 'simple-monitor'
      "script": 'node'
      "args": 'scripts/pm2/simple-monitor.js'
      "instances": 1
      "autorestart": true
      "watch": false
      "max_memory_restart": '512M'
      "env": {
        NODE_ENV: 'production'
      }
      "log_file": 'logs/pm2/simple-monitor.log'
      "error_file": 'logs/pm2/simple-monitor-error.log'
      "out_file": 'logs/pm2/simple-monitor-out.log'}
    {
      "name": 'test-simple'
      "script": 'node'
      "args": 'test-simple.js'
      "instances": 1
      "autorestart": true
      "watch": false
      "max_memory_restart": '256M'
      "env": {
        NODE_ENV: 'production'
  ]};
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
=======
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],};
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],};
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],};
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
  ]}
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],}
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],}
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],}
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],}
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],}
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
