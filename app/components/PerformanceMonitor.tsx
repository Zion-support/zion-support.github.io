'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

const PerformanceMonitor: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      setIsMonitoring(true);

      // Measure page load time
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;

      // Get Web Vitals
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({
                ...prev,
                firstContentfulPaint: entry.startTime
              } as PerformanceMetrics));
            }
          }
        });
      });

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

      // Set initial metrics
      setMetrics({
        loadTime,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        firstInputDelay: 0,
        cumulativeLayoutShift: 0
      });

      setIsMonitoring(false);
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
    <div className="performance-monitor">
      {children}
      {process.env.NODE_ENV === 'development' && metrics && (
        <div className="fixed top-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded-lg text-xs max-w-xs">
          <h4 className="font-semibold mb-2">Performance Metrics</h4>
          <div className="space-y-1">
            <div>Load Time: {metrics.loadTime}ms</div>
            <div>FCP: {metrics.firstContentfulPaint.toFixed(2)}ms</div>
            <div>LCP: {metrics.largestContentfulPaint.toFixed(2)}ms</div>
            <div>FID: {metrics.firstInputDelay.toFixed(2)}ms</div>
            <div>CLS: {metrics.cumulativeLayoutShift.toFixed(4)}</div>
          </div>
          {isMonitoring && (
            <div className="mt-2 text-yellow-400">Monitoring...</div>
          )}
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;