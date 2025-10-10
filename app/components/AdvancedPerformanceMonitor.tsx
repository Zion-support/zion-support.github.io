'use client;

import React, { useEffect, useState, useCallback } from react;

interface PerformanceMetrics {
  fcp: number | null;

  lcp: number | null;

  fid: number | null;

  cls: number | null;

  ttfb: number | null;

  memory: number | null;);
<<<<<<< HEAD

interface PerformanceMonitorProps {
=======
interface PerformanceMonitorProps {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;

  enableRealTimeMonitoring?: boolean;);
<<<<<<< HEAD

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps></PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true,;)
}) => {;const [metrics, setMetrics] = useState<PerformanceMetrics></PerformanceMetrics>({
=======
const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps></PerformanceMonitorProps> = ({}
  onMetricsUpdate,
  enableRealTimeMonitoring = true,;)
}) => {;}
const [metrics, setMetrics] = useState<PerformanceMetrics></PerformanceMetrics>({}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
  memory: number | null}

interface PerformanceMonitorProps {}
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;

  enableRealTimeMonitoring?: boolean}

;
<<<<<<< HEAD

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
=======
const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
  onMetricsUpdate,
  enableRealTimeMonitoring = true}) => {
return (;

const [metrics, setMetrics] = useState<PerformanceMetrics>
<<<<<<< HEAD
);

=======
);}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
}({
    fcp: null,    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memory: null,;)}
});

const [isMonitoring, setIsMonitoring] = useState(false);
<<<<<<< HEAD

const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {;
    setMetrics(prev => ({ ...prev, ...newMetrics }));    if (onMetricsUpdate) {
=======
const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {}
    setMetrics(prev => ({ ...prev, ...newMetrics }));
    if (onMetricsUpdate) {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      onMetricsUpdate({ ...metrics, ...newMetrics });

    }

  }, [metrics, onMetricsUpdate]);
<<<<<<< HEAD

const measurePerformance = useCallback(() => {;;;

    if (typeof window === undefined || !window.performance) return;

    // Measure First Contentful Paint (FCP);

const fcpEntry = performance.getEntriesByName(first-contentful-paint)[0];;

    if (fcpEntry) {
=======
const measurePerformance = useCallback(() => {}
    if (typeof window === 'undefined' || !window.performance) return;

    // Measure First Contentful Paint (FCP);
const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
    if (fcpEntry) {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      updateMetrics({ fcp: fcpEntry.startTime });

    }

    memory: null});

;
<<<<<<< HEAD

const measureWebVitals = useCallback(() => {;;

    if (typeof window === 'undefined' || !(performance in window)) return;

    if (typeof PerformanceObserver === undefined) return;

=======
const measureWebVitals = useCallback(() => {}
    if (typeof window === 'undefined' || !('performance' in window)) return;
    if (typeof PerformanceObserver === 'undefined') return;
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
;

const observers: PerformanceObserver[] = [];

    // Measure First Contentful Paint (FCP);

const fcpEntries = performance.getEntriesByName(first-contentful-paint) || [];;

const fcp = fcpEntries.length > 0 ? fcpEntries[0].startTime : null;;

    // Measure Largest Contentful Paint (LCP)
<<<<<<< HEAD
    if ('PerformanceObserver in window) {
      try {;

const lcpObserver = new PerformanceObserver(list => {;;

const entries = list.getEntries();;

const lastEntry = entries[entries.length - 1];;

=======
    if ('PerformanceObserver' in window) {}
      try {;}
const lcpObserver = new PerformanceObserver(list => {;}
const entries = list.getEntries();
const lastEntry = entries[entries.length - 1];
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }););)
});

        lcpObserver.observe({ entryTypes: [largest-contentful-paint] });

        observers.push(lcpObserver);)
} catch (error) {
<<<<<<< HEAD
        // eslint-disable-next-line no-console;);

    }

    // Measure First Input Delay (FID)
    if ('PerformanceObserver in window) {
      try {;

const fidObserver = new PerformanceObserver(list => {;;

const entries = list.getEntries();;

          entries.forEach(entry => {
            if ($1) { const fidEntry = entry as PerformanceEventTiming;;

              setMetrics(prev => ({
=======
        // eslint-disable-next-line no-console;);}
    }

    // Measure First Input Delay (FID)
    if ('PerformanceObserver' in window) {}
      try {;}
const fidObserver = new PerformanceObserver(list => {;}
const entries = list.getEntries();
          entries.forEach(entry => {}
            if ($1) { const fidEntry = entry as PerformanceEventTiming;}
              setMetrics(prev => ({}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                ...prev,
fid: fidEntry.processingStart - fidEntry.startTime,]
    });)]
    }

          });]
    });

        fidObserver.observe({ entryTypes: [first-input] });

        observers.push(fidObserver)]
    } catch (error) {
        // eslint-disable-next-line no-console]}
    }

    }

    // Measure Cumulative Layout Shift (CLS)
<<<<<<< HEAD
    if ('PerformanceObserver in window) {
      try {;

let clsValue = 0;;

const clsObserver = new PerformanceObserver(list => {;;

const entries = list.getEntries();;

          entries.forEach(entry => {
            if ($1) { const clsEntry = entry as LayoutShift;;

              if (!clsEntry.hadRecentInput) {
=======
    if ('PerformanceObserver' in window) {}
      try {;}
let clsValue = 0;
const clsObserver = new PerformanceObserver(list => {;}
const entries = list.getEntries();
          entries.forEach(entry => {}
            if ($1) { const clsEntry = entry as LayoutShift;}
              if (!clsEntry.hadRecentInput) {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                clsValue += clsEntry.value;

                setMetrics(prev => ({ ...prev, cls: clsValue });););

            });});]
    });

        clsObserver.observe({ entryTypes: [layout-shift] });

observers.push(clsObserver)]
    } catch (error) {
        // eslint-disable-next-line no-console]}
    }

    }

    // Measure Time to First Byte (TTFB)
<<<<<<< HEAD
    try {;

const navigationEntries = performance.getEntriesByType?.(navigation) || [];;

const navigationEntry = navigationEntries[0] as PerformanceNavigationTiming;;

const ttfb = navigationEntry;;

=======
    try {;}
const navigationEntries = performance.getEntriesByType?.('navigation') || [];
const navigationEntry = navigationEntries[0] as PerformanceNavigationTiming;
const ttfb = navigationEntry
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
        ? navigationEntry.responseStart - navigationEntry.requestStart
        : null;

      // Measure Memory Usage;

const memory =;;

        (performance as Performance & { memory?: { usedJSHeapSize: number } });

          .memory?.usedJSHeapSize || null;

      setMetrics(prev => ({}
        ...prev,
        fcp,
        ttfb,
memory,]
    });)]
    } catch (error) {
      // eslint-disable-next-line no-console]}
    }

    // Cleanup observers
    return () => {}
      observers.forEach(observer => {}
        try {}
          observer.disconnect();)
} catch (error) {
<<<<<<< HEAD
          // eslint-disable-next-line no-console;);

      });)
};)
}, []);

