import { useEffect, useRef, useCallback, useState } from 'react';
interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  domLoad: number; // DOM Content Loaded
  windowLoad: number; // Window Load
}
interface PerformanceData {
  metrics: PerformanceMetrics;
  timestamp: number;
  url: string;
  userAgent: string;
}
export const usePerformanceMonitor = (enableMonitoring: boolean = true) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const lcpObserverRef = useRef<PerformanceObserver | null>(null);
  const clsObserverRef = useRef<PerformanceObserver | null>(null);
  const fidObserverRef = useRef<PerformanceObserver | null>(null);
  // Initialize performance monitoring
  const initializeMonitoring = useCallback(() => {
    if (!enableMonitoring || !('PerformanceObserver' in window)) {
      return;
    }
    setIsMonitoring(true);
    // Monitor First Contentful Paint (FCP)
    try {
      observerRef.current = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => prev ? { ...prev, fcp: entry.startTime } : { fcp: entry.startTime } as PerformanceMetrics);
          }
        });
      });
      observerRef.current.observe({ entryTypes: ['paint'] });
    } catch (error) {
      console.warn('FCP monitoring not supported:', error);
    }
    // Monitor Largest Contentful Paint (LCP)
    try {
      lcpObserverRef.current = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          setMetrics(prev => prev ? { ...prev, lcp: lastEntry.startTime } : { lcp: lastEntry.startTime } as PerformanceMetrics);
        }
      });
      lcpObserverRef.current.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (error) {
      console.warn('LCP monitoring not supported:', error);
    }
    // Monitor Cumulative Layout Shift (CLS)
    try {
      clsObserverRef.current = new PerformanceObserver((list) => {
        let clsValue = 0;
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        setMetrics(prev => prev ? { ...prev, cls: clsValue } : { cls: clsValue } as PerformanceMetrics);
      });
      clsObserverRef.current.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('CLS monitoring not supported:', error);
    }
    // Monitor First Input Delay (FID)
    try {
      fidObserverRef.current = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          setMetrics(prev => prev ? { ...prev, fid: entry.processingStart - entry.startTime } : { fid: entry.processingStart - entry.startTime } as PerformanceMetrics);
        });
      });
      fidObserverRef.current.observe({ entryTypes: ['first-input'] });
    } catch (error) {
      console.warn('FID monitoring not supported:', error);
    }
  }, [enableMonitoring]);
  // Get navigation timing metrics
  const getNavigationTiming = useCallback(() => {
    if (!enableMonitoring || !performance.getEntriesByType) {
      return;
    }
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      const domLoad = navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart;
      const windowLoad = navigationEntry.loadEventEnd - navigationEntry.loadEventStart;
      setMetrics(prev => prev ? { ...prev, ttfb, domLoad, windowLoad } : { ttfb, domLoad, windowLoad } as PerformanceMetrics);
    }
  }, [enableMonitoring]);
  // Get resource timing metrics
  const getResourceTiming = useCallback(() => {
    if (!enableMonitoring || !performance.getEntriesByType) {
      return;
    }
    const resources = performance.getEntriesByType('resource');
    const slowResources = resources
      .filter((entry: PerformanceResourceTiming) => entry.duration > 1000)
      .map((entry: PerformanceResourceTiming) => ({
        name: entry.name,
        duration: entry.duration,
        size: entry.transferSize,
        type: entry.initiatorType
      }));
    if (slowResources.length > 0) {
      console.warn('Slow resources detected:', slowResources);
    }
  }, [enableMonitoring]);
  // Calculate performance score
  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    // FCP scoring (0-100)
    if (metrics.fcp > 0) {
      if (metrics.fcp < 1800) score -= 0;
      else if (metrics.fcp < 3000) score -= 10;
      else score -= 30;
    }
    // LCP scoring (0-100)
    if (metrics.lcp > 0) {
      if (metrics.lcp < 2500) score -= 0;
      else if (metrics.lcp < 4000) score -= 10;
      else score -= 30;
    }
    // FID scoring (0-100)
    if (metrics.fid > 0) {
      if (metrics.fid < 100) score -= 0;
      else if (metrics.fid < 300) score -= 10;
      else score -= 30;
    }
    // CLS scoring (0-100)
    if (metrics.cls > 0) {
      if (metrics.cls < 0.1) score -= 0;
      else if (metrics.cls < 0.25) score -= 10;
      else score -= 30;
    }
    return Math.max(0, score);
  }, []);
  // Send performance data to analytics
  const sendPerformanceData = useCallback((performanceData: PerformanceData) => {
    if (!enableMonitoring) return;
    try {
      // You can integrate with Google Analytics, Mixpanel, or your own analytics service
      if (typeof gtag !== 'undefined') {
        gtag('event', 'performance_metrics', {
          event_category: 'performance',
          event_label: performanceData.url,
          value: Math.round(calculatePerformanceScore(performanceData.metrics)),
          custom_parameters: {
            fcp: performanceData.metrics.fcp,
            lcp: performanceData.metrics.lcp,
            fid: performanceData.metrics.fid,
            cls: performanceData.metrics.cls,
            ttfb: performanceData.metrics.ttfb
          }
        });
      }
      // Send to your own analytics endpoint
      // fetch('/api/analytics/performance', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(performanceData)
      // });
      console.log('Performance data sent:', performanceData);
    } catch (error) {
      console.error('Failed to send performance data:', error);
    }
  }, [enableMonitoring, calculatePerformanceScore]);
  // Monitor component render performance
  const measureRenderTime = useCallback((componentName: string, startTime: number) => {
    if (!enableMonitoring) return;
    const renderTime = performance.now() - startTime;
    
    if (renderTime > 16) { // 16ms = 60fps threshold
      console.warn(`Slow render detected in ${componentName}: ${renderTime.toFixed(2)}ms`);
    }
    // Track render performance
    if (typeof gtag !== 'undefined') {
      gtag('event', 'component_render', {
        event_category: 'performance',
        event_label: componentName,
        value: Math.round(renderTime),
        custom_parameters: {
          component: componentName,
          render_time: renderTime
        }
      });
    }
  }, [enableMonitoring]);
  // Monitor memory usage
  const getMemoryInfo = useCallback(() => {
    if (!enableMonitoring || !('memory' in performance)) {
      return null;
    }
    const memory = (performance as any).memory;
    return {
      usedJSHeapSize: memory.usedJSHeapSize,
      totalJSHeapSize: memory.totalJSHeapSize,
      jsHeapSizeLimit: memory.jsHeapSizeLimit
    };
  }, [enableMonitoring]);
  // Cleanup function
  const cleanup = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    if (lcpObserverRef.current) {
      lcpObserverRef.current.disconnect();
    }
    if (clsObserverRef.current) {
      clsObserverRef.current.disconnect();
    }
    if (fidObserverRef.current) {
      fidObserverRef.current.disconnect();
    }
    setIsMonitoring(false);
  }, []);
  // Initialize monitoring on mount
  useEffect(() => {
    if (enableMonitoring) {
      initializeMonitoring();
      
      // Get initial metrics after a delay to allow page to load
      const timer = setTimeout(() => {
        getNavigationTiming();
        getResourceTiming();
      }, 1000);
      return () => {
        clearTimeout(timer);
        cleanup();
      };
    }
  }, [enableMonitoring, initializeMonitoring, getNavigationTiming, getResourceTiming, cleanup]);
  // Send performance data when metrics are complete
  useEffect(() => {
    if (metrics && Object.keys(metrics).length >= 4) {
      const performanceData: PerformanceData = {
        metrics,
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent
      };
      sendPerformanceData(performanceData);
    }
  }, [metrics, sendPerformanceData]);
  return {
    metrics,
    isMonitoring,
    calculatePerformanceScore: metrics ? calculatePerformanceScore(metrics) : null,
    measureRenderTime,
    getMemoryInfo,
    cleanup
  };
};
// Hook for measuring component render performance
export const useRenderPerformance = (componentName: string) => {
  const startTime = useRef(performance.now());
  const { measureRenderTime } = usePerformanceMonitor();
  useEffect(() => {
    const renderTime = performance.now() - startTime.current;
    measureRenderTime(componentName, startTime.current);
    startTime.current = performance.now();
  });
  return startTime.current;
};
// Hook for measuring function execution time
export const useFunctionPerformance = () => {
  const measureFunction = useCallback((fn: Function, functionName: string) => {
    const startTime = performance.now();
    const result = fn();
    const executionTime = performance.now() - startTime;
    
    if (executionTime > 16) {
      console.warn(`Slow function execution detected in ${functionName}: ${executionTime.toFixed(2)}ms`);
    }
    
    return { result, executionTime };
  }, []);
  return { measureFunction };
};