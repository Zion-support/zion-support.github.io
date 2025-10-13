import React, { useEffect } from 'react';
import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';

interface PerformanceMetrics {
  CLS: number | null;
  INP: number | null;
  FCP: number | null;
  LCP: number | null;
  TTFB: number | null;
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    const metrics: PerformanceMetrics = {
      CLS: null,
      INP: null,
      FCP: null,
      LCP: null,
      TTFB: null,
    };

    // Track Cumulative Layout Shift (CLS)
    onCLS((metric) => {
      metrics.CLS = metric.value;
      console.log('CLS:', metric.value);
      
      // Send to analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'CLS',
          value: Math.round(metric.value * 1000),
        });
      }
    });

    // Track Interaction to Next Paint (INP) - replaces FID
    onINP((metric) => {
      metrics.INP = metric.value;
      console.log('INP:', metric.value);
      
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'INP',
          value: Math.round(metric.value),
        });
      }
    });

    // Track First Contentful Paint (FCP)
    onFCP((metric) => {
      metrics.FCP = metric.value;
      console.log('FCP:', metric.value);
      
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'FCP',
          value: Math.round(metric.value),
        });
      }
    });

    // Track Largest Contentful Paint (LCP)
    onLCP((metric) => {
      metrics.LCP = metric.value;
      console.log('LCP:', metric.value);
      
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'LCP',
          value: Math.round(metric.value),
        });
      }
    });

    // Track Time to First Byte (TTFB)
    onTTFB((metric) => {
      metrics.TTFB = metric.value;
      console.log('TTFB:', metric.value);
      
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'TTFB',
          value: Math.round(metric.value),
        });
      }
    });

    // Store metrics in localStorage for debugging
    const storeMetrics = () => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('performance-metrics', JSON.stringify(metrics));
      }
    };

    // Store metrics after a delay to allow all metrics to be collected
    const timeoutId = setTimeout(storeMetrics, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return null;
};

export default PerformanceMonitor;