<<<<<<< HEAD
'use client';
import {useEffect}}from 'react';

<<<<<<< HEAD
export const usePerformanceMonitor = () => {useEffect(() => {
=======
export const usePerformanceMonitor = () => {
  useEffect(() => {;
>>>>>>> origin/main
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals;
=======
'use client'
import { useEffect } from 'react'
export const usePerformanceMonitor = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return
    // Monitor Core Web Vitals
>>>>>>> origin/main
    const monitorWebVitals = () => {
<<<<<<< HEAD
      // This is a simplified version - in production you'd use the web-vitals library;
      if ('performance' in window) {
=======
      // This is a simplified version - in production you'd use the web-vitals library
<<<<<<< HEAD
      if ('performance' in window) {;
>>>>>>> origin/main
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          console.log('Page load time:', loadTime);}}
=======
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart
          console.log('Page load time:', loadTime)
        }
      }
>>>>>>> origin/main
    }

<<<<<<< HEAD
    // Run monitoring after page load;
    if (document.readyState === 'complete') {monitorWebVitals();}else {window.addEventListener('load', monitorWebVitals);}}return () => {window.removeEventListener('load', monitorWebVitals);}}, []);
}
=======
    // Run monitoring after page load
    if (document.readyState === 'complete') {
      monitorWebVitals()
    } else {
      window.addEventListener('load', monitorWebVitals)
    }

    return () => {
      window.removeEventListener('load', monitorWebVitals)
    }
  }, [])
}
>>>>>>> origin/main
