import React, { useEffect, useState, ReactNode } from 'react';

interface PerformanceMonitorProps {
  children: ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  const [performanceData, setPerformanceData] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0
  });

  useEffect(() => {
    const startTime = performance.now();
    
    const measurePerformance = () => {
      const endTime = performance.now();
      const loadTime = endTime - startTime;
      
      setPerformanceData({
        loadTime,
        renderTime: performance.now() - startTime,
        memoryUsage: (performance as any).memory?.usedJSHeapSize || 0
      });
    };

    // Measure performance after component mount
    const timer = setTimeout(measurePerformance, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return <>{children}</>;
};

export default PerformanceMonitor;
