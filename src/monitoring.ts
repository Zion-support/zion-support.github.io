// Performance monitoring setup

// Simple analytics object
const analytics = {
  trackPageView: (path: string) => {
    console.log('Page view:', path);
  },
  track: (event: string, category: string, action: string, label?: string, value?: number) => {
    console.log('Analytics:', event, category, action, label, value);
  }
};

// Simple error handler
const errorHandler = {
  reportError: (error: Error, context?: string) => {
    console.error('Error reported:', error, context);
  }
};

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  // Track page load
  analytics.trackPageView(window.location.pathname);
  
  // Monitor long tasks if PerformanceObserver is available
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.duration > 50) {
          analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
        }
      });
    });
    observer.observe({ entryTypes: ['longtask'] });
  }
}

export { analytics, errorHandler };