import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  navigationStart: number;
  pageLoadTime: number;
}

interface PerformanceMonitorProps {
  onMetrics?: (metrics: PerformanceMetrics) => void;
  enabled?: boolean;
}

export function PerformanceMonitor({ onMetrics, enabled = true }: PerformanceMonitorProps) {
  const location = useLocation();
  const metricsRef = useRef<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    navigationStart: performance.now(),
    pageLoadTime: 0
  });

  useEffect(() => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    const navigationStart = performance.now();
    let observer: PerformanceObserver | null = null;

    // First Contentful Paint (FCP)
    try {
      observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            metricsRef.current.fcp = entry.startTime;
          }
        });
      });
      observer.observe({ entryTypes: ['paint'] });
    } catch (e) {
      console.warn('FCP observer not supported:', e);
    }

    // Largest Contentful Paint (LCP)
    try {
      observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            metricsRef.current.lcp = entry.startTime;
          }
        });
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.warn('LCP observer not supported:', e);
    }

    // First Input Delay (FID)
    try {
      observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'first-input') {
            metricsRef.current.fid = entry.processingStart - entry.startTime;
          }
        });
      });
      observer.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.warn('FID observer not supported:', e);
    }

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    try {
      observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
            clsValue += (entry as any).value;
            metricsRef.current.cls = clsValue;
          }
        });
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.warn('CLS observer not supported:', e);
    }

    // Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      metricsRef.current.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
    }

    // Page Load Time
    const handleLoad = () => {
      metricsRef.current.pageLoadTime = performance.now() - navigationStart;
      
      // Send metrics after a delay to ensure all metrics are captured
      setTimeout(() => {
        if (onMetrics) {
          onMetrics(metricsRef.current);
        }
        
        // Log metrics to console in development
        if (process.env.NODE_ENV === 'development') {
          console.log('Performance Metrics:', {
            url: location.pathname,
            ...metricsRef.current,
            fcpScore: getFCPScore(metricsRef.current.fcp),
            lcpScore: getLCPScore(metricsRef.current.lcp),
            fidScore: getFIDScore(metricsRef.current.fid),
            clsScore: getCLSScore(metricsRef.current.cls)
          });
        }
      }, 1000);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      if (observer) {
        observer.disconnect();
      }
      window.removeEventListener('load', handleLoad);
    };
  }, [location.pathname, onMetrics, enabled]);

  // Performance scoring functions
  const getFCPScore = (fcp: number | null): string => {
    if (!fcp) return 'N/A';
    if (fcp < 1800) return 'Good';
    if (fcp < 3000) return 'Needs Improvement';
    return 'Poor';
  };

  const getLCPScore = (lcp: number | null): string => {
    if (!lcp) return 'N/A';
    if (lcp < 2500) return 'Good';
    if (lcp < 4000) return 'Needs Improvement';
    return 'Poor';
  };

  const getFIDScore = (fid: number | null): string => {
    if (!fid) return 'N/A';
    if (fid < 100) return 'Good';
    if (fid < 300) return 'Needs Improvement';
    return 'Poor';
  };

  const getCLSScore = (cls: number | null): string => {
    if (!cls) return 'N/A';
    if (cls < 0.1) return 'Good';
    if (cls < 0.25) return 'Needs Improvement';
    return 'Poor';
  };

  // This component doesn't render anything
  return null;
}

// Hook for using performance metrics
export function usePerformanceMetrics() {
  const [metrics, setMetrics] = React.useState<PerformanceMetrics | null>(null);

  const handleMetrics = (newMetrics: PerformanceMetrics) => {
    setMetrics(newMetrics);
  };

  return { metrics, handleMetrics };
}

// Utility function to send metrics to analytics
export function sendPerformanceMetrics(metrics: PerformanceMetrics, page: string) {
  // In production, send to your analytics service
  if (process.env.NODE_ENV === 'production') {
    // Example: Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('event', 'performance_metrics', {
        event_category: 'performance',
        event_label: page,
        value: Math.round(metrics.pageLoadTime),
        custom_parameters: {
          fcp: metrics.fcp,
          lcp: metrics.lcp,
          fid: metrics.fid,
          cls: metrics.cls,
          ttfb: metrics.ttfb
        }
      });
    }
  }
}

export default PerformanceMonitor;
