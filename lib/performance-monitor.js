// Performance monitoring utilities
export const performanceMonitor = {
  // Measure page load time
  measurePageLoad: () => {
    if (typeof window !== 'undefined' && window.performance) {
      const [navigation] = window.performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
      return loadTime;
    }
    return 0;
  },
  // Measure component render time
  measureRender: (componentName = 'Component') => {
    const perfLike = typeof globalThis !== 'undefined' && (globalThis as any).performance
      ? (globalThis as any).performance
      : null;
    if (!perfLike) return () => 0;
    const start = perfLike.now();
    return () => {
      const renderTime = perfLike.now() - start;
      return renderTime;
    };
  },
  // Measure bundle size
  measureBundleSize: () => {
    if (typeof window !== 'undefined' && window.performance) {
      const resources = window.performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      const jsResources = resources.filter(
        (resource) => resource.name.includes('.js') && !resource.name.includes('node_modules')
      );
      let totalSize = 0;
      jsResources.forEach((resource) => {
        if (resource.transferSize) {
          totalSize += resource.transferSize;
        }
      });
      return totalSize;
    }
    return 0;
  },
  // Get memory usage (if available)
  getMemoryUsage: () => {
    if (typeof window !== 'undefined' && window.performance && (window.performance as any).memory) {
      const memory = (window.performance as any).memory;
      return {
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit,
      };
    }
    return null;
  },
  // Measure Core Web Vitals
  measureWebVitals: () => {
    if (typeof window === 'undefined') return;
    // Placeholder for web-vitals integration
  },
};