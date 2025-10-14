import React from 'react';

const AdvancedPerformanceMonitor = () => {
<<<<<<< HEAD
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: null,
    firstContentfulPaint: null,
    largestContentfulPaint: null,
    firstInputDelay: null,
    cumulativeLayoutShift: null,
    timeToFirstByte: null,
    memoryUsage: null,
    domContentLoaded: null,
    totalBlockingTime: null
  })

  const [isVisible, setIsVisible] = useState(false)
  const [isRecording, setIsRecording] = useState(false)

  useEffect(() => {
    const measureWebVitals = () => {
      // Measure Core Web Vitals
      if ('PerformanceObserver' in window) {
        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const fcp = entries.find(entry => entry.name === 'first-contentful-paint')
        if (fcp) {
          setMetrics(prev => ({ ...prev, firstContentfulPaint: fcp.startTime }))
          reportMetric('FCP', fcp.startTime)
        }
        })
        fcpObserver.observe({ entryTypes: ['paint'] })

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          setMetrics(prev => ({ ...prev, largestContentfulPaint: lastEntry.startTime }))
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const fid = entries[0]
          setMetrics(prev => ({ ...prev, firstInputDelay: fid.processingStart - fid.startTime }))
        })
        fidObserver.observe({ entryTypes: ['first-input'] })

        // Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
            }
          }
          setMetrics(prev => ({ ...prev, cumulativeLayoutShift: clsValue }))
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })
      }
    }

    const measureMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory
        setMetrics(prev => ({ 
          ...prev, 
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
        }))
      }
    }

    const measureLoadTime = () => {
      if (performance.timing) {
        const timing = performance.timing
        const loadTime = timing.loadEventEnd - timing.navigationStart
        const domContentLoaded = timing.domContentLoadedEventEnd - timing.navigationStart
        const timeToFirstByte = timing.responseStart - timing.navigationStart
        
        setMetrics(prev => ({
          ...prev,
          loadTime,
          domContentLoaded,
          timeToFirstByte
        }))
      }
    }

    // Report metrics to analytics
    const reportMetric = (name: string, value: number) => {
      // Analytics reporting would go here
      console.log(`Performance Metric - ${name}: ${value}`)
    }

    measureWebVitals()
    measureMemory()
    measureLoadTime()

    // Set up keyboard shortcut to toggle visibility
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  const startRecording = () => {
    setIsRecording(true)
    // Start performance recording logic here
  }

  const stopRecording = () => {
    setIsRecording(false)
    // Stop performance recording logic here
  }

  const exportMetrics = () => {
    const dataStr = JSON.stringify(metrics, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'performance-metrics.json'
    link.click()
    URL.revokeObjectURL(url)
  }

  if (!isVisible) return null

  return (
    <div className="fixed top-4 right-4 bg-black/90 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className="text-cyan-400">
            {metrics.loadTime ? `${metrics.loadTime.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className="text-green-400">
            {metrics.firstContentfulPaint ? `${metrics.firstContentfulPaint.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className="text-yellow-400">
            {metrics.largestContentfulPaint ? `${metrics.largestContentfulPaint.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>FID:</span>
          <span className="text-orange-400">
            {metrics.firstInputDelay ? `${metrics.firstInputDelay.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className="text-red-400">
            {metrics.cumulativeLayoutShift ? metrics.cumulativeLayoutShift.toFixed(4) : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Memory:</span>
          <span className="text-purple-400">
            {metrics.memoryUsage ? `${metrics.memoryUsage.toFixed(2)}MB` : 'N/A'}
          </span>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={isRecording ? stopRecording : startRecording}
          className={`px-3 py-1 rounded text-xs ${
            isRecording 
              ? 'bg-red-600 hover:bg-red-700' 
              : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {isRecording ? 'Stop' : 'Record'}
        </button>
        
        <button
          onClick={exportMetrics}
          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs"
        >
          Export
        </button>
      </div>

      <div className="mt-2 text-xs text-gray-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  )
}

export default AdvancedPerformanceMonitor
=======
  return (
    <div>
      <h2>AdvancedPerformanceMonitor</h2>
      <p>This component is under construction.</p>
    </div>
  );
};

export default AdvancedPerformanceMonitor;
>>>>>>> origin/main
