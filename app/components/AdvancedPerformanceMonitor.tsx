'use client';
<<<<<<< HEAD
import React, { useEffect, useState, useCallback } from 'react';
interface PerformanceMetrics {
    fcp: number | null;,
      lcp: number | null;,
      fid: number | null;,
      cls: number | null;,
      ttfb: number | null,
  memory: number | null;
  }
interface PerformanceMonitorProps {
    onMetricsUpdate?: (metrics: PerformanceMetrics) => void,
  enableRealTimeMonitoring?: boolean;
  }
<<<<<<< HEAD
const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ()
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>()
=======
const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,)
  enableRealTimeMonitoring = true,)
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>(
=======
import React, {useEffect, useState, useCallback}from 'react';
interface PerformanceMetrics {fcp: number | null;,}
  lcp: number | null;,
  fid: number | null;,
  cls: number | null;,
  ttfb: number | null,
  memory: number | null;,}interface PerformanceMonitorProps {onMetricsUpdate?: (metrics: PerformanceMetrics) => void,}
  enableRealTimeMonitoring?: boolean;}const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({,
  onMetricsUpdate,
  enableRealTimeMonitoring = true,}) => {const [metrics, setMetrics] = useState<PerformanceMetrics>({
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
<<<<<<< HEAD
    ttfb: null,)
    memory: null,)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======
    ttfb: null,
<<<<<<< HEAD
    memory: null,})
  const measureWebVitals = useCallback(() => {if (typeof window === 'undefined' || !('performance' in window)) return;
=======
    memory: null,
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
  })
  const measureWebVitals = useCallback(() => {;
    if (typeof window === 'undefined' || !('performance' in window)) return;
>>>>>>> origin/main
    if (typeof PerformanceObserver === 'undefined') return;
    const observers: PerformanceObserver[] = [],
    // Measure First Contentful Paint (FCP)
<<<<<<< HEAD
<<<<<<< HEAD
    const fcpEntries = const fcpEntries = const fcpEntries = performance.getEntriesByName('first-contentful-paint') || []
    const fcp = fcpEntries.length > 0 ? fcpEntries[0].startTime : null
    // Measure Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver()
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1],;
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
=======
    const fcpEntries = performance.getEntriesByName('first-contentful-paint') || []
    const fcp = fcpEntries.length > 0 ? fcpEntries[0].startTime : null;
    // Measure Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver(list => )
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1],
          setMetrics(prev => ( ...prev, lcp: lastEntry.startTime }));
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======
    const fcpEntries = performance.getEntriesByName('first-contentful-paint') || []
    const fcp = fcpEntries.length > 0 ? fcpEntries[0].startTime : null;
    // Measure Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      try {const lcpObserver = new PerformanceObserver(list => {)}
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1],
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime ,)}));
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
        })
        lcpObserver.observe({entryTypes: ['largest-contentful-paint'] ,)})
        observers.push(lcpObserver);
<<<<<<< HEAD
      } catch (error) {
        // eslint-disable-next-line no-console;
      }
    }
=======
      } catch (error) {// eslint-disable-next-line no-console;}}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
    // Measure First Input Delay (FID)
<<<<<<< HEAD
    if ('PerformanceObserver' in window) {try {const fidObserver = new PerformanceObserver(list => {)}
=======
    if ('PerformanceObserver' in window) {
      try {
<<<<<<< HEAD
<<<<<<< HEAD
        const fidObserver = const fidObserver = new PerformanceObserver();
          const entries = list.getEntries();
          entries.forEach()
            ) {
              const fidEntry = entry as PerformanceEventTiming;
              setMetrics()
=======
        const fidObserver = new PerformanceObserver(list => {;)
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (
              entry.entryType === 'first-input' &&
              'processingStart' in entry &&)
              'startTime' in entry)
              const fidEntry = entry as PerformanceEventTiming;
              setMetrics(prev => (
                ...prev,)
                fid: fidEntry.processingStart - fidEntry.startTime,)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
              }));
=======
        const fidObserver = new PerformanceObserver(list => {;
>>>>>>> origin/main
          const entries = list.getEntries();
          entries.forEach(entry => {)
            if(entry.entryType === 'first-input' &&)
              'processingStart' in entry &&
              'startTime' in entry;
            ) {
              const fidEntry = entry as PerformanceEventTiming;
              setMetrics(prev => ({)
                ...prev,
                fid: fidEntry.processingStart - fidEntry.startTime,}));
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
            }
          })
        })
        fidObserver.observe({entryTypes: ['first-input'] ,)})
        observers.push(fidObserver);
