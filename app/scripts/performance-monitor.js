// Performance monitoring script
(function() {
  'use strict';

  // Web Vitals monitoring
  function sendToAnalytics(metric) {
    if (typeof gtag !== 'undefined') {
      gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
      });
    }
  }

  // Load web-vitals library
  if (typeof window !== 'undefined' && window.performance) {
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
      onCLS(sendToAnalytics);
      onFCP(sendToAnalytics);
      onLCP(sendToAnalytics);
      onTTFB(sendToAnalytics);
      onINP(sendToAnalytics);
    }).catch(() => {
      // Silently fail if web-vitals can't be loaded
    });
  }

  // Monitor page load performance
  function measurePageLoad() {
    if (window.performance) {
      const navigation = window.performance.getEntriesByType('navigation')[0];
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
        
        // Send to analytics
        if (typeof gtag !== 'undefined') {
          gtag('event', 'page_load_time', {
            event_category: 'Performance',
            value: Math.round(loadTime),
          });
          
          gtag('event', 'dom_content_loaded', {
            event_category: 'Performance',
            value: Math.round(domContentLoaded),
          });
        }
      }
    }
  }

  // Measure after page load
  if (document.readyState === 'complete') {
    measurePageLoad();
  } else {
    window.addEventListener('load', measurePageLoad);
  }

  // Monitor Core Web Vitals
  function observeWebVitals() {
    // First Contentful Paint
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            sendToAnalytics({
              name: 'FCP',
              value: entry.startTime,
              id: 'fcp-' + Date.now(),
              delta: entry.startTime,
              navigationType: 'navigate'
            });
          }
        }
      });
      
      try {
        observer.observe({ entryTypes: ['paint'] });
      } catch (e) {
        // Silently fail if observation fails
      }
    }
  }

  // Start monitoring
  observeWebVitals();
})();