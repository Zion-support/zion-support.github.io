'use client';

import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableConsoleLogging?: boolean;
  updateInterval?: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableConsoleLogging = false,
  updateInterval = 1000
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
  });
  const [performanceScore, setPerformanceScore] = useState(100);

  useEffect(() => {
    const reportWebVitals = (metric: { name: string; value: number }) => {
      // Log to console in development (only on client side)
      if (typeof window !== 'undefined' && enableConsoleLogging) {
        console.log('Web Vital:', metric.name, metric.value);
      }
    };

    // Monitor Core Web Vitals
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number } }).memory;
    
    const getPerformanceScore = (): number => {
      let score = 100;
      if (metrics.renderTime > 1500) score -= 15;
      if (metrics.loadTime > 3000) score -= 20;
      if (metrics.memoryUsage > 50) score -= 10;
      return Math.max(0, score);
    };
    
    const updateMetrics = () => {
      const currentMetrics = {
        loadTime: navigation?.loadEventEnd ?? 0,
        memoryUsage: memory?.usedJSHeapSize ? memory.usedJSHeapSize / 1024 / 1024 : 0,
        renderTime: performance.now(),
        fps: 60, // Placeholder - would need actual FPS calculation
      };
      
      setMetrics(currentMetrics);
      
      const score = getPerformanceScore();
      setPerformanceScore(score);
      
      if (enableConsoleLogging) {
        if (typeof console !== 'undefined') {
          console.group('Performance Metrics');
          console.debug('Metrics', { metrics: currentMetrics });
          console.debug('Score', { score });
          console.groupEnd();
        }
      }
      
      if (onMetricsUpdate) {
        onMetricsUpdate(currentMetrics);
      }
    };

    // Initial update
    updateMetrics();

    // Set up interval for continuous monitoring
    const interval = setInterval(updateMetrics, updateInterval);

    return () => clearInterval(interval);
  }, [onMetricsUpdate, enableConsoleLogging, updateInterval, metrics.renderTime, metrics.loadTime, metrics.memoryUsage]);

  // Only show when explicitly enabled via props
  if (!enableConsoleLogging) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-64">
      <h3 className="text-sm font-semibold text-gray-900 mb-3">
        Performance Monitor
      </h3>
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-600">Load Time:</span>
          <span className="font-mono">{metrics.loadTime.toFixed(2)}ms</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Memory:</span>
          <span className="font-mono">
            {metrics.memoryUsage.toFixed(2)}MB
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">FPS:</span>
          <span className="font-mono">{metrics.fps.toFixed(1)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Score:</span>
          <span className={`font-mono ${performanceScore > 80 ? 'text-green-600' : performanceScore > 60 ? 'text-yellow-600' : 'text-red-600'}`}>
            {performanceScore}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;