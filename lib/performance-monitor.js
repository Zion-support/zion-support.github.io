// Performance monitoring utilities
export const performanceMonitor = {
  // Measure page load time
  measurePageLoad: () => {
    if (typeof window !== 'undefined' && window.performance) {
      const [navigation] = window.performance.getEntriesByType('navigation');
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        if (typeof console !== 'undefined' && console.log) console.log('Page load time:', loadTime, 'ms');
        return loadTime;
      }
    }
    return 0;
  },

  // Measure component render time
  measureRender: (componentName) => {
    const [start] = [performance.now()];
    return () => {
      const [end] = [performance.now()];
      const renderTime = end - start;
      if (typeof console !== 'undefined' && console.log) console.log(`${componentName} render time:`, renderTime, 'ms');
      return renderTime;
    };
  },

  // Monitor bundle size
  monitorBundleSize: () => {
    if (typeof window !== 'undefined' && window.performance) {
      const resources = window.performance.getEntriesByType('resource');
      const jsResources = resources.filter((resource) => resource.name.endsWith('.js'));
      const totalSize = jsResources.reduce((sum, resource) => sum + (resource.transferSize || 0), 0);
      if (typeof console !== 'undefined' && console.log) console.log('Total JS bundle size:', (totalSize / 1024).toFixed(2), 'KB');
      return totalSize;
    }
    return 0;
  }
};

export default performanceMonitor;
