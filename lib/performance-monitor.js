// Performance monitoring utilities
export const performanceMonitor = {
  // Measure page load time
  measurePageLoad: () => {
    if (typeof window !== 'undefined' && window.performance) {
      const entries = window.performance.getEntriesByType('navigation');
      const navigation = entries && entries.length > 0 ? entries[0] : null;
      if (!navigation) return 0;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      // eslint-disable-next-line no-console
      console.log('Page load time:', loadTime, 'ms');
      return loadTime;
    }
    return 0;
  },

  // Measure component render time
  measureRender: (componentName) => {
    const start = performance.now();
    return () => {
      const end = performance.now();
      const renderTime = end - start;
      // eslint-disable-next-line no-console
      console.log(`${componentName} render time:`, renderTime, 'ms');
      return renderTime;
    };
  },

  // Monitor bundle size
  monitorBundleSize: () => {
    if (typeof window !== 'undefined' && window.performance) {
      const resources = window.performance.getEntriesByType('resource');
      const jsResources = resources.filter((r) => typeof r.name === 'string' && r.name.endsWith('.js'));
      const totalSize = jsResources.reduce((sum, r) => sum + (r.transferSize || 0), 0);
      // eslint-disable-next-line no-console
      console.log('Total JS bundle size:', (totalSize / 1024).toFixed(2), 'KB');
      return totalSize;
    }
    return 0;
  }
};

export default performanceMonitor;
