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
