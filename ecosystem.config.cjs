<<<<<<< HEAD
<<<<<<< HEAD
module.exports = {
  apps: [
    {
<<<<<<< HEAD:backup-problematic-files/ecosystem.config.cjs

      name: 'continuous-automation',
      script: 'node',
      args: 'scripts/automation/automation-orchestrator.cjs',
      cwd: '/workspace',

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
      script: 'npm',
      args: 'run build',

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD

<<<<<<< HEAD


<<<<<<< HEAD
main

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      name: 'auto-fix',
      script: 'scripts/pm2/auto-fix.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {,
  NODE_ENV: 'production
      },
      log_file: 'logs/pm2/auto-fix.log',
      error_file: 'logs/pm2/auto-fix-error.log',
      out_file: 'logs/pm2/auto-fix-out.log',
    {
      name: 'healthcheck',
      script: 'scripts/pm2/healthcheck.js',
      max_memory_restart: '128M',
      log_file: 'logs/pm2/health.log',
      error_file: 'logs/pm2/health-error.log',
      out_file: 'logs/pm2/health-out.log',
      name: 'code-quality-monitor',
      script: 'scripts/pm2/code-quality-monitor.js',
<<<<<<< HEAD
<<<<<<< HEAD
      name: 'bolt-zion-app',
      name: 'ci-cd-pipeline',
      name: 'ci-cd-pipeline',





      name: 'bolt-zion-app',
=======









      name: 'bolt-zion-app',

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
module.exports = {
  apps: [
    {
      name: 'ci-cd-pipeline',

<<<<<<< HEAD
      name: 'bolt-zion-app',
      name: 'ci-cd-pipeline',
      name: 'ci-cd-pipeline',

main
=======

      name: 'bolt-zion-app',
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

      script: 'npm',
      args: 'run build',
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:ecosystem.config.cjs
=======

      script: 'npm',
      args: 'run build',
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      cwd: '/workspace',
      max_memory_restart: '1G',
<<<<<<< HEAD
      env: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/ecosystem.config.cjs

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:ecosystem.config.cjs
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD



<<<<<<< HEAD
main

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'code-quality-monitor',
        QUALITY_THRESHOLD: '80',
        AUTO_FIX_CRITICAL: 'true',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        NODE_ENV: 'production'
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        NODE_ENV: 'production'

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
      },
      log_file: 'logs/pm2/code-quality-monitor.log',
      error_file: 'logs/pm2/code-quality-monitor-error.log',
      out_file: 'logs/pm2/code-quality-monitor-out.log',
    },
    {
      name: 'auto-commit-fixes',
      script: 'scripts/pm2/auto-commit-fixes.js',
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/ecosystem.config.cjs
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:ecosystem.config.cjs
=======
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        NODE_ENV: 'production',
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======

        NODE_ENV: 'production'

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      },
      cron_restart: '0 0 * * *', // Daily restart
      error_file: './logs/ci-cd-error.log',
      out_file: './logs/ci-cd-out.log',
      log_file: './logs/ci-cd-combined.log',
<<<<<<< HEAD
      time: true,    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
      name: 'auto-commit-fixes',
      script: 'scripts/pm2/auto-commit-fixes.js',
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
=======
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======



=======

      },
      cron_restart: '0 0 * * *', // Daily restart
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      error_file: './logs/ci-cd-error.log',
      out_file: './logs/ci-cd-out.log',
      log_file: './logs/ci-cd-combined.log',
      time: true,    },
<<<<<<< HEAD
    {
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
        NODE_ENV: 'production',
      log_file: 'logs/pm2/preview.log',
      error_file: 'logs/pm2/preview-error.log',
      out_file: 'logs/pm2/preview-out.log',
<<<<<<< HEAD
    },
    {
      name: 'auto-fix',
<<<<<<< HEAD
      name: 'continuous-automation',

      name: 'continuous-automation',
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

      script: 'node',
      args: 'scripts/automation/automation-orchestrator.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {

<<<<<<< HEAD


=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'auto-commit-fixes',
        COMMIT_FREQUENCY: 'hourly',
        AUTO_PUSH: 'false',
<<<<<<< HEAD
        NODE_ENV: 'production'
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      error_file: './logs/automation-error.log',
      out_file: './logs/automation-out.log',
      log_file: './logs/automation-combined.log',
      time: true,
    },
    {

        NODE_ENV: 'production',
      },
      log_file: 'logs/pm2/preview.log',
      error_file: 'logs/pm2/preview-error.log',
      out_file: 'logs/pm2/preview-out.log',
    },
    {
      name: 'auto-fix',

      script: 'node',
      args: 'scripts/automation/automation-orchestrator.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {

        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'auto-commit-fixes',
        COMMIT_FREQUENCY: 'hourly',
        AUTO_PUSH: 'false',

      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      error_file: './logs/automation-error.log',
      out_file: './logs/automation-out.log',
      log_file: './logs/automation-combined.log',
      time: true
    },
    {

        PM2_PROCESS_NAME: 'code-quality-monitor',
        QUALITY_THRESHOLD: '80',
        AUTO_FIX_CRITICAL: 'true',
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      log_file: 'logs/pm2/code-quality-monitor.log',
      error_file: 'logs/pm2/code-quality-monitor-error.log',
      out_file: 'logs/pm2/code-quality-monitor-out.log',
<<<<<<< HEAD
        NODE_ENV: 'production',

      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      error_file: './logs/automation-error.log',
      out_file: './logs/automation-out.log',
      log_file: './logs/automation-combined.log',
      time: true,
    },
    {
      name: 'comprehensive-automation',
      script: 'node',
      args: 'scripts/automation/comprehensive-continuous-automation.cjs',
      cwd: '/workspace',
<<<<<<< HEAD
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      env: {
<<<<<<< HEAD:backup-problematic-files/ecosystem.config.cjs

=======
        NODE_ENV: 'production',
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      error_file: './logs/comprehensive-automation-error.log',
      out_file: './logs/comprehensive-automation-out.log',
      log_file: './logs/comprehensive-automation-combined.log',
      time: true,
=======
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    },
    {
      name: 'auto-commit-fixes',
      script: 'scripts/pm2/auto-commit-fixes.js',

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:ecosystem.config.cjs
        NODE_ENV: 'production',      },
=======

};

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      cron_restart: '0 */6 * * *', // Every 6 hours
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      error_file: './logs/comprehensive-automation-error.log',
      out_file: './logs/comprehensive-automation-out.log',
      log_file: './logs/comprehensive-automation-combined.log',

      name: 'marketing-automation',
      args: 'scripts/linkedin_automation.js',

      name: 'test-runner',
      args: 'test',

      name: 'lint-checker',
      args: 'run lint',
<<<<<<< HEAD
      cwd: '/workspace',
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/ecosystem.config.cjs

=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
=======
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:ecosystem.config.cjs
=======
=======
      time: true
    },
    {
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD



<<<<<<< HEAD
main
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======






>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        NODE_ENV: 'production',
      },
      log_file: 'logs/pm2/preview.log',
      error_file: 'logs/pm2/preview-error.log',
      out_file: 'logs/pm2/preview-out.log',
    },
    {
      name: 'auto-fix',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/ecosystem.config.cjs
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:ecosystem.config.cjs
      script: 'node',
      args: 'scripts/pm2/auto-fix.cjs',
      cron_restart: '0 */6 * * *',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: { NODE_ENV: 'production' },
      log_file: 'logs/pm2/auto-fix.log',
      error_file: 'logs/pm2/auto-fix-error.log',
      out_file: 'logs/pm2/auto-fix-out.log',
    },
    {
      name: 'healthcheck',
      script: 'node',
      args: 'scripts/pm2/healthcheck.cjs',
      cron_restart: '*/5 * * * *',
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: { NODE_ENV: 'production' },
      log_file: 'logs/pm2/health.log',
      error_file: 'logs/pm2/health-error.log',
      out_file: 'logs/pm2/health-out.log',
    },
    {
      name: 'code-quality-monitor',
      script: 'scripts/pm2/code-quality-monitor.cjs',
<<<<<<< HEAD:backup-problematic-files/ecosystem.config.cjs
=======
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
      name: 'continuous-automation',
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

      script: 'node',
      args: 'scripts/automation/automation-orchestrator.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {


<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'auto-commit-fixes',
        COMMIT_FREQUENCY: 'hourly',
        AUTO_PUSH: 'false',
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        NODE_ENV: 'production'

      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      error_file: './logs/automation-error.log',
      out_file: './logs/automation-out.log',
      log_file: './logs/automation-combined.log',
      time: true
    },
    {
<<<<<<< HEAD
        NODE_ENV: 'development',



        NODE_ENV: 'development',

=======






        NODE_ENV: 'development',

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        PM2_PROCESS_NAME: 'code-quality-monitor',
        QUALITY_THRESHOLD: '80',
        AUTO_FIX_CRITICAL: 'true',
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      log_file: 'logs/pm2/code-quality-monitor.log',
      error_file: 'logs/pm2/code-quality-monitor-error.log',
      out_file: 'logs/pm2/code-quality-monitor-out.log',




<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    },
    {
      name: 'auto-commit-fixes',
      script: 'scripts/pm2/auto-commit-fixes.js',
      name: 'comprehensive-automation',
      script: 'node',
      args: 'scripts/automation/comprehensive-continuous-automation.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      error_file: './logs/comprehensive-automation-error.log',
      out_file: './logs/comprehensive-automation-out.log',
      log_file: './logs/comprehensive-automation-combined.log',
      time: true,
    },
    {
        NODE_ENV: 'production',      },
      cron_restart: '0 */6 * * *', // Every 6 hours
      error_file: './logs/automation-error.log',
      out_file: './logs/automation-out.log',
      log_file: './logs/automation-combined.log',
      time: true,    },
    {
      name: 'comprehensive-automation',
      script: 'node',
      args: 'scripts/automation/comprehensive-continuous-automation.cjs',
      cwd: '/workspace',

      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
<<<<<<< HEAD
=======
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'performance-monitor',
        PERFORMANCE_THRESHOLD: '3000',
        BUNDLE_SIZE_LIMIT: '2MB',
      },
      cron_restart: '0 */8 * * *', // Restart every 8 hours
      log_file: 'logs/pm2/performance-monitor.log',
      error_file: 'logs/pm2/performance-monitor-error.log',
      out_file: 'logs/pm2/performance-monitor-out.log',
    },
    // NEW: Intelligent Test Automation
    {
      name: 'test-automation',
      script: 'scripts/pm2/test-automation.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'test-automation',
        TEST_COVERAGE_THRESHOLD: '80',
        AUTO_RETRY_FAILED: 'true',
        PARALLEL_TESTS: 'true',
      },
      cron_restart: '0 */3 * * *', // Restart every 3 hours
      log_file: 'logs/pm2/test-automation.log',
      error_file: 'logs/pm2/test-automation-error.log',
      out_file: 'logs/pm2/test-automation-out.log',
    },
    // NEW: Security Scanner
    {
      name: 'security-scanner',
      script: 'scripts/pm2/security-scanner.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'security-scanner',
        SCAN_DEPENDENCIES: 'true',
        SCAN_CODE: 'true',
        SCAN_CONFIGS: 'true',
        ALERT_ON_CRITICAL: 'true',
      },
      cron_restart: '0 */12 * * *', // Restart every 12 hours
      log_file: 'logs/pm2/security-scanner.log',
      error_file: 'logs/pm2/security-scanner-error.log',
      out_file: 'logs/pm2/security-scanner-out.log',
    },
    // NEW: Build Optimization Monitor
    {
      name: 'build-optimizer',
      script: 'scripts/pm2/build-optimizer.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'build-optimizer',
        OPTIMIZE_BUNDLES: 'true',
        TREE_SHAKING: 'true',
        CODE_SPLITTING: 'true',
        MINIFICATION: 'true',
      },
      cron_restart: '0 0 * * *', // Restart daily at midnight
      log_file: 'logs/pm2/build-optimizer.log',
      error_file: 'logs/pm2/build-optimizer-error.log',
      out_file: 'logs/pm2/build-optimizer-out.log',
    },
    // NEW: Git Workflow Automation
    {
      name: 'git-workflow',
      script: 'scripts/pm2/git-workflow.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'git-workflow',
        AUTO_BRANCH_CLEANUP: 'true',
        AUTO_MERGE_SAFE: 'true',
        CONFLICT_RESOLUTION: 'true',
        BRANCH_STRATEGY: 'gitflow',
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      log_file: 'logs/pm2/git-workflow.log',
      error_file: 'logs/pm2/git-workflow-error.log',
      out_file: 'logs/pm2/git-workflow-out.log',
    },
    // NEW: Environment Health Monitor
    {
      name: 'health-monitor',
      script: 'scripts/pm2/health-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'health-monitor',
        MONITOR_SYSTEM: 'true',
        MONITOR_PROCESSES: 'true',
        MONITOR_RESOURCES: 'true',
        ALERT_THRESHOLD: '80',
      },
      cron_restart: '0 */1 * * *', // Restart every hour
      log_file: 'logs/pm2/health-monitor.log',
      error_file: 'logs/pm2/health-monitor-error.log',
      out_file: 'logs/pm2/health-monitor-out.log',
    },
    // NEW: Documentation Generator
    {
      name: 'docs-generator',
      script: 'scripts/pm2/docs-generator.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'docs-generator',
        AUTO_GENERATE: 'true',
        UPDATE_README: 'true',
        API_DOCS: 'true',
        COMPONENT_DOCS: 'true',
      },
      cron_restart: '0 2 * * *', // Restart daily at 2 AM
      log_file: 'logs/pm2/docs-generator.log',
      error_file: 'logs/pm2/docs-generator-error.log',
      out_file: 'logs/pm2/docs-generator-out.log',
    },
    // NEW: SEO and Accessibility Monitor
    {
      name: 'seo-accessibility',
      script: 'scripts/pm2/seo-accessibility.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'seo-accessibility',
        CHECK_SEO: 'true',
        CHECK_ACCESSIBILITY: 'true',
        CHECK_PERFORMANCE: 'true',
        LIGHTHOUSE_AUDIT: 'true',
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      log_file: 'logs/pm2/seo-accessibility.log',
      error_file: 'logs/pm2/seo-accessibility-error.log',
      out_file: 'logs/pm2/seo-accessibility-out.log',
    },
  ],
};

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
module.exports = {}
  "apps": [{}]
      name: 'ziontechgroup-web',
      "script": 'npm',
      "args": 'run start',
      "cwd": './',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'production'},
      "log_file": 'logs/pm2/preview.log',
      "error_file": 'logs/pm2/preview-error.log',
      "out_file": 'logs/pm2/preview-out.log'},
    {}
      "name": 'ci-cd-automation',
      "script": 'scripts/pm2/ci-cd-automation.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {}
        NODE_ENV: 'production'
      },
      "cron_restart": '0 */1 * * *', // Every hour;
      "log_file": 'logs/pm2/ci-cd-automation.log',
      "error_file": 'logs/pm2/ci-cd-automation-error.log',
      "out_file": 'logs/pm2/ci-cd-automation-out.log'},
    {}
      "name": 'continuous-improvement',
      "script": 'scripts/pm2/continuous-improvement.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {}
        NODE_ENV: 'production'
      },
      "cron_restart": '0 */2 * * *', // Every 2 hours;
      "log_file": 'logs/pm2/continuous-improvement.log',
      "error_file": 'logs/pm2/continuous-improvement-error.log',
      "out_file": 'logs/pm2/continuous-improvement-out.log'},
    {}
      "name": 'daily-build-test',
      "script": 'scripts/pm2/daily-build-test.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'production'
      },
      "cron_restart": '0 */1 * * *', // Every hour;
      "log_file": 'logs/pm2/daily-build-test.log',
      "error_file": 'logs/pm2/daily-build-test-error.log',
      "out_file": 'logs/pm2/daily-build-test-out.log'},
    {}
      "name": 'quality-checks',
      "script": 'scripts/pm2/quality-checks.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'production'
      },
      "cron_restart": '0 */3 * * *', // Every 3 hours;
      "log_file": 'logs/pm2/quality-checks.log',
      "error_file": 'logs/pm2/quality-checks-error.log',
      "out_file": 'logs/pm2/quality-checks-out.log'},
    {}
      "name": 'security-audit',
      "script": 'scripts/pm2/security-audit.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'production'
      },
      "cron_restart": '0 */4 * * *', // Every 4 hours;
      "log_file": 'logs/pm2/security-audit.log',
      "error_file": 'logs/pm2/security-audit-error.log',
      "out_file": 'logs/pm2/security-audit-out.log'},
    {}
      "name": 'performance-monitor',
      "script": 'scripts/pm2/performance-monitor.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'production'
      },
      "cron_restart": '0 */2 * * *', // Every 2 hours;
      "log_file": 'logs/pm2/performance-monitor.log',
      "error_file": 'logs/pm2/performance-monitor-error.log',
      "out_file": 'logs/pm2/performance-monitor-out.log'},
    {}
      "name": 'link-checker',
      "script": 'scripts/pm2/link-checker.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'production'
      },
      "cron_restart": '0 */6 * * *', // Every 6 hours;
      "log_file": 'logs/pm2/link-checker.log',
      "error_file": 'logs/pm2/link-checker-error.log',
      "out_file": 'logs/pm2/link-checker-out.log'},
    {}
      "name": 'dependency-updates',
      "script": 'scripts/pm2/dependency-updates.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'production'
      },
      "cron_restart": '0 */6 * * *', // Every 6 hours;
      "log_file": 'logs/pm2/dependency-updates.log',
      "error_file": 'logs/pm2/dependency-updates-error.log',
      "out_file": 'logs/pm2/dependency-updates-out.log'},
    {}
      "name": 'health-monitor',
      "script": 'scripts/pm2/health-monitor.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'production'
      },
      "cron_restart": '*/5 * * * *', // Every 5 minutes;
      "log_file": 'logs/pm2/health-monitor.log',
      "error_file": 'logs/pm2/health-monitor-error.log',
      "out_file": 'logs/pm2/health-monitor-out.log'},
    {}
      "name": 'error-fixer',
      "script": 'scripts/pm2/error-fixer.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {}
        NODE_ENV: 'production'
      },
      "cron_restart": '0 */2 * * *', // Every 2 hours;
      "log_file": 'logs/pm2/error-fixer.log',
      "error_file": 'logs/pm2/error-fixer-error.log',
      "out_file": 'logs/pm2/error-fixer-out.log'},
    {}
      "name": 'continuous-linter',
      "script": 'scripts/pm2/continuous-linter.cjs',
      "args": 'watch',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {}
        NODE_ENV: 'production'
      },
      "log_file": 'logs/pm2/continuous-linter.log',
      "error_file": 'logs/pm2/continuous-linter-error.log',
      "out_file": 'logs/pm2/continuous-linter-out.log'},
    {}
      "name": 'type-checker',
      "script": 'scripts/pm2/type-checker.cjs',
      "args": 'watch',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {}
        NODE_ENV: 'production'
      },
      "log_file": 'logs/pm2/type-checker.log',
      "error_file": 'logs/pm2/type-checker-error.log',
      "out_file": 'logs/pm2/type-checker-out.log'};
  ];
