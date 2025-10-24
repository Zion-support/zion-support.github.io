'use client';
    }
  }
  // Get performance metrics
getMetrics() {
return Object.fromEntries(this.metrics    )
}
  // Clear metrics
clearMetrics() {
this.metrics.clear(  )
}
  // Monitor long tasks"
startLongTaskMonitoring() {"
if (typeof window === 'undefined' || !('PerformanceObserver" in, window)) {
return }
    const
;export const usePerformanceMonitor = (</>);
const renderStartTime = useRef<number>(0);
const
;      ) => {;
const
;  // Track Core Web Vitals;
const
;for (const entry of list.getEntries()) {; const layoutEntry = entry as LayoutShiftEntry; if(!layoutEntry.hadRecentInput) {
clsEntries.push(entry)
    return () => {
observer.disconnect()
return, clsValue
}
  }
  const
;  // Start tracking;
const cleanupCLS = trackCLS();
const cleanupLCP = trackLCP();
const
;  // Optimize scroll performance}