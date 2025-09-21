import React, { useEffect, useState } from 'react';

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    isVisible: false
  });

  useEffect(() => {
    // Monitor page load time
    const startTime = performance.now();
    
    const handleLoad = () => {
      const loadTime = performance.now() - startTime;
      setMetrics(prev => ({ ...prev, loadTime: Math.round(loadTime) }));
    };

    // Monitor render performance
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'measure') {
          setMetrics(prev => ({ 
            ...prev, 
            renderTime: Math.round(entry.duration) 
          }));
        }
      });
    });

    observer.observe({ entryTypes: ['measure'] });

    // Monitor memory usage (if available)
    if ('memory' in performance) {
      const updateMemory = () => {
        setMetrics(prev => ({ 
          ...prev, 
          memoryUsage: Math.round(performance.memory.usedJSHeapSize / 1024 / 1024) 
        }));
      };
      
      updateMemory();
      const interval = setInterval(updateMemory, 5000);
      
      return () => {
        clearInterval(interval);
        observer.disconnect();
      };
    }

    window.addEventListener('load', handleLoad);
    
    return () => {
      window.removeEventListener('load', handleLoad);
      observer.disconnect();
    };
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-3 text-xs text-white border border-white/20 z-50">
      <div className="font-semibold mb-2 text-cyan-400">Performance</div>
      <div className="space-y-1">
        <div>Load: {metrics.loadTime}ms</div>
        <div>Render: {metrics.renderTime}ms</div>
        {metrics.memoryUsage > 0 && (
          <div>Memory: {metrics.memoryUsage}MB</div>
        )}
      </div>
    </div>
  );
}