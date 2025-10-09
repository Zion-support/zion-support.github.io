import React, { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  memoryUsage: number;
}

interface PerformanceMonitorProps {
  enableConsoleLogging?: boolean;
  enableReporting?: boolean;
  reportInterval?: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableConsoleLogging = false,
  enableReporting = true,
  reportInterval = 5000,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memoryUsage: 0,
  });

  const [, setPerformanceScore] = useState(0);

  useEffect(() => {
    // const _reportWebVitals = (_metric: { name: string; value: number }) => {
    //   // Log to console in development (only on client side)
    //   if (typeof window !== 'undefined' && enableConsoleLogging) {
    //     logger.info('Web Vital captured', { name: _metric.name, value: _metric.value });
    //   }
    // };
    const updateMetrics = () => {
      const currentMetrics: PerformanceMetrics = {
        lcp: null,
        fid: null,
        cls: null,
        fcp: null,
        ttfb: null,
        memoryUsage: 0,
      };

      // Get Core Web Vitals
      if ('web-vitals' in window) {
        // This would be imported from web-vitals library
        // For now, we'll simulate the metrics
        currentMetrics.lcp = Math.random() * 4000 + 1000;
        currentMetrics.fid = Math.random() * 100 + 10;
        currentMetrics.cls = Math.random() * 0.3;
        currentMetrics.fcp = Math.random() * 2000 + 500;
        currentMetrics.ttfb = Math.random() * 800 + 200;
      }

      // Get memory usage if available
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        currentMetrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
      }

      setMetrics(currentMetrics);

      // Calculate performance score
      const score = calculatePerformanceScore(currentMetrics);
      setPerformanceScore(score);

      // Log metrics if enabled
      if (enableConsoleLogging && typeof window !== 'undefined') {
        // eslint-disable-next-line no-console
        console.log('Performance Metrics:', currentMetrics);
        // eslint-disable-next-line no-console
        console.log('Performance Score:', score);
      }

      // Report metrics if enabled
      if (enableReporting) {
        reportMetrics(currentMetrics, score);
      }
    };

    const getPerformanceScore = (currentMetrics: PerformanceMetrics): number => {
      let score = 100;
      if (metrics.renderTime > 1500) score -= 15;
      if (metrics.loadTime > 3000) score -= 20;
      if (metrics.memoryUsage > 50) score -= 10;
      return Math.max(0, score);    };
    const metrics: PerformanceMetrics = {
      lcp: null,
      fid: null,
      cls: null,
      fcp: null,
      ttfb: null
      if (currentMetrics.renderTime > 1500) score -= 15;
      if (currentMetrics.loadTime > 3000) score -= 20;
      if (currentMetrics.memoryUsage > 50) score -= 10;
      return Math.max(0, score);
      ttfb: null,
    };

    // Measure Core Web Vitals
    const measureWebVitals = () => {
      // LCP - Largest Contentful Paint
    // Initial metrics update
    updateMetrics();

    // Set up interval for periodic updates
    const interval = setInterval(updateMetrics, reportInterval);

    // Set up performance observers
    const setupPerformanceObservers = () => {
      // Observe LCP
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1] as any;
            if (lastEntry) {
              setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch {
          // LCP observer not supported
        }

      setMetrics(currentMetrics);

      const score = getPerformanceScore();
      setPerformanceScore(score);

      if (enableConsoleLogging) {
        if (typeof console !== 'undefined') {
          logger.debug('Performance Metrics', {
            metrics: currentMetrics,
            score,          });
        // FID - First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry: any) => {
            metrics.fid = entry.processingStart - entry.startTime;
        // FID - First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry: PerformanceEntry & { processingStart: number; startTime: number }) => {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          });
        });
        
        // Observe FID
        try {
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch {
          // FID observer not supported
        }

        // Observe CLS
        try {
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
                setMetrics(prev => ({ ...prev, cls: clsValue }));
              }
            });
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch {
          // CLS observer not supported
        }

        // Observe FCP
        try {
          const fcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (entry.name === 'first-contentful-paint') {
                setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
              }
            });
          });
          fcpObserver.observe({ entryTypes: ['paint'] });
        } catch {
          // FCP observer not supported
        }

      // Send metrics to analytics after page load
      window.addEventListener('load', () => {
        setTimeout(() => {
          // Send to Google Analytics if available
          if (typeof window !== 'undefined' && (window as unknown as { gtag?: (command: string, event: string, data: Record<string, unknown>) => void }).gtag) {
            const gtag = (window as unknown as { gtag: (command: string, event: string, data: Record<string, unknown>) => void }).gtag;
            if (metrics.lcp !== null) {
              gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'LCP',
                value: Math.round(metrics.lcp)
              });
            }
            if (metrics.fid !== null) {
              gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'FID',
                value: Math.round(metrics.fid)
              });
            }
            if (metrics.cls !== null) {
              gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'CLS',
                value: Math.round(metrics.cls * 1000) / 1000
              });
            }
          }
        }, 2000);
    // Monitor Core Web Vitals
    const navigation = performance.getEntriesByType('navigation')[0] as
      | PerformanceNavigationTiming
      | undefined;

    if (navigation) {
      metrics.ttfb = navigation.responseStart - navigation.requestStart;
      metrics.fcp = navigation.domContentLoadedEventEnd - navigation.navigationStart;
    }

    // Monitor Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry;
      metrics.lcp = lastEntry.startTime;
    });

    try {
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (error) {
      console.warn('LCP observer not supported:', error);
    }

    // Monitor First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'first-input') {
          metrics.fid = entry.processingStart - entry.startTime;
        }
      });
    });

    try {
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (error) {
      console.warn('FID observer not supported:', error);
    }

    // Monitor resource loading
    const monitorResources = () => {
      if ('PerformanceObserver' in window) {
        const resourceObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.duration > 1000) { // Track slow resources
              // Could send to analytics or error reporting service
            }
          });
        });
        
        // Observe TTFB
        try {
          const ttfbObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (entry.entryType === 'navigation') {
                setMetrics(prev => ({ ...prev, ttfb: entry.responseStart - entry.requestStart }));
              }
            });
          });
          ttfbObserver.observe({ entryTypes: ['navigation'] });
        } catch {
          // Resource observer not supported
    // Monitor Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
          // TTFB observer not supported
        }
      });
      metrics.cls = clsValue;
    });

    try {
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('CLS observer not supported:', error);
    }

    // Monitor memory usage
    const memory = (
      performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number } }
    ).memory;

    if (memory) {
      const usedMemory = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
      const totalMemory = memory.totalJSHeapSize / 1024 / 1024; // Convert to MB
      
      if (usedMemory > 50) {
        console.warn(`High memory usage detected: ${usedMemory.toFixed(2)}MB / ${totalMemory.toFixed(2)}MB`);
      }
    }

    // Log performance metrics in development
    if (process.env.NODE_ENV === 'development') {
      const logMetrics = () => {
        console.group('Performance Metrics');
        console.log('LCP (Largest Contentful Paint):', metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'Not available');
        console.log('FID (First Input Delay):', metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'Not available');
        console.log('CLS (Cumulative Layout Shift):', metrics.cls ? metrics.cls.toFixed(4) : 'Not available');
        console.log('FCP (First Contentful Paint):', metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'Not available');
        console.log('TTFB (Time to First Byte):', metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'Not available');
        
        if (memory) {
          console.log('Memory Usage:', `${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)}MB / ${(memory.totalJSHeapSize / 1024 / 1024).toFixed(2)}MB`);
        }
        console.groupEnd();
      };

    // Set up interval for continuous monitoring
    const interval = setInterval(updateMetrics, updateInterval);
    // Initial metrics update
    updateMetrics();
      // Log metrics after a delay to allow for collection
      setTimeout(logMetrics, 5000);
    }

    // Cleanup observers
    return () => {
      try {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      } catch (error) {
        console.warn('Error disconnecting performance observers:', error);
      }
    };
  }, []);
    // Initial metrics update
    updateMetrics();

    // Set up interval for continuous monitoring
    const interval = setInterval(updateMetrics, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [enabled, collectPerformanceMetrics]);

    setupPerformanceObservers();

    return () => {
      clearInterval(interval);
    };
  }, [enableConsoleLogging, enableReporting, reportInterval, calculatePerformanceScore, reportMetrics]);

  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;

    // LCP scoring (0-100)
    if (metrics.lcp !== null) {
      if (metrics.lcp <= 2500) score -= 0;
      else if (metrics.lcp <= 4000) score -= 10;
      else score -= 20;
    }

    // FID scoring (0-100)
    if (metrics.fid !== null) {
      if (metrics.fid <= 100) score -= 0;
      else if (metrics.fid <= 300) score -= 10;
      else score -= 20;
    }

    // CLS scoring (0-100)
    if (metrics.cls !== null) {
      if (metrics.cls <= 0.1) score -= 0;
      else if (metrics.cls <= 0.25) score -= 10;
      else score -= 20;
    }

    // FCP scoring (0-100)
    if (metrics.fcp !== null) {
      if (metrics.fcp <= 1800) score -= 0;
      else if (metrics.fcp <= 3000) score -= 10;
      else score -= 20;
    }

    // TTFB scoring (0-100)
    if (metrics.ttfb !== null) {
      if (metrics.ttfb <= 800) score -= 0;
      else if (metrics.ttfb <= 1800) score -= 10;
      else score -= 20;
    }

    return Math.max(0, score);
  }, []);

  const reportMetrics = useCallback((metrics: PerformanceMetrics, score: number) => {
    // In a real application, you would send this data to your analytics service
    // For now, we'll just store it in localStorage for debugging
    if (typeof window !== 'undefined') {
      const reportData = {
        timestamp: new Date().toISOString(),
        metrics,
        score,
        userAgent: navigator.userAgent,
        url: window.location.href,
      };

      try {
        localStorage.setItem('performance-report', JSON.stringify(reportData));
      } catch {
        // localStorage not available
      }
    }
  }, []);

  const getMetrics = useCallback(() => {
    return metrics;
  }, [metrics]);

  const getScore = useCallback(() => {
    return calculatePerformanceScore(metrics);
  }, [metrics, calculatePerformanceScore]);

  // Expose methods for external use
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).performanceMonitor = {
        getMetrics,
        getScore,
        updateMetrics: () => {
          // Trigger metrics update
          const event = new CustomEvent('performance-update');
          window.dispatchEvent(event);
        }
      };
    }
  }, [getMetrics, getScore]);

  return null; // This component doesn't render anything
  return null;
};

export default PerformanceMonitor;
