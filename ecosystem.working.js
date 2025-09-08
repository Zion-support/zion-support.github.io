<<<<<<< HEAD
=======
module.exports = {
>>>>>>> origin/main
  "apps": [// Main application
    {
      name: 'zion-app',
      "script": 'npm',
      "args": 'start',
      "cwd": './',
      "instances": 1,
      "exec_mode": 'fork',
      "env": {
        NODE_ENV: 'production',
        "PORT": 3000
      },
      "env_development": {
        NODE_ENV: 'development',
        "PORT": 3000
      },
      "watch": false,
      "ignore_watch": ['node_modules', 'logs', '*.log'],
      "max_memory_restart": '1G',
      "error_file": './logs/err.log',
      "out_file": './logs/out.log',
      "log_file": './logs/combined.log',
      "time": true,
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z',
      "merge_logs": true,
      "max_restarts": 10,
      "min_uptime": '10s',
      "restart_delay": 4000,
      "kill_timeout": 5000,
      "wait_ready": true,
      "listen_timeout": 8000,
      "kill_retry_time": 100
    },
    // Development server
    {
      "name": 'zion-dev',
      "script": 'npm',
      "args": 'run dev',
      "cwd": './',
      "instances": 1,
      "exec_mode": 'fork',
      "env": {
        NODE_ENV: 'development',
        "PORT": 3000
      },
      "watch": true,
      "ignore_watch": ['node_modules', 'logs', '*.log', '.next'],
      "max_memory_restart": '512M',
      "error_file": './logs/dev-err.log',
      "out_file": './logs/dev-out.log',
      "log_file": './logs/dev-combined.log',
      "time": true,
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z',
      "merge_logs": true,
      "max_restarts": 5,
      "min_uptime": '5s',
      "restart_delay": 2000
    },
    // Build process
    {
      "name": 'zion-build',
      "script": 'npm',
      "args": 'run build',
      "cwd": './',
      "instances": 1,
      "exec_mode": 'fork',
      "env": {
        NODE_ENV: 'production'
      },
      "watch": false,
      "max_memory_restart": '2G',
      "error_file": './logs/build-err.log',
      "out_file": './logs/build-out.log',
      "log_file": './logs/build-combined.log',
      "time": true,
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z',
      "merge_logs": true,
      "max_restarts": 3,
      "min_uptime": '30s',
      "restart_delay": 5000
    },
    // Linting process
    {
      "name": 'zion-lint',
      "script": 'npm',
      "args": 'run lint',
      "cwd": './',
      "instances": 1,
      "exec_mode": 'fork',
      "env": {
        NODE_ENV: 'development'
      },
      "watch": false,
      "max_memory_restart": '256M',
      "error_file": './logs/lint-err.log',
      "out_file": './logs/lint-out.log',
      "log_file": './logs/lint-combined.log',
      "time": true,
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z',
      "merge_logs": true,
      "max_restarts": 2,
      "min_uptime": '5s',
      "restart_delay": 1000
    },
    // Testing process
    {
      "name": 'zion-test',
      "script": 'npm',
      "args": 'test',
      "cwd": './',
      "instances": 1,
      "exec_mode": 'fork',
      "env": {
        NODE_ENV: 'test'
      },
      "watch": false,
      "max_memory_restart": '512M',
      "error_file": './logs/test-err.log',
      "out_file": './logs/test-out.log',
      "log_file": './logs/test-combined.log',
      "time": true,
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z',
      "merge_logs": true,
      "max_restarts": 3,
      "min_uptime": '10s',
      "restart_delay": 2000
    }
  ],
  "deploy": {
    production: {
      user: 'ubuntu',
      "host": 'your-server.com',
      "ref": 'origin/main',
      "repo": 'git@github.com:your-username/your-repo.git',
      "path": '/var/www/zion-app',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    },
    "staging": {
      user: 'ubuntu',
      "host": 'staging-server.com',
      "ref": 'origin/develop',
      "repo": 'git@github.com:your-username/your-repo.git',
      "path": '/var/www/zion-app-staging',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env staging',
      'pre-setup': ''
    }
  }
};
<<<<<<< HEAD
module.exports = { apps: [ { name: 'zion-app',script: 'npm',args: 'start',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production',PORT: 3000 },env_development: { NODE_ENV: 'development',PORT: 3000 },watch: false,ignore_watch: ['node_modules','logs','*.log'],max_memory_restart: '1G',error_file: './logs/err.log',out_file: './logs/out.log',log_file: './logs/combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 10,min_uptime: '10s',restart_delay: 4000,kill_timeout: 5000,wait_ready: true,listen_timeout: 8000,kill_retry_time: 100 },{ name: 'zion-dev',script: 'npm',args: 'run dev',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development',PORT: 3000 },watch: true,ignore_watch: ['node_modules','logs','*.log','.next'],max_memory_restart: '512M',error_file: './logs/dev-err.log',out_file: './logs/dev-out.log',log_file: './logs/dev-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 5,min_uptime: '5s',restart_delay: 2000 },{ name: 'zion-build',script: 'npm',args: 'run build',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production' },watch: false,max_memory_restart: '2G',error_file: './logs/build-err.log',out_file: './logs/build-out.log',log_file: './logs/build-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '30s',restart_delay: 5000 },{ name: 'zion-lint',script: 'npm',args: 'run lint',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development' },watch: false,max_memory_restart: '256M',error_file: './logs/lint-err.log',out_file: './logs/lint-out.log',log_file: './logs/lint-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 2,min_uptime: '5s',restart_delay: 1000 },{ name: 'zion-test',script: 'npm',args: 'test',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'test' },watch: false,max_memory_restart: '512M',error_file: './logs/test-err.log',out_file: './logs/test-out.log',log_file: './logs/test-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '10s',restart_delay: 2000 } ],deploy: { production: { user: 'ubuntu',host: 'your-server.com',ref: 'origin/main',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production','pre-setup': '' },staging: { user: 'ubuntu',host: 'staging-server.com',ref: 'origin/develop',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app-staging','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env staging','pre-setup': '' } } };module.exports = { apps: [ { name: 'zion-app',script: 'npm',args: 'start',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production',PORT: 3000 },env_development: { NODE_ENV: 'development',PORT: 3000 },watch: false,ignore_watch: ['node_modules','logs','*.log'],max_memory_restart: '1G',error_file: './logs/err.log',out_file: './logs/out.log',log_file: './logs/combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 10,min_uptime: '10s',restart_delay: 4000,kill_timeout: 5000,wait_ready: true,listen_timeout: 8000,kill_retry_time: 100 },{ name: 'zion-dev',script: 'npm',args: 'run dev',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development',PORT: 3000 },watch: true,ignore_watch: ['node_modules','logs','*.log','.next'],max_memory_restart: '512M',error_file: './logs/dev-err.log',out_file: './logs/dev-out.log',log_file: './logs/dev-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 5,min_uptime: '5s',restart_delay: 2000 },{ name: 'zion-build',script: 'npm',args: 'run build',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production' },watch: false,max_memory_restart: '2G',error_file: './logs/build-err.log',out_file: './logs/build-out.log',log_file: './logs/build-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '30s',restart_delay: 5000 },{ name: 'zion-lint',script: 'npm',args: 'run lint',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development' },watch: false,max_memory_restart: '256M',error_file: './logs/lint-err.log',out_file: './logs/lint-out.log',log_file: './logs/lint-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 2,min_uptime: '5s',restart_delay: 1000 },{ name: 'zion-test',script: 'npm',args: 'test',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'test' },watch: false,max_memory_restart: '512M',error_file: './logs/test-err.log',out_file: './logs/test-out.log',log_file: './logs/test-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '10s',restart_delay: 2000 } ],deploy: { production: { user: 'ubuntu',host: 'your-server.com',ref: 'origin/main',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production','pre-setup': '' },staging: { user: 'ubuntu',host: 'staging-server.com',ref: 'origin/develop',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app-staging','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env staging','pre-setup': '' } } };
=======
module.exports = { apps: [ { name: 'zion-app',script: 'npm',args: 'start',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production',PORT: 3000 },env_development: { NODE_ENV: 'development',PORT: 3000 },watch: false,ignore_watch: ['node_modules','logs','*.log'],max_memory_restart: '1G',error_file: './logs/err.log',out_file: './logs/out.log',log_file: './logs/combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 10,min_uptime: '10s',restart_delay: 4000,kill_timeout: 5000,wait_ready: true,listen_timeout: 8000,kill_retry_time: 100 },{ name: 'zion-dev',script: 'npm',args: 'run dev',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development',PORT: 3000 },watch: true,ignore_watch: ['node_modules','logs','*.log','.next'],max_memory_restart: '512M',error_file: './logs/dev-err.log',out_file: './logs/dev-out.log',log_file: './logs/dev-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 5,min_uptime: '5s',restart_delay: 2000 },{ name: 'zion-build',script: 'npm',args: 'run build',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production' },watch: false,max_memory_restart: '2G',error_file: './logs/build-err.log',out_file: './logs/build-out.log',log_file: './logs/build-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '30s',restart_delay: 5000 },{ name: 'zion-lint',script: 'npm',args: 'run lint',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development' },watch: false,max_memory_restart: '256M',error_file: './logs/lint-err.log',out_file: './logs/lint-out.log',log_file: './logs/lint-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 2,min_uptime: '5s',restart_delay: 1000 },{ name: 'zion-test',script: 'npm',args: 'test',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'test' },watch: false,max_memory_restart: '512M',error_file: './logs/test-err.log',out_file: './logs/test-out.log',log_file: './logs/test-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '10s',restart_delay: 2000 } ],deploy: { production: { user: 'ubuntu',host: 'your-server.com',ref: 'origin/main',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production','pre-setup': '' },staging: { user: 'ubuntu',host: 'staging-server.com',ref: 'origin/develop',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app-staging','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env staging','pre-setup': '' } } };
module.exports = { apps: [ { name: 'zion-app',script: 'npm',args: 'start',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production',PORT: 3000 },env_development: { NODE_ENV: 'development',PORT: 3000 },watch: false,ignore_watch: ['node_modules','logs','*.log'],max_memory_restart: '1G',error_file: './logs/err.log',out_file: './logs/out.log',log_file: './logs/combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 10,min_uptime: '10s',restart_delay: 4000,kill_timeout: 5000,wait_ready: true,listen_timeout: 8000,kill_retry_time: 100 },{ name: 'zion-dev',script: 'npm',args: 'run dev',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development',PORT: 3000 },watch: true,ignore_watch: ['node_modules','logs','*.log','.next'],max_memory_restart: '512M',error_file: './logs/dev-err.log',out_file: './logs/dev-out.log',log_file: './logs/dev-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 5,min_uptime: '5s',restart_delay: 2000 },{ name: 'zion-build',script: 'npm',args: 'run build',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production' },watch: false,max_memory_restart: '2G',error_file: './logs/build-err.log',out_file: './logs/build-out.log',log_file: './logs/build-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '30s',restart_delay: 5000 },{ name: 'zion-lint',script: 'npm',args: 'run lint',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development' },watch: false,max_memory_restart: '256M',error_file: './logs/lint-err.log',out_file: './logs/lint-out.log',log_file: './logs/lint-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 2,min_uptime: '5s',restart_delay: 1000 },{ name: 'zion-test',script: 'npm',args: 'test',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'test' },watch: false,max_memory_restart: '512M',error_file: './logs/test-err.log',out_file: './logs/test-out.log',log_file: './logs/test-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '10s',restart_delay: 2000 } ],deploy: { production: { user: 'ubuntu',host: 'your-server.com',ref: 'origin/main',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production','pre-setup': '' },staging: { user: 'ubuntu',host: 'staging-server.com',ref: 'origin/develop',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app-staging','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env staging','pre-setup': '' } } };
module.exports = {
>>>>>>> origin/main
  apps: [
    {
      name: "zion-app",
      script: "npm",
      args: "start",
      cwd: "./",
      instances: 1,
      exec_mode: "fork",
      env: { NODE_ENV: "production", PORT: 3000 },
      env_development: { NODE_ENV: "development", PORT: 3000 },
      watch: false,
      ignore_watch: ["node_modules", "logs", "*.log"],
      max_memory_restart: "1G",
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      log_file: "./logs/combined.log",
      time: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: true,
      max_restarts: 10,
      min_uptime: "10s",
      restart_delay: 4000,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 8000,
      kill_retry_time: 100,
    },
    {
      name: "zion-dev",
      script: "npm",
      args: "run dev",
      cwd: "./",
      instances: 1,
      exec_mode: "fork",
      env: { NODE_ENV: "development", PORT: 3000 },
      watch: true,
      ignore_watch: ["node_modules", "logs", "*.log", ".next"],
      max_memory_restart: "512M",
      error_file: "./logs/dev-err.log",
      out_file: "./logs/dev-out.log",
      log_file: "./logs/dev-combined.log",
      time: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: true,
      max_restarts: 5,
      min_uptime: "5s",
      restart_delay: 2000,
    },
    {
      name: "zion-build",
      script: "npm",
      args: "run build",
      cwd: "./",
      instances: 1,
      exec_mode: "fork",
      env: { NODE_ENV: "production" },
      watch: false,
      max_memory_restart: "2G",
      error_file: "./logs/build-err.log",
      out_file: "./logs/build-out.log",
      log_file: "./logs/build-combined.log",
      time: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: true,
      max_restarts: 3,
      min_uptime: "30s",
      restart_delay: 5000,
    },
    {
      name: "zion-lint",
      script: "npm",
      args: "run lint",
      cwd: "./",
      instances: 1,
      exec_mode: "fork",
      env: { NODE_ENV: "development" },
      watch: false,
      max_memory_restart: "256M",
      error_file: "./logs/lint-err.log",
      out_file: "./logs/lint-out.log",
      log_file: "./logs/lint-combined.log",
      time: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: true,
      max_restarts: 2,
      min_uptime: "5s",
      restart_delay: 1000,
    },
    {
      name: "zion-test",
      script: "npm",
      args: "test",
      cwd: "./",
      instances: 1,
      exec_mode: "fork",
      env: { NODE_ENV: "test" },
      watch: false,
      max_memory_restart: "512M",
      error_file: "./logs/test-err.log",
      out_file: "./logs/test-out.log",
      log_file: "./logs/test-combined.log",
      time: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: true,
      max_restarts: 3,
      min_uptime: "10s",
      restart_delay: 2000,
    },
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "your-server.com",
      ref: "origin/main",
      repo: "git@github.com:your-username/your-repo.git",
      path: "/var/www/zion-app",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
    staging: {
      user: "ubuntu",
      host: "staging-server.com",
      ref: "origin/develop",
      repo: "git@github.com:your-username/your-repo.git",
      path: "/var/www/zion-app-staging",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && npm run build && pm2 reload ecosystem.config.js --env staging",
      "pre-setup": "",
    },
  },
};
module.exports = {
  apps: [
    // Main application
    {
      name:,
  zion-app',
      script: 'npm,
      args:,
  start',
      cwd: './,
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart:,
  1G',
      env: {
        NODE_ENV:
  'production,
        PORT: 3000,
      },
      env_production: {
        NODE_ENV:
  'production',
        PORT: 3000,
      },
      error_file:,
  ./logs/app-error.log',
      out_file: './logs/app-out.log,
      log_file:
  './logs/app-combined.log',
      time: true,
      log_date_format:,
  YYYY-MM-DD HH: mm:ss Z,
      merge_logs: true,
      max_restarts: 10,
      min_uptime:
  '10s',
      restart_delay: 4000,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 8000,
      health_check_grace_period: 30000,
      health_check_fatal_exceptions: true,
      cron_restart:,
  0 2 * * *',
      pid_file: './logs/app.pid,
      pmx: true,
      max_unstable_restarts: 5,
      unstable_restart_delay: 10000,
    },

    // Core automation processes
    {
      name:,
  error-monitor',
      script: './scripts/error-monitor.cjs,
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart:,
  500M',
      env: {
NODE_ENV:
  'production},
      error_file:,
  ./logs/error-monitor-error.log',
      out_file: './logs/error-monitor-out.log,
      log_file:
  './logs/error-monitor-combined.log',
      time: true,
      log_date_format:,
  YYYY-MM-DD HH: mm:ss Z,
      merge_logs: true,
      max_restarts: 5,
      min_uptime:
  '5s',
      restart_delay: 2000,
cron_restart:,
  */5 * * * *'},

    {
      name: 'syntax-fixer,
      script:
  './scripts/syntax-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart:,
  500M',
      env: {
NODE_ENV:
  'production},
      error_file:,
  ./logs/syntax-fixer-error.log',
      out_file: './logs/syntax-fixer-out.log,
      log_file:
  './logs/syntax-fixer-combined.log',
      time: true,
      log_date_format:,
  YYYY-MM-DD HH: mm:ss Z,
      merge_logs: true,
      max_restarts: 3,
      min_uptime:
  '5s',
      restart_delay: 2000,
cron_restart:,
  */10 * * * *'},

    {
      name: 'build-health-check,
      script:
  './scripts/build-health-check.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart:,
  300M',
      env: {
NODE_ENV:
  'production},
      error_file:,
  ./logs/build-health-error.log',
      out_file: './logs/build-health-out.log,
      log_file:
  './logs/build-health-combined.log',
      time: true,
      log_date_format:,
  YYYY-MM-DD HH: mm:ss Z,
      merge_logs: true,
      max_restarts: 5,
      min_uptime:
  '5s',
      restart_delay: 1000,
cron_restart:,
  */15 * * * *'},

    {
      name: 'merge-conflict-resolver,
      script:
  './scripts/merge-conflict-resolver.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart:,
  500M',
      env: {
NODE_ENV:
  'production},
      error_file:,
  ./logs/merge-resolver-error.log',
      out_file: './logs/merge-resolver-out.log,
      log_file:
  './logs/merge-resolver-combined.log',
      time: true,
      log_date_format:,
  YYYY-MM-DD HH: mm:ss Z,
      merge_logs: true,
      max_restarts: 3,
      min_uptime:
  '10s',
      restart_delay: 5000,
cron_restart:,
  */30 * * * *'},

    // Enhanced automation processes
    {
      name: 'ai-code-analyzer,
      script:
  './scripts/automation/ai-code-analyzer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart:,
  512M',
      env: {
        NODE_ENV:
  'production,
        AI_ANALYSIS_MODE:,
  true',
      },
      cron_restart: '0 */2 * * *,
      log_file:,
  ./logs/ai-code-analyzer.log',
      error_file: './logs/ai-code-analyzer-error.log,
      out_file:
  './logs/ai-code-analyzer-out.log',
      merge_logs: true,
log_date_format:,
  YYYY-MM-DD HH: mm:ss Z,
    }],

  deploy: {
    production: {
user:,
  ubuntu',
      host: 'localhost,
      ref:,
  origin/main',
      repo: 'https://github.com/Zion-Holdings/zion.app.git,
      path:,
  /workspace',
  'pre-deploy-local': ',
,
  post-deploy
  ': 'npm install && npm run build && pm2 reload ecosystem.working.js --env production,
,
  pre-setup
  ': '
    }
  }
};
<<<<<<< HEAD
module.exports = { apps: [ { name: 'zion-app',script: 'npm',args: 'start',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production',PORT: 3000 },env_development: { NODE_ENV: 'development',PORT: 3000 },watch: false,ignore_watch: ['node_modules','logs','*.log'],max_memory_restart: '1G',error_file: './logs/err.log',out_file: './logs/out.log',log_file: './logs/combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 10,min_uptime: '10s',restart_delay: 4000,kill_timeout: 5000,wait_ready: true,listen_timeout: 8000,kill_retry_time: 100 },{ name: 'zion-dev',script: 'npm',args: 'run dev',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development',PORT: 3000 },watch: true,ignore_watch: ['node_modules','logs','*.log','.next'],max_memory_restart: '512M',error_file: './logs/dev-err.log',out_file: './logs/dev-out.log',log_file: './logs/dev-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 5,min_uptime: '5s',restart_delay: 2000 },{ name: 'zion-build',script: 'npm',args: 'run build',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production' },watch: false,max_memory_restart: '2G',error_file: './logs/build-err.log',out_file: './logs/build-out.log',log_file: './logs/build-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '30s',restart_delay: 5000 },{ name: 'zion-lint',script: 'npm',args: 'run lint',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development' },watch: false,max_memory_restart: '256M',error_file: './logs/lint-err.log',out_file: './logs/lint-out.log',log_file: './logs/lint-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 2,min_uptime: '5s',restart_delay: 1000 },{ name: 'zion-test',script: 'npm',args: 'test',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'test' },watch: false,max_memory_restart: '512M',error_file: './logs/test-err.log',out_file: './logs/test-out.log',log_file: './logs/test-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '10s',restart_delay: 2000 } ],deploy: { production: { user: 'ubuntu',host: 'your-server.com',ref: 'origin/main',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production','pre-setup': '' },staging: { user: 'ubuntu',host: 'staging-server.com',ref: 'origin/develop',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app-staging','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env staging','pre-setup': '' } } };module.exports = { apps: [ { name: 'zion-app',script: 'npm',args: 'start',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production',PORT: 3000 },env_development: { NODE_ENV: 'development',PORT: 3000 },watch: false,ignore_watch: ['node_modules','logs','*.log'],max_memory_restart: '1G',error_file: './logs/err.log',out_file: './logs/out.log',log_file: './logs/combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 10,min_uptime: '10s',restart_delay: 4000,kill_timeout: 5000,wait_ready: true,listen_timeout: 8000,kill_retry_time: 100 },{ name: 'zion-dev',script: 'npm',args: 'run dev',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development',PORT: 3000 },watch: true,ignore_watch: ['node_modules','logs','*.log','.next'],max_memory_restart: '512M',error_file: './logs/dev-err.log',out_file: './logs/dev-out.log',log_file: './logs/dev-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 5,min_uptime: '5s',restart_delay: 2000 },{ name: 'zion-build',script: 'npm',args: 'run build',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production' },watch: false,max_memory_restart: '2G',error_file: './logs/build-err.log',out_file: './logs/build-out.log',log_file: './logs/build-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '30s',restart_delay: 5000 },{ name: 'zion-lint',script: 'npm',args: 'run lint',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development' },watch: false,max_memory_restart: '256M',error_file: './logs/lint-err.log',out_file: './logs/lint-out.log',log_file: './logs/lint-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 2,min_uptime: '5s',restart_delay: 1000 },{ name: 'zion-test',script: 'npm',args: 'test',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'test' },watch: false,max_memory_restart: '512M',error_file: './logs/test-err.log',out_file: './logs/test-out.log',log_file: './logs/test-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '10s',restart_delay: 2000 } ],deploy: { production: { user: 'ubuntu',host: 'your-server.com',ref: 'origin/main',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production','pre-setup': '' },staging: { user: 'ubuntu',host: 'staging-server.com',ref: 'origin/develop',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app-staging','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env staging','pre-setup': '' } } };
=======
module.exports = { apps: [ { name: 'zion-app',script: 'npm',args: 'start',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production',PORT: 3000 },env_development: { NODE_ENV: 'development',PORT: 3000 },watch: false,ignore_watch: ['node_modules','logs','*.log'],max_memory_restart: '1G',error_file: './logs/err.log',out_file: './logs/out.log',log_file: './logs/combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 10,min_uptime: '10s',restart_delay: 4000,kill_timeout: 5000,wait_ready: true,listen_timeout: 8000,kill_retry_time: 100 },{ name: 'zion-dev',script: 'npm',args: 'run dev',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development',PORT: 3000 },watch: true,ignore_watch: ['node_modules','logs','*.log','.next'],max_memory_restart: '512M',error_file: './logs/dev-err.log',out_file: './logs/dev-out.log',log_file: './logs/dev-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 5,min_uptime: '5s',restart_delay: 2000 },{ name: 'zion-build',script: 'npm',args: 'run build',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production' },watch: false,max_memory_restart: '2G',error_file: './logs/build-err.log',out_file: './logs/build-out.log',log_file: './logs/build-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '30s',restart_delay: 5000 },{ name: 'zion-lint',script: 'npm',args: 'run lint',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development' },watch: false,max_memory_restart: '256M',error_file: './logs/lint-err.log',out_file: './logs/lint-out.log',log_file: './logs/lint-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 2,min_uptime: '5s',restart_delay: 1000 },{ name: 'zion-test',script: 'npm',args: 'test',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'test' },watch: false,max_memory_restart: '512M',error_file: './logs/test-err.log',out_file: './logs/test-out.log',log_file: './logs/test-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '10s',restart_delay: 2000 } ],deploy: { production: { user: 'ubuntu',host: 'your-server.com',ref: 'origin/main',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production','pre-setup': '' },staging: { user: 'ubuntu',host: 'staging-server.com',ref: 'origin/develop',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app-staging','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env staging','pre-setup': '' } } };
module.exports = { apps: [ { name: 'zion-app',script: 'npm',args: 'start',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production',PORT: 3000 },env_development: { NODE_ENV: 'development',PORT: 3000 },watch: false,ignore_watch: ['node_modules','logs','*.log'],max_memory_restart: '1G',error_file: './logs/err.log',out_file: './logs/out.log',log_file: './logs/combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 10,min_uptime: '10s',restart_delay: 4000,kill_timeout: 5000,wait_ready: true,listen_timeout: 8000,kill_retry_time: 100 },{ name: 'zion-dev',script: 'npm',args: 'run dev',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development',PORT: 3000 },watch: true,ignore_watch: ['node_modules','logs','*.log','.next'],max_memory_restart: '512M',error_file: './logs/dev-err.log',out_file: './logs/dev-out.log',log_file: './logs/dev-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 5,min_uptime: '5s',restart_delay: 2000 },{ name: 'zion-build',script: 'npm',args: 'run build',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production' },watch: false,max_memory_restart: '2G',error_file: './logs/build-err.log',out_file: './logs/build-out.log',log_file: './logs/build-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '30s',restart_delay: 5000 },{ name: 'zion-lint',script: 'npm',args: 'run lint',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development' },watch: false,max_memory_restart: '256M',error_file: './logs/lint-err.log',out_file: './logs/lint-out.log',log_file: './logs/lint-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 2,min_uptime: '5s',restart_delay: 1000 },{ name: 'zion-test',script: 'npm',args: 'test',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'test' },watch: false,max_memory_restart: '512M',error_file: './logs/test-err.log',out_file: './logs/test-out.log',log_file: './logs/test-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '10s',restart_delay: 2000 } ],deploy: { production: { user: 'ubuntu',host: 'your-server.com',ref: 'origin/main',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production','pre-setup': '' },staging: { user: 'ubuntu',host: 'staging-server.com',ref: 'origin/develop',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app-staging','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env staging','pre-setup': '' } } };
>>>>>>> origin/main
