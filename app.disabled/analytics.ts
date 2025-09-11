// Analytics and monitoring utilities
declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: Record<string, any>) => void;
  }
}

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, properties ?? {});
  }
};

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('config', 'GA_MEASUREMENT_ID', { page_path: url });
  }
};

// Performance monitoring
export const measurePerformance = (name: string, startTime: number) => {
  if (typeof window !== 'undefined' && window.performance) {
    const endTime = window.performance.now();
    const duration = endTime - startTime;

    // Log performance metrics
    console.log(`Performance: ${name} took ${duration.toFixed(2)}ms`);
    // Send to analytics if available
    trackEvent('performance_metric', {
      metric_name: name,
      duration,
      timestamp: Date.now(),
    });
  }
};

// Error tracking
export const trackError = (error: Error, context?: string) => {
  console.error('Error tracked:', error, context);
  trackEvent('error_occurred', {
    error_message: error.message,
    error_stack: error.stack,
    context,
    timestamp: Date.now(),
  });
};

// User engagement tracking
export const trackEngagement = (action: string, element?: string) => {
  trackEvent('user_engagement', {
    action,
    element,
    timestamp: Date.now(),
  });
};

// Service interaction tracking
export const trackServiceView = (serviceName: string) => {
  trackEvent('service_viewed', {
    service_name: serviceName,
    timestamp: Date.now(),
  });
};

// Contact form tracking
export const trackContactAttempt = (method: string) => {
  trackEvent('contact_attempt', {
    method,
    timestamp: Date.now(),
  });
};