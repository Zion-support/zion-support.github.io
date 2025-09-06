

=======


>>>>>>> origin/automation-improvements-final
=======



=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],}
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
export default { apps: [ { name: 'bolt - zion - app', script: 'npm', args: 'run preview', cwd: './', instances: 1, autorestart: true, watch: false, max_memory_restart: '1G', env: { NODE_ENV: 'production', }, log_file: 'logs / pm2 / preview.log', error_file: 'logs / pm2 / preview - error.log', out_file: 'logs / pm2 / preview - out.log', }, { name: 'simple - monitor', script: 'node', args: 'scripts / pm2 / simple - monitor.js', instances: 1, autorestart: true, watch: false, max_memory_restart: '512M', env: { NODE_ENV: 'production' }, log_file: 'logs / pm2 / simple - monitor.log', error_file: 'logs / pm2 / simple - monitor - error.log', out_file: 'logs / pm2 / simple - monitor - out.log', }, { name: 'test - simple', script: 'node', args: 'test - simple.js', instances: 1, autorestart: true, watch: false, max_memory_restart: '256M', env: { NODE_ENV: 'production' }, log_file: 'logs / pm2 / test - simple.log', error_file: 'logs / pm2 / test - simple - error.log', out_file: 'logs / pm2 / test - simple - out.log', } ], }
export default {
  "apps": [{
      name: 'bolt - zion - app',
      "script": 'npm',
      "args": 'run preview',
      "cwd": './',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======

      },
      "log_file": 'logs/pm2/test-simple.log',
      "error_file": 'logs/pm2/test-simple-error.log',
      "out_file": 'logs/pm2/test-simple-out.log'};

  ]};


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],};
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],};
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],};
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],};





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  ]}
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],}
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],}
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],}
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],}
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],}

        NODE_ENV: 'production'},

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
