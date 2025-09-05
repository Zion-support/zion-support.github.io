export default {
  "apps": [{
      name: 'ci-cd-automation',
      "script": './pm2-automation/ci-cd-automation.js',
      "instances": '1',
      "autorestart": 'true',
      "watch": 'false',
      "max_memory_restart": '1G',
      "env": {
        NODE_ENV: 'production'
      },
      "cron_restart": '0 */6 * * *',
      "log_file": './pm2-automation/logs/ci-cd-combined.log',
      "out_file": './pm2-automation/logs/ci-cd-out.log',
      "error_file": './pm2-automation/logs/ci-cd-error.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    },
    {
      "name": 'continuous-automation',
      "script": './pm2-automation/continuous-automation.js',
      "instances": '1',
      "autorestart": 'true',
      "watch": 'false',
      "max_memory_restart": '1G',
      "env": {
        NODE_ENV: 'production'
      },
      "cron_restart": '0 */6 * * *',
      "log_file": './pm2-automation/logs/continuous-combined.log',
      "out_file": './pm2-automation/logs/continuous-out.log',
      "error_file": './pm2-automation/logs/continuous-error.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    }
  ]
};
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
export default { apps: [ { name: 'ci-cd-automation',script: './pm2-automation/ci-cd-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/ci-cd-combined.log',out_file: './pm2-automation/logs/ci-cd-out.log',error_file: './pm2-automation/logs/ci-cd-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },{ name: 'continuous-automation',script: './pm2-automation/continuous-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/continuous-combined.log',out_file: './pm2-automation/logs/continuous-out.log',error_file: './pm2-automation/logs/continuous-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' } ] };
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
export default { apps: [ { name: 'ci-cd-automation',script: './pm2-automation/ci-cd-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/ci-cd-combined.log',out_file: './pm2-automation/logs/ci-cd-out.log',error_file: './pm2-automation/logs/ci-cd-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },{ name: 'continuous-automation',script: './pm2-automation/continuous-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/continuous-combined.log',out_file: './pm2-automation/logs/continuous-out.log',error_file: './pm2-automation/logs/continuous-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' } ] };
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
