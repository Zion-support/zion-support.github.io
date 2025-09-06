module.exports = {}
  "apps": [// Main Application;]
    {}
      name: 'ziontechgroup-web',
      script: 'npm',
      args: 'start',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      env_development: {
        NODE_ENV: 'development',
        PORT: 3000,
        DEBUG: 'true'
      },
      log_file: './logs/web.log',
      out_file: './logs/web-out.log',
      error_file: './logs/web-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      time: true
    },


        NODE_ENV: 'production',
        AI_ANALYSIS_MODE: 'comprehensive',
        AUTO_FIX: 'true'
      },
      log_file: './logs/ai-code-analyzer.log',
      out_file: './logs/ai-code-analyzer-out.log',
      error_file: './logs/ai-code-analyzer-error.log',
      merge_logs: true,
      time: true
    },


        NODE_ENV: 'production',
        OPTIMIZATION_LEVEL: 'aggressive',
        PERFORMANCE_MONITORING: 'true'
      },
      log_file: './logs/smart-performance-optimizer.log',
      out_file: './logs/smart-performance-optimizer-out.log',
      error_file: './logs/smart-performance-optimizer-error.log',
      merge_logs: true,
      time: true
    },


        NODE_ENV: 'production',
        AUTO_UPDATE: 'true',
        SECURITY_FIRST: 'true',
        UPDATE_STRATEGY: 'conservative'
      },
      log_file: './logs/intelligent-dependency-manager.log',
      out_file: './logs/intelligent-dependency-manager-out.log',
      error_file: './logs/intelligent-dependency-manager-error.log',
      merge_logs: true,
      time: true
    },


        NODE_ENV: 'production',
        AUTO_DEPLOY: 'false', // Set to true for automatic deployment
        ROLLBACK_ENABLED: 'true',
        DEPLOYMENT_STRATEGY: 'blue-green'
      },
      log_file: './logs/smart-deployment-automation.log',
      out_file: './logs/smart-deployment-automation-out.log',
      error_file: './logs/smart-deployment-automation-error.log',
      merge_logs: true,
      time: true
    },


        NODE_ENV: 'production',
        AUTO_MERGE: 'false', // Set to true for automatic merging
        CONFLICT_RESOLUTION: 'intelligent',
        BRANCH_CLEANUP: 'true'
      },
      log_file: './logs/intelligent-repository-manager.log',
      out_file: './logs/intelligent-repository-manager-out.log',
      error_file: './logs/intelligent-repository-manager-error.log',
      merge_logs: true,
      time: true
    },


        NODE_ENV: 'production',
        WORKFLOW_MODE: 'continuous',
        QUALITY_GATES: 'enabled'
      },
      log_file: './logs/advanced-development-workflow.log',
      out_file: './logs/advanced-development-workflow-out.log',
      error_file: './logs/advanced-development-workflow-error.log',
      merge_logs: true,
      time: true
    },


        NODE_ENV: 'production',
        PIPELINE_MODE: 'intelligent',
        AUTO_DEPLOYMENT: 'false'
      },
      log_file: './logs/intelligent-cicd-orchestrator.log',
      out_file: './logs/intelligent-cicd-orchestrator-out.log',
      error_file: './logs/intelligent-cicd-orchestrator-error.log',
      merge_logs: true,
      time: true
    },


        NODE_ENV: 'production',
        QUALITY_GATES: 'strict',
        PARALLEL_JOBS: '4'
      },
      log_file: './logs/enhanced-ci-cd-automation.log',
      out_file: './logs/enhanced-ci-cd-automation-out.log',
      error_file: './logs/enhanced-ci-cd-automation-error.log',
      merge_logs: true,
      time: true
    },


        NODE_ENV: 'production',
        TEST_STRATEGY: 'comprehensive',
        PARALLEL_TESTS: 'true'
      },
      log_file: './logs/enhanced-testing-automation.log',
      out_file: './logs/enhanced-testing-automation-out.log',
      error_file: './logs/enhanced-testing-automation-error.log',
      merge_logs: true,
      time: true
    },


        NODE_ENV: 'production',
        SECURITY_LEVEL: 'maximum',
        VULNERABILITY_SCANNING: 'true'
      },
      log_file: './logs/enhanced-security-automation.log',
      out_file: './logs/enhanced-security-automation-out.log',
      error_file: './logs/enhanced-security-automation-error.log',
      merge_logs: true,
      time: true
    },


        NODE_ENV: 'production',
        HEALTH_CHECKS: 'comprehensive',
        MONITORING_INTERVAL: '300000'
      },
      log_file: './logs/project-health-monitor.log',
      out_file: './logs/project-health-monitor-out.log',
      error_file: './logs/project-health-monitor-error.log',
      merge_logs: true,
      time: true
    },


        NODE_ENV: 'production',
        SYNC_MODE: 'continuous',
        PROCESS_MONITORING: 'true'
      },
      log_file: './logs/pm2-sync-automation.log',
      out_file: './logs/pm2-sync-automation-out.log',
      error_file: './logs/pm2-sync-automation-error.log',
      merge_logs: true,
      time: true
    },


        NODE_ENV: 'production',
        CHECK_DEPTH: 'deep',
        EXTERNAL_LINKS: 'true'
      },
      log_file: './logs/link-checker-automation.log',
      out_file: './logs/link-checker-automation-out.log',
      error_file: './logs/link-checker-automation-error.log',
      merge_logs: true,
      time: true
    },


        NODE_ENV: 'production',
        AUTO_FIX: 'true',
        STRICT_MODE: 'true'
      },
      log_file: './logs/typescript-syntax-fixer.log',
      out_file: './logs/typescript-syntax-fixer-out.log',
      error_file: './logs/typescript-syntax-fixer-error.log',
      merge_logs: true,
      time: true
    },


        NODE_ENV: 'production',
        ERROR_DETECTION: 'real-time',
        AUTO_FIX: 'true'
      },
      log_file: './logs/console-error-fixer.log',
      out_file: './logs/console-error-fixer-out.log',
      error_file: './logs/console-error-fixer-error.log',
      merge_logs: true,
      time: true
    },


        NODE_ENV: 'production',
        QUALITY_STANDARDS: 'high',
        COVERAGE_THRESHOLD: '80'
      },
      log_file: './logs/quality-checks.log',
      out_file: './logs/quality-checks-out.log',
      error_file: './logs/quality-checks-error.log',
      merge_logs: true,
      time: true
    },


        NODE_ENV: 'production',
        AUDIT_LEVEL: 'comprehensive',
        VULNERABILITY_ALERTS: 'true'
      },
      log_file: './logs/security-audit.log',
      out_file: './logs/security-audit-out.log',
      error_file: './logs/security-audit-error.log',
      merge_logs: true,
      time: true
    },


        NODE_ENV: 'production',
        IMPROVEMENT_MODE: 'automatic',
        LEARNING_ENABLED: 'true'
      },
      log_file: './logs/continuous-improvement.log',
      out_file: './logs/continuous-improvement-out.log',
      error_file: './logs/continuous-improvement-error.log',
      merge_logs: true,
      time: true
    },


        NODE_ENV: 'production',
        BUILD_STRATEGY: 'comprehensive',
        NOTIFICATION_ENABLED: 'true'
      },
      log_file: './logs/daily-build-test.log',
      out_file: './logs/daily-build-test-out.log',
      error_file: './logs/daily-build-test-error.log',
      merge_logs: true,
      time: true
    },


        NODE_ENV: 'production',
        HEALTH_CHECK_INTERVAL: '120000',
        ALERT_THRESHOLD: 'medium'
      },
      log_file: './logs/health-check.log',
      out_file: './logs/health-check-out.log',
      error_file: './logs/health-check-error.log',
      merge_logs: true,
      time: true
    },


        NODE_ENV: 'production',
        SCAN_DEPTH: 'comprehensive',
        REAL_TIME_SCANNING: 'true'
      },
      log_file: './logs/security-scanner.log',
      out_file: './logs/security-scanner-out.log',
      error_file: './logs/security-scanner-error.log',
      merge_logs: true,
      time: true
    },


        NODE_ENV: 'production',
        MONITORING_INTERVAL: '180000',
        PERFORMANCE_ALERTS: 'true'
      },
      log_file: './logs/performance-monitor.log',
      out_file: './logs/performance-monitor-out.log',
      error_file: './logs/performance-monitor-error.log',
      merge_logs: true,
      time: true
    }
  ],


      user: 'node',
      host: 'your-production-server.com',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/your-repo.git',
      path: '/var/www/production',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.enhanced-intelligent-v2.cjs --env production',
      'pre-setup': ''
    },
    staging: {
      user: 'node',
      host: 'your-staging-server.com',
      ref: 'origin/develop',
      repo: 'git@github.com:your-username/your-repo.git',
      path: '/var/www/staging',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.enhanced-intelligent-v2.cjs --env staging',
      'pre-setup': ''
    };
  };
};
