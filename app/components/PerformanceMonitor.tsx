import React, { useState, useEffect, useCallback } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  loadTime?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  cumulativeLayoutShift?: number;
  firstInputDelay?: number;
  timeToFirstByte?: number;
}

interface PerformanceMonitorProps {
  showInProduction?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  showInProduction = false 
}) => {
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
    if (process.env.NODE_ENV === 'production' && !showInProduction) {
      return;
    }

    // Track Core Web Vitals
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

    // Track page load time
    const loadTime = performance.now();
    updateMetric('loadTime', loadTime);

    // Show monitor after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [updateMetric, showInProduction]);

  if (!isVisible || (process.env.NODE_ENV === 'production' && !showInProduction)) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white text-xs font-mono max-w-xs">
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
          <div>Load: {metrics.loadTime.toFixed(0)}ms</div>
        )}
        {metrics.firstContentfulPaint && (
          <div>FCP: {metrics.firstContentfulPaint.toFixed(0)}ms</div>
        )}
        {metrics.largestContentfulPaint && (
          <div>LCP: {metrics.largestContentfulPaint.toFixed(0)}ms</div>
        )}
        {metrics.cumulativeLayoutShift && (
          <div>CLS: {metrics.cumulativeLayoutShift.toFixed(3)}</div>
        )}
        {metrics.firstInputDelay && (
          <div>INP: {metrics.firstInputDelay.toFixed(0)}ms</div>
        )}
        {metrics.timeToFirstByte && (
          <div>TTFB: {metrics.timeToFirstByte.toFixed(0)}ms</div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;
