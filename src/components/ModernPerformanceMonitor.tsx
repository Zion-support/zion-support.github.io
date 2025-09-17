import React, { useEffect, useState } from 'react';

const ModernPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<any>(null);

  useEffect(() => {
    // Modern performance monitoring
    const monitorPerformance = () => {
      if ('performance' in window) {
        // Monitor Core Web Vitals
        const measureWebVitals = () => {
          // LCP (Largest Contentful Paint)
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log('LCP:', lastEntry.startTime);
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // FID (First Input Delay)
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              console.log('FID:', entry.processingStart - entry.startTime);
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // CLS (Cumulative Layout Shift)
          const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0;
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            });
            console.log('CLS:', clsValue);
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        };

        measureWebVitals();

        // Monitor page load performance
        window.addEventListener('load', () => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const performanceMetrics = {
            domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
            loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
            totalTime: perfData.loadEventEnd - perfData.fetchStart,
            firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
            firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
          };
          
          setMetrics(performanceMetrics);
          console.log('Performance Metrics:', performanceMetrics);
        });
      }
    };

    monitorPerformance();
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development' || !metrics) {
    return null;
  }

  return (
    <div className="fixed top-4 left-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs font-mono z-50">
      <div>LCP: {metrics.totalTime?.toFixed(0)}ms</div>
      <div>FCP: {metrics.firstContentfulPaint?.toFixed(0)}ms</div>
      <div>Load: {metrics.loadComplete?.toFixed(0)}ms</div>
    </div>
  );
};

export default ModernPerformanceMonitor;