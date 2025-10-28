export const monitorPerformance = (): void => {
  if (typeof window === 'undefined') return;
  
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      console.log('Performance entry:', entry);
    });
  });
  
  observer.observe({ entryTypes: ['measure', 'navigation'] });
};