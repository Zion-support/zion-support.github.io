import React, { useEffect, useCallback } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface WebVitalsData {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

interface CoreWebVitalsProps {
  children: React.ReactNode;
}

const CoreWebVitals: React.FC<CoreWebVitalsProps> = ({ children }) => {
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
    // Track Core Web Vitals
    onCLS(reportWebVitals);
    onINP(reportWebVitals);
    onFCP(reportWebVitals);
    onLCP(reportWebVitals);
    onTTFB(reportWebVitals);
  }, [reportWebVitals]);

  return <>{children}</>;
};

export default CoreWebVitals;