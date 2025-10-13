import React, { useEffect, useState } from 'react';

// Type definitions for browser APIs
declare global {
  interface PerformanceNavigationTiming extends PerformanceEntry {
    requestStart: number;
    responseStart: number;
  }
}

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });

  useEffect(() => {
    const measurePerformance = () => {
      try {
        // First Contentful Paint (FCP)
        const fcpEntries = performance.getEntriesByType('paint');
        const fcpEntry = fcpEntries.find(entry => entry.name === 'first-contentful-paint');
        const fcp = fcpEntry ? fcpEntry.startTime : null;

        // Largest Contentful Paint (LCP)
        const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
        const lcp = lcpEntries.length > 0 ? lcpEntries[lcpEntries.length - 1].startTime : null;

        // Time to First Byte (TTFB)
        const navigationEntries = performance.getEntriesByType('navigation');
        const navigationEntry = navigationEntries[0] as PerformanceNavigationTiming;
        const ttfb = navigationEntry ? navigationEntry.responseStart - navigationEntry.requestStart : null;

        setMetrics({
          fcp,
          lcp,
          fid: null, // FID requires user interaction
          cls: null, // CLS requires more complex calculation
          ttfb
        });
      } catch (error) {
        console.error('Error measuring performance:', error);
      }
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">First Contentful Paint:</span>
          <span className="text-sm font-medium">
            {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Largest Contentful Paint:</span>
          <span className="text-sm font-medium">
            {metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Time to First Byte:</span>
          <span className="text-sm font-medium">
            {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
