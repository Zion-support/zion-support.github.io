import React, { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Track Core Web Vitals
    getCLS((metric) => {
      console.log('CLS:', metric);
      // Send to analytics service
    });

    getFID((metric) => {
      console.log('FID:', metric);
      // Send to analytics service
    });

    getFCP((metric) => {
      console.log('FCP:', metric);
      // Send to analytics service
    });

    getLCP((metric) => {
      console.log('LCP:', metric);
      // Send to analytics service
    });

    getTTFB((metric) => {
      console.log('TTFB:', metric);
      // Send to analytics service
    });

    // Track page load performance
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        console.log('Page Load Time:', navigation.loadEventEnd - navigation.loadEventStart);
      });
    }
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
