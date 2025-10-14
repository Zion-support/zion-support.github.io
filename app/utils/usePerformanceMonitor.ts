import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage?: number;
  fps?: number;
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
      
      // Measure render time
      const renderStart = performance.now();
      requestAnimationFrame(() => {
        const renderEnd = performance.now();
        const renderTime = renderEnd - renderStart;
        
        // Get memory usage if available
        const memoryUsage = (performance as any).memory?.usedJSHeapSize;
        
        // Calculate FPS (simplified)
        const fps = 1000 / (renderEnd - renderStart);
        
        setMetrics({
          loadTime,
          renderTime,
          memoryUsage,
          fps
        });
      });
    };

    // Measure performance after component mount
    const timer = setTimeout(measurePerformance, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return metrics;
};

export default usePerformanceMonitor;
