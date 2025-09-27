import React, { useEffect, useState } from 'react';
import { Activity, Zap, Clock, Database } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  renderTime: number;
  networkLatency: number;
}

const PerformanceMonitor: React.FC<{ show?: boolean }> = ({ show = false }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    renderTime: 0,
    networkLatency: 0
  });

  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    if (!isVisible) return;

    const updateMetrics = () => {
      // Get performance metrics
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;

      // Memory usage (if available)
      const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory;
      const memoryUsage = memory ? Math.round(memory.usedJSHeapSize / 1024 / 1024) : 0;

      // Network latency estimation
      const networkEntries = performance.getEntriesByType('resource');
      const avgLatency = networkEntries.length > 0 
        ? networkEntries.reduce((sum, entry) => sum + (entry.responseEnd - entry.requestStart), 0) / networkEntries.length
        : 0;

      setMetrics({
        loadTime: Math.round(loadTime),
        memoryUsage,
        renderTime: Math.round(performance.now()),
        networkLatency: Math.round(avgLatency)
      });
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 1000);

    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 bg-zion-slate-800 hover:bg-zion-slate-700 text-white p-2 rounded-lg shadow-lg transition-colors z-50"
        aria-label="Show performance monitor"
      >
        <Activity className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 bg-zion-slate-800 text-white p-4 rounded-lg shadow-lg z-50 min-w-[200px] border border-zion-slate-700">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-zion-cyan">Performance</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-zion-slate-light hover:text-white text-xs"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-zion-blue-light" />
            <span className="text-zion-slate-light">Load Time:</span>
          </div>
          <span className="text-white">{metrics.loadTime}ms</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Database className="w-3 h-3 text-zion-purple-light" />
            <span className="text-zion-slate-light">Memory:</span>
          </div>
          <span className="text-white">{metrics.memoryUsage}MB</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Zap className="w-3 h-3 text-zion-cyan" />
            <span className="text-zion-slate-light">Render:</span>
          </div>
          <span className="text-white">{metrics.renderTime}ms</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Activity className="w-3 h-3 text-zion-blue" />
            <span className="text-zion-slate-light">Network:</span>
          </div>
          <span className="text-white">{metrics.networkLatency}ms</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;