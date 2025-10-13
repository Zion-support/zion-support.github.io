import React, { useEffect, useState } from 'react';
import { Activity, Zap, Clock, Database } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
}

interface PerformanceMonitorProps {
  showDetails?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ showDetails = false }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    bundleSize: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Measure performance metrics
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
      
      // Measure render time
      const renderStart = performance.now();
      requestAnimationFrame(() => {
        const renderTime = performance.now() - renderStart;
        
        // Get memory usage (if available)
        const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
        
        // Estimate bundle size (this would be more accurate with webpack-bundle-analyzer)
        const bundleSize = document.querySelectorAll('script[src]').length * 50; // Rough estimate
        
        setMetrics({
          loadTime,
          renderTime,
          memoryUsage: memoryUsage / 1024 / 1024, // Convert to MB
          bundleSize
        });
      });
    };

    // Measure after initial load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Monitor performance over time
    const interval = setInterval(() => {
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
      setMetrics(prev => ({
        ...prev,
        memoryUsage: memoryUsage / 1024 / 1024
      }));
    }, 5000);

    return () => {
      window.removeEventListener('load', measurePerformance);
      clearInterval(interval);
    };
  }, []);

  // Toggle visibility with keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(!isVisible);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isVisible]);

  if (!showDetails && !isVisible) {
    return null;
  }

  const getPerformanceColor = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.warning) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-slate-900/95 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 shadow-xl">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span className="text-white font-medium text-sm">Performance Monitor</span>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white text-xs"
          >
            ×
          </button>
        </div>

        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Clock className="w-3 h-3 text-gray-400" />
              <span className="text-gray-300">Load Time:</span>
            </div>
            <span className={getPerformanceColor(metrics.loadTime, { good: 1000, warning: 3000 })}>
              {metrics.loadTime.toFixed(0)}ms
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="w-3 h-3 text-gray-400" />
              <span className="text-gray-300">Render Time:</span>
            </div>
            <span className={getPerformanceColor(metrics.renderTime, { good: 16, warning: 33 })}>
              {metrics.renderTime.toFixed(1)}ms
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Database className="w-3 h-3 text-gray-400" />
              <span className="text-gray-300">Memory:</span>
            </div>
            <span className={getPerformanceColor(metrics.memoryUsage, { good: 50, warning: 100 })}>
              {metrics.memoryUsage.toFixed(1)}MB
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Activity className="w-3 h-3 text-gray-400" />
              <span className="text-gray-300">Bundle Size:</span>
            </div>
            <span className={getPerformanceColor(metrics.bundleSize, { good: 200, warning: 500 })}>
              ~{metrics.bundleSize}KB
            </span>
          </div>
        </div>

        <div className="mt-3 pt-2 border-t border-gray-700">
          <div className="text-xs text-gray-400">
            Press Ctrl+Shift+P to toggle
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
