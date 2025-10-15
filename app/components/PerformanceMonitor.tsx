import React, { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMonitorProps {
  children: React.ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  useEffect(() => {
    // Monitor Core Web Vitals
    onCLS((metric) => {
      if (process.env.NODE_ENV === 'development') {
        console.log('CLS:', metric);
      }
      // Send to analytics service
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'CLS',
          value: Math.round(metric.value * 1000),
        });
      }
    });

    onINP((metric) => {
      if (process.env.NODE_ENV === 'development') {
        console.log('INP:', metric);
      }
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'INP',
          value: Math.round(metric.value),
        });
      }
    });

    onFCP((metric) => {
      if (process.env.NODE_ENV === 'development') {
        console.log('FCP:', metric);
      }
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'FCP',
          value: Math.round(metric.value),
        });
      }
    });

    onLCP((metric) => {
      if (process.env.NODE_ENV === 'development') {
        console.log('LCP:', metric);
      }
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'LCP',
          value: Math.round(metric.value),
        });
      }
    });

    onTTFB((metric) => {
      if (process.env.NODE_ENV === 'development') {
        console.log('TTFB:', metric);
      }
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'TTFB',
          value: Math.round(metric.value),
        });
      }
    });
  }, []);

  return <>{children}</>;
};

export default PerformanceMonitor;