import { useCallback, useEffect, useRef, useState } from 'react';

interface PerformanceMetrics {
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  totalBlockingTime: number;
  memoryUsage?: number;
  networkInfo?: {
    effectiveType: string;
    downlink: number;
    rtt: number;
  };
}

interface PerformanceThresholds {
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  totalBlockingTime: number;
}

interface UsePerformanceMonitoringOptions {
  enableWebVitals?: boolean;
  enableMemoryMonitoring?: boolean;
  enableNetworkMonitoring?: boolean;
  enableCustomMetrics?: boolean;
  samplingRate?: number;
  reportInterval?: number;
  thresholds?: Partial<PerformanceThresholds>;
  onThresholdExceeded?: (metric: string, value: number, threshold: number) => void;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const DEFAULT_THRESHOLDS: PerformanceThresholds = {
  pageLoadTime: 3000,
  firstContentfulPaint: 1800,
  largestContentfulPaint: 2500,
  cumulativeLayoutShift: 0.1,
  firstInputDelay: 100,
  totalBlockingTime: 300
};

export function usePerformanceMonitoring(options: UsePerformanceMonitoringOptions = {}) {
  const {
    enableWebVitals = true,
    enableMemoryMonitoring = true,
    enableNetworkMonitoring = true,
    enableCustomMetrics = true,
    samplingRate = 1.0,
    reportInterval = 5000,
    thresholds = {},
    onThresholdExceeded,
    onMetricsUpdate
  } = options;

  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    pageLoadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    totalBlockingTime: 0
  });

  const [isMonitoring, setIsMonitoring] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const thresholdsRef = useRef({ ...DEFAULT_THRESHOLDS, ...thresholds });

  // Update thresholds when they change
  useEffect(() => {
    thresholdsRef.current = { ...DEFAULT_THRESHOLDS, ...thresholds };
  }, [thresholds]);

  // Check if metric exceeds threshold
  const checkThreshold = useCallback((metric: string, value: number, threshold: number) => {
    if (value > threshold && onThresholdExceeded) {
      onThresholdExceeded(metric, value, threshold);
    }
  }, [onThresholdExceeded]);

  // Get memory usage
  const getMemoryUsage = useCallback((): number | undefined => {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const memory = (performance as any).memory;
      return memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
    }
    return undefined;
  }, []);

  // Get network information
  const getNetworkInfo = useCallback(() => {
    if (typeof window !== 'undefined' && 'connection' in navigator) {
      const connection = (navigator as any).connection;
      return {
        effectiveType: connection.effectiveType || 'unknown',
        downlink: connection.downlink || 0,
        rtt: connection.rtt || 0
      };
    }
    return undefined;
  }, []);

  // Measure Web Vitals
  const measureWebVitals = useCallback(() => {
    if (typeof window === 'undefined' || !window.performance) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!navigation) return;

    const newMetrics: Partial<PerformanceMetrics> = {};

    // Page Load Time
    const pageLoadTime = navigation.loadEventEnd - navigation.navigationStart;
    newMetrics.pageLoadTime = pageLoadTime;
    checkThreshold('pageLoadTime', pageLoadTime, thresholdsRef.current.pageLoadTime);

    // First Contentful Paint
    const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
    if (fcpEntry) {
      newMetrics.firstContentfulPaint = fcpEntry.startTime;
      checkThreshold('firstContentfulPaint', fcpEntry.startTime, thresholdsRef.current.firstContentfulPaint);
    }

    // Largest Contentful Paint
    const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
    if (lcpEntries.length > 0) {
      const lcp = lcpEntries[lcpEntries.length - 1] as PerformanceEntry;
      newMetrics.largestContentfulPaint = lcp.startTime;
      checkThreshold('largestContentfulPaint', lcp.startTime, thresholdsRef.current.largestContentfulPaint);
    }

    // Cumulative Layout Shift
    let clsValue = 0;
    const clsEntries = performance.getEntriesByType('layout-shift') as PerformanceEntry[];
    clsEntries.forEach(entry => {
      if (!(entry as any).hadRecentInput) {
        clsValue += (entry as any).value;
      }
    });
    newMetrics.cumulativeLayoutShift = clsValue;
    checkThreshold('cumulativeLayoutShift', clsValue, thresholdsRef.current.cumulativeLayoutShift);

    // First Input Delay
    const fidEntries = performance.getEntriesByType('first-input') as PerformanceEntry[];
    if (fidEntries.length > 0) {
      const fid = fidEntries[0] as any;
      newMetrics.firstInputDelay = fid.processingStart - fid.startTime;
      checkThreshold('firstInputDelay', newMetrics.firstInputDelay, thresholdsRef.current.firstInputDelay);
    }

    // Total Blocking Time
    const longTasks = performance.getEntriesByType('long-task') as PerformanceEntry[];
    const tbt = longTasks.reduce((total, task) => {
      return total + (task.duration - 50);
    }, 0);
    newMetrics.totalBlockingTime = tbt;
    checkThreshold('totalBlockingTime', tbt, thresholdsRef.current.totalBlockingTime);

    // Memory usage
    if (enableMemoryMonitoring) {
      newMetrics.memoryUsage = getMemoryUsage();
    }

    // Network information
    if (enableNetworkMonitoring) {
      newMetrics.networkInfo = getNetworkInfo();
    }

    setMetrics(prev => {
      const updated = { ...prev, ...newMetrics };
      if (onMetricsUpdate) {
        onMetricsUpdate(updated);
      }
      return updated;
    });
  }, [enableMemoryMonitoring, enableNetworkMonitoring, checkThreshold, getMemoryUsage, getNetworkInfo, onMetricsUpdate]);

  // Start monitoring
  const startMonitoring = useCallback(() => {
    if (isMonitoring) return;

    setIsMonitoring(true);

    // Initial measurement
    measureWebVitals();

    // Set up performance observer for real-time metrics
    if (enableWebVitals && typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (entry.entryType === 'largest-contentful-paint') {
              measureWebVitals();
            } else if (entry.entryType === 'layout-shift') {
              measureWebVitals();
            } else if (entry.entryType === 'first-input') {
              measureWebVitals();
            }
          });
        });

        observer.observe({ entryTypes: ['largest-contentful-paint', 'layout-shift', 'first-input'] });
        observerRef.current = observer;
      } catch (error) {
        console.warn('PerformanceObserver not supported:', error);
      }
    }

    // Set up periodic monitoring
    if (reportInterval > 0) {
      intervalRef.current = setInterval(measureWebVitals, reportInterval);
    }
  }, [isMonitoring, measureWebVitals, enableWebVitals, reportInterval]);

  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
  }, []);

  // Record custom metric
  const recordMetric = useCallback((name: string, value: number, unit: string = 'ms') => {
    if (!enableCustomMetrics || Math.random() > samplingRate) return;

    if (typeof window !== 'undefined' && window.performance && 'mark' in performance) {
      performance.mark(`${name}-${value}-${unit}`);
    }

    // Update metrics if it's a known metric
    const metricMap: Record<string, keyof PerformanceMetrics> = {
      'scrollDepth': 'pageLoadTime', // Map to existing metric for simplicity
      'userClicks': 'firstInputDelay',
      'buttonClicks': 'firstInputDelay',
      'linkClicks': 'firstInputDelay',
      'inputClicks': 'firstInputDelay',
      'otherClicks': 'firstInputDelay'
    };

    const metricKey = metricMap[name];
    if (metricKey) {
      setMetrics(prev => ({ ...prev, [metricKey]: value }));
    }
  }, [enableCustomMetrics, samplingRate]);

  // Preload resource
  const preloadResource = useCallback((href: string, as: string) => {
    if (typeof window === 'undefined') return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopMonitoring();
    };
  }, [stopMonitoring]);

  return {
    metrics,
    isMonitoring,
    startMonitoring,
    stopMonitoring,
    recordMetric,
    preloadResource,
    measureWebVitals
  };
}