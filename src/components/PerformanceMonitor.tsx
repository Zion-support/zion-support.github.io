import React, { useEffect, useState } from 'react';
import { Activity } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  isSlow: boolean;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    isSlow: false
  });

  useEffect(() => {
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
      
      const memory = (performance as any).memory;
      const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0; // MB
      
      const isSlow = loadTime > 3000 || memoryUsage > 50; // 3s or 50MB threshold
      
      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(performance.now()),
        memoryUsage: Math.round(memoryUsage * 100) / 100,
        isSlow
      });
    };

    // Measure performance after component mounts
    const timer = setTimeout(measurePerformance, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Only show in development or if performance is poor
  if (process.env.NODE_ENV !== 'development' && !metrics.isSlow) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl z-50">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white flex items-center">
            <Activity className="w-5 h-5 mr-2 text-cyan-400" />
            Performance Monitor
          </h3>
          <button
            onClick={() => setMetrics(prev => ({ ...prev, isSlow: false }))}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ×
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Load Time:</span>
            <span className={metrics.loadTime > 3000 ? 'text-red-400' : 'text-green-400'}>
              {metrics.loadTime}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Memory Usage:</span>
            <span className={metrics.memoryUsage > 50 ? 'text-red-400' : 'text-green-400'}>
              {metrics.memoryUsage}MB
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Render Time:</span>
            <span className="text-blue-400">{metrics.renderTime}ms</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;