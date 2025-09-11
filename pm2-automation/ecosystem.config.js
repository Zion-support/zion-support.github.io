
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

=======
<<<<<<< HEAD
export default { apps: [ { name: 'ci-cd-automation',script: './pm2-automation/ci-cd-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/ci-cd-combined.log',out_file: './pm2-automation/logs/ci-cd-out.log',error_file: './pm2-automation/logs/ci-cd-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },{ name: 'continuous-automation',script: './pm2-automation/continuous-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/continuous-combined.log',out_file: './pm2-automation/logs/continuous-out.log',error_file: './pm2-automation/logs/continuous-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' } ] };
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
=======

=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======

export default { apps: [ { name: 'ci-cd-automation',script: './pm2-automation/ci-cd-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/ci-cd-combined.log',out_file: './pm2-automation/logs/ci-cd-out.log',error_file: './pm2-automation/logs/ci-cd-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },{ name: 'continuous-automation',script: './pm2-automation/continuous-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/continuous-combined.log',out_file: './pm2-automation/logs/continuous-out.log',error_file: './pm2-automation/logs/continuous-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' } ] };

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD

=======

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
=======
export default { apps: [ { name: 'ci-cd-automation',script: './pm2-automation/ci-cd-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/ci-cd-combined.log',out_file: './pm2-automation/logs/ci-cd-out.log',error_file: './pm2-automation/logs/ci-cd-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },{ name: 'continuous-automation',script: './pm2-automation/continuous-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/continuous-combined.log',out_file: './pm2-automation/logs/continuous-out.log',error_file: './pm2-automation/logs/continuous-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' } ] };
export default { apps: [ { name: 'ci-cd-automation',script: './pm2-automation/ci-cd-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/ci-cd-combined.log',out_file: './pm2-automation/logs/ci-cd-out.log',error_file: './pm2-automation/logs/ci-cd-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },{ name: 'continuous-automation',script: './pm2-automation/continuous-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/continuous-combined.log',out_file: './pm2-automation/logs/continuous-out.log',error_file: './pm2-automation/logs/continuous-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' } ] };
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
