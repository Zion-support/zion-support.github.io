module.exports = {
  "apps": [    // Main Error Detection and Fixing Service
    {
      name: 'error-detection-service',
      "script": 'scripts/pm2/error-detection-service.js',
    // Main application;
    {;
      "name": 'zion-app',
      "script": 'npm',
      "args": 'start',
      "cwd": './',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {
        NODE_ENV: 'development',
        "PM2_PROCESS_NAME": 'error-detection-service',
        "SCAN_INTERVAL": '300000', // 5 minutes;
        "AUTO_FIX": 'true',
        "LOG_LEVEL": 'info',
        "MAX_RETRIES": '3',
        "BACKUP_BEFORE_FIX": 'true';
      },
      "cron_restart": '0 */2 * * *', // Restart every 2 hours;
      "log_file": 'logs/pm2/error-detection-service.log',
      "error_file": 'logs/pm2/error-detection-service-error.log',
      "out_file": 'logs/pm2/error-detection-service-out.log'},
    // Syntax Error Fixer;
    {;
      "name": 'syntax-error-fixer',
      "script": 'scripts/pm2/syntax-error-fixer.js',
        "NODE_ENV": 'production',
        "PORT": 3000;
      },
      "env_production": {
        NODE_ENV: 'production',
        "PORT": 3000
      }
    },
    // Error Detection and Monitoring System;
    {;
      "name": 'error-detection-monitor',
      "script": './scripts/automation/error-detection-monitor.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {
        NODE_ENV: 'production',
        "ERROR_DETECTION_INTERVAL": '300000', // 5 minutes
        "ERROR_THRESHOLD": '10'
      },
      "cron_restart": '0 */10 * * *', // Restart every 10 minutes;
      "log_file": './automation/logs/error-detection-monitor.log',
      "error_file": './automation/logs/error-detection-monitor-error.log',
      "out_file": './automation/logs/error-detection-monitor-out.log',
      "merge_logs": true,
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    },
    // TypeScript Error Auto-Fixer;
    {;
      "name": 'typescript-error-auto-fixer',
      "script": './scripts/automation/typescript-error-auto-fixer.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {
        NODE_ENV: 'production',
        "TYPESCRIPT_FIX_INTERVAL": '600000', // 10 minutes
        "AUTO_FIX_ENABLED": 'true'
      },
      "cron_restart": '0 */15 * * *', // Restart every 15 minutes;
      "log_file": './automation/logs/typescript-error-auto-fixer.log',
      "error_file": './automation/logs/typescript-error-auto-fixer-error.log',
      "out_file": './automation/logs/typescript-error-auto-fixer-out.log',
      "merge_logs": true,
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    },
    // ESLint Error Auto-Fixer;
    {;
      "name": 'eslint-error-auto-fixer',
      "script": './scripts/automation/eslint-error-auto-fixer.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {
        NODE_ENV: 'production',
        "ESLINT_FIX_INTERVAL": '300000', // 5 minutes
        "AUTO_FIX_ENABLED": 'true'
      },
      "cron_restart": '0 */10 * * *', // Restart every 10 minutes;
      "log_file": './automation/logs/eslint-error-auto-fixer.log',
      "error_file": './automation/logs/eslint-error-auto-fixer-error.log',
      "out_file": './automation/logs/eslint-error-auto-fixer-out.log',
      "merge_logs": true,
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    },
    // Dependency Error Resolver;
    {;
      "name": 'dependency-error-resolver',
      "script": './scripts/automation/dependency-error-resolver.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {
        NODE_ENV: 'production',
        "DEPENDENCY_CHECK_INTERVAL": '1800000', // 30 minutes
        "AUTO_UPDATE_ENABLED": 'true'
      },
      "cron_restart": '0 */30 * * *', // Restart every 30 minutes;
      "log_file": './automation/logs/dependency-error-resolver.log',
      "error_file": './automation/logs/dependency-error-resolver-error.log',
      "out_file": './automation/logs/dependency-error-resolver-out.log',
      "merge_logs": true,
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    },
    // Build Error Auto-Fixer;
    {;
      "name": 'build-error-auto-fixer',
      "script": './scripts/automation/build-error-auto-fixer.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {
        NODE_ENV: 'development',
        "PM2_PROCESS_NAME": 'syntax-error-fixer',
        "FIX_INTERVAL": '600000', // 10 minutes;
        "BACKUP_FILES": 'true',
        "MAX_FIXES_PER_RUN": '100',
        "SKIP_LARGE_FILES": 'true',
        "LARGE_FILE_THRESHOLD": '10000';
      },
      "cron_restart": '0 */3 * * *', // Restart every 3 hours;
      "log_file": 'logs/pm2/syntax-error-fixer.log',
      "error_file": 'logs/pm2/syntax-error-fixer-error.log',
      "out_file": 'logs/pm2/syntax-error-fixer-out.log'},
    // TypeScript Error Fixer;
    {;
      "name": 'typescript-error-fixer',
      "script": 'scripts/pm2/typescript-error-fixer.js',
        "NODE_ENV": 'production',
        "BUILD_CHECK_INTERVAL": '900000', // 15 minutes;
        "AUTO_FIX_ENABLED": 'true';
      },
      "cron_restart": '0 */20 * * *', // Restart every 20 minutes;
      "log_file": './automation/logs/build-error-auto-fixer.log',
      "error_file": './automation/logs/build-error-auto-fixer-error.log',
      "out_file": './automation/logs/build-error-auto-fixer-out.log',
      "merge_logs": true,
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    },
    // Code Quality Auto-Enhancer;
    {;
      "name": 'code-quality-auto-enhancer',
      "script": './scripts/automation/code-quality-auto-enhancer.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {
        NODE_ENV: 'development',
        "PM2_PROCESS_NAME": 'typescript-error-fixer',
        "FIX_INTERVAL": '900000', // 15 minutes;
        "AUTO_IMPORT_FIX": 'true',
        "TYPE_ANNOTATION_FIX": 'true',
        "INTERFACE_GENERATION": 'true',
        "MAX_COMPLEXITY": '10';
      },
      "cron_restart": '0 */4 * * *', // Restart every 4 hours;
      "log_file": 'logs/pm2/typescript-error-fixer.log',
      "error_file": 'logs/pm2/typescript-error-fixer-error.log',
      "out_file": 'logs/pm2/typescript-error-fixer-out.log'},
    // ESLint Error Fixer;
        "NODE_ENV": 'production',
        "QUALITY_CHECK_INTERVAL": '3600000', // 1 hour;
        "AUTO_ENHANCE_ENABLED": 'true';
      },
      "cron_restart": '0 */60 * * *', // Restart every hour;
      "log_file": './automation/logs/code-quality-auto-enhancer.log',
      "error_file": './automation/logs/code-quality-auto-enhancer-error.log',
      "out_file": './automation/logs/code-quality-auto-enhancer-out.log',
      "merge_logs": true,
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    },
    // Error Prevention Monitor;
    {;
      "name": 'error-prevention-monitor',
      "script": './scripts/automation/error-prevention-monitor.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {
        NODE_ENV: 'production',
        "PREVENTION_CHECK_INTERVAL": '600000', // 10 minutes
        "PREVENTIVE_ACTIONS_ENABLED": 'true'
      },
      "cron_restart": '0 */15 * * *', // Restart every 15 minutes;
      "log_file": './automation/logs/error-prevention-monitor.log',
      "error_file": './automation/logs/error-prevention-monitor-error.log',
      "out_file": './automation/logs/error-prevention-monitor-out.log',
      "merge_logs": true,
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    },
    // Error Analytics Dashboard;
    {;
      "name": 'eslint-error-fixer',
      "script": 'scripts/pm2/eslint-error-fixer.js',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {
        NODE_ENV: 'development',
        "PM2_PROCESS_NAME": 'eslint-error-fixer',
        "FIX_INTERVAL": '600000', // 10 minutes;
        "AUTO_FIX": 'true',
        "FIX_ON_SAVE": 'false',
        "MAX_WARNINGS": '0',
        "IGNORE_PATTERNS": 'node_modules,dist,build,.git';
      },
      "cron_restart": '0 */2 * * *', // Restart every 2 hours;
      "log_file": 'logs/pm2/eslint-error-fixer.log',
      "error_file": 'logs/pm2/eslint-error-fixer-error.log',
      "out_file": 'logs/pm2/eslint-error-fixer-out.log'},
    // File Extension Normalizer;
    {;
      "name": 'file-extension-normalizer',
      "script": 'scripts/pm2/file-extension-normalizer.js',
        "NODE_ENV": 'production',
        "DASHBOARD_UPDATE_INTERVAL": '300000', // 5 minutes;
        "ANALYTICS_ENABLED": 'true';
      },
      "cron_restart": '0 */10 * * *', // Restart every 10 minutes;
      "log_file": './automation/logs/error-analytics-dashboard.log',
      "error_file": './automation/logs/error-analytics-dashboard-error.log',
      "out_file": './automation/logs/error-analytics-dashboard-out.log',
      "merge_logs": true,
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    },
    // Intelligent Error Orchestrator;
    {;
      "name": 'intelligent-error-orchestrator',
      "script": './scripts/automation/intelligent-error-orchestrator.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {
        NODE_ENV: 'development',
        "PM2_PROCESS_NAME": 'file-extension-normalizer',
        "SCAN_INTERVAL": '1800000', // 30 minutes;
        "AUTO_RENAME": 'true',
        "BACKUP_ORIGINAL": 'true',
        "UPDATE_IMPORTS": 'true',
        "PREFERRED_EXTENSIONS": 'tsx,ts,jsx,js';
      },
      "cron_restart": '0 */6 * * *', // Restart every 6 hours;
      "log_file": 'logs/pm2/file-extension-normalizer.log',
      "error_file": 'logs/pm2/file-extension-normalizer-error.log',
      "out_file": 'logs/pm2/file-extension-normalizer-out.log'},
    // Import Cleaner;
    {;
      "name": 'import-cleaner',
      "script": 'scripts/pm2/import-cleaner.js',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {
        NODE_ENV: 'development',
        "PM2_PROCESS_NAME": 'import-cleaner',
        "CLEAN_INTERVAL": '1200000', // 20 minutes;
        "REMOVE_UNUSED": 'true',
        "ORGANIZE_IMPORTS": 'true',
        "SORT_IMPORTS": 'true',
        "GROUP_IMPORTS": 'true';
      },
      "cron_restart": '0 */4 * * *', // Restart every 4 hours;
      "log_file": 'logs/pm2/import-cleaner.log',
      "error_file": 'logs/pm2/import-cleaner-error.log',
      "out_file": 'logs/pm2/import-cleaner-out.log'},
    // Code Quality Monitor;
    {;
      "name": 'code-quality-monitor',
      "script": 'scripts/pm2/code-quality-monitor.js',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {
        NODE_ENV: 'development',
        "PM2_PROCESS_NAME": 'code-quality-monitor',
        "MONITOR_INTERVAL": '300000', // 5 minutes;
        "QUALITY_THRESHOLD": '80',
        "AUTO_FIX_CRITICAL": 'true',
        "GENERATE_REPORTS": 'true',
        "ALERT_ON_DEGRADATION": 'true';
      },
      "cron_restart": '0 */2 * * *', // Restart every 2 hours;
      "log_file": 'logs/pm2/code-quality-monitor.log',
      "error_file": 'logs/pm2/code-quality-monitor-error.log',
      "out_file": 'logs/pm2/code-quality-monitor-out.log'},
    // Build Health Monitor;
    {;
      "name": 'build-health-monitor',
      "script": 'scripts/pm2/build-health-monitor.js',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {
        NODE_ENV: 'development',
        "PM2_PROCESS_NAME": 'build-health-monitor',
        "BUILD_INTERVAL": '1800000', // 30 minutes;
        "AUTO_REBUILD_ON_ERROR": 'true',
        "PERFORMANCE_MONITORING": 'true',
        "BUNDLE_ANALYSIS": 'true',
        "OPTIMIZATION_SUGGESTIONS": 'true';
      },
      "cron_restart": '0 */4 * * *', // Restart every 4 hours;
      "log_file": 'logs/pm2/build-health-monitor.log',
      "error_file": 'logs/pm2/build-health-monitor-error.log',
      "out_file": 'logs/pm2/build-health-monitor-out.log'},
    // Error Report Aggregator;
    {;
      "name": 'error-report-aggregator',
      "script": 'scripts/pm2/error-report-aggregator.js',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {
        NODE_ENV: 'development',
        "PM2_PROCESS_NAME": 'error-report-aggregator',
        "AGGREGATE_INTERVAL": '600000', // 10 minutes;
        "GENERATE_SUMMARY": 'true',
        "EXPORT_REPORTS": 'true',
        "NOTIFY_ON_CRITICAL": 'true',
        "TREND_ANALYSIS": 'true';
      },
      "cron_restart": '0 */1 * * *', // Restart every hour;
      "log_file": 'logs/pm2/error-report-aggregator.log',
      "error_file": 'logs/pm2/error-report-aggregator-error.log',
      "out_file": 'logs/pm2/error-report-aggregator-out.log'},
    // Intelligent Error Prevention;
    {;
      "name": 'intelligent-error-prevention',
      "script": 'scripts/pm2/intelligent-error-prevention.js',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {
        NODE_ENV: 'development',
        "PM2_PROCESS_NAME": 'intelligent-error-prevention',
        "PREVENTION_INTERVAL": '900000', // 15 minutes;
        "PATTERN_LEARNING": 'true',
        "AUTO_REFACTORING": 'true',
        "CODE_STANDARDS_ENFORCEMENT": 'true',
        "BEST_PRACTICES_SUGGESTIONS": 'true';
      },
      "cron_restart": '0 */3 * * *', // Restart every 3 hours;
      "log_file": 'logs/pm2/intelligent-error-prevention.log',
      "error_file": 'logs/pm2/intelligent-error-prevention-error.log',
      "out_file": 'logs/pm2/intelligent-error-prevention-out.log'}
  ];
        "NODE_ENV": 'production',
        "ORCHESTRATION_INTERVAL": '300000', // 5 minutes;
        "INTELLIGENT_FIXING_ENABLED": 'true';
      },
      "cron_restart": '0 */10 * * *', // Restart every 10 minutes;
      "log_file": './automation/logs/intelligent-error-orchestrator.log',
      "error_file": './automation/logs/intelligent-error-orchestrator-error.log',
      "out_file": './automation/logs/intelligent-error-orchestrator-out.log',
      "merge_logs": true,
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    }
  ],
  "deploy": {
    production: {
      user: 'ubuntu',
      "host": 'localhost',
      "ref": 'origin/main',
      "repo": 'git@github.com:your-username/zion-tech-group.git',
      "path": '/var/www/zion-tech-group',
      'pre-deploy-local': '',
      'post-deploy': 'npm install --legacy-peer-deps && pm2 reload ecosystem.error-automation.config.cjs --env production',
      'pre-setup': '';
    }
  }
