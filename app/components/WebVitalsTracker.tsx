import React, { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

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
      console.log('Web Vital:', metric);
      
      // Example: Send to Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
    };

    // Track Core Web Vitals
    onCLS(sendToAnalytics);
    onINP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);

    // Track additional performance metrics
    const trackPerformance = () => {
      if (typeof window === 'undefined') return;

      // First Contentful Paint
      const fcp = performance.getEntriesByType('paint').find(
        entry => entry.name === 'first-contentful-paint'
      );
      
      if (fcp) {
        sendToAnalytics({
          name: 'FCP',
          value: fcp.startTime,
          delta: fcp.startTime,
          id: 'fcp-' + Date.now()
        });
      }

      // Largest Contentful Paint
      const lcp = performance.getEntriesByType('largest-contentful-paint');
      if (lcp.length > 0) {
        sendToAnalytics({
          name: 'LCP',
          value: lcp[lcp.length - 1].startTime,
          delta: lcp[lcp.length - 1].startTime,
          id: 'lcp-' + Date.now()
        });
      }

      // First Input Delay
      let firstInputDelay = 0;
      const firstInputHandler = (event: Event) => {
        firstInputDelay = performance.now() - (event as any).timeStamp;
        sendToAnalytics({
          name: 'FID',
          value: firstInputDelay,
          delta: firstInputDelay,
          id: 'fid-' + Date.now()
        });
        document.removeEventListener('click', firstInputHandler);
        document.removeEventListener('keydown', firstInputHandler);
      };

      document.addEventListener('click', firstInputHandler);
      document.addEventListener('keydown', firstInputHandler);
    };

    // Track performance after page load
    if (document.readyState === 'complete') {
      trackPerformance();
    } else {
      window.addEventListener('load', trackPerformance);
    }

    return () => {
      window.removeEventListener('load', trackPerformance);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default WebVitalsTracker;
