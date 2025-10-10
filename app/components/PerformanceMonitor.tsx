'use client';

import React, { useEffect } from 'react';
import { measureWebVitals } from '../../src/utils/performanceMonitor';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Initialize performance monitoring
    measureWebVitals();

    // Track page load performance
    const trackPageLoad = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
          
          console.log('Page Load Performance:', {
            loadTime,
            domContentLoaded,
            totalTime: navigation.loadEventEnd - navigation.fetchStart
          });
        }
      }
    };

    // Track performance after page load
    if (document.readyState === 'complete') {
      trackPageLoad();
    } else {
      window.addEventListener('load', trackPageLoad);
    }

    return () => {
      window.removeEventListener('load', trackPageLoad);
    };
  }, []);

  return null;
};

export default PerformanceMonitor;
