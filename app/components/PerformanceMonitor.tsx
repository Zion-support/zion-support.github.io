import React, { useEffect, useState, useCallback } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

interface PerformanceData {
  metrics: PerformanceMetrics;
  timestamp: number;
  url: string;
  userAgent: string;
  connectionType?: string;
  deviceMemory?: number;
  hardwareConcurrency?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null,
  });

  const [isMonitoring, setIsMonitoring] = useState(false);
  const [performanceData, setPerformanceData] = useState<PerformanceData | null>(null);

  const handleMetric = useCallback((metric: any) => {
    setMetrics(prev => ({
      ...prev,
      [metric.name]: metric.value,
    }));

    // Send to analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', metric.name, {
        event_category: 'Web Vitals',
        value: Math.round(metric.value),
        non_interaction: true,
        custom_map: {
          metric_id: metric.id,
          metric_delta: metric.delta,
        },
      });
    }

    // Send to custom analytics endpoint
    if (typeof window !== 'undefined') {
      fetch('/api/performance-metrics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metric: metric.name,
          value: metric.value,
          id: metric.id,
          delta: metric.delta,
          url: window.location.href,
          timestamp: Date.now(),
        }),
      }).catch(() => {
        // Silently fail if analytics endpoint is not available
      });
    }
  }, []);

  const collectPerformanceData = useCallback(() => {
    if (typeof window === 'undefined') return;

    const nav = navigator as any;
    const connection = nav.connection || nav.mozConnection || nav.webkitConnection;
    
    const data: PerformanceData = {
      metrics,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      connectionType: connection?.effectiveType,
      deviceMemory: nav.deviceMemory,
      hardwareConcurrency: navigator.hardwareConcurrency,
    };

    setPerformanceData(data);

    // Send comprehensive performance data
    fetch('/api/performance-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).catch(() => {
      // Silently fail if analytics endpoint is not available
    });
  }, [metrics]);

  const startMonitoring = useCallback(() => {
    if (isMonitoring) return;

    setIsMonitoring(true);

    // Measure Core Web Vitals
    onCLS(handleMetric, { reportAllChanges: true });
    onINP(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric, { reportAllChanges: true });
    onTTFB(handleMetric);

    // Monitor additional performance metrics
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            console.log('Navigation Performance:', {
              domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
              totalTime: navEntry.loadEventEnd - navEntry.fetchStart,
              dns: navEntry.domainLookupEnd - navEntry.domainLookupStart,
              tcp: navEntry.connectEnd - navEntry.connectStart,
              request: navEntry.responseEnd - navEntry.requestStart,
              response: navEntry.responseEnd - navEntry.responseStart,
            });
          }

          if (entry.entryType === 'paint') {
            console.log('Paint Performance:', {
              name: entry.name,
              startTime: entry.startTime,
              duration: entry.duration,
            });
          }

          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            if (resourceEntry.duration > 1000) { // Log slow resources
              console.warn('Slow Resource:', {
                name: resourceEntry.name,
                duration: resourceEntry.duration,
                size: resourceEntry.transferSize,
                type: resourceEntry.initiatorType,
              });
            }
          }
        });
      });

      observer.observe({ entryTypes: ['navigation', 'paint', 'resource'] });
    }

    // Monitor memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      console.log('Memory Usage:', {
        used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
        total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
        limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB',
      });
    }

    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      const longTaskObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          console.warn('Long Task Detected:', {
            duration: entry.duration,
            startTime: entry.startTime,
          });
        });
      });

      try {
        longTaskObserver.observe({ entryTypes: ['longtask'] });
      } catch {
        // Long task observer not supported
      }
    }
  }, [isMonitoring, handleMetric]);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  useEffect(() => {
    startMonitoring();

    // Collect performance data after 5 seconds
    const timer = setTimeout(collectPerformanceData, 5000);

    return () => {
      clearTimeout(timer);
      stopMonitoring();
    };
  }, [startMonitoring, stopMonitoring, collectPerformanceData]);

  // Log performance metrics in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && performanceData) {
      console.log('Performance Data:', performanceData);
    }
  }, [performanceData]);

  // Monitor for performance issues
  useEffect(() => {
    const checkPerformanceIssues = () => {
      const issues: string[] = [];

      if (metrics.lcp && metrics.lcp > 4000) {
        issues.push('LCP is too slow (>4s)');
      }

      if (metrics.inp && metrics.inp > 300) {
        issues.push('INP is too slow (>300ms)');
      }

      if (metrics.cls && metrics.cls > 0.25) {
        issues.push('CLS is too high (>0.25)');
      }

      if (metrics.fcp && metrics.fcp > 3000) {
        issues.push('FCP is too slow (>3s)');
      }

      if (metrics.ttfb && metrics.ttfb > 2000) {
        issues.push('TTFB is too slow (>2s)');
      }

      if (issues.length > 0) {
        console.warn('Performance Issues Detected:', issues);
        
        // Send performance issues to analytics
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'performance_issues', {
            event_category: 'Performance',
            issues: issues.join(', '),
            lcp: metrics.lcp,
            inp: metrics.inp,
            cls: metrics.cls,
            fcp: metrics.fcp,
            ttfb: metrics.ttfb,
          });
        }
      }
    };

    const timer = setTimeout(checkPerformanceIssues, 10000); // Check after 10 seconds
    return () => clearTimeout(timer);
  }, [metrics]);

  return null;
};

export default PerformanceMonitor;