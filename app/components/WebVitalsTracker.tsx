import React, { useEffect } from 'react';

interface WebVitalsData {
  name: string;
  value: number;
  delta: number;
  id: string;
}

const WebVitalsTracker: React.FC = () => {
  useEffect(() => {
    const sendToAnalytics = (metric: WebVitalsData) => {
      // Send to Google Analytics or other analytics service
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Web Vital:', metric.name, metric.value);
      }
    };

    // Simple performance monitoring without web-vitals dependency
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Measure page load time
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.fetchStart;
          sendToAnalytics({
            name: 'TTFB',
            value: loadTime,
            delta: loadTime,
            id: 'page-load'
          });
        }
      });
    }
  }, []);

  return null;
};

export default WebVitalsTracker;
