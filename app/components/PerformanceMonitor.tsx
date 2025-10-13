import React, { useEffect, useState } from 'react';

interface PerformanceMonitorProps {
  children: React.ReactNode;
  showDetails?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children, showDetails = false }) => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0
  });

  useEffect(() => {
    const startTime = performance.now();
    
    const measurePerformance = () => {
      const endTime = performance.now();
      const loadTime = endTime - startTime;
      
      setMetrics(prev => ({
        ...prev,
        loadTime: Math.round(loadTime)
      }));
    };

    // Measure initial load time
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Monitor memory usage if available
    if ('memory' in performance) {
      const updateMemoryUsage = () => {
        setMetrics(prev => ({
          ...prev,
          memoryUsage: Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024)
        }));
      };
      
      updateMemoryUsage();
      const interval = setInterval(updateMemoryUsage, 5000);
      
      return () => {
        clearInterval(interval);
        window.removeEventListener('load', measurePerformance);
      };
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  return (
    <>
      {children}
      {showDetails && process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono z-50">
          <div>Load: {metrics.loadTime}ms</div>
          <div>Memory: {metrics.memoryUsage}MB</div>
        </div>
      )}
    </>
  );
};

export default PerformanceMonitor;