import React, { useState, useEffect, useCallback } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  loadTime?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  firstInputDelay?: number;
  cumulativeLayoutShift?: number;
  timeToFirstByte?: number;
  memoryUsage?: number;
  interactionToNextPaint?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});

  const updateMetrics = useCallback((name: string, value: number) => {
    setMetrics(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    // Measure Core Web Vitals
    onCLS((metric) => {
      updateMetrics('cumulativeLayoutShift', metric.value);
    });

    onINP((metric) => {
      updateMetrics('interactionToNextPaint', metric.value);
    });

    onFCP((metric) => {
      updateMetrics('firstContentfulPaint', metric.value);
    });

    onLCP((metric) => {
      updateMetrics('largestContentfulPaint', metric.value);
    });

    onTTFB((metric) => {
      updateMetrics('timeToFirstByte', metric.value);
    });

    // Measure page load time
    const loadTime = performance.now();
    updateMetrics('loadTime', loadTime);

    // Measure memory usage if available
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      updateMetrics('memoryUsage', memory.usedJSHeapSize / 1024 / 1024); // Convert to MB
    }

    // Show performance monitor in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }

    // Auto-hide after 5 seconds in production
    if (process.env.NODE_ENV === 'production') {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [updateMetrics]);

  // Don't render in production unless there's an issue
  if (process.env.NODE_ENV === 'production' && !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 text-white text-xs font-mono z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-cyan-400 font-semibold">Performance</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        {metrics.loadTime && (
          <div>Load: {metrics.loadTime.toFixed(2)}ms</div>
        )}
        {metrics.firstContentfulPaint && (
          <div>FCP: {metrics.firstContentfulPaint.toFixed(2)}ms</div>
        )}
        {metrics.largestContentfulPaint && (
          <div>LCP: {metrics.largestContentfulPaint.toFixed(2)}ms</div>
        )}
        {metrics.interactionToNextPaint && (
          <div>INP: {metrics.interactionToNextPaint.toFixed(2)}ms</div>
        )}
        {metrics.cumulativeLayoutShift && (
          <div>CLS: {metrics.cumulativeLayoutShift.toFixed(4)}</div>
        )}
        {metrics.timeToFirstByte && (
          <div>TTFB: {metrics.timeToFirstByte.toFixed(2)}ms</div>
        )}
        {metrics.memoryUsage && (
          <div>Memory: {metrics.memoryUsage.toFixed(2)}MB</div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;