const measureResourceTiming = useCallback(() => {;
    if (typeof window === 'undefined' || !('performance in window)) return;

const resources = performance.getEntriesByType(resource);;

const slowResources = resources.filter(;;

=======
          // eslint-disable-next-line no-console;);}
      });;)
};)
}, []);
const measureResourceTiming = useCallback(() => {}
    if (typeof window === 'undefined' || !('performance' in window)) return;
;
const resources = performance.getEntriesByType('resource');
const slowResources = resources.filter(
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      (resource: PerformanceResourceTiming) => resource.duration > 1000
    );

    if (slowResources.length > 0) {}
       
      // eslint-disable-next-line no-console
<<<<<<< HEAD
        'Slow resources detected:,
        slowResources.map((r: PerformanceResourceTiming) => ({,
=======
        'Slow resources detected:',
        slowResources.map((r: PerformanceResourceTiming) => ({,}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
  name: r.name,
          duration: r.duration,
size: r.transferSize,]
    });)
      )]
    }

  }, []);

;
<<<<<<< HEAD

const measureCoreWebVitals = useCallback(() => {;;

    if (typeof window === undefined) return;

    // Use web-vitals library if available
    try {
      import('web-vitals)
        .then(webVitals => {;

=======
const measureCoreWebVitals = useCallback(() => {}
    if (typeof window === 'undefined') return;

    // Use web-vitals library if available
    try {}
      import('web-vitals')
        .then(webVitals => {;}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
const { onCLS, onFCP, onLCP, onTTFB } = webVitals;

          if (onCLS) {}
            onCLS((metric: { value: number }); =>
              setMetrics(prev => ({ ...prev, cls: metric.value });)
            ););
<<<<<<< HEAD

          if (onFCP) {
            onFCP((metric: { value: number }); =>
              setMetrics(prev => ({ ...prev, fcp: metric.value });)
            ););

          if (onLCP) {
            onLCP((metric: { value: number }); =>
              setMetrics(prev => ({ ...prev, lcp: metric.value });)
            ););

          if (onTTFB) {
=======
          if (onFCP) {}
            onFCP((metric: { value: number }); =>
              setMetrics(prev => ({ ...prev, fcp: metric.value });)
            ););
          if (onLCP) {}
            onLCP((metric: { value: number }); =>
              setMetrics(prev => ({ ...prev, lcp: metric.value });)
            ););
          if (onTTFB) {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
            onTTFB((metric: { value: number }); =>
              setMetrics(prev => ({ ...prev, ttfb: metric.value });)
            ););

        });
<<<<<<< HEAD

        .catch(() => {
=======
        .catch(() => {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
          // web-vitals not available, continue without it;)
});)
} catch {
<<<<<<< HEAD
      // web-vitals not available, continue without it;);

  }, []);

const lcpEntries = performance.getEntriesByType('largest-contentful-paint);;

    if ($1) { const lcp = lcpEntries[lcpEntries.length - 1];;

      updateMetrics({ lcp: lcp.startTime });    }

    // Measure First Input Delay (FID);

const fidEntries = performance.getEntriesByType(first-input);;

    if ($1) { const fid = fidEntries[0] as PerformanceEventTiming;;

=======
      // web-vitals not available, continue without it;);}
  }, []);
const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
    if ($1) { const lcp = lcpEntries[lcpEntries.length - 1];}
      updateMetrics({ lcp: lcp.startTime });
    }

    // Measure First Input Delay (FID);
const fidEntries = performance.getEntriesByType('first-input');
    if ($1) { const fid = fidEntries[0] as PerformanceEventTiming;}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      updateMetrics({ fid: fid.processingStart - fid.startTime });

    }

    // Measure Cumulative Layout Shift (CLS);
<<<<<<< HEAD

let clsValue = 0;;

const clsEntries = performance.getEntriesByType(layout-shift);;

    clsEntries.forEach((entry: any) => {
      if (!entry.hadRecentInput) {
=======
let clsValue = 0;
const clsEntries = performance.getEntriesByType('layout-shift');
    clsEntries.forEach((entry: any) => {}
      if (!entry.hadRecentInput) {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
        clsValue += entry.value;

      }

    });

    updateMetrics({ cls: clsValue });

    // Measure Time to First Byte (TTFB);
<<<<<<< HEAD

const navigationEntry = performance.getEntriesByType(navigation)[0] as PerformanceNavigationTiming;;

    if (navigationEntry) {
=======
const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      updateMetrics({ ttfb: navigationEntry.responseStart - navigationEntry.requestStart });

    }

    // Measure memory usage
<<<<<<< HEAD
    if ($1) { const memory = (performance as any).memory;;

=======
    if ($1) { const memory = (performance as any).memory;}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      updateMetrics({ memory: memory.usedJSHeapSize / 1024 / 1024 }); // Convert to MB
    }

  }, [updateMetrics]);

  useEffect(() => {}
    if (!enableRealTimeMonitoring) return;
<<<<<<< HEAD

const startMonitoring = () => {;;

=======
const startMonitoring = () => {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      setIsMonitoring(true);

      // Initial measurement
      measurePerformance();

    // Monitor performance every 5 seconds;
<<<<<<< HEAD

const interval = setInterval(() => {;;

=======
const interval = setInterval(() => {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      measureResourceTiming();)
}, 5000);

    return () => {}
      if (cleanup) cleanup();

      clearInterval(interval)]
    }]
    }, [
    enableRealTimeMonitoring,
    measureWebVitals,
    measureResourceTiming,
    measureCoreWebVitals]);

  useEffect(() => {}
    if (onMetricsUpdate) {}
      onMetricsUpdate(metrics););

  }, [metrics, onMetricsUpdate]);

      // Set up periodic monitoring;

