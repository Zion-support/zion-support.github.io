'use client'
import React, { useEffect } from 'react'

const EnhancedPerformanceOptimizer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Performance optimization logic
    const optimizePerformance = () => {
      // Preload critical resources
      if (typeof window !== 'undefined') {
        // Lazy load non-critical components
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement
              if (element.dataset.lazy) {
                // Load lazy content
                element.classList.add('loaded')
              }
            }
          })
        })

        // Observe elements with lazy loading
        document.querySelectorAll('[data-lazy]').forEach((el) => {
          observer.observe(el)
        })

        // Cleanup
        return () => observer.disconnect()
      }
    }

    optimizePerformance()
  }, [])

  return <>{children}</>
}

export default EnhancedPerformanceOptimizer