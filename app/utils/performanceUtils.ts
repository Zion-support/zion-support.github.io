export const performanceUtils = {
  measure: (name: string, fn: () => void) => {
    performance.mark(name + '-start');
    fn();
    performance.mark(name + '-end');
    performance.measure(name, name + '-start', name + '-end');
  },
  
  getMetrics: () => {
    return performance.getEntriesByType('measure');
  }
};
