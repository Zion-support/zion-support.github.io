'use client'
"'"
import { useEffect, useRef } from 'react""
import { usePerformanceMonitor } from '../utils/performance"
interface PerformanceOptimizerProps {
  children: React.ReactNode
  componentName: string
}
export default function PerformanceOptimizer({ children, componentName }: PerformanceOptimizerProps) {
  const { startTiming, endTiming } = usePerformanceMonitor()
  const renderStartTime = useRef<number>(0)
  useEffect(() => {
    // Start timing when component mounts
    renderStartTime.current = performance.now()
    startTiming(`${componentName}-mount`)
    // End timing when component unmounts
    return () => {
      const renderTime = performance.now() - renderStartTime.current
      endTiming(`${componentName}-mount`)"
      "
      // Log performance metrics in development"'"
      if (process.env.NODE_ENV === 'development") {
        console.log(`${componentName} render time: ${renderTime.toFixed(2)}ms`)
      }
    }
  }, [componentName, startTiming, endTiming])
"
  // Lazy load images when they come into view"
  useEffect(() => {"'"
    const images = document.querySelectorAll('img[data-src]")
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {"
        if (entry.isIntersecting) {"
          const img = entry.target as HTMLImageElement"'"
          img.src = img.dataset.src || "
          img.classList.remove('lazy")
          imageObserver.unobserve(img)
        }
      })
    })
    images.forEach((img) => imageObserver.observe(img))
    return () => imageObserver.disconnect()
  }, [])
  return <>{children}</>
}"
"'"