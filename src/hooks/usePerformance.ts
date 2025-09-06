import { useState, useEffect } from 'react';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  loadTime: number;
}

export const usePerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    memoryUsage: 0,
    loadTime: 0
  });
  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    // Only monitor in development
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    setIsMonitoring(true);

    // Get load time
    const loadTime = performance.now();
    setMetrics(prev => ({ ...prev, loadTime: Math.round(loadTime) }));

    // Monitor FPS
    let lastTime = performance.now();
    let frameCount = 0;

    const measureFPS = () => {
      const currentTime = performance.now();
      frameCount++;

      if (currentTime - lastTime >= 1000) {
        setMetrics(prev => ({ ...prev, fps: frameCount }));
        frameCount = 0;
        lastTime = currentTime;
      }

      requestAnimationFrame(measureFPS);
    };

    // Monitor memory usage
    const measureMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({
          ...prev,
          memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024)
        }));
      }
    };

    measureFPS();
    measureMemory();

    const interval = setInterval(measureMemory, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return { metrics, isMonitoring };
};