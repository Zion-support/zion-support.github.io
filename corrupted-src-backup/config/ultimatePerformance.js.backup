module.exports = {
  nextjsOptimizations: {
    experimental: {
      optimizeCss: true,
      optimizePackageImports: ['@mui/material', '@mui/icons-material'],
      turbo: {
        rules: {
          '*.svg': {
            loaders: ['@svgr/webpack'],
            as: '*.js',
          },
        },
      },
    },
    compiler: {
      removeConsole: false,
      styledComponents: true,
    },
    images: {
      formats: ['image/webp', 'image/avif'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      minimumCacheTTL: 31536000,
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
  },
  advancedCaching: {
    staticAssets: {
      maxAge: 31536000,
      immutable: true,
    },
    apiResponses: {
      maxAge: 300,
      staleWhileRevalidate: 86400,
    },
    dynamicContent: {
      maxAge: 3600,
      staleWhileRevalidate: 86400,
    },
    serviceWorker: {
      cacheFirst: ['/static/', '/images/', '/fonts/'],
      networkFirst: ['/api/', '/_next/static/'],
      staleWhileRevalidate: ['/'],
    },
  },
  bundleOptimization: {
    codeSplitting: {
      chunks: 'all',
      maxInitialRequests: 30,
      maxAsyncRequests: 30,
      cacheGroups: {
        vendor: {
          test: {},
          name: 'vendors',
          chunks: 'all',
          priority: 10,
        },
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          enforce: true,
          priority: 5,
        },
        styles: {
          name: 'styles',
          test: {},
          chunks: 'all',
          enforce: true,
        },
      },
    },
    treeShaking: {
      usedExports: true,
      sideEffects: false,
      moduleConcatenation: true,
    },
    compression: {
      gzip: true,
      brotli: true,
      threshold: 1024,
      minRatio: 0.8,
    },
  },
  memoryOptimization: {
    lazyLoading: {
      images: true,
      components: true,
      routes: true,
      intersectionObserver: true,
    },
    memoryManagement: {
      cleanupIntervals: true,
      weakReferences: true,
      garbageCollection: true,
    },
  },
<<<<<<< HEAD:src/config/ultimatePerformance.js
  timestamp: '2025-10-03T22:24:50.021Z'
};

module.exports = {
  nextjsOptimizations: {
    experimental: {
      optimizeCss: true,
      optimizePackageImports: ["@mui/material", "@mui/icons-material"],
      turbo: {
        rules: {
          "*.svg": {
            loaders: ["@svgr/webpack"],
            as: "*.js"
          }
        }
      }
    },
    compiler: {
      removeConsole: false,
      styledComponents: true
    },
    images: {
      formats: ["image/webp", "image/avif"],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      minimumCacheTTL: 31536000,
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
    }
  },
  advancedCaching: {
    staticAssets: {
      maxAge: 31536000,
      immutable: true
    },
    apiResponses: {
      maxAge: 300,
      staleWhileRevalidate: 86400
    },
    dynamicContent: {
      maxAge: 3600,
      staleWhileRevalidate: 86400
    },
    serviceWorker: {
      cacheFirst: ["/static/", "/images/", "/fonts/"],
      networkFirst: ["/api/", "/_next/static/"],
      staleWhileRevalidate: ["/"]
    }
  },
  bundleOptimization: {
    codeSplitting: {
      chunks: "all",
      maxInitialRequests: 30,
      maxAsyncRequests: 30,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
          priority: 10
        },
        common: {
          name: "common",
          minChunks: 2,
          chunks: "all",
          enforce: true,
          priority: 5
        },
        styles: {
          name: "styles",
          test: /\\.css$/,
          chunks: "all",
          enforce: true
        }
      }
    },
    treeShaking: {
      usedExports: true,
      sideEffects: false,
      moduleConcatenation: true
    },
    compression: {
      gzip: true,
      brotli: true,
      threshold: 1024,
      minRatio: 0.8
    }
  },
  memoryOptimization: {
    lazyLoading: {
      images: true,
      components: true,
      routes: true,
      intersectionObserver: true
    },
    memoryManagement: {
      cleanupIntervals: true,
      weakReferences: true,
      garbageCollection: true
    }
  },
  timestamp: "2025-10-03T22:24:50.021Z"
=======
  timestamp: '2025-10-06T04:49:10.506Z',
>>>>>>> origin/main:corrupted-src-backup/config/ultimatePerformance.js
};
