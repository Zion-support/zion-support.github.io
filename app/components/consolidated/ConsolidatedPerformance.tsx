import React from 'react';
import ErrorBoundary from '../ErrorBoundary';


  // Monitor TTFB
  const monitorTTFB = useCallback(() => {if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;}
            setMetrics(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }));
          });
      });

      try{}
        observer.observe({ entryTypes: ['navigation'] });

  useEffect(() => {// Initialize all performance optimizations
    preloadCriticalResources();
    implementLazyLoading();
    addResourceHints();
    monitorCoreWebVitals();
    monitorTTFB();
    
    const cleanup = optimizeScrollPerformance();

    return cleanup;}
  }, [preloadCriticalResources, implementLazyLoading, addResourceHints, monitorCoreWebVitals, monitorTTFB, optimizeScrollPerformance]);

  // Log metrics for debugging (remove in production)
  useEffect(() => {if (process.env.NODE_ENV === 'development') {

  return()
  );
}