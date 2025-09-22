/**
 * PM2 Automation System Configuration
 * Comprehensive configuration for monitoring, alerting, and recovery systems
 */

module.exports = {
  // Dashboard Configuration
  dashboard: {
    port: process.env.DASHBOARD_PORT || 3001,
    host: process.env.DASHBOARD_HOST || '0.0.0.0',
    enableWebSocket: true,
    updateInterval: 2000, // 2 seconds
    maxLogLines: 1000,
    enableProcessControl: true,
    enableMetrics: true,
    enableCharts: true
  },

  // Alerting System Configuration
  alerting: {
    enabled: true,
    cooldown: 5 * 60 * 1000, // 5 minutes
    maxAlerts: 1000,
    
    // Thresholds
    thresholds: {
      memory: 100 * 1024 * 1024, // 100MB
      cpu: 80, // 80%
      restartCount: 10,
      responseTime: 5000, // 5 seconds
      diskUsage: 90, // 90%
      networkLatency: 1000 // 1 second
    },

    // Email Configuration
    email: {
      enabled: process.env.EMAIL_ENABLED === 'true',
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === 'true',
      user: process.env.EMAIL_USER || '',
      pass: process.env.EMAIL_PASS || '',
      from: process.env.EMAIL_FROM || '',
      recipients: process.env.EMAIL_RECIPIENTS ? process.env.EMAIL_RECIPIENTS.split(',') : []
    },

    // Slack Configuration
    slack: {
      enabled: process.env.SLACK_ENABLED === 'true',
      webhookUrl: process.env.SLACK_WEBHOOK_URL || '',
      channel: process.env.SLACK_CHANNEL || '#alerts',
      username: process.env.SLACK_USERNAME || 'PM2 Automation Bot'
    },

    // Webhook Configuration
    webhook: {
      enabled: process.env.WEBHOOK_ENABLED === 'true',
      url: process.env.WEBHOOK_URL || '',
      timeout: 10000,
      retries: 3
    },

    // Notification Rules
    rules: {
      critical: {
        channels: ['email', 'slack', 'webhook'],
        immediate: true
      },
      warning: {
        channels: ['slack', 'webhook'],
        immediate: false
      },
      info: {
        channels: ['webhook'],
        immediate: false
      }
    }
  },

  // Process Recovery Configuration
  recovery: {
    enabled: true,
    maxRetries: 3,
    retryDelay: 5000, // 5 seconds
    exponentialBackoff: true,
    maxBackoffDelay: 60000, // 1 minute
    healthCheckInterval: 10000, // 10 seconds
    autoRecovery: true,
    
    // Recovery Strategies
    strategies: {
      restart: true,
      reload: true,
      scale: true,
      dependencyCheck: true,
      gracefulShutdown: true
    },

    // Process Dependencies
    processDependencies: {
      'zion-app': ['zion-backend'],
      'build-automation': ['dependency-monitor'],
      'code-quality-monitor': ['typescript-syntax-fixer'],
      'project-health-monitor': ['build-health-monitor']
    },

    // Critical Processes (highest priority for recovery)
    criticalProcesses: [
      'zion-app',
      'zion-backend',
      'build-health-monitor'
    ],

    // Recovery Timeouts
    timeouts: {
      processStart: 30000, // 30 seconds
      processStabilization: 60000, // 1 minute
      dependencyCheck: 15000, // 15 seconds
      gracefulShutdown: 10000 // 10 seconds
    }
  },

  // Monitoring Configuration
  monitoring: {
    enabled: true,
    metricsCollection: true,
    logAggregation: true,
    performanceProfiling: true,
    
    // Metrics
    metrics: {
      collectionInterval: 5000, // 5 seconds
      retentionPeriod: 24 * 60 * 60 * 1000, // 24 hours
      aggregation: {
        cpu: 'average',
        memory: 'average',
        responseTime: 'percentile95'
      }
    },

    // Log Management
    logs: {
      maxFileSize: 100 * 1024 * 1024, // 100MB
      maxFiles: 10,
      compression: true,
      rotation: 'daily',
      retention: 30 // days
    },

    // Performance Profiling
    profiling: {
      enabled: true,
      sampleRate: 0.1, // 10% of requests
      maxProfiles: 100,
      profileRetention: 7 * 24 * 60 * 60 * 1000 // 7 days
    }
  },

  // Security Configuration
  security: {
    enabled: true,
    authentication: {
      required: false,
      type: 'basic', // basic, jwt, oauth
      users: process.env.DASHBOARD_USERS ? JSON.parse(process.env.DASHBOARD_USERS) : []
    },
    
    authorization: {
      enabled: false,
      roles: ['admin', 'operator', 'viewer'],
      permissions: {
        admin: ['read', 'write', 'delete', 'control'],
        operator: ['read', 'write', 'control'],
        viewer: ['read']
      }
    },

    // API Security
    api: {
      rateLimit: {
        enabled: true,
        windowMs: 15 * 60 * 1000, // 15 minutes
        maxRequests: 100
      },
      cors: {
        enabled: true,
        origin: process.env.CORS_ORIGIN || '*',
        credentials: true
      }
    }
  },

  // Integration Configuration
  integrations: {
    // Prometheus Metrics Export
    prometheus: {
      enabled: process.env.PROMETHEUS_ENABLED === 'true',
      port: parseInt(process.env.PROMETHEUS_PORT) || 9090,
      path: process.env.PROMETHEUS_PATH || '/metrics'
    },

    // Grafana Integration
    grafana: {
      enabled: process.env.GRAFANA_ENABLED === 'true',
      url: process.env.GRAFANA_URL || '',
      apiKey: process.env.GRAFANA_API_KEY || '',
      dashboardUid: process.env.GRAFANA_DASHBOARD_UID || ''
    },

    // External Monitoring Systems
    external: {
      enabled: process.env.EXTERNAL_MONITORING_ENABLED === 'true',
      endpoints: process.env.EXTERNAL_ENDPOINTS ? JSON.parse(process.env.EXTERNAL_ENDPOINTS) : [],
      healthCheck: {
        enabled: true,
        interval: 60000, // 1 minute
        timeout: 10000 // 10 seconds
      }
    }
  },

  // Maintenance Configuration
  maintenance: {
    enabled: true,
    schedule: {
      // Daily maintenance at 2 AM
      daily: '0 2 * * *',
      // Weekly maintenance on Sunday at 3 AM
      weekly: '0 3 * * 0',
      // Monthly maintenance on 1st at 4 AM
      monthly: '0 4 1 * *'
    },

    tasks: {
      logRotation: true,
      metricsCleanup: true,
      alertCleanup: true,
      processRestart: false, // Only restart if needed
      dependencyUpdate: false // Only update if needed
    },

    // Maintenance Windows
    windows: [
      {
        name: 'Low Traffic Window',
        start: '02:00',
        end: '04:00',
        timezone: 'UTC',
        allowedTasks: ['logRotation', 'metricsCleanup', 'alertCleanup']
      }
    ]
  },

  // Development Configuration
  development: {
    debug: process.env.NODE_ENV === 'development',
    verbose: process.env.VERBOSE === 'true',
    hotReload: process.env.NODE_ENV === 'development',
    
    // Testing
    testing: {
      enabled: process.env.TESTING_ENABLED === 'true',
      mockPM2: process.env.MOCK_PM2 === 'true',
      testData: process.env.TEST_DATA === 'true'
    }
  },

  // Environment-specific overrides
  environments: {
    development: {
      dashboard: { port: 3001 },
      monitoring: { metricsCollection: false },
      security: { enabled: false }
    },
    
    staging: {
      dashboard: { port: 3002 },
      alerting: { cooldown: 2 * 60 * 1000 },
      recovery: { maxRetries: 2 }
    },
    
    production: {
      dashboard: { port: 3001 },
      alerting: { cooldown: 10 * 60 * 1000 },
      recovery: { maxRetries: 5 },
      security: { enabled: true, authentication: { required: true } }
    }
  }
};
