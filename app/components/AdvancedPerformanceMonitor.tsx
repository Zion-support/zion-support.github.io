import React, { useEffect, useState, useCallback } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  memoryUsage: number | null;
  connectionSpeed: string | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableReporting?: boolean;
  enableConsoleLogging?: boolean;
}

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableReporting = true,
  enableConsoleLogging = false,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memoryUsage: null,
    connectionSpeed: null,
  });

  const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {
    setMetrics(prev => {
      const updated = { ...prev, ...newMetrics };
      if (onMetricsUpdate) {
        onMetricsUpdate(updated);
      }
      return updated;
    });
  }, [onMetricsUpdate]);

  const getConnectionSpeed = useCallback(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection.effectiveType) {
        return connection.effectiveType;
      }
    }
    return null;
  }, []);

  const getMemoryUsage = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      return Math.round(memory.usedJSHeapSize / 1024 / 1024); // MB
    }
    return null;
  }, []);

  const reportMetric = useCallback((name: string, value: number, id: string) => {
    if (enableConsoleLogging) {
      console.log(`Performance Metric - ${name}:`, value, `(ID: ${id})`);
    }

    // Send to Google Analytics if available
    if (enableReporting && typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'web_vitals', {
        event_category: 'Performance',
        event_label: name,
        value: Math.round(value),
        custom_map: {
          metric_id: id,
        },
      });
    }

    // Send to custom analytics endpoint
    if (enableReporting && process.env.NODE_ENV === 'production') {
      fetch('/api/analytics/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metric: name,
          value,
          id,
          timestamp: Date.now(),
          url: window.location.href,
        }),
      }).catch(error => {
        if (enableConsoleLogging) {
          console.warn('Failed to send performance metric:', error);
        }
      });
    }
  }, [enableReporting, enableConsoleLogging]);

  useEffect(() => {
    // Measure Core Web Vitals
    const measureWebVitals = () => {
      // LCP - Largest Contentful Paint
      getLCP((metric) => {
        updateMetrics({ lcp: metric.value });
        reportMetric('LCP', metric.value, metric.id);
      });

      // FID - First Input Delay
      getFID((metric) => {
        updateMetrics({ fid: metric.value });
        reportMetric('FID', metric.value, metric.id);
      });

      // CLS - Cumulative Layout Shift
      getCLS((metric) => {
        updateMetrics({ cls: metric.value });
        reportMetric('CLS', metric.value, metric.id);
      });

      // FCP - First Contentful Paint
      getFCP((metric) => {
        updateMetrics({ fcp: metric.value });
        reportMetric('FCP', metric.value, metric.id);
      });

      // TTFB - Time to First Byte
      getTTFB((metric) => {
        updateMetrics({ ttfb: metric.value });
        reportMetric('TTFB', metric.value, metric.id);
      });
    };

    // Measure additional metrics
    const measureAdditionalMetrics = () => {
      // Memory usage
      const memoryUsage = getMemoryUsage();
      if (memoryUsage !== null) {
        updateMetrics({ memoryUsage });
      }

      // Connection speed
      const connectionSpeed = getConnectionSpeed();
      if (connectionSpeed) {
        updateMetrics({ connectionSpeed });
      }
    };

    // Monitor resource loading performance
    const monitorResources = () => {
      if ('PerformanceObserver' in window) {
        const resourceObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            // Log slow resources (>1s)
            if (entry.duration > 1000) {
              if (enableConsoleLogging) {
                console.warn('Slow resource detected:', {
                  name: entry.name,
                  duration: `${entry.duration.toFixed(2)}ms`,
                  size: entry.transferSize ? `${(entry.transferSize / 1024).toFixed(2)}KB` : 'Unknown',
                });
              }

              // Report slow resources
              if (enableReporting && (window as any).gtag) {
                (window as any).gtag('event', 'slow_resource', {
                  event_category: 'Performance',
                  event_label: entry.name,
                  value: Math.round(entry.duration),
                });
              }
            }
          });
        });

        try {
          resourceObserver.observe({ entryTypes: ['resource'] });
        } catch (e) {
          if (enableConsoleLogging) {
            console.warn('Resource observer not supported');
          }
        }
      }
    };

    // Monitor long tasks
    const monitorLongTasks = () => {
      if ('PerformanceObserver' in window) {
        const longTaskObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (enableConsoleLogging) {
              console.warn('Long task detected:', {
                duration: `${entry.duration.toFixed(2)}ms`,
                startTime: `${entry.startTime.toFixed(2)}ms`,
              });
            }

            // Report long tasks
            if (enableReporting && (window as any).gtag) {
              (window as any).gtag('event', 'long_task', {
                event_category: 'Performance',
                value: Math.round(entry.duration),
              });
            }
          });
        });

        try {
          longTaskObserver.observe({ entryTypes: ['longtask'] });
        } catch (e) {
          if (enableConsoleLogging) {
            console.warn('Long task observer not supported');
          }
        }
      }
    };

    // Initialize monitoring
    measureWebVitals();
    measureAdditionalMetrics();
    monitorResources();
    monitorLongTasks();

    // Update memory usage periodically
    const memoryInterval = setInterval(() => {
      const memoryUsage = getMemoryUsage();
      if (memoryUsage !== null) {
        updateMetrics({ memoryUsage });
      }
    }, 30000); // Every 30 seconds

    // Cleanup
    return () => {
      clearInterval(memoryInterval);
    };
  }, [updateMetrics, reportMetric, getMemoryUsage, getConnectionSpeed, enableReporting, enableConsoleLogging]);

  // Monitor page visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // Page became visible, measure performance again
        const memoryUsage = getMemoryUsage();
        if (memoryUsage !== null) {
          updateMetrics({ memoryUsage });
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [getMemoryUsage, updateMetrics]);

  // Monitor network changes
  useEffect(() => {
    const handleConnectionChange = () => {
      const connectionSpeed = getConnectionSpeed();
      if (connectionSpeed) {
        updateMetrics({ connectionSpeed });
      }
    };

    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      connection.addEventListener('change', handleConnectionChange);
      return () => connection.removeEventListener('change', handleConnectionChange);
    }
  }, [getConnectionSpeed, updateMetrics]);

  // This component doesn't render anything
  return null;
};

export default AdvancedPerformanceMonitor;