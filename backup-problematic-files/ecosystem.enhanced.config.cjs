<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
module.exports = { apps: [{ name: "ziontechgroup-web","" script: "npm","" args: "start","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "production"," PORT: 3000 }," env_development: {" NODE_ENV: "development"," PORT: 3000 },"" log_file: "./logs/web.log","" out_file: "./logs/web-out.log","" error_file: "./logs/web-error.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z" }, {"" name: "health-checker","" script: "node","" args: "automation/health-check.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "*/5 * * * *", / Restart every 5 minutes" env: {" NODE_ENV: "production" },"" log_file: "./logs/health-check.log","" out_file: "./logs/health-check-out.log","" error_file: "./logs/health-check-error.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z" }, {"" name: "security-scanner","" script: "node","" args: "automation/security-scanner.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "0 */6 * * *", / Restart every 6 hours" env: {" NODE_ENV: "production" },"" log_file: "./logs/security-scanner.log","" out_file: "./logs/security-scanner-out.log","" error_file: "./logs/security-scanner-error.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z" }, {"" name: "performance-monitor","" script: "node","" args: "scripts/performance-monitor.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "0 */2 * * *", / Restart every 2 hours" env: {" NODE_ENV: "production" },"" log_file: "./logs/performance-monitor.log","" out_file: "./logs/performance-monitor-out.log","" error_file: "./logs/performance-monitor-error.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z" }, {"" name: "error-prevention","" script: "node","" args: "automation/error-prevention-system.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "*/10 * * * *", / Restart every 10 minutes" env: {" NODE_ENV: "production" },"" log_file: "./logs/error-prevention.log","" out_file: "./logs/error-prevention-out.log","" error_file: "./logs/error-prevention-error.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z" }, {"" name: "dependency-manager","" script: "node","" args: "automation/dependency-manager.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "0 2 * * *", / Restart daily at 2 AM" env: {" NODE_ENV: "production" },"" log_file: "./logs/dependency-manager.log","" out_file: "./logs/dependency-manager-out.log","" error_file: "./logs/dependency-manager-error.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z" }, {"" name: "code-quality-monitor","" script: "node","" args: "automation/code-quality-monitor.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "0 */4 * * *", / Restart every 4 hours" env: {" NODE_ENV: "production" },"" log_file: "./logs/code-quality.log","" out_file: "./logs/code-quality-out.log","" error_file: "./logs/code-quality-error.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z" } ]};'"'"
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
module.exports = { apps: [{ name: "ziontechgroup-web","" script: "npm","" args: "start","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "production"," PORT: 3000 }," env_development: {" NODE_ENV: "development"," PORT: 3000 },"" log_file: "./logs/web.log","" out_file: "./logs/web-out.log","" error_file: "./logs/web-error.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z" }, {"" name: "health-checker","" script: "node","" args: "automation/health-check.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "*/5 * * * *", / Restart every 5 minutes" env: {" NODE_ENV: "production" },"" log_file: "./logs/health-check.log","" out_file: "./logs/health-check-out.log","" error_file: "./logs/health-check-error.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z" }, {"" name: "security-scanner","" script: "node","" args: "automation/security-scanner.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "0 */6 * * *", / Restart every 6 hours" env: {" NODE_ENV: "production" },"" log_file: "./logs/security-scanner.log","" out_file: "./logs/security-scanner-out.log","" error_file: "./logs/security-scanner-error.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z" }, {"" name: "performance-monitor","" script: "node","" args: "scripts/performance-monitor.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "0 */2 * * *", / Restart every 2 hours" env: {" NODE_ENV: "production" },"" log_file: "./logs/performance-monitor.log","" out_file: "./logs/performance-monitor-out.log","" error_file: "./logs/performance-monitor-error.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z" }, {"" name: "error-prevention","" script: "node","" args: "automation/error-prevention-system.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "*/10 * * * *", / Restart every 10 minutes" env: {" NODE_ENV: "production" },"" log_file: "./logs/error-prevention.log","" out_file: "./logs/error-prevention-out.log","" error_file: "./logs/error-prevention-error.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z" }, {"" name: "dependency-manager","" script: "node","" args: "automation/dependency-manager.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "0 2 * * *", / Restart daily at 2 AM" env: {" NODE_ENV: "production" },"" log_file: "./logs/dependency-manager.log","" out_file: "./logs/dependency-manager-out.log","" error_file: "./logs/dependency-manager-error.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z" }, {"" name: "code-quality-monitor","" script: "node","" args: "automation/code-quality-monitor.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "0 */4 * * *", / Restart every 4 hours" env: {" NODE_ENV: "production" },"" log_file: "./logs/code-quality.log","" out_file: "./logs/code-quality-out.log","" error_file: "./logs/code-quality-error.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z" } ]};'"'"
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
      "log_file": './logs/web.log',
      "out_file": './logs/web-out.log',
      "error_file": './logs/web-error.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    },
    {}
      "name": 'health-checker',
      "script": 'node',
      "args": 'automation/health-check.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/5 * * * *', // Restart every 5 minutes;
      "env": {}
        NODE_ENV: 'production'
      },
      "log_file": './logs/health-check.log',
      "out_file": './logs/health-check-out.log',
      "error_file": './logs/health-check-error.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    },
    {}
      "name": 'security-scanner',
      "script": 'node',
      "args": 'automation/security-scanner.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */6 * * *', // Restart every 6 hours;
      "env": {}
        NODE_ENV: 'production'
      },
      "log_file": './logs/security-scanner.log',
      "out_file": './logs/security-scanner-out.log',
      "error_file": './logs/security-scanner-error.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    },
    {}
      "name": 'performance-monitor',
      "script": 'node',
      "args": 'scripts/performance-monitor.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */2 * * *', // Restart every 2 hours;
      "env": {}
        NODE_ENV: 'production'
      },
      "log_file": './logs/performance-monitor.log',
      "out_file": './logs/performance-monitor-out.log',
      "error_file": './logs/performance-monitor-error.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    },
    {}
      "name": 'error-prevention',
      "script": 'node',
      "args": 'automation/error-prevention-system.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/10 * * * *', // Restart every 10 minutes;
      "env": {}
        NODE_ENV: 'production'
      },
      "log_file": './logs/error-prevention.log',
      "out_file": './logs/error-prevention-out.log',
      "error_file": './logs/error-prevention-error.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    },
    {}
      "name": 'dependency-manager',
      "script": 'node',
      "args": 'automation/dependency-manager.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 2 * * *', // Restart daily at 2 AM;
      "env": {}
        NODE_ENV: 'production'
      },
      "log_file": './logs/dependency-manager.log',
      "out_file": './logs/dependency-manager-out.log',
      "error_file": './logs/dependency-manager-error.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    },
    {}
      "name": 'code-quality-monitor',
      "script": 'node',
      "args": 'automation/code-quality-monitor.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */4 * * *', // Restart every 4 hours;
      "env": {}
        NODE_ENV: 'production'
      },
      "log_file": './logs/code-quality.log',
      "out_file": './logs/code-quality-out.log',
      "error_file": './logs/code-quality-error.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    };
  ];
<<<<<<< HEAD
};
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
};
=======
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
};
<<<<<<< HEAD
=======
};
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
