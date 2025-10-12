<<<<<<< HEAD
// Performance metrics utilities
export const getPerformanceMetrics = () => {
  if (typeof window !== 'undefined' && window.performance) {
    return {
      loadTime: window.performance.timing.loadEventEnd - window.performance.timing.navigationStart,
      domContentLoaded: window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart
    };
  }
  return null;
=======
// Utility file: performanceMetrics;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
};