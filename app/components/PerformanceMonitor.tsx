import React, { useEffect, useState } from 'react';
import { Activity, Zap, Clock, TrendingUp } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  renderTime: number;
  networkLatency: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    renderTime: 0,
    networkLatency: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when debug mode is enabled
    const isDebugMode = process.env.NODE_ENV === 'development' || 
                       localStorage.getItem('debug-performance') === 'true';
    
    if (!isDebugMode) return;

    setIsVisible(true);

    const measurePerformance = () => {
      // Measure page load time
      const loadTime = performance.now();

      // Measure memory usage (if available)
      const memoryUsage = (performance as any).memory ? 
        (performance as any).memory.usedJSHeapSize / 1024 / 1024 : 0;

      // Measure render time
      const renderTime = performance.now() - loadTime;

      // Simulate network latency (in a real app, you'd measure actual network requests)
      const networkLatency = Math.random() * 100;

      setMetrics({
        loadTime: Math.round(loadTime),
        memoryUsage: Math.round(memoryUsage * 100) / 100,
        renderTime: Math.round(renderTime),
        networkLatency: Math.round(networkLatency)
      });
    };

    // Measure performance after component mounts
    const timeoutId = setTimeout(measurePerformance, 100);

    // Update metrics periodically
    const intervalId = setInterval(measurePerformance, 5000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 text-xs text-white z-50">
      <div className="flex items-center mb-2">
        <Activity className="w-4 h-4 mr-2 text-green-400" />
        <span className="font-semibold">Performance Monitor</span>
      </div>
      
      <div className="space-y-1">
        <div className="flex items-center">
          <Clock className="w-3 h-3 mr-2 text-blue-400" />
          <span>Load: {metrics.loadTime}ms</span>
        </div>
        
        <div className="flex items-center">
          <TrendingUp className="w-3 h-3 mr-2 text-purple-400" />
          <span>Memory: {metrics.memoryUsage}MB</span>
        </div>
        
        <div className="flex items-center">
          <Zap className="w-3 h-3 mr-2 text-yellow-400" />
          <span>Render: {metrics.renderTime}ms</span>
        </div>
        
        <div className="flex items-center">
          <Activity className="w-3 h-3 mr-2 text-cyan-400" />
          <span>Network: {metrics.networkLatency}ms</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
