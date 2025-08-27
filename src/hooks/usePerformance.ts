import { useEffect, useState, useCallback, useRef } from 'react';

interface PerformanceMetrics {
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
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

export const usePerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domLoad: null,
    windowLoad: null,
    navigationStart: null,
  });

  const [observers, setObservers] = useState<PerformanceObserverEntry[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const lcpObserverRef = useRef<PerformanceObserver | null>(null);
  const clsObserverRef = useRef<PerformanceObserver | null>(null);
  const fidObserverRef = useRef<PerformanceObserver | null>(null);

  // Get rating for a metric
  const getRating = (value: number, metric: string): 'good' | 'needs-improvement' | 'poor' => {
    const thresholds: Record<string, { good: number; poor: number }> = {
      fcp: { good: 1800, poor: 3000 },
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      ttfb: { good: 800, poor: 1800 },
    };

    const threshold = thresholds[metric];
    if (!threshold) return 'good';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  };

  // Measure basic navigation timing
  const measureNavigationTiming = useCallback(() => {
    if ('performance' in window && 'getEntriesByType' in performance) {
      const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
      
      if (navigationEntries.length > 0) {
        const nav = navigationEntries[0];
        setMetrics(prev => ({
          ...prev,
          ttfb: nav.responseStart - nav.requestStart,
          domLoad: nav.domContentLoadedEventEnd - nav.navigationStart,
          windowLoad: nav.loadEventEnd - nav.navigationStart,
          navigationStart: nav.navigationStart,
        }));
      }
    }
  }, []);

  // Measure First Contentful Paint
  const measureFCP = useCallback(() => {
    if ('PerformanceObserver' in window) {
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (entries.length > 0) {
            const fcp = entries[0] as PerformanceEntry;
            setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
            
            const rating = getRating(fcp.startTime, 'fcp');
            setObservers(prev => [...prev, { name: 'FCP', value: fcp.startTime, rating }]);
          }
        });
        
        fcpObserver.observe({ entryTypes: ['paint'] });
        return fcpObserver;
      } catch (error) {
        console.warn('FCP observer not supported:', error);
      }
    }
    return null;
  }, []);

  // Measure Largest Contentful Paint
  const measureLCP = useCallback(() => {
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (entries.length > 0) {
            const lcp = entries[entries.length - 1] as PerformanceEntry;
            setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
            
            const rating = getRating(lcp.startTime, 'lcp');
            setObservers(prev => [...prev, { name: 'LCP', value: lcp.startTime, rating }]);
          }
        });
        
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        return lcpObserver;
      } catch (error) {
        console.warn('LCP observer not supported:', error);
      }
    }
    return null;
  }, []);

  // Measure Cumulative Layout Shift
  const measureCLS = useCallback(() => {
    if ('PerformanceObserver' in window) {
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          
          setMetrics(prev => ({ ...prev, cls: clsValue }));
          
          const rating = getRating(clsValue, 'cls');
          setObservers(prev => [...prev, { name: 'CLS', value: clsValue, rating }]);
        });
        
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        return clsObserver;
      } catch (error) {
        console.warn('CLS observer not supported:', error);
      }
    }
    return null;
  }, []);

  // Measure First Input Delay
  const measureFID = useCallback(() => {
    if ('PerformanceObserver' in window) {
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (entries.length > 0) {
            const fid = entries[0] as PerformanceEntry;
            setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
            
            const rating = getRating(fid.processingStart - fid.startTime, 'fid');
            setObservers(prev => [...prev, { name: 'FID', value: fid.processingStart - fid.startTime, rating }]);
          }
        });
        
        fidObserver.observe({ entryTypes: ['first-input'] });
        return fidObserver;
      } catch (error) {
        console.warn('FID observer not supported:', error);
      }
    }
    return null;
  }, []);

  // Start performance monitoring
  const startMonitoring = useCallback(() => {
    if (isMonitoring) return;

    setIsMonitoring(true);
    
    // Measure basic timing
    measureNavigationTiming();
    
    // Set up observers
    const fcpObserver = measureFCP();
    const lcpObserver = measureLCP();
    const clsObserver = measureCLS();
    const fidObserver = measureFID();
    
    // Store observers for cleanup
    if (fcpObserver) observerRef.current = fcpObserver;
    if (lcpObserver) lcpObserverRef.current = lcpObserver;
    if (clsObserver) clsObserverRef.current = clsObserver;
    if (fidObserver) fidObserverRef.current = fidObserver;
    
    // Measure DOM and window load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', measureNavigationTiming);
    } else {
      measureNavigationTiming();
    }
    
    window.addEventListener('load', measureNavigationTiming);
  }, [isMonitoring, measureNavigationTiming, measureFCP, measureLCP, measureCLS, measureFID]);

  // Stop performance monitoring
  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
    
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
    
    if (lcpObserverRef.current) {
      lcpObserverRef.current.disconnect();
      lcpObserverRef.current = null;
    }
    
    if (clsObserverRef.current) {
      clsObserverRef.current.disconnect();
      clsObserverRef.current = null;
    }
    
    if (fidObserverRef.current) {
      fidObserverRef.current.disconnect();
      fidObserverRef.current = null;
    }
    
    document.removeEventListener('DOMContentLoaded', measureNavigationTiming);
    window.removeEventListener('load', measureNavigationTiming);
  }, [measureNavigationTiming]);

  // Get performance score (0-100)
  const getPerformanceScore = useCallback(() => {
    const scores = observers.map(observer => {
      switch (observer.rating) {
        case 'good': return 100;
        case 'needs-improvement': return 50;
        case 'poor': return 0;
        default: return 100;
      }
    });
    
    if (scores.length === 0) return 100;
    return Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
  }, [observers]);

  // Get performance insights
  const getPerformanceInsights = useCallback(() => {
    const insights: string[] = [];
    
    observers.forEach(observer => {
      if (observer.rating === 'poor') {
        insights.push(`${observer.name} is poor (${observer.value.toFixed(2)}ms) - needs immediate attention`);
      } else if (observer.rating === 'needs-improvement') {
        insights.push(`${observer.name} could be improved (${observer.value.toFixed(2)}ms)`);
      }
    });
    
    return insights;
  }, [observers]);

  // Reset metrics
  const resetMetrics = useCallback(() => {
    setMetrics({
      fcp: null,
      lcp: null,
      fid: null,
      cls: null,
      ttfb: null,
      domLoad: null,
      windowLoad: null,
      navigationStart: null,
    });
    setObservers([]);
  }, []);

  // Start monitoring on mount
  useEffect(() => {
    startMonitoring();
    
    return () => {
      stopMonitoring();
    };
  }, [startMonitoring, stopMonitoring]);

  return {
    metrics,
    observers,
    isMonitoring,
    performanceScore: getPerformanceScore(),
    insights: getPerformanceInsights(),
    startMonitoring,
    stopMonitoring,
    resetMetrics,
  };
};

// Hook for monitoring specific performance events
export function usePerformanceEvent(eventName: string, callback: (entry: PerformanceEntry) => void) {
  useEffect(() => {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach(callback);
    });

    try {
      observer.observe({ entryTypes: [eventName] });
    } catch (error) {
      console.warn(`Error observing ${eventName}:`, error);
    }

    return () => observer.disconnect();
  }, [eventName, callback]);
}

// Hook for measuring time between renders
export function useRenderTime() {
  const renderStart = useRef(performance.now());
  const [renderTime, setRenderTime] = useState(0);

  useEffect(() => {
    const renderEnd = performance.now();
    const time = renderEnd - renderStart.current;
    setRenderTime(time);
    renderStart.current = renderEnd;
  });

  return renderTime;
}