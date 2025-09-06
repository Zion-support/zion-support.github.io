<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
module.exports = { apps: [{ name: "maintenance-runner","" script: "scripts/automation/maintenance-runner.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production"},"" cron_restart: "0 */6 * * *", / every 6 hours"" log_file: "logs/maintenance-runner.log","" error_file: "logs/maintenance-runner-error.log","" out_file: "logs/maintenance-runner-out.log"," merge_logs: true}, ]};"""
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
module.exports = { apps: [{ name: "maintenance-runner","" script: "scripts/automation/maintenance-runner.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production"},"" cron_restart: "0 */6 * * *", / every 6 hours"" log_file: "logs/maintenance-runner.log","" error_file: "logs/maintenance-runner-error.log","" out_file: "logs/maintenance-runner-out.log"," merge_logs: true}, ]};"""
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  ]};

=======
  ]};
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
  ]};
=======
  ]};

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
  ]};

>>>>>>> origin/main
