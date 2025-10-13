import React, { useEffect } from 'react';

interface WebVitalsData {
  name: string;
  value: number;
  id: string;
  delta: number;
}

const WebVitalsTracker: React.FC = () => {
  useEffect(() => {
    const sendToAnalytics = (metric: WebVitalsData) => {
      // Send to Google Analytics or other analytics service
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
        console.log('Web Vital:', metric);
      }
    };

    // Simple performance monitoring without web-vitals dependency
    const measurePerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          // Measure LCP (simplified)
          const lcp = navigation.loadEventEnd - navigation.fetchStart;
          sendToAnalytics({
            name: 'LCP',
            value: lcp,
            id: 'navigation-lcp',
            delta: lcp
          });

          // Measure FCP (simplified)
          const fcp = navigation.domContentLoadedEventEnd - navigation.fetchStart;
          sendToAnalytics({
            name: 'FCP',
            value: fcp,
            id: 'navigation-fcp',
            delta: fcp
          });

          // Measure TTFB
          const ttfb = navigation.responseStart - navigation.fetchStart;
          sendToAnalytics({
            name: 'TTFB',
            value: ttfb,
            id: 'navigation-ttfb',
            delta: ttfb
          });
        }
      }
    };

    // Measure performance after component mount
    const timer = setTimeout(measurePerformance, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return null;
};

export default WebVitalsTracker;