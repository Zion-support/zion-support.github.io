'use client'
import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null
  memoryUsage: number | null
  loadTime: number | null
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memoryUsage: null,
    loadTime: null
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return

        })
      })

        console.warn('Failed to load web-vitals:', error);
      }

      // Measure memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory
        setMetrics(prev => ({ ...prev, memoryUsage: memory.usedJSHeapSize / 1024 / 1024 }))
      }

      // Measure load time
      window.addEventListener('load', () => {
        const loadTime = performance.now()
        setMetrics(prev => ({ ...prev, loadTime }))
      })
    }

    measurePerformance()
  }, [])

  if (!isVisible) return null

      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="mt-2 px-2 py-1 bg-red-600 text-white rounded text-xs"
      >
        Close
      </button>
    </div>
  )
}

export default AdvancedPerformanceMonitor
  return (
    <div className="performance-monitor">
      <h3>Performance Score: {performanceScore || 'Calculating...'}</h3>
    </div>
  );
};

export default AdvancedPerformanceMonitor;
