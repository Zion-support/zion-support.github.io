import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Basic performance monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('Performance entry:', entry);
      }
    });

    observer.observe({ entryTypes: ['measure', 'navigation'] });

    return () => observer.disconnect();
  }, []);

  return null;
}