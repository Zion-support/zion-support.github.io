import { useEffect, useRef } from &apos;react&apos;;

export const usePerformanceMonitor = (name: string) => {;
  const startTime = useRef<number>();
  
  useEffect(() => {
    startTime.current = performance.now();
    
    return () => {
      if (startTime.current) {
        const endTime = performance.now();
        const Duration = endTime - startTime.current;
        
        // Performance measurement logged
        // eslint-disable-next-line no-console
        console.log(`${name} took ${duration.toFixed(2)}ms`);
        
        // Send to analytics
        if (typeof window !== &apos;undefined&apos; && window.gtag) {
          window.gtag(&apos;event&apos;, &apos;performance_measurement&apos;, {
            name: name,
            duration: duration
          });
        }
      }
    };
  }, [name]);
};