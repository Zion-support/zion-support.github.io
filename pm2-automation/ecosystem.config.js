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

=======
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======

export default { apps: [ { name: 'ci-cd-automation',script: './pm2-automation/ci-cd-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/ci-cd-combined.log',out_file: './pm2-automation/logs/ci-cd-out.log',error_file: './pm2-automation/logs/ci-cd-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },{ name: 'continuous-automation',script: './pm2-automation/continuous-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/continuous-combined.log',out_file: './pm2-automation/logs/continuous-out.log',error_file: './pm2-automation/logs/continuous-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' } ] };

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======

=======
export default { apps: [ { name: 'ci-cd-automation',script: './pm2-automation/ci-cd-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/ci-cd-combined.log',out_file: './pm2-automation/logs/ci-cd-out.log',error_file: './pm2-automation/logs/ci-cd-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },{ name: 'continuous-automation',script: './pm2-automation/continuous-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/continuous-combined.log',out_file: './pm2-automation/logs/continuous-out.log',error_file: './pm2-automation/logs/continuous-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' } ] };
export default { apps: [ { name: 'ci-cd-automation',script: './pm2-automation/ci-cd-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/ci-cd-combined.log',out_file: './pm2-automation/logs/ci-cd-out.log',error_file: './pm2-automation/logs/ci-cd-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },{ name: 'continuous-automation',script: './pm2-automation/continuous-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/continuous-combined.log',out_file: './pm2-automation/logs/continuous-out.log',error_file: './pm2-automation/logs/continuous-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' } ] };
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5


<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
<<<<<<< HEAD
=======

export default { apps: [ { name: 'ci-cd-automation',script: './pm2-automation/ci-cd-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/ci-cd-combined.log',out_file: './pm2-automation/logs/ci-cd-out.log',error_file: './pm2-automation/logs/ci-cd-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },{ name: 'continuous-automation',script: './pm2-automation/continuous-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/continuous-combined.log',out_file: './pm2-automation/logs/continuous-out.log',error_file: './pm2-automation/logs/continuous-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' } ] };


export default { apps: [ { name: 'ci-cd-automation',script: './pm2-automation/ci-cd-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/ci-cd-combined.log',out_file: './pm2-automation/logs/ci-cd-out.log',error_file: './pm2-automation/logs/ci-cd-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },{ name: 'continuous-automation',script: './pm2-automation/continuous-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/continuous-combined.log',out_file: './pm2-automation/logs/continuous-out.log',error_file: './pm2-automation/logs/continuous-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' } ] };
export default { apps: [ { name: 'ci-cd-automation',script: './pm2-automation/ci-cd-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/ci-cd-combined.log',out_file: './pm2-automation/logs/ci-cd-out.log',error_file: './pm2-automation/logs/ci-cd-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },{ name: 'continuous-automation',script: './pm2-automation/continuous-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/continuous-combined.log',out_file: './pm2-automation/logs/continuous-out.log',error_file: './pm2-automation/logs/continuous-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' } ] };
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default { apps: [ { name: 'ci-cd-automation',script: './pm2-automation/ci-cd-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/ci-cd-combined.log',out_file: './pm2-automation/logs/ci-cd-out.log',error_file: './pm2-automation/logs/ci-cd-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },{ name: 'continuous-automation',script: './pm2-automation/continuous-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/continuous-combined.log',out_file: './pm2-automation/logs/continuous-out.log',error_file: './pm2-automation/logs/continuous-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' } ] };
export default { apps: [ { name: 'ci-cd-automation',script: './pm2-automation/ci-cd-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/ci-cd-combined.log',out_file: './pm2-automation/logs/ci-cd-out.log',error_file: './pm2-automation/logs/ci-cd-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },{ name: 'continuous-automation',script: './pm2-automation/continuous-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/continuous-combined.log',out_file: './pm2-automation/logs/continuous-out.log',error_file: './pm2-automation/logs/continuous-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' } ] };
export default { apps: [ { name: 'ci-cd-automation',script: './pm2-automation/ci-cd-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/ci-cd-combined.log',out_file: './pm2-automation/logs/ci-cd-out.log',error_file: './pm2-automation/logs/ci-cd-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },{ name: 'continuous-automation',script: './pm2-automation/continuous-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/continuous-combined.log',out_file: './pm2-automation/logs/continuous-out.log',error_file: './pm2-automation/logs/continuous-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' } ] };
ursor/integrate-build-improve-and-re-verify-8f7d
export default { apps: [ { name: 'ci-cd-automation',script: './pm2-automation/ci-cd-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/ci-cd-combined.log',out_file: './pm2-automation/logs/ci-cd-out.log',error_file: './pm2-automation/logs/ci-cd-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },{ name: 'continuous-automation',script: './pm2-automation/continuous-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/continuous-combined.log',out_file: './pm2-automation/logs/continuous-out.log',error_file: './pm2-automation/logs/continuous-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' } ] };
export default { apps: [ { name: 'ci-cd-automation',script: './pm2-automation/ci-cd-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/ci-cd-combined.log',out_file: './pm2-automation/logs/ci-cd-out.log',error_file: './pm2-automation/logs/ci-cd-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },{ name: 'continuous-automation',script: './pm2-automation/continuous-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/continuous-combined.log',out_file: './pm2-automation/logs/continuous-out.log',error_file: './pm2-automation/logs/continuous-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' } ] };
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
export default { apps: [ { name: 'ci-cd-automation',script: './pm2-automation/ci-cd-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/ci-cd-combined.log',out_file: './pm2-automation/logs/ci-cd-out.log',error_file: './pm2-automation/logs/ci-cd-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },{ name: 'continuous-automation',script: './pm2-automation/continuous-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/continuous-combined.log',out_file: './pm2-automation/logs/continuous-out.log',error_file: './pm2-automation/logs/continuous-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' } ] };
export default { apps: [ { name: 'ci-cd-automation',script: './pm2-automation/ci-cd-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/ci-cd-combined.log',out_file: './pm2-automation/logs/ci-cd-out.log',error_file: './pm2-automation/logs/ci-cd-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },{ name: 'continuous-automation',script: './pm2-automation/continuous-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/continuous-combined.log',out_file: './pm2-automation/logs/continuous-out.log',error_file: './pm2-automation/logs/continuous-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' } ] };
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export default { apps: [ { name: 'ci-cd-automation',script: './pm2-automation/ci-cd-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/ci-cd-combined.log',out_file: './pm2-automation/logs/ci-cd-out.log',error_file: './pm2-automation/logs/ci-cd-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },{ name: 'continuous-automation',script: './pm2-automation/continuous-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/continuous-combined.log',out_file: './pm2-automation/logs/continuous-out.log',error_file: './pm2-automation/logs/continuous-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' } ] };
export default { apps: [ { name: 'ci-cd-automation',script: './pm2-automation/ci-cd-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/ci-cd-combined.log',out_file: './pm2-automation/logs/ci-cd-out.log',error_file: './pm2-automation/logs/ci-cd-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },{ name: 'continuous-automation',script: './pm2-automation/continuous-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/continuous-combined.log',out_file: './pm2-automation/logs/continuous-out.log',error_file: './pm2-automation/logs/continuous-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' } ] };
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
export default { apps: [ { name: 'ci-cd-automation',script: './pm2-automation/ci-cd-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/ci-cd-combined.log',out_file: './pm2-automation/logs/ci-cd-out.log',error_file: './pm2-automation/logs/ci-cd-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },{ name: 'continuous-automation',script: './pm2-automation/continuous-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/continuous-combined.log',out_file: './pm2-automation/logs/continuous-out.log',error_file: './pm2-automation/logs/continuous-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' } ] };
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
export default { apps: [ { name: 'ci-cd-automation',script: './pm2-automation/ci-cd-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/ci-cd-combined.log',out_file: './pm2-automation/logs/ci-cd-out.log',error_file: './pm2-automation/logs/ci-cd-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' },{ name: 'continuous-automation',script: './pm2-automation/continuous-automation.js',instances: '1',autorestart: 'true',watch: 'false',max_memory_restart: '1G',env: { NODE_ENV: 'production' },cron_restart: '0 */6 * * *',log_file: './pm2-automation/logs/continuous-combined.log',out_file: './pm2-automation/logs/continuous-out.log',error_file: './pm2-automation/logs/continuous-error.log',log_date_format: 'YYYY-MM-DD HH:mm:ss Z' } ] };
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
