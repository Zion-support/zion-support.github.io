import React, { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

const CoreWebVitals: React.FC = () => {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  useEffect(() => {
    const sendToAnalytics = (data: any) => {
      // Send to Google Analytics or other analytics service
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', data.name, {
          event_category: 'Web Vitals',
          event_label: data.id,
          value: Math.round(data.name === 'CLS' ? data.value * 1000 : data.value),
          non_interaction: true,
        });
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Web Vital:', data.name, data.value);
      }
    };

    // Track Core Web Vitals
    onCLS(sendToAnalytics);
    onINP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  }, []);
>>>>>>> cursor/analyze-improve-and-deploy-application-c573

  return null;
};

export default CoreWebVitals;
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-9c39
