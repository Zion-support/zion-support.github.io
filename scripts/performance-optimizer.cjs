const fs = require('fs')
const path = require('path')

// Performance optimization script
function optimizePerformance() {
  console.log('Starting performance optimization...')
  
  // Create optimized CSS
  const cssOptimizations = `
/* Performance optimizations */
* {
  box-sizing: border-box;
}

img {
  max-width: 100%;
  height: auto;
}

/* Critical CSS for above-the-fold content */
.hero-section {
  contain: layout style paint;
}

/* Reduce layout thrashing */
.stable-layout {
  will-change: auto;
}

/* Optimize animations */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Optimize for mobile */
@media (max-width: 768px) {
  .mobile-optimized {
    transform: translateZ(0);
    backface-visibility: hidden;
  }
}
`

  // Write performance CSS
  const publicDir = path.join(__dirname, '..', 'public')
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }

  fs.writeFileSync(path.join(publicDir, 'performance.css'), cssOptimizations)
  
  // Create performance monitoring script
  const performanceScript = `
// Performance monitoring
if ('performance' in window) {
  window.addEventListener('load', () => {
    // Measure Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime)
        }
        if (entry.entryType === 'first-input') {
          console.log('FID:', entry.processingStart - entry.startTime)
        }
        if (entry.entryType === 'layout-shift') {
          console.log('CLS:', entry.value)
        }
      }
    })
    
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
  })
}

// Preload critical resources
const preloadResources = [
  '/fonts/inter.woff2',
  '/images/hero-bg.jpg',
  '/icons/sprite.svg'
]

preloadResources.forEach(resource => {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.href = resource
  link.as = resource.endsWith('.woff2') ? 'font' : resource.endsWith('.jpg') ? 'image' : 'image'
  if (resource.endsWith('.woff2')) {
    link.crossOrigin = 'anonymous'
  }
  document.head.appendChild(link)
})
`

  fs.writeFileSync(path.join(publicDir, 'performance.js'), performanceScript)
  
  console.log('Performance optimization completed')
}

optimizePerformance()