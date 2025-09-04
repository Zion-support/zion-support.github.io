import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
<<<<<<< HEAD
  renderTime: number}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    renderTime: 0
  });

=======
  renderTime: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    renderTime: 0
  });

>>>>>>> cursor/test-and-fix-pm2-automations-and-merge-2088
  useEffect(() => {
    const startTime = performance.now();
    
    // Measure page load time
    if (window.performance.timing) {
      const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
<<<<<<< HEAD
      setMetrics(prev => ({ ...prev, loadTime }))}
=======
      setMetrics(prev => ({ ...prev, loadTime }));
    }
>>>>>>> cursor/test-and-fix-pm2-automations-and-merge-2088

    // Measure memory usage (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setMetrics(prev => ({ 
        ...prev, 
        memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024) 
<<<<<<< HEAD
      }))}

    // Measure render time
    const endTime = performance.now();
    setMetrics(prev => ({ ...prev, renderTime: Math.round(endTime - startTime) }))}, []);
=======
      }));
    }

    // Measure render time
    const endTime = performance.now();
    setMetrics(prev => ({ ...prev, renderTime: Math.round(endTime - startTime) }));
  }, []);
>>>>>>> cursor/test-and-fix-pm2-automations-and-merge-2088

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-3 rounded">
          <div className="text-sm text-gray-600">Load Time</div>
          <div className="text-2xl font-bold text-blue-600">{metrics.loadTime}ms</div>
        </div>
        <div className="bg-white p-3 rounded">
          <div className="text-sm text-gray-600">Memory Usage</div>
          <div className="text-2xl font-bold text-green-600">{metrics.memoryUsage}MB</div>
        </div>
        <div className="bg-white p-3 rounded">
          <div className="text-sm text-gray-600">Render Time</div>
          <div className="text-2xl font-bold text-purple-600">{metrics.renderTime}ms</div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  )};
=======
  );
};
>>>>>>> cursor/test-and-fix-pm2-automations-and-merge-2088

export default PerformanceMonitor;
