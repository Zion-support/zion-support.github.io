'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateMetrics = () => {
      const newMetrics: PerformanceMetrics = {};

      // Get LCP
      const lcpEntry = performance.getEntriesByType('largest-contentful-paint')[0];
      if (lcpEntry) {
        newMetrics.lcp = lcpEntry.startTime;
      }

      // Get FID
      const fidEntries = performance.getEntriesByType('first-input');
      if (fidEntries.length > 0) {
        newMetrics.fid = (fidEntries[0] as any).processingStart - fidEntries[0].startTime;
      }

      // Get CLS
      let clsValue = 0;
      const clsEntries = performance.getEntriesByType('layout-shift');
      clsEntries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      newMetrics.cls = clsValue;

      // Get FCP
      const fcpEntry = performance.getEntriesByType('paint').find(
        (entry) => entry.name === 'first-contentful-paint'
      );
      if (fcpEntry) {
        newMetrics.fcp = fcpEntry.startTime;
      }

      // Get TTFB
      const navigationEntry = performance.getEntriesByType('navigation')[0] as any;
      if (navigationEntry) {
        newMetrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      }

      setMetrics(newMetrics);
    };

    // Update metrics after page load
    if (document.readyState === 'complete') {
      updateMetrics();
    } else {
      window.addEventListener('load', updateMetrics);
    }

    // Update metrics periodically
    const interval = setInterval(updateMetrics, 5000);

    return () => {
      window.removeEventListener('load', updateMetrics);
      clearInterval(interval);
    };
  }, []);

  const getMetricColor = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatMetric = (value: number, unit: string = 'ms') => {
    return `${Math.round(value)}${unit}`;
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-slate-800 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors"
      >
        Performance
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-slate-800 text-white p-4 rounded-lg shadow-lg min-w-64">
          <h3 className="text-lg font-semibold mb-3">Core Web Vitals</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>LCP:</span>
              <span className={getMetricColor(metrics.lcp || 0, { good: 2500, needsImprovement: 4000 })}>
                {metrics.lcp ? formatMetric(metrics.lcp) : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>FID:</span>
              <span className={getMetricColor(metrics.fid || 0, { good: 100, needsImprovement: 300 })}>
                {metrics.fid ? formatMetric(metrics.fid) : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>CLS:</span>
              <span className={getMetricColor(metrics.cls || 0, { good: 0.1, needsImprovement: 0.25 })}>
                {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>FCP:</span>
              <span className={getMetricColor(metrics.fcp || 0, { good: 1800, needsImprovement: 3000 })}>
                {metrics.fcp ? formatMetric(metrics.fcp) : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>TTFB:</span>
              <span className={getMetricColor(metrics.ttfb || 0, { good: 800, needsImprovement: 1800 })}>
                {metrics.ttfb ? formatMetric(metrics.ttfb) : 'N/A'}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;
