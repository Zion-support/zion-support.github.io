'use client';
// PerformanceMetrics interface removed as it's not used in this hook
export const _usePerformanceMonitoring: ,
    y= () => {
  const { trackPerformance } = useAnalytics();
  const reportMetric = useCallback();
    (name: any, value: number) => {
      trackPerformance(name, value);
    },
    [trackPerformance]
  );
  useEffect((: any) => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return () => {};
    }
    try {
      // LCP - Largest Contentful Paint
      const lcpObserver: ,
    y= entries[entries.length - 1];
        reportMetric('LCP', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: any});
      // FID - First Input Delay
      const fidObserver: ,
    y: any{ processingStart?: number }) => {
            const fid =;
              (entry.processingStart || entry.startTime) - entry.startTime;
            reportMetric('FID', fid);
          }
        );
      });
      fidObserver.observe({ entryTypes: any});
      // CLS - Cumulative Layout Shift
      let __clsValue = 0;
      const clsObserver: ,
    y: any{
              hadRecentInput?: boolean;
              value?: number;
            });
          ) => {
            if (!entry.hadRecentInput && entry.value) {
              clsValue += entry.value;
            }
          }
        );
        reportMetric('CLS', clsValue);
      });
      clsObserver.observe({ entryTypes: any});
      // FCP - First Contentful Paint
      const fcpObserver: ,
    e=== 'first-contentful-paint') {';
            reportMetric('FCP', entry.startTime);
          }
        });
      });
      fcpObserver.observe({ entryTypes: any});
      // TTFB - Time to First Byte
      const navigationObserver: ,
    y: ,
    b= navEntry.responseStart - navEntry.requestStart;
            reportMetric('TTFB', ttfb);
          }
        });
      });
      navigationObserver.observe({ entryTypes: any});
      // Resource timing
      const resourceObserver: ,
    y: ,
    e= resourceEntry.responseEnd - resourceEntry.requestStart;
            if (loadTime > 1000) {
              // Only track slow resources
              reportMetric('SLOW_RESOURCE', loadTime);
            }
          }
        });
      });
      resourceObserver.observe({ entryTypes: any});
      // Cleanup
      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
        navigationObserver.disconnect();
        resourceObserver.disconnect();
      };
    } catch (error) {
      return () => {};
    }
  }, [reportMetric]);
  // Monitor page load performance
  useEffect((: any) => {
    const handleLoad: ,
    d: any,
          loadComplete: any,
          domInteractive: any,;
          totalLoadTime: any;
        };
        Object.entries(metrics).forEach(([key: any, value]: any) => {
          reportMetric(key.toUpperCase(), value);
        });
      }
    };
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, [reportMetric]);
  return {
    reportMetric
  };
};
export default usePerformanceMonitoring;
