// usePerformanceMonitor hook
import { useEffect, useRef } from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';

export function usePerformanceMonitor() {
  const metricsRef = useRef({});

  useEffect(() => {
    // Performance monitoring logic will be implemented here
    console.log('Performance monitor initialized');
  }, []);

  return {
    metrics: metricsRef.current,
    startMonitoring: () => console.log('Monitoring started'),
    stopMonitoring: () => console.log('Monitoring stopped')
  };
import { useState, useEffect, useRef } from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';

import { useEffect, useRef } from 'react';
interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

export default usePerformanceMonitor;
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
// usePerformanceMonitor
export const usePerformanceMonitor = () => {
  // Utility function implementation
  return null;
};
import { useEffect, useRef } from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useState, useEffect, useRef } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
export function usePerformanceMonitor() {
  const [state, setState] = useState<string | null>(null);
}

interface UsePerformanceMonitorReturn {
  metrics: PerformanceMetrics;
  isMonitoring: boolean;
  startMonitoring: () => void;
  stopMonitoring: () => void;
  resetMetrics: () => void;
}

export function usePerformanceMonitor(): UsePerformanceMonitorReturn {
  const [isMonitoring, setIsMonitoring] = useState(false);
  const metricsRef = useRef<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
    timeToInteractive: 0
  })
  });

  const [metrics, setMetrics] = useState<PerformanceMetrics>(metricsRef.current);

  useEffect(() => {
    const updateMetrics = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');

        const newMetrics: PerformanceMetrics = {
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
          largestContentfulPaint: 0, // Would need to be measured with LCP API
          firstInputDelay: 0, // Would need to be measured with FID API
          cumulativeLayoutShift: 0, // Would need to be measured with CLS API
          timeToInteractive: 0 // Would need to be calculated
        };

        setMetrics(newMetrics);
        metricsRef.current = newMetrics;
      }
    };

    updateMetrics();
  }, []);

  return { metrics, metricsRef };
};

  useEffect(() => {
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
    setState('initialized');
  }, []);

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

  });

  useEffect(() => {
    setState('initialized');
  }, []);

  return { state };
};

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
  });

  const observerRef = useRef<PerformanceObserver | null>(null);

  const updateMetrics = useCallback(() => {
    if (typeof window === 'undefined') return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      metricsRef.current.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
    }

    // Get Core Web Vitals
    const paintEntries = performance.getEntriesByType('paint');
    const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    if (fcpEntry) {
      metricsRef.current.firstContentfulPaint = fcpEntry.startTime;
    }

    // LCP would need to be measured with a PerformanceObserver
    // This is a simplified version
    const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
    if (lcpEntries.length > 0) {
      metricsRef.current.largestContentfulPaint = lcpEntries[lcpEntries.length - 1].startTime;
    }
  }, []);

  const startMonitoring = useCallback(() => {
    if (typeof window === 'undefined' || isMonitoring) return;

    setIsMonitoring(true);

    // Monitor LCP
    if ('PerformanceObserver' in window) {
      try {
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          metricsRef.current.largestContentfulPaint = lastEntry.startTime;
        });
        observerRef.current.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (error) {
        console.warn('PerformanceObserver not supported:', error);
      }
    }

    // Monitor FID
    if ('PerformanceObserver' in window) {
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            metricsRef.current.firstInputDelay = entry.processingStart - entry.startTime;
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (error) {
        console.warn('FID monitoring not supported:', error);
      }
    }

    // Monitor CLS
    if ('PerformanceObserver' in window) {
      try {
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          metricsRef.current.cumulativeLayoutShift = clsValue;
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        console.warn('CLS monitoring not supported:', error);
      }
    }

    updateMetrics();
  }, [isMonitoring, updateMetrics]);

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
}

export function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);

  const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {
    setMetrics(prev => prev ? { ...prev, ...newMetrics } : newMetrics as PerformanceMetrics);
  }, []);

  const startMonitoring = useCallback(() => {
    if (typeof window === 'undefined' || observerRef.current) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();

      entries.forEach((entry) => {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            updateMetrics({ firstContentfulPaint: entry.startTime });
          }
        } else if (entry.entryType === 'largest-contentful-paint') {
          updateMetrics({ largestContentfulPaint: entry.startTime });
        } else if (entry.entryType === 'first-input') {
          updateMetrics({ firstInputDelay: (entry as any).processingStart - entry.startTime });
        } else if (entry.entryType === 'layout-shift') {
          const layoutShiftEntry = entry as any;
          if (!layoutShiftEntry.hadRecentInput) {
            updateMetrics({
              cumulativeLayoutShift: (metrics?.cumulativeLayoutShift || 0) + layoutShiftEntry.value
            });
          }
        }
      });
    });

    try {
      observer.observe({
        entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift']
      });
      observerRef.current = observer;
      setIsMonitoring(true);
    } catch (error) {
      console.warn('Performance monitoring not supported:', error);
    }
  }, [updateMetrics, metrics?.cumulativeLayoutShift]);

  const stopMonitoring = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
      setIsMonitoring(false);
    }
  }, []);

  useEffect(() => {
    startMonitoring();
    return stopMonitoring;
  }, [startMonitoring, stopMonitoring]);

  return {
    metrics,
    isMonitoring,
    startMonitoring,
    stopMonitoring
  };
};

export default usePerformanceMonitor;

  return { state, metrics: metricsRef.current };
}

export default usePerformanceMonitor;
export default usePerformanceMonitor;
  const resetMetrics = useCallback(() => {
    metricsRef.current = {
      loadTime: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      firstInputDelay: 0,
      cumulativeLayoutShift: 0,
      timeToInteractive: 0
    };
  }, []);

  useEffect(() => {
    return () => {
      stopMonitoring();
    };
  }, [stopMonitoring]);

  return {
    metrics: metricsRef.current,
    isMonitoring,
    startMonitoring,
    stopMonitoring,
    resetMetrics
  };
}

export default usePerformanceMonitor;
}

export default usePerformanceMonitor;
