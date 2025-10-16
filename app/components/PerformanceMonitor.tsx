import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  cls?: number;
  fcp?: number;
  lcp?: number;
  ttfb?: number;
  inp?: number;
  memoryUsage?: number;
  networkType?: string;
  connectionSpeed?: number;
  renderTime?: number;
  bundleSize?: number;
}

interface PerformanceThresholds {
  cls: { good: number; needsImprovement: number };
  fcp: { good: number; needsImprovement: number };
  lcp: { good: number; needsImprovement: number };
  ttfb: { good: number; needsImprovement: number };
  inp: { good: number; needsImprovement: number };
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isMonitoring, setIsMonitoring] = useState(false);

  const thresholds: PerformanceThresholds = {
    cls: { good: 0.1, needsImprovement: 0.25 },
    fcp: { good: 1800, needsImprovement: 3000 },
    lcp: { good: 2500, needsImprovement: 4000 },
    ttfb: { good: 800, needsImprovement: 1800 },
    inp: { good: 200, needsImprovement: 500 }
  };

  const getPerformanceRating = useCallback((metric: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
    const threshold = thresholds[metric as keyof PerformanceThresholds];
    if (!threshold) return 'good';
    
    if (value <= threshold.good) return 'good';
    if (value <= threshold.needsImprovement) return 'needs-improvement';
    return 'poor';
  }, [thresholds]);

  const logPerformanceIssue = useCallback((metric: string, value: number, rating: string) => {
    if (rating !== 'good') {
      console.warn(`Performance ${rating}: ${metric} = ${value}ms`);
      
      // In production, send to monitoring service
      if (process.env.NODE_ENV === 'production') {
        // analyticsService.track('performance_issue', { metric, value, rating });
      }
    }
  }, []);

  useEffect(() => {
    let performanceObserver: PerformanceObserver | null = null;
    let memoryInterval: NodeJS.Timeout | null = null;
    
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
        const currentMetrics: PerformanceMetrics = {};
        
        const handleMetric = (metric: { name: string; value: number }) => {
          const metricName = metric.name.toLowerCase() as keyof PerformanceMetrics;
          if (metricName in currentMetrics) {
            (currentMetrics as any)[metricName] = metric.value;
          }
          
          const rating = getPerformanceRating(metricName, metric.value);
          logPerformanceIssue(metricName, metric.value, rating);
          
          setMetrics(prev => ({ ...prev, [metricName]: metric.value }));
          
          // Store metrics for analytics
          if (process.env.NODE_ENV === 'production') {
            // Send to analytics service
            // analyticsService.track('performance_metric', { metric: metric.name, value: metric.value, rating });
          }
        };
        
        onCLS(handleMetric);
        onFCP(handleMetric);
        onLCP(handleMetric);
        onTTFB(handleMetric);
        onINP(handleMetric);
      }).catch(() => {
        // Silently fail if web-vitals is not available
      });
    }

    // Monitor performance metrics
    if ('performance' in window && 'PerformanceObserver' in window) {
      performanceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
        const navEntry = entry as PerformanceNavigationTiming;
        const renderTime = navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart;
        
        setMetrics(prev => ({ ...prev, renderTime }));
            
            // Store navigation timing for analytics
            if (process.env.NODE_ENV === 'production') {
              // analyticsService.track('navigation_timing', {
              //   domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              //   loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
              //   renderTime
              // });
            }
          }
        }
      });
      performanceObserver.observe({ entryTypes: ['navigation'] });
    }

    // Monitor memory usage
    const checkMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = memory.usedJSHeapSize / memory.jsHeapSizeLimit;
        setMetrics(prev => ({ ...prev, memoryUsage }));
        
        if (memoryUsage > 0.8) {
          console.warn('High memory usage detected:', memoryUsage);
        }
      }
    };

    // Monitor network information
    const checkNetworkInfo = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        setMetrics(prev => ({
          ...prev,
          networkType: connection.effectiveType,
          connectionSpeed: connection.downlink
        }));
      }
    };

    // Set up monitoring intervals
    memoryInterval = setInterval(checkMemoryUsage, 30000); // Every 30 seconds
    checkMemoryUsage();
    checkNetworkInfo();

    // Monitor bundle size
    const checkBundleSize = () => {
      const scripts = document.querySelectorAll('script[src]');
      let totalSize = 0;
      scripts.forEach(script => {
        const src = script.getAttribute('src');
        if (src && src.includes('assets/')) {
          // This is a rough estimate - in production you'd want more accurate measurement
          totalSize += 1; // Placeholder
        }
      });
      setMetrics(prev => ({ ...prev, bundleSize: totalSize }));
    };

    checkBundleSize();
    setIsMonitoring(true);
    
    // Cleanup function
    return () => {
      if (performanceObserver) {
        performanceObserver.disconnect();
      }
      if (memoryInterval) {
        clearInterval(memoryInterval);
      }
      setIsMonitoring(false);
    };
  }, [getPerformanceRating, logPerformanceIssue]);

  // Performance debugging in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && isMonitoring) {
      console.group('Performance Metrics');
      console.table(metrics);
      console.groupEnd();
    }
  }, [metrics, isMonitoring]);

  return null;
};

export default PerformanceMonitor;
