    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals;
'use client'
import { useEffect } from 'react'
export const usePerformanceMonitor = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return
    // Monitor Core Web Vitals
    const monitorWebVitals = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          console.log('Page load time:', loadTime);}}
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart
          if (process.env.NODE_ENV === 'development') {
            console.log('Page load time:', loadTime)
          }
        }
      }
    }

