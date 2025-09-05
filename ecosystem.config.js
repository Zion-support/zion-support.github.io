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