module.exports = {
  apps: [
    {

  NODE_ENV: "production","
        PORT: process.env.PORT || 3000;
      },"
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/zion-app-error.log",
      out_file: "automation/logs/zion-app-out.log","
    {"
      name: "zion-auto-sync",
      script: "automation/pm2-auto-sync.js",
      interpreter: "node","
      cwd: __dirname,
      env: {,"

      out_file: "automation/logs/build-monitor-out.log","
    }
"