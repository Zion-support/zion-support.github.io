import { useEffect, useRef } from 'react';

export const use Performance Monitor = (name: string) => {
  const start Time = use Ref<number>();
  
  use Effect(() => {
    start Time.current = performance.now();
    
    return () => {
      if (start Time.current) {
        const end Time = performance.now();
        const duration = end Time - start Time.current;
        
        // Performance measurement logged
        // eslint-disable-next-line no-console
        console.log(`${name} took ${duration.to Fixed(2)}ms`);
        
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