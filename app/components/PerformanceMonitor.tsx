import React, { useEffect } from 'react';
import { onCLS, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMonitorProps {
  children: React.ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const sendToAnalytics = (metric: any) => {
      // Send to Google Analytics or your analytics service
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
      
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metric:', metric);
      }
    };

    // Measure Core Web Vitals
    onCLS(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);

    // Monitor page load time
    const pageLoadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    if (pageLoadTime > 0) {
      sendToAnalytics({
        name: 'Page Load Time',
        value: pageLoadTime,
        id: 'page-load-time'
      });
    }

    // Monitor resource loading
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          const resource = entry as PerformanceResourceTiming;
          if (resource.duration > 1000) { // Log resources taking more than 1 second
            console.warn('Slow resource:', resource.name, resource.duration);
          }
        }
      }
    });

    observer.observe({ entryTypes: ['resource'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
};

export default PerformanceMonitor;