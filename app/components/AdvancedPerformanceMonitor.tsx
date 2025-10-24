'use client';
interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null
  memory: number | null


interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void
  enableRealTimeMonitoring?: boolean


const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memory: null,
  })

  const measureWebVitals = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return
    if (typeof PerformanceObserver === 'undefined') return

    const observers: PerformanceObserver[] = []

    // Measure First Contentful Paint (FCP)
    }

    // Measure First Input Delay (FID)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          if (entry.processingStart && entry.startTime) {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }))
          
        })
      })
      fidObserver.observe({ entryTypes: ['first-input'] })
      observers.push(fidObserver)
    } catch (error) {
      console.warn('FID measurement failed:', error)
    

    // Measure Cumulative Layout Shift (CLS)
    try {
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
            setMetrics(prev => ({ ...prev, cls: clsValue }))
          
        })
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })
      observers.push(clsObserver)
    } catch (error) {
      console.warn('CLS measurement failed:', error)
    

    // Measure Time to First Byte (TTFB)
    try {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigationEntry) {
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart
        setMetrics(prev => ({ ...prev, ttfb }))
      
    } catch (error) {
      console.warn('TTFB measurement failed:', error)
    

    // Measure Memory Usage
    try {
      if ('memory' in performance) {
        const memory = (performance as any).memory
        setMetrics(prev => ({ ...prev, memory: memory.usedJSHeapSize }))
      
    } catch (error) {
      console.warn('Memory measurement failed:', error)
    

    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [])

  useEffect(() => {
    if (!enableRealTimeMonitoring) return

    const cleanup = measureWebVitals()

    // Update metrics every 5 seconds
    const interval = setInterval(() => {
      measureWebVitals()
    }, 5000)

    return () => {
      if (cleanup) cleanup();
      clearInterval(interval);
    };

  useEffect(() => {
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics)
    
  }, [metrics, onMetricsUpdate])

