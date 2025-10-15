import { useEffect, useRef } from "react";
export const usePerformanceMonitor = (name: string) => {
  useEffect(() => {
    startTime.current = performance.now();
  return () => {
      if (startTime.current) {
        const endTime = performance.now();

const duration = endTime - startTime.current;
        // Performance measurement logged
        // eslint-disable-next-line no-console
        }ms`);
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

export default NotFoundPage;