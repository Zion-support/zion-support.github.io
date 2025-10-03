
// Ultimate Performance Optimization
export const ultimatePerformanceConfig = {
  // Advanced caching strategies
  caching: {
    static: {
      strategy: 'cacheFirst',
      maxAge: 31536000, // 1 year
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    },
    dynamic: {
      strategy: 'networkFirst',
      maxAge: 86400, // 1 day
      headers: {
        'Cache-Control': 'public, max-age=86400'
      }
    },
    api: {
      strategy: 'staleWhileRevalidate',
      maxAge: 300, // 5 minutes
      headers: {
        'Cache-Control': 'public, max-age=300'
      }
    }
  },

  // Resource optimization
  resources: {
    images: {
      formats: ['webp', 'avif', 'jpg', 'png'],
      quality: 85,
      lazy: true,
      preload: true
    },
    fonts: {
      preload: true,
      display: 'swap',
      subset: true
    },
    scripts: {
      defer: true,
      async: true,
      minify: true,
      compress: true
    }
  },

  // Advanced code splitting
  codeSplitting: {
    chunks: {
      vendor: ['react', 'react-dom', 'react-router-dom'],
      ui: ['@headlessui/react', '@heroicons/react'],
      utils: ['lodash', 'date-fns', 'clsx'],
      charts: ['recharts', 'd3'],
      forms: ['react-hook-form', 'yup'],
      analytics: ['@google-analytics/gtag']
    },
    routes: {
      home: ['/'],
      services: ['/services', '/services/*'],
      blog: ['/blog', '/blog/*'],
      about: ['/about', '/contact', '/careers']
    }
  },

  // Performance monitoring
  monitoring: {
    webVitals: {
      lcp: { threshold: 2500, weight: 0.25 },
      fid: { threshold: 100, weight: 0.25 },
      cls: { threshold: 0.1, weight: 0.25 },
      fcp: { threshold: 1800, weight: 0.125 },
      ttfb: { threshold: 600, weight: 0.125 }
    },
    customMetrics: {
      pageLoad: { threshold: 3000 },
      timeToInteractive: { threshold: 5000 },
      bundleSize: { threshold: 250000 },
      memoryUsage: { threshold: 50000000 }
    }
  }
};
