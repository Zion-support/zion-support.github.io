import React, { useEffect, useState } from 'react'

interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  memoryUsage?: number
  connectionType?: string
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show in development or when explicitly enabled
    const isDev = process.env.NODE_ENV === 'development'
    const isEnabled = localStorage.getItem('perf-monitor') === 'true'
    
    if (!isDev && !isEnabled) return

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const paint = performance.getEntriesByType('paint')
      
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0
      const renderTime = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
      
      const memoryInfo = (performance as any).memory
      const connection = (navigator as any).connection
      
      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(renderTime),
        memoryUsage: memoryInfo ? Math.round(memoryInfo.usedJSHeapSize / 1024 / 1024) : undefined,
        connectionType: connection?.effectiveType
      })
    }

    // Wait for page to fully load
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
    }

    return () => {
      window.removeEventListener('load', measurePerformance)
    }
  }, [])

  // Toggle visibility with keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault()
        setIsVisible(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  if (!metrics || !isVisible) return null

  return (
    <div 
      style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        background: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '10px',
        borderRadius: '8px',
        fontSize: '12px',
        fontFamily: 'monospace',
        zIndex: 9999,
        minWidth: '200px'
      }}
    >
      <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Performance Metrics</div>
      <div>Load Time: {metrics.loadTime}ms</div>
      <div>Render Time: {metrics.renderTime}ms</div>
      {metrics.memoryUsage && <div>Memory: {metrics.memoryUsage}MB</div>}
      {metrics.connectionType && <div>Connection: {metrics.connectionType}</div>}
      <div style={{ marginTop: '5px', fontSize: '10px', opacity: 0.7 }}>
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  )
}

export default PerformanceMonitor