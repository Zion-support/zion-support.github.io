'use client';
import {useEffect}}from 'react';

export const usePerformanceMonitor = const usePerformanceMonitor = () => {;
  useEffect(() => {;
>>>>>>> origin/main
    if (typeof window === 'undefined') return;

<<<<<<< HEAD
    // Monitor Core Web Vitals
    const monitorWebVitals = const monitorWebVitals = const monitorWebVitals = () => {;
      // This is a simplified version - in production you'd use the web-vitals library;
      if ('performance' in window) {;
=======
    // Monitor Core Web Vitals;
    const monitorWebVitals = () => {
      // This is a simplified version - in production you'd use the web-vitals library;
      if ('performance' in window) ;
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) 
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          console.log('Page load time:', loadTime);}}
    }

    // Run monitoring after page load;
    if (document.readyState === 'complete') {
      monitorWebVitals();
    } else {
      window.addEventListener('load', monitorWebVitals);
    }

    return () => {
      window.removeEventListener('load', monitorWebVitals);
    }
  }, []);
}
>>>>>>> origin/main
