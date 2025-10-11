<<<<<<< HEAD
'use client'
import React, { useEffect, useState } from 'react'

interface PerformanceMetrics {
  loadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  firstInputDelay: number
  cumulativeLayoutShift: number
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const paintEntries = performance.getEntriesByType('paint')
      
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
      const largestContentfulPaint = paintEntries.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0

      // Measure Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'measure') {
            console.log('Performance measure:', entry.name, entry.duration)
          }
        }
      })

      observer.observe({ entryTypes: ['measure'] })

      // Measure First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const firstInputDelay = entry.processingStart - entry.startTime
          console.log('First Input Delay:', firstInputDelay)
        }
      })

      fidObserver.observe({ entryTypes: ['first-input'] })

      // Measure Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            console.log('Cumulative Layout Shift:', (entry as any).value)
          }
        }
      })

      clsObserver.observe({ entryTypes: ['layout-shift'] })

      setMetrics({
        loadTime,
        firstContentfulPaint,
        largestContentfulPaint,
        firstInputDelay: 0, // Will be updated by observer
        cumulativeLayoutShift: 0 // Will be updated by observer
      })
    }

    // Wait for page to load
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
    }

    return () => {
      // Cleanup
      window.removeEventListener('load', measurePerformance)
    }
  }, [])

  // Log performance metrics in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && metrics) {
      console.log('Performance Metrics:', metrics)
    }
  }, [metrics])

  return null
}

export default PerformanceMonitor
=======
'use client';
import React, { useEffect } from 'react';

interface PerformanceMonitorProps {
  children: React.ReactNode;
  enableMonitoring?: boolean;
  enableReporting?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  children,
  enableMonitoring = true,
  enableReporting = true
}) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && enableMonitoring) {
      // Performance monitoring
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            console.log('Navigation Performance:', {
              domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
              firstByte: navEntry.responseStart - navEntry.requestStart
            });
          }
        });
      });

      observer.observe({ entryTypes: ['navigation', 'paint'] });

      // Web Vitals monitoring
      if (enableReporting) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        });
      }

      return () => observer.disconnect();
    }
  }, [enableMonitoring, enableReporting]);

  return <>{children}</>;
};

export default PerformanceMonitor;
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
