    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    if (typeof PerformanceObserver === 'undefined') return;
    const observers: PerformanceObserver[] = [],
=======
  const measureWebVitals = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return
    if (typeof PerformanceObserver === 'undefined') return
  })
  const measureWebVitals = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return
    if (typeof PerformanceObserver === 'undefined') return
    const observers: PerformanceObserver[] = []
    // Measure First Contentful Paint (FCP)
    const fcpEntries = performance.getEntriesByName('first-contentful-paint') || []
    const fcp = fcpEntries.length > 0 ? fcpEntries[0].startTime : null;
    // Measure Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      } catch (error) {
        // eslint-disable-next-line no-console
      }
    }
    // Measure First Input Delay (FID)
          const entries = list.getEntries();
          entries.forEach(entry => {)
            if(entry.entryType === 'first-input' &&)
              'processingStart' in entry &&
              'startTime' in entry;
            ) {
              const fidEntry = entry as PerformanceEventTiming;
              setMetrics(prev => ({)
                ...prev,
      } catch (error) {
        // eslint-disable-next-line no-console
      }
    }
    // Measure Cumulative Layout Shift (CLS)
          const entries = list.getEntries();
          entries.forEach(entry => {)
            if(entry.entryType === 'layout-shift' &&)
              'hadRecentInput' in entry &&
              'value' in entry;
=======
        let clsValue = 0
        const clsObserver = new PerformanceObserver()
          const entries = list.getEntries()
          entries.forEach()
            ) {
              const clsEntry = entry as LayoutShift
              if (!clsEntry.hadRecentInput) {
              }
            }
          })
        })
      } catch (error) {
        // eslint-disable-next-line no-console
      }
    }
    // Measure Time to First Byte (TTFB)
        ? navigationEntry.responseStart - navigationEntry.requestStart;
        : null;
      // Measure Memory Usage;
      const memory =
          .memory?.usedJSHeapSize || null;
      setMetrics(prev => ({)
        ...prev,
        fcp,
        ttfb,
    const resources = performance.getEntriesByType('resource');
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
      );
    }
  }, []);
  const measureResourceTiming = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return
    const resources = performance.getEntriesByType('resource')
    const slowResources = resources.filter()
      (resource: PerformanceResourceTiming) => resource.duration > 1000
    ),
    if (slowResources.length > 0) {
      // eslint-disable-next-line no-console
  const measureCoreWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return
    // Use web-vitals library if available
    try {
      import('web-vitals')
        .then()
          if (onCLS) {
            onCLS((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, cls: metric.value }))
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
=======
            )
          }
          if (onFCP) {
            onFCP((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, fcp: metric.value }))
            )
          }
          if (onLCP) {
            onLCP((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, lcp: metric.value }))
          }
          if (onTTFB) {
            onTTFB((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, ttfb: metric.value }))
          }
        })
        .catch(() => {
          // web-vitals not available, continue without it
    enableRealTimeMonitoring,
    measureWebVitals,
    measureResourceTiming,
    measureCoreWebVitals,
          <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}</div>
          <div>FID: {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}</div>
          <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
          <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}</div>
          <div></div>
            Memory:{' '},
    {metrics.memory
              ? `${(metrics.memory / 1024 / 1024).toFixed(1)}MB`
              : 'N/A'}
          </div>
        </div>
        {_recommendations.length > 0 && (
          <div className='mt-2'>
            <ul className='text-xs text-red-600'>
              {_recommendations.map((rec, index) => (
                </ul><li key={index}>• {rec}</li>
                <li key={index}>• {rec}
              ))}
        )}
    )
  }
  return null;
};

export default AdvancedPerformanceMonitor;
  </PerformanceMetrics>
  </PerformanceMonitorProps>
</h4></li>
