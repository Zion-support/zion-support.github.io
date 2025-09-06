import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  isSlow: boolean;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    isSlow: false
  });

  useEffect(() => {
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
      
      const memory = (performance as any).memory;
      const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0; // MB
      
      const isSlow = loadTime > 3000 || memoryUsage > 50; // 3s or 50MB threshold
      
      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(performance.now()),
        memoryUsage: Math.round(memoryUsage * 100) / 100,
        isSlow
      });
    };

    // Measure performance after component mounts
    const timer = setTimeout(measurePerformance, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Only show in development or if performance is poor
  if (process.env.NODE_ENV !== 'development' && !metrics.isSlow) {
    return null;
  }

import React from 'react';
;
