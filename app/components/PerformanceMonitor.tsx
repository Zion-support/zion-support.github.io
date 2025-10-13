import React, { useEffect, useState } from 'react';
import { Activity, Zap, Clock, TrendingUp } from 'lucide-react';

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or if user enables it
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('performance-monitor') === 'true';
    
    if (!shouldShow) return;

    setIsVisible(true);

    // Measure performance metrics
    const measurePerformance = () => {
      // Load time
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      
      // Render time (approximate)
      const renderTime = performance.now();
      
      // Memory usage (if available)
      const memoryUsage = (performance as any).memory ? 
        (performance as any).memory.usedJSHeapSize / 1024 / 1024 : 0;
      
      // Network latency (approximate)
      const networkLatency = performance.timing.responseEnd - performance.timing.requestStart;

      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(renderTime),
        memoryUsage: Math.round(memoryUsage * 100) / 100,
        networkLatency: Math.round(networkLatency)
      });
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Update metrics periodically
    const interval = setInterval(measurePerformance, 5000);

    return () => {
      window.removeEventListener('load', measurePerformance);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 left-4 z-50 bg-slate-800/90 backdrop-blur-sm rounded-lg p-4 border border-white/10 shadow-lg">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-white flex items-center">
          <Activity className="w-4 h-4 mr-2" />
          Performance Monitor
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-xs"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex items-center justify-between">
          <span className="text-gray-300">Load Time:</span>
          <span className={`font-mono ${metrics.loadTime < 1000 ? 'text-green-400' : 'text-yellow-400'}`}>
            {metrics.loadTime}ms
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-300">Render Time:</span>
          <span className={`font-mono ${metrics.renderTime < 100 ? 'text-green-400' : 'text-yellow-400'}`}>
            {metrics.renderTime}ms
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-300">Memory:</span>
          <span className={`font-mono ${metrics.memoryUsage < 50 ? 'text-green-400' : 'text-yellow-400'}`}>
            {metrics.memoryUsage}MB
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-300">Network:</span>
          <span className={`font-mono ${metrics.networkLatency < 200 ? 'text-green-400' : 'text-yellow-400'}`}>
            {metrics.networkLatency}ms
          </span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
