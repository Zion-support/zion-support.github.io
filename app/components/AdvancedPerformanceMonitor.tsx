<<<<<<< HEAD
import React from 'react'
import React, { useEffect, useState } from 'react';
interface PerformanceMetrics { loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  totalBlockingTime: number; }
const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    totalBlockingTime: 0,
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  useEffect(() => {
    // Only run in development mode
    if (process.env.NODE_ENV !== 'development') {
      return;
    }
    const measurePerformance = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = window.performance.getEntriesByType('paint');
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              setMetrics(prev => ({
                ...prev,
                largestContentfulPaint: Math.round(entry.startTime)
              }));
            }
            if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
              setMetrics(prev => ({
                ...prev,
                cumulativeLayoutShift: prev.cumulativeLayoutShift + (entry as any).value
              }));
            }
          });
        });
        observer.observe({ entryTypes: ['largest-contentful-paint', 'layout-shift'] });
        const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
        const firstContentfulPaint = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
        // Memory usage (if available)
        const memoryUsage = (window as any).performance?.memory?.usedJSHeapSize || 0;
        // Network latency
        const networkLatency = navigation ? navigation.responseEnd - navigation.requestStart : 0;
        // Calculate Total Blocking Time
        const longTasks = window.performance.getEntriesByType('longtask');
        const totalBlockingTime = longTasks.reduce((total, task) => {
          return total + (task.duration - 50); // 50ms is the threshold
        }, 0);
        setMetrics({
          loadTime: Math.round(loadTime),
          renderTime: Math.round(firstContentfulPaint),
          memoryUsage: Math.round(memoryUsage / 1024 / 1024), // Convert to MB
          networkLatency: Math.round(networkLatency),
          firstContentfulPaint: Math.round(firstContentfulPaint),
          largestContentfulPaint: 0, // Will be updated by observer
          cumulativeLayoutShift: 0, // Will be updated by observer
          firstInputDelay: 0, // Would need specific measurement
          totalBlockingTime: Math.round(totalBlockingTime),
        });
        return () => observer.disconnect();
      }
    };
    // Measure after initial load
    const timer = setTimeout(measurePerformance, 1000);
    return () => clearTimeout(timer);
  }, []);
  // Toggle visibility with keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        setIsVisible(!isVisible);
      }
      if (event.ctrlKey && event.shiftKey && event.key === 'R') { setIsRecording(!isRecording); }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isVisible, isRecording]);
  // Don't render in production
  if (process.env.NODE_ENV === 'production') { return null; }
  if (!isVisible) { return null; }
  const getScoreColor = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };
=======
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

>>>>>>> origin/main
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
<<<<<<< HEAD
  );
}
    <div className="fixed bottom-4 right-4 bg-slate-800/95 backdrop-blur-sm border border-slate-700 rounded-lg p-4 shadow-lg z-50 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-white">Performance Monitor</h3>
        <div className="flex space-x-2">
          <button
            onClick={ () => setIsRecording(!isRecording) }
            className={`text-xs px-2 py-1 rounded ${
              isRecording ? 'bg-red-600 text-white' : 'bg-slate-600 text-gray-300'
            }`}
          >
            { isRecording ? 'Recording' : 'Record' }
          </button>
          <button
            onClick={ () => setIsVisible(false) }
            className="text-gray-400 hover:text-white text-xs"
          >
            ✕
          </button>
        </div>
      </div>
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-400">Load Time:</span>
          <span className={`font-mono ${getScoreColor(metrics.loadTime, { good: 1000, needsImprovement: 3000 })}`}>
            {metrics.loadTime}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">FCP:</span>
          <span className={`font-mono ${getScoreColor(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 })}`}>
            {metrics.firstContentfulPaint}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">LCP:</span>
          <span className={`font-mono ${getScoreColor(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 })}`}>
            {metrics.largestContentfulPaint}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">CLS:</span>
          <span className={`font-mono ${getScoreColor(metrics.cumulativeLayoutShift, { good: 0.1, needsImprovement: 0.25 })}`}>
            { metrics.cumulativeLayoutShift.toFixed(3) }
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">TBT:</span>
          <span className={`font-mono ${getScoreColor(metrics.totalBlockingTime, { good: 200, needsImprovement: 600 })}`}>
            {metrics.totalBlockingTime}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Memory:</span>
          <span className={`font-mono ${getScoreColor(metrics.memoryUsage, { good: 50, needsImprovement: 100 })}`}>
            {metrics.memoryUsage}MB
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Network:</span>
          <span className={`font-mono ${getScoreColor(metrics.networkLatency, { good: 500, needsImprovement: 1000 })}`}>
            {metrics.networkLatency}ms
          </span>
        </div>
      </div>
      <div className="mt-3 pt-2 border-t border-slate-700 text-xs text-gray-500">
        <div>Ctrl+Shift+P: Toggle</div>
        <div>Ctrl+Shift+R: Record</div>
      </div>
=======
  )
}

export default AdvancedPerformanceMonitor
=======
  return (
    <div>
      <h2>AdvancedPerformanceMonitor</h2>
      <p>This component is under construction.</p>
>>>>>>> origin/main
    </div>
  );
};

export default AdvancedPerformanceMonitor;
<<<<<<< HEAD
          This component is under development.</p></div></div>
  )}
export default AdvancedPerformanceMonitor
=======
>>>>>>> origin/main
>>>>>>> origin/main
