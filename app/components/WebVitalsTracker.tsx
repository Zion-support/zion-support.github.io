import React, { useEffect, ReactNode } from 'react';

interface WebVitalsTrackerProps {
  children: ReactNode;
}

interface WebVitalsData {
  name: string;
  value: number;
  id: string;
  delta: number;
}

const WebVitalsTracker: React.FC<WebVitalsTrackerProps> = ({ children }) => {
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

      // Send to custom analytics endpoint
      if (process.env.NODE_ENV === 'production') {
        fetch('/api/analytics/web-vitals', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(metric),
        }).catch(console.error);
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Web Vital:', metric);
      }
    };

    // Import and initialize web-vitals
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(sendToAnalytics);
      getFID(sendToAnalytics);
      getFCP(sendToAnalytics);
      getLCP(sendToAnalytics);
      getTTFB(sendToAnalytics);
    }).catch(console.error);

    // Performance observer for custom metrics
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            sendToAnalytics({
              name: 'Navigation Timing',
              value: navEntry.loadEventEnd - navEntry.loadEventStart,
              id: 'navigation',
              delta: navEntry.loadEventEnd - navEntry.loadEventStart,
            });
          }
        });
      });

      observer.observe({ entryTypes: ['navigation'] });

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return <>{children}</>;
};

export default WebVitalsTracker;