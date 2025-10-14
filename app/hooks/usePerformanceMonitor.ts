import { useState, useEffect } from 'react';

export const Useperformancemonitor=() => {
  const [metrics,SetMetrics] = useState<Record<string, number>>({});

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) { constObserver = new Performance Observer((list) => {
        const Entries=list.get Entries();
        if (entries.length > 0) {
          setMetrics((prev: Record<string, number>) => ({
            ...prev,
            [entries[0].name]: entries[0].start Time
          }));
        }
      });

      observer.observe({ entryTypes: ['measure', 'navigation'] });

      return () => {
        observer.disconnect();
      };
    }
    return undefined;
  }, []);

  return { metrics };
};