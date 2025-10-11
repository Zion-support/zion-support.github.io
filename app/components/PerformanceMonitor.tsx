'use client';
import React, { useEffect, useState } from 'react';

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0
  });

  useEffect(() => {
    // Only show in development or when performance monitoring is enabled
    const shouldMonitor = process.env.NODE_ENV === 'development' || 
                         localStorage.getItem('performance-monitoring') === 'true';

    if (!shouldMonitor) return;

    const startTime = performance.now();

    // Monitor page load time
    const measureLoadTime = () => {
      const loadTime = performance.now() - startTime;
      setMetrics(prev => ({ ...prev, loadTime }));
    };

    // Monitor memory usage
    const measureMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
        setMetrics(prev => ({ ...prev, memoryUsage }));
      }
    };

    // Monitor render time
    const measureRenderTime = () => {
      const renderTime = performance.now() - startTime;
      setMetrics(prev => ({ ...prev, renderTime }));
    };

    // Set up monitoring
    window.addEventListener('load', measureLoadTime);
    window.addEventListener('load', measureMemoryUsage);
    
    // Measure render time after component mount
    const renderTimer = setTimeout(measureRenderTime, 100);

    // Cleanup
    return () => {
      window.removeEventListener('load', measureLoadTime);
      window.removeEventListener('load', measureMemoryUsage);
      clearTimeout(renderTimer);
    };
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg text-xs font-mono z-50">
      <div className="mb-2 font-bold">Performance Monitor</div>
      <div>Load Time: {metrics.loadTime.toFixed(2)}ms</div>
      <div>Render Time: {metrics.renderTime.toFixed(2)}ms</div>
      <div>Memory: {metrics.memoryUsage.toFixed(2)}MB</div>
    </div>
  );
};

export default PerformanceMonitor;
