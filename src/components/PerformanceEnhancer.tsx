import React, { useEffect, useState } from 'react';

const PerformanceEnhancer: React.FC = () => {
  const [performanceMetrics, setPerformanceMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0
  });

  useEffect(() => {
    const measurePerformance = () => {
      // Measure page load time
      const loadTime = performance.now();
      
      // Measure memory usage
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
      
      // Measure network latency
      const startTime = performance.now();
      fetch('/api/ping', { method: 'HEAD' })
        .then(() => {
          const latency = performance.now() - startTime;
          setPerformanceMetrics(prev => ({
            ...prev,
            loadTime,
            memoryUsage: memoryUsage / 1024 / 1024, // Convert to MB
            networkLatency: latency
          }));
        })
        .catch(() => {
          setPerformanceMetrics(prev => ({
            ...prev,
            loadTime,
            memoryUsage: memoryUsage / 1024 / 1024,
            networkLatency: 0
          }));
        });
    };

    measurePerformance();
    
    // Set up performance monitoring
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'measure') {
          setPerformanceMetrics(prev => ({
            ...prev,
            renderTime: entry.duration
          }));
        }
      });
    });

    observer.observe({ entryTypes: ['measure'] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg shadow-lg z-50">
      <h3 className="text-sm font-bold mb-2">Performance Metrics</h3>
      <div className="space-y-1 text-xs">
        <div>Load Time: {performanceMetrics.loadTime.toFixed(2)}ms</div>
        <div>Memory: {performanceMetrics.memoryUsage.toFixed(2)}MB</div>
        <div>Latency: {performanceMetrics.networkLatency.toFixed(2)}ms</div>
        <div>Render: {performanceMetrics.renderTime.toFixed(2)}ms</div>
      </div>
    </div>
  );
};

export default PerformanceEnhancer;