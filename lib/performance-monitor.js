// Performance monitoring utilities
export const performanceMonitor ={
  // Measure page load time
  measurePageLoad: () => {
    if (typeof window !== 'undefined' && window.performance) {
      const [navigation] = window.performance.getEntriesByType('navigation');
      const loadTime = navigation ? (navigation.loadEventEnd - navigation.loadEventStart) : 0;
      return loadTime;
    }
    return 0;
  },

  // Measure component render time
  measureRender: (componentName = 'Component') => {
    const start = performance.now();
    return () => {
      const end = performance.now();
      const renderTime = end - start;
       
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
      return totalSize;
    }
    return 0;
  }
};

export default performanceMonitor;
