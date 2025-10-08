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
    static: {
      maxAge: 31536000, // 1 year
      staleWhileRevalidate: 86400, // 1 day
    },
    dynamic: {
      maxAge: 3600, // 1 hour
      staleWhileRevalidate: 300, // 5 minutes
    },
  },
  // Performance monitoring
  monitoring: {
    enabled: true,
    sampleRate: 1.0,
    reportInterval: 5000, // 5 seconds
  },
  // Optimization settings
  optimization: {
    lazyLoading: true,
    preloading: true,
    compression: true,
    minification: true,
  },
};

export default performanceConfig;