module.exports = {
  apps: [
    {
      name: "zion-website",
      script: "npm",
      args: "run dev",
      cwd: "/workspace",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: { NODE_ENV: "development", PORT: 3000 },
      env_production: { NODE_ENV: "production", PORT: 3000 },
      log_file: "./logs/zion-website.log",
      out_file: "./logs/zion-website-out.log",
      error_file: "./logs/zion-website-error.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: true
    },
    {
      name: "error-monitor",
      script: "./scripts/automation/error-monitor.cjs",
      cwd: "/workspace",
      instances: 1,
      autorestart: true,
      watch: false,
      restart_delay: 5000,
      max_restarts: 10,
      min_uptime: "10s",
      log_file: "./logs/error-monitor.log",
      out_file: "./logs/error-monitor-out.log",
      error_file: "./logs/error-monitor-error.log",
      cron_restart: "0 */2 * * *"
    },
    {
      name: "syntax-fixer",
      script: "./scripts/automation/syntax-fixer.cjs",
      cwd: "/workspace",
      instances: 1,
      autorestart: true,
      watch: false,
      restart_delay: 10000,
      max_restarts: 5,
      min_uptime: "30s",
      log_file: "./logs/syntax-fixer.log",
      out_file: "./logs/syntax-fixer-out.log",
      error_file: "./logs/syntax-fixer-error.log",
      cron_restart: "0 */6 * * *"
    },
    {
      name: "dependency-manager",
      script: "./scripts/automation/dependency-manager.cjs",
      cwd: "/workspace",
      instances: 1,
      autorestart: true,
      watch: false,
      restart_delay: 15000,
      max_restarts: 3,
      min_uptime: "60s",
      log_file: "./logs/dependency-manager.log",
      out_file: "./logs/dependency-manager-out.log",
      error_file: "./logs/dependency-manager-error.log",
      cron_restart: "0 8 * * *"
    },
    {
      name: "build-monitor",
      script: "./scripts/automation/build-monitor.cjs",
      cwd: "/workspace",
      instances: 1,
      autorestart: true,
      watch: false,
      restart_delay: 30000,
      max_restarts: 3,
      min_uptime: "120s",
      log_file: "./logs/build-monitor.log",
      out_file: "./logs/build-monitor-out.log",
      error_file: "./logs/build-monitor-error.log",
      cron_restart: "0 */4 * * *"
    },
    {
      name: "auto-fix-and-build",
      script: "bash",
      args: "-lc \"npm install --silent && npm run lint || true && npm run type-check || true && npm run build\"",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      cron_restart: "0 */6 * * *",
      log_file: "logs/auto-fix-and-build.log",
      out_file: "logs/auto-fix-and-build-out.log",
      error_file: "logs/auto-fix-and-build-error.log"
    }
  ],
  deploy: {
    production: {
      user: "deploy",
      host: "localhost",
      ref: "origin/main",
      repo: "git@github.com:Zion-Holdings/zion.app.git",
      path: "/var/www/production",
      "post-deploy": "npm install && pm2 reload ecosystem.config.cjs --env production"
    }
  }
}
