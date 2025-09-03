module.exports = {
  apps: [
    // Main application
    {
      name: 'zion-app',
      script: 'npm',
      args: 'start',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },

    // AI-Powered Code Analyzer - Intelligent code analysis and auto-fixing
    {
      name: 'ai-code-analyzer',
      script: './scripts/automation/ai-code-analyzer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        AI_ANALYSIS_MODE: 'true',
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: './logs/ai-code-analyzer.log',
      error_file: './logs/ai-code-analyzer-error.log',
      out_file: './logs/ai-code-analyzer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Smart Performance Optimizer - Bundle and runtime optimization
    {
      name: 'smart-performance-optimizer',
      script: './scripts/automation/smart-performance-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PERFORMANCE_OPTIMIZATION_MODE: 'true',
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      log_file: './logs/smart-performance-optimizer.log',
      error_file: './logs/smart-performance-optimizer-error.log',
      out_file: './logs/smart-performance-optimizer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Intelligent Dependency Manager - Dependency analysis and management
    {
      name: 'intelligent-dependency-manager',
      script: './scripts/automation/intelligent-dependency-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        DEPENDENCY_MANAGEMENT_MODE: 'true',
      },
      cron_restart: '0 6,18 * * *', // Restart at 6 AM and 6 PM
      log_file: './logs/intelligent-dependency-manager.log',
      error_file: './logs/intelligent-dependency-manager-error.log',
      out_file: './logs/intelligent-dependency-manager-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Smart Deployment Automation - Intelligent deployment management
    {
      name: 'smart-deployment-automation',
      script: './scripts/automation/smart-deployment-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        DEPLOYMENT_AUTOMATION_MODE: 'true',
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      log_file: './logs/smart-deployment-automation.log',
      error_file: './logs/smart-deployment-automation-error.log',
      out_file: './logs/smart-deployment-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Enhanced CI/CD Automation - Comprehensive CI/CD pipeline
    {
      name: 'enhanced-ci-cd-automation',
      script: './scripts/automation/enhanced-ci-cd-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        CI_CD_MODE: 'true',
      },
      cron_restart: '0 */3 * * *', // Restart every 3 hours
      log_file: './logs/enhanced-ci-cd-automation.log',
      error_file: './logs/enhanced-ci-cd-automation-error.log',
      out_file: './logs/enhanced-ci-cd-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Enhanced Security Automation - Advanced security monitoring
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
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: './logs/enhanced-security-automation.log',
      error_file: './logs/enhanced-security-automation-error.log',
      out_file: './logs/enhanced-security-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Enhanced Testing Automation - Intelligent testing and quality assurance
    {
      name: 'enhanced-testing-automation',
      script: './scripts/automation/enhanced-testing-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        TESTING_MODE: 'true',
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      log_file: './logs/enhanced-testing-automation.log',
      error_file: './logs/enhanced-testing-automation-error.log',
      out_file: './logs/enhanced-testing-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Project Health Monitor - Comprehensive project health monitoring
    {
      name: 'project-health-monitor',
      script: './scripts/automation/project-health-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        HEALTH_MONITORING_MODE: 'true',
      },
      cron_restart: '0 */1 * * *', // Restart every hour
      log_file: './logs/project-health-monitor.log',
      error_file: './logs/project-health-monitor-error.log',
      out_file: './logs/project-health-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // PM2 Sync Automation - Core synchronization system
    {
      name: 'pm2-sync-automation',
      script: './scripts/automation/pm2-sync-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        SYNC_MODE: 'true',
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: './logs/pm2-sync-automation.log',
      error_file: './logs/pm2-sync-automation-error.log',
      out_file: './logs/pm2-sync-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // PM2 Sync Monitor - Monitoring and alerting system
    {
      name: 'pm2-sync-monitor',
      script: './scripts/automation/pm2-sync-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        MONITORING_MODE: 'true',
      },
      cron_restart: '0 */1 * * *', // Restart every hour
      log_file: './logs/pm2-sync-monitor.log',
      error_file: './logs/pm2-sync-monitor-error.log',
      out_file: './logs/pm2-sync-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Link Checker Automation - Link integrity monitoring
    {
      name: 'link-checker-automation',
      script: './scripts/automation/link-checker-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        LINK_CHECKING_MODE: 'true',
      },
      cron_restart: '0 8,20 * * *', // Restart at 8 AM and 8 PM
      log_file: './logs/link-checker-automation.log',
      error_file: './logs/link-checker-automation-error.log',
      out_file: './logs/link-checker-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // TypeScript Syntax Fixer - Code quality automation
    {
      name: 'typescript-syntax-fixer',
      script: './scripts/automation/typescript-syntax-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        SYNTAX_FIXING_MODE: 'true',
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      log_file: './logs/typescript-syntax-fixer.log',
      error_file: './logs/typescript-syntax-fixer-error.log',
      out_file: './logs/typescript-syntax-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Console Error Fixer - Runtime error automation
    {
      name: 'console-error-fixer',
      script: './scripts/automation/console-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        ERROR_FIXING_MODE: 'true',
      },
      cron_restart: '0 */3 * * *', // Restart every 3 hours
      log_file: './logs/console-error-fixer.log',
      error_file: './logs/console-error-fixer-error.log',
      out_file: './logs/console-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Dependency Manager - Advanced dependency management
    {
      name: 'dependency-manager',
      script: './scripts/automation/dependency-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        DEPENDENCY_MANAGEMENT_MODE: 'true',
      },
      cron_restart: '0 7,19 * * *', // Restart at 7 AM and 7 PM
      log_file: './logs/dependency-manager.log',
      error_file: './logs/dependency-manager-error.log',
      out_file: './logs/dependency-manager-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Performance Monitor - Real-time performance monitoring
    {
      name: 'performance-monitor',
      script: './scripts/automation/performance-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PERFORMANCE_MONITORING_MODE: 'true',
      },
      cron_restart: '0 */1 * * *', // Restart every hour
      log_file: './logs/performance-monitor.log',
      error_file: './logs/performance-monitor-error.log',
      out_file: './logs/performance-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Front Maximizer - Frontend optimization automation
    {
      name: 'front-maximizer',
      script: './scripts/automation/front-maximizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        FRONTEND_OPTIMIZATION_MODE: 'true',
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      log_file: './logs/front-maximizer.log',
      error_file: './logs/front-maximizer-error.log',
      out_file: './logs/front-maximizer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Sitemap Runner - SEO and sitemap automation
    {
      name: 'sitemap-runner',
      script: './scripts/automation/sitemap-runner.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        SITEMAP_MODE: 'true',
      },
      cron_restart: '0 5,17 * * *', // Restart at 5 AM and 5 PM
      log_file: './logs/sitemap-runner.log',
      error_file: './logs/sitemap-runner-error.log',
      out_file: './logs/sitemap-runner-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Quality Checks - Code quality automation
    {
      name: 'quality-checks',
      script: './scripts/automation/quality-checks.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        QUALITY_CHECK_MODE: 'true',
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: './logs/quality-checks.log',
      error_file: './logs/quality-checks-error.log',
      out_file: './logs/quality-checks-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Security Audit - Security scanning automation
    {
      name: 'security-audit',
      script: './scripts/automation/security-audit.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        SECURITY_AUDIT_MODE: 'true',
      },
      cron_restart: '0 3,15 * * *', // Restart at 3 AM and 3 PM
      log_file: './logs/security-audit.log',
      error_file: './logs/security-audit-error.log',
      out_file: './logs/security-audit-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Continuous Improvement - Continuous optimization automation
    {
      name: 'continuous-improvement',
      script: './scripts/automation/continuous-improvement.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        CONTINUOUS_IMPROVEMENT_MODE: 'true',
      },
      cron_restart: '0 */8 * * *', // Restart every 8 hours
      log_file: './logs/continuous-improvement.log',
      error_file: './logs/continuous-improvement-error.log',
      out_file: './logs/continuous-improvement-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },

    // Daily Build Test - Automated build testing
    {
      name: 'daily-build-test',
      script: './scripts/automation/daily-build-test.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        BUILD_TEST_MODE: 'true',
      },
      cron_restart: '0 2 * * *', // Restart daily at 2 AM
      log_file: './logs/daily-build-test.log',
      error_file: './logs/daily-build-test-error.log',
      out_file: './logs/daily-build-test-out.log',
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
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && npm run build && pm2 reload ecosystem.enhanced.cjs --env production',
      'pre-setup': '',
    },
    staging: {
      user: 'miami2',
      host: 'localhost',
      ref: 'origin/staging',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/Users/miami2/zion-app-staging',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && npm run build && pm2 reload ecosystem.enhanced.cjs --env staging',
      'pre-setup': '',
    },
    development: {
      user: 'miami2',
      host: 'localhost',
      ref: 'origin/develop',
      repo: 'https://github.com/Zion-Holdings/zion.app.git',
      path: '/Users/miami2/zion-app-dev',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && npm run build && pm2 reload ecosystem.enhanced.cjs --env development',
      'pre-setup': '',
    },
  },
};
