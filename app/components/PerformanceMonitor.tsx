import React, { useState, useEffect } from 'react';
import { Activity, Zap, Clock, TrendingUp } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  renderTime: number;
  interactionTime: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    renderTime: 0,
    interactionTime: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    const measurePerformance = () => {
      // Measure page load time
      const loadTime = performance.now();
      
      // Measure memory usage if available
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
      
      // Measure render time
      const renderTime = performance.getEntriesByType('navigation')[0]?.loadEventEnd || 0;
      
      // Measure interaction time
      const interactionTime = performance.getEntriesByType('measure').find(entry => 
        entry.name === 'interaction'
      )?.duration || 0;

      setMetrics({
        loadTime: Math.round(loadTime),
        memoryUsage: Math.round(memoryUsage / 1024 / 1024), // Convert to MB
        renderTime: Math.round(renderTime),
        interactionTime: Math.round(interactionTime)
      });
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Toggle visibility with keyboard shortcut
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('load', measurePerformance);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (process.env.NODE_ENV !== 'development' || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white text-sm z-50 min-w-[200px]">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-cyan-400 flex items-center">
          <Activity className="w-4 h-4 mr-2" />
          Performance
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-gray-300 flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            Load Time
          </span>
          <span className="text-cyan-400 font-mono">
            {metrics.loadTime}ms
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-300 flex items-center">
            <Zap className="w-3 h-3 mr-1" />
            Memory
          </span>
          <span className="text-cyan-400 font-mono">
            {metrics.memoryUsage}MB
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-300 flex items-center">
            <TrendingUp className="w-3 h-3 mr-1" />
            Render
          </span>
          <span className="text-cyan-400 font-mono">
            {metrics.renderTime}ms
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-white/10 text-xs text-gray-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;