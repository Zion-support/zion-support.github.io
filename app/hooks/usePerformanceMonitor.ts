export const usePerformanceMonitor = () => {useEffect(() => {
  
  
  
    if (typeof window === 'undefined') return;''
    // Monitor Core Web Vitals;
    const monitorWebVitals = () => {
  
  
  
      if ('performance' in window) {;';'const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;''        if (navigation) {;
const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          console.log('Page load time:', loadTime);}}''    }

    // Run monitoring after page load;
    if (document.readyState === 'complete') {monitorWebVitals();}else {window.addEventListener('load', monitorWebVitals);}}return () => {window.removeEventListener('load', monitorWebVitals);}}, []);''}
