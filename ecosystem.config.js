const os = require('os');
const path = require('path');

// Intelligent environment detection
const getEnvironment = () => {
  const env = process.env.NODE_ENV || 'development';
  const isProduction = env === 'production';
  const isStaging = env === 'staging';
  const isDevelopment = env === 'development';
  
  return { env, isProduction, isStaging, isDevelopment };
};

// Smart resource allocation based on system specs
const getResourceLimits = () => {
  const cpuCount = os.cpus().length;
  const totalMemory = os.totalmem();
  const memoryGB = Math.round(totalMemory / (1024 * 1024 * 1024));
  
  // Intelligent scaling based on system resources
  const maxInstances = Math.min(cpuCount * 2, 8); // Max 8 instances
  const memoryLimit = Math.min(memoryGB * 100, 2048); // Max 2GB per instance
  
  return { maxInstances, memoryLimit, cpuCount, memoryGB };
};

// Performance monitoring configuration
const getMonitoringConfig = () => ({
  pmx: true,
  monitoring: true,
  // Custom metrics collection
  custom_metrics: {
    response_time: true,
    error_rate: true,
    throughput: true,
    memory_usage: true,
    cpu_usage: true
  }
});

// Health check configuration
const getHealthConfig = () => ({
  health_check_grace_period: 3000,
  health_check_fatal_exceptions: true,
  // Custom health check endpoints
  health_check_url: '/health',
  // Auto-restart on health check failure
  max_restarts: 10,
  min_uptime: '10s'
});

// Environment-specific configurations
const getEnvironmentConfig = (env) => {
  const baseConfig = {
    instances: 1,
    exec_mode: 'fork',
    watch: false,
    ignore_watch: ['node_modules', 'logs', '*.log'],
    log_file: './logs/combined.log',
    out_file: './logs/out.log',
    error_file: './logs/error.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    // Intelligent error handling
    max_memory_restart: '1G',
    // Performance optimization
    node_args: '--max-old-space-size=4096',
    // Environment variables
    env: {
      NODE_ENV: env,
      PORT: process.env.PORT || 3000
    }
  };

  switch (env) {
    case 'production':
      return {
        ...baseConfig,
        instances: 'max',
        exec_mode: 'cluster',
        watch: false,
        max_memory_restart: '2G',
        node_args: '--max-old-space-size=8192',
        env: {
          ...baseConfig.env,
          PORT: process.env.PORT || 3000,
          LOG_LEVEL: 'error'
        }
      };
    
    case 'staging':
      return {
        ...baseConfig,
        instances: 2,
        exec_mode: 'cluster',
        watch: false,
        max_memory_restart: '1.5G',
        env: {
          ...baseConfig.env,
          PORT: process.env.PORT || 3001,
          LOG_LEVEL: 'warn'
        }
      };
    
    case 'development':
    default:
      return {
        ...baseConfig,
        instances: 1,
        exec_mode: 'fork',
        watch: true,
        ignore_watch: ['node_modules', 'logs', '*.log', 'dist', 'build'],
        env: {
          ...baseConfig.env,
          PORT: process.env.PORT || 3000,
          LOG_LEVEL: 'debug'
        }
      };
  }
};

// Main ecosystem configuration
module.exports = {
  apps: [
    // Frontend Application
    {
      name: 'bolt-zion-frontend',
      script: 'npm',
      args: 'run dev',
      cwd: './',
      ...getEnvironmentConfig(getEnvironment().env),
      ...getMonitoringConfig(),
      ...getHealthConfig(),
      // Development-specific features
      ...(getEnvironment().isDevelopment && {
        watch: true,
        ignore_watch: ['node_modules', 'logs', '*.log', 'dist', 'build', '.git'],
        // Auto-restart on file changes
        watch_delay: 1000,
        // Hot reload optimization
        autorestart: false
      }),
      // Production-specific features
      ...(getEnvironment().isProduction && {
        instances: getResourceLimits().maxInstances,
        exec_mode: 'cluster',
        // Load balancing
        load_balancing_method: 'least-connection',
        // Graceful shutdown
        kill_timeout: 5000,
        wait_ready: true,
        listen_timeout: 10000
      })
    },

    // Backend Server
    {
      name: 'bolt-zion-backend',
      script: 'npm',
      args: 'run dev',
      cwd: './server',
      ...getEnvironmentConfig(getEnvironment().env),
      ...getMonitoringConfig(),
      ...getHealthConfig(),
      // Backend-specific configuration
      env: {
        ...getEnvironmentConfig(getEnvironment().env).env,
        PORT: process.env.BACKEND_PORT || 5000,
        DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost:27017/bolt-zion',
        JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key',
        CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:3000'
      },
      // Development features
      ...(getEnvironment().isDevelopment && {
        watch: true,
        ignore_watch: ['node_modules', 'logs', '*.log', 'dist'],
        // Auto-restart on backend changes
        autorestart: true
      }),
      // Production features
      ...(getEnvironment().isProduction && {
        instances: Math.max(1, getResourceLimits().maxInstances - 1),
        exec_mode: 'cluster',
        // Database connection pooling
        node_args: '--max-old-space-size=4096 --max-semi-space-size=512'
      })
    },

    // API Gateway (for production)
    ...(getEnvironment().isProduction ? [{
      name: 'bolt-zion-gateway',
      script: './scripts/gateway.js',
      cwd: './',
      instances: 1,
      exec_mode: 'fork',
      ...getMonitoringConfig(),
      ...getHealthConfig(),
      env: {
        NODE_ENV: 'production',
        PORT: process.env.GATEWAY_PORT || 80,
        FRONTEND_PORT: 3000,
        BACKEND_PORT: 5000
      }
    }] : []),

    // Monitoring Dashboard
    {
      name: 'bolt-zion-monitor',
      script: './scripts/monitor.js',
      cwd: './',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      ...getMonitoringConfig(),
      env: {
        NODE_ENV: getEnvironment().env,
        PORT: process.env.MONITOR_PORT || 3002,
        DASHBOARD_URL: process.env.DASHBOARD_URL || 'http://localhost:3002'
      }
    }
  ],

  // Deployment configuration
  deploy: {
    production: {
      user: 'deploy',
      host: process.env.PROD_HOST || 'localhost',
      ref: 'origin/main',
      repo: process.env.REPO_URL || 'git@github.com:your-username/bolt-zion.git',
      path: '/var/www/bolt-zion',
      'pre-deploy-local': 'echo "This is a local executed command"',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': 'echo "This is a command to be executed on the host before the setup process starts"'
    },
    staging: {
      user: 'deploy',
      host: process.env.STAGING_HOST || 'localhost',
      ref: 'origin/develop',
      repo: process.env.REPO_URL || 'git@github.com:your-username/bolt-zion.git',
      path: '/var/www/bolt-zion-staging',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env staging'
    }
  },

  // Global PM2 configuration
  pm2: {
    // Auto-restart on PM2 crash
    autorestart: true,
    // Maximum restart attempts
    max_restarts: 10,
    // Minimum uptime before considering app stable
    min_uptime: '10s',
    // Maximum memory usage before restart
    max_memory_restart: '1G',
    // Log management
    log_file: './logs/pm2.log',
    out_file: './logs/pm2-out.log',
    error_file: './logs/pm2-error.log',
    // Performance monitoring
    monitoring: true,
    // Metrics collection interval
    metrics_interval: 5000
  }
};