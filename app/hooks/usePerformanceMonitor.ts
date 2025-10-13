<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// usePerformanceMonitor hook
import { useEffect, useRef } from 'react';

export function usePerformanceMonitor() {
  const metricsRef = useRef({});

  useEffect(() => {
    // Performance monitoring logic will be implemented here
    console.log('Performance monitor initialized');
  }, []);
<<<<<<< HEAD
<<<<<<< HEAD

  return {
    metrics: metricsRef.current,
    startMonitoring: () => console.log('Monitoring started'),
    stopMonitoring: () => console.log('Monitoring stopped')
  };
}

export default usePerformanceMonitor;
=======
export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(amount);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
=======
// usePerformanceMonitor
export const usePerformanceMonitor = () => {
  // Utility function implementation
  return null;
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======
import { useEffect, useRef } from 'react';
=======
import { useState, useEffect, useRef, useCallback } from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
=======
import { useState, useEffect, useRef } from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2fa5

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

<<<<<<< HEAD
export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
=======
export function usePerformanceMonitor() {
  const [state, setState] = useState<string | null>(null);
  const metricsRef = useRef<PerformanceMetrics>({
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2fa5
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
    timeToInteractive: 0
<<<<<<< HEAD
<<<<<<< HEAD
  })

  useEffect(() => {
<<<<<<< HEAD
    const measurePerformance = () => {
      if (typeof window === 'undefined' || !window.performance) return

      // Measure page load time
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        metricsRef.current.loadTime = navigation.loadEventEnd - navigation.loadEventStart
      }

      // Measure Core Web Vitals
      const measureWebVitals = () => {
        // First Contentful Paint (FCP)
        const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0]
        if (fcpEntry) {
          metricsRef.current.firstContentfulPaint = fcpEntry.startTime
        }

        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          metricsRef.current.largestContentfulPaint = lastEntry.startTime
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            metricsRef.current.firstInputDelay = entry.startTime - entry.startTime
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
}

export default usePerformanceMonitor
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
    setState('initialized');
  }, []);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
=======


import { useState, useEffect } from 'react';

interface PerformanceMetrics {,
    loadTime: number;,
    firstContentfulPaint: number;,
    largestContentfulPaint: number;,
    firstInputDelay: number;,
    cumulativeLayoutShift: number;,
    timeToInteractive: number;
}

export function usePerformanceMonitor() {
  const [state, setState] = useState<string | null>(null);
  const metricsRef = useRef<PerformanceMetrics>({,
    loadTime: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      firstInputDelay: 0,
      cumulativeLayoutShift: 0,
      timeToInteractive: 0
  });

=======
  });
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2fa5
  useEffect(() => {
    setState('initialized');
  }, []);
<<<<<<< HEAD

  return { state };
};

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======
  });

  const [isMonitoring, setIsMonitoring] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return;
    }

    try {
      // Measure page load time
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;

      // Measure Core Web Vitals
      const paintEntries = performance.getEntriesByType('paint');
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcp = paintEntries.find(entry => entry.name === 'largest-contentful-paint');

      setMetrics(prev => ({
        ...prev,
        loadTime,
        firstContentfulPaint: fcp ? fcp.startTime : 0,
        largestContentfulPaint: lcp ? lcp.startTime : 0
      }));
    } catch (error) {
      console.error('Error measuring performance:', error);
    }
  }, []);

  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    measurePerformance();
  }, [measurePerformance]);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (isMonitoring) {
      startMonitoring();
    }

    return () => {
      stopMonitoring();
    };
  }, [isMonitoring, startMonitoring, stopMonitoring]);

  return {
    metrics,
    isMonitoring,
    startMonitoring,
    stopMonitoring
  };
};

export default usePerformanceMonitor;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
=======
  
  return { state, metrics: metricsRef.current };
}

export default usePerformanceMonitor;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2fa5
