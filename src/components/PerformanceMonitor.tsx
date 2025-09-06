<<<<<<< HEAD
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

  return (
    <div className={`fixed top-4 right-4 z-50 p-3 rounded-lg text-xs font-mono ${
      metrics.isSlow 
        ? 'bg-red-100 text-red-800 border border-red-300' 
        : 'bg-green-100 text-green-800 border border-green-300'
    }`}>
      <div className="font-semibold mb-1">Performance</div>
      <div>Load: {metrics.loadTime}ms</div>
      <div>Memory: {metrics.memoryUsage}MB</div>
      {metrics.isSlow && <div className="text-red-600 font-semibold">⚠️ Slow</div>}
    </div>
  );
};

export default PerformanceMonitor;
=======
import React from 'react';
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
