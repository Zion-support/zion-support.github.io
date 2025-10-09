'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fmp: number | null;
  tbt: number | null;
}

interface PerformanceMonitorProps {
  enableRealTimeMonitoring?: boolean;
  enableWebVitals?: boolean;
  enableResourceTiming?: boolean;
  enableUserTiming?: boolean;
  enableErrorTracking?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableRealTimeMonitoring = true,
  enableWebVitals = true,
  enableResourceTiming = true,
  enableUserTiming = true,
  enableErrorTracking = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null,
    tbt: null
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    if (enableRealTimeMonitoring) {
      startPerformanceMonitoring();
    }
    if (enableWebVitals) {
      setupWebVitals();
    }
    if (enableResourceTiming) {
      setupResourceTiming();
    }
    if (enableUserTiming) {
      setupUserTiming();
    }
    if (enableErrorTracking) {
      setupErrorTracking();
    }
  }, [enableRealTimeMonitoring, enableWebVitals, enableResourceTiming, enableUserTiming, enableErrorTracking]);

  const startPerformanceMonitoring = () => {
    setIsMonitoring(true);
    
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
          } else if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
          } else if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }));
          } else if (entry.entryType === 'layout-shift') {
            if (!(entry as any).hadRecentInput) {
              setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }));
            }
          }
        }
      });

      try {
        observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch (e) {
        console.warn('Performance Observer not supported:', e);
      }
    }

    // Monitor Time to First Byte
    if (performance.timing) {
      const ttfb = performance.timing.responseStart - performance.timing.navigationStart;
      setMetrics(prev => ({ ...prev, ttfb }));
    }

    // Monitor First Meaningful Paint
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-meaningful-paint') {
            setMetrics(prev => ({ ...prev, fmp: entry.startTime }));
          }
        }
      });

      try {
        observer.observe({ entryTypes: ['paint'] });
      } catch (e) {
        console.warn('Performance Observer for FMP not supported:', e);
      }
    }
  };

  const setupWebVitals = () => {
    // Import and use web-vitals library if available
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => {
          setMetrics(prev => ({ ...prev, cls: metric.value }));
          reportMetric('CLS', metric.value);
        });

        getFID((metric) => {
          setMetrics(prev => ({ ...prev, fid: metric.value }));
          reportMetric('FID', metric.value);
        });

        getFCP((metric) => {
          setMetrics(prev => ({ ...prev, fcp: metric.value }));
          reportMetric('FCP', metric.value);
        });

        getLCP((metric) => {
          setMetrics(prev => ({ ...prev, lcp: metric.value }));
          reportMetric('LCP', metric.value);
        });

        getTTFB((metric) => {
          setMetrics(prev => ({ ...prev, ttfb: metric.value }));
          reportMetric('TTFB', metric.value);
        });
      }).catch(() => {
        console.warn('web-vitals library not available');
      });
    }
  };

  const setupResourceTiming = () => {
    if (enableResourceTiming && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            const resource = entry as PerformanceResourceTiming;
            
            // Log slow resources
            if (resource.duration > 1000) {
              console.warn('Slow resource detected:', {
                name: resource.name,
                duration: resource.duration,
                size: resource.transferSize
              });
            }
          }
        }
      });

      try {
        observer.observe({ entryTypes: ['resource'] });
      } catch (e) {
        console.warn('Resource timing observer not supported:', e);
      }
    }
  };

  const setupUserTiming = () => {
    // Mark important milestones
    const mark = (name: string) => {
      if ('performance' in window && 'mark' in performance) {
        performance.mark(name);
      }
    };

    // Measure time between marks
    const measure = (name: string, startMark: string, endMark?: string) => {
      if ('performance' in window && 'measure' in performance) {
        try {
          if (endMark) {
            performance.measure(name, startMark, endMark);
          } else {
            performance.measure(name, startMark);
          }
        } catch (e) {
          console.warn('Performance measure failed:', e);
        }
      }
    };

    // Mark page load milestones
    mark('page-start');
    
    window.addEventListener('load', () => {
      mark('page-loaded');
      measure('page-load-time', 'page-start', 'page-loaded');
    });

    // Mark component render milestones
    mark('components-rendered');
  };

  const setupErrorTracking = () => {
    if (enableErrorTracking) {
      // Track JavaScript errors
      window.addEventListener('error', (event) => {
        reportError('JavaScript Error', {
          message: event.message,
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
          error: event.error?.stack
        });
      });

      // Track unhandled promise rejections
      window.addEventListener('unhandledrejection', (event) => {
        reportError('Unhandled Promise Rejection', {
          reason: event.reason,
          promise: event.promise
        });
      });

      // Track resource loading errors
      window.addEventListener('error', (event) => {
        if (event.target !== window) {
          reportError('Resource Loading Error', {
            type: (event.target as any).tagName,
            src: (event.target as any).src || (event.target as any).href,
            error: event.error
          });
        }
      }, true);
    }
  };

  const reportMetric = (name: string, value: number) => {
    // Send to analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'web_vitals', {
        metric_name: name,
        metric_value: Math.round(value),
        metric_id: `${name}-${Date.now()}`
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Web Vital ${name}:`, value);
    }
  };

  const reportError = (type: string, details: any) => {
    // Send to error tracking service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'exception', {
        description: `${type}: ${details.message || details.reason}`,
        fatal: false,
        custom_map: details
      });
    }

    // Log to console
    console.error(`${type}:`, details);
  };

  // Calculate performance score
  const calculatePerformanceScore = (): number => {
    let score = 100;
    
    // FCP scoring (0-100)
    if (metrics.fcp !== null) {
      if (metrics.fcp > 3000) score -= 20;
      else if (metrics.fcp > 2000) score -= 10;
      else if (metrics.fcp > 1500) score -= 5;
    }

    // LCP scoring (0-100)
    if (metrics.lcp !== null) {
      if (metrics.lcp > 4000) score -= 25;
      else if (metrics.lcp > 2500) score -= 15;
      else if (metrics.lcp > 2000) score -= 10;
    }

    // FID scoring (0-100)
    if (metrics.fid !== null) {
      if (metrics.fid > 300) score -= 20;
      else if (metrics.fid > 100) score -= 10;
      else if (metrics.fid > 50) score -= 5;
    }

    // CLS scoring (0-100)
    if (metrics.cls !== null) {
      if (metrics.cls > 0.25) score -= 25;
      else if (metrics.cls > 0.1) score -= 15;
      else if (metrics.cls > 0.05) score -= 10;
    }

    return Math.max(0, score);
  };

  const performanceScore = calculatePerformanceScore();

  // Log performance summary
  useEffect(() => {
    if (isMonitoring && Object.values(metrics).some(value => value !== null)) {
      console.log('Performance Metrics:', {
        ...metrics,
        score: performanceScore
      });
    }
  }, [metrics, performanceScore, isMonitoring]);

  return null; // This component doesn't render anything visible
};

export default PerformanceMonitor;