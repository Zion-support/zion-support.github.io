import React, { useEffect } from 'react';
import { useWebVitals } from '../hooks/useWebVitals';

const PerformanceMonitor: React.FC = () => {
  // Use the web vitals hook
  useWebVitals({
    enabled: true,
    debug: process.env.NODE_ENV === 'development',
  });

  useEffect(() => {

    // Monitor page load performance
    const measurePageLoad = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
          
        // Log performance metrics in development
        if (process.env.NODE_ENV === 'development') {
          console.log(`[Performance] Page Load Time: ${loadTime}ms`);
          console.log(`[Performance] DOM Content Loaded: ${domContentLoaded}ms`);
        }
        }
      }
    };

    // Measure after page load
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