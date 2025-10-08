// Advanced analytics and monitoring
export const analyticsUtils = {
  // Performance monitoring
  measurePerformance: () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0];
      const paint = performance.getEntriesByType('paint');

      const metrics = {
        domContentLoaded:
          navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint:
          paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
      };

      return metrics;
    }
    return null;
  },

  // Error tracking
  trackError: (error, context = {}) => {
    const errorData = {
      message: error.message,
      stack: error.stack,
      url: window.location.href,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      context,
    };

    // Send to analytics service
    //     console.error('Error tracked:', errorData);

    // You can integrate with services like Sentry, LogRocket, etc.
    return errorData;
  },

  // User behavior tracking
  trackUserInteraction: (action, element, metadata = {}) => {
    const interactionData = {
      action,
      element: element.tagName?.toLowerCase() || 'unknown',
      id: element.id || null,
      className: element.className || null,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      metadata,
    };

    //     console.log('User interaction tracked:', interactionData);
    return interactionData;
  },

  // Core Web Vitals
  measureCoreWebVitals: () => {
    if (typeof window !== 'undefined' && 'web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        //           getCLS(console.log);
        //           getFID(console.log);
        //           getFCP(console.log);
        //           getLCP(console.log);
        //           getTTFB(console.log);
      });
    }
  },
};
