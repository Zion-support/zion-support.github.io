import React, { useEffect, useState } from 'react';

interface AdvancedPerformanceMonitorProps {
  children: React.ReactNode;
  showInProduction?: boolean;
}

const AdvancedPerformanceMonitor: React.FC<AdvancedPerformanceMonitorProps> = ({ 
  children, 
  showInProduction = false 
}) => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkRequests: 0
  });

  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && !showInProduction) {
      return;
    }

    const startTime = performance.now();
    
    // Monitor performance metrics
    const updateMetrics = () => {
      const loadTime = performance.now() - startTime;
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
      
      setMetrics(prev => ({
        ...prev,
        loadTime,
        memoryUsage: memoryUsage / 1024 / 1024, // Convert to MB
        renderTime: performance.now() - startTime
      }));
    };

    // Update metrics on load
    updateMetrics();
    
    // Monitor network requests
    const originalFetch = window.fetch;
    let requestCount = 0;
    
    window.fetch = (...args) => {
      requestCount++;
      setMetrics(prev => ({
        ...prev,
        networkRequests: requestCount
      }));
      return originalFetch(...args);
    };

    // Cleanup
    return () => {
      window.fetch = originalFetch;
    };
  }, [showInProduction]);

  if (process.env.NODE_ENV === 'production' && !showInProduction) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50">
        <div className="space-y-1">
          <div>Load: {metrics.loadTime.toFixed(2)}ms</div>
          <div>Memory: {metrics.memoryUsage.toFixed(2)}MB</div>
          <div>Requests: {metrics.networkRequests}</div>
        </div>
      </div>
    </>
  );
};

export default AdvancedPerformanceMonitor;
