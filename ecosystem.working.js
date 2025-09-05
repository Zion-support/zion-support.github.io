<<<<<<< HEAD
module.exports = {
  "apps": [// Main application
    {
      name: 'zion-app',
      "script": 'npm',
      "args": 'start',
      "cwd": './',
      "instances": 1,
      "exec_mode": 'fork',
      "env": {
        NODE_ENV: 'production',
        "PORT": 3000
      },
      "env_development": {
        NODE_ENV: 'development',
        "PORT": 3000
      },
      "watch": false,
      "ignore_watch": ['node_modules', 'logs', '*.log'],
      "max_memory_restart": '1G',
      "error_file": './logs/err.log',
      "out_file": './logs/out.log',
      "log_file": './logs/combined.log',
      "time": true,
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z',
      "merge_logs": true,
      "max_restarts": 10,
      "min_uptime": '10s',
      "restart_delay": 4000,
      "kill_timeout": 5000,
      "wait_ready": true,
      "listen_timeout": 8000,
      "kill_retry_time": 100
    },
    // Development server
    {
      "name": 'zion-dev',
      "script": 'npm',
      "args": 'run dev',
      "cwd": './',
      "instances": 1,
      "exec_mode": 'fork',
      "env": {
        NODE_ENV: 'development',
        "PORT": 3000
      },
      "watch": true,
      "ignore_watch": ['node_modules', 'logs', '*.log', '.next'],
      "max_memory_restart": '512M',
      "error_file": './logs/dev-err.log',
      "out_file": './logs/dev-out.log',
      "log_file": './logs/dev-combined.log',
      "time": true,
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z',
      "merge_logs": true,
      "max_restarts": 5,
      "min_uptime": '5s',
      "restart_delay": 2000
    },
    // Build process
    {
      "name": 'zion-build',
      "script": 'npm',
      "args": 'run build',
      "cwd": './',
      "instances": 1,
      "exec_mode": 'fork',
      "env": {
        NODE_ENV: 'production'
      },
      "watch": false,
      "max_memory_restart": '2G',
      "error_file": './logs/build-err.log',
      "out_file": './logs/build-out.log',
      "log_file": './logs/build-combined.log',
      "time": true,
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z',
      "merge_logs": true,
      "max_restarts": 3,
      "min_uptime": '30s',
      "restart_delay": 5000
    },
    // Linting process
    {
      "name": 'zion-lint',
      "script": 'npm',
      "args": 'run lint',
      "cwd": './',
      "instances": 1,
      "exec_mode": 'fork',
      "env": {
        NODE_ENV: 'development'
      },
      "watch": false,
      "max_memory_restart": '256M',
      "error_file": './logs/lint-err.log',
      "out_file": './logs/lint-out.log',
      "log_file": './logs/lint-combined.log',
      "time": true,
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z',
      "merge_logs": true,
      "max_restarts": 2,
      "min_uptime": '5s',
      "restart_delay": 1000
    },
    // Testing process
    {
      "name": 'zion-test',
      "script": 'npm',
      "args": 'test',
      "cwd": './',
      "instances": 1,
      "exec_mode": 'fork',
      "env": {
        NODE_ENV: 'test'
      },
      "watch": false,
      "max_memory_restart": '512M',
      "error_file": './logs/test-err.log',
      "out_file": './logs/test-out.log',
      "log_file": './logs/test-combined.log',
      "time": true,
      "log_date_format": 'YYYY-MM-DD HH:mm:ss Z',
      "merge_logs": true,
      "max_restarts": 3,
      "min_uptime": '10s',
      "restart_delay": 2000
    }
  ],
  "deploy": {
    production: {
      user: 'ubuntu',
      "host": 'your-server.com',
      "ref": 'origin/main',
      "repo": 'git@github.com:your-username/your-repo.git',
      "path": '/var/www/zion-app',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    },
    "staging": {
      user: 'ubuntu',
      "host": 'staging-server.com',
      "ref": 'origin/develop',
      "repo": 'git@github.com:your-username/your-repo.git',
      "path": '/var/www/zion-app-staging',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env staging',
      'pre-setup': ''
    }
  }
};
module.exports = { apps: [ { name: 'zion-app',script: 'npm',args: 'start',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production',PORT: 3000 },env_development: { NODE_ENV: 'development',PORT: 3000 },watch: false,ignore_watch: ['node_modules','logs','*.log'],max_memory_restart: '1G',error_file: './logs/err.log',out_file: './logs/out.log',log_file: './logs/combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 10,min_uptime: '10s',restart_delay: 4000,kill_timeout: 5000,wait_ready: true,listen_timeout: 8000,kill_retry_time: 100 },{ name: 'zion-dev',script: 'npm',args: 'run dev',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development',PORT: 3000 },watch: true,ignore_watch: ['node_modules','logs','*.log','.next'],max_memory_restart: '512M',error_file: './logs/dev-err.log',out_file: './logs/dev-out.log',log_file: './logs/dev-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 5,min_uptime: '5s',restart_delay: 2000 },{ name: 'zion-build',script: 'npm',args: 'run build',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'production' },watch: false,max_memory_restart: '2G',error_file: './logs/build-err.log',out_file: './logs/build-out.log',log_file: './logs/build-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '30s',restart_delay: 5000 },{ name: 'zion-lint',script: 'npm',args: 'run lint',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'development' },watch: false,max_memory_restart: '256M',error_file: './logs/lint-err.log',out_file: './logs/lint-out.log',log_file: './logs/lint-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 2,min_uptime: '5s',restart_delay: 1000 },{ name: 'zion-test',script: 'npm',args: 'test',cwd: './',instances: 1,exec_mode: 'fork',env: { NODE_ENV: 'test' },watch: false,max_memory_restart: '512M',error_file: './logs/test-err.log',out_file: './logs/test-out.log',log_file: './logs/test-combined.log',time: true,log_date_format: 'YYYY-MM-DD HH:mm:ss Z',merge_logs: true,max_restarts: 3,min_uptime: '10s',restart_delay: 2000 } ],deploy: { production: { user: 'ubuntu',host: 'your-server.com',ref: 'origin/main',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production','pre-setup': '' },staging: { user: 'ubuntu',host: 'staging-server.com',ref: 'origin/develop',repo: 'git@github.com:your-username/your-repo.git',path: '/var/www/zion-app-staging','pre-deploy-local': '','post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env staging','pre-setup': '' } } };
=======
module.exports = {;
  apps: [;
    // AI-Powered Code Analyzer;
    {;
      name: 'ai-code-analyzer',
      script: './scripts/automation/ai-code-analyzer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {;
        NODE_ENV: 'production',
        AI_ANALYSIS_MODE: 'true';
},
      log_file: './logs/ai-code-analyzer.log',
      error_file: './logs/ai-code-analyzer-error.log',
      out_file: './logs/ai-code-analyzer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z';
},

    // Smart Performance Optimizer;
    {;
      name: 'smart-performance-optimizer',
      script: './scripts/automation/smart-performance-optimizer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {;
        NODE_ENV: 'production',
        PERFORMANCE_OPTIMIZATION_MODE: 'true';
},
      log_file: './logs/smart-performance-optimizer.log',
      error_file: './logs/smart-performance-optimizer-error.log',
      out_file: './logs/smart-performance-optimizer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z';
},

    // Intelligent Dependency Manager;
    {;
      name: 'intelligent-dependency-manager',
      script: './scripts/automation/intelligent-dependency-manager.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {;
        NODE_ENV: 'production',
        DEPENDENCY_MANAGEMENT_MODE: 'true';
},
      log_file: './logs/intelligent-dependency-manager.log',
      error_file: './logs/intelligent-dependency-manager-error.log',
      out_file: './logs/intelligent-dependency-manager-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z';
},

    // Project Health Monitor;
    {;
      name: 'project-health-monitor',
      script: './scripts/automation/project-health-monitor.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {;
        NODE_ENV: 'production',
        HEALTH_MONITORING_MODE: 'true';
},
      log_file: './logs/project-health-monitor.log',
      error_file: './logs/project-health-monitor-error.log',
      out_file: './logs/project-health-monitor-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z';
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
        SECURITY_MODE: 'true';
},
      log_file: './logs/enhanced-security-automation.log',
      error_file: './logs/enhanced-security-automation-error.log',
      out_file: './logs/enhanced-security-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z';
},

    // Enhanced Testing Automation;
    {;
      name: 'enhanced-testing-automation',
      script: './scripts/automation/enhanced-testing-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {;
        NODE_ENV: 'production',
        TESTING_MODE: 'true';
},
      log_file: './logs/enhanced-testing-automation.log',
      error_file: './logs/enhanced-testing-automation-error.log',
      out_file: './logs/enhanced-testing-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z';
},

    // PM2 Sync Automation;
    {;
      name: 'pm2-sync-automation',
      script: './scripts/automation/pm2-sync-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {;
        NODE_ENV: 'production',
        SYNC_MODE: 'true';
},
      log_file: './logs/pm2-sync-automation.log',
      error_file: './logs/pm2-sync-automation-error.log',
      out_file: './logs/pm2-sync-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z';
},

    // Link Checker Automation;
    {;
      name: 'link-checker-automation',
      script: './scripts/automation/link-checker-automation.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {;
        NODE_ENV: 'production',
        LINK_CHECKING_MODE: 'true';
},
      log_file: './logs/link-checker-automation.log',
      error_file: './logs/link-checker-automation-error.log',
      out_file: './logs/link-checker-automation-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z';
},

    // TypeScript Syntax Fixer;
    {;
      name: 'typescript-syntax-fixer',
      script: './scripts/automation/typescript-syntax-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {;
        NODE_ENV: 'production',
        SYNTAX_FIXING_MODE: 'true';
},
      log_file: './logs/typescript-syntax-fixer.log',
      error_file: './logs/typescript-syntax-fixer-error.log',
      out_file: './logs/typescript-syntax-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z';
},

    // Console Error Fixer;
    {;
      name: 'console-error-fixer',
      script: './scripts/automation/console-error-fixer.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {;
        NODE_ENV: 'production',
        ERROR_FIXING_MODE: 'true';
},
      log_file: './logs/console-error-fixer.log',
      error_file: './logs/console-error-fixer-error.log',
      out_file: './logs/console-error-fixer-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z';
}
  ];
};
>>>>>>> origin/automation-fixes
