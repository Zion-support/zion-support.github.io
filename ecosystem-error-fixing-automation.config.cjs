module.exports = {
  apps: [
    {
      name: 'error-fixer-automation',
      script: 'automation/error-fixer-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: './automation/logs'
      },
      env_production: {
        NODE_ENV: 'production',
        PM2_HOME: './automation/logs'
      },
      error_file: './automation/logs/error-fixer-error.log',
      out_file: './automation/logs/error-fixer-out.log',
      log_file: './automation/logs/error-fixer-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 4000,
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 8000,
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      autorestart_delay: 10000,
      exp_backoff_restart_delay: 100,
      max_restarts_delay: 60000,
      node_args: '--max-old-space-size=2048',
      interpreter: 'node',
      interpreter_args: '',
      cwd: './',
      instances_var: 'INSTANCES',
      exec_mode: 'fork',
      source_map_support: true,
      disable_source_map_support: false,
      increment_var: 'PORT',
      instance_var: 'INSTANCE_ID',
      pid_file: './automation/logs/error-fixer.pid',
      write_file: './automation/logs/error-fixer.pid',
      ignore_watch: [
        'node_modules',
        'logs',
        'error-reports',
        '*.log',
        '.git',
        '.next',
        'out',
        'dist',
        'build'
      ],
      watch_options: {
        followSymlinks: false,
        usePolling: true,
        interval: 1000
      },
      // Custom error fixing automation settings
      automation_settings: {
        check_interval: 300000, // 5 minutes
        max_fixes_per_run: 100,
        backup_before_fix: true,
        notify_on_errors: true,
        auto_commit_fixes: false,
        fix_types: [
          'typescript',
          'eslint',
          'import',
          'missing_files',
          'package_json'
        ]
      }
    },
    {
      name: 'error-monitor',
      script: 'automation/error-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: './automation/logs'
      },
      error_file: './automation/logs/error-monitor-error.log',
      out_file: './automation/logs/error-monitor-out.log',
      log_file: './automation/logs/error-monitor-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 5,
      min_uptime: '10s',
      restart_delay: 2000,
      kill_timeout: 3000,
      wait_ready: true,
      listen_timeout: 5000,
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      autorestart_delay: 5000,
      exp_backoff_restart_delay: 100,
      max_restarts_delay: 30000,
      node_args: '--max-old-space-size=1024',
      interpreter: 'node',
      interpreter_args: '',
      cwd: './',
      instances_var: 'INSTANCES',
      exec_mode: 'fork',
      source_map_support: true,
      disable_source_map_support: false,
      increment_var: 'PORT',
      instance_var: 'INSTANCE_ID',
      pid_file: './automation/logs/error-monitor.pid',
      write_file: './automation/logs/error-monitor.pid',
      ignore_watch: [
        'node_modules',
        'logs',
        'error-reports',
        '*.log',
        '.git',
        '.next',
        'out',
        'dist',
        'build'
      ],
      watch_options: {
        followSymlinks: false,
        usePolling: true,
        interval: 1000
      },
      // Custom monitoring settings
      monitoring_settings: {
        check_interval: 60000, // 1 minute
        alert_threshold: 10, // Alert if more than 10 errors
        health_check_endpoint: '/health',
        metrics_collection: true,
        performance_monitoring: true
      }
    },
    {
      name: 'build-watcher',
      script: 'automation/build-watcher.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_HOME: './automation/logs'
      },
      error_file: './automation/logs/build-watcher-error.log',
      out_file: './automation/logs/build-watcher-out.log',
      log_file: './automation/logs/build-watcher-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_restarts: 3,
      min_uptime: '10s',
      restart_delay: 1000,
      kill_timeout: 2000,
      wait_ready: true,
      listen_timeout: 3000,
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      autorestart_delay: 3000,
      exp_backoff_restart_delay: 100,
      max_restarts_delay: 20000,
      node_args: '--max-old-space-size=2048',
      interpreter: 'node',
      interpreter_args: '',
      cwd: './',
      instances_var: 'INSTANCES',
      exec_mode: 'fork',
      source_map_support: true,
      disable_source_map_support: false,
      increment_var: 'PORT',
      instance_var: 'INSTANCE_ID',
      pid_file: './automation/logs/build-watcher.pid',
      write_file: './automation/logs/build-watcher.pid',
      ignore_watch: [
        'node_modules',
        'logs',
        'error-reports',
        '*.log',
        '.git',
        '.next',
        'out',
        'dist',
        'build'
      ],
      watch_options: {
        followSymlinks: false,
        usePolling: true,
        interval: 1000
      },
      // Custom build watching settings
      build_watcher_settings: {
        watch_patterns: [
          'src/**/*.{ts,tsx,js,jsx}',
          'pages/**/*.{ts,tsx,js,jsx}',
          'components/**/*.{ts,tsx,js,jsx}'
        ],
        build_command: 'npm run build',
        type_check_command: 'npm run type-check',
        lint_command: 'npm run lint',
        auto_fix_on_build_failure: true,
        notify_on_build_success: true,
        notify_on_build_failure: true
      }
    }
  ],

  deploy: {
    production: {
      user: 'node',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:username/repo.git',
      path: '/var/www/production',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem-error-fixing-automation.config.cjs --env production',
      'pre-setup': ''
    }
  },

  // Global PM2 settings
  pm2: {
    name: 'error-fixing-automation-system',
    script: 'ecosystem-error-fixing-automation.config.cjs',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PM2_HOME: './automation/logs'
    },
    env_production: {
      NODE_ENV: 'production',
      PM2_HOME: './automation/logs'
    },
    error_file: './automation/logs/pm2-error.log',
    out_file: './automation/logs/pm2-out.log',
    log_file: './automation/logs/pm2-combined.log',
    time: true,
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    max_restarts: 10,
    min_uptime: '10s',
    restart_delay: 4000,
    kill_timeout: 5000,
    wait_ready: true,
    listen_timeout: 8000,
    cron_restart: '0 0 * * *', // Daily restart
    autorestart_delay: 10000,
    exp_backoff_restart_delay: 100,
    max_restarts_delay: 60000,
    node_args: '--max-old-space-size=2048',
    interpreter: 'node',
    interpreter_args: '',
    cwd: './',
    instances_var: 'INSTANCES',
    source_map_support: true,
    disable_source_map_support: false,
    increment_var: 'PORT',
    instance_var: 'INSTANCE_ID',
    pid_file: './automation/logs/pm2.pid',
    write_file: './automation/logs/pm2.pid',
    ignore_watch: [
      'node_modules',
      'logs',
      'error-reports',
      '*.log',
      '.git',
      '.next',
      'out',
      'dist',
      'build'
    ],
    watch_options: {
      followSymlinks: false,
      usePolling: true,
      interval: 1000
    }
  }
};