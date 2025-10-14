import { useState, useEffect  } from 'react';

export const usePerformance Monitor = () => {
  const [metrics, setMetrics] = useState<Record<string, number>>({});

  useEffect(() => {
    if (typeof window !=='undefined' && 'performance' in window) {
      const observer = newPerformance Observer((list) => {
        const entries = list.getEntries();
        if (entries.length > 0) {
          setMetrics((prev: Record<string, number>) => ({
            ...prev,[entries[0].name]: entries[0].startTime
          }));
        }
      });

      observer.observe({ entryTypes:['measure','navigation'] });

      return () => {
        observer.disconnect();
      };
    }
    return undefined;
  },[]);

  return { metrics };
};