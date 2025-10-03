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
        "PORT": 3000;
      },
      "log_file": './logs/web.log',
      "out_file": './logs/web-out.log',
      "error_file": './logs/web-error.log',
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z'
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
      "env": {}
        NODE_ENV: 'production',
        "AI_ANALYSIS_MODE": 'comprehensive'
      },
      "log_file": './logs/ai-code-analyzer.log',
      "out_file": './logs/ai-code-analyzer-out.log',
      "error_file": './logs/ai-code-analyzer-error.log'
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
      "env": {}
        NODE_ENV: 'production',
        "OPTIMIZATION_LEVEL": 'aggressive'
      },
      "log_file": './logs/smart-performance-optimizer.log',
      "out_file": './logs/smart-performance-optimizer-out.log',
      "error_file": './logs/smart-performance-optimizer-error.log'
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
      "cron_restart": '0 0 * * 0', // Weekly on Sunday;
      "max_memory_restart": '512M',
      "env": {}
        NODE_ENV: 'production',
        "AUTO_UPDATE": 'true',
        "SECURITY_FIRST": 'true'
      },
      "log_file": './logs/intelligent-dependency-manager.log',
      "out_file": './logs/intelligent-dependency-manager-out.log',
      "error_file": './logs/intelligent-dependency-manager-error.log'
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
      "env": {}
        NODE_ENV: 'production',
        "AUTO_DEPLOY": 'true',
        "ROLLBACK_ENABLED": 'true'
      },
      "log_file": './logs/smart-deployment-automation.log',
      "out_file": './logs/smart-deployment-automation-out.log',
      "error_file": './logs/smart-deployment-automation-error.log'
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
      "env": {}
        NODE_ENV: 'production',
        "AUTO_MERGE": 'true',
        "CONFLICT_RESOLUTION": 'intelligent'
      },
      "log_file": './logs/intelligent-repository-manager.log',
      "out_file": './logs/intelligent-repository-manager-out.log',
      "error_file": './logs/intelligent-repository-manager-error.log'
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
      "env": {}
        NODE_ENV: 'production',
        "WORKFLOW_MODE": 'continuous'
      },
      "log_file": './logs/advanced-development-workflow.log',
      "out_file": './logs/advanced-development-workflow-out.log',
      "error_file": './logs/advanced-development-workflow-error.log'
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
      "env": {}
        NODE_ENV: 'production',
        "PIPELINE_MODE": 'intelligent'
      },
      "log_file": './logs/intelligent-cicd-orchestrator.log',
      "out_file": './logs/intelligent-cicd-orchestrator-out.log',
      "error_file": './logs/intelligent-cicd-orchestrator-error.log'
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
      "env": {}
        NODE_ENV: 'production',
        "QUALITY_GATES": 'strict'
      },
      "log_file": './logs/enhanced-ci-cd-automation.log',
      "out_file": './logs/enhanced-ci-cd-automation-out.log',
      "error_file": './logs/enhanced-ci-cd-automation-error.log'
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
      "env": {}
        NODE_ENV: 'production',
        "TEST_STRATEGY": 'comprehensive'
      },
      "log_file": './logs/enhanced-testing-automation.log',
      "out_file": './logs/enhanced-testing-automation-out.log',
      "error_file": './logs/enhanced-testing-automation-error.log'
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
      "env": {}
        NODE_ENV: 'production',
        "SECURITY_LEVEL": 'maximum'
      },
      "log_file": './logs/enhanced-security-automation.log',
      "out_file": './logs/enhanced-security-automation-out.log',
      "error_file": './logs/enhanced-security-automation-error.log'
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
      "env": {}
        NODE_ENV: 'production',
        "HEALTH_CHECKS": 'comprehensive'
      },
      "log_file": './logs/project-health-monitor.log',
      "out_file": './logs/project-health-monitor-out.log',
      "error_file": './logs/project-health-monitor-error.log'
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
      "env": {}
        NODE_ENV: 'production',
        "SYNC_MODE": 'continuous'
      },
      "log_file": './logs/pm2-sync-automation.log',
      "out_file": './logs/pm2-sync-automation-out.log',
      "error_file": './logs/pm2-sync-automation-error.log'
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
      "env": {}
        NODE_ENV: 'production',
        "CHECK_DEPTH": 'deep'
      },
      "log_file": './logs/link-checker-automation.log',
      "out_file": './logs/link-checker-automation-out.log',
      "error_file": './logs/link-checker-automation-error.log'
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
      "env": {}
        NODE_ENV: 'production',
        "AUTO_FIX": 'true'
      },
      "log_file": './logs/typescript-syntax-fixer.log',
      "out_file": './logs/typescript-syntax-fixer-out.log',
      "error_file": './logs/typescript-syntax-fixer-error.log'
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
      "env": {}
        NODE_ENV: 'production',
        "ERROR_DETECTION": 'real-time'
      },
      "log_file": './logs/console-error-fixer.log',
      "out_file": './logs/console-error-fixer-out.log',
      "error_file": './logs/console-error-fixer-error.log'
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
      "env": {}
        NODE_ENV: 'production',
        "QUALITY_STANDARDS": 'high'
      },
      "log_file": './logs/quality-checks.log',
      "out_file": './logs/quality-checks-out.log',
      "error_file": './logs/quality-checks-error.log'
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
      "env": {}
        NODE_ENV: 'production',
        "AUDIT_LEVEL": 'comprehensive'
      },
      "log_file": './logs/security-audit.log',
      "out_file": './logs/security-audit-out.log',
      "error_file": './logs/security-audit-error.log'
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
      "env": {}
        NODE_ENV: 'production',
        "IMPROVEMENT_MODE": 'automatic'
      },
      "log_file": './logs/continuous-improvement.log',
      "out_file": './logs/continuous-improvement-out.log',
      "error_file": './logs/continuous-improvement-error.log'
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
      "env": {}
        NODE_ENV: 'production',
        "BUILD_STRATEGY": 'comprehensive'
      },
      "log_file": './logs/daily-build-test.log',
      "out_file": './logs/daily-build-test-out.log',
      "error_file": './logs/daily-build-test-error.log'
    };
  ];
};
