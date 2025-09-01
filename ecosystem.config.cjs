module.exports = {
  apps: [
    // Safe Vite preview to serve built app
    {
      name: 'zion-vite-preview',
      script: 'npm',
      args: 'run preview',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      },
      log_file: 'logs/vite-preview.log',
      out_file: 'logs/vite-preview-out.log',
      error_file: 'logs/vite-preview-error.log'
    },

    // Link Checker - Checks for broken links
    {
      name: 'link-checker',
      script: 'scripts/automation-wrapper.js',
      args: 'check-links',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'link-checker'
      },
      cron_restart: '0 2 * * 1', // Restart every Monday at 2 AM
      log_file: 'logs/link-checker.log',
      out_file: 'logs/link-checker-out.log',
      error_file: 'logs/link-checker-error.log'
    },

    // Continuous Improvement - Runs code quality checks
    {
      name: 'continuous-improvement',
      script: 'scripts/automation-wrapper.js',
      args: 'improve',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'continuous-improvement'
      },
      cron_restart: '0 2 * * 1', // Restart every Monday at 2 AM
      log_file: 'logs/continuous-improvement.log',
      out_file: 'logs/continuous-improvement-out.log',
      error_file: 'logs/continuous-improvement-error.log'
    },

    // CI maintenance: periodic build to surface regressions
    {
      name: 'maintenance-build',
      script: 'bash',
      args: '-lc "npm run build"',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '512M',
      cron_restart: '0 3 * * *',
      log_file: 'logs/maintenance-build.log',
      out_file: 'logs/maintenance-build-out.log',
      error_file: 'logs/maintenance-build-error.log'
    },

    // Security Audit - Runs security checks
    {
      name: 'security-audit',
      script: 'scripts/automation-wrapper.js',
      args: 'security',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'security-audit'
      },
      cron_restart: '0 4 * * 1', // Restart every Monday at 4 AM
      log_file: 'logs/security-audit.log',
      out_file: 'logs/security-audit-out.log',
      error_file: 'logs/security-audit-error.log'
    },

    // Dependency Updates - Checks and updates dependencies
    {
      name: 'dependency-updates',
      script: 'scripts/automation-wrapper.js',
      args: 'deps',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'dependency-updates'
      },
      cron_restart: '0 2 * * 1', // Restart every Monday at 2 AM
      log_file: 'logs/dependency-updates.log',
      out_file: 'logs/dependency-updates-out.log',
      error_file: 'logs/dependency-updates-error.log'
    },

    // Lint/type-check automation (non-blocking)
    {
      name: 'maintenance-lint-typecheck',
      script: 'bash',
      args: '-lc "npm run lint || true; npm run type-check || true"',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '256M',
      cron_restart: '0 */6 * * *',
      log_file: 'logs/maintenance-lint-typecheck.log',
      out_file: 'logs/maintenance-lint-typecheck-out.log',
      error_file: 'logs/maintenance-lint-typecheck-error.log'
    },

    // Quality Checks - Runs quality assurance checks
    {
      name: 'quality-checks',
      script: 'scripts/automation-wrapper.js',
      args: 'quality',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'quality-checks'
      },
      cron_restart: '0 5 * * *', // Restart daily at 5 AM
      log_file: 'logs/quality-checks.log',
      out_file: 'logs/quality-checks-out.log',
      error_file: 'logs/quality-checks-error.log'
    },

    // Link Integrity - Ensures link integrity
    {
      name: 'link-integrity',
      script: 'scripts/automation-wrapper.js',
      args: 'integrity',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'link-integrity'
      },
      cron_restart: '0 6 * * *', // Restart daily at 6 AM
      log_file: 'logs/link-integrity.log',
      out_file: 'logs/link-integrity-out.log',
      error_file: 'logs/link-integrity-error.log'
    },

    // Front Maximizer - Optimizes frontend performance
    {
      name: 'front-maximizer',
      script: 'scripts/automation-wrapper.js',
      args: 'maximize',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'front-maximizer'
      },
      cron_restart: '0 7 * * *', // Restart daily at 7 AM
      log_file: 'logs/front-maximizer.log',
      out_file: 'logs/front-maximizer-out.log',
      error_file: 'logs/front-maximizer-error.log'
    },

    // Sitemap Runner - Generates and updates sitemap
    {
      name: 'sitemap-runner',
      script: 'scripts/automation-wrapper.js',
      args: 'sitemap',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PM2_PROCESS: 'sitemap-runner'
      },
      cron_restart: '0 8 * * *', // Restart daily at 8 AM
      log_file: 'logs/sitemap-runner.log',
      out_file: 'logs/sitemap-runner-out.log',
      error_file: 'logs/sitemap-runner-error.log'
    }
  ],

  deploy: {
    production: {
      user: 'node',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:username/repo.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.cjs --env production'
    }
  }
};