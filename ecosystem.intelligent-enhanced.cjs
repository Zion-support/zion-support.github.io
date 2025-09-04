module.exports = {
  apps: [
    // Main Application
    {
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

    // AI-Powered Code Analysis & Auto-Fixing
    {
      name: 'ai-code-analyzer',
      script: 'node',
      args: 'scripts/automation/ai-powered-code-analyzer.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */2 * * *', // Every 2 hours
      max_memory_restart: '512M',
      restart_delay: 10000,
      env: {
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

    // Intelligent Performance Optimizer
    {
      name: 'intelligent-performance-optimizer',
      script: 'node',
      args: 'scripts/automation/intelligent-performance-optimizer.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */4 * * *', // Every 4 hours
      max_memory_restart: '1G',
      restart_delay: 15000,
      env: {
        NODE_ENV: 'production',
        OPTIMIZATION_LEVEL: 'aggressive',
        PERFORMANCE_MONITORING: 'true'
      },
      log_file: './logs/intelligent-performance-optimizer.log',
      out_file: './logs/intelligent-performance-optimizer-out.log',
      error_file: './logs/intelligent-performance-optimizer-error.log',
      merge_logs: true,
      time: true
    },

    // Enhanced Repository Manager
    {
      name: 'enhanced-repository-manager',
      script: 'node',
      args: 'scripts/automation/enhanced-repository-manager.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/30 * * * *', // Every 30 minutes
      max_memory_restart: '512M',
      restart_delay: 10000,
      env: {
        NODE_ENV: 'production',
        AUTO_MERGE: 'false', // Set to true for automatic merging
        CONFLICT_RESOLUTION: 'intelligent',
        BRANCH_CLEANUP: 'true'
      },
      log_file: './logs/enhanced-repository-manager.log',
      out_file: './logs/enhanced-repository-manager-out.log',
      error_file: './logs/enhanced-repository-manager-error.log',
      merge_logs: true,
      time: true
    },

    // Smart Deployment Automation
    {
      name: 'smart-deployment-automation',
      script: 'node',
      args: 'scripts/automation/smart-deployment-automation.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */6 * * *', // Every 6 hours
      max_memory_restart: '1G',
      restart_delay: 30000,
      env: {
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

    // Intelligent Monitoring System
    {
      name: 'intelligent-monitoring-system',
      script: 'node',
      args: 'scripts/automation/intelligent-monitoring-system.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/5 * * * *', // Every 5 minutes
      max_memory_restart: '512M',
      restart_delay: 5000,
      env: {
        NODE_ENV: 'production',
        MONITORING_INTERVAL: '300000',
        ALERT_THRESHOLDS: 'true',
        PREDICTIVE_ANALYTICS: 'true'
      },
      log_file: './logs/intelligent-monitoring-system.log',
      out_file: './logs/intelligent-monitoring-system-out.log',
      error_file: './logs/intelligent-monitoring-system-error.log',
      merge_logs: true,
      time: true
    },

    // Enhanced Security Automation
    {
      name: 'enhanced-security-automation',
      script: 'node',
      args: 'scripts/automation/enhanced-security-automation.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */3 * * *', // Every 3 hours
      max_memory_restart: '512M',
      restart_delay: 25000,
      env: {
        NODE_ENV: 'production',
        SECURITY_LEVEL: 'maximum',
        VULNERABILITY_SCANNING: 'true',
        DEPENDENCY_MONITORING: 'true'
      },
      log_file: './logs/enhanced-security-automation.log',
      out_file: './logs/enhanced-security-automation-out.log',
      error_file: './logs/enhanced-security-automation-error.log',
      merge_logs: true,
      time: true
    },

    // Intelligent Testing Automation
    {
      name: 'intelligent-testing-automation',
      script: 'node',
      args: 'scripts/automation/intelligent-testing-automation.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/20 * * * *', // Every 20 minutes
      max_memory_restart: '1G',
      restart_delay: 20000,
      env: {
        NODE_ENV: 'production',
        TEST_STRATEGY: 'comprehensive',
        PARALLEL_TESTS: 'true',
        COVERAGE_THRESHOLD: '80'
      },
      log_file: './logs/intelligent-testing-automation.log',
      out_file: './logs/intelligent-testing-automation-out.log',
      error_file: './logs/intelligent-testing-automation-error.log',
      merge_logs: true,
      time: true
    },

    // Advanced Git Workflow Automation
    {
      name: 'advanced-git-workflow',
      script: 'node',
      args: 'scripts/automation/advanced-git-workflow.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/15 * * * *', // Every 15 minutes
      max_memory_restart: '512M',
      restart_delay: 10000,
      env: {
        NODE_ENV: 'production',
        WORKFLOW_MODE: 'continuous',
        QUALITY_GATES: 'enabled',
        AUTO_PR_CREATION: 'true'
      },
      log_file: './logs/advanced-git-workflow.log',
      out_file: './logs/advanced-git-workflow-out.log',
      error_file: './logs/advanced-git-workflow-error.log',
      merge_logs: true,
      time: true
    },

    // Intelligent CI/CD Orchestrator
    {
      name: 'intelligent-cicd-orchestrator',
      script: 'node',
      args: 'scripts/automation/intelligent-cicd-orchestrator.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/10 * * * *', // Every 10 minutes
      max_memory_restart: '1G',
      restart_delay: 15000,
      env: {
        NODE_ENV: 'production',
        PIPELINE_MODE: 'intelligent',
        AUTO_DEPLOYMENT: 'false',
        QUALITY_GATES: 'strict'
      },
      log_file: './logs/intelligent-cicd-orchestrator.log',
      out_file: './logs/intelligent-cicd-orchestrator-out.log',
      error_file: './logs/intelligent-cicd-orchestrator-error.log',
      merge_logs: true,
      time: true
    },

    // Project Health Monitor
    {
      name: 'project-health-monitor',
      script: 'node',
      args: 'scripts/automation/project-health-monitor.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/5 * * * *', // Every 5 minutes
      max_memory_restart: '512M',
      restart_delay: 5000,
      env: {
        NODE_ENV: 'production',
        HEALTH_CHECKS: 'comprehensive',
        MONITORING_INTERVAL: '300000',
        ALERT_THRESHOLD: 'medium'
      },
      log_file: './logs/project-health-monitor.log',
      out_file: './logs/project-health-monitor-out.log',
      error_file: './logs/project-health-monitor-error.log',
      merge_logs: true,
      time: true
    },

    // Documentation Automation
    {
      name: 'documentation-automation',
      script: 'node',
      args: 'scripts/automation/documentation-automation.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 2 * * *', // Daily at 2 AM
      max_memory_restart: '256M',
      restart_delay: 60000,
      env: {
        NODE_ENV: 'production',
        AUTO_GENERATE: 'true',
        UPDATE_README: 'true',
        API_DOCS: 'true'
      },
      log_file: './logs/documentation-automation.log',
      out_file: './logs/documentation-automation-out.log',
      error_file: './logs/documentation-automation-error.log',
      merge_logs: true,
      time: true
    },

    // Backup and Recovery Automation
    {
      name: 'backup-recovery-automation',
      script: 'node',
      args: 'scripts/automation/backup-recovery-automation.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 1 * * *', // Daily at 1 AM
      max_memory_restart: '512M',
      restart_delay: 120000,
      env: {
        NODE_ENV: 'production',
        BACKUP_STRATEGY: 'incremental',
        RETENTION_DAYS: '30',
        COMPRESSION: 'true'
      },
      log_file: './logs/backup-recovery-automation.log',
      out_file: './logs/backup-recovery-automation-out.log',
      error_file: './logs/backup-recovery-automation-error.log',
      merge_logs: true,
      time: true
    },

    // Master Orchestrator
    {
      name: 'master-orchestrator',
      script: 'node',
      args: 'scripts/automation/master-orchestrator.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/1 * * * *', // Every minute
      max_memory_restart: '1G',
      restart_delay: 2000,
      env: {
        NODE_ENV: 'production',
        ORCHESTRATION_MODE: 'intelligent',
        COORDINATION_ENABLED: 'true',
        UNIFIED_MANAGEMENT: 'true'
      },
      log_file: './logs/master-orchestrator.log',
      out_file: './logs/master-orchestrator-out.log',
      error_file: './logs/master-orchestrator-error.log',
      merge_logs: true,
      time: true
    }
  ],

  // PM2 Deploy configuration
  deploy: {
    production: {
      user: 'node',
      host: 'your-production-server.com',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/your-repo.git',
      path: '/var/www/production',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.intelligent-enhanced.cjs --env production',
      'pre-setup': ''
    },
    staging: {
      user: 'node',
      host: 'your-staging-server.com',
      ref: 'origin/develop',
      repo: 'git@github.com:your-username/your-repo.git',
      path: '/var/www/staging',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.intelligent-enhanced.cjs --env staging',
      'pre-setup': ''
    }
  }
};