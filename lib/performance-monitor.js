// Performance monitoring utilities
export const performanceMonitor = {
  // Measure page load time
  measurePageLoad: () => {
    if (typeof window !== 'undefined' && window.performance) {
      const [navigation] = window.performance.getEntriesByType('navigation');
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      // console.log('Page load time:', loadTime, 'ms');
      return loadTime;
    }
    return 0;
  },

  // Measure component render time
  measureRender: (componentName = 'Component') => {
    const perfLike =
      typeof globalThis !== 'undefined' && globalThis.performance
        ? globalThis.performance
        : null;
    if (!perfLike) return 0;
    const start = perfLike.now();
    return () => {
      const renderTime = perfLike.now() - start;
      // console.log(`${componentName} render time:`, renderTime, 'ms');
      return renderTime;
    };
  },

  // Measure bundle size
  measureBundleSize: () => {
    if (typeof window !== 'undefined' && window.performance) {
      const resources = window.performance.getEntriesByType('resource');
      const jsResources = resources.filter(resource => 
        resource.name.includes('.js') && !resource.name.includes('node_modules')
      );
      
      let totalSize = 0;
      jsResources.forEach(resource => {
        if (resource.transferSize) {
          totalSize += resource.transferSize;
        }
      });
      
      // console.log('Total JS bundle size:', (totalSize / 1024).toFixed(2), 'KB');
      return totalSize;
    }
    return 0;
  },

  // Get memory usage (if available)
  getMemoryUsage: () => {
    if (typeof window !== 'undefined' && window.performance && window.performance.memory) {
      const memory = window.performance.memory;
      return {
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit
      };
    }
    return null;
  },

  // Measure Core Web Vitals
  measureWebVitals: () => {
    if (typeof window === 'undefined') return;
    
    // This would typically be implemented with the web-vitals library
    // For now, we'll just log that it's available
    console.log('Web Vitals monitoring available');
  }
};