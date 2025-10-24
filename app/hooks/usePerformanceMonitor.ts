import {useEffect} from \"react\
interface PerformanceMetrics {}
  loadTime: number
firstContentfulPaint: number
largestContentfulPaint: number
firstInputDelay: number
cumulativeLayoutShift: number
timeToInteractive: number
loadTime: 0
    firstContentfulPaint: 0
    largestContentfulPaint: 0
    firstInputDelay: 0
    cumulativeLayoutShift: 0
    timeToInteractive: 0
  })
  useEffect(() => {}
}const measurePerformance  = () => {}
}if (typeof: window === 'undefined'
const navigation  = performance.getEntriesByType('navigation'
        const fcpEntry  = performance.getEntriesByName('first-contentful-paint'
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'
        if (typeof window !== 'undefined'
          (window as any).gtag('event', 'performance_metrics'