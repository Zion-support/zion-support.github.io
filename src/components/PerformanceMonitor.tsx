import React, { useState, useEffect } from 'react';
import { usePerformance } from '../hooks/usePerformance';

const PerformanceMonitor: React.FC = () => {
  const metrics = usePerformance();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-3 rounded-lg shadow-lg text-xs font-mono z-50">
      <div className="mb-2 font-semibold">Performance</div>
      <div>Render: {metrics.renderTime}ms</div>
      <div>Load: {metrics.loadTime}ms</div>
      {metrics.memoryUsage && (
        <div>Memory: {metrics.memoryUsage}MB</div>
      )}
    </div>
  );
};

export default PerformanceMonitor;