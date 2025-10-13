<<<<<<< HEAD

import { useEffect, useCallback } from react;

export const usePerformanceMonitor = () => {;;;

  const measurePerformance = useCallback(() => {;;;

    // Measure page load time
    if (typeof window !== 'undefined' && 'performance in window) {
      const navigation = performance.getEntriesByType(navigation)[0] as PerformanceNavigationTiming;;

      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;;

        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;;

        // Track performance metrics
        if (typeof window !== 'undefined && window.gtag) {
          window.gtag('event', 'performance_metric, {
            event_category: 'Performance,
            event_label: 'Page Load Time,
=======
import React from 'react';


            value: Math.round(loadTime)
          });

        }

      }

    }

  }, []);

>>>>>>> origin/main
  const measureResourceTiming = useCallback(() => {;;

    if (typeof window !== 'undefined' && 'performance in window) {'
      const resources = performance.getEntriesByType(resource);;

      resources.forEach((resource: PerformanceResourceTiming) => {
        const loadTime = resource.responseEnd - resource.startTime;;

        // Track slow resources;
        if (loadTime > 1000) {
<<<<<<< HEAD
          if (typeof window !== 'undefined && window.gtag) {
            window.gtag('event', 'slow_resource, {
              event_category: 'Performance,
=======
          if (typeof window !== 'undefined && window.gtag) {'
            window.gtag('event', 'slow_resource, {'
              event_category: 'Performance,'
              event_label: resource.name,
              value: Math.round(loadTime)
            });

          }

        }

      });

    }

  }, []);

>>>>>>> origin/main
  const measureMemoryUsage = useCallback(() => {;;

    if (typeof window !== 'undefined' && 'performance in window && (performance as any).memory) {'
      const memory = (performance as any).memory;;

      const memoryUsage = {;;

<<<<<<< HEAD

      if (memoryUsage.used > memoryUsage.limit * 0.8) {
        if (typeof window !== 'undefined && window.gtag) {
          window.gtag('event', 'high_memory_usage, {
            event_category: 'Performance,
            event_label: 'Memory Usage,
  useEffect(() => {
    const handleLoad = () => {;;

    if (document.readyState === 'complete) {
      window.addEventListener(load, handleLoad);

    return () => {
      window.removeEventListener(load, handleLoad);

=======
        used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
        total: Math.round(memory.totalJSHeapSize / 1024 / 1024),
        limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024)
      };

      if (memoryUsage.used > memoryUsage.limit * 0.8) {
        if (typeof window !== 'undefined && window.gtag) {'
          window.gtag('event', 'high_memory_usage, {'
            event_category: 'Performance,'
            event_label: 'Memory Usage,'
            value: memoryUsage.used;
          });

        }

      }

    }

  }, []);

  useEffect(() => {
    const handleLoad = () => {;;

      measurePerformance();

      measureResourceTiming();

      measureMemoryUsage();

    };

    if (document.readyState === 'complete) {'
      handleLoad();

    } else {
      window.addEventListener(load, handleLoad);

    }

    // Set up periodic monitoring;
    const performanceInterval = setInterval(measureResourceTiming, 30000);;

    const memoryInterval = setInterval(measureMemoryUsage, 60000);;

    return () => {
      window.removeEventListener(load, handleLoad);

      clearInterval(performanceInterval);

      clearInterval(memoryInterval);

    };

  }, [measurePerformance, measureResourceTiming, measureMemoryUsage]);

  return {}
    measurePerformance,
    measureResourceTiming,
    measureMemoryUsage;
  };

};
'use client';
import {useEffect}}from 'react';

>>>>>>> origin/main
export const usePerformanceMonitor = () => {useEffect(() => {
      // This is a simplified version - in production you'd use the web-vitals library;'
      if ('performance' in window) {
      if ('performance' in window) {;
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          console.log('Page load time:', loadTime);}}
    // Run monitoring after page load;
<<<<<<< HEAD
    if (document.readyState === 'complete') {monitorWebVitals();}else {window.addEventListener('load', monitorWebVitals);}}return () => {window.removeEventListener('load', monitorWebVitals);}}, []);
=======
    if (document.readyState === 'complete') {monitorWebVitals();}else {window.addEventListener('load', monitorWebVitals);}}return () => {window.removeEventListener('load', monitorWebVitals);}}, []);'
}
>>>>>>> origin/main
