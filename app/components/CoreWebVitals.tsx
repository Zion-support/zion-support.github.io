import React, { useEffect } from 'react';

const CoreWebVitals: React.FC = () => {
  useEffect(() => {
    const sendToAnalytics = (metric: any) => {
      // Send to your analytics service
      console.log('Core Web Vital:', metric);
      
      // You can send to Google Analytics, custom analytics, etc.
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
    };

    // Basic performance monitoring without web-vitals dependency
    if (typeof window !== 'undefined' && window.performance) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          sendToAnalytics({
            name: entry.name,
            value: entry.startTime,
            delta: entry.startTime
          });
        }
      });

      observer.observe({ entryTypes: ['measure', 'navigation'] });
    }
  }, []);

  return null;
};

export default CoreWebVitals;