// Analytics utilities for tracking user interactions and performance
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

export interface PageViewEvent {
  page_title: string;
  page_location: string;
  page_path?: string;
  custom_parameters?: Record<string, any>;
}

class Analytics {
  private isInitialized = false;
  private queue: AnalyticsEvent[] = [];

  /**
   * Initialize analytics
   */
  init(): void {
    if (typeof window === 'undefined') return;

    // Initialize Google Analytics 4 (replace with your tracking ID)
    if (typeof window !== 'undefined' && !(window as any).gtag) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(script);

      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).gtag = function() {
        (window as any).dataLayer.push(arguments);
      };
      (window as any).gtag('js', new Date());
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }

    this.isInitialized = true;
    this.processQueue();
  }

  /**
   * Track custom event
   */
  trackEvent(event: AnalyticsEvent): void {
    if (!this.isInitialized) {
      this.queue.push(event);
      return;
    }

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        ...event.custom_parameters,
      });
    }

    // Also log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics] Event:', event);
    }
  }

  /**
   * Track page view
   */
  trackPageView(event: PageViewEvent): void {
    if (!this.isInitialized) {
      this.init();
    }

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: event.page_title,
        page_location: event.page_location,
        page_path: event.page_path,
        ...event.custom_parameters,
      });
    }

    // Also log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics] Page View:', event);
    }
  }

  /**
   * Track user engagement
   */
  trackEngagement(action: string, details?: Record<string, any>): void {
    this.trackEvent({
      action,
      category: 'engagement',
      custom_parameters: details,
    });
  }

  /**
   * Track performance metrics
   */
  trackPerformance(metric: string, value: number, unit: string = 'ms'): void {
    this.trackEvent({
      action: 'performance_metric',
      category: 'performance',
      label: metric,
      value: Math.round(value),
      custom_parameters: {
        unit,
        timestamp: Date.now(),
      },
    });
  }

  /**
   * Track error
   */
  trackError(error: Error, context?: string): void {
    this.trackEvent({
      action: 'error',
      category: 'error',
      label: context || 'unknown',
      custom_parameters: {
        error_message: error.message,
        error_stack: error.stack,
        error_name: error.name,
        url: window.location.href,
        user_agent: navigator.userAgent,
      },
    });
  }

  /**
   * Track conversion
   */
  trackConversion(conversionType: string, value?: number, currency: string = 'USD'): void {
    this.trackEvent({
      action: 'conversion',
      category: 'conversion',
      label: conversionType,
      value,
      custom_parameters: {
        currency,
        timestamp: Date.now(),
      },
    });
  }

  /**
   * Track scroll depth
   */
  trackScrollDepth(depth: number): void {
    this.trackEvent({
      action: 'scroll',
      category: 'engagement',
      label: 'scroll_depth',
      value: depth,
      custom_parameters: {
        depth_percentage: depth,
      },
    });
  }

  /**
   * Track time on page
   */
  trackTimeOnPage(timeInSeconds: number): void {
    this.trackEvent({
      action: 'time_on_page',
      category: 'engagement',
      value: timeInSeconds,
      custom_parameters: {
        time_seconds: timeInSeconds,
      },
    });
  }

  /**
   * Process queued events
   */
  private processQueue(): void {
    while (this.queue.length > 0) {
      const event = this.queue.shift();
      if (event) {
        this.trackEvent(event);
      }
    }
  }

  /**
   * Set user properties
   */
  setUserProperties(properties: Record<string, any>): void {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        user_properties: properties,
      });
    }
  }

  /**
   * Set custom dimensions
   */
  setCustomDimension(index: number, value: string): void {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        [`custom_map.dimension${index}`]: value,
      });
    }
  }
}

// Create singleton instance
export const analytics = new Analytics();

// React hook for analytics
export const useAnalytics = () => {
  const trackEvent = (event: AnalyticsEvent) => analytics.trackEvent(event);
  const trackPageView = (event: PageViewEvent) => analytics.trackPageView(event);
  const trackEngagement = (action: string, details?: Record<string, any>) => 
    analytics.trackEngagement(action, details);
  const trackPerformance = (metric: string, value: number, unit?: string) => 
    analytics.trackPerformance(metric, value, unit);
  const trackError = (error: Error, context?: string) => 
    analytics.trackError(error, context);
  const trackConversion = (conversionType: string, value?: number, currency?: string) => 
    analytics.trackConversion(conversionType, value, currency);

  return {
    trackEvent,
    trackPageView,
    trackEngagement,
    trackPerformance,
    trackError,
    trackConversion,
  };
};

// Initialize analytics on import
if (typeof window !== 'undefined') {
  analytics.init();
}