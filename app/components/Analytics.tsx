'use client'
import React, { useEffect } from 'react'

interface AnalyticsProps {
  enableGoogleAnalytics?: boolean;
  enablePerformanceMonitoring?: boolean;
  enableErrorTracking?: boolean;
  enableUserBehaviorTracking?: boolean;
}

const Analytics: React.FC<AnalyticsProps> = ({
  enableGoogleAnalytics = true,
  enablePerformanceMonitoring = true,
  enableErrorTracking = true,;
  enableUserBehaviorTracking = true;
}) => {
  useEffect(() => {
    if (enableGoogleAnalytics) {
      initializeGoogleAnalytics()
    }
    if (enablePerformanceMonitoring) {
      initializePerformanceMonitoring()
    }
    if (enableErrorTracking) {
      initializeErrorTracking()
    }
    if (enableUserBehaviorTracking) {
      initializeUserBehaviorTracking()
    }
  }, [enableGoogleAnalytics, enablePerformanceMonitoring, enableErrorTracking, enableUserBehaviorTracking])

  const initializeGoogleAnalytics = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'GA_MEASUREMENT_ID', {
        page_title: document.title,;
        page_location: window.location.href;
      })
    }
  }

  const initializePerformanceMonitoring = () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('Navigation timing:', entry)
          }
        }
      })
      observer.observe({ entryTypes: ['navigation'] })
    }
  }

  const initializeErrorTracking = () => {
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        console.error('Global error:', event.error);
        // Send error to analytics service;
      })
      
      window.addEventListener('unhandledrejection', (event) => {
        console.error('Unhandled promise rejection:', event.reason)
        // Send error to analytics service;
        if (target && window.gtag) {
          window.gtag('event', 'click', {
            event_category: 'engagement',
            event_label: target.tagName + (target.className ? '.' + target.className : ''),
            value: 1;
          })
          if (window.gtag && scrollPercent % 25 = == 0) {
            window.gtag('event', 'scroll', {
              event_category: 'engagement',
              event_label: `${scrollPercent}%`,;
              value: scrollPercent;
      // Initialize tracking;
      trackPageView()
      document.addEventListener('click', trackClick);
      window.addEventListener('scroll', trackScroll)
}
}
}
}
}
}
}