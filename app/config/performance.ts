/**
 * Performance Configuration
 * Centralized performance monitoring and optimization settings
 */
export const performanceConfig = {
  // Core Web Vitals thresholds
  metrics: {
    lcp: {
      good: 2500,
      needsImprovement: 4000,
    },
    fid: {
      good: 100,
      needsImprovement: 300,
    },
    cls: {
      good: 0.1,
      needsImprovement: 0.25,
    },
    fcp: {
      good: 1800,
      needsImprovement: 3000,
    },
    ttfb: {
      good: 800,
      needsImprovement: 1800,
    },
  },
  // Cache strategies
  cache: {
    defaultTTL: 5 * 60 * 1000, // 5 minutes
    maxSize: 100,
    enableCompression: true,
  },
  // Performance monitoring
  monitoring: {
    enableWebVitals: true,
    enableResourceTiming: true,
    enableUserTiming: true,
    sampleRate: 1.0,
  },
  // Optimization settings
  optimization: {
    enableLazyLoading: true,
    enablePreloading: true,
    enableCodeSplitting: true,
    enableImageOptimization: true,
  },
  // Reporting
  reporting: {
    enableConsoleLogging: process.env.NODE_ENV === 'development',
    enableAnalytics: true,
    batchSize: 10,
    flushInterval: 30000, // 30 seconds
  },
} as const;

export type PerformanceConfig = typeof performanceConfig;