module.exports = {
  apps: [
    {

      time: true;
      name: 'syntax-fixer',
      script: 'automation/syntax-fix-launcher.js',
      max_memory_restart: '500M',
        FIX_INTERVAL: 60000, // 1 minute;
      error_file: 'automation/logs/syntax-fixer-error.log',
      out_file: 'automation/logs/syntax-fixer-out.log',
      log_file: 'automation/logs/syntax-fixer-combined.log',
      name: 'linting-automation',
      script: 'automation/linting-automation-orchestrator.cjs',
        LINT_INTERVAL: 120000, // 2 minutes;
      error_file: 'automation/logs/linting-error.log',
      out_file: 'automation/logs/linting-out.log',
      log_file: 'automation/logs/linting-combined.log',
      name: 'build-monitor',
      script: 'automation/build-monitor.js',
        BUILD_CHECK_INTERVAL: 300000, // 5 minutes;
      error_file: 'automation/logs/build-monitor-error.log',
      out_file: 'automation/logs/build-monitor-out.log',
      log_file: 'automation/logs/build-monitor-combined.log',
    }]
  ]
};

  ];
