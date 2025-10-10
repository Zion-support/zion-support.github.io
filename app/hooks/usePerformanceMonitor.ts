import { useEffect, useCallback } from 'react';

export const usePerformanceMonitor = () => {
  const measurePerformance = useCallback(() => {
    // Measure page load time
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
        
        // Track performance metrics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'performance_metric', {
            event_category: 'Performance',
            event_label: 'Page Load Time',
            value: Math.round(loadTime)
          });
          
          window.gtag('event', 'performance_metric', {
            event_category: 'Performance',
            event_label: 'DOM Content Loaded',
            value: Math.round(domContentLoaded)
          });
        }
      }
    }
  }, []);

  const measureWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return;

    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          const fcp = entry.startTime;
          
          if (window.gtag) {
            window.gtag('event', 'performance_metric', {
              event_category: 'Web Vitals',
              event_label: 'First Contentful Paint',
              value: Math.round(fcp)
            });
          }
        }
      });
    });

    fcpObserver.observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      if (lastEntry) {
        const lcp = lastEntry.startTime;
        
        if (window.gtag) {
          window.gtag('event', 'performance_metric', {
            event_category: 'Web Vitals',
            event_label: 'Largest Contentful Paint',
            value: Math.round(lcp)
          });
        }
      }
    });

    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const fid = entry.processingStart - entry.startTime;
        
        if (window.gtag) {
          window.gtag('event', 'performance_metric', {
            event_category: 'Web Vitals',
            event_label: 'First Input Delay',
            value: Math.round(fid)
          });
        }
      });
    });

    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      
      if (window.gtag) {
        window.gtag('event', 'performance_metric', {
          event_category: 'Web Vitals',
          event_label: 'Cumulative Layout Shift',
          value: Math.round(clsValue * 1000) // Convert to millis
        });
      }
    });

    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Cleanup observers
    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  const measureResourceTiming = useCallback(() => {
    if (typeof window === 'undefined') return;

    const resourceObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'resource') {
          const resource = entry as PerformanceResourceTiming;
          const loadTime = resource.responseEnd - resource.requestStart;
          
          // Only track slow resources (> 1 second)
          if (loadTime > 1000) {
            if (window.gtag) {
              window.gtag('event', 'performance_metric', {
                event_category: 'Resource Timing',
                event_label: resource.name,
                value: Math.round(loadTime)
              });
            }
          }
        }
      });
    });

    resourceObserver.observe({ entryTypes: ['resource'] });

    return () => {
      resourceObserver.disconnect();
    };
  }, []);

  const measureUserTiming = useCallback(() => {
    if (typeof window === 'undefined') return;

    const userTimingObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'measure') {
          const measure = entry as PerformanceMeasure;
          
          if (window.gtag) {
            window.gtag('event', 'performance_metric', {
              event_category: 'User Timing',
              event_label: measure.name,
              value: Math.round(measure.duration)
            });
          }
        }
      });
    });

    userTimingObserver.observe({ entryTypes: ['measure'] });

    return () => {
      userTimingObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    // Measure performance on component mount
    measurePerformance();
    
    // Set up web vitals monitoring
    const cleanupWebVitals = measureWebVitals();
    
    // Set up resource timing monitoring
    const cleanupResourceTiming = measureResourceTiming();
    
    // Set up user timing monitoring
    const cleanupUserTiming = measureUserTiming();

    // Cleanup on unmount
    return () => {
      if (cleanupWebVitals) cleanupWebVitals();
      if (cleanupResourceTiming) cleanupResourceTiming();
      if (cleanupUserTiming) cleanupUserTiming();
    };
  }, [measurePerformance, measureWebVitals, measureResourceTiming, measureUserTiming]);

  return {
    measurePerformance,
    measureWebVitals,
    measureResourceTiming,
    measureUserTiming
  };
};