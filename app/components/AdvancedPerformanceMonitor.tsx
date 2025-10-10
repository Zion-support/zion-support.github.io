  memory: number | null;);
interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean;);
const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps></PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true,;)
}) => {;
const [metrics, setMetrics] = useState<PerformanceMetrics></PerformanceMetrics>({
  memory: number | null}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean}
;
const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true}) => {
return (;
const [metrics, setMetrics] = useState<PerformanceMetrics>
);
}({
<<<<<<< HEAD
=======
  memory: number | null]
    }

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean]
    }

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps></PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true,]
    }); => {
  const [metrics, setMetrics] = useState<PerformanceMetrics></PerformanceMetrics>({
  enableRealTimeMonitoring = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
<<<<<<< HEAD
    memory: null,;)
});
const [isMonitoring, setIsMonitoring] = useState(false);
const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {
=======
    memory: null,]
    });;
    memory: null
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

  const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
    setMetrics(prev => ({ ...prev, ...newMetrics }));
    if (onMetricsUpdate) {
      onMetricsUpdate({ ...metrics, ...newMetrics });
    }
  }, [metrics, onMetricsUpdate]);
const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !window.performance) return;

    // Measure First Contentful Paint (FCP);
const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
    if (fcpEntry) {
      updateMetrics({ fcp: fcpEntry.startTime });
    }
    memory: null});
;
const measureWebVitals = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;
    if (typeof PerformanceObserver === 'undefined') return;
;
const observers: PerformanceObserver[] = [];

    // Measure First Contentful Paint (FCP);
const fcpEntries = performance.getEntriesByName('first-contentful-paint') || [];
const fcp = fcpEntries.length > 0 ? fcpEntries[0].startTime : null;

    // Measure Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
<<<<<<< HEAD
      try {;
const lcpObserver = new PerformanceObserver(list => {;
const entries = list.getEntries();
const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }););)
});;
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });;
        observers.push(lcpObserver);)
} catch (error) {
        // eslint-disable-next-line no-console;);
=======
      try {
        const lcpObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime });)]
    });;
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });;
        observers.push(lcpObserver)]
    } catch (error) {
        // eslint-disable-next-line no-console]
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
    }

    // Measure First Input Delay (FID)
    if ('PerformanceObserver' in window) {
      try {;
const fidObserver = new PerformanceObserver(list => {;
const entries = list.getEntries();
          entries.forEach(entry => {
            if ($1) { const fidEntry = entry as PerformanceEventTiming;
              setMetrics(prev => ({
                ...prev,
fid: fidEntry.processingStart - fidEntry.startTime,]
    });)]
    }
          });]
    });;
        fidObserver.observe({ entryTypes: ['first-input'] });;
        observers.push(fidObserver)]
    } catch (error) {
        // eslint-disable-next-line no-console]
    }
    }

    // Measure Cumulative Layout Shift (CLS)
    if ('PerformanceObserver' in window) {
      try {;
let clsValue = 0;
const clsObserver = new PerformanceObserver(list => {;
const entries = list.getEntries();
          entries.forEach(entry => {
            if ($1) { const clsEntry = entry as LayoutShift;
              if (!clsEntry.hadRecentInput) {
                clsValue += clsEntry.value;
<<<<<<< HEAD
                setMetrics(prev => ({ ...prev, cls: clsValue });););
=======
                setMetrics(prev => ({ ...prev, cls: clsValue });)]
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
            });
});]
    });;
        clsObserver.observe({ entryTypes: ['layout-shift'] });;
