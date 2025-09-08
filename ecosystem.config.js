export default {
  apps: [
    {
      name: 'bolt-zion-app'
      script: 'npm'
      args: 'run preview'
      cwd: './'
      instances: '1'
      autorestart: 'true'
      watch: 'false'
      max_memory_restart: '1G'
      env: {
        NODE_ENV: 'production'
      }
      log_file: 'logs/pm2/preview.log'
      error_file: 'logs/pm2/preview-error.log'
      out_file: 'logs/pm2/preview-out.log'
    }
  ],
module.exports = {
  apps: [{
    name: "ziontechgroup-site",
    script: "npm",
    args: "start",
    instances: 1,
    exec_mode: "fork",
    env: {
      NODE_ENV: "production",
      PORT: 3000
    },
    env_production: {
      NODE_ENV: "production",
      PORT: 3000
    },
    max_memory_restart: "1G",
    node_args: "--max-old-space-size=1024",
    error_file: "./logs/err.log",
    out_file: "./logs/out.log",
    log_file: "./logs/combined.log",
    time: true
  }]
};