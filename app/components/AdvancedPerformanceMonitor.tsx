import React from 'react';;';
import SEOHead from './components/SEOHead';

interface PerformanceMetrics {}
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fmp: number | null;
  memory: {}
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  } | null;
  navigation: {}
    loadEventEnd: number;
    domContentLoadedEventEnd: number;
    domContentLoadedEventStart: number;
    loadEventStart: number;
  } | null;
}

interface PerformanceMonitorProps {}
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean;
  logToConsole?: boolean;
}

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({)}
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
  logToConsole = false
}) => {}
  const [metrics, setMetrics] = useState<PerformanceMetrics>({)}
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null,
    memory: null,
    navigation: null
  });

<<<<<<< HEAD
  useEffect(() => {
=======
  const measurePerformance = useCallback(() => {}
    if (typeof window === 'undefined' || !('performance' in window)) {}
      return;
    }

    const newMetrics: PerformanceMetrics = {}
      fcp: null,
      lcp: null,
      fid: null,
      cls: null,
      ttfb: null,
      fmp: null,
      memory: null,
      navigation: null
    };

    // First Contentful Paint (FCP)
    const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
    if (fcpEntry) {}
      newMetrics.fcp = fcpEntry.startTime;
    }

    // Largest Contentful Paint (LCP)
    const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
    if (lcpEntries.length > 0) {}
      newMetrics.lcp = lcpEntries[lcpEntries.length - 1].startTime;
    }

    // First Input Delay (FID)
    const fidEntries = performance.getEntriesByType('first-input');
    if (fidEntries.length > 0) {}
      const fidEntry = fidEntries[0] as any;
      newMetrics.fid = fidEntry.processingStart - fidEntry.startTime;
    }

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsEntries = performance.getEntriesByType('layout-shift');
    clsEntries.forEach((entry: any) => {}
      if (!entry.hadRecentInput) {}
        clsValue += entry.value;
      }
    });
    newMetrics.cls = clsValue;

    // Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {}
      newMetrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      newMetrics.navigation = {}
        loadEventEnd: navigationEntry.loadEventEnd,
        domContentLoadedEventEnd: navigationEntry.domContentLoadedEventEnd,
        domContentLoadedEventStart: navigationEntry.domContentLoadedEventStart,
        loadEventStart: navigationEntry.loadEventStart
      };
    }

    // First Meaningful Paint (FMP) - approximated
    const paintEntries = performance.getEntriesByType('paint');
    const fmpEntry = paintEntries.find(entry => entry.name === 'first-meaningful-paint');
    if (fmpEntry) {}
      newMetrics.fmp = fmpEntry.startTime;
    }

    // Memory usage
    if ('memory' in performance) {}
      const memoryInfo = (performance as any).memory;
      newMetrics.memory = {}
        usedJSHeapSize: memoryInfo.usedJSHeapSize,
        totalJSHeapSize: memoryInfo.totalJSHeapSize,
        jsHeapSizeLimit: memoryInfo.jsHeapSizeLimit
      };
    }

    setMetrics(newMetrics);

    if (onMetricsUpdate) {}
      onMetricsUpdate(newMetrics);
    }

    if (logToConsole) {}
      console.log('Performance Metrics:', newMetrics);
    }
  }, [onMetricsUpdate, logToConsole]);

  useEffect(() => {}
    // Initial measurement
    measurePerformance();

    if (enableRealTimeMonitoring) {}
      // Set up real-time monitoring
      const observer = new PerformanceObserver((list) => {}
        list.getEntries().forEach((entry) => {}
          if (entry.entryType === 'largest-contentful-paint' ||)
              entry.entryType === 'first-input' || 
              entry.entryType === 'layout-shift') {}
            measurePerformance();
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      // Periodic monitoring
      const interval = setInterval(measurePerformance, 5000);

      return () => {}
        observer.disconnect();
        clearInterval(interval);
      };
>>>>>>> main
    }
  }, [measurePerformance, enableRealTimeMonitoring]);

  // This component doesn't render anything visible
  return null;

<<<<<<< HEAD
    measureWebVitals()
    measureMemory()
    measureLoadTime()


        onFCP((metric: any) => {
          setMetrics(prev => ({ ...prev, fcp: metric.value }))
          reportMetric('FCP', metric.value)
        })

        onLCP((metric: any) => {
          setMetrics(prev => ({ ...prev, lcp: metric.value }))
          reportMetric('LCP', metric.value)
        })

        onTTFB((metric: any) => {
          setMetrics(prev => ({ ...prev, ttfb: metric.value }))
          reportMetric('TTFB', metric.value)
        })
      } catch (error) {
        }

      // Measure memory usage
      const measureMemory = () => {
        if ('memory' in performance) {
          const memory = (performance as any).memory
          setMetrics(prev => ({ ...prev, memoryUsage: memory.usedJSHeapSize }))
        }
      }

      // Measure load time
      const measureLoadTime = () => {
        if (performance.timing) {
          const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
          setMetrics(prev => ({ ...prev, loadTime }))
        }
      }

      // Report metrics to analytics
      const reportMetric = (name: string, value: number) => {

      // Send to Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          metric_name: name,
          metric_value: Math.round(value),
          metric_delta: Math.round(value)
        })
      }

      // Send to custom analytics
      if (typeof window !== 'undefined' && (window as any).analytics) {
        (window as any).analytics.track('Performance Metric', {
          name,
          value: Math.round(value),
          timestamp: Date.now()
        })
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        }

      measureWebVitals()
      measureMemory()
      measureLoadTime()
    }

    // Set up performance observer for additional metrics
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'measure') {
            }
        }
      })
      observer.observe({ entryTypes: ['measure'] })
    }
  }, [])

  // Calculate performance score
  const calculateScore = () => {
    let score = 100
    let factors = 0

    if (metrics.fcp !== null) {
      factors++
      if (metrics.fcp > 1800) score -= 20
      else if (metrics.fcp > 1000) score -= 10
    }

    if (metrics.lcp !== null) {
      factors++
      if (metrics.lcp > 2500) score -= 20
      else if (metrics.lcp > 1500) score -= 10
    }

    if (metrics.cls !== null) {
      factors++
      if (metrics.cls > 0.25) score -= 20
      else if (metrics.cls > 0.1) score -= 10
    }

    if (metrics.fid !== null) {
      factors++
      if (metrics.fid > 300) score -= 20
      else if (metrics.fid > 100) score -= 10
    }

    return factors > 0 ? Math.max(0, score) : null
  }

  const performanceScore = calculateScore()

  // Render performance dashboard in development
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono z-50">
        <div className="font-bold mb-2">Performance Metrics</div>
        <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}</div>
        <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}</div>
        <div>FID: {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}</div>
        <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
        <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}</div>
        <div>Memory: {metrics.memoryUsage ? `${metrics.memoryUsage.toFixed(1)}%` : 'N/A'}</div>
        <div>Load: {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'N/A'}</div>
        {performanceScore && (
          <div className="mt-2 pt-2 border-t border-gray-600">
            <div>Score: {performanceScore}/100</div>
          </div>
        )}
      </div>
    )
  }

  return null
}

export default AdvancedPerformanceMonitor
=======
;
const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Components - Zion Tech Group"";
        description="Professional components solutions for modern businesses";
      />";
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div className ="text-center">";
          <h1 className ="text-4xl font-bold mb-4">Components</h1>";
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;
  ),
>>>>>>> main

};
;
export default ComponentsPage;'";'";