<<<<<<< HEAD
};

};

};

};
=======


};


};


};

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

      name: 'comprehensive-automation',
      script: 'node',
      args: 'scripts/automation/comprehensive-continuous-automation.cjs',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
        NODE_ENV: 'production',      },

      cron_restart: '0 */6 * * *', // Every 6 hours
      error_file: './logs/comprehensive-automation-error.log',
      out_file: './logs/comprehensive-automation-out.log',
      log_file: './logs/comprehensive-automation-combined.log',
      time: true,    },

    {
      name: 'marketing-automation',
      script: 'node',
      args: 'scripts/linkedin_automation.js',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',      },

      cron_restart: '0 */12 * * *', // Every 12 hours
      error_file: './logs/marketing-automation-error.log',
      out_file: './logs/marketing-automation-out.log',
      log_file: './logs/marketing-automation-combined.log',
      time: true,    },
    {
      name: 'security-audit',
      name: 'bolt-zion-app',

      script: 'npm',
      args: 'audit',
      cwd: '/workspace',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:ecosystem.config.cjs
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
main

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/ecosystem.config.cjs

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:ecosystem.config.cjs
=======
<<<<<<< HEAD
        NODE_ENV: 'production'
      },
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        NODE_ENV: 'production',      },

      cron_restart: '0 2 * * *', // Daily at 2 AM
      error_file: './logs/security-audit-error.log',
      out_file: './logs/security-audit-out.log',
      log_file: './logs/security-audit-combined.log',
      time: true,    },

    {
      name: 'test-runner',
      script: 'npm',
      args: 'test',
      cwd: '/workspace',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',      },

      cron_restart: '0 */4 * * *', // Every 4 hours
      error_file: './logs/test-runner-error.log',
      out_file: './logs/test-runner-out.log',
      log_file: './logs/test-runner-combined.log',
      time: true,    },

    {
      name: 'lint-checker',
      script: 'npm',
      args: 'run lint',
      cwd: '/workspace',
        NODE_ENV: 'production',
      },
      log_file: 'logs/pm2/preview.log',
      error_file: 'logs/pm2/preview-error.log',
      out_file: 'logs/pm2/preview-out.log',
    },
    {
      name: 'auto-fix',
      script: 'node',
      args: 'scripts/pm2/auto-fix.cjs',
      cron_restart: '0 */6 * * *',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: { NODE_ENV: 'production' },
      log_file: 'logs/pm2/auto-fix.log',
      error_file: 'logs/pm2/auto-fix-error.log',
      out_file: 'logs/pm2/auto-fix-out.log',
    },
    {
      name: 'healthcheck',
      script: 'node',
      args: 'scripts/pm2/healthcheck.cjs',
      cron_restart: '*/5 * * * *',
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: { NODE_ENV: 'production' },
      log_file: 'logs/pm2/health.log',
      error_file: 'logs/pm2/health-error.log',
      out_file: 'logs/pm2/health-out.log',
    },
    {
      name: 'code-quality-monitor',
      script: 'scripts/pm2/code-quality-monitor.cjs',
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production',      },
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

      cron_restart: '0 */2 * * *', // Every 2 hours
      error_file: './logs/lint-checker-error.log',
      out_file: './logs/lint-checker-out.log',
      log_file: './logs/lint-checker-combined.log',
      time: true
    },
    {
      name: "zion-app",
      script: "npm",
      args: "start",
      interpreter: "none",
      cwd: __dirname,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/ecosystem.config.cjs

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:ecosystem.config.cjs
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        NODE_ENV: 'production',
        PM2_PROCESS_NAME: 'code-quality-monitor',
        QUALITY_THRESHOLD: '80',
        AUTO_FIX_CRITICAL: 'true',
      },
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      log_file: 'logs/pm2/code-quality-monitor.log',
      error_file: 'logs/pm2/code-quality-monitor-error.log',
      out_file: 'logs/pm2/code-quality-monitor-out.log',
    }
  ]
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/ecosystem.config.cjs
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

    },
    {
      name: 'auto-commit-fixes',
      script: 'scripts/pm2/auto-commit-fixes.js',
      instances: 1,
      autorestart: true,

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:ecosystem.config.cjs
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
      watch: false,
      autorestart: true,
=======

      error_file: './logs/lint-checker-error.log',
      out_file: './logs/lint-checker-out.log',
      log_file: './logs/lint-checker-combined.log',
      name: "zion-app",""
      script: "npm",""
      args: "start",""

      interpreter: "none","
      cwd: __dirname,

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {,"
  NODE_ENV: "production","
        PORT: process.env.PORT || 3000;
      },"
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/zion-app-error.log",
      out_file: "automation/logs/zion-app-out.log","
    {"
      name: "zion-auto-sync",
      script: "automation/pm2-auto-sync.js",
<<<<<<< HEAD
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      exp_backoff_restart_delay: 500,
      env: {
        NODE_ENV: "production",
        AUTO_SYNC_REMOTE: process.env.AUTO_SYNC_REMOTE || "origin",
        AUTO_SYNC_BRANCH: process.env.AUTO_SYNC_BRANCH || "main",
        AUTO_SYNC_STRATEGY: process.env.AUTO_SYNC_STRATEGY || "hardreset",
        AUTO_SYNC_CLEAN: process.env.AUTO_SYNC_CLEAN || "1",
        AUTO_SYNC_GC: process.env.AUTO_SYNC_GC || "0"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/zion-auto-sync-error.log",
      out_file: "automation/logs/zion-auto-sync-out.log",
      time: true
    },
    {
      name: "zion-build-monitor",
      script: "automation/continuous-build-monitor.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
<<<<<<< HEAD:backup-problematic-files/ecosystem.config.cjs

      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/build-monitor-error.log",
      out_file: "automation/logs/build-monitor-out.log",
      time: true
<<<<<<< HEAD
<<<<<<< HEAD
    },
    {
      name: "performance-optimizer",
      script: "automation/performance-optimizer.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      cron_restart: "0 */2 * * *", // Every 2 hours
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/performance-optimizer-error.log",
      out_file: "automation/logs/performance-optimizer-out.log",
      time: true
    },
    {
      name: "seo-optimizer",
      script: "automation/seo-optimizer.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      cron_restart: "0 */6 * * *", // Every 6 hours
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/seo-optimizer-error.log",
      out_file: "automation/logs/seo-optimizer-out.log",
      time: true
    },
    {
      name: "health-check",
      script: "automation/health-check.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      cron_restart: "*/5 * * * *", // Every 5 minutes
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/health-check-error.log",
      out_file: "automation/logs/health-check-out.log",
      time: true
    },
    {
      name: "security-scanner",
      script: "automation/security-scanner.cjs",
      interpreter: "node",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production"
      },
      cron_restart: "0 */4 * * *", // Every 4 hours
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/security-scanner-error.log",
      out_file: "automation/logs/security-scanner-out.log",
      time: true
    }
  ];};
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      cron_restart: '0 */6 * * *', // Restart every 6 hours
      log_file: 'logs/pm2/git-workflow.log',
      error_file: 'logs/pm2/git-workflow-error.log',
      out_file: 'logs/pm2/git-workflow-out.log',
    },
    // NEW: Environment Health Monitor
    {
      name: 'health-monitor',
      script: 'scripts/pm2/health-monitor.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'health-monitor',
        MONITOR_SYSTEM: 'true',
        MONITOR_PROCESSES: 'true',
        MONITOR_RESOURCES: 'true',
        ALERT_THRESHOLD: '80',
      },
      cron_restart: '0 */1 * * *', // Restart every hour
      log_file: 'logs/pm2/health-monitor.log',
      error_file: 'logs/pm2/health-monitor-error.log',
      out_file: 'logs/pm2/health-monitor-out.log',
    },
    // NEW: Documentation Generator
    {
      name: 'docs-generator',
      script: 'scripts/pm2/docs-generator.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'docs-generator',
        AUTO_GENERATE: 'true',
        UPDATE_README: 'true',
        API_DOCS: 'true',
        COMPONENT_DOCS: 'true',
      },
      cron_restart: '0 2 * * *', // Restart daily at 2 AM
      log_file: 'logs/pm2/docs-generator.log',
      error_file: 'logs/pm2/docs-generator-error.log',
      out_file: 'logs/pm2/docs-generator-out.log',
    },
    // NEW: SEO and Accessibility Monitor
    {
      name: 'seo-accessibility',
      script: 'scripts/pm2/seo-accessibility.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_PROCESS_NAME: 'seo-accessibility',
        CHECK_SEO: 'true',
        CHECK_ACCESSIBILITY: 'true',
        CHECK_PERFORMANCE: 'true',
        LIGHTHOUSE_AUDIT: 'true',
      },
      cron_restart: '0 */4 * * *', // Restart every 4 hours
      log_file: 'logs/pm2/seo-accessibility.log',
      error_file: 'logs/pm2/seo-accessibility-error.log',
      out_file: 'logs/pm2/seo-accessibility-out.log',
    },
  ],
};
module.exports = { apps: [{ name: "ziontechgroup-web","" script: "npm","" args: "run start","" cwd: "./"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "production"},"" log_file: "logs/pm2/preview.log","" error_file: "logs/pm2/preview-error.log","" out_file: "logs/pm2/preview-out.log"}, {"" name: "ci-cd-automation","" script: "scripts/pm2/ci-cd-automation.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production" },"" cron_restart: "0 */1 * * *", / Every hour"" log_file: "logs/pm2/ci-cd-automation.log","" error_file: "logs/pm2/ci-cd-automation-error.log","" out_file: "logs/pm2/ci-cd-automation-out.log"}, {"" name: "continuous-improvement","" script: "scripts/pm2/continuous-improvement.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production" },"" cron_restart: "0 */2 * * *", / Every 2 hours"" log_file: "logs/pm2/continuous-improvement.log","" error_file: "logs/pm2/continuous-improvement-error.log","" out_file: "logs/pm2/continuous-improvement-out.log"}, {"" name: "daily-build-test","" script: "scripts/pm2/daily-build-test.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "production" },"" cron_restart: "0 */1 * * *", / Every hour"" log_file: "logs/pm2/daily-build-test.log","" error_file: "logs/pm2/daily-build-test-error.log","" out_file: "logs/pm2/daily-build-test-out.log"}, {"" name: "quality-checks","" script: "scripts/pm2/quality-checks.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "production" },"" cron_restart: "0 */3 * * *", / Every 3 hours"" log_file: "logs/pm2/quality-checks.log","" error_file: "logs/pm2/quality-checks-error.log","" out_file: "logs/pm2/quality-checks-out.log"}, {"" name: "security-audit","" script: "scripts/pm2/security-audit.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "production" },"" cron_restart: "0 */4 * * *", / Every 4 hours"" log_file: "logs/pm2/security-audit.log","" error_file: "logs/pm2/security-audit-error.log","" out_file: "logs/pm2/security-audit-out.log"}, {"" name: "performance-monitor","" script: "scripts/pm2/performance-monitor.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "production" },"" cron_restart: "0 */2 * * *", / Every 2 hours"" log_file: "logs/pm2/performance-monitor.log","" error_file: "logs/pm2/performance-monitor-error.log","" out_file: "logs/pm2/performance-monitor-out.log"}, {"" name: "link-checker","" script: "scripts/pm2/link-checker.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "production" },"" cron_restart: "0 */6 * * *", / Every 6 hours"" log_file: "logs/pm2/link-checker.log","" error_file: "logs/pm2/link-checker-error.log","" out_file: "logs/pm2/link-checker-out.log"}, {"" name: "dependency-updates","" script: "scripts/pm2/dependency-updates.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "production" },"" cron_restart: "0 */6 * * *", / Every 6 hours"" log_file: "logs/pm2/dependency-updates.log","" error_file: "logs/pm2/dependency-updates-error.log","" out_file: "logs/pm2/dependency-updates-out.log"}, {"" name: "health-monitor","" script: "scripts/pm2/health-monitor.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "1G"," env: {" NODE_ENV: "production" },"" cron_restart: "*/5 * * * *", / Every 5 minutes"" log_file: "logs/pm2/health-monitor.log","" error_file: "logs/pm2/health-monitor-error.log","" out_file: "logs/pm2/health-monitor-out.log"}, {"" name: "error-fixer","" script: "scripts/pm2/error-fixer.cjs"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production" },"" cron_restart: "0 */2 * * *", / Every 2 hours"" log_file: "logs/pm2/error-fixer.log","" error_file: "logs/pm2/error-fixer-error.log","" out_file: "logs/pm2/error-fixer-out.log"}, {"" name: "continuous-linter","" script: "scripts/pm2/continuous-linter.cjs","" args: "watch"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production" },"" log_file: "logs/pm2/continuous-linter.log","" error_file: "logs/pm2/continuous-linter-error.log","" out_file: "logs/pm2/continuous-linter-out.log"}, {"" name: "type-checker","" script: "scripts/pm2/type-checker.cjs","" args: "watch"," instances: 1," autorestart: true," watch: false,"" max_memory_restart: "512M"," env: {" NODE_ENV: "production" },"" log_file: "logs/pm2/type-checker.log","" error_file: "logs/pm2/type-checker-error.log","" out_file: "logs/pm2/type-checker-out.log"} ]};'"'"
module.exports = {}
  "apps": [{}]
      name: 'ziontechgroup-web',
      "script": 'npm',
      "args": 'run start',
      "cwd": './',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'production'},
      "log_file": 'logs/pm2/preview.log',
      "error_file": 'logs/pm2/preview-error.log',
      "out_file": 'logs/pm2/preview-out.log'},
    {}
      "name": 'ci-cd-automation',
      "script": 'scripts/pm2/ci-cd-automation.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {}
        NODE_ENV: 'production'
      },
      "cron_restart": '0 */1 * * *', // Every hour;
      "log_file": 'logs/pm2/ci-cd-automation.log',
      "error_file": 'logs/pm2/ci-cd-automation-error.log',
      "out_file": 'logs/pm2/ci-cd-automation-out.log'},
    {}
      "name": 'continuous-improvement',
      "script": 'scripts/pm2/continuous-improvement.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {}
        NODE_ENV: 'production'
      },
      "cron_restart": '0 */2 * * *', // Every 2 hours;
      "log_file": 'logs/pm2/continuous-improvement.log',
      "error_file": 'logs/pm2/continuous-improvement-error.log',
      "out_file": 'logs/pm2/continuous-improvement-out.log'},
    {}
      "name": 'daily-build-test',
      "script": 'scripts/pm2/daily-build-test.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'production'
      },
      "cron_restart": '0 */1 * * *', // Every hour;
      "log_file": 'logs/pm2/daily-build-test.log',
      "error_file": 'logs/pm2/daily-build-test-error.log',
      "out_file": 'logs/pm2/daily-build-test-out.log'},
    {}
      "name": 'quality-checks',
      "script": 'scripts/pm2/quality-checks.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'production'
      },
      "cron_restart": '0 */3 * * *', // Every 3 hours;
      "log_file": 'logs/pm2/quality-checks.log',
      "error_file": 'logs/pm2/quality-checks-error.log',
      "out_file": 'logs/pm2/quality-checks-out.log'},
    {}
      "name": 'security-audit',
      "script": 'scripts/pm2/security-audit.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'production'
      },
      "cron_restart": '0 */4 * * *', // Every 4 hours;
      "log_file": 'logs/pm2/security-audit.log',
      "error_file": 'logs/pm2/security-audit-error.log',
      "out_file": 'logs/pm2/security-audit-out.log'},
    {}
      "name": 'performance-monitor',
      "script": 'scripts/pm2/performance-monitor.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'production'
      },
      "cron_restart": '0 */2 * * *', // Every 2 hours;
      "log_file": 'logs/pm2/performance-monitor.log',
      "error_file": 'logs/pm2/performance-monitor-error.log',
      "out_file": 'logs/pm2/performance-monitor-out.log'},
    {}
      "name": 'link-checker',
      "script": 'scripts/pm2/link-checker.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'production'
      },
      "cron_restart": '0 */6 * * *', // Every 6 hours;
      "log_file": 'logs/pm2/link-checker.log',
      "error_file": 'logs/pm2/link-checker-error.log',
      "out_file": 'logs/pm2/link-checker-out.log'},
    {}
      "name": 'dependency-updates',
      "script": 'scripts/pm2/dependency-updates.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'production'
      },
      "cron_restart": '0 */6 * * *', // Every 6 hours;
      "log_file": 'logs/pm2/dependency-updates.log',
      "error_file": 'logs/pm2/dependency-updates-error.log',
      "out_file": 'logs/pm2/dependency-updates-out.log'},
    {}
      "name": 'health-monitor',
      "script": 'scripts/pm2/health-monitor.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '1G',
      "env": {}
        NODE_ENV: 'production'
      },
      "cron_restart": '*/5 * * * *', // Every 5 minutes;
      "log_file": 'logs/pm2/health-monitor.log',
      "error_file": 'logs/pm2/health-monitor-error.log',
      "out_file": 'logs/pm2/health-monitor-out.log'},
    {}
      "name": 'error-fixer',
      "script": 'scripts/pm2/error-fixer.cjs',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {}
        NODE_ENV: 'production'
      },
      "cron_restart": '0 */2 * * *', // Every 2 hours;
      "log_file": 'logs/pm2/error-fixer.log',
      "error_file": 'logs/pm2/error-fixer-error.log',
      "out_file": 'logs/pm2/error-fixer-out.log'},
    {}
      "name": 'continuous-linter',
      "script": 'scripts/pm2/continuous-linter.cjs',
      "args": 'watch',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {}
        NODE_ENV: 'production'
      },
      "log_file": 'logs/pm2/continuous-linter.log',
      "error_file": 'logs/pm2/continuous-linter-error.log',
      "out_file": 'logs/pm2/continuous-linter-out.log'},
    {}
      "name": 'type-checker',
      "script": 'scripts/pm2/type-checker.cjs',
      "args": 'watch',
      "instances": 1,
      "autorestart": true,
      "watch": false,
      "max_memory_restart": '512M',
      "env": {}
        NODE_ENV: 'production'
      },
      "log_file": 'logs/pm2/type-checker.log',
      "error_file": 'logs/pm2/type-checker-error.log',
      "out_file": 'logs/pm2/type-checker-out.log'};
  ];

};

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:ecosystem.config.cjs
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "automation/logs/build-monitor-error.log",
      out_file: "automation/logs/build-monitor-out.log",
      time: true
<<<<<<< HEAD
    }
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/ecosystem.config.cjs
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
  ]
};
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    }
  ];};

  ]
};
<<<<<<< HEAD
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:ecosystem.config.cjs
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

main
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
      interpreter: "node","

      out_file: "automation/logs/build-monitor-out.log","
      time: true;"
module.exports = {
  apps: [

        PORT: 3000
      env_production: {

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
