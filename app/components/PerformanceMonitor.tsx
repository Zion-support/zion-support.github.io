import React, { useEffect } from 'react';
import { analytics } from '../utils/analytics';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Initialize analytics
    analytics.init();

    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'web-vitals' in window) {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB }) => {
        const reportMetric = (metric: any) => {
          // Track performance metrics
          analytics.trackPerformance(metric.name, metric.value);
          
          // Log in development
          if (process.env.NODE_ENV === 'development') {
            console.log('Performance Metric:', metric);
          }
        };

        onCLS(reportMetric);
        onFCP(reportMetric);
        onLCP(reportMetric);
        onTTFB(reportMetric);
      }).catch((error) => {
        if (process.env.NODE_ENV === 'development') {
          console.warn('Failed to load web-vitals:', error);
        }
      });
    }
  }, []);

  return null;
};

export default PerformanceMonitor;