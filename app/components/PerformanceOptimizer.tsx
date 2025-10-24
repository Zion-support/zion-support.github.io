<<<<<<< HEAD
}

const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
  const [isOptimized, setIsOptimized] = useState(false)

  useEffect(() => {
    const measurePerformance = () => {
      const startTime = performance.now()
      
      // Measure load time
      const loadTime = performance.timing?.loadEventEnd 
        ? performance.timing.loadEventEnd - performance.timing.navigationStart 
        : 0

      // Measure render time
      const renderTime = performance.now() - startTime

      // Check memory usage (if available)
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0

      // Check connection speed
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
      const isSlowConnection = connection ? connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g' : false

      setMetrics({
        loadTime,
        renderTime,
        memoryUsage,
        isSlowConnection
      })

      // Auto-optimize based on metrics
      if (loadTime > 3000 || renderTime > 100 || isSlowConnection) {
        setIsOptimized(true)
        applyOptimizations()
      }
    }

    const applyOptimizations = () => {
      // Lazy load images
      const images = document.querySelectorAll('img[data-src]')
      images.forEach(img => {
        const imageElement = img as HTMLImageElement
        if (imageElement.dataset.src) {
          imageElement.src = imageElement.dataset.src
          imageElement.removeAttribute('data-src')
        }
      })

      // Preload critical resources
      const criticalResources = [
        '/fonts/inter.woff2',
        '/css/critical.css'
      ]

      criticalResources.forEach(resource => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = resource
        link.as = resource.endsWith('.woff2') ? 'font' : 'style'
        document.head.appendChild(link)
      })
    }

    // Measure performance after component mount
    const timer = setTimeout(measurePerformance, 100)

    return () => clearTimeout(timer)
  }, [])

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="mb-2 font-bold">Performance Monitor</div>
      {metrics && (
        <div className="space-y-1">
          <div>Load: {metrics.loadTime.toFixed(0)}ms</div>
          <div>Render: {metrics.renderTime.toFixed(0)}ms</div>
          <div>Memory: {(metrics.memoryUsage / 1024 / 1024).toFixed(1)}MB</div>
          <div>Slow: {metrics.isSlowConnection ? 'Yes' : 'No'}</div>
          {isOptimized && <div className="text-green-400">Optimized</div>}
        </div>
      )}
    </div>
  )
}

export default PerformanceOptimizer
=======
import React, { useState, useEffect } from 'react';

const PerformanceOptimizer = () => {
  return (
    <div>
      <h1>PerformanceOptimizer</h1>
      <p>This component is under construction.</p>
    </div>
  );
};

export default PerformanceOptimizer;
>>>>>>> cursor/fix-errors-and-merge-to-main-e66e
