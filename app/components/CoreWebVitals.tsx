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
        metric_navigation_type: data.navigationType
      });
    }

    // Send to custom analytics
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('Web Vitals', {
        metric: data.name,
        value: data.value,
        delta: data.delta,
        id: data.id
      });
    }

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      }
  }, []);

  useEffect(() => {
    const measureWebVitals = async () => {
      try {
        const { onCLS, onFID, onFCP, onLCP, onTTFB, onINP } = await import('web-vitals');

        onCLS(reportWebVitals);
        onFID(reportWebVitals);
        onFCP(reportWebVitals);
        onLCP(reportWebVitals);
        onTTFB(reportWebVitals);
        onINP(reportWebVitals);
      } catch (error) {
        }
    };

    measureWebVitals();
  }, [reportWebVitals]);

  return null; // This component doesn't render anything
};

export default CoreWebVitals;