// Module for production optimizations
export const productionOptimizations = {
  // Performance monitoring
  enablePerformanceMonitoring: true,
  
  // Code splitting optimization
  codeSplitting: {
    enableLazyLoading: true,
    preloadCriticalChunks: true,
    splitVendorChunks: true,
  },
  
  // Bundle optimization
  bundleOptimization: {
    enableTreeShaking: true,
    minifyAssets: true,
    compressAssets: true,
  },
  
  // Caching strategies
  caching: {
    enableServiceWorker: true,
    cacheStaticAssets: true,
    cacheApiResponses: true,
  },
  
  // Performance budgets
  performanceBudgets: {
    maxBundleSize: 500000, // 500KB
    maxChunkSize: 200000,  // 200KB
    maxAssetSize: 100000,  // 100KB
  },
  
  // Critical resource hints
  resourceHints: {
    enablePreconnect: true,
    enablePrefetch: true,
    enablePreload: true,
  },
};

// Performance monitoring utilities
export const performanceUtils = {
  // Measure component render time
  measureRender: (componentName: string) => {
    if (process.env.NODE_ENV === 'development') {
      console.time(`Render: ${componentName}`);
      return () => console.timeEnd(`Render: ${componentName}`);
    }
    return () => {};
  },
  
  // Measure async operations
  measureAsync: async <T>(
    operationName: string,
    operation: () => Promise<T>
  ): Promise<T> => {
    const start = performance.now();
    try {
      const result = await operation();
      const end = performance.now();
      console.log(`${operationName} took ${end - start}ms`);
      return result;
    } catch (error) {
      const end = performance.now();
      console.error(`${operationName} failed after ${end - start}ms:`, error);
      throw error;
    }
  },
};