import React, { useState, useEffect, useCallback } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  loadTime: number | null;
  firstContentfulPaint: number | null;
  largestContentfulPaint: number | null;
  cumulativeLayoutShift: number | null;
  interactionToNextPaint: number | null;
  timeToFirstByte: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: null,
    firstContentfulPaint: null,
    largestContentfulPaint: null,
    cumulativeLayoutShift: null,
    interactionToNextPaint: null,
    timeToFirstByte: null,
  });

  const updateMetrics = useCallback(() => {
    if (typeof window !== 'undefined') {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      setMetrics(prev => ({ ...prev, loadTime }));
    }
  }, []);

  useEffect(() => {
    // Collect Core Web Vitals
    onCLS((metric) => {
      setMetrics(prev => ({ ...prev, cumulativeLayoutShift: metric.value }));
    });

    onINP((metric) => {
      setMetrics(prev => ({ ...prev, interactionToNextPaint: metric.value }));
    });

    onFCP((metric) => {
      setMetrics(prev => ({ ...prev, firstContentfulPaint: metric.value }));
    });

    onLCP((metric) => {
      setMetrics(prev => ({ ...prev, largestContentfulPaint: metric.value }));
    });

    onTTFB((metric) => {
      setMetrics(prev => ({ ...prev, timeToFirstByte: metric.value }));
    });

    // Initial metrics collection
    updateMetrics();

    // Update metrics periodically
    const interval = setInterval(updateMetrics, 5000);

    // Keyboard shortcut to toggle visibility
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      clearInterval(interval);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [updateMetrics]);

  // Send metrics to analytics (if needed)
  useEffect(() => {
    const sendMetrics = () => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
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

  const getMetricColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.poor) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-gray-900/95 backdrop-blur-md border border-purple-500/20 rounded-lg shadow-2xl p-4 min-w-80">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-white">Performance Metrics</h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Load Time:</span>
            <span className={`font-mono ${metrics.loadTime ? getMetricColor(metrics.loadTime, { good: 1000, poor: 3000 }) : 'text-gray-400'}`}>
              {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-300">FCP:</span>
            <span className={`font-mono ${metrics.firstContentfulPaint ? getMetricColor(metrics.firstContentfulPaint, { good: 1800, poor: 3000 }) : 'text-gray-400'}`}>
              {metrics.firstContentfulPaint ? `${metrics.firstContentfulPaint.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-300">LCP:</span>
            <span className={`font-mono ${metrics.largestContentfulPaint ? getMetricColor(metrics.largestContentfulPaint, { good: 2500, poor: 4000 }) : 'text-gray-400'}`}>
              {metrics.largestContentfulPaint ? `${metrics.largestContentfulPaint.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-300">CLS:</span>
            <span className={`font-mono ${metrics.cumulativeLayoutShift ? getMetricColor(metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 }) : 'text-gray-400'}`}>
              {metrics.cumulativeLayoutShift ? metrics.cumulativeLayoutShift.toFixed(3) : 'N/A'}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-300">INP:</span>
            <span className={`font-mono ${metrics.interactionToNextPaint ? getMetricColor(metrics.interactionToNextPaint, { good: 200, poor: 500 }) : 'text-gray-400'}`}>
              {metrics.interactionToNextPaint ? `${metrics.interactionToNextPaint.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-300">TTFB:</span>
            <span className={`font-mono ${metrics.timeToFirstByte ? getMetricColor(metrics.timeToFirstByte, { good: 800, poor: 1800 }) : 'text-gray-400'}`}>
              {metrics.timeToFirstByte ? `${metrics.timeToFirstByte.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="mt-4 pt-3 border-t border-gray-700">
          <p className="text-xs text-gray-400">
            Press Ctrl+Shift+P to toggle this panel
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;