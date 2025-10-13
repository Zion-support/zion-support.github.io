import React, { useEffect, useState } from 'react';

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0
  });

  useEffect(() => {
    // Monitor performance metrics
    const measurePerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
        
        const memory = (performance as any).memory;
        const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0;

        setMetrics({
          loadTime: Math.round(loadTime),
          renderTime: Math.round(performance.now()),
          memoryUsage: Math.round(memoryUsage)
        });
      }
    };

    // Measure performance after component mount
    const timer = setTimeout(measurePerformance, 1000);

    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }

    return () => clearTimeout(timer);
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-3 rounded-lg text-xs font-mono z-50 border border-slate-600">
      <div className="mb-2 font-semibold text-cyan-400">Performance</div>
      <div>Load: {metrics.loadTime}ms</div>
      <div>Render: {metrics.renderTime}ms</div>
      <div>Memory: {metrics.memoryUsage}MB</div>
    </div>
  );
};

export default PerformanceMonitor;
