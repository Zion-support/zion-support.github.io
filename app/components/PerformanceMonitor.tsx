'use client'
import { useEffect } from 'react'

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Track Core Web Vitals
    const trackWebVitals = () => {
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => {
            console.log('CLS:', metric)
            // Send to analytics
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                metric_name: 'CLS',
                metric_value: metric.value,
                metric_id: metric.id,
              })
            }
          })

          getFID((metric) => {
            console.log('FID:', metric)
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                metric_name: 'FID',
                metric_value: metric.value,
                metric_id: metric.id,
              })
            }
          })

          getFCP((metric) => {
            console.log('FCP:', metric)
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                metric_name: 'FCP',
                metric_value: metric.value,
                metric_id: metric.id,
              })
            }
          })

          getLCP((metric) => {
            console.log('LCP:', metric)
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                metric_name: 'LCP',
                metric_value: metric.value,
                metric_id: metric.id,
              })
            }
          })

          getTTFB((metric) => {
            console.log('TTFB:', metric)
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                metric_name: 'TTFB',
                metric_value: metric.value,
                metric_id: metric.id,
              })
            }
          })
        })
      }
    }

    // Track page load performance
    const trackPageLoad = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.fetchStart
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart
          const firstByte = navigation.responseStart - navigation.fetchStart

          console.log('Page Load Time:', loadTime + 'ms')
          console.log('DOM Content Loaded:', domContentLoaded + 'ms')
          console.log('Time to First Byte:', firstByte + 'ms')

          // Send to analytics
          if (window.gtag) {
            window.gtag('event', 'page_performance', {
              load_time: Math.round(loadTime),
              dom_content_loaded: Math.round(domContentLoaded),
              time_to_first_byte: Math.round(firstByte),
            })
          }
        }
      }
    }

    // Track resource loading performance
    const trackResourcePerformance = () => {
      if ('performance' in window) {
        const resources = performance.getEntriesByType('resource')
        
        resources.forEach((resource) => {
          const loadTime = resource.responseEnd - resource.startTime
          
          // Track slow resources
          if (loadTime > 1000) {
            console.warn('Slow resource detected:', resource.name, loadTime + 'ms')
            
            if (window.gtag) {
              window.gtag('event', 'slow_resource', {
                resource_name: resource.name,
                load_time: Math.round(loadTime),
                resource_type: resource.initiatorType,
              })
            }
          }
        })
      }
    }

    // Initialize tracking
    trackWebVitals()
    trackPageLoad()

    // Track resource performance after a delay to allow resources to load
    setTimeout(trackResourcePerformance, 2000)

    // Track user interactions
    const trackInteractions = () => {
      let interactionCount = 0
      let lastInteractionTime = Date.now()

      const trackInteraction = (event: Event) => {
        interactionCount++
        lastInteractionTime = Date.now()

        if (window.gtag) {
          window.gtag('event', 'user_interaction', {
            interaction_type: event.type,
            interaction_count: interactionCount,
          })
        }
      }

      // Track various user interactions
      document.addEventListener('click', trackInteraction)
      document.addEventListener('scroll', trackInteraction)
      document.addEventListener('keydown', trackInteraction)

      return () => {
        document.removeEventListener('click', trackInteraction)
        document.removeEventListener('scroll', trackInteraction)
        document.removeEventListener('keydown', trackInteraction)
      }
    }

    const cleanup = trackInteractions()

    return cleanup
  }, [])

  return null
}

export default PerformanceMonitor