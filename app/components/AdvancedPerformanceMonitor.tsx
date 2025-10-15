import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  cls: number;
  fcp: number;
  lcp: number;
  ttfb: number;
  inp: number;
  fid?: number;
  fmp?: number;
  tbt?: number;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableLogging?: boolean;
  enableAnalytics?: boolean;
}

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableLogging = process.env.NODE_ENV === 'development',
  enableAnalytics = process.env.NODE_ENV === 'production'
}) => {
  const [metrics, setMetrics] = useState<Partial<PerformanceMetrics>>({});
  const [isMonitoring, setIsMonitoring] = useState(false);

  const logMetric = useCallback((name: string, value: number) => {
    if (enableLogging) {
      console.log(`[Performance] ${name}: ${value.toFixed(2)}ms`);
    }
  }, [enableLogging]);

  const sendToAnalytics = useCallback((metricName: string, value: number) => {
    if (enableAnalytics && typeof window !== 'undefined') {
      // Send to analytics service (replace with your analytics implementation)
      if (window.gtag) {
        window.gtag('event', 'performance_metric', {
          event_category: 'performance',
          event_label: metricName,
          value: value
        });
      }
    }
  }, [enableAnalytics]);

  const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {
    setMetrics(prev => {
      const updated = { ...prev, ...newMetrics };
      onMetricsUpdate?.(updated as PerformanceMetrics);
      return updated;
    });
  }, [onMetricsUpdate]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let isActive = true;
    setIsMonitoring(true);

    // Monitor Core Web Vitals
    const setupWebVitals = async () => {
      try {
        const { onCLS, onFCP, onLCP, onTTFB, onINP } = await import('web-vitals');
        
        const handleMetric = (metric: any) => {
          if (!isActive) return;
          
          const metricName = metric.name.toLowerCase();
          const value = metric.value;
          
          logMetric(metricName, value);
          sendToAnalytics(metricName, value);
          
          updateMetrics({ [metricName]: value });
        };

        onCLS(handleMetric);
        onFCP(handleMetric);
        onLCP(handleMetric);
        onTTFB(handleMetric);
        onINP(handleMetric);
      } catch (error) {
        if (enableLogging) {
          console.warn('[Performance] Web Vitals not available:', error);
        }
      }
    };

    // Monitor custom performance metrics
    const setupCustomMetrics = () => {
      if (!('performance' in window)) return;

      const observer = new PerformanceObserver((list) => {
        if (!isActive) return;

        for (const entry of list.getEntries()) {
          switch (entry.entryType) {
            case 'navigation':
              const navEntry = entry as PerformanceNavigationTiming;
              const navigationMetrics = {
                ttfb: navEntry.responseStart - navEntry.requestStart,
                fmp: navEntry.domContentLoadedEventEnd - (navEntry as any).navigationStart
              };
              
              Object.entries(navigationMetrics).forEach(([key, value]) => {
                if (value > 0) {
                  logMetric(key, value);
                  updateMetrics({ [key]: value });
                }
              });
              break;
              
            case 'paint':
              const paintEntry = entry as PerformancePaintTiming;
              if (paintEntry.name === 'first-contentful-paint') {
                logMetric('fcp', paintEntry.startTime);
                updateMetrics({ fcp: paintEntry.startTime });
              }
              break;
          }
        }
      });

      try {
        observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
      } catch (error) {
        if (enableLogging) {
          console.warn('[Performance] Performance Observer not fully supported:', error);
        }
      }

      return () => observer.disconnect();
    };

    // Monitor resource loading performance
    const setupResourceMonitoring = () => {
      if (!('performance' in window)) return;

      const resourceObserver = new PerformanceObserver((list) => {
        if (!isActive) return;

        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            const loadTime = resourceEntry.responseEnd - resourceEntry.requestStart;
            
            if (loadTime > 1000) { // Log slow resources (>1s)
              logMetric(`slow_resource_${resourceEntry.name.split('/').pop()}`, loadTime);
            }
          }
        }
      });

      try {
        resourceObserver.observe({ entryTypes: ['resource'] });
      } catch (error) {
        if (enableLogging) {
          console.warn('[Performance] Resource monitoring not available:', error);
        }
      }

      return () => resourceObserver.disconnect();
    };

    // Monitor memory usage
    const setupMemoryMonitoring = () => {
      if (!('memory' in performance)) return;

      const checkMemory = () => {
        if (!isActive) return;

        const memory = (performance as any).memory;
        const memoryUsage = {
          used: memory.usedJSHeapSize / 1024 / 1024, // MB
          total: memory.totalJSHeapSize / 1024 / 1024, // MB
          limit: memory.jsHeapSizeLimit / 1024 / 1024 // MB
        };

        if (memoryUsage.used > memoryUsage.limit * 0.8) {
          logMetric('high_memory_usage', memoryUsage.used);
        }
      };

      const interval = setInterval(checkMemory, 30000); // Check every 30 seconds
      return () => clearInterval(interval);
    };

    // Setup all monitoring
    setupWebVitals();
    const cleanupCustom = setupCustomMetrics();
    const cleanupResources = setupResourceMonitoring();
    const cleanupMemory = setupMemoryMonitoring();

    // Cleanup function
    return () => {
      isActive = false;
      setIsMonitoring(false);
      cleanupCustom?.();
      cleanupResources?.();
      cleanupMemory?.();
    };
  }, [logMetric, sendToAnalytics, updateMetrics, enableLogging]);

  // Performance score calculation
  const calculatePerformanceScore = useCallback(() => {
    if (!metrics.cls || !metrics.fcp || !metrics.lcp || !metrics.ttfb || !metrics.inp) {
      return null;
    }

    const scores = {
      cls: metrics.cls <= 0.1 ? 100 : metrics.cls <= 0.25 ? 80 : 60,
      fcp: metrics.fcp <= 1800 ? 100 : metrics.fcp <= 3000 ? 80 : 60,
      lcp: metrics.lcp <= 2500 ? 100 : metrics.lcp <= 4000 ? 80 : 60,
      ttfb: metrics.ttfb <= 800 ? 100 : metrics.ttfb <= 1800 ? 80 : 60,
      inp: metrics.inp <= 200 ? 100 : metrics.inp <= 500 ? 80 : 60
    };

    const averageScore = Object.values(scores).reduce((sum, score) => sum + score, 0) / Object.values(scores).length;
    return Math.round(averageScore);
  }, [metrics]);

  const performanceScore = calculatePerformanceScore();

  // Expose performance data globally for debugging
  useEffect(() => {
    if (typeof window !== 'undefined' && enableLogging) {
      (window as any).__performanceMetrics = metrics;
      (window as any).__performanceScore = performanceScore;
    }
  }, [metrics, performanceScore, enableLogging]);

  return null;
};

export default AdvancedPerformanceMonitor;