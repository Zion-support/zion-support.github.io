import React, { useEffect, useCallback, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  CLS: number;
  INP: number;
  FCP: number;
  LCP: number;
  TTFB: number;
  timestamp: number;
}

interface PerformanceTrackerProps {
  onMetricUpdate?: (metrics: PerformanceMetrics) => void;
  reportToAnalytics?: boolean;
  debugMode?: boolean;
}

const PerformanceTracker: React.FC<PerformanceTrackerProps> = ({
  onMetricUpdate,
  reportToAnalytics = true,
  debugMode = false
}) => {
  const [metrics, setMetrics] = useState<Partial<PerformanceMetrics>>({});
  const [isInitialized, setIsInitialized] = useState(false);

  // Debounced metric update to prevent excessive calls
  const debouncedUpdate = useCallback(
    (() => {
      let timeoutId: NodeJS.Timeout;
      return (newMetrics: Partial<PerformanceMetrics>) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setMetrics(prev => {
            const updated = { ...prev, ...newMetrics, timestamp: Date.now() };
            onMetricUpdate?.(updated as PerformanceMetrics);
            return updated;
          });
        }, 100);
      };
    })(),
    [onMetricUpdate]
  );

  // Report metrics to analytics
  const reportMetric = useCallback((name: string, value: number) => {
    if (!reportToAnalytics) return;

    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', name, {
        event_category: 'Web Vitals',
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        event_label: name,
        non_interaction: true,
      });
    }

    // Custom analytics endpoint
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metric: name,
          value,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        }),
      }).catch(error => {
        if (debugMode) {
          console.warn('Failed to report performance metric:', error);
        }
      });
    }
  }, [reportToAnalytics, debugMode]);

  // Initialize performance monitoring
  useEffect(() => {
    if (typeof window === 'undefined' || isInitialized) return;

    const handleMetric = (metric: any) => {
      const metricName = metric.name as keyof PerformanceMetrics;
      const metricValue = metric.value;

      // Update local state
      debouncedUpdate({ [metricName]: metricValue });

      // Report to analytics
      reportMetric(metricName, metricValue);

      // Debug logging
      if (debugMode) {
        console.log(`Performance Metric: ${metricName} = ${metricValue}`);
      }
    };

    // Set up Web Vitals monitoring
    try {
      onCLS(handleMetric, { reportAllChanges: true });
      onINP(handleMetric);
      onFCP(handleMetric);
      onLCP(handleMetric);
      onTTFB(handleMetric);
    } catch (error) {
      if (debugMode) {
        console.error('Failed to initialize performance monitoring:', error);
      }
    }

    // Monitor additional performance metrics
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          const loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
          
          if (loadTime > 0) {
            handleMetric({ name: 'LoadTime', value: loadTime });
          }
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['navigation'] });
    } catch (error) {
      if (debugMode) {
        console.warn('Performance Observer not supported:', error);
      }
    }

    setIsInitialized(true);

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [isInitialized, debouncedUpdate, reportMetric, debugMode]);

  // Monitor memory usage (if available)
  useEffect(() => {
    if (typeof window === 'undefined' || !('memory' in performance)) return;

    const checkMemoryUsage = () => {
      const memory = (performance as any).memory;
      if (memory) {
        const memoryUsage = {
          used: memory.usedJSHeapSize / 1024 / 1024, // MB
          total: memory.totalJSHeapSize / 1024 / 1024, // MB
          limit: memory.jsHeapSizeLimit / 1024 / 1024, // MB
        };

        if (debugMode) {
          console.log('Memory Usage:', memoryUsage);
        }

        // Report high memory usage
        if (memoryUsage.used / memoryUsage.limit > 0.8) {
          reportMetric('MemoryUsage', memoryUsage.used);
        }
      }
    };

    const interval = setInterval(checkMemoryUsage, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, [reportMetric, debugMode]);

  // Monitor network performance
  useEffect(() => {
    if (typeof window === 'undefined' || !('connection' in navigator)) return;

    const connection = (navigator as any).connection;
    if (connection) {
      const networkInfo = {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
        saveData: connection.saveData,
      };

      if (debugMode) {
        console.log('Network Info:', networkInfo);
      }

      // Report slow connections
      if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
        reportMetric('SlowConnection', 1);
      }
    }
  }, [reportMetric, debugMode]);

  return null; // This component doesn't render anything
};

export default PerformanceTracker;