module.exports = {}
  "apps": [{}]
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
        "PORT": 3000;
      },
      "log_file": './logs/web.log',
      "out_file": './logs/web-out.log',
      "error_file": './logs/web-error.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
    },
    {}
      "name": 'ai-code-analyzer',
      "script": 'node',
      "args": 'scripts/automation/automation-orchestrator.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/10 * * * *', // Restart every 10 minutes;
      "env": {}
        NODE_ENV: 'production',
        "AUTOMATION_TYPE": 'code-analysis'
      },
      "log_file": './logs/ai-code-analyzer.log',
      "out_file": './logs/ai-code-analyzer-out.log',
      "error_file": './logs/ai-code-analyzer-error.log'
    },
    {}
      "name": 'smart-performance-optimizer',
      "script": 'node',
      "args": 'scripts/automation/performance-monitor.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/15 * * * *', // Restart every 15 minutes;
      "env": {}
        NODE_ENV: 'production',
        "AUTOMATION_TYPE": 'performance'
      },
      "log_file": './logs/smart-performance-optimizer.log',
      "out_file": './logs/smart-performance-optimizer-out.log',
      "error_file": './logs/smart-performance-optimizer-error.log'
    },
    {}
      "name": 'intelligent-dependency-manager',
      "script": 'node',
      "args": 'scripts/automation/dependency-updater.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */6 * * *', // Restart every 6 hours;
      "env": {}
        NODE_ENV: 'production',
        "AUTOMATION_TYPE": 'dependencies'
      },
      "log_file": './logs/intelligent-dependency-manager.log',
      "out_file": './logs/intelligent-dependency-manager-out.log',
      "error_file": './logs/intelligent-dependency-manager-error.log'
    },
    {}
      "name": 'smart-deployment-automation',
      "script": 'node',
      "args": 'scripts/automation/auto-deploy.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */4 * * *', // Restart every 4 hours;
      "env": {}
        NODE_ENV: 'production',
        "AUTOMATION_TYPE": 'deployment'
      },
      "log_file": './logs/smart-deployment-automation.log',
      "out_file": './logs/smart-deployment-automation-out.log',
      "error_file": './logs/smart-deployment-automation-error.log'
    },
    {}
      "name": 'intelligent-repository-manager',
      "script": 'node',
      "args": 'scripts/automation/master-automation-orchestrator.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/30 * * * *', // Restart every 30 minutes;
      "env": {}
        NODE_ENV: 'production',
        "AUTOMATION_TYPE": 'repository'
      },
      "log_file": './logs/intelligent-repository-manager.log',
      "out_file": './logs/intelligent-repository-manager-out.log',
      "error_file": './logs/intelligent-repository-manager-error.log'
    },
    {}
      "name": 'advanced-development-workflow',
      "script": 'node',
      "args": 'scripts/automation/enhanced-app-improvement-automation.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/20 * * * *', // Restart every 20 minutes;
      "env": {}
        NODE_ENV: 'production',
        "AUTOMATION_TYPE": 'development'
      },
      "log_file": './logs/advanced-development-workflow.log',
      "out_file": './logs/advanced-development-workflow-out.log',
      "error_file": './logs/advanced-development-workflow-error.log'
    },
    {}
      "name": 'intelligent-cicd-orchestrator',
      "script": 'node',
      "args": 'scripts/automation/automation-orchestrator.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/25 * * * *', // Restart every 25 minutes;
      "env": {}
        NODE_ENV: 'production',
        "AUTOMATION_TYPE": 'cicd'
      },
      "log_file": './logs/intelligent-cicd-orchestrator.log',
      "out_file": './logs/intelligent-cicd-orchestrator-out.log',
      "error_file": './logs/intelligent-cicd-orchestrator-error.log'
    },
    {}
      "name": 'enhanced-ci-cd-automation',
      "script": 'node',
      "args": 'scripts/automation/security-audit.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */8 * * *', // Restart every 8 hours;
      "env": {}
        NODE_ENV: 'production',
        "AUTOMATION_TYPE": 'security'
      },
      "log_file": './logs/enhanced-ci-cd-automation.log',
      "out_file": './logs/enhanced-ci-cd-automation-out.log',
      "error_file": './logs/enhanced-ci-cd-automation-error.log'
    },
    {}
      "name": 'enhanced-testing-automation',
      "script": 'node',
      "args": 'scripts/automation/comprehensive-test-runner.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/45 * * * *', // Restart every 45 minutes;
      "env": {}
        NODE_ENV: 'production',
        "AUTOMATION_TYPE": 'testing'
      },
      "log_file": './logs/enhanced-testing-automation.log',
      "out_file": './logs/enhanced-testing-automation-out.log',
      "error_file": './logs/enhanced-testing-automation-error.log'
    },
    {}
      "name": 'enhanced-security-automation',
      "script": 'node',
      "args": 'scripts/automation/security-audit.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */12 * * *', // Restart every 12 hours;
      "env": {}
        NODE_ENV: 'production',
        "AUTOMATION_TYPE": 'security-audit'
      },
      "log_file": './logs/enhanced-security-automation.log',
      "out_file": './logs/enhanced-security-automation-out.log',
      "error_file": './logs/enhanced-security-automation-error.log'
    },
    {}
      "name": 'project-health-monitor',
      "script": 'node',
      "args": 'scripts/automation/comprehensive-health-check.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/5 * * * *', // Restart every 5 minutes;
      "env": {}
        NODE_ENV: 'production',
        "AUTOMATION_TYPE": 'health'
      },
      "log_file": './logs/project-health-monitor.log',
      "out_file": './logs/project-health-monitor-out.log',
      "error_file": './logs/project-health-monitor-error.log'
    },
    {}
      "name": 'pm2-sync-automation',
      "script": 'node',
      "args": 'scripts/automation/automation-orchestrator.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/35 * * * *', // Restart every 35 minutes;
      "env": {}
        NODE_ENV: 'production',
        "AUTOMATION_TYPE": 'sync'
      },
      "log_file": './logs/pm2-sync-automation.log',
      "out_file": './logs/pm2-sync-automation-out.log',
      "error_file": './logs/pm2-sync-automation-error.log'
    },
    {}
      "name": 'link-checker-automation',
      "script": 'node',
      "args": 'scripts/automation/automation-orchestrator.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */3 * * *', // Restart every 3 hours;
      "env": {}
        NODE_ENV: 'production',
        "AUTOMATION_TYPE": 'link-checker'
      },
      "log_file": './logs/link-checker-automation.log',
      "out_file": './logs/link-checker-automation-out.log',
      "error_file": './logs/link-checker-automation-error.log'
    },
    {}
      "name": 'typescript-syntax-fixer',
      "script": 'node',
      "args": 'scripts/automation/fix-syntax-errors.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/12 * * * *', // Restart every 12 minutes;
      "env": {}
        NODE_ENV: 'production',
        "AUTOMATION_TYPE": 'syntax-fix'
      },
      "log_file": './logs/typescript-syntax-fixer.log',
      "out_file": './logs/typescript-syntax-fixer-out.log',
      "error_file": './logs/typescript-syntax-fixer-error.log'
    },
    {}
      "name": 'console-error-fixer',
      "script": 'node',
      "args": 'scripts/automation/automation-orchestrator.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/8 * * * *', // Restart every 8 minutes;
      "env": {}
        NODE_ENV: 'production',
        "AUTOMATION_TYPE": 'console-errors'
      },
      "log_file": './logs/console-error-fixer.log',
      "out_file": './logs/console-error-fixer-out.log',
      "error_file": './logs/console-error-fixer-error.log'
    },
    {}
      "name": 'quality-checks',
      "script": 'node',
      "args": 'scripts/automation/code-quality-monitor.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/18 * * * *', // Restart every 18 minutes;
      "env": {}
        NODE_ENV: 'production',
        "AUTOMATION_TYPE": 'quality'
      },
      "log_file": './logs/quality-checks.log',
      "out_file": './logs/quality-checks-out.log',
      "error_file": './logs/quality-checks-error.log'
    },
    {}
      "name": 'security-audit',
      "script": 'node',
      "args": 'scripts/automation/security-audit.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 */24 * * *', // Restart every 24 hours;
      "env": {}
        NODE_ENV: 'production',
        "AUTOMATION_TYPE": 'security-audit'
      },
      "log_file": './logs/security-audit.log',
      "out_file": './logs/security-audit-out.log',
      "error_file": './logs/security-audit-error.log'
    },
    {}
      "name": 'continuous-improvement',
      "script": 'node',
      "args": 'scripts/automation/automation-orchestrator.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '*/50 * * * *', // Restart every 50 minutes;
      "env": {}
        NODE_ENV: 'production',
        "AUTOMATION_TYPE": 'improvement'
      },
      "log_file": './logs/continuous-improvement.log',
      "out_file": './logs/continuous-improvement-out.log',
      "error_file": './logs/continuous-improvement-error.log'
    },
    {}
      "name": 'daily-build-test',
      "script": 'node',
      "args": 'scripts/automation/comprehensive-test-runner.cjs',
      "cwd": '/workspace',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "cron_restart": '0 2 * * *', // Restart daily at 2 AM;
      "env": {}
        NODE_ENV: 'production',
        "AUTOMATION_TYPE": 'daily-build'
      },
      "log_file": './logs/daily-build-test.log',
      "out_file": './logs/daily-build-test-out.log',
      "error_file": './logs/daily-build-test-error.log'
    };
  ];
};
