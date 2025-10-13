import React, { useEffect, useCallback } from 'react';
import { onCLS, onFCP, onLCP, onTTFB } from 'web-vitals';

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
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Core Web Vital:', data);
    }
  }, []);

  useEffect(() => {
    // Track Core Web Vitals
    onCLS(reportWebVitals);
    onFCP(reportWebVitals);
    onLCP(reportWebVitals);
    onTTFB(reportWebVitals);
  }, [reportWebVitals]);

  return null;
};

export default CoreWebVitals;