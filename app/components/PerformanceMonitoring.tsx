import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

    });
    resourceObserver.observe({ entryTypes: ['resource'] });

    return () => resourceObserver.disconnect();
  }, []);

  // Monitor memory usage
  const monitorMemoryUsage = useCallback(() => {
    if (typeof window === 'undefined' || !('memory' in performance)) return;

    const checkMemory = () => {
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number }).memory;
      if (memory) {
        const used = memory.usedJSHeapSize / 1024 / 1024; // MB
        const total = memory.totalJSHeapSize / 1024 / 1024; // MB
        const limit = memory.jsHeapSizeLimit / 1024 / 1024; // MB
        
        ,
          total: Math.round(total),
          limit: Math.round(limit)
        });

        if (used / limit > 0.8) {

    const interval = setInterval(checkMemory, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cleanup1 = monitorCoreWebVitals();
    const cleanup2 = monitorResourcePerformance();
    const cleanup3 = monitorMemoryUsage();

    return () => {
      cleanup1?.();
      cleanup2?.();
      cleanup3?.();
    };
  }, [monitorCoreWebVitals, monitorResourcePerformance, monitorMemoryUsage]);

  return (
  );
}