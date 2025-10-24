'use client'

import { useEffect } from 'react'
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Track Core Web Vitals
    getCLS((metric) => {
      console.log('CLS:', metric)
      // Send to analytics service
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          metric_name: 'CLS',
          metric_value: Math.round(metric.value * 1000) / 1000,
          metric_rating: metric.rating,
        })
      }
    })

    getFID((metric) => {
      console.log('FID:', metric)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          metric_name: 'FID',
          metric_value: Math.round(metric.value * 1000) / 1000,
          metric_rating: metric.rating,
        })
      }
    })

    getFCP((metric) => {
      console.log('FCP:', metric)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          metric_name: 'FCP',
          metric_value: Math.round(metric.value * 1000) / 1000,
          metric_rating: metric.rating,
        })
      }
    })

    getLCP((metric) => {
      console.log('LCP:', metric)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          metric_name: 'LCP',
          metric_value: Math.round(metric.value * 1000) / 1000,
          metric_rating: metric.rating,
        })
      }
    })

    getTTFB((metric) => {
      console.log('TTFB:', metric)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          metric_name: 'TTFB',
          metric_value: Math.round(metric.value * 1000) / 1000,
          metric_rating: metric.rating,
        })
      }
    })
  }, [])

  return null
}

export default PerformanceMonitor
