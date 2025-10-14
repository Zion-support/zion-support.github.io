import React, { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

interface Props {
  enableRealTimeMonitoring?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const AdvancedPerformanceMonitor: React.FC<Props> = ({
  enableRealTimeMonitoring = false,
  onMetricsUpdate,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [recommendations, setRecommendations] = useState<string[]>([]);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !window.performance) return;

    const newMetrics: PerformanceMetrics = {};

    // Measure First Contentful Paint (FCP)
    const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
    if (fcpEntry) {
      newMetrics.fcp = fcpEntry.startTime;
    }

    // Measure Largest Contentful Paint (LCP)
    const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
    if (lcpEntries.length > 0) {
      newMetrics.lcp = (lcpEntries[lcpEntries.length - 1] as PerformanceEntry).startTime;
    }

    // Measure First Input Delay (FID)
    const fidEntries = performance.getEntriesByType('first-input');
    if (fidEntries.length > 0) {
      newMetrics.fid = (fidEntries[0] as PerformanceEventTiming).processingStart - fidEntries[0].startTime;
    }

    // Measure Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsEntries = performance.getEntriesByType('layout-shift');
    clsEntries.forEach((entry: any) => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
      }
    });
    newMetrics.cls = clsValue;

    // Measure Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      newMetrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
    }

    setMetrics(newMetrics);
    if (onMetricsUpdate) {
      onMetricsUpdate(newMetrics);
    }

    // Generate recommendations
    const newRecommendations: string[] = [];
    if (newMetrics.fcp && newMetrics.fcp > 1800) {
      newRecommendations.push('Consider optimizing First Contentful Paint (FCP) - currently ' + Math.round(newMetrics.fcp) + 'ms');
    }
    if (newMetrics.lcp && newMetrics.lcp > 2500) {
      newRecommendations.push('Consider optimizing Largest Contentful Paint (LCP) - currently ' + Math.round(newMetrics.lcp) + 'ms');
    }
    if (newMetrics.fid && newMetrics.fid > 100) {
      newRecommendations.push('Consider optimizing First Input Delay (FID) - currently ' + Math.round(newMetrics.fid) + 'ms');
    }
    if (newMetrics.cls && newMetrics.cls > 0.1) {
      newRecommendations.push('Consider optimizing Cumulative Layout Shift (CLS) - currently ' + newMetrics.cls.toFixed(3));
    }
    if (newMetrics.ttfb && newMetrics.ttfb > 600) {
      newRecommendations.push('Consider optimizing Time to First Byte (TTFB) - currently ' + Math.round(newMetrics.ttfb) + 'ms');
    }

    setRecommendations(newRecommendations);
  }, [onMetricsUpdate]);

  useEffect(() => {
    if (enableRealTimeMonitoring && process.env.NODE_ENV === 'development') {
      // Initial measurement
      measurePerformance();

      // Set up performance observer
      const observer = new PerformanceObserver((list) => {
        measurePerformance();
      });

      observer.observe({ entryTypes: ['measure', 'navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

      return () => {
        observer.disconnect();
      };
    }
  }, [enableRealTimeMonitoring, measurePerformance]);

  // Don't render in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  if (!enableRealTimeMonitoring) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-90 text-white p-4 rounded-lg max-w-sm text-xs font-mono z-50">
      <div className="font-bold mb-2">Performance Monitor</div>
      
      <div className="space-y-1 mb-3">
        {metrics.fcp && (
          <div>FCP: {Math.round(metrics.fcp)}ms</div>
        )}
        {metrics.lcp && (
          <div>LCP: {Math.round(metrics.lcp)}ms</div>
        )}
        {metrics.fid && (
          <div>FID: {Math.round(metrics.fid)}ms</div>
        )}
        {metrics.cls && (
          <div>CLS: {metrics.cls.toFixed(3)}</div>
        )}
        {metrics.ttfb && (
          <div>TTFB: {Math.round(metrics.ttfb)}ms</div>
        )}
      </div>

      {recommendations.length > 0 && (
        <div>
          <div className="font-bold text-yellow-400 mb-1">Recommendations:</div>
          <ul className="space-y-1">
            {recommendations.map((rec, index) => (
              <li key={index} className="text-yellow-300">• {rec}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;