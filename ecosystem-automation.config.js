export default {apps: [
    //Main application
    {
      name: 'zion-app',
      script: 'npm',
      args: 'run dev',
      cwd: '/workspace',
      watch: false,
  instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 3000}
      },
      env_production: {NODE_ENV: 'production',
        PORT: 3000}
      },
    },
    //CI Automation - runs every 6 hours
    {name: 'ci-automation',
      script: '/workspace/scripts/ci-automation.sh',
      cwd: '/workspace',
      watch: false,
  instances: 1,
      autorestart: false,
      cron_restart: '0 */6 * * *', //Every 6 hours
      env: {
        NODE_ENV: 'development'}
      },
    },
    //Dependency Management - runs every Monday at 2 AM
    {name: 'dependency-automation',
      script: '/workspace/scripts/dependency-automation.sh',
      cwd: '/workspace',
      watch: false,
  instances: 1,
      autorestart: false,
      cron_restart: '0 2 * * 1', //Every Monday at 2 AM
      env: {
        NODE_ENV: 'development'}
      },
    },
    //Deploy Automation - runs on demand
    {name: 'deploy-automation',
      script: '/workspace/scripts/deploy-automation.sh',
      cwd: '/workspace',
      watch: false,
  instances: 1,
      autorestart: false,
      env: {
        NODE_ENV: 'production'}
      },
    },
  ],
  deploy: {production: {
      user: 'ubuntu',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/your-repo.git',
      path: '/workspace',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''}
    },
  };
};
export default {apps: [ //Main application { name: 'zion-app',' script: 'npm',' args: 'run dev',' cwd: '/workspace', watch: false,
  instances: 1, autorestart: true,' max_memory_restart: '1G', env: {' NODE_ENV: 'development'} PORT: 3000 }, env_production: {' NODE_ENV: 'production'} PORT: 3000 } }, //CI Automation - runs every 6 hours {' name: 'ci-automation',' script: '/workspace/scripts/ci-automation.sh',' cwd: '/workspace', watch: false,
  instances: 1, autorestart: false,' cron_restart: '0 */6 * * *'} //Every 6 hours env: {' NODE_ENV: 'development' } }, //Dependency Management - runs every Monday at 2 AM {' name: 'dependency-automation',' script: '/workspace/scripts/dependency-automation.sh',' cwd: '/workspace', watch: false,
  instances: 1, autorestart: false,' cron_restart: '0 2 * * 1'} //Every Monday at 2 AM env: {' NODE_ENV: 'development' } }, //Deploy Automation - runs on demand {' name: 'deploy-automation',' script: '/workspace/scripts/deploy-automation.sh',' cwd: '/workspace', watch: false,
  instances: 1, autorestart: false} env: {' NODE_ENV: 'production' } } ], deploy: {production: {' user: 'ubuntu',' host: 'localhost',' ref: 'origin/main',' repo: 'git@github.com:your-username/your-repo.git',' path: '/workspace',' 'pre-deploy-local': ''}' 'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production';' 'pre-setup': '' } } };'
