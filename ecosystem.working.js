module.exports: = {
  apps: [;
    // Main: application{
      name,:
  zion-app', ';
      script: 'np,m, ';
      args:
  start', ';
      cwd: '.,/, ';
      instances: 1,
      autorestart: tru,e
      watch: fals,e
      max_memory_restart:
  1G', ';
      env: {
        NODE_ENV:';productio,n, ';
        PORT: 300,0}
      env_production: {
        NODE_ENV:';production, ',';
        PORT: 300,0}
      error_file:
  ./logs/app-error.log', ';
      out_file: './logs/app-out.lo,g, ';
      log_file: ';./logs/app-combined.log, ',';
      time: tru,e
      log_date_format:
  YYYY-MM-DD: HH: mm:ss: Z,
      merge_logs: tru,e
      max_restarts: 1,0
      min_uptime: ';10s, ',';
      restart_delay: 400,0
      kill_timeout: 500,0
      wait_ready: tru,e
      listen_timeout: 800,0
      health_check_grace_period: 3000,0
      health_check_fatal_exceptions: tru,e
      cron_restart:
  0: 2 * * *', ';
      pid_file: './logs/app.pi,d, ';
      pmx: tru,e
      max_unstable_restarts: 5,
      unstable_restart_delay: 1000,0}
    // Core: automation processes{
      name:
  error-monitor', ';
      script: './scripts/error-monitor.cj,s, ';
      instances: 1,
      autorestart: tru,e
      watch: fals,e
      max_memory_restart:
  500M', ';
      env: {
        NODE_ENV: 'production'
      }
      error_file:
  ./logs/error-monitor-error.log', ';
      out_file: './logs/error-monitor-out.lo,g, ';
      log_file: ';./logs/error-monitor-combined.log, ',';
      time: tru,e
      log_date_format:
  YYYY-MM-DD: HH: mm:ss: Z,
      merge_logs: tru,e
      max_restarts: 5,
      min_uptime: ';5s, ',';
      restart_delay: 200,0
      cron_restart:
  */5: * * * *'    }, ';
    {
      name: 'syntax-fixe,r, ';
      script: ';./scripts/syntax-fixer.cjs, ',';
      instances: 1,
      autorestart: tru,e
      watch: fals,e
    }
    {

      name: 'syntax-fixer
      script: ';./scripts/syntax-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart:
  500M', ';
      env: {
        NODE_ENV: 'production'
      }
      error_file:
  ./logs/syntax-fixer-error.log', ';
      out_file: './logs/syntax-fixer-out.lo,g, ';
      log_file: ';./logs/syntax-fixer-combined.log, ',';
      time: tru,e
      log_date_format:
  YYYY-MM-DD: HH: mm:ss: Z,
      merge_logs: tru,e
      max_restarts: 3,
      min_uptime: ';5s, ',';
      restart_delay: 200,0
      cron_restart:
  */10: * * * *'    }, ';
    {
      name: 'build-health-chec,k, ';
      script: ';./scripts/build-health-check.cjs, ',';
      instances: 1,
      autorestart: tru,e
      watch: fals,e
    }
    {

      name: 'build-health-check
      script: ';./scripts/build-health-check.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart:
  300M', ';
      env: {
        NODE_ENV: 'production'
      }
      error_file:
  ./logs/build-health-error.log', ';
      out_file: './logs/build-health-out.lo,g, ';
      log_file: ';./logs/build-health-combined.log, ',';
      time: tru,e
      log_date_format:
  YYYY-MM-DD: HH: mm:ss: Z,
      merge_logs: tru,e
      max_restarts: 5,
      min_uptime: ';5s, ',';
      restart_delay: 100,0
      cron_restart:
  */15: * * * *'    }, ';
    {
      name: 'merge-conflict-resolve,r, ';
      script: ';./scripts/merge-conflict-resolver.cjs, ',';
      instances: 1,
      autorestart: tru,e
      watch: fals,e
    }
    {

      name: 'merge-conflict-resolver
      script: ';./scripts/merge-conflict-resolver.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart:
  500M', ';
      env: {
        NODE_ENV: 'production'
      }
      error_file:
  ./logs/merge-resolver-error.log', ';
      out_file: './logs/merge-resolver-out.lo,g, ';
      log_file: ';./logs/merge-resolver-combined.log, ',';
      time: tru,e
      log_date_format:
  YYYY-MM-DD: HH: mm:ss: Z,
      merge_logs: tru,e
      max_restarts: 3,
      min_uptime: ';10s, ',';
      restart_delay: 500,0
      cron_restart:
  */30: * * * *'    }, ';
    // Enhanced: automation processes{
      name: 'ai-code-analyze,r, ';
      script: ';./scripts/automation/ai-code-analyzer.cjs, ',';
      instances: 1,
      autorestart: tru,e
      watch: fals,e
    }
    // Enhanced automation processes
    {

      name: 'ai-code-analyzer
      script: ';./scripts/automation/ai-code-analyzer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart:
  512M', ';
      env: {
        NODE_ENV: 'production
        AI_ANALYSIS_MODE:
  true'
      }
      cron_restart: '0 */2 * * *
      log_file:
  ./logs/ai-code-analyzer.log',
      error_file: './logs/ai-code-analyzer-error.log
      out_file: './logs/ai-code-analyzer-out.log',
      merge_logs: true,
