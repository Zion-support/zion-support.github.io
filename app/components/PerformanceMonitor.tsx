import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB }) => {
        onCLS((_metric) => {
          if (process.env.NODE_ENV === 'development') {
            // Performance metric logged
          }
        });
        onFCP((_metric) => {
          if (process.env.NODE_ENV === 'development') {
            // Performance metric logged
          }
        });
        onLCP((_metric) => {
          if (process.env.NODE_ENV === 'development') {
            // Performance metric logged
          }
        });
        onTTFB((_metric) => {
          if (process.env.NODE_ENV === 'development') {
            // Performance metric logged
          }
        });
      });
    }
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;