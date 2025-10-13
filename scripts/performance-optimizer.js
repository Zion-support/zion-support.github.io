import React from 'react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const optimizePerformance = () => {
  console.log('🚀 Starting performance optimization...')
  // Create optimized CSS
  const cssOptimizations = `
/* Performance optimizations */
* {
  box-sizing: border-box
}

html {
  scroll-behavior: smooth
}

body {
  font-display: swap
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
}

/* Critical CSS for above-the-fold content */
.hero-section {
  contain: layout style paint
}

/* Optimize animations */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important
    animation-iteration-count: 1 !important
    transition-duration: 0.01ms !important
  }
}

/* Optimize images */
img {
  loading: lazy
  decoding: async
}

/* Optimize fonts */
@font-face {
  font-family: 'Inter'
  font-display: swap
  src: url('/fonts/inter-var.woff2') format('woff2-variations')
  font-weight: 100 900
}
`
  // Write optimized CSS
  const cssPath = path.join(__dirname, '..', 'public', 'performance.css')
  fs.writeFileSync(cssPath, cssOptimizations)
  console.log('✅ Performance CSS created')
  // Create preload hints
  const preloadHints = `
<!-- Preload critical resources -->
<link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/css/critical.css" as="style">
<link rel="preload" href="/assets/js/vendor.js" as="script">
<link rel="preload" href="/assets/js/main.js" as="script">

<!-- DNS prefetch for external resources -->
<link rel="dns-prefetch" href="//fonts.googleapis.com">
<link rel="dns-prefetch" href="//fonts.gstatic.com">
<link rel="dns-prefetch" href="//www.google-analytics.com">

<!-- Preconnect to external domains -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
`
const preloadPath = path.join(__dirname, '..', 'public', 'preload-hints.html')
  fs.writeFileSync(preloadPath, preloadHints)
  console.log('✅ Preload hints created')
  // Create service worker for caching
  const serviceWorkerContent = `
const CACHE_NAME = 'zion-tech-group-v2'
const urlsToCache = [
  '/',
  '/static/css/main.css',
  '/static/js/main.js',
  '/manifest.json'
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  )
})
`
const swPath = path.join(__dirname, '..', 'public', 'sw.js')
  fs.writeFileSync(swPath, serviceWorkerContent)
  console.log('✅ Service worker updated')

  console.log('🎉 Performance optimization completed!')
}

optimizePerformance()