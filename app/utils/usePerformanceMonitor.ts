import { useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage?: number;
}

export const usePerformanceMonitor = (): PerformanceMetrics => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
  });

  useEffect(() => {
    const startTime = performance.now();
    
    const measurePerformance = () => {
      const loadTime = performance.now() - startTime;
      const memoryUsage = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory?.usedJSHeapSize;
      
      setMetrics({
        loadTime,
        renderTime: performance.now() - startTime,
        memoryUsage,
      });
    };

    // Measure after component mount
    const timeoutId = setTimeout(measurePerformance, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('Performance entry:', entry);
      }
    });

    observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  return { measurePerformance };
};
