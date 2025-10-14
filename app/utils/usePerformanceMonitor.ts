import { useEffect, useRef } from 'react';

export const usePerformanceMonitor = (name: string) => {
  const startTime = useRef<number>();
  
  useEffect(() => {
    startTime.current = performance.now();
    
    return () => {
      if (startTime.current) {
        const endTime = performance.now();
        const duration = endTime - startTime.current;
        
        // Performance measurement logged
        console.log(`${name} took ${duration.toFixed(2)}ms`);
        
        // Send to analytics
        if (typeof window !== 'undefined' && 'gtag' in window) {
          const gtag = (window as { gtag: (command: string, eventName: string, parameters: any) => void }).gtag;
          gtag('event', 'performance_measurement', {
            metric_name: name,
            metric_value: duration
          });
        }
      }
    };
  }, [name]);
};