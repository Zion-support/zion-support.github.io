import React, { useCallback, useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface WebVitalsData {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

const CoreWebVitals: React.FC = () => {
  const reportWebVitals = useCallback((data: WebVitalsData) => {
    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', data.name, {
        event_category: 'Web Vitals',
        event_label: data.id,
        value: Math.round(data.name === 'CLS' ? data.value * 1000 : data.value),
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
        body: JSON.stringify({
          metric: data.name,
          value: data.value,
          delta: data.delta,
          id: data.id,
          navigationType: data.navigationType,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        }),
      }).catch(console.error);
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Web Vital:', data);
    }
  }, []);

  useEffect(() => {
    // Measure Core Web Vitals
    onCLS(reportWebVitals);
    onINP(reportWebVitals);
    onFCP(reportWebVitals);
    onLCP(reportWebVitals);
    onTTFB(reportWebVitals);

    // Performance observer for additional metrics
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            reportWebVitals({
              name: 'DOMContentLoaded',
              value: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              delta: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              id: 'dom-content-loaded',
              navigationType: navEntry.type,
            });
          }
        }
      });

      observer.observe({ entryTypes: ['navigation'] });

      return () => {
        observer.disconnect();
      };
    }
  }, [reportWebVitals]);

  // Performance monitoring component
  return (
    <div className="performance-monitor" style={{ display: 'none' }}>
      {/* This component doesn't render anything visible */}
    </div>
  );
};

export default CoreWebVitals;
