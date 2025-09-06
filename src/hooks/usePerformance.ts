import { useEffect } from 'react';

export function usePerformance() {
  useEffect(() => {
    // Performance monitoring hook
    const startTime = performance.now();
    
    // Track page load performance
    const handleLoad = () => {
      const loadTime = performance.now() - startTime;
      console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
      
      // In production, you might want to send this to analytics
      if (process.env.NODE_ENV === 'production') {
        // Send to analytics service
        // analytics.track('page_load_time', { loadTime });
      }
    };
    
    // Track when component is mounted
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }
    
    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
}