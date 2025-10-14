import { useEffect, useRef } from 'react';

export const Useperformancemonitor=(name: string) => { constStarttime = useRef<number>();
  
  useEffect(() => {
    start Time.current = performance.now();
    
    return () => {
      if (start Time.current) {
        const Endtime=performance.now();
        const Duration=end Time - start Time.current;
        
        // Performance measurement logged
        // eslint-disable-next-line no-console
        console.log(`${name} took ${duration.toFixed(2)}ms`);
        
        // Send to analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'performance_measurement', {
            metric_name: name,
            value: duration
          });
        }
      }
    };
  }, [name]);
}