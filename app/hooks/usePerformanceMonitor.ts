'use client';

import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  slowResources: any[];
  fps: number;
}

export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    slowResources: [],
    fps: 0
  });

  useEffect(() => {
    const monitorPerformance = () => {
      // Page load time
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      
      // Resource timing analysis
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      const slowResources = resources.filter(resource => resource.duration > 1000);
      
      // Memory usage (if available)
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
      
      setMetrics(prev => ({
        ...prev,
        loadTime,
        memoryUsage,
        slowResources
      }));
    };

    // Monitor performance after page load
    if (document.readyState === 'complete') {
      monitorPerformance();
    } else {
      window.addEventListener('load', monitorPerformance);
    }

    // Monitor memory usage periodically
    const memoryInterval = setInterval(() => {
      if ((performance as any).memory) {
        const memoryUsage = (performance as any).memory.usedJSHeapSize;
        setMetrics(prev => ({ ...prev, memoryUsage }));
      }
    }, 5000);

    // Monitor FPS
    let lastTime = performance.now();
    let frameCount = 0;
    
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        setMetrics(prev => ({ ...prev, fps: frameCount }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(measureFPS);
    };
    
    requestAnimationFrame(measureFPS);

    return () => {
      window.removeEventListener('load', monitorPerformance);
      clearInterval(memoryInterval);
    };
  }, []);

  return metrics;
};