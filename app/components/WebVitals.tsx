import React, { useEffect } from 'react';

interface WebVitalsProps {
  onVitals?: (vitals: any) => void;
}

const WebVitals: React.FC<WebVitalsProps> = ({ onVitals }) => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    const sendToAnalytics = (metric: any) => {
      // Send to Google Analytics if available
      if (typeof gtag !== 'undefined') {
        gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }

      // Send to custom analytics endpoint
      if (onVitals) {
        onVitals(metric);
      }

      // Log to console in development
      console.log('Web Vital:', metric);
    };

    // Import web-vitals dynamically
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(sendToAnalytics);
      getFID(sendToAnalytics);
      getFCP(sendToAnalytics);
      getLCP(sendToAnalytics);
      getTTFB(sendToAnalytics);
    });

    // Monitor Core Web Vitals
    const observeWebVitals = () => {
      // First Contentful Paint
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              sendToAnalytics({
                name: 'FCP',
                value: entry.startTime,
                id: `fcp-${Date.now()}`,
                delta: entry.startTime,
                entries: [entry]
              });
            }
          }
        });
        observer.observe({ entryTypes: ['paint'] });
      }

      // Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          sendToAnalytics({
            name: 'LCP',
            value: lastEntry.startTime,
            id: `lcp-${Date.now()}`,
            delta: lastEntry.startTime,
            entries: [lastEntry]
          });
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // First Input Delay
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            sendToAnalytics({
              name: 'FID',
              value: entry.processingStart - entry.startTime,
              id: `fid-${Date.now()}`,
              delta: entry.processingStart - entry.startTime,
              entries: [entry]
            });
          }
        });
        observer.observe({ entryTypes: ['first-input'] });
      }

      // Cumulative Layout Shift
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          sendToAnalytics({
            name: 'CLS',
            value: clsValue,
            id: `cls-${Date.now()}`,
            delta: clsValue,
            entries: []
          });
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      }
    };

    // Start observing after page load
    if (document.readyState === 'complete') {
      observeWebVitals();
    } else {
      window.addEventListener('load', observeWebVitals);
    }

    return () => {
      window.removeEventListener('load', observeWebVitals);
    };
  }, [onVitals]);

  return null;
};

export default WebVitals;