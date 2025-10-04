// Performance monitoring configuration
export const performanceConfig = {
  // Core Web Vitals thresholds
  thresholds: {
    CLS: 0.1,
    FID: 100,
    FCP: 1800,
    LCP: 2500,
    TTFB: 800
  },
  
  // Monitoring intervals
  monitoring: {
    interval: 5000, // 5 seconds
    enabled: process.env.NODE_ENV === 'production'
  },
  
  // Reporting
  reporting: {
    endpoint: '/api/performance',
    batchSize: 10,
    flushInterval: 30000 // 30 seconds
  }
};

export default performanceConfig;