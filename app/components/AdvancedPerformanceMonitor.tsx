'use client';
import React, { useState, useEffect } from 'react';
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number;
  fid: number;
  fcp: number;
  lcp: number;
  ttfb: number;
  memory?: number;
  loadTime?: number;
}

interface AdvancedPerformanceMonitorProps {
  enabled?: boolean;
  reportToAnalytics?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const AdvancedPerformanceMonitor: React.FC<AdvancedPerformanceMonitorProps> = ({
  enabled = true,
  reportToAnalytics = false,
  onMetricsUpdate
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: 0,
    fid: 0,
    fcp: 0,
    lcp: 0,
    ttfb: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    // Measure Core Web Vitals
    try {
      onCLS((metric: any) => {
        setMetrics(prev => ({ ...prev, cls: metric.value }));
      });

      onFID((metric: any) => {
        setMetrics(prev => ({ ...prev, fid: metric.value }));
      });

      onFCP((metric: any) => {
        setMetrics(prev => ({ ...prev, fcp: metric.value }));
      });

      onLCP((metric: any) => {
        setMetrics(prev => ({ ...prev, lcp: metric.value }));
      });

      onTTFB((metric: any) => {
        setMetrics(prev => ({ ...prev, ttfb: metric.value }));
      });
    } catch (error) {
      console.error('Error measuring Core Web Vitals:', error);
    }

    // Measure additional performance metrics
    const measureMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({
          ...prev,
          memory: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
        }));
      }
    };

    const measureLoadTime = () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      setMetrics(prev => ({ ...prev, loadTime }));
    };

    // Measure memory usage
    measureMemory();

    // Measure load time
    measureLoadTime();

    // Report metrics to analytics if enabled
    if (reportToAnalytics) {
      // This would integrate with your analytics service
      console.log('Performance metrics:', metrics);
    }

    // Call the callback if provided
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }
  }, [enabled, reportToAnalytics, onMetricsUpdate, metrics]);

  // Toggle visibility with keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'M') {
        event.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 bg-purple-600 text-white p-2 rounded-full shadow-lg hover:bg-purple-700 transition-colors z-50"
        aria-label="Open performance monitor"
        title="Performance Monitor (Ctrl+Shift+M)"
      >
        📊
      </button>
    );
  }

  const getScoreColor = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="fixed bottom-4 left-4 bg-gray-900 text-white p-4 rounded-lg shadow-xl border border-gray-700 z-50 max-w-sm">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
          aria-label="Close performance monitor"
        >
          ×
        </button>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}>
            {metrics.cls.toFixed(3)}
          </span>
        </div>
        <div className="flex justify-between">
          <span>FID:</span>
          <span className={getScoreColor(metrics.fid, { good: 100, needsImprovement: 300 })}>
            {metrics.fid.toFixed(1)}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={getScoreColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}>
            {metrics.fcp.toFixed(0)}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={getScoreColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}>
            {metrics.lcp.toFixed(0)}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={getScoreColor(metrics.ttfb, { good: 800, needsImprovement: 1800 })}>
            {metrics.ttfb.toFixed(0)}ms
          </span>
        </div>
        {metrics.memory && (
          <div className="flex justify-between">
            <span>Memory:</span>
            <span className="text-blue-400">
              {metrics.memory.toFixed(1)}MB
            </span>
          </div>
        )}
        {metrics.loadTime && (
          <div className="flex justify-between">
            <span>Load Time:</span>
            <span className="text-blue-400">
              {metrics.loadTime.toFixed(0)}ms
            </span>
          </div>
        )}
      </div>

      <div className="mt-3 text-xs text-gray-400">
        Press Ctrl+Shift+M to toggle
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;