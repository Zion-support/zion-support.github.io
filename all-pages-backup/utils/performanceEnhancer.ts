<<<<<<< HEAD
<<<<<<< HEAD:all-pages-backup/utils/performanceEnhancer.ts
export const debounce = <T extends (...args: unknown[]) => unknown>(;
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {;
  let timeout: NodeJS.Timeout
<<<<<<< HEAD:all-pages-backup/utils/performanceEnhancer.ts
export const throttle = <T extends (...args: unknown[]) => unknown>(;
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {;
  let inThrottle: boolean
<<<<<<< HEAD:all-pages-backup/utils/performanceEnhancer.ts
  private static instance: PerformanceMonitor
<<<<<<< HEAD:all-pages-backup/utils/performanceEnhancer.ts
  const trackCLS = () => {;
    let clsValue = 0
<<<<<<< HEAD:all-pages-backup/utils/performanceEnhancer.ts
    used: memory.usedJSHeapSize,
  total: memory.totalJSHeapSize,
  limit: memory.jsHeapSizeLimit,
  percentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
<<<<<<< HEAD:all-pages-backup/utils/performanceEnhancer.ts
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
  loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
  totalTime: navigation.loadEventEnd - navigation.fetchStart
    }
    paint: {
      firstPaint: paint.find((entry) => entry.name === 'first-paint')?.startTime || 0,
  firstContentfulPaint: paint.find((entry) => entry.name === 'first-contentful-paint')?.startTime || 0
=======
import React, { useRef, useEffect } from 'react'
'use client'
    if (process.env['NODE_ENV'] === 'development'
    if ('memory'
    if (typeof window === 'undefined' || !('PerformanceObserver'
    observer.observe({ "entryTypes": ['longtask');
  if (typeof window === 'undefined'
  const images = document.querySelectorAll('img[data-src]'
        img.src = img.dataset.src || ''
        img.classList.remove('lazy'
  if (typeof window === 'undefined'
    '/fonts/inter-var.woff2'
    '/css/critical.css'
    const link = document.createElement('link'
    link.rel = 'preload'
    link.as = resource.endsWith('.woff2') ? 'font' : 'style'
    if (resource.endsWith('.woff2'
      link.crossOrigin = 'anonymous'
  if (typeof window === 'undefined'
    document.documentElement.style.setProperty('--scroll-top'
    observer.observe({ "entryTypes": ['layout-shift');
        if (process.env['NODE_ENV'] === 'development'
          console.log('"LCP": ');
    observer.observe({ "entryTypes": ['largest-contentful-paint');
        if (process.env['NODE_ENV'] === 'development'
          console.log('"FID": ');
    observer.observe({ "entryTypes": ['first-input');
  window.addEventListener('scroll'
  if (typeof window === 'undefined' || !('memory'
  if (typeof window === 'undefined'
  const navigation = performance.getEntriesByType('navigation'}
  const paint = performance.getEntriesByType('paint'
      "firstPaint": paint.find((entry) => entry.name === 'first-paint',
  "firstContentfulPaint": paint.find((entry) => entry.name === 'first-contentful-paint',
  if (typeof window === 'undefined'
  if (metrics && (process.env['NODE_ENV'] === 'development';
    console.log('Performance "metrics": '
>>>>>>> origin/main
