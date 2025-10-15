import { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  cls: number;
  fid: number;
  lcp: number;
  fcp: number;
  ttfb: number;
  tbt: number;
  si: number;
}

interface PerformanceConfig {
  enableReporting: boolean;
  reportInterval: number;
  enableWebVitals: boolean;
  enableMemoryMonitoring: boolean;
  enableNetworkMonitoring: boolean;
}

const defaultConfig: PerformanceConfig = {
  enableReporting: true,
  reportInterval: 30000, // 30 seconds
  enableWebVitals: true,
  enableMemoryMonitoring: true,
  enableNetworkMonitoring: true,
};

export const useAdvancedPerformanceMonitoring = (config: Partial<PerformanceConfig> = {}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    cls: 0,
    fid: 0,
    lcp: 0,
    fcp: 0,
    ttfb: 0,
    tbt: 0,
    si: 0,
  });

  const [isMonitoring, setIsMonitoring] = useState(false);
  const finalConfig = { ...defaultConfig, ...config };

  const reportMetric = useCallback((name: string, value: number, category: string = 'performance') => {
    if (!finalConfig.enableReporting) return;

    // Report to Google Analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', name, {
        event_category: category,
        value: Math.round(value),
        non_interaction: true,
      });
    }

    // Report to custom analytics endpoint
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          value,
          category,
          timestamp: Date.now(),
          url: window.location.href,
        }),
      }).catch(error => {
        console.warn('Failed to report performance metric:', error);
      });
    }
  }, [finalConfig.enableReporting]);

  const measureWebVitals = useCallback(() => {
    if (!finalConfig.enableWebVitals) return;

    // Measure Core Web Vitals
    const measureCLS = () => {
      let clsValue = 0;
      let clsEntries: PerformanceEntry[] = [];

      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsEntries.push(entry);
            clsValue += (entry as any).value;
          }
        }
      });

      observer.observe({ entryTypes: ['layout-shift'] });

      return () => {
        observer.disconnect();
        setMetrics(prev => ({ ...prev, cls: clsValue }));
        reportMetric('CLS', clsValue);
      };
    };

    const measureFID = () => {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fid = (entry as any).processingStart - entry.startTime;
          setMetrics(prev => ({ ...prev, fid }));
          reportMetric('FID', fid);
        }
      });

      observer.observe({ entryTypes: ['first-input'] });
      return () => observer.disconnect();
    };

    const measureLCP = () => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        reportMetric('LCP', lastEntry.startTime);
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      return () => observer.disconnect();
    };

    const measureFCP = () => {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            reportMetric('FCP', entry.startTime);
          }
        }
      });

      observer.observe({ entryTypes: ['paint'] });
      return () => observer.disconnect();
    };

    const measureTTFB = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const ttfb = navigation.responseStart - navigation.requestStart;
        setMetrics(prev => ({ ...prev, ttfb }));
        reportMetric('TTFB', ttfb);
      }
    };

    const cleanupCLS = measureCLS();
    const cleanupFID = measureFID();
    const cleanupLCP = measureLCP();
    const cleanupFCP = measureFCP();
    measureTTFB();

    return () => {
      cleanupCLS();
      cleanupFID();
      cleanupLCP();
      cleanupFCP();
    };
  }, [finalConfig.enableWebVitals, reportMetric]);

  const measureMemoryUsage = useCallback(() => {
    if (!finalConfig.enableMemoryMonitoring || !('memory' in performance)) return;

    const measure = () => {
      const memory = (performance as any).memory;
      if (memory) {
        const memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
        setMetrics(prev => ({ ...prev, memoryUsage }));
        reportMetric('Memory Usage', memoryUsage);
      }
    };

    measure();
    const interval = setInterval(measure, 5000); // Measure every 5 seconds

    return () => clearInterval(interval);
  }, [finalConfig.enableMemoryMonitoring, reportMetric]);

  const measureLoadTime = useCallback(() => {
    const loadTime = performance.now();
    setMetrics(prev => ({ ...prev, loadTime }));
    reportMetric('Load Time', loadTime);
  }, [reportMetric]);

  const measureNetworkPerformance = useCallback(() => {
    if (!finalConfig.enableNetworkMonitoring) return;

    const measure = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const networkMetrics = {
          dns: navigation.domainLookupEnd - navigation.domainLookupStart,
          tcp: navigation.connectEnd - navigation.connectStart,
          request: navigation.responseStart - navigation.requestStart,
          response: navigation.responseEnd - navigation.responseStart,
          dom: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        };

        Object.entries(networkMetrics).forEach(([key, value]) => {
          reportMetric(`Network ${key}`, value, 'network');
        });
      }
    };

    measure();
  }, [finalConfig.enableNetworkMonitoring, reportMetric]);

  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    measureLoadTime();
    measureNetworkPerformance();
    
    const cleanupWebVitals = measureWebVitals();
    const cleanupMemory = measureMemoryUsage();

    return () => {
      cleanupWebVitals();
      cleanupMemory();
      setIsMonitoring(false);
    };
  }, [measureLoadTime, measureNetworkPerformance, measureWebVitals, measureMemoryUsage]);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  const getPerformanceScore = useCallback(() => {
    const { lcp, fid, cls } = metrics;
    
    // Calculate performance score based on Core Web Vitals
    let score = 100;
    
    if (lcp > 4000) score -= 30;
    else if (lcp > 2500) score -= 15;
    
    if (fid > 300) score -= 30;
    else if (fid > 100) score -= 15;
    
    if (cls > 0.25) score -= 30;
    else if (cls > 0.1) score -= 15;
    
    return Math.max(0, score);
  }, [metrics]);

  useEffect(() => {
    const cleanup = startMonitoring();
    return cleanup;
  }, [startMonitoring]);

  return {
    metrics,
    isMonitoring,
    startMonitoring,
    stopMonitoring,
    getPerformanceScore,
    reportMetric,
  };
};