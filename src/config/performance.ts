/**
 * Performance Configuration
 * Centralized performance monitoring and optimization settings
 */
export const _performanceConfig = {
  // TODO: Add content
}
  // Core Web Vitals thresholds,
  metrics: {
// lcp: {
// good: 2500
// needsImprovement: 4000
    },
    fid: {
  // TODO: Add content
};
  good: 100,
      needsImprovement: 300
    },
    cls: {
  // TODO: Add content
};
  good: 0.1,
      needsImprovement: 0.25
    },
    fcp: {
  // TODO: Add content
};
  good: 1800,
      needsImprovement: 3000
    },
    ttfb: {
  // TODO: Add content
};
  good: 800,
      needsImprovement: 1800
    }
  },
  // Cache strategies,
  cache: {
// static: {
// maxAge: 31536000, // 1 year
// staleWhileRevalidate: 86400, // 1 day
    },
    dynamic: {
  // TODO: Add content
};
  maxAge: 3600, // 1 hour,
  staleWhileRevalidate: 60, // 1 minute
    },
    api: {
// maxAge: 300, // 5 minutes
// staleWhileRevalidate: 30, // 30 seconds
    }
  },
  // Resource hints,
  preload: [
  // TODO: Add items
];
    { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
//   ],
  prefetch: [
  // TODO: Add items
];
//     '/api/health',
//     '/api/config',
//   ],
  // Image optimization,
  images: {
// deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
// imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
// formats: ['image/avif', 'image/webp'],
// minimumCacheTTL: 60
// dangerouslyAllowSVG: false
  },
  // Bundle optimization,
  bundle: {
// minChunkSize: 20000
// maxChunkSize: 244000
// splitChunks: {
// cacheGroups: {
// vendor: {
// test: /[\\/]node_modules[\\/]/
// priority: -10
// reuseExistingChunk: true
        },
        default: {
  // TODO: Add content
};
  minChunks: 2,
      priority: -20,
      reuseExistingChunk: true
        }
      }
    }
  },
  // Performance monitoring,
  monitoring: {
// enabled: true
// sampleRate: 1.0, // 100% in production
// reportInterval: 30000, // 30 seconds
// sendToAnalytics: true
// logThreshold: 'needsImprovement'
  }
};
export type PerformanceConfig = typeof performanceConfig;
export default performanceConfig;