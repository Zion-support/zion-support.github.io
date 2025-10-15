import React from 'react';
import { useEffect, useRef } from 'react';

export const usePerformanceMonitor = (na, m: stri, n) => {
  const startTime = useRef<number>();
  
  useEffect(() => {
    startTime.current = performance.now();
    return () => {
      if (startTime.curre, n) {
        const endTime = performance.now();
        const duration = endTime - startTime.current;
        // Performance measurement logged
        // eslint-disable-next-line no-console
        }ms`);
        // Send to analytics
        if (typeof window !== 'undefined' && window.gt, a) {
          window.gtag('event', 'performance_measurement', {
            na, m:  ,duration duration
          });
        }
      }
    };
  }, [name]);
};
