import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor performance metrics
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          console.warn('Navigation timing:', entry);
        } else if (entry.entryType === 'measure') {
          console.warn('Custom measure:', entry);
        }
      }
    });

    observer.observe({ entryTypes: ['navigation', 'measure'] });

    // Monitor Core Web Vitals
    try {
      import('web-vitals').then((webVitals) => {
        // Use dynamic imports to avoid TypeScript errors
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = webVitals as Record<string, unknown>;
        if (getCLS) (getCLS as (callback: (metric: unknown) => void) => void)(console.warn);
        if (getFID) (getFID as (callback: (metric: unknown) => void) => void)(console.warn);
        if (getFCP) (getFCP as (callback: (metric: unknown) => void) => void)(console.warn);
        if (getLCP) (getLCP as (callback: (metric: unknown) => void) => void)(console.warn);
        if (getTTFB) (getTTFB as (callback: (metric: unknown) => void) => void)(console.warn);
      });
    } catch (error) {
      console.error('Web Vitals not available:', error);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default PerformanceMonitor;