<<<<<<< HEAD
      } catch (error) {
        // eslint-disable-next-line no-console;
      }
    }
=======
      } catch (error) {// eslint-disable-next-line no-console;}}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
    // Measure Cumulative Layout Shift (CLS)
<<<<<<< HEAD
    if ('PerformanceObserver' in window) {try {let clsValue = 0;}
        const clsObserver = new PerformanceObserver(list => {)
=======
    if ('PerformanceObserver' in window) {
      try {
        let clsValue = 0;
<<<<<<< HEAD
<<<<<<< HEAD
        const clsObserver = const clsObserver = new PerformanceObserver();
          const entries = list.getEntries();
          entries.forEach()
=======
        const clsObserver = new PerformanceObserver(list => {;)
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (
              entry.entryType === 'layout-shift' &&
              'hadRecentInput' in entry &&)
              'value' in entry)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======
        const clsObserver = new PerformanceObserver(list => {;
>>>>>>> origin/main
          const entries = list.getEntries();
          entries.forEach(entry => {)
            if(entry.entryType === 'layout-shift' &&)
              'hadRecentInput' in entry &&
              'value' in entry;
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
            ) {
              const clsEntry = entry as LayoutShift;
              if (!clsEntry.hadRecentInput) 
                clsValue += clsEntry.value;
<<<<<<< HEAD
                setMetrics(prev => ( ...prev, cls: clsValue }));
=======
                setMetrics(prev => ({ ...prev, cls: clsValue ,)}));
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
              }
            }
          })
        })
        clsObserver.observe({entryTypes: ['layout-shift'] ,)})
        observers.push(clsObserver);
<<<<<<< HEAD
      } catch (error) {
        // eslint-disable-next-line no-console;
      }
    }
=======
      } catch (error) {// eslint-disable-next-line no-console;}}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
    // Measure Time to First Byte (TTFB)
<<<<<<< HEAD
    try {const navigationEntries = performance.getEntriesByType?.('navigation') || []}
      const navigationEntry = navigationEntries[0] as PerformanceNavigationTiming;
      const ttfb = navigationEntry;
=======
    try {
      const navigationEntries = performance.getEntriesByType?.('navigation') || [];
      const navigationEntry = navigationEntries[0] as PerformanceNavigationTiming;
<<<<<<< HEAD
<<<<<<< HEAD
      const ttfb = const ttfb = navigationEntry;
        ? navigationEntry.responseStart - navigationEntry.requestStart;
        : null;
      // Measure Memory Usage
      const memory = const memory = const memory =;
        (performance as Performance & { memory?: { usedJSHeapSize: number } });
          .memory?.usedJSHeapSize || null;
      setMetrics()
=======
      const ttfb = navigationEntry;
        ? navigationEntry.responseStart - navigationEntry.requestStart;
        : null;
      // Measure Memory Usage;
      const memory =
        (performance as Performance &  memory?:  usedJSHeapSize: number } })
=======
      const ttfb = navigationEntry
