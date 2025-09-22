// Analytics and performance monitoring
// Minimal ambient declarations for GA and PerformanceEntry extensions used below
declare const gtag: ((...args: any[]) => void) | undefined;

export const trackPageView = (url: string) => {
  if (typeof window === 'undefined') return

  // Google Analytics 4 tracking
  if (typeof gtag !== 'undefined') {
    gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
      page_path: url,
    })
  }

  // Custom analytics
  // Page view tracked
}

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window === 'undefined') return

  // Google Analytics 4 event tracking
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, parameters)
  }

  // Custom event tracking
  // Event tracked
}

export const trackPerformance = () => {
  if (typeof window === 'undefined' || !('performance' in window)) return

  window.addEventListener('load', () => {
    const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    
    const metrics = {
      // Core Web Vitals
      LCP: 0, // Will be updated by LCP observer
      FID: 0, // Will be updated by FID observer
      CLS: 0, // Will be updated by CLS observer
      
      // Other metrics
      domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
      loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
      totalTime: perfData.loadEventEnd - perfData.fetchStart,
      firstByte: perfData.responseStart - perfData.fetchStart,
      domInteractive: perfData.domInteractive - perfData.fetchStart,
    }

    // Track performance metrics
    trackEvent('performance_metrics', metrics)
  })
}

export const trackCoreWebVitals = () => {
  if (typeof window === 'undefined') return

  // Track Largest Contentful Paint (LCP)
  const lcpObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries()
    const lastEntry = entries[entries.length - 1]
    trackEvent('web_vital', {
      name: 'LCP',
      value: lastEntry.startTime,
    })
  })
  lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

  // Track First Input Delay (FID)
  const fidObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries()
    entries.forEach((entry) => {
      const anyEntry = entry as any
      trackEvent('web_vital', {
        name: 'FID',
        value: (anyEntry.processingStart ?? 0) - entry.startTime,
      })
    })
  })
  fidObserver.observe({ entryTypes: ['first-input'] })

  // Track Cumulative Layout Shift (CLS)
  let clsValue = 0
  const clsObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries()
    entries.forEach((entry) => {
      const anyEntry = entry as any
      if (!anyEntry.hadRecentInput) {
        clsValue += anyEntry.value ?? 0
      }
    })
    trackEvent('web_vital', {
      name: 'CLS',
      value: clsValue,
    })
  })
  clsObserver.observe({ entryTypes: ['layout-shift'] })
}