<<<<<<< HEAD
// Performance monitoring utilities

export function performanceMonitoring() {
  return {
    startTiming: (name: string) => performance.mark(`${name}-start`),
    endTiming: (name: string) => {
      performance.mark(`${name}-end`);
      performance.measure(name, `${name}-start`, `${name}-end`);
    },
    getMetrics: () => performance.getEntriesByType('measure')
  };
}
=======
// performance Monitoring
export const performancemonitoring = {
  // Utility functions will be implemented here
  init: () => {
    console.log('performance Monitoring initialized');
  }
};

export default performancemonitoring;
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
