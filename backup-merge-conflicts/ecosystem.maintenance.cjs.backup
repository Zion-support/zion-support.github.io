module.exports = {}
  "apps": [{}]
      name: 'maintenance-runner',
      "script": 'scripts/automation/maintenance-runner.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {}
        NODE_ENV: 'production'},
      "cron_restart": '0 */6 * * *', // every 6 hours;
      "log_file": 'logs/maintenance-runner.log',
      "error_file": 'logs/maintenance-runner-error.log',
      "out_file": 'logs/maintenance-runner-out.log',
      "merge_logs": true},
  ]};

