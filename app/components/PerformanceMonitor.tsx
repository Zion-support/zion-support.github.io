import React, { useState, useEffect, useCallback } from 'react';

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

  const getMetricColor = useCallback((value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.poor) return 'text-yellow-600';
    return 'text-red-600';
  }, []);

  const formatMetric = useCallback((value?: number) => {
    if (!value) return 'N/A';
    return `${value.toFixed(0)}ms`;
  }, []);

  useEffect(() => {
    const collectMetrics = () => {
      const newMetrics: PerformanceMetrics = {};

      // Basic load time
      if (performance.timing) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        if (loadTime > 0) newMetrics.loadTime = loadTime;
      }

      // Web Vitals
      if ('web-vitals' in window) {
        // This would be populated by the WebVitalsTracker component
        // For now, we'll use placeholder values
      }

      setMetrics(newMetrics);
    };

    collectMetrics();

    // Toggle visibility with Ctrl+Shift+P
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Send metrics to analytics
  useEffect(() => {
    const sendMetrics = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'Core Web Vitals',
          custom_map: {
            cls: metrics.cumulativeLayoutShift,
            inp: metrics.interactionToNextPaint,
            fcp: metrics.firstContentfulPaint,
            lcp: metrics.largestContentfulPaint,
            ttfb: metrics.timeToFirstByte,
          },
        });
      }
    };

    // Send metrics after a delay to ensure all are collected
    const timeoutId = setTimeout(sendMetrics, 5000);
    return () => clearTimeout(timeoutId);
  }, [metrics]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-slate-800 border border-cyan-500/30 rounded-lg shadow-lg p-4 min-w-80 z-50">
      <h3 className="text-lg font-semibold mb-4 text-white">Performance Metrics</h3>
      
      <div className="space-y-3 text-sm">
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Load Time:</span>
          <span className={`font-mono ${metrics.loadTime ? getMetricColor(metrics.loadTime, { good: 1000, poor: 3000 }) : 'text-gray-400'}`}>
            {formatMetric(metrics.loadTime)}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">FCP:</span>
          <span className={`font-mono ${metrics.firstContentfulPaint ? getMetricColor(metrics.firstContentfulPaint, { good: 1800, poor: 3000 }) : 'text-gray-400'}`}>
            {formatMetric(metrics.firstContentfulPaint)}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">LCP:</span>
          <span className={`font-mono ${metrics.largestContentfulPaint ? getMetricColor(metrics.largestContentfulPaint, { good: 2500, poor: 4000 }) : 'text-gray-400'}`}>
            {formatMetric(metrics.largestContentfulPaint)}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">FID:</span>
          <span className={`font-mono ${metrics.firstInputDelay ? getMetricColor(metrics.firstInputDelay, { good: 100, poor: 300 }) : 'text-gray-400'}`}>
            {formatMetric(metrics.firstInputDelay)}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">CLS:</span>
          <span className={`font-mono ${metrics.cumulativeLayoutShift ? getMetricColor(metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 }) : 'text-gray-400'}`}>
            {metrics.cumulativeLayoutShift ? metrics.cumulativeLayoutShift.toFixed(4) : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">TTFB:</span>
          <span className={`font-mono ${metrics.timeToFirstByte ? getMetricColor(metrics.timeToFirstByte, { good: 800, poor: 1800 }) : 'text-gray-400'}`}>
            {formatMetric(metrics.timeToFirstByte)}
          </span>
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-600">
        <p className="text-xs text-gray-400">
          Press Ctrl+Shift+P to toggle
        </p>
      </div>
    </div>
  );
};

export default PerformanceMonitor;