import { useEffect, useRef } from 'react';

export const usePerformanceMonitor = () => {
  const startTime = useRef<number>(Date.now());
  
  useEffect(() => {
    // Monitor page load performance
    const handleLoad = () => {
      const loadTime = Date.now() - startTime.current;
      console.log(`Page loaded in ${loadTime}ms`);
    };
    
    // Monitor memory usage
    const monitorMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        console.log('Memory usage:', {
          used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + ' MB',
          total: Math.round(memory.totalJSHeapSize / 1024 / 1024) + ' MB',
          limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024) + ' MB'
        });
      }
    };
    
    window.addEventListener('load', handleLoad);
    
    // Monitor memory every 30 seconds
    const memoryInterval = setInterval(monitorMemory, 30000);
    
    return () => {
      window.removeEventListener('load', handleLoad);
      clearInterval(memoryInterval);
    };
  }, []);
  
  return {
    startTime: startTime.current
  };
};