
// Performance monitoring script
(function() {
  'use strict';
  
  // Monitor Core Web Vitals
  function observeWebVitals() {
    if ('PerformanceObserver' in window) {
      // LCP
      new PerformanceObserver((list) => {
        const _entries = list.getEntries();
        const _lastEntry = entries[entries.length - 1];
//         }).observe({ entryTypes: ['largest-contentful-paint'] });
      
      // FID
      new PerformanceObserver((list) => {
        const _entries = list.getEntries();
        entries.forEach((entry) => {
//           });
      }).observe({ entryTypes: ['first-input'] });
      
      // CLS
      let _clsValue = 0;
      new PerformanceObserver((list) => {
        const _entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
//         }).observe({ entryTypes: ['layout-shift'] });
    }
  }
  
  // Start monitoring when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeWebVitals);
  } else {
    observeWebVitals();
  }
})();
