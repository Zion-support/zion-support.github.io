import { useState, useEffect, useCallback } from 'react';
  tti: number | null;
  overallScore: number;
  isLoaded: boolean;
}

  fcp: number | null; // First Contentful Paint
  lcp: number | null; // Largest Contentful Paint
  fid: number | null; // First Input Delay
  cls: number | null; // Cumulative Layout Shift
  ttfb: number | null; // Time to First Byte
  domLoad: number | null; // DOM Content Loaded
  windowLoad: number | null; // Window Load
  navigationStart: number | null;

}
interface PerformanceObserverEntry {

  name: string;
  entryType: string;
  startTime: number;
  duration: number;
  value?: number;
}

// Extended interfaces for specific performance entry types
export interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  startTime: number}
export interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
}

// Type guards
function isLayoutShift(entry: PerformanceEntry): entry is LayoutShift {
  return entry.entryType === 'layout-shift';
}

function isPerformanceEventTiming(entry: PerformanceEntry): entry is PerformanceEventTiming {
  return entry.entryType === 'first-input';
}

export function usePerformance() {
    tti: null,
    overallScore: 0,
    isLoaded: false,
  });
  const [observers, setObservers] = useState<any>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
// Removed unused:   const observerRef = useRef<PerformanceObserver | null>(null);
  useEffect(() => {
    // Check if PerformanceObserver is supported
    if (!('PerformanceObserver' in window)) {
      // // // console.warn('PerformanceObserver not supported');
      return;
    }
    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    });

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcpEntry = entries[entries.length - 1];
      if (lcpEntry) {
        setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
      }
    });

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fidEntry = entries[entries.length - 1] as FirstInputEntry;
      if (fidEntry && 'processingStart' in fidEntry) {
        setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
      }
    });

    // Cumulative Layout Shift (CLS)
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      for (const entry of list.getEntries()) {
        const layoutShiftEntry = entry as LayoutShiftEntry;
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value;
        }
      }
      setMetrics(prev => ({ ...prev, cls: clsValue }));
    });

    // Start observing
    try {
      fcpObserver.observe({ entryTypes: ['paint'] });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      // // // console.warn('Error setting up performance observers:', error);
    }
    // Navigation timing metrics
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({
        ...prev,
        ttfb: anynavigationEntry.responseStart - navigationEntry.requestStart,
        domLoad: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart,
        windowLoad: navigationEntry.loadEventEnd - navigationEntry.loadEventStart
      }));
    }

    // Cleanup
    return ()  => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  return metrics;
}
  const measure = useCallback((name: string, startMark: string, endMark: string) => {
    if ('performance' in window) {
      try {
        performance.measure(name, startMark, endMark);
        const measure = performance.getEntriesByName(name)[0];
        return measure ? Math.round(measure.duration) : null;
      } catch (error) {
        console.warn('Error measuring performance:', error);
        return null;
      }
    }
    return null;
  }, []);

  const clearMarks = useCallback((name?: string) => {
    if ('performance' in window) {
      if (name) {
        performance.clearMarks(name);
      } else {
        performance.clearMarks();
      }
    }
  }, []);

  const clearMeasures = useCallback((name?: string) => {
    if ('performance' in window) {
      if (name) {
        performance.clearMeasures(name);
      } else {
        performance.clearMeasures();
      }
    }
  }, []);

  return { mark, measure, clearMarks, clearMeasures };
