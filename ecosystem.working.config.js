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
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],};
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
