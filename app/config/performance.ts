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
      staleWhileRevalidate: 60, // 1 minute
    },
    api: {
      maxAge: 300, // 5 minutes
      staleWhileRevalidate: 30, // 30 seconds
    },
  },
  // Resource hints
  preload: [
    { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
  ],
  prefetch: [
    '/api/health',
    '/api/config',
  ],
  // Image optimization
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
  },
  // Bundle optimization
  bundle: {
    minChunkSize: 20000,
    maxChunkSize: 244000,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  // Performance monitoring
  monitoring: {
    enabled: true,
    sampleRate: 1.0, // 100% in production
    reportInterval: 30000, // 30 seconds
    sendToAnalytics: true,
    logThreshold: 'needsImprovement',
  },
};
export type PerformanceConfig = typeof performanceConfig;
export default performanceConfig;
