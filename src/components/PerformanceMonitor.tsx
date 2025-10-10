import React, { useEffect, useState, useCallback } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  fid: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
  loadTime: number | null;
  domContentLoaded: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableReporting?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableReporting = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    fid: null,
    fcp: null,
    lcp: null,
    ttfb: null,
    loadTime: null,
    domContentLoaded: null
  });

  const updateMetric = useCallback((key: keyof PerformanceMetrics, value: number) => {
    setMetrics(prev => {
      const updated = { ...prev, [key]: value };
      onMetricsUpdate?.(updated);
      return updated;
    });
  }, [onMetricsUpdate]);

  const reportMetric = useCallback((name: string, value: number) => {
    if (!enableReporting) return;

    // Report to Google Analytics if available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', name, {
        event_category: 'Web Vitals',
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        non_interaction: true,
      });
    }

    // Report to custom analytics endpoint
    if (typeof window !== 'undefined' && 'navigator' in window) {
      fetch('/api/analytics/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metric: name,
          value: value,
          url: window.location.href,
          timestamp: Date.now(),
          userAgent: navigator.userAgent
        })
      }).catch(() => {
        // Silently fail if analytics endpoint is not available
      });
    }
  }, [enableReporting]);

  useEffect(() => {
    // Measure Core Web Vitals
    getCLS((metric) => {
      updateMetric('cls', metric.value);
      reportMetric('CLS', metric.value);
    });

    getFID((metric) => {
      updateMetric('fid', metric.value);
      reportMetric('FID', metric.value);
    });

    getFCP((metric) => {
      updateMetric('fcp', metric.value);
      reportMetric('FCP', metric.value);
    });

    getLCP((metric) => {
      updateMetric('lcp', metric.value);
      reportMetric('LCP', metric.value);
    });

    getTTFB((metric) => {
      updateMetric('ttfb', metric.value);
      reportMetric('TTFB', metric.value);
    });

    // Measure additional performance metrics
    const measureLoadTime = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
          
          updateMetric('loadTime', loadTime);
          updateMetric('domContentLoaded', domContentLoaded);
          
          reportMetric('LoadTime', loadTime);
          reportMetric('DOMContentLoaded', domContentLoaded);
        }
      }
    };

    // Measure when page is fully loaded
    if (document.readyState === 'complete') {
      measureLoadTime();
    } else {
      window.addEventListener('load', measureLoadTime);
    }

    // Monitor resource loading performance
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          const resource = entry as PerformanceResourceTiming;
          if (resource.duration > 1000) { // Log slow resources
            console.warn('Slow resource detected:', {
              name: resource.name,
              duration: resource.duration,
              size: resource.transferSize
            });
          }
        }
      }
    });

    observer.observe({ entryTypes: ['resource'] });

    // Monitor long tasks
    const longTaskObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const longTask = entry as PerformanceEntry;
        if (longTask.duration > 50) { // Tasks longer than 50ms
          console.warn('Long task detected:', {
            duration: longTask.duration,
            startTime: longTask.startTime
          });
        }
      }
    });

    longTaskObserver.observe({ entryTypes: ['longtask'] });

    return () => {
      window.removeEventListener('load', measureLoadTime);
      observer.disconnect();
      longTaskObserver.disconnect();
    };
  }, [updateMetric, reportMetric]);

  // Performance score calculation
  const calculatePerformanceScore = useCallback(() => {
    const { cls, fid, fcp, lcp, ttfb } = metrics;
    let score = 0;
    let factors = 0;

    // CLS scoring (0-100)
    if (cls !== null) {
      if (cls <= 0.1) score += 25;
      else if (cls <= 0.25) score += 15;
      else if (cls <= 0.4) score += 5;
      factors++;
    }

    // FID scoring (0-100)
    if (fid !== null) {
      if (fid <= 100) score += 25;
      else if (fid <= 300) score += 15;
      else if (fid <= 500) score += 5;
      factors++;
    }

    // FCP scoring (0-100)
    if (fcp !== null) {
      if (fcp <= 1800) score += 25;
      else if (fcp <= 3000) score += 15;
      else if (fcp <= 4000) score += 5;
      factors++;
    }

    // LCP scoring (0-100)
    if (lcp !== null) {
      if (lcp <= 2500) score += 25;
      else if (lcp <= 4000) score += 15;
      else if (lcp <= 6000) score += 5;
      factors++;
    }

    return factors > 0 ? Math.round(score / factors) : 0;
  }, [metrics]);

  const performanceScore = calculatePerformanceScore();

  // Don't render anything visible, this is a monitoring component
  return (
    <div style={{ display: 'none' }} aria-hidden="true">
      {/* Performance metrics for debugging */}
      {process.env.NODE_ENV === 'development' && (
        <div>
          <p>Performance Score: {performanceScore}/100</p>
          <p>CLS: {metrics.cls}</p>
          <p>FID: {metrics.fid}</p>
          <p>FCP: {metrics.fcp}</p>
          <p>LCP: {metrics.lcp}</p>
          <p>TTFB: {metrics.ttfb}</p>
          <p>Load Time: {metrics.loadTime}</p>
          <p>DOM Content Loaded: {metrics.domContentLoaded}</p>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;