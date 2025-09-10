import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  loadTime: number | null;
}

interface PerformanceMonitorProps {
  enabled?: boolean;
  reportInterval?: number;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = true,
  reportInterval = 10000,
  onMetricsUpdate
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    loadTime: null
  });

  const getPerformanceMetrics = useCallback((): PerformanceMetrics => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || null;
    const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || null;
    const ttfb = navigation ? navigation.responseStart - navigation.requestStart : null;
    const loadTime = navigation ? navigation.loadEventEnd - navigation.navigationStart : null;

    // Get CLS (Cumulative Layout Shift)
    let cls = null;
    if ('PerformanceObserver' in window) {
      try {
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          cls = clsValue;
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        // console.warn('CLS measurement not supported');
      }
    }

    // Get FID (First Input Delay) - simplified version
    let fid = null;
    if ('PerformanceObserver' in window) {
      try {
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            fid = (entry as any).processingStart - entry.startTime;
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        // console.warn('FID measurement not supported');
      }
    }

    return { fcp, lcp, fid, cls, ttfb, loadTime };
  }, []);

  const reportMetrics = useCallback(() => {
    if (!enabled) return;

    const currentMetrics = getPerformanceMetrics();
    setMetrics(currentMetrics);
    
    if (onMetricsUpdate) {
      onMetricsUpdate(currentMetrics);
    }

    // Log performance metrics in development
    if (process.env.NODE_ENV === 'development') {
      console.group('🚀 Performance Metrics');
      // console.log('First Contentful Paint (FCP):', currentMetrics.fcp ? `${currentMetrics.fcp.toFixed(2)}ms` : 'N/A');
      // console.log('Largest Contentful Paint (LCP):', currentMetrics.lcp ? `${currentMetrics.lcp.toFixed(2)}ms` : 'N/A');
      // console.log('First Input Delay (FID):', currentMetrics.fid ? `${currentMetrics.fid.toFixed(2)}ms` : 'N/A');
      // console.log('Cumulative Layout Shift (CLS):', currentMetrics.cls ? currentMetrics.cls.toFixed(4) : 'N/A');
      // console.log('Time to First Byte (TTFB):', currentMetrics.ttfb ? `${currentMetrics.ttfb.toFixed(2)}ms` : 'N/A');
      // console.log('Load Time:', currentMetrics.loadTime ? `${currentMetrics.loadTime.toFixed(2)}ms` : 'N/A');
      console.groupEnd();
    }

    // Send metrics to analytics service in production
    if (process.env.NODE_ENV === 'production' && window.gtag) {
      window.gtag('event', 'performance_metrics', {
        event_category: 'Performance',
        event_label: 'Core Web Vitals',
        custom_map: {
          fcp: currentMetrics.fcp,
          lcp: currentMetrics.lcp,
          fid: currentMetrics.fid,
          cls: currentMetrics.cls,
          ttfb: currentMetrics.ttfb,
          load_time: currentMetrics.loadTime
        }
      });
    }
  }, [enabled, getPerformanceMetrics, onMetricsUpdate]);

  useEffect(() => {
    if (!enabled) return;

    // Initial metrics collection after page load
    const initialTimeout = setTimeout(() => {
      reportMetrics();
    }, 1000);

    // Periodic metrics collection
    const interval = setInterval(reportMetrics, reportInterval);

    // Cleanup
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [enabled, reportInterval, reportMetrics]);

  // Monitor for performance issues
  useEffect(() => {
    if (!enabled) return;

    const checkPerformanceIssues = () => {
      const { fcp, lcp, cls } = metrics;
      
      // Alert for poor performance
      if (fcp && fcp > 3000) {
        // console.warn('⚠️ Poor FCP detected:', fcp);
      }
      if (lcp && lcp > 4000) {
        // console.warn('⚠️ Poor LCP detected:', lcp);
      }
      if (cls && cls > 0.25) {
        // console.warn('⚠️ Poor CLS detected:', cls);
      }
    };

    checkPerformanceIssues();
  }, [metrics, enabled]);

  // Don't render anything - this is a monitoring component
  return null;
};

export default PerformanceMonitor;