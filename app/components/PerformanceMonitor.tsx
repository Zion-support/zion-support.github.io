'use client';

import React, { useEffect, useState } from 'react';
import { PerformanceMonitorProps } from 'lucide-react';

interface PerformanceMonitorProps {
  children: React.ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0
  });

  useEffect(() => {
    // Monitor performance metrics
    const startTime = performance.now();
    
    const measurePerformance = () => {
      const loadTime = performance.now() - startTime;
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
      
      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(performance.now() - startTime),
        memoryUsage: Math.round(memoryUsage / 1024 / 1024) // Convert to MB
      });
    };

    // Measure after component mount
    const timeoutId = setTimeout(measurePerformance, 100);

    // Cleanup
    return () => clearTimeout(timeoutId);
  }, []);

  // Only show metrics in development
  if (process.env.NODE_ENV !== 'development') {
    return <>{children}</>;
  }

  return (
    <div className="performance-monitor">
      {children}
      <div className="fixed bottom-4 right-4 bg-black/80 text-white p-2 rounded text-xs font-mono">
        <div>Load: {metrics.loadTime}ms</div>
        <div>Render: {metrics.renderTime}ms</div>
        <div>Memory: {metrics.memoryUsage}MB</div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;