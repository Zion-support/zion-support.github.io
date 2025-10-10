'use client';
import React, { useEffect, useCallback, useMemo } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceEnhancerProps {}
  enableWebVitals?: boolean;
  enableResourceTiming?: boolean;
  enableMemoryMonitoring?: boolean;
  enableNetworkMonitoring?: boolean;
  enableUserTiming?: boolean;
  enableLongTaskMonitoring?: boolean;
  enableLayoutShiftMonitoring?: boolean;
  enableFirstInputDelay?: boolean;
  enableCumulativeLayoutShift?: boolean;
  enableLargestContentfulPaint?: boolean;
  enableFirstContentfulPaint?: boolean;
  enableTimeToFirstByte?: boolean;
  enableAnalytics?: boolean;
  enableConsoleLogging?: boolean;
  enableErrorReporting?: boolean;
  enablePerformanceBudget?: boolean;
  performanceBudget?: {}
    lcp?: number;
    fid?: number;
    cls?: number;
    fcp?: number;
    ttfb?: number;
  };
}

const PerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({}
  enableWebVitals = true,
  enableResourceTiming = true,
  enableMemoryMonitoring = true,
  enableNetworkMonitoring = true,
  enableUserTiming = true,
  enableLongTaskMonitoring = true,
  enableLayoutShiftMonitoring = true,
  enableFirstInputDelay = true,
  enableCumulativeLayoutShift = true,
  enableLargestContentfulPaint = true,
  enableFirstContentfulPaint = true,
  enableTimeToFirstByte = true,
  enableAnalytics = true,
  enableConsoleLogging = false,
  enableErrorReporting = true,
  enablePerformanceBudget = true,
  performanceBudget = {}
    lcp: 2500,
    fid: 100,
    cls: 0.1,
    fcp: 1800,
    ttfb: 600
  }
}) => {
}
  // Performance metrics storage
  const performanceMetrics = useMemo(() => ({}
    webVitals: {} as Record<string, any>,
    resourceTiming: [] as PerformanceEntry[],
    userTiming: [] as PerformanceEntry[],
    memoryUsage: {} as any,
    networkInfo: {} as any,
    longTasks: [] as PerformanceEntry[],
    layoutShifts: [] as PerformanceEntry[],
    errors: [] as any[]
  }), []);

  // Enhanced error reporting
  const reportError = useCallback((error: any, context?: string) => {}
    if (!enableErrorReporting) return;

    const errorData = {}
      message: error.message || 'Unknown error',
      stack: error.stack,
      context: context || 'PerformanceEnhancer',
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      performanceMetrics: performanceMetrics
    };

    performanceMetrics.errors.push(errorData);

    // Send to analytics
    if (enableAnalytics && typeof window !== 'undefined' && 'gtag' in window) {}
      (window as any).gtag('event', 'performance_error', {)}
        event_category: 'Performance',
        event_label: context || 'PerformanceEnhancer',
        value: 1,
        custom_parameter_1: error.message,
        custom_parameter_2: error.stack

    }

    // Send to custom endpoint
    if (typeof window !== 'undefined' && navigator.sendBeacon) {}
      navigator.sendBeacon('/api/analytics/performance-errors', JSON.stringify(errorData));
    }
  }, [enableErrorReporting, enableAnalytics, performanceMetrics]);

  // Web Vitals monitoring
  useEffect(() => {}
    if (!enableWebVitals || typeof window === 'undefined') return;

    const reportMetric = (metric: any) => {}
      try {}
        performanceMetrics.webVitals[metric.name] = metric;

        // Check performance budget
        if (enablePerformanceBudget && performanceBudget[metric.name as keyof typeof performanceBudget]) {}
          const budget = performanceBudget[metric.name as keyof typeof performanceBudget];
          if (budget && metric.value > budget) {}
            reportError(new Error(`Performance budget exceeded for ${metric.name}: ${metric.value} > ${budget}`), 'PerformanceBudget');
          }
        }

        // Send to analytics
        if (enableAnalytics && typeof window !== 'undefined' && 'gtag' in window) {}
          (window as any).gtag('event', 'web_vitals', {)}
            event_category: 'Performance',
            event_label: metric.name,
            value: Math.round(metric.value),
            non_interaction: true,
            custom_parameter_1: metric.delta,
            custom_parameter_2: metric.id

        }

        // Send to custom endpoint
        if (typeof window !== 'undefined' && navigator.sendBeacon) {}
          const data = JSON.stringify({)}
            name: metric.name,
            value: metric.value,
            delta: metric.delta,
            id: metric.id,
            navigationType: metric.navigationType,
            timestamp: Date.now(),
            url: window.location.href,
            userAgent: navigator.userAgent,
            performanceMetrics: performanceMetrics

          navigator.sendBeacon('/api/analytics/performance', data);
        }

        if (enableConsoleLogging) {}
          }
      } catch (error) {}
        reportError(error, 'WebVitalsReporting');
      }
    };

    // Measure Core Web Vitals
    if (enableLargestContentfulPaint) {}
      getLCP(reportMetric);
    }
    if (enableFirstInputDelay) {}
      getFID(reportMetric);
    }
    if (enableCumulativeLayoutShift) {}
      getCLS(reportMetric);
    }
    if (enableFirstContentfulPaint) {}
      getFCP(reportMetric);
    }
    if (enableTimeToFirstByte) {}
      getTTFB(reportMetric);
    }
  }, [
    enableWebVitals,
    enableLargestContentfulPaint,
    enableFirstInputDelay,
    enableCumulativeLayoutShift,
    enableFirstContentfulPaint,
    enableTimeToFirstByte,
    enablePerformanceBudget,
    performanceBudget,
    enableAnalytics,
    enableConsoleLogging,
    performanceMetrics,
    reportError
  ]);

  // Resource timing monitoring
  useEffect(() => {}
    if (!enableResourceTiming || typeof window === 'undefined') return;

    const measureResourceTiming = () => {}
      try {}
        const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
        performanceMetrics.resourceTiming = resources;

        // Analyze resource performance
        const slowResources = resources.filter(resource =>)
          resource.duration > 1000 || resource.transferSize > 1000000
        );

        if (slowResources.length > 0) {}
          reportError(new Error(`Slow resources detected: ${slowResources.length} resources`), 'ResourceTiming');
        }

        if (enableConsoleLogging) {}
          }
      } catch (error) {}
        reportError(error, 'ResourceTiming');
      }
    };

    if (document.readyState === 'complete') {}
      measureResourceTiming();
    } else {}
      window.addEventListener('load', measureResourceTiming);
    }

    return () => {}
      window.removeEventListener('load', measureResourceTiming);
    };
  }, [enableResourceTiming, enableConsoleLogging, performanceMetrics, reportError]);

  // Memory monitoring
  useEffect(() => {}
    if (!enableMemoryMonitoring || typeof window === 'undefined') return;

    const measureMemory = () => {}
      try {}
        if ('memory' in performance) {}
          const memory = (performance as any).memory;
          performanceMetrics.memoryUsage = {}
            usedJSHeapSize: memory.usedJSHeapSize,
            totalJSHeapSize: memory.totalJSHeapSize,
            jsHeapSizeLimit: memory.jsHeapSizeLimit,
            timestamp: Date.now()
          };

          // Check for memory leaks
          if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {}
            reportError(new Error('High memory usage detected'), 'MemoryMonitoring');
          }

          if (enableConsoleLogging) {}
            }
        }
      } catch (error) {}
        reportError(error, 'MemoryMonitoring');
      }
    };

    // Measure memory every 30 seconds
    const memoryInterval = setInterval(measureMemory, 30000);
    measureMemory(); // Initial measurement

    return () => clearInterval(memoryInterval);
  }, [enableMemoryMonitoring, enableConsoleLogging, performanceMetrics, reportError]);

  // Network monitoring
  useEffect(() => {}
    if (!enableNetworkMonitoring || typeof window === 'undefined') return;

    const measureNetwork = () => {}
      try {}
        if ('connection' in navigator) {}
          const connection = (navigator as any).connection;
          performanceMetrics.networkInfo = {}
            effectiveType: connection.effectiveType,
            downlink: connection.downlink,
            rtt: connection.rtt,
            saveData: connection.saveData,
            timestamp: Date.now()
          };

          if (enableConsoleLogging) {}
            }
        }
      } catch (error) {}
        reportError(error, 'NetworkMonitoring');
      }
    };

    measureNetwork();
  }, [enableNetworkMonitoring, enableConsoleLogging, performanceMetrics, reportError]);

  // Long task monitoring
  useEffect(() => {}
    if (!enableLongTaskMonitoring || typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {}
      try {}
        const entries = list.getEntries();
        performanceMetrics.longTasks.push(...entries);

        // Report long tasks
        entries.forEach(entry => {)}
          if (entry.duration > 50) {}
            reportError(new Error(`Long task detected: ${entry.duration}ms`), 'LongTaskMonitoring');
          }

        if (enableConsoleLogging) {}
          }
      } catch (error) {}
        reportError(error, 'LongTaskMonitoring');
      }

    observer.observe({ entryTypes: ['longtask'] });

    return () => observer.disconnect();
  }, [enableLongTaskMonitoring, enableConsoleLogging, performanceMetrics, reportError]);

  // Layout shift monitoring
  useEffect(() => {}
    if (!enableLayoutShiftMonitoring || typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {}
      try {}
        const entries = list.getEntries();
        performanceMetrics.layoutShifts.push(...entries);

        // Report significant layout shifts
        entries.forEach(entry => {)}
          if (entry.value > 0.1) {}
            reportError(new Error(`Significant layout shift detected: ${entry.value}`), 'LayoutShiftMonitoring');
          }

        if (enableConsoleLogging) {}
          }
      } catch (error) {}
        reportError(error, 'LayoutShiftMonitoring');
      }

    observer.observe({ entryTypes: ['layout-shift'] });

    return () => observer.disconnect();
  }, [enableLayoutShiftMonitoring, enableConsoleLogging, performanceMetrics, reportError]);

  // User timing monitoring
  useEffect(() => {}
    if (!enableUserTiming || typeof window === 'undefined') return;

    const measureUserTiming = () => {}
      try {}
        const userTiming = performance.getEntriesByType('measure') as PerformanceMeasure[];
        performanceMetrics.userTiming = userTiming;

        if (enableConsoleLogging) {}
          }
      } catch (error) {}
        reportError(error, 'UserTiming');
      }
    };

    if (document.readyState === 'complete') {}
      measureUserTiming();
    } else {}
      window.addEventListener('load', measureUserTiming);
    }

    return () => {}
      window.removeEventListener('load', measureUserTiming);
    };
  }, [enableUserTiming, enableConsoleLogging, performanceMetrics, reportError]);

  // Performance summary reporting
  useEffect(() => {}
    const reportPerformanceSummary = () => {}
      try {}
        const summary = {}
          webVitals: performanceMetrics.webVitals,
          resourceCount: performanceMetrics.resourceTiming.length,
          longTaskCount: performanceMetrics.longTasks.length,
          layoutShiftCount: performanceMetrics.layoutShifts.length,
          memoryUsage: performanceMetrics.memoryUsage,
          networkInfo: performanceMetrics.networkInfo,
          errorCount: performanceMetrics.errors.length,
          timestamp: Date.now(),
          url: window.location.href
        };

        if (enableAnalytics && typeof window !== 'undefined' && 'gtag' in window) {}
          (window as any).gtag('event', 'performance_summary', {)}
            event_category: 'Performance',
            event_label: 'Summary',
            value: 1,
            custom_parameter_1: JSON.stringify(summary)

        }

        if (enableConsoleLogging) {}
          }
      } catch (error) {}
        reportError(error, 'PerformanceSummary');
      }
    };

    // Report summary after 10 seconds
    const timeout = setTimeout(reportPerformanceSummary, 10000);

    return () => clearTimeout(timeout);
  }, [enableAnalytics, enableConsoleLogging, performanceMetrics, reportError]);

  return null;
};

export default PerformanceEnhancer;