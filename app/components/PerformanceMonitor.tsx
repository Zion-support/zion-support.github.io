import React, { useEffect, useState } from 'react';

const PerformanceMonitor: React.FC = () => {
  const [performanceData, setPerformanceData] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0
  });

  useEffect(() => {
    // Monitor performance metrics
    const startTime = performance.now();
    
    const updatePerformanceData = () => {
      const loadTime = performance.now() - startTime;
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
      
      setPerformanceData({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(performance.now() - startTime),
        memoryUsage: Math.round(memoryUsage / 1024 / 1024) // Convert to MB
      });
    };

    // Update performance data every 5 seconds
    const interval = setInterval(updatePerformanceData, 5000);
    
    // Initial update
    updatePerformanceData();

    return () => clearInterval(interval);
  }, []);

  // Only show in development mode
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-3 rounded-lg shadow-lg text-xs z-50">
      <div className="font-semibold mb-2">Performance Monitor</div>
      <div>Load: {performanceData.loadTime}ms</div>
      <div>Memory: {performanceData.memoryUsage}MB</div>
    </div>
  );
};

export default PerformanceMonitor;