module.exports = {
  apps: [
    // Core Development Automations
    {
      name: 'console-error-fixer',
      script: './scripts/automation/intelligent-error-fixer.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 900000, // 15 minutes
        MAX_MEMORY: 512,
        ERROR_THRESHOLD: 10,
        AUTO_FIX_ENABLED: true
      },
      max_memory_restart: '512M',
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 5000,
      watch: false,
      ignore_watch: ['node_modules', 'logs', '*.log'],
      log_file: './logs/console-error-fixer.log',
      out_file: './logs/console-error-fixer-out.log',
      error_file: './logs/console-error-fixer-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      time: true
    },
    {
      name: 'intelligent-link-validator',
      script: './scripts/automation/intelligent-link-validator.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 1800000, // 30 minutes
        MAX_MEMORY: 256,
        CRAWL_DEPTH: 3,
        EXTERNAL_LINK_CHECK: true,
        BROKEN_LINK_AUTO_FIX: true
      },
      max_memory_restart: '256M',
      min_uptime: '10s',
      max_restarts: 5,
      restart_delay: 3000,
      watch: false,
      log_file: './logs/link-validator.log',
      out_file: './logs/link-validator-out.log',
      error_file: './logs/link-validator-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      time: true
    },
    {
      name: 'ai-code-optimizer',
      script: './scripts/automation/ai-code-optimizer.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 3600000, // 1 hour
        MAX_MEMORY: 512,
        AI_ANALYSIS_ENABLED: true,
        OPTIMIZATION_LEVEL: 'aggressive',
        AUTO_REFACTOR_ENABLED: true
      },
      max_memory_restart: '512M',
      min_uptime: '10s',
      max_restarts: 8,
      restart_delay: 5000,
      watch: false,
      log_file: './logs/ai-code-optimizer.log',
      out_file: './logs/ai-code-optimizer-out.log',
      error_file: './logs/ai-code-optimizer-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      time: true
    },
    {
      name: 'performance-intelligence',
      script: './scripts/automation/performance-intelligence.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 1200000, // 20 minutes
        MAX_MEMORY: 384,
        PERFORMANCE_THRESHOLD: 0.8,
        AUTO_OPTIMIZATION: true,
        METRICS_COLLECTION: true
      },
      max_memory_restart: '384M',
      min_uptime: '10s',
      max_restarts: 6,
      restart_delay: 4000,
      watch: false,
      log_file: './logs/performance-intelligence.log',
      out_file: './logs/performance-intelligence-out.log',
      error_file: './logs/performance-intelligence-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      time: true
    },
    {
      name: 'security-intelligence',
      script: './scripts/automation/security-intelligence.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 900000, // 15 minutes
        MAX_MEMORY: 384,
        VULNERABILITY_SCAN: true,
        DEPENDENCY_AUDIT: true,
        AUTO_PATCH_ENABLED: true,
        SECURITY_ALERTS: true
      },
      max_memory_restart: '384M',
      min_uptime: '10s',
      max_restarts: 7,
      restart_delay: 4000,
      watch: false,
      log_file: './logs/security-intelligence.log',
      out_file: './logs/security-intelligence-out.log',
      error_file: './logs/security-intelligence-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      time: true
    },
    {
      name: 'continuous-improvement-engine',
      script: './scripts/automation/continuous-improvement-engine.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 2700000, // 45 minutes
        MAX_MEMORY: 512,
        IMPROVEMENT_ANALYSIS: true,
        AUTO_REFACTOR: true,
        CODE_QUALITY_MONITORING: true,
        BEST_PRACTICES_ENFORCEMENT: true
      },
      max_memory_restart: '512M',
      min_uptime: '10s',
      max_restarts: 9,
      restart_delay: 5000,
      watch: false,
      log_file: './logs/continuous-improvement.log',
      out_file: './logs/continuous-improvement-out.log',
      error_file: './logs/continuous-improvement-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      time: true
    },
    {
      name: 'dependency-intelligence',
      script: './scripts/automation/dependency-intelligence.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 3600000, // 1 hour
        MAX_MEMORY: 256,
        AUTO_UPDATE_ENABLED: true,
        BREAKING_CHANGE_ANALYSIS: true,
        DEPENDENCY_HEALTH_MONITORING: true,
        UPDATE_STRATEGY: 'smart'
      },
      max_memory_restart: '256M',
      min_uptime: '10s',
      max_restarts: 5,
      restart_delay: 3000,
      watch: false,
      log_file: './logs/dependency-intelligence.log',
      out_file: './logs/dependency-intelligence-out.log',
      error_file: './logs/dependency-intelligence-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      time: true
    },
    {
      name: 'quality-intelligence',
      script: './scripts/automation/quality-intelligence.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 1800000, // 30 minutes
        MAX_MEMORY: 384,
        CODE_QUALITY_SCAN: true,
        TEST_COVERAGE_ANALYSIS: true,
        AUTO_TEST_GENERATION: true,
        QUALITY_METRICS_TRACKING: true
      },
      max_memory_restart: '384M',
      min_uptime: '10s',
      max_restarts: 6,
      restart_delay: 4000,
      watch: false,
      log_file: './logs/quality-intelligence.log',
      out_file: './logs/quality-intelligence-out.log',
      error_file: './logs/quality-intelligence-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      time: true
    },
    {
      name: 'seo-intelligence',
      script: './scripts/automation/seo-intelligence.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 3600000, // 1 hour
        MAX_MEMORY: 256,
        SEO_ANALYSIS: true,
        META_TAG_OPTIMIZATION: true,
        CONTENT_QUALITY_SCAN: true,
        AUTO_SEO_IMPROVEMENT: true
      },
      max_memory_restart: '256M',
      min_uptime: '10s',
      max_restarts: 5,
      restart_delay: 3000,
      watch: false,
      log_file: './logs/seo-intelligence.log',
      out_file: './logs/seo-intelligence-out.log',
      error_file: './logs/seo-intelligence-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      time: true
    },
    {
      name: 'build-intelligence',
      script: './scripts/automation/build-intelligence.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 7200000, // 2 hours
        MAX_MEMORY: 512,
        BUILD_OPTIMIZATION: true,
        BUNDLE_ANALYSIS: true,
        AUTO_BUILD_TUNING: true,
        BUILD_PERFORMANCE_MONITORING: true
      },
      max_memory_restart: '512M',
      min_uptime: '10s',
      max_restarts: 8,
      restart_delay: 5000,
      watch: false,
      log_file: './logs/build-intelligence.log',
      out_file: './logs/build-intelligence-out.log',
      error_file: './logs/build-intelligence-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      time: true
    },
    {
      name: 'orchestration-master',
      script: './scripts/automation/orchestration-master.cjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        AUTOMATION_INTERVAL: 60000, // 1 minute
        MAX_MEMORY: 256,
        ORCHESTRATION_ENABLED: true,
        PROCESS_COORDINATION: true,
        RESOURCE_OPTIMIZATION: true,
        INTELLIGENT_SCHEDULING: true
      },
      max_memory_restart: '256M',
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 2000,
      watch: false,
      log_file: './logs/orchestration-master.log',
      out_file: './logs/orchestration-master-out.log',
      error_file: './logs/orchestration-master-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      time: true
    }
  ],

  // PM2 Configuration
  deploy: {
    production: {
      user: 'node',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:Zion-Holdings/zion.app.git',
      path: '/var/www/zion.app',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.cjs --env production',
      'pre-setup': ''
    }
  },

  // Global PM2 Settings
  min_uptime: '10s',
  max_restarts: 10,
  restart_delay: 3000,
  max_memory_restart: '1G',
  node_args: '--max-old-space-size=4096',
  instances: 1,
  exec_mode: 'fork',
  watch: false,
  ignore_watch: ['node_modules', 'logs', '*.log', '.git'],
  log_file: './logs/pm2.log',
  out_file: './logs/pm2-out.log',
  error_file: './logs/pm2-error.log',
  log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
  merge_logs: true,
  time: true,
  source_map_support: true,
  disable_source_map_support: false,
  increment_var: 'PORT',
  instance_var: 'INSTANCE_ID',
  pid_file: './logs/pm2.pid',
  kill_timeout: 5000,
  shutdown_with_message: false,
  wait_ready: false
};