'use client';
import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    const initPerformanceMonitoring = async () => {
      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
        
        if (typeof window !== 'undefined') {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        }
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('Performance monitoring not available:', error);
        }
      }
    };

    initPerformanceMonitoring();
  }, []);

  return null;
};

export default PerformanceMonitor;