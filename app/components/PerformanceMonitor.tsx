import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0
  });

  useEffect(() => {
    const startTime = performance.now();
    
    // Measure page load time
    const measureLoadTime = () => {
      const loadTime = performance.now() - startTime;
      setMetrics(prev => ({ ...prev, loadTime }));
    };

    // Measure memory usage
    const measureMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
        setMetrics(prev => ({ ...prev, memoryUsage }));
      }
    };

    // Measure network latency
    const measureNetworkLatency = () => {
      const start = performance.now();
      fetch('/api/ping', { method: 'HEAD' })
        .then(() => {
          const latency = performance.now() - start;
          setMetrics(prev => ({ ...prev, networkLatency: latency }));
        })
        .catch(() => {
          // If ping fails, estimate based on connection type
          const connection = (navigator as any).connection;
          if (connection) {
            const latency = connection.effectiveType === '4g' ? 50 : 
                          connection.effectiveType === '3g' ? 100 : 200;
            setMetrics(prev => ({ ...prev, networkLatency: latency }));
          }
        });
    };

    // Measure render time
    const measureRenderTime = () => {
      const renderTime = performance.now() - startTime;
      setMetrics(prev => ({ ...prev, renderTime }));
    };

    // Run measurements
    measureLoadTime();
    measureMemoryUsage();
    measureNetworkLatency();
    
    // Measure render time after component mounts
    setTimeout(measureRenderTime, 100);

    // Log performance metrics in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', metrics);
    }

    // Report metrics to analytics (if available)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_metrics', {
        load_time: metrics.loadTime,
        render_time: metrics.renderTime,
        memory_usage: metrics.memoryUsage,
        network_latency: metrics.networkLatency
      });
    }
  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg text-xs font-mono z-50">
      <div className="mb-2 font-bold">Performance Monitor</div>
      <div>Load: {metrics.loadTime.toFixed(2)}ms</div>
      <div>Render: {metrics.renderTime.toFixed(2)}ms</div>
      <div>Memory: {metrics.memoryUsage.toFixed(2)}MB</div>
      <div>Network: {metrics.networkLatency.toFixed(2)}ms</div>
    </div>
  );
};

export default PerformanceMonitor;