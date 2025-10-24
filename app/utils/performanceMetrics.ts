export const performanceMetrics = {
  getLoadTime: () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      return performance.timing.loadEventEnd - performance.timing.navigationStart;
    }
    return 0;
  },
  
  getFirstContentfulPaint: () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const paintEntries = performance.getEntriesByType('paint');
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      return fcp ? fcp.startTime : 0;
    }
    return 0;
  }
};
