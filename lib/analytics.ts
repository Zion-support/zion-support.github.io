// Enhanced analytics and monitoring utilities

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

class AnalyticsManager {
  private isInitialized = false;
  private queue: AnalyticsEvent[] = [];

  constructor() {
    this.initialize();
  }

  private initialize() {
    if (typeof window === 'undefined') return;
    
    // Initialize Google Analytics if available
    if (typeof gtag !== 'undefined') {
      this.isInitialized = true;
      this.processQueue();
    }

    // Track page views
    this.trackPageView();
    
    // Track performance metrics
    this.trackPerformanceMetrics();
    
    // Track user interactions
    this.trackUserInteractions();
  }

  private processQueue() {
    while (this.queue.length > 0) {
      const event = this.queue.shift();
      if (event) {
        this.sendEvent(event);
      }
    }
  }

  private sendEvent(event: AnalyticsEvent) {
    if (!this.isInitialized) {
      this.queue.push(event);
      return;
    }

    if (typeof gtag !== 'undefined') {
      gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        ...event.custom_parameters,
      });
    }

    // Send to custom analytics endpoint
    this.sendToCustomEndpoint(event);
  }

  private async sendToCustomEndpoint(event: AnalyticsEvent) {
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...event,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          userAgent: navigator.userAgent,
          referrer: document.referrer,
        }),
      });
    } catch (error) {
      console.warn('Failed to send analytics event:', error);
    }
  }

  // Public methods
  trackEvent(action: string, category: string, label?: string, value?: number, customParams?: Record<string, any>) {
    this.sendEvent({
      action,
      category,
      label,
      value,
      custom_parameters: customParams,
    });
  }

  trackPageView(page?: string) {
    const pageName = page || window.location.pathname;
    
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: pageName,
      });
    }

    this.trackEvent('page_view', 'navigation', pageName);
  }

  trackPerformanceMetrics() {
    if (typeof window === 'undefined') return;

    // Wait for performance metrics to be available
    setTimeout(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      const metrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.navigationStart,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        firstInputDelay: 0,
        cumulativeLayoutShift: 0,
        timeToInteractive: 0,
      };

      // Track Core Web Vitals
      this.trackCoreWebVitals(metrics);
      
      // Track custom performance metrics
      this.trackEvent('performance_metrics', 'performance', undefined, undefined, metrics);
    }, 2000);
  }

  private trackCoreWebVitals(metrics: PerformanceMetrics) {
    // Track LCP
    if (metrics.largestContentfulPaint > 0) {
      this.trackEvent('largest_contentful_paint', 'web_vitals', undefined, metrics.largestContentfulPaint);
    }

    // Track FID
    if (metrics.firstInputDelay > 0) {
      this.trackEvent('first_input_delay', 'web_vitals', undefined, metrics.firstInputDelay);
    }

    // Track CLS
    if (metrics.cumulativeLayoutShift > 0) {
      this.trackEvent('cumulative_layout_shift', 'web_vitals', undefined, metrics.cumulativeLayoutShift);
    }
  }

  private trackUserInteractions() {
    // Track clicks on important elements
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      
      // Track button clicks
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        const button = target.closest('button') as HTMLButtonElement;
        this.trackEvent('button_click', 'interaction', button.textContent?.trim());
      }
      
      // Track link clicks
      if (target.tagName === 'A' || target.closest('a')) {
        const link = target.closest('a') as HTMLAnchorElement;
        this.trackEvent('link_click', 'interaction', link.href);
      }
      
      // Track form submissions
      if (target.tagName === 'FORM' || target.closest('form')) {
        const form = target.closest('form') as HTMLFormElement;
        this.trackEvent('form_submit', 'interaction', form.action || 'unknown');
      }
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
      const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        
        // Track at 25%, 50%, 75%, and 100%
        if ([25, 50, 75, 100].includes(scrollDepth)) {
          this.trackEvent('scroll_depth', 'engagement', `${scrollDepth}%`);
        }
      }
    });
  }

  // Track conversion events
  trackConversion(conversionType: string, value?: number) {
    this.trackEvent('conversion', 'business', conversionType, value);
  }

  // Track errors
  trackError(error: Error, context?: string) {
    this.trackEvent('error', 'technical', context || 'unknown', undefined, {
      error_message: error.message,
      error_stack: error.stack,
      error_name: error.name,
    });
  }
}

// Initialize analytics
export const analytics = new AnalyticsManager();

// Error tracking
export const trackError = (error: Error, context?: string) => {
  analytics.trackError(error, context);
  
  // Also send to external error tracking service
  if (typeof window !== 'undefined' && (window as any).Sentry) {
    (window as any).Sentry.captureException(error, {
      tags: {
        context: context || 'unknown',
      },
    });
  }
};

// Performance monitoring
export const trackPerformance = (metricName: string, value: number, context?: string) => {
  analytics.trackEvent('performance_metric', 'performance', `${metricName}_${context || 'default'}`, value);
};

// User engagement tracking
export const trackEngagement = (action: string, element?: string) => {
  analytics.trackEvent(action, 'engagement', element);
};

// Business metrics tracking
export const trackBusinessMetric = (metric: string, value: number, context?: string) => {
  analytics.trackEvent('business_metric', 'business', `${metric}_${context || 'default'}`, value);
};

// Export analytics instance for direct use
export default analytics;