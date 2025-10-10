import React, { useEffect, useState } from 'react';
import { Activity, Zap, Clock, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  isSlowConnection: boolean;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when performance issues are detected
    if (process.env.NODE_ENV !== 'development') return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      
      // Measure render time
      const renderStart = performance.now();
      requestAnimationFrame(() => {
        const renderTime = performance.now() - renderStart;
        
        // Check memory usage (if available)
        const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
        
        // Check connection speed
        const connection = (navigator as any).connection;
        const isSlowConnection = connection ? 
          connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g' : false;

        setMetrics({
          loadTime,
          renderTime,
          memoryUsage: memoryUsage / 1024 / 1024, // Convert to MB
          isSlowConnection
        });

        // Show warning if performance is poor
        if (loadTime > 3000 || renderTime > 16 || memoryUsage > 50) {
          setIsVisible(true);
        }
      });
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  if (!isVisible || !metrics) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900/95 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-4 text-white text-xs z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-1">
          <Activity className="w-3 h-3 text-cyan-400" />
          <span className="font-semibold">Performance</span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className={metrics.loadTime > 3000 ? 'text-red-400' : 'text-green-400'}>
            {metrics.loadTime.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Render Time:</span>
          <span className={metrics.renderTime > 16 ? 'text-red-400' : 'text-green-400'}>
            {metrics.renderTime.toFixed(1)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Memory:</span>
          <span className={metrics.memoryUsage > 50 ? 'text-red-400' : 'text-green-400'}>
            {metrics.memoryUsage.toFixed(1)}MB
          </span>
        </div>
        
        {metrics.isSlowConnection && (
          <div className="flex items-center space-x-1 text-yellow-400">
            <AlertTriangle className="w-3 h-3" />
            <span>Slow Connection</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;