>>>>>>> origin/main
        ? navigationEntry.responseStart - navigationEntry.requestStart;
        : null;
      // Measure Memory Usage;
      const memory =
        (performance as Performance & { memory?: { usedJSHeapSize: number ,}})
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
          .memory?.usedJSHeapSize || null;
      setMetrics(prev => ({)
        ...prev,
        fcp,
<<<<<<< HEAD
        ttfb,)
        memory,)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
      }));
    } catch (error) {
      // eslint-disable-next-line no-console;
    }
    // Cleanup observers;
    return () => {
<<<<<<< HEAD
    observers.forEach()
=======
    observers.forEach(observer => )
        try )
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
          observer.disconnect()
  } catch (error) {
          // eslint-disable-next-line no-console;
        }
      })
=======
        ttfb,
        memory,}));
    } catch (error) {// eslint-disable-next-line no-console;}// Cleanup observers;
    return () => {observers.forEach(observer => {)
        try {observer.disconnect()}}catch (error) {// eslint-disable-next-line no-console;}})
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
    }
  }, []);
<<<<<<< HEAD
  const measureResourceTiming = useCallback(() => {if (typeof window === 'undefined' || !('performance' in window)) return;
=======
  const measureResourceTiming = useCallback(() => {;
    if (typeof window === 'undefined' || !('performance' in window)) return;
>>>>>>> origin/main
    const resources = performance.getEntriesByType('resource');
<<<<<<< HEAD
<<<<<<< HEAD
    const slowResources = const slowResources = const slowResources = resources.filter()
      (resource: PerformanceResourceTiming) => resource.duration > 1000
    ),
    if (slowResources.length > 0) {
      // eslint-disable-next-line no-console
      console.log()
        slowResources.map((r: PerformanceResourceTiming) => ();
        }));
=======
    const slowResources = resources.filter()
      (resource: PerformanceResourceTiming) => resource.duration > 1000;
    ),
    if (slowResources.length > 0) 
      // eslint-disable-next-line no-console;
      console.log()
        'Slow resources detected:',)
        slowResources.map((r: PerformanceResourceTiming) => (,
      name: r.name,
          duration: r.duration,)
          size: r.transferSize,)
        })
=======
    const slowResources = resources.filter()
      (resource: PerformanceResourceTiming) => resource.duration > 1000;,
    ),
    if (slowResources.length > 0) {
      // eslint-disable-next-line no-console;
      console.log('Slow resources detected:',)
        slowResources.map((r: PerformanceResourceTiming) => ({,
          name: r.name,
          duration: r.duration,
          size: r.transferSize,}))
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
      );
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    }
  }, []);
