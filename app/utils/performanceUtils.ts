// Performance utility functions
export const measurePerformance = (name: string, fn: () => void): number => {
  const start = performance.now();
  fn();
  const end = performance.now();
  const duration = end - start;
  
  console.log(`${name} took ${duration.toFixed(2)}ms`);
  return duration;
};

export const measureAsyncPerformance = async (name: string, fn: () => Promise<void>): Promise<number> => {
  const start = performance.now();
  await fn();
  const end = performance.now();
  const duration = end - start;
  
  console.log(`${name} took ${duration.toFixed(2)}ms`);
  return duration;
};

export const getMemoryUsage = (): number => {
  if ('memory' in performance) {
    return (performance as { memory: { usedJSHeapSize: number } }).memory.usedJSHeapSize;
  }
  return 0;
};

export const isPerformanceSupported = (): boolean => {
  return 'performance' in window && 'now' in performance;
};
