/**
 * Performance Configuration
 * Comprehensive performance monitoring and optimization settings
 */

export const performanceConfig = {
  // Core Web Vitals thresholds
  webVitals: {
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
    inp: {
      good: 200,
      needsImprovement: 500,
    },
  },

  // Resource loading priorities
  resourceHints: {
    preconnect: ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
    dnsPrefetch: ['https://www.google-analytics.com', 'https://www.googletagmanager.com'],
  },

  // Lazy loading configuration
  lazyLoading: {
    imagePlaceholder: 'blur',
    rootMargin: '50px',
    threshold: 0.01,
    enableNativeLazyLoading: true,
  },

  // Caching strategies
  caching: {
    staticAssets: {
      maxAge: 31536000, // 1 year
      immutable: true,
    },
    api: {
      maxAge: 300, // 5 minutes
      staleWhileRevalidate: 600, // 10 minutes
    },
    images: {
      maxAge: 604800, // 1 week
    },
  },

  // Bundle optimization
  bundling: {
    maxChunkSize: 244000, // ~240KB
    minChunkSize: 20000, // ~20KB
    splitChunks: true,
    treeshaking: true,
  },

  // Monitoring
  monitoring: {
    sampleRate: 0.1, // 10% of requests
    reportInterval: 30000, // 30 seconds
    enableLongTaskDetection: true,
    enableMemoryMonitoring: true,
  },
};

export default performanceConfig;
