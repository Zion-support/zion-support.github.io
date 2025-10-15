import React, { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface CoreWebVitalsProps {
  children: React.ReactNode;
}

declare global {
  interface Window {
    gtag?: (command: string, action: string, parameters: Record<string, unknown>) => void;
  }
}
export const CoreWebVitals: React.FC<CoreWebVitalsProps> = ({ children }) => {
  useEffect(() => {
    // Track Core Web Vitals
    onCLS((metric) => {
      // CLS metric logged for performance monitoring
      // Send to analytics service
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'CLS',
          value: Math.round(metric.value * 1000),
        });
      }
    });
    onINP((metric) => {
      // INP metric logged for performance monitoring
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'INP',
          value: Math.round(metric.value),
        });
      }
    });
    onFCP((metric) => {
      // FCP metric logged for performance monitoring
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'FCP',
          value: Math.round(metric.value),
        });
      }
    });
    onLCP((metric) => {
      // LCP metric logged for performance monitoring
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'LCP',
          value: Math.round(metric.value),
        });
      }
    });
    onTTFB((metric) => {
      // TTFB metric logged for performance monitoring
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
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