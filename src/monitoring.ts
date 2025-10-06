// Performance monitoring setup

// Mock analytics object
const analytics = {
  trackPageView: (path: string) => {
    console.log('Page view:', path);
  },
  trackPerformance: (name: string, value: number, unit: string = 'ms') => {
    console.log(`Performance: ${name} = ${value}${unit}`);
  },
  trackEvent: (event: string, category: string, action: string, label?: string, value?: number) => {
    console.log('Event tracked:', event, category, action, label, value);
  },
  reportWebVitals: (metrics: any) => {
    console.log('Web Vitals:', metrics);
  }
};

// Mock error handler
const errorHandler = {
  captureException: (error: Error) => {
    console.error('Error captured:', error);
  },
  track: (event: string, category: string, action: string, label?: string, value?: number) => {
    console.log('Analytics:', event, category, action, label, value);
  },
  reportError: (error: Error, context?: string) => {
    console.error('Error reported:', error, context);
  }
};

// Mock performance optimizer
const performanceOptimizer = {
  measurePageLoad: () => {
    return Promise.resolve({
      loadTime: 0,
      renderTime: 0,
      domContentLoaded: 0,
      firstPaint: 0,
      firstContentfulPaint: 0
    });
  },
  optimizeImages: () => {
    console.log('Images optimized');
  },
  preloadCriticalResources: () => {
    console.log('Critical resources preloaded');
  }
};

// Export the monitoring utilities
export { analytics, errorHandler, performanceOptimizer };