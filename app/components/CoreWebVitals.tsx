import React, { useCallback, useEffect } from 'react';

interface WebVitalsData {
  name: string;
  value: number;
  delta: number;
  id: string;
}

const CoreWebVitals: React.FC = () => {
  const reportWebVitals = useCallback((data: WebVitalsData) => {
    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', data.name, {
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
  }, []);

  useEffect(() => {
    // Simple performance monitoring without web-vitals dependency
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Measure page load time
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.fetchStart;
          reportWebVitals({
            name: 'TTFB',
            value: loadTime,
            delta: loadTime,
            id: 'page-load'
          });
        }
      });
    }
  }, [reportWebVitals]);

  return null;
};

export default CoreWebVitals;
