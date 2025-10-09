import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  isOnline: boolean;
}

const PerformanceMetrics: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    isOnline: navigator.onLine
  });

  useEffect(() => {
    // Measure page load time
    const loadTime = performance.now();
    setMetrics(prev => ({ ...prev, loadTime }));

    // Monitor memory usage
    const updateMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({
          ...prev,
          memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024)
        }));
      }
    };

    // Monitor online status
    const handleOnlineStatus = () => {
      setMetrics(prev => ({ ...prev, isOnline: navigator.onLine }));
    };

    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    // Update memory usage periodically
    const interval = setInterval(updateMemoryUsage, 5000);

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
      clearInterval(interval);
    };
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono z-50">
      <div className="space-y-1">
        <div>Load: {metrics.loadTime.toFixed(0)}ms</div>
        <div>Memory: {metrics.memoryUsage}MB</div>
        <div className={metrics.isOnline ? 'text-green-400' : 'text-red-400'}>
          {metrics.isOnline ? 'Online' : 'Offline'}
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;
