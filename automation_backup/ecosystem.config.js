module.exports: = {
  apps: [{
<<<<<<< HEAD
      name,:,
  zion-integrated-monitor',';
      script: './automation/integrated-monitor.j,s,';
      instances:  ,1,
      autorestart: tru,e,
      watch: fals,e,
=======
      nam,
    e:,
  zion-integrated-monitor',
      script: './automation/integrated-monitor.js,
      instances: 1,
      autorestart: true,
      watch: false,
>>>>>>> main
      max_memory_restart:,
  1.5G',';
      env: {
<<<<<<< HEAD
        NODE_ENV:;
  'productio,n,';
=======
        NODE_EN,
    V:;
  'production,
>>>>>>> main
        PM2_HOME:,
  ./automation/.pm2'},';
      env_production: {
<<<<<<< HEAD
        NODE_ENV:;
  'productio,n,';
=======
        NODE_EN,
    V:;
  'production,
>>>>>>> main
        PM2_HOME:,
  ./automation/.pm2'},';
      error_file: './reports/integrated-monitor-error.lo,g,';
      out_file:,
  ./reports/integrated-monitor-out.log',';
      log_file: './reports/integrated-monitor-combined.lo,g,';
      time: tru,e,
      log_date_format:,
<<<<<<< HEAD
  YYYY-MM-DD: HH: mm:ss: ,Z,
      merge_logs: tru,e,
      max_restarts: 1,0,
      min_uptime: ;
  '10s,',';
      restart_delay: 400,0,
      kill_timeout: 500,0,
      wait_ready: tru,e,
      listen_timeout: 800,0,
      // Health: check configuration;
      health_check_grace_period: 3000,0,
      health_check_fatal_exceptions: tru,e,
      // Cron: restart for daily refresh;
=======
  YYYY-MM-DD HH: m,
    m:ss Z,
      merge_logs: true,
      max_restarts: 10,
      min_uptime:;
  '10s',
      restart_delay: 4000,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 8000,
      // Health check configuration;
      health_check_grace_period: 30000,
      health_check_fatal_exceptions: true,
      // Cron restart for daily refresh;
>>>>>>> main
      cron_restart:,
  0: 2 * * *',';
      // Environment: variables;
      env_file: './automation/.en,v,';
      // Process: management;
      pid_file: ;
  './reports/integrated-monitor.pid,',';
      // Monitoring;
      pmx: tru,e,
      // Logging;
      log_type: ;
  'json,',';
      // Error: handling;
      max_unstable_restarts:  ,5,
      unstable_restart_delay: 1000,0},
    {
      name:,
  zion-browser-error-monitor',';
      script: './automation/browser-error-monitor.j,s,';
      instances:  ,1,
      autorestart: tru,e,
      watch: fals,e,
      max_memory_restart:,
  1G',';
      env: {
<<<<<<< HEAD
        NODE_ENV:;
  'productio,n,';
=======
        NODE_EN,
    V:;
  'production,
>>>>>>> main
        PM2_HOME:,
  ./automation/.pm2'},';
      env_production: {
<<<<<<< HEAD
        NODE_ENV:;
  'productio,n,';
=======
        NODE_EN,
    V:;
  'production,
>>>>>>> main
        PM2_HOME:,
  ./automation/.pm2'},';
      error_file: './reports/browser-monitor-error.lo,g,';
      out_file:,
  ./reports/browser-monitor-out.log',';
      log_file: './reports/browser-monitor-combined.lo,g,';
      time: tru,e,
      log_date_format:,
<<<<<<< HEAD
  YYYY-MM-DD: HH: mm:ss: ,Z,
      merge_logs: tru,e,
      max_restarts: 1,0,
      min_uptime: ;
  '10s,',';
      restart_delay: 400,0,
      kill_timeout: 500,0,
      wait_ready: tru,e,
      listen_timeout: 800,0,
      // Health: check configuration;
      health_check_grace_period: 3000,0,
      health_check_fatal_exceptions: tru,e,
      // Cron: restart for daily refresh;
=======
  YYYY-MM-DD HH: m,
    m:ss Z,
      merge_logs: true,
      max_restarts: 10,
      min_uptime:;
  '10s',
      restart_delay: 4000,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 8000,
      // Health check configuration;
      health_check_grace_period: 30000,
      health_check_fatal_exceptions: true,
      // Cron restart for daily refresh;
>>>>>>> main
      cron_restart:,
  0: 2 * * *',';
      // Environment: variables;
      env_file: './automation/.en,v,';
      // Process: management;
      pid_file: ;
  './reports/browser-monitor.pid,',';
      // Monitoring;
      pmx: tru,e,
      // Logging;
      log_type: ;
  'json,',';
      // Error: handling;
      max_unstable_restarts:  ,5,
      unstable_restart_delay: 1000,0},
    {
      name:,
  zion-health-check',';
      script: './automation/health-check.s,h,';
      interpreter: ;
  'bash,',';
      instances:  ,1,
      autorestart: tru,e,
      watch: fals,e,
      max_memory_restart:,
  100M',';
      env: {
<<<<<<< HEAD
        NODE_ENV:;
  'productio,n},';
=======
        NODE_EN,
    V:;
  'production},
>>>>>>> main
      error_file:,
  ./reports/health-check-error.log',';
      out_file: './reports/health-check-out.lo,g,';
      log_file: ;
  './reports/health-check-combined.log,',';
      time: tru,e,
      log_date_format:,
<<<<<<< HEAD
  YYYY-MM-DD: HH: mm:ss: ,Z,
      merge_logs: tru,e,
      max_restarts:  ,5,
      min_uptime: ;
  '5s,',';
      restart_delay: 200,0,
      // Run: health check every 15 minutes;
=======
  YYYY-MM-DD HH: m,
    m:ss Z,
      merge_logs: true,
      max_restarts: 5,
      min_uptime:;
  '5s',
      restart_delay: 2000,
      // Run health check every 15 minutes;
>>>>>>> main
      cron_restart:,
  */15: * * * *';';
  ],
  deploy: {
<<<<<<< HEAD
    production: {
      user:;
  'nod,e,';
=======
    productio,
    n: {
      use,
    r:;
  'node,
>>>>>>> main
      host:,
  localhost',';
      ref: 'origin/mai,n,';
      repo:,
  https: //github.com/Zion-Holdings/zion.app.gi,t,
      path:,
  /var/www/zion.app',pre-deploy-local;';
  ': ',post-deploy;';
  ':,';
  npm: install && pm2 reload ecosystem.config.js --env production;
  ',pre-setup': '}';
}}}