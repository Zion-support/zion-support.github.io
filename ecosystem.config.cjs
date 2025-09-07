

      name: auto-fix,
      script: scripts/pm2/auto-fix.js,
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: 512M,
      env: {,
  NODE_ENV: production
      },
      log_file: logs/pm2/auto-fix.log,
      error_file: logs/pm2/auto-fix-error.log,
      out_file: logs/pm2/auto-fix-out.log,},
    {
      name: healthcheck,
      script: scripts/pm2/healthcheck.js,
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: 128M,
      env: {,
  NODE_ENV: production
      },
      log_file: logs/pm2/health.log,
      error_file: logs/pm2/health-error.log,
      out_file: logs/pm2/health-out.log,},
    {
      name: code-quality-monitor,
      script: scripts/pm2/code-quality-monitor.js,
      name: bolt-zion-app,
      script: npm,
      args: run build,
      cwd: /workspace,
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: 1G,
      env: {,
  NODE_ENV: development,
        PM2_PROCESS_NAME: code-quality-monitor,
        QUALITY_THRESHOLD: 80,
        AUTO_FIX_CRITICAL: true,},
      cron_restart: 0 0 * * *, // Daily restart;
      error_file: ./logs/ci-cd-error.log,
      out_file: ./logs/ci-cd-out.log,
      log_file: ./logs/ci-cd-combined.log,
      time: true,    },
    {
        NODE_ENV: production,},
      log_file: logs/pm2/preview.log,
      error_file: logs/pm2/preview-error.log,
      out_file: logs/pm2/preview-out.log,},
    {
      name: auto-fix,
      script: node,
      args: scripts/automation/automation-orchestrator.cjs,
      cwd: /workspace,
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: 1G,
      env: {,
  NODE_ENV: development,
        PM2_PROCESS_NAME: auto-commit-fixes,
        COMMIT_FREQUENCY: hourly,
        AUTO_PUSH: false,},
      cron_restart: 0 */6 * * *, // Every 6 hours;
      error_file: ./logs/automation-error.log,
      out_file: ./logs/automation-out.log,
      log_file: ./logs/automation-combined.log,
      time: true,
    },
    {
        NODE_ENV: production,},
      log_file: logs/pm2/preview.log,
      error_file: logs/pm2/preview-error.log,
      out_file: logs/pm2/preview-out.log,},
    {
      name: auto-fix,
      script: node,
      args: scripts/automation/automation-orchestrator.cjs,
      cwd: /workspace,
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: 1G,
      env: {,
  NODE_ENV: development,
        PM2_PROCESS_NAME: auto-commit-fixes,
        COMMIT_FREQUENCY: hourly,
        AUTO_PUSH: false,},
      cron_restart: 0 */6 * * *, // Every 6 hours;
      error_file: ./logs/automation-error.log,
      out_file: ./logs/automation-out.log,
      log_file: ./logs/automation-combined.log,
      time: true;
    },
    {
        PM2_PROCESS_NAME: code-quality-monitor,
        QUALITY_THRESHOLD: 80,
        AUTO_FIX_CRITICAL: true,},
      cron_restart: 0 */6 * * *, // Restart every 6 hours;
      log_file: logs/pm2/code-quality-monitor.log,
      error_file: logs/pm2/code-quality-monitor-error.log,
      out_file: logs/pm2/code-quality-monitor-out.log,},
    {
      name: auto-commit-fixes,
      script: scripts/pm2/auto-commit-fixes.js,
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: 1G,
      env: {

};
'
      cron_restart: 0 */6 * * *, // Every 6 hours;
      error_file: ./logs/comprehensive-automation-error.log,
      out_file: ./logs/comprehensive-automation-out.log,
      log_file: ./logs/comprehensive-automation-combined.log,
    {
      name: marketing-automation,
      script: node,
      args: scripts/linkedin_automation.js,
      cwd: /workspace,
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: 1G,
      env: {,
  cron_restart: 0 */12 * * *, // Every 12 hours;
      error_file: ./logs/marketing-automation-error.log,
      out_file: ./logs/marketing-automation-out.log,
      log_file: ./logs/marketing-automation-combined.log,
      script: npm,
      args: audit,
      cwd: /workspace,
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: 500M,
      env: {,
  cron_restart: 0 2 * * *, // Daily at 2 AM;
      error_file: ./logs/security-audit-error.log,
      out_file: ./logs/security-audit-out.log,
      log_file: ./logs/security-audit-combined.log,
    {
      name: test-runner,
      script: npm,
      args: test,
      cwd: /workspace,
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: 1G,
      env: {,
  cron_restart: 0 */4 * * *, // Every 4 hours;
      error_file: ./logs/test-runner-error.log,
      out_file: ./logs/test-runner-out.log,
      log_file: ./logs/test-runner-combined.log,
    {
      name: lint-checker,
      script: npm,
      args: run lint,
      cwd: /workspace,
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: 500M,
      env: {,
  cron_restart: 0 */2 * * *, // Every 2 hours;
      error_file: ./logs/lint-checker-error.log,
      out_file: ./logs/lint-checker-out.log,
      log_file: ./logs/lint-checker-combined.log,
      time: true;
    },
    {
      name: "zion-app",
      script: "npm",
      args: "start",
      interpreter: "none","
      cwd: __dirname,

      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {,"
  NODE_ENV: "production","
        PORT: process.env.PORT || 3000;
      },"
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/zion-app-error.log",
      out_file: "automation/logs/zion-app-out.log","
      time: true;
    },
    {"
      name: "zion-auto-sync",
      script: "automation/pm2-auto-sync.js",
      interpreter: "node","
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {,"
  NODE_ENV: "production",
        AUTO_SYNC_REMOTE: process.env.AUTO_SYNC_REMOTE || "origin",
        AUTO_SYNC_BRANCH: process.env.AUTO_SYNC_BRANCH || "main",
        AUTO_SYNC_STRATEGY: process.env.AUTO_SYNC_STRATEGY || "hardreset",
        AUTO_SYNC_CLEAN: process.env.AUTO_SYNC_CLEAN || "1",
        AUTO_SYNC_GC: process.env.AUTO_SYNC_GC || "0
      },"
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/zion-auto-sync-error.log",
      out_file: "automation/logs/zion-auto-sync-out.log","
      time: true;
    },
    {"
      name: "zion-build-monitor",
      script: "automation/continuous-build-monitor.cjs",
      interpreter: "node","
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {,"
  NODE_ENV: "production
      },"
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/build-monitor-error.log",
      out_file: "automation/logs/build-monitor-out.log","
      time: true;"
module.exports = {
  apps: [
    {
      name: ziontechgroup-site,
      script: npm,
      args: run dev,
      cwd: /workspace,
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: 1G,
      env: {
        NODE_ENV: development,
        PORT: 3000
      },
      env_production: {
        NODE_ENV: production,
        PORT: 4173
      },
      log_file: /workspace/automation_logs/app.log,
      out_file: /workspace/automation_logs/out.log,
      error_file: /workspace/automation_logs/error.log,
      log_date_format: YYYY-MM-DD HH:mm:ss Z},
    {
      name: automation-master,
      script: automation/master-orchestrator.cjs,
      args: start,
      cwd: /workspace,
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: 512M,
      env: {
        NODE_ENV: production},
      log_file: /workspace/automation_logs/automation-master.log,
      out_file: /workspace/automation_logs/automation-master-out.log,
      error_file: /workspace/automation_logs/automation-master-error.log,
      log_date_format: YYYY-MM-DD HH:mm:ss Z,
      cron_restart: 0 */6 * * * // Restart every 6 hours
    },
    {
      name: ai-quality-analyzer,
      script: scripts/automation/ai-code-quality-analyzer.cjs,
      cwd: /workspace,
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: 256M,
      env: {
        NODE_ENV: production},
      log_file: /workspace/automation_logs/ai-quality.log,
      out_file: /workspace/automation_logs/ai-quality-out.log,
      error_file: /workspace/automation_logs/ai-quality-error.log,
      log_date_format: YYYY-MM-DD HH:mm:ss Z,
      cron_restart: 0 2 * * * // Run daily at 2 AM
    },
    {
      name: ai-security-intelligence,
      script: scripts/automation/ai-security-intelligence.cjs,
      cwd: /workspace,
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: 256M,
      env: {
        NODE_ENV: production},
      log_file: /workspace/automation_logs/ai-security.log,
      out_file: /workspace/automation_logs/ai-security-out.log,
      error_file: /workspace/automation_logs/ai-security-error.log,
      log_date_format: YYYY-MM-DD HH:mm:ss Z,
      cron_restart: 0 3 * * * // Run daily at 3 AM
    },
    {
      name: ai-performance-predictor,
      script: scripts/automation/ai-performance-predictor.cjs,
      cwd: /workspace,
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: 256M,
      env: {
        NODE_ENV: production},
      log_file: /workspace/automation_logs/ai-performance.log,
      out_file: /workspace/automation_logs/ai-performance-out.log,
      error_file: /workspace/automation_logs/ai-performance-error.log,
      log_date_format: YYYY-MM-DD HH:mm:ss Z,
      cron_restart: 0 4 * * * // Run daily at 4 AM
    },
    {
      name: test-orchestrator,
      script: scripts/automation/intelligent-test-orchestrator.cjs,
      cwd: /workspace,
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: 256M,
      env: {
        NODE_ENV: production},
      log_file: /workspace/automation_logs/test-orchestrator.log,
      out_file: /workspace/automation_logs/test-orchestrator-out.log,
      error_file: /workspace/automation_logs/test-orchestrator-error.log,
      log_date_format: YYYY-MM-DD HH:mm:ss Z,
      cron_restart: 0 5 * * * // Run daily at 5 AM
    }
  ]
};
