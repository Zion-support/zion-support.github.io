<<<<<<< HEAD
=======
<<<<<<< HEAD
import { useState, useEffect, useCallback } from 'react';
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import { useState, useEffect } from 'react';
>>>>>>> origin/cursor/build-and-fix-errors-c9ef

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
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

<<<<<<< HEAD
export function usePerformance() {
=======
export const usePerformance = () => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
<<<<<<< HEAD
=======
<<<<<<< HEAD
    tti: null,
    overallScore: 0,
    isLoaded: false,
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
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

<<<<<<< HEAD
  return metrics;
}
=======
<<<<<<< HEAD
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
=======
    overallScore: 0
  });

  const [isSupported, setIsSupported] = useState(false);

  // Calculate overall performance score
  const calculateScore = useCallback((fcp: number, lcp: number, fid: number, cls: number): number => {
    let score = 100;

    // FCP scoring (0-25 points)
    if (fcp <= 1800) score -= 0;
    else if (fcp <= 3000) score -= 10;
    else score -= 25;

    // LCP scoring (0-25 points)
    if (lcp <= 2500) score -= 0;
    else if (lcp <= 4000) score -= 10;
    else score -= 25;

    // FID scoring (0-25 points)
    if (fid <= 100) score -= 0;
    else if (fid <= 300) score -= 10;
    else score -= 25;

    // CLS scoring (0-25 points)
    if (cls <= 0.1) score -= 0;
    else if (cls <= 0.25) score -= 10;
    else score -= 25;

    return Math.max(0, score);
  }, []);

  // Get performance rating
  const getRating = (metric: anykeyof PerformanceMetrics, value: number): 'good' | 'needs-improvement' | 'poor'  => {
    const thresholds = {
      fcp: { good: 1800, poor: 3000 },
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      ttfb: { good: 800, poor: 1800 }
    };

    const threshold = thresholds[metric];
    if (!threshold) return 'good';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  };

  // Get all metrics with ratings
  const getMetricsWithRatings = () => {
    const result: PerformanceObserverEntry[] = [];
    
    Object.entries(metrics).forEach(([key, value]) => {
      if (value !== null) {
        result.push({
          name: key.toUpperCase(),
          value,
          rating: getRating(key as keyof PerformanceMetrics, value)
        });
      }
    });

    return result;
  };

  // Log performance metrics
// Removed unused:   const logMetrics = () => {
// Removed unused:     const metricsWithRatings = getMetricsWithRatings();
    console.group('🚀 Performance Metrics');
    // Measure basic timing
// Fixed missing name:     measureNavigationTiming();
    console.groupEnd();
  };

  // Get performance score (0-100)
  const getPerformanceScore = () => {
    const metricsWithRatings = getMetricsWithRatings();
    if (metricsWithRatings.length === 0) return 0;

    const scores = metricsWithRatings.map(({ rating }) => {
      switch (rating) {
        case 'good': return 100;
        case 'needs-improvement': return 65;
        case 'poor': return 0;
        default: anyreturn 100;
      }
    });
    return Math.round(scores.reduce((sum, score)  => sum + score, 0) / scores.length);
  };

  // Monitor long tasks
  useEffect(() => {
    if (!('PerformanceObserver' in window)) return;

    const longTaskObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.duration > 50) {
          // // // console.warn('Long task detected: any', {
            duration: entry.duration,
            startTime: entry.startTime,
            name: entry.name
          });
        }
      });
    });

    try {
      longTaskObserver.observe({ entryTypes: ['longtask'] });
    } catch (error) {
      // // // console.warn('Error setting up long task observer:', error);
    }
    return ()  => longTaskObserver.disconnect();
  }, []);
  return {
    metrics,
    observers,
    isMonitoring,
    performanceScore: anygetPerformanceScore(),
    insights: getPerformanceInsights(),
    startMonitoring,
    stopMonitoring,
    resetMetrics,
  };
}
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
