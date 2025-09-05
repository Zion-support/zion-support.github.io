<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodemodule.exports = { apps: [/ Main Application with Intelligent Scaling { name: "ziontech-main-app","" script: "npm","" args: "start","" cwd: "/workspace","" instances: "max","" exec_mode: "cluster"," autorestart: true," watch: false,"" max_memory_restart: "2G","" min_uptime: "10s"," max_restarts: 10," restart_delay: 4000," env: {" NODE_ENV: "production"," PORT: 3000,"" CLUSTER_MODE: "true","" ENABLE_METRICS: "true" }," env_development: {" NODE_ENV: "development"," PORT: 3000,"" DEBUG: "true","" ENABLE_HOT_RELOAD: "true" },"" log_file: "./logs/main-app.log","" out_file: "./logs/main-app-out.log","" error_file: "./logs/main-app-error.log","" log_date_format: "YYYY-MM-DD HH:mm:ss Z"," merge_logs: true," time: true, / Intelligent scaling based on CPU and memory"" increment_var: "NODE_APP_INSTANCES"," kill_timeout: 5000," listen_timeout: 3000," wait_ready: true }, / AI-Powered Process Manager {"" name: "ai-process-manager","" script: "node","" args: "scripts/intelligent/ai-process-manager.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "0 */1 * * *", / Every hour"" max_memory_restart: "1G"," restart_delay: 10000," env: {" NODE_ENV: "production","" AI_MODE: "intelligent","" LEARNING_ENABLED: "true","" PREDICTIVE_ANALYSIS: "true" },"" log_file: "./logs/ai-process-manager.log","" out_file: "./logs/ai-process-manager-out.log","" error_file: "./logs/ai-process-manager-error.log"," merge_logs: true," time: true }, / Intelligent Monitoring System {"" name: "intelligent-monitor","" script: "node","" args: "scripts/intelligent/intelligent-monitor.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "*/2 * * * *", / Every 2 minutes"" max_memory_restart: "512M"," restart_delay: 5000," env: {" NODE_ENV: "production","" MONITORING_INTERVAL: "120000","" ALERT_THRESHOLD: "high","" PREDICTIVE_MODE: "true" },"" log_file: "./logs/intelligent-monitor.log","" out_file: "./logs/intelligent-monitor-out.log","" error_file: "./logs/intelligent-monitor-error.log"," merge_logs: true," time: true }, / Smart Auto-Scaler {"" name: "smart-auto-scaler","" script: "node","" args: "scripts/intelligent/smart-auto-scaler.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "*/5 * * * *", / Every 5 minutes"" max_memory_restart: "256M"," restart_delay: 3000," env: {" NODE_ENV: "production","" SCALING_STRATEGY: "intelligent","" MIN_INSTANCES: "1","" MAX_INSTANCES: "10","" CPU_THRESHOLD: "70","" MEMORY_THRESHOLD: "80" },"" log_file: "./logs/smart-auto-scaler.log","" out_file: "./logs/smart-auto-scaler-out.log","" error_file: "./logs/smart-auto-scaler-error.log"," merge_logs: true," time: true }, / Advanced Error Recovery System {"" name: "error-recovery-system","" script: "node","" args: "scripts/intelligent/error-recovery-system.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "*/3 * * * *", / Every 3 minutes"" max_memory_restart: "512M"," restart_delay: 5000," env: {" NODE_ENV: "production","" RECOVERY_MODE: "intelligent","" AUTO_HEAL: "true","" ROLLBACK_ENABLED: "true" },"" log_file: "./logs/error-recovery-system.log","" out_file: "./logs/error-recovery-system-out.log","" error_file: "./logs/error-recovery-system-error.log"," merge_logs: true," time: true }, / Intelligent Security Scanner {"" name: "intelligent-security-scanner","" script: "node","" args: "scripts/intelligent/intelligent-security-scanner.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "0 */4 * * *", / Every 4 hours"" max_memory_restart: "1G"," restart_delay: 15000," env: {" NODE_ENV: "production","" SECURITY_LEVEL: "maximum","" VULNERABILITY_SCANNING: "true","" COMPLIANCE_CHECK: "true" },"" log_file: "./logs/intelligent-security-scanner.log","" out_file: "./logs/intelligent-security-scanner-out.log","" error_file: "./logs/intelligent-security-scanner-error.log"," merge_logs: true," time: true }, / Performance Optimizer {"" name: "performance-optimizer","" script: "node","" args: "scripts/intelligent/performance-optimizer.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "0 */6 * * *", / Every 6 hours"" max_memory_restart: "1G"," restart_delay: 20000," env: {" NODE_ENV: "production","" OPTIMIZATION_LEVEL: "aggressive","" BUNDLE_OPTIMIZATION: "true","" CACHE_OPTIMIZATION: "true" },"" log_file: "./logs/performance-optimizer.log","" out_file: "./logs/performance-optimizer-out.log","" error_file: "./logs/performance-optimizer-error.log"," merge_logs: true," time: true }, / Smart Deployment Manager {"" name: "smart-deployment-manager","" script: "node","" args: "scripts/intelligent/smart-deployment-manager.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "0 */8 * * *", / Every 8 hours"" max_memory_restart: "1G"," restart_delay: 30000," env: {" NODE_ENV: "production","" DEPLOYMENT_STRATEGY: "blue-green","" AUTO_ROLLBACK: "true","" HEALTH_CHECK_ENABLED: "true" },"" log_file: "./logs/smart-deployment-manager.log","" out_file: "./logs/smart-deployment-manager-out.log","" error_file: "./logs/smart-deployment-manager-error.log"," merge_logs: true," time: true }, / Intelligent Code Quality Manager {"" name: "code-quality-manager","" script: "node","" args: "scripts/intelligent/code-quality-manager.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "*/15 * * * *", / Every 15 minutes"" max_memory_restart: "512M"," restart_delay: 10000," env: {" NODE_ENV: "production","" QUALITY_STANDARDS: "high","" AUTO_FIX: "true","" COVERAGE_THRESHOLD: "85" },"" log_file: "./logs/code-quality-manager.log","" out_file: "./logs/code-quality-manager-out.log","" error_file: "./logs/code-quality-manager-error.log"," merge_logs: true," time: true }, / Smart Resource Manager {"" name: "smart-resource-manager","" script: "node","" args: "scripts/intelligent/smart-resource-manager.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "*/10 * * * *", / Every 10 minutes"" max_memory_restart: "256M"," restart_delay: 5000," env: {" NODE_ENV: "production","" RESOURCE_OPTIMIZATION: "true","" MEMORY_MANAGEMENT: "intelligent","" CPU_OPTIMIZATION: "true" },"" log_file: "./logs/smart-resource-manager.log","" out_file: "./logs/smart-resource-manager-out.log","" error_file: "./logs/smart-resource-manager-error.log"," merge_logs: true," time: true }, / Intelligent Git Workflow Manager {"" name: "git-workflow-manager","" script: "node","" args: "scripts/intelligent/git-workflow-manager.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "*/20 * * * *", / Every 20 minutes"" max_memory_restart: "512M"," restart_delay: 10000," env: {" NODE_ENV: "production","" AUTO_MERGE: "false","" CONFLICT_RESOLUTION: "intelligent","" BRANCH_CLEANUP: "true" },"" log_file: "./logs/git-workflow-manager.log","" out_file: "./logs/git-workflow-manager-out.log","" error_file: "./logs/git-workflow-manager-error.log"," merge_logs: true," time: true }, / Advanced Analytics Engine {"" name: "analytics-engine","" script: "node","" args: "scripts/intelligent/analytics-engine.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "0 */12 * * *", / Every 12 hours"" max_memory_restart: "1G"," restart_delay: 60000," env: {" NODE_ENV: "production","" ANALYTICS_MODE: "comprehensive","" REPORTING_ENABLED: "true","" INSIGHTS_GENERATION: "true" },"" log_file: "./logs/analytics-engine.log","" out_file: "./logs/analytics-engine-out.log","" error_file: "./logs/analytics-engine-error.log"," merge_logs: true," time: true }, / Intelligent Backup Manager {"" name: "backup-manager","" script: "node","" args: "scripts/intelligent/backup-manager.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "0 2 * * *", / Daily at 2 AM"" max_memory_restart: "512M"," restart_delay: 120000," env: {" NODE_ENV: "production","" BACKUP_STRATEGY: "incremental","" RETENTION_DAYS: "30","" COMPRESSION_ENABLED: "true" },"" log_file: "./logs/backup-manager.log","" out_file: "./logs/backup-manager-out.log","" error_file: "./logs/backup-manager-error.log"," merge_logs: true," time: true }, / Smart Health Checker {"" name: "smart-health-checker","" script: "node","" args: "scripts/intelligent/smart-health-checker.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" cron_restart: "*/1 * * * *", / Every minute"" max_memory_restart: "128M"," restart_delay: 2000," env: {" NODE_ENV: "production","" HEALTH_CHECK_INTERVAL: "60000","" ALERT_THRESHOLD: "medium","" NOTIFICATION_ENABLED: "true" },"" log_file: "./logs/smart-health-checker.log","" out_file: "./logs/smart-health-checker-out.log","" error_file: "./logs/smart-health-checker-error.log"," merge_logs: true," time: true }, / Intelligent Dashboard System {"" name: "intelligent-dashboard","" script: "node","" args: "scripts/intelligent/dashboard-system.cjs","" cwd: "/workspace"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," restart_delay: 5000," env: {" NODE_ENV: "production","" DASHBOARD_PORT: "3001","" REFRESH_INTERVAL: "5000" },"" log_file: "./logs/intelligent-dashboard.log","" out_file: "./logs/intelligent-dashboard-out.log","" error_file: "./logs/intelligent-dashboard-error.log"," merge_logs: true," time: true } ], / PM2 Deploy configuration for multiple environments" deploy: { production: {" user: "node","" host: process.env.PRODUCTION_HOST | "your-production-server.com","" ref: "origin/main","" repo: process.env.REPO_URL | "git@github.com:your-username/your-repo.git","" path: "/var/www/production","" "pre-deploy-local": "echo "Preparing for production deployment.""," "post-deploy": "npm install --production && pm2 reload ecosystem.intelligent-v3.cjs --env production && pm2 save"," "pre-setup": "apt-get update && apt-get install -y git" }," staging: {" user: "node","" host: process.env.STAGING_HOST | "your-staging-server.com","" ref: "origin/develop","" repo: process.env.REPO_URL | "git@github.com:your-username/your-repo.git","" path: "/var/www/staging","" "pre-deploy-local": "echo "Preparing for staging deployment.""," "post-deploy": "npm install && pm2 reload ecosystem.intelligent-v3.cjs --env staging && pm2 save"," "pre-setup": "apt-get update && apt-get install -y git" }," development: {" user: "node","" host: process.env.DEV_HOST | "localhost","" ref: "origin/develop","" repo: process.env.REPO_URL | "git@github.com:your-username/your-repo.git","" path: "/var/www/development","" "pre-deploy-local": "echo "Preparing for development deployment.""," "post-deploy": "npm install && pm2 reload ecosystem.intelligent-v3.cjs --env development"," "pre-setup": "apt-get update && apt-get install -y git" } }};'"'"
=======
#!/usr/bin/env node;
/**
 * Zion Tech Group - Intelligent PM2 Ecosystem v3.0;
 * Advanced process management with AI-powered optimization;
 * 
 * "Features": * - Intelligent process scaling;
 * - Predictive failure prevention;
 * - Auto-healing capabilities;
 * - Smart resource management;
 * - Advanced monitoring and analytics;
 * - Automated deployment and rollback;
 * - Security scanning and compliance;
 * - Performance optimization;
 */

module.exports = {}
  apps: [// Main Application with Intelligent Scaling;]
    {}
      name: 'ziontech-main-app',
      "script": 'npm',
      "args": 'start',
      "cwd": '/workspace',
      "instances": 'max',
      "exec_mode": 'cluster',
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '2G',
      "min_uptime": '10s',
      "max_restarts": 10,
      "restart_delay": 4000,
      "env": {}
        NODE_ENV: 'production',
        "PORT": 3000,
        "CLUSTER_MODE": 'true',
        "ENABLE_METRICS": 'true'
      },
      "env_development": {}
        NODE_ENV: 'development',
        "PORT": 3000,
        "DEBUG": 'true',
        "ENABLE_HOT_RELOAD": 'true'
      },
      "log_file": './logs/main-app.log',
      "out_file": './logs/main-app-out.log',
      "error_file": './logs/main-app-error.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z',
      "merge_logs": true,
      "time": true,
      // Intelligent scaling based on CPU and memory;
      "increment_var": 'NODE_APP_INSTANCES',
      "kill_timeout": 5000,
      "listen_timeout": 3000,
      "wait_ready": true;
    },

    // AI-Powered Process Manager;
    {}
      "name": 'ai-process-manager',
      "script": 'node',
      "args": 'scripts/intelligent/ai-process-manager.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */1 * * *', // Every hour;
      "max_memory_restart": '1G',
      "restart_delay": 10000,
      "env": {}
        NODE_ENV: 'production',
        "AI_MODE": 'intelligent',
        "LEARNING_ENABLED": 'true',
        "PREDICTIVE_ANALYSIS": 'true'
      },
      "log_file": './logs/ai-process-manager.log',
      "out_file": './logs/ai-process-manager-out.log',
      "error_file": './logs/ai-process-manager-error.log',
      "merge_logs": true,
      "time": true;
    },

    // Intelligent Monitoring System;
    {}
      "name": 'intelligent-monitor',
      "script": 'node',
      "args": 'scripts/intelligent/intelligent-monitor.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/2 * * * *', // Every 2 minutes;
      "max_memory_restart": '512M',
      "restart_delay": 5000,
      "env": {}
        NODE_ENV: 'production',
        "MONITORING_INTERVAL": '120000',
        "ALERT_THRESHOLD": 'high',
        "PREDICTIVE_MODE": 'true'
      },
      "log_file": './logs/intelligent-monitor.log',
      "out_file": './logs/intelligent-monitor-out.log',
      "error_file": './logs/intelligent-monitor-error.log',
      "merge_logs": true,
      "time": true;
    },

    // Smart Auto-Scaler;
    {}
      "name": 'smart-auto-scaler',
      "script": 'node',
      "args": 'scripts/intelligent/smart-auto-scaler.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/5 * * * *', // Every 5 minutes;
      "max_memory_restart": '256M',
      "restart_delay": 3000,
      "env": {}
        NODE_ENV: 'production',
        "SCALING_STRATEGY": 'intelligent',
        "MIN_INSTANCES": '1',
        "MAX_INSTANCES": '10',
        "CPU_THRESHOLD": '70',
        "MEMORY_THRESHOLD": '80'
      },
      "log_file": './logs/smart-auto-scaler.log',
      "out_file": './logs/smart-auto-scaler-out.log',
      "error_file": './logs/smart-auto-scaler-error.log',
      "merge_logs": true,
      "time": true;
    },

    // Advanced Error Recovery System;
    {}
      "name": 'error-recovery-system',
      "script": 'node',
      "args": 'scripts/intelligent/error-recovery-system.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/3 * * * *', // Every 3 minutes;
      "max_memory_restart": '512M',
      "restart_delay": 5000,
      "env": {}
        NODE_ENV: 'production',
        "RECOVERY_MODE": 'intelligent',
        "AUTO_HEAL": 'true',
        "ROLLBACK_ENABLED": 'true'
      },
      "log_file": './logs/error-recovery-system.log',
      "out_file": './logs/error-recovery-system-out.log',
      "error_file": './logs/error-recovery-system-error.log',
      "merge_logs": true,
      "time": true;
    },

    // Intelligent Security Scanner;
    {}
      "name": 'intelligent-security-scanner',
      "script": 'node',
      "args": 'scripts/intelligent/intelligent-security-scanner.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */4 * * *', // Every 4 hours;
      "max_memory_restart": '1G',
      "restart_delay": 15000,
      "env": {}
        NODE_ENV: 'production',
        "SECURITY_LEVEL": 'maximum',
        "VULNERABILITY_SCANNING": 'true',
        "COMPLIANCE_CHECK": 'true'
      },
      "log_file": './logs/intelligent-security-scanner.log',
      "out_file": './logs/intelligent-security-scanner-out.log',
      "error_file": './logs/intelligent-security-scanner-error.log',
      "merge_logs": true,
      "time": true;
    },

    // Performance Optimizer;
    {}
      "name": 'performance-optimizer',
      "script": 'node',
      "args": 'scripts/intelligent/performance-optimizer.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */6 * * *', // Every 6 hours;
      "max_memory_restart": '1G',
      "restart_delay": 20000,
      "env": {}
        NODE_ENV: 'production',
        "OPTIMIZATION_LEVEL": 'aggressive',
        "BUNDLE_OPTIMIZATION": 'true',
        "CACHE_OPTIMIZATION": 'true'
      },
      "log_file": './logs/performance-optimizer.log',
      "out_file": './logs/performance-optimizer-out.log',
      "error_file": './logs/performance-optimizer-error.log',
      "merge_logs": true,
      "time": true;
    },

    // Smart Deployment Manager;
    {}
      "name": 'smart-deployment-manager',
      "script": 'node',
      "args": 'scripts/intelligent/smart-deployment-manager.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */8 * * *', // Every 8 hours;
      "max_memory_restart": '1G',
      "restart_delay": 30000,
      "env": {}
        NODE_ENV: 'production',
        "DEPLOYMENT_STRATEGY": 'blue-green',
        "AUTO_ROLLBACK": 'true',
        "HEALTH_CHECK_ENABLED": 'true'
      },
      "log_file": './logs/smart-deployment-manager.log',
      "out_file": './logs/smart-deployment-manager-out.log',
      "error_file": './logs/smart-deployment-manager-error.log',
      "merge_logs": true,
      "time": true;
    },

    // Intelligent Code Quality Manager;
    {}
      "name": 'code-quality-manager',
      "script": 'node',
      "args": 'scripts/intelligent/code-quality-manager.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/15 * * * *', // Every 15 minutes;
      "max_memory_restart": '512M',
      "restart_delay": 10000,
      "env": {}
        NODE_ENV: 'production',
        "QUALITY_STANDARDS": 'high',
        "AUTO_FIX": 'true',
        "COVERAGE_THRESHOLD": '85'
      },
      "log_file": './logs/code-quality-manager.log',
      "out_file": './logs/code-quality-manager-out.log',
      "error_file": './logs/code-quality-manager-error.log',
      "merge_logs": true,
      "time": true;
    },

    // Smart Resource Manager;
    {}
      "name": 'smart-resource-manager',
      "script": 'node',
      "args": 'scripts/intelligent/smart-resource-manager.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/10 * * * *', // Every 10 minutes;
      "max_memory_restart": '256M',
      "restart_delay": 5000,
      "env": {}
        NODE_ENV: 'production',
        "RESOURCE_OPTIMIZATION": 'true',
        "MEMORY_MANAGEMENT": 'intelligent',
        "CPU_OPTIMIZATION": 'true'
      },
      "log_file": './logs/smart-resource-manager.log',
      "out_file": './logs/smart-resource-manager-out.log',
      "error_file": './logs/smart-resource-manager-error.log',
      "merge_logs": true,
      "time": true;
    },

    // Intelligent Git Workflow Manager;
    {}
      "name": 'git-workflow-manager',
      "script": 'node',
      "args": 'scripts/intelligent/git-workflow-manager.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/20 * * * *', // Every 20 minutes;
      "max_memory_restart": '512M',
      "restart_delay": 10000,
      "env": {}
        NODE_ENV: 'production',
        "AUTO_MERGE": 'false',
        "CONFLICT_RESOLUTION": 'intelligent',
        "BRANCH_CLEANUP": 'true'
      },
      "log_file": './logs/git-workflow-manager.log',
      "out_file": './logs/git-workflow-manager-out.log',
      "error_file": './logs/git-workflow-manager-error.log',
      "merge_logs": true,
      "time": true;
    },

    // Advanced Analytics Engine;
    {}
      "name": 'analytics-engine',
      "script": 'node',
      "args": 'scripts/intelligent/analytics-engine.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */12 * * *', // Every 12 hours;
      "max_memory_restart": '1G',
      "restart_delay": 60000,
      "env": {}
        NODE_ENV: 'production',
        "ANALYTICS_MODE": 'comprehensive',
        "REPORTING_ENABLED": 'true',
        "INSIGHTS_GENERATION": 'true'
      },
      "log_file": './logs/analytics-engine.log',
      "out_file": './logs/analytics-engine-out.log',
      "error_file": './logs/analytics-engine-error.log',
      "merge_logs": true,
      "time": true;
    },

    // Intelligent Backup Manager;
    {}
      "name": 'backup-manager',
      "script": 'node',
      "args": 'scripts/intelligent/backup-manager.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 2 * * *', // Daily at 2 AM;
      "max_memory_restart": '512M',
      "restart_delay": 120000,
      "env": {}
        NODE_ENV: 'production',
        "BACKUP_STRATEGY": 'incremental',
        "RETENTION_DAYS": '30',
        "COMPRESSION_ENABLED": 'true'
      },
      "log_file": './logs/backup-manager.log',
      "out_file": './logs/backup-manager-out.log',
      "error_file": './logs/backup-manager-error.log',
      "merge_logs": true,
      "time": true;
    },

    // Smart Health Checker;
    {}
      "name": 'smart-health-checker',
      "script": 'node',
      "args": 'scripts/intelligent/smart-health-checker.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/1 * * * *', // Every minute;
      "max_memory_restart": '128M',
      "restart_delay": 2000,
      "env": {}
        NODE_ENV: 'production',
        "HEALTH_CHECK_INTERVAL": '60000',
        "ALERT_THRESHOLD": 'medium',
        "NOTIFICATION_ENABLED": 'true'
      },
      "log_file": './logs/smart-health-checker.log',
      "out_file": './logs/smart-health-checker-out.log',
      "error_file": './logs/smart-health-checker-error.log',
      "merge_logs": true,
      "time": true;
    },

    // Intelligent Dashboard System;
    {}
      "name": 'intelligent-dashboard',
      "script": 'node',
      "args": 'scripts/intelligent/dashboard-system.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "restart_delay": 5000,
      "env": {}
        NODE_ENV: 'production',
        "DASHBOARD_PORT": '3001',
        "REFRESH_INTERVAL": '5000'
      },
      "log_file": './logs/intelligent-dashboard.log',
      "out_file": './logs/intelligent-dashboard-out.log',
      "error_file": './logs/intelligent-dashboard-error.log',
      "merge_logs": true,
      "time": true;
    };
  ],

  // PM2 Deploy configuration for multiple environments;
  "deploy": {}
    production: {}
      user: 'node',
      "host": process.env.PRODUCTION_HOST || 'your-production-server.com',
      "ref": 'origin/main',
      "repo": process.env.REPO_URL || 'git@github.com:your-username/your-repo.git',
      "path": '/var/www/production',
      'pre-deploy-local': 'echo "Preparing for production deployment..."',
      'post-deploy': 'npm install --production && pm2 reload ecosystem.intelligent-v3.cjs --env production && pm2 save',
      'pre-setup': 'apt-get update && apt-get install -y git'
    },
    "staging": {}
      user: 'node',
      "host": process.env.STAGING_HOST || 'your-staging-server.com',
      "ref": 'origin/develop',
      "repo": process.env.REPO_URL || 'git@github.com:your-username/your-repo.git',
      "path": '/var/www/staging',
      'pre-deploy-local': 'echo "Preparing for staging deployment..."',
      'post-deploy': 'npm install && pm2 reload ecosystem.intelligent-v3.cjs --env staging && pm2 save',
      'pre-setup': 'apt-get update && apt-get install -y git'
    },
    "development": {}
      user: 'node',
      "host": process.env.DEV_HOST || 'localhost',
      "ref": 'origin/develop',
      "repo": process.env.REPO_URL || 'git@github.com:your-username/your-repo.git',
      "path": '/var/www/development',
      'pre-deploy-local': 'echo "Preparing for development deployment..."',
      'post-deploy': 'npm install && pm2 reload ecosystem.intelligent-v3.cjs --env development',
      'pre-setup': 'apt-get update && apt-get install -y git'
    };
  };
};
>>>>>>> main