<<<<<<< HEAD
  const measureCoreWebVitals = useCallback(() => {if (typeof window === 'undefined') return;
    // Use web-vitals library if available;
    try {import('web-vitals')}
        .then(webVitals => {)
          const {onCLS, onFCP, onLCP, onTTFB}}= webVitals;
          if (onCLS) {onCLS((metric: { value: number ,)}) =>
              setMetrics(prev => ({...prev, cls: metric.value ,)}))
=======
  const measureCoreWebVitals = useCallback(() => {;
    if (typeof window === 'undefined') return;
    // Use web-vitals library if available;
    try {
      import('web-vitals')
<<<<<<< HEAD
        .then()
=======
        .then(webVitals => )
          const  onCLS, onFCP, onLCP, onTTFB } = webVitals;)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
          if (onCLS) {
<<<<<<< HEAD
            onCLS((metric:  value: number }) =>
              setMetrics(prev => ({ ...prev, cls: metric.value })
            );
          }
          if (onFCP) {
            onFCP((metric:  value: number }) =>
              setMetrics(prev => ({ ...prev, fcp: metric.value })
            );
          }
          if (onLCP) {
            onLCP((metric:  value: number }) =>
              setMetrics(prev => ({ ...prev, lcp: metric.value })
            );
          }
          if (onTTFB) {
            onTTFB((metric:  value: number }) =>
              setMetrics(prev => ({ ...prev, ttfb: metric.value })
            );
          }
        })
        .catch(() => {
          // web-vitals not available, continue without, it;
        })
    } catch {
      // web-vitals not available, continue without, it;
    }
  }, []);
  useEffect(() => {
    if (!enableRealTimeMonitoring) return;
    const cleanup = measureWebVitals();
    measureResourceTiming();
    measureCoreWebVitals();
<<<<<<< HEAD
    // Monitor performance every 5 seconds
    const interval = const interval = const interval = setInterval(() => {;
      measureResourceTiming();
=======
    // Monitor performance every 5 seconds;
    const interval = setInterval(() => 
      measureResourceTiming()
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
  }, 5000);
    return () => {
    if (cleanup) cleanup();
      clearInterval(interval)
  }
  }, [
=======
            onCLS((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, cls: metric.value }))
>>>>>>> origin/main
            );
          }
          if (onFCP) {onFCP((metric: { value: number ,)}) =>
              setMetrics(prev => ({...prev, fcp: metric.value ,)}))
            );
          }
          if (onLCP) {onLCP((metric: { value: number ,)}) =>
              setMetrics(prev => ({...prev, lcp: metric.value ,)}))
            );
          }
          if (onTTFB) {onTTFB((metric: { value: number ,)}) =>
              setMetrics(prev => ({...prev, ttfb: metric.value ,)}))
            );
          }
        })
        .catch(() => {// web-vitals not available, continue without it;})
    } catch {// web-vitals not available, continue without it;}}}, []);
  useEffect(() => {if (!enableRealTimeMonitoring) return;
    const cleanup = measureWebVitals();
    measureResourceTiming();
    measureCoreWebVitals();
    // Monitor performance every 5 seconds;
    const interval = setInterval(() => {
      measureResourceTiming()}, 5000);
    return () => {if (cleanup) cleanup();
      clearInterval(interval)}}, [
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
    enableRealTimeMonitoring,
    measureWebVitals,
    measureResourceTiming,
    measureCoreWebVitals,
  ]);
<<<<<<< HEAD
  useEffect(() => {
    if (onMetricsUpdate) 
      onMetricsUpdate(metrics)
  }
  }, [metrics, onMetricsUpdate]);
<<<<<<< HEAD
  // Performance recommendations
  const getPerformanceRecommendations = const getPerformanceRecommendations = const getPerformanceRecommendations = useCallback(() => {
    const recommendations: string[] = [],
    if (metrics.fcp && metrics.fcp > 1800) {
      recommendations.push()
      )
  }
    if (metrics.lcp && metrics.lcp > 2500) {
    recommendations.push()
      )
  }
    if (metrics.fid && metrics.fid > 100) {
    recommendations.push()
      )
  }
    if (metrics.cls && metrics.cls > 0.1) {
    recommendations.push()
      )
  }
    if (metrics.ttfb && metrics.ttfb > 600) {
    recommendations.push()
      );
  };
