'use client';
import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage?: number;
  networkLatency?: number;
  coreWebVitals?: {
    LCP?: number;
    FID?: number;
    CLS?: number;
  };
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    const startTime = performance.now();
    
    // Measure Core Web Vitals
    const measureWebVitals = () => {
      if ('web-vitals' in window) {
        // This would be implemented with the web-vitals library
        return {
          LCP: 0,
          FID: 0,
          CLS: 0
        };
      }
      return {};
    };

    // Measure memory usage
    const getMemoryUsage = () => {
      if ('memory' in performance) {
        return (performance as any).memory.usedJSHeapSize / 1024 / 1024; // MB
      }
      return undefined;
    };

    // Measure network latency
    const measureNetworkLatency = () => {
      const start = performance.now();
      return fetch('/api/ping', { method: 'HEAD' })
        .then(() => performance.now() - start)
        .catch(() => undefined);
    };

    const endTime = performance.now();
    const loadTime = endTime - startTime;

    setMetrics({
      loadTime,
      renderTime: loadTime,
      memoryUsage: getMemoryUsage(),
      coreWebVitals: measureWebVitals()
    });

    // Send metrics to analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'performance_metrics', {
        load_time: loadTime,
        memory_usage: getMemoryUsage(),
        event_category: 'performance'
      });
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      measurePerformance();
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [measurePerformance]);

  if (!isVisible || !metrics) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900/90 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-3 text-xs text-white z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <span className="text-cyan-400 font-semibold">Performance</span>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
          aria-label="Close performance monitor"
        >
          ×
        </button>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className={metrics.loadTime < 1000 ? 'text-green-400' : 'text-yellow-400'}>
            {metrics.loadTime.toFixed(0)}ms
          </span>
        </div>
        {metrics.memoryUsage && (
          <div className="flex justify-between">
            <span>Memory:</span>
            <span className={metrics.memoryUsage < 50 ? 'text-green-400' : 'text-yellow-400'}>
              {metrics.memoryUsage.toFixed(1)}MB
            </span>
          </div>
        )}
        {metrics.coreWebVitals?.LCP && (
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className={metrics.coreWebVitals.LCP < 2500 ? 'text-green-400' : 'text-yellow-400'}>
              {metrics.coreWebVitals.LCP.toFixed(0)}ms
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;