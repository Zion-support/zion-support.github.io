<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
import { useEffect, useCallback } from react;

export const usePerformanceMonitor = () => {;;;

  const measurePerformance = useCallback(() => {;;;

<<<<<<< HEAD
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
export const usePerformanceMonitor = () => {}
  const measurePerformance = useCallback(() => {}
    // Measure page load time
    if (typeof window !== 'undefined' && 'performance' in window) {}
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {}
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
        
        // Track performance metrics
        if (typeof window !== 'undefined' && window.gtag) {}
          window.gtag('event', 'performance_metric', {}
            event_category: 'Performance',
            event_label: 'Page Load Time',
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
            value: Math.round(loadTime)
          });

        }

      }

    }

  }, []);

<<<<<<< HEAD
  const measureResourceTiming = useCallback(() => {;;

    if (typeof window !== 'undefined' && 'performance in window) {
      const resources = performance.getEntriesByType(resource);;

      resources.forEach((resource: PerformanceResourceTiming) => {
        const loadTime = resource.responseEnd - resource.startTime;;

        // Track slow resources
        if (loadTime > 1000) {
          if (typeof window !== 'undefined && window.gtag) {
            window.gtag('event', 'slow_resource, {
              event_category: 'Performance,
=======
  const measureResourceTiming = useCallback(() => {}
    if (typeof window !== 'undefined' && 'performance' in window) {}
      const resources = performance.getEntriesByType('resource');
      
      resources.forEach((resource: PerformanceResourceTiming) => {}
        const loadTime = resource.responseEnd - resource.startTime;
        
        // Track slow resources
        if (loadTime > 1000) {}
          if (typeof window !== 'undefined' && window.gtag) {}
            window.gtag('event', 'slow_resource', {}
              event_category: 'Performance',
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
              event_label: resource.name,
              value: Math.round(loadTime)
            });

          }

        }

      });

    }

  }, []);

<<<<<<< HEAD
  const measureMemoryUsage = useCallback(() => {;;

    if (typeof window !== 'undefined' && 'performance in window && (performance as any).memory) {
      const memory = (performance as any).memory;;

      const memoryUsage = {;;

=======
  const measureMemoryUsage = useCallback(() => {}
    if (typeof window !== 'undefined' && 'performance' in window && (performance as any).memory) {}
      const memory = (performance as any).memory;
      const memoryUsage = {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
        used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
        total: Math.round(memory.totalJSHeapSize / 1024 / 1024),
        limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024)
      };
<<<<<<< HEAD

      if (memoryUsage.used > memoryUsage.limit * 0.8) {
        if (typeof window !== 'undefined && window.gtag) {
          window.gtag('event', 'high_memory_usage, {
            event_category: 'Performance,
            event_label: 'Memory Usage,
=======
      
      if (memoryUsage.used > memoryUsage.limit * 0.8) {}
        if (typeof window !== 'undefined' && window.gtag) {}
          window.gtag('event', 'high_memory_usage', {}
            event_category: 'Performance',
            event_label: 'Memory Usage',
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
            value: memoryUsage.used
          });

        }

      }

    }

  }, []);

<<<<<<< HEAD
  useEffect(() => {
    const handleLoad = () => {;;

=======
  useEffect(() => {}
    const handleLoad = () => {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      measurePerformance();

      measureResourceTiming();

      measureMemoryUsage();

    };

<<<<<<< HEAD
    if (document.readyState === 'complete) {
=======
    if (document.readyState === 'complete') {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      handleLoad();

    } else {
<<<<<<< HEAD
      window.addEventListener(load, handleLoad);

=======
      window.addEventListener('load', handleLoad);}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
    }

    // Set up periodic monitoring
    const performanceInterval = setInterval(measureResourceTiming, 30000);;

    const memoryInterval = setInterval(measureMemoryUsage, 60000);;

<<<<<<< HEAD
    return () => {
      window.removeEventListener(load, handleLoad);

=======
    return () => {}
      window.removeEventListener('load', handleLoad);
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      clearInterval(performanceInterval);

      clearInterval(memoryInterval);

    };

  }, [measurePerformance, measureResourceTiming, measureMemoryUsage]);

  return {}
    measurePerformance,
    measureResourceTiming,
    measureMemoryUsage
  };

=======
import { useEffect } from 'react';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Performance monitoring logic
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('Performance entry:', entry);
      }
    });

    observer.observe({ entryTypes: ['measure', 'navigation'] });

    return () => observer.disconnect();
  }, []);
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
};
>>>>>>> origin/cursor/ad-creation-and-management-f267
=======
'use client';
import {useEffect}}from 'react';

<<<<<<< HEAD
export const usePerformanceMonitor = () => {useEffect(() => {
      // This is a simplified version - in production you'd use the web-vitals library;
      if ('performance' in window) {
      if ('performance' in window) {;
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          console.log('Page load time:', loadTime);}}
    // Run monitoring after page load;
    if (document.readyState === 'complete') {monitorWebVitals();}else {window.addEventListener('load', monitorWebVitals);}}return () => {window.removeEventListener('load', monitorWebVitals);}}, []);
=======
        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            metricsRef.current.firstInputDelay = entry.processingStart - entry.startTime
          })
        })
        fidObserver.observe({ entryTypes: ['first-input'] })

        // Cumulative Layout Shift (CLS)
        let clsValue = 0
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
            }
          })
          metricsRef.current.cumulativeLayoutShift = clsValue
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })

        // Time to Interactive (TTI) - approximation
        const ttiObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          metricsRef.current.timeToInteractive = lastEntry.startTime
        })
        ttiObserver.observe({ entryTypes: ['measure'] })

        // Cleanup observers after 10 seconds
        setTimeout(() => {
          lcpObserver.disconnect()
          fidObserver.disconnect()
          clsObserver.disconnect()
          ttiObserver.disconnect()
        }, 10000)
      }

      // Log performance metrics
      const logMetrics = () => {
        // Send to analytics service
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'performance_metrics', {
            load_time: metricsRef.current.loadTime,
            first_contentful_paint: metricsRef.current.firstContentfulPaint,
            largest_contentful_paint: metricsRef.current.largestContentfulPaint,
            first_input_delay: metricsRef.current.firstInputDelay,
            cumulative_layout_shift: metricsRef.current.cumulativeLayoutShift,
            time_to_interactive: metricsRef.current.timeToInteractive
          })
        }
      }

      // Start measuring after page load
      if (document.readyState === 'complete') {
        measureWebVitals()
      } else {
        window.addEventListener('load', measureWebVitals)
      }

      // Log metrics after 5 seconds
      setTimeout(logMetrics, 5000)
    }

    measurePerformance()

    // Cleanup
    return () => {
      // Cleanup is handled by the setTimeout in measureWebVitals
    }
  }, [])

  return metricsRef.current
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-03c6
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
