import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage?: number;
  errorCount: number;
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    errorCount: 0
  });

  useEffect(() => {
    // Measure page load time
    const loadTime = performance.now();
    
    // Measure render time
    const renderStart = performance.now();
    
    // Simulate render completion
    requestAnimationFrame(() => {
      const renderTime = performance.now() - renderStart;
      
      setMetrics(prev => ({
        ...prev,
        loadTime,
        renderTime
      }));
    });

    // Monitor memory usage if available
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setMetrics(prev => ({
        ...prev,
        memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
      }));
    }

    // Error tracking
    const errorHandler = () => {
      setMetrics(prev => ({
        ...prev,
        errorCount: prev.errorCount + 1
      }));
    };

    window.addEventListener('error', errorHandler);
    window.addEventListener('unhandledrejection', errorHandler);

    return () => {
      window.removeEventListener('error', errorHandler);
      window.removeEventListener('unhandledrejection', errorHandler);
    };
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-3 rounded-lg text-xs font-mono">
      <div>Load: {metrics.loadTime.toFixed(2)}ms</div>
      <div>Render: {metrics.renderTime.toFixed(2)}ms</div>
      {metrics.memoryUsage && <div>Memory: {metrics.memoryUsage.toFixed(2)}MB</div>}
      <div>Errors: {metrics.errorCount}</div>
    </div>
  );
};

export default PerformanceMonitor;
