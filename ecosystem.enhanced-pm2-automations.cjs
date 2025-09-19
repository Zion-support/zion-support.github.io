module.exports = {
  apps: [
    // Main application with enhanced monitoring
    {
      name: 'zion-app-enhanced',
      script: 'npm',
      args: 'run dev',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
        ENHANCED_MODE: 'true',
        INTELLIGENT_AUTOMATION: 'true',
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
        ENHANCED_MODE: 'true',
        INTELLIGENT_AUTOMATION: 'true',
      },
      log_file: './logs/zion-app-enhanced.log',
      error_file: './logs/zion-app-enhanced-error.log',
      out_file: './logs/zion-app-enhanced-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Enhanced Git Intelligence System
    {
      name: 'enhanced-git-intelligence-system',
      script: './scripts/automation/enhanced-git-intelligence-system.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        GIT_INTELLIGENCE_MODE: 'true',
        AUTO_CONFLICT_RESOLUTION: 'true',
        SMART_MERGE: 'true',
        BRANCH_HEALTH_MONITORING: 'true',
      },
      cron_restart: '0 */1 * * *', // Restart every hour
      log_file: './logs/enhanced-git-intelligence-system.log',
      error_file: './logs/enhanced-git-intelligence-system-error.log',
      out_file: './logs/enhanced-git-intelligence-system-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // AI-Powered Development Assistant
    {
      name: 'ai-powered-development-assistant',
      script: './scripts/automation/ai-powered-development-assistant.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AI_DEVELOPMENT_MODE: 'true',
        CODE_QUALITY_ANALYSIS: 'true',
        REFACTORING_SUGGESTIONS: 'true',
        PERFORMANCE_OPTIMIZATION: 'true',
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: './logs/ai-powered-development-assistant.log',
      error_file: './logs/ai-powered-development-assistant-error.log',
      out_file: './logs/ai-powered-development-assistant-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Advanced Deployment Orchestrator
    {
      name: 'advanced-deployment-orchestrator',
      script: './scripts/automation/advanced-deployment-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        DEPLOYMENT_ORCHESTRATION_MODE: 'true',
        MULTI_ENVIRONMENT_DEPLOYMENT: 'true',
        HEALTH_CHECKS: 'true',
        AUTO_ROLLBACK: 'true',
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      log_file: './logs/advanced-deployment-orchestrator.log',
      error_file: './logs/advanced-deployment-orchestrator-error.log',
      out_file: './logs/advanced-deployment-orchestrator-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Intelligent Repository Manager (Enhanced)
    {
      name: 'intelligent-repository-manager-enhanced',
      script: './scripts/automation/intelligent-repository-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        REPOSITORY_MANAGEMENT_MODE: 'true',
        GIT_AUTO_MERGE: 'true',
        GIT_AUTO_PUSH: 'true',
        ENHANCED_CONFLICT_RESOLUTION: 'true',
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: './logs/intelligent-repository-manager-enhanced.log',
      error_file: './logs/intelligent-repository-manager-enhanced-error.log',
      out_file: './logs/intelligent-repository-manager-enhanced-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Smart Development Workflow Orchestrator (Enhanced)
    {
      name: 'smart-dev-workflow-orchestrator-enhanced',
      script: './scripts/automation/smart-dev-workflow-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        DEV_WORKFLOW_MODE: 'true',
        AUTO_CODE_REVIEW: 'true',
        AUTO_TESTING: 'true',
        ENHANCED_ORCHESTRATION: 'true',
      },
      cron_restart: '0 */1 * * *', // Restart every hour
      log_file: './logs/smart-dev-workflow-orchestrator-enhanced.log',
      error_file: './logs/smart-dev-workflow-orchestrator-enhanced-error.log',
      out_file: './logs/smart-dev-workflow-orchestrator-enhanced-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Intelligent Code Quality Pipeline (Enhanced)
    {
      name: 'intelligent-code-quality-pipeline-enhanced',
      script: './scripts/automation/intelligent-code-quality-pipeline.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        CODE_QUALITY_MODE: 'true',
        AUTO_REFACTORING: 'true',
        QUALITY_METRICS: 'true',
        ENHANCED_ANALYSIS: 'true',
      },
      cron_restart: '0 */3 * * *', // Restart every 3 hours
      log_file: './logs/intelligent-code-quality-pipeline-enhanced.log',
      error_file: './logs/intelligent-code-quality-pipeline-enhanced-error.log',
      out_file: './logs/intelligent-code-quality-pipeline-enhanced-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Smart Deployment Pipeline (Enhanced)
    {
      name: 'smart-deployment-pipeline-enhanced',
      script: './scripts/automation/smart-deployment-pipeline.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        DEPLOYMENT_PIPELINE_MODE: 'true',
        GIT_DEPLOYMENT: 'true',
        AUTO_ROLLBACK: 'true',
        ENHANCED_STRATEGIES: 'true',
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      log_file: './logs/smart-deployment-pipeline-enhanced.log',
      error_file: './logs/smart-deployment-pipeline-enhanced-error.log',
      out_file: './logs/smart-deployment-pipeline-enhanced-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Intelligent Conflict Resolution System (Enhanced)
    {
      name: 'intelligent-conflict-resolver-enhanced',
      script: './scripts/automation/intelligent-conflict-resolver.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        CONFLICT_RESOLUTION_MODE: 'true',
        AUTO_MERGE: 'true',
        SMART_RESOLUTION: 'true',
        ENHANCED_ALGORITHMS: 'true',
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: './logs/intelligent-conflict-resolver-enhanced.log',
      error_file: './logs/intelligent-conflict-resolver-enhanced-error.log',
      out_file: './logs/intelligent-conflict-resolver-enhanced-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Enhanced AI Code Analyzer
    {
      name: 'enhanced-ai-code-analyzer',
      script: './scripts/automation/enhanced-ai-code-analyzer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        AI_ANALYSIS_MODE: 'true',
        GIT_INTEGRATION: 'true',
        AUTO_COMMIT: 'true',
        ENHANCED_AI: 'true',
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: './logs/enhanced-ai-code-analyzer.log',
      error_file: './logs/enhanced-ai-code-analyzer-error.log',
      out_file: './logs/enhanced-ai-code-analyzer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Intelligent Performance Optimizer (Enhanced)
    {
      name: 'intelligent-performance-optimizer-enhanced',
      script: './scripts/automation/intelligent-performance-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PERFORMANCE_OPTIMIZATION_MODE: 'true',
        BUILD_OPTIMIZATION: 'true',
        BUNDLE_ANALYSIS: 'true',
        ENHANCED_OPTIMIZATION: 'true',
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      log_file: './logs/intelligent-performance-optimizer-enhanced.log',
      error_file: './logs/intelligent-performance-optimizer-enhanced-error.log',
      out_file: './logs/intelligent-performance-optimizer-enhanced-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Smart Dependency Intelligence (Enhanced)
    {
      name: 'smart-dependency-intelligence-enhanced',
      script: './scripts/automation/smart-dependency-intelligence.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        DEPENDENCY_INTELLIGENCE_MODE: 'true',
        SECURITY_SCANNING: 'true',
        AUTO_UPDATE: 'true',
        ENHANCED_DEPENDENCY_MANAGEMENT: 'true',
      },
      cron_restart: '0 6,18 * * *', // Restart at 6 AM and 6 PM
      log_file: './logs/smart-dependency-intelligence-enhanced.log',
      error_file: './logs/smart-dependency-intelligence-enhanced-error.log',
      out_file: './logs/smart-dependency-intelligence-enhanced-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Enhanced Testing Automation
    {
      name: 'enhanced-testing-automation',
      script: './scripts/automation/enhanced-testing-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        TESTING_AUTOMATION_MODE: 'true',
        COVERAGE_ANALYSIS: 'true',
        AUTO_TEST_GENERATION: 'true',
        ENHANCED_TESTING: 'true',
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      log_file: './logs/enhanced-testing-automation.log',
      error_file: './logs/enhanced-testing-automation-error.log',
      out_file: './logs/enhanced-testing-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Project Health Monitor (Enhanced)
    {
      name: 'project-health-monitor-enhanced',
      script: './scripts/automation/project-health-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        HEALTH_MONITORING_MODE: 'true',
        GIT_METRICS: 'true',
        BRANCH_HEALTH: 'true',
        ENHANCED_MONITORING: 'true',
      },
      cron_restart: '0 */1 * * *', // Restart every hour
      log_file: './logs/project-health-monitor-enhanced.log',
      error_file: './logs/project-health-monitor-enhanced-error.log',
      out_file: './logs/project-health-monitor-enhanced-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Continuous Integration Pipeline (Enhanced)
    {
      name: 'continuous-integration-pipeline-enhanced',
      script: './scripts/automation/continuous-integration-pipeline.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        CI_PIPELINE_MODE: 'true',
        GIT_HOOKS: 'true',
        AUTO_BUILD: 'true',
        ENHANCED_CI: 'true',
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: './logs/continuous-integration-pipeline-enhanced.log',
      error_file: './logs/continuous-integration-pipeline-enhanced-error.log',
      out_file: './logs/continuous-integration-pipeline-enhanced-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Smart Documentation Generator (Enhanced)
    {
      name: 'smart-documentation-generator-enhanced',
      script: './scripts/automation/smart-documentation-generator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        DOCUMENTATION_MODE: 'true',
        AUTO_UPDATE: 'true',
        GIT_INTEGRATION: 'true',
        ENHANCED_DOCUMENTATION: 'true',
      },
      cron_restart: '0 8,20 * * *', // Restart at 8 AM and 8 PM
      log_file: './logs/smart-documentation-generator-enhanced.log',
      error_file: './logs/smart-documentation-generator-enhanced-error.log',
      out_file: './logs/smart-documentation-generator-enhanced-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Enhanced Security Automation
    {
      name: 'enhanced-security-automation',
      script: './scripts/automation/enhanced-security-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        SECURITY_MODE: 'true',
        VULNERABILITY_SCANNING: 'true',
        AUTO_PATCH: 'true',
        ENHANCED_SECURITY: 'true',
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: './logs/enhanced-security-automation.log',
      error_file: './logs/enhanced-security-automation-error.log',
      out_file: './logs/enhanced-security-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Intelligent Error Prevention System (Enhanced)
    {
      name: 'intelligent-error-prevention-enhanced',
      script: './scripts/automation/intelligent-error-prevention.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        ERROR_PREVENTION_MODE: 'true',
        PREDICTIVE_ANALYSIS: 'true',
        AUTO_FIX: 'true',
        ENHANCED_PREVENTION: 'true',
      },
      cron_restart: '0 */1 * * *', // Restart every hour
      log_file: './logs/intelligent-error-prevention-enhanced.log',
      error_file: './logs/intelligent-error-prevention-enhanced-error.log',
      out_file: './logs/intelligent-error-prevention-enhanced-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Smart Build Optimizer (Enhanced)
    {
      name: 'smart-build-optimizer-enhanced',
      script: './scripts/automation/smart-build-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        BUILD_OPTIMIZATION_MODE: 'true',
        BUNDLE_OPTIMIZATION: 'true',
        CACHE_OPTIMIZATION: 'true',
        ENHANCED_BUILD: 'true',
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      log_file: './logs/smart-build-optimizer-enhanced.log',
      error_file: './logs/smart-build-optimizer-enhanced-error.log',
      out_file: './logs/smart-build-optimizer-enhanced-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Daily Build Test with Git Integration (Enhanced)
    {
      name: 'daily-build-test-git-enhanced',
      script: './scripts/automation/daily-build-test-git.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        BUILD_TEST_MODE: 'true',
        GIT_INTEGRATION: 'true',
        AUTO_COMMIT_RESULTS: 'true',
        ENHANCED_BUILD_TESTING: 'true',
      },
      cron_restart: '0 2 * * *', // Restart daily at 2 AM
      log_file: './logs/daily-build-test-git-enhanced.log',
      error_file: './logs/daily-build-test-git-enhanced-error.log',
      out_file: './logs/daily-build-test-git-enhanced-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Enhanced Automation Coordinator
    {
      name: 'enhanced-automation-coordinator',
      script: './scripts/automation/enhanced-automation-coordinator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        COORDINATION_MODE: 'true',
        WORKFLOW_ORCHESTRATION: 'true',
        INTELLIGENT_SCHEDULING: 'true',
        ENHANCED_COORDINATION: 'true',
      },
      cron_restart: '0 */1 * * *', // Restart every hour
      log_file: './logs/enhanced-automation-coordinator.log',
      error_file: './logs/enhanced-automation-coordinator-error.log',
      out_file: './logs/enhanced-automation-coordinator-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },
  ],

  deploy: {
    production: {
      user: 'miami2',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/Users/miami2/zion-app-clone',
      'pre-deploy-local': 'npm run build && npm run test',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.enhanced-pm2-automations.cjs --env production',
      'pre-setup': 'git config --global user.name "PM2 Enhanced Automation" && git config --global user.email "enhanced-automation@zion.app"',
    },
    staging: {
      user: 'miami2',
      host: 'localhost',
      ref: 'origin/staging',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/Users/miami2/zion-app-staging',
      'pre-deploy-local': 'npm run build && npm run test:coverage',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.enhanced-pm2-automations.cjs --env staging',
      'pre-setup': 'git config --global user.name "PM2 Enhanced Automation" && git config --global user.email "enhanced-automation@zion.app"',
    },
    development: {
      user: 'miami2',
      host: 'localhost',
      ref: 'origin/develop',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/Users/miami2/zion-app-dev',
      'pre-deploy-local': 'npm run lint && npm run type-check',
      'post-deploy': 'npm install && npm run dev && pm2 reload ecosystem.enhanced-pm2-automations.cjs --env development',
      'pre-setup': 'git config --global user.name "PM2 Enhanced Automation" && git config --global user.email "enhanced-automation@zion.app"',
    },
  },
};