import React, { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface CoreWebVitalsProps {
  children: React.ReactNode;
}

export const CoreWebVitals: React.FC<CoreWebVitalsProps> = ({ children }) => {
  useEffect(() => {
    // Track Core Web Vitals
    onCLS((metric) => {
      console.log('CLS:', metric);
      // Send to analytics service
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'CLS',
          value: Math.round(metric.value * 1000),
        });
      }
    });

    onINP((metric) => {
      console.log('INP:', metric);
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'INP',
          value: Math.round(metric.value),
        });
      }
    });

    onFCP((metric) => {
      console.log('FCP:', metric);
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'FCP',
          value: Math.round(metric.value),
        });
      }
    });

    onLCP((metric) => {
      console.log('LCP:', metric);
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'LCP',
          value: Math.round(metric.value),
        });
      }
    });

    onTTFB((metric) => {
      console.log('TTFB:', metric);
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'TTFB',
          value: Math.round(metric.value),
        });
      }
    });
  }, []);

  return <>{children}</>;
};

export default CoreWebVitals;
