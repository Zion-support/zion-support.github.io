<<<<<<< HEAD


>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
module.exports = { apps: [{ name: "maintenance-runner","" script: "scripts/automation/maintenance-runner.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production"},"" cron_restart: "0 */6 * * *", / every 6 hours"" log_file: "logs/maintenance-runner.log","" error_file: "logs/maintenance-runner-error.log","" out_file: "logs/maintenance-runner-out.log"," merge_logs: true}, ]};"""
module.exports = { apps: [{ name: "maintenance-runner","" script: "scripts/automation/maintenance-runner.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production"},"" cron_restart: "0 */6 * * *", / every 6 hours"" log_file: "logs/maintenance-runner.log","" error_file: "logs/maintenance-runner-error.log","" out_file: "logs/maintenance-runner-out.log"," merge_logs: true}, ]};"""
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
=======
<<<<<<< HEAD
  ]};

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

  ]};
  ]};
  ]};

  ]};

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
