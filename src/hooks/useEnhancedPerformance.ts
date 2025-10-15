export default useEnhancedPerformance

  component?: string
  trackErrors?: boolean
  trackPerformance?: boolean
  trackAnalytics?: boolean
    trackAnalytics = true
  const mountTimeRef = useRef<number>(0)
const renderCountRef = useRef<number>(0);
    mountTimeRef.current = performance.now()
    renderCountRef.current = 0
      analytics.trackCustomEvent