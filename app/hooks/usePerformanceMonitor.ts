'use client';
import {useEffect}}from 'react';

<<<<<<< HEAD
export const usePerformanceMonitor = const usePerformanceMonitor = () => {;
=======
<<<<<<< HEAD
export const usePerformanceMonitor = () => {useEffect(() => {
=======
export const usePerformanceMonitor = () => {
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
  useEffect(() => {;
>>>>>>> origin/main
    if (typeof window === 'undefined') return;

<<<<<<< HEAD
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
=======
    // Monitor Core Web Vitals;
    const monitorWebVitals = () => {
<<<<<<< HEAD
      // This is a simplified version - in production you'd use the web-vitals library;
      if ('performance' in window) {
=======
      // This is a simplified version - in production you'd use the web-vitals library
      if ('performance' in window) {;
>>>>>>> origin/main
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) 
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          console.log('Page load time:', loadTime);}}
    }

<<<<<<< HEAD
    // Run monitoring after page load;
=======
<<<<<<< HEAD
    // Run monitoring after page load;
    if (document.readyState === 'complete') {monitorWebVitals();}else {window.addEventListener('load', monitorWebVitals);}}return () => {window.removeEventListener('load', monitorWebVitals);}}, []);
}
=======
    // Run monitoring after page load
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
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
