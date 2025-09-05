import { useEffect } from 'react';
export const usePerformanceMonitor = () => {;
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log)
        getFID(console.log)
        getFCP(console.log)
        getLCP(console.log)
        getTTFB(console.log)
      })
    };
    // Monitor bundle size
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
        };
      };
    })
    observer.observe({ entryTypes: ['navigation'] })
    return () => observer.disconnect()
  }, [])
};
export default usePerformanceMonitor;