'use client';

import React, { useEffect } from 'react';

interface PerformanceMonitorProps {
  className?: string;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ className = '' }) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Load web-vitals for performance monitoring
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(() => {});
        getFID(() => {});
        getFCP(() => {});
        getLCP(() => {});
        getTTFB(() => {});
      });
    }

    // Monitor page load performance
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');

      if (process.env.NODE_ENV === 'development') {
        // Performance metrics logging disabled for production
      }

      // Monitor memory usage if available
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        if (process.env.NODE_ENV === 'development') {
          // Memory usage logging disabled for production
        }
      }
    });
  }, []);

  // Performance monitor doesn't render anything visible
  return null;
};

export default PerformanceMonitor;