=======
  // Performance recommendations;
  const getPerformanceRecommendations = useCallback(() => {
    const recommendations: string[] = [],
    if (metrics.fcp && metrics.fcp > 1800) 
      recommendations.push()
        'First Contentful Paint is slow. Consider optimizing critical rendering path.')
  }
    if (metrics.lcp && metrics.lcp > 2500) {
    recommendations.push()
        'Largest Contentful Paint is slow. Optimize images and reduce render-blocking resources.')
  }
    if (metrics.fid && metrics.fid > 100) {
    recommendations.push()
        'First Input Delay is high. Reduce JavaScript execution time.')
  }
    if (metrics.cls && metrics.cls > 0.1) {
    recommendations.push()
        'Cumulative Layout Shift is high. Ensure stable layout and avoid dynamic content insertion.')
  }
    if (metrics.ttfb && metrics.ttfb > 600) {
    recommendations.push()
        'Time to First Byte is slow. Optimize server response time.')
  }
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    return recommendations;
  }, [metrics]);
  const _recommendations = getPerformanceRecommendations();
  if (process.env.NODE_ENV === 'development') {
<<<<<<< HEAD
    return ()
=======
  useEffect(() => {if (onMetricsUpdate) {
      onMetricsUpdate(metrics)}}, [metrics, onMetricsUpdate]);
  // Performance recommendations;
  const getPerformanceRecommendations = useCallback(() => {const recommendations: string[] = [],
    if (metrics.fcp && metrics.fcp > 1800) {
      recommendations.push('First Contentful Paint is slow. Consider optimizing critical rendering path.')
      )}if (metrics.lcp && metrics.lcp > 2500) {recommendations.push('Largest Contentful Paint is slow. Optimize images and reduce render-blocking resources.')
      )}if (metrics.fid && metrics.fid > 100) {recommendations.push('First Input Delay is high. Reduce JavaScript execution time.')
      )}if (metrics.cls && metrics.cls > 0.1) {recommendations.push('Cumulative Layout Shift is high. Ensure stable layout and avoid dynamic content insertion.')
      )}if (metrics.ttfb && metrics.ttfb > 600) {recommendations.push('Time to First Byte is slow. Optimize server response time.')
      )}return recommendations;
  }, [metrics]);
  const _recommendations = getPerformanceRecommendations();
  if (process.env.NODE_ENV === 'development') {return(<div className='fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border max-w-sm z-50'>)</div>
        <h3 className='font-semibold text-sm mb-2'>Performance Monitor</h3>
        <div className='text-xs space-y-1'>
<<<<<<< HEAD
          <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0),</div>}ms` : 'N/A'}</div>
          <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0),</div>}ms` : 'N/A'}</div>
          <div>FID: {metrics.fid ? `${metrics.fid.toFixed(0),</div>}ms` : 'N/A'}</div>
          <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A',</div>}</div>
          <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0),</div>}ms` : 'N/A'}</div>
          <div>Memory: {' ',</div>}{metrics.memory;
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
          <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}</div>
          <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}</div>
          <div>FID: {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}</div>
          <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
          <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}</div>
          <div></div>
            Memory:{' '},
    {metrics.memory
>>>>>>> origin/main
              ? `${(metrics.memory / 1024 / 1024).toFixed(1)}MB`
=======
    return (
      <div className='fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border max-w-sm z-50'>
        </div></div><h3 className='font-semibold text-sm mb-2'>Performance Monitor</h3></h3></h3>)
        <div className='text-xs space-y-1'>)</div></div><div>FCP: metrics.fcp ? `$metrics.fcp.toFixed(0)}ms` : 'N/A'}</div></div></div>
          <div>LCP: {metrics.lcp ? `$metrics.lcp.toFixed(0)}ms` : 'N/A'}</div></div></div>
          <div>FID: {metrics.fid ? `$metrics.fid.toFixed(0)}ms` : 'N/A'}</div></div></div>
          <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div></div></div>
          <div>TTFB: {metrics.ttfb ? `$metrics.ttfb.toFixed(0)}ms` : 'N/A'}</div></div></div>
          <div>
            Memory:{', '},
    {metrics.memory;
              ? `$(metrics.memory / 1024 / 1024).toFixed(1)}MB`
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
              : 'N/A'}
          </div></div></div>
        </div>
<<<<<<< HEAD
        {_recommendations.length > 0 && ()
              {_recommendations.map((rec, index) => ()
=======
        {_recommendations.length > 0 && (
          <div className='mt-2'>
<<<<<<< HEAD
            </div></div><h4 className='font-semibold text-xs text-red-600'>
              Recommendations:
            </h4>)
            <ul className='text-xs text-red-600'>)
              _recommendations.map((rec, index) => ()
                <li key=index}>• {rec}</li>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======
            <h4 className='font-semibold text-xs text-red-600'>
              Recommendations: </h4>,
            <ul className='text-xs text-red-600'>
              {_recommendations.map((rec, index) => (
                <li key={index}>• {rec}</li>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
  return null;
};

export default AdvancedPerformanceMonitor;
  </PerformanceMetrics>
  </PerformanceMonitorProps>
