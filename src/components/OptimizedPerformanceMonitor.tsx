'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { logger } from '../utils/productionLogger';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fmp: number | null;
  tti: number | null;
  tbt: number | null;
}

interface PerformanceMonitorProps {
  enableRealUserMonitoring?: boolean;
  enableCoreWebVitals?: boolean;
  enableResourceTiming?: boolean;
  enableNavigationTiming?: boolean;
  enableCustomMetrics?: boolean;
  reportInterval?: number;
}

const OptimizedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableRealUserMonitoring = true,
  enableCoreWebVitals = true,
  enableResourceTiming = true,
  enableNavigationTiming = true,
  enableCustomMetrics = true,
  reportInterval = 30000
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null,
    tti: null,
    tbt: null
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

  // Core Web Vitals measurement
  const measureCoreWebVitals = useCallback(() => {
    if (!enableCoreWebVitals || typeof window === 'undefined') return;

    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
        logger.debug('FCP measured', { fcp: fcpEntry.startTime });
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      logger.debug('LCP measured', { lcp: lastEntry.startTime });
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if ('processingStart' in entry && entry.startTime) {
          const fid = (entry as any).processingStart - entry.startTime;
          setMetrics(prev => ({ ...prev, fid }));
          logger.debug('FID measured', { fid });
        }
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
          setMetrics(prev => ({ ...prev, cls: clsValue }));
          logger.debug('CLS measured', { cls: clsValue });
        }
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, [enableCoreWebVitals]);

  // Navigation timing
  const measureNavigationTiming = useCallback(() => {
    if (!enableNavigationTiming || typeof window === 'undefined') return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      const ttfb = navigation.responseStart - navigation.requestStart;
      setMetrics(prev => ({ ...prev, ttfb }));
      logger.debug('Navigation timing measured', { ttfb });
    }
  }, [enableNavigationTiming]);

  // Resource timing
  const measureResourceTiming = useCallback(() => {
    if (!enableResourceTiming || typeof window === 'undefined') return;

    const resources = performance.getEntriesByType('resource');
    const totalSize = resources.reduce((acc, resource) => {
      const transferSize = (resource as PerformanceResourceTiming).transferSize || 0;
      return acc + transferSize;
    }, 0);

    logger.debug('Resource timing measured', { 
      resourceCount: resources.length, 
      totalSize: `${(totalSize / 1024).toFixed(2)}KB` 
    });
  }, [enableResourceTiming]);

  // Custom metrics
  const measureCustomMetrics = useCallback(() => {
    if (!enableCustomMetrics || typeof window === 'undefined') return;

    // Time to Interactive (TTI) - simplified
    const domContentLoaded = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
    setMetrics(prev => ({ ...prev, tti: domContentLoaded }));
    
    // First Meaningful Paint (FMP) - simplified
    const firstPaint = performance.getEntriesByName('first-paint')[0];
    if (firstPaint) {
      setMetrics(prev => ({ ...prev, fmp: firstPaint.startTime }));
    }

    logger.debug('Custom metrics measured', { 
      tti: domContentLoaded, 
      fmp: firstPaint?.startTime 
    });
  }, [enableCustomMetrics]);

  // Report metrics
  const reportMetrics = useCallback(() => {
    if (!enableRealUserMonitoring) return;

    const report = {
      url: window.location.href,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      connection: (navigator as any).connection?.effectiveType || 'unknown',
      ...metrics
    };

    // Send to analytics service (replace with actual implementation)
    logger.info('Performance metrics reported', report);
    
    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'performance_metrics', {
        event_category: 'performance',
        event_label: 'core_web_vitals',
        custom_map: {
          fcp: metrics.fcp,
          lcp: metrics.lcp,
          fid: metrics.fid,
          cls: metrics.cls,
          ttfb: metrics.ttfb
        }
      });
    }
  }, [metrics, enableRealUserMonitoring]);

  // Initialize monitoring
  useEffect(() => {
    if (typeof window === 'undefined') return;

    setIsMonitoring(true);
    
    // Measure initial metrics
    measureCoreWebVitals();
    measureNavigationTiming();
    measureResourceTiming();
    measureCustomMetrics();

    // Set up periodic reporting
    const interval = setInterval(reportMetrics, reportInterval);

    // Report on page unload
    const handleBeforeUnload = () => {
      reportMetrics();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearInterval(interval);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      setIsMonitoring(false);
    };
  }, [measureCoreWebVitals, measureNavigationTiming, measureResourceTiming, measureCustomMetrics, reportMetrics, reportInterval]);

  // Performance budget monitoring
  const checkPerformanceBudget = useCallback(() => {
    const budget = {
      fcp: 1800, // 1.8s
      lcp: 2500, // 2.5s
      fid: 100,  // 100ms
      cls: 0.1,  // 0.1
      ttfb: 600  // 600ms
    };

    const violations: string[] = [];
    
    if (metrics.fcp && metrics.fcp > budget.fcp) {
      violations.push(`FCP: ${metrics.fcp}ms > ${budget.fcp}ms`);
    }
    if (metrics.lcp && metrics.lcp > budget.lcp) {
      violations.push(`LCP: ${metrics.lcp}ms > ${budget.lcp}ms`);
    }
    if (metrics.fid && metrics.fid > budget.fid) {
      violations.push(`FID: ${metrics.fid}ms > ${budget.fid}ms`);
    }
    if (metrics.cls && metrics.cls > budget.cls) {
      violations.push(`CLS: ${metrics.cls} > ${budget.cls}`);
    }
    if (metrics.ttfb && metrics.ttfb > budget.ttfb) {
      violations.push(`TTFB: ${metrics.ttfb}ms > ${budget.ttfb}ms`);
    }

    if (violations.length > 0) {
      logger.warn('Performance budget violations detected', { violations });
    }
  }, [metrics]);

  useEffect(() => {
    checkPerformanceBudget();
  }, [checkPerformanceBudget]);

  return (
    <div className="performance-monitor" style={{ display: 'none' }}>
      {isMonitoring && (
        <div className="monitoring-indicator">
          Performance monitoring active
        </div>
      )}
    </div>
  );
};

export default OptimizedPerformanceMonitor;