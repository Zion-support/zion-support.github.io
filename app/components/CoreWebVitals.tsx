import React, { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface WebVitalsData {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

const CoreWebVitals: React.FC = () => {
  useEffect(() => {
    const reportWebVitals = (data: WebVitalsData) => {
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

      // Send to custom analytics endpoint
      if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
        // Example: Send to custom analytics service
        fetch('/api/analytics/web-vitals', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }).catch((error) => {
          console.warn('Failed to send web vitals:', error);
        });
      }
    };

    // Measure Core Web Vitals
    onCLS(reportWebVitals);
    onINP(reportWebVitals);
    onFCP(reportWebVitals);
    onLCP(reportWebVitals);
    onTTFB(reportWebVitals);
  }, []);

  return null;
};

export default CoreWebVitals;