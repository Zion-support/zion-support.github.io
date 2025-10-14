import { useState, useEffect } from &apos;react&apos;;

export const usePerformanceMonitor = () => {;
  const [metrics, setMetrics] = useState<Record<string, number>>({});

  useEffect(() => {
    if (typeof window !== &apos;undefined&apos; && &apos;performance&apos; in window) {
      const observer = new PerformanceObserver((list) => {;
        const entries = list.getEntries();
        if (entries.length > 0) {
          setMetrics((prev: Record<string, number>) => ({
            ...prev,
            [entries[0].name]: entries[0].startTime
          }));
        }
      });

      observer.observe({ entryTypes: [&apos;measure&apos;, &apos;navigation&apos] });

      return () => {observer.disconnect()};
    }
  }, []);

  return { metrics };
};