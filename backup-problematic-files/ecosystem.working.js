

=======
>>>>>>> origin/automation-improvements-final
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
module.exports = {
  apps: [;
    {


=======


module.exports = { apps: [ { name: 'zion-app',script: 'npm',args: 'start',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production',PORT: 3000 },env_development: { NODE_ENV: 'development',PORT: 3000 },watch: false,ignore_watch: ['node_modules','logs','*.log'],max_memory_restart: '1G',error_file: './logs/err.log',out_file: './logs/out.log',log_file: './logs/combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 10,min_uptime: '10s',restart_delay: 4000,kill_timeout: 5000,wait_ready: true,listen_timeout: 8000,kill_retry_time: 100 },{ name: 'zion-dev',script: 'npm',args: 'run dev',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development',PORT: 3000 },watch: true,ignore_watch: ['node_modules','logs','*.log','.next'],max_memory_restart: '512M',error_file: './logs/dev-err.log',out_file: './logs/dev-out.log',log_file: './logs/dev-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 5,min_uptime: '5s',restart_delay: 2000 },{ name: 'zion-build',script: 'npm',args: 'run build',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production' },watch: false,max_memory_restart: '2G',error_file: './logs/build-err.log',out_file: './logs/build-out.log',log_file: './logs/build-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '30s',restart_delay: 5000 },{ name: 'zion-lint',script: 'npm',args: 'run lint',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development' },watch: false,max_memory_restart: '256M',error_file: './logs/lint-err.log',out_file: './logs/lint-out.log',log_file: './logs/lint-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 2,min_uptime: '5s',restart_delay: 1000 },{ name: 'zion-test',script: 'npm',args: 'test',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'test' },watch: false,max_memory_restart: '512M',error_file: './logs/test-err.log',out_file: './logs/test-out.log',log_file: './logs/test-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '10s',restart_delay: 2000 } ],deploy: { production: { user: 'ubuntu',host: 'your-server.com',ref: 'origin/main',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production','pre-setup': '' },staging: { user: 'ubuntu',host: 'staging-server.com',ref: 'origin/develop',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app-staging','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env staging','pre-setup': '' } } };



=======
module.exports = { apps: [ { name: 'zion-app',script: 'npm',args: 'start',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production',PORT: 3000 },env_development: { NODE_ENV: 'development',PORT: 3000 },watch: false,ignore_watch: ['node_modules','logs','*.log'],max_memory_restart: '1G',error_file: './logs/err.log',out_file: './logs/out.log',log_file: './logs/combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 10,min_uptime: '10s',restart_delay: 4000,kill_timeout: 5000,wait_ready: true,listen_timeout: 8000,kill_retry_time: 100 },{ name: 'zion-dev',script: 'npm',args: 'run dev',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development',PORT: 3000 },watch: true,ignore_watch: ['node_modules','logs','*.log','.next'],max_memory_restart: '512M',error_file: './logs/dev-err.log',out_file: './logs/dev-out.log',log_file: './logs/dev-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 5,min_uptime: '5s',restart_delay: 2000 },{ name: 'zion-build',script: 'npm',args: 'run build',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production' },watch: false,max_memory_restart: '2G',error_file: './logs/build-err.log',out_file: './logs/build-out.log',log_file: './logs/build-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '30s',restart_delay: 5000 },{ name: 'zion-lint',script: 'npm',args: 'run lint',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development' },watch: false,max_memory_restart: '256M',error_file: './logs/lint-err.log',out_file: './logs/lint-out.log',log_file: './logs/lint-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 2,min_uptime: '5s',restart_delay: 1000 },{ name: 'zion-test',script: 'npm',args: 'test',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'test' },watch: false,max_memory_restart: '512M',error_file: './logs/test-err.log',out_file: './logs/test-out.log',log_file: './logs/test-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '10s',restart_delay: 2000 } ],deploy: { production: { user: 'ubuntu',host: 'your-server.com',ref: 'origin/main',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production','pre-setup': '' },staging: { user: 'ubuntu',host: 'staging-server.com',ref: 'origin/develop',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app-staging','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env staging','pre-setup': '' } } };
module.exports = { apps: [ { name: 'zion-app',script: 'npm',args: 'start',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production',PORT: 3000 },env_development: { NODE_ENV: 'development',PORT: 3000 },watch: false,ignore_watch: ['node_modules','logs','*.log'],max_memory_restart: '1G',error_file: './logs/err.log',out_file: './logs/out.log',log_file: './logs/combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 10,min_uptime: '10s',restart_delay: 4000,kill_timeout: 5000,wait_ready: true,listen_timeout: 8000,kill_retry_time: 100 },{ name: 'zion-dev',script: 'npm',args: 'run dev',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development',PORT: 3000 },watch: true,ignore_watch: ['node_modules','logs','*.log','.next'],max_memory_restart: '512M',error_file: './logs/dev-err.log',out_file: './logs/dev-out.log',log_file: './logs/dev-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 5,min_uptime: '5s',restart_delay: 2000 },{ name: 'zion-build',script: 'npm',args: 'run build',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production' },watch: false,max_memory_restart: '2G',error_file: './logs/build-err.log',out_file: './logs/build-out.log',log_file: './logs/build-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '30s',restart_delay: 5000 },{ name: 'zion-lint',script: 'npm',args: 'run lint',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development' },watch: false,max_memory_restart: '256M',error_file: './logs/lint-err.log',out_file: './logs/lint-out.log',log_file: './logs/lint-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 2,min_uptime: '5s',restart_delay: 1000 },{ name: 'zion-test',script: 'npm',args: 'test',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'test' },watch: false,max_memory_restart: '512M',error_file: './logs/test-err.log',out_file: './logs/test-out.log',log_file: './logs/test-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '10s',restart_delay: 2000 } ],deploy: { production: { user: 'ubuntu',host: 'your-server.com',ref: 'origin/main',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production','pre-setup': '' },staging: { user: 'ubuntu',host: 'staging-server.com',ref: 'origin/develop',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app-staging','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env staging','pre-setup': '' } } };
module.exports = { apps: [ { name: 'zion-app',script: 'npm',args: 'start',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production',PORT: 3000 },env_development: { NODE_ENV: 'development',PORT: 3000 },watch: false,ignore_watch: ['node_modules','logs','*.log'],max_memory_restart: '1G',error_file: './logs/err.log',out_file: './logs/out.log',log_file: './logs/combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 10,min_uptime: '10s',restart_delay: 4000,kill_timeout: 5000,wait_ready: true,listen_timeout: 8000,kill_retry_time: 100 },{ name: 'zion-dev',script: 'npm',args: 'run dev',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development',PORT: 3000 },watch: true,ignore_watch: ['node_modules','logs','*.log','.next'],max_memory_restart: '512M',error_file: './logs/dev-err.log',out_file: './logs/dev-out.log',log_file: './logs/dev-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 5,min_uptime: '5s',restart_delay: 2000 },{ name: 'zion-build',script: 'npm',args: 'run build',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production' },watch: false,max_memory_restart: '2G',error_file: './logs/build-err.log',out_file: './logs/build-out.log',log_file: './logs/build-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '30s',restart_delay: 5000 },{ name: 'zion-lint',script: 'npm',args: 'run lint',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development' },watch: false,max_memory_restart: '256M',error_file: './logs/lint-err.log',out_file: './logs/lint-out.log',log_file: './logs/lint-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 2,min_uptime: '5s',restart_delay: 1000 },{ name: 'zion-test',script: 'npm',args: 'test',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'test' },watch: false,max_memory_restart: '512M',error_file: './logs/test-err.log',out_file: './logs/test-out.log',log_file: './logs/test-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '10s',restart_delay: 2000 } ],deploy: { production: { user: 'ubuntu',host: 'your-server.com',ref: 'origin/main',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production','pre-setup': '' },staging: { user: 'ubuntu',host: 'staging-server.com',ref: 'origin/develop',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app-staging','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env staging','pre-setup': '' } } };
module.exports = { apps: [ { name: 'zion-app',script: 'npm',args: 'start',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production',PORT: 3000 },env_development: { NODE_ENV: 'development',PORT: 3000 },watch: false,ignore_watch: ['node_modules','logs','*.log'],max_memory_restart: '1G',error_file: './logs/err.log',out_file: './logs/out.log',log_file: './logs/combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 10,min_uptime: '10s',restart_delay: 4000,kill_timeout: 5000,wait_ready: true,listen_timeout: 8000,kill_retry_time: 100 },{ name: 'zion-dev',script: 'npm',args: 'run dev',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development',PORT: 3000 },watch: true,ignore_watch: ['node_modules','logs','*.log','.next'],max_memory_restart: '512M',error_file: './logs/dev-err.log',out_file: './logs/dev-out.log',log_file: './logs/dev-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 5,min_uptime: '5s',restart_delay: 2000 },{ name: 'zion-build',script: 'npm',args: 'run build',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production' },watch: false,max_memory_restart: '2G',error_file: './logs/build-err.log',out_file: './logs/build-out.log',log_file: './logs/build-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '30s',restart_delay: 5000 },{ name: 'zion-lint',script: 'npm',args: 'run lint',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development' },watch: false,max_memory_restart: '256M',error_file: './logs/lint-err.log',out_file: './logs/lint-out.log',log_file: './logs/lint-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 2,min_uptime: '5s',restart_delay: 1000 },{ name: 'zion-test',script: 'npm',args: 'test',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'test' },watch: false,max_memory_restart: '512M',error_file: './logs/test-err.log',out_file: './logs/test-out.log',log_file: './logs/test-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '10s',restart_delay: 2000 } ],deploy: { production: { user: 'ubuntu',host: 'your-server.com',ref: 'origin/main',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production','pre-setup': '' },staging: { user: 'ubuntu',host: 'staging-server.com',ref: 'origin/develop',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app-staging','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env staging','pre-setup': '' } } };

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
module.exports = {
=======
module && module.exports = {
  apps: [
    {
      name: "zion-app",
      name: "zion - app",
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

      error_file: "./logs / err.log",
      out_file: "./logs / out.log",
      log_file: "./logs / combined.log",

      time: true,
      log_date_format: "YYYY - MM - DD HH:mm:ss Z",
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
      name: "zion - dev",
      script: "npm",
      args: "run dev",
      cwd: "./",
      instances: 1,
      exec_mode: "fork",
      env: { NODE_ENV: "development", PORT: 3000 },
      watch: true,
      ignore_watch: ["node_modules", "logs", "*.log", ".next"],
      max_memory_restart: "512M",

      error_file: "./logs / dev - err.log",
      out_file: "./logs / dev - out.log",
      log_file: "./logs / dev - combined.log",

      time: true,
      log_date_format: "YYYY - MM - DD HH:mm:ss Z",
      merge_logs: true,
      max_restarts: 5,
      min_uptime: "5s",
      restart_delay: 2000,
    },
    {
      name: "zion - build",
      script: "npm",
      args: "run build",
      cwd: "./",
      instances: 1,
      exec_mode: "fork",
      env: { NODE_ENV: "production" },
      watch: false,
      max_memory_restart: "2G",

      error_file: "./logs / build - err.log",
      out_file: "./logs / build - out.log",
      log_file: "./logs / build - combined.log",

      time: true,
      log_date_format: "YYYY - MM - DD HH:mm:ss Z",
      merge_logs: true,
      max_restarts: 3,
      min_uptime: "30s",
      restart_delay: 5000,
    },
    {
      name: "zion - lint",
      script: "npm",
      args: "run lint",
      cwd: "./",
      instances: 1,
      exec_mode: "fork",
      env: { NODE_ENV: "development" },
      watch: false,
      max_memory_restart: "256M",

      error_file: "./logs / lint - err.log",
      out_file: "./logs / lint - out.log",
      log_file: "./logs / lint - combined.log",

      time: true,
      log_date_format: "YYYY - MM - DD HH:mm:ss Z",
      merge_logs: true,
      max_restarts: 2,
      min_uptime: "5s",
      restart_delay: 1000,
    },
    {
      name: "zion - test",
      script: "npm",
      args: "test",
      cwd: "./",
      instances: 1,
      exec_mode: "fork",
      env: { NODE_ENV: "test" },
      watch: false,
      max_memory_restart: "512M",

      error_file: "./logs / test - err.log",
      out_file: "./logs / test - out.log",
      log_file: "./logs / test - combined.log",

      time: true,
      log_date_format: "YYYY - MM - DD HH:mm:ss Z",
      merge_logs: true,
      max_restarts: 3,
      min_uptime: "10s",
      restart_delay: 2000,
    },
  ],
  deploy: {
    production: {
      user: "ubuntu",

      host: "your - server.com",
      ref: "origin / main",
      repo: "git@github.com:your - username / your - repo.git",
      path: "/var / www / zion - app",
      "pre - deploy - local": "",
      "post - deploy":;
        "npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre - setup": "",
    },
    staging: {

module.exports = { apps: [ { name: 'zion-app',script: 'npm',args: 'start',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production',PORT: 3000 },env_development: { NODE_ENV: 'development',PORT: 3000 },watch: false,ignore_watch: ['node_modules','logs','*.log'],max_memory_restart: '1G',error_file: './logs/err.log',out_file: './logs/out.log',log_file: './logs/combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 10,min_uptime: '10s',restart_delay: 4000,kill_timeout: 5000,wait_ready: true,listen_timeout: 8000,kill_retry_time: 100 },{ name: 'zion-dev',script: 'npm',args: 'run dev',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development',PORT: 3000 },watch: true,ignore_watch: ['node_modules','logs','*.log','.next'],max_memory_restart: '512M',error_file: './logs/dev-err.log',out_file: './logs/dev-out.log',log_file: './logs/dev-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 5,min_uptime: '5s',restart_delay: 2000 },{ name: 'zion-build',script: 'npm',args: 'run build',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production' },watch: false,max_memory_restart: '2G',error_file: './logs/build-err.log',out_file: './logs/build-out.log',log_file: './logs/build-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '30s',restart_delay: 5000 },{ name: 'zion-lint',script: 'npm',args: 'run lint',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development' },watch: false,max_memory_restart: '256M',error_file: './logs/lint-err.log',out_file: './logs/lint-out.log',log_file: './logs/lint-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 2,min_uptime: '5s',restart_delay: 1000 },{ name: 'zion-test',script: 'npm',args: 'test',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'test' },watch: false,max_memory_restart: '512M',error_file: './logs/test-err.log',out_file: './logs/test-out.log',log_file: './logs/test-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '10s',restart_delay: 2000 } ],deploy: { production: { user: 'ubuntu',host: 'your-server.com',ref: 'origin/main',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production','pre-setup': '' },staging: { user: 'ubuntu',host: 'staging-server.com',ref: 'origin/develop',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app-staging','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env staging','pre-setup': '' } } };
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
}
module.exports = {
  apps: [;
    // Main application;
    {
      name: "zion - app",
      script: "npm",
      args: "start",
      cwd: "./",
      instances: 1,
      exec_mode: "fork",

      env: {
        NODE_ENV: "production"
        PORT: 3000
      }
      env_development: {

        NODE_ENV: "development",
        PORT: 3000,
      },
      watch: false,
      ignore_watch: ["node_modules", "logs", "*.log"],
      max_memory_restart: "1G",

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
module.exports = { apps: [ { name: 'zion-app',script: 'npm',args: 'start',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production',PORT: 3000 },env_development: { NODE_ENV: 'development',PORT: 3000 },watch: false,ignore_watch: ['node_modules','logs','*.log'],max_memory_restart: '1G',error_file: './logs/err.log',out_file: './logs/out.log',log_file: './logs/combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 10,min_uptime: '10s',restart_delay: 4000,kill_timeout: 5000,wait_ready: true,listen_timeout: 8000,kill_retry_time: 100 },{ name: 'zion-dev',script: 'npm',args: 'run dev',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development',PORT: 3000 },watch: true,ignore_watch: ['node_modules','logs','*.log','.next'],max_memory_restart: '512M',error_file: './logs/dev-err.log',out_file: './logs/dev-out.log',log_file: './logs/dev-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 5,min_uptime: '5s',restart_delay: 2000 },{ name: 'zion-build',script: 'npm',args: 'run build',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production' },watch: false,max_memory_restart: '2G',error_file: './logs/build-err.log',out_file: './logs/build-out.log',log_file: './logs/build-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '30s',restart_delay: 5000 },{ name: 'zion-lint',script: 'npm',args: 'run lint',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development' },watch: false,max_memory_restart: '256M',error_file: './logs/lint-err.log',out_file: './logs/lint-out.log',log_file: './logs/lint-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 2,min_uptime: '5s',restart_delay: 1000 },{ name: 'zion-test',script: 'npm',args: 'test',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'test' },watch: false,max_memory_restart: '512M',error_file: './logs/test-err.log',out_file: './logs/test-out.log',log_file: './logs/test-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '10s',restart_delay: 2000 } ],deploy: { production: { user: 'ubuntu',host: 'your-server.com',ref: 'origin/main',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production','pre-setup': '' },staging: { user: 'ubuntu',host: 'staging-server.com',ref: 'origin/develop',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app-staging','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env staging','pre-setup': '' } } };
module.exports = { apps: [ { name: 'zion-app',script: 'npm',args: 'start',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production',PORT: 3000 },env_development: { NODE_ENV: 'development',PORT: 3000 },watch: false,ignore_watch: ['node_modules','logs','*.log'],max_memory_restart: '1G',error_file: './logs/err.log',out_file: './logs/out.log',log_file: './logs/combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 10,min_uptime: '10s',restart_delay: 4000,kill_timeout: 5000,wait_ready: true,listen_timeout: 8000,kill_retry_time: 100 },{ name: 'zion-dev',script: 'npm',args: 'run dev',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development',PORT: 3000 },watch: true,ignore_watch: ['node_modules','logs','*.log','.next'],max_memory_restart: '512M',error_file: './logs/dev-err.log',out_file: './logs/dev-out.log',log_file: './logs/dev-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 5,min_uptime: '5s',restart_delay: 2000 },{ name: 'zion-build',script: 'npm',args: 'run build',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production' },watch: false,max_memory_restart: '2G',error_file: './logs/build-err.log',out_file: './logs/build-out.log',log_file: './logs/build-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '30s',restart_delay: 5000 },{ name: 'zion-lint',script: 'npm',args: 'run lint',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development' },watch: false,max_memory_restart: '256M',error_file: './logs/lint-err.log',out_file: './logs/lint-out.log',log_file: './logs/lint-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 2,min_uptime: '5s',restart_delay: 1000 },{ name: 'zion-test',script: 'npm',args: 'test',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'test' },watch: false,max_memory_restart: '512M',error_file: './logs/test-err.log',out_file: './logs/test-out.log',log_file: './logs/test-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '10s',restart_delay: 2000 } ],deploy: { production: { user: 'ubuntu',host: 'your-server.com',ref: 'origin/main',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production','pre-setup': '' },staging: { user: 'ubuntu',host: 'staging-server.com',ref: 'origin/develop',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app-staging','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env staging','pre-setup': '' } } };
module.exports = { apps: [ { name: 'zion-app',script: 'npm',args: 'start',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production',PORT: 3000 },env_development: { NODE_ENV: 'development',PORT: 3000 },watch: false,ignore_watch: ['node_modules','logs','*.log'],max_memory_restart: '1G',error_file: './logs/err.log',out_file: './logs/out.log',log_file: './logs/combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 10,min_uptime: '10s',restart_delay: 4000,kill_timeout: 5000,wait_ready: true,listen_timeout: 8000,kill_retry_time: 100 },{ name: 'zion-dev',script: 'npm',args: 'run dev',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development',PORT: 3000 },watch: true,ignore_watch: ['node_modules','logs','*.log','.next'],max_memory_restart: '512M',error_file: './logs/dev-err.log',out_file: './logs/dev-out.log',log_file: './logs/dev-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 5,min_uptime: '5s',restart_delay: 2000 },{ name: 'zion-build',script: 'npm',args: 'run build',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production' },watch: false,max_memory_restart: '2G',error_file: './logs/build-err.log',out_file: './logs/build-out.log',log_file: './logs/build-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '30s',restart_delay: 5000 },{ name: 'zion-lint',script: 'npm',args: 'run lint',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development' },watch: false,max_memory_restart: '256M',error_file: './logs/lint-err.log',out_file: './logs/lint-out.log',log_file: './logs/lint-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 2,min_uptime: '5s',restart_delay: 1000 },{ name: 'zion-test',script: 'npm',args: 'test',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'test' },watch: false,max_memory_restart: '512M',error_file: './logs/test-err.log',out_file: './logs/test-out.log',log_file: './logs/test-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '10s',restart_delay: 2000 } ],deploy: { production: { user: 'ubuntu',host: 'your-server.com',ref: 'origin/main',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production','pre-setup': '' },staging: { user: 'ubuntu',host: 'staging-server.com',ref: 'origin/develop',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app-staging','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env staging','pre-setup': '' } } };
module.exports = { apps: [ { name: 'zion-app',script: 'npm',args: 'start',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production',PORT: 3000 },env_development: { NODE_ENV: 'development',PORT: 3000 },watch: false,ignore_watch: ['node_modules','logs','*.log'],max_memory_restart: '1G',error_file: './logs/err.log',out_file: './logs/out.log',log_file: './logs/combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 10,min_uptime: '10s',restart_delay: 4000,kill_timeout: 5000,wait_ready: true,listen_timeout: 8000,kill_retry_time: 100 },{ name: 'zion-dev',script: 'npm',args: 'run dev',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development',PORT: 3000 },watch: true,ignore_watch: ['node_modules','logs','*.log','.next'],max_memory_restart: '512M',error_file: './logs/dev-err.log',out_file: './logs/dev-out.log',log_file: './logs/dev-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 5,min_uptime: '5s',restart_delay: 2000 },{ name: 'zion-build',script: 'npm',args: 'run build',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production' },watch: false,max_memory_restart: '2G',error_file: './logs/build-err.log',out_file: './logs/build-out.log',log_file: './logs/build-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '30s',restart_delay: 5000 },{ name: 'zion-lint',script: 'npm',args: 'run lint',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development' },watch: false,max_memory_restart: '256M',error_file: './logs/lint-err.log',out_file: './logs/lint-out.log',log_file: './logs/lint-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 2,min_uptime: '5s',restart_delay: 1000 },{ name: 'zion-test',script: 'npm',args: 'test',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'test' },watch: false,max_memory_restart: '512M',error_file: './logs/test-err.log',out_file: './logs/test-out.log',log_file: './logs/test-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '10s',restart_delay: 2000 } ],deploy: { production: { user: 'ubuntu',host: 'your-server.com',ref: 'origin/main',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production','pre-setup': '' },staging: { user: 'ubuntu',host: 'staging-server.com',ref: 'origin/develop',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app-staging','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env staging','pre-setup': '' } } };
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======
        "npm install && npm run build && pm2 reload ecosystem.config.js --env staging"
      "pre-setup": ""
    }
  }
}

      host: "your - server.com",
      ref: "origin / main",
      repo: "git@github.com:your - username / your - repo.git",
      path: "/var / www / zion - app",
      "pre - deploy - local": "",
      "post - deploy":;
        "npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre - setup": "",
    },
    staging: {
      user: "ubuntu",
      host: "staging - server.com",
      ref: "origin / develop",
      repo: "git@github.com:your - username / your - repo.git",
      path: "/var / www / zion - app - staging",
      "pre - deploy - local": "",
      "post - deploy":;
        "npm install && npm run build && pm2 reload ecosystem.config.js --env staging",
      "pre - setup": "",
    },
  },
}
=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
