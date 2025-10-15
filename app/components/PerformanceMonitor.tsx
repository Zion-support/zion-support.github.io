import React, { useEffect } from 'react';
import { errorHandler } from '../utils/errorHandler';

interface PerformanceMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
        const logMetric = (metric: PerformanceMetric) => {
          // Log to console in development
          if (process.env.NODE_ENV === 'development') {
            console.log(`[Performance] ${metric.name}:`, metric.value);
          }
          
          // Send to analytics in production
          if (process.env.NODE_ENV === 'production') {
            // You can integrate with analytics services here
            // Example: gtag('event', 'web_vitals', { ...metric });
          }
        };

        onCLS(logMetric);
        onFCP(logMetric);
        onLCP(logMetric);
        onTTFB(logMetric);
        onINP(logMetric);
      }).catch((error) => {
        errorHandler.reportError(error, { component: 'PerformanceMonitor' });
      });
    }

    // Monitor page load performance
    const measurePageLoad = () => {
      if (performance.timing) {
        const timing = performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;
        
        if (process.env.NODE_ENV === 'development') {
          console.log(`[Performance] Page load time: ${loadTime}ms`);
        }
      }
    };

    // Measure when page is fully loaded
    if (document.readyState === 'complete') {
      measurePageLoad();
    } else {
      window.addEventListener('load', measurePageLoad);
    }

    return () => {
      window.removeEventListener('load', measurePageLoad);
    };
  }, []);

  return null;
};

export default PerformanceMonitor;