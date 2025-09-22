<<<<<<< HEAD:backup-problematic-files/ecosystem.working.config.js
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/ecosystem.working.config.js
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
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:ecosystem.working.config.js
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export default {
  "apps": [{
<<<<<<< HEAD
      name: 'bolt-zion-app'
      "script": 'npm'
      "args": 'run preview'
      "cwd": './'
      "instances": 1
      "autorestart": true
      "watch": false
      "max_memory_restart": '1G'
<<<<<<< HEAD
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
      }
      "log_file": 'logs/pm2/test-simple.log'
      "error_file": 'logs/pm2/test-simple-error.log'
      "out_file": 'logs/pm2/test-simple-out.log'}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      },
      "log_file": 'logs/pm2/test-simple.log',
      "error_file": 'logs/pm2/test-simple-error.log',
      "out_file": 'logs/pm2/test-simple-out.log'};
<<<<<<< HEAD
  ]};
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],};
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],};
<<<<<<< HEAD:backup-problematic-files/ecosystem.working.config.js
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],};
=======
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
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:ecosystem.working.config.js
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],};
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],};
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],};
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],};
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],};
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],};
  // TODO: Implement
}
  "apps": [{""
      name: 'bolt-zion-app
      "script": 'npm
      "args": 'run preview
      "cwd": './
      "instances": 1;""
      "autorestart": true;""
      "watch": false;""
      "max_memory_restart": '1G
      },
      "log_file": 'logs/pm2/test-simple.log',
      "error_file": 'logs/pm2/test-simple-error.log',
      "out_file": 'logs/pm2/test-simple-out.log'};']
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],};
  ]}
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],}
<<<<<<< HEAD
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],}
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],}
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],}
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======




export default {}
  "apps": [{}
      name: 'bolt-zion-app','"
      "script": 'npm','"
      "args": 'run preview','"
      "cwd": './',"
      "instances": 1,"
      "autorestart": true,"
      "watch": false,'"
      "max_memory_restart": '1G',"
      "env": {'
        NODE_ENV: 'production'},'"
      "log_file": 'logs/pm2/preview.log','"
      "error_file": 'logs/pm2/preview-error.log','"
      "out_file": 'logs/pm2/preview-out.log'},
    {'"
      "name": 'simple-monitor','"
      "script": 'node','"
      "args": 'scripts/pm2/simple-monitor.js',"
      "instances": 1,"
      "autorestart": true,"
      "watch": false,'"
      "max_memory_restart": '512M',"
      "env": {'
        NODE_ENV: 'production'
      },'"
      "log_file": 'logs/pm2/simple-monitor.log','"
      "error_file": 'logs/pm2/simple-monitor-error.log','"
      "out_file": 'logs/pm2/simple-monitor-out.log'},
    {'"
      "name": 'test-simple','"
      "script": 'node','"
      "args": 'test-simple.js',"
      "instances": 1,"
      "autorestart": true,"
      "watch": false,'"
      "max_memory_restart": '256M',"
      "env": {'
        NODE_ENV: 'production'
      },'"
      "log_file": 'logs/pm2/test-simple.log','"
      "error_file": 'logs/pm2/test-simple-error.log','"
      "out_file": 'logs/pm2/test-simple-out.log'};
  ]};





'
export default { apps: [ { name: 'bolt-zion-app',script: 'npm',args: 'run preview',cwd: './',instances: 1,autorestart: true,watch: false,max_memory_restart: '1G',env: { NODE_ENV: 'production',},log_file: 'logs/pm2/preview.log',error_file: 'logs/pm2/preview-error.log',out_file: 'logs/pm2/preview-out.log',},{ name: 'simple-monitor',script: 'node',args: 'scripts/pm2/simple-monitor.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '512M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/simple-monitor.log',error_file: 'logs/pm2/simple-monitor-error.log',out_file: 'logs/pm2/simple-monitor-out.log',},{ name: 'test-simple',script: 'node',args: 'test-simple.js',instances: 1,autorestart: true,watch: false,max_memory_restart: '256M',env: { NODE_ENV: 'production' },log_file: 'logs/pm2/test-simple.log',error_file: 'logs/pm2/test-simple-error.log',out_file: 'logs/pm2/test-simple-out.log',} ],};




'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:ecosystem.working.config.js
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