observers.push(clsObserver)]
    } catch (error) {
        // eslint-disable-next-line no-console]
    }
    }

    // Measure Time to First Byte (TTFB)
    try {;
const navigationEntries = performance.getEntriesByType?.('navigation') || [];
const navigationEntry = navigationEntries[0] as PerformanceNavigationTiming;
const ttfb = navigationEntry
        ? navigationEntry.responseStart - navigationEntry.requestStart
        : null;

      // Measure Memory Usage;
const memory =
        (performance as Performance & { memory?: { usedJSHeapSize: number } });
          .memory?.usedJSHeapSize || null;

      setMetrics(prev => ({
        ...prev,
        fcp,
        ttfb,
memory,]
    });)]
    } catch (error) {
      // eslint-disable-next-line no-console]
    }
    // Cleanup observers
    return () => {
      observers.forEach(observer => {
        try {
<<<<<<< HEAD
          observer.disconnect();)
} catch (error) {
          // eslint-disable-next-line no-console;);
      });;)
};)
}, []);
const measureResourceTiming = useCallback(() => {
=======
          observer.disconnect()]
    } catch (error) {
          // eslint-disable-next-line no-console]
    }
      });]
    }]
    }, []);

  const measureResourceTiming = useCallback(() => {
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
    if (typeof window === 'undefined' || !('performance' in window)) return;
;
const resources = performance.getEntriesByType('resource');
const slowResources = resources.filter(
      (resource: PerformanceResourceTiming) => resource.duration > 1000
    );

    if (slowResources.length > 0) {
       
      // eslint-disable-next-line no-console
        'Slow resources detected:',
        slowResources.map((r: PerformanceResourceTiming) => ({,
  name: r.name,
          duration: r.duration,
size: r.transferSize,]
    });)
      )]
    }
  }, []);
;
const measureCoreWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Use web-vitals library if available
    try {
      import('web-vitals')
        .then(webVitals => {;
const { onCLS, onFCP, onLCP, onTTFB } = webVitals;

          if (onCLS) {
            onCLS((metric: { value: number }); =>
              setMetrics(prev => ({ ...prev, cls: metric.value });)
<<<<<<< HEAD
            ););
          if (onFCP) {
            onFCP((metric: { value: number }); =>
              setMetrics(prev => ({ ...prev, fcp: metric.value });)
            ););
          if (onLCP) {
            onLCP((metric: { value: number }); =>
              setMetrics(prev => ({ ...prev, lcp: metric.value });)
            ););
          if (onTTFB) {
            onTTFB((metric: { value: number }); =>
              setMetrics(prev => ({ ...prev, ttfb: metric.value });)
            ););
        });
        .catch(() => {
          // web-vitals not available, continue without it;)
});;)
} catch {
      // web-vitals not available, continue without it;);
  }, []);
const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
    if ($1) { const lcp = lcpEntries[lcpEntries.length - 1];
=======
            )]
    }
          if (onFCP) {
            onFCP((metric: { value: number }); =>
              setMetrics(prev => ({ ...prev, fcp: metric.value });)
            )]
    }
          if (onLCP) {
            onLCP((metric: { value: number }); =>
              setMetrics(prev => ({ ...prev, lcp: metric.value });)
            )]
    }
          if (onTTFB) {
            onTTFB((metric: { value: number }); =>
              setMetrics(prev => ({ ...prev, ttfb: metric.value });)
            )]
    }
        });
        .catch(() => {
          // web-vitals not available, continue without it]
    });]
    } catch {
      // web-vitals not available, continue without it]
    }
  }, []);
    const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
    if (lcpEntries.length > 0) {
      const lcp = lcpEntries[lcpEntries.length - 1];
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
      updateMetrics({ lcp: lcp.startTime });
    }

    // Measure First Input Delay (FID);
const fidEntries = performance.getEntriesByType('first-input');
    if ($1) { const fid = fidEntries[0] as PerformanceEventTiming;
      updateMetrics({ fid: fid.processingStart - fid.startTime });
    }

    // Measure Cumulative Layout Shift (CLS);
let clsValue = 0;
const clsEntries = performance.getEntriesByType('layout-shift');
    clsEntries.forEach((entry: any) => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
      }
    });
    updateMetrics({ cls: clsValue });

    // Measure Time to First Byte (TTFB);
