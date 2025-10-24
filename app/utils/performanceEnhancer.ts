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
    const observer = new PerformanceObserver((list) => {
  // Cleanup observers
cleanup() {
this.observers.forEach(observer = > observer.disconnect())
this.observers = []
}
}
// React hook for performance monitoring
export const usePerformanceMonitor = (</>)
const renderStartTime = useRef<number>(0)
const monitor = PerformanceMonitor.getInstance()
  useEffect(() => {
renderStartTime.current = performance.now()
return(</number>)
    <>)
      ) => {
const renderTime = performance.now() - renderStartTime.current
monitor.trackRender(componentName,renderTime)
  })
images.forEach((img) => imageObserver.observe(img)    )
}
}px`)
    ticking = false}
  const requestTick = (
return)
if (!ticking) {
requestAnimationFrame(updateScrollPosition)
      ticking = true
) => {
$3
}
  }
  // Track Core Web Vitals
  // Track Core Web Vitals
const trackCLS = (
$3)
) => {
$3
}
    const observer = new PerformanceObserver((list) => {
for (const entry of list.getEntries()) {; const layoutEntry = entry as LayoutShiftEntry; if(!layoutEntry.hadRecentInput) {
clsEntries.push(entry)
    return () => {
observer.disconnect()
return, clsValue
}
  }
  const trackLCP = (
  // Start tracking
const cleanupCLS = trackCLS()
  const cleanupLCP = trackLCP()
  const cleanupFID = trackFID()
  return () => {
cleanupCLS()
    cleanupLCP()
    cleanupFID(    )
}
}
lazyLoadImages()
  // Preload critical resources
preloadCriticalResources()
  // Optimize scroll performance