'use client';
import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    const initPerformanceMonitoring = async () => {
      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
        
        if (typeof window !== 'undefined') {
          getCLS((metric) => {
            // Log performance metrics in development
            if (process.env.NODE_ENV === 'development') {
              // console.log('CLS:', metric);
            }
          });
          getFID((metric) => {
            if (process.env.NODE_ENV === 'development') {
              // console.log('FID:', metric);
            }
          });
          getFCP((metric) => {
            if (process.env.NODE_ENV === 'development') {
              // console.log('FCP:', metric);
            }
          });
          getLCP((metric) => {
            if (process.env.NODE_ENV === 'development') {
              // console.log('LCP:', metric);
            }
          });
          getTTFB((metric) => {
            if (process.env.NODE_ENV === 'development') {
              // console.log('TTFB:', metric);
            }
          });
        }
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          // console.warn('Performance monitoring not available:', error);
        }
      }
    };

    initPerformanceMonitoring();
  }, []);

  return null;
};

export default PerformanceMonitor;