const interval = setInterval(measurePerformance, 5000);;

      // Set up performance observer for real-time updates;
<<<<<<< HEAD

const observer = new PerformanceObserver((list) => {;;

        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint) {
            updateMetrics({ lcp: entry.startTime });

          } else if ($1) { const fid = entry as PerformanceEventTiming;;

            updateMetrics({ fid: fid.processingStart - fid.startTime });

          } else if ($1) { const cls = entry as any;;

            if (!cls.hadRecentInput) {
              setMetrics(prev => ({ 
=======
const observer = new PerformanceObserver((list) => {}
        list.getEntries().forEach((entry) => {}
          if (entry.entryType === 'largest-contentful-paint') {}
            updateMetrics({ lcp: entry.startTime });
          } else if ($1) { const fid = entry as PerformanceEventTiming;}
            updateMetrics({ fid: fid.processingStart - fid.startTime });
          } else if ($1) { const cls = entry as any;}
            if (!cls.hadRecentInput) {}
              setMetrics(prev => ({ }
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                ...prev, 
                cls: (prev.cls || 0) + cls.value 
              }));

            }

          }

        });

      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', layout-shift] });

      return () => {}
        clearInterval(interval);

        observer.disconnect();

        setIsMonitoring(false);

      };

    }

const cleanup = startMonitoring();;

    return cleanup;

  }, [enableRealTimeMonitoring, measurePerformance, updateMetrics]);
