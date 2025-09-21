// Performance monitoring and optimization configuration
const performanceConfig = {
  // Bundle analysis
  bundleAnalyzer: {
    enabled: process.env.ANALYZE === 'true',
    openAnalyzer: true,
  },

  // Performance budgets
  budgets: {
    maxBundleSize: 250000, // 250KB
    maxInitialLoad: 500000, // 500KB
    maxLazyLoad: 100000, // 100KB
  },

  // Caching strategies
  caching: {
    staticAssets: {
      maxAge: 31536000, // 1 year
    },
    apiResponses: {
      maxAge: 3600, // 1 hour
    },
    images: {
      maxAge: 86400, // 1 day
    },
  },

  // Compression
  compression: {
    enabled: true,
    threshold: 1024, // 1KB
    level: 6,
  },

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    quality: 80,
    sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },

  // Code splitting
  codeSplitting: {
    strategy: 'dynamic',
    chunkSizeWarningLimit: 1000000, // 1MB
  },

  // Preloading strategies
  preloading: {
    critical: true,
    hover: true,
    routeChange: true,
  },

  // Monitoring
  monitoring: {
    webVitals: true,
    performanceObserver: true,
    memoryUsage: true,
  },
};

module.exports = performanceConfig;