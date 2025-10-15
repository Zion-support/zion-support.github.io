import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fmp: number | null;
  memory: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  } | null;
  navigation: {
    loadEventEnd: number;
    domContentLoadedEventEnd: number;
    domContentLoadedEventStart: number;
    loadEventStart: number;
  } | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean;
  logToConsole?: boolean;
}

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
  logToConsole = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null,
    memory: null,
    navigation: null
  });

  // Get First Contentful Paint
  const getFCP = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return null;
    
    const entries = performance.getEntriesByType('paint');
    const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
    return fcpEntry ? fcpEntry.startTime : null;
  }, []);

  // Get Largest Contentful Paint
  const getLCP = useCallback(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return null;
    
    return new Promise<number | null>((resolve) => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        resolve(lastEntry.startTime);
        observer.disconnect();
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      
      // Timeout after 10 seconds
      setTimeout(() => {
        observer.disconnect();
        resolve(null);
      }, 10000);
    });
  }, []);

  // Get First Input Delay
  const getFID = useCallback(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return null;
    
    return new Promise<number | null>((resolve) => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const firstInput = entries[0];
        if (firstInput) {
          resolve(firstInput.processingStart - firstInput.startTime);
        } else {
          resolve(null);
        }
        observer.disconnect();
      });
      
      observer.observe({ entryTypes: ['first-input'] });
      
      // Timeout after 10 seconds
      setTimeout(() => {
        observer.disconnect();
        resolve(null);
      }, 10000);
    });
  }, []);

  // Get Cumulative Layout Shift
  const getCLS = useCallback(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return null;
    
    return new Promise<number | null>((resolve) => {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
      });
      
      observer.observe({ entryTypes: ['layout-shift'] });
      
      // Calculate final CLS after 5 seconds
      setTimeout(() => {
        observer.disconnect();
        resolve(clsValue);
      }, 5000);
    });
  }, []);

  // Get Time to First Byte
  const getTTFB = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return null;
    
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return navigation ? navigation.responseStart - navigation.requestStart : null;
  }, []);

  // Get First Meaningful Paint
  const getFMP = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return null;
    
    const entries = performance.getEntriesByType('paint');
    const fmpEntry = entries.find(entry => entry.name === 'first-meaningful-paint');
    return fmpEntry ? fmpEntry.startTime : null;
  }, []);

  // Get memory usage
  const getMemoryUsage = useCallback(() => {
    if (typeof window === 'undefined' || !('memory' in performance)) return null;
    
    const memory = (performance as any).memory;
    return {
      usedJSHeapSize: memory.usedJSHeapSize,
      totalJSHeapSize: memory.totalJSHeapSize,
      jsHeapSizeLimit: memory.jsHeapSizeLimit
    };
  }, []);

  // Get navigation timing
  const getNavigationTiming = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return null;
    
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!navigation) return null;
    
    return {
      loadEventEnd: navigation.loadEventEnd,
      domContentLoadedEventEnd: navigation.domContentLoadedEventEnd,
      domContentLoadedEventStart: navigation.domContentLoadedEventStart,
      loadEventStart: navigation.loadEventStart
    };
  }, []);

  // Update metrics
  const updateMetrics = useCallback(async () => {
    const fcp = getFCP();
    const lcp = await getLCP();
    const fid = await getFID();
    const cls = await getCLS();
    const ttfb = getTTFB();
    const fmp = getFMP();
    const memory = getMemoryUsage();
    const navigation = getNavigationTiming();

    const newMetrics: PerformanceMetrics = {
      fcp,
      lcp,
      fid,
      cls,
      ttfb,
      fmp,
      memory,
      navigation
    };

    setMetrics(newMetrics);
    
    if (onMetricsUpdate) {
      onMetricsUpdate(newMetrics);
    }

    if (logToConsole) {
      console.log('Performance Metrics:', newMetrics);
    }
  }, [getFCP, getLCP, getFID, getCLS, getTTFB, getFMP, getMemoryUsage, getNavigationTiming, onMetricsUpdate, logToConsole]);

  // Initialize monitoring
  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

    // Initial metrics collection
    updateMetrics();

    // Set up periodic updates
    const interval = setInterval(updateMetrics, 5000);

    return () => clearInterval(interval);
  }, [enableRealTimeMonitoring, updateMetrics]);

  // Monitor page visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && enableRealTimeMonitoring) {
        updateMetrics();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [enableRealTimeMonitoring, updateMetrics]);

  return (
    <div className="performance-monitor">
      {logToConsole && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-sm font-mono">
          <div>FCP: {metrics.fcp?.toFixed(2)}ms</div>
          <div>LCP: {metrics.lcp?.toFixed(2)}ms</div>
          <div>FID: {metrics.fid?.toFixed(2)}ms</div>
          <div>CLS: {metrics.cls?.toFixed(4)}</div>
          <div>TTFB: {metrics.ttfb?.toFixed(2)}ms</div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;