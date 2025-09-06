import { useEffect, useCallback } from 'react'
    if (typeof window = = 'undefined' || !('performance'
    const navigation = performance.getEntriesByType('navigation'
    const paintEntries = performance.getEntriesByType('paint'
      firstContentfulPaint: paintEntries.find(entry => entry.name = = 'first-contentful-paint'
    if ('PerformanceObserver'
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'
      fidObserver.observe({ entryTypes: ['first-input'
      clsObserver.observe({ entryTypes: ['layout-shift'
      console.log('Performance Metrics: any
      if (process.env.NODE_ENV = = 'production'
        //