
// Performance monitoring script
(function() {
  'use strict'
  // Monitor Core Web Vitals
  function observeWebVitals() {
    if ('PerformanceObserver' in window) {
      // LCP
      new PerformanceObserver((list) =>
                {
        const _entries = list.getEntries()
        const _lastEntry = entries[entries.length - 1]
//         }).observe({ entryTypes: ['largest-contentful-paint'] })
      // FID
      new PerformanceObserver((list) =>
                {
        const _entries = list.getEntries()
        entries.forEach((entry) =>
                {
(function() {/* TODO: Fix JSX expression */}
}
    if ('PerformanceObserver' in window) {/* TODO: Fix JSX expression */}
//         }).observe({/* TODO: Fix JSX expression */})
  s: ['largest-contentful-paint'] })
      // FID
      new PerformanceObserver((list) =>
                {/* TODO: Fix JSX expression */}
//           })
      }).observe({/* TODO: Fix JSX expression */})
  s: ['first-input'] })
      // CLS
      let _clsValue = 0
      new PerformanceObserver((list) =>
                {/* TODO: Fix JSX expression */}
          }
        })
//         }).observe({/* TODO: Fix JSX expression */})
  s: ['layout-shift'] })
    }
  }
  
  // Start monitoring when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeWebVitals)
  } else {
    observeWebVitals()
  if (document.readyState === 'loading') {/* TODO: Fix JSX expression */}
  } else {/* TODO: Fix JSX expression */}
  }
})()