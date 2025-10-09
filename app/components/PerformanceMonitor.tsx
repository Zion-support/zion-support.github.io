import React, { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  CLS: number;
  FID: number;
  FCP: number;
  LCP: number;
  TTFB: number;
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    const metrics: Partial<PerformanceMetrics> = {};

    const sendToAnalytics = (metric: any) => {
      // Send to Google Analytics or other analytics service
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.value),
          non_interaction: true,
        });
      }
    };

    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);

    // Log performance metrics in development
    if (process.env.NODE_ENV === 'development') {
      getCLS((metric) => console.log('CLS:', metric));
      getFID((metric) => console.log('FID:', metric));
      getFCP((metric) => console.log('FCP:', metric));
      getLCP((metric) => console.log('LCP:', metric));
      getTTFB((metric) => console.log('TTFB:', metric));
    }
  }, []);

  return null;
};

export default PerformanceMonitor;