const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      updateMetrics({ ttfb: navigationEntry.responseStart - navigationEntry.requestStart });
    }

    // Measure memory usage
    if ($1) { const memory = (performance as any).memory;
      updateMetrics({ memory: memory.usedJSHeapSize / 1024 / 1024 }); // Convert to MB
    }
  }, [updateMetrics]);

  useEffect(() => {
    if (!enableRealTimeMonitoring) return;
const startMonitoring = () => {
      setIsMonitoring(true);
      
      // Initial measurement
      measurePerformance();

<<<<<<< HEAD
    // Monitor performance every 5 seconds;
const interval = setInterval(() => {
      measureResourceTiming();)
}, 5000);
=======
    // Monitor performance every 5 seconds
    const interval = setInterval(() => {
      measureResourceTiming()]
    }, 5000);
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1

    return () => {
      if (cleanup) cleanup();
      clearInterval(interval)]
    }]
    }, [
    enableRealTimeMonitoring,
    measureWebVitals,
    measureResourceTiming,
    measureCoreWebVitals]);

  useEffect(() => {
    if (onMetricsUpdate) {
<<<<<<< HEAD
      onMetricsUpdate(metrics););
  }, [metrics, onMetricsUpdate]);
      // Set up periodic monitoring;
const interval = setInterval(measurePerformance, 5000);
=======
      onMetricsUpdate(metrics)]
    }
  }, [metrics, onMetricsUpdate]);
      // Set up periodic monitoring
      const interval = setInterval(measurePerformance, 5000);
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1

      // Set up performance observer for real-time updates;
const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            updateMetrics({ lcp: entry.startTime });
          } else if ($1) { const fid = entry as PerformanceEventTiming;
            updateMetrics({ fid: fid.processingStart - fid.startTime });
          } else if ($1) { const cls = entry as any;
            if (!cls.hadRecentInput) {
              setMetrics(prev => ({ 
                ...prev, 
                cls: (prev.cls || 0) + cls.value 
              }));
            }
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      return () => {
        clearInterval(interval);
        observer.disconnect();
        setIsMonitoring(false);
      };
    }
const cleanup = startMonitoring();
    return cleanup;
  }, [enableRealTimeMonitoring, measurePerformance, updateMetrics]);
