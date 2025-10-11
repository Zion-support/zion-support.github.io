'use client'
import React, { useEffect } from 'react'

const EnhancedPerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Performance optimization logic
    const optimizePerformance = () => {
      // Preload critical resources
      if (typeof window !== 'undefined') {
        // Preload critical CSS
        const criticalCSS = document.createElement('link')
        criticalCSS.rel = 'preload'
        criticalCSS.href = '/critical.css'
        criticalCSS.as = 'style'
        document.head.appendChild(criticalCSS)

        // Preload critical fonts
        const criticalFont = document.createElement('link')
        criticalFont.rel = 'preload'
        criticalFont.href = '/fonts/inter.woff2'
        criticalFont.as = 'font'
        criticalFont.type = 'font/woff2'
        criticalFont.crossOrigin = 'anonymous'
        document.head.appendChild(criticalFont)

        // Optimize images
        const images = document.querySelectorAll('img[data-src]')
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement
              img.src = img.dataset.src || ''
              img.classList.remove('lazy')
              imageObserver.unobserve(img)
            }
          })
        })

        images.forEach(img => imageObserver.observe(img))

        // Optimize third-party scripts
        const optimizeThirdPartyScripts = () => {
          // Defer non-critical scripts
          const scripts = document.querySelectorAll('script[data-defer]')
          scripts.forEach(script => {
            script.setAttribute('defer', 'true')
          })
        }

        optimizeThirdPartyScripts()
      }
    }

    optimizePerformance()
  }, [])

  return null
}

export default EnhancedPerformanceOptimizer