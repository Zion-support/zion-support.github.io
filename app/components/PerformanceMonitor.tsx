'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return;
    }

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const firstContentfulPaint = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const largestContentfulPaint = paint.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;

      // Web Vitals
      let firstInputDelay = 0;
      let cumulativeLayoutShift = 0;

      if ('PerformanceObserver' in window) {
        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry: any) => {
            firstInputDelay = entry.processingStart - entry.startTime;
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              cumulativeLayoutShift += entry.value;
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }

      setMetrics({
        loadTime,
        firstContentfulPaint,
        largestContentfulPaint,
        firstInputDelay,
        cumulativeLayoutShift
      });

      // Log performance metrics
      console.log('Performance Metrics:', {
        loadTime: `${loadTime.toFixed(2)}ms`,
        firstContentfulPaint: `${firstContentfulPaint.toFixed(2)}ms`,
        largestContentfulPaint: `${largestContentfulPaint.toFixed(2)}ms`,
        firstInputDelay: `${firstInputDelay.toFixed(2)}ms`,
        cumulativeLayoutShift: cumulativeLayoutShift.toFixed(4)
      });
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

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg text-xs max-w-xs">
      <h3 className="font-bold mb-2">Performance Metrics</h3>
      {metrics ? (
        <div className="space-y-1">
          <div>Load Time: {metrics.loadTime.toFixed(2)}ms</div>
          <div>FCP: {metrics.firstContentfulPaint.toFixed(2)}ms</div>
          <div>LCP: {metrics.largestContentfulPaint.toFixed(2)}ms</div>
          <div>FID: {metrics.firstInputDelay.toFixed(2)}ms</div>
          <div>CLS: {metrics.cumulativeLayoutShift.toFixed(4)}</div>
        </div>
      ) : (
        <div>Measuring performance...</div>
      )}
    </div>
  );
};

export default PerformanceMonitor;