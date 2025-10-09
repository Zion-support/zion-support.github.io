
// SEO performance monitoring
export const seoMonitoring = {
  // Track Core Web Vitals
  trackCoreWebVitals: () => {
    if (typeof window === 'undefined') return;
    
    // Track LCP
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });
    
    // Track FID
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        console.log('FID:', entry.processingStart - entry.startTime);
      });
    }).observe({ entryTypes: ['first-input'] });
    
    // Track CLS
    let clsValue = 0;
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
      console.log('CLS:', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });
  },
  
  // Track page load performance
  trackPageLoad: () => {
    if (typeof window === 'undefined') return;
    
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0];
      console.log('Page Load Time:', navigation.loadEventEnd - navigation.loadEventStart);
      console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
    });
  },
  
  // Track user engagement
  trackEngagement: () => {
    if (typeof window === 'undefined') return;
    
    let startTime = Date.now();
    let isActive = true;
    
    const trackActivity = () => {
      if (isActive) {
        const timeSpent = Date.now() - startTime;
        console.log('Time on page:', timeSpent);
      }
    };
    
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        isActive = false;
        trackActivity();
      } else {
        isActive = true;
        startTime = Date.now();
      }
    });
  }
};