<<<<<<< HEAD
const getPerformanceScore = (metric: number | null, thresholds: { good: number; poor: number }): string => {
=======

  const getPerformanceScore = (metric: number | null, thresholds: { good: number; poor: number }): string => {
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
    if (metric === null) return 'N/A';
    if (metric <= thresholds.good) return 'Good';
    if (metric <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';
  };

    if (metrics.fcp && metrics.fcp > 1800) {
      recommendations.push(
        'First Contentful Paint is slow. Consider optimizing critical rendering path.'
<<<<<<< HEAD
      ););
    if (metrics.lcp && metrics.lcp > 2500) {
      recommendations.push(
        'Largest Contentful Paint is slow. Optimize images and reduce render-blocking resources.'
      ););
    if (metrics.fid && metrics.fid > 100) {
      recommendations.push(
        'First Input Delay is high. Reduce JavaScript execution time.'
      ););
    if (metrics.cls && metrics.cls > 0.1) {
      recommendations.push(
        'Cumulative Layout Shift is high. Ensure stable layout and avoid dynamic content insertion.'
      ););
    if (metrics.ttfb && metrics.ttfb > 600) {
      recommendations.push(
        'Time to First Byte is slow. Optimize server response time.'
      ););
    return recommendations;)
}, [metrics]);
const _recommendations = getPerformanceRecommendations();
=======
      )]
    }

    if (metrics.lcp && metrics.lcp > 2500) {
      recommendations.push(
        'Largest Contentful Paint is slow. Optimize images and reduce render-blocking resources.'
      )]
    }

    if (metrics.fid && metrics.fid > 100) {
      recommendations.push(
        'First Input Delay is high. Reduce JavaScript execution time.'
      )]
    }

    if (metrics.cls && metrics.cls > 0.1) {
      recommendations.push(
        'Cumulative Layout Shift is high. Ensure stable layout and avoid dynamic content insertion.'
      )]
    }

    if (metrics.ttfb && metrics.ttfb > 600) {
      recommendations.push(
        'Time to First Byte is slow. Optimize server response time.'
      )]
    }

    return recommendations]
    }, [metrics]);

  const _recommendations = getPerformanceRecommendations();
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1

  if (process.env['NODE_ENV'] === 'development') {
    return (
      <div>
        <h3 className='font-semibold text-sm mb-2'></h>Performance Monitor</h3>
        <div>
          <div></di>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0);ms` : 'N/A'}</div>
          <div></di>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0);ms` : 'N/A'}</div>
          <div></di>FID: {metrics.fid ? `${metrics.fid.toFixed(0);ms` : 'N/A'}</div>
          <div></di>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
          <div>
            TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0);ms` : 'N/A'}</div>
          <div>
            Memory:{' '}
            {metrics.memory
              ? `${(metrics.memory / 1024 / 1024).toFixed(1);MB`
              : 'N/A'}</div>
        </div>
        {_recommendations.length > 0 && (
          <div>
            <h4 className='font-semibold text-xs text-red-600'></h4>
              Recommendations:
            </h4>
            <ul className='text-xs text-red-600'></ul>
              {_recommendations.map((rec, index) => (
                <li key={index}></l>• {rec}</li>
              ));
            </ul>
<<<<<<< HEAD
          </div>
        );
      </div>
    ););
  return null;)
=======
  const fcpScore = getPerformanceScore(metrics.fcp, { good: 1800, poor: 3000 });
  const lcpScore = getPerformanceScore(metrics.lcp, { good: 2500, poor: 4000 });
  const fidScore = getPerformanceScore(metrics.fid, { good: 100, poor: 300 });
  const clsScore = getPerformanceScore(metrics.cls, { good: 0.1, poor: 0.25 });

  return (
    <div className="performance-monitor p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
      <h3 className="text-lg font-semibold text-white mb-4">Performance Metrics</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="metric-item">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-300">First Contentful Paint</span>
            <span className={`text-xs px-2 py-1 rounded ${
              fcpScore === 'Good' ? 'bg-green-500/20 text-green-400' :
              fcpScore === 'Needs Improvement' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-red-500/20 text-red-400'
            }`}>
              {fcpScore}
            </span>
          </div>
          <div className="text-lg font-mono text-white">
            {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}
          </div>
        </div>

        <div className="metric-item">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-300">Largest Contentful Paint</span>
            <span className={`text-xs px-2 py-1 rounded ${
              lcpScore === 'Good' ? 'bg-green-500/20 text-green-400' :
              lcpScore === 'Needs Improvement' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-red-500/20 text-red-400'
            }`}>
              {lcpScore}
            </span>
          </div>
          <div className="text-lg font-mono text-white">
            {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}
          </div>
        </div>

        <div className="metric-item">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-300">First Input Delay</span>
            <span className={`text-xs px-2 py-1 rounded ${
              fidScore === 'Good' ? 'bg-green-500/20 text-green-400' :
              fidScore === 'Needs Improvement' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-red-500/20 text-red-400'
            }`}>
              {fidScore}
            </span>
          </div>
          <div className="text-lg font-mono text-white">
            {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}
          </div>
        </div>

        <div className="metric-item">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-300">Cumulative Layout Shift</span>
            <span className={`text-xs px-2 py-1 rounded ${
              clsScore === 'Good' ? 'bg-green-500/20 text-green-400' :
              clsScore === 'Needs Improvement' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-red-500/20 text-red-400'
            }`}>
              {clsScore}
            </span>
          </div>
          <div className="text-lg font-mono text-white">
            {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
          </div>
        </div>

        {metrics.memory && (
          <div className="metric-item md:col-span-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-300">Memory Usage</span>
              <span className="text-xs text-gray-400">MB</span>
            </div>
            <div className="text-lg font-mono text-white">
              {metrics.memory.toFixed(2)} MB
            </div>
          </div>
        );
      </div>
    )]
    }

  return null]
    };

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
export default AdvancedPerformanceMonitor;
}

      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-300">Monitoring Status</span>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-green-400' : 'bg-gray-400'}`}></div>
            <span className="text-sm text-gray-300">
              {isMonitoring ? 'Active' : 'Inactive'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdvancedPerformanceMonitor;
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-e7dd
