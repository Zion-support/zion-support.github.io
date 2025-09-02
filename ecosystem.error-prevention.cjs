module.exports = {
  apps: [
    // Error Prevention Monitor - Continuously monitors for issues
    {
      name: 'error-prevention-monitor',
      script: 'scripts/error-prevention-automation.cjs',
      args: 'full',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'error-prevention-monitor',
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: 'logs/error-prevention-monitor.log',
      out_file: 'logs/error-prevention-monitor-out.log',
      error_file: 'logs/error-prevention-monitor-error.log',
    },

    // Dependency Health Monitor - Monitors and fixes dependency issues
    {
      name: 'dependency-health-monitor',
      script: 'scripts/error-prevention-automation.cjs',
      args: 'deps',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'dependency-health-monitor',
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      log_file: 'logs/dependency-health-monitor.log',
      out_file: 'logs/dependency-health-monitor-out.log',
      error_file: 'logs/dependency-health-monitor-error.log',
    },

    // Code Quality Guardian - Ensures code quality standards
    {
      name: 'code-quality-guardian',
      script: 'scripts/error-prevention-automation.cjs',
      args: 'quality',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'code-quality-guardian',
      },
      cron_restart: '0 */3 * * *', // Restart every 3 hours
      log_file: 'logs/code-quality-guardian.log',
      out_file: 'logs/code-quality-guardian-out.log',
      error_file: 'logs/code-quality-guardian-error.log',
    },

    // Build Health Monitor - Monitors build health
    {
      name: 'build-health-monitor',
      script: 'scripts/error-prevention-automation.cjs',
      args: 'build',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'build-health-monitor',
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      log_file: 'logs/build-health-monitor.log',
      out_file: 'logs/build-health-monitor-out.log',
      error_file: 'logs/build-health-monitor-error.log',
    },

    // Test Suite Monitor - Ensures tests are passing
    {
      name: 'test-suite-monitor',
      script: 'scripts/error-prevention-automation.cjs',
      args: 'tests',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'test-suite-monitor',
      },
      cron_restart: '0 */8 * * *', // Restart every 8 hours
      log_file: 'logs/test-suite-monitor.log',
      out_file: 'logs/test-suite-monitor-out.log',
      error_file: 'logs/test-suite-monitor-error.log',
    },

    // Merge Conflict Resolver - Automatically resolves merge conflicts
    {
      name: 'merge-conflict-resolver',
      script: 'scripts/error-prevention-automation.cjs',
      args: 'conflicts',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'merge-conflict-resolver',
      },
      cron_restart: '0 */1 * * *', // Restart every hour
      log_file: 'logs/merge-conflict-resolver.log',
      out_file: 'logs/merge-conflict-resolver-out.log',
      error_file: 'logs/merge-conflict-resolver-error.log',
    },

    // Comprehensive Error Fixer - Fixes syntax and code quality issues
    {
      name: 'comprehensive-error-fixer',
      script: 'scripts/comprehensive-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'comprehensive-error-fixer'
      },
      cron_restart: '0 */2 * * *', // Restart every 2 hours
      log_file: 'logs/comprehensive-error-fixer.log',
      out_file: 'logs/comprehensive-error-fixer-out.log',
      error_file: 'logs/comprehensive-error-fixer-error.log'
    },

    // Advanced Syntax Fixer - Fixes complex syntax issues
    {
      name: 'advanced-syntax-fixer',
      script: 'scripts/advanced-syntax-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'advanced-syntax-fixer'
      },
      cron_restart: '0 */3 * * *', // Restart every 3 hours
      log_file: 'logs/advanced-syntax-fixer.log',
      out_file: 'logs/advanced-syntax-fixer-out.log',
      error_file: 'logs/advanced-syntax-fixer-error.log'
    },

    // Final Syntax Fixer - Fixes remaining syntax issues
    {
      name: 'final-syntax-fixer',
      script: 'scripts/final-syntax-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'final-syntax-fixer'
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      log_file: 'logs/final-syntax-fixer.log',
      out_file: 'logs/final-syntax-fixer-out.log',
      error_file: 'logs/final-syntax-fixer-error.log'
    },

    // Security Vulnerability Scanner - Continuously scans for security issues
    {
      name: 'security-vulnerability-scanner',
      script: 'scripts/automation-wrapper.js',
      args: 'security',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'security-vulnerability-scanner',
      },
      cron_restart: '0 */12 * * *', // Restart every 12 hours
      log_file: 'logs/security-vulnerability-scanner.log',
      out_file: 'logs/security-vulnerability-scanner-out.log',
      error_file: 'logs/security-vulnerability-scanner-error.log',
    },

    // Performance Monitor - Monitors application performance
    {
      name: 'performance-monitor',
      script: 'scripts/automation-wrapper.js',
      args: 'performance',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'performance-monitor',
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      log_file: 'logs/performance-monitor.log',
      out_file: 'logs/performance-monitor-out.log',
      error_file: 'logs/performance-monitor-error.log',
    },

    // Link Integrity Checker - Ensures all links are working
    {
      name: 'link-integrity-checker',
      script: 'scripts/automation-wrapper.js',
      args: 'integrity',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'link-integrity-checker',
      },
      cron_restart: '0 2 * * *', // Restart daily at 2 AM
      log_file: 'logs/links-integrity-checker.log',
      out_file: 'logs/links-integrity-checker-out.log',
      error_file: 'logs/links-integrity-checker-error.log',
    },

    // Sitemap Generator - Keeps sitemap updated
    {
      name: 'sitemap-generator',
      script: 'scripts/automation-wrapper.js',
      args: 'sitemap',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'sitemap-generator',
      },
      cron_restart: '0 6 * * *', // Restart daily at 6 AM
      log_file: 'logs/sitemap-generator.log',
      out_file: 'logs/sitemap-generator-out.log',
      error_file: 'logs/sitemap-generator-error.log',
    },
  ],

  deploy: {
    production: {
      user: 'node',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:username/repo.git',
      path: '/var/www/production',
      'post-deploy':
        'npm install && pm2 reload ecosystem.error-prevention.cjs --env production',
    },
  },
};
