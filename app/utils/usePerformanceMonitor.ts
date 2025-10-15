import { useEffect, useRef } from "react";
export const usePerformanceMonitor = (name: string) => {
  const startTime = useRef<number>();

  useEffect(() => {
    startTime.current = performance.now();

    return () => {
      if (startTime.current) {
        const endTime = performance.now();
        const duration = endTime - startTime.current;
        
        // Performance measurement logged
        // eslint-disable-next-line no-console
        console.log(`${name} took ${duration.toFixed(2)}ms`);
        
        // Send to analytics
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'performance_measurement', {
            name: name,
            duration: duration
          });
        }
      }
    };
  }, [name]);
};