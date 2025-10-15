import React, { useEffect, useState } from 'react';

interface PerformanceMonitorProps {
  children: React.ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkRequests: 0
  });

  useEffect(() => {
    // Monitor performance metrics
    const startTime = performance.now();
    
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          setMetrics(prev => ({
            ...prev,
            loadTime: entry.duration
          }));
        }
      });
    });

    observer.observe({ entryTypes: ['navigation', 'measure'] });

    // Monitor memory usage
    const updateMemoryUsage = () => {
      if ('memory' in performance) {
        setMetrics(prev => ({
          ...prev,
          memoryUsage: (performance as any).memory.usedJSHeapSize / 1024 / 1024
        }));
      }
    };

    // Monitor network requests
    const updateNetworkRequests = () => {
      setMetrics(prev => ({
        ...prev,
        networkRequests: prev.networkRequests + 1
      }));
    };

    // Set up monitoring
    const interval = setInterval(updateMemoryUsage, 1000);
    
    // Cleanup
    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  // Log performance metrics in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', metrics);
    }
  }, [metrics]);

  return (
    <>
      {children}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-2 rounded-lg text-xs font-mono opacity-50 hover:opacity-100 transition-opacity">
          <div>Load: {metrics.loadTime.toFixed(2)}ms</div>
          <div>Memory: {metrics.memoryUsage.toFixed(2)}MB</div>
          <div>Requests: {metrics.networkRequests}</div>
        </div>
      )}
    </>
  );
};

export default PerformanceMonitor;
