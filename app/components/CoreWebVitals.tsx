import React, { useEffect } from 'react';
import { CoreWebVitalsProps } from 'lucide-react';
interface CoreWebVitalsProps {
  children: React.ReactNode;
}
export const CoreWebVitals: React.FC<CoreWebVitalsProps> = ({ children }) => {
  useEffect(() => {
    // Track Core Web Vitals
    onCLS((metric) => {
      // CLS metric logged for performance monitoring
      // Send to analytics service
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'CLS',
          value: Math.round(metric.value * 1000)
        });
      }
    });
    onINP((metric) => {
      // INP metric logged for performance monitoring
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'INP',
          value: Math.round(metric.value)
        });
      }
    });
    onFCP((metric) => {
      // FCP metric logged for performance monitoring
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'FCP',
          value: Math.round(metric.value)
        });
      }
    });
    onLCP((metric) => {
      // LCP metric logged for performance monitoring
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'LCP',
          value: Math.round(metric.value)
        });
      }
    });
    onTTFB((metric) => {
      // TTFB metric logged for performance monitoring
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'TTFB',
          value: Math.round(metric.value)
        });
      }
    });
  }, []);
  return <>{children}</>;
};
export default CoreWebVitals;