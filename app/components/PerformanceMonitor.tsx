'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when explicitly enabled
    if (process.env.NODE_ENV === 'development' || window.location.search.includes('debug=true')) {
      setIsVisible(true);
    }

    // Collect performance metrics
    const collectMetrics = () => {
      if (typeof window === 'undefined' || !('performance' in window)) return;

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
      const cls = performance.getEntriesByType('layout-shift')[0];
      const fid = performance.getEntriesByType('first-input')[0];

      const performanceMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint: fcp ? fcp.startTime : 0,
        largestContentfulPaint: lcp ? lcp.startTime : 0,
        cumulativeLayoutShift: cls ? (cls as any).value : 0,
        firstInputDelay: fid ? (fid as any).processingStart - fid.startTime : 0
      };

      setMetrics(performanceMetrics);
    };

    // Wait for page load
    if (document.readyState === 'complete') {
      collectMetrics();
    } else {
      window.addEventListener('load', collectMetrics);
      return () => window.removeEventListener('load', collectMetrics);
    }
  }, []);

  if (!isVisible || !metrics) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg text-xs font-mono z-50 max-w-xs">
      <div className="mb-2 font-bold text-cyan-400">Performance Metrics</div>
      <div className="space-y-1">
        <div>Load Time: {metrics.loadTime.toFixed(2)}ms</div>
        <div>FCP: {metrics.firstContentfulPaint.toFixed(2)}ms</div>
        <div>LCP: {metrics.largestContentfulPaint.toFixed(2)}ms</div>
        <div>CLS: {metrics.cumulativeLayoutShift.toFixed(4)}</div>
        <div>FID: {metrics.firstInputDelay.toFixed(2)}ms</div>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="mt-2 text-gray-400 hover:text-white text-xs"
      >
        Close
      </button>
    </div>
  );
};

PerformanceMonitor.displayName = 'PerformanceMonitor';

export default PerformanceMonitor;