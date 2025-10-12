import { useState, useEffect } from 'react';

interface PerformanceData {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

export const usePerformanceMonitor = () => {
  const [performanceData, setPerformanceData] = useState<PerformanceData>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 60,
  });

  useEffect(() => {
    const startTime = performance.now();
    
    const updatePerformanceData = () => {
      const currentTime = performance.now();
      const loadTime = currentTime - startTime;
      
      // Get memory usage if available
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
      
      setPerformanceData(prev => ({
        ...prev,
        loadTime,
        memoryUsage,
        renderTime: currentTime,
      }));
    };

    // Update performance data every second
    const interval = setInterval(updatePerformanceData, 1000);
    
    // Initial update
    updatePerformanceData();

    return () => clearInterval(interval);
  }, []);

  return { performanceData };
};