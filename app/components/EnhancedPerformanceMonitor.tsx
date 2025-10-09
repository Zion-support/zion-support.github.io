'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB, Metric } from 'web-vitals';

interface PerformanceMetrics {
  CLS: number | null;
  FID: number | null;
  FCP: number | null;
  LCP: number | null;
  TTFB: number | null;
  FMP: number | null;
  TBT: number | null;
  SI: number | null;
}

interface PerformanceMonitorProps {
  enableRealTimeMonitoring?: boolean;
  enableCoreWebVitals?: boolean;
  enableCustomMetrics?: boolean;
  enableResourceTiming?: boolean;
  enableUserTiming?: boolean;
  enableNavigationTiming?: boolean;
  enableMemoryMonitoring?: boolean;
  enableNetworkMonitoring?: boolean;
  enableErrorTracking?: boolean;
  enablePerformanceObserver?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  onError?: (error: Error) => void;
  debug?: boolean;
}

const EnhancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableRealTimeMonitoring = true,
  enableCoreWebVitals = true,
  enableCustomMetrics = true,
  enableResourceTiming = true,
  enableUserTiming = true,
  enableNavigationTiming = true,
  enableMemoryMonitoring = true,
  enableNetworkMonitoring = true,
  enableErrorTracking = true,
  enablePerformanceObserver = true,
  onMetricsUpdate,
  onError,
  debug = false,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    CLS: null,
    FID: null,
    FCP: null,
    LCP: null,
    TTFB: null,
    FMP: null,
    TBT: null,
    SI: null,
  });

  const [isMonitoring, setIsMonitoring] = useState(false);
  const [performanceData, setPerformanceData] = useState<any>({});

  const log = useCallback((message: string, data?: any) => {
    if (debug) {
      console.log(`[PerformanceMonitor] ${message}`, data);
    }
  }, [debug]);

  const handleError = useCallback((error: Error) => {
    log('Error occurred', error);
    onError?.(error);
  }, [log, onError]);

  const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {
    setMetrics(prev => {
      const updated = { ...prev, ...newMetrics };
      onMetricsUpdate?.(updated);
      return updated;
    });
  }, [onMetricsUpdate]);

  // Core Web Vitals monitoring
  useEffect(() => {
    if (!enableCoreWebVitals) return;

    const handleCLS = (metric: Metric) => {
      log('CLS metric received', metric);
      updateMetrics({ CLS: metric.value });
    };

    const handleFID = (metric: Metric) => {
      log('FID metric received', metric);
      updateMetrics({ FID: metric.value });
    };

    const handleFCP = (metric: Metric) => {
      log('FCP metric received', metric);
      updateMetrics({ FCP: metric.value });
    };

    const handleLCP = (metric: Metric) => {
      log('LCP metric received', metric);
      updateMetrics({ LCP: metric.value });
    };

    const handleTTFB = (metric: Metric) => {
      log('TTFB metric received', metric);
      updateMetrics({ TTFB: metric.value });
    };

    try {
      getCLS(handleCLS);
      getFID(handleFID);
      getFCP(handleFCP);
      getLCP(handleLCP);
      getTTFB(handleTTFB);
    } catch (error) {
      handleError(error as Error);
    }
  }, [enableCoreWebVitals, log, updateMetrics, handleError]);

  // Performance Observer for custom metrics
  useEffect(() => {
    if (!enablePerformanceObserver || !('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        log('Performance entry observed', entry);

        // First Meaningful Paint
        if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          updateMetrics({ FCP: entry.startTime });
        }

        // First Meaningful Paint (custom)
        if (entry.entryType === 'paint' && entry.name === 'first-meaningful-paint') {
          updateMetrics({ FMP: entry.startTime });
        }

        // Speed Index (approximation)
        if (entry.entryType === 'paint' && entry.name === 'speed-index') {
          updateMetrics({ SI: entry.startTime });
        }

        // Total Blocking Time
        if (entry.entryType === 'longtask') {
          const tbt = entry.duration - 50; // TBT is time over 50ms
          if (tbt > 0) {
            updateMetrics({ TBT: (metrics.TBT || 0) + tbt });
          }
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['paint', 'longtask', 'measure', 'navigation'] });
      setIsMonitoring(true);
    } catch (error) {
      handleError(error as Error);
    }

    return () => {
      observer.disconnect();
      setIsMonitoring(false);
    };
  }, [enablePerformanceObserver, log, updateMetrics, handleError, metrics.TBT]);

  // Navigation Timing
  useEffect(() => {
    if (!enableNavigationTiming) return;

    const measureNavigationTiming = () => {
      try {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const navData = {
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            domInteractive: navigation.domInteractive - navigation.navigationStart,
            domComplete: navigation.domComplete - navigation.navigationStart,
            redirectTime: navigation.redirectEnd - navigation.redirectStart,
            dnsTime: navigation.domainLookupEnd - navigation.domainLookupStart,
            tcpTime: navigation.connectEnd - navigation.connectStart,
            requestTime: navigation.responseEnd - navigation.requestStart,
            responseTime: navigation.responseEnd - navigation.responseStart,
            domProcessingTime: navigation.domComplete - navigation.domLoading,
          };

          setPerformanceData(prev => ({ ...prev, navigation: navData }));
          log('Navigation timing measured', navData);
        }
      } catch (error) {
        handleError(error as Error);
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measureNavigationTiming();
    } else {
      window.addEventListener('load', measureNavigationTiming);
      return () => window.removeEventListener('load', measureNavigationTiming);
    }
  }, [enableNavigationTiming, log, handleError]);

  // Resource Timing
  useEffect(() => {
    if (!enableResourceTiming) return;

    const measureResourceTiming = () => {
      try {
        const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
        const resourceData = resources.map(resource => ({
          name: resource.name,
          duration: resource.duration,
          size: resource.transferSize,
          type: resource.initiatorType,
          startTime: resource.startTime,
          responseTime: resource.responseEnd - resource.responseStart,
        }));

        setPerformanceData(prev => ({ ...prev, resources: resourceData }));
        log('Resource timing measured', resourceData);
      } catch (error) {
        handleError(error as Error);
      }
    };

    // Measure after a delay to allow resources to load
    const timeout = setTimeout(measureResourceTiming, 2000);
    return () => clearTimeout(timeout);
  }, [enableResourceTiming, log, handleError]);

  // Memory Monitoring
  useEffect(() => {
    if (!enableMemoryMonitoring || !('memory' in performance)) return;

    const measureMemory = () => {
      try {
        const memory = (performance as any).memory;
        const memoryData = {
          usedJSHeapSize: memory.usedJSHeapSize,
          totalJSHeapSize: memory.totalJSHeapSize,
          jsHeapSizeLimit: memory.jsHeapSizeLimit,
        };

        setPerformanceData(prev => ({ ...prev, memory: memoryData }));
        log('Memory usage measured', memoryData);
      } catch (error) {
        handleError(error as Error);
      }
    };

    // Measure memory periodically
    const interval = setInterval(measureMemory, 5000);
    measureMemory(); // Initial measurement

    return () => clearInterval(interval);
  }, [enableMemoryMonitoring, log, handleError]);

  // Network Monitoring
  useEffect(() => {
    if (!enableNetworkMonitoring || !('connection' in navigator)) return;

    const measureNetwork = () => {
      try {
        const connection = (navigator as any).connection;
        const networkData = {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
          saveData: connection.saveData,
        };

        setPerformanceData(prev => ({ ...prev, network: networkData }));
        log('Network information measured', networkData);
      } catch (error) {
        handleError(error as Error);
      }
    };

    measureNetwork();
  }, [enableNetworkMonitoring, log, handleError]);

  // Error Tracking
  useEffect(() => {
    if (!enableErrorTracking) return;

    const handleError = (event: ErrorEvent) => {
      const errorData = {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error,
        timestamp: Date.now(),
      };

      setPerformanceData(prev => ({ 
        ...prev, 
        errors: [...(prev.errors || []), errorData] 
      }));
      log('Error tracked', errorData);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const errorData = {
        reason: event.reason,
        timestamp: Date.now(),
        type: 'unhandledrejection',
      };

      setPerformanceData(prev => ({ 
        ...prev, 
        errors: [...(prev.errors || []), errorData] 
      }));
      log('Unhandled rejection tracked', errorData);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [enableErrorTracking, log]);

  // User Timing API
  useEffect(() => {
    if (!enableUserTiming) return;

    const measureUserTiming = () => {
      try {
        const userTimings = performance.getEntriesByType('measure') as PerformanceMeasure[];
        const userTimingData = userTimings.map(timing => ({
          name: timing.name,
          duration: timing.duration,
          startTime: timing.startTime,
        }));

        setPerformanceData(prev => ({ ...prev, userTimings: userTimingData }));
        log('User timing measured', userTimingData);
      } catch (error) {
        handleError(error as Error);
      }
    };

    // Measure user timing after a delay
    const timeout = setTimeout(measureUserTiming, 1000);
    return () => clearTimeout(timeout);
  }, [enableUserTiming, log, handleError]);

  // Real-time monitoring
  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

    const interval = setInterval(() => {
      // Update performance data periodically
      setPerformanceData(prev => ({
        ...prev,
        lastUpdated: Date.now(),
        monitoring: isMonitoring,
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, [enableRealTimeMonitoring, isMonitoring]);

  // Performance score calculation
  const calculatePerformanceScore = useCallback(() => {
    let score = 100;
    let factors = 0;

    // LCP scoring (0-100, target: <2.5s)
    if (metrics.LCP !== null) {
      factors++;
      if (metrics.LCP > 4000) score -= 30;
      else if (metrics.LCP > 2500) score -= 20;
      else if (metrics.LCP > 2000) score -= 10;
    }

    // FID scoring (0-100, target: <100ms)
    if (metrics.FID !== null) {
      factors++;
      if (metrics.FID > 300) score -= 30;
      else if (metrics.FID > 100) score -= 20;
      else if (metrics.FID > 50) score -= 10;
    }

    // CLS scoring (0-100, target: <0.1)
    if (metrics.CLS !== null) {
      factors++;
      if (metrics.CLS > 0.25) score -= 30;
      else if (metrics.CLS > 0.1) score -= 20;
      else if (metrics.CLS > 0.05) score -= 10;
    }

    // TTFB scoring (0-100, target: <600ms)
    if (metrics.TTFB !== null) {
      factors++;
      if (metrics.TTFB > 1500) score -= 20;
      else if (metrics.TTFB > 600) score -= 15;
      else if (metrics.TTFB > 300) score -= 10;
    }

    return factors > 0 ? Math.max(0, score) : null;
  }, [metrics]);

  const performanceScore = calculatePerformanceScore();

  // Expose performance data globally for debugging
  useEffect(() => {
    if (debug && typeof window !== 'undefined') {
      (window as any).performanceData = {
        metrics,
        performanceData,
        performanceScore,
        isMonitoring,
      };
    }
  }, [debug, metrics, performanceData, performanceScore, isMonitoring]);

  return null; // This component doesn't render anything
};

export default EnhancedPerformanceMonitor;