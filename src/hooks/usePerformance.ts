  loadTime: number
  domContentLoaded: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
  firstInputDelay: number
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
  const [isMonitoring, setIsMonitoring] = useState(false)
    if