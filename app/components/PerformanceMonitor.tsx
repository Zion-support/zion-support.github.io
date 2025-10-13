import React, { useState, useEffect, useCallback } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  loadTime?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  firstInputDelay?: number;
  cumulativeLayoutShift?: number;
  timeToFirstByte?: number;
}

interface PerformanceMonitorProps {
  showInProduction?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ showInProduction = false }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  const updateMetric = useCallback((name: string, value: number) => {
    setMetrics(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  useEffect(() => {
    // Only show in development or if explicitly enabled
    if (process.env.NODE_ENV === 'development' || showInProduction) {
      setIsVisible(true);
    }

    // Measure Core Web Vitals
    onCLS((metric) => {
      updateMetric('cumulativeLayoutShift', metric.value);
    });

    onINP((metric) => {
      updateMetric('firstInputDelay', metric.value);
    });

    onFCP((metric) => {
      updateMetric('firstContentfulPaint', metric.value);
    });

    onLCP((metric) => {
      updateMetric('largestContentfulPaint', metric.value);
    });

    onTTFB((metric) => {
      updateMetric('timeToFirstByte', metric.value);
    });

    // Measure page load time
    const loadTime = performance.now();
    updateMetric('loadTime', loadTime);

    // Log metrics to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', metrics);
    }
  }, [updateMetric, showInProduction]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white text-xs font-mono z-50 max-w-xs">
      <div className="mb-2 font-semibold text-cyan-400">Performance Monitor</div>
      <div className="space-y-1">
        {metrics.loadTime && (
          <div>Load Time: {metrics.loadTime.toFixed(2)}ms</div>
        )}
        {metrics.firstContentfulPaint && (
          <div>FCP: {metrics.firstContentfulPaint.toFixed(2)}ms</div>
        )}
        {metrics.largestContentfulPaint && (
          <div>LCP: {metrics.largestContentfulPaint.toFixed(2)}ms</div>
        )}
        {metrics.firstInputDelay && (
          <div>FID: {metrics.firstInputDelay.toFixed(2)}ms</div>
        )}
        {metrics.cumulativeLayoutShift && (
          <div>CLS: {metrics.cumulativeLayoutShift.toFixed(4)}</div>
        )}
        {metrics.timeToFirstByte && (
          <div>TTFB: {metrics.timeToFirstByte.toFixed(2)}ms</div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;