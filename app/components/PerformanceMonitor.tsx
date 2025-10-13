import React, { useEffect } from 'react';

interface PerformanceMonitorProps {
  className?: string;
}

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ className }) => {
  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window === 'undefined' || !('performance' in window)) {
        return;
      }

      // Measure Core Web Vitals
      const metrics: PerformanceMetrics = {
        loadTime: 0,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        firstInputDelay: 0,
        cumulativeLayoutShift: 0,
      };

      // Get navigation timing
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      }

      // Get paint timing
      const paintEntries = performance.getEntriesByType('paint');
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        metrics.firstContentfulPaint = fcpEntry.startTime;
      }

      // Send metrics to analytics
      if (window.gtag) {
        window.gtag('event', 'performance_metrics', {
          load_time: Math.round(metrics.loadTime),
          first_contentful_paint: Math.round(metrics.firstContentfulPaint),
          custom_parameter: 'performance_monitor'
        });
      }

      // Store metrics for debugging in development
      if (process.env.NODE_ENV === 'development') {
        window.__PERFORMANCE_METRICS__ = metrics;
      }
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  return <div className={className} aria-hidden="true" />;
};

export default PerformanceMonitor;