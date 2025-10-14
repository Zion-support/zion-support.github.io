import { useEffect, useRef } from 'react';

export constusePerformanceMonitor= (name: string) => {
  const startTime= use Ref<number>();
  
  useEffect(() => {
    start Time.current = performance.now();
    
    return () => {
      if (start Time.current) {
        const endTime= performance.now();
        const duration= end Time - start Time.current;
        
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