    // Auto-Fix Engine;
    {;
      name: 'auto-fix-engine',
      script: './scripts/automation/auto-fix-engine.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {;
        NODE_ENV: 'production',
        AUTO_FIX_MODE: 'true',,
},
      cron_restart: '0 */2 * * *', // Restart every 2 hours;
      log_file: './logs/auto-fix-engine.log',
      error_file: './logs/auto-fix-engine-error.log',
      out_file: './logs/auto-fix-engine-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',,
}
  ];};
module.exports = { apps: [{ name: "ziontechgroup-web","" script: "npm","" args: "start","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "production"," PORT: 3000 }," env_development: {" NODE_ENV: "development"," PORT: 3000 },"" log_file: "./automation/logs/web.log","" out_file: "./automation/logs/web-out.log","" error_file: "./automation/logs/web-error.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z" }, {"" name: "error-prevention-monitor","" script: "node","" args: "automation/error-prevention-monitor.js","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "*/10 * * * *", / Restart every 10 minutes" env: {" NODE_ENV: "production" },"" log_file: "./automation/logs/error-prevention.log","" out_file: "./automation/logs/error-prevention-out.log","" error_file: "./automation/logs/error-prevention-error.log" }, {"" name: "merge-conflict-detector","" script: "node","" args: "automation/merge-conflict-detector.js","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "*/15 * * * *", / Restart every 15 minutes" env: {" NODE_ENV: "production" },"" log_file: "./automation/logs/merge-conflict-detector.log","" out_file: "./automation/logs/merge-conflict-detector-out.log","" error_file: "./automation/logs/merge-conflict-detector-error.log" }, {"" name: "build-error-monitor","" script: "node","" args: "automation/build-error-monitor.js","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "*/30 * * * *", / Restart every 30 minutes" env: {" NODE_ENV: "production" },"" log_file: "./automation/logs/build-error-monitor.log","" out_file: "./automation/logs/build-error-monitor-out.log","" error_file: "./automation/logs/build-error-monitor-error.log" } ]};"""
module.exports = {}
  "apps": [{}]
      name: 'ziontechgroup-web',
      "script": 'npm',
      "args": 'start',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'production',
        "PORT": 3000;
      },
      "env_development": {}
        NODE_ENV: 'development',
        "PORT": 3000;
      },
      "log_file": './automation/logs/web.log',
      "out_file": './automation/logs/web-out.log',
      "error_file": './automation/logs/web-error.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    },
    {}
      "name": 'error-prevention-monitor',
      "script": 'node',
      "args": 'automation/error-prevention-monitor.js',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/10 * * * *', // Restart every 10 minutes;
      "env": {}
        NODE_ENV: 'production'
      },
      "log_file": './automation/logs/error-prevention.log',
      "out_file": './automation/logs/error-prevention-out.log',
      "error_file": './automation/logs/error-prevention-error.log'
    },
    {}
      "name": 'merge-conflict-detector',
      "script": 'node',
      "args": 'automation/merge-conflict-detector.js',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/15 * * * *', // Restart every 15 minutes;
      "env": {}
        NODE_ENV: 'production'
      },
      "log_file": './automation/logs/merge-conflict-detector.log',
      "out_file": './automation/logs/merge-conflict-detector-out.log',
      "error_file": './automation/logs/merge-conflict-detector-error.log'
    },
    {}
      "name": 'build-error-monitor',
      "script": 'node',
      "args": 'automation/build-error-monitor.js',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/30 * * * *', // Restart every 30 minutes;
      "env": {}
        NODE_ENV: 'production'
      },
      "log_file": './automation/logs/build-error-monitor.log',
      "out_file": './automation/logs/build-error-monitor-out.log',
      "error_file": './automation/logs/build-error-monitor-error.log'
    };
  ];
};