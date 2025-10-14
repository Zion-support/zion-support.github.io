import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage?: number;
}

export const usePerformanceMonitor = (): PerformanceMetrics => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0
  });

  useEffect(() => {
    const startTime = performance.now();
    
    const measurePerformance = () => {
      const endTime = performance.now();
      const loadTime = endTime - startTime;
      
      setMetrics(prev => ({
        ...prev,
        loadTime,
        renderTime: performance.now() - startTime,
        memoryUsage: (performance as any).memory?.usedJSHeapSize
      }));
    };

    // Measure after component mount
    const timeoutId = setTimeout(measurePerformance, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return metrics;
};