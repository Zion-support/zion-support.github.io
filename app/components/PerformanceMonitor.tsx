import React, { useEffect, useState, ReactNode } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

interface PerformanceMonitorProps {
  children: ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window === 'undefined' || !window.performance) return;

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const largestContentfulPaint = paintEntries.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;

      // Measure First Input Delay
      let firstInputDelay = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'first-input') {
            firstInputDelay = entry.processingStart - entry.startTime;
          }
        }
      });
      observer.observe({ entryTypes: ['first-input'] });

      // Measure Cumulative Layout Shift
      let cumulativeLayoutShift = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
            cumulativeLayoutShift += (entry as any).value;
          }
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      const performanceMetrics: PerformanceMetrics = {
        loadTime,
        firstContentfulPaint,
        largestContentfulPaint,
        firstInputDelay,
        cumulativeLayoutShift
      };

      setMetrics(performanceMetrics);

      // Log metrics in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metrics:', performanceMetrics);
      }

      // Send metrics to analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'performance_metrics', {
          load_time: loadTime,
          first_contentful_paint: firstContentfulPaint,
          largest_contentful_paint: largestContentfulPaint,
          first_input_delay: firstInputDelay,
          cumulative_layout_shift: cumulativeLayoutShift
        });
      }

      // Cleanup observers
      setTimeout(() => {
        observer.disconnect();
        clsObserver.disconnect();
      }, 5000);
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

  return <>{children}</>;
};

export default PerformanceMonitor;