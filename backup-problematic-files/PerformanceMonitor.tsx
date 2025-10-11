<<<<<<< HEAD
'use client';

import React, { useEffect } from 'react';
import { measureWebVitals } from '../../src/utils/performanceMonitor';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Initialize performance monitoring
    measureWebVitals();

    // Track page load performance
    const trackPageLoad = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
          
          console.log('Page Load Performance:', {
            loadTime,
            domContentLoaded,
            totalTime: navigation.loadEventEnd - navigation.fetchStart
          });
        }
=======
<<<<<<< HEAD
'use client';
import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor performance metrics
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('Performance Entry:', entry);
=======
'use client'
import React, { useEffect, useState } from 'react'

interface PerformanceMetrics {
  loadTime: number
  domContentLoaded: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)

  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window === 'undefined' || !('performance' in window)) return

      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (!perfData) return

      const newMetrics: PerformanceMetrics = {
        loadTime: perfData.loadEventEnd - perfData.fetchStart,
        domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        cumulativeLayoutShift: 0
>>>>>>> origin/main
>>>>>>> origin/main
      }
    });

<<<<<<< HEAD
    // Track performance after page load
    if (document.readyState === 'complete') {
      trackPageLoad();
    } else {
      window.addEventListener('load', trackPageLoad);
    }

    return () => {
      window.removeEventListener('load', trackPageLoad);
=======
<<<<<<< HEAD
    observer.observe({ entryTypes: ['measure', 'navigation'] });

    return () => {
      observer.disconnect();
>>>>>>> origin/main
    };
  }, []);

  return null;
};
<<<<<<< HEAD

export default PerformanceMonitor;
=======
=======
      // Get FCP if available
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0]
      if (fcpEntry) {
        newMetrics.firstContentfulPaint = fcpEntry.startTime
      }

      // Get LCP if available
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint')
      if (lcpEntries.length > 0) {
        newMetrics.largestContentfulPaint = lcpEntries[lcpEntries.length - 1].startTime
      }

      // Get CLS if available
      const clsEntries = performance.getEntriesByType('layout-shift')
      if (clsEntries.length > 0) {
        newMetrics.cumulativeLayoutShift = clsEntries.reduce((sum, entry) => {
          return sum + (entry as any).value
        }, 0)
      }

      setMetrics(newMetrics)

      // Log metrics in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metrics:', newMetrics)
      }
    }

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
    }

    return () => {
      window.removeEventListener('load', measurePerformance)
    }
  }, [])

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="font-bold mb-2">Performance Metrics</div>
      {metrics ? (
        <div className="space-y-1">
          <div>Load Time: {metrics.loadTime.toFixed(2)}ms</div>
          <div>DOM Ready: {metrics.domContentLoaded.toFixed(2)}ms</div>
          <div>FCP: {metrics.firstContentfulPaint.toFixed(2)}ms</div>
          <div>LCP: {metrics.largestContentfulPaint.toFixed(2)}ms</div>
          <div>CLS: {metrics.cumulativeLayoutShift.toFixed(4)}</div>
        </div>
      ) : (
        <div>Measuring...</div>
      )}
    </div>
  )
}
>>>>>>> origin/main

export default PerformanceMonitor
>>>>>>> origin/main
