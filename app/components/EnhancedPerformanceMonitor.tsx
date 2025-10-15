

      interface PerformanceMetrics {},
      loadTime: number,
      firstContentfulPaint: number,
      largestContentfulPaint: number,
      firstInputDelay: number,
      cumulativeLayoutShift: number,
      timeToFirstByte: number,
      totalBlockingTime: number
interface PerformanceMonitorProps {},
      showInProduction?: boolean
      const EnhancedPerformanceMonitor: React.FC<PerformanceMonitorProps>  =  ({},)
      showInProduction = false 
}) => {},
      const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null),
        // Measure Core Web Vitals
const vitals: Partial<PerformanceMetrics> = {}
        // Get FCP
onFCP((metric: unknown) => {},
      vitals.firstContentfulPaint = metric.value
        })
        // Get LCP
onLCP((metric: unknown) => {},
      vitals.largestContentfulPaint = metric.value
        })
        // Get INP (replaces FID)
        onINP((metric: unknown) => {},
      vitals.firstInputDelay = metric.value
        })
        // Get CLS
onCLS((metric: unknown) => {},
      vitals.cumulativeLayoutShift = metric.value
        })
        // Get TTFB
onTTFB((metric: unknown) => {},
        // Measure additional metrics
const navigation  = performance.getEntriesByType('navigation'
        const paintEntries  = performance.getEntriesByType('paint'
        const fcp  = paintEntries.find(entry => entry.name === 'first-contentful-paint'
const longTasks  = performance.getEntriesByType('longtask'
            custom_map: {}'metric_1': finalMetrics.firstContentfulPaint"metric_2': finalMetrics.largestContentfulPaint"metric_3': finalMetrics.firstInputDelay"metric_4': finalMetrics.cumulativeLayoutShift"metric_5'
if (document.readyState === 'complete'
      window.addEventListener('load'
}window.removeEventListener('load'
if ((process.env.NODE_ENV !== 'development'
      if (value <= thresholds.good) return 'text-green-500'
      if (value <= thresholds.needsImprovement) return 'text-yellow-500'
      return '
      if (value <= thresholds.good) return 'Good'
      if (value <= thresholds.needsImprovement) return 'Needs Improvement'
      return '
      if (value <= thresholds.good) return 'text-green-500'
      if (value <= thresholds.needsImprovement) return 'text-yellow-500'
      return '
      if (value <= thresholds.good) return 'Good'
      if (value <= thresholds.needsImprovement) return 'Needs Improvement'
      return '
        <div  className ={`w-2 h-2 rounded-full ${isLoading ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'