module.exports = {
  apps: [


  ],

  deploy: {
    production: {
      user: 'deploy',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/your-repo.git',
      path: '/var/www/production',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.cjs --env production' } } };

