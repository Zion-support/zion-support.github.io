'use client';
// PerformanceMetrics interface removed as it's not used in this hook;
export       },
    [trackPerformance]
  );
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return () => {}
    }
    try {
      // LCP - Largest Contentful Paint;
                      reportMetric('LCP', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      // FID - First Input Delay;
              entries.forEach(
          (entry: PerformanceEntry & { processingStart?: number }) => {
            const fid =
              (entry.processingStart || entry.startTime) - entry.startTime;
            reportMetric('FID', fid);
          }
        );
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      // CLS - Cumulative Layout Shift;
                    entries.forEach(
          (
            entry: PerformanceEntry & {
              hadRecentInput?: boolean;
              value?: number;
            }
          ) => {
            if (!entry.hadRecentInput && entry.value) {
              clsValue += entry.value;
            }
          }
        );
        reportMetric('CLS', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      // FCP - First Contentful Paint;
              entries.forEach(entry => {
          if (entry.name === 'first-contentful-paint') {
            reportMetric('FCP', entry.startTime);
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      // TTFB - Time to First Byte;
              entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
                                    reportMetric('TTFB', ttfb);
          }
        });
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });
      // Resource timing;
              entries.forEach((entry) => {
          if (entry.entryType === 'resource') {
                                    if (loadTime > 1000) {
              // Only track slow resources;
              reportMetric('SLOW_RESOURCE', loadTime);
            }
          }
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
      // Cleanup;
      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
        navigationObserver.disconnect();
        resourceObserver.disconnect();
      }
    } catch (error) {
      return () => {}
    }
  }, [reportMetric]);
  // Monitor page load performance;
  useEffect(() => {
                if (navigation) {
                Object.entries(metrics).forEach(([key, value]) => {
          reportMetric(key.toUpperCase(), value);
        });
      }
    }
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, [reportMetric]);
  return {
    reportMetric;
  }
}
export default usePerformanceMonitoring;
