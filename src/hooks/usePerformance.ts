import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage?: number;
}

export const usePerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
  });

  useEffect(() => {
    const startTime = performance.now();
    
    // Measure page load time
    const measureLoadTime = () => {
      const loadTime = performance.now() - startTime;
      setMetrics(prev => ({ ...prev, loadTime }));
    };

    // Measure render time
    const measureRenderTime = () => {
      const renderTime = performance.now() - startTime;
      setMetrics(prev => ({ ...prev, renderTime }));
    };

    // Get memory usage if available
    const getMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ 
          ...prev, 
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
        }));
      }
    };

    // Measure when page is fully loaded
    if (document.readyState === 'complete') {
      measureLoadTime();
      measureRenderTime();
      getMemoryUsage();
    } else {
      window.addEventListener('load', () => {
        measureLoadTime();
        measureRenderTime();
        getMemoryUsage();
      });
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', measureLoadTime);
    };
  }, []);

  return metrics;
};