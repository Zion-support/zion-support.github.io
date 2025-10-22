<<<<<<< HEAD
// Performance metrics utilities

export function performanceMetrics() {
  return {
    getNavigationTiming: () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      return {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        totalTime: navigation.loadEventEnd - navigation.fetchStart
      };
    },
    getResourceTiming: () => {
      return performance.getEntriesByType('resource');
    }
  };
}
=======
// performance Metrics
export const performancemetrics = {
  // Utility functions will be implemented here
  init: () => {
    console.log('performance Metrics initialized');
  }
};

export default performancemetrics;
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
