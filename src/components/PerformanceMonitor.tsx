import React, { useEffect, useState, useCallback } from 'react';
import { Zap, Clock, HardDrive, Wifi, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  networkLatency: number;
  bundleSize: number;
  lighthouseScore: number;
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    networkLatency: 0,
    bundleSize: 0,
    lighthouseScore: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const [warnings, setWarnings] = useState<string[]>([]);

  const measurePerformance = useCallback(() => {
    // Measure page load time
    if (performance.timing) {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      setMetrics(prev => ({ ...prev, loadTime }));
    }

    // Measure memory usage (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const memoryUsage = Math.round(memory.usedJSHeapSize / 1024 / 1024 * 100) / 100;
      setMetrics(prev => ({ ...prev, memoryUsage }));
    }

    // Measure network latency
    const startTime = performance.now();
    fetch('/api/ping', { method: 'HEAD' })
      .then(() => {
        const endTime = performance.now();
        const latency = Math.round(endTime - startTime);
        setMetrics(prev => ({ ...prev, networkLatency: latency }));
      })
      .catch(() => {
        // If ping fails, estimate based on navigation timing
        if (performance.timing) {
          const latency = performance.timing.responseEnd - performance.timing.requestStart;
          setMetrics(prev => ({ ...prev, networkLatency: latency }));
        }
      });

    // Estimate bundle size
    const scripts = document.querySelectorAll('script[src]');
    let totalSize = 0;
    scripts.forEach(script => {
      const src = script.getAttribute('src');
      if (src && src.includes('/js/')) {
        totalSize += 50; // Rough estimate in KB
      }
    });
    setMetrics(prev => ({ ...prev, bundleSize: totalSize }));

    // Check for performance issues
    const newWarnings: string[] = [];
    if (metrics.loadTime > 3000) {
      newWarnings.push('Page load time is slow (>3s)');
    }
    if (metrics.memoryUsage > 100) {
      newWarnings.push('High memory usage detected');
    }
    if (metrics.bundleSize > 500) {
      newWarnings.push('Large bundle size detected');
    }
    setWarnings(newWarnings);
  }, [metrics]);

  useEffect(() => {
    // Initial measurement
    const timer = setTimeout(measurePerformance, 1000);

    // Periodic measurements
    const interval = setInterval(measurePerformance, 30000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [measurePerformance]);

  // Performance optimization suggestions
  const getOptimizationTips = () => {
    const tips = [];
    
    if (metrics.loadTime > 3000) {
      tips.push('Consider implementing code splitting and lazy loading');
    }
    if (metrics.memoryUsage > 100) {
      tips.push('Review memory leaks and optimize component lifecycle');
    }
    if (metrics.bundleSize > 500) {
      tips.push('Implement tree shaking and remove unused dependencies');
    }
    
    return tips.length > 0 ? tips : ['Performance is optimal! 🚀'];
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 p-3 bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-full text-cyan-400 hover:text-cyan-300 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 z-50"
        title="Performance Monitor"
      >
        <Zap className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl shadow-black/50 z-50">
      <div className="p-4 border-b border-slate-700/50">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-cyan-400" />
            Performance Monitor
          </h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ×
          </button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Metrics */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-700/50 rounded-lg p-3">
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
              <Clock className="w-4 h-4" />
              Load Time
            </div>
            <div className="text-white font-semibold">
              {metrics.loadTime > 0 ? `${Math.round(metrics.loadTime)}ms` : '...'}
            </div>
          </div>

          <div className="bg-slate-700/50 rounded-lg p-3">
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
              <HardDrive className="w-4 h-4" />
              Memory
            </div>
            <div className="text-white font-semibold">
              {metrics.memoryUsage > 0 ? `${metrics.memoryUsage}MB` : '...'}
            </div>
          </div>

          <div className="bg-slate-700/50 rounded-lg p-3">
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
              <Wifi className="w-4 h-4" />
              Latency
            </div>
            <div className="text-white font-semibold">
              {metrics.networkLatency > 0 ? `${metrics.networkLatency}ms` : '...'}
            </div>
          </div>

          <div className="bg-slate-700/50 rounded-lg p-3">
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
              <HardDrive className="w-4 h-4" />
              Bundle
            </div>
            <div className="text-white font-semibold">
              {metrics.bundleSize > 0 ? `${metrics.bundleSize}KB` : '...'}
            </div>
          </div>
        </div>

        {/* Warnings */}
        {warnings.length > 0 && (
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3">
            <div className="flex items-center gap-2 text-amber-400 mb-2">
              <AlertTriangle className="w-4 h-4" />
              Performance Warnings
            </div>
            <ul className="text-amber-300 text-sm space-y-1">
              {warnings.map((warning, index) => (
                <li key={index}>• {warning}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Optimization Tips */}
        <div className="bg-slate-700/30 rounded-lg p-3">
          <h4 className="text-white font-medium mb-2">Optimization Tips</h4>
          <ul className="text-gray-300 text-sm space-y-1">
            {getOptimizationTips().map((tip, index) => (
              <li key={index}>• {tip}</li>
            ))}
          </ul>
        </div>

        {/* Refresh Button */}
        <button
          onClick={measurePerformance}
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium"
        >
          Refresh Metrics
        </button>
      </div>
    </div>
  );
}
