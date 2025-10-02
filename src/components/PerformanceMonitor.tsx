import React, { useEffect } from 'react';
import { measurePerformance } from '../utils/performance';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    const logPerformanceMetrics = () => {
      const metrics = measurePerformance();
      if (metrics) {
        console.log('Performance Metrics:', metrics);
        
        // Send to analytics service in production
        if (process.env.NODE_ENV === 'production') {
          // Example: sendToAnalytics('performance', metrics);
        }
      }
    };

    // Log performance after page load
    if (document.readyState === 'complete') {
      logPerformanceMetrics();
    } else {
      window.addEventListener('load', logPerformanceMetrics);
    }

    // Monitor Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }

    return () => {
      window.removeEventListener('load', logPerformanceMetrics);
    };
  }, []);

  return null;
};

export default PerformanceMonitor;