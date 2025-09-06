module.exports = {}
  "apps": [// Main Application;]
    {}
      name: 'ziontechgroup-web',
      "script": 'npm',
      "args": 'start',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'production',
        "PORT": 3000;
      },
      "env_development": {}
        NODE_ENV: 'development',
        "PORT": 3000,
        "DEBUG": 'true'
      },
      "log_file": './logs/web.log',
      "out_file": './logs/web-out.log',
      "error_file": './logs/web-error.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z',
      "merge_logs": true,
      "time": true;
    },
    // AI-Powered Code Analysis & Auto-Fixing;
    {}
      "name": 'ai-code-analyzer',
      "script": 'node',
      "args": 'scripts/automation/ai-code-analyzer.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */2 * * *', // Every 2 hours;
      "max_memory_restart": '512M',
      "restart_delay": 10000,
      "env": {}
        NODE_ENV: 'production',
        "AI_ANALYSIS_MODE": 'comprehensive',
        "AUTO_FIX": 'true'
      },
      "log_file": './logs/ai-code-analyzer.log',
      "out_file": './logs/ai-code-analyzer-out.log',
      "error_file": './logs/ai-code-analyzer-error.log',
      "merge_logs": true,
      "time": true;
    },
    // Smart Performance Optimizer;
    {}
      "name": 'smart-performance-optimizer',
      "script": 'node',
      "args": 'scripts/automation/smart-performance-optimizer.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */4 * * *', // Every 4 hours;
      "max_memory_restart": '1G',
      "restart_delay": 15000,
      "env": {}
        NODE_ENV: 'production',
        "OPTIMIZATION_LEVEL": 'aggressive',
        "PERFORMANCE_MONITORING": 'true'
      },
      "log_file": './logs/smart-performance-optimizer.log',
      "out_file": './logs/smart-performance-optimizer-out.log',
      "error_file": './logs/smart-performance-optimizer-error.log',
      "merge_logs": true,
      "time": true;
    },
    // Intelligent Dependency Manager;
    {}
      "name": 'intelligent-dependency-manager',
      "script": 'node',
      "args": 'scripts/automation/intelligent-dependency-manager.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 0 * * 0', // Weekly on Sunday at midnight;
      "max_memory_restart": '512M',
      "restart_delay": 20000,
      "env": {}
        NODE_ENV: 'production',
        "AUTO_UPDATE": 'true',
        "SECURITY_FIRST": 'true',
        "UPDATE_STRATEGY": 'conservative'
      },
      "log_file": './logs/intelligent-dependency-manager.log',
      "out_file": './logs/intelligent-dependency-manager-out.log',
      "error_file": './logs/intelligent-dependency-manager-error.log',
      "merge_logs": true,
      "time": true;
    },
    // Smart Deployment Automation;
    {}
      "name": 'smart-deployment-automation',
      "script": 'node',
      "args": 'scripts/automation/smart-deployment-automation.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */6 * * *', // Every 6 hours;
      "max_memory_restart": '1G',
      "restart_delay": 30000,
      "env": {}
        NODE_ENV: 'production',
        "AUTO_DEPLOY": 'false', // Set to true for automatic deployment;
        "ROLLBACK_ENABLED": 'true',
        "DEPLOYMENT_STRATEGY": 'blue-green'
      },
      "log_file": './logs/smart-deployment-automation.log',
      "out_file": './logs/smart-deployment-automation-out.log',
      "error_file": './logs/smart-deployment-automation-error.log',
      "merge_logs": true,
      "time": true;
    },
    // Intelligent Repository Manager;
    {}
      "name": 'intelligent-repository-manager',
      "script": 'node',
      "args": 'scripts/automation/intelligent-repository-manager.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/30 * * * *', // Every 30 minutes;
      "max_memory_restart": '512M',
      "restart_delay": 10000,
      "env": {}
        NODE_ENV: 'production',
        "AUTO_MERGE": 'false', // Set to true for automatic merging;
        "CONFLICT_RESOLUTION": 'intelligent',
        "BRANCH_CLEANUP": 'true'
      },
      "log_file": './logs/intelligent-repository-manager.log',
      "out_file": './logs/intelligent-repository-manager-out.log',
      "error_file": './logs/intelligent-repository-manager-error.log',
      "merge_logs": true,
      "time": true;
    },
    // Advanced Development Workflow;
    {}
      "name": 'advanced-development-workflow',
      "script": 'node',
      "args": 'scripts/automation/advanced-development-workflow.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/15 * * * *', // Every 15 minutes;
      "max_memory_restart": '512M',
      "restart_delay": 5000,
      "env": {}
        NODE_ENV: 'production',
        "WORKFLOW_MODE": 'continuous',
        "QUALITY_GATES": 'enabled'
      },
      "log_file": './logs/advanced-development-workflow.log',
      "out_file": './logs/advanced-development-workflow-out.log',
      "error_file": './logs/advanced-development-workflow-error.log',
      "merge_logs": true,
      "time": true;
    },
    // Intelligent CI/CD Orchestrator;
    {}
      "name": 'intelligent-cicd-orchestrator',
      "script": 'node',
      "args": 'scripts/automation/intelligent-cicd-orchestrator.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/10 * * * *', // Every 10 minutes;
      "max_memory_restart": '1G',
      "restart_delay": 15000,
      "env": {}
        NODE_ENV: 'production',
        "PIPELINE_MODE": 'intelligent',
        "AUTO_DEPLOYMENT": 'false'
      },
      "log_file": './logs/intelligent-cicd-orchestrator.log',
      "out_file": './logs/intelligent-cicd-orchestrator-out.log',
      "error_file": './logs/intelligent-cicd-orchestrator-error.log',
      "merge_logs": true,
      "time": true;
    },
    // Enhanced CI/CD Automation;
    {}
      "name": 'enhanced-ci-cd-automation',
      "script": 'node',
      "args": 'scripts/automation/enhanced-ci-cd-automation.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/5 * * * *', // Every 5 minutes;
      "max_memory_restart": '1G',
      "restart_delay": 10000,
      "env": {}
        NODE_ENV: 'production',
        "QUALITY_GATES": 'strict',
        "PARALLEL_JOBS": '4'
      },
      "log_file": './logs/enhanced-ci-cd-automation.log',
      "out_file": './logs/enhanced-ci-cd-automation-out.log',
      "error_file": './logs/enhanced-ci-cd-automation-error.log',
      "merge_logs": true,
      "time": true;
    },
    // Enhanced Testing Automation;
    {}
      "name": 'enhanced-testing-automation',
      "script": 'node',
      "args": 'scripts/automation/enhanced-testing-automation.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/20 * * * *', // Every 20 minutes;
      "max_memory_restart": '1G',
      "restart_delay": 20000,
      "env": {}
        NODE_ENV: 'production',
        "TEST_STRATEGY": 'comprehensive',
        "PARALLEL_TESTS": 'true'
      },
      "log_file": './logs/enhanced-testing-automation.log',
      "out_file": './logs/enhanced-testing-automation-out.log',
      "error_file": './logs/enhanced-testing-automation-error.log',
      "merge_logs": true,
      "time": true;
    },
    // Enhanced Security Automation;
    {}
      "name": 'enhanced-security-automation',
      "script": 'node',
      "args": 'scripts/automation/enhanced-security-automation.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */3 * * *', // Every 3 hours;
      "max_memory_restart": '512M',
      "restart_delay": 25000,
      "env": {}
        NODE_ENV: 'production',
        "SECURITY_LEVEL": 'maximum',
        "VULNERABILITY_SCANNING": 'true'
      },
      "log_file": './logs/enhanced-security-automation.log',
      "out_file": './logs/enhanced-security-automation-out.log',
      "error_file": './logs/enhanced-security-automation-error.log',
      "merge_logs": true,
      "time": true;
    },
    // Project Health Monitor;
    {}
      "name": 'project-health-monitor',
      "script": 'node',
      "args": 'scripts/automation/project-health-monitor.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/5 * * * *', // Every 5 minutes;
      "max_memory_restart": '512M',
      "restart_delay": 5000,
      "env": {}
        NODE_ENV: 'production',
        "HEALTH_CHECKS": 'comprehensive',
        "MONITORING_INTERVAL": '300000'
      },
      "log_file": './logs/project-health-monitor.log',
      "out_file": './logs/project-health-monitor-out.log',
      "error_file": './logs/project-health-monitor-error.log',
      "merge_logs": true,
      "time": true;
    },
    // PM2 Sync Automation;
    {}
      "name": 'pm2-sync-automation',
      "script": 'node',
      "args": 'scripts/automation/pm2-sync-automation.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/1 * * * *', // Every minute;
      "max_memory_restart": '1G',
      "restart_delay": 2000,
      "env": {}
        NODE_ENV: 'production',
        "SYNC_MODE": 'continuous',
        "PROCESS_MONITORING": 'true'
      },
      "log_file": './logs/pm2-sync-automation.log',
      "out_file": './logs/pm2-sync-automation-out.log',
      "error_file": './logs/pm2-sync-automation-error.log',
      "merge_logs": true,
      "time": true;
    },
    // Link Checker Automation;
    {}
      "name": 'link-checker-automation',
      "script": 'node',
      "args": 'scripts/automation/link-checker-automation.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */8 * * *', // Every 8 hours;
      "max_memory_restart": '512M',
      "restart_delay": 30000,
      "env": {}
        NODE_ENV: 'production',
        "CHECK_DEPTH": 'deep',
        "EXTERNAL_LINKS": 'true'
      },
      "log_file": './logs/link-checker-automation.log',
      "out_file": './logs/link-checker-automation-out.log',
      "error_file": './logs/link-checker-automation-error.log',
      "merge_logs": true,
      "time": true;
    },
    // TypeScript Syntax Fixer;
    {}
      "name": 'typescript-syntax-fixer',
      "script": 'node',
      "args": 'scripts/automation/typescript-syntax-fixer.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/10 * * * *', // Every 10 minutes;
      "max_memory_restart": '256M',
      "restart_delay": 5000,
      "env": {}
        NODE_ENV: 'production',
        "AUTO_FIX": 'true',
        "STRICT_MODE": 'true'
      },
      "log_file": './logs/typescript-syntax-fixer.log',
      "out_file": './logs/typescript-syntax-fixer-out.log',
      "error_file": './logs/typescript-syntax-fixer-error.log',
      "merge_logs": true,
      "time": true;
    },
    // Console Error Fixer;
    {}
      "name": 'console-error-fixer',
      "script": 'node',
      "args": 'scripts/automation/console-error-fixer.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/5 * * * *', // Every 5 minutes;
      "max_memory_restart": '256M',
      "restart_delay": 3000,
      "env": {}
        NODE_ENV: 'production',
        "ERROR_DETECTION": 'real-time',
        "AUTO_FIX": 'true'
      },
      "log_file": './logs/console-error-fixer.log',
      "out_file": './logs/console-error-fixer-out.log',
      "error_file": './logs/console-error-fixer-error.log',
      "merge_logs": true,
      "time": true;
    },
    // Quality Checks;
    {}
      "name": 'quality-checks',
      "script": 'node',
      "args": 'scripts/automation/quality-checks.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/15 * * * *', // Every 15 minutes;
      "max_memory_restart": '256M',
      "restart_delay": 10000,
      "env": {}
        NODE_ENV: 'production',
        "QUALITY_STANDARDS": 'high',
        "COVERAGE_THRESHOLD": '80'
      },
      "log_file": './logs/quality-checks.log',
      "out_file": './logs/quality-checks-out.log',
      "error_file": './logs/quality-checks-error.log',
      "merge_logs": true,
      "time": true;
    },
    // Security Audit;
    {}
      "name": 'security-audit',
      "script": 'node',
      "args": 'scripts/automation/security-audit.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */6 * * *', // Every 6 hours;
      "max_memory_restart": '512M',
      "restart_delay": 20000,
      "env": {}
        NODE_ENV: 'production',
        "AUDIT_LEVEL": 'comprehensive',
        "VULNERABILITY_ALERTS": 'true'
      },
      "log_file": './logs/security-audit.log',
      "out_file": './logs/security-audit-out.log',
      "error_file": './logs/security-audit-error.log',
      "merge_logs": true,
      "time": true;
    },
    // Continuous Improvement;
    {}
      "name": 'continuous-improvement',
      "script": 'node',
      "args": 'scripts/automation/continuous-improvement.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 2 * * *', // Daily at 2 AM;
      "max_memory_restart": '256M',
      "restart_delay": 60000,
      "env": {}
        NODE_ENV: 'production',
        "IMPROVEMENT_MODE": 'automatic',
        "LEARNING_ENABLED": 'true'
      },
      "log_file": './logs/continuous-improvement.log',
      "out_file": './logs/continuous-improvement-out.log',
      "error_file": './logs/continuous-improvement-error.log',
      "merge_logs": true,
      "time": true;
    },
    // Daily Build Test;
    {}
      "name": 'daily-build-test',
      "script": 'node',
      "args": 'scripts/automation/daily-build-test.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 1 * * *', // Daily at 1 AM;
      "max_memory_restart": '512M',
      "restart_delay": 120000,
      "env": {}
        NODE_ENV: 'production',
        "BUILD_STRATEGY": 'comprehensive',
        "NOTIFICATION_ENABLED": 'true'
      },
      "log_file": './logs/daily-build-test.log',
      "out_file": './logs/daily-build-test-out.log',
      "error_file": './logs/daily-build-test-error.log',
      "merge_logs": true,
      "time": true;
    },
    // Health Check;
    {}
      "name": 'health-check',
      "script": 'node',
      "args": 'scripts/automation/health-check.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/2 * * * *', // Every 2 minutes;
      "max_memory_restart": '256M',
      "restart_delay": 5000,
      "env": {}
        NODE_ENV: 'production',
        "HEALTH_CHECK_INTERVAL": '120000',
        "ALERT_THRESHOLD": 'medium'
      },
      "log_file": './logs/health-check.log',
      "out_file": './logs/health-check-out.log',
      "error_file": './logs/health-check-error.log',
      "merge_logs": true,
      "time": true;
    },
    // Security Scanner;
    {}
      "name": 'security-scanner',
      "script": 'node',
      "args": 'scripts/automation/security-scanner.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */4 * * *', // Every 4 hours;
      "max_memory_restart": '512M',
      "restart_delay": 30000,
      "env": {}
        NODE_ENV: 'production',
        "SCAN_DEPTH": 'comprehensive',
        "REAL_TIME_SCANNING": 'true'
      },
      "log_file": './logs/security-scanner.log',
      "out_file": './logs/security-scanner-out.log',
      "error_file": './logs/security-scanner-error.log',
      "merge_logs": true,
      "time": true;
    },
    // Performance Monitor;
    {}
      "name": 'performance-monitor',
      "script": 'node',
      "args": 'scripts/automation/performance-monitor.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/3 * * * *', // Every 3 minutes;
      "max_memory_restart": '512M',
      "restart_delay": 5000,
      "env": {}
        NODE_ENV: 'production',
        "MONITORING_INTERVAL": '180000',
        "PERFORMANCE_ALERTS": 'true'
      },
      "log_file": './logs/performance-monitor.log',
      "out_file": './logs/performance-monitor-out.log',
      "error_file": './logs/performance-monitor-error.log',
      "merge_logs": true,
      "time": true;
    };
  ],
  // PM2 Deploy configuration;
  "deploy": {}
    production: {}
      user: 'node',
      "host": 'your-production-server.com',
      "ref": 'origin/main',
      "repo": 'git@github.com:your-username/your-repo.git',
      "path": '/var/www/production',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.enhanced-intelligent-v2.cjs --env production',
      'pre-setup': ''
    },
    "staging": {}
      user: 'node',
      "host": 'your-staging-server.com',
      "ref": 'origin/develop',
      "repo": 'git@github.com:your-username/your-repo.git',
      "path": '/var/www/staging',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.enhanced-intelligent-v2.cjs --env staging',
      'pre-setup': ''
    };
  };
};
