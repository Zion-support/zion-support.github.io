'use client';

import React, { useEffect, useState, useCallback } from 'react';

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    memoryUsage: 0,
    renderTime: 0
  });

  const measurePerformance = useCallback(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        setMetrics(prev => ({ ...prev, loadTime }));
      }

      if ((performance as any).memory) {
        const memory = (performance as any).memory;
        const memoryUsage = Math.round(memory.usedJSHeapSize / 1024 / 1024);
        setMetrics(prev => ({ ...prev, memoryUsage }));
      }
    }
  }, []);

  useEffect(() => {
    measurePerformance();
    const interval = setInterval(measurePerformance, 5000);
    return () => clearInterval(interval);
  }, [measurePerformance]);

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-slate-800 text-white p-3 rounded-lg shadow-lg text-xs">
      <div className="font-semibold mb-2">Performance Monitor</div>
      <div>Load Time: {metrics.loadTime.toFixed(2)}ms</div>
      <div>Memory: {metrics.memoryUsage}MB</div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;