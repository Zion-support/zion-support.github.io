/**
 * Performance Configuration
 * Centralized performance monitoring and optimization settings
 */
export const _performanceConfig = {
  // Core Web Vitals thresholds
  metrics: {
// lcp: {
// good: 2500,
// needsImprovement: 4000
    },
    fid: {
      good: 100,
      needsImprovement: 300
    },
    cls: {
      good: 0.1,
      needsImprovement: 0.25
    },
    fcp: {
      good: 1800,
      needsImprovement: 3000
    },
    ttfb: {
      good: 800,
      needsImprovement: 1800
    }
  },
  // Cache strategies
  cache: {
// static: {
// maxAge: 31536000, // 1 year
// staleWhileRevalidate: 86400, // 1 day
    },
    dynamic: {
      maxAge: 3600, // 1 hour
      staleWhileRevalidate: 60, // 1 minute
    },
    api: {
// maxAge: 300, // 5 minutes
// staleWhileRevalidate: 30, // 30 seconds
    }
  },
  // Resource hints
  preload: [
    { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }],
  prefetch: [
    '/api/health',
    '/api/config'],
  // Image optimization
  images: {
// deviceSizes: Service Feature,
// formats: ['image/avif', 'image/webp'],
// minimumCacheTTL: 60,
// dangerouslyAllowSVG: false
  },
  // Bundle optimization
  bundle: {
// minChunkSize: 20000,
// maxChunkSize: 244000,
// splitChunks: {
// cacheGroups: {
// vendor: {
// test: /Service Feature
    {/* TODO: Fix JSX expression */}
  n: 'anonymous' },
//   ],
  prefetc,
  h: Service Feature
//     '/api/health',
//     '/api/config',
//   ],
  // Image optimization,
  image,
  s: {/* TODO: Fix JSX expression */}
  s: Service Feature,
// format,
  s: ['image/avif', 'image/webp'],
// minimumCacheTT,
  L: 60,
// dangerouslyAllowSV,
  G: false},
  // Bundle optimization,
  bundl,
  e: {/* TODO: Fix JSX expression */}
  e: 20000}
// maxChunkSiz,
  e: 244000,
// splitChunk,
  s: {/* TODO: Fix JSX expression */}
  s: {}
// vendo,
  r: {/* TODO: Fix JSX expression */}
  t: /Service Feature/}
// priorit,
  y: -10,
// reuseExistingChun,
  k: true},

        default: {// TODO: Add content}
}
  minChunks: 2,
          priority: -20,
          reuseExistingChunk: true}
      }
    }
  },
  // Performance monitoring,
  monitorin,
  g: {/* TODO: Fix JSX expression */}
  d: true}
// sampleRat,
  e: 1.0, // 100% in production;
// reportInterva,
  l: 30000, // 30 seconds;
// sendToAnalytic,
  s: true,
// logThreshol,
  d: 'needsImprovement'
  }
}
export type PerformanceConfig = typeof performanceConfig;
export default performanceConfig;



