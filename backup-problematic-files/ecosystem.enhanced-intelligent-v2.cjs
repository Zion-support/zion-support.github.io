module.exports = {}
  "apps": [// Main Application;]
    {}
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
        "PORT": 3000,
        "DEBUG": 'true'
      },
      "log_file": './logs/web.log',
      "out_file": './logs/web-out.log',
      "error_file": './logs/web-error.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z',
      "merge_logs": true,
      "time": true;
    },
    // AI-Powered Code Analysis & Auto-Fixing;

    };
  ],
// PM2 Deploy configuration;
  "deploy": {}
    production: {}
      user: 'node',
      "host": 'your-production-server.com',
      "ref": 'origin/main',
      "repo": 'git@github.com:your-username/your-repo.git',
      "path": '/var/www/production',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.enhanced-intelligent-v2.cjs --env production',
      'pre-setup': ''
    },
    "staging": {}
      user: 'node',
      "host": 'your-staging-server.com',
      "ref": 'origin/develop',
      "repo": 'git@github.com:your-username/your-repo.git',
      "path": '/var/www/staging',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.enhanced-intelligent-v2.cjs --env staging',
      'pre-setup': ''
    };
  };
};
};
