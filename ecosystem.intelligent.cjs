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
        PORT: 3000
      },
      log_file: './logs/web.log',
      out_file: './logs/web-out.log',
      error_file: './logs/web-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🤖 AI-Powered Code Analyzer
    {
      name: 'ai-code-analyzer',
      script: 'node',
      args: 'automation/ai-code-analyzer.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */4 * * *', // Every 4 hours
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        ANALYSIS_MODE: 'comprehensive'
      },
      log_file: './logs/ai-code-analyzer.log',
      out_file: './logs/ai-code-analyzer-out.log',
      error_file: './logs/ai-code-analyzer-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🚀 Smart Deployment Optimizer
    {
      name: 'smart-deployment-optimizer',
      script: 'node',
      args: 'automation/smart-deployment-optimizer.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */6 * * *', // Every 6 hours
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        DEPLOYMENT_STRATEGY: 'intelligent',
        AUTO_ROLLBACK: 'true'
      },
      log_file: './logs/smart-deployment.log',
      out_file: './logs/smart-deployment-out.log',
      error_file: './logs/smart-deployment-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🔄 Intelligent Git Workflow
    {
      name: 'intelligent-git-workflow',
      script: 'node',
      args: 'automation/intelligent-git-workflow.cjs sync',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/30 * * * *', // Every 30 minutes
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        GIT_STRATEGY: 'intelligent',
        AUTO_MERGE: 'true'
      },
      log_file: './logs/intelligent-git-workflow.log',
      out_file: './logs/intelligent-git-workflow-out.log',
      error_file: './logs/intelligent-git-workflow-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 📊 AI Performance Predictor
    {
      name: 'ai-performance-predictor',
      script: 'node',
      args: 'automation/ai-performance-predictor.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/2 * * * *', // Every 2 minutes
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        MONITORING_INTERVAL: '30000',
        PREDICTION_WINDOW: '24'
      },
      log_file: './logs/ai-performance-predictor.log',
      out_file: './logs/ai-performance-predictor-out.log',
      error_file: './logs/ai-performance-predictor-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🔒 Advanced Security Scanner
    {
      name: 'advanced-security-scanner',
      script: 'node',
      args: 'automation/advanced-security-scanner.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */8 * * *', // Every 8 hours
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        SCAN_TYPES: 'dependencies,code,secrets,infrastructure,compliance',
        THREAT_INTELLIGENCE: 'true'
      },
      log_file: './logs/advanced-security-scanner.log',
      out_file: './logs/advanced-security-scanner-out.log',
      error_file: './logs/advanced-security-scanner-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🚀 Intelligent DevOps Orchestrator
    {
      name: 'intelligent-devops-orchestrator',
      script: 'node',
      args: 'automation/intelligent-devops-orchestrator.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */12 * * *', // Every 12 hours
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PIPELINE_MODE: 'intelligent',
        AUTO_ROLLBACK: 'true',
        QUALITY_GATES: 'true'
      },
      log_file: './logs/intelligent-devops-orchestrator.log',
      out_file: './logs/intelligent-devops-orchestrator-out.log',
      error_file: './logs/intelligent-devops-orchestrator-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 📈 Performance Monitor
    {
      name: 'performance-monitor',
      script: 'node',
      args: 'scripts/performance-monitor.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/5 * * * *', // Every 5 minutes
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        MONITORING_INTERVAL: '30000'
      },
      log_file: './logs/performance-monitor.log',
      out_file: './logs/performance-monitor-out.log',
      error_file: './logs/performance-monitor-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🔍 Health Check Monitor
    {
      name: 'health-check-monitor',
      script: 'node',
      args: 'scripts/comprehensive-health-check.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '*/2 * * * *', // Every 2 minutes
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'production',
        HEALTH_CHECK_INTERVAL: '120000'
      },
      log_file: './logs/health-check-monitor.log',
      out_file: './logs/health-check-monitor-out.log',
      error_file: './logs/health-check-monitor-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🛡️ Security Monitor
    {
      name: 'security-monitor',
      script: 'node',
      args: 'scripts/security-audit.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */4 * * *', // Every 4 hours
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        SECURITY_SCAN_INTERVAL: '14400000'
      },
      log_file: './logs/security-monitor.log',
      out_file: './logs/security-monitor-out.log',
      error_file: './logs/security-monitor-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🔧 Code Quality Monitor
    {
      name: 'code-quality-monitor',
      script: 'node',
      args: 'scripts/code-quality-monitor.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */6 * * *', // Every 6 hours
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        QUALITY_CHECK_INTERVAL: '21600000'
      },
      log_file: './logs/code-quality-monitor.log',
      out_file: './logs/code-quality-monitor-out.log',
      error_file: './logs/code-quality-monitor-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 📊 Build Monitor
    {
      name: 'build-monitor',
      script: 'node',
      args: 'scripts/comprehensive-test-runner.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */2 * * *', // Every 2 hours
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        BUILD_CHECK_INTERVAL: '7200000'
      },
      log_file: './logs/build-monitor.log',
      out_file: './logs/build-monitor-out.log',
      error_file: './logs/build-monitor-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🔄 Dependency Monitor
    {
      name: 'dependency-monitor',
      script: 'node',
      args: 'scripts/dependency-updater.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 0 * * 0', // Every Sunday at midnight
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        DEPENDENCY_CHECK_INTERVAL: '604800000'
      },
      log_file: './logs/dependency-monitor.log',
      out_file: './logs/dependency-monitor-out.log',
      error_file: './logs/dependency-monitor-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🎯 SEO Optimizer
    {
      name: 'seo-optimizer',
      script: 'node',
      args: 'scripts/improve-seo.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */12 * * *', // Every 12 hours
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        SEO_CHECK_INTERVAL: '43200000'
      },
      log_file: './logs/seo-optimizer.log',
      out_file: './logs/seo-optimizer-out.log',
      error_file: './logs/seo-optimizer-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },

    // 🖼️ Image Optimizer
    {
      name: 'image-optimizer',
      script: 'node',
      args: 'scripts/optimize-images.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      cron_restart: '0 */24 * * *', // Every 24 hours
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        IMAGE_OPTIMIZATION_INTERVAL: '86400000'
      },
      log_file: './logs/image-optimizer.log',
      out_file: './logs/image-optimizer-out.log',
      error_file: './logs/image-optimizer-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    }
  ],

  // PM2 Configuration
  deploy: {
    production: {
      user: 'deploy',
      host: ['production-server.com'],
      ref: 'origin/main',
      repo: 'git@github.com:username/ziontechgroup.com.git',
      path: '/var/www/ziontechgroup.com',
      'post-deploy': 'npm install && pm2 reload ecosystem.intelligent.cjs --env production'
    },
    staging: {
      user: 'deploy',
      host: ['staging-server.com'],
      ref: 'origin/develop',
      repo: 'git@github.com:username/ziontechgroup.com.git',
      path: '/var/www/ziontechgroup-staging.com',
      'post-deploy': 'npm install && pm2 reload ecosystem.intelligent.cjs --env staging'
    }
  }
};