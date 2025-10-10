'use client';
import React, { useEffect, useState } from 'react';
import { logger } from '../utils/productionLogger';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  fmp: number | null;
  si: number | null;
}

interface PerformanceMonitorProps {
  enableRealTimeMonitoring?: boolean;
  enableWebVitals?: boolean;
  enableResourceTiming?: boolean;
  enableUserTiming?: boolean;
  reportInterval?: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableRealTimeMonitoring = true,
  enableWebVitals = true,
  enableResourceTiming = true,
  enableUserTiming = true,
  reportInterval = 30000
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    fmp: null,
    si: null
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    if (enableRealTimeMonitoring) {
      startMonitoring();
    }

    return () => {
      stopMonitoring();
    };
  }, [enableRealTimeMonitoring, enableWebVitals, enableResourceTiming, enableUserTiming, reportInterval]);

  const startMonitoring = (): void => {
    try {
      setIsMonitoring(true);
      
      if (enableWebVitals) {
        setupWebVitalsMonitoring();
      }
      
      if (enableResourceTiming) {
        setupResourceTimingMonitoring();
      }
      
      if (enableUserTiming) {
        setupUserTimingMonitoring();
      }
      
      // Set up periodic reporting
      const interval = setInterval(() => {
        reportMetrics();
      }, reportInterval);
      
      // Store interval ID for cleanup
      (window as any).performanceMonitorInterval = interval;
      
      logger.info('Performance monitoring started', { reportInterval }, 'PerformanceMonitor');
    } catch (error) {
      logger.error('Failed to start performance monitoring', { error: (error as Error).message }, 'PerformanceMonitor');
    }
  };

  const stopMonitoring = (): void => {
    try {
      setIsMonitoring(false);
      
      if ((window as any).performanceMonitorInterval) {
        clearInterval((window as any).performanceMonitorInterval);
        (window as any).performanceMonitorInterval = null;
      }
      
      logger.info('Performance monitoring stopped', {}, 'PerformanceMonitor');
    } catch (error) {
      logger.error('Failed to stop performance monitoring', { error: (error as Error).message }, 'PerformanceMonitor');
    }
  };

  const setupWebVitalsMonitoring = (): void => {
    // Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        
        // Report to analytics
        reportToAnalytics('LCP', lastEntry.startTime);
      });
      
      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (error) {
        logger.warn('LCP monitoring not supported', { error: (error as Error).message }, 'PerformanceMonitor');
      }
    }

    // First Input Delay (FID)
    if ('PerformanceObserver' in window) {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          reportToAnalytics('FID', entry.processingStart - entry.startTime);
        });
      });
      
      try {
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (error) {
        logger.warn('FID monitoring not supported', { error: (error as Error).message }, 'PerformanceMonitor');
      }
    }

    // Cumulative Layout Shift (CLS)
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
            reportToAnalytics('CLS', clsValue);
          }
        });
      });
      
      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        logger.warn('CLS monitoring not supported', { error: (error as Error).message }, 'PerformanceMonitor');
      }
    }

    // First Contentful Paint (FCP)
    if ('PerformanceObserver' in window) {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          reportToAnalytics('FCP', entry.startTime);
        });
      });
      
      try {
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch (error) {
        logger.warn('FCP monitoring not supported', { error: (error as Error).message }, 'PerformanceMonitor');
      }
    }

    // Time to First Byte (TTFB)
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const ttfb = navigation.responseStart - navigation.requestStart;
        setMetrics(prev => ({ ...prev, ttfb }));
        reportToAnalytics('TTFB', ttfb);
      }
    }
  };

  const setupResourceTimingMonitoring = (): void => {
    if ('PerformanceObserver' in window) {
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const resource = entry as PerformanceResourceTiming;
          
          // Monitor slow resources
          if (resource.duration > 1000) {
            logger.warn('Slow resource detected', {
              name: resource.name,
              duration: resource.duration,
              size: resource.transferSize
            }, 'PerformanceMonitor');
          }
          
          // Monitor failed resources
          if (resource.transferSize === 0 && resource.duration > 0) {
            logger.warn('Failed resource detected', {
              name: resource.name,
              duration: resource.duration
            }, 'PerformanceMonitor');
          }
        });
      });
      
      try {
        resourceObserver.observe({ entryTypes: ['resource'] });
      } catch (error) {
        logger.warn('Resource timing monitoring not supported', { error: (error as Error).message }, 'PerformanceMonitor');
      }
    }
  };

  const setupUserTimingMonitoring = (): void => {
    if ('PerformanceObserver' in window) {
      const userTimingObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          logger.info('User timing mark', {
            name: entry.name,
            startTime: entry.startTime,
            duration: entry.duration
          }, 'PerformanceMonitor');
        });
      });
      
      try {
        userTimingObserver.observe({ entryTypes: ['measure'] });
      } catch (error) {
        logger.warn('User timing monitoring not supported', { error: (error as Error).message }, 'PerformanceMonitor');
      }
    }
  };

  const reportToAnalytics = (metric: string, value: number): void => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'web_vitals', {
        name: metric,
        value: Math.round(value),
        event_category: 'Performance'
      });
    }
  };

  const reportMetrics = (): void => {
    const currentMetrics = { ...metrics };
    
    // Only report if we have meaningful data
    const hasData = Object.values(currentMetrics).some(value => value !== null);
    
    if (hasData) {
      logger.info('Performance metrics report', currentMetrics, 'PerformanceMonitor');
      
      // Report to analytics
      Object.entries(currentMetrics).forEach(([key, value]) => {
        if (value !== null) {
          reportToAnalytics(key.toUpperCase(), value);
        }
      });
    }
  };

  const getPerformanceScore = (): number => {
    const scores = [];
    
    if (metrics.lcp !== null) {
      // LCP score: < 2.5s = 100, 2.5-4s = 50, > 4s = 0
      scores.push(metrics.lcp < 2500 ? 100 : metrics.lcp < 4000 ? 50 : 0);
    }
    
    if (metrics.fid !== null) {
      // FID score: < 100ms = 100, 100-300ms = 50, > 300ms = 0
      scores.push(metrics.fid < 100 ? 100 : metrics.fid < 300 ? 50 : 0);
    }
    
    if (metrics.cls !== null) {
      // CLS score: < 0.1 = 100, 0.1-0.25 = 50, > 0.25 = 0
      scores.push(metrics.cls < 0.1 ? 100 : metrics.cls < 0.25 ? 50 : 0);
    }
    
    if (metrics.fcp !== null) {
      // FCP score: < 1.8s = 100, 1.8-3s = 50, > 3s = 0
      scores.push(metrics.fcp < 1800 ? 100 : metrics.fcp < 3000 ? 50 : 0);
    }
    
    if (metrics.ttfb !== null) {
      // TTFB score: < 600ms = 100, 600ms-1.5s = 50, > 1.5s = 0
      scores.push(metrics.ttfb < 600 ? 100 : metrics.ttfb < 1500 ? 50 : 0);
    }
    
    return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  };

  // Don't render anything visible
  return null;
};

export default PerformanceMonitor;