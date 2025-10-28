export const measurePerformance = (name: string, fn: () => void): void => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
};

export const getPerformanceMetrics = (): PerformanceNavigationTiming | null => {
  if (typeof window === 'undefined') return null;
  return performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
};