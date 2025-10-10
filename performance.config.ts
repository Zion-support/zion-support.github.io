/**
 * Performance Configuration;
 * Comprehensive performance monitoring and optimization settings;
 */
export const performanceConfig = {
<<<<<<< HEAD
    // Core Web Vitals thresholds;
  webVitals: {,
    lcp: {,
      good: 2500,
      needsImprovement: 4000
  },
    fid: {
    ,
      good: 100,
      needsImprovement: 300
  },
    cls: {
    ,
      good: 0.1,
      needsImprovement: 0.25
  },
    fcp: {
    ,
      good: 1800,
      needsImprovement: 3000
  },
    ttfb: {
    ,
      good: 800,
      needsImprovement: 1800
  },
    inp: {
    ,
      good: 200,
      needsImprovement: 500
  }},

=======
};
  // Core Web Vitals thresholds;
  webVitals: {,
    lcp: {,
      good: 2500;
      needsImprovement: 4000},
    fid: {,
      good: 100;
      needsImprovement: 300},
    cls: {,
      good: 0.1;
      needsImprovement: 0.25},
    fcp: {,
      good: 1800;
      needsImprovement: 3000},
    ttfb: {,
      good: 800;
      needsImprovement: 1800},
    inp: {,
      good: 200;
      needsImprovement: 500}},
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  // Resource loading priorities;
  resourceHints: {,
    preconnect: ['https://fonts.googleapis.com', 'https: //fonts.gstatic.com'],
    dnsPrefetch: ['https://www.google-analytics.com', 'https: //www.googletagmanager.com']},
  // Lazy loading configuration;
  lazyLoading: {
    ,
    imagePlaceholder: 'blur',
    rootMargin: '50px',
<<<<<<< HEAD
    threshold: 0.01,
    enableNativeLazyLoading: true
  },

=======
    threshold: 0.01;
    enableNativeLazyLoading: true},
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  // Caching strategies;
  caching: {
    ,
    staticAssets: {,
      maxAge: 31536000, // 1 year;
      immutable: true
  },
    api: {
    ,
      maxAge: 300, // 5 minutes;
<<<<<<< HEAD
      staleWhileRevalidate: 600, // 10 minutes
  },
    images: {
    ,
      maxAge: 604800, // 1 week
  }},

=======
      staleWhileRevalidate: 600, // 10 minutes},
    images: {,
      maxAge: 604800, // 1 week}},
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  // Bundle optimization;
  bundling: {
    ,
    maxChunkSize: 244000, // ~240KB;
    minChunkSize: 20000, // ~20KB;
<<<<<<< HEAD
    splitChunks: true,
    treeshaking: true
  },

=======
    splitChunks: true;
    treeshaking: true},
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  // Monitoring;
  monitoring: {,
    sampleRate: 0.1, // 10% of requests;
    reportInterval: 30000, // 30 seconds;
<<<<<<< HEAD
    enableLongTaskDetection: true
    enableMemoryMonitoring: true,
export const performanceConfig = {/* TODO: Fix JSX expression */}
=======
    enableLongTaskDetection: true;
    enableMemoryMonitoring: true;
export const performanceConfig = {/* TODO: Fix JSX expression */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    },
    fi,
  d: {/* TODO: Fix JSX expression */};
    },
    cl,
  s: {/* TODO: Fix JSX expression */};
    },
    fc,
  p: {/* TODO: Fix JSX expression */};
    },
    ttf,
  b: {/* TODO: Fix JSX expression */};
    },
    in,
  p: {/* TODO: Fix JSX expression */};
    }},
  // Resource loading priorities,
  resourceHints: {/* TODO: Fix JSX expression */};
  },
  // Lazy loading configuration,
  lazyLoading: {/* TODO: Fix JSX expression */};
  },
  // Caching strategies,
  caching: {/* TODO: Fix JSX expression */};
    },
    ap,
  i: {/* TODO: Fix JSX expression */};
    },
    image,
  s: {/* TODO: Fix JSX expression */};
    }},
  // Bundle optimization,
  bundling: {/* TODO: Fix JSX expression */};
  },
  // Monitoring,
<<<<<<< HEAD
  monitoring: {/* TODO: Fix JSX expression */}
  }}

=======
  monitoring: {/* TODO: Fix JSX expression */};
  }};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
export default performanceConfig;
