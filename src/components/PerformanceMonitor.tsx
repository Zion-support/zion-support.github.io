import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
  errorRate: number;
  uptime: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0,
    errorRate: 0,
    uptime: 0
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
      const renderTime = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      
      // Memory usage (if available)
      const memoryInfo = (performance as any).memory;
      const memoryUsage = memoryInfo ? Math.round(memoryInfo.usedJSHeapSize / 1048576) : 0;

      // Network latency (simplified)
      const networkLatency = navigation ? navigation.responseEnd - navigation.requestStart : 0;

      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(renderTime),
        memoryUsage,
        networkLatency: Math.round(networkLatency),
        errorRate: 0, // Would need error tracking implementation
        uptime: Math.round(performance.now())
      });
    };

    measurePerformance();

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsMonitoring(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (!isMonitoring) return null;

  return (
    <div className="fixed top-4 right-4 bg-black/90 text-white p-4 rounded-lg text-sm font-mono z-50 backdrop-blur-sm border border-white/20">
      <div className="font-bold mb-3 text-green-400">Performance Monitor</div>
      <div className="space-y-1">
        <div>Load Time: <span className="text-green-400">{metrics.loadTime}ms</span></div>
        <div>Render Time: <span className="text-blue-400">{metrics.renderTime}ms</span></div>
        <div>Memory: <span className="text-yellow-400">{metrics.memoryUsage}MB</span></div>
        <div>Network: <span className="text-purple-400">{metrics.networkLatency}ms</span></div>
        <div>Uptime: <span className="text-cyan-400">{Math.round(metrics.uptime / 1000)}s</span></div>
        <div>Error Rate: <span className="text-red-400">{metrics.errorRate}%</span></div>
      </div>
      <div className="mt-3 text-gray-400 text-xs">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;