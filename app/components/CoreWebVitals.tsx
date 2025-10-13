import React, { useEffect, useCallback } from 'react';

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
      (window as any).gtag('event', 'web_vitals', {
        metric_name: data.name,
        metric_value: Math.round(data.value),
        metric_delta: Math.round(data.delta),
        metric_id: data.id,
        metric_navigation_type: data.navigationType,
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Web Vital:', data);
    }
  }, []);

  useEffect(() => {
    // Track Cumulative Layout Shift (CLS)
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
              const clsValue = (entry as any).value;
              reportWebVitals({
                name: 'CLS',
                value: clsValue,
                delta: clsValue,
                id: 'cls-' + Date.now(),
                navigationType: 'navigate',
              });
            }
          }
        });

        observer.observe({ entryTypes: ['layout-shift'] });

        return () => {
          observer.disconnect();
        };
      } catch (error) {
        console.warn('PerformanceObserver not supported:', error);
      }
    }
  }, [reportWebVitals]);

  return null;
};

export default CoreWebVitals;