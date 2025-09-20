import { useState, useEffect } from 'react';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  renderTime: number;
  isVisible: boolean;
}

export const usePerformance = (): PerformanceMetrics => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memoryUsage: 0,
    renderTime: 0,
    isVisible: true
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateMetrics = () => {
      const memory = (performance as any).memory;
      const newMetrics: PerformanceMetrics = {
        fps: 60, // Simplified - would need proper FPS calculation
        memoryUsage: memory ? Math.round(memory.usedJSHeapSize / 1024 / 1024) : 0,
        renderTime: performance.now(),
        isVisible: document.visibilityState === 'visible'
      };
      setMetrics(newMetrics);
    };

    // Update metrics periodically
    const interval = setInterval(updateMetrics, 1000);
    
    // Update on visibility change
    document.addEventListener('visibilitychange', updateMetrics);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', updateMetrics);
    };
  }, []);

  return metrics;
};