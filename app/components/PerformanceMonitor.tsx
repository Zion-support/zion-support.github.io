import React, { useEffect, useState } from 'react';

interface PerformanceMonitorProps {
  children: React.ReactNode;
  showDetails?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children, showDetails = false }) => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      // Measure load time
      window.addEventListener('load', () => {
        const loadTime = performance.now();
        setMetrics(prev => ({ ...prev, loadTime }));
      });

      // Measure Web Vitals
      if ('PerformanceObserver' in window) {
        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, firstContentfulPaint: entry.startTime }));
            }
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, largestContentfulPaint: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            setMetrics(prev => ({ 
              ...prev, 
              firstInputDelay: entry.processingStart - entry.startTime 
            }));
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          setMetrics(prev => ({ ...prev, cumulativeLayoutShift: clsValue }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }
    };

    measurePerformance();
  }, []);

  return (
    <>
      {children}
      {showDetails && process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg max-w-xs text-xs z-50">
          <h3 className="font-semibold mb-2">Performance Metrics</h3>
          <div className="space-y-1">
            <div>Load Time: {metrics.loadTime.toFixed(0)}ms</div>
            <div>FCP: {metrics.firstContentfulPaint.toFixed(0)}ms</div>
            <div>LCP: {metrics.largestContentfulPaint.toFixed(0)}ms</div>
            <div>FID: {metrics.firstInputDelay.toFixed(0)}ms</div>
            <div>CLS: {metrics.cumulativeLayoutShift.toFixed(3)}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default PerformanceMonitor;