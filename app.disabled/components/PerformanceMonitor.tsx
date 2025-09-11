'use client';

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Basic performance monitoring
    if (typeof window !== 'undefined') {
      // Monitor page load performance
      window.addEventListener('load', () => {
        if ('performance' in window) {
          const perfData = performance.getEntriesByType(
            'navigation'
          )[0] as PerformanceNavigationTiming;
          // console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms'); // Disabled for production
        }
      });

      // Monitor Core Web Vitals
      if ('web-vitals' in window) {
        // This would be implemented with the web-vitals library
        // console.log('Web Vitals monitoring enabled'); // Disabled for production
      }
    }
  }, []);

  return null; // This component doesn't render anything
}
