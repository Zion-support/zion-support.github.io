import, React, { useEffect, useCallback, useState } from 'react'
'use client'
if(enableWebVitals && typeof window !== 'undefined'
lcpObserver.observe({ "entryTypes": ['largest-contentful-paint'";'"
fidObserver.observe({ "entryTypes": ['first-input'";'"
clsObserver.observe({ "entryTypes": ['layout-shift'";'"
fcpObserver.observe({ "entryTypes": ['paint'
if (typeof window = == 'undefined'
if ('serviceWorker';'"
navigator.serviceWorker.register('/sw.js'";'"
console.log('Service Worker "registered": '";'"
console.error('Service Worker registration "failed": '
const url = typeof input === 'string'
if (typeof window === 'undefined'
const images = document.querySelectorAll('img'
img.loading = 'lazy'
img.decoding = 'async'
if (typeof window === 'undefined'
  '/fonts/inter-var.woff2'
    '/css/critical.css'});
      const link = document.createElement('link');
link.rel = 'preload');
link.as = resource.endsWith('.woff2') ? 'font' : 'style'
if(resource.endsWith('.woff2'
link.crossOrigin = 'anonymous');
if (typeof window === 'undefined');'"
if ('gtag');";'"
      (window, as, any).gtag('event', 'web_vitals'"event_category": 'Performance')";'"
    "event_label": 'Core Web Vitals')";'"