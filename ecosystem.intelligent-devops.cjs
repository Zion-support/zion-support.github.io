module.exports = {
  apps: [;
    // Main application with enhanced monitoring;
    {;
      name: 'zion-app-intelligent',
      script: 'npm',
      args: 'run dev',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {;
        NODE_ENV: 'development',
        PORT: 3000,
        INTELLIGENT_MODE: 'true',,
},
      env_production: {;
        NODE_ENV: 'production',
        PORT: 3000,
        INTELLIGENT_MODE: 'true',,
},
      log_file: './logs/zion-app-intelligent.log',
      error_file: './logs/zion-app-intelligent-error.log',
      out_file: './logs/zion-app-intelligent-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',,
},

    // Intelligent Repository Manager - Git automation and branch management;
    {;
      name: 'intelligent-repository-manager',
      script: './scripts/automation/intelligent-repository-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {;
        NODE_ENV: 'production',
        REPOSITORY_MANAGEMENT_MODE: 'true',
        GIT_AUTO_MERGE: 'true',
        GIT_AUTO_PUSH: 'true',,
},
      cron_restart: '0 */2 * * *', // Restart every 2 hours;
      log_file: './logs/intelligent-repository-manager.log',
      error_file: './logs/intelligent-repository-manager-error.log',
      out_file: './logs/intelligent-repository-manager-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',,
},

    // Smart Development Workflow Orchestrator;
    {;
      name: 'smart-dev-workflow-orchestrator',
      script: './scripts/automation/smart-dev-workflow-orchestrator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {;
        NODE_ENV: 'production',
        DEV_WORKFLOW_MODE: 'true',
        AUTO_CODE_REVIEW: 'true',
        AUTO_TESTING: 'true',,
},
      cron_restart: '0 */1 * * *', // Restart every hour;
      log_file: './logs/smart-dev-workflow-orchestrator.log',
      error_file: './logs/smart-dev-workflow-orchestrator-error.log',
      out_file: './logs/smart-dev-workflow-orchestrator-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',,
},

    // Intelligent Code Quality Pipeline;
    {;
      name: 'intelligent-code-quality-pipeline',
      script: './scripts/automation/intelligent-code-quality-pipeline.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {;
        NODE_ENV: 'production',
        CODE_QUALITY_MODE: 'true',
        AUTO_REFACTORING: 'true',
        QUALITY_METRICS: 'true',,
},
      cron_restart: '0 */3 * * *', // Restart every 3 hours;
      log_file: './logs/intelligent-code-quality-pipeline.log',
      error_file: './logs/intelligent-code-quality-pipeline-error.log',
      out_file: './logs/intelligent-code-quality-pipeline-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',,
},

    // Smart Deployment Pipeline with Git Integration;
    {;
      name: 'smart-deployment-pipeline',
      script: './scripts/automation/smart-deployment-pipeline.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {;
        NODE_ENV: 'production',
        DEPLOYMENT_PIPELINE_MODE: 'true',
        GIT_DEPLOYMENT: 'true',
        AUTO_ROLLBACK: 'true',,
},
      cron_restart: '0 */4 * * *', // Restart every 4 hours;
      log_file: './logs/smart-deployment-pipeline.log',
      error_file: './logs/smart-deployment-pipeline-error.log',
      out_file: './logs/smart-deployment-pipeline-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',,
},

    // Intelligent Conflict Resolution System;
    {;
      name: 'intelligent-conflict-resolver',
      script: './scripts/automation/intelligent-conflict-resolver.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {;
        NODE_ENV: 'production',
        CONFLICT_RESOLUTION_MODE: 'true',
        AUTO_MERGE: 'true',
        SMART_RESOLUTION: 'true',,
},
      cron_restart: '0 */2 * * *', // Restart every 2 hours;
      log_file: './logs/intelligent-conflict-resolver.log',
      error_file: './logs/intelligent-conflict-resolver-error.log',
      out_file: './logs/intelligent-conflict-resolver-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',,
},

    // Enhanced AI Code Analyzer with Git Integration;
    {;
      name: 'enhanced-ai-code-analyzer',
      script: './scripts/automation/enhanced-ai-code-analyzer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {;
        NODE_ENV: 'production',
        AI_ANALYSIS_MODE: 'true',
        GIT_INTEGRATION: 'true',
        AUTO_COMMIT: 'true',,
},
      cron_restart: '0 */2 * * *', // Restart every 2 hours;
      log_file: './logs/enhanced-ai-code-analyzer.log',
      error_file: './logs/enhanced-ai-code-analyzer-error.log',
      out_file: './logs/enhanced-ai-code-analyzer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',,
},

    // Intelligent Performance Optimizer with Build Integration;
    {;
      name: 'intelligent-performance-optimizer',
      script: './scripts/automation/intelligent-performance-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {;
        NODE_ENV: 'production',
        PERFORMANCE_OPTIMIZATION_MODE: 'true',
        BUILD_OPTIMIZATION: 'true',
        BUNDLE_ANALYSIS: 'true',,
},
      cron_restart: '0 */4 * * *', // Restart every 4 hours;
      log_file: './logs/intelligent-performance-optimizer.log',
      error_file: './logs/intelligent-performance-optimizer-error.log',
      out_file: './logs/intelligent-performance-optimizer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',,
},

    // Smart Dependency Intelligence with Security;
    {;
      name: 'smart-dependency-intelligence',
      script: './scripts/automation/smart-dependency-intelligence.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {;
        NODE_ENV: 'production',
        DEPENDENCY_INTELLIGENCE_MODE: 'true',
        SECURITY_SCANNING: 'true',
        AUTO_UPDATE: 'true',,
},
      cron_restart: '0 6,18 * * *', // Restart at 6 AM and 6 PM;
      log_file: './logs/smart-dependency-intelligence.log',
      error_file: './logs/smart-dependency-intelligence-error.log',
      out_file: './logs/smart-dependency-intelligence-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',,
},

    // Enhanced Testing Automation with Coverage;
    {;
      name: 'enhanced-testing-automation',
      script: './scripts/automation/enhanced-testing-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {;
        NODE_ENV: 'production',
        TESTING_AUTOMATION_MODE: 'true',
        COVERAGE_ANALYSIS: 'true',
        AUTO_TEST_GENERATION: 'true',,
},
      cron_restart: '0 */4 * * *', // Restart every 4 hours;
      log_file: './logs/enhanced-testing-automation.log',
      error_file: './logs/enhanced-testing-automation-error.log',
      out_file: './logs/enhanced-testing-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',,
},

    // Project Health Monitor with Git Metrics;
    {;
      name: 'project-health-monitor-git',
      script: './scripts/automation/project-health-monitor-git.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {;
        NODE_ENV: 'production',
        HEALTH_MONITORING_MODE: 'true',
        GIT_METRICS: 'true',
        BRANCH_HEALTH: 'true',,
},
      cron_restart: '0 */1 * * *', // Restart every hour;
      log_file: './logs/project-health-monitor-git.log',
      error_file: './logs/project-health-monitor-git-error.log',
      out_file: './logs/project-health-monitor-git-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',,
},

    // Continuous Integration Pipeline;
    {;
      name: 'continuous-integration-pipeline',
      script: './scripts/automation/continuous-integration-pipeline.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {;
        NODE_ENV: 'production',
        CI_PIPELINE_MODE: 'true',
        GIT_HOOKS: 'true',
        AUTO_BUILD: 'true',,
},
      cron_restart: '0 */2 * * *', // Restart every 2 hours;
      log_file: './logs/continuous-integration-pipeline.log',
      error_file: './logs/continuous-integration-pipeline-error.log',
      out_file: './logs/continuous-integration-pipeline-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',,
},

    // Smart Documentation Generator;
    {;
      name: 'smart-documentation-generator',
      script: './scripts/automation/smart-documentation-generator.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {;
        NODE_ENV: 'production',
        DOCUMENTATION_MODE: 'true',
        AUTO_UPDATE: 'true',
        GIT_INTEGRATION: 'true',,
},
      cron_restart: '0 8,20 * * *', // Restart at 8 AM and 8 PM;
      log_file: './logs/smart-documentation-generator.log',
      error_file: './logs/smart-documentation-generator-error.log',
      out_file: './logs/smart-documentation-generator-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',,
},

    // Enhanced Security Automation;
    {;
      name: 'enhanced-security-automation',
      script: './scripts/automation/enhanced-security-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {;
        NODE_ENV: 'production',
        SECURITY_MODE: 'true',
        VULNERABILITY_SCANNING: 'true',
        AUTO_PATCH: 'true',,
},
      cron_restart: '0 */2 * * *', // Restart every 2 hours;
      log_file: './logs/enhanced-security-automation.log',
      error_file: './logs/enhanced-security-automation-error.log',
      out_file: './logs/enhanced-security-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',,
},

    // Intelligent Error Prevention System;
    {;
      name: 'intelligent-error-prevention',
      script: './scripts/automation/intelligent-error-prevention.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {;
        NODE_ENV: 'production',
        ERROR_PREVENTION_MODE: 'true',
        PREDICTIVE_ANALYSIS: 'true',
        AUTO_FIX: 'true',,
},
      cron_restart: '0 */1 * * *', // Restart every hour;
      log_file: './logs/intelligent-error-prevention.log',
      error_file: './logs/intelligent-error-prevention-error.log',
      out_file: './logs/intelligent-error-prevention-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',,
},

    // Smart Build Optimizer;
    {;
      name: 'smart-build-optimizer',
      script: './scripts/automation/smart-build-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {;
        NODE_ENV: 'production',
        BUILD_OPTIMIZATION_MODE: 'true',
        BUNDLE_OPTIMIZATION: 'true',
        CACHE_OPTIMIZATION: 'true',,
},
      cron_restart: '0 */6 * * *', // Restart every 6 hours;
      log_file: './logs/smart-build-optimizer.log',
      error_file: './logs/smart-build-optimizer-error.log',
      out_file: './logs/smart-build-optimizer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',,
},

    // Daily Build Test with Git Integration;
    {;
      name: 'daily-build-test-git',
      script: './scripts/automation/daily-build-test-git.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {;
        NODE_ENV: 'production',
        BUILD_TEST_MODE: 'true',
        GIT_INTEGRATION: 'true',
        AUTO_COMMIT_RESULTS: 'true',,
},
      cron_restart: '0 2 * * *', // Restart daily at 2 AM;
      log_file: './logs/daily-build-test-git.log',
      error_file: './logs/daily-build-test-git-error.log',
      out_file: './logs/daily-build-test-git-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',,
},
  ],

  deploy: {;
    production: {;
      user: 'miami2',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/Users/miami2/zion-app-clone',
      'pre-deploy-local': 'npm run build && npm run test',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.intelligent-devops.cjs --env production',
      'pre-setup': 'git config --global user.name "PM2 Automation" && git config --global user.email "automation@zion.app"',,
},
    staging: {;
      user: 'miami2',
      host: 'localhost',
      ref: 'origin/staging',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/Users/miami2/zion-app-staging',
      'pre-deploy-local': 'npm run build && npm run test:coverage',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.intelligent-devops.cjs --env staging',
      'pre-setup': 'git config --global user.name "PM2 Automation" && git config --global user.email "automation@zion.app"',,
},
    development: {;
      user: 'miami2',
      host: 'localhost',
      ref: 'origin/develop',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/Users/miami2/zion-app-dev',
      'pre-deploy-local': 'npm run lint && npm run type-check',
      'post-deploy': 'npm install && npm run dev && pm2 reload ecosystem.intelligent-devops.cjs --env development',
      'pre-setup': 'git config --global user.name "PM2 Automation" && git config --global user.email "automation@zion.app"',,
},,
},,
};