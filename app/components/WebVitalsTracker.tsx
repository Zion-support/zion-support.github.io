import React, { useEffect } from 'react';

const WebVitalsTracker: React.FC = () => {
  useEffect(() => {
    const sendToAnalytics = (metric: any) => {
      // Send to your analytics service
      console.log('Web Vital:', metric);
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

export default WebVitalsTracker;