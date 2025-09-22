>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
module.exports = {
  apps: [
    // Main Error Prevention System;
    {

      time: true;
    // Continuous Linting Monitor;

    }]
  ],
deploy: {
    production: {
      user: 'deploy',
      host: ['production-server'],
      ref: 'origin/main',
      repo: 'git@github.com:Zion-Holdings/zion.app.git',
      path: '/var/www/ziontechgroup.com',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.error-prevention.cjs --env production',
      'pre-setup': ''
    }
  }
};
module.exports = { apps: [{ name: "ziontechgroup-web","" script: "npm","" args: "start","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "production"," PORT: 3000 }," env_development: {" NODE_ENV: "development"," PORT: 3000 },"" log_file: "./automation/logs/web.log","" out_file: "./automation/logs/web-out.log","" error_file: "./automation/logs/web-error.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z" }, {"" name: "error-prevention-monitor","" script: "node","" args: "automation/error-prevention-monitor.js","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "*/10 * * * *", / Restart every 10 minutes" env: {" NODE_ENV: "production" },"" log_file: "./automation/logs/error-prevention.log","" out_file: "./automation/logs/error-prevention-out.log","" error_file: "./automation/logs/error-prevention-error.log" }, {"" name: "merge-conflict-detector","" script: "node","" args: "automation/merge-conflict-detector.js","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "*/15 * * * *", / Restart every 15 minutes" env: {" NODE_ENV: "production" },"" log_file: "./automation/logs/merge-conflict-detector.log","" out_file: "./automation/logs/merge-conflict-detector-out.log","" error_file: "./automation/logs/merge-conflict-detector-error.log" }, {"" name: "build-error-monitor","" script: "node","" args: "automation/build-error-monitor.js","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "*/30 * * * *", / Restart every 30 minutes" env: {" NODE_ENV: "production" },"" log_file: "./automation/logs/build-error-monitor.log","" out_file: "./automation/logs/build-error-monitor-out.log","" error_file: "./automation/logs/build-error-monitor-error.log" } ]};"""
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
};
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
