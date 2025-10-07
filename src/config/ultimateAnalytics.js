module.exports = {
  performanceMonitoring: {
    webVitals: {
      lcp: true,
      fid: true,
      cls: true,
      fcp: true,
      ttfb: true,
      inp: true,
    },
    customMetrics: {
      pageLoadTime: true,
      apiResponseTime: true,
      bundleSize: true,
      memoryUsage: true,
      cpuUsage: true,
    },
    realUserMonitoring: true,
    syntheticMonitoring: true,
  },
  errorTracking: {
    clientErrors: {
      javascript: true,
      promise: true,
      resource: true,
      network: true,
    },
    serverErrors: {
      api: true,
      database: true,
      external: true,
    },
    userFeedback: true,
    errorGrouping: true,
    alerting: true,
  },
  analytics: {
    userBehavior: {
      pageViews: true,
      sessions: true,
      bounceRate: true,
      timeOnPage: true,
      scrollDepth: true,
      clickTracking: true,
    },
    conversionTracking: {
      goals: true,
      funnels: true,
      attribution: true,
    },
    a11y: {
      screenReader: true,
      keyboardNavigation: true,
      colorContrast: true,
    },
  },
  businessIntelligence: {
    dashboards: true,
    reports: true,
    kpis: true,
    trends: true,
    forecasting: true,
  },
  timestamp: '2025-10-05T11:17:50.920Z',
};