<<<<<<< HEAD

const getPerformanceScore = (metric: number | null, thresholds: { good: number; poor: number }): string => {;
    if (metric === null) return 'N/A;

    if (metric <= thresholds.good) return 'Good;

    if (metric <= thresholds.poor) return 'Needs Improvement;

    return 'Poor;  };
=======
const getPerformanceScore = (metric: number | null, thresholds: { good: number; poor: number }): string => {
    if (metric === null) return 'N/A';
    if (metric <= thresholds.good) return 'Good';
    if (metric <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';}
  };
>>>>>>> cursor/fix-errors-and-merge-to-main-d054

    if (metrics.fcp && metrics.fcp > 1800) {}
      recommendations.push(
<<<<<<< HEAD

        'First Contentful Paint is slow. Consider optimizing critical rendering path.      ););

    if (metrics.lcp && metrics.lcp > 2500) {
=======
        'First Contentful Paint is slow. Consider optimizing critical rendering path.'
      ););
    if (metrics.lcp && metrics.lcp > 2500) {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      recommendations.push(

        Largest Contentful Paint is slow. Optimize images and reduce render-blocking resources.
      ););
<<<<<<< HEAD

    if (metrics.fid && metrics.fid > 100) {
=======
    if (metrics.fid && metrics.fid > 100) {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      recommendations.push(

        First Input Delay is high. Reduce JavaScript execution time.
      ););
<<<<<<< HEAD

    if (metrics.cls && metrics.cls > 0.1) {
=======
    if (metrics.cls && metrics.cls > 0.1) {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      recommendations.push(

        Cumulative Layout Shift is high. Ensure stable layout and avoid dynamic content insertion.
      ););
<<<<<<< HEAD

    if (metrics.ttfb && metrics.ttfb > 600) {
=======
    if (metrics.ttfb && metrics.ttfb > 600) {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      recommendations.push(

        Time to First Byte is slow. Optimize server response time.
      ););

    return recommendations;)
}, [metrics]);

<<<<<<< HEAD
const _recommendations = getPerformanceRecommendations();;

  if (process.env['NODE_ENV'] === 'development) {
  return (

=======
  if (process.env['NODE_ENV'] === 'development') {}
    return (
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      <div>
        <h3 className='font-semibold text-sm mb-2></h>Performance Monitor</h3>
        <div>
          <div></di>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0);ms` : 'N/A}</div>
          <div></di>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0);ms` : 'N/A}</div>
          <div></di>FID: {metrics.fid ? `${metrics.fid.toFixed(0);ms` : 'N/A}</div>
          <div></di>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A}</div>
          <div>
            TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0);ms` : 'N/A}</div>
          <div>
<<<<<<< HEAD
            Memory:{' }

            {metrics.memory
              ? `${(metrics.memory / 1024 / 1024).toFixed(1);MB
              : 'N/A}</div>
        </div>
        {_recommendations.length > 0 && (

=======
            Memory:{' '}
            {metrics.memory}
              ? `${(metrics.memory / 1024 / 1024).toFixed(1);MB`}
              : 'N/A'}</div>
        </div>
        {_recommendations.length > 0 && (}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
          <div>
            <h4 className='font-semibold text-xs text-red-600></h4>
              Recommendations:
            </h4>
<<<<<<< HEAD
            <ul className='text-xs text-red-600></ul>
              {_recommendations.map((rec, index) => (

=======
            <ul className='text-xs text-red-600'></ul>
              {_recommendations.map((rec, index) => (}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                <li key={index}></l>• {rec}</li>
              ));

            </ul>
          </div>
        );

      </div>
    ););

  return null;)
export default AdvancedPerformanceMonitor;}

      <div className="mt-4 pt-4 border-t border-white/10>
        <div className="flex items-center justify-between>
          <span className="text-sm text-gray-300>Monitoring Status</span>
          <div className="flex items-center gap-2>
            <div className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-green-400' : 'bg-gray-400'}}></div>
            <span className="text-sm text-gray-300>
              {isMonitoring ? 'Active' : 'Inactive}

            </span>
          </div>
        </div>
      </div>
    </div>
  );

}

export default AdvancedPerformanceMonitor;
