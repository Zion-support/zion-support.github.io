import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  networkRequests: number;
}

interface PerformanceMonitorProps {
  children: React.ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    networkRequests: 0
  });

  useEffect(() => {
    // Monitor page load time
    const updateLoadTime = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setMetrics(prev => ({
          ...prev,
          loadTime: navigation.loadEventEnd - navigation.loadEventStart
        }));
      }
    };

    // Monitor memory usage
    const updateMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({
          ...prev,
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024
        }));
      }
    };

    // Monitor network requests
    const updateNetworkRequests = () => {
      const resources = performance.getEntriesByType('resource');
      setMetrics(prev => ({
        ...prev,
        networkRequests: resources.length
      }));
    };

    // Set up performance observer
    const observer = new PerformanceObserver((list) => {
      updateLoadTime();
      updateNetworkRequests();
    });

    observer.observe({ entryTypes: ['navigation', 'measure'] });

    // Set up monitoring
    const interval = setInterval(() => {
      updateMemoryUsage();
      updateNetworkRequests();
    }, 1000);

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