import React, { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    getCLS((metric) => {
      console.log('CLS:', metric);
      // Send to analytics
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'CLS',
          value: Math.round(metric.value * 1000),
        });
      }
    });

    getFID((metric) => {
      console.log('FID:', metric);
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'FID',
          value: Math.round(metric.value),
        });
      }
    });

    getFCP((metric) => {
      console.log('FCP:', metric);
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'FCP',
          value: Math.round(metric.value),
        });
      }
    });

    getLCP((metric) => {
      console.log('LCP:', metric);
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'LCP',
          value: Math.round(metric.value),
        });
      }
    });

    getTTFB((metric) => {
      console.log('TTFB:', metric);
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'TTFB',
          value: Math.round(metric.value),
        });
      }
    });
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
