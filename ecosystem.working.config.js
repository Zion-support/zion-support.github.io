<<<<<<< HEAD
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],};
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
>>>>>>> main
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
      "name": 'simple-monitor',
      "script": 'node',
      "args": 'scripts/pm2/simple-monitor.js',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {
        NODE_ENV: 'production'
      },
      "log_file": 'logs/pm2/simple-monitor.log',
      "error_file": 'logs/pm2/simple-monitor-error.log',
      "out_file": 'logs/pm2/simple-monitor-out.log'},
    {
      "name": 'test-simple',
      "script": 'node',
      "args": 'test-simple.js',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '256M',
      "env": {
        NODE_ENV: 'production'
      },
      "log_file": 'logs/pm2/test-simple.log',
      "error_file": 'logs/pm2/test-simple-error.log',
      "out_file": 'logs/pm2/test-simple-out.log'}
  ]};
<<<<<<< HEAD
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],};
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],};
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],};
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],};
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],};
=======
<<<<<<< HEAD
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],};
=======
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],};
<<<<<<< HEAD
>>>>>>> origin/main
<<<<<<< HEAD
=======
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],};
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
=======
>>>>>>> main
>>>>>>> main
=======
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],};
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
