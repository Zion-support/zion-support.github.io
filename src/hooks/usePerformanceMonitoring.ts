export default usePerformanceMonitoring;
// // PerformanceMetrics interface removed as it's not used in this hook;
  // const {trackPerformance} = useAnalytics();

      console.log('Performance metric: ', name, value);
      // trackPerformance(name, value);
    []
  );
import { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  fps: number;
}

export function usePerformanceMonitoring() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    fps: 0
  });

  useEffect(() => {
    const updateMetrics = () => {
      setMetrics({
        loadTime: performance.now(),
        memoryUsage: (performance as any).memory?.usedJSHeapSize || 0, // eslint-disable-line @typescript-eslint/no-explicit-any
        fps: 60 // Placeholder
      });
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 1000);
    return () => clearInterval(interval);
  }, []);

  return metrics;
}

'use client';
// PerformanceMetrics interface removed as it's not used in this hook;
export const _usePerformanceMonitoring = () => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
  const { trackPerformance } = useAnalytics();
  const reportMetric = useCallback()
    (nam,
  e: string, valu)
  e: number) => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
      trackPerformance(name, value);
    },
//     [trackPerformance]
  );
  useEffect(() => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {/* TODO: Fix JSX expression */}
  O: Add content;}
}
      return () => {};
    }
    try {
      // LCP - Largest Contentful Paint
      const lcpObserver = new PerformanceObserver(list => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        reportMetric('LCP', lastEntry.startTime);
      });
      lcpObserver.observe({entryTypes: ['largest-contentful-paint']});
      // FID - First Input Delay;
const fidObserver = new PerformanceObserver(list => {/* TODO: Fix JSX expression */}
  O: Add content;}
})
        const entries = list.getEntries();
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      // FID - First Input Delay
      const fidObserver = new PerformanceObserver(list => {
        const entries = list.getEntries();
        entries.forEach(
          (entry: PerformanceEntry & { processingStart?: number }) => {
            const fid =

              (entry.processingStart || entry.startTime) - entry.startTime;
            reportMetric('FID', fid)
          }
        );
      });
      fidObserver.observe({entryTypes: ['first-input']});
      // CLS - Cumulative Layout Shift;
      let clsValue = 0;

        const entries = list.getEntries();
//         entries.forEach()
//           ()
            entr,
  y: PerformanceEntry & {/* TODO: Fix JSX expression */}
  O: Add content;}
}
      fidObserver.observe({ entryTypes: ['first-input'] });
      // CLS - Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver(list => {
        const entries = list.getEntries();
        entries.forEach(
          (
            entry: PerformanceEntry & {
              hadRecentInput?: boolean;
              value?: number;
            }
          ) => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
            if (!entry.hadRecentInput && entry.value) {/* TODO: Fix JSX expression */}
  O: Add content;}
}
              clsValue += entry.value;
            }
          }
        );
        reportMetric('CLS', clsValue);
      });
      clsObserver.observe({entryTypes: ['layout-shift']});
      // FCP - First Contentful Paint;
const fcpObserver = new PerformanceObserver(list => {/* TODO: Fix JSX expression */}
  O: Add content;}
})
        const entries = list.getEntries();
        entries.forEach(entry => {/* TODO: Fix JSX expression */}
  O: Add content;}
})
          if (entry.name === 'first-contentful-paint') {/* TODO: Fix JSX expression */}
  O: Add content;}
}
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      // FCP - First Contentful Paint
      const fcpObserver = new PerformanceObserver(list => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.name === 'first-contentful-paint') {
            reportMetric('FCP', entry.startTime);
          }
        });
      });
      fcpObserver.observe({entryTypes: ['paint']});
      // TTFB - Time to First Byte;
const navigationObserver = new PerformanceObserver(list => {/* TODO: Fix JSX expression */}
  O: Add content;}
})
        const entries = list.getEntries();
        entries.forEach((entry) => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
          if (entry.entryType === 'navigation') {/* TODO: Fix JSX expression */}
  O: Add content;}
}
      fcpObserver.observe({ entryTypes: ['paint'] });
      // TTFB - Time to First Byte
      const navigationObserver = new PerformanceObserver(list => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            const ttfb = navEntry.responseStart - navEntry.requestStart;
            reportMetric('TTFB', ttfb);
          }
        });
      });
      navigationObserver.observe({entryTypes: ['navigation']});
      // Resource timing;
const resourceObserver = new PerformanceObserver(list => {/* TODO: Fix JSX expression */}
  O: Add content;}
})
        const entries = list.getEntries();
        entries.forEach((entry) => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
          if (entry.entryType === 'resource') {/* TODO: Fix JSX expression */}
  O: Add content;}
}
            const resourceEntry = entry as PerformanceResourceTiming;
            const loadTime = resourceEntry.responseEnd - resourceEntry.requestStart;
            if (loadTime > 1000) {/* TODO: Fix JSX expression */}
  O: Add content;}
}
              // Only track slow resources;
      navigationObserver.observe({ entryTypes: ['navigation'] });
      // Resource timing
      const resourceObserver = new PerformanceObserver(list => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            const loadTime = resourceEntry.responseEnd - resourceEntry.requestStart;
            if (loadTime > 1000) {
              // Only track slow resources
              reportMetric('SLOW_RESOURCE', loadTime);
            }
          }
        });
      });
      resourceObserver.observe({entryTypes: ['resource']});
      // Cleanup;
      return () => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
        navigationObserver.disconnect();
        resourceObserver.disconnect();
      };
      console.error('Performance monitoring setup failed: ', error);
 {};
  }, [reportMetric]);
  // Monitor page load performance;
  useEffect(() => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
    const handleLoad = () => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
      if (typeof window === 'undefined') return;

      )[0] as PerformanceNavigationTiming;

        };
        Object.entries(metrics).forEach(([key, value]) => {/* TODO: Fix JSX expression */}
  O: Add content;}
}
          reportMetric(key.toUpperCase(), value);
        });
      }
    };
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, [reportMetric]);
  return {/* TODO: Fix JSX expression */}
  O: Add content;}
}
//     reportMetric;
  };
};
export default usePerformanceMonitoring;



