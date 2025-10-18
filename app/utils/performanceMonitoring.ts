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
