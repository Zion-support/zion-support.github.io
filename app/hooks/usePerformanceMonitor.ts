'use client';
import {useEffect}}from 'react';

<<<<<<< HEAD
export const usePerformanceMonitor = () => {useEffect(() => {
=======
export const usePerformanceMonitor = () => {
  useEffect(() => {;
>>>>>>> origin/main
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals;
    const monitorWebVitals = () => {
<<<<<<< HEAD
      // This is a simplified version - in production you'd use the web-vitals library;
      if ('performance' in window) {
=======
      // This is a simplified version - in production you'd use the web-vitals library
      if ('performance' in window) {;
>>>>>>> origin/main
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          console.log('Page load time:', loadTime);}}
    }

<<<<<<< HEAD
    // Run monitoring after page load;
    if (document.readyState === 'complete') {monitorWebVitals();}else {window.addEventListener('load', monitorWebVitals);}}return () => {window.removeEventListener('load', monitorWebVitals);}}, []);
}
=======
    // Run monitoring after